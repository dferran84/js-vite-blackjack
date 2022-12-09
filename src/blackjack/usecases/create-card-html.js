

/**
 * 
 * Crear carta HTML 
 * @param {HTMLElement} div 
 * @param {String} carta 
 */
export const createCard = ( div, carta ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    div.append( imgCarta );

}