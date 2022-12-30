import styled from 'styled-components'

import { Colors } from '../../../shared-components'

export const FooterSectionRoot = styled.div`
    width: 100%;
    background-color: ${Colors.lightBlack};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 50px 20px 50px 20px;

    a {
        text-decoration: none;
        color: ${Colors.white};
    }

    a:hover {
        color: ${Colors.golden};
        transition: all 0.1s linear;
    }
`

export const FooterSectionContainer = styled.div`
    width: 100%;
    max-width: 1100px;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 0 20px 0 20px;

    p {
        text-align: justify;
    }

    p:last-child {
        text-align: center;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

export const FooterSocials = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`
