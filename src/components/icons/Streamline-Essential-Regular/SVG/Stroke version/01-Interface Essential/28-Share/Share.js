import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShare = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".share_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="share_svg__a" cx={5.25} cy={11.25} r={3.75} />,
    <circle className="share_svg__a" cx={18.75} cy={6} r={3.75} />,
    <circle className="share_svg__a" cx={18.75} cy={18} r={3.75} />,
    <path
      className="share_svg__a"
      d="M8.746 9.891l6.508-2.531M8.605 12.928l6.79 3.395"
    />
  );

export default SvgShare;
