import { useContext, useState } from "react";
import "./movies-add-form.css";
import { Context } from "../../context";

const MoviesAddForm = () => {
    const [name, setName] = useState("");
    const [viewers, setViewers] = useState("");

    const { _, dispatch } = useContext(Context);

    const inputChangeHandler = (e) => {
        if(e.target.name === "name") {
            setName(e.target.value)
        } else if(e.target.name === "viewers") {
            setViewers(e.target.value)
        }
    };

	const addFormHandler = e => {
		e.preventDefault();
		if (name && viewers) {
            dispatch({ type: "ADD_FORM", payload: { name, viewers }});
            setName("");
            setViewers("");
        } else {
            alert("Bo'sh maydon(lar)ni to'ldiring");
        }
	}

	return (
            <div className="app-add-form">
                <h3>Yangi kino qo'shish</h3>
                <form className="add-form d-flex" onSubmit={(e) => addFormHandler(e)}>
                    <input
                        type="text"
                        name="name"
                        value={name}
                        className="form-control new-post-label"
                        placeholder="Qanday kino?"
                        onChange={(e) => {
                            inputChangeHandler(e);
                        }}
                    />
                    <input
                        type="number"
                        name="viewers"
                        value={viewers}
                        className="form-control new-post-label"
                        placeholder="Necha marotaba ko'rilgan?"
                        onChange={(e) => {
                            inputChangeHandler(e);
                        }}
                    />

                    <button type="submit" className="btn btn-outline-dark">
                        Qo'shish
                    </button>
                </form>
            </div>
        );
}

export default MoviesAddForm;
