export const getGames = (paramValue) => {
    return dispatch => {
        dispatch({
            type: "SET_LOADING"
        })
        let urlParams;
        if  ( typeof paramValue === "number") {
            urlParams = `?page=${paramValue}`
        } 
        else {
            urlParams = `?search=${paramValue}`
        }
        fetch(`https://api.rawg.io/api/games${urlParams}`)
        .then(resp => resp.json())
    .then(data => {
        dispatch({
            type: "SET_GAMES",
            payload: {
                games: data.results
            }
        })
    })
    }
}

export const getGamesById = gameId => {
    console.log(gameId,'dadasd')
    return dispatch => {
        dispatch({
            type: "SET_LOADING"
        })
        fetch(`https://api.rawg.io/api/games/${gameId}`)
            .then(resp => resp.json())
            .then(data => {
                dispatch({
                    type: "SET_GAME_BY_ID",
                    payload: {
                        game: data
                    }
                })
            })
    }
}