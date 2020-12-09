import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".credit-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      x={0.75}
      y={0.75}
      width={22.67}
      height={17}
      rx={2.83}
      ry={2.83}
      className="credit-card_svg__a"
    />,
    <path
      className="credit-card_svg__a"
      d="M.75 6.42h22.67M5.33 13.5H11M5.21 10.5h11.58"
    />
  );

export default SvgCreditCard;
