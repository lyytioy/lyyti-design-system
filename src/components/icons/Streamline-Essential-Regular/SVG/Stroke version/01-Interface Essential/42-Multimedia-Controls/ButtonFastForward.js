import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonFastForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-fast-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-fast-forward_svg__a"
      d="M11.25 9.969V9.1a.855.855 0 011.238-.765l5.789 2.894a.856.856 0 010 1.531l-5.789 2.894a.855.855 0 01-1.238-.765v-.866l-3.262 1.635a.855.855 0 01-1.238-.765V9.1a.855.855 0 011.238-.765z"
    />,
    <circle
      className="button-fast-forward_svg__a"
      cx={12}
      cy={11.998}
      r={11.25}
    />
  );

export default SvgButtonFastForward;
