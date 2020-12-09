import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsFuse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-fuse_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-fuse_svg__a"
      x={4.243}
      y={12.257}
      width={3}
      height={12}
      rx={0.75}
      ry={0.75}
      transform="rotate(-45 5.742 18.257)"
    />,
    <rect
      className="electronics-fuse_svg__a"
      x={16.757}
      y={-0.257}
      width={3}
      height={12}
      rx={0.75}
      ry={0.75}
      transform="rotate(-45 18.258 5.742)"
    />,
    <path
      className="electronics-fuse_svg__a"
      d="M3.621 14.015L14.014 3.62l6.364 6.364L9.985 20.38z"
    />,
    <path
      className="electronics-fuse_svg__a"
      d="M17.197 6.803l-2.602 2.602-.53 2.652H9.822l-.53 2.651-2.489 2.489"
    />
  );

export default SvgElectronicsFuse;
