import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHypnotized = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-hypnotized_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-hypnotized_svg__a"
      d="M9.5 18.5h5M4.5 7a3.564 3.564 0 013-1.5M19.5 7a3.564 3.564 0 00-3-1.5"
    />,
    <circle className="smiley-hypnotized_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="smiley-hypnotized_svg__a" cx={7} cy={11} r={2.5} />,
    <path
      className="smiley-hypnotized_svg__a"
      d="M7 10.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <circle className="smiley-hypnotized_svg__a" cx={17} cy={11} r={2.5} />,
    <path
      className="smiley-hypnotized_svg__a"
      d="M17 10.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgSmileyHypnotized;
