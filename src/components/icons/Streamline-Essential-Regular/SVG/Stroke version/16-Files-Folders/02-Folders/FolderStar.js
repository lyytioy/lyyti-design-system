import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".folder-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="folder-star_svg__a"
      d="M8.25 18.75H2.447M20.25 8.25v-3a1.5 1.5 0 00-1.5-1.5H8.25v-1.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v14.8a1.7 1.7 0 003.336.438l2.351-8.154A1.5 1.5 0 017.879 8.25H21.75a1.5 1.5 0 011.45 1.886"
    />,
    <path
      className="folder-star_svg__a"
      d="M17.947 11.68L19.488 15h3a.735.735 0 01.518 1.283l-2.6 2.563 1.442 3.313a.786.786 0 01-1.119.982l-3.489-1.958-3.487 1.961a.786.786 0 01-1.119-.982l1.443-3.313-2.6-2.563A.734.734 0 0111.988 15h3l1.544-3.323a.8.8 0 011.415.003z"
    />
  );

export default SvgFolderStar;
