export const addToFavorite = fav =>{
    console.log(fav,'kwkwk')
    return{
        type:'ADD_GAME_TO_FAVORITES',
        payload:{
            game:fav
        }
    }
}