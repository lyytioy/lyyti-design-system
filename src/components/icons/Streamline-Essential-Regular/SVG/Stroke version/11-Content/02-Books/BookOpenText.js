import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpenText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-open-text_svg__a"
      d="M12 22.125V4.712S9.545 1.985 1.268 1.875a.506.506 0 00-.366.15.522.522 0 00-.152.369v16.375a.515.515 0 00.5.519C9.543 19.4 12 22.125 12 22.125M9 11.18a21.258 21.258 0 00-5.26-1.055M9 15.375a21.258 21.258 0 00-5.26-1.055M15 11.18a21.258 21.258 0 015.26-1.055M15 15.375a21.258 21.258 0 015.26-1.055"
    />,
    <path
      className="book-open-text_svg__a"
      d="M12 22.125V4.712s2.455-2.727 10.732-2.837a.506.506 0 01.366.15.522.522 0 01.152.369v16.375a.515.515 0 01-.5.519C14.457 19.4 12 22.125 12 22.125"
    />
  );

export default SvgBookOpenText;
