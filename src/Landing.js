import React from 'react';
import './App.css';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fadeIn } from 'react-animations';
import styled, { keyframes } from 'styled-components';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: 'black',
    color: 'white',
    height: '90vh',
  },
  child: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: '50%',
    transform: 'translateY(-50%)'
  }
});

const bounceAnimation = keyframes`${fadeIn}`;
const FadeDiv = styled.div`
  animation: 6s ${bounceAnimation};
`;

function Landing() {
  const classes = useStyles();
  return (
    <FadeDiv className={classes.root}>

      <h1 className={classes.child}>Welcome to my domain.</h1>

    </FadeDiv>
  );
}

export default Landing;