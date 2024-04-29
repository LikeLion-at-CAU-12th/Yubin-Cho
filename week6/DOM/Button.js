import DOM from "./DOM.js";

class Button extends DOM{
    constructor(innerText, className){
        super('button', innerText, className);
    }
    Image(){
        
    }
}

Image.src = `.week6/img/done.png/${complete}`;

comBtn = new Complete('완료', 'complete-btn');
delBtn = new Delete('삭제', 'del-btn');
doneBtn = new Done('미완', 'done-btn');

export default Button;