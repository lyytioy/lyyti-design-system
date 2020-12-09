import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNewspaperGive = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".newspaper-give_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="newspaper-give_svg__a"
      d="M.75 15.75h3.879a3.023 3.023 0 012.121.879L10.125 20l2.625-2.625a1.5 1.5 0 012.121 2.125l-2.625 2.625a3 3 0 01-4.242 0L5.25 19.5v3.75M.75 12.675a3.75 3.75 0 100-7.35M15.75 14.25V2.641S14.113.823 8.6.75a.336.336 0 00-.243.1.349.349 0 00-.1.246v10.917a.344.344 0 00.336.346c5.526.071 7.164 1.891 7.164 1.891"
    />,
    <path
      className="newspaper-give_svg__a"
      d="M15.75 14.25V2.641S17.387.823 22.905.75a.336.336 0 01.243.1.349.349 0 01.1.246v10.917a.344.344 0 01-.336.346c-5.526.071-7.164 1.891-7.164 1.891"
    />
  );

export default SvgNewspaperGive;
