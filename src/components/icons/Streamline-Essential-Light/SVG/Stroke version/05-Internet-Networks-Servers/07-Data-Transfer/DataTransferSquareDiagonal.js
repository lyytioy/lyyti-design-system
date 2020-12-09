import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferSquareDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-square-diagonal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-square-diagonal_svg__a"
      d="M16 4.5l-7.071 7.071M14.57 12.429L7.5 19.5M16 8.5v-4h-4M11.5 19.5h-4v-4"
    />,
    <rect
      className="data-transfer-square-diagonal_svg__a"
      x={0.5}
      y={0.5}
      width={23}
      height={23}
      rx={1}
      ry={1}
    />
  );

export default SvgDataTransferSquareDiagonal;
