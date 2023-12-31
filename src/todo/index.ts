export interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

export class Task implements Todo {
	constructor(
	public id: number,
	public title: string,
	public completed: boolean
	) {}
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

