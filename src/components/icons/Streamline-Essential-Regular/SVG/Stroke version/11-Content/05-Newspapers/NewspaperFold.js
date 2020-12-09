import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperFold = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-fold_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-fold_svg__a"
      d="M23.25 6v14.25a2.25 2.25 0 01-4.5 0V3a1.5 1.5 0 00-1.5-1.5h-15A1.5 1.5 0 00.75 3v17.25A2.25 2.25 0 003 22.5h18M4.5 15H15M4.5 18h6"
    />,
    <rect
      className="newspaper-fold_svg__a"
      x={4.5}
      y={5.25}
      width={10.5}
      height={6}
      rx={0.75}
      ry={0.75}
    />
  );

export default SvgNewspaperFold;
