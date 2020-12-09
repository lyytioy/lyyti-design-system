import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoveItText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".love-it-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="love-it-text_svg__a"
      d="M9.5 18.792l-7.3-7.521a5.667 5.667 0 01-1.088-6.606A5.84 5.84 0 0110.4 3.177L12 4.636l1.6-1.459a5.839 5.839 0 019.287 1.488 5.648 5.648 0 01.466 3.835"
    />,
    <path
      className="love-it-text_svg__a"
      d="M22.5 22.5h-10a1 1 0 01-1-1v-10a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1zM14.501 13.5h6M14.501 16.5h6M14.501 19.5h2.25"
    />
  );

export default SvgLoveItText;
