import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const PaginationRight = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.navigation-right-circle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <path
      className="navigation-right-circle-1_svg__a"
      d="M16.501 11.997h-9M12.751 8.247l3.75 3.75-3.75 3.75"
    />,
    <circle className="navigation-right-circle-1_svg__a" cx={12.001} cy={11.997} r={10.5} />
  );

export default PaginationRight;
