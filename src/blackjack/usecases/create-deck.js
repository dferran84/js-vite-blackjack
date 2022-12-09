

import _ from 'underscore';

export const myName = 'David';

/**
 * 
 * Aquesta funcion crea un nou deck
 * 
 * @param {Array<String>} cardTypes - Exemple: ['C','D','H','S']
 * @param {Array<String>} specialTypes - Exemple: ['A','J','Q','K'];
 * @returns {Array<String>} - Retorna un nou deck de cartes
 */
 export const crearDeck = ( cardTypes, specialTypes ) => {
    

    if ( !cardTypes  || cardTypes.length === 0) 
        throw new Error( 'Tipe cards es obligatori com un array de string');
    if ( !specialTypes  || specialTypes.length === 0) throw new Error( 'Tipe cards es obligatori com un array de string');
    
    let deck = [];
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of cardTypes ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of cardTypes ) {
        for( let esp of specialTypes ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    return deck;
}
