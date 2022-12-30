import React from 'react'

import { FAQCard } from './FAQCard/FAQCard'
import { FAQSectionRoot } from './FAQSection.styles'

export const FAQSection: React.FunctionComponent = () => {
    return (
        <FAQSectionRoot
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <h1>FAQ</h1>
            <FAQCard
                question={'What are Pokemons'}
                answer={
                    'Pokemons are fictional creatures that humans can catch, train, and battle with. ' +
                    'Each Pokemon has its own unique abilities and characteristics.'
                }
            />
            <FAQCard
                question={'How can someone catch a Pokemon'}
                answer={
                    'To catch a Pokemon, a person will need to use a Poke Ball. These can be purchased at a Poke Mart' +
                    ' or found in the wild. When a Pokemon is inside the Poke Ball, it can be trained and used in battles.'
                }
            />
            <FAQCard
                question={'How does someone train a Pokemon'}
                answer={
                    'There are several ways to train a Pokemon. One way is to have it battle other Pokemon to gain experience ' +
                    'and become stronger. Another way is to use items like Protein, which can increase a Pokemons stats.'
                }
            />
            <FAQCard
                question={'What are the different types of Pokemons'}
                answer={
                    'There are 18 different types of Pokemons, including Normal, Fire, Water, Electric, and Grass. ' +
                    'Each type has its own strengths and weaknesses in battle.'
                }
            />
            <FAQCard
                question={'How does someone evolve a Pokemon'}
                answer={
                    'Some Pokemon can evolve into stronger forms when they reach a certain level or when certain conditions are met.' +
                    'Evolution can give a Pokemon new abilities and make it more powerful in battle.'
                }
            />
            <FAQCard
                question={'What are the best Pokemon for battle'}
                answer={
                    'The best Pokemon for battle will depend on the strategy of the person using it and the types of the opponents Pokemon.' +
                    'Its important to choose Pokemon that have strong attacks and can withstand the attacks of the opponents Pokemon.'
                }
            />
            <FAQCard
                question={'Can someone trade Pokemon with their friends'}
                answer={
                    'Yes, it is possible to trade Pokemon with friends using a Pokemon trade machine. This allows players to exchange ' +
                    'Pokemon and add new ones to their collection.'
                }
            />
            <FAQCard
                question={'What are the rarest Pokemons'}
                answer={
                    'Some of the rarest Pokemon include Mew, Celebi, and Jirachi. ' +
                    'These Pokemon are difficult to find and can be highly coveted by trainers.'
                }
            />
        </FAQSectionRoot>
    )
}
