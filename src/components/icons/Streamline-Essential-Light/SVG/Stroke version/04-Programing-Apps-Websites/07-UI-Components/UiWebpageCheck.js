import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-check_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-check_svg__a"
      d="M5.588 20.5H2.5a1.013 1.013 0 01-1-1.026V1.5a1 1 0 011-1h19a1 1 0 011 1v17.974a1.013 1.013 0 01-1 1.026h-4M5.5 5.5h13M5.5 8.5h13M5.5 11.5H14"
    />,
    <circle className="ui-webpage-check_svg__a" cx={11.5} cy={19.5} r={4} />,
    <path className="ui-webpage-check_svg__a" d="M10 19.5l1 1 2-2" />
  );

export default SvgUiWebpageCheck;
