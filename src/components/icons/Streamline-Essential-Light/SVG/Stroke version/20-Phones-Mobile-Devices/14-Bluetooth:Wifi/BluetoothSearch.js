import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBluetoothSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bluetooth-search_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="bluetooth-search_svg__a"
      cx={17.029}
      cy={17.029}
      r={4.529}
    />,
    <path
      className="bluetooth-search_svg__a"
      d="M23.5 23.5l-3.248-3.248M5.5 11l6-5-3-2.5v10l3-2.5-6-5M17.366 10.51a8.493 8.493 0 10-6.856 6.856"
    />
  );

export default SvgBluetoothSearch;
