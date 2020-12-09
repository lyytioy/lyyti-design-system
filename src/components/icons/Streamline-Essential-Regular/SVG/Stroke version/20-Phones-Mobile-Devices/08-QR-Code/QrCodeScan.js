import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQrCodeScan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".qr-code-scan_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="qr-code-scan_svg__a"
      d="M5.25 5.25h3v3h-3zM5.25 15.75h3v3h-3zM15.75 5.25h3v3h-3zM5.25 12.75h6v1.5M14.25 14.25v4.5h4.5v-4.5h-1.5M11.25 17.25v1.5M11.25 5.25v4.5h1.5M15.75 11.25h3M.75 6V2.25a1.5 1.5 0 011.5-1.5H6M18 .75h3.75a1.5 1.5 0 011.5 1.5V6M23.25 18v3.75a1.5 1.5 0 01-1.5 1.5H18M6 23.25H2.25a1.5 1.5 0 01-1.5-1.5V18"
    />
  );

export default SvgQrCodeScan;
