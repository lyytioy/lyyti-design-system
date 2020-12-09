import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFaceIdScan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".face-id-scan_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="face-id-scan_svg__a" cx={12} cy={12} r={11.25} />,
    <path
      className="face-id-scan_svg__a"
      d="M.865 13.607a18 18 0 0122.271 0M12 .75v22.5M18.606 21.107a6.752 6.752 0 00-13.212 0M14.917 13.042a4.126 4.126 0 01-5.834 0M7.876 10.225a4.125 4.125 0 118.248 0"
    />
  );

export default SvgFaceIdScan;
