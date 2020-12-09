import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySurprised = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-surprised_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-surprised_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-surprised_svg__a"
      d="M7.768 9.143a.375.375 0 11-.375.375.375.375 0 01.375-.375M16.5 9.143a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.665 18.75a.76.76 0 00.744-.9 4.5 4.5 0 00-8.818 0 .759.759 0 00.744.9 9.33 9.33 0 017.33 0z"
    />
  );

export default SvgSmileySurprised;
