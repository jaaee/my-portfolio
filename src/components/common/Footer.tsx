import { Box, Container, Grid, IconButton, Stack, Typography } from "@mui/material";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const linkStyle = {
  cursor: "pointer",

  color: "#cbd5e1",

  transition: "0.3s",

  "&:hover": {
    color: "#7b61ff",
    transform: "translateX(4px)",
  },
};

const Footer = ({scrollToSection}:any) =>{
    return ( <Box
      id="contact"
      sx={{
        background:
          "linear-gradient(to right,#020617,#0f172a)",
        color: "white",
        pt: 8,
        pb: 4,
      }}
    >
        <Container maxWidth="xl" sx={{ pb: 10 }}>
        <Grid container spacing={5}>

          {/* LEFT */}

          <Grid item xs={12} md={4}>
            <Typography
              variant="h5"
              fontWeight={700}
              mb={2}
            >
              Jaaee Shahapurkar
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "#cbd5e1",
                lineHeight: 1.8,
                maxWidth: "320px",
              }}
            >
              Senior Frontend-Focused Full Stack Engineer
Building scalable enterprise applications with Angular, React, Next.js, Java, and Spring Boot.
            </Typography>

            <Stack
              direction="row"
              spacing={2}
              mt={3}
            >

              {/* GITHUB */}

              {/* <IconButton
                component="a"
                href="https://github.com/jaaee"
                target="_blank"
                sx={{
                  color: "white",
                  bgcolor: "#1e293b",

                  "&:hover": {
                    bgcolor: "#5b6cff",
                  },
                }}
              >
                <FaGithub />
              </IconButton> */}

              {/* LINKEDIN */}

              <IconButton
                component="a"
                href="https://linkedin.com/in/jaaee-shahapurkar-b02144120/"
                target="_blank"
                sx={{
                  color: "white",
                  bgcolor: "#1e293b",

                  "&:hover": {
                    bgcolor: "#5b6cff",
                  },
                }}
              >
                <FaLinkedin />
              </IconButton>

              {/* EMAIL */}

              <IconButton
                component="a"
                href="mailto:jaaeeshahapurkar@gmail.com"
                sx={{
                  color: "white",
                  bgcolor: "#1e293b",

                  "&:hover": {
                    bgcolor: "#5b6cff",
                  },
                }}
              >
                <FaEnvelope />
              </IconButton>

            </Stack>
          </Grid>

          {/* QUICK LINKS */}

          <Grid item xs={12} md={2}>
            <Typography
              variant="h6"
              fontWeight={600}
              mb={2}
            >
              Quick Links
            </Typography>

            <Stack spacing={1.5}>

              <Typography
                sx={linkStyle}
                onClick={() =>
                  scrollToSection("home")
                }
              >
                Home
              </Typography>

              <Typography
                sx={linkStyle}
                onClick={() =>
                  scrollToSection("projects")
                }
              >
                Projects
              </Typography>

              <Typography
                sx={linkStyle}
                onClick={() =>
                  scrollToSection("experience")
                }
              >
                Experience
              </Typography>

            </Stack>
          </Grid>

          {/* SKILLS */}

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={600}
              mb={2}
            >
              Top Skills
            </Typography>

            <Stack spacing={1}>
              <Typography>
                React
              </Typography>

              <Typography>
                Angular
              </Typography>

              <Typography>
                TypeScript
              </Typography>

              <Typography>
                Java
              </Typography>

              <Typography>
                Spring Boot
              </Typography>
            </Stack>
          </Grid>

          {/* CONTACT */}

          <Grid item xs={12} md={3}>
            <Typography
              variant="h6"
              fontWeight={600}
              mb={2}
            >
              Contact Info
            </Typography>

            <Stack spacing={2}>

              <Typography>
                jaaeeshahapurkar@gmail.com
              </Typography>

              <Typography>
                +91 9850891186
              </Typography>

              <Typography>
                Mumbai, India
              </Typography>

            </Stack>
          </Grid>

        </Grid>

        {/* BOTTOM */}

        <Box
          sx={{
            borderTop:
              "1px solid rgba(255,255,255,0.1)",
            mt: 6,
            pt: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            color="#94a3b8"
          >
            © 2026 Jaaee Shahapurkar.
            All rights reserved.
          </Typography>
        </Box>

          </Container>
        </Box>)
}


export default Footer;