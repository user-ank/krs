import { ThemeProvider, createTheme } from "@mui/material";
import Home from "./components/Home"
import { amber } from "@mui/material/colors";
import { Routes, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Candidate from "./components/Candidate/Candidate.jsx";
import { AuthProvider } from "./context/auth";
import RequireAuth from "./context/RequireAuth";

function App() {

  const theme = createTheme({
    palette: {
      warning: {
        main: amber[500],
      }
    },
  });

  return (
    <>

      <AuthProvider>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth auth={true} />} />
            <Route path="/candidate" element={<RequireAuth><Candidate /></RequireAuth>} />
          </Routes>
        </ThemeProvider>
      </AuthProvider>

    </>
  )
}

export default App
