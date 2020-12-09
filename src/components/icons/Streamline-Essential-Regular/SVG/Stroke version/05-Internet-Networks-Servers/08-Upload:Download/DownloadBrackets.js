import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgDownloadBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".download-brackets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="download-brackets_svg__a"
      d="M12.001 18V6M16.501 10.5l-4.5-4.5-4.5 4.5M18 .75h3.75a1.5 1.5 0 011.5 1.5v19.5a1.5 1.5 0 01-1.5 1.5H18M6 23.25H2.251a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5H6"
    />
  );

export default SvgDownloadBrackets;
