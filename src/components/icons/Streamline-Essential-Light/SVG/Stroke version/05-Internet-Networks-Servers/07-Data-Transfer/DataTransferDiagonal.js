import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-diagonal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-diagonal_svg__a"
      d="M1.5 19l9-9M13 14.5L22.5 5M7.5 19h-6v-6M22.5 11V5h-6"
    />
  );

export default SvgDataTransferDiagonal;
