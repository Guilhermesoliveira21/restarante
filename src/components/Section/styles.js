import styled from "styled-components";

export const ContainerSectionStyle = styled.div`

    background-color: #fff;

    width: ${({w}) => w};
    height: ${({h}) => h};

    margin: ${({m}) => m};

    display: flex;
    flex-direction: ${({direction}) => direction || 'column'};

    align-items: ${({align}) => align};
    justify-content: ${({justifyContent}) => justifyContent};

    gap: ${({gap}) => gap};

    
`;