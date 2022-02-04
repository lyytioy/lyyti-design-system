import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';

export type TabProps = MuiTabProps;

const Tab = (props: TabProps): JSX.Element => {
  return (
    <MuiTab
      sx={{
        fontSize: '16px',
        '& .MuiTab.Mui-disabled': { color: 'text.disabled' },
        '&.MuiTab-wrapped': { fontSize: '13px' },
      }}
      {...props}
    />
  );
};

export default Tab;
