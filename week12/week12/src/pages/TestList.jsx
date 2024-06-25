import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

const TestList = () => {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await axios.get('https://gominzipsession.o-r.kr/liontest/question');
      console.log(response.data);
      setQuestions(response.data.questions);
      setAnswers(new Array(response.data.questions.length).fill(0));
    };
    fetchQuestions();
  }, []);

  const putAnswer = (idx, choice) => {
    const updatedAnswers = [...answers];
    updatedAnswers[idx] = choice;
    setAnswers(updatedAnswers);
  };

  const postAnswer = async () => {
    const response = await axios.post(
      'https://gominzipsession.o-r.kr/liontest/result',
      //배열을 서버로 전송
      {answers: answers}
    );
    setResult(response.data.correctCount);
    navigate(`/liontest/result/${response.data.correctCount}`);
  };

  return (
      <MenuDom>
        <h1>🦁 멋사인 테스트 🦁</h1>
        <br/><br/>
        <TestListDom>
          {questions.map((question, idx) => (
            <QuestionDiv key={idx}>
              <Question>{idx + 1}. {question.question}</Question>
              <ChoiceWrapper>
                <ChoiceBtn
                  onClick={() => putAnswer(idx, 1)}
                  className={answers[idx] === 1}>
                  {question.choices[0]}
                </ChoiceBtn>
                <ChoiceBtn
                  onClick={() => putAnswer(idx, 2)}
                  className={answers[idx] === 2}>
                  {question.choices[1]}
                </ChoiceBtn>
                <ChoiceBtn
                  onClick={() => putAnswer(idx, 3)}
                  className={answers[idx] === 3}>
                  {question.choices[2]}
                </ChoiceBtn>
              </ChoiceWrapper>
            </QuestionDiv>
          ))}
        </TestListDom>
      <BtnWrapper>
        <Btn onClick={postAnswer}>결과는?</Btn>
        <Btn onClick={goToHome}>메인으로</Btn>
      </BtnWrapper>
      </MenuDom>
  );
};

export default TestList;

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  width: 80%;
  margin: 20px;
  flex-grow: 1;
`;

const TestListDom = styled.div`
  flex-direction: column;
  justify-content: center;
  padding-left: 2rem;
  overflow-y: auto;
  flex-grow: 1;
`;

const QuestionDiv = styled.div`
  margin-bottom: 100px;
  font-size: 14px;
  text-align: center;
`;

const Question = styled.h2`
  margin-bottom: 60px;
`;

const ChoiceBtn = styled.button`
  padding: 40px 10px;
  width: 150px;
  height: 150px;
  background-color: #83d0ef;
  border: none;
  border-radius: 50%;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover,
  &:active,
  &.active {
    background-color: #5a9eb9;
  }
  font-size: 1rem;
  font-weight: bold;
  color: white;
`;

const ChoiceWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-top: 40px;
  padding-bottom: 70px;
`;

const Btn = styled.button`
  padding: 20px;
  border: none;
  border-radius: 8px;
  background-color: #e0e0e0;
  width: 100px;
  margin-bottom: 10px;
  font-weight: bold;
  cursor: pointer;
  &:hover,
  &:active,
  &.active {
    background-color: #767676;
  }
`;
