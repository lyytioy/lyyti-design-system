import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEarpodsDoubleTap1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".earpods-double-tap-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="earpods-double-tap-1_svg__a" cx={16} cy={5.5} r={3} />,
    <circle className="earpods-double-tap-1_svg__a" cx={16} cy={5.5} r={5} />,
    <path
      className="earpods-double-tap-1_svg__a"
      d="M8.5 8.5A1.5 1.5 0 0110 10M5.75 5.25a.25.25 0 11-.25.25.25.25 0 01.25-.25"
    />,
    <path
      className="earpods-double-tap-1_svg__a"
      d="M10.426 1.266A5.885 5.885 0 007.5.5a5.711 5.711 0 00-4.241 1.822A1 1 0 003 2.993v5.014a1 1 0 00.259.671A5.711 5.711 0 007.5 10.5 5.9 5.9 0 0010 10v12.5a1 1 0 001 1h1a1 1 0 001-1V11.826"
    />
  );

export default SvgEarpodsDoubleTap1;
