import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState ("")
	const [todos, setTodos] = useState("")

	return (
		<div className="container">
			<h1>My ToDos</h1>
			<ul>
				
				<li> 
					<input 
					type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					placeholder="Qué tienes por hacer?" 
					/> 
				</li>
				<li>
					make the bed
					<FontAwesomeIcon icon={faTrashAlt} />
				</li>
				<li>
					Walk the dog
					<FontAwesomeIcon icon={faTrashAlt} />
				</li>
				<li>
					Pay taxes
					<FontAwesomeIcon icon={faTrashAlt} />
				</li>
				<li>
					Go on vacation
					<FontAwesomeIcon icon={faTrashAlt} />
				</li>
			</ul>
			<div>Tasks Counter?</div>
		</div>
	);
};

export default Home;