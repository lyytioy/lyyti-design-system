import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobilePhoneHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mobile-phone-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mobile-phone-horizontal_svg__a"
      x={0.751}
      y={5.25}
      width={22.5}
      height={13.5}
      rx={3}
      ry={3}
    />,
    <path className="mobile-phone-horizontal_svg__a" d="M18.751 18.75V5.25" />
  );

export default SvgMobilePhoneHorizontal;
