import React from 'react'
import { charAtom } from '../../recoil/atom'
import { useRecoilState } from 'recoil'

const Radio = ({ children, name, value, defaultChecked, type, inputType}) => {
    const [char, setChar] = useRecoilState(charAtom);

    const onChange = (e) => {
        value = e.target.value;
        if(type === 'radio'){
            const value = children;
            setChar(value);
        }
    }

    return(
        <>
        <div>{inputType}</div>
            <input
            type = {type}
            name={name}
            value={value}
            defaultChecked={defaultChecked}
            onChange={onChange}
            />
            {children}
        </>
    )
}

export default Radio