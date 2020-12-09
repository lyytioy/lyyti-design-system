import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadCircle = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-circle_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-circle_svg__a"
      d="M15.75 9.75L12 6 8.25 9.75M12 17.25V6"
    />,
    <circle className="upload-circle_svg__a" cx={12} cy={12} r={11.25} />
  );

export default SvgUploadCircle;
