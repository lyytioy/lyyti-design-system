import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSmileyHeadSick = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".smiley-head-sick_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="smiley-head-sick_svg__a"
      d="M7.5 19a4.5 4.5 0 019 0M17.307 6.5A3.563 3.563 0 0020 8.5M6.5 10.25a.25.25 0 11.25-.25.25.25 0 01-.25.25M17.5 10.25a.25.25 0 10-.25-.25.25.25 0 00.25.25"
    />,
    <circle className="smiley-head-sick_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="smiley-head-sick_svg__a"
      d="M12.195 3.5l3.518-2.387M7.829 3.5L12.246.503M1.9 6.5h20.2a11.558 11.558 0 00-2.356-3H4.254a11.558 11.558 0 00-2.354 3zM.514 11.427L7.774 6.5"
    />
  );

export default SvgSmileyHeadSick;
