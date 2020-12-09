import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMovies3DGlasses = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".movies-3d-glasses_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="movies-3d-glasses_svg__a"
      d="M.5 13v7.5A2.5 2.5 0 003 23h5a2.412 2.412 0 001.707-.707l.586-.586a2.414 2.414 0 013.414 0l.586.586A2.412 2.412 0 0016 23h5a2.5 2.5 0 002.5-2.5V13z"
    />,
    <path
      className="movies-3d-glasses_svg__a"
      d="M10.5 16.5A1.5 1.5 0 009 15H4a1.5 1.5 0 00-1.5 1.5v3A1.5 1.5 0 004 21h2.5a2.764 2.764 0 001.768-.64l1.464-1.22a2.135 2.135 0 00.768-1.64zM13.5 16.5A1.5 1.5 0 0115 15h5a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0120 21h-2.5a2.764 2.764 0 01-1.768-.64l-1.464-1.22a2.135 2.135 0 01-.768-1.64zM.5 13l1.874-8.431a2 2 0 01.538-.981l2-2A2 2 0 016.328 1H8.5a1 1 0 010 2H7.461a2 2 0 00-1.561.751l-.962 1.2A2 2 0 004.5 6.2V13M23.5 13l-1.874-8.431a2 2 0 00-.538-.981l-2-2A2 2 0 0017.672 1H15.5a1 1 0 000 2h1.039a2 2 0 011.561.751l.962 1.2A2 2 0 0119.5 6.2V13"
    />
  );

export default SvgMovies3DGlasses;
