import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-heart_svg__a"
      d="M17.892 23.127a.5.5 0 01-.722 0l-4.752-4.958a3.024 3.024 0 01-.567-3.492 3.025 3.025 0 014.849-.787l.835.835.835-.835a3.026 3.026 0 014.846.787 3.025 3.025 0 01-.567 3.492z"
    />,
    <path
      className="file-code-heart_svg__a"
      d="M12.531 23.5h-11a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V9.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-heart_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeHeart;
