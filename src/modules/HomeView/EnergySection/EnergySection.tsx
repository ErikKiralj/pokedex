import React from 'react'
import Image from 'next/image'

import { images } from '../../../shared-components'

import { EnergyCard, EnergyCardRoot, EnergySectionRoot } from './EnergySection.styles'

export const EnergySection: React.FunctionComponent = () => {
    return (
        <EnergySectionRoot initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <h1>Energy that powers Pokemon attacks</h1>
            <EnergyCardRoot>
                <EnergyCard>
                    <Image src={images.energy_blue} alt="energy_blue"></Image>
                </EnergyCard>
                <EnergyCard>
                    <Image src={images.energy_yellow} alt="energy_yellow"></Image>
                </EnergyCard>
                <EnergyCard>
                    <Image src={images.energy_green} alt="energy_green"></Image>
                </EnergyCard>
                <EnergyCard>
                    <Image src={images.energy_red} alt="energy_red"></Image>
                </EnergyCard>
                <EnergyCard>
                    <Image src={images.energy_brown} alt="energy_brown"></Image>
                </EnergyCard>
                <EnergyCard>
                    <Image src={images.energy_purple} alt="energy_purple"></Image>
                </EnergyCard>
                <EnergyCard>
                    <Image src={images.energy_grey} alt="energy_grey"></Image>
                </EnergyCard>
            </EnergyCardRoot>
        </EnergySectionRoot>
    )
}
