import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyWrong = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-wrong_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-wrong_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-wrong_svg__a"
      d="M6.75 8.25h3M8.25 9.75v-3M14.25 8.25h3M15.75 9.75v-3M6.75 17.25c0-2.564 1.192-3.545 2.864-3.545 2.9 0 1.871 3.545 4.772 3.545 1.674 0 2.864-.982 2.864-3.545"
    />,
    <circle className="smiley-wrong_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-wrong_svg__a"
      d="M6.75 8.25h3M8.25 9.75v-3M14.25 8.25h3M15.75 9.75v-3M6.75 17.25c0-2.564 1.192-3.545 2.864-3.545 2.9 0 1.871 3.545 4.772 3.545 1.674 0 2.864-.982 2.864-3.545"
    />
  );

export default SvgSmileyWrong;
