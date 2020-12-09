import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookClose1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-close-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-close-1_svg__a"
      d="M4.5 5.523v15a2.25 2.25 0 002.25 2.25 2.207 2.207 0 00.392-.039l9.406-1.682a3.584 3.584 0 002.952-3.528v-10.5a1.256 1.256 0 00-1.476-1.236L7.147 7.738a2.25 2.25 0 11-.794-4.429l11.619-2.082M16.37 1.514l2.142 4.283"
    />
  );

export default SvgBookClose1;
