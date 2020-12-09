import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgLayoutContent = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <rect x={0.5} y={0.997} width={10} height={10} rx={2} ry={2} />,
    <rect x={0.5} y={12.997} width={10} height={10} rx={2} ry={2} />,
    <path d="M13.747 3h9a.75.75 0 000-1.5h-9a.75.75 0 000 1.5zM22.75 4.5h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5zM22.75 7.5h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5zM22.75 14.5h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5zM22.75 17.5h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5zM22.75 20.5h-9a.75.75 0 000 1.5h9a.75.75 0 000-1.5z" />
  );

export default SvgLayoutContent;
