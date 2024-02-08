import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'

export const JobCard = ({role,company,description}) => {
  const theme=useTheme()
  const is480=useMediaQuery(theme.breakpoints.down(480))
  return (
    <Stack width={is480?"auto":'400px'}  p={2} position={'relative'} rowGap={'1rem'} bgcolor={'#595e6e'} color={'whitesmoke'} borderRadius='10px'>

        <Stack>
            <i style={{position:"absolute",right:-4,top:-4,color:"blue",backgroundColor:"white",padding:'.5rem',fontSize:"1.7rem",borderRadius:"100%"}} class='bx bxs-briefcase'></i>
            <Typography variant='h5' fontWeight={700}>{role}</Typography>
            <Typography variant='body1' fontWeight={500}>{company}</Typography>
        </Stack>

        <Typography lineHeight={'1.8rem'} fontSize={'1.1rem'} variant='body1'>{description}</Typography>

    </Stack>
  )
}
