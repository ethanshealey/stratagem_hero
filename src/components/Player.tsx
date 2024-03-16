import getArrow from '@/helpers/getArrow';
import getStratagem from '@/helpers/getStratagem';
import mapKey from '@/helpers/mapKey';
import sleep from '@/helpers/sleep';
import { useKeyDown } from '@/helpers/useKeyDown'
import Stratagem from '@/type/Stratagem';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react'
import 'animate.css';
import getRandomStratagemByCategory from '@/helpers/getRandomStratagemByCategory';
import getRandomStratagem from '@/helpers/getRandomStratagem';

type PlayerType = {
    mode: 'practice' | 'category' | 'classic'
}

const START_TIMER = 5

const Player = ({ mode }: PlayerType) => {

    const [ start, setStart ] = useState<boolean>(false)
    const [ beginTimer, setBeginTimer ] = useState<number>(START_TIMER)
    const [ queue, setQueue ] = useState<Stratagem[]>([])
    const [ currentArrow, setCurrentArrow ] = useState<string>()
    const [ currentCorrectCount, setCurrentCorrectCount ] = useState<number>(0)
    const [ failed, setFailed ] = useState<boolean>(false)
    const [ succeded, setSucceded ] = useState<boolean>(false) 
    const { category, stratagem_name } = useParams<{ category: string, stratagem_name: string }>()

    useKeyDown((key: string) => {
        const mappedKey = mapKey(key)
        if(mappedKey === currentArrow) {
            setCurrentCorrectCount(c => c+1)
        }
        else {
            fail()
            setCurrentCorrectCount(0)
        }
    }, ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"])

    useEffect(() => {
        if(currentCorrectCount < queue[0]?.code.length) {
            setCurrentArrow((_: any) => queue[0]?.code[currentCorrectCount].toString())
        }
        else {
            success()

            if(mode === 'category') {
                const newQueue = [ ...queue ]
                newQueue.shift()
                const newStrategem: any = getRandomStratagemByCategory(category.replaceAll("%20", " "))
                newQueue.push(newStrategem)
                
                setQueue((_:any) => [ ...newQueue ])
            }
            else if(mode === "classic") {
                const newQueue = [ ...queue ]
                newQueue.shift()
                const newStrategem: any = getRandomStratagem()
                newQueue.push(newStrategem)
                
                setQueue((_:any) => [ ...newQueue ])
            }

            setCurrentCorrectCount(0)
        }
    }, [currentCorrectCount])

    useEffect(() => {
        if (!beginTimer) {
            setStart(true)
            return;
        }
    
        const intervalId = setInterval(() => {
            setBeginTimer(beginTimer - 1);
        }, 1000);
    
        return () => clearInterval(intervalId);
    }, [beginTimer]);

    useEffect(() => {
        setCurrentArrow(queue[0]?.code[0].toString())
    }, [queue])
    
    useEffect(() => {
        if(mode === "practice") {
            const strat = getStratagem(stratagem_name)
            setQueue((prev: any) => [ ...prev, strat ])
        }
        else if(mode === "category") {
            const strats: any[] = []
            for(let i = 0; i < 5; i++)
                strats.push(getRandomStratagemByCategory(category.replaceAll("%20", " ")))
            setQueue((_: any) => [ ...strats ])
        }
        else if(mode === "classic") {
            const strats: any[] = []
            for(let i = 0; i < 5; i++)
                strats.push(getRandomStratagem())
            setQueue((_: any) => [ ...strats ])
        }
    }, [])

    const fail = async () => {
        setFailed((_: any) => true)
        await sleep(1000)
        setFailed((_: any) => false)
    }

    const success = async () => {
        setSucceded((_: any) => true)
        await sleep(200)
        setSucceded((_: any) => false)
    }
      
    return (
        <div>
            { start ? 
                <div id="player">
                    <div id="stratagem-queue">
                        {
                            queue.slice(0, 5).map((stratagem, idx) => (<img key={`player-queue-${idx}`} src={'/images/stratagems/' + stratagem?.image} className={idx === 0 ? 'current' : ''} />))
                        }
                    </div>
                    <div id="current-stratagem-name">
                        { queue[0]?.name }
                    </div>
                    <div id="current-code" className={ failed ? 'animate__animated animate__shakeX' : '' }>
                        {
                            queue[0]?.code.map((arrow, idx) => (
                                <p key={`code-arrow-${idx}`} style={ 
                                    succeded ? { color: '#6db053' } :
                                    failed ? { color: '#c45941' } : 
                                    currentCorrectCount > idx ? { color: '#fee602' } : 
                                    { color: '#e7e3ed'} } 
                                    className={`current-code-arrow`}>
                                        {getArrow(arrow.toString())}
                                </p>
                            ))
                        }
                    </div>
                </div> 
                : 
                <h2>Get ready... { beginTimer }</h2> 
            }
        </div>
    )
}

export default Player