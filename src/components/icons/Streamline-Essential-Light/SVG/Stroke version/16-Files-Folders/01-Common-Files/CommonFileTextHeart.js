import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCommonFileTextHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".common-file-text-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="common-file-text-heart_svg__a"
      d="M4.5 8.5H14M4.5 11.5h6M4.5 5.5h7M4.5 14.5h4M4.5 17.5h4M13 23.5H1.5a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V10"
    />,
    <path
      className="common-file-text-heart_svg__a"
      d="M17.861 23.346a.5.5 0 01-.722 0l-4.753-4.958a3.027 3.027 0 01-.567-3.493 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgCommonFileTextHeart;
