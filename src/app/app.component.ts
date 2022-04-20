import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'GeekHubs-angular-kata-3';
  nombre = ''
  todos = [
    {
      id: 0,      
      name:"Todo-1",      
      completed: false
    },
    {
      id: 1,
      name:"Todo-2",      
      completed: false
    }
  ]

  newTodo(){    
    this.todos.push({id:Date.now(),name: this.nombre, completed: false});
    this.nombre = '';
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter(todo => todo.id != id);
  }
  completeTodo(id:number){
    this.todos = this.todos.map(todo => {
      if(todo.id == id){
        todo.completed = !todo.completed;
      }
      return todo;      
    })
  }
}
