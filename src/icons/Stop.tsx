import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Stop = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.stop-sign_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="stop-sign_svg__a"
      d="M15.2 6.407l-3-1a3 3 0 00-3.95 2.846v4.5l-1.791-1.436a1.129 1.129 0 00-1.646.256 1.129 1.129 0 000 1.253l2.569 3.854a4.65 4.65 0 003.868 2.07h2.239a3.763 3.763 0 002.66-1.1 3.763 3.763 0 001.1-2.659V9.253A3 3 0 0015.2 6.407z"
    />,
    <path className="stop-sign_svg__a" d="M6.75 23.25h10.5l6-6V6.75l-6-6H6.75l-6 6v10.5l6 6z" />
  );

export default Stop;
