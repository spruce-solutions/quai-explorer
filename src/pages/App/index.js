import React from "react";
import { ChakraProvider, Portal, Divider, Center } from "@chakra-ui/react";

import theme from "../../theme/theme";
import MainPanel from "../../components/Layout/MainPanel";
import PanelContainer from "../../components/Layout/PanelContainer";
import PanelContent from "../../components/Layout/PanelContent";
import NavBar from "../../components/NavBar/NavBar";

import FloatingButton from "../../components/FloatingButton/FloatingButton";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "../../constants/routes";

import Footer from "../../components/Footer/Footer";



export default function App(props) {
  return (

    <ChakraProvider theme={theme} resetCss={false}>
      <BrowserRouter>
        <MainPanel
          w={{
            base: "100%",
            xl: "calc(100% - 50px)",
          }}
        >

          <Portal>
            <NavBar></NavBar>
          </Portal>

          <PanelContent>
            <PanelContainer>
              <Routes>
                {routes.map(route => <Route path={route.path} element={route.component} key={route.id} />)}
              </Routes>
            </PanelContainer>
          </PanelContent>

          <Divider  maxWidth='calc(100vw - 100px)'/>
          
          <Portal>
            <Footer />
          </Portal>

          <Portal> 
            <FloatingButton />
          </Portal>


        </MainPanel>
      </BrowserRouter>
    </ChakraProvider>

  );
}