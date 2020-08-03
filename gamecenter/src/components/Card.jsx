import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'



class CardComponent extends React.Component {

    render() {
        const game = this.props.game
        return (
            <>
                {/* <h1>{this.props.game.name}</h1> */}
                <Card className='shadow' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={game.background_image} />
                    <Card.Body>
                        <Card.Title>{game.name}</Card.Title>
                        <Card.Text>
                            {game.released}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default CardComponent