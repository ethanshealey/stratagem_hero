'use client'
import Header from '@/components/Header'
import Option from '@/components/Option'
import CategoryOptionList from '@/components/CategoryOptionList'
import stratagemJson from '@/data/stratagems.json'
import Stratagem from '@/type/Stratagem'
import { useEffect, useState } from 'react'

export default function Practice() {

    const [ options, setOptions ] = useState<string[]>([])

    useEffect(() => {
        // load categories
        const listOfCategories = [...new Set(stratagemJson.map(item => item.category))]
        console.log(listOfCategories)
        setOptions(listOfCategories)
    }, [])

    return (
        <main id="home-page">
            <Header />
            <div id="home-page-content">
                <div id="home-page-title">
                <h1>Category Mode</h1>
                <p>Pick any category below to practice</p>
                </div>

                <CategoryOptionList options={options} basePath='/category' />

            </div>
        </main>
    )
}
