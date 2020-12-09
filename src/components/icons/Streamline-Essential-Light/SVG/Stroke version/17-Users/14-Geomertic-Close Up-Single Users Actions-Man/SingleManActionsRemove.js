import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsRemove = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-remove_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-man-actions-remove_svg__cls-1"
      cx={17.5}
      cy={17.5}
      r={6}
    />,
    <path
      className="single-man-actions-remove_svg__cls-1"
      d="M19.621 15.379l-4.242 4.242M19.621 19.621l-4.242-4.242M8.5 17.5h-8a7 7 0 0110.783-5.89M3.838 2.592A7.049 7.049 0 008.917 4.75a7.047 7.047 0 002.794-.575"
    />,
    <circle
      className="single-man-actions-remove_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />
  );

export default SvgSingleManActionsRemove;
