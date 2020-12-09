import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureStackLandscape = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-stack-landscape_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="picture-stack-landscape_svg__a"
      x={1.5}
      y={0.75}
      width={15}
      height={16.5}
      rx={0.75}
      ry={0.75}
    />,
    <path
      className="picture-stack-landscape_svg__a"
      d="M19.5 3.75V19.5a.75.75 0 01-.75.75H4.5"
    />,
    <path
      className="picture-stack-landscape_svg__a"
      d="M22.5 6.75V22.5a.75.75 0 01-.75.75H7.5M16.5 12.75h-15M6 12.75l4.153-5.932a1.5 1.5 0 012.357-.128l3.99 4.56M5.25 4.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />
  );

export default SvgPictureStackLandscape;
