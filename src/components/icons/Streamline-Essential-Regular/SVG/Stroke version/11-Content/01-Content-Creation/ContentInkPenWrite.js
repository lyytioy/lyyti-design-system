import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentInkPenWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-ink-pen-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="content-ink-pen-write_svg__a"
      d="M23.247 6.053a1.5 1.5 0 01-2.122 0l-3.182-3.182a1.5 1.5 0 010-2.121M17.674 11.626c-1.405 1.405-6.47 1.166-6.47 1.166s-.239-5.064 1.167-6.47a3.677 3.677 0 015.2.106 3.678 3.678 0 01.103 5.198z"
    />,
    <path
      className="content-ink-pen-write_svg__a"
      d="M14.944 8.732a.375.375 0 10.375.375.375.375 0 00-.375-.375M.747 23.25H21a2.25 2.25 0 000-4.5H6a2.25 2.25 0 010-4.5h2.25"
    />
  );

export default SvgContentInkPenWrite;
