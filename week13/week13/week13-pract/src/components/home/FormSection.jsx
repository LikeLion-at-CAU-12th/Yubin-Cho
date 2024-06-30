import React, { useState, useContext } from 'react';
import { Button, Wrapper } from '../layout/common';
import Form from './Form';
import { ThemeColorContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import { charAtom, emailAtom, isSubmittedAtom, userNameAtom } from '../../recoil/atom';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Radio from './Radio';
import styled from 'styled-components';
import Modal from 'react-modal';

const FormSection = () => {
  const mode = useContext(ThemeColorContext);
  const navigate = useNavigate();
  const setIsSubmitted = useSetRecoilState(isSubmittedAtom);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const char = useRecoilValue(charAtom);

  const showModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  const closemodal = () => {
    setModalIsOpen(false);
  };

  const handleBtn = () => {
    alert("Welcome!");
    setIsSubmitted(true);
    navigate("/mypage");
  };

  return (
    <Wrapper>
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <RadioWrapper>
        <Radio type="radio" name="char">웅장한</Radio>
        <Radio type="radio" name="char" defaultChecked>깜찍한</Radio>
        <Radio type="radio" name="char">mz세대</Radio>
        <Radio type="radio" name="char">사악한</Radio>
      </RadioWrapper>
      <Button mode={mode.button} onClick={showModal}>제출</Button>
      {modalIsOpen ? (
        <Modal
          isOpen={true}
          ariaHideApp={false}
          onRequestClose={() => setModalIsOpen(false)}
        >
          <h2>입력한 내용이</h2>
          <h3>
          특징: {char}<br></br>이름: {userName}<br></br>이메일: {email}<br></br><br></br>맞으십니까?<br>
          </br><br></br><Button mode={mode.button} onClick={closemodal}>취소</Button><Button mode={mode.button} onClick={handleBtn}>확인</Button>
          </h3>
        </Modal>
      ) : null}
    </Wrapper>
  );
};

export default FormSection;

const RadioWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;