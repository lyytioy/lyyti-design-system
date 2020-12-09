import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer_svg__a"
      d="M20.25 5.25L14.469.75V3H6.353a3.354 3.354 0 00-3 1.853 3.353 3.353 0 001.14 4.289L6.531 10.5V9a1.5 1.5 0 011.5-1.5h6.438v2.25zM3.531 18.75l6.219 4.5V21h7.9a3.352 3.352 0 003-1.853 3.352 3.352 0 00-1.139-4.288L17.469 13.5V15a1.5 1.5 0 01-1.5 1.5H9.75v-2.25z"
    />
  );

export default SvgDataTransfer;
