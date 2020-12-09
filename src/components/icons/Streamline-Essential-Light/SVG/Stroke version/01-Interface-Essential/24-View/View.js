import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="view_svg__a"
      d="M23.5 12s-5.148 6.5-11.5 6.5S.5 12 .5 12 5.648 5.5 12 5.5 23.5 12 23.5 12z"
    />,
    <circle className="view_svg__a" cx={12} cy={12} r={4} />,
    <path className="view_svg__a" d="M12 10a2 2 0 11-2 2" />
  );

export default SvgView;
