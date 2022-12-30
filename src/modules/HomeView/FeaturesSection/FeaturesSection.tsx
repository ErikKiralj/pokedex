import React from 'react'
import Image from 'next/image'

import { FlexContainer, icons } from '../../../shared-components'

import { FeaturesCard, FeaturesSectionRoot } from './FeaturesSection.styles'

export const FeaturesSection: React.FunctionComponent = () => {
    return (
        <FeaturesSectionRoot
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
        >
            <FeaturesCard>
                <FlexContainer flexDirection={'column'} justifyContent={'flex-start'}>
                    <Image src={icons.search_icon} alt="search_icon" width={80} />
                    <h2>Browse</h2>
                </FlexContainer>
                <p>Browse the library through every Pokemon species and discover new ones by searching or browsing.</p>
            </FeaturesCard>
            <FeaturesCard>
                <FlexContainer flexDirection={'column'} justifyContent={'flex-start'}>
                    <Image src={icons.chart_icon} alt="chart_icon" width={80} />
                    <h2>Compare</h2>
                </FlexContainer>
                <p>
                    Compare different stats, moves, and abilities of different Pokemons to see how they stack up against
                    each other.
                </p>
            </FeaturesCard>
            <FeaturesCard>
                <FlexContainer flexDirection={'column'} justifyContent={'flex-start'}>
                    <Image src={icons.star_icon} alt="star_icon" width={80} />
                    <h2>Favourite</h2>
                </FlexContainer>
                <p>
                    Easily save your favourite Pokemons and access them at any time with the applications special list
                    feature.
                </p>
            </FeaturesCard>
        </FeaturesSectionRoot>
    )
}
