import React, { Suspense } from 'react'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Link from 'next/link'

import { Button, Colors, FlexContainer } from '../../../shared-components'

import { Model } from './HeroScene'
import { HeroSectionBackground, HeroSectionRoot } from './HeroSection.styles'

export const HeroSection: React.FunctionComponent = () => {
    return (
        <HeroSectionBackground>
            <HeroSectionRoot>
                <FlexContainer
                    flexDirection={'column'}
                    maxWidth={'650px'}
                    alignItems={'flex-start'}
                    paddingLeft={'30px'}
                    paddingRight={'30px'}
                    gap={'10px'}
                    initial={{ opacity: 0, x: -500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1>Pokedex Library</h1>
                    <h2>Browse The Full Pokemon Collection & Find All Your Favorites In One Place</h2>
                    <FlexContainer justifyContent={'flex-start'} paddingTop={'40px'}>
                        <Link href="/library">
                            <Button
                                backgroundColor={Colors.golden}
                                hoverColor={Colors.lightBlue}
                                color={Colors.white}
                                height={'50px'}
                                width={'250px'}
                            >
                                Browse the library
                            </Button>
                        </Link>
                    </FlexContainer>
                </FlexContainer>
                <FlexContainer
                    paddingRight={'30px'}
                    paddingLeft={'30px'}
                    width={'500px'}
                    initial={{ opacity: 0, x: 500 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Canvas camera={{ fov: 25 }}>
                        <ambientLight intensity={1.25} />
                        <Suspense fallback={null}>
                            <Model />
                        </Suspense>
                        <Environment preset="sunset" />
                        <OrbitControls
                            autoRotate={true}
                            enableRotate={false}
                            enablePan={false}
                            enableZoom={false}
                            autoRotateSpeed={9}
                        />
                    </Canvas>
                </FlexContainer>
            </HeroSectionRoot>
        </HeroSectionBackground>
    )
}
