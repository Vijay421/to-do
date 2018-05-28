import { taskObject } from './../taskObject';
import { TaskComponent } from '../task/task.component';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

	@Input() private name:string;
	@Input() private discription:string;
	@ViewChild(TaskComponent) child:TaskComponent;

	constructor() { }

	ngOnInit() {
	}

	createTask():void{
		this.child.createTask(this.name, this.discription);
	}

}
