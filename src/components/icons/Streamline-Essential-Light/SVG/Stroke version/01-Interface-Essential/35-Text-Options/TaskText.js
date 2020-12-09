import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTaskText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".task-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="task-text_svg__a"
      d="M12.5 23.5v-9a1 1 0 011-1h7.586a1 1 0 01.707.293l1.414 1.414a1 1 0 01.293.707V23.5M9.5 23.5h-8a1 1 0 01-1-1v-18a1 1 0 011-1h3M12.5 3.5h3a1 1 0 011 1v6"
    />,
    <path
      className="task-text_svg__a"
      d="M10.5 2.5a2 2 0 00-4 0H5a.5.5 0 00-.5.5v3a.5.5 0 00.5.5h7a.5.5 0 00.5-.5V3a.5.5 0 00-.5-.5zM14.5 10.498v-4M2.5 6.5V20a.5.5 0 00.5.5h6.5M14.5 19.498h7M14.5 16.498h5"
    />
  );

export default SvgTaskText;
