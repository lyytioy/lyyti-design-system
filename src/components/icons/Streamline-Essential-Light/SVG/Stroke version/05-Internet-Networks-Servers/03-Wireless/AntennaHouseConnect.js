import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAntennaHouseConnect = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".antenna-house-connect_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="antenna-house-connect_svg__a"
      d="M.76 17.321a.5.5 0 00.467.679H7.8a.5.5 0 00.467-.678L4.521 7.5zM4.521 7.5L4.5 6M.801 17.762l5.769-4.881M8.227 17.752l-5.764-4.878M3.18 11h2.674M2.5 5a2 2 0 014 0M.5 5a4 4 0 018 0M21.5 15v2.5a.5.5 0 01-.5.5h-5a.5.5 0 01-.5-.5V15M13.541 13.5l4.99-4.562 4.948 4.562"
    />,
    <path
      className="antenna-house-connect_svg__a"
      d="M4.5 18v4a1 1 0 001 1h12a1 1 0 001-1v-4"
    />
  );

export default SvgAntennaHouseConnect;
