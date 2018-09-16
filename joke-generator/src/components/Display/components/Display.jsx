import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import JokeButton from './JokeButton.jsx'

const styles = (theme) => {
  console.log(theme)
  return({
    card: {
      margin: '80px auto',
      width: '80%'
    },
    content: {
      padding: '50px'
    },
    buttonSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      [theme.breakpoints.down(800)]: {
        flexDirection: 'column'
      }
    },
  })
}

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
          variant='body2'
          align='center'
        >
          {props.joke || 'Click bellow for some jokes!'}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonSection}>
        {
          categories.map((topic, key) => {
            return (
              <JokeButton
                className={classes.buttons}
                fetchJokes={props.fetchJokes}
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
