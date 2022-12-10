import styled from 'styled-components'

import type { FlexContainerProps } from './FlexContainer.types'

export const FlexContainer = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: ${(props) => (props.flexDirection ? props.flexDirection : 'row')};
    justify-content: ${(props) => (props.justifyContent ? props.justifyContent : 'center')};
    align-items: ${(props) => (props.alignItems ? props.alignItems : 'center')};
    flex-wrap: ${(props) => (props.flexWrap ? props.flexWrap : 'wrap')};
    gap: ${(props) => (props.gap ? props.gap : '20px')};
`
