import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const EmailQuestion = (props: any) => {
  const theme = useTheme();

  return createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} rx={3} fill={theme.palette.sunset['300']} />,
    <path
      clipRule="evenodd"
      d="M4 8.5A1.5 1.5 0 0 1 5.5 7h13A1.5 1.5 0 0 1 20 8.5v7.667a1.5 1.5 0 0 1-1.5 1.5h-13a1.5 1.5 0 0 1-1.5-1.5V8.5Z"
      stroke={theme.palette.primary.contrastText}
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      d="m14.621 10.893 2.712 2.506M9.38 10.893l-2.712 2.506M19.738 7.365l-6.765 4.665a1.71 1.71 0 0 1-1.945 0L4.264 7.365"
      stroke={theme.palette.primary.contrastText}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};

export default EmailQuestion;
