import styled from "styled-components";

export const ContainerHeaderLeft = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 96.8vh;

    gap: 1rem;

    a {
        display: flex;
        align-items: center;

        border-radius: 4px;

        padding: 1rem 2rem;

        gap: .4rem;

        font-weight: 600;

        opacity: .9;

    }

    .active {
        background-color: #F8B602;
        color: #fff;
    }
`;

export const ContainerLogout = styled.div`

button {
        display: flex;
        align-items: center;

        border-radius: 4px;

        padding: 1rem 2rem;

        gap: .4rem;

        font-weight: 600;

        opacity: .9;
        cursor: pointer;
        background-color:rgb(238, 31, 31);
        color: #fff;
        width: 100%;
        border: none;
    }

    .active {
    }

`