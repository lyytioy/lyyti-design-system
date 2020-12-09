import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgElectronicsFuse = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".electronics-fuse_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="electronics-fuse_svg__a"
      x={3.051}
      y={13.906}
      width={4.025}
      height={10.061}
      rx={1.006}
      ry={1.006}
      transform="rotate(-45 5.064 18.937)"
    />,
    <rect
      className="electronics-fuse_svg__a"
      x={16.924}
      y={0.033}
      width={4.025}
      height={10.061}
      rx={1.006}
      ry={1.006}
      transform="rotate(-45 18.936 5.063)"
    />,
    <path
      className="electronics-fuse_svg__a"
      d="M3.64 14.668L14.666 3.64l5.691 5.691L9.331 20.36z"
    />,
    <path
      className="electronics-fuse_svg__a"
      d="M6.486 17.514L9.5 14.5H12v-5h2.5l3.014-3.014"
    />
  );

export default SvgElectronicsFuse;
