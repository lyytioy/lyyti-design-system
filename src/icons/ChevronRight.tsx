import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronRight = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.9,1.7L17.1,12L6.9,22.3"
    />
  );

export default ChevronRight;
