
// import React from 'react';
// import {
//   AppBar,
//   Toolbar,
//   Typography,
//   Button,
//   Container,
//   Grid,
//   Card,
//   CardContent,
//   Chip,
//   Stack,
//   Avatar,
//   Box,
  
// } from '@mui/material';
// import CodeIcon from '@mui/icons-material/Code';
// import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
// import DesignServicesIcon from '@mui/icons-material/DesignServices';
// import SpeedIcon from '@mui/icons-material/Speed';
// import SendIcon from '@mui/icons-material/Send';
// import { FaCode, FaRocket } from 'react-icons/fa';
// import { MdDesignServices, MdSpeed } from 'react-icons/md';
// import { IoSend } from 'react-icons/io5';


// const projects = [
//   {
//     title: 'SaaS Dashboard',
//     desc: 'Admin dashboard with authentication, charts and analytics.',
//     img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
//   },
//   {
//     title: 'E-commerce UI',
//     desc: 'Modern ecommerce frontend with filters and checkout.',
//     img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
//   },
//   {
//     title: 'Performance Optimization',
//     desc: 'Improved Lighthouse score and Core Web Vitals.',
//     img: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=1200&auto=format&fit=crop',
//   },
// ];

// const services = [
//   {
//     icon: <FaCode  size={80} />,
//     title: 'React / Angular Development',
//     desc: 'Build scalable and high-performance web applications.',
//   },
//   {
//     icon: <MdDesignServices size={80}  />,
//     title: 'UI Bug Fixing & UX',
//     desc: 'Improve responsiveness and user experience.',
//   },
//   {
//     icon: <MdSpeed  size={80} />,
//     title: 'Performance Optimization',
//     desc: 'Improve Core Web Vitals and speed.',
//   },
//   {
//     icon: <FaRocket   size={80} />,
//     title: 'Figma to Code',
//     desc: 'Convert Figma designs into pixel-perfect UI.',
//   },
// ];

// const skills = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Angular',
//   'Java',
//   'REST API',
//   'Git',
//   'Vercel',
// ];

// export default function App() {
//   return (
//     <Box
//       sx={{
//         background: '#050816',
//         color: 'white',
//         minHeight: '100vh',
//         fontFamily: 'Arial',
//       }}
//     >
//       {/* NAVBAR */}
//       <AppBar
//         position="static"
//         elevation={0}
//         sx={{ background: '#050816', borderBottom: '1px solid #1f2937' }}
//       >
//         <Container maxWidth="xl">
//           <Toolbar sx={{ justifyContent: 'space-between' }}>
//             <Typography variant="h6" fontWeight="bold" color="#8b5cf6">
//              Jaaee Shahapurkar
//             </Typography>

//             <Stack direction="row" spacing={4} sx={{ display: { xs: 'none', md: 'flex' } }}>
//               <Typography>Home</Typography>
//               <Typography>Projects</Typography>
//               <Typography>Services</Typography>
//               <Typography>Skills</Typography>
//               <Typography>Contact</Typography>
//             </Stack>

//             <Button
//               variant="outlined"
//               sx={{
//                 borderColor: '#8b5cf6',
//                 color: 'white',
//                 borderRadius: '12px',
//                 px: 3,
//               }}
//             >
//               Hire Me
//             </Button>
//           </Toolbar>
//         </Container>
//       </AppBar>

//        {/* Hero Section */}
//       <Container maxWidth="xl" sx={{ py: 10 }}>
//         <Grid container spacing={6} alignItems="center">
//           <Grid item xs={12} md={6}>
//             <Typography color="#8b5cf6" mb={2}>
//               Hello, I'm
//             </Typography>

//             <Typography
//               variant="h2"
//               fontWeight="bold"
//               sx={{ fontSize: { xs: '3rem', md: '5rem' } }}
//             >
//              Jaaee Shahapurkar
//             </Typography>

//             <Typography
//               variant="h4"
//               sx={{ color: '#8b5cf6', mt: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}
//             >
//               Frontend Developer (React / Angular)
//             </Typography>

//             <Typography color="gray" mt={3} lineHeight={1.8}>
//               I build fast, scalable and high-performance web applications with modern UI/UX and clean code.
//             </Typography>

//             <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} mt={5}>
//               <Button
//                 variant="contained"
//                 size="large"
//                 sx={{
//                   background: '#7c3aed',
//                   borderRadius: '14px',
//                   px: 5,
//                   py: 1.5,
//                 }}
//               >
//                 Hire Me
//               </Button>

//               <Button
//                 variant="outlined"
//                 size="large"
//                 sx={{
//                   borderColor: '#8b5cf6',
//                   color: 'white',
//                   borderRadius: '14px',
//                   px: 5,
//                   py: 1.5,
//                 }}
//               >
//                 View Projects
//               </Button>
//             </Stack>

//             <Stack
//               direction={{ xs: 'column', md: 'row' }}
//               spacing={2}
//               mt={5}
//             >
//               <Chip label="7.5+ Years Experience" sx={chipStyle} />
//               <Chip label="Performance Expert" sx={chipStyle} />
//               <Chip label="Available for Freelance" sx={chipStyle} />
//             </Stack>
//           </Grid>

//           <Grid item xs={12} md={6}>
//             <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//               <Avatar
//                 src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop"
//                 sx={{
//                   width: { xs: 300, md: 500 },
//                   height: { xs: 300, md: 500 },
//                   border: '5px solid #7c3aed',
//                 }}
//               />
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>

//       {/* Projects */}
//       <Container maxWidth="xl" sx={{ py: 8 }}>
//         <Typography variant="h4" fontWeight="bold" mb={5}>
//           Featured Projects
//         </Typography>

//         <Grid container spacing={4}>
//           {projects.map((project, index) => (
//             <Grid item xs={12} md={4} key={index}>
//               <Card sx={cardStyle}>
//                 <img
//                   src={project.img}
//                   alt={project.title}
//                   style={{ width: '100%', height: '220px', objectFit: 'cover' }}
//                 />

//                 <CardContent>
//                   <Typography variant="h6" fontWeight="bold">
//                     {project.title}
//                   </Typography>

//                   <Typography color="gray" mt={2}>
//                     {project.desc}
//                   </Typography>

//                   <Stack direction="row" spacing={3} mt={3}>
//                     <Typography color="#8b5cf6">Live Demo</Typography>
//                     <Typography color="#8b5cf6">Code</Typography>
//                   </Stack>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//          {/* Services */}
//       <Container maxWidth="xl" sx={{ py: 8 }}>
//         <Typography variant="h4" fontWeight="bold" mb={5}>
//           What I Can Help You With
//         </Typography>

//         <Grid container spacing={4}>
//           {services.map((service, index) => (

//             <Grid item xs={12} sm={6} md={3} key={index}>
//               <Card sx={cardStyle}>
//                 <CardContent>
//                   <Box color="#8b5cf6">
//                     {service.icon}
//                   </Box>

//                   <Typography variant="h6" mt={3} fontWeight="bold">
//                     {service.title}
//                   </Typography>

//                   <Typography color="gray" mt={2}>
//                     {service.desc}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </Grid>
//           ))}
//         </Grid>
//       </Container>

//        {/* Skills */}
//       <Container maxWidth="xl" sx={{ py: 8 }}>
//         <Typography variant="h4" fontWeight="bold" mb={5}>
//           Skills
//         </Typography>

//         <Stack direction="row" flexWrap="wrap" gap={2}>
//           {skills.map((skill) => (
//             <Chip key={skill} label={skill} sx={chipStyle} />
//           ))}
//         </Stack>
//       </Container>

//       {/* Contact */}
//       <Container maxWidth="xl" sx={{ py: 8 }}>
//         <Card sx={cardStyle}>
//           <CardContent>
//             <Grid container spacing={4} alignItems="center">
//               <Grid item xs={12} md={8}>
//                 <Typography variant="h4" fontWeight="bold">
//                   Let's Work Together 👋
//                 </Typography>

//                 <Typography color="gray" mt={2}>
//                   I'm always open to discussing new freelance opportunities and projects.
//                 </Typography>

//                 <Typography mt={3}>jaaeeshahapurkar@gmail.com</Typography>
//                 <Typography mt={1}>linkedin.com/in/jaaeeshahapurkar</Typography>
//               </Grid>

//               <Grid item xs={12} md={4}>
//                 <Button
//                   fullWidth
//                   variant="contained"
//                   startIcon={<IoSend  />}
//                   sx={{
//                     background: '#7c3aed',
//                     py: 2,
//                     borderRadius: '14px',
//                   }}
//                 >
//                   Send Message
//                 </Button>
//               </Grid>
//             </Grid>
//           </CardContent>
//         </Card>
//       </Container>

//       {/* Footer */}
//       <Box py={4} textAlign="center" color="gray">
//         © 2026  Jaaee Shahapurkar. All rights reserved.
//       </Box>

     

     

//     </Box>
  
//   );
// }

// const cardStyle = {
//   background: '#0f172a',
//   border: '1px solid #1f2937',
//   borderRadius: '20px',
//   color: 'white',
// };

// const chipStyle = {
//   background: '#111827',
//   color: 'white',
//   border: '1px solid #1f2937',
//   px: 1,
//   py: 2.5,
//   borderRadius: '10px',
// };




// App.jsx
// React 18 + MUI v5 + React Icons Portfolio UI

// INSTALL:
// npm install @mui/material @emotion/react @emotion/styled react-icons

import AppRoutes from "./routes/AppRoutes";


export default function App() {
   return <AppRoutes />;
}