const initaState = {
    games: [],
    game: null
}

const gamesReducer = (state = initaState, action) => {
    switch (action.type) {
        case "SET_GAMES":
            return {
                ...state, games: action.payload.games
            }
        case "SET_GAME_BY_ID":
            return {
                ...state, games: action.payload.game
            }
        default:
            return state
    }
}

export default gamesReducer