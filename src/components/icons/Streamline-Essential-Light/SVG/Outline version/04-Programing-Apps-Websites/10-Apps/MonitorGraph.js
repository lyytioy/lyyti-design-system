import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMonitorGraph = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M5 22.504a.5.5 0 010-1h6v-1H2c-1.103 0-2-.897-2-2v-15c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v15c0 1.103-.897 2-2 2H12v1h7a.5.5 0 010 1H5zm-4-4c0 .552.449 1 1 1h20a1 1 0 001-1v-2H1v2zm22-3v-12c0-.551-.448-1-1-1H2c-.551 0-1 .449-1 1v12h22z" />,
    <path d="M5 14.504a.5.5 0 010-1V11.5c0-.551.449-1 1-1h2c.551 0 1 .449 1 1v2.004h1V8.5c0-.551.449-1 1-1h2c.552 0 1 .449 1 1v5.004h1V5.5c0-.551.448-1 1-1h2c.552 0 1 .449 1 1v8.004a.5.5 0 010 1H5zM18 13.5v-8h-2v8h2zm-5 0v-5h-2v5h2zm-5 0v-2H6v2h2z" />
  );

export default SvgMonitorGraph;
