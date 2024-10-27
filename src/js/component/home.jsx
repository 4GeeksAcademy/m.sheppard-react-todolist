import React from "react";
import TodoList from "./ToDoList";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1 className="text-center mt-5">My ToDo List</h1>
			<TodoList />

		</div>
	);
};

export default Home;
