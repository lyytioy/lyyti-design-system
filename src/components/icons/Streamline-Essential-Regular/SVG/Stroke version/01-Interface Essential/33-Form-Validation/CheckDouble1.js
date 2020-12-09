import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCheckDouble1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".check-double-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="check-double-1_svg__a"
      d="M23.25 4.249L11.808 19.505a1.5 1.5 0 01-2.261.161L6.57 16.689M6 19.76a1.5 1.5 0 01-2.133.012L.89 16.8M17.43 4.355L9.29 15.209"
    />
  );

export default SvgCheckDouble1;
