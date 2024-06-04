import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getPerPage } from '../../apis/userlist'

const PageSelection = ({curPage, setUserData, setCurPage}) => {
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const TotalCount = async () => {
            const totalCount = 30;
            //이 부분 너무 아쉬워요.. ㅠ baseURL에서 UserCard의 개수를 세는 방식으로 하고 싶었는데 아무리 찾아봐도 잘 모르겟네욤 ㅠㅠ
            const pages = Math.ceil(totalCount / 5); // 5개의 UserCard로 페이지를 나눈다.
            setTotalPages(pages);
        };
        
        TotalCount();
    }, []);

    const handleClick = async(page) => {
        const response = await getPerPage(page, 5);
        setUserData(response);
        setCurPage(page);
    }

  return (
    <SelectionLayout>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((val) => (
        <PageBox
        key={val}
        $active={val === curPage}
        onClick={() => handleClick(val)}
        >
            {val}
        </PageBox>
        ))}
    </SelectionLayout>
  )
}

export default PageSelection

const SelectionLayout = styled.div`
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
`

const PageBox = styled.div`
    font-size: 2rem;
    color: ${(props) => props.$active ? "#000000" : "#C9C9C9"}; //true or false
    &:hover{
        cursor: pointer;
        color: white;
    }
`