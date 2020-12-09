import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralFind = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-find_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-find_svg__cls-1"
      cx={10.5}
      cy={10.5}
      r={9.75}
    />,
    <path
      className="single-neutral-find_svg__cls-1"
      d="M17.394 17.394l5.856 5.856"
    />,
    <circle
      className="single-neutral-find_svg__cls-1"
      cx={10.5}
      cy={5.25}
      r={2.25}
    />,
    <path
      className="single-neutral-find_svg__cls-1"
      d="M12.133 17.2l.617-3.7h1.5v-.75a3.75 3.75 0 00-7.5 0v.75h1.5l.617 3.7"
    />
  );

export default SvgSingleNeutralFind;
