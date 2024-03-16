'use client'
import React, { useEffect } from 'react'
import useIsMobile from '@/helpers/useIsMobile'

const AppWrapper = ({
    children
  }: {
    children: React.ReactNode,
}) => {

    const isMobile = useIsMobile()

    if(isMobile) return (
        <div id="mobile-error">
            <h1>Please use a Desktop/Laptop to view this site</h1>
            <p>Why? This site utilizes the WASD/Arrow keys to input the Stratagems</p>
        </div>
    )

    return (
        <>{ children }</>
    )
}

export default AppWrapper