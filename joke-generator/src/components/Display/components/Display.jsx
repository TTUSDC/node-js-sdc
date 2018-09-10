import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import JokeButton from './JokeButton.jsx'

import logger from 'utils/logger'

const styles = {
  card: {
    width: '80%'
  },
  title: {
    fontSize: 14,
  }
}

const topics = [
  'Chuck Noris',
  'Ron Swanson',
  'Computer Science'
]

const Display = (props) => {
  const { classes } = props

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography
          className={classes.title}
          variant='headline'
        >
          Jokes from ACM!
        </Typography>
        <Typography
          className={classes.joke}
          variant='body2'
        >
          {props.joke}
        </Typography>
      </CardContent>
      <CardActions>
        {
          topics.map((topic, key) => {
            logger.info(topic)
            return <JokeButton source={topic} key={key}/>
          })
        }
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Display)
