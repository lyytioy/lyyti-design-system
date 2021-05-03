import * as React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

const Mail = (props: any) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          '.envelope_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}'
        }
      </style>
    </defs>,
    <rect
      className="envelope_svg__a"
      x={0.75}
      y={4.5}
      width={22.5}
      height={15}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="envelope_svg__a"
      d="M15.687 9.975L19.5 13.5M8.313 9.975L4.5 13.5M22.88 5.014l-9.513 6.56a2.406 2.406 0 01-2.734 0L1.12 5.014"
    />
  );

export default Mail;
