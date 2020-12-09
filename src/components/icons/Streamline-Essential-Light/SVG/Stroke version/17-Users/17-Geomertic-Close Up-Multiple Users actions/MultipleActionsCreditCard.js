import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-credit-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="multiple-actions-credit-card_svg__cls-1"
      x={13.5}
      y={15.5}
      width={10}
      height={8}
      rx={1}
      ry={1}
    />,
    <path
      className="multiple-actions-credit-card_svg__cls-1"
      d="M13.5 18.5h10M21.5 21.5h-2M10.5 15.5H.5a6 6 0 0111.659-2"
    />,
    <circle
      className="multiple-actions-credit-card_svg__cls-1"
      cx={6.5}
      cy={4.25}
      r={3.75}
    />,
    <circle
      className="multiple-actions-credit-card_svg__cls-1"
      cx={16}
      cy={4.25}
      r={3.75}
    />,
    <path
      className="multiple-actions-credit-card_svg__cls-1"
      d="M21.66 13.5a6 6 0 00-8.646-3.2"
    />
  );

export default SvgMultipleActionsCreditCard;
