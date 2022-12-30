import { motion } from 'framer-motion'
import styled from 'styled-components'

import { Colors } from '../../../shared-components'

export const FeaturesSectionRoot = styled(motion.div)`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    padding: 50px 20px 50px 20px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`

export const FeaturesCard = styled.div`
    width: 280px;
    height: 300px;
    background-color: ${Colors.lightBlack};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.2s ease;
    padding: 20px;
    text-align: center;

    &:hover {
        box-shadow: 0 0 20px -5px ${Colors.golden};
        transform: scale(1.02);
    }
`
