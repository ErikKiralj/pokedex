import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Colors } from '../../../shared-components'

export const EnergySectionRoot = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    max-width: 1100px;
    text-align: center;
    padding: 100px 20px 100px 20px;

    h1 {
        font-size: 30px;
        font-weight: 300;

        @media (max-width: 548px) {
            font-size: 32px;
        }
    }
`

export const EnergyCardRoot = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`
export const EnergyCard = styled.div`
    width: 160px;
    height: 160px;
    background-color: ${Colors.lightBlack};
    border-radius: 50%;
    box-shadow: 0 0 20px -5px ${Colors.golden};
    display: flex;
    align-items: center;
    justify-content: center;
`
