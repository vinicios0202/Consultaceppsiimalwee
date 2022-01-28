import styled from 'styled-components';

import {shade} from 'polished';

export const Container = styled.div`
    width: 80%;
    margin: auto;

`;

export const Title = styled.h2`
    font-size: 48px;
    color: #0aeeff;
    max-width: 590px;
    line-heigth: 56px;

    margin-top: 80px;

`;

export const Form = styled.form`
    margin-top: 40px;
    max-wigth: 600px;

    display: flex;

    input{

        flex: 1;
        height: 70px;
        padding: 0 24PX;
        border: 2px solid #ffff; 
        border-radius: 5px 0 0 5px;
        color: #0aeeff;
        border-rigth: 0;

        &::placeholder {
            color: #53dfe6;
        }

    }


    button {
        width: 210px;
        height: 70px;
        background: #53dfe6;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #fff;
        font-weight: bold;

        transition: background-color 0.2s;

        &:hover{
            background: ${shade(0.2, "#53dfe6")}
        }
    }
`;
