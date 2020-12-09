import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleWomanActionsBlock = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-woman-actions-block_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-woman-actions-block_svg__cls-1"
      cx={17.5}
      cy={17.503}
      r={6}
    />,
    <path
      className="single-woman-actions-block_svg__cls-1"
      d="M13.258 21.746l8.485-8.485M12.6 9.1a5.506 5.506 0 01-.8-3.054V4.8a4.3 4.3 0 10-8.6 0v1.248A5.506 5.506 0 012.4 9.1"
    />,
    <path
      className="single-woman-actions-block_svg__cls-1"
      d="M3.2 5.509a5.691 5.691 0 004.3-1.97 5.691 5.691 0 004.3 1.97M11.287 5.486a3.791 3.791 0 01-7.574 0M8.5 17.5h-8a7 7 0 0110.783-5.89"
    />
  );

export default SvgSingleWomanActionsBlock;
