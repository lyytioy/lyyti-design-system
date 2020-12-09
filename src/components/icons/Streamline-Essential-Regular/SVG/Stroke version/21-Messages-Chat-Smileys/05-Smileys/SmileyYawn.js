import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyYawn = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-yawn_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-yawn_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-yawn_svg__a"
      d="M9.75 6.834a3.689 3.689 0 00-4.018 1.934M14.25 6.834a3.689 3.689 0 014.018 1.934"
    />,
    <ellipse
      className="smiley-yawn_svg__a"
      cx={12}
      cy={17.018}
      rx={2.25}
      ry={3}
    />
  );

export default SvgSmileyYawn;
