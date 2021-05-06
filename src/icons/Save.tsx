import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Save = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.floppy-disk_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="floppy-disk_svg__a"
      d="M21.75 23.25H2.25a1.5 1.5 0 01-1.5-1.5V7.243a3 3 0 01.879-2.121l3.492-3.493A3 3 0 017.243.75H21.75a1.5 1.5 0 011.5 1.5v19.5a1.5 1.5 0 01-1.5 1.5z"
    />,
    <path
      className="floppy-disk_svg__a"
      d="M8.25.75v6a1.5 1.5 0 001.5 1.5h7.5a1.5 1.5 0 001.5-1.5v-6M15.75 3.75v1.5M17.25 12.75H6.75a1.5 1.5 0 00-1.5 1.5v9h13.5v-9a1.5 1.5 0 00-1.5-1.5zM8.25 15.75h4.5M8.25 18.75h7.5"
    />
  );

export default Save;
