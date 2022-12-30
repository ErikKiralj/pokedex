import styled from 'styled-components'

import type { ButtonProps } from './Button.types'

export const ButtonRoot = styled.button<ButtonProps>`
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};
    border-radius: 8px;
    border: none;
    transition: all 0.3s;
    cursor: pointer;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    font-style: normal;

    @media (max-width: 550px) {
        font-size: 18px;
    }

    &:hover {
        background-color: ${(props) => props.hoverColor};
    }
`
