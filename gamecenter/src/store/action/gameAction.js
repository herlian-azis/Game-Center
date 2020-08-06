export const getGames = (page)=>{
    return dispatch=>{
        fetch(`https://api.rawg.io/api/games?page=${page}`)
        // fetch(`https://api.rawg.io/api/games?search=god-of-war`)
        .then(resp=>resp.json())
        .then(data=>{
            dispatch({
                type:"SET_GAMES",
                payload:{
                    games:data.results
                }
            })
        })
    }
}

export const getGamesById = gameId =>{
    console.log(gameId,'iddd')
    return dispatch=>{
        fetch(`https://api.rawg.io/api/games/${gameId}`)
        .then(resp=>resp.json())
        .then(data=>{
            dispatch({
                type:"SET_GAME_BY_ID",
                payload:{
                    game:data
                }
            })
        })
    }
}