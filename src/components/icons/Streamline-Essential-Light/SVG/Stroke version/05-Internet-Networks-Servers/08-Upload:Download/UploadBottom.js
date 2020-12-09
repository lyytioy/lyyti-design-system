import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadBottom = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-bottom_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="upload-bottom_svg__a"
      d="M23 18.218v1.913A2.87 2.87 0 0120.131 23H3.869A2.869 2.869 0 011 20.131v-1.913M12 1v17.108M5 8l7-7 7 7"
    />
  );

export default SvgUploadBottom;
