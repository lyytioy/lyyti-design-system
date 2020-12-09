import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPencilWrite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-pencil-write_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-pencil-write_svg__a"
      d="M19.479 8V2.5a2 2 0 00-2-2h-12a2 2 0 00-2 2v16a2 2 0 002 2h8l3 3v-3h1a2 2 0 001.721-.982"
    />,
    <path
      className="content-pencil-write_svg__a"
      d="M1.485 3.764A2 2 0 00.479 5.5v16a2 2 0 002 2h8a2 2 0 001.712-.967M5.479 3.5h4M7.479 8V3.5M15.7 7.221l-4.2-1.2 1.2 4.2 7.179 7.179a2.121 2.121 0 003-3zM18.979 16.5l3-3M12.7 10.221l3-3M12.479 3.5h4M6.479 11.5h4M6.479 14.5h6.5M6.479 17.5h9"
    />
  );

export default SvgContentPencilWrite;
