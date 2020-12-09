import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsSingleCellBattery = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-single-cell-battery_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="electronics-single-cell-battery_svg__a"
      d="M12 .75v9M12 14.25v9M6.75 14.25h10.5M3.75 9.75h16.5"
    />
  );

export default SvgElectronicsSingleCellBattery;
