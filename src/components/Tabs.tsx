import { FunctionComponent } from 'react';
import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@material-ui/core';

export type TabsProps = MuiTabsProps;

const Tabs: FunctionComponent<TabsProps> = (props) => {
  return <MuiTabs {...props} />;
};

export default Tabs;
