import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySadNerd = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-sad-nerd_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-sad-nerd_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-sad-nerd_svg__a"
      d="M18.048 18a6.752 6.752 0 00-12.1 0M9 7.125a.375.375 0 11-.375.375A.375.375 0 019 7.125M16.5 7.125a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-sad-nerd_svg__a" cx={8.25} cy={8.25} r={3.75} />,
    <circle className="smiley-sad-nerd_svg__a" cx={15.75} cy={8.25} r={3.75} />,
    <path
      className="smiley-sad-nerd_svg__a"
      d="M4.57 7.528L.75 6M19.43 7.528L23.25 6"
    />
  );

export default SvgSmileySadNerd;
