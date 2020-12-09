import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgNetworkNavigation = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".network-navigation_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="network-navigation_svg__a"
      d="M13.588 23.141A11.565 11.565 0 0112 23.25a11.257 11.257 0 1111.137-9.658"
    />,
    <path
      className="network-navigation_svg__a"
      d="M9.289 22.921C7.767 20.689 6.749 16.633 6.749 12s1.018-8.688 2.54-10.921M.774 11.25h10.475M16.499 11.25h6.75M2.999 5.25H21M2.047 17.25h8.452M14.71 1.079c1.348 1.978 2.3 5.386 2.5 9.359q.021.408.031.813M13.256 13.992l4.108 8.973a.537.537 0 00.987-.1l1.2-3.315 3.315-1.2a.537.537 0 00.1-.987l-8.973-4.108a.563.563 0 00-.737.737z"
    />
  );

export default SvgNetworkNavigation;
