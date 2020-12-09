import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgViewCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".view-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="view-circle_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="view-circle_svg__a"
      d="M19.875 12S17.063 7.5 12 7.5 4.125 12 4.125 12 6.937 16.5 12 16.5s7.875-4.5 7.875-4.5z"
    />,
    <circle className="view-circle_svg__a" cx={12} cy={12} r={2.5} />,
    <path
      className="view-circle_svg__a"
      d="M12 11.75a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgViewCircle;
