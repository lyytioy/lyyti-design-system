import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-denied_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="iris-scan-denied_svg__a" cx={17.5} cy={17.5} r={6} />,
    <path
      className="iris-scan-denied_svg__a"
      d="M19.621 15.379l-4.242 4.243M19.621 19.622l-4.242-4.243"
    />,
    <circle className="iris-scan-denied_svg__a" cx={12} cy={7} r={3.5} />,
    <path
      className="iris-scan-denied_svg__a"
      d="M12 5.5A1.5 1.5 0 1110.5 7M20.471 10.071a23.1 23.1 0 002.905-2.743.5.5 0 000-.656C22.213 5.352 17.562.5 12 .5S1.787 5.352.624 6.672a.5.5 0 000 .656c1.066 1.21 5.062 5.386 10 6.075"
    />
  );

export default SvgIrisScanDenied;
