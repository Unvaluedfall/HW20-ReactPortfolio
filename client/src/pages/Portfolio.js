import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

function Portfolio(props){
    const useStyles = makeStyles((theme) => ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 0,
          paddingTop: '56.25%', // 16:9
        },
        avatar: {
          backgroundColor: red[500],
        },
      }));
      
    const classes = useStyles();
    return (
    <>
    <Grid
  container
  direction="row"
  justify="space-around"
  alignItems="baseline"
  spacing={3}
  gridGap={1}
    >

   <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="project" className={classes.avatar}>
            P
          </Avatar>
        }
        title="Food Fair Thought"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image=""
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Project - 1
        <Typography className={classes.root}>
            <Link>
            https://foodfairthought.com/
            </Link>
        </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>   
   <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="project" className={classes.avatar}>
            P
          </Avatar>
        }
        title="Foodzi"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image=""
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Project - 1
        <Typography className={classes.root}>
            <Link>
            https://safe-wave-65020.herokuapp.com/            
            </Link>
        </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>   
   <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="project" className={classes.avatar}>
            P
          </Avatar>
        }
        title="Food Fair Thought"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image=""
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Project - 1
        <Typography className={classes.root}>
            <Link>
            https://foodfairthought.com/
            </Link>
        </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>   
   <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="project" className={classes.avatar}>
            P
          </Avatar>
        }
        title="Food Fair Thought"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image=""
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Project - 1
        <Typography className={classes.root}>
            <Link>
            https://foodfairthought.com/
            </Link>
        </Typography>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
     
    </Card>   
    
    </Grid>
    </>
    )
}

export default Portfolio;