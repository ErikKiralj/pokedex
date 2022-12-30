import React from 'react'

import { FlexContainerRoot } from './FlexContainer.styles'
import type { FlexContainerProps } from './FlexContainer.types'

export const FlexContainer: React.FC<React.PropsWithChildren<FlexContainerProps>> = (props) => {
    const {
        children,
        flexDirection,
        flexWrap,
        gap,
        backgroundColor,
        justifyContent,
        alignItems,
        height,
        width,
        maxWidth,
        maxHeight,
        paddingLeft,
        paddingRight,
        paddingTop,
        paddingBottom,
        color,
        backgroundImage,
        initial,
        animate,
        transition,
    } = props
    return (
        <FlexContainerRoot
            initial={initial}
            animate={animate}
            transition={transition}
            backgroundImage={backgroundImage}
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            gap={gap}
            backgroundColor={backgroundColor}
            justifyContent={justifyContent}
            alignItems={alignItems}
            height={height}
            width={width}
            maxWidth={maxWidth}
            maxHeight={maxHeight}
            paddingLeft={paddingLeft}
            paddingRight={paddingRight}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            color={color}
        >
            {children}
        </FlexContainerRoot>
    )
}
