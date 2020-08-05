import React from 'react'
import { useSelector } from "react-redux"
import Card from '../components/Card'
import { Row } from 'react-bootstrap'


const FavoriteList = () => {
    const { favorites } = useSelector(state => state)
    console.log(favorites)
    if (!favorites) {
		return (
			<p>LODIINGGGGG</p>
		)
	}
    return (
        <>
            <Row>

                {favorites.map((fav, i) => {
                    return <Card game={fav} key={i} />

                })}
            </Row>
            {/* <h2>{JSON.stringify(favorites)}</h2> */}
        </>
    )
}
export default FavoriteList
