import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBirdHouse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bird-house_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="bird-house_svg__a"
      d="M2.96 9l3.38 13.288a1.226 1.226 0 001.16.962h9a1.225 1.225 0 001.156-.962L21.033 9"
    />,
    <path
      className="bird-house_svg__a"
      d="M.747 11.021L11.997.75l11.25 10.271"
    />,
    <circle className="bird-house_svg__a" cx={11.997} cy={14.25} r={3} />
  );

export default SvgBirdHouse;
