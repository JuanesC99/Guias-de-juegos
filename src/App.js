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
        video: 'https://www.youtube.com/embed/9bZkp7q19f0',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 3,
        name: 'Cumplir deseos',
        type: 'gold',
        desc: 'Cautivado por la presencia de la luna, prometes vigilar el sueño del cazador.',
        video: 'https://www.youtube.com/embed/8m2Nk1r8K9M',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 4,
        name: 'Inicio de la infancia',
        type: 'gold',
        desc: 'Te has convertido en un retoño Grande y llevarás a la humanidad a renacer.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Muy Difícil'
      },
      {
        id: 5,
        name: 'Yharnam, reina pthumeria',
        type: 'silver',
        desc: 'Derrota a Yharnam, reina sangrienta del antiguo laberinto.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 6,
        name: 'Esencia de cazador',
        type: 'gold',
        desc: 'Consigue todas las armas de cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 7,
        name: 'Oficio de cazador',
        type: 'gold',
        desc: 'Consigue todas las herramientas de cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 8,
        name: 'Maestro de armas',
        type: 'silver',
        desc: 'Consigue un arma del nivel más alto.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 9,
        name: 'Maestro de gemas sangrientas',
        type: 'silver',
        desc: 'Consigue una gema sangrienta sumamente valiosa.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 10,
        name: 'Maestro rúnico',
        type: 'silver',
        desc: 'Consigue una runa de Caryll sumamente valiosa.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 11,
        name: 'Cainhurst',
        type: 'silver',
        desc: 'Accede a Cainhurst, el castillo perdido y en ruinas.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 12,
        name: 'El Coro',
        type: 'silver',
        desc: 'Accede al reino del Coro, el escalafón superior de la Iglesia de la Sanación.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 13,
        name: 'La fuente del sueño',
        type: 'silver',
        desc: 'Descubre el antiguo taller abandonado, origen del sueño del cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 14,
        name: 'Aula de conferencias de la pesadilla',
        type: 'silver',
        desc: 'Accede al edificio lectivo de Byrgenwerth, que se adentra en el reino de las pesadillas.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 15,
        name: 'Padre Gascoigne',
        type: 'bronze',
        desc: 'Derrota a la bestia que una vez fue el padre Gascoigne.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 16,
        name: 'Vicaria Amelia',
        type: 'bronze',
        desc: 'Derrota a la vicaria de la Iglesia de la Sanación.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 17,
        name: 'Sombra de Yharnam',
        type: 'bronze',
        desc: 'Derrota a las sombras que custodian el Bosque Prohibido.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 18,
        name: 'Rom, la Araña Vacua',
        type: 'bronze',
        desc: 'Derrota a la Gran Rom en el Lago de la Luna.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 19,
        name: 'El Renacido',
        type: 'bronze',
        desc: 'Derrota al Renacido en Yahar\'gul.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 20,
        name: 'Micolash, huésped de la pesadilla',
        type: 'bronze',
        desc: 'Captura a Micolash en la Pesadilla de Mensis.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 21,
        name: 'Nodriza de Mergo',
        type: 'bronze',
        desc: 'Derrota a la nodriza de Mergo en la Cuna de Mergo.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 22,
        name: 'Bestia clérigo',
        type: 'bronze',
        desc: 'Derrota a la bestia clérigo en el Viejo Yharnam.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 23,
        name: 'Bestia sedienta de sangre',
        type: 'bronze',
        desc: 'Derrota a la bestia sedienta de sangre en los cálices.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 24,
        name: 'La bruja de Hemwick',
        type: 'bronze',
        desc: 'Derrota a las brujas de Hemwick.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 25,
        name: 'Bestia oscura Paarl',
        type: 'bronze',
        desc: 'Derrota a la bestia oscura Paarl.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 26,
        name: 'Amygdala',
        type: 'bronze',
        desc: 'Derrota a Amygdala en la Frontera de la Pesadilla.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 27,
        name: 'Mártir Logarius',
        type: 'bronze',
        desc: 'Derrota al mártir Logarius en Cainhurst.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 28,
        name: 'Emisario celestial',
        type: 'bronze',
        desc: 'Derrota al emisario celestial en el Coro.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 29,
        name: 'Ebrietas, hija del cosmos',
        type: 'bronze',
        desc: 'Derrota a Ebrietas en el Altar de la Desesperación.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 30,
        name: 'Contacto de gemas sangrientas',
        type: 'bronze',
        desc: 'Consigue tu primera gema sangrienta.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 31,
        name: 'Contacto rúnico',
        type: 'bronze',
        desc: 'Consigue tu primera runa de Caryll.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Fácil'
      },
      {
        id: 32,
        name: 'Cáliz de Pthumeru',
        type: 'bronze',
        desc: 'Completa el cáliz de Pthumeru.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Media'
      },
      {
        id: 33,
        name: 'Cáliz del afligido Loran',
        type: 'bronze',
        desc: 'Completa el cáliz del afligido Loran.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 34,
        name: 'Cáliz de Isz',
        type: 'bronze',
        desc: 'Completa el cáliz de Isz.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: true,
        difficulty: 'Difícil'
      },
      {
        id: 35,
        name: 'Esencia de viejo cazador',
        type: 'gold',
        desc: 'Consigue todas las armas exclusivas del DLC "The Old Hunters".',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 36,
        name: 'Huérfano de Kos',
        type: 'bronze',
        desc: 'Derrota al huérfano de Kos en la Pesadilla del Cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: false,
        difficulty: 'Muy Difícil'
      },
      {
        id: 37,
        name: 'Ludwig, la Espada Sagrada',
        type: 'bronze',
        desc: 'Derrota a Ludwig en la Pesadilla del Cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 38,
        name: 'Lady Maria, de la torre del reloj astral',
        type: 'bronze',
        desc: 'Derrota a Lady Maria en la Pesadilla del Cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 39,
        name: 'Fracasos vivientes',
        type: 'bronze',
        desc: 'Derrota a los fracasos vivientes en la Pesadilla del Cazador.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
        completed: false,
        difficulty: 'Media'
      },
      {
        id: 40,
        name: 'Laurence, el primer vicario',
        type: 'bronze',
        desc: 'Derrota a Laurence, el primer vicario.',
        video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
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
        { id: 2, name: 'Inspector jefe', type: 'gold', desc: 'Completa el 100% de todas las misiones, casos, favores, eventos, trabajos y carreras', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Muy Difícil' },
        { id: 3, name: 'Oro puro', type: 'gold', desc: 'Obtén 30 oros en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 4, name: 'Oro sustancial', type: 'gold', desc: 'Obtén 15 oros en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 5, name: 'Oro alcanzado', type: 'gold', desc: 'Obtén un oro en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        
        // PLATA (10)
        { id: 6, name: 'Plata sustancial', type: 'silver', desc: 'Obtén 15 platas en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 7, name: 'Plata ligera', type: 'silver', desc: 'Obtén 5 platas en el registro de premios', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Fácil' },
        { id: 8, name: 'Aprendiz de inspector', type: 'silver', desc: 'Completa el 50% de todas las misiones, casos, favores, eventos, trabajos y carreras', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 9, name: 'Superpirata de Hong Kong', type: 'silver', desc: 'Piratea todas las cámaras de seguridad del juego', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 10, name: 'Víctima de la moda', type: 'silver', desc: 'Compra toda la ropa', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 11, name: 'Fan de los vehículos', type: 'silver', desc: 'Compra todos los vehículos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 12, name: 'Mr. Buen Tipo', type: 'silver', desc: 'Completa todos los favores', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 13, name: 'Superestrella del Karaoke', type: 'silver', desc: 'Obtén 90% o más en todas las canciones en los bares de Karaoke en HK', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Difícil' },
        { id: 14, name: 'Cazador de recompensas', type: 'silver', desc: 'Completa todos los trabajos de Roland', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        { id: 15, name: 'Maestro de las armas', type: 'silver', desc: 'Completa todos los casos', video: 'https://www.youtube.com/embed/dQw4w9WgXcQ', completed: false, difficulty: 'Media' },
        
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
    totalTrophies: 91,
    platinum: 1,
    gold: 2,
    silver: 17,
    bronze: 71,
    trophies: [
      {
        id: 1,
        name: 'Red Dead Redemption (Platino)',
        type: 'platinum',
        desc: 'Obtén todos los trofeos.',
        video: 'https://www.youtube.com/embed/EXAMPLE_RDR1_PLATINO',
        completed: false,
        difficulty: 'Muy Difícil'
      },
      {
        id: 2,
        name: 'How to Tame a Wild Animal (Oro)',
        type: 'gold',
        desc: 'Domina el juego al 100%.',
        video: 'https://www.youtube.com/embed/EXAMPLE_TAME',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 3,
        name: 'Pa-Pa-Pa-Pow! (Plata)',
        type: 'silver',
        desc: 'Mata 6 enemigos en Dead Eye.',
        video: 'https://www.youtube.com/embed/EXAMPLE_PAPA',
        completed: false,
        difficulty: 'Media'
      },
      {
        id: 4,
        name: 'Keep Your Dreams Simple (Bronce)',
        type: 'bronze',
        desc: 'Sobrevive 3 días en Beecher\'s Hope.',
        video: 'https://www.youtube.com/embed/EXAMPLE_SIMPLE',
        completed: true,
        difficulty: 'Fácil'
      }
    ]
  },
  {
    id: 'rdr2',
    title: 'Red Dead Redemption 2',
    img: 'rdr2-cover.jpg',
    description: 'Arthur Morgan y la banda Van der Linde. Plataformas: PS4/PS5/PC.',
    totalTrophies: 52,
    platinum: 1,
    gold: 3,
    silver: 4,
    bronze: 44,
    trophies: [
      {
        id: 1,
        name: 'Western Legend (Platino)',
        type: 'platinum',
        desc: 'Descubre todos los trofeos.',
        video: 'https://www.youtube.com/embed/EXAMPLE_RDR2_PLATINO',
        completed: false,
        difficulty: 'Muy Difícil'
      },
      {
        id: 2,
        name: 'Best in the West (Oro)',
        type: 'gold',
        desc: 'Alcanza el rango máximo en todas las habilidades.',
        video: 'https://www.youtube.com/embed/EXAMPLE_BESTWEST',
        completed: false,
        difficulty: 'Difícil'
      },
      {
        id: 3,
        name: 'Gold Rush (Plata)',
        type: 'silver',
        desc: 'Encuentra oro natural.',
        video: 'https://www.youtube.com/embed/EXAMPLE_GOLDRUSH',
        completed: false,
        difficulty: 'Media'
      },
      {
        id: 4,
        name: 'Friends With Benefits (Bronce)',
        type: 'bronze',
        desc: 'Completa un desafío de bandidos.',
        video: 'https://www.youtube.com/embed/EXAMPLE_FRIENDS',
        completed: true,
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
  }, [search, games]); // Solo search y games

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