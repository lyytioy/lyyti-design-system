import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHyperlinkCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hyperlink-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="hyperlink-circle_svg__a"
      d="M12.655 17.993a4.558 4.558 0 01-6.047 2.178 4.558 4.558 0 01-2.178-6.047l1.382-2.937a4.557 4.557 0 016.046-2.178 4.543 4.543 0 012.511 3.191"
    />,
    <path
      className="hyperlink-circle_svg__a"
      d="M11.846 6.107a4.558 4.558 0 016.047-2.178 4.558 4.558 0 012.178 6.046l-1.382 2.937a4.558 4.558 0 01-6.047 2.178 4.533 4.533 0 01-2.352-2.619"
    />
  );

export default SvgHyperlinkCircle;
