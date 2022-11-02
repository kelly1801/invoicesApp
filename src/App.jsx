import Home from "./pages/Home.page";
import DetailsPage from "./pages/Details.page.jsx";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useContext } from "react";
import { CrudContext } from "./context/Crud.context.jsx";
import GlobalStyles from "./components/Styles/globalStyles.js";

function App() {
  const { selectedTheme } = useContext(CrudContext);

  return (
    <ThemeProvider theme={selectedTheme}>
        <GlobalStyles/>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path=":invoId" element={<DetailsPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
