import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    textAlign: 'left',
    margin: '10px 0px 10px 0px'
  },
  title: {
    fontSize: 14,
  },
  content: {
    whiteSpace: 'pre-line'
  }
});

const Post = ({ date, title, author, content }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {author}
        </Typography>
        <Typography className={classes.content} variant="body2" component="p">
          {content}
        </Typography>
      </CardContent>
    </Card>
  );
}


export default Post;