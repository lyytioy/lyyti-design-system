import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Quill = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path className="quill_svg__a" d="M.75 22.92l10.41-10.43" />,
    <path
      d="M23 .94a20.06 20.06 0 00-4.1 0l-3.61 5.81L13 2.57c-8.1 4-11.28 13.67-8.27 16.69C8.77 23.31 24.77 16.21 23 .94z"
      transform="translate(-.25 -.08)"
      className="quill_svg__a"
    />
  );

export default Quill;
