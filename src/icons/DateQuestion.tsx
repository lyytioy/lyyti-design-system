import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const DateQuestion = (props: any) => {
  const theme = useTheme();

  return createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} rx={3} fill={theme.palette.coral['300']} />,
    <path
      clipRule="evenodd"
      d="M4.502 8a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5v10a1.5 1.5 0 0 1-1.5 1.5h-12a1.5 1.5 0 0 1-1.5-1.5V8Z"
      stroke={theme.palette.primary.contrastText}
      fill={theme.palette.coral['300']}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="M4.502 10.5h15M8.502 8V4.5M15.502 8V4.5"
      stroke={theme.palette.primary.contrastText}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};

export default DateQuestion;
