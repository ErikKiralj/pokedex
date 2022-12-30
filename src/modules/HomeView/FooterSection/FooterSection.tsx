import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { FlexContainer, icons } from '../../../shared-components'

import { FooterSectionContainer, FooterSectionRoot, FooterSocials } from './FooterSection.styles'

export const FooterSection: React.FunctionComponent = () => {
    return (
        <FooterSectionRoot>
            <FooterSectionContainer>
                <FlexContainer
                    flexDirection={'column'}
                    maxWidth={'350px'}
                    alignItems={'flex-start'}
                    gap={'30px'}
                    justifyContent={'flex-start'}
                >
                    <p>Pokedex Library</p>
                    <p>
                        Pokemon library with the ability to browse the full pokemon collection & find all your favorites
                        in one place
                    </p>
                    <FooterSocials>
                        <Link href="https://twitter.com/Pokemon" target={'_blank'} rel={'noopener noreferrer'}>
                            <Image src={icons.twitter_icon} alt="twitter_icon" width={35} />
                        </Link>
                        <Link href="https://www.instagram.com/pokemon" target={'_blank'} rel={'noopener noreferrer'}>
                            <Image src={icons.instagram_icon} alt="instagram_icon" width={35} />
                        </Link>
                        <Link href="https://www.facebook.com/Pokemon" target={'_blank'} rel={'noopener noreferrer'}>
                            <Image src={icons.facebook_icon} alt="facebook_icon" width={35} />
                        </Link>
                        <Link
                            href="https://www.tiktok.com/@pokemonofficial"
                            target={'_blank'}
                            rel={'noopener noreferrer'}
                        >
                            <Image src={icons.tiktok_icon} alt="tiktok_icon" width={35} />
                        </Link>
                    </FooterSocials>
                </FlexContainer>
                <FlexContainer
                    flexDirection={'column'}
                    width={'300px'}
                    alignItems={'flex-start'}
                    justifyContent={'flex-start'}
                    gap={'30px'}
                >
                    <Link href="/">
                        <p>Home</p>
                    </Link>
                    <Link href="/library">
                        <p>Library</p>
                    </Link>
                    <Link href="/news">
                        <p>News</p>
                    </Link>
                    <Link href="/contact">
                        <p>Contact</p>
                    </Link>
                </FlexContainer>
                <FlexContainer
                    flexDirection={'column'}
                    width={'300px'}
                    alignItems={'center'}
                    justifyContent={'flex-start'}
                    gap={'30px'}
                >
                    <Link href="/" id={'logo'}>
                        <Image src={icons.pokemon_logo} alt="pokemon_logo" height={60} />
                    </Link>
                    <p>Copyright © 2023. Erik Kiralj. All rights reserved.</p>
                </FlexContainer>
            </FooterSectionContainer>
        </FooterSectionRoot>
    )
}
