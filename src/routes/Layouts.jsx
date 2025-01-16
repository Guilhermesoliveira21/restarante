import { Grid, Paper } from "@mui/material";
import { Outlet } from "react-router-dom";
import { HeaderLeft } from "../components/HeaderLeft";
import { Header } from "../components/Header";
import { Section } from "../components/Section";
import { HeaderRigth } from "../components/HeaderRigth";
import { OrderMenu } from "../components/OrderMenu";

export const LayautHeader = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={3} md={2}>
        <Paper elevation={3} style={{
            padding: "16px",
            textAlign: "center",
            marginBottom: "16px",
            position: "fixed", 
            top: 0, 
            zIndex: 100,
            backgroundColor: 'white', 
          }}>
          <HeaderLeft />
        </Paper>
      </Grid>

      <Grid item xs={12} sm={9} md={10} style={{border: 'none', boxShadow: 'none'}}>
        <Paper
          elevation={0}
          style={{border: 'none', boxShadow: '0 0 0 transparent'}}
        >
    
        </Paper>

        <Paper elevation={1} style={{ padding: "30px 0", textAlign: "center" }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Outlet /> 
            </Grid>
            <Grid item xs={4}>
              <Section w="100%" h='100vh'>
                <HeaderRigth/>
                <OrderMenu />
              </Section>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};


export const LayoutSemHeader = () => {
    return <Outlet />;
  }; 