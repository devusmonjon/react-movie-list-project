import { useContext } from 'react'
import './app-filter.css'
import { Context } from '../../context'

const AppFilter = () => {
	const { state, dispatch } = useContext(Context)

	const filter = state.filter;

	const updateFilterHandler = (filter) => {
		dispatch({type: "UPDATE_FILTER", payload: filter })
	}

	return (
		<div className='btn-group'>
			{btnsArr.map(btn => {
				return <button className={`btn ${filter === btn.name ? "btn-dark" : "btn-outline-dark"}`} onClick={() => updateFilterHandler(btn.name)} type='button' key={btn.name}>
				{btn.label}
			</button>
			})}
		</div>
	)
}

const btnsArr = [
	{ name: "all", label: "Barcha kinolar" },
	{ name: "popular", label: "Mashhur kinolar" },
	{ name: "mostViewers", label: "Eng ko'p ko'rilgan kinolar kinolar" }
]

export default AppFilter
