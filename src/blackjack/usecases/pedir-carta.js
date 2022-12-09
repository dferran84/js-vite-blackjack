

/**
 * 
 * Demana una carta
 * 
 * @param {Array<String>} deck - Deck cartes de string
 * @returns {String} Retorna carta
 */
export const pedirCarta = ( deck ) => {
 
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}