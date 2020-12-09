import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgVolumeControlCheck = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M9.5 17.5a7.977 7.977 0 012.424-5.731.248.248 0 00.076-.178V1a1 1 0 00-1.707-.706L4.366 6.221a.249.249 0 01-.177.073H2a2 2 0 00-2 2v3.414a2 2 0 002 2h2.189a.253.253 0 01.177.073l4.751 4.752a.25.25 0 00.426-.2A8.1 8.1 0 019.5 17.5z" />,
    <path d="M17.5 11a6.5 6.5 0 106.5 6.5 6.508 6.508 0 00-6.5-6.5zm3.124 4.155a.75.75 0 01.149 1.05l-2.905 3.874a1.5 1.5 0 01-2.262.159l-1.5-1.5a.75.75 0 011.061-1.06l1.094 1.094a.5.5 0 00.754-.054l2.559-3.412a.748.748 0 011.05-.151z" />
  );

export default SvgVolumeControlCheck;
