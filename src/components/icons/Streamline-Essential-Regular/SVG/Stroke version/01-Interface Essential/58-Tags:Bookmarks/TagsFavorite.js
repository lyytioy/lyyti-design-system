import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgTagsFavorite = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".tags-favorite_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="tags-favorite_svg__a"
      d="M9 19.3a1.5 1.5 0 01-2.121 0L1.5 13.92a1.5 1.5 0 010-2.121L12 1.3a1.5 1.5 0 011.061-.44h5.378a1.5 1.5 0 011.5 1.5v5.378A1.5 1.5 0 0119.5 8.8"
    />,
    <path
      className="tags-favorite_svg__a"
      d="M16.189 4.235a.375.375 0 10.375.375.375.375 0 00-.375-.375M16.939 23.138L11.826 17.8a3.025 3.025 0 01-.567-3.492 3.025 3.025 0 014.845-.786l.835.835.836-.835a3.025 3.025 0 014.845.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgTagsFavorite;
