import styled from "styled-components";

export const ContainerDashboard = styled.div`

    /* background-color: aqua; */

    width: 100%;
    display: flex;
    flex-direction: ${({direction}) => direction || 'column'};
    align-items: start;
    justify-content: space-between;

    margin: ${({margin}) => margin};

`;