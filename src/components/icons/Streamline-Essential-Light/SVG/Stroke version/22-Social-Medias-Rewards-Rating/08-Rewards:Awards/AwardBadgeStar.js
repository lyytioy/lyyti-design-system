import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadgeStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-badge-star_svg__a"
      d="M21.5 19.9a.5.5 0 01-.5.5H3a.5.5 0 01-.5-.5V6.078a1 1 0 01.534-.885l8.5-4.474a1 1 0 01.931 0l8.5 4.474a1 1 0 01.534.885V19.9zM2.5 23.395h19"
    />,
    <path
      className="award-badge-star_svg__a"
      d="M12.588 6.88L13.87 9.4h2.5a.613.613 0 01.431 1.069l-2.166 2.263 1.2 2.761a.654.654 0 01-.931.818L12 14.673l-2.9 1.634a.654.654 0 01-.931-.818l1.2-2.761L7.2 10.465A.612.612 0 017.632 9.4h2.5l1.281-2.52a.661.661 0 011.175 0z"
    />
  );

export default SvgAwardBadgeStar;
