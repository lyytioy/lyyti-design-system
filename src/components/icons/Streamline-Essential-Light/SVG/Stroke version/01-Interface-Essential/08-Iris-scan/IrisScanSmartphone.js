import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanSmartphone = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-smartphone_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-smartphone_svg__a"
      d="M19 19.5H6M12.5 21.25a.25.25 0 01.25.25.25.25 0 01-.25.25.25.25 0 01-.25-.25.25.25 0 01.25-.25"
    />,
    <rect
      className="iris-scan-smartphone_svg__a"
      x={6}
      y={0.5}
      width={13}
      height={23}
      rx={2}
      ry={2}
    />,
    <circle
      className="iris-scan-smartphone_svg__a"
      cx={12.5}
      cy={11}
      r={1.5}
    />,
    <path
      className="iris-scan-smartphone_svg__a"
      d="M16.97 10.833a.48.48 0 010 .334A4.828 4.828 0 0112.5 14.5a4.828 4.828 0 01-4.47-3.333.48.48 0 010-.334A4.829 4.829 0 0112.5 7.5a4.829 4.829 0 014.47 3.333z"
    />
  );

export default SvgIrisScanSmartphone;
