import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const Rectangle = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      clipRule="evenodd"
      d="M1 11a1.5 1.5 0 0 1 1.5-1.5h19A1.5 1.5 0 0 1 23 11v2a1.5 1.5 0 0 1-1.5 1.5h-19A1.5 1.5 0 0 1 1 13v-2Z"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  );
export default Rectangle;
