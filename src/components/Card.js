import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ImageCard = ( {img, title, period, tech, role, description, link} ) => {
  const classes = useStyles();

  return (
      <>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={title}
          height="160"
          image={img}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
            {role}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            개발기간: {period}
          </Typography>
          <br/>
          <Typography variant="body3" component="p">
            {description}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <br/>{tech}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={link}>
          Learn more
        </Button>
      </CardActions>
    </Card>
    <br/><br/></>
  );
}
export default ImageCard;