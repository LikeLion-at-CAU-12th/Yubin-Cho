import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TestResult = () => {
  const [result, setReuslt] = useState([]);
  const params = useParams();
  const correctResult = params.num;
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };
  const goToTest = () => {
    navigate("/liontest");
  };

  useEffect(() => {
    const fetchResult = async () => {
      const response = await axios.get(
        `https://gominzipsession.o-r.kr/liontest/result/${correctResult}`
      );
      setReuslt(response.data);
    };
    fetchResult();
  }, []);

  return (
    <ResultBox>
      <h2>당신의 점수는? {correctResult}점!🖍️</h2>
      <img src={result.resultImg} />
      <h2>{result.resultTitle}</h2>
      <br></br>
      <BtnWrapper>
      <Btn onClick={goToTest}>다시 하기!</Btn>
      <Btn onClick={goToHome}>메인으로</Btn>
      </BtnWrapper>
    </ResultBox>
  );
};

export default TestResult;

const ResultBox = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
`

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