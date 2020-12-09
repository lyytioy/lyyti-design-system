import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgHierarchy4 = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".hierarchy-4_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <path
      className="hierarchy-4_svg__a"
      d="M12 5.499v13M3 18.5a6 6 0 016-6h6a6 6 0 016 6"
    />,
    <rect
      className="hierarchy-4_svg__a"
      x={9.5}
      y={0.499}
      width={5}
      height={5}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-4_svg__a"
      x={9.5}
      y={18.499}
      width={5}
      height={5}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-4_svg__a"
      x={0.5}
      y={18.499}
      width={5}
      height={5}
      rx={1}
      ry={1}
    />,
    <rect
      className="hierarchy-4_svg__a"
      x={18.5}
      y={18.499}
      width={5}
      height={5}
      rx={1}
      ry={1}
    />
  );

export default SvgHierarchy4;
