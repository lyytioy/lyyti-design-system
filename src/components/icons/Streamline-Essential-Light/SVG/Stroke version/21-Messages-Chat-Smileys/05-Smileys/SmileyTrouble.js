import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTrouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-trouble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-trouble_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-trouble_svg__a"
      d="M9.5 16.5h5M6.5 7.25A.25.25 0 116.75 7a.25.25 0 01-.25.25"
    />,
    <circle className="smiley-trouble_svg__a" cx={6.5} cy={8.5} r={3} />,
    <path
      className="smiley-trouble_svg__a"
      d="M17.5 7.25a.25.25 0 11.25-.25.25.25 0 01-.25.25"
    />,
    <circle className="smiley-trouble_svg__a" cx={17.5} cy={8.5} r={3} />
  );

export default SvgSmileyTrouble;
