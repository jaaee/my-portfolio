import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { FaArrowRight } from "react-icons/fa";

const Cta = () =>{
    return(<Container maxWidth="xl" sx={{ pb: 10 }}>
        <Box
          sx={{
            background:
              "linear-gradient(90deg,#050816 0%, #08142f 45%, #0d1f4d 100%)",
            borderRadius: "30px",
            p: 6,
            color: "white",
          }}
        >
          <Grid container alignItems="center">
            <Grid item xs={12} md={8}>
              <Typography variant="h3" fontWeight={800}>
                Actively building. Actively growing.
              </Typography>

              <Typography
                sx={{
                  mt: 2,
                  color: "#cbd5e1",
                  fontSize: "18px",
                }}
              >
                Open to new opportunities and impactful full stack projects.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  textAlign: { xs: "left", md: "right" },
                  mt: { xs: 4, md: 0 },
                }}
              >
                <Button
                  variant="contained"
                  endIcon={<FaArrowRight />}
                  component="a"
                    href="mailto:jaaeeshahapurkar@gmail.com"
          
                  sx={{
                    bgcolor: "#5b6cff",
                    borderRadius: "14px",
                    px: 4,
                    py: 1.5,
                    textTransform: "none",
                    fontWeight: 700,
                  }}
                >
                  Get In Touch
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>)
}

export default Cta;