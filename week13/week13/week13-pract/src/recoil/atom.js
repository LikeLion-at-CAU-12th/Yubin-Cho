import { atom } from "recoil";

export const userNameAtom = atom({
    key : 'userName',
    default : '황인영',
});

export const emailAtom = atom({
    key : 'email',
    default : 'likelion@cau.ac.kr',
});

export const isSubmittedAtom = atom({
    key : 'isSubmitted',
    default : false, //불리언 값
});