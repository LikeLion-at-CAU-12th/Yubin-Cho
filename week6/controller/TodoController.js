import Todo from "../DOM/Todo.js";
import CompleteController from "./CompleteController.js";

//추가 버튼 클릭 시, todoController 인스턴스 생성됨
//Todo 인스턴스를 생성하여 Div, Button 태그를 만듦
//app.js에서 addTodo를 실행하여 만든 태그를 todoList의 자식 노드로 추가
//todo를 삭제, 완료에 대한 todo 리스트를 컨트롤 하는 기능
class TodoController{
    constructor(todo){
        this.todo = todo;
        this.newTodo = new Todo(todo); //newTodo : todo를 이용해 만든 Todo 인스턴스
        // todo의 메소드들을 호출하고 삭제, 완료, innertext에 해당하는 node를 가져옴.
        this.delBtnNode = this.newTodo.getDelBtn();
        this.comBtnNode = this.newTodo.getCompleteBtn();
        this.innerNode = this.newTodo.getInnerText();
        
        //가져온 node 클릭 시 호출할 함수 설정
        this.delBtnNode.addEventListener('click', () =>{
            this.delTodo();
        });
        this.comBtnNode.addEventListener('click', () =>{
            this.doneTodo();
        });
    }
    addTodo(){
        const todoList = document.getElementById("to-do-list");
        const input = document.querySelector('input');
        todoList.appendChild(this.newTodo.addRow());
        input.value = ''; //공백 띄움
    }
    //todoList 요소를 가져와 자식 요소를 제거
    delTodo(){
        const todoList = document.getElementById("to-do-list");
        todoList.removeChild(this.newTodo.getRow());
    }
    //완료 버튼 클릭 시
    doneTodo(){
        this.completeController = new CompleteController(this.todo);
        this.completeController.addCompleteTodo();
        this.delTodo();
    }
}
export default TodoController;