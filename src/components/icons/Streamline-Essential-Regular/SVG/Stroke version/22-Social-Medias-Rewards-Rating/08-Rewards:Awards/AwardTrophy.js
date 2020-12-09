import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgAwardTrophy = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".award-trophy_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="award-trophy_svg__a"
      x={5.25}
      y={18.75}
      width={13.5}
      height={4.5}
      rx={1.5}
      ry={1.5}
    />,
    <path
      className="award-trophy_svg__a"
      d="M8.25.75H1.773A1.023 1.023 0 00.75 1.773a11.25 11.25 0 0022.5 0A1.023 1.023 0 0022.227.75H15.75"
    />,
    <path
      className="award-trophy_svg__a"
      d="M9.882 12.824L8.139 18.75h7.5l-1.576-5.916M12.6 1.075l1.248 2.458h2.127a.583.583 0 01.419 1l-1.956 1.919 1.082 2.485a.589.589 0 01-.84.736L12.065 8.2 9.45 9.673a.589.589 0 01-.839-.736l1.082-2.485L7.74 4.53a.583.583 0 01.42-1h2.126l1.249-2.458a.6.6 0 011.065.003z"
    />
  );

export default SvgAwardTrophy;
