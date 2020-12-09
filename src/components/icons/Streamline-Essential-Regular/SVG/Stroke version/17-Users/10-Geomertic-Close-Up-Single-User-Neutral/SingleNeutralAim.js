import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralAim = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-aim_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle
      className="single-neutral-aim_svg__cls-1"
      cx={12}
      cy={12}
      r={7.5}
    />,
    <path
      className="single-neutral-aim_svg__cls-1"
      d="M12 18v4.5M12 1.5V6M6 12H1.5M22.5 12H18"
    />,
    <circle
      className="single-neutral-aim_svg__cls-1"
      cx={12}
      cy={10.874}
      r={2.625}
    />,
    <path
      className="single-neutral-aim_svg__cls-1"
      d="M15.08 15.483a4.461 4.461 0 00-6.16 0"
    />
  );

export default SvgSingleNeutralAim;
