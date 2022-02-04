import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

export type TabsProps = MuiTabsProps;

const Tabs = (props: TabsProps): JSX.Element => {
  return <MuiTabs {...props} />;
};

export default Tabs;
