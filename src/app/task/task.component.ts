import { taskObject } from './../taskObject';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

	private tasks:taskObject[] = [];

	constructor() { 
		if(!!localStorage.getItem('tasks')){
			this.tasks = JSON.parse(localStorage.getItem('tasks'));
		}
	}

	ngOnInit() {
	}

	createTask(name:string, discription:string):void{
		this.tasks.push(new taskObject(
			{
				name,
				discription,
				id: this.tasks.length + 1,
			}
		));
		localStorage.setItem('tasks', JSON.stringify(this.tasks));
	}

	test(id:number):void{
		console.log(id);
	}
}
