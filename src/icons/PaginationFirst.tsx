import { createElement } from 'react';
import SvgIcon from '@mui/material/SvgIcon';

const PaginationFirst = (props: any) =>
  createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.navigation-left-circle-1_2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="navigation-left-circle-1_2_svg__a"
      d="M6.75 11.25h9M10.5 15l-3.75-3.75L10.5 7.5"
    />,
    <circle cx={11.25} cy={11.25} r={10.5} className="navigation-left-circle-1_2_svg__a" />,
    <path className="navigation-left-circle-1_2_svg__a" d="M13.5 15l-3.75-3.75L13.5 7.5" />
  );

export default PaginationFirst;
