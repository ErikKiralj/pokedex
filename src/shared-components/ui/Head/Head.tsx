import React from 'react'
import Head from 'next/head'

export const CustomHead: React.FC = () => {
    return (
        <Head>
            <title>Pokedex Library</title>
            <meta property="og:title" content="Pokedex library" key="title" />
            <meta
                name="description"
                content="Pokedex Library for browsing the full pokemon collection & finding all your favorite Pokemons in one place"
            />
            <link rel="canonical" href="https://erikkiralj.github.io/pokedex/" />
            <link rel="icon" type="image/x-icon" href="/pokedex.ico" />
        </Head>
    )
}
