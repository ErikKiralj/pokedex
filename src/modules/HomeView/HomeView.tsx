import React from 'react'

import { Colors, FlexContainer, Navbar } from '../../shared-components'

import { EnergySection } from './EnergySection'
import { FAQSection } from './FAQSection'
import { FeaturesSection } from './FeaturesSection'
import { FooterSection } from './FooterSection'
import { HeroSection } from './HeroSection'

export const HomeView: React.FunctionComponent = () => {
    return (
        <>
            <Navbar />
            <FlexContainer flexDirection={'column'} gap={'0'} backgroundColor={Colors.black}>
                <HeroSection />
                <EnergySection />
                <FeaturesSection />
                <FAQSection />
                <FooterSection />
            </FlexContainer>
        </>
    )
}
