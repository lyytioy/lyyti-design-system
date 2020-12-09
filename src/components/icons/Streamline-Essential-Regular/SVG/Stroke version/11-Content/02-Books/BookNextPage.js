import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookNextPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-next-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-next-page_svg__a"
      d="M18.752 19.579C13.639 20.305 12 22.125 12 22.125V4.712S9.545 1.985 1.268 1.875a.506.506 0 00-.366.15.522.522 0 00-.152.369v16.375a.515.515 0 00.5.519C9.543 19.4 12 22.125 12 22.125M12 4.712s2.455-2.727 10.732-2.837a.506.506 0 01.366.15.522.522 0 01.152.369v12.231M18.75 19.564v-4.39a.557.557 0 01.563-.549h3.937z"
    />
  );

export default SvgBookNextPage;
