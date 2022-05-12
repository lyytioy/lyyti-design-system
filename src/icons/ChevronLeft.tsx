import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronLeft = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.1,22.3L6.9,12L17.1,1.7"
    />
  );

export default ChevronLeft;
