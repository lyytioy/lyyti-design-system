import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-heart_svg__a"
      d="M20.5 10.111v-5.5a1 1 0 00-1-1H9.618a1 1 0 01-.894-.553l-.948-1.894a1 1 0 00-.894-.553H1.5a1 1 0 00-1 1v15a1 1 0 001 1h7"
    />,
    <path
      className="folder-heart_svg__a"
      d="M17.861 23.235a.5.5 0 01-.722 0l-4.753-4.958a3.027 3.027 0 01-.567-3.493A3.026 3.026 0 0116.665 14l.835.835.835-.835a3.026 3.026 0 014.846.786 3.027 3.027 0 01-.567 3.493z"
    />
  );

export default SvgFolderHeart;
