import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadMenu = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-menu_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-menu_svg__a"
      d="M12 10.5v13M17.5 16L12 10.5 6.5 16M5.5.5h13M5.5 3.5h13M5.5 6.5h13"
    />
  );

export default SvgUploadMenu;
