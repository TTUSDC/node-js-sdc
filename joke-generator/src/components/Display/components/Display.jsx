import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import JokeButton from 'common/JokeButton/JokeButton.jsx'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './Display.styles'

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
  {
    label: 'Personal Jokes',
    link: 'user',
  },
]


export const Display = (props) => {
  const { classes } = props

  const handleNewJoke = () => {
    if (props.loading) {
      return <CircularProgress className={classes.progress} />
    } if (props.joke) {
      return (
        <Typography
          id='joke-box'
          className={classes.joke}
          align='center'
        >
          {props.joke}
        </Typography>
      )
    }
    return (
      <Typography
        id='joke-box'
        className={classes.joke}
        align='center'
      >
        {'Click on the buttons bellow for some jokes!'}
      </Typography>
    )
  }

  return (
    <Card className={classes.card}>
      <CardHeader
        title='Jokes For ACM!'
        titleTypographyProps={{ align: 'center' }}
      />
      <CardContent
        className={classes.content}
      >
        {handleNewJoke()}
      </CardContent>
      <CardActions className={classes.buttonSection}>
        {
          categories.map((topic, key) => (
            <JokeButton
              fetchJokes={props.fetchJokes}
              loading={props.loading}
              label={topic.label}
              link={topic.link}
              key={topic.label}
            />
          ))
        }
      </CardActions>
    </Card>
  )
}

export default withStyles(styles)(Display)
