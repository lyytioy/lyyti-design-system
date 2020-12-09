import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSound = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".sound_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="sound_svg__a" d="M11.5 17.501h-1v2h1l2 1v-4l-2 1z" />,
    <circle className="sound_svg__a" cx={12} cy={18.501} r={5} />,
    <path
      className="sound_svg__a"
      d="M7.5 12.5v-11a1 1 0 011-1h7a1 1 0 011 1v11M12 9.501v2M12 7.501v-4.5M10.5 7.501h3"
    />
  );

export default SvgSound;
