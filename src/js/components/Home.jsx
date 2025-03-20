import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

//include images into your bundle


//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState ("")
	const [todos, setTodos] = useState([])

// Add into array -> concat
// Delete from array -> filter
// Update -> map

	return (
		<div className="container">
			<h1>My ToDos</h1>
			<ul>
				
				<li> 
					<input 
					type="text" 
					onChange={(e) => setInputValue(e.target.value)}
					value={inputValue}
					onKeyPress={(e) => {
						if(e.key === "Enter") { 
							setTodos (todos.concat(inputValue))
							setInputValue("")
							}
						}}
						placeholder="Qué tienes por hacer?" 
					/> 
				</li>
				{todos.map((item, index) => (
					<li>
						{item}{""}
					<FontAwesomeIcon icon={faTrashAlt} 
						onClick={() => 
							setTodos(
								todos.filter(
									(t, currentIndex) => 
										index != currentIndex
								)
							)
						}
					/>
				</li>
				))}
				
			</ul>
			<div>Tasks Counter?</div>
		</div>
	);
};

export default Home;