import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgModuleFour = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".module-four_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <ellipse className="module-four_svg__a" cx={12} cy={9.5} rx={3} ry={1.5} />,
    <ellipse className="module-four_svg__a" cx={12} cy={3.5} rx={3} ry={1.5} />,
    <ellipse className="module-four_svg__a" cx={19} cy={6.5} rx={3} ry={1.5} />,
    <ellipse
      className="module-four_svg__a"
      cx={5.5}
      cy={6.5}
      rx={3}
      ry={1.5}
    />,
    <path
      className="module-four_svg__a"
      d="M9.737 4.484l-2.155.937M16.694 5.541l-2.433-1.058M3.074 7.381L1.1 8.239a1 1 0 00-.6.917v6.7a1 1 0 00.586.91L11.1 21.32a1 1 0 00.8.013l10.983-4.577a1 1 0 00.615-.923V9.156a1 1 0 00-.6-.917L21.2 7.5M11.5 13.5v7.908M23.315 8.577L11.5 13.5M11.5 13.5L.681 8.582"
    />
  );

export default SvgModuleFour;
