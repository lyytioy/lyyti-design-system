import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferSquareVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-square-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-square-vertical_svg__a"
      d="M15.75 9v8.25M18.75 14.25l-3 3-3-3M8.25 15V6.75M5.25 9.75l3-3 3 3"
    />,
    <rect
      className="data-transfer-square-vertical_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgDataTransferSquareVertical;
