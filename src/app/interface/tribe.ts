import { Team } from './team';

export interface Tribe {
    description: string,
    image: string,
    teams: Array<Team>
}