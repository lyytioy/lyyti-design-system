import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PaginationLast = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.navigation-right-circle-1_2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="navigation-right-circle-1_2_svg__a"
      d="M6.75 11.25h9M12 7.5l3.75 3.75L12 15"
    />,
    <circle cx={11.25} cy={11.25} r={10.5} className="navigation-right-circle-1_2_svg__a" />,
    <path className="navigation-right-circle-1_2_svg__a" d="M9 7.5l3.75 3.75L9 15" />
  );

export default PaginationLast;
