import React from 'react';
import TodoList from './TodoList';

const Home = () => {
	const preventDefault = (e) => {
	  if (e) {
		e.preventDefault();
		e.stopPropagation();
	  }
	  return false;
	};
  
	return (
	  <div 
		className="min-h-screen bg-gray-50 py-8" 
		onSubmit={preventDefault}
	  >
		<div className="container mx-auto px-4">
		  <div className="max-w-2xl mx-auto">
			<header className="text-center mb-8">
			  <h1 className="text-4xl font-bold text-gray-800 mb-2">Mi Lista de Tareas</h1>
			  <p className="text-gray-600">Organiza tus actividades diarias</p>
			</header>
			
			<TodoList />
			
			<footer className="text-center mt-8 text-sm text-gray-500">
			  <p>Puedes agregar tareas presionando Enter</p>
			</footer>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default Home;