import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopePostcard = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 23c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H2zM2 8c-.551 0-1 .449-1 1v12c0 .552.449 1 1 1h20a1 1 0 001-1V9c0-.551-.448-1-1-1H2z" />,
    <path d="M16.5 15a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4zm3.5-1v-3h-3v3h3zM4.5 12a.5.5 0 010-1h2a.5.5 0 010 1h-2zM4.5 16.997a.5.5 0 010-1h9a.5.5 0 010 1h-9zM4.5 20a.5.5 0 010-1h12a.5.5 0 010 1h-12zM2.5 6a.5.5 0 010-1h19a.5.5 0 010 1h-19zM4.5 4a.5.5 0 010-1h15a.5.5 0 010 1h-15zM6.5 2a.5.5 0 010-1h11a.5.5 0 010 1h-11z" />
  );

export default SvgEnvelopePostcard;
