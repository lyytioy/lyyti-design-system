import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyIndiferent1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-indiferent-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-indiferent-1_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-indiferent-1_svg__a"
      d="M5.5 15.5h13M5.5 8.5h3M18.5 8.5h-3"
    />
  );

export default SvgSmileyIndiferent1;
