'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

type HeaderType = {
  sub?: string
}

const Header = ({ sub }: HeaderType) => {

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <header>
        <div id="header-left" onClick={goHome}>
            <img src={"/logo.jpg"} />
            <h1 id="title"><strong>STRATAGEM TRAINER</strong>{ sub && (<span>{ sub }</span>) }</h1>
        </div>
    </header>
  )
}

export default Header