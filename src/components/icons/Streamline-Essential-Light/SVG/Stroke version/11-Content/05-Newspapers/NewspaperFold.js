import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperFold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-fold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-fold_svg__a"
      d="M9.5 11a.5.5 0 01-.5.5H4a.5.5 0 01-.5-.5V6a.5.5 0 01.5-.5h5a.5.5 0 01.5.5zM11.5 5.5h3M11.5 8.5h3M11.5 11.5h3M3.5 14.5h11M3.5 17.5h11"
    />,
    <path
      className="newspaper-fold_svg__a"
      d="M20.5 22.5h-17a3 3 0 01-3-3v-17a1 1 0 011-1h15a1 1 0 011 1v17a3 3 0 006 0v-15M20.5 4.5V20"
    />
  );

export default SvgNewspaperFold;
