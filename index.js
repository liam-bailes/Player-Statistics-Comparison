
import fetch from 'node-fetch';
import fs from 'fs';
import 'dotenv/config'
import express from 'express';
import compression from 'compression'
const app = express();
const port = 8080;

app.listen(process.env.port||3000|| port, ()=> console.log('listening at 3000'));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));
app.use(compression({}));

app.post('/api', async (request, response) => {
    const search_type = request.body.search_type;
    
    if(search_type === "name"){
        const player_data = await searchPlayers_by_name(request.body.player_data);
        console.log(`returning data for player: ${request.body.player_data}`);
        response.send(player_data);
    } else if (search_type === "id"){
        const player_data = await searchPlayers_by_id(request.body.player_data);
        console.log(`returning data for player: ${request.body.player_data}`);
        response.send(player_data);
    }
});

app.post('/seasons', async (request, response) => {
    const season_ids = request.body.season_ids;
    let final =  search_for_season(season_ids);
    response.send(final);
});

function search_for_season(season_ids){
    let full_json_object;    
    let season_name = '';
    let league_name = '';
    let final_data = [];
    const jsonString = fs.readFileSync('seasons.json', 'utf-8');
    full_json_object = JSON.parse(jsonString);
        for(let i=0; i<season_ids.length; i++){
            for(let key in full_json_object){
                if (full_json_object[key].season_id === season_ids[i]){
                    season_name = full_json_object[key].season_name;
                    league_name = full_json_object[key].league_name;
                    final_data.push([season_name, league_name, season_ids[i]]);
                }
            }
        } 
   return final_data
}

async function searchPlayers_by_name(search_data){
    const api_key = process.env.API_KEY;
    const url = `https://soccer.sportmonks.com/api/v2.0/players/search/${search_data}?api_token=${api_key}&include=stats,`;
   
    const options = {
        "method": "GET"
    }

    const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e=>{
        console.error({
            "message": "oh noes",
            error: e,
        });
    });

    return response;
}

async function searchPlayers_by_id(search_data){
    const api_key = process.env.API_KEY;
    const url = `https://soccer.sportmonks.com/api/v2.0/players/${search_data}?api_token=${api_key}&include=stats,team,`;
   
    const options = {
        "method": "GET"
    }

    const response = await fetch(url, options)
    .then(res => res.json())
    .catch(e=>{
        console.error({
            "message": "oh noes",
            error: e,
        });
    });
    return response;
}


