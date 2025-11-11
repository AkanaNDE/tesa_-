/**
 * หน้าหลัก DefensePage
 * แสดง Navbar ด้านบน (Offense / Defense)
 */

import { useNavigate } from "react-router-dom";
import { Box, Card, CardActionArea, Typography } from "@mui/material";

const DefensePage = () => {
  const navigate = useNavigate();

  const pages = [
    {
      title: "Home",
      path: "/",   // 
      color: "#F44336",
    },
    {
      title: "Offense",
      description: "( Tab to See more info )",
      path: "/offense-page",  
      color: "#2196F3",
    },
  ];


  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        bgcolor: "#fff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Navbar ด้านบน */}
      <Box sx={{ display: "flex", width: "100%", height: 80 }}>
        {pages.map((page) => (
          <Box key={page.path} sx={{ flex: 1 }}>
            <Card
              sx={{
                width: "100%",
                height: "100%",
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              <CardActionArea
                onClick={() => navigate(page.path)}
                sx={{
                  height: "100%",
                  bgcolor: page.color,
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  "&:hover": { opacity: 0.85 },
                }}
              >
                <Typography variant="h5">{page.title}</Typography>
                <Typography variant="body2">{page.description}</Typography>
              </CardActionArea>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default DefensePage;
