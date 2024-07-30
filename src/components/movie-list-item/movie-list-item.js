import { useContext } from 'react'
import './movie-list-item.css'
import { Context } from '../../context'

const MovieListItem = ({ name, viewers, favourite, like, id }) => {

	const { state, dispatch } = useContext(Context);

	const onDelete = () => {
		dispatch({type: "ON_DELETE", payload: id})
	}

	const OnToggle = (e) => {
		const payload = {
			id,
			prop: e.currentTarget.getAttribute('data-toggle')
		}
		dispatch({ type: "ON_TOGGLE", payload })
	}

	return (
		<li className={`list-group-item d-flex justify-content-between ${favourite && "favourite"} ${like && "like"}`}>
			<span className='list-group-item-label' onClick={OnToggle} data-toggle="like">{name}</span>
			<input type='number' className='list-group-item-input' defaultValue={viewers} readonly/>
			<div className='d-flex justify-content-center align-items-center'>
				<button type='button' className='btn-cookie btn-sm ' data-toggle="favourite" onClick={OnToggle}>
					<i className='fas fa-cookie'></i>
				</button>

				<button type='button' className='btn-trash btn-sm ' onClick={onDelete}>
					<i className='fas fa-trash'></i>
				</button>
				<i className='fas fa-star'></i>
			</div>
		</li>
	)
}

export default MovieListItem
