import React from 'react'
import { useSelector } from "react-redux"


const FavoriteList = () => {
    const { favorites } = useSelector(state => state)
    console.log(favorites)
    return (
        <>
            <h2>1</h2>
        </>
    )
}
export default FavoriteList
