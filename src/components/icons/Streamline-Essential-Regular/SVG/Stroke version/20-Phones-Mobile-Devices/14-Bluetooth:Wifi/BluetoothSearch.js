import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bluetooth-search_svg__a"
      d="M12.001 11.1L6 7.5M6 12l7.5-4.5-3.75-3V15M9.75 18.75a9 9 0 119-9"
    />,
    <circle className="bluetooth-search_svg__a" cx={16.5} cy={16.5} r={4.5} />,
    <path className="bluetooth-search_svg__a" d="M19.68 19.68l3.57 3.57" />
  );

export default SvgBluetoothSearch;
