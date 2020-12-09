import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgInsertImageTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".insert-image-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="insert-image-top_svg__a"
      d="M20.5 21.498h-11M23.5 17.498h-14M20.5 13.498h-11M4.5 2.498l2 3h-6M4.5 8.498l2-3"
    />,
    <rect
      className="insert-image-top_svg__a"
      x={9.5}
      y={2.498}
      width={13}
      height={6}
      rx={1}
      ry={1}
    />
  );

export default SvgInsertImageTop;
