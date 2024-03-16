'use client'
import Header from '@/components/Header'
import { useRouter } from 'next/navigation'
import React from 'react'

const HowToPlay = () => {

  const router = useRouter()

  const goHome = () => {
    router.push('/')
  }

  return (
    <div>
      <Header sub={'How To Play'} />
      <div id="how-to-page-content">
        <div id="how-to-page-title">
          <h1>How to Play</h1>
          <p>Learn how to spread democracy!</p>
        </div>
        <section id="pick-mode">
          <h2>Pick a Game Mode</h2>
          <p>Pick from one of the three gamemodes:<br /><a href="#practice">Practice</a>, <a href="#category">Category</a>, or <a href="#classic">Classic</a></p>
        </section>
        <section id="practice">
          <h2>Practice</h2>
          <p>In Practice mode, you will have full control over the Stratagem you will enter. Want to master calling in an Airstrike? Then Practice Mode is for you!</p>
        </section>
        <section id="category">
          <h2>Category</h2>
          <p>In Category mode, you still have fairly strict control over what stratagems you will enter. There are a total of SIX stratagem categories so far in Helldivers II, and Category Mode is the perfect gamemode for you if you want to master a specific one!</p>
        </section>
        <section id="classic">
          <h2>Classic</h2>
          <p>In Classic mode, you will have absolutely NO control over what stratagems will appear! Meant to replicate what is seen in the Helldivers II Stratagem Hero rcade game, you will be barraged with infinite stratagems to enter!</p>
        </section>
        <section id="classic">
          <h2>Controls</h2>
          <p>Now that you have picked your gamemode, it's time to get to action! Use WASD or your arrow keys to enter in the displayed code, if you mess up, you have to restart!</p>
        </section>
        <div className='option' onClick={goHome}><h3>Get Back in Action</h3></div>
      </div>
    </div>
  )
}

export default HowToPlay