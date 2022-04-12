import React, { useEffect, useState } from 'react'
import Alert from '@mui/material/Alert';


const AlertMsg = (props) => {

     const [show, setShow] = useState(true)

     useEffect(() => {
          console.log('dddd')
          setShow(true)
      setTimeout(() => {
           setShow(false)
      }, 2000);    
     },[props.cart])

     return(
          <>
          {show &&
     <Alert onClose={() => {}} severity={props.type}>{props.msg}</Alert>
          }
          </>
     )
}

export default AlertMsg