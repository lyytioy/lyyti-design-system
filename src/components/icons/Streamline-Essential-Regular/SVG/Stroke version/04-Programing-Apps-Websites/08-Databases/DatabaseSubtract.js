import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDatabaseSubtract = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".database-subtract_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="database-subtract_svg__a"
      d="M12 9.751C5.787 9.751.75 7.736.75 5.251S5.787.751 12 .751s11.25 2.014 11.25 4.5c0 1.466-1.754 2.769-4.469 3.591M23.25 10.518V5.251"
    />,
    <path
      className="database-subtract_svg__a"
      d="M.75 5.251v6c0 1.956 3.123 3.622 7.483 4.241"
    />,
    <path
      className="database-subtract_svg__a"
      d="M.75 11.251v6c0 2.064 3.476 3.8 8.214 4.334"
    />,
    <circle
      className="database-subtract_svg__a"
      cx={17.249}
      cy={17.251}
      r={6}
    />,
    <path className="database-subtract_svg__a" d="M14.249 17.251h6" />
  );

export default SvgDatabaseSubtract;
