import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import "./App.css";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";

import Footer from "./components/footer/Footer";
import Scrollbtn from "./Scroll/Scrollbtn";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <BrowserRouter>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home /> <Hero />
                  <Main />
                  <Scrollbtn />
                </>
              }
            />
              
          
             
              <Route path="cart" element={<CartPage />} />
            
            
          </Routes>
        </ThemeProvider>
      </ColorModeContext.Provider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
