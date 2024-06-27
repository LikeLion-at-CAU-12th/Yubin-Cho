import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { emailAtom, isSubmittedAtom, userNameAtom } from '../recoil/atom';
import { Button, Title, Wrapper } from '../components/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const Mypage = () => {
  const userName = useRecoilValue(userNameAtom);
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();

  const resetUsername = useResetRecoilState(userNameAtom);
  const resetEmail = useResetRecoilState(emailAtom);
  const reset = useResetRecoilState(isSubmittedAtom);

  const handleReset = () =>{
    reset();
    resetUsername();
    resetEmail();
    navigate("/");
  }
  return (
    <Wrapper>
      <Title>Welcome {userName} 💕</Title>
      <Button onClick={handleReset} mode = {mode.button}>리셋</Button>
    </Wrapper>

  )
}

export default Mypage
