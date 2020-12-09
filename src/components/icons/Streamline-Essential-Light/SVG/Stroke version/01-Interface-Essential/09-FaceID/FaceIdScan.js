import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceIdScan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-scan_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="face-id-scan_svg__a" cx={12} cy={12} r={11.5} />,
    <path
      className="face-id-scan_svg__a"
      d="M.532 12.864a17.25 17.25 0 0122.936 0M12 .5v23M7.058 9.218c-.145-2.8 1.134-4.623 2.971-5.354"
    />,
    <path
      className="face-id-scan_svg__a"
      d="M4.028 20.288c1.291-.56 2.883-1.126 4.635-1.775 1.062-.393 1.178-2.831.416-3.669A6.775 6.775 0 017.3 11.5M16.942 9.218c.145-2.8-1.134-4.623-2.971-5.354M19.972 20.288c-1.291-.56-2.883-1.126-4.635-1.775-1.062-.393-1.178-2.831-.416-3.669A6.775 6.775 0 0016.7 11.5"
    />
  );

export default SvgFaceIdScan;
