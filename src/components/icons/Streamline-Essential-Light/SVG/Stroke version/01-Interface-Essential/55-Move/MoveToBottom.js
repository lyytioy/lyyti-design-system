import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMoveToBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".move-to-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="move-to-bottom_svg__a"
      d="M20.849 18.943L14.31 20.39l.441-6.682M14.324 20.326a13.049 13.049 0 001.7-18.356M8 22.5h1a.5.5 0 00.5-.5v-1M5 22.5H4a.5.5 0 01-.5-.5v-1M5 16.5H4a.5.5 0 00-.5.5v1M8 16.5h1a.5.5 0 01.5.5v1M8 14.5h1a.5.5 0 00.5-.5v-1M5 14.5H4a.5.5 0 01-.5-.5v-1M5 8.5H4a.5.5 0 00-.5.5v1M8 8.5h1a.5.5 0 01.5.5v1"
    />,
    <rect
      className="move-to-bottom_svg__a"
      x={3.5}
      y={0.499}
      width={6}
      height={6}
      rx={0.5}
      ry={0.5}
    />
  );

export default SvgMoveToBottom;
