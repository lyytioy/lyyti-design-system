import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".delete_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="delete_svg__a" cx={12} cy={12} r={11.25} />,
    <path className="delete_svg__a" d="M4.045 19.955l15.91-15.91" />
  );

export default SvgDelete;
