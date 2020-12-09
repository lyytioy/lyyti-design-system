import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-button_svg__a"
      d="M12 23.5V6.885M16 11.885l-4-5-4 5"
    />,
    <path
      className="upload-button_svg__a"
      d="M9.5 16.5H5a1 1 0 01-1-1v-14a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1h-4.5"
    />
  );

export default SvgUploadButton;
