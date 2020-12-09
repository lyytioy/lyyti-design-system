import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLaptopUpload = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".laptop-upload_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="laptop-upload_svg__a"
      d="M11.816.5V15M15.816 4.5l-4-4-4 4M19.814 19.5v-9.333A1.667 1.667 0 0018.147 8.5h-3.833M9.314 8.5H5.481a1.667 1.667 0 00-1.667 1.667V19.5M15.314 19.5c0 1.1-1.567 2-3.5 2s-3.5-.9-3.5-2H1.5a.5.5 0 00-.464.686 5.28 5.28 0 004.9 3.314h11.755a5.28 5.28 0 004.9-3.314.5.5 0 00-.464-.686z"
    />
  );

export default SvgLaptopUpload;
