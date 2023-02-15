import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';
const Checkbox = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <path
      d="M22.5 2.6v-.5h-21v21h21V2.6ZM2.667 1.1h18.666c1.19 0 2.167.976 2.167 2.167v18.666c0 1.191-.976 2.167-2.167 2.167H2.667A2.174 2.174 0 0 1 .5 21.933V3.267c0-1.19.976-2.167 2.167-2.167Z"
      fill="currentColor"
      stroke="currentColor"
    />,
    <path
      d="m18.25 6.35-7.813 12.5-4.687-5.625"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  );
export default Checkbox;
