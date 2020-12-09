import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkArrow = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-arrow_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-arrow_svg__a"
      d="M13.588 23.141A11.565 11.565 0 0112 23.25a11.257 11.257 0 1111.137-9.658"
    />,
    <path
      className="network-arrow_svg__a"
      d="M9.289 22.921C7.767 20.689 6.749 16.633 6.749 12s1.018-8.688 2.54-10.921M.774 11.25h10.475M16.499 11.25h6.726M2.999 5.25H21M2.047 17.25h8.452M14.71 1.079c1.348 1.978 2.3 5.386 2.5 9.359q.021.408.031.813M13.013 13.846l2.158 7.191a.667.667 0 001.112.281l1.1-1.1 2.835 2.836a.67.67 0 00.945 0l1.891-1.891a.668.668 0 000-.945l-2.836-2.836 1.1-1.1a.668.668 0 00-.28-1.112l-7.192-2.158a.668.668 0 00-.833.834z"
    />
  );

export default SvgNetworkArrow;
