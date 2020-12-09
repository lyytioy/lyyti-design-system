import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesQuill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="notes-quill_svg__a"
      d="M10.981 23.25l5.833-5.834M23.178 11.052a10.471 10.471 0 00-2.24 0l-2 3.18-1.229-2.289c-4.459 2.189-6.2 7.478-4.551 9.13 2.212 2.216 10.97-1.665 10.02-10.021zM8.25 20.25h-6a1.464 1.464 0 01-1.5-1.5V3.857a1.556 1.556 0 011.5-1.607h15a1.556 1.556 0 011.5 1.607V8.25M5.25.75v4.5M9.75.75v4.5M14.25.75v4.5"
    />
  );

export default SvgNotesQuill;
