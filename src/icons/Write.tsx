import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Write = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.write_a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}'
        }
      </style>
    </defs>,
    <path
      className="write_a"
      d="M13.045,14.136l-3.712.531.53-3.713,9.546-9.546A2.25,2.25,0,0,1,22.591,4.59Z"
    />,
    <line className="write_a" x1="18.348" y1="2.469" x2="21.53" y2="5.651" />,
    <path
      className="write_a"
      d="M18.75,14.25v7.5a1.5,1.5,0,0,1-1.5,1.5h-15a1.5,1.5,0,0,1-1.5-1.5v-15a1.5,1.5,0,0,1,1.5-1.5h7.5"
    />
  );

export default Write;
