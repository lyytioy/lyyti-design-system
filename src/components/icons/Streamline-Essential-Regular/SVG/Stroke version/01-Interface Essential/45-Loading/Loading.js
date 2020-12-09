import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLoading = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".loading_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="loading_svg__a"
      d="M12 .747v3.75M12 23.247v-3.75M4.045 4.042l2.652 2.652M19.955 19.952l-2.652-2.651M.75 11.997H4.5M23.25 11.997H19.5M4.045 19.952l2.652-2.651M19.955 4.042l-2.652 2.652"
    />
  );

export default SvgLoading;
