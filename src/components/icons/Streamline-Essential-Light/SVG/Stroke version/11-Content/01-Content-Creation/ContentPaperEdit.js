import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgContentPaperEdit = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".content-paper-edit_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="content-paper-edit_svg__a"
      d="M11 18.5H1.5a1 1 0 01-1-1v-16a1 1 0 011-1h15a1 1 0 011 1v10M15.7 22.3l-4.2 1.2 1.2-4.2 7.179-7.179a2.121 2.121 0 013 3zM18.979 13.021l3 3M12.7 19.3l3 3M6 4.5h7M4 7.5h9M4 10.5h9M4 13.5h6.5"
    />
  );

export default SvgContentPaperEdit;
