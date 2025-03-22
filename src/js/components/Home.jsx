
//create your first component
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <h1>My ToDos</h1>
			<div className="counter"> Counter: {todos.length}</div>
            <ul>
                <li>
                    <input 
                        type="text" 
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyPress={(e) => {
                            if (e.key === "Enter") { 
                                setTodos(todos.concat(inputValue));
                                setInputValue("");
                            }
                        }}
                        placeholder="Qué tienes por hacer?" 
                    /> 
                </li>
                {todos.map((item, index) => (
                    <li key={index}>
                        {item}{" "}
                        <FontAwesomeIcon icon={faTrashAlt} 
                            onClick={() => 
                                setTodos(
                                    todos.filter(
                                        (t, currentIndex) => 
                                            index !== currentIndex
                                    )
                                )
                            }
                        />
                    </li>
                ))}
            </ul>
            
        </div>
    );
};

export default Home;


// import React, {useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

//  const Home = () =>  {
// 	const [inputValue, setInputValue] = useState("")
// 	const [todos, setTodos] = useState([])
//  }

// return (
// 	<div className="container">
// 		<h1>Mis tareas</h1>
// 		<ul>
// 			<li>
// 				<input 
// 					type="text"
// 					onChange={(e) => setInputValue(e.target.value)}
// 					value={inputValue}
// 					key={(e) => {
// 						if (e.key === "Enter") {
// 							setTodos(todos.concat(inputValue))
// 							setInputValue("")
// 						}
// 					}} 
// 					placeholder="¿Qué tareas tienes por hacer"

// 				/>
// 			</li>

// 			{todos.map((item, index) => (
// 				<li key={index}>
// 					{item}{""}
// 					<FontAwesomeIcon icon={faTrashAlt} 
// 						onClick={() => 
// 							setTodos(
// 								todos.filter(
// 									(t, currentIndex) => 
// 										index != currentIndex
// 								)
// 							)
// 						}
// 					/>
// 				</li>
// 			))}

// 		</ul>
// 	</div>
// )




// import React, {useState} from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

// //include images into your bundle


