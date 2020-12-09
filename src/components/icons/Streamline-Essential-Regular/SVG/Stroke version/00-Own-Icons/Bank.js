import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBank = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".bank_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path className="bank_svg__a" strokeMiterlimit={10} d="M.68 18.15h19.59" />,
    <path
      fill="none"
      strokeLinecap="round"
      className="bank_svg__a"
      d="M10.7.62l9.01 7.74H1.69L10.7.62z"
    />,
    <path
      className="bank_svg__a"
      strokeMiterlimit={10}
      d="M4.02 8.84v9.31M8.49 8.67v9.31M12.96 8.84v8.97M17.44 8.77v8.97"
    />
  );

export default SvgBank;
