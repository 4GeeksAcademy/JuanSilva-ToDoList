import React, { useState } from "react";

const Home = () => {
	const [inputValue, setInputValue] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handleKeyDown = (e) => {
		if (e.key === 'Enter' && inputValue.trim() !== "") {
			setTodoList([...todoList, inputValue.trim()]);
			setInputValue("");
		}
	}

	const deleteTodo = (index) => {
		const newTodoList = todoList.filter((_, i) => i !== index);
		setTodoList(newTodoList);
	}

	return (
		<div style={{ backgroundColor: '#afd4bfff', minHeight: '100vh', padding: '20px' }}>
			<div style={{
				backgroundColor: 'white',
				maxWidth: '500px',
				margin: '0 auto',
				padding: '20px',
				borderRadius: '6px',
				
			}}>

				<input
					type="text"
					value={inputValue}
					placeholder="what needs to be done?"
					onChange={(e) => setInputValue(e.target.value)}
					onKeyDown={handleKeyDown}
					style={{
						width: '100%',
						padding: '10px',
						border: '0px',
						borderRadius: '4px',
						fontSize: '16px',
						marginBottom: '20px',
						outline: 'none'
					}}
				/>

				<div>
					{todoList.map((todo, index) => (
						<div
							key={index}
							style={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								padding: '6px',
								borderBottom: '1px solid #eee',
								position: 'relative'
							}}
							className="todo-item"
						>
							<span>{todo}</span>
							<button
								onClick={() => deleteTodo(index)}
								style={{
									background: 'none',
									border: 'none',
									color: '#df7777ff',
									cursor: 'pointer',
									fontSize: '18px',
									
								}}
								className="delete-btn"
							>
								<i className="fa-solid fa-trash"></i>
							</button>
						</div>
					))}
				</div>

				<div style={{
					textAlign: 'left',
					marginTop: '20px',
					padding: '10px',
					color: '#666',
					fontSize: '14px'
				}}>
					{todoList.length === 0
						? "No tasks"
						: `${todoList.length} items left`
					}
				</div>
			</div>

			<style>{`
				.todo-item:hover .delete-btn {
					opacity: 1;
				}
			`}</style>
		</div>
	);
};

export default Home;