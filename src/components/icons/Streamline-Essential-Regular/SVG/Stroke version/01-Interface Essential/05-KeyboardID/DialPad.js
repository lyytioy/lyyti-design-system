import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDialPad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dial-pad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="dial-pad_svg__a" cx={3} cy={3} r={2.25} />,
    <circle className="dial-pad_svg__a" cx={12} cy={3} r={2.25} />,
    <circle className="dial-pad_svg__a" cx={21} cy={3} r={2.25} />,
    <circle className="dial-pad_svg__a" cx={3} cy={12} r={2.25} />,
    <circle className="dial-pad_svg__a" cx={12} cy={12} r={2.25} />,
    <circle className="dial-pad_svg__a" cx={21} cy={12} r={2.25} />,
    <circle className="dial-pad_svg__a" cx={12} cy={21} r={2.25} />
  );

export default SvgDialPad;
