import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import JokeButton from './JokeButton.jsx'
import styles from './Display.styles'
import CircularProgress from '@material-ui/core/CircularProgress'

const categories = [
  {
    label: 'Chuck Noris',
    link: 'chuck',
  },
  {
    label: 'Ron Swanson',
    link: 'ron',
  },
  {
    label: 'Computer Science',
    link: 'cs',
  },
]


const Display = (props) => {
  const { classes } = props

  const handleNewJoke = () => {
    if (props.loading) {
      return <CircularProgress className={classes.progress} />
    } else if (props.joke) {
      return props.joke
    } else {
      return 'Click on the buttons bellow for some jokes!'
    }
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Jokes For ACM!'
        titleTypographyProps={ { align: 'center' } }
      />
      <CardContent
        className={classes.content}
      >
        <Typography
          className={classes.joke}
          variant='display2'
          align='center'
        >
          {handleNewJoke()}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonSection}>
        {
          categories.map((topic, key) => {
            return (
              <JokeButton
                fetchJokes={props.fetchJokes}
                loading={props.loading}
                label={topic.label}
                link={topic.link}
                key={key}
              />
            )
          })
        }
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Display)
