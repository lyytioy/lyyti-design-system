import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFontSize = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".font-size_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="font-size_svg__a"
      d="M15.979 21.725L9.453 2.612a.5.5 0 00-.946 0L2 21.725M4.383 14.725h9.207M.5 21.725h3.02M14.479 21.725H17.5M22.5 21.725L18.377 9.647a.5.5 0 00-.946 0l-1.888 5.543M16.92 16.725h3.874M21.516 21.725H23.5"
    />
  );

export default SvgFontSize;
