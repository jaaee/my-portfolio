import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { FaCloud, FaJava, FaReact, FaTools } from "react-icons/fa";

const techCards = [
  {
    title: "Frontend",
    icon: <FaReact size={42} />,
    items:
      "Angular,React, TypeScript, JavaScript, HTML5, CSS3, Redux, RxJS,Next.js",
  },
  {
    title: "Backend",
    icon: <FaJava size={42} />,
    items: "Java, Spring Boot, REST APIs, Microservices",
  },
  {
    title: "Tools",
    icon: <FaTools size={42} />,
    items: "Git, Jira, Docker, VS Code, Postman, Vite,IntelliJ",
  },
  {
    title: "Cloud",
    icon: <FaCloud size={42} />,
    items: "Google Cloud ,Agile Methodologies",
  },
];
const Skills= () =>{

    return(
         <Container maxWidth="xl" sx={{ py: 10 }} >
        <Typography
          sx={{
            color: "#5b6cff",
            fontWeight: 700,
            mb: 1,
          }}
        >
          WHAT I BUILD WITH
        </Typography>

        <Typography variant="h3" fontWeight={800} mb={6}>
          Technologies & Tools
        </Typography>

        <Grid container spacing={4}>
          {techCards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.title}>
              <Card
                sx={{
                  borderRadius: "24px",
                  boxShadow: "none",
                  border: "1px solid #e7eaf3",
                  height: "100%",
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ color: "#5b6cff" }}>{card.icon}</Box>

                  <Typography variant="h6" fontWeight={700} mt={3}>
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 2,
                      color: "#64748b",
                      lineHeight: 1.8,
                    }}
                  >
                    {card.items}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    )

}

export default Skills