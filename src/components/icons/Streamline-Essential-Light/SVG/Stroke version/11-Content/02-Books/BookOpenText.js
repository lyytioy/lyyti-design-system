import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookOpenText = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-open-text_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="book-open-text_svg__a"
      d="M12 5.5c0-1.879 4.854-3.411 10.492-3.5a.5.5 0 01.508.5V18a.5.5 0 01-.492.5C16.863 18.587 12 20.119 12 22c0-1.879-4.863-3.411-10.508-3.5A.5.5 0 011 18V2.5a.5.5 0 01.508-.5C7.145 2.089 12 3.621 12 5.5zM12 5.498v16.375M9.5 7.5A23.408 23.408 0 003 6.258M14.5 7.5A23.408 23.408 0 0121 6.258M9.5 11.758a23.408 23.408 0 00-6.5-1.24M9.5 16A23.408 23.408 0 003 14.758M14.5 11.758a23.416 23.416 0 016.5-1.24M14.5 16a23.416 23.416 0 016.5-1.24"
    />
  );

export default SvgBookOpenText;
