import React, { FunctionComponent } from 'react';
import {Tabs as MuiTabs, TabsProps as MuiTabsProps} from '@material-ui/core';

export interface TabsProps extends MuiTabsProps {}

const Tabs: FunctionComponent<TabsProps> = props => {

    return (
        <MuiTabs {...props} />
    )
};

export default Tabs;