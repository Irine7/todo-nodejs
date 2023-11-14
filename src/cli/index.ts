import inquirer, { Answers } from 'inquirer';
import { Task, TaskList } from '../todo/index.js';

const taskList = new TaskList();

async function run() {
	let answer: Answers | undefined = undefined;
	console.log('Welcome to your task manager');
	while (answer?.action !== 'Exit') {
		answer = await inquirer.prompt([
			{
				type: 'list',
				name: 'action',
				message: 'What do you want to do?',
				choices: [
					'Add task',
					'Get tasks',
					'Remove task',
					'Change status',
					'Exit',
				],
			},
		]);

		// Add a check for undefined
		if (answer && answer.action) {
			switch (answer.action) {
				case 'Add task': {
					await addTask();
					break;
				}
				case 'Get tasks': {
					await getTasks();
					break;
				}
				case 'Remove task': {
					await removeTask();
					break;
				}
				case 'Change status': {
					await changeStatus();
					break;
				}
				case 'Exit': {
					console.log('Good Bye');
					return;
				}
			}
		}
	}
}

async function addTask() {
	const answers = await inquirer.prompt([
		{
			type: 'input',
			name: 'text',
			prefix: '',
			message: 'Set new task:',
		},
	]);

	const newTask = new Task(Math.random() * Date.now(), answers.text, false);
	taskList.addTask(newTask);
	console.log('Task added successfully!');
}

async function getTasks() {
	const tasks = taskList.getTasks();
	console.log(tasks);
	tasks.forEach((task) => {
		console.log(`
            Task: ${task.title}
            Completed: ${task.completed ? 'Yes' : 'No'}
        `);
	});
}

async function removeTask() {
	const tasks = taskList.getTasks();
	const taskChoices = tasks.map((task) => ({
		name: task.title,
		value: task.id,
	}));

	const answer = await inquirer.prompt([
		{
			type: 'list',
			name: 'taskId',
			message: 'Choose a task to remove:',
			choices: taskChoices,
		},
	]);

	taskList.removeTask(answer.taskId);
	console.log('Task removed successfully!');
}

async function changeStatus() {
	const tasks = taskList.getTasks();
	const taskStatus = tasks.map((task) => ({
		name: task.title,
		value: task.id,
	}));

	const answer = await inquirer.prompt([
		{
			type: 'list',
			name: 'taskId',
			message: 'Choose a task to change its status:',
			choices: taskStatus,
		},
	]);

	taskList.changeStatus(answer.taskId);
	console.log('Task status was changed successfully!');
}

run();
