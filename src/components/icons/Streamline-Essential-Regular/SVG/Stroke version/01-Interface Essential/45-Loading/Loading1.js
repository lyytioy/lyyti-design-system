import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoading1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="loading-1_svg__a"
      d="M11.5 7.9a.534.534 0 001 0l2.436-6.759a11.289 11.289 0 00-5.876 0zM11.5 16.1a.533.533 0 011 0l2.436 6.759a11.318 11.318 0 01-5.876 0zM8.7 14.484a.534.534 0 00-.5-.87l-7.071 1.27a11.3 11.3 0 002.938 5.089zM15.805 10.381a.534.534 0 01-.5-.87l4.635-5.489a11.287 11.287 0 012.938 5.089zM15.3 14.484a.534.534 0 01.5-.87l7.071 1.27a11.3 11.3 0 01-2.938 5.089zM8.2 10.381a.534.534 0 00.5-.87L4.064 4.022a11.287 11.287 0 00-2.938 5.089z"
    />
  );

export default SvgLoading1;
