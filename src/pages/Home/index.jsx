import React from 'react';
import { 
  withStyles, 
  Grid, 
  Typography, 
  Card, 
  CardMedia, 
  Button 
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import Styles from './Styles';

const Home = (props) => {
  const { 
    classes, 
    ballColor, 
    redCount,
    blueCount,
    onClick: handleOnClick
  } = props;

  return (
    <div className={classes.background}>
      <Grid 
        container 
        justify="center" 
        alignItems="center" 
        alignContent="center" 
        className={classes.container} >
        <Grid container item xs={12} sm={6} className={classes.panel} spacing={1}>
          <Grid item xs={6}>
            <Typography variant="h6" align="center" >
              <b>Mighty Hive Demo</b>
            </Typography>
            <Card>
              {ballColor && <CardMedia 
                className={classes.media} 
                image={process.env.PUBLIC_URL + `/${ballColor}ball.png`} 
                title="ball" />              
              }
            </Card>
          </Grid>
          <Grid item xs={6} container alignContent="center">
            
            <Grid item xs={12}>
              <Button 
                className={classes.resetButton}
                variant="contained"
                startIcon={<RefreshIcon />}
                onClick={() => handleOnClick('resetBall')} >
                <Typography variant="body1" align="center">
                  <b>Reset Ball Color</b>
                </Typography>
              </Button>
            </Grid>
            <Grid item container xs={12} justify="space-between">
              <Grid 
                item xs={5} 
                style={{color: ballColor === 'red' ? 'red' : null}}>
                Red: {redCount}
              </Grid>
              <Grid item xs={5} 
                style={{color: ballColor === 'blue' ? 'blue' : null}}>
                Blue: {blueCount}
              </Grid>
            </Grid>
            
          </Grid>
        </Grid>
          
      </Grid>
    </div>
  );
};

export default withStyles(Styles)(Home);
