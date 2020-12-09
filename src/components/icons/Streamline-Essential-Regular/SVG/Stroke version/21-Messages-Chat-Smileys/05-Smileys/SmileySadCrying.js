import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySadCrying = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sad-crying_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-sad-crying_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-sad-crying_svg__a"
      d="M18.048 18a6.752 6.752 0 00-12.1 0M8.25 8.625A.375.375 0 117.875 9a.375.375 0 01.375-.375M15.75 8.625a.375.375 0 11-.375.375.375.375 0 01.375-.375M20.25 13a1.25 1.25 0 01-2.5 0A8.269 8.269 0 0119 10.5a8.269 8.269 0 011.25 2.5z"
    />
  );

export default SvgSmileySadCrying;
