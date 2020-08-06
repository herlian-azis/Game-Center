import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const CardComponent = (props) => {
    const game = props.game
    const history = useHistory()
    const dispatch = useDispatch()
    const { favorites } = useSelector(state => state)


    if (!game) {
        return(
            <p>Loadingg</p>
        )
    }

    const idfav = favorites.map(fav => {
        return fav.id
    })

    console.log()
    const checkDetail = () => {
        history.push(`/detail/${game.id}`)
    }
    const addToFav = () => {
        dispatch({
            type: 'ADD_GAME_TO_FAVORITES',
            payload: {
                game
            }
        })
    }
    return (
        <>
            {/* <h1>{this.props.game.name}</h1> */}
            <Card className='shadow' style={{ width: '18rem',border: '0' }} >
                <Card.Img variant="top" src={game.background_image} />
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    {/* <Card.Text>
                        {game.released}
                    </Card.Text> */}

                    <Button variant="primary" onClick={checkDetail}>Detail</Button>
                    <br />
                    <br />
                    <Button variant="warning"  disabled={idfav.includes(game.id)} onClick={() => addToFav()} >Add favorites</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent