'use client'
import Header from '@/components/Header'
import Option from '@/components/Option'
import PracticeOptionList from '@/components/PracticeOptionList'
import stratagemJson from '@/data/stratagems.json'
import Stratagem from '@/type/Stratagem'
import { useEffect, useState } from 'react'

export default function Practice() {

    const [ options, setOptions ] = useState<Stratagem[]>([])

    useEffect(() => {
        const tempStratagemList: Stratagem[] = []
        stratagemJson.forEach((stratagemList: any) => {
            tempStratagemList.push(stratagemList)
        })
        setOptions(tempStratagemList.flat())
    }, [])

    return (
        <main id="home-page">
            <Header />
            <div id="home-page-content">
                <div id="home-page-title">
                <h1>Practice Mode</h1>
                <p>Pick any strategem below to practice</p>
                </div>

                <PracticeOptionList options={options} basePath={`/practice`} />

            </div>
        </main>
    )
}
