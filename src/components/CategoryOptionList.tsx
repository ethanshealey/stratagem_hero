import React from 'react'
import Option from '@/components/Option'
import Stratagem from '@/type/Stratagem'

type OptionListType = {
    options: any[],
    basePath?: string
}

const OptionList = ({ options, basePath }: OptionListType) => {
  return (
    <>
        {
            options.map((category: string, idx: number) => (
                <Option key={`practice-mode-stratagem-${idx}`} name={category} path={basePath ? `${basePath}/${category}` : ''} />
            ))
        }
    </>
  )
}

export default OptionList