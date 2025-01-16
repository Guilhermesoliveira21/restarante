import { PacmanLoader } from "react-spinners"
import { ContainerPage } from "./styles"

export const LoadingPage = () => {
    return (
        <ContainerPage>
            <PacmanLoader color="#F8B602"/>
        </ContainerPage>
    )
}