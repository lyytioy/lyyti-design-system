import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="add-circle_svg__a" cx={12} cy={12} r={11} />,
    <path className="add-circle_svg__a" d="M12 6v12M18 12H6" />
  );

export default SvgAddCircle;
