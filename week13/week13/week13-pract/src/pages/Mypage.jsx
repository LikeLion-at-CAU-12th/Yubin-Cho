import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { birthAtom, emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom';
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const userName = useRecoilValue(userNameAtom);
  const userBirth = useRecoilValue(birthAtom);
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();

  const resetUsername = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetBirth = useResetRecoilState(birthAtom);
  const reset = useResetRecoilState(isSubmittedAtom);

  const handleReset = () =>{
    reset();
    resetUsername();
    resetEmail();
    resetBirth();
    navigate("/");
  }
  return (
    <Wrapper>
      <Title>{userBirth}에 태어난 {userName}님! 반가워요💕</Title>
      <Button onClick={handleReset} mode = {mode.button}>리셋</Button>
    </Wrapper>

  )
}

export default Mypage
