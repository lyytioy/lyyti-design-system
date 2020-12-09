import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="folder-file-star_svg__a"
      d="M21 13v7.5a1 1 0 01-1 1h-5M4 12.5v-11a1 1 0 011-1h8.5M14 14.5H7a1 1 0 01-.8-.4l-.9-1.2a1 1 0 00-.8-.4H2a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1zM18.589.859l1.282 2.768h2.5A.613.613 0 0122.8 4.7l-2.169 2.132 1.2 2.761a.654.654 0 01-.931.819L18 8.778l-2.9 1.634a.654.654 0 01-.931-.819l1.2-2.761L13.2 4.7a.613.613 0 01.429-1.07h2.495L17.412.859a.662.662 0 011.177 0z"
    />
  );

export default SvgFolderFileStar;
