import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';
import { forwardRef, Ref } from 'react';

export type TabProps = Omit<MuiTabProps, 'textColor' | 'indicatorColor'>;

const Tab = ({ sx = {}, ...props }: TabProps, ref: Ref<HTMLDivElement>): JSX.Element => {
  return (
    <MuiTab
      ref={ref}
      sx={{
        fontSize: '16px',
        '&.MuiTab-wrapped': { fontSize: '13px' },
        ...sx,
      }}
      {...props}
    />
  );
};

export default forwardRef(Tab);
