import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink2 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-2_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-2_svg__a"
      d="M14.8 12.56l.1.1a2.243 2.243 0 003.172 0l4.446-4.45a3.377 3.377 0 000-4.758l-1.972-1.971a3.372 3.372 0 00-4.757 0l-4.447 4.446a2.243 2.243 0 000 3.172l.1.1M9.2 11.438l-.1-.1a2.243 2.243 0 00-3.172 0l-4.447 4.45a3.375 3.375 0 000 4.758l1.971 1.971a3.371 3.371 0 004.758 0l4.446-4.446a2.241 2.241 0 000-3.172l-.1-.1M7.638 16.361l8.722-8.724"
    />
  );

export default SvgHyperlink2;
