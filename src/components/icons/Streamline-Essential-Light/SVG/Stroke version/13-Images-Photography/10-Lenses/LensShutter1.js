import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShutter1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shutter-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="lens-shutter-1_svg__a" cx={12} cy={12} r={11.5} />,
    <circle className="lens-shutter-1_svg__a" cx={12} cy={12} r={3.5} />,
    <path
      className="lens-shutter-1_svg__a"
      d="M12 8.5c-4.844 0-10.281 3.812-9.959 9.25M8.969 10.25C6.547 14.445 7.13 21.06 12 23.5M8.969 13.75c2.422 4.2 8.442 7 12.99 4M12 15.5c4.844 0 10.281-3.812 9.959-9.25M15.031 13.75C17.453 9.555 16.87 2.94 12 .5M15.031 10.25c-2.422-4.195-8.442-7-12.99-4"
    />
  );

export default SvgLensShutter1;
