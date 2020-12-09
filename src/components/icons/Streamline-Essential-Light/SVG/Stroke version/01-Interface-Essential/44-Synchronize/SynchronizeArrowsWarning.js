import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-warning_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-warning_svg__a"
      d="M.71 11.613l2.787 4.152 3.205-3.838M23.283 15.916l-2.786-4.153-3.206 3.839"
    />,
    <path
      className="synchronize-arrows-warning_svg__a"
      d="M20.46 11.8a8.619 8.619 0 01-6.509 9.727 8.5 8.5 0 01-7.93-2.223M3.5 15.74a8.853 8.853 0 016.54-10.753 8.5 8.5 0 018.325 2.64M11.496 7.496v6.98"
    />,
    <path
      className="synchronize-arrows-warning_svg__a"
      d="M11.5 16.726a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />
  );

export default SvgSynchronizeArrowsWarning;
