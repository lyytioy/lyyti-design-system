import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSingleNeutralActionsCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".single-neutral-actions-credit-card_svg__cls-1{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="single-neutral-actions-credit-card_svg__cls-1"
      d="M11.5 17.5h12M17.5 20.5h3"
    />,
    <rect
      className="single-neutral-actions-credit-card_svg__cls-1"
      x={11.5}
      y={14.5}
      width={12}
      height={9}
      rx={1}
      ry={1}
    />,
    <circle
      className="single-neutral-actions-credit-card_svg__cls-1"
      cx={7.5}
      cy={4.75}
      r={4.25}
    />,
    <path
      className="single-neutral-actions-credit-card_svg__cls-1"
      d="M8.5 17.5h-8A7 7 0 0111 11.436"
    />
  );

export default SvgSingleNeutralActionsCreditCard;
