import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskHeartDouble = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <defs>
      <style>
        {
          ".mask-heart-double_svg__a{fill:none;stroke:currentColor;stroke-linecap:round;stroke-linejoin:round}"
        }
      </style>
    </defs>,
    <rect
      className="mask-heart-double_svg__a"
      x={1}
      y={1}
      width={22}
      height={22}
      rx={1}
      ry={1}
    />,
    <path
      className="mask-heart-double_svg__a"
      d="M8.052 12.468l-3.166-3.3a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.832.835-.835a3.026 3.026 0 014.846.786 3.023 3.023 0 01.163 2.311"
    />,
    <path
      className="mask-heart-double_svg__a"
      d="M14 20.5l-5.114-5.335a3.025 3.025 0 01-.567-3.492 3.026 3.026 0 014.846-.786l.835.835.835-.835a3.026 3.026 0 014.846.786 3.025 3.025 0 01-.567 3.492z"
    />
  );

export default SvgMaskHeartDouble;
