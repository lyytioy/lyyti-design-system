import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferSquareHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-square-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-square-horizontal_svg__a"
      d="M9 8.25h8.25M14.25 5.25l3 3-3 3M15 15.75H6.75M9.75 18.75l-3-3 3-3"
    />,
    <rect
      className="data-transfer-square-horizontal_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgDataTransferSquareHorizontal;
