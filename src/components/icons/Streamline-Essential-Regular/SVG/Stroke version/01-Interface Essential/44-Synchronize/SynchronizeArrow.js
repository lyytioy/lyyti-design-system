import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrow_svg__a"
      d="M5.278 17.49a9.752 9.752 0 10-1.528-5.243V14.5"
    />,
    <path className="synchronize-arrow_svg__a" d="M.75 11.497l3 3 3-3" />
  );

export default SvgSynchronizeArrow;
