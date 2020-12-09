import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgImageFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".image-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="image-file-star_svg__a"
      d="M17.947 11.68L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.442 3.313a.786.786 0 01-1.119.982l-3.489-1.958-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.988 15h3l1.544-3.323a.8.8 0 011.415.003z"
    />,
    <path
      className="image-file-star_svg__a"
      d="M8.25 20.25h-6a1.5 1.5 0 01-1.5-1.5V2.25a1.5 1.5 0 011.5-1.5h10.629a1.5 1.5 0 011.06.439l2.872 2.872a1.5 1.5 0 01.439 1.06V8.25"
    />,
    <path
      className="image-file-star_svg__a"
      d="M5.25 5.625A.375.375 0 114.875 6a.375.375 0 01.375-.375M12.646 10.483L11.25 8.25a.749.749 0 00-1.238-.014l-2 2.851L6.78 10.1a.75.75 0 00-1.093.169L3.75 14.25h4.5"
    />
  );

export default SvgImageFileStar;
