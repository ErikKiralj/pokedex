import React, { useState } from 'react'
import Image from 'next/image'

import { icons } from '../../../../shared-components'

import { FAQAnswer, FAQCardRoot, FAQQuestion } from './FAQCard.styles'
import type { FAQCardProps } from './FAQCard.types'

export const FAQCard: React.FC<React.PropsWithChildren<FAQCardProps>> = (props) => {
    const { question, answer } = props

    const [active, setActive] = useState(false)

    return (
        <FAQCardRoot
            active={active}
            onClick={() => {
                setActive(!active)
            }}
        >
            <FAQQuestion>
                {question}
                {active ? (
                    <Image src={icons.minus_icon} alt="minus_icon" />
                ) : (
                    <Image src={icons.plus_icon} alt="plus_icon" />
                )}
            </FAQQuestion>
            <FAQAnswer active={active}>
                <br></br>
                {answer}
            </FAQAnswer>
        </FAQCardRoot>
    )
}
