import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyThrilled = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-thrilled_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-thrilled_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-thrilled_svg__a"
      d="M15.873 15.5a1 1 0 01.97 1.249 5 5 0 01-9.686 0 1 1 0 01.97-1.249zM18.8 10.108a2.359 2.359 0 00-4 0M9.5 10.108a2.359 2.359 0 00-4 0"
    />
  );

export default SvgSmileyThrilled;
