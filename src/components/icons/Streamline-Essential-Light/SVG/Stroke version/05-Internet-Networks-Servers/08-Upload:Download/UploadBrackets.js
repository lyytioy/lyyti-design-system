import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadBrackets = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-brackets_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-brackets_svg__a"
      d="M12.5 4.5v15M18 10l-5.5-5.5L7 10"
    />,
    <path
      className="upload-brackets_svg__a"
      d="M17.5.5h5a1 1 0 011 1v21a1 1 0 01-1 1h-5M6.5.5h-5a1 1 0 00-1 1v21a1 1 0 001 1h5"
    />
  );

export default SvgUploadBrackets;
