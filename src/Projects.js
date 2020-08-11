import React from 'react';
import './App.css';
import CautionTape from './images/caution_tape_bg.jpg'
import SummonersRift from './images/summoners_rift.jpg'
import PeopleWorking from './images/people_working.jpg'
import { makeStyles,withStyles,createMuiTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

function Projects() {
  const classes = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: '0vh',
      textAlign: 'center',
      color: 'red',
    },
  }));

  const StyledButton = withStyles({
    root: {
      background: 'rgba(255,255,255,.2)',
      borderColor: 'transparent',
      color: 'white',
      height: 48,
      padding: '0 10px',
      fontSize: 'medium',
      '&:hover': {
        borderColor: 'transparent',
        backgroundColor: 'rgba(255,255,255,.5)',
        color: '#FFF'
    }
    },
    label: {
      textTransform: 'capitalize',
    },

  })(Button);

  return (
    <div className={classes.root}>
      <Container className='container isawesome' maxWidth="xl">
        <Typography component="div" className='project-item'>
          <h1 className='project-title'>DodgePOG</h1> <br />
          <div className='project-description'>
            <p>
              July 2020 - Ongoing
            </p> <br />
            <p>
              Native app that advises players whether or not to leave their League of Legends game
              based on predicted win rates. Built with Electron and AI model using Keras, Scikit learn,
              Jupyter Notebook, and Python.
            </p>
          </div>
          <img src={SummonersRift} alt='' />
        </Typography>
        <StyledButton href='https://github.com/tbdoan/dodgepog-app' variant="outlined" color='primary'>Visit Page</StyledButton>
      </Container>

      <Divider variant='middle' />
      <Container className='container isawesome' maxWidth="xl">
        <Typography component="div" className='project-item'>
          <h1 className='project-title'>Mafia Online</h1> <br />
          <div className='project-description'>
            <p>
              March - July 2020
            </p> <br />
            <p>
              Online version of the popular party game Mafia.
              Developed with React.js and Google firebase.
              Deployed on Heroku.
            </p>
          </div>
          <img src={CautionTape} alt='' id='caution' />
        </Typography>
        <StyledButton href='https://quarantine-mafia.herokuapp.com/' variant="outlined" color='primary'>Visit Page</StyledButton>
      </Container>
      <Divider variant='middle' />
      <Container className='container isawesome' maxWidth="xl">
        <Typography component="div" className='project-item'>
          <h1 className='project-title'>Seascape</h1> <br />
          <div className='project-description'>
            <p>
              August 2019
            </p> <br />
            <p>
              Co-developed a user-friendly alternative to UCSD’s CAPE.
              Integrated a machine learning algorithm with Python to predict future data.
              Deployed the webapp using Heroku.
            </p>
          </div>
          <img src={PeopleWorking} alt='' id='caution' />
        </Typography>
        <StyledButton href='https://seascape.app/' variant="outlined" color='primary'>Visit Page</StyledButton>
      </Container>
      <Divider variant='middle' />
    </div>
  );
}

export default Projects;