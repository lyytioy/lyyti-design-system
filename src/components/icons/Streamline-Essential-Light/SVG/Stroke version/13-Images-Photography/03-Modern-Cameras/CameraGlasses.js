import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".camera-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="camera-glasses_svg__a"
      d="M3.169 18a4.183 4.183 0 007.56 1.034l.741-1.186a1.8 1.8 0 013.06 0l.741 1.186A4.182 4.182 0 0023 16.818V12H3v2"
    />,
    <rect
      className="camera-glasses_svg__a"
      x={1}
      y={14}
      width={5}
      height={4}
      rx={1}
      ry={1}
    />,
    <path
      className="camera-glasses_svg__a"
      d="M6 15h3v2H6M3 12l3.188-7.172A3.077 3.077 0 019 3h1M23 12l-3.188-7.172A3.077 3.077 0 0017 3h-1M3.25 15.751A.25.25 0 113 16a.25.25 0 01.25-.25"
    />
  );

export default SvgCameraGlasses;
