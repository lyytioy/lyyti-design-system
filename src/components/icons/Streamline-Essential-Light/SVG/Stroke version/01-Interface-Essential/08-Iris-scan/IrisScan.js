import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScan = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="iris-scan_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="iris-scan_svg__a"
      d="M12 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25M16 8l5-5M8 8L3 3M16 16l5 5M8 16l-5 5"
    />,
    <path
      className="iris-scan_svg__a"
      d="M23.376 11.672C22.213 10.352 17.562 5.5 12 5.5S1.787 10.352.624 11.672a.5.5 0 000 .656C1.787 13.648 6.438 18.5 12 18.5s10.213-4.852 11.376-6.172a.5.5 0 000-.656z"
    />
  );

export default SvgIrisScan;
