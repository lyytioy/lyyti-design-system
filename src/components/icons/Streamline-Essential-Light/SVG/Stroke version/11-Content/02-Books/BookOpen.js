import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpen = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-open_svg__a"
      d="M12 5.492c0-1.819 4.556-3.313 9.968-3.484a1 1 0 011.032 1v14.5a1 1 0 01-.97 1c-5.439.16-10.03 1.658-10.03 3.484 0-1.826-4.591-3.324-10.03-3.486a1 1 0 01-.97-1V3.008a1 1 0 011.032-1C7.443 2.179 12 3.673 12 5.492zM12 5.492v16.375"
    />
  );

export default SvgBookOpen;
