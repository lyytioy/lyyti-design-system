import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgPasswordApproved = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <circle cx={6.5} cy={6.75} r={1.5} />,
    <path d="M17.75 10.25A6.25 6.25 0 1024 16.5a6.257 6.257 0 00-6.25-6.25zm3.163 5.028L18.13 18.99a1.46 1.46 0 01-1.076.583h-.107a1.454 1.454 0 01-1.035-.434l-1.435-1.436a.75.75 0 011.06-1.06l1.234 1.234a.251.251 0 00.2.072.247.247 0 00.182-.1l2.563-3.475a.751.751 0 111.2.9z" />,
    <path d="M0 3.25v7a1.981 1.981 0 001.957 2h7.858a1 1 0 000-2H2.5a.5.5 0 01-.5-.5l-.037-6a.5.5 0 01.5-.5H21.5a.5.5 0 01.5.5v3.5a1 1 0 002 0v-4a1.981 1.981 0 00-1.956-2H1.957A1.982 1.982 0 000 3.25z" />,
    <circle cx={12.5} cy={6.75} r={1.5} />
  );

export default SvgPasswordApproved;
