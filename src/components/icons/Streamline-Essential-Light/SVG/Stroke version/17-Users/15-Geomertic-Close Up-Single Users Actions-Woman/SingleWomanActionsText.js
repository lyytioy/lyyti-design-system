import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-text_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="single-woman-actions-text_svg__cls-1"
      x={11.5}
      y={11.5}
      width={12}
      height={12}
      rx={1}
      ry={1}
    />,
    <path
      className="single-woman-actions-text_svg__cls-1"
      d="M14.5 14.5h6M14.5 17.5h6M14.5 20.5h2.25M12.6 9.1a5.508 5.508 0 01-.8-3.054V4.8a4.3 4.3 0 10-8.593 0v1.246A5.518 5.518 0 012.4 9.1"
    />,
    <path
      className="single-woman-actions-text_svg__cls-1"
      d="M3.205 5.506A5.691 5.691 0 007.5 3.537a5.691 5.691 0 004.3 1.969M11.289 5.483a3.791 3.791 0 01-7.574 0M8.5 10.571a7.005 7.005 0 00-8 6.929h8"
    />
  );

export default SvgSingleWomanActionsText;
