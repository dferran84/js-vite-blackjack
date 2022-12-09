
import _ from 'underscore';
// import { crearDeck as crearNewDeck } from './usecases/create-deck';
import { crearDeck, myName, pedirCarta, valorCarta, turnoComputadora, createCard } from './usecases';

console.log(myName);
/**
 * 2C = Two of Clubs
 * 2D = Two of Diamonds
 * 2H = Two of Hearts
 * 2S = Two of Spades
 */

 let deck         = [];
 const tipos      = ['C','D','H','S'];
 const especiales = ['A','J','Q','K'];
 
 let puntosJugador = 0,
     puntosComputadora = 0;
 
 // Referencias del HTML
 const btnPedir   = document.querySelector('#btnPedir');
 const btnDetener = document.querySelector('#btnDetener');
 const btnNuevo   = document.querySelector('#btnNuevo');
 
 const divCartasJugador     = document.querySelector('#jugador-cartas');
 const divCartasComputadora = document.querySelector('#computadora-cartas');
 
 const puntosHTML = document.querySelectorAll('small');
 
 
 deck = crearDeck( tipos, especiales );
 console.log(deck)
 
 // Esta función me permite tomar una carta

 
 // pedirCarta();

 
 
 
 
 
 // Eventos
 btnPedir.addEventListener('click', () => {
 
     const carta = pedirCarta( deck );
     
     puntosJugador = puntosJugador + valorCarta( carta );
     puntosHTML[0].innerText = puntosJugador;
     
     createCard( divCartasJugador, carta );
 
     if ( puntosJugador > 21 ) {
         console.warn('Lo siento mucho, perdiste');
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         turnoComputadora( puntosJugador, puntosHtml[1], divCartasComputadora, deck  );
 
     } else if ( puntosJugador === 21 ) {
         console.warn('21, genial!');
         btnPedir.disabled   = true;
         btnDetener.disabled = true;
         turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
     }
 
 });
 
 
 btnDetener.addEventListener('click', () => {
     btnPedir.disabled   = true;
     btnDetener.disabled = true;
 
     turnoComputadora( puntosJugador, puntosHTML[1], divCartasComputadora, deck );
 });
 
 btnNuevo.addEventListener('click', () => {
 
     console.clear();
     deck = [];
     deck = crearDeck( tipos, especiales);
 
     puntosJugador     = 0;
     puntosComputadora = 0;
     
     puntosHTML[0].innerText = 0;
     puntosHTML[1].innerText = 0;
 
     divCartasComputadora.innerHTML = '';
     divCartasJugador.innerHTML = '';
 
     btnPedir.disabled   = false;
     btnDetener.disabled = false;
 
 });
 