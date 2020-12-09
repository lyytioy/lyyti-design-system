import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRedo = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".redo_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="redo_svg__a"
      d="M23.25.748v7.5h-7.5M12 23.248a11.25 11.25 0 1110.6-15"
    />
  );

export default SvgRedo;
