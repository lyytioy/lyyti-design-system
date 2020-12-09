import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadButton = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-button_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-button_svg__a"
      d="M12.002 23.251v-15M16.502 12.751l-4.5-4.5-4.5 4.5"
    />,
    <path
      className="upload-button_svg__a"
      d="M8.252 19.5H6a3 3 0 01-3-3V3.751a3 3 0 013-3h12a3 3 0 013 3V16.5a3 3 0 01-3 3h-2.25"
    />
  );

export default SvgUploadButton;
