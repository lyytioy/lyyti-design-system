import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".ui-webpage-remove_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="ui-webpage-remove_svg__a"
      d="M3.75 19.5H2.571a1.038 1.038 0 01-1.071-1V1.725A1.027 1.027 0 012.571.75h18.858a1.027 1.027 0 011.071.975V18.5a1.038 1.038 0 01-1.071 1H20.25M5.25 4.5h13.5M5.217 8.25H15"
    />,
    <circle
      className="ui-webpage-remove_svg__a"
      cx={12}
      cy={17.625}
      r={5.625}
    />,
    <path
      className="ui-webpage-remove_svg__a"
      d="M10.125 19.5l3.75-3.75M10.125 15.75l3.75 3.75"
    />
  );

export default SvgUiWebpageRemove;
