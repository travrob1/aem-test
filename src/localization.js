import LocalizedStrings from 'react-localization';

let locales = new LocalizedStrings({
  en:{
    title:"ULTIMATE ROMAN NUMERAL CONVERTER",
    intro: "Roman numerals are a numeric system that originated in ancient Rome and remained the usual way of writing numbers throughout Europe well into the Late Middle Ages. Numbers in this system are represented by combinations of letters from the Latin alphabet. Modern usage employs seven symbols, each with a fixed integer value.",
    inputPlaceholder: "Enter a number"

  },
  it: {
    title:"CONVERTITORE NUMERICO ROMANO ULTIMATO",
    intro: "I numeri romani sono un sistema numerico che ha avuto origine nell'antica Roma e che è rimasto il solito modo di scrivere numeri in tutta Europa fino al tardo Medioevo. I numeri in questo sistema sono rappresentati da combinazioni di lettere dell'alfabeto latino. L'utilizzo moderno impiega sette simboli, ciascuno con un valore intero fisso.",
    inputPlaceholder: "Inserisci un numero"

  },
  es: {
    title:"ULTIMO CONVERTIDOR DE NUMBEROS ROMANOS",
    intro: "Los números romanos son un sistema numérico que se originó en la antigua Roma y se mantuvo como la forma habitual de escribir números en toda Europa hasta bien entrada la Edad Media. Los números en este sistema están representados por combinaciones de letras del alfabeto latino. El uso moderno emplea siete símbolos, cada uno con un valor entero fijo.",
    inputPlaceholder: "Ingrese un numero"

  }
});

export default locales;
