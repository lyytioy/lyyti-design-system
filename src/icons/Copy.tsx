import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const Copy = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.common-file-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="common-file-double_svg__a"
      d="M17.625 23.25h-13.5a1.5 1.5 0 01-1.5-1.5V5.625"
    />,
    <path
      className="common-file-double_svg__a"
      d="M21.375 18.159A1.8 1.8 0 0119.625 20H7.375a1.8 1.8 0 01-1.75-1.841V2.591A1.8 1.8 0 017.375.75h8.9a1.711 1.711 0 011.238.539l3.349 3.524a1.888 1.888 0 01.513 1.3z"
    />
  );

export default Copy;
