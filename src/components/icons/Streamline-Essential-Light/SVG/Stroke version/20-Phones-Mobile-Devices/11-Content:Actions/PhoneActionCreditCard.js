import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCreditCard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-credit-card_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="phone-action-credit-card_svg__a"
      x={7.5}
      y={8.5}
      width={9}
      height={6}
      rx={1}
      ry={1}
    />,
    <path
      className="phone-action-credit-card_svg__a"
      d="M7.5 10.5h9M12.5 12.5h2M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-credit-card_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-credit-card_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3"
    />
  );

export default SvgPhoneActionCreditCard;
