import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-circle_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-circle_svg__cls-1"
      cx={12}
      cy={12}
      r={11.5}
    />,
    <path
      className="single-neutral-circle_svg__cls-1"
      d="M3.959 20.221a25.59 25.59 0 015.413-2.352c.837-.309.928-2.229.328-2.889-.866-.953-1.6-2.07-1.6-4.766A3.812 3.812 0 0112 6.047a3.812 3.812 0 013.9 4.167c0 2.7-.734 3.813-1.6 4.766-.6.66-.509 2.58.328 2.889a25.59 25.59 0 015.413 2.352"
    />
  );

export default SvgSingleNeutralCircle;
