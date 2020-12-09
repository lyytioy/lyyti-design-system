import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCloseQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".close-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="close-quote_svg__a" cx={18.75} cy={9.248} r={4.5} />,
    <path
      className="close-quote_svg__a"
      d="M23.25 9.248a10.5 10.5 0 01-10.5 10.5"
    />,
    <circle className="close-quote_svg__a" cx={6.75} cy={9.248} r={4.5} />,
    <path
      className="close-quote_svg__a"
      d="M11.25 9.248a10.5 10.5 0 01-10.5 10.5"
    />
  );

export default SvgCloseQuote;
