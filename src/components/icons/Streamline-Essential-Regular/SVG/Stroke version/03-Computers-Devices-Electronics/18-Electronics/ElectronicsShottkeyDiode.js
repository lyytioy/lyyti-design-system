import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsShottkeyDiode = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-shottkey-diode_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-shottkey-diode_svg__a"
      x={6.75}
      y={8.25}
      width={10.5}
      height={7.5}
      rx={1.5}
      ry={1.5}
      transform="rotate(-45 12 12)"
    />,
    <path
      className="electronics-shottkey-diode_svg__a"
      d="M8.818 9.879l5.303 5.303M15.712 8.288L23.25.75M8.288 15.712L.75 23.25"
    />
  );

export default SvgElectronicsShottkeyDiode;
