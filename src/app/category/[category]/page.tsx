'use client'
import Header from '@/components/Header'
import Player from '@/components/Player'
import getStratagem from '@/helpers/getStratagem'
import { useKeyDown } from '@/helpers/useKeyDown'
import Stratagem from '@/type/Stratagem'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const page = () => {

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
      <Header sub={'Category Mode'} />
      <div id="practice-play">
        {
          isReady ?
            <Player mode={'category'} /> 
            :
            <h2>Press any key to begin</h2>
        }
      </div>
      
    </div>
  )
}

export default page