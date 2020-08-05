import React, { } from 'react'
import { useParams } from 'react-router-dom'
import useFetchById from '../hooks/useFetchById'

import './Detail.css'
const DetailCard = () => {

	const { gameId } = useParams()
	const [game, error2, loading1] = useFetchById(`https://api.rawg.io/api/games/${gameId}`)

	console.log(game.genres[0]);
	if (loading1) {
		return (
			<p>LODIINGGGGG</p>
		)
	}



	return (
		<div className="recipe-card">

			<aside>

				<img src={game.background_image} alt="" />

				<a href='' class="button"><span class="icon icon-play"></span></a>

			</aside>

			<article>

				<h2>{game.name}</h2>
				{/* {game.genres.map((genre)=>{ */}
				<h3>#Action</h3>

				{/* })} */}

				<ul>
					<li><span class="icon icon-users"></span><span>1</span></li>
					<li><span class="icon icon-clock"></span><span>15 min</span></li>
					<li><span class="icon icon-level"></span><span>Hard level</span></li>
					<li><span class="icon icon-calories"></span><span>248</span></li>
				</ul>
				<p dangerouslySetInnerHTML={{__html:game.description}}/>

				<p class="ingredients"><span>Platforms:&nbsp;</span>PS4, PS5</p>

			</article>

		</div>
	)
}


export default DetailCard