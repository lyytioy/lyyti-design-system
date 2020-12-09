import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgQrCodeScan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".qr-code-scan_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="qr-code-scan_svg__a"
      d="M.5 18.531V20.5a1 1 0 001 1h1.969M3.469 2.5H1.5a1 1 0 00-1 1v1.969M23.5 5.469V3.5a1 1 0 00-1-1h-1.969M20.531 21.5H22.5a1 1 0 001-1v-1.969M5.497 5.5h3v3h-3zM15.497 5.5h3v3h-3zM5.497 15.5h3v3h-3zM15.497 15.5v3h3v-3h-1M10.497 8V5.5h3M13.497 7.5V11M5.497 13.5h5V11M10.497 15.5v3h3M12.497 15.5h1M5.497 10.5h3M18.497 10.5h-3v1M12.497 13.5h6"
    />
  );

export default SvgQrCodeScan;
