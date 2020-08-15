import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import PostList from './components/PostList';
import Type from '@material-ui/core/Typography';

const useStyles = makeStyles({
  title: {
    marginTop: '2%',
    fontWeight: 500,
  },
});

const Library = () => {
  const classes = useStyles();
  const [data, setData] = useState({});

  useEffect(() => {
    async function funcName () {
      try {
        let res = await fetch('http://localhost:8080/posts');
        let data = await res.json();
        setData(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
    funcName();
  }, []);

  return (
    <div>
      <Type className={classes.title} variant="h3">
        Library of
        <a id='grayble' href='https://adventuretime.fandom.com/wiki/Grayble'> Grayble</a>
      </Type>

      <Container>
        <ul>
          <PostList
            dataArray={data}
          />
        </ul>
      </Container>
    </div>
  );
}

export default Library;