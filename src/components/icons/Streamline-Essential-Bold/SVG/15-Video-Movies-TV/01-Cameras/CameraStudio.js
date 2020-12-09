import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCameraStudio = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M23.506 12.99a1.176 1.176 0 00-1.121-.066l-2.731 1.137a.251.251 0 00-.154.231v5.416a.251.251 0 00.154.231l2.73 1.137a1.154 1.154 0 001.122-.066A1.18 1.18 0 0024 20v-6a1.18 1.18 0 00-.494-1.01z" />,
    <rect x={1} y={11.5} width={17} height={11} rx={1.5} ry={1.5} />,
    <circle cx={4.5} cy={6} r={4.5} />,
    <circle cx={13.5} cy={7.5} r={3} />
  );

export default SvgCameraStudio;
