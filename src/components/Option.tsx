'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type OptionType = {
    name: string,
    path: string,
    image?: string
}

const Option = ({ name, path, image }: OptionType) => {

    const router = useRouter()

    const onClick = () => {
        router.push(path)
    }

  return (
    <div className='option' onClick={onClick}>
        { image && <img src={image} /> }
        <h3>{ name }</h3>
    </div>
  )
}

export default Option