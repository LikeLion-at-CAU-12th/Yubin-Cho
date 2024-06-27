import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form';
import { ThemeColorContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { isSubmittedAtom } from '../../recoil/atom';
import { useSetRecoilState } from 'recoil';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setIsSubmitted = useSetRecoilState(isSubmittedAtom);

    const handleBtn = () => {
      setIsSubmitted(true);
        navigate("/mypage");
    }
  return (
    <Wrapper>
      <Form type='text' inputType='이름'/>
      <Form type='email' inputType='이메일'/>
      <Button mode = {mode.button} onClick={handleBtn}>제출</Button>
    </Wrapper>
  )
}

export default FormSection;
