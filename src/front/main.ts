declare global {
	interface Window {
		addTask: () => void;
	}
}

import { Task, TaskList } from '../todo/index';

const taskList = new TaskList();

function addTask() {
	const input = document.querySelector('.task-input') as HTMLInputElement;
	console.log(input);
	const title = input.value;
	const newTask = new Task(Math.random() * Date.now(), title, false);
	taskList.addTask(newTask);
	input.value = '';

	getTasks();
}

function getTasks() {
	const taskListElement = document.getElementById(
		'taskList'
	) as HTMLUListElement;
	taskListElement.innerHTML = '';

	const tasks = taskList.getTasks();
	tasks.forEach((task) => {
		const listItem = document.createElement('li');
		listItem.textContent = task.title;
		taskListElement.appendChild(listItem);
	});
}

window.addTask = addTask;
