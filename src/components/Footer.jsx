import { MotionConfig, motion } from 'framer-motion';
import { cssIcon, reactIcon } from '../assets';
import { Button, Stack, Typography, useMediaQuery, useTheme } from '@mui/material';


export const Footer = () => {

    const theme=useTheme()
    const is688=useMediaQuery(theme.breakpoints.down(688))
    const is480=useMediaQuery(theme.breakpoints.down(480))

  return (
    <>
    {/* <hr style={{width:"70rem",marginRight:'auto',marginLeft:"auto",color:"text.secondary",opacity:.3,marginTop:"5rem"}}/> */}
    <footer id='Contact' style={{marginTop:"5rem",display: "flex",rowGap:'1.5rem',flexWrap:'wrap',padding:is480?".5rem": "2rem",justifyContent: is688?"flex-start":"space-evenly",alignItems: "flex-start"}}>
        {/* left */}
        <Stack rowGap={'1rem'} margin={'1rem'}>
            
            {/* upper */}
            <Stack rowGap={'.2rem'}>
                <Typography variant='h5' fontWeight={'600'}>Connect With Me</Typography>

                <Stack mt={.5} flexDirection={is480?"column":'row'} columnGap={'1rem'} rowGap={'.6rem'}>
                    <MotionConfig whileHover={{scale:1.050}} whileTap={{scale:1}}>
                        <motion.button className='btn'><a target='_blank' href="https://github.com/RishiBakshii"><Typography sx={{color:'white'}} variant='body1'>Github</Typography></a></motion.button>
                        <motion.button className='btn'><a target='_blank' href="https://www.linkedin.com/in/rishi-bakshi-75b224271/"><Typography sx={{color:'white'}} variant='body1'>Linkedin</Typography></a></motion.button>
                        <motion.button className='btn'><a target='_blank' href="https://x.com/RishiiBakshii?t=9qo9rCT5kTwkC-YQRVxcqw&s=08"><Typography sx={{color:'white'}} variant='body1'>Twitter</Typography></a></motion.button>
                    </MotionConfig>
                </Stack>
            
            </Stack>

            {/* lower */}
            <Stack rowGap={'.2rem'}>
                <Typography variant='h6' fontWeight={600}>Email</Typography>
                <Typography variant='body1'>rishibakshiofficial@gmail.com</Typography>
            </Stack>

        </Stack>

        {/* right */}
        <Stack rowGap={'1rem'} margin={'1rem'}>

            {/* upper */}
            <Stack rowGap={'.2rem'}>

                <Typography variant='h5' fontWeight={500}>Technologies Used</Typography>
                
                <Stack>
                    <div style={{display:"flex", alignItems:'center', columnGap:10}}>
                        <p>React</p>
                        <motion.img whileHover={{rotate:"100deg"}}  style={{width:'35px'}} src={reactIcon} alt="" />
                    </div>
                    <div style={{display:"flex", alignItems:'center', columnGap:10}}>
                        <p>Css</p>
                        <motion.img whileHover={{y:-2}}  style={{width:'35px'}} src={cssIcon} alt="" />
                    </div>
                </Stack>
            </Stack>

            {/* lower */}
            {/* <Typography variant='body1'>Made with ❤️ by RishiBakshi</Typography> */}
        
        </Stack>

    </footer>
    </>
  )
}
