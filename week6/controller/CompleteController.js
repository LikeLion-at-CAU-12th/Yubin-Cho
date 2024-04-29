import Complete from "../DOM/Complete.js";
import TodoController from "./TodoController.js";

//추가 버튼 클릭 시, todoController 인스턴스 생성됨
//Todo 인스턴스를 생성하여 Div, Button 태그를 만듦
//app.js에서 addTodo를 실행하여 만든 태그를 todoList의 자식 노드로 추가
//todo를 삭제, 완료에 대한 todo 리스트를 컨트롤 하는 기능
class CompleteController{
    constructor(todo){
        this.todo = todo;
        this.complete = new Complete(todo);
        // todo의 메소드들을 호출하고 삭제, 완료, innertext에 해당하는 node를 가져옴.
        this.delBtnNode = this.complete.getDelBtn();
        this.doneBtnNode = this.complete.getdoneBtn();
        this.innerNode = this.complete.getInnerText();

        //가져온 node 클릭 시 호출할 함수 설정
        this.delBtnNode.addEventListener('click', () =>{
            this.delTodo();
        });
        this.doneBtnNode.addEventListener('click', () =>{
            this.notDoneTodo();
        });
    }
    addCompleteTodo(){
        const completeList = document.getElementById("complete-list");
        completeList.appendChild(this.complete.addRow());
    }
    //todoList 요소를 가져와 자식 요소를 제거
    delTodo(){
        const completeList = document.getElementById("complete-list");
        completeList.removeChild(this.complete.getRow());
    }
    //미완 버튼 클릭 시 삭제 후 to do list 다시 추가
    notDoneTodo(todo){
        this.doneBtnNode.innerText = '완료';
        this.todoController = new TodoController(todo);
        this.todoController.addTodo();
        this.delTodo();
    }
}

export default CompleteController;