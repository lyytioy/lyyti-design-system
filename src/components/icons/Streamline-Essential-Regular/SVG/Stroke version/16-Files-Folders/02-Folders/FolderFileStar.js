import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-file-star_svg__a"
      d="M18.314 1.018a.489.489 0 01.872 0L20.2 3.06a.485.485 0 00.366.263l2.271.328a.483.483 0 01.391.325.474.474 0 01-.121.489l-1.65 1.6a.476.476 0 00-.138.421l.389 2.255a.475.475 0 01-.194.468.49.49 0 01-.514.034l-2.023-1.058a.486.486 0 00-.454 0L16.5 9.243a.49.49 0 01-.511-.034.475.475 0 01-.194-.468l.389-2.255a.476.476 0 00-.138-.421l-1.65-1.6a.474.474 0 01-.121-.489.483.483 0 01.391-.325l2.271-.328a.485.485 0 00.363-.263zM17.25 23.25a1.5 1.5 0 001.5-1.5v-6a1.5 1.5 0 00-1.5-1.5h-9v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5zM23.25 11.25v7.5a1.5 1.5 0 01-1.5 1.5h-3"
    />,
    <path
      className="folder-file-star_svg__a"
      d="M6.75 11.25v-9a1.5 1.5 0 011.5-1.5h6"
    />
  );

export default SvgFolderFileStar;
