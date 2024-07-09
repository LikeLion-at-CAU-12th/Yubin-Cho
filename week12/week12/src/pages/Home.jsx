import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { login, signUp  } from "../apis/user"; // 가정: signUp API가 존재함
import { useForm } from '../hooks/useForm';
import Modal from 'react-modal';

const Home = () => {
  const [loginId, onChangeLoginId] = useForm('');
  const [loginPw, onChangeLoginPw] = useForm('');

  const [signupId, setSignupId] = useState('');
  const [signupPw, setSignupPw] = useState('');
  const [signupName, setSignupName] = useState('');
  const [signupAge, setSignupAge] = useState('');

  const router = useNavigate();
  
  const handleSignupIdChange = (e) => setSignupId(e.target.value);
  const handleSignupPwChange = (e) => setSignupPw(e.target.value);
  const handleSignupNameChange = (e) => setSignupName(e.target.value);
  const handleSignupAgeChange = (e) => setSignupAge(e.target.value);

  const handleSignUp = async () => {
    try {
      await signUp(signupId, signupPw, signupName, signupAge);
      router("/");
    } catch (error) {
      alert("회원가입에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const [loginModalIsOpen, setLoginModalIsOpen] = useState(false);
  const [signupModalIsOpen, setSignupModalIsOpen] = useState(false);

  const handleLoginClick = async () => {
    try {
      const result = await login(loginId, loginPw);
      localStorage.setItem("access", result.accessToken);
      localStorage.setItem("refresh", result.refreshToken);
      router("/liontest");
    } catch (error) {
      alert("아이디와 패스워드를 다시 확인하세요");
    }
  };

  const toggleLoginModal = () => setLoginModalIsOpen(!loginModalIsOpen);
  const toggleSignupModal = () => setSignupModalIsOpen(!signupModalIsOpen);

  return (
    <div>
      <MenuDom>
        <Title>🐬12주차 세션🤍</Title>
        <StyledLink to="/books">Book List 📚</StyledLink>
        <StyledLink to="/liontest">멋사인 테스트 🦁</StyledLink>
        <Button>
          <button onClick={toggleSignupModal}>회원가입</button>
          {signupModalIsOpen && (
            <Modal
              isOpen={true}
              ariaHideApp={false}
              onRequestClose={toggleSignupModal}
              style={{
                content: {
                  height: '450px',
                  width: '350px',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              }}
            >
              <Inputs>
                <div>아이디</div>
                <input value={signupId} onChange={handleSignupIdChange} />
                <div>비밀번호</div>
                <input type="password" value={signupPw} onChange={handleSignupPwChange} />
                <div>이름</div>
                <input value={signupName} onChange={handleSignupNameChange} />
                <div>나이</div>
                <input value={signupAge} onChange={handleSignupAgeChange} />
              </Inputs>
              <button onClick={handleSignUp}>회원가입</button>
            </Modal>
          )}
          <button onClick={toggleLoginModal}>로그인</button>
          {loginModalIsOpen && (
            <Modal
              isOpen={true}
              ariaHideApp={false}
              onRequestClose={toggleLoginModal}
              style={{
                content: {
                  height: '250px',
                  width: '300px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              }}
            >
              <Inputs>
                <div>아이디</div>
                <input value={loginId} onChange={onChangeLoginId} />
                <div>비밀번호</div>
                <input type="password" value={loginPw} onChange={onChangeLoginPw} />
                <Button>
                  <button onClick={handleLoginClick}>로그인</button>
                </Button>
              </Inputs>
            </Modal>
          )}
        </Button>
      </MenuDom>
    </div>
  );
};

export default Home;

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

const StyledLink = styled(Link)` 
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
