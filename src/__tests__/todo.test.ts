import { TaskList, Task } from '../todo/index';

describe ('Test de todo', () => {
	let list = new TaskList();
	
	it ('Function add new task to list is ok', () => {
		const newTask = new Task(1, 'test', false);

		expect(newTask).toBeInstanceOf(Task);
		expect(newTask.id).toBe(1);
		expect(newTask.title).toBe('test');
		expect(newTask.completed).toBe(false);
	})

	it('Add task to array', () => {
		const newTask = new Task(1, 'test', false);
		list.addTask(newTask);

		expect(list.getTasks()).toContain(newTask)
		expect(list.getTasks().length).toBe(1)
	})

	it('Remove a task from list', () => {

		list.removeTask(1);
		expect(list.getTasks().length).toBe(0);
	})

	it('Change status of task', () => {
		const newTask = new Task(1, 'test', false);
		list.addTask(newTask);
		list.changeStatus(1);
		expect(newTask.completed).toBe(true)
	})
})


