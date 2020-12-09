import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgCdBox = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M22.044 0H1.956A1.959 1.959 0 000 1.957v20.088A1.959 1.959 0 001.956 24h20.088A1.959 1.959 0 0024 22.045V1.957A1.959 1.959 0 0022.044 0zM22 21.5a.5.5 0 01-.5.5H2V2.5a.5.5 0 01.5-.5h19a.5.5 0 01.5.5z" />,
    <path d="M12 14a2 2 0 10-2-2 2 2 0 002 2zm0-3a1 1 0 11-1 1 1 1 0 011-1z" />,
    <path d="M12 20.5A8.5 8.5 0 103.5 12a8.51 8.51 0 008.5 8.5zM12 9a3 3 0 11-3 3 3 3 0 013-3z" />
  );

export default SvgCdBox;
