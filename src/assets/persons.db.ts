import {Person} from "../app/models/person.model" 
import { Team } from '../app/models/team-enums.model';

export const PERSONS: Person[] = [
    {
        name: 'María',
        surname: 'Gómez',
        password: '123456',
        age: 40,
        email: 'maria@gomez.com',
        team: Team.ROJO,
        image: 'https://images.generated.photos/wwmhjA25pfqtlqGdbV4nttnbtdzoR8mUTEFfZ-3Li9s/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA2MjIxMjAuanBn.jpg'
      
    },
    {
        name: 'Mario',
        surname: 'Gómez',
        password: '123456',
        age: 40,
        email: 'mario@gomez.com',
        team: Team.ROJO,
        image: 'https://images.generated.photos/U1B6bQYwrovL52dYFNx6iJ8jt_oVgw6fUsxgdROa29o/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/Z3M6Ly9nZW5lcmF0/ZWQtcGhvdG9zL3Yz/XzA5NzY3OTMuanBn.jpg'
      
    },
] 