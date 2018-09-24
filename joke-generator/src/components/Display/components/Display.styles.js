const styles = (theme) => {
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
    progress: {
      margin: theme.spacing.unit * 2,
    },
  })
}

export default styles
