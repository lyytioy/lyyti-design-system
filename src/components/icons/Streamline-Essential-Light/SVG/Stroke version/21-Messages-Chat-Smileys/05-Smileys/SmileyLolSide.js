import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyLolSide = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-lol-side_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-lol-side_svg__a"
      d="M6.343 14.121l1.268-1.267A.5.5 0 007.257 12H4.929M14.121 6.343l-1.267 1.268A.5.5 0 0112 7.257V4.929"
    />,
    <circle className="smiley-lol-side_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-lol-side_svg__a"
      d="M17.912 10.694a.5.5 0 01.909-.164 6 6 0 01-8.291 8.291.5.5 0 01.164-.909 9.3 9.3 0 004.488-2.73 9.3 9.3 0 002.73-4.488z"
    />
  );

export default SvgSmileyLolSide;
