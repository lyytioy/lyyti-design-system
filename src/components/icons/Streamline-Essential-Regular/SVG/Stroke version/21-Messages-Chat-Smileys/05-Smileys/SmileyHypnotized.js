import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHypnotized = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-hypnotized_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-hypnotized_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-hypnotized_svg__a"
      d="M7.5 11.625a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-hypnotized_svg__a" cx={7.5} cy={12} r={3} />,
    <path
      className="smiley-hypnotized_svg__a"
      d="M16.5 11.625a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-hypnotized_svg__a" cx={16.5} cy={12} r={3} />,
    <path
      className="smiley-hypnotized_svg__a"
      d="M9.75 18h4.5M9.268 4.816a3.542 3.542 0 00-2.335.291A3.544 3.544 0 005.25 6.75M15 4.816a3.689 3.689 0 014.018 1.934"
    />
  );

export default SvgSmileyHypnotized;
