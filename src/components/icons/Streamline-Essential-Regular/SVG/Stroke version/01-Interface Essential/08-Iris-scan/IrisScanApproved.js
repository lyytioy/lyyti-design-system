import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgIrisScanApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".iris-scan-approved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="iris-scan-approved_svg__a"
      d="M12 4.5c-4.031-.075-8.2 3.057-10.821 6.26a2 2 0 000 2.473C3.742 16.372 7.9 19.575 12 19.5c4.1.077 8.257-3.126 10.824-6.264a2 2 0 000-2.473C20.2 7.558 16.031 4.426 12 4.5z"
    />,
    <path
      className="iris-scan-approved_svg__a"
      d="M9.75 12L12 14.25 16.5 9M17.2 12.742a5.246 5.246 0 11-3.19-5.594"
    />
  );

export default SvgIrisScanApproved;
