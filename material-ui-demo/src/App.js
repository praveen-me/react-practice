import React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core/styles';

import styled from 'styled-components';

const MyButton = styled(Button)`
  background: linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%);
  
  &:hover {
    color: #fff;
    background: linear-gradient(45deg, #F00 30%, #F00 90%)
  }
`;


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: "2rem 0rem",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <Container maxWidth={"xl"}>
        {/* <MyButton variant="contained" color="primary" className={classes.button}>
          Simple Button
        </MyButton> */}
        <Button color="secondary" className={classes.button}>
          Secondary Button
        </Button>
        <Button variant="outlined" color="secondary" className={classes.button}>
          Outlined Button
        </Button>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>xs=12</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={12} md={6} sm={6}>
              <Paper className={classes.paper}>xs=6</Paper>
            </Grid>
            <Grid item xs={12} md={3} sm={6}>
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={12} md={3} >
              <Paper className={classes.paper}>xs=3</Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <ButtonGroup
                variant="contained"
                size="large"
                aria-label="large contained secondary button group"
              >
                <MyButton>One</MyButton>
                <MyButton>Two</MyButton>
                <MyButton>Three</MyButton>
              </ButtonGroup>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
