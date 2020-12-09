import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsShottkeyDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-shottkey-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-shottkey-diode_svg__a"
      x={7}
      y={8}
      width={11}
      height={7}
      rx={1}
      ry={1}
      transform="rotate(135 12.5 11.5)"
    />,
    <path
      className="electronics-shottkey-diode_svg__a"
      d="M13.207 15.743l-4.95-4.95M23.5.5l-7.111 7.111M8.611 15.389L.5 23.5"
    />
  );

export default SvgElectronicsShottkeyDiode;
