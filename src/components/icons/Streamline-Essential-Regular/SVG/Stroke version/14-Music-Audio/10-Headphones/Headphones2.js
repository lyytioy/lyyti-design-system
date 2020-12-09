import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHeadphones2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".headphones-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="headphones-2_svg__a"
      d="M20.076 23.193s3.193-5.9 3.174-11.248a11.25 11.25 0 00-22.5.081c.019 5.35 3.255 11.224 3.255 11.224"
    />,
    <rect
      className="headphones-2_svg__a"
      x={5.009}
      y={14.31}
      width={3.75}
      height={8.25}
      rx={1}
      ry={1}
      transform="rotate(-22.878 6.883 18.436)"
    />,
    <rect
      className="headphones-2_svg__a"
      x={15.241}
      y={14.31}
      width={3.75}
      height={8.25}
      rx={1}
      ry={1}
      transform="rotate(-157.122 17.116 18.435)"
    />
  );

export default SvgHeadphones2;
