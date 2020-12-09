import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDialPad = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".dial-pad_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="dial-pad_svg__a" cx={4.5} cy={3.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={11.969} cy={3.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={19.5} cy={3.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={4.5} cy={9.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={11.969} cy={9.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={19.5} cy={9.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={4.5} cy={15.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={11.969} cy={15.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={11.969} cy={21.5} r={2} />,
    <circle className="dial-pad_svg__a" cx={19.5} cy={15.5} r={2} />
  );

export default SvgDialPad;
