import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsAddress = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-address_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-address_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={2.25}
    />,
    <path
      className="single-man-actions-address_svg__cls-1"
      d="M19.75 17.5v1.125a1.874 1.874 0 001.875 1.875 1.874 1.874 0 001.875-1.875v-.846a6.186 6.186 0 00-5.845-6.279 6 6 0 00-1.577 11.835 6.152 6.152 0 002.966-.037M8.5 17.5h-8a7 7 0 0110.783-5.89M3.838 2.592A7.053 7.053 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-address_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsAddress;
