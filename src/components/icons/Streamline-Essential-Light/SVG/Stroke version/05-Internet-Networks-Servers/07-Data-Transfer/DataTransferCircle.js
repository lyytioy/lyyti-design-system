import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-circle_svg__a"
      d="M13.5 15.5h-8M18.5 8.5h-8M15.5 11.5l3-3-3-3M8.5 18.5l-3-3 3-3"
    />,
    <circle className="data-transfer-circle_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgDataTransferCircle;
