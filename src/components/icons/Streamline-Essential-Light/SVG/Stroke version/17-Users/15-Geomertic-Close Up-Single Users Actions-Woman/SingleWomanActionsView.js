import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsView = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-view_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-view_svg__cls-1"
      cx={17.029}
      cy={17.032}
      r={4.529}
    />,
    <path
      className="single-woman-actions-view_svg__cls-1"
      d="M23.5 23.503l-3.248-3.248M12.6 9.1a5.515 5.515 0 01-.8-3.054V4.8a4.3 4.3 0 10-8.593 0v1.248A5.515 5.515 0 012.4 9.1"
    />,
    <path
      className="single-woman-actions-view_svg__cls-1"
      d="M3.205 5.509a5.692 5.692 0 004.3-1.97 5.688 5.688 0 004.3 1.97M11.288 5.486a3.791 3.791 0 01-7.573 0M9.5 17.5h-9a7 7 0 0110.783-5.891"
    />
  );

export default SvgSingleWomanActionsView;
