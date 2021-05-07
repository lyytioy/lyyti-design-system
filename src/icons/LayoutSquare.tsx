import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const LayoutSquare = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.layout-module-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect
      className="layout-module-1_svg__a"
      x={0.75}
      y={0.747}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-module-1_svg__a"
      x={0.75}
      y={14.247}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-module-1_svg__a"
      x={14.25}
      y={0.747}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <rect
      className="layout-module-1_svg__a"
      x={14.25}
      y={14.247}
      width={9}
      height={9}
      rx={1.5}
      ry={1.5}
    />
  );

export default LayoutSquare;
