import styled from "styled-components";

export const Title = styled.h2`

    padding-bottom: 2rem;
    width: 100%;
    font-size: 2.6rem;

    color: #313131;

`;

export const FormStyle = styled.form`

    width: 50%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    input {
        padding: .8rem 1rem;
        width: 100%;
        border: 1px solid #ccc;
box-sizing: border-box;
        outline: 0;
        border-radius: 6px;

        &:focus {
            border: 1px solid rgba(248, 182, 2, 0.83);
            box-shadow: 0 0 6px rgba(248, 182, 2, 0.59);
        }

    }

    input[type="file"] {
        position: relative;
        padding: 0 14px;
        /* width: auto; */
        color: #333;
        background-color: #f4f4f4;
        border: 1px solid #ccc;
        border-radius: 6px;
        cursor: pointer;
        text-align: center;
        width: 100%;

        &::-webkit-file-upload-button {
            padding: 0.8rem 1rem;
            color: #fff;
            background-color: rgba(248, 182, 2, 1);
            border: none;
            border-radius: 6px;
            cursor: pointer;
            transition: background-color 0.3s ease;
            width: 50%;
            
        }

        &::-webkit-file-upload-button:hover {
            background-color: rgba(248, 182, 2, 0.8);
        }
    }

    button {
        background-color: #F8B602;
        font-size: 1.1rem;
        width: 100%;
        padding: .8rem 2rem;

        border: 0;

        color: #fff;

        cursor: pointer;
        border-radius: 6px;

        transition: .1s;

        margin-top: 1rem;
        font-weight: 600;

        &:hover {
           background-color: rgba(248, 182, 2, 0.89);
        }

    }

`;