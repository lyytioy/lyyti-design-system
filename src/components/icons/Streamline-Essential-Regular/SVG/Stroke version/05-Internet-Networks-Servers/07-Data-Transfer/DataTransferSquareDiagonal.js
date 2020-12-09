import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferSquareDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-square-diagonal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-square-diagonal_svg__a"
      d="M15.75 12.75l-6 6M14.25 18.75h-4.5v-4.5M8.25 11.25l6-6M9.75 5.25h4.5v4.5"
    />,
    <rect
      className="data-transfer-square-diagonal_svg__a"
      x={0.75}
      y={0.75}
      width={22.5}
      height={22.5}
      rx={3}
      ry={3}
    />
  );

export default SvgDataTransferSquareDiagonal;
