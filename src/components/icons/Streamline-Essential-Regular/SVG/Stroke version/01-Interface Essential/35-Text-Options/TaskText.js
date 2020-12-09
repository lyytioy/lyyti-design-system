import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="task-text_svg__a"
      d="M12.75 5.248h-7.5v-3a1.5 1.5 0 011.5-1.5h4.5a1.5 1.5 0 011.5 1.5z"
    />,
    <path
      className="task-text_svg__a"
      d="M8.25 20.248h-6a1.5 1.5 0 01-1.5-1.5v-15a1.5 1.5 0 011.5-1.5h3M12.75 2.248h3a1.5 1.5 0 011.5 1.5v4.5"
    />,
    <path className="task-text_svg__a" d="M8.25 17.248h-4.5v-12h10.5v2.997" />,
    <rect
      className="task-text_svg__a"
      x={11.25}
      y={11.248}
      width={12}
      height={12}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="task-text_svg__a"
      d="M14.25 14.248h6M14.25 17.248h6M14.25 20.248h2.25"
    />
  );

export default SvgTaskText;
