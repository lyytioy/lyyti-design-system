import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentNotebookPencil = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-notebook-pencil_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-notebook-pencil_svg__a"
      d="M15.746 2.271a1.5 1.5 0 00-1.5-1.5h-12a1.5 1.5 0 00-1.5 1.5v19.5a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5M21 23.271a2.25 2.25 0 01-2.25-2.25v-15L21 .771l2.25 5.25v15a2.25 2.25 0 01-2.25 2.25zM18.746 18.771h4.5M18.746 6.021h4.5M3.746.771v22.5"
    />,
    <path
      className="content-notebook-pencil_svg__a"
      d="M6.746 5.271h6v4.5h-6z"
    />
  );

export default SvgContentNotebookPencil;
