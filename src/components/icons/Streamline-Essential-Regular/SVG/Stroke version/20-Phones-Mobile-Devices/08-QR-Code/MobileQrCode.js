import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobileQrCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mobile-qr-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="mobile-qr-code_svg__a"
      x={5.25}
      y={0.75}
      width={13.5}
      height={22.5}
      rx={3}
      ry={3}
    />,
    <path
      className="mobile-qr-code_svg__a"
      d="M5.25 19.125h13.5M8.25 6.375v-1.5h1.5M12.75 4.875h3v3h-3zM8.25 12.375h3v3h-3zM8.25 9.375h3M13.5 10.875h2.25M15.75 13.875v1.5H13.5"
    />
  );

export default SvgMobileQrCode;
