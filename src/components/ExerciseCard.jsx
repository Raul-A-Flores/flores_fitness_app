import React from 'react'

import { Link} from 'react-router-dom'
import { Button,Stack, Typography } from '@mui/material'

const ExerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} loading='lazy' alt={exercise.name} />
        <Stack direction='row'>
            <Button
            sx={{ ml: '21px', color:'fff', background: '#00CBF4', fontSize: '14px', 
            borderRadius:'200px', textTransform: 'capitalize'}}
            >
                {exercise.bodyPart}
            </Button>
            <Button
            sx={{ ml: '21px', color:'fff', background: '#00CBF4', fontSize: '14px', 
            borderRadius:'200px', textTransform: 'capitalize'}}
            >
                {exercise.target}
            </Button>
 
        </Stack>
        <Typography ml='21px' 
        font='24px' color='#000' fontWeight='bold' mt='11px' pb='10px' textTransform='capitalize'>
            {exercise.name}
        </Typography>
      

    </Link>
  )
}

export default ExerciseCard