import './App.css'
import { motion } from 'framer-motion';
import { ProjectCard } from './components/ProjectCard';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Box, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';
import { JobCard } from './components/JobCard';


const SKILLS=[
  {"SkillName":"Front-End Development:","SkillDetails":"HTML, CSS, JavaScript, TypeScript, React.js, Material UI, Tailwind, Framer-Motion"},
  {"SkillName":"Back-End Development:","SkillDetails":"Node.js, Express.js, MongoDB, MySql"},
  {"SkillName":"Full-Stack Expertise:","SkillDetails":"Designing, developing, and deploying full-stack web applications"},
  {"SkillName":"Authentication Systems:","SkillDetails":"Building secure and robust login, signup, password reset, and OTP functionalities"},
  {"SkillName":"Redux Toolkit Mastery:","SkillDetails":"Managing complex application state effectively using async thunks and other advanced features"},
]

function App() {

  const theme=useTheme()

  const is1150=useMediaQuery(theme.breakpoints.down(1150))
  const is960=useMediaQuery(theme.breakpoints.down(960))
  const is810=useMediaQuery(theme.breakpoints.down(810))
  const is800=useMediaQuery(theme.breakpoints.down(800))
  const is680=useMediaQuery(theme.breakpoints.down(680))
  const is526=useMediaQuery(theme.breakpoints.down(526))
  const is480=useMediaQuery(theme.breakpoints.down(480))
  const is663=useMediaQuery(theme.breakpoints.down(663))
  const is414=useMediaQuery(theme.breakpoints.down(414))

  return (
    <>
    
    <Navbar/>

    <Stack component={"main"} justifyContent={'center'} width={is1150?'auto':'70rem'} mr={'auto'} ml={'auto'} alignItems={'center'}>

        <Stack height={'calc(100vh - 4rem)'} rowGap={'2rem'} component={'section'} width={'100%'} flexDirection={is1150?'row':'row'} justifyContent={'center'} alignItems={'center'}>

              
              <Stack rowGap={'1.8rem'} p={is526?2:0}>
                  
                  <Typography variant='h2' fontWeight={700} style={{width:is526?"auto":'500px',lineHeight:is414?"3.0rem":is663?"3.4rem":"3.8rem"}}>Full Stack Mern Developer 👋🏻</Typography>
                  <Typography  variant='h6' fontWeight={400} fontSize={'1.2rem'} lineHeight={'1.8rem'} sx={{width:is526?"auto":"450px"}}>Hi, I'm Rishi Bakshi. A passionate Full Stack Developer based in India.📍</Typography>
                  
                  <Stack flexDirection={'row'} columnGap={'.5rem'} alignItems={'center'}>
                    <a target='_blank' href="https://github.com/RishiBakshii">
                      <motion.i whileHover={{scale:1.1,rotate:"3deg"}} whileTap={{scale:1}} style={{fontSize:"2.5rem"}} class='bx bxl-github'></motion.i>
                    </a>

                    <a target='_blank' href="https://www.linkedin.com/in/rishi-bakshi-75b224271/">
                      <motion.i whileHover={{scale:1.1,rotate:"3deg"}} whileTap={{scale:1}} style={{fontSize:"2.5rem"}} class='bx bxl-linkedin-square'></motion.i>
                    </a>
                  </Stack>

              </Stack>
            {
              !is810 && 
            
              <Box>
                    <motion.div style={{height:is960?'280px':'340px',width:"auto"}}>
                    <motion.img
  initial={{ borderRadius: "90% 80% 80% 90%" }}
  animate={{
    borderRadius: "96% 87% 83% 93%",
  }}
  transition={{
    duration: 1, // Adjust to your desired duration
    repeat: Infinity, // Ensures infinite repetition
    repeatCount: 1,
    repeatDelay:1   // Triggers the animation once, then loops endlessly
  }}
  style={{ height: "100%", width: "100%", objectFit: "contain" }}
  src="https://rishibakshii.github.io/portfolio2.0-react/static/media/close.53a0a852a4e98ccc0b0f.jpg"
  alt="image"
/>
                    </motion.div>
              </Box>
            }

        </Stack>


        <Stack mb={is1150?'5rem':""} p={is960?2:0} rowGap={'5rem'} flexWrap={'wrap'} component={'section'} width={'100%'} height={is1150?'auto':'100vh'} flexDirection={is1150?"column":'row'} justifyContent={'space-around'} alignSelf={'center'} justifySelf={'center'}>


                <Stack rowGap={'2rem'} width={is680?'auto':'40rem'} alignSelf={is1150?'center':''}>

                    <Stack rowGap={'.5rem'}>
                      <Typography variant='h2' id='About' fontWeight={700}>About Me</Typography>
                      <Typography variant='body2' lineHeight={'1.8rem'} fontSize={'1.1rem'}>I'm Rishi Bakshi, a driven full-stack developer currently pursuing BCA. Adept with both front-end and back-end technologies, I utilize the MERN stack (MongoDB, Express.js, React.js, and Node.js) and excel in managing complex stateful applications with Redux Toolkit.</Typography>
                    </Stack>
                    
                    <Stack rowGap={'.5rem'}>
                        <Typography variant='h2'  fontWeight={700}>Full Stack Developer</Typography>

                        <Stack rowGap={'1rem'} mt={'1rem'}>
                          {
                            SKILLS.map((skill,index)=>(
                              <Stack key={index}>
                                  <Typography  variant='body1' fontWeight={800} fontSize={'1.2rem'}>{skill.SkillName}</Typography>
                                  <Stack mt={'.2rem'} flexDirection={'row'} alignItems={'center'} columnGap={'1rem'}>
                                      <Box sx={{width:"7px",height:"7px",bgcolor:"black",borderRadius:"100%"}}></Box>
                                      <Typography width={'100%'} variant='body1'>{skill.SkillDetails}</Typography>
                                  </Stack>
                              </Stack>
                            ))
                          }
                        </Stack>
                    </Stack>
                
                </Stack>


                <Stack alignSelf={is1150?'center':''}>
                      <JobCard role={"Full Stack Developer"} company={"Hell Bent Softwares"} description={"Worked for international clients to design and develop custom web applications. Led meetings to understand client needs and translate them into functional features. Utilized MERN stack and ReduxToolkit to build scalable and user-friendly interfaces."}/>
                </Stack>

        </Stack>
        

        <Stack id='Projects' component={'section'} width={'100%'} p={is1150?2:0}>
            

            <Typography fontWeight={800} variant='h2'>Take a look at my projects</Typography>
            
            
            <Stack mt={'7rem'} rowGap={'5rem'} justifyContent={is800?'center':""} alignItems={is800?'center':""}>
                <ProjectCard title={'Mern-Ecommerce'}  description={'Modern e-commerce built with best practices in mind. MERN stack, Redux Toolkit for state management, Material UI for a delightful UI, and RESTful APIs for seamless integration. Dive in and explore!'} technologies={["Mern","Redux-Toolkit"]} imageUrl={"https://res.cloudinary.com/dh5fjdce9/image/upload/v1707365755/front_inhzp9.png"} githubLink={"https://github.com/RishiBakshii/mern-ecommerce"} liveLink={"https://mern-ecommerce-rishibakshii.vercel.app"}/>
            </Stack>




        </Stack>

    </Stack>

    <Footer/>
    
    </>
  );
}

export default App;
