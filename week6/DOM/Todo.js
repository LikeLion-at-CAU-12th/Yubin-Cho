import Div from "./Div.js"
import Image from "./image.js";

class Todo{
    constructor(todo){
        this.row = new Div('', 'row').node;
        this.textBox = new Div(todo, 'text-box');
        //버튼으로 만들었던 태그들을 이미지로 변경
        this.completeBtn = new Image('complete-btn');
        this.delBtn = new Image('del-btn');
    }
    addRow(){
        [this.textBox, this.completeBtn, this.delBtn].forEach((dom) => {
            //dom이라고 이름지어서 여기에서 dom 활동 정의
            this.row.appendChild(dom.node); //row태그 아래 얘들을 넣겠다는 뜻
        })
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getCompleteBtn(){
        return this.completeBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}
export default Todo;