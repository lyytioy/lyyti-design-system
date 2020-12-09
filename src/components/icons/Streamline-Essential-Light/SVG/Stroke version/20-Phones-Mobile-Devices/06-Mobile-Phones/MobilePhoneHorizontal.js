import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobilePhoneHorizontal = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mobile-phone-horizontal_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mobile-phone-horizontal_svg__a"
      x={0.5}
      y={5.5}
      width={23}
      height={13}
      rx={2}
      ry={2}
    />,
    <path
      className="mobile-phone-horizontal_svg__a"
      d="M19.5 5.5v13M4.5 5.5v13M2.5 14.5v-5M21.5 11.75a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M21.5 11.75"
    />
  );

export default SvgMobilePhoneHorizontal;
