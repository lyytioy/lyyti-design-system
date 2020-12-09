import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPictureDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".picture-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="picture-double_svg__a"
      d="M3.5 16H2c-.825 0-1.5-.9-1.5-2V5a2.006 2.006 0 012-2h14c1.1 0 2 .675 2 1.5V6"
    />,
    <path
      className="picture-double_svg__a"
      d="M3.5 14H3a.5.5 0 01-.5-.5v-8A.5.5 0 013 5h13a.5.5 0 01.5.5V6"
    />,
    <rect
      className="picture-double_svg__a"
      x={5.5}
      y={8}
      width={18}
      height={13}
      rx={2}
      ry={2}
    />,
    <rect
      className="picture-double_svg__a"
      x={7.5}
      y={10}
      width={14}
      height={9}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgPictureDouble;
