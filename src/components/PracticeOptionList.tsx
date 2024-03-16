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
            options.map((stratagem: Stratagem, idx: number) => (
                <Option key={`practice-mode-stratagem-${idx}`} image={'images/stratagems/' + stratagem.image} name={stratagem.name} path={basePath ? `${basePath}/${stratagem.category.toLocaleLowerCase().replaceAll(" ", "_")}/${stratagem.lookup}` : ''} />
            ))
        }
    </>
  )
}

export default OptionList