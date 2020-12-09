import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDataTransfer = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".data-transfer_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="data-transfer_svg__a"
      d="M15.5 3.751h-10c-3 0-4 2.791-4 5a6.006 6.006 0 00.542 2.4.5.5 0 00.958-.2v-.694c0-1 .5-1.5 2.5-1.5h10v2.5c0 .275.151.334.336.13l4.328-4.76a.563.563 0 000-.74l-4.328-4.76c-.185-.2-.336-.145-.336.13zM8.5 20.751h10c3 0 4-2.791 4-5a6 6 0 00-.542-2.395.5.5 0 00-.958.2v.693c0 1-.5 1.5-2.5 1.5h-10v-2.5c0-.275-.151-.333-.336-.13l-4.328 4.76a.563.563 0 000 .74l4.328 4.76c.185.2.336.145.336-.13z"
    />
  );

export default SvgDataTransfer;
