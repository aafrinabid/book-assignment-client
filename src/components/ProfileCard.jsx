import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function ProfileCard(props) {
  return (
    <div style={{padding:'72px 72px 72px 72px'}}>
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">
      <CardContent>
      <Typography variant="h5" component="div">
      {props.details.username[0].toUpperCase()}
      </Typography>
     
      <Typography variant="body2">
       EMAIL:{props.mail}
     
      </Typography>
    </CardContent>
      </Card>
    </Box>
    </div>

  );
}
