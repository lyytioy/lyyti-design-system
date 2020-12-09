import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-credit-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-credit-card_svg__a"
      d="M14.25 12.75v7.768a2.732 2.732 0 01-2.733 2.732H4.983a2.732 2.732 0 01-2.733-2.732V4.983A2.733 2.733 0 014.983 2.25H6.75M2.25 18.75h12"
    />,
    <rect
      className="phone-action-credit-card_svg__a"
      x={9.75}
      y={0.75}
      width={12}
      height={9}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="phone-action-credit-card_svg__a"
      d="M9.75 3.75h12M15.75 6.75h3"
    />
  );

export default SvgPhoneActionCreditCard;
