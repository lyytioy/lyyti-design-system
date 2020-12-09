import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDisable = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".disable_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="disable_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="disable_svg__a"
      d="M12 4.333a7.666 7.666 0 00-6.341 11.975l10.65-10.649A7.633 7.633 0 0012 4.333zM7.691 18.341a7.666 7.666 0 0010.65-10.65z"
    />
  );

export default SvgDisable;
