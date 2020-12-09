import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookLibrary = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-library_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-library_svg__a"
      d="M6.778 22.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-21a1 1 0 011-1h4a1 1 0 011 1zM12.778 22.5a1 1 0 01-1 1h-4a1 1 0 01-1-1v-13a1 1 0 011-1h4a1 1 0 011 1zM9.778 20v1.5M3.778 2.5v13M9.778 10.5V18M3.774 18v3M23.172 20.688a1 1 0 01-.64 1.261l-3.8 1.241a1 1 0 01-1.261-.641L11.884 5.437a1 1 0 01.64-1.261l3.8-1.241a1 1 0 011.261.641zM15.046 5.457l3.102 9.507M18.92 17.342l.93 2.852"
    />
  );

export default SvgBookLibrary;
