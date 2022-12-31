import styled from 'styled-components'

import { Colors } from '../../../../shared-components'

import type { FAQCardProps } from './FAQCard.types'

export const FAQCardRoot = styled.div<FAQCardProps>`
    width: 100%;
    max-width: 1100px;
    border-left: ${(props) => (props.active ? `3px solid ${Colors.lightBlue}` : `3px solid ${Colors.white}`)};
    background-color: ${Colors.lightBlack};
    padding: 25px;
    transition: all 0.5s ease;
    border-radius: 8px;

    &:hover {
        cursor: pointer;
    }
`

export const FAQQuestion = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    line-height: 26px;
    color: ${Colors.white};
    gap: 20px;
    text-align: start;
`
export const FAQAnswer = styled.div<FAQCardProps>`
    font-weight: 300;
    font-size: 14px;
    line-height: 21px;
    color: ${Colors.white};
    max-height: ${(props) => (props.active ? '300px' : '0px')};
    transition: all 0.5s ease;
    overflow: hidden;
    text-align: start;
`
