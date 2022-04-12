import React from 'react'
import Alert from '@mui/material/Alert';

const AlertMsg = (props) => (
     <Alert severity={props.type}>{props.msg}</Alert>
)

export default AlertMsg