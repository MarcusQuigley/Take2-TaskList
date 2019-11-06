/* eslint-disable no-undef */
const addTaskButton = document.querySelector('.button');
const taskToAddTbox = document.getElementById('task');
const clearAllTasksButton = document.querySelector('.clear-tasks');
const tasksList = document.querySelector('.collection');
const filter = document.getElementById('filter');

setup();

function setup() {
	try {
		addTaskButton.addEventListener('click', addTask);
		clearAllTasksButton.addEventListener('click', clearAllTasks);
		tasksList.addEventListener('click', deleteTask);
		filter.addEventListener('keyup', filterTasks);
	} catch (error) {
		console.error(`Error setting up project: ${error}`);
	}
}


function addTask(e) {
	let task = taskToAddTbox.value;
	if (task.length > 0) {
		const li = document.createElement('li');
		li.className = 'collection-item';
		li.appendChild(document.createTextNode(taskToAddTbox.value))
		const link = document.createElement('a');
		link.className = 'delete-item secondary-content';
		link.innerHTML = '<i class="fa fa-remove"/>'
		li.appendChild(link);
		tasksList.appendChild(li);
		taskToAddTbox.value = ''
	}
	e.preventDefault();
}

function deleteTask(e) {
	if (e.target.parentElement !== null
		&& e.target.parentElement.classList.contains('delete-item')) {
		var parent = e.target.parentElement;
		if (parent.parentElement != null) {
			tasksList.removeChild(parent.parentElement);
		}
	}
}

function clearAllTasks() {
	while (tasksList.firstChild) {
		tasksList.removeChild(tasksList.firstChild);
	}

}

function DisplayTasks() {
	for (let index = 0; index < localStorage.length; index++) {
		const task = localStorage[index];


	}
}

function filterTasks(e) {
	const value = e.target.value.toLowerCase();
	console.log(value)
	const taskItems = document.querySelectorAll('.collection-item').forEach(
		function (task) {
			var taskText = task.firstChild.textContent;
			console.log(taskText);
			if (taskText.indexOf(value) !== -1) {
				task.style.display = 'block';
			}
			else {
				task.style.display = 'none';
			}
		}
	);
}