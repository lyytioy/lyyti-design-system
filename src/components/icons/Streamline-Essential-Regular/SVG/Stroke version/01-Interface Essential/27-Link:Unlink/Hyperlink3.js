import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlink3 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-3_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-3_svg__a"
      d="M9.364 18.5l-.932.932a4.5 4.5 0 01-6.364-6.364l4.773-4.774a4.5 4.5 0 016.825 5.825"
    />,
    <path
      className="hyperlink-3_svg__a"
      d="M14.818 5.567l.75-.75a4.5 4.5 0 016.364 6.364l-4.773 4.773a4.5 4.5 0 01-6.824-5.826"
    />
  );

export default SvgHyperlink3;
