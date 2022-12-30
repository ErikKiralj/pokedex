import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Colors } from '../theme'

import type { FlexContainerProps } from './FlexContainer.types'
import { ExcludeFramerMotionProps } from './FlexContainer.types'

export const FlexContainerRoot = styled(motion.div).withConfig({
    shouldForwardProp: (prop) => !ExcludeFramerMotionProps.includes(prop),
})<FlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'wrap')};
    gap: ${(props) => (props.gap ? props.gap : '20px')};
    background-color: ${(props) => (props.backgroundColor ? props.backgroundColor : 'transparent')};
    width: ${(props) => (props.width ? props.width : '100%')};
    height: ${(props) => (props.height ? props.height : '100%')};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : '100%')};
    max-height: ${(props) => (props.maxHeight ? props.maxHeight : 'unset')};
    padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : '0')};
    padding-right: ${(props) => (props.paddingRight ? props.paddingRight : '0')};
    padding-top: ${(props) => (props.paddingTop ? props.paddingTop : '0')};
    padding-bottom: ${(props) => (props.paddingBottom ? props.paddingBottom : '0')};
    color: ${(props) => (props.color ? props.color : Colors.white)};
    background-image: ${(props) => `url(${props.backgroundImage})`};
    background-size: cover;

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
