import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="iris-scan-denied_svg__a" cx={17.25} cy={17.25} r={6} />,
    <path
      className="iris-scan-denied_svg__a"
      d="M19.5 14.999l-4.5 4.5M15 14.999l4.5 4.5M21.75 9.7a19.96 19.96 0 001.073-1.093 1.662 1.662 0 000-2.226C20.2 3.5 16.031.684 12 .751 7.969.684 3.8 3.5 1.179 6.385a1.663 1.663 0 000 2.226 18.849 18.849 0 007.082 4.955M10.5 10.937A3.749 3.749 0 1115.438 9"
    />
  );

export default SvgIrisScanDenied;
