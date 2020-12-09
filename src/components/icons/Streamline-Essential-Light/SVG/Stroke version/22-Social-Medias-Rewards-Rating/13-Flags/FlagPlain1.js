import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFlagPlain1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".flag-plain-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="flag-plain-1_svg__a"
      d="M5 1.5h6a1 1 0 011 1v2h8a1 1 0 011 1v10a1 1 0 01-1 1H8.6a.5.5 0 01-.464-.687C8.83 14.094 12 13.5 12 13.5H5M12 4.5v9M3 .5v23"
    />
  );

export default SvgFlagPlain1;
