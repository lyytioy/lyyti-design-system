import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const TextQuestion = (props: any) => {
  const theme = useTheme();

  return createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} rx={3} fill={theme.palette.primary.main} />,
    <path
      clipRule="evenodd"
      d="M4.5 11.998a1.5 1.5 0 0 1 1.5-1.5h12a1.5 1.5 0 0 1 1.5 1.5v0a1.5 1.5 0 0 1-1.5 1.5H6a1.5 1.5 0 0 1-1.5-1.5v0Z"
      stroke={theme.palette.primary.contrastText}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
};

export default TextQuestion;
