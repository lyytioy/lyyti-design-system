import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardStar1 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-star-1_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="award-star-1_svg__a"
      d="M16 20.5l-1.213-4.042A1.43 1.43 0 0013.5 15.5h-3a1.43 1.43 0 00-1.287.958L8 20.5M12 15.498v-2.997M12.706.931L14.245 4.5h2.995a.735.735 0 01.516 1.283L15.158 8.1l1.44 3.313a.785.785 0 01-1.117.982L12 10.434 8.52 12.4a.785.785 0 01-1.12-.987L8.843 8.1l-2.6-2.315A.735.735 0 016.758 4.5h3L11.294.931a.8.8 0 011.412 0zM18 22a1.5 1.5 0 01-1.5 1.5h-9a1.5 1.5 0 010-3h9A1.5 1.5 0 0118 22z"
    />
  );

export default SvgAwardStar1;
