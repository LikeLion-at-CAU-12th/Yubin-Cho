import React from 'react'
import styled from 'styled-components'

const UserCard = ({data}) => {
  return (
    <UserCardLayout>
        <div className='name'>{
            `${data.name} ${data.gender === "male" ? "🏄‍♂️" : "🏄‍♀️"}` //if문이랑 동일
        }</div>
        <div className='part'>{data.part}</div>
        <div className='major'>{data.major}</div>
    </UserCardLayout>
  )
}

export default UserCard

const UserCardLayout = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 15rem;
    background-color: aliceblue ; opacity : 0.9;
    border-radius: 1rem;
    padding-left: 2rem;
    & > .name{
        font-size: 3rem;
        margin-bottom: 1.5rem;
    }
    & > .part{
        font-size: 2rem;
        margin-bottom: 0.6rem;
    }
    & > .major{
        font-size: 1.8rem;
    }
`