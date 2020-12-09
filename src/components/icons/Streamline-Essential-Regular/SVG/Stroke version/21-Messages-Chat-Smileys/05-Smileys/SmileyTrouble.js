import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyTrouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-trouble_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="smiley-trouble_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="smiley-trouble_svg__a"
      d="M9.75 17.25h4.5M8.25 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-trouble_svg__a" cx={8.25} cy={9} r={3.75} />,
    <path
      className="smiley-trouble_svg__a"
      d="M15.75 7.875a.375.375 0 11-.375.375.375.375 0 01.375-.375"
    />,
    <circle className="smiley-trouble_svg__a" cx={15.75} cy={9} r={3.75} />
  );

export default SvgSmileyTrouble;
