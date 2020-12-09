import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLensShutter1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".lens-shutter-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="lens-shutter-1_svg__a" cx={12} cy={12} r={11.25} />,
    <circle className="lens-shutter-1_svg__a" cx={12} cy={12} r={3.424} />,
    <path
      className="lens-shutter-1_svg__a"
      d="M12 8.576c-4.738 0-10.058 3.73-9.743 9.049M9.035 10.288C6.666 14.392 7.236 20.863 12 23.25M9.035 13.712c2.369 4.1 8.259 6.845 12.708 3.913M12 15.424c4.738 0 10.058-3.73 9.743-9.049M14.965 13.712C17.334 9.608 16.764 3.137 12 .75M14.965 10.288C12.6 6.184 6.706 3.443 2.257 6.375"
    />
  );

export default SvgLensShutter1;
