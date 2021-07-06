"use strict";
exports.__esModule = true;
var React = require("react");
var react_router_dom_1 = require("react-router-dom");
var Button_style_1 = require("./Button.style");
var Button = function (_a) {
    var txtFirst = _a.txtFirst, txtSecond = _a.txtSecond;
    var classes = Button_style_1.styles();
    return (React.createElement("div", null,
        React.createElement(react_router_dom_1.Link, { to: "#", className: classes.login }, txtFirst),
        React.createElement(react_router_dom_1.Link, { to: "#", className: classes.signup }, txtSecond)));
};
exports["default"] = Button;
