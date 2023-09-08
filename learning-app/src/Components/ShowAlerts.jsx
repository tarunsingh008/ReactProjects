import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export const ShowAlerts = ({severity, message}) => {
  window.alert('insode alrey function')
  console.log(severity, message);
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      if ({severity} && {message}){
        <Alert severity={severity}> {message}</Alert>
      }
      else {
        window.alert("Severity level or message is not passed")
      }
    </Stack>
  )
}
