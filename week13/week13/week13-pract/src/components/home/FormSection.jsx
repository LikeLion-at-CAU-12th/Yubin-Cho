import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form';
import { ThemeColorContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { isSubmittedAtom } from '../../recoil/atom';
import { useSetRecoilState } from 'recoil';
import Radio from './Radio';
import styled from 'styled-components';

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
      <Form type='text' inputType='이름' />
      <Form type='email' inputType='이메일' />
      <RadioWrapper>
      <Radio type="radio" name="char"  >웅장한</Radio>
      <Radio type="radio" name="char"  defaultChecked >깜찍한</Radio>
      <Radio type="radio" name="char"  >mz세대</Radio>
      <Radio type="radio" name="char" >사악한</Radio>
      </RadioWrapper>
    <Button mode = {mode.button} onClick={handleBtn}>제출</Button>
    </Wrapper>
  )
}

export default FormSection;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap : 5px;
`;
