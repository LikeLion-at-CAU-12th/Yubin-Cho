import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { Button } from './common'
import { ModalColorContext } from '../../context/context'

const Layout1 = ({ children }) => {
    const modalContext = useContext(ModalColorContext);
    const [mode1, setMode1] = useState(modalContext.yellowModal);

    const handleMode = (e) => {
        const value = e.target.value;
        if(value === 'purple'){
          setMode1(modalContext.purpleModal);
        }else{
        setMode1(modalContext.yellowModal);
    }
    }
  return (
    <ModalColorContext.Provider value = {mode1}>
      <Body mode={mode1.main}>
      <div>{children}</div>
        <Button onClick={handleMode} value='yellow'>yellow</Button>
        <Button onClick={handleMode} value='purple'>purple</Button>
      </Body>
    </ModalColorContext.Provider>
      )
}

export default Layout1;

const Body = styled.div`
  display: flex;
  height: 15%;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.mode};
`;