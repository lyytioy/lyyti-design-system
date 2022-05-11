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
      d="M22.3,6.9L12,17.1L1.7,6.9"
    />
  );

export default ChevronDown;
