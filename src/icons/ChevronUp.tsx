import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const ChevronUp = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M1.7,17.1L12,6.9l10.3,10.3"
    />
  );

export default ChevronUp;
