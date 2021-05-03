import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Laptop = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.laptop-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="laptop-1_svg__a"
      d="M2.25 15.75V5.25a1.5 1.5 0 011.5-1.5h16.5a1.5 1.5 0 011.5 1.5v10.5M14.584 15.75a2.976 2.976 0 01-5.168 0H.75v1.5a3 3 0 003 3h16.5a3 3 0 003-3v-1.5z"
    />
  );

export default Laptop;
