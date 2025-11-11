/**
 * Component หลักของแอพพลิเคชั่น
 * จัดการ routing, theme, และ React Query
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import OffensePage from "./pages/OffensePage";
import DefensePage from "./pages/DefensePage";  // ✅ เพิ่ม import
import MuiGridPage from "./pages/02_MuiGridPage";

// สร้าง Material-UI theme
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

// สร้าง Query Client สำหรับ React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/offense-page" element={<OffensePage />} />
            <Route path="/defense-page" element={<DefensePage />} /> 
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
