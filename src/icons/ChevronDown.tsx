import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronDown = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.29.75L11.02 11.02.75.75"
    />
  );

export default ChevronDown;
