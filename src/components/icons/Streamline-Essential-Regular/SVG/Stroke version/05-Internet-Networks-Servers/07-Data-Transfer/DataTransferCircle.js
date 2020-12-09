import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="data-transfer-circle_svg__a"
      cx={12}
      cy={12}
      r={11.25}
    />,
    <path
      className="data-transfer-circle_svg__a"
      d="M9 8.25h8.25M14.25 5.25l3 3-3 3M15 15.75H6.75M9.75 18.75l-3-3 3-3"
    />
  );

export default SvgDataTransferCircle;
