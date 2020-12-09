import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFontSize = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".font-size_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="font-size_svg__a"
      d="M.75 12.749h10.5M15.75 17.249h7.5M15.75 21.749V13.5a3.75 3.75 0 017.5 0v8.25M.75 21.749V7.5a5.25 5.25 0 0110.5 0v14.25"
    />
  );

export default SvgFontSize;
