import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMultipleActionsCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".multiple-actions-credit-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="multiple-actions-credit-card_svg__cls-1"
      d="M10.781 10.513A6.048 6.048 0 006.75 9a6 6 0 00-6 5.25"
    />,
    <circle
      className="multiple-actions-credit-card_svg__cls-1"
      cx={6.75}
      cy={4.125}
      r={3.375}
    />,
    <circle
      className="multiple-actions-credit-card_svg__cls-1"
      cx={16.5}
      cy={3.375}
      r={2.625}
    />,
    <path
      className="multiple-actions-credit-card_svg__cls-1"
      d="M20.4 9a4.5 4.5 0 00-7.284-.71"
    />,
    <rect
      className="multiple-actions-credit-card_svg__cls-1"
      x={11.25}
      y={14.25}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="multiple-actions-credit-card_svg__cls-1"
      d="M11.25 17.25h12M17.25 20.25h3"
    />
  );

export default SvgMultipleActionsCreditCard;
