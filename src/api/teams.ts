import type { Teams } from "@interfaces/all-teams.interfaces";

const API_URL : string = 'https://api.football-data.org/v4/';
const API_KEY: string = import.meta.env.API_KEY;

const allTeams =  async () =>{
    try {
        const endPoint : string = 'competitions/PL/teams/';
        const response = await fetch(`${API_URL}${endPoint}`, {
            headers: {
                'X-Auth-Token' : API_KEY
            }
        });
    
        if(!response.ok) {
            const data = {'error' : 'No se encotraron datos'};
            return data;
            
        }else{
            const data = await response.json();
            return data;
        }
    } catch (error) {
        console.error('Error al obtener los datos');
    }

}

const team = async (idTeam : string) =>{
    try {
        const endPoint : string = `teams/${idTeam}`;
        const response = await fetch(`${API_URL}${endPoint}`, {
            headers: {
                'X-Auth-Token' : API_KEY
            }
        });
    
        if(!response.ok) {
            const data = {'error' : 'No se encotraron datos'};
            return data;
            
        }else{
            const data = await (response.json()) as Teams[];
            return data;
        }
    } catch (error) {
        console.error('Error al obtener los datos');
    }
}
export {allTeams, team}