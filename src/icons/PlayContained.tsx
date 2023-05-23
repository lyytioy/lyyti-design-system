import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const PlayContained = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="currentColor"
      d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12Z"
    />,
    <path
      fill="#fff"
      d="M17.25 11.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 9 16.33V7.67a.5.5 0 0 1 .75-.433l7.5 4.33Z"
    />
  );
export default PlayContained;
