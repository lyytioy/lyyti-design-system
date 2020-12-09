import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransferDiagonal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer-diagonal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer-diagonal_svg__a"
      d="M12.75 15.75l10.5-10.5M23.25 9.75v-4.5h-4.5M11.25 8.25L.75 18.75M.75 14.25v4.5h4.5"
    />
  );

export default SvgDataTransferDiagonal;
