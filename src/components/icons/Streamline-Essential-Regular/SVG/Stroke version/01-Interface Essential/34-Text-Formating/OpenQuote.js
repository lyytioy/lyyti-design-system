import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgOpenQuote = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".open-quote_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <circle className="open-quote_svg__a" cx={5.25} cy={14.998} r={4.5} />,
    <path className="open-quote_svg__a" d="M.75 15a10.5 10.5 0 0110.5-10.5" />,
    <circle className="open-quote_svg__a" cx={17.25} cy={14.998} r={4.5} />,
    <path className="open-quote_svg__a" d="M12.75 15a10.5 10.5 0 0110.5-10.5" />
  );

export default SvgOpenQuote;
