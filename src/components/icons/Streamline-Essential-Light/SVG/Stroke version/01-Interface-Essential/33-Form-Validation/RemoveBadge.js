import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgRemoveBadge = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".remove-badge_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="remove-badge_svg__a"
      d="M8 7.999l8 8M16 7.999l-8 8M10.7 1.121a1.665 1.665 0 012.6 0l1.545 1.923a1.665 1.665 0 001.479.612l2.452-.267a1.667 1.667 0 011.834 1.837l-.267 2.451a1.666 1.666 0 00.613 1.479l1.922 1.544a1.666 1.666 0 010 2.6l-1.922 1.545a1.664 1.664 0 00-.613 1.478l.267 2.452a1.665 1.665 0 01-1.836 1.836l-2.452-.267a1.668 1.668 0 00-1.479.613l-1.543 1.92a1.665 1.665 0 01-2.6 0l-1.543-1.922a1.668 1.668 0 00-1.479-.613l-2.452.267a1.665 1.665 0 01-1.836-1.836l.267-2.452a1.664 1.664 0 00-.613-1.478L1.122 13.3a1.666 1.666 0 010-2.6l1.922-1.544a1.666 1.666 0 00.613-1.479L3.39 5.226a1.667 1.667 0 011.836-1.837l2.452.267a1.665 1.665 0 001.479-.612z"
    />
  );

export default SvgRemoveBadge;
