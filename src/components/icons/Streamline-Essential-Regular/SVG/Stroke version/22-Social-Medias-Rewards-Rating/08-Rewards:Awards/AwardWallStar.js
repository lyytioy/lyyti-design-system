import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardWallStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-wall-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-wall-star_svg__a"
      d="M12.531 8.792l1.248 2.458h2.127a.582.582 0 01.419 1l-1.953 1.922 1.083 2.485a.589.589 0 01-.84.736L12 15.919l-2.615 1.47a.589.589 0 01-.839-.736l1.082-2.485-1.953-1.922a.582.582 0 01.42-1h2.126l1.249-2.454a.6.6 0 011.061 0zM.75 6.75h9M14.25 6.75h9"
    />,
    <path
      className="award-wall-star_svg__a"
      d="M20.25 6.75L12 .75l-8.25 6V16.9a1.5 1.5 0 00.586 1.189l6.75 4.846a1.5 1.5 0 001.829 0l6.75-4.846a1.5 1.5 0 00.585-1.189z"
    />
  );

export default SvgAwardWallStar;
