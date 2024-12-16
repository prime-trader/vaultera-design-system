import { j as s } from "./jsx-runtime-tA0Up9ft.js";
function c(t) {
  var r, o, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var e = t.length;
    for (r = 0; r < e; r++) t[r] && (o = c(t[r])) && (n && (n += " "), n += o);
  } else for (o in t) t[o] && (n && (n += " "), n += o);
  return n;
}
function f() {
  for (var t, r, o = 0, n = "", e = arguments.length; o < e; o++) (t = arguments[o]) && (r = c(t)) && (n && (n += " "), n += r);
  return n;
}
const _ = "_button_et4z1_1", b = "_icon_et4z1_26", m = "_InfoLabel_et4z1_39", p = "_primary_et4z1_58", x = "_outline_et4z1_71", i = {
  button: _,
  icon: b,
  InfoLabel: m,
  primary: p,
  outline: x
}, h = ({
  label: t,
  onClick: r,
  disabled: o = !1,
  variant: n = "primary",
  size: e = "150px",
  icon: a,
  tags: l,
  type: u = "button"
}) => /* @__PURE__ */ s.jsxs(
  "button",
  {
    type: u,
    onClick: r,
    disabled: o,
    className: f(i.button, i[n]),
    style: { width: e },
    "aria-label": t || "Button",
    role: "button",
    children: [
      l && /* @__PURE__ */ s.jsx(y, { text: l }),
      t && /* @__PURE__ */ s.jsx("span", { children: t }),
      a && /* @__PURE__ */ s.jsx("span", { className: i.icon, children: a })
    ]
  }
), y = ({ text: t }) => /* @__PURE__ */ s.jsx("div", { className: i.InfoLabel, children: /* @__PURE__ */ s.jsx("label", { children: t }) });
export {
  h as Button
};
