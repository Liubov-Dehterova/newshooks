import React, { useState, useEffect } from 'react';
import Form from '../Form';

const Item = ({
	item = {
		textName: 'noname',
		text: 'lorem ipsum'
	},
	removeFromList,
	updateFromList,
}) => {
	const [isShowForm, handleShowForm] = useState(false);

	useEffect(() => {
		handleShowForm(false);
	}, [item]);

	return (
		<li className="news__list">
			{
				isShowForm ? (
					<Form
						type="edit"
						item={item}
						addFromProps={updateFromList}
					/>
				) : (
					<>
						<header className="item__head">
							<div className="item__action">
								<button
									className="addnews addnews__item"
									onClick={() => handleShowForm(!isShowForm)}
								>
									edit
								</button>
								<button
									className="addnews addnews__item"
									onClick={() => removeFromList(item.id)}
								>
									delete
								</button>
							</div>
							<h3 className="item__title">{item.textName}</h3>
						</header>
						<p>{item.text}</p>
					</>
				)
			}
		</li>
	);
}

export default Item;

