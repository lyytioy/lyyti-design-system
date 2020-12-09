import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-search_svg__a"
      d="M20.5 9.5V2.167A1.667 1.667 0 0018.833.5H5.167A1.667 1.667 0 003.5 2.167V13.5M10.5 17.5H5.623a5.281 5.281 0 01-5.123-4h11"
    />,
    <circle
      className="laptop-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path className="laptop-search_svg__a" d="M23.5 23.5l-3.268-3.268" />
  );

export default SvgLaptopSearch;
