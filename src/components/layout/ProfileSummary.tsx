import { Avatar, Box, Button, Card, CardContent, Container, Grid, Stack, Tooltip, Typography } from "@mui/material";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProfileSummary = ({scrollToSection}:any) =>{

    return(<Box id="home"
        sx={{
          background:
            "linear-gradient(90deg,#050816 0%, #08142f 45%, #0d1f4d 100%)",
          color: "white",
          py: 12,
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            {/* LEFT */}

            <Grid item xs={12} md={7}>
              <Typography
                sx={{
                  color: "#6c7dff",
                  fontWeight: 700,
                  mb: 2,
                }}
              >
                Hello, I'm
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontWeight: 800,
                  fontSize: { xs: "3.2rem", md: "5.2rem" },
                  lineHeight: 1.1,
                }}
              >
                Jaaee Shahapurkar
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mt: 2,
                  color: "#5b6cff",
                  fontWeight: 700,
                }}
              >
                Senior Frontend Engineer
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  mt: 1,
                  color: "#cbd5e1",
                }}
              >
                Angular • React • Java
              </Typography>

              <Typography
                sx={{
                  mt: 4,
                  color: "#cbd5e1",
                  maxWidth: "700px",
                  lineHeight: 1.9,
                  fontSize: "18px",
                  textAlign:"justify"
                }}
              >
                Frontend-focused Full Stack Developer with 7.5+ years of experience designing
                and developing enterprise-grade web applications. 
                Specialized in creating performant, accessible, and user-centric experiences using Angular and React, 
                with working experience across backend services, APIs, and Microservices using Java Spring Boot.
              </Typography>

              <Stack direction="row" spacing={3} mt={5}>
                <Button
                  variant="contained"
                  endIcon={<FaArrowRight />}
                    onClick={() =>
            scrollToSection(
              "projects"
            )
          }
                  sx={{
                    bgcolor: "#5b6cff",
                    borderRadius: "14px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  View My Work
                </Button>

                <Button
                  variant="outlined"
                onClick={() =>
           scrollToSection(
              "contact"
           )
          }
                  sx={{
                    borderColor: "#5b6cff",
                    color: "white",
                    borderRadius: "14px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 600,
                  }}
                >
                  Contact Me
                </Button>
              </Stack>

              {/* SOCIAL */}

              <Stack direction="row" spacing={2} mt={5}>
                 {/* <Tooltip title="GitHub">
                    <Avatar
                      onClick={() =>
                        window.open(
                          "https://github.com/jaaee",
                          "_blank"
                        )
                      }
                      sx={{
                        bgcolor: "#111827",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": {
                          bgcolor: "#5b6cff",
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <FaGithub />
                    </Avatar>
                  </Tooltip> */}

               {/* LINKEDIN */}

  <Tooltip title="LinkedIn">
    <Avatar
      onClick={() =>
        window.open(
          "https://linkedin.com/in/jaaee-shahapurkar-b02144120/",
          "_blank"
        )
      }
      sx={{
        bgcolor: "#111827",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          bgcolor: "#5b6cff",
          transform: "translateY(-4px)",
        },
      }}
    >
      <FaLinkedin />
    </Avatar>
  </Tooltip>

  {/* EMAIL */}

  <Tooltip title="Send Email">
    <Avatar
      onClick={() =>
        (window.location.href =
          "mailto:jaaeeshahapurkar@gmail.com")
      }
      sx={{
        bgcolor: "#111827",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          bgcolor: "#5b6cff",
          transform: "translateY(-4px)",
        },
      }}
    >
      <FaEnvelope />
    </Avatar>
  </Tooltip>
              </Stack>
            </Grid>

            {/* RIGHT */}

            <Grid item xs={12} md={5}>
              <Stack spacing={3}>
                {[
                  ["7.5+", "Years of Experience"],
                  ["15+", "Features Delivered"],
                  ["Multiple Production Releases"],
                ].map((item) => (
                  <Card
                    key={item[0]}
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: "24px",
                      color: "white",
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography variant="h3" fontWeight={800}>
                        {item[0]}
                      </Typography>

                      <Typography sx={{ mt: 1, color: "#cbd5e1" }}>
                        {item[1]}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>)
}

export default ProfileSummary;