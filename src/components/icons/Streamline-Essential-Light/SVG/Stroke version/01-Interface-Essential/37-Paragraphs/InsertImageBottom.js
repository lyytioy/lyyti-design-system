import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInsertImageBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".insert-image-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="insert-image-bottom_svg__a"
      d="M20.5 2.498h-11M23.5 6.498h-14M20.5 10.498h-11M4.5 21.498l2-3h-6M4.5 15.498l2 3"
    />,
    <rect
      className="insert-image-bottom_svg__a"
      x={9.5}
      y={15.498}
      width={13}
      height={6}
      rx={1}
      ry={1}
    />
  );

export default SvgInsertImageBottom;
