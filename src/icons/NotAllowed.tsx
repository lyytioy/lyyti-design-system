import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const NotAllowed = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.not-allowed-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="not-allowed-1_svg__a"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />,
    <path className="not-allowed-1_svg__a" d="m5 5 14 14" />
  );

export default NotAllowed;
