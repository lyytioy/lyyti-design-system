import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCart1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-cart-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-cart-1_svg__a"
      d="M15.5 19.5h-13M9 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <path
      className="phone-action-cart-1_svg__a"
      d="M15.5 15.5v6a2 2 0 01-2 2h-9a2 2 0 01-2-2v-19a2 2 0 012-2h5"
    />,
    <circle className="phone-action-cart-1_svg__a" cx={13.5} cy={12.5} r={1} />,
    <circle className="phone-action-cart-1_svg__a" cx={17.5} cy={12.5} r={1} />,
    <path
      className="phone-action-cart-1_svg__a"
      d="M21.5.5l-2.5 9h-6.5l-2-6h10.167"
    />
  );

export default SvgPhoneActionCart1;
