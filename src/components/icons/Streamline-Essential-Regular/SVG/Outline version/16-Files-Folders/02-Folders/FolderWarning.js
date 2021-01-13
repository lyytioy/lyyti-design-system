import * as React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";

const SvgFolderWarning = (props) =>
  React.createElement(
    SvgIcon,
    props,
    <path d="M2.446 19.5a.742.742 0 01-.23-.036 2.45 2.45 0 01-2.218-2.403V2.25A2.252 2.252 0 012.248 0h4.5a2.252 2.252 0 012.25 2.25V3h9.75a2.252 2.252 0 012.25 2.25V7.5h.75a2.253 2.253 0 012.177 2.828.75.75 0 11-1.45-.384A.754.754 0 0021.75 9H7.878a.754.754 0 00-.721.542l-2.351 8.154a2.202 2.202 0 01-.109.304h3.552a.75.75 0 010 1.5H2.446zm-.197-18a.75.75 0 00-.75.75v14.8c.003.245.106.48.287.657a.94.94 0 00.662.269.96.96 0 00.915-.692l2.352-8.158A2.263 2.263 0 017.878 7.5H19.5V5.25a.75.75 0 00-.75-.75H8.25a.75.75 0 01-.75-.75v-1.5a.75.75 0 00-.75-.75H2.249z" />,
    <circle cx={17.249} cy={20.625} r={1.125} />,
    <path d="M17.249 18.75a.75.75 0 01-.75-.75v-3a.75.75 0 011.5 0v3a.75.75 0 01-.75.75z" />,
    <path d="M13.023 24a2.528 2.528 0 01-2.258-3.654l4.226-8.451a2.513 2.513 0 012.262-1.396c.393 0 .771.089 1.124.266.486.243.887.644 1.13 1.13l4.226 8.451A2.526 2.526 0 0121.475 24h-8.452zm4.229-12c-.392 0-.744.217-.918.567l-4.226 8.451a1.025 1.025 0 00.915 1.483h8.452a1.026 1.026 0 00.917-1.483l-4.226-8.451a1.037 1.037 0 00-.458-.459 1.01 1.01 0 00-.456-.108z" />
  );

export default SvgFolderWarning;