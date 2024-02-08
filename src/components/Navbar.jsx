import { IconButton, Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import { motion } from 'framer-motion'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NAVMENU=['Home','About','Projects','Contact']

export const Navbar = () => {

  const theme=useTheme()

  const is600=useMediaQuery(theme.breakpoints.down(600))
  const is480=useMediaQuery(theme.breakpoints.down(480))
  const [navOpen,setNavOpen]=useState(false)

  const toggleNavbar=()=>{
    setNavOpen(!navOpen)
  }

  return (
    <Stack component={"header"} flexDirection={'row'} justifyContent={is600?'space-evenly':'space-around'} alignItems={"center"} height={'4rem'} p={'1rem'}>

        <Typography variant='h6' fontWeight={500}>Rishi.dev</Typography>
        
        <motion.div style={{backgroundColor:is600?"#1f0b85bf":"",color:is600?"white":"",position:is600?"fixed":"",top:'4rem',height:is600?"100vh":"",width:is480?"100vw":is600?"20rem":""}}
        variants={{
          hide:{left:"-30rem"},
          show:{left:0},
        }}
        initial="hide"
        animate={navOpen?"show":"hide"}
        transition={{ease:'easeInOut',type:'spring',damping:15}}
        >

            <Stack component={'nav'} flexDirection={is600?'column':'row'} height={'100%'} rowGap={is600?'5rem':""} columnGap={'1.5rem'} mt={is600?'5rem':""} justifyContent={is600?"flex-start":""} alignItems={is600?"center":""}>
                {
                  NAVMENU.map((menu)=>(
                    <Typography onClick={toggleNavbar} variant={is480?'h6':"body1"} key={menu}  fontWeight={is480?900:600} sx={{cursor:"pointer"}}>{menu}</Typography>
                  ))
                }
            </Stack>

        </motion.div>

        { is600 && <IconButton onClick={toggleNavbar}>{navOpen?<CloseIcon sx={{color:"black"}}/>:<MenuIcon/>}</IconButton>}

  </Stack>
  )
}
