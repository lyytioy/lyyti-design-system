import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAddCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".add-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="add-circle_svg__a" d="M12 7.5v9M7.5 12h9" />,
    <circle className="add-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgAddCircle;
