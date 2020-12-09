import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgUiWebpageTemplate = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={18.5} cy={11.75} r={1.5} />,
    <circle cx={18.5} cy={18.75} r={1.5} />,
    <path d="M0 21.25a2 2 0 002 2h20a2 2 0 002-2V2.75a2 2 0 00-2-2H2a2 2 0 00-2 2zm17.6-17.2a.5.5 0 01.4-.8h3a.5.5 0 01.4.8l-1.5 2a.5.5 0 01-.8 0zM2 3.25a.5.5 0 01.5-.5h12a.5.5 0 01.5.5v3.5a.5.5 0 01-.5.5h-12a.5.5 0 01-.5-.5zm19.5 6a.5.5 0 01.5.5v4a.5.5 0 01-.5.5h-19a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5zm-19 12a.5.5 0 01-.5-.5v-4a.5.5 0 01.5-.5h19a.5.5 0 01.5.5v4a.5.5 0 01-.5.5z" />
  );

export default SvgUiWebpageTemplate;
