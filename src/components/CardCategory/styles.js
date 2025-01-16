import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCard = styled.div`

    display: flex;
    align-items: center;
    gap: 1.8rem;

    margin-top: 1rem;

`;

export const ContainerLink = styled(Link)`

    text-decoration: none;
    color: #313131;

    img {
        width: 120px;
        height: 120px;

        object-fit: cover;

        border-radius: 50%;
        border: 1px solid #ccc;

        box-shadow: 0 0 4px #000;
    }

`;

export const ContainerCardPolulares = styled.div`

    display: flex;
    width: 100%;
    /* gap: 1rem; */
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 1rem;


    gap: 2rem 0;

`;

export const CardBodyPopular = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    padding: 1rem;

    box-sizing: border-box;
    

`;

export const CardPopular = styled.div`

    width: 32%;
    box-shadow: 0 0 4px rgba(139, 139, 139, 0.45);
    /* padding: 1rem; */
    border-radius: 8px;

    overflow: hidden;

    img {
        width: 100%;
        height: 200px;
        border-radius: 8px;

        border: 1px solid #ccc;
    }

`;

export const CardBodyPriceName = styled.div`

    display: flex;
    flex-direction: column;
    align-items: start;

    p {
        font-weight: 600;

        span {
            font-size: 1.4rem;
        }
    }


`;