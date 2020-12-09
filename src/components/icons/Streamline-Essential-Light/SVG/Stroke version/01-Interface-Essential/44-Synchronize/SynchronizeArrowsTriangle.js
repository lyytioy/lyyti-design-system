import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgSynchronizeArrowsTriangle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".synchronize-arrows-triangle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="synchronize-arrows-triangle_svg__a"
      d="M18.49 5.173l-1.367 3.825-3.724-1.306M16.462 23.498l-3.062-3 3.062-3M1.723 12.037l3.941-.838.855 3.859"
    />,
    <path
      className="synchronize-arrows-triangle_svg__a"
      d="M18.384 11.772L23.1 19.64c.282.472.064.858-.486.858h-9.209M7.123 9l4.493-7.64a.539.539 0 011.014 0L17.123 9M10.134 20.5h-8.5a.551.551 0 01-.529-.882l4.508-8.431"
    />
  );

export default SvgSynchronizeArrowsTriangle;
