import { useState, useEffect } from 'react';
import { FaTrophy, FaSearch, FaMoon, FaSun, FaCheck, FaVideo, FaLock, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './App.css';

const games = [
{
  id: 'bloodborne',
  title: 'Bloodborne',
  img: '../BloodBorne.jpg',
  description: 'Explora la pesadilla de Yharnam. Plataforma: PS4.',
  totalTrophies: 40,
  platinum: 1,
  gold: 7,
  silver: 8,
  bronze: 24,
  trophies: [
    {
      id: 1,
      name: 'Bloodborne',
      type: 'platinum',
      desc: 'Todos los trofeos obtenidos. Felicitaciones, cazador.',
      video: 'https://www.youtube.com/embed/3t5ehu5tR1c',
      completed: false,
      difficulty: 'Muy Difícil'
    },
    {
      id: 2,
      name: 'Amanecer de Yharnam',
      type: 'gold',
      desc: 'Has sobrevivido a la cacería y verás otro amanecer.',
      video: 'https://www.youtube.com/embed/Nj0rYcE_7yk',
      completed: false,
      difficulty: 'Difícil'
    },
    {
      id: 3,
      name: 'Cumplir deseos',
      type: 'gold',
      desc: 'Cautivado por la presencia de la luna, prometes vigilar el sueño del cazador.',
      video: 'https://www.youtube.com/embed/3RLIpCeWtZ8',
      completed: true,
      difficulty: 'Difícil'
    },
    {
      id: 4,
      name: 'Inicio de la infancia',
      type: 'gold',
      desc: 'Te has convertido en un retoño Grande y llevarás a la humanidad a renacer.',
      video: 'https://www.youtube.com/embed/ismWRHoLNW8',
      completed: true,
      difficulty: 'Muy Difícil'
    },
    {
      id: 5,
      name: 'Yharnam, reina pthumeria',
      type: 'gold',
      desc: 'Derrota a Yharnam, reina sangrienta del antiguo laberinto.',
      video: 'https://www.youtube.com/embed/JPakmr5h7Lc',
      completed: true,
      difficulty: 'Difícil'
    },
    {
      id: 6,
      name: 'Esencia de cazador',
      type: 'gold',
      desc: 'Consigue todas las armas de cazador.',
      video: 'https://www.youtube.com/embed/mgkqKDIYQGI',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 7,
      name: 'Oficio de cazador',
      type: 'gold',
      desc: 'Consigue todas las herramientas de cazador.',
      video: 'https://www.youtube.com/embed/vKvUn03pSTs',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 8,
      name: 'Maestro de armas',
      type: 'silver',
      desc: 'Consigue un arma del nivel más alto.',
      video: 'https://www.youtube.com/embed/kXqkPyGPmQA',
      completed: true,
      difficulty: 'Difícil'
    },
    {
      id: 9,
      name: 'Maestro de gemas sangrientas',
      type: 'silver',
      desc: 'Consigue una gema sangrienta sumamente valiosa.',
      video: 'https://www.youtube.com/embed/mZt8wtIOpGk',
      completed: true,
      difficulty: 'Fácil'
    },
    {
      id: 10,
      name: 'Maestro rúnico',
      type: 'silver',
      desc: 'Consigue una runa de Caryll sumamente valiosa.',
      video: 'https://www.youtube.com/embed/lviXd0SleL0',
      completed: true,
      difficulty: 'Fácil'
    },
    {
      id: 11,
      name: 'Cainhurst',
      type: 'silver',
      desc: 'Accede a Cainhurst, el castillo perdido y en ruinas.',
      video: 'https://www.youtube.com/embed/0r7_pOslUrE',
      completed: true,
      difficulty: 'Fácil'
    },
    {
      id: 12,
      name: 'El Coro',
      type: 'silver',
      desc: 'Accede al reino del Coro, el escalafón superior de la Iglesia de la Sanación.',
      video: 'https://www.youtube.com/embed/w8sv6YOPyzc',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 13,
      name: 'La fuente del sueño',
      type: 'silver',
      desc: 'Descubre el antiguo taller abandonado, origen del sueño del cazador.',
      video: 'https://www.youtube.com/embed/jY2acEXBrio',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 14,
      name: 'Aula de conferencias de la pesadilla',
      type: 'silver',
      desc: 'Accede al edificio lectivo de Byrgenwerth, que se adentra en el reino de las pesadillas.',
      video: 'https://www.youtube.com/embed/QRYnS3UJWJE',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 15,
      name: 'Padre Gascoigne',
      type: 'bronze',
      desc: 'Derrota a la bestia que una vez fue el padre Gascoigne.',
      video: 'https://www.youtube.com/embed/JbNQVAbuSF0',
      completed: true,
      difficulty: 'Fácil'
    },
    {
      id: 16,
      name: 'Vicaria Amelia',
      type: 'bronze',
      desc: 'Derrota a la vicaria de la Iglesia de la Sanación.',
      video: 'https://www.youtube.com/embed/gZ1mxdYy36Y',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 17,
      name: 'Sombra de Yharnam',
      type: 'bronze',
      desc: 'Derrota a las sombras que custodian el Bosque Prohibido.',
      video: 'https://www.youtube.com/embed/o9gx1tepHUU',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 18,
      name: 'Rom, la Araña Vacua',
      type: 'bronze',
      desc: 'Derrota a la Gran Rom en el Lago de la Luna.',
      video: 'https://www.youtube.com/embed/2F1HDdPJ3pQ',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 19,
      name: 'El Renacido',
      type: 'bronze',
      desc: 'Derrota al Renacido en Yahar\'gul.',
      video: 'https://www.youtube.com/embed/kbLb5ZT8s-Q',
      completed: true,
      difficulty: 'Difícil'
    },
    {
      id: 20,
      name: 'Micolash, huésped de la pesadilla',
      type: 'bronze',
      desc: 'Captura a Micolash en la Pesadilla de Mensis.',
      video: 'https://www.youtube.com/embed/zWW8pWAHQQA',
      completed: true,
      difficulty: 'Media'
    },
    {
      id: 21,
      name: 'Nodriza de Mergo',
      type: 'bronze',
      desc: 'Derrota a la nodriza de Mergo en la Cuna de Mergo.',
      video: 'https://www.youtube.com/embed/hgCI1vp0yAE',
      completed: true,
      difficulty: 'Difícil'
    },
    {
      id: 22,
      name: 'Bestia clérigo',
      type: 'bronze',
      desc: 'Derrota a la bestia clérigo en el Viejo Yharnam.',
      video: 'https://www.youtube.com/embed/-tEpn8P8tH0',
      completed: true,
      difficulty: 'Fácil'
    },
    {
  id: 23,
  name: 'Bestia sedienta de sangre',
  type: 'bronze',
  desc: 'Derrota a la bestia sedienta de sangre en los cálices.',
  video: 'https://www.youtube.com/embed/XDxYkfE5nCw',  // Guía fácil y rápida<grok-card data-id="342993" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Media'
},

// ID 24: La bruja de Hemwick
{
  id: 24,
  name: 'La bruja de Hemwick',
  type: 'bronze',
  desc: 'Derrota a las brujas de Hemwick.',
  video: 'https://www.youtube.com/embed/W_kLlSo9Bao',  // Guía fácil y rápida<grok-card data-id="678bcb" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Fácil'
},

// ID 25: Bestia oscura Paarl
{
  id: 25,
  name: 'Bestia oscura Paarl',
  type: 'bronze',
  desc: 'Derrota a la bestia oscura Paarl.',
  video: 'https://www.youtube.com/embed/Vcpv-JlUBPs',  // Guía fácil y rápida<grok-card data-id="8a639c" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Fácil'
},

// ID 26: Amygdala
{
  id: 26,
  name: 'Amygdala',
  type: 'bronze',
  desc: 'Derrota a Amygdala en la Frontera de la Pesadilla.',
  video: 'https://www.youtube.com/embed/IoBlySuP0Oo',  // Guía fácil y rápida<grok-card data-id="ba30be" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Difícil'
},

// ID 27: Mártir Logarius
{
  id: 27,
  name: 'Mártir Logarius',
  type: 'bronze',
  desc: 'Derrota al mártir Logarius en Cainhurst.',
  video: 'https://www.youtube.com/embed/Ub8F1jWm_As',  // Guía específica<grok-card data-id="20f80b" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Difícil'
},

// ID 28: Emisario celestial
{
  id: 28,
  name: 'Emisario celestial',
  type: 'bronze',
  desc: 'Derrota al emisario celestial en el Coro.',
  video: 'https://www.youtube.com/embed/GJG1nXVw-3g',  // Guía completa (boss de chiste)<grok-card data-id="07d34c" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Media'
},

// ID 29: Ebrietas, hija del cosmos
{
  id: 29,
  name: 'Ebrietas, hija del cosmos',
  type: 'bronze',
  desc: 'Derrota a Ebrietas en el Altar de la Desesperación.',
  video: 'https://www.youtube.com/embed/aVUyyGSZhUw',  // Guía fácil<grok-card data-id="7984bb" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Difícil'
},

// ID 30: Contacto de gemas sangrientas
{
  id: 30,
  name: 'Contacto de gemas sangrientas',
  type: 'bronze',
  desc: 'Consigue tu primera gema sangrienta.',
  video: 'https://www.youtube.com/embed/w6MD6b5ukSc',  // Guía trofeo específica<grok-card data-id="94f171" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Fácil'
},

// ID 31: Contacto rúnico
{
  id: 31,
  name: 'Contacto rúnico',
  type: 'bronze',
  desc: 'Consigue tu primera runa de Caryll.',
  video: 'https://www.youtube.com/embed/oZRpPsXkzzY',  // Guía específica (similar a gemas)<grok-card data-id="893a0d" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Fácil'
},

// ID 32: Cáliz de Pthumeru
{
  id: 32,
  name: 'Cáliz de Pthumeru',
  type: 'bronze',
  desc: 'Completa el cáliz de Pthumeru.',
  video: 'https://www.youtube.com/embed/QRY4G2nTiHg',  // Guía 100% chalices<grok-card data-id="47aa88" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Media'
},

// ID 33: Cáliz del afligido Loran
{
  id: 33,
  name: 'Cáliz del afligido Loran',
  type: 'bronze',
  desc: 'Completa el cáliz del afligido Loran.',
  video: 'https://www.youtube.com/embed/QRY4G2nTiHg',  // Misma guía completa chalices (incluye Loran)<grok-card data-id="4ea0e2" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Difícil'
},

// ID 34: Cáliz de Isz
{
  id: 34,
  name: 'Cáliz de Isz',
  type: 'bronze',
  desc: 'Completa el cáliz de Isz.',
  video: 'https://www.youtube.com/embed/5XZ7KDf0TQE',  // Guía específica Isz<grok-card data-id="e9bd2b" data-type="citation_card"></grok-card>
  completed: true,
  difficulty: 'Difícil'
},

// ID 35: Esencia de viejo cazador
{
  id: 35,
  name: 'Esencia de viejo cazador',
  type: 'gold',
  desc: 'Consigue todas las armas exclusivas del DLC "The Old Hunters".',
  video: 'https://www.youtube.com/embed/DonzTw37o0I',  // Guía trofeo armas DLC<grok-card data-id="6ad5f3" data-type="citation_card"></grok-card>
  completed: false,
  difficulty: 'Difícil'
},

// ID 36: Huérfano de Kos
{
  id: 36,
  name: 'Huérfano de Kos',
  type: 'bronze',
  desc: 'Derrota al huérfano de Kos en la Pesadilla del Cazador.',
  video: 'https://www.youtube.com/embed/-ZmVat6yR7A',  // Guía fácil DLC<grok-card data-id="3d46dd" data-type="citation_card"></grok-card>
  completed: false,
  difficulty: 'Muy Difícil'
},

// ID 37: Ludwig, la Espada Sagrada
{
  id: 37,
  name: 'Ludwig, la Espada Sagrada',
  type: 'bronze',
  desc: 'Derrota a Ludwig en la Pesadilla del Cazador.',
  video: 'https://www.youtube.com/embed/kgVTfVLsiUQ',  // Guía fácil y rápida DLC<grok-card data-id="6e7e7b" data-type="citation_card"></grok-card>
  completed: false,
  difficulty: 'Difícil'
},

// ID 38: Lady Maria, de la torre del reloj astral
{
  id: 38,
  name: 'Lady Maria, de la torre del reloj astral',
  type: 'bronze',
  desc: 'Derrota a Lady Maria en la Pesadilla del Cazador.',
  video: 'https://www.youtube.com/embed/KN9xtclouzk',  // Guía fácil y rápida DLC<grok-card data-id="bd4527" data-type="citation_card"></grok-card>
  completed: false,
  difficulty: 'Difícil'
},

// ID 39: Fracasos vivientes
{
  id: 39,
  name: 'Fracasos vivientes',
  type: 'bronze',
  desc: 'Derrota a los fracasos vivientes en la Pesadilla del Cazador.',
  video: 'https://www.youtube.com/embed/QiVaP3hI8Tc',  // Guía muy fácil DLC<grok-card data-id="f57431" data-type="citation_card"></grok-card>
  completed: false,
  difficulty: 'Media'
},

// ID 40: Laurence, el primer vicario
{
  id: 40,
  name: 'Laurence, el primer vicario',
  type: 'bronze',
  desc: 'Derrota a Laurence, el primer vicario.',
  video: 'https://www.youtube.com/embed/0wNvKYc4S0Q',  // Guía específica DLC<grok-card data-id="8cf432" data-type="citation_card"></grok-card>
  completed: false,
  difficulty: 'Muy Difícil'
}
  ]
  },
  {
    
      id: 'sleeping-dogs',
      title: 'Sleeping Dogs: Definitive Edition',
      img: 'sleeping-dogs-cover.jpg',
      description: 'Infiltra las tríadas de Hong Kong como el policía encubierto Wei Shen. Plataformas: PS4/PC.',
      totalTrophies: 60,
      platinum: 1,
      gold: 4,
      silver: 10,
      bronze: 45,
      trophies: [
        // PLATINO (1)
        { id: 1, name: 'Leyenda de Hong Kong', type: 'platinum', desc: 'Obtén todos los trofeos de Sleeping Dogs: Definitive Edition', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Muy Difícil' },
        
        // ORO (4)
        { 
  id: 2, 
  name: 'Inspector jefe', 
  type: 'gold', 
  desc: 'Completa el 100% de todas las misiones, casos, favores, eventos, trabajos y carreras', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Guía platino 100% completa<grok-card data-id="04c86c" data-type="citation_card"></grok-card><grok-card data-id="37de6c" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Muy Difícil' 
},
{ 
  id: 3, 
  name: 'Oro puro', 
  type: 'gold', 
  desc: 'Obtén 30 oros en el registro de premios', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Guía platino (incluye medallas oro)<grok-card data-id="5a9b95" data-type="citation_card"></grok-card><grok-card data-id="32901b" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Difícil' 
},
{ 
  id: 4, 
  name: 'Oro sustancial', 
  type: 'gold', 
  desc: 'Obtén 15 oros en el registro de premios', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Igual, medallas progresivas
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 5, 
  name: 'Oro alcanzado', 
  type: 'gold', 
  desc: 'Obtén un oro en el registro de premios', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Primer oro explicado en guías platino
  completed: false, 
  difficulty: 'Fácil' 
},

// PLATA (10)
{ 
  id: 6, 
  name: 'Plata sustancial', 
  type: 'silver', 
  desc: 'Obtén 15 platas en el registro de premios', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Cubierto en platino
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 7, 
  name: 'Plata ligera', 
  type: 'silver', 
  desc: 'Obtén 5 platas en el registro de premios', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',
  completed: false, 
  difficulty: 'Fácil' 
},
{ 
  id: 8, 
  name: 'Aprendiz de inspector', 
  type: 'silver', 
  desc: 'Completa el 50% de todas las misiones, casos, favores, eventos, trabajos y carreras', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Progreso 50% en guía 100%
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 9, 
  name: 'Superpirata de Hong Kong', 
  type: 'silver', 
  desc: 'Piratea todas las cámaras de seguridad del juego', 
  video: 'https://www.youtube.com/embed/tc9kYR9Dmlw',  // TODAS las cámaras (26)<grok-card data-id="4c2f46" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 10, 
  name: 'Víctima de la moda', 
  type: 'silver', 
  desc: 'Compra toda la ropa', 
  video: 'https://www.youtube.com/embed/rOD-ebUXH1w',  // Guía compra TODA la ropa<grok-card data-id="544e82" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 11, 
  name: 'Fan de los vehículos', 
  type: 'silver', 
  desc: 'Compra todos los vehículos', 
  video: 'https://www.youtube.com/embed/rOD-ebUXH1w',  // Incluye TODOS los vehículos (mismo canal)<grok-card data-id="d6be19" data-type="citation_card"></grok-card><grok-card data-id="86c6ea" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Difícil' 
},
{ 
  id: 12, 
  name: 'Mr. Buen Tipo', 
  type: 'silver', 
  desc: 'Completa todos los favores', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Cubierto en platino 100%
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 13, 
  name: 'Superestrella del Karaoke', 
  type: 'silver', 
  desc: 'Obtén 90% o más en todas las canciones en los bares de Karaoke en HK', 
  video: 'https://www.youtube.com/embed/R-x6tSRX3r4',  // TODAS las canciones 90%+<grok-card data-id="4ceec0" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Difícil' 
},
{ 
  id: 14, 
  name: 'Cazador de recompensas', 
  type: 'silver', 
  desc: 'Completa todos los trabajos de Roland', 
  video: 'https://www.youtube.com/embed/VJECQQ4vxJg',  // TODOS los jobs de Roland<grok-card data-id="1950eb" data-type="citation_card"></grok-card>
  completed: false, 
  difficulty: 'Media' 
},
{ 
  id: 15, 
  name: 'Maestro de las armas', 
  type: 'silver', 
  desc: 'Completa todos los casos', 
  video: 'https://www.youtube.com/embed/AeMGItkFMyQ',  // Casos de policía en guía platino
  completed: false, 
  difficulty: 'Media' 
},
        
        // BRONCE (45)
        { id: 16, name: 'Parte de la banda', type: 'bronze', desc: 'Completa la misión Persecución en el mercado', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 17, name: 'Así aprenderán', type: 'bronze', desc: 'Completa Venganza', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 18, name: 'Una gran traición', type: 'bronze', desc: 'Completa Atraco en el astillero', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 19, name: 'Sonrisas para todos', type: 'bronze', desc: 'Completa Sonrisas Lee', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 20, name: 'Cara nueva', type: 'bronze', desc: 'Obtén el nivel 2 de prestigio', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 21, name: 'Gran guerrero', type: 'bronze', desc: 'Obtén el nivel 5 de prestigio', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 22, name: 'Maestro Sun', type: 'bronze', desc: 'Obtén el nivel 10 de prestigio', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 23, name: 'Cambio de imagen', type: 'bronze', desc: 'Cambia todas tus prendas en el guardarropa o en una tienda de ropa', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 24, name: 'Conductor temerario', type: 'bronze', desc: 'Realiza con éxito un robo en marcha', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 25, name: 'Golpe mortal', type: 'bronze', desc: 'Mata a alguien con un pescado', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 26, name: 'Poli primerizo', type: 'bronze', desc: 'Completa un caso', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 27, name: 'Turista', type: 'bronze', desc: 'Visita Aberdeen, Central, Kennedy Town y North Point', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 28, name: 'Gourmet de Hong Kong', type: 'bronze', desc: 'Prueba 10 comidas o bebidas distintas', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 29, name: 'Luchador del entorno', type: 'bronze', desc: 'Vence a 5 enemigos usando distintos ataques de entorno', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 30, name: 'Agente tecnológico', type: 'bronze', desc: 'Fuerza cerraduras, cajas fuertes, pon micros, rastrea teléfonos y piratea cámaras', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 31, name: 'Velocidad de crucero', type: 'bronze', desc: 'Conduce durante 2 minutos seguidos a más de 60 km/h sin dañar tu coche', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 32, name: 'Experto en armas', type: 'bronze', desc: 'Usa 10 armas de fuego distintas para derrotar a los enemigos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 33, name: 'Artista marcial', type: 'bronze', desc: 'Usa 10 armas cuerpo a cuerpo distintas para derrotar a los enemigos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 34, name: 'Apostador', type: 'bronze', desc: 'Gana una apuesta en una pelea de gallos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 35, name: 'Apostador profesional', type: 'bronze', desc: 'Gana 50,000 en una sola pelea de gallos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 36, name: 'Ladrón de camiones', type: 'bronze', desc: 'Secuestra 5 camiones y recoge su carga', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 37, name: 'Luchador definitivo', type: 'bronze', desc: 'Desbloquea diez mejoras de tríada', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 38, name: 'Superpoli', type: 'bronze', desc: 'Desbloquea diez mejoras de policía', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 39, name: 'Rapiñador de North Point', type: 'bronze', desc: 'Abre todas las cajas blindadas en North Point', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 40, name: 'Rapiñador de Central', type: 'bronze', desc: 'Abre todas las cajas blindadas en Central', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 41, name: 'Rapiñador de la zona oeste', type: 'bronze', desc: 'Abre todas las cajas blindadas en Kennedy Town y Aberdeen', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 42, name: 'Curación espiritual', type: 'bronze', desc: 'Reza en todos los Santuarios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 43, name: 'Wei de la carretera', type: 'bronze', desc: 'Completa todas las carreras callejeras', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 44, name: 'Novato', type: 'bronze', desc: 'Completa el 10% de todas las misiones, casos, favores, eventos, trabajos y carreras', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 45, name: 'Agente', type: 'bronze', desc: 'Completa el 25% de todas las misiones, casos, favores, eventos, trabajos y carreras', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 46, name: 'Cementerio de animales', type: 'bronze', desc: 'Manda a Ojos de Perro, Cara Rata y Cola de Caballo de vuelta al infierno', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 47, name: 'Oro maldito', type: 'bronze', desc: 'Obtén 5 premios de oro', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 48, name: 'Artificieros', type: 'bronze', desc: 'Completa la primera misión', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 49, name: 'Buen Samaritano', type: 'bronze', desc: 'Encuentra todas las evidencias coleccionables', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 50, name: 'Plata sólida', type: 'bronze', desc: 'Obtén 30 platas en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 51, name: 'Toque de oro', type: 'bronze', desc: 'Obtén 15 oros en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 52, name: 'Fantasmas y eso', type: 'bronze', desc: 'Completa todo el contenido secundario', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 53, name: 'Maestro de la secta', type: 'bronze', desc: 'Derrota a los adeptos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 54, name: 'Expulsión felina', type: 'bronze', desc: 'Expulsa a Gato Sonrisas', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 55, name: 'Medio ambiente', type: 'bronze', desc: 'Completa la mitad de los eventos del mundo abierto', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 56, name: 'Disparar a las ruedas', type: 'bronze', desc: 'Dispara a las ruedas de los polis mientras escapas de una persecución policial', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 57, name: 'Competencia feroz', type: 'bronze', desc: 'Completa todos los eventos del mundo abierto', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 58, name: 'Clubes de artes marciales', type: 'bronze', desc: 'Supera los cuatro clubes de artes marciales', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 59, name: 'Plata reluciente', type: 'bronze', desc: 'Obtén 5 platas en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 60, name: 'Plata pesada', type: 'bronze', desc: 'Obtén 10 platas en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' }
      
    ]
  },
    {
      id: 'bully',
      title: 'Bully',
      img: 'bully-cover.jpg',
      description: 'Sobrevive en la academia Bullworth como Jimmy Hopkins. Plataformas: PS4/PC.',
      totalTrophies: 38,
      platinum: 1,
      gold: 4,
      silver: 10,
      bronze: 23,
      trophies: [
        // PLATINO
        {
          id: 1,
          name: 'Matrícula de honor',
          type: 'platinum',
          desc: 'Consigue todos los trofeos',
          video: '',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        // ORO
        {
          id: 2,
          name: 'Niño problemático',
          type: 'gold',
          desc: 'Acumula 160 000 puntos de gamberro',
          video: '',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 3,
          name: 'Cleptomanía',
          type: 'gold',
          desc: 'Roba 20 bicicletas',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 4,
          name: 'El orgullo del profesor',
          type: 'gold',
          desc: 'Completa las 5 clases de cada asignatura',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 5,
          name: 'Ladrón experto de bicis',
          type: 'gold',
          desc: 'Completa todas las carreras de karts callejeras',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 6,
          name: 'El blues del niño rico',
          type: 'gold',
          desc: 'Ten 1000 $ en calderilla',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 7,
          name: 'Coleccionista de trofeos',
          type: 'gold',
          desc: 'Consigue todos los trofeos para tu habitación',
          video: '',
          completed: false,
          difficulty: 'Difícil'
        },
        // PLATA
        {
          id: 8,
          name: 'Estudiante aplicado',
          type: 'silver',
          desc: 'Completa seis clases',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 9,
          name: 'De la calle',
          type: 'silver',
          desc: 'Gana el 100 % de respeto de 2 grupos a la vez',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 10,
          name: 'Novato',
          type: 'silver',
          desc: 'Completa el capítulo 1',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 11,
          name: 'De segundo',
          type: 'silver',
          desc: 'Completa el capítulo 2',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 12,
          name: 'Penúltimo curso',
          type: 'silver',
          desc: 'Completa el capítulo 3',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 13,
          name: 'Casi acabado',
          type: 'silver',
          desc: 'Completa el capítulo 4',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 14,
          name: 'Gran graduación',
          type: 'silver',
          desc: 'Completa el capítulo 5',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 15,
          name: 'Cortacésped',
          type: 'silver',
          desc: 'Corta el césped 10 veces',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 16,
          name: 'Piloto prodigio',
          type: 'silver',
          desc: 'Completa las carreras de karts de la feria',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 17,
          name: 'Monopatinero profesional',
          type: 'silver',
          desc: 'Recorre 50 000 metros en monopatín',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        // BRONCE
        {
          id: 18,
          name: 'Concurso de popularidad',
          type: 'bronze',
          desc: 'Recibe 25 besos',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 19,
          name: 'Olor a rosas',
          type: 'bronze',
          desc: 'Recoge 50 flores',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 20,
          name: 'Rebelde',
          type: 'bronze',
          desc: 'Pasa 5 horas fuera tras el toque de queda',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 21,
          name: 'Empollón',
          type: 'bronze',
          desc: 'Completa tres clases',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 22,
          name: 'Niño de los recados',
          type: 'bronze',
          desc: 'Completa 10 recados',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 23,
          name: 'Angelito',
          type: 'bronze',
          desc: 'Completa 20 recados',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 24,
          name: 'Tiro al plato',
          type: 'bronze',
          desc: 'Tira huevos a 25 coches',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 25,
          name: 'Futbolista',
          type: 'bronze',
          desc: 'Patea balones de fútbol 100 veces',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 26,
          name: 'Novato en las recreativas',
          type: 'bronze',
          desc: 'Obtén la mejor puntuación en las recreativas Consumo, Nut Shots y Monkey Fling',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 27,
          name: 'Machacador',
          type: 'bronze',
          desc: 'Derriba a 200 rivales',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 28,
          name: 'Adicto al azúcar',
          type: 'bronze',
          desc: 'Compra 100 refrescos',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 29,
          name: 'Bromista',
          type: 'bronze',
          desc: 'Haz caer con canicas a 25 personas',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 30,
          name: 'Bocazas',
          type: 'bronze',
          desc: 'Mófate 100 veces',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 31,
          name: 'Apestoso',
          type: 'bronze',
          desc: 'Tira 50 bombas fétidas a la gente',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 32,
          name: 'Calzonazos',
          type: 'bronze',
          desc: 'Da 50 estirones',
          video: '',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 33,
          name: 'Francotirador',
          type: 'bronze',
          desc: 'Rompe 300 botellas de la galería de tiro',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 34,
          name: 'Campeón del atletismo',
          type: 'bronze',
          desc: 'Recorre 100 000 metros a pie',
          video: '',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 35,
          name: 'Velocista',
          type: 'bronze',
          desc: 'Recorre 100 000 metros en bicicleta',
          video: '',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 36,
          name: 'Buen samaritano',
          type: 'bronze',
          desc: 'Completa 50 recados',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 37,
          name: 'Jinete',
          type: 'bronze',
          desc: 'Completa todas las carreras de bicicleta',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 38,
          name: 'Rey del balón prisionero',
          type: 'bronze',
          desc: 'Gana todos los partidos de balón prisionero',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 39,
          name: 'Campeón de boxeo',
          type: 'bronze',
          desc: 'Gana todos los combates de boxeo',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 40,
          name: 'Luchador de la academia',
          type: 'bronze',
          desc: 'Gana todos los combates de lucha',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 41,
          name: 'Buscador de tesoros',
          type: 'bronze',
          desc: 'Encuentra todas las gomas elásticas',
          video: '',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 42,
          name: 'Coleccionista de cartas',
          type: 'bronze',
          desc: 'Encuentra todas las cartas de Grottos & Gremlins',
          video: '',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 43,
          name: 'Rompegnomos',
          type: 'bronze',
          desc: 'Destruye todos los gnomos de jardín',
          video: '',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 44,
          name: 'Fotógrafo del anuario',
          type: 'bronze',
          desc: 'Toma todas las fotos para el anuario',
          video: '',
          completed: false,
          difficulty: 'Difícil'
        }
      
    
    ]
  },
  {
    id: 'gta-v',
    title: 'Grand Theft Auto V',
    img: 'gta-v-cover.jpg',
    description: 'Caos en Los Santos con Michael, Franklin y Trevor. Plataformas: PS4/PS5/PC.',
    totalTrophies: 78,
    platinum: 1,
    gold: 3,
    silver: 15,
    bronze: 59,
    trophies: [
        // --- Trofeos del Juego Base (51) ---
        {
          id: 1,
          name: "Leyenda de Los Santos",
          type: "platinum",
          desc: "¡Felicidades! ¡Eres la estrella más grande de Vinewood!",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Platino"
        },
        {
          id: 2,
          name: "Bienvenido a Los Santos",
          type: "bronze",
          desc: "Has embargado un coche para echar una carrera por el centro de una metrópolis soleada.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 3,
          name: "Una amistad resucitada",
          type: "bronze",
          desc: "Con amigos así, ¿quién necesita enemigos?",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 4,
          name: "Un sueldo justo",
          type: "bronze",
          desc: "Es hora de una escapadita.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 5,
          name: "El momento de la verdad",
          type: "bronze",
          desc: "Has descubierto la verdad sobre Brad.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 6,
          name: "Vivir o morir en Los Santos",
          type: "silver",
          desc: "Has completado la última misión.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 7,
          name: "Duro como el diamante",
          type: "bronze",
          desc: "Has desvalijado Vangelico para pagar a Martín Madrazo.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 8,
          name: "Subversivo",
          type: "bronze",
          desc: "Has robado una superarma experimental a Merryweather... y la has devuelto.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 9,
          name: "Bloqueado",
          type: "bronze",
          desc: "Has llevado a cabo un bloqueo clásico.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 10,
          name: "Pequeña ciudad, gran golpe",
          type: "bronze",
          desc: "Has causado una gran impresión en el pueblo de Paleto Bay.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 11,
          name: "Los inútiles del gobierno",
          type: "bronze",
          desc: "Has recuperado información confidencial de un edificio federal muy bien protegido.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 12,
          name: "¡El grande!",
          type: "bronze",
          desc: "Esto ya no es un sueño.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 13,
          name: "¡Oro puro!",
          type: "gold",
          desc: "Repite misiones y extraños y locos y consigue 70 medallas de oro.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Muy Difícil"
        },
        {
          id: 14,
          name: "Criminal profesional",
          type: "gold",
          desc: "Consigue completar el juego al 100%.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Muy Difícil"
        },
        {
          id: 15,
          name: "Explorador de San Andreas",
          type: "silver",
          desc: "Explora todo Los Santos y el condado de Blaine.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 16,
          name: "Guerra y paz a la carrera",
          type: "bronze",
          desc: "Compra Downtown Cab Co. y termina una carrera privada.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 17,
          name: "Escalada bélica de Industrias TP",
          type: "bronze",
          desc: "Compra el hangar del aeródromo de McKenzie y gana la carrera armamentística.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 18,
          name: "Multidisciplinar",
          type: "bronze",
          desc: "Consigue una medalla de oro en todas las aficiones y pasatiempos posibles.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 19,
          name: "Más allá de las estrellas",
          type: "bronze",
          desc: "Recoge y devuelve todas las piezas de la nave espacial.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 20,
          name: "Un misterio resuelto",
          type: "bronze",
          desc: "Resuelve el misterio de Leonora Johnson.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 21,
          name: "Gestión de residuos",
          type: "bronze",
          desc: "Compra el viejo muelle y recoge todo el desperdicio nuclear.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 22,
          name: "Niebla de furia",
          type: "bronze",
          desc: "Completa todas las masacres.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 23,
          name: "Exhibicionista",
          type: "bronze",
          desc: "Completa todos los saltos acrobáticos.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 24,
          name: "¡Kifflom!",
          type: "bronze",
          desc: "Completa tu camino a la iluminación... o no.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 25,
          name: "Ejército de tres hombres",
          type: "bronze",
          desc: "Sobrevive 3 minutos con un nivel de búsqueda de al menos 3 estrellas con los tres personajes juntos fuera de misión.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 26,
          name: "Como pez fuera del agua",
          type: "bronze",
          desc: "Vas a necesitar un barco más grande...",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 27,
          name: "Acólito altruista",
          type: "bronze",
          desc: "Entrega una víctima desprevenida a la secta altruista.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 28,
          name: "Despilfarro",
          type: "bronze",
          desc: "Gasta 200 millones de dólares entre los tres personajes.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 29,
          name: "Macho alfa en la bolsa",
          type: "bronze",
          desc: "Consigue beneficios que cubran el total de tus inversiones en bolsa.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 30,
          name: "Tunea mi arma",
          type: "bronze",
          desc: "Modifica completamente un arma.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 31,
          name: "Se busca vivo o muerto",
          type: "bronze",
          desc: "Entrega a un objetivo de cazafugitivos con vida.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 32,
          name: "Los Santos Customs",
          type: "bronze",
          desc: "Modifica completamente un vehículo.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 33,
          name: "Por un pelo",
          type: "bronze",
          desc: "Completa todos los desafíos de 'Bajo el puente' y 'Vuelo a cuchillo'.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Muy Difícil"
        },
        {
          id: 34,
          name: "Recién llegado",
          type: "bronze",
          desc: "GTA Online: Completa la introducción.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 35,
          name: "Gánster de pacotilla",
          type: "bronze",
          desc: "GTA Online: Llega al nivel 25.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 36,
          name: "Poco a poco",
          type: "bronze",
          desc: "GTA Online: Llega al nivel 50.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 37,
          name: "Por encima de la ley",
          type: "silver",
          desc: "GTA Online: Llega al nivel 100.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 38,
          name: "Número uno",
          type: "gold",
          desc: "GTA Online: Sé el primero en todos los tipos de juego competitivos.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Muy Difícil"
        },
        {
          id: 39,
          name: "Midnight Club",
          type: "bronze",
          desc: "GTA Online: Usa vehículos personalizados para ganar 5 carreras.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 40,
          name: "Selección antinatural",
          type: "bronze",
          desc: "GTA Online: Completa las 10 oleadas de una Supervivencia.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 41,
          name: "Desde el asiento de atrás",
          type: "bronze",
          desc: "GTA Online: Guía a un conductor hasta el primer puesto como copiloto en el modo rally.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 42,
          name: "Correr como el viento",
          type: "bronze",
          desc: "GTA Online: Sobrevive un día con una recompensa por tu cabeza.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 43,
          name: "Barrido total",
          type: "bronze",
          desc: "GTA Online: Termina un ataque a banda sin morir y mata al menos a 10 enemigos.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 44,
          name: "Condecorado",
          type: "silver",
          desc: "GTA Online: Gana 30 premios de platino.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 45,
          name: "Atracador",
          type: "bronze",
          desc: "GTA Online: Atraca las 20 tiendas.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 46,
          name: "Disfruta de tu estancia",
          type: "bronze",
          desc: "GTA Online: Participa en todo lo que Los Santos tiene para ofrecer.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 47,
          name: "En equipo",
          type: "bronze",
          desc: "GTA Online: Completa una actividad como miembro de una Crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 48,
          name: "Reembolso completo",
          type: "bronze",
          desc: "GTA Online: Mata al ladrón que te atracó.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 49,
          name: "Llamada de socorro",
          type: "bronze",
          desc: "GTA Online: Llama para pedir un helicóptero de apoyo por primera vez.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 50,
          name: "Sueño americano",
          type: "bronze",
          desc: "GTA Online: Consigue un apartamento, un garaje y un vehículo asegurado.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 51,
          name: "Una nueva perspectiva",
          type: "bronze",
          desc: "Jugaste a GTA V en modo de primera persona durante 15 horas.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
      
        // --- Trofeos DLC: Golpes de Grand Theft Auto Online (9) ---
        {
          id: 52,
          name: "Prepárate",
          type: "bronze",
          desc: "GTA Online: Completaste una misión de preparación de golpe.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 53,
          name: "En nombre de la ciencia",
          type: "silver",
          desc: "GTA Online: Completaste El golpe a los laboratorios Humane y Financiación inicial como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 54,
          name: "Presidentes muertos",
          type: "silver",
          desc: "GTA Online: Completaste El golpe a Fleeca y El golpe al Pacific Standard como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 55,
          name: "Día de la condicional",
          type: "silver",
          desc: "GTA Online: Completaste Fuga de la prisión como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 56,
          name: "Mandamás",
          type: "bronze",
          desc: "GTA Online: Invierte el dinero que tanto te ha costado ganar en preparar un golpe.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 57,
          name: "A cuatro bandas",
          type: "bronze",
          desc: "GTA Online: Como líder de un golpe, fija el reparto final al 25% para todos los jugadores.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 58,
          name: "Vive un poco",
          type: "bronze",
          desc: "GTA Online: Gasta un total de $8.000.000 en la compra de vehículos de la actualización de Golpes.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 59,
          name: "Intocable",
          type: "bronze",
          desc: "GTA Online: Completa un final de golpe sin sufrir daños.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 60,
          name: "Cerebro",
          type: "silver",
          desc: "GTA Online: Gana 25 medallas de platino en misiones preparatorias y finales de golpe.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
      
        // --- Trofeos DLC: Editor de Rockstar (10) ---
        {
          id: 61,
          name: "Visionario de Vinewood",
          type: "bronze",
          desc: "Crea y exporta un video usando el Editor Rockstar o entra al Modo Director 5 veces.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 62,
          name: "Majestuoso",
          type: "bronze",
          desc: "Crea y exporta 10 videos usando el Editor Rockstar o entra al Modo Director 10 veces.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 63,
          name: "Gente de Los Santos",
          type: "silver",
          desc: "Desbloquea todos los personajes especiales y entra al Modo Director como actor de esta categoría.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 64,
          name: "Director novel",
          type: "bronze",
          desc: "Entra al Modo Director por primera vez como un actor desbloqueado.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 65,
          name: "Amante de los animales",
          type: "bronze",
          desc: "Entra al Modo Director por primera vez con un animal desbloqueado.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 66,
          name: "Obra coral",
          type: "bronze",
          desc: "Desbloquea todos los personajes de la historia y entra al Modo Director como actor de esta categoría.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 67,
          name: "Película de culto",
          type: "bronze",
          desc: "Entra al Modo Director como Cris Formage.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 68,
          name: "Explorador de exteriores",
          type: "bronze",
          desc: "Visita todas las ubicaciones en el Modo Director.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 69,
          name: "Actor de método",
          type: "bronze",
          desc: "Entra en el Modo Director usando cualquiera de tus propios personajes de GTA Online.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 70,
          name: "Criptozoólogo",
          type: "silver",
          desc: "Desbloqueaste todos los animales para usarlos en el Modo Director... ¿o no?",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
      
        // --- Trofeos DLC: El Golpe del Juicio Final (8) ---
        {
          id: 71,
          name: "Primeros pasos",
          type: "bronze",
          desc: "GTA Online: Organiza El golpe del Juicio Final.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Fácil"
        },
        {
          id: 72,
          name: "Las filtraciones de datos",
          type: "bronze",
          desc: "GTA Online: Completaste el Acto I de El golpe del Juicio Final como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 73,
          name: "El problema Bogdan",
          type: "bronze",
          desc: "GTA Online: Completaste el Acto II de El golpe del Juicio Final como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 74,
          name: "El escenario del Juicio Final",
          type: "bronze",
          desc: "GTA Online: Completaste el Acto III de El golpe del Juicio Final como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 75,
          name: "Salvar el mundo",
          type: "silver",
          desc: "GTA Online: Completaste El golpe del Juicio Final como líder o crew.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Medio"
        },
        {
          id: 76,
          name: "Aniquilación orbital",
          type: "bronze",
          desc: "GTA Online: Mata a otro jugador con el Cañón orbital.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Difícil"
        },
        {
          id: 77,
          name: "Elitista",
          type: "gold",
          desc: "GTA Online: Completa los 3 desafíos Élite en El golpe del Juicio Final.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Muy Difícil"
        },
        {
          id: 78,
          name: "Cerebros delictivos",
          type: "gold",
          desc: "GTA Online: Completa los 3 desafíos Cerebro delictivo incluidos en El golpe del Juicio Final.",
          video: "URL_GUIA_TROFEO",
          completed: false,
          difficulty: "Extremo"
        }
      
    ]
  },
    {
      id: 'rdr1',
      title: 'Red Dead Redemption',
      img: 'rdr1-cover.jpg',
      description: 'John Marston busca redención en el Oeste americano. Plataforma: PS3/PS4.',
      totalTrophies: 52,
      platinum: 1,
      gold: 3,
      silver: 4,
      bronze: 44,
      trophies: [
        {
          id: 1,
          name: 'Leyenda del Oeste',
          type: 'platinum',
          desc: '¡Te has convertido en una leyenda del Oeste!',
          video: 'https://www.youtube.com/embed/EXAMPLE_PLATINUM',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 2,
          name: 'Redimido',
          type: 'gold',
          desc: 'Completa el juego al 100%.',
          video: 'https://www.youtube.com/embed/EXAMPLE_REDIMIDO',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 3,
          name: 'Zed ha muerto, cariño',
          type: 'gold',
          desc: 'Completa Undead Nightmare al 100%.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ZED',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 4,
          name: '¿Cuidados o naturaleza?',
          type: 'gold',
          desc: 'Completa «Recuerda a mi familia».',
          video: 'https://www.youtube.com/embed/EXAMPLE_NATURALEZA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 5,
          name: 'La buena acción del día',
          type: 'silver',
          desc: 'Ayuda a 15 personas desconocidas.',
          video: 'https://www.youtube.com/embed/EXAMPLE_BUENA_ACCION',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 6,
          name: 'Explorador',
          type: 'silver',
          desc: 'Obtén el rango Legendario en cualquier desafío ambiental.',
          video: 'https://www.youtube.com/embed/EXAMPLE_EXPLORADOR',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 7,
          name: 'Platos giratorios',
          type: 'silver',
          desc: 'Ten todos los territorios a salvo al mismo tiempo en Undead Nightmare.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PLATOS',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 8,
          name: 'El mundo va bien',
          type: 'silver',
          desc: 'Completa «En un caballo pálido».',
          video: 'https://www.youtube.com/embed/EXAMPLE_MUNDO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 9,
          name: 'Gran apostador',
          type: 'bronze',
          desc: 'Gana más de 2000 fichas en una mano de póquer.',
          video: 'https://www.youtube.com/embed/EXAMPLE_APOSTADOR',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 10,
          name: 'Sin dados',
          type: 'bronze',
          desc: 'Completa una partida al dado mentiroso sin perder ni un solo dado.',
          video: 'https://www.youtube.com/embed/EXAMPLE_DADOS',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 11,
          name: '¿Granadas de mano?',
          type: 'bronze',
          desc: 'Consigue un lanzamiento perfecto en el juego de la herradura.',
          video: 'https://www.youtube.com/embed/EXAMPLE_GRANADAS',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 12,
          name: 'Austin dominado',
          type: 'bronze',
          desc: 'Completa las guaridas de Twin Rocks, Pike\'s Basin y Gaptooth Breach.',
          video: 'https://www.youtube.com/embed/EXAMPLE_AUSTIN',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 13,
          name: 'Espíritus malvados',
          type: 'bronze',
          desc: 'Completa las guaridas de Tumbleweed y Tesoro Azul.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ESPIRITUS',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 14,
          name: 'Instinto asesino',
          type: 'bronze',
          desc: 'Completa las guaridas de Fort Mercer y Nosalida.',
          video: 'https://www.youtube.com/embed/EXAMPLE_INSTINTO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 15,
          name: 'Peleando por el mundo',
          type: 'bronze',
          desc: 'Deja inconsciente a alguien en todas las tabernas del juego.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PELEANDO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 16,
          name: 'Cosas curiosas en marcha',
          type: 'bronze',
          desc: 'Completa una tarea para una persona desconocida.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CURIOSAS',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 17,
          name: 'El domador indomable',
          type: 'bronze',
          desc: 'Doma el saddler de Kentucky, el trotón americano y el mestizo húngaro.',
          video: 'https://www.youtube.com/embed/EXAMPLE_DOMADOR',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 18,
          name: 'La clemencia se paga',
          type: 'bronze',
          desc: 'Captura a un fugitivo vivo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CLEMENCIA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 19,
          name: 'Gusto exquisito',
          type: 'bronze',
          desc: 'Compra un arma rara en una armería.',
          video: 'https://www.youtube.com/embed/EXAMPLE_GUSTO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 20,
          name: 'Osando cazar',
          type: 'bronze',
          desc: 'Mata y despelleja 18 osos pardos.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CAZAR',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 21,
          name: '¡Él limpia bien!',
          type: 'bronze',
          desc: 'Obtén el traje elegante.',
          video: 'https://www.youtube.com/embed/EXAMPLE_LIMPIA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 22,
          name: 'Más de un puñado',
          type: 'bronze',
          desc: 'Gana 10,000 $.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PUNADO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 23,
          name: 'El pistolero',
          type: 'bronze',
          desc: 'Mata a cualquier enemigo con un tiro a la cabeza usando el modo de apuntado experto.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PISTOLERO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 24,
          name: 'Hombre de honor… o deshonor',
          type: 'bronze',
          desc: 'Alcanza el rango máximo de fama y el rango máximo o mínimo de honor.',
          video: 'https://www.youtube.com/embed/EXAMPLE_HONOR',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 25,
          name: 'Medalla de oro',
          type: 'bronze',
          desc: 'Gana una medalla de oro en una misión de combate.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MEDALLA',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 26,
          name: 'Tras el rastro de De Vaca',
          type: 'bronze',
          desc: 'Descubre todas las ubicaciones del mapa.',
          video: 'https://www.youtube.com/embed/EXAMPLE_DEVACA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 27,
          name: 'Amigos en posiciones elevadas',
          type: 'bronze',
          desc: 'Usa una carta de indulto teniendo más de 5000 $ de deuda.',
          video: 'https://www.youtube.com/embed/EXAMPLE_AMIGOS',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 28,
          name: 'Acribillándoles',
          type: 'bronze',
          desc: 'Mata a 500 enemigos con un arma con soporte en cualquier modo de juego.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ACRIBILLANDO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 29,
          name: 'Granizo de balas',
          type: 'bronze',
          desc: 'Mata a 500 enemigos con cualquier pistola o revólver en cualquier modo de juego.',
          video: 'https://www.youtube.com/embed/EXAMPLE_GRANIZO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 30,
          name: 'El arma larga de Marston',
          type: 'bronze',
          desc: 'Mata a 500 enemigos con cualquier fusil, arma de repetición o escopeta en cualquier modo de juego.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ARMALARGA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 31,
          name: 'Diana',
          type: 'bronze',
          desc: 'Consigue 250 tiros a la cabeza en cualquier modo de juego.',
          video: 'https://www.youtube.com/embed/EXAMPLE_DIANA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 32,
          name: 'Selección antinatural',
          type: 'bronze',
          desc: 'Mata un animal de cada especie del juego en cualquier modo de juego.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ANTINATURAL',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 33,
          name: 'Maestro del hacha',
          type: 'bronze',
          desc: 'Completa todos los desafíos del tomahawk.',
          video: 'https://www.youtube.com/embed/EXAMPLE_HACHA',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 34,
          name: 'Maestro de explosivos',
          type: 'bronze',
          desc: 'Completa el desafío del fusil explosivo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_EXPLOSIVOS',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 35,
          name: 'Mad Marston: guerrero de caminos',
          type: 'bronze',
          desc: 'Alcanza el rango 5 en todos los desafíos de Undead Nightmare.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MAD',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 36,
          name: 'Ese hombre del gobierno',
          type: 'bronze',
          desc: 'Completa «Éxodo en EE. UU.».',
          video: 'https://www.youtube.com/embed/EXAMPLE_GOBIERNO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 37,
          name: 'Tierra de oportunidades',
          type: 'bronze',
          desc: 'Completa «El ataque a Fort Mercer».',
          video: 'https://www.youtube.com/embed/EXAMPLE_TIERRA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 38,
          name: 'Hijos de México',
          type: 'bronze',
          desc: 'Completa «Las puertas de El Presidio».',
          video: 'https://www.youtube.com/embed/EXAMPLE_MEXICO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 39,
          name: 'No más labia',
          type: 'bronze',
          desc: 'Completa «La hora señalada».',
          video: 'https://www.youtube.com/embed/EXAMPLE_LABIA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 40,
          name: 'Un alma salvaje',
          type: 'bronze',
          desc: 'Completa «En casa con Dutch».',
          video: 'https://www.youtube.com/embed/EXAMPLE_SALVAJE',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 41,
          name: 'Los beneficios de ser civilizado',
          type: 'bronze',
          desc: 'Completa «Y la verdad os hará libres».',
          video: 'https://www.youtube.com/embed/EXAMPLE_CIVILIZADO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 42,
          name: 'En el atardecer',
          type: 'bronze',
          desc: 'Completa «El último enemigo que debe ser destruido».',
          video: 'https://www.youtube.com/embed/EXAMPLE_ATARDECER',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 43,
          name: 'Cobarde',
          type: 'bronze',
          desc: 'Coloca a una mujer maniatada en las vías del tren y sé testigo de cómo el tren la mata.',
          video: 'https://www.youtube.com/embed/EXAMPLE_COBARDE',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 44,
          name: 'Destino manifiesto',
          type: 'bronze',
          desc: 'Mata al último bisonte de Great Plains.',
          video: 'https://www.youtube.com/embed/EXAMPLE_DESTINO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 45,
          name: 'Espoleado a la victoria',
          type: 'bronze',
          desc: 'Completa 20 misiones sin cambiar de caballo en un poste.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ESPOLEADO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 46,
          name: 'Al sur en un bronco blanco',
          type: 'bronze',
          desc: 'Escapa de los comisarios de EE. UU. montado en un mestizo húngaro.',
          video: 'https://www.youtube.com/embed/EXAMPLE_BRONCO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 47,
          name: 'La espiral descendente',
          type: 'bronze',
          desc: 'Completa la misión de superviviente «Cuentos curiosos de Blackwater».',
          video: 'https://www.youtube.com/embed/EXAMPLE_ESPIRAL',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 48,
          name: 'Dime con quién andas…',
          type: 'bronze',
          desc: 'Completa las misiones de superviviente «Una cura para casi todo» y «Vuelve a tu agujero, amigo».',
          video: 'https://www.youtube.com/embed/EXAMPLE_DIME',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 49,
          name: 'La danza superiora',
          type: 'bronze',
          desc: 'Completa la misión de superviviente «El blues de la madre superiora».',
          video: 'https://www.youtube.com/embed/EXAMPLE_DANZA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 50,
          name: 'Para el público',
          type: 'bronze',
          desc: 'Encuentra y doma un unicornio.',
          video: 'https://www.youtube.com/embed/EXAMPLE_UNICORNIO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 51,
          name: 'Chupa… ¿qué?',
          type: 'bronze',
          desc: 'Encuentra y mata un chupacabras.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CHUPA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 52,
          name: 'Six Years In The Making',
          type: 'bronze',
          desc: 'Encuentra y mata un sasquatch.',
          video: 'https://www.youtube.com/embed/EXAMPLE_SASQUATCH',
          completed: false,
          difficulty: 'Media'
        }
      
    
    ]
  },
    {
      id: 'rdr2',
      title: 'Red Dead Redemption 2',
      img: 'rdr2-cover.jpg',
      description: 'Arthur Morgan y la banda de Dutch van der Linde en el ocaso del Viejo Oeste. Plataforma: PS4/PS5.',
      totalTrophies: 52,
      platinum: 1,
      gold: 3,
      silver: 4,
      bronze: 44,
      trophies: [
        {
          id: 1,
          name: 'Leyenda del Oeste',
          type: 'platinum',
          desc: 'Consigue todos los demás trofeos.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PLATINUM',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 2,
          name: 'Redención',
          type: 'gold',
          desc: 'Completa "Red Dead Redemption".',
          video: 'https://www.youtube.com/embed/EXAMPLE_REDENCION',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 3,
          name: 'Verano eterno',
          type: 'gold',
          desc: 'Completa el epílogo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_VERANO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 4,
          name: 'El mejor del Oeste',
          type: 'gold',
          desc: 'Completa el juego al 100%.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MEJOR',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 5,
          name: 'Echar una mano',
          type: 'silver',
          desc: 'Completa todas las misiones opcionales de honor del Modo Historia.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MANO',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 6,
          name: 'Fiebre del oro',
          type: 'silver',
          desc: 'Consigue 70 medallas de oro en misiones de la historia.',
          video: 'https://www.youtube.com/embed/EXAMPLE_FIEBRE',
          completed: false,
          difficulty: 'Muy Difícil'
        },
        {
          id: 7,
          name: 'Objeto de coleccionista',
          type: 'silver',
          desc: 'Completa uno de los hilos argumentales de coleccionables.',
          video: 'https://www.youtube.com/embed/EXAMPLE_COLECCIONISTA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 8,
          name: 'Infame',
          type: 'silver',
          desc: 'Red Dead Online: Llega al nivel 50.',
          video: 'https://www.youtube.com/embed/EXAMPLE_INFAME',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 9,
          name: 'De vuelta al lodo',
          type: 'bronze',
          desc: 'Completa el capítulo I.',
          video: 'https://www.youtube.com/embed/EXAMPLE_LODO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 10,
          name: 'Solo es un rasguño',
          type: 'bronze',
          desc: 'Completa "Perseguidos por el pasado".',
          video: 'https://www.youtube.com/embed/EXAMPLE_RASGU',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 11,
          name: 'Hacia prados más verdes',
          type: 'bronze',
          desc: 'Completa el capítulo II.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PRADOS',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 12,
          name: 'Zanjando disputas',
          type: 'bronze',
          desc: 'Completa el capítulo III.',
          video: 'https://www.youtube.com/embed/EXAMPLE_DISPUTAS',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 13,
          name: 'Arrastrado por la corriente',
          type: 'bronze',
          desc: 'Completa el capítulo IV.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CORRIENTE',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 14,
          name: 'Sin traidores',
          type: 'bronze',
          desc: 'Completa el capítulo V.',
          video: 'https://www.youtube.com/embed/EXAMPLE_TRAIDORES',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 15,
          name: 'A la tercera va la vencida',
          type: 'bronze',
          desc: 'Completa "Adiós, querido amigo".',
          video: 'https://www.youtube.com/embed/EXAMPLE_TERCERA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 16,
          name: 'Vaquero constructor',
          type: 'bronze',
          desc: 'Completa "Una nueva Jerusalén".',
          video: 'https://www.youtube.com/embed/EXAMPLE_VAQUERO',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 17,
          name: 'Amistad con beneficios',
          type: 'bronze',
          desc: 'Completa una actividad con un compañero en cada campamento.',
          video: 'https://www.youtube.com/embed/EXAMPLE_AMISTAD',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 18,
          name: 'Hobby Horse',
          type: 'bronze',
          desc: 'Juega todos los minijuegos.',
          video: 'https://www.youtube.com/embed/EXAMPLE_HOBBY',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 19,
          name: 'Forzar y entrar',
          type: 'bronze',
          desc: 'Encuentra el botín de 4 haciendas o cabañas.',
          video: 'https://www.youtube.com/embed/EXAMPLE_FORZAR',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 20,
          name: 'Inteligencia artificial',
          type: 'bronze',
          desc: 'Descubre el destino de Marko Dragić.',
          video: 'https://www.youtube.com/embed/EXAMPLE_IA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 21,
          name: 'Quitárselo a los ricos',
          type: 'bronze',
          desc: 'Roba o saquea $250.',
          video: 'https://www.youtube.com/embed/EXAMPLE_RICOS',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 22,
          name: 'Dárselo a los pobres',
          type: 'bronze',
          desc: 'Dona $250 a la caja de contribuciones de la banda.',
          video: 'https://www.youtube.com/embed/EXAMPLE_POBRES',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 23,
          name: 'Pagar la cuenta',
          type: 'bronze',
          desc: 'Gasta $5000 en las tiendas.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CUENTA',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 24,
          name: 'Personalidad extrema',
          type: 'bronze',
          desc: 'Consigue el nivel de honor máximo o mínimo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PERSONALIDAD',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 25,
          name: 'Forastero del Oeste',
          type: 'bronze',
          desc: 'Completa 10 misiones de desconocidos.',
          video: 'https://www.youtube.com/embed/EXAMPLE_FORASTERO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 26,
          name: 'Recompensado',
          type: 'bronze',
          desc: 'Sobrevive 3 días con una recompensa por tu cabeza de $250 en todos los estados.',
          video: 'https://www.youtube.com/embed/EXAMPLE_RECOMPENSADO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 27,
          name: 'Presentar tus respetos',
          type: 'bronze',
          desc: 'Encuentra las tumbas de todos tus compañeros caídos.',
          video: 'https://www.youtube.com/embed/EXAMPLE_RESPETOS',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 28,
          name: 'Chico de los recados',
          type: 'bronze',
          desc: 'Entrega 5 objetos solicitados por compañeros del campamento.',
          video: 'https://www.youtube.com/embed/EXAMPLE_RECADOS',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 29,
          name: '¡He dicho que es arte!',
          type: 'bronze',
          desc: 'Encuentra un hogar permanente para la ardilla disecada.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ARTE',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 30,
          name: 'Autosuficiente',
          type: 'bronze',
          desc: 'Elabora 30 objetos diferentes en el Modo Historia.',
          video: 'https://www.youtube.com/embed/EXAMPLE_AUTO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 31,
          name: 'A flor de piel',
          type: 'bronze',
          desc: 'Despelleja a todas las especies de animales en el Modo Historia.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PIEL',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 32,
          name: 'Zoólogo',
          type: 'bronze',
          desc: 'Estudia a todos los animales en todos los estados en el Modo Historia.',
          video: 'https://www.youtube.com/embed/EXAMPLE_ZOOLOGO',
          completed: false,
          difficulty: 'Difícil'
        },
        {
          id: 33,
          name: '¡Era ASÍ de grande!',
          type: 'bronze',
          desc: 'Captura un pez que pese al menos 16 libras (7.3 kg).',
          video: 'https://www.youtube.com/embed/EXAMPLE_GRANDE',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 34,
          name: 'Cargada y preparada',
          type: 'bronze',
          desc: 'Mejora todos los componentes disponibles de un arma corta o un arma larga.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CARGADA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 35,
          name: 'Osado',
          type: 'bronze',
          desc: 'Sobrevive a 18 ataques de osos y mátalos en el Modo Historia.',
          video: 'https://www.youtube.com/embed/EXAMPLE_OSADO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 36,
          name: 'Corcel de confianza',
          type: 'bronze',
          desc: 'Alcanza el máximo nivel de vínculo con un caballo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CORCEL',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 37,
          name: 'Fuga',
          type: 'bronze',
          desc: 'Red Dead Online: Completa la introducción.',
          video: 'https://www.youtube.com/embed/EXAMPLE_FUGA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 38,
          name: 'Experto en series',
          type: 'bronze',
          desc: 'Red Dead Online: Participa en una de las series.',
          video: 'https://www.youtube.com/embed/EXAMPLE_SERIES',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 39,
          name: 'Mercenario',
          type: 'bronze',
          desc: 'Red Dead Online: Acepta 10 misiones del Modo Libre de personajes que encuentres por el mundo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MERCENARIO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 40,
          name: 'Memorable',
          type: 'bronze',
          desc: 'Red Dead Online: Juega 5 eventos del Modo Libre.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MEMORABLE',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 41,
          name: 'Abróchate el cinturón',
          type: 'bronze',
          desc: 'Red Dead Online: Consigue 5 hebillas de oro en premios.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CINTURON',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 42,
          name: 'El mejor',
          type: 'bronze',
          desc: 'Red Dead Online: Sé MVP 3 veces en una partida con al menos 4 jugadores.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MVP',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 43,
          name: 'Un puñado de caballos',
          type: 'bronze',
          desc: 'Red Dead Online: Consigue tener 5 caballos en propiedad al mismo tiempo.',
          video: 'https://www.youtube.com/embed/EXAMPLE_PUNADO',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 44,
          name: 'Ponte en marcha',
          type: 'bronze',
          desc: 'Red Dead Online: Llega al nivel 10.',
          video: 'https://www.youtube.com/embed/EXAMPLE_MARCHA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 45,
          name: 'Todo vale',
          type: 'bronze',
          desc: 'Red Dead Online: Impide que otra cuadrilla realice con éxito una misión del Modo Libre.',
          video: 'https://www.youtube.com/embed/EXAMPLE_VALE',
          completed: false,
          difficulty: 'Media'
        },
        {
          id: 46,
          name: 'Como en casa',
          type: 'bronze',
          desc: 'Red Dead Online: Compra 5 mejoras del campamento.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CASA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 47,
          name: 'Sin regulación',
          type: 'bronze',
          desc: 'Red Dead Online: Crea 25 artículos de munición.',
          video: 'https://www.youtube.com/embed/EXAMPLE_REGULACION',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 48,
          name: 'Entre amigos',
          type: 'bronze',
          desc: 'Red Dead Online: Forma una cuadrilla persistente.',
          video: 'https://www.youtube.com/embed/EXAMPLE_AMIGOS',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 49,
          name: 'Maestro creador',
          type: 'bronze',
          desc: 'Red Dead Online: Juega una partida de nivel Featured Series.',
          video: 'https://www.youtube.com/embed/EXAMPLE_CREADOR',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 50,
          name: 'Venta encarnizada',
          type: 'bronze',
          desc: 'Red Dead Online: Vende 20 objetos a los comerciantes.',
          video: 'https://www.youtube.com/embed/EXAMPLE_VENTA',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 51,
          name: 'Recolección perfecta',
          type: 'bronze',
          desc: 'Red Dead Online: Recoge objetos del entorno 25 veces.',
          video: 'https://www.youtube.com/embed/EXAMPLE_RECOLECCION',
          completed: false,
          difficulty: 'Fácil'
        },
        {
          id: 52,
          name: 'La unión hace la fuerza',
          type: 'bronze',
          desc: 'Red Dead Online: Completa una misión del Modo Libre en una cuadrilla con al menos 2 miembros.',
          video: 'https://www.youtube.com/embed/EXAMPLE_UNION',
          completed: false,
          difficulty: 'Fácil'
        }
      ]
  },
  {
    id: 'spider-man',
    title: "Marvel's Spider-Man",
    img: 'spider-man-cover.jpg',
    description: 'Salta por Nueva York como Peter Parker. Plataformas: PS4/PS5/PC.',
    totalTrophies: 74,
    platinum: 1,
    gold: 5,
    silver: 14,
    bronze: 54,
    trophies: [
      {
        id: 1,
        name: 'Spider-Man (Platino)',
        type: 'platinum',
        desc: 'Conquista Nueva York al 100%.',
        video: 'https://www.youtube.com/embed/EXAMPLE_SPIDER_PLATINO',
        completed: false,
        difficulty: 'Muy Difícil'
      },
      {
        id: 2,
        name: 'The City Sleeps (Oro)',
        type: 'gold',
        desc: '100% completa todos los distritos.',
        video: 'https://www.youtube.com/embed/EXAMPLE_CITYSLEEPS',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 3,
        name: 'Stylish Spider (Plata)',
        type: 'silver',
        desc: 'Consigue una combo de 100 golpes.',
        video: 'https://www.youtube.com/embed/EXAMPLE_STYLISH',
        completed: false,
        difficulty: 'Media'
      },
      {
        id: 4,
        name: 'Friendly Neighborhood Spider-Man (Bronce)',
        type: 'bronze',
        desc: 'Gana 10 combates sin alertar.',
        video: 'https://www.youtube.com/embed/EXAMPLE_FRIENDLY',
        completed: true,
        difficulty: 'Fácil'
      }
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('bloodborne');
  const [search, setSearch] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [filteredGames, setFilteredGames] = useState(games);
  const [trophyFilter, setTrophyFilter] = useState('all');
  const [completedTrophies, setCompletedTrophies] = useState({});
  const [openVideos, setOpenVideos] = useState({}); // Controla videos abiertos

  const currentGame = filteredGames.find(g => g.id === activeTab) || filteredGames[0];

  useEffect(() => {
    const filtered = games.filter(game =>
      game.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredGames(filtered);
    
    // Solo actualiza activeTab si es necesario
    if (filtered.length > 0) {
      const currentTabExists = filtered.find(g => g.id === activeTab);
      if (!currentTabExists) {
        setActiveTab(filtered[0].id);
      }
    }
  }, [search, activeTab]); // Solo search y activeTab // Solo search y games

  const toggleTrophy = (gameId, trophyId) => {
    setCompletedTrophies(prev => ({
      ...prev,
      [`${gameId}-${trophyId}`]: !prev[`${gameId}-${trophyId}`]
    }));
  };

  const toggleVideo = (gameId, trophyId) => {
    const key = `${gameId}-${trophyId}`;
    setOpenVideos(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const getFilteredTrophies = () => {
    let trophies = currentGame?.trophies || [];
    if (trophyFilter !== 'all') {
      trophies = trophies.filter(t => t.type === trophyFilter);
    }
    return trophies;
  };

  const progress = currentGame
    ? (getFilteredTrophies().filter(t => completedTrophies[`${currentGame.id}-${t.id}`]).length / getFilteredTrophies().length) * 100
    : 0;

  return (
    <div className={`App ${darkMode ? 'dark' : 'light'}`}>
      <header className="header">
        <div className="header-top">
          <h1>Guías Épicas + Trofeos</h1>
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
        <div className="search-box">
          <FaSearch />
          <input
            type="text"
            placeholder="Buscar juego..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <nav className="tabs">
        {filteredGames.map(game => (
          <button
            key={game.id}
            className={`tab-button ${activeTab === game.id ? 'active' : ''}`}
            onClick={() => setActiveTab(game.id)}
          >
            {game.title}
          </button>
        ))}
      </nav>

      <main className="container">
        {currentGame && (
          <div className="game-detail-card">
            <img src={currentGame.img} alt={currentGame.title} className="game-cover" />
            <div className="game-info">
              <h2>{currentGame.title}</h2>
              <p>{currentGame.description}</p>
              
              <div className="trophy-summary">
                <div className="trophy-count">
                  <FaTrophy className="platinum" /> {currentGame.platinum}
                  <FaTrophy className="gold" /> {currentGame.gold}
                  <FaTrophy className="silver" /> {currentGame.silver}
                  <FaTrophy className="bronze" /> {currentGame.bronze}
                </div>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${progress}%` }}></div>
                </div>
                <span>{Math.round(progress)}% completado</span>
              </div>

              <div className="filter-buttons">
                <button className={trophyFilter === 'all' ? 'active' : ''} onClick={() => setTrophyFilter('all')}>Todos</button>
                <button className={trophyFilter === 'platinum' ? 'active' : ''} onClick={() => setTrophyFilter('platinum')}>Platino</button>
                <button className={trophyFilter === 'gold' ? 'active' : ''} onClick={() => setTrophyFilter('gold')}>Oro</button>
                <button className={trophyFilter === 'silver' ? 'active' : ''} onClick={() => setTrophyFilter('silver')}>Plata</button>
                <button className={trophyFilter === 'bronze' ? 'active' : ''} onClick={() => setTrophyFilter('bronze')}>Bronce</button>
              </div>

              <div className="trophies-list">
                {getFilteredTrophies().map(trophy => {
                  const videoKey = `${currentGame.id}-${trophy.id}`;
                  const isVideoOpen = openVideos[videoKey];

                  return (
                    <div key={trophy.id} className={`trophy-item ${trophy.type} ${completedTrophies[videoKey] ? 'completed' : ''}`}>
                      <div className="trophy-header">
                        <FaTrophy className={`icon ${trophy.type}`} />
                        <div>
                          <h4>{trophy.name}</h4>
                          <p>{trophy.desc}</p>
                          <span className="difficulty">{trophy.difficulty}</span>
                        </div>
                        <button
                          className="complete-btn"
                          onClick={() => toggleTrophy(currentGame.id, trophy.id)}
                        >
                          {completedTrophies[videoKey] ? <FaCheck /> : <FaLock />}
                        </button>
                      </div>

                      {/* Botón desplegable de video */}
                      <button
                        className="video-toggle"
                        onClick={() => toggleVideo(currentGame.id, trophy.id)}
                      >
                        <FaVideo /> Ver video guía {isVideoOpen ? <FaChevronUp /> : <FaChevronDown />}
                      </button>

                      {/* iframe solo se monta si está abierto */}
                      {isVideoOpen && (
                        <div className="trophy-video">
                          <iframe
                            src={trophy.video}
                            title={trophy.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            loading="lazy"
                          ></iframe>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 Guías Épicas • Trofeos + Videos • Hecho en Colombia</p>
      </footer>
    </div>
  );
}

export default App;