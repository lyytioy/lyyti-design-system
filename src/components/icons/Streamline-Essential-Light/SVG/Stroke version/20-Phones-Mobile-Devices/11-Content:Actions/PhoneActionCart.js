import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPhoneActionCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".phone-action-cart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="phone-action-cart_svg__a"
      d="M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M12 21.25"
    />,
    <rect
      className="phone-action-cart_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="phone-action-cart_svg__a"
      d="M18.5 19.5h-13M18.5 4.5h-13M10.5 2.5h3M16 8l-1.88 5.171a.5.5 0 01-.47.329h-3.579a.5.5 0 01-.459-.3l-1.072-3A.5.5 0 019 9.5h6.455M10.75 15a.25.25 0 11-.25.25.25.25 0 01.25-.25M13.25 15a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgPhoneActionCart;
