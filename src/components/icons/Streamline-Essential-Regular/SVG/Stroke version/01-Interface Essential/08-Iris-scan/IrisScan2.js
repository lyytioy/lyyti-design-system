import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScan2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-2_svg__b{fill:none;stroke:currentColor;stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      cx={12}
      cy={12}
      r={1.5}
      strokeMiterlimit={10}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
    />,
    <path
      className="iris-scan-2_svg__b"
      d="M12 4.5c-4.031-.075-8.2 3.057-10.821 6.26a2 2 0 000 2.473C3.742 16.372 7.9 19.575 12 19.5c4.1.077 8.257-3.126 10.823-6.264a2 2 0 000-2.473C20.2 7.558 16.031 4.426 12 4.5z"
    />,
    <circle className="iris-scan-2_svg__b" cx={12} cy={12} r={5.25} />,
    <path
      className="iris-scan-2_svg__b"
      d="M12 4.5v3.75M12 15.75v3.75M15.75 12h3M5.25 12h3"
    />
  );

export default SvgIrisScan2;
