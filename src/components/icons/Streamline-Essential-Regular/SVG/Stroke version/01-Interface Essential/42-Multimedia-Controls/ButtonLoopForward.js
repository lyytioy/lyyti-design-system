import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgButtonLoopForward = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".button-loop-forward_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="button-loop-forward_svg__a"
      d="M23.25 7.5V5.248a4.5 4.5 0 00-4.5-4.5H5.25a4.5 4.5 0 00-4.5 4.5v9a4.5 4.5 0 004.5 4.5H16.5"
    />,
    <path
      className="button-loop-forward_svg__a"
      d="M12 14.248l4.5 4.5-4.5 4.5M16.5 14.248l4.5 4.5-4.5 4.5"
    />
  );

export default SvgButtonLoopForward;
