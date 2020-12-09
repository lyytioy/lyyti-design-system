import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItBreak = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-break_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-break_svg__a"
      d="M11.7 22.026l-9.494-10.28A5.667 5.667 0 011.12 5.139a5.839 5.839 0 019.287-1.487l1.6 1.459 1.6-1.459A5.84 5.84 0 0122.9 5.139a5.628 5.628 0 01-1.4 6.794z"
    />,
    <path
      className="love-it-break_svg__a"
      d="M12.007 5.111l-3.5 6.915h6.5l-3.312 10"
    />
  );

export default SvgLoveItBreak;
