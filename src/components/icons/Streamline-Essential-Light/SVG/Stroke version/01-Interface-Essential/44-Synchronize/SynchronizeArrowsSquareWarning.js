import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsSquareWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-square-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-square-warning_svg__a"
      d="M20 17.494a3 3 0 01-3 3H7a3 3 0 01-3-3v-8M4 6.494a3 3 0 013-3h10a3 3 0 013 3v8"
    />,
    <path
      className="synchronize-arrows-square-warning_svg__a"
      d="M1.004 11.494l3-2 3 2M17.004 12.494l3 2 3-2M12.004 6.494v6.981M12 15.725a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSynchronizeArrowsSquareWarning;
