import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-write_svg__a"
      d="M13.684 23.25H1.824a1.077 1.077 0 01-1.078-1.076V1.826A1.077 1.077 0 011.824.75h15.094A1.077 1.077 0 0118 1.826v5.381M7.203 6.375h6.456"
    />,
    <path
      className="content-write_svg__a"
      d="M3.805 6a.375.375 0 11-.375.375A.375.375 0 013.805 6M3.805 9.861a.375.375 0 11-.375.375.375.375 0 01.375-.375M15.929 11.352a3.864 3.864 0 00-.511-.307l-1.182-.591a2.071 2.071 0 00-2.129.167l-1.845 1.318A2.609 2.609 0 009.2 13.691l-.279 1.958M23.246 22.5l-5.355-8.564"
    />,
    <path
      className="content-write_svg__a"
      d="M13.707 16.5l5.571-3.413a1.614 1.614 0 10-1.687-2.753L7.5 16.519l-1.911 3.063 3.6-.311L11.246 18"
    />,
    <path
      className="content-write_svg__a"
      d="M16.5 16.5h-3.75a1.5 1.5 0 00-1.5 1.5 1.5 1.5 0 001.5 1.5h2.742l1.758 3.75"
    />
  );

export default SvgContentWrite;
