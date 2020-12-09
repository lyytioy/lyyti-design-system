import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUploadThickBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".upload-thick-box_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="upload-thick-box_svg__a"
      d="M12.002 19.501v-9M9.002 13.501l3-3 3 3"
    />,
    <rect
      className="upload-thick-box_svg__a"
      x={0.752}
      y={6.751}
      width={22.5}
      height={16.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="upload-thick-box_svg__a"
      d="M.954 7.5l2.4-5.859a1.5 1.5 0 011.373-.89h14.55a1.5 1.5 0 011.371.891l2.343 5.765M12.002 6.751v-6"
    />
  );

export default SvgUploadThickBox;
