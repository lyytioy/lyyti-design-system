import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScan1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-1_svg__a"
      d="M.5 3.5v-2a1 1 0 011-1h2M23.5 3.5v-2a1 1 0 00-1-1h-2M.5 20.5v2a1 1 0 001 1h2M23.5 20.5v2a1 1 0 01-1 1h-2"
    />,
    <circle className="iris-scan-1_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="iris-scan-1_svg__a"
      d="M12 11.75a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="iris-scan-1_svg__a"
      d="M21.857 12S17.571 18 12 18s-9.857-6-9.857-6S6.429 6 12 6s9.857 6 9.857 6z"
    />
  );

export default SvgIrisScan1;
