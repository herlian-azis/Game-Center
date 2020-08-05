import React, { } from 'react'
import { useParams } from 'react-router-dom'
import useFetchById from '../../hooks/useFetchById'
import {Row} from 'react-bootstrap'

import './Detail.css'
const DetailCard = () => {

	const { gameId } = useParams()
	const [game, error2, loading1] = useFetchById(`https://api.rawg.io/api/games/${gameId}`)

	console.log(game.genres);
	if (loading1) {
		return(<p>CEKKKKKKKKKKKK</p>)	
	}
	


	return (
		<div className= "recipe-card">

			<aside>

				<img src={game.background_image} alt="" />

				<a href='' className="button"><span className="icon icon-play"></span></a>

			</aside>

			<article>

				<h2>{game.name}</h2>
<Row>

				{game.genres.map(nama=>{
					
					return(	<h3> {nama.name}# </h3> )

				})} 
				</Row>
			



				<ul>
					<li><span className='icon icon-users'></span><span>1</span></li>
					<li><span className='icon icon-clock'></span><span>15 min</span></li>
					<li><span className='icon icon-level'></span><span>Hard level</span></li>
					<li><span className='icon icon-calories'></span><span>248</span></li>
				</ul>
				<p dangerouslySetInnerHTML={{__html:game.description}}/>

				<p className="ingredients"><span>Platforms:&nbsp;</span>PS4, PS5</p>

			</article>

		</div>
	)
}


export default DetailCard