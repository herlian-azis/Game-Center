const initaState = {
    games: [],
    game: null,
    loading:false
}
const gamesReducer = (state = initaState, action) => {
    switch (action.type) {
        case "SET_GAMES":
            return {
                ...state, games: action.payload.games,
                loading:false
            }
        case "SET_GAME_BY_ID":
            return {
                ...state, games: action.payload.game,
                loading:false
            }
        case "SET_LOADING":
          return{ loading:true}
        default:
            return state
    }
}

export default gamesReducer