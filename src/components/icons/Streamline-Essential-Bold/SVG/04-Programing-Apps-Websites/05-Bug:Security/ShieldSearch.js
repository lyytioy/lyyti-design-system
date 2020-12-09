import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgShieldSearch = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={11} cy={9.006} r={3.5} />,
    <path d="M24 1.953A1.96 1.96 0 0022.044.006H1.959A1.958 1.958 0 00.012 1.965L0 9.306a15.147 15.147 0 0011.861 14.669 1 1 0 00.4 0A15.145 15.145 0 0023.988 9.2zm-5.793 14.26a1 1 0 01-1.414 0l-2.534-2.534a.25.25 0 00-.311-.034 5.509 5.509 0 111.691-1.691.25.25 0 00.034.311l2.534 2.535a1 1 0 010 1.413z" />
  );

export default SvgShieldSearch;
