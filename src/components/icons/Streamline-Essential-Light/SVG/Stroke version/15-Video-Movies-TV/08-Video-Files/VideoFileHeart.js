import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVideoFileHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".video-file-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="video-file-heart_svg__a"
      d="M17.861 23.123a.5.5 0 01-.722 0l-4.753-4.958a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />,
    <path
      className="video-file-heart_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="video-file-heart_svg__a"
      d="M12.607 10.89L7.636 8.214a.764.764 0 00-1.136.668v5.736a.764.764 0 001.136.668l2.175-1.338"
    />
  );

export default SvgVideoFileHeart;
