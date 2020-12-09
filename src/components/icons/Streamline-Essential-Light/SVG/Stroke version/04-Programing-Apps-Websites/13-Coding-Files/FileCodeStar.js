import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFileCodeStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".file-code-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="file-code-star_svg__a"
      d="M18.238 11.934l1.538 3.57h3a.735.735 0 01.517 1.283l-2.6 2.315 1.44 3.314a.785.785 0 01-1.117.982l-3.48-1.961-3.485 1.963a.785.785 0 01-1.117-.982l1.44-3.314-2.6-2.315a.734.734 0 01.516-1.289h2.994l1.542-3.57a.794.794 0 011.412.004z"
    />,
    <path
      className="file-code-star_svg__a"
      d="M9.531 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.3l3.707 3.7a1 1 0 01.293.707V8.5M3.531 5.504v4M12.531 5.504v4M9.531 12.504v4M15.531 5.504v4"
    />,
    <path
      className="file-code-star_svg__a"
      d="M8.031 5.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 11-3 0V7a1.5 1.5 0 011.5-1.5zM5.031 12.5a1.5 1.5 0 011.5 1.5v1a1.5 1.5 0 01-3 0v-1a1.5 1.5 0 011.5-1.5z"
    />
  );

export default SvgFileCodeStar;
