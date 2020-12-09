import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRetouchSmile = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".retouch-smile_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="retouch-smile_svg__a"
      d="M22.426 15.488a11.4 11.4 0 01-1.256 2.582M18.382 20.948a10.494 10.494 0 01-2.533 1.346M11.9 23a11.131 11.131 0 01-2.841-.4M5.464 20.833a10.856 10.856 0 01-2.064-1.99M1.508 15.308a11.2 11.2 0 01-.484-2.829M1.574 8.512A11.4 11.4 0 012.83 5.93M5.618 3.052a10.494 10.494 0 012.533-1.346M12.1 1a11.145 11.145 0 012.842.4M18.536 3.167a10.856 10.856 0 012.064 1.99M22.492 8.692a11.2 11.2 0 01.484 2.829"
    />,
    <circle className="retouch-smile_svg__a" cx={12} cy={12} r={7} />,
    <path
      className="retouch-smile_svg__a"
      d="M13.938 14.5a4.009 4.009 0 01-3.876 0M9.75 10.5a.25.25 0 11-.25.25.25.25 0 01.25-.25M14.25 10.5a.25.25 0 10.25.25.25.25 0 00-.25-.25"
    />
  );

export default SvgRetouchSmile;
