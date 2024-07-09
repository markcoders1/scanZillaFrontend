import { Typography } from '@mui/material'
import React from 'react'

const Heading = ({
    Heading=""
}) => {
  return (
    <Typography sx={{
        fontSize:"22px",
        fontWeight:"600",
        lineHeight:"33px"
      }}>
        {Heading}
      </Typography>
  )
}

export default Heading