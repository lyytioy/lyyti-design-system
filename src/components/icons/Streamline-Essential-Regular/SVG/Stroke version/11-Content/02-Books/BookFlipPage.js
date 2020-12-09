import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgBookFlipPage = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".book-flip-page_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="book-flip-page_svg__a"
      d="M18 4.144a31.156 31.156 0 014.732-.394.517.517 0 01.366.144.5.5 0 01.152.356v15.768a.505.505 0 01-.5.5C14.457 20.621 12 23.25 12 23.25V6.482S9.545 3.856 1.268 3.75a.517.517 0 00-.368.144.5.5 0 00-.15.356v15.768a.505.505 0 00.5.5C9.543 20.621 12 23.25 12 23.25"
    />,
    <path
      className="book-flip-page_svg__a"
      d="M12 22.757a6.035 6.035 0 011.636-3.448A8.228 8.228 0 0118 16.846V1.243a.481.481 0 00-.228-.4.6.6 0 00-.494-.066 7.8 7.8 0 00-3.642 2.277A6.035 6.035 0 0012 6.5"
    />
  );

export default SvgBookFlipPage;
