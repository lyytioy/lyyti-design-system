import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPowerAdapter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".power-adapter_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="power-adapter_svg__a" cx={5} cy={13} r={1.5} />,
    <circle className="power-adapter_svg__a" cx={19} cy={13} r={1.5} />,
    <circle className="power-adapter_svg__a" cx={9} cy={18} r={1.5} />,
    <circle className="power-adapter_svg__a" cx={15} cy={18} r={1.5} />,
    <path className="power-adapter_svg__a" d="M10.5 6.5h3v6h-3z" />,
    <path
      className="power-adapter_svg__a"
      d="M14.5.78V3.5h-5V.78a11.5 11.5 0 105 0z"
    />
  );

export default SvgPowerAdapter;
