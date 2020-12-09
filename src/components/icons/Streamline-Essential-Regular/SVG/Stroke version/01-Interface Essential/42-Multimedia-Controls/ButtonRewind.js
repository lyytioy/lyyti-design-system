import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonRewind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-rewind_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-rewind_svg__a"
      d="M12.75 9.969V9.1a.855.855 0 00-1.238-.765l-5.789 2.898a.856.856 0 000 1.531l5.789 2.894a.855.855 0 001.238-.765v-.866l3.262 1.631a.855.855 0 001.238-.765V9.1a.855.855 0 00-1.238-.765z"
    />,
    <circle className="button-rewind_svg__a" cx={12} cy={11.998} r={11.25} />
  );

export default SvgButtonRewind;
