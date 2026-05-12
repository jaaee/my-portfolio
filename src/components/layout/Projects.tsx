import { Container, Stack, Box, Typography, Button, Grid, Card, CardContent, Chip } from "@mui/material"
import  { FaArrowRight } from "react-icons/fa"

const projects = [
  {
    title: "Enterprise Dashboard",
    tech: ["React", "TypeScript", "Material UI", "Recharts"],
    desc:
      "Comprehensive analytics dashboard with role-based access, charts, tables and API integration.",
  },
  {
    title: "Angular Admin Panel",
    tech: ["Angular", "NgRx", "RxJS", "Tailwind"],
    desc:
      "Enterprise admin panel with dynamic forms, routing guards and scalable architecture.",
  },
  {
    title: "E-Commerce Platform",
    tech: ["React", "Java", "Spring Boot", "MySQL"],
    desc:
      "Full stack application with JWT authentication and payment integration.",
  },
];

const Projects = () =>{
    return(  <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          mb={5}
        >
          <Box>
            <Typography
              sx={{
                color: "#5b6cff",
                fontWeight: 700,
                mb: 1,
              }}
            >
              FEATURED PROJECTS
            </Typography>

            <Typography variant="h3" fontWeight={800}>
              Some of My Recent Work
            </Typography>
          </Box>

          <Button endIcon={<FaArrowRight />}>View All Projects</Button>
        </Stack>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid item xs={12} md={4} key={project.title}>
              <Card
                sx={{
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid #e7eaf3",
                  boxShadow: "none",
                }}
              >
                <Box
                  sx={{
                    height: 220,
                    bgcolor: "#dbe4ff",
                  }}
                />

                <CardContent sx={{ p: 4 }}>
                  <Typography variant="h5" fontWeight={700}>
                    {project.title}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    flexWrap="wrap"
                    mt={2}
                  >
                    {project.tech.map((tech) => (
                      <Chip
                        key={tech}
                        label={tech}
                        sx={{
                          bgcolor: "#eef2ff",
                          color: "#5b6cff",
                        }}
                      />
                    ))}
                  </Stack>

                  <Typography
                    sx={{
                      mt: 3,
                      color: "#64748b",
                      lineHeight: 1.8,
                    }}
                  >
                    {project.desc}
                  </Typography>

                  <Button
                    endIcon={<FaArrowRight />}
                    sx={{ mt: 3, fontWeight: 600 }}
                  >
                    View Project
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>)
}


export default Projects