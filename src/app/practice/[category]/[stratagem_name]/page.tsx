'use client'
import Stratagem from '@/type/Stratagem'
import { useState, useEffect} from 'react'
import stratagemJson from "@/data/stratagems.json"
import { useParams } from 'next/navigation'
import Header from '@/components/Header'
import { useKeyDown } from '@/helpers/useKeyDown'
import Player from '@/components/Player'
import getStratagem from '@/helpers/getStratagem'

const PracticeModeStratagem = () => {

  const [ stratagem, setStratagem ] = useState<Stratagem>()
  const [ isReady, setIsReady ] = useState<boolean>(false)
  const { category, stratagem_name } = useParams<{ category: string, stratagem_name: string }>()

  useEffect(() => {
    const s: any = getStratagem(stratagem_name)
    setStratagem(s)
  }, [])

  useKeyDown((key: string) => {
    if(!isReady) setIsReady(true)
  }, [])

  return (
    <div>
      <Header sub={'Practice Mode'} />
      <div id="practice-play">
        {
          isReady ?
            <Player mode={'practice'} /> 
            :
            <h2>Press any key to begin</h2>
        }
      </div>
      
    </div>
  )
}

export default PracticeModeStratagem