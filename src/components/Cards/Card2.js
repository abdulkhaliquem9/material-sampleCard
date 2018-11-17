import React from 'react';
import PropTypes from 'prop-types';


import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import WarningIcon from '@material-ui/icons/Warning';
// import './App.css'

const styles = theme => ({
    root: {
        maxWidth: '292px',
        height: '296px',
        boxShadow: '2px 2px 4px gray'
    },
    IconAlignment: { width: '24px', height: '24px', marginTop: '-2px', },
    WarningIcon: {
        color: 'red',
    },
    InfoIcon: {
        color: 'blue'
    },
    footer: {
        backgroundColor: 'blue',
        color: 'white'
    },
    subContainer: {
        padding: '0px 15px 0px 15px'
    }
});

class App extends React.Component {
    static defaultProps = {
    }

    render() {
        const { classes } = this.props;
        const headerValues = { 'title': 'EXCESS INVENTORY' }
        const bodyValues = { 'body1': 'Residual Feature, Non-Basic', 'body2': 'Pt 48ct Fail Variety' }
        const footerValues = { 'footer1': ' Potential Business Impact', 'footer2': '123,456,789', 'footer3': 'Excess Inventory Reduction (@ cost)', 'footer4': '10/10/2018' }
        return (
            <Grid
                container
                direction="column"
                alignItems="space-between"
                justify="space-between"
                className={classes.root}
            >
                <Grid
                    container
                    direction="row"
                    alignItems="center"
                    justify="space-between"
                    className={classes.subContainer}
                >
                    <Grid item>
                        <IconButton className={`${classes.IconAlignment} ${classes.WarningIcon}`}>
                            <WarningIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <Typography variant="body2" className={classes.title}>{`${headerValues.title}`}</Typography>
                    </Grid>

                    <Grid item>
                        <IconButton className={`${classes.IconAlignment} ${classes.InfoIcon}`}>
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>

                    <Grid item>
                        <IconButton className={`${classes.IconAlignment} ${classes.InfoIcon}`}>
                            <MoreVertIcon />
                        </IconButton>
                    </Grid>
                </Grid>
                {/* const bodyValues = { 'body1': 'Residual Feature, Non-Basic', 'body2': 'Pt 48ct Fail Variety' } */}
                <Grid
                    container
                    direction="column"
                    alignItems="left"
                    justify="space-between"
                    className={classes.subContainer}
                >
                    <Grid item >
                        <Typography variant="h5" >
                            {`${bodyValues.body1}`}
                        </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="body2" aligh='left'>
                        {`${bodyValues.body2}`}
                        </Typography>
                    </Grid>
                    
                </Grid>

                {/* footerValues = { 'footer1': ' Potential Business Impact', 'footer2': '123,456,789', 'footer3': 'Excess Inventory Reduction (@ cost)', 'footer4': '10/10/2018' } */}
                <Grid
                    container
                    direction="column"
                    alignItems="left"
                    justify="space-between"
                    className={`${classes.subContainer} ${classes.footer}`}
                >
                    <Grid item>
                        <Typography variant="subtitle2" >
                        {`${footerValues.footer1}`}
                        </Typography>
                    </Grid>

                    <Grid item>
                        <Typography variant="h5" component="h2"  >
                        {`${footerValues.footer2}`}
                        </Typography>
                    </Grid>

                    <Grid item xs>
                        <Typography variant="body1" >
                        {`${footerValues.footer3}`}
                        </Typography>
                    </Grid>

                    <Grid item xs>
                        <Typography variant="caption" gutterBottom align="right">
                        {`${footerValues.footer4}`}
                        </Typography>
                    </Grid>


                </Grid>
            </Grid>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);