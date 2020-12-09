import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgEnvelopeLetter = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2 20c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v12c0 1.103-.897 2-2 2H2zM2 5c-.551 0-1 .449-1 1v12c0 .552.449 1 1 1h20a1 1 0 001-1V6c0-.551-.448-1-1-1H2z" />,
    <path d="M16.5 12a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h4a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-4zm3.5-1V8h-3v3h3zM4.5 9a.5.5 0 010-1h2a.5.5 0 010 1h-2zM4.5 13.997a.5.5 0 010-1h9a.5.5 0 010 1h-9zM4.5 17a.5.5 0 010-1h12a.5.5 0 010 1h-12z" />
  );

export default SvgEnvelopeLetter;
