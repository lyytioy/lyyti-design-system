import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordDenied = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M17.75 11.5A6.25 6.25 0 1024 17.75a6.257 6.257 0 00-6.25-6.25zm2.563 7.752a.75.75 0 01-1.06 1.061l-1.326-1.326a.249.249 0 00-.353 0l-1.326 1.326a.75.75 0 11-1.06-1.061l1.325-1.326a.249.249 0 000-.353l-1.325-1.326a.75.75 0 111.06-1.06l1.326 1.325a.249.249 0 00.353 0l1.326-1.325a.75.75 0 111.06 1.06l-1.325 1.326a.249.249 0 000 .353z" />,
    <path d="M0 4.5v7a1.981 1.981 0 001.957 2h7.858a1 1 0 000-2H2.5A.5.5 0 012 11l-.04-6a.5.5 0 01.5-.5H21.5a.5.5 0 01.5.5v3.5a1 1 0 002 0v-4a1.981 1.981 0 00-1.956-2H1.957A1.981 1.981 0 000 4.5z" />,
    <circle cx={6.5} cy={7.999} r={1.5} />,
    <circle cx={12.5} cy={7.999} r={1.5} />
  );

export default SvgPasswordDenied;
