const stateGame={
    favorites:[]
}

 const  favoriteReducer = (state = stateGame,action)=>{
     switch (action.type) {
         case "ADD_GAME_TO_FAVORITES":
          return{
              ...state , favorites: state.favorites.concat(action.payload.game)
          }
         default:
             return state
     }
 }

 export default favoriteReducer