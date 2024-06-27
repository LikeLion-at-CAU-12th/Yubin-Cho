import React from 'react'
import { birthAtom, emailAtom, userNameAtom } from '../../recoil/atom'
import { useRecoilState } from 'recoil'

const Form = ({type, inputType}) => {
    const [userName, setUserName] = useRecoilState(userNameAtom);
    const [email, setEmail] = useRecoilState(emailAtom);
    const [birth, setBirth] = useRecoilState(birthAtom);

    const onChange = (e) => {
        const value = e.target.value;
        if(inputType === '이름'){
            setUserName(value);
        }else if(inputType === '이메일'){
            setEmail(value);
        }else if(inputType === '생일'){
            setBirth(value);
        }
    }

return (
<>
<div>{inputType}</div>
<input type={type} onChange={onChange}/>
</>
  )
}

export default Form
