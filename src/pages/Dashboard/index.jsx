import { TextField, Typography } from "@mui/material"
import { ContainerDashboard } from "./styles"
import banner from '../../assets/banner.png';
import { CardCategory } from "../../components/CardCategory";
import { useContext } from "react";
import { LocalStorageContext } from "../../contexts/localStorage";
import { LoadingPage } from "../Loading";

export const DashboardPage = () => {

    const { session, loading } = useContext(LocalStorageContext);

    console.log(loading)

    if(loading) {
        return <LoadingPage />
    }

    return (
        <>
        <ContainerDashboard direction='row' margin="0 0 2rem">
            <Typography variant="h5" sx={{ fontWeight: '700' }}>
                Olá, {session.user}
            </Typography>
            <TextField id="outlined-basic" label="Pesquisar" variant="outlined" size="small" style={{ width: '40%' }} />
        </ContainerDashboard>
            <div>
                <img src={banner} alt="" />
            </div>
            <ContainerDashboard>

                <CardCategory />
                {/* <Typography variant="h5" fontWeight={'bold'} color="#313131" marginTop={4}>Populares</Typography> */}
            </ContainerDashboard>
        </>
    )
}