import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentQuillPen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-quill-pen_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-quill-pen_svg__a"
      d="M2.247 18.257C1.281 19.222.5 23.5.5 23.5s4.277-.783 5.242-1.748a2.471 2.471 0 00-3.495-3.495zM3.328 20.671L.5 23.5"
    />,
    <path
      className="content-quill-pen_svg__a"
      d="M4.331 16.842L15.014 6.156l2.829 2.828L7.16 19.67zM22.792 4.036a2 2 0 010 2.828l-5.655 5.657"
    />,
    <path
      className="content-quill-pen_svg__a"
      d="M15.015 6.156L20.673.5l2.828 2.829-5.658 5.655zM23.5 23.5L18 18M12.013 18.043c2.672 1.364 4.82 1.124 5.987-.043a4.824 4.824 0 00.9-4.354M12.325 5.59A22.79 22.79 0 0010.5 4.405V6.5s-1.395-.35-1.855-3.087A41.511 41.511 0 00.5.5s1.557 6.949 5.09 11.825"
    />
  );

export default SvgContentQuillPen;
