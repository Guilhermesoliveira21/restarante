import styled from "styled-components";

export const ImageStyle = styled.img`

    width: 100%;

    width: 80px;
    height: 80px;

    border-radius: 6px;
    box-shadow: 0 0 10px rgba(52, 52, 52, 0.56);

    margin-right: 20px;

`;

export const DescriptionStyle = styled.div`

    display: flex;
    align-items: start;
    flex-direction:column;

    /* gap: .6rem; */

    h4 {
        font-size: 1.2rem;
    }
    p {
        font-size: 14px;
        font-weight: 300;
    }

`;

export const ContainerStyle = styled.div`

    padding: .4rem;
    border-radius: 4px;

    background-color: ${({color}) => color};

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

`;