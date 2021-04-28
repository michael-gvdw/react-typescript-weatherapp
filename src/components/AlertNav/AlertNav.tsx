import React, { useState } from 'react';

// components
import AlertCard from '../AlertCard/AlertCard'

// styles
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Badge from '@material-ui/core/Badge'
import WarningIcon from '@material-ui/icons/Warning';

import { StyledButton } from './AlertNav.styles'

// types
import { Alert } from '../../Types'

type Props = {
    alerts: Alert[];
}

const AlertNav: React.FC<Props> = ({ alerts }) => {

    const [toggleDrawer, setToggleDrawer] = useState(false)

    return (
        <>
            <Drawer anchor={'right'} open={toggleDrawer} onClose={() => setToggleDrawer(!toggleDrawer)}>
                {/* {alerts.map((alert, index) => (<AlertCard key={index} alert={alert} />))} */}
            </Drawer>

            <StyledButton onClick={() => setToggleDrawer(!toggleDrawer)}>
                <Badge color={`error`}>
                    <WarningIcon />
                </Badge>
            </StyledButton>
        </>
    );
}

export default AlertNav;