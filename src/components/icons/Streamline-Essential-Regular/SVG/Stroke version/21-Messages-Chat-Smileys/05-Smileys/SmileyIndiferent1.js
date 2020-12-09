import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyIndiferent1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-indiferent-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-indiferent-1_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-indiferent-1_svg__a"
      d="M7.5 15.75h9M6.75 9h3M14.25 9h3"
    />
  );

export default SvgSmileyIndiferent1;
