import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'




const CardComponent = (props) => {
    const game = props.game
    const history =useHistory()
    const checkDetail = ()=>{
        history.push(`/detail/${game.id}`)
    }
    return (
        <>
            {/* <h1>{this.props.game.name}</h1> */}
            <Card className='shadow' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={game.background_image} />
                <Card.Body>
                    <Card.Title>{game.name}</Card.Title>
                    {/* <Card.Text>
                        {game.released}
                    </Card.Text> */}

                    <Button variant="primary" onClick={checkDetail}>Detail</Button> 
<br/>
                    <Button variant="warning" >Add favorites</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default CardComponent