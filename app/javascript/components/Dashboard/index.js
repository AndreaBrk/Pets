import React                      from 'react';
import PropTypes                  from 'prop-types'
import AppBar                     from '@material-ui/core/AppBar';
import Button                     from '@material-ui/core/Button';
import CameraIcon                 from '@material-ui/icons/PhotoCamera';
import Card                       from '@material-ui/core/Card';
import CardActions                from '@material-ui/core/CardActions';
import CardContent                from '@material-ui/core/CardContent';
import CardMedia                  from '@material-ui/core/CardMedia';
import CssBaseline                from '@material-ui/core/CssBaseline';
import Grid                       from '@material-ui/core/Grid';
import Toolbar                    from '@material-ui/core/Toolbar';
import Typography                 from '@material-ui/core/Typography';
import Container                  from '@material-ui/core/Container';
import Link                       from '@material-ui/core/Link';
import { withStyles }             from '@material-ui/core/styles'



const styles = theme => ({
 icon: {
   marginRight: theme.spacing(2),
 },
 heroContent: {
   backgroundColor: theme.palette.background.paper,
   padding: theme.spacing(8, 0, 6),
 },
 heroButtons: {
   marginTop: theme.spacing(4),
 },
 cardGrid: {
   paddingTop: theme.spacing(8),
   paddingBottom: theme.spacing(8),
 },
 card: {
   height: '100%',
   display: 'flex',
   flexDirection: 'column',
 },
 cardMedia: {
   paddingTop: '56.25%', // 16:9
 },
 cardContent: {
   flexGrow: 1,
 },
 footer: {
   backgroundColor: theme.palette.background.paper,
   padding: theme.spacing(6),
 },
});


class Dashboard extends React.Component {
  render() {

   const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
     <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={this.props.classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Album layout
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={this.props.classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Album layout
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Something short and leading about the collection below—its contents, the creator, etc.
              Make it short and sweet, but not too short so folks don&apos;t simply skip over it
              entirely.
            </Typography>
            <div className={this.props.classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={this.props.classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={this.props.classes.card}>
                  <CardMedia
                    className={this.props.classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={this.props.classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={this.props.classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Something here to give the footer a purpose!
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
         {'Built with love by the '}
         <Link color="inherit" href="https://material-ui.com/">
           Material-UI
         </Link>
         {' team.'}
        </Typography>
      </footer>
      {/* End footer */}
     </React.Fragment>
    )
  }
}

Dashboard.propTypes = {
 classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)


