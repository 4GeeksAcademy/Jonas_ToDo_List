
//create your first component
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    return (
        <div className="container">
            <h1>Mis tareas</h1>
			<div className="counter"> Contador de tareas: {todos.length}</div>
            <ul>
                <li>
                    <input 
                        type="text" 
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") { 
                                setTodos(todos.concat(inputValue));
                                setInputValue("");
                            }
                        }}
                        placeholder="Qué tienes por hacer?" 
                    /> 
                </li>
                {todos.map((item, index) => (
                    <li key={index} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{item}</span>
                        <FontAwesomeIcon 
                            icon={faTrashAlt} 
                            onClick={() => 
                                setTodos(todos.filter(
                                    (t, currentIndex) => 
                                        index !== currentIndex
                                ))
                            }
                            style={{ cursor: "pointer" }}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;



