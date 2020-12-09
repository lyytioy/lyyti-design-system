import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-horizontal_svg__a"
      d="M10.5 15h12.75M20.25 12l3 3-3 3M13.5 9H.75M3.75 12l-3-3 3-3"
    />
  );

export default SvgDataTransferHorizontal;
