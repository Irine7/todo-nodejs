export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export class Task implements Todo {
	id: number;
	title: string;
	completed: boolean;
	constructor(id: number, title: string, completed: boolean) {
		this.id = id;
		this.title = title;
		this.completed = completed;
	}
}

const newTask = new Task(1, 'New Task', false);

export class TaskList {
	tasks: Task[] = [];
	addTask(task: Todo) {
		this.tasks.push(task);
	}
	getTasks() {
		return this.tasks;
	}

	removeTask(id: number) {
		this.tasks = this.tasks.filter((task) => task.id !== id);
	}

	changeStatus(id: number) {
		this.tasks = this.tasks.map((task) => {
			if (task.id === id) {
				task.completed = !task.completed;
			}
			return task;
		})
	}
}

const newArrTask = new TaskList();
newArrTask.addTask(newTask);

