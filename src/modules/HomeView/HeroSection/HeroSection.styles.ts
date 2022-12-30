import styled from 'styled-components'

import type { FlexContainerProps } from '../../../shared-components'
import { Colors } from '../../../shared-components'

export const HeroSectionBackground = styled.div`
    background: url('/home_banner_background.png');
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const HeroSectionRoot = styled.div<FlexContainerProps>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    height: 100%;
    max-width: 1250px;
    min-height: 600px;

    canvas {
        width: 100%;
        aspect-ratio: 1/1;
    }

    img {
        max-width: 100%;
        max-height: 100%;
        aspect-ratio: 1/1;

        @media (max-width: 548px) {
            max-height: 400px;
        }
    }

    h1 {
        font-size: 60px;
        font-weight: 400;

        @media (max-width: 548px) {
            font-size: 32px;
        }
    }

    h2 {
        font-size: 30px;
        color: ${Colors.lightGray};
        line-height: 30px;

        @media (max-width: 548px) {
            font-size: 18px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 50px;
        padding-bottom: 50px;
        text-align: center;
        gap: 50px;
    }
`
