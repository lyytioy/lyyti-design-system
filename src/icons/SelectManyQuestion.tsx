import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
import { useTheme } from '@mui/material/styles';

const SelectManyQuestion = (props: any) => {
  const theme = useTheme();

  return createElement(
    SvgIcon,
    props,
    <rect width={24} height={24} rx={3} fill={theme.palette.balticSea['100']} />,
    <path
      d="m16.167 7.833-5.208 8.333-3.125-3.75"
      stroke={theme.palette.primary.contrastText}
      fill="none"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />,
    <path
      stroke={theme.palette.primary.contrastText}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 4.5v15h-15v-15z"
    />
  );
};

export default SelectManyQuestion;
