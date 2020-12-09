import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleManActionsCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-man-actions-credit-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="single-man-actions-credit-card_svg__cls-1"
      x={11.25}
      y={14.25}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="single-man-actions-credit-card_svg__cls-1"
      d="M11.25 17.25h12M17.25 20.25h3M.75 17.25a6.753 6.753 0 019.75-6.05M3.945 2.781a6.848 6.848 0 004.93 2.094 6.847 6.847 0 002.712-.558"
    />,
    <circle
      className="single-man-actions-credit-card_svg__cls-1"
      cx={7.5}
      cy={4.875}
      r={4.125}
    />
  );

export default SvgSingleManActionsCreditCard;
