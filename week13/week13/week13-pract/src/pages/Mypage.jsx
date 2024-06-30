import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { charAtom, emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom';
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const userName = useRecoilValue(userNameAtom);
  const userChar = useRecoilValue(charAtom);
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();

  const resetUsername = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const resetChar = useResetRecoilState(charAtom);
  const reset = useResetRecoilState(isSubmittedAtom);

  const handleReset = () =>{
    reset();
    resetUsername();
    resetEmail();
    resetChar();
    navigate("/");
  }
  return (
    <Wrapper>
      <Title>{userChar} {userName}님! 반가워요💕</Title>
      <Button onClick={handleReset} mode = {mode.button}>리셋</Button>
    </Wrapper>

  )
}

export default Mypage
