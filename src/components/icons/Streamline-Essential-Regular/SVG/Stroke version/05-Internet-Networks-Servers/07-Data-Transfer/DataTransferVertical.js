import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferVertical = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-vertical_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-vertical_svg__a"
      d="M9 10.5v12.75M12 20.25l-3 3-3-3M15 13.5V.75M12 3.75l3-3 3 3"
    />
  );

export default SvgDataTransferVertical;
