const styles = theme => ({
  root: {
    margin: theme.spacing.unit,
    width: '200px',
    [theme.breakpoints.down(800)]: {
      width: '80%',
    },
  },
})

export default styles
