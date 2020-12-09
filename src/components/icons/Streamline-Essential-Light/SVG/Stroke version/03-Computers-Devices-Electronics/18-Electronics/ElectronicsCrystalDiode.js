import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsCrystalDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-crystal-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle
      className="electronics-crystal-diode_svg__a"
      cx={12.854}
      cy={11.146}
      r={1}
    />,
    <path
      className="electronics-crystal-diode_svg__a"
      d="M8.611 11.147l4.242 4.242M12.854 15.389a3 3 0 01-4.243-4.243L12.854 6.9a3 3 0 014.246 4.246zM13.561 10.439L23.5.5M8.611 15.389L.5 23.5"
    />
  );

export default SvgElectronicsCrystalDiode;
