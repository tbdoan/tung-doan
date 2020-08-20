import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import PostList from './components/PostList';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Type from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles({
  card: {
    textAlign: 'left',
  },
  title: {
    marginTop: '2%',
    fontWeight: 500,
  },
  ul: {
    paddingInlineStart: '0px',
  },
  textbox: {
    minWidth: '98%',
    maxWidth: '98%',
    borderColor: 'darkgrey',
    borderRadius: '5px',
    marginTop: '10px',
    font: 'inherit',
    padding: '8px',
    resize: 'none',
  },
  icon: {
    color: 'lightslategrey'
  }

});

const Library = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [warning, setWarning] = useState('Content (pls type something)');
  const url = "https://pure-spire-15462.herokuapp.com/posts";
  const tooltipMessage = "from adventure time lore, the grayble is a short parable. " +
    "the goal of this page is to collect stories/thoughts from all walks of life. " +
    "feel free to post one yourself. everything is welcome here.";


  const onTitleChange = (e) => {
    setTitle(e.target.value);
  }
  const onAuthorChange = (e) => {
    setAuthor(e.target.value);
  }
  const onContentChange = (e) => {
    setContent(e.target.value);
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    if (content === '') {
      setWarning('Pls type something');
    } else {
      const post = {
        'author': author === '' ? 'Anonymous' : author,
        'title': title,
        'content': content
      }

      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      });
      const newPost = await res.json();
      // Spread operator, wrapper function (recommended)
      setData(data => [newPost, ...data])
    }
  }
  useEffect(() => {
    async function funcName() {
      try {
        let res = await fetch('https://pure-spire-15462.herokuapp.com/posts');
        let data = await res.json();
        setData(data);
      } catch (err) {
        console.log(err);
      }
    }
    funcName();
  }, []);

  return (
    <div>
      <div className={classes.titleContainer}>
        <Type className={classes.title} variant="h3">
          Library of
          <Tooltip className={classes.icon} title={tooltipMessage}>
            <Type component='a'
              variant='h3'
              className={classes.title}
              id='grayble'
              href='https://adventuretime.fandom.com/wiki/Grayble'> Grayble</Type>
          </Tooltip>
        </Type>

        {/* <InfoRoundedIcon className={classes.icon} /> */}
      </div>
      <Container>
        <Card className={classes.card}>
          <CardContent>
            <Type>Tell me a grayble...</Type>
            <TextareaAutosize
              className={classes.textbox}
              aria-label="empty textarea"
              placeholder='Title (optional)'
              onChange={onTitleChange}
              rowsMin={1} />
            <TextareaAutosize
              className={classes.textbox}
              aria-label="empty textarea"
              placeholder='Author (optional)'
              onChange={onAuthorChange}
              rowsMin={1} />
            <TextareaAutosize
              className={classes.textbox}
              aria-label="empty textarea"
              placeholder={warning}
              onChange={onContentChange}
              rowsMin={5} />
          </CardContent>
          <CardActions>
            <Button size="small" onClick={onSubmit}>Submit</Button>
          </CardActions>
        </Card>
        <ul className={classes.ul}>
          <PostList
            dataArray={data}
          />
        </ul>
      </Container>
    </div>
  );
}

export default Library;