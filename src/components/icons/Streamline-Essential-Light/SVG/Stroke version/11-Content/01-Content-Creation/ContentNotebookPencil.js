import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentNotebookPencil = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-notebook-pencil_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-notebook-pencil_svg__a"
      d="M19.5 6.5l2-6 2 6v15a2 2 0 11-4 0zM19.499 19.5H23.5M19.499 6.5h4M15.5 20.5a1 1 0 01-1 1h-11v-19h11a1 1 0 011 1z"
    />,
    <path
      className="content-notebook-pencil_svg__a"
      d="M6.5 7.5h6v3h-6zM3.5 2.5h-2a1 1 0 00-1 1v17a1 1 0 001 1h2"
    />
  );

export default SvgContentNotebookPencil;
