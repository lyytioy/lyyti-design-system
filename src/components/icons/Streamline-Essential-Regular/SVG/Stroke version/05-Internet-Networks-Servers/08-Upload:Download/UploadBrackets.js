import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-brackets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-brackets_svg__a"
      d="M12.001 6v12M7.501 13.5l4.5 4.5 4.5-4.5M6 23.25H2.251a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5H6M18 .75h3.75a1.5 1.5 0 011.5 1.5v19.5a1.5 1.5 0 01-1.5 1.5H18"
    />
  );

export default SvgUploadBrackets;
