import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPencilWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pencil-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-pencil-write_svg__a"
      d="M19.848 18.364l-8.607-6.51-1.258-3.611 3.817.227 8.606 6.51a2.115 2.115 0 01.411 2.963l-.008.01a2.114 2.114 0 01-2.961.411z"
    />,
    <path
      className="content-pencil-write_svg__a"
      d="M15.746 6.042v-3a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h7l3.5 3v-3h1.5a1.5 1.5 0 001.342-.829M3.746 4.542h4.5M5.996 4.542v4.5M3.746 12.792h3.75M3.746 15.792h6"
    />
  );

export default SvgContentPencilWrite;
