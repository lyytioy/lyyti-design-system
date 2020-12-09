import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <circle className="upload-circle_svg__a" cx={12} cy={12} r={11} />,
    <path
      className="upload-circle_svg__a"
      d="M12 5.5v13M6.5 11L12 5.5l5.5 5.5"
    />
  );

export default SvgUploadCircle;
