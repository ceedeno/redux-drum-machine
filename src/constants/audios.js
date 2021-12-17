import Bass from '../audios/Bass.wav'
import Guitar from '../audios/Guitar.wav'
import BongoDrums from '../audios/Bongo-drums.wav'
import Maracas from '../audios/Maracas.wav'
import Organ from '../audios/Organ.wav'
import OrganBass from '../audios/Organ-Bass.wav'
import GuitarFase2 from '../audios/Guitar-Fase-2.wav'
import Xylophone from '../audios/Xylophone.wav'
import Tablas from '../audios/Tablas.wav'
import SnareDrum from '../audios/Snare-Drum.wav'
import Rimshot from '../audios/Rimshot.wav'
import Cello from '../audios/Cello.wav'
import Cello2 from '../audios/Cello-2.wav'
import Gong from '../audios/Gong.wav'
import Piano from '../audios/Piano.wav'
import Piano2 from '../audios/Piano-2.wav'
import Flute from '../audios/Flute.wav'
import Flute2 from '../audios/Flute-2.wav'

export const audios = [
    [
        {
            id: 'Q',
            audio: new Audio(Bass),
            description: "Bass"
        },
        {
            id: 'W',
            audio: new Audio(Guitar),
            description: "Guitar"
        },
        {
            id: 'E',
            audio: new Audio(BongoDrums),
            description: "Bongo Drums"
        },
        {
            id: 'A',
            audio: new Audio(Maracas),
            description: "Maracas"
        },
        {
            id: 'S',
            audio: new Audio(Organ),
            description: "Organ"
        },
        {
            id: 'D',
            audio: new Audio(OrganBass),
            description: "Organ Bass"
        },
        {
            id: 'Z',
            audio: new Audio(GuitarFase2),
            description: "Guitar Fase 2"
        },
        {
            id: 'X',
            audio: new Audio(Xylophone),
            description: "Xylophone"
        },
        {
            id: 'C',
            audio: new Audio(Tablas),
            description: "Tablas"
        }
    ],
    [
        {
            id: 'Q',
            audio: new Audio(SnareDrum),
            description: "Snare Drum"
        },
        {
            id: 'W',
            audio: new Audio(Rimshot),
            description: "Rimshot"
        },
        {
            id: 'E',
            audio: new Audio(Cello),
            description: "Cello"
        },
        {
            id: 'A',
            audio: new Audio(Cello2),
            description: "Cello 2"
        },
        {
            id: 'S',
            audio: new Audio(Gong),
            description: "Gong"
        },
        {
            id: 'D',
            audio: new Audio(Piano),
            description: "Piano"
        },
        {
            id: 'Z',
            audio: new Audio(Piano2),
            description: "Piano 2"
        },
        {
            id: 'X',
            audio: new Audio(Flute),
            description: "Flute"
        },
        {
            id: 'C',
            audio: new Audio(Flute2),
            description: "Flute 2"
        }
    ]

];

export function indexOfAudio(id) {
    switch(id){
        case 'Q':
            return 0;
        case 'W':
            return 1;
        case 'E':
            return 2;
        case 'A':
            return 3;
        case 'S':
            return 4;
        case 'D':
            return 5;
        case 'Z':
            return 6;
        case 'X':
            return 7;
        case 'C':
            return 8;
        default:
            return -1;
    }
}