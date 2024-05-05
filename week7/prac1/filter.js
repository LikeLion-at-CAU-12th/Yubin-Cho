const filterData = () =>{
    //fetch 불러오기
        //만약 자식 요소 있으면 첫번째 자식 요소를 지움.
    while(container.firstChild){
        container.removeChild(container.firstChild);
    }
    fetch(url)
    .then((response) => {
        //console.log(response); => promise 나옴

        //json반환
        return response.json()
    })
    .then((response)=>{
        //.frontend 배열만 출력됨
        console.log(response.frontend);
        const datas = response.frontend;

        //중괄호 넣으면 뒤에 값을 return을 해줘야 함.
        datas
        .filter( (data)=> data.role == "아기사자") //함수 이어질 때는 세미콜론 붙이지 않음
        .map((data)=>{ //이 안에서 순환되는 값이 data
            //DOM을 만들어
            const list = document.createElement('div');
            list.innerHTML = `제 이름은 ${data.name}입니다.
            저는 ${data.role}입니다. 그리고 제 전공은 ${data.major}(이)에용.`;

            //container의 자식요소
            container.appendChild(list);
            //data 잘 순회되는지 확인
            console.log(data);
        })
    })
}

//위 아래 .then이 뭔차이지..