import { Box, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";

export const ProjectCard = ({title,description,technologies,imageUrl,githubLink,liveLink,reverse=false}) => {

    const theme=useTheme()
    const is1150=useMediaQuery(theme.breakpoints.down(1150))
    const is960=useMediaQuery(theme.breakpoints.down(960))
    const is800=useMediaQuery(theme.breakpoints.down(800))
    const is500=useMediaQuery(theme.breakpoints.down(500))

  return (
      <Stack width={is500?"auto":is800?"25rem":"100%"} flexDirection={reverse?'row-reverse':'row'} flexWrap={is800?"wrap":""}  justifyContent={'center'} alignItems={'center'} columnGap={'3rem'} rowGap={'1rem'}>

        {/* left section */}
        <div style={{height:is960?'200px':is1150?"240px":"280px"}}>
          <img style={{ height:"100%",width:is800?"100%":"",objectFit: is800?"contain":"contain"}} src={imageUrl} alt={`${title} project-image`}/>
        </div>

        {/* right section */}
        <Stack justifyContent={'space-around'} width={'100%'} rowGap={'1rem'}>

            <Stack rowGap={'.8rem'}>
                <Typography variant="h4" fontWeight={700}>{title}</Typography>
                <Typography color={'text.secondary'} fontSize={'1.1rem'} fontWeight={500} lineHeight={'1.8rem'}>{description}</Typography>
            </Stack>

            {/* technologies */}
            <Stack flexDirection={'row'} columnGap={'1rem'} alignItems={'center'}>
              {
                  technologies && technologies.slice(0,4).map((technology)=>(
                      <Typography key={technology} variant="body1" fontWeight={700} >{technology}</Typography>
                  ))
              }
            </Stack>
          
            {/* action buttons */}
            <Stack flexDirection={'row'} columnGap={'1rem'}>

                <a href={githubLink} target="_blank">
                  <button style={{ border: "none", backgroundColor: "inherit" }}>
                      <Stack flexDirection={'row'} alignItems={'center'} columnGap={'.2rem'}>
                          <Typography variant="body1">Code</Typography>
                          <i style={{ fontSize: "1.6rem" }} class="bx bxl-github"></i>
                      </Stack>
                  </button>
                </a>
                    
                <a href={liveLink} target="_blank">
                    <button style={{ border: "none", backgroundColor: "inherit" }}>
                        <Stack flexDirection={'row'} alignItems={'center'} columnGap={'.2rem'}>
                            <Typography variant="body1">Live Demo</Typography>
                            <i style={{ fontSize: "1.6rem" }} class="bx bx-link-external"></i>
                        </Stack>
                    </button>
                </a>
                
            </Stack>

        </Stack>

      </Stack>
  );
};
