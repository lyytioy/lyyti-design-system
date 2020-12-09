import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyAngry = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-angry_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-angry_svg__a"
      d="M17.035 6.615a7.756 7.756 0 01-10.07.056M15 4.877a4.62 4.62 0 01-6 .033"
    />,
    <circle className="smiley-angry_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-angry_svg__a"
      d="M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M12 14.5a1.5 1.5 0 00-1.5 1.5v2a1.5 1.5 0 003 0v-2a1.5 1.5 0 00-1.5-1.5z"
    />
  );

export default SvgSmileyAngry;
