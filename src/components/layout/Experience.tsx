import { Container, Grid, Typography, Card, CardContent, Divider, Stack, Box } from "@mui/material"
import { FaAngular, FaJava, FaReact } from "react-icons/fa";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdSpeed } from "react-icons/md";

const learningCards = [
  {
    title: "React 18 & TypeScript",
    icon: <FaReact />,
  },
   {
    title: "Angular 21",
    icon: <FaAngular/>,
  },
    {
    title: "Java 17 , Spring Boot and Microservice Arch.",
    icon: <FaJava/>,
  },
//   {
//     title: "System Design",
//     icon: <MdOutlineArchitecture />,
//   },
  {
    title: "Clean Architecture",
    icon: <HiOutlineCodeBracket />,
  },
  {
    title: "Performance Optimization",
    icon: <MdSpeed />,
  },
  // {
  //   title: "Advanced UI/UX",
  //   icon: <FaRocket />,
  // },
  // {
  //   title: "Testing Strategies",
  //   icon: <HiOutlineCodeBracket />,
  // },
];

const Experience= () =>{

    return( <Container maxWidth="xl" sx={{ pb: 10 }} id="experience">
        <Grid container spacing={5}>
          {/* EXPERIENCE */}

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#5b6cff",
                fontWeight: 700,
                mb: 1,
              }}
            >
              EXPERIENCE
            </Typography>

            <Typography variant="h3" fontWeight={800} mb={4} fontSize="20px">
              My Professional Journey
            </Typography>

            <Card
              sx={{
                borderRadius: "24px",
                boxShadow: "none",
                border: "1px solid #e7eaf3",
              }}
            >
              <CardContent sx={{ p: 4 }}>

                 <Typography variant="h6" fontWeight={700} >
                  Volunteer Intern
                </Typography>

                <Typography sx={{ color: "#5b6cff", mt: 1 }}>
                 2022-2025
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#64748b",
                    lineHeight: 1.8,
                  }}
                >
                  Worked on React, Next.js, TypeScript, Material UI, MySQL, Java and AI/LLM integrations to deliver scalable, intelligent web applications.
                </Typography>

                <Divider sx={{ my: 2.5 }} />

                <Typography variant="h6" fontWeight={700} >
                  Software Engineer
                </Typography>

                <Typography sx={{ color: "#5b6cff", mt: 1 }}>
                 2018-2022
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#64748b",
                    lineHeight: 1.8,
                  }}
                >
                  Building scalable Angular applications using TypeScript,
                  reusable components and modern frontend architecture.
                </Typography>

                <Divider sx={{ my: 2.5 }} />

                <Typography variant="h6" fontWeight={700}>
                  System Engineer
                </Typography>

                <Typography sx={{ color: "#5b6cff", mt: 1 }}>
                  2015 - 2018
                </Typography>

                <Typography
                  sx={{
                    mt: 2,
                    color: "#64748b",
                    lineHeight: 1.8,
                  }}
                >
                  Worked on enterprise Angular applications, REST APIs and
                  scalable UI systems. Leading one of the project.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* CONTINUOUS LEARNING */}

          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#5b6cff",
                fontWeight: 700,
                mb: 1,
              }}
            >
              WHAT I'M FOCUSED ON NOW
            </Typography>

            <Typography variant="h3" fontWeight={800} mb={4} fontSize="20px">
              Continuous Learning & Modern Technologies
            </Typography>

            <Card
              sx={{
                borderRadius: "24px",
                boxShadow: "none",
                border: "1px solid #e7eaf3",
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography
                  sx={{
                    color: "#64748b",
                    lineHeight: 1.9,
                    mb: 4,
                  }}
                >
                  Currently focused on upskilling, building real-world React, Angular,Java
                  projects and staying updated with modern frontend ecosystem
                  and best practices.
                </Typography>

                <Grid container spacing={3}>
                  {learningCards.map((item) => (
                    <Grid item xs={12} sm={6} key={item.title}>
                      <Card
                        sx={{
                          bgcolor: "#f8f9ff",
                          borderRadius: "18px",
                          boxShadow: "none",
                        }}
                      >
                        <CardContent>
                          <Stack direction="row" spacing={2}>
                            <Box
                              sx={{
                                color: "#5b6cff",
                                fontSize: "24px",
                              }}
                            >
                              {item.icon}
                            </Box>

                            <Typography fontWeight={600}>
                              {item.title}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>

                <Typography
                  sx={{
                    mt: 4,
                    color: "#5b6cff",
                    fontWeight: 700,
                  }}
                >
                  Always learning. Always building.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>)
}

export default Experience