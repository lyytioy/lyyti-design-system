import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag_svg__a"
      d="M4 1.5h6a1 1 0 011 1v2h10c.55 0 .649.281.219.625L14.5 10.5l7.5 6H7.6a.5.5 0 01-.464-.688C7.83 14.094 11 13.5 11 13.5H4M11 4.5v9M2 .5v23"
    />
  );

export default SvgFlag;
