import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyScared = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-scared_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="smiley-scared_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-scared_svg__a"
      d="M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 10.25a.25.25 0 10-.25-.25.25.25 0 00.25.25M16.5 14.5h-9a2 2 0 000 4h9a2 2 0 000-4zM18.5 16.5h-13"
    />
  );

export default SvgSmileyScared;
