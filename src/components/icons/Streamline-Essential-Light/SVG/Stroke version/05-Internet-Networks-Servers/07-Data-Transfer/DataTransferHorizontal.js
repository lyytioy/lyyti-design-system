import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-horizontal_svg__a"
      d="M.5 9.5h14M9.5 14.5h14M4.5 13.5l-4-4 4-4M19.5 18.5l4-4-4-4"
    />
  );

export default SvgDataTransferHorizontal;
