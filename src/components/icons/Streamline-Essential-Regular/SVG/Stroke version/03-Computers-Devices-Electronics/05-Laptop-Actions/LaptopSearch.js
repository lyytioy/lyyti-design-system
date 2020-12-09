import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="laptop-search_svg__a" cx={15.75} cy={15.75} r={5.25} />,
    <path
      className="laptop-search_svg__a"
      d="M23.25 23.25l-3.788-3.788M3 12V2.25A1.5 1.5 0 014.5.75h15a1.5 1.5 0 011.5 1.5v6M8.25 12H.75a3.75 3.75 0 003.75 3.75h2.25"
    />
  );

export default SvgLaptopSearch;
