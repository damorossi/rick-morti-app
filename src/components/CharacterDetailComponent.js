import React from 'react';
import './chardetail.scss';

const CharacterDetailComponent = ({ handleClose, character }) => {
	return (
		<div className="detail-itemContainer">
			<div className="detail-itemMainContent">
				<div className="detail-itemHeader">
					<button className="detail-buttonClose" onClick={handleClose}>
						x
					</button>
					<figure className="detail-imageContainer">
						<img src={character.image} title={character.name} alt={character.name} className="detail-picture" />
					</figure>

					<h1 className="detail-name">
						<span>Details</span>
						<br />
						{character.name}
					</h1>
				</div>
				<ul className="detail-itemContent">
					<li className="item-info">
						status:
						<strong>
							<span className="item-detail"> {character.status} </span>
						</strong>
					</li>
					<li className="item-info">
						species:
						<strong>
							<span className="item-detail"> {character.species} </span>
						</strong>
					</li>
					{character.type && (
						<li className="item-info">
							Type:
							<strong>
								<span className="item-detail"> {character.type} </span>
							</strong>
						</li>
					)}
					<li className="item-info">
						type:
						<strong>
							<span className="item-detail"> {character.type} </span>
						</strong>
					</li>
					<li className="item-info">
						gender:
						<strong>
							<span className="item-detail"> {character.gender} </span>
						</strong>
					</li>
					<li className="item-info">
						location:
						<strong>
							<span className="item-detail"> {character.location.name}</span>
						</strong>
					</li>
					<li className="item-info">
						episode:
						<strong>
							<span className="item-detail"> {character.episode.length} Episode/s </span>
						</strong>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default CharacterDetailComponent;
