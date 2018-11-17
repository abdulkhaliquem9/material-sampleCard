// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import classnames from 'classnames';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import red from '@material-ui/core/colors/red';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// import MoreVertIcon from '@material-ui/icons/MoreVert';
// // import InfoIcon from '@material-ui/icons/';
// import WarningIcon from '@material-ui/icons/Warning';
// import './App.css'

// const styles = theme => ({
//   card: {
//     width: '292px', maxHeight: '296px', height: '296px', display: 'flex', flexDirection: 'column', alignContent: 'center'
//   },
//   headerContent: { height: '50%', paddingTop: '0px' },
//   footerContent: { background: 'blue', height: '100%', display: 'flex', flexDirection: 'column', alignContent: 'space-between' },
//   bodyContent: { display: 'flex', height: '100%', flexDirection: 'column', alignContent: 'space-between' },
// });

// class App extends React.Component {
//   static defaultProps = {
//     date: '10/10/2018'
//   }
//   state = { expanded: false };

//   handleExpandClick = () => {
//     this.setState(state => ({ expanded: !state.expanded }));
//   };

//   render() {
//     const { classes } = this.props;
//     const footerValues =   {'footer1':' Potential Business Impact', 'footer2':'123,456,789', 'footer3':'Excess Inventory Reduction (@ cost)', 'footer4':'10/10/2018'}
//     const bodyValues = {'body1':'Residual Feature, Non-Basic', 'body2':' Pt 48ct Fail Variety'} 
//     const headerValues = {'header1':' Pt 48ct Fail Variety'}
//     return (
//       <div style={{ display: 'flex', justifyContent: 'center', top: '200px', backgroundColor: 'green', width: '100vw', height: '100vh', alignItems: 'center', }}>
//         <Card className={classes.card}>
//           {/* <CardHeader className={"root content"}
//           avatar={
//             <IconButton style={{width:'24px', height:'24px', color:'red'}}>
//               <WarningIcon />
//             </IconButton>
            
//           }
//           action={
//             <IconButton style={{width:'24px', height:'24px', color:'blue'}}>
//             <MoreVertIcon />
//               <MoreVertIcon />
//             </IconButton>
//           }
//           title="EXCESS INVENTORY"
//           // subheader="September 14, 2016"
//         /> */}
//           <CardContent className={classes.headerContent}>
//             <Typography variant="body1" style={{ display: 'flex', justifyContent: 'space-between', height: '24px' }}>
//               <IconButton style={{ width: '24px', height: '24px', color: 'red', }}>
//                 <WarningIcon />
//               </IconButton>

//               <span style={{ marginTop: '15px' }}>
//                 Pt 48ct Fail Variety
//               </span>

//               <IconButton style={{ width: '24px', height: '24px', color: 'blue' }}>
//                 <MoreVertIcon />
//                 <MoreVertIcon />
//               </IconButton>
//             </Typography>
//           </CardContent>
          
//           <CardContent className={classes.bodyContent}>
//             <Typography variant="h5" >
//               Residual Feature, Non-Basic
//             </Typography>

//             <Typography variant="caption" >
//               Pt 48ct Fail Variety
//             </Typography>
//           </CardContent>


       
//           <CardContent className={classes.footerContent}>
   
//             <Typography variant="subtitle2" >
//               Potential Business Impact
//             </Typography>

//             <Typography variant="h5" component="h2"  >
//              {`$${123,456,789}`}
//             </Typography>

//             <Typography variant="body1" >
//               Excess Inventory Reduction (@ cost)
//             </Typography>

//             <Typography variant="caption" align='right' color='light'>
//               {`Created ${this.props.date}`}
//             </Typography>

//           </CardContent>

//         </Card>
//       </div>
//     );
//   }
// }

// App.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(App);