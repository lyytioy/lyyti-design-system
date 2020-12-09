import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgKindle1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".kindle-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="kindle-1_svg__a"
      d="M8.5 6.5h7M10.5 21.5H13M8.5 9.5h7M8.5 12.5h7M8.5 15.5H14"
    />,
    <rect
      className="kindle-1_svg__a"
      x={3.5}
      y={0.5}
      width={17}
      height={23}
      rx={1}
      ry={1}
    />,
    <rect
      className="kindle-1_svg__a"
      x={5.5}
      y={2.5}
      width={13}
      height={17}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgKindle1;
