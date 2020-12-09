import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloseQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".close-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="close-quote_svg__a"
      d="M13 21a10.5 10.5 0 0010.5-10.5V9"
    />,
    <circle className="close-quote_svg__a" cx={18.5} cy={8.998} r={5} />,
    <path className="close-quote_svg__a" d="M.5 21A10.5 10.5 0 0011 10.5V9" />,
    <circle className="close-quote_svg__a" cx={6} cy={8.998} r={5} />
  );

export default SvgCloseQuote;
