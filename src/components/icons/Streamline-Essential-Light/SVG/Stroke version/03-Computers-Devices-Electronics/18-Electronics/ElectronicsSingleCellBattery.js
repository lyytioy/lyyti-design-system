import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsSingleCellBattery = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-single-cell-battery_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="electronics-single-cell-battery_svg__a"
      d="M12 23.5v-10M6.5 13.5h11M12 .5v10M3.5 10.5h17"
    />
  );

export default SvgElectronicsSingleCellBattery;
