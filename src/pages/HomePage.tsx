// HomePage.tsx
import { Box, Typography, Card, CardContent, CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Offense from "../components/Offense";
import Defense from "../components/Defense";

  const HomePage = () => {
    const navigate = useNavigate();

    const pages = [
      {
        title: "Offense",
        description: "( Tab to See more info )",
        path: "/offense-page",
        color: "#F44336",
      },
      {
        title: "Defense",
        description: "( Tab to See more info )",
        path: "/defense-page",  
        color: "#2196F3",
      },
    ];

    return (
      <Box
        sx={{
          width: "100vw",
          height: "100vh",          // ✅ ทั้งหน้า = 1 จอพอดี
          bgcolor: "#fff",
          overflow: "hidden",       // ✅ กัน scroll
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* แถบหัว Offense / Defense ด้านบน */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: 80,            // สูง fix ของหัว (ปรับได้)
          }}
        >
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
                  }}
                >
                  <Typography variant="h5">{page.title}</Typography>
                  <Typography variant="body2">{page.description}</Typography>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </Box>

        <Box
          sx={{
            display: "flex",
            flex: 1,             
            width: "100%",
          }}
        >
        <Offense />
        <Defense />
      </Box>
    </Box>
  );
};

export default HomePage;
