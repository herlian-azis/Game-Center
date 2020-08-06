import React, {useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import useFetchById from '../../hooks/useFetchById'
import { Row } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import Modal from '../../components/Modal'
import { useSelector, useDispatch } from 'react-redux'
import { getGamesById } from '../../store/action/gameAction'


import './Detail.css'
const DetailCard = () => {

	const { gameId } = useParams()
	const [modalShow, setModalShow] = useState(false);
    const  {game}  = useSelector(state => state.gamesReducer)
    const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(getGamesById(gameId))
	},[dispatch,gameId])

	if (game == null) {
		return (<Loading />)
	}
	
	const platform = game.platforms.map((payload, i) => {
		if (i === game.platforms.length - 1) {
			return payload.platform.name
		} else {
			return payload.platform.name + ', '
		}
	})

	return (
		<div className="game-card">
			<aside>
				<img src={game.background_image} alt="" />	
					
				<button  className="button"  onClick={() => setModalShow(true)}><span className="icon icon-play"></span></button>
				<Modal show={modalShow} onHide={() => setModalShow(false)} clip={game.clip.clips.full}/>
			</aside>
			<article>
				<h2>{game.name}</h2>
				<Row>
					{game.genres.map((tag, i) => {
						return (
						<h3 key={i} > #{tag.name} &nbsp;&nbsp;</h3>
						)
					})}
					<img src="vr-gaming.svg" alt="" height=''/>
				</Row>
				<ul>
				<li><span className='icon icon-users'></span><span>{game.ratings_count}</span></li>
					<li><span className='icon icon-clock'></span><span>{game.playtime}</span></li>
					<li><span className='icon icon-level'></span><span>Hard level</span></li>
					<li><span className='icon icon-calories'></span><span>248</span></li>
				</ul>
				<p dangerouslySetInnerHTML={{ __html: game.description }} />
				<p className="ingredients">
					<span>Platforms:&nbsp;</span> {platform} </p>
			</article>
		</div>
	)
}

export default DetailCard