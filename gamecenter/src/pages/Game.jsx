import React, { Component } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'
import { Row, Col, Container } from 'react-bootstrap'

class Game extends Component {
    constructor() {
        super()
        this.state = {
            title: 'game center',
            games: []
        }
    }

    componentDidMount() {
        fetch("https://rawg-video-games-database.p.rapidapi.com/games?page=4", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
                "x-rapidapi-key": "51d021caadmshd40705f29ef002fp15b5a9jsn6c16506723ef"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                this.setState({ games: data.results });
            });
    }
    render() {
        return (
            <div>
                <Navbar />
                {/* <h2>{JSON.stringify(this.state.games[0])}</h2> */}
                <Container>
                    <Row >
                        {this.state.games.map((game, i) => {

                            return (
                            <Col key={i}  md={4} className='mb-5' sm={6} >
                                <Card key={i} game={game} />
                            </Col>
                            )
                        })}
                    </Row>
                </Container>
            </div>

        )
    }
}

export default Game