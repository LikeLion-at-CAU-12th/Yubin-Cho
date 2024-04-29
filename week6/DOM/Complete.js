import Button from "./Button.js";
import Div from "./Div.js";

class Complete {
    constructor(completeTodo){
        this.row = new Div('','row_complete').node;
        this.textBox = new Div(completeTodo, 'text-box');
        this.doneBtn = new Button('미완', 'done-btn');
        this.delBtn = new Button('삭제', 'del-btn');
    }
    addRow(){
        [this.textBox, this.doneBtn, this.delBtn].forEach((dom) => {
            //dom이라고 이름지어서 여기에서 dom 활동 정의
            this.row.appendChild(dom.node); //row태그 아래 얘들을 넣겠다는 뜻
        })
        return this.row;
    }
    getRow(){
        return this.row;
    }
    getdoneBtn(){
        return this.doneBtn.node;
    }
    getDelBtn(){
        return this.delBtn.node;
    }
    getInnerText(){
        return this.textBox.node;
    }
}
export default Complete;