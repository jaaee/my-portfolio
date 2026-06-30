import { AppBar, Box, Button, Container, Drawer, List, ListItem, ListItemButton, ListItemText, Stack, Toolbar, Typography } from "@mui/material";
import { FaDownload } from "react-icons/fa";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import {
  IconButton
  
} from "@mui/material";

const navItems = [
                "Home",
                "Experience",
                "Projects",
                "Skills",
                "Contact",
              ]

const Navbar = ( {scrollToSection , activeSection} :any) =>{

    const [open, setOpen] = useState(false);

    return (<AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: "#050816",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar sx={{ py: 1 }}>
                  <IconButton
  sx={{
    display: {
      xs: "flex",
      md: "none",
    },
    color: "#fff",
    marginRight:"12px"
  }}
  onClick={() => setOpen(true)}
>
  <FaBars />
</IconButton>
            <Typography
              variant="h5"
              sx={{
                flexGrow: 1,
                color: "#5b6cff",
                fontWeight: 800,
              }}
            >
              Jaaee Shahapurkar
            </Typography>

            <Stack direction="row" spacing={4} alignItems="center"  sx={{
    display: {
      xs: "none",
      md: "flex",
    },
  }}>
              {navItems.map((item) => (
                 <Typography
          key={item}
       onClick={() => scrollToSection(item.toLowerCase())}
          sx={{
            

            cursor: "pointer",
            fontWeight: 600,
            position: "relative",

            "&:hover": {
              color: "#7b61ff"
            },

            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: -6,
              width: "100%",
              height: "2px",
              background: "#7b61ff",
             transform:
                activeSection === item.toLowerCase()
      ? "scaleX(1)"
      : "scaleX(0)",
              transition: "0.3s",
            },

          

             ...(activeSection === item.toLowerCase() && {
    
                color: "#7b61ff",
   
            
    
   
 
    

  }),
          }}
        >
          {item}
        </Typography>
      ))}

              <Button
              component="a"
                href="/Jaaee _Shahapurkar.pdf"
                download="Jaaee _Shahapurkar_Resume.pdf"
                variant="contained"
                startIcon={<FaDownload />}
                sx={{
                  bgcolor: "#5b6cff",
                  borderRadius: "14px",
                  px: 3,
                  py: 1.2,
                  textTransform: "none",
                  fontWeight: 600,
                }}
                
              >
                Download Resume
              </Button>
            </Stack>
      
                     </Toolbar>
        </Container>
        <Drawer
  anchor="right"
  open={open}
  onClose={() => setOpen(false)}
>
  <Box
    sx={{
      width: 250,
      bgcolor: "#050816",
      height: "100%",
      color: "#fff",
      p: 2,
    }}
  >
    <List>
      {navItems.map((item) => (
        <ListItem key={item} disablePadding>
          <ListItemButton
            onClick={() => {
              scrollToSection(item.toLowerCase());
              setOpen(false);
            }}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <Button
      component="a"
      href="/Jaaee _Shahapurkar.pdf"
      download="Jaaee_Shahapurkar_Resume.pdf"
      variant="contained"
      fullWidth
      startIcon={<FaDownload />}
      sx={{
        mt: 2,
        bgcolor: "#5b6cff",
        textTransform: "none",
      }}
    >
      Download Resume
    </Button>
  </Box>
</Drawer>
      </AppBar>)
}

export default Navbar;