import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileySmile2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-smile-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-smile-2_svg__a"
      d="M6.5 9.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M17.5 9.75a.25.25 0 10.25.25.25.25 0 00-.25-.25M6 15.5a6.5 6.5 0 0012 0"
    />,
    <circle className="smiley-smile-2_svg__a" cx={12} cy={12} r={11.5} />
  );

export default SvgSmileySmile2;
