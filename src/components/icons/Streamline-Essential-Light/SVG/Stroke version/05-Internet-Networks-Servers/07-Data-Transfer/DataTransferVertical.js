import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-vertical_svg__a"
      d="M9.5 23.5v-14M14.5 14.5V.5M13.5 19.5l-4 4-4-4M18.5 4.5l-4-4-4 4"
    />
  );

export default SvgDataTransferVertical;
