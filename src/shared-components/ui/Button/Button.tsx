import React from 'react'

import { ButtonRoot } from './Button.styles'
import type { ButtonProps } from './Button.types'

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
    const { children, height, width, backgroundColor, color, borderRadius, onClick, disabled, hoverColor } = props

    return (
        <ButtonRoot
            hoverColor={hoverColor}
            onClick={onClick}
            width={width}
            height={height}
            color={color}
            borderRadius={borderRadius}
            backgroundColor={backgroundColor}
            disabled={disabled}
        >
            {children}
        </ButtonRoot>
    )
}
