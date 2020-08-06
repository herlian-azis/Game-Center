import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Pagination from '../components/Pagination'
import Card from '../components/Card'
import Loading from './Loading/Loading'
import { useSelector, useDispatch } from 'react-redux'

import { getGames } from '../store/action/gameAction'
import {  useParams } from 'react-router-dom'

export default () => {
    const [currentPage, setCurrentPage] = useState()
    const { games } = useSelector(state => state.gamesReducer)
    const dispatch = useDispatch()
    const { nameGame } = useParams()

    console.log(nameGame);
    useEffect(() => {
        if (currentPage ) {
            dispatch(getGames(currentPage))
        } else if (nameGame) {
            dispatch(getGames(nameGame))
        }
    }, [dispatch, currentPage,nameGame])



    if (!games) {
        return (<Loading />)
    }

    return (
        <div>
            <h1 style={{ color: 'white' }}>Game Center</h1>
            <Container>
                <Pagination
                    currentPage={currentPage}
                    onPages={page => setCurrentPage(page)} />
                <Row style={{
                    marginRight: -186 + 'px',
                    marginLeft: -127 + 'px'
                }} >
                    {games.map((game, i) => {
                        return (
                            <Col key={i} md={3} className='mb-5'   >
                                <Card key={i} game={game} />
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        </div>
    )
}
