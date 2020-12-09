import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgScreenCurved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".screen-curved_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="screen-curved_svg__a"
      d="M14.764 17.262l.983 4.4h-7.5l.983-4.4M5.997 21.662h12"
    />,
    <path
      className="screen-curved_svg__a"
      d="M23.247 17.7a.743.743 0 01-.915.731A46.446 46.446 0 0012 17.162a46.446 46.446 0 00-10.338 1.265.743.743 0 01-.915-.727V3.127a.743.743 0 01.915-.727A46.432 46.432 0 0012 3.662 46.432 46.432 0 0022.332 2.4a.743.743 0 01.915.731z"
    />
  );

export default SvgScreenCurved;
