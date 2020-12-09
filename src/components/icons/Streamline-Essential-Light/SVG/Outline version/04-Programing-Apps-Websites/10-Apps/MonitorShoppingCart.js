import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorShoppingCart = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M10.071 11.5a.998.998 0 01-.917-.6L8.069 7.868a.972.972 0 01-.002-.733.995.995 0 01.931-.635h6.106l.426-1.171a.502.502 0 01.64-.299.497.497 0 01.3.642l-.54 1.486a.381.381 0 01-.016.042l-1.324 3.644a1.002 1.002 0 01-.94.658h-3.579zm3.579-1l1.091-3H8.998l1.073 2.998 3.579.002z" />,
    <circle cx={10.75} cy={12.75} r={0.75} />,
    <circle cx={13.25} cy={12.75} r={0.75} />,
    <path d="M5 22.504a.5.5 0 010-1h6v-1H2c-1.103 0-2-.897-2-2v-15c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v15c0 1.103-.897 2-2 2H12v1h7a.5.5 0 010 1H5zm-4-4c0 .552.449 1 1 1h20a1 1 0 001-1v-2H1v2zm22-3v-12c0-.551-.448-1-1-1H2c-.551 0-1 .449-1 1v12h22z" />
  );

export default SvgMonitorShoppingCart;
