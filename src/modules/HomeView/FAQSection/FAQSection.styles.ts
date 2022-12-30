import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FAQSectionRoot = styled(motion.div)`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    text-align: center;
    padding: 50px 20px 100px 20px;
    gap: 10px;

    h1 {
        font-size: 30px;
        font-weight: 300;
        padding-bottom: 50px;

        @media (max-width: 548px) {
            font-size: 32px;
        }
    }
`
