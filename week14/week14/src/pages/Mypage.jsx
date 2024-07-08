import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { getMypage } from '../apis/user';


const Mypage = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMypage().then((data) => {
      setData(data);
      setLoading(false);
    })
    .catch((error) => {
      alert("Invalid Token");
    });
  }, []);

  if(loading) return <div>Wait a sec pls...</div>

  return (
    <Wrapper>
      <Title>Member Info</Title>
      <div>Your Name: {data.name} </div>
      <div>Your Age: {data.age} </div>
    </Wrapper>
  )
}

export default Mypage


const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid #89cdf6;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
  div {
    font-size: 25px;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-top: 15px;
  margin-bottom: 30px;
  color: #585858;
  font-family: SUITE;
  font-style: normal;
  font-weight: 800;
  line-height: normal;
`;
