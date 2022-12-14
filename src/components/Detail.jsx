import React from 'react'

import { Typography, Stack, Button } from '@mui/material'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/body-part.png'
import EquipmentImage from '../assets/icons/body-part.png'

const Detail = ({exerciseDetail}) => {
    const {bodyPart, gifUrl, name, target, equipment}= exerciseDetail

    const extraDetail = [

      {icon: BodyPartImage,
      name: bodyPart},
      {icon: TargetImage,
      name: target},
      {icon: EquipmentImage,
      name: equipment}
    ]
    

  return (
    <Stack gap='60px' sx={{ flexDirection: { lg: 'row'}, p: '20px', alignItems: 'center'}}>
      <img src={gifUrl} alt='name' loading='lazy' className='detail-image' />
      <Stack sx={{gap:{lg:'35px', sx: '20px'}}}>
        <Typography>
          {name}
        </Typography>
        <Typography>
          Exercises
        </Typography>
          {extraDetail.map((item) =>(

            <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
            <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px', height: '100px'}}>
              <img src={item.icon} alt={bodyPart} loading='lazy'  sx={{ height: '50px', width:'50px' }}/>
            </Button>
            <Typography textTransform='capitalize'>
              {item.name}
            </Typography>
            </Stack>
          ))}
      </Stack>
    </Stack>
  )
}

export default Detail