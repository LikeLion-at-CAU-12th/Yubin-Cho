import React, { useState } from 'react'
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom'
import { login } from "../apis/user";
import { useForm } from '../hooks/useForm';
import Modal from 'react-modal';

const Home = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const router = useNavigate();
  const onClick = async () => {
    try {
      const result = await login(id, pw);
      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("refresh", result.refreshToken);
      router("/liontest");
    } catch (error) {
      alert("아이디와 패스워드를 다시 확인하세요");
    }
  };
  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  return (
    <div>
        <MenuDom>
            <Title>🐬12주차 세션🤍</Title>
            <StyledLink to ="/books">
              Book List 📚
            </StyledLink>
            <StyledLink to ="/liontest">
              멋사인 테스트 🦁
            </StyledLink>
            <Button><button>회원가입</button><button onClick={showModal}>로그인</button></Button>
            {modalIsOpen ? (
        <Modal
        isOpen={true}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          content: {
            height: '250px',
            width: '300px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}}>
          <Inputs>
            <div>아이디</div>
            <input value={id} onChange={onChangeId} />
            <div>비밀번호</div>
            <input type="password" value={pw} onChange={onChangePw} />
          <Button><button onClick={onClick}>로그인</button></Button>
          </Inputs>
        </Modal>) : null }
        </MenuDom>
    </div>
  )
}

export default Home


const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  input {
    font-size: 20px;
    height: 20px;
    width: 290px;
    border-radius: 10px;
    border: 1px solid #888;
    padding: 10px;
    margin-bottom: 1rem;
    &::placeholder {
      color: darkgray;
      font-size: 20px;
      font-weight: 500;
      font-family: "OTWelcomeRA";
    }
  }
`;

const Button = styled.div`
  height: 100%;
  width: 85%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 1.5rem;
  button {
    font-weight: 800;
    background-color: #89cdf6;
    color: white;
    padding: 19px;
    border-radius: 10px;
    border: none;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    cursor: pointer;
    &:hover {
      box-shadow: 0 0 3px 3px skyblue;
      color: black;
      background-color: white;
    }
  }
`;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledLink = styled(Link)` //이미 만들어진것에도 꾸밀 수 있음
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;