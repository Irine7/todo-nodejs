import { TaskList, Todo, Task } from '../todo/index.js';

const input: HTMLInputElement | null = document.querySelector('.task-input');
const button: HTMLButtonElement | null = document.querySelector('.task-add');
const list: HTMLUListElement | null = document.querySelector('.list');

const tasks = new TaskList();

button?.addEventListener('click', () => {
	if (!input?.value) return;
	const newTask: Todo = {
		id: tasks.tasks.length + 1,
		title: input.value,
		completed: false,
	};
	// console.log(newTask);

	const task = new Task(newTask.id, newTask.title, newTask.completed);
	tasks.addTask(task);
	// console.log(tasks.tasks);

	const li = document.createElement('li');
	li.innerHTML = `
			<input class="checkbox" type="checkbox" ${task.completed ? 'checked' : ''} />
			${task.title}
			<button class="remove">X</button>
		`;
	const btnRemove = li.querySelector('.remove');
	btnRemove?.addEventListener('click', () => {
		tasks.removeTask(task.id);
		list?.removeChild(li);
	});
	const checkbox = li.querySelector('.checkbox');
	checkbox?.addEventListener('change', () => {
		tasks.changeStatus(task.id);
		console.log(task);
	});
	input.value = '';
	list?.appendChild(li);
});
