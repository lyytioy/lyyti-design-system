import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMobileQrCode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mobile-qr-code_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mobile-qr-code_svg__a"
      x={5.5}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <path
      className="mobile-qr-code_svg__a"
      d="M18.5 4.5h-13M18.5 19.5h-13M9.5 2.5h5M12 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25M7.496 7.5h2v2h-2zM7.496 14.5h2v2h-2zM14.496 7.5h2v2h-2zM7.496 12.5h4v1M13.496 13.5v3h3v-3h-1M11.496 15.5v1M11.496 7.5v3h1M14.496 11.5h2"
    />
  );

export default SvgMobileQrCode;
