import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNotesQuill = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".notes-quill_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="notes-quill_svg__a"
      d="M8.59 20.5h-7a1 1 0 01-1-1v-16a1 1 0 011-1h14a1 1 0 011 1v6M4.59 4.5v-4M8.59 4.5v-4M12.59 4.5v-4M10.59 23.5l7.409-7.409M16.09 13.9a.5.5 0 00-.82-.384c-1.5 1.247-4.014 4.558-1.662 6.908 1.018 1.019 3.293.859 6.035-1.882 2.1-2.105 3.3-5.719 3.748-7.285a.5.5 0 00-.577-.623 21.916 21.916 0 00-4.376 1.326S17.749 15 16.09 15z"
    />
  );

export default SvgNotesQuill;
