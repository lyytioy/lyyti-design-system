import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@material-ui/core';

export type TabsProps = MuiTabsProps;

const Tabs = (props: TabsProps): JSX.Element => {
  return <MuiTabs {...props} />;
};

export default Tabs;
