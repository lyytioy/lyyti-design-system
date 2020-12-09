import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgWifiHeart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".wifi-heart_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="wifi-heart_svg__a"
      d="M5.6 7.818a8.945 8.945 0 0112.653 0M20.786 5.393a12.524 12.524 0 00-17.715 0M8.133 10.243a5.37 5.37 0 017.593 0M18.256 7.818a8.945 8.945 0 00-12.653 0M15.726 10.243a5.37 5.37 0 00-7.593 0M12.289 21.846a.5.5 0 01-.722 0L7.789 17.9a2.449 2.449 0 01-.459-2.827 2.449 2.449 0 013.922-.636l.676.676.676-.676a2.449 2.449 0 013.922.636 2.448 2.448 0 01-.458 2.827z"
    />
  );

export default SvgWifiHeart;
