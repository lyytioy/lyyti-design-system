import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgZipFileStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".zip-file-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="zip-file-star_svg__a"
      d="M9.5 23.5h-8a1 1 0 01-1-1v-21a1 1 0 011-1h13.293a1 1 0 01.707.293L19.207 4.5a1 1 0 01.293.707V8.5"
    />,
    <path
      className="zip-file-star_svg__a"
      d="M7.255 8a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 10.5a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.255 13a.25.25 0 11.25.25.249.249 0 01-.25-.25M7.245 15.5a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 18.021a.25.25 0 11.25.25.25.25 0 01-.25-.25M7.245 20.562a.25.25 0 11.25.25.25.25 0 01-.25-.25M8.989 4.111a1.488 1.488 0 01-.357 1.163 1.467 1.467 0 01-1.1.5H7.47a1.467 1.467 0 01-1.1-.5 1.488 1.488 0 01-.357-1.163L6.37.5H8.5zM18.206 11.93l1.539 3.57h2.995a.735.735 0 01.517 1.283l-2.6 2.316 1.44 3.313a.785.785 0 01-1.117.982l-3.48-1.961-3.48 1.961a.785.785 0 01-1.117-.982l1.44-3.313-2.6-2.316a.734.734 0 01.514-1.283h3l1.541-3.57a.8.8 0 011.408 0z"
    />
  );

export default SvgZipFileStar;
