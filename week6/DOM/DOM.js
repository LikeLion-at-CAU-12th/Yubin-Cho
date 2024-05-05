class DOM{
    //Div 혹은 Button 중 해당하는 HTML 태그를 생성
    constructor(tagName, innerText, className){
        this.node = document.createElement(tagName);
        this.node.innerText = innerText;
        //className이 있다면 classList에 해당하는 클래스 추가
        if (className) this.node.classList.add(className);
    }
}

export default DOM;