import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSignalFlag = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".signal-flag_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="signal-flag_svg__a" cx={13.5} cy={3} r={2.5} />,
    <path
      className="signal-flag_svg__a"
      d="M4.586 8.5H1a.5.5 0 00-.5.5v5.5a1 1 0 001 1h4a1 1 0 001-1v-2M13.5 22v-5"
    />,
    <path
      className="signal-flag_svg__a"
      d="M10.5 22a1.5 1.5 0 003 0 1.5 1.5 0 003 0V10.5h.359a5.485 5.485 0 004.576-2.45l1.813-2.718a1.5 1.5 0 10-2.5-1.664l-1.809 2.719a2.492 2.492 0 01-2.08 1.113H6a1.5 1.5 0 100 3h4.5z"
    />
  );

export default SvgSignalFlag;
