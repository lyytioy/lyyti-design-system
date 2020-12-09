import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveToTop = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-to-top_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-to-top_svg__a"
      d="M20.849 5.418L14.31 3.97l.441 6.681M14.324 4.035a13.047 13.047 0 011.7 18.354M5 1.5H4a.5.5 0 00-.5.5v1M8 1.5h1a.5.5 0 01.5.5v1M8 7.5h1a.5.5 0 00.5-.5V6M5 7.5H4a.5.5 0 01-.5-.5V6M5 9.5H4a.5.5 0 00-.5.5v1M8 9.5h1a.5.5 0 01.5.5v1M8 15.5h1a.5.5 0 00.5-.5v-1M5 15.5H4a.5.5 0 01-.5-.5v-1"
    />,
    <rect
      className="move-to-top_svg__a"
      x={3.5}
      y={17.499}
      width={6}
      height={6}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgMoveToTop;
