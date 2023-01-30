import { Tabs as MuiTabs, TabsProps as MuiTabsProps } from '@mui/material';

export interface TabsProps extends Omit<MuiTabsProps, 'textColor' | 'indicatorColor'> {
  color?: 'sky' | 'secondary';
}

const Tabs = ({ color = 'sky', sx = {}, ...props }: TabsProps): JSX.Element => {
  const tabColor = color === 'sky' ? 'sky.500' : 'secondary.main';

  return (
    <MuiTabs
      sx={{
        '& .MuiTab-root': {
          color: tabColor,
          '&.Mui-disabled': {
            color: 'text.disabled',
          },
          '&.Mui-selected': {
            color: tabColor,
            fontWeight: 'bold',
          },
        },
        '& .MuiTabs-indicator': {
          bgcolor: tabColor,
        },
      }}
      {...props}
    />
  );
};

export default Tabs;
