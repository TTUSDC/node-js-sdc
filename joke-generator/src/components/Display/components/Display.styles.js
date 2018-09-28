const styles = (theme) => {
  return({
    card: {
      margin: '80px auto',
      width: '80%'
    },
    joke: {
      fontSize: 'larger',
    },
    content: {
      padding: '50px',
      textAlign: 'center'
    },
    buttonSection: {
      justifyContent: 'center',
      flexDirection: 'row',
      [theme.breakpoints.down(800)]: {
        flexDirection: 'column'
      }
    },
    progress: {
      margin: theme.spacing.unit * 2,
    },
  })
}

export default styles
