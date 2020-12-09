import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDelete2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".delete-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="delete-2_svg__a" cx={11.998} cy={12} r={11.25} />,
    <path
      className="delete-2_svg__a"
      d="M4.043 19.955l15.909-15.91M19.952 19.955L4.043 4.045"
    />
  );

export default SvgDelete2;
