import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgOpenQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".open-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path className="open-quote_svg__a" d="M11 3.5A10.5 10.5 0 00.5 14v1.5" />,
    <circle className="open-quote_svg__a" cx={5.5} cy={15.498} r={5} />,
    <path
      className="open-quote_svg__a"
      d="M23.5 3.5A10.5 10.5 0 0013 14v1.5"
    />,
    <circle className="open-quote_svg__a" cx={18} cy={15.498} r={5} />
  );

export default SvgOpenQuote;
