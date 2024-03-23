import { useContext, useState } from 'react';
import './search-panel.css'
import { Context } from '../../context';

const SearchPanel = () => {
	const [term, setTerm] = useState("");

	const { state, dispatch } = useContext(Context);

	const updateTermHandler = (e) => {
		const term = e.target.value;
		setTerm(term)
		dispatch({ type: "UPDATE_TERM", payload: term });
	}
	
	return <input type='text' className='form-control search-input' placeholder='Kinolarni qidirish' onChange={updateTermHandler} value={term} />
}

// const SearchPanel = () => {
// 	return <input type='text' className='form-control search-input' placeholder='Kinolarni qidirish' />
// }

export default SearchPanel
