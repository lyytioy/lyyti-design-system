import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardBadgeStar = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-badge-star_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <path
      className="award-badge-star_svg__a"
      d="M21.75 20.25H2.25V8.6a1.5 1.5 0 01.585-1.189l8.25-6.346a1.5 1.5 0 011.83 0l8.25 6.346A1.5 1.5 0 0121.75 8.6zM2.25 23.25h19.5"
    />,
    <path
      className="award-badge-star_svg__a"
      d="M12.53 7.292l1.249 2.458h2.127a.582.582 0 01.419 1l-1.953 1.922 1.082 2.485a.589.589 0 01-.839.736L12 14.419l-2.615 1.47a.589.589 0 01-.839-.736l1.082-2.485-1.953-1.922a.582.582 0 01.419-1h2.127l1.249-2.454a.594.594 0 011.06 0z"
    />
  );

export default SvgAwardBadgeStar;
