

import React from 'react';

// components
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import CodeIcon from '@material-ui/icons/Code';


const useStyles = makeStyles({
    root: {
      width: '100%',
      bottom: 0,
    },
  });



const InfoNav = () => {

    const classes = useStyles();

    return (
        <BottomNavigation
            showLabels
            className={classes.root}
        >
        <BottomNavigationAction href="https://github.com/michael-gvdw" target="_blank" label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction href="https://www.linkedin.com/in/michael-groenewegen-van-der-weijden-4234b9206/" target="_blank" label="Linkedin" icon={<LinkedInIcon />} />
        <BottomNavigationAction href="https://pypi.org/project/cs-algorithms/" target="_blank" label="PyPI" icon={<CodeIcon />} />
        <BottomNavigationAction href="https://www.instagram.com/michael_gvdw/" target="_blank" label="Instagram" icon={<InstagramIcon />} />
      </BottomNavigation>
    );
}

export default InfoNav;