import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Upload = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.drawer-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="drawer-upload_svg__a"
      d="M17.168 15a5.951 5.951 0 01-10.336 0H3a1.5 1.5 0 00-1.5 1.5V21A1.5 1.5 0 003 22.5h18a1.5 1.5 0 001.5-1.5v-4.5A1.5 1.5 0 0021 15zM12 1.5V12M15.75 4.5L12 1.5l-3.75 3"
    />
  );

export default Upload;
