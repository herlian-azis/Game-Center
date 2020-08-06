export const addToFavorite = fav =>{
    return{
        type:'ADD_GAME_TO_FAVORITES',
        payload:{
            game:fav
        }
    }
}