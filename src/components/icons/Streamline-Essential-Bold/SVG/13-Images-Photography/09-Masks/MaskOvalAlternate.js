import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgMaskOvalAlternate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M24 2a2 2 0 00-2-2H2a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2zm-2 19.5a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-19a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M12 20.6c3.225 0 5.751-3.778 5.751-8.6S15.225 3.4 12 3.4 6.249 7.177 6.249 12 8.775 20.6 12 20.6zm0-15.2c2.033 0 3.751 3.023 3.751 6.6S14.033 18.6 12 18.6 8.249 15.578 8.249 12 9.967 5.4 12 5.4z" />
  );

export default SvgMaskOvalAlternate;
