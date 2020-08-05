import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetchById from '../../hooks/useFetchById'
import { Row } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import Modal from '../../components/Modal'

import './Detail.css'
const DetailCard = () => {

	const { gameId } = useParams()
	const [modalShow, setModalShow] = useState(false);
	const [game, error2, loading1] = useFetchById(`https://api.rawg.io/api/games/${gameId}`)

	if (loading1) {
		return (<Loading />)
	}
console.log(game.clip);

	const platform = game.platforms.map((payload, i) => {
		if (i === game.platforms.length - 1) {
			return payload.platform.name
		} else {
			return payload.platform.name + ', '
		}
	})

	if (error2) {
		return (<p>error</p>)
	}


	return (
		<div className="recipe-card">
			<aside>
				<img src={game.background_image} alt="" />	
					
				<a  className="button" onClick={() => setModalShow(true)}><span className="icon icon-play"></span></a>
				<Modal show={modalShow} onHide={() => setModalShow(false)} clip={game.clip.clips.full}/>
			</aside>
			<article>
				<h2>{game.name}</h2>
				<Row>
					{game.tags.map((tag, i) => {
						return (<h3 key={i} style={{borderColor:"red"}}> #{tag.name} ,</h3>)
					})}
				</Row>
				<ul>
					<li><span className='icon icon-users'></span><span>1</span></li>
					<li><span className='icon icon-clock'></span><span>15 min</span></li>
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