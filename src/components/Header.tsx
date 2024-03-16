'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { AiFillHome } from "react-icons/ai"
import { BsQuestionCircle } from "react-icons/bs"

type HeaderType = {
  sub?: string
}

const Header = ({ sub }: HeaderType) => {

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  const goToHowToPage = () => {
    router.push('/how-to-play')
  }

  return (
    <header>
        <div id="header-left" onClick={goHome}>
            <img src={"/images/logo.jpg"} />
            <h1 id="title"><strong>STRATAGEM TRAINER</strong>{ sub && (<span>{ sub }</span>) }</h1>
        </div>
        <div id="header-right">
          <button onClick={goHome}><AiFillHome /></button>
          <button onClick={goToHowToPage}><BsQuestionCircle /></button>
        </div>
    </header>
  )
}

export default Header