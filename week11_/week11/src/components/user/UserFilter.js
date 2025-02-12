import React from 'react'
import styled from 'styled-components'
import { filterType } from '../../constants/filtertype'
import { getPartUser, getGenderUser, getPerPage } from '../../apis/userlist'

const UserFilter = ({setFilter, setUserData, setCurPage}) => {
    const handleClick = async(type, param) => {
        if(type === "all"){
            const response = await getPerPage(1);
            //response값을 저장하기 위해서 새로운 상태 필요
            //useState를 이용해서 이 값을 저장
            setUserData(response);
            console.log(response);
            setCurPage(1);
        } else if (type === "gender"){
            const response = await getGenderUser(param);
            setUserData(response);
            console.log(response);
            setCurPage(1);
        } else if (type === "part"){
            const response = await getPartUser(param);
            setUserData(response);
            console.log(response);
            setCurPage(1);
        }
        setFilter(param); //다른 값으로 변경 가능
    }
  return (
    <FilterLayout>{filterType.map(
        (data, idx) => 
        <FilterBox
        key={idx}
        onClick={() => handleClick(data.type, data.param)}>{data.title}</FilterBox>
    )}</FilterLayout>
  )
}

export default UserFilter

const FilterLayout = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    overflow-x: scroll;
    padding-left: 2rem;
    padding-right: 2rem;
    margin-top: 2rem;
    gap: 2rem;
    &::-webkit-scrollbar{
        display: none;
    }
`

const FilterBox = styled.div`
    display: flex;
    padding: 1rem 4rem 1rem 4rem;
    border-radius: 1rem;
    font-size: 3rem;
    white-space: nowrap;
    background-color: rgb(240, 223, 190);

    &:hover{
        cursor: pointer;
        color: white;
        background-color: rgb(194,194,194);
    }
`