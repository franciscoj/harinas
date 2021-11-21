import{c as d,j as t,R as b,G as w,n as m,r as c,a as g}from"./vendor.b6589174.js";const y=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerpolicy&&(a.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?a.credentials="include":e.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(e){if(e.ep)return;e.ep=!0;const a=r(e);fetch(e.href,a)}};y();const h=()=>t(w,{styles:d`*, ::before, ::after {
box-sizing: border-box;
border-width: 0;
border-style: solid;
--tw-border-opacity: 1;
border-color: rgba(229, 231, 235, var(--tw-border-opacity));
--tw-translate-x: 0;
--tw-translate-y: 0;
--tw-rotate: 0;
--tw-skew-x: 0;
--tw-skew-y: 0;
--tw-scale-x: 1;
--tw-scale-y: 1;
--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
--tw-ring-inset: var(--tw-empty,/*!*/ /*!*/);
--tw-ring-offset-width: 0px;
--tw-ring-offset-color: #fff;
--tw-ring-color: rgba(59, 130, 246, 0.5);
--tw-ring-offset-shadow: 0 0 #0000;
--tw-ring-shadow: 0 0 #0000;
--tw-shadow: 0 0 #0000;
--tw-blur: var(--tw-empty,/*!*/ /*!*/);
--tw-brightness: var(--tw-empty,/*!*/ /*!*/);
--tw-contrast: var(--tw-empty,/*!*/ /*!*/);
--tw-grayscale: var(--tw-empty,/*!*/ /*!*/);
--tw-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
--tw-invert: var(--tw-empty,/*!*/ /*!*/);
--tw-saturate: var(--tw-empty,/*!*/ /*!*/);
--tw-sepia: var(--tw-empty,/*!*/ /*!*/);
--tw-drop-shadow: var(--tw-empty,/*!*/ /*!*/);
--tw-filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
--tw-backdrop-blur: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-brightness: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-contrast: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-grayscale: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-hue-rotate: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-invert: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-opacity: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-saturate: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-sepia: var(--tw-empty,/*!*/ /*!*/);
--tw-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
        }
html {
line-height: 1.5;
-webkit-text-size-adjust: 100%;
-moz-tab-size: 4;
tab-size: 4;
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        }
body {
margin: 0;
font-family: inherit;
line-height: inherit;
        }
hr {
height: 0;
color: inherit;
border-top-width: 1px;
        }
abbr[title] {
text-decoration: underline dotted;
        }
b, strong {
font-weight: bolder;
        }
code, kbd, samp, pre {
font-family: ui-monospace, SFMono-Regular, Consolas, 'Liberation Mono', Menlo, monospace;
font-size: 1em;
        }
small {
font-size: 80%;
        }
sub, sup {
font-size: 75%;
line-height: 0;
position: relative;
vertical-align: baseline;
        }
sub {
bottom: -0.25em;
        }
sup {
top: -0.5em;
        }
table {
text-indent: 0;
border-color: inherit;
border-collapse: collapse;
        }
button, input, optgroup, select, textarea {
font-family: inherit;
font-size: 100%;
line-height: inherit;
margin: 0;
padding: 0;
color: inherit;
        }
button, select {
text-transform: none;
        }
button, [type='button'], [type='reset'], [type='submit'] {
-webkit-appearance: button;
        }
::-moz-focus-inner {
border-style: none;
padding: 0;
        }
:-moz-focusring {
outline: 1px dotted ButtonText;
        }
:-moz-ui-invalid {
box-shadow: none;
        }
legend {
padding: 0;
        }
progress {
vertical-align: baseline;
        }
::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
height: auto;
        }
[type='search'] {
-webkit-appearance: textfield;
outline-offset: -2px;
        }
::-webkit-search-decoration {
-webkit-appearance: none;
        }
::-webkit-file-upload-button {
-webkit-appearance: button;
font: inherit;
        }
summary {
display: list-item;
        }
blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
margin: 0;
        }
button {
background-color: transparent;
background-image: none;
        }
fieldset {
margin: 0;
padding: 0;
        }
ol, ul {
list-style: none;
margin: 0;
padding: 0;
        }
img {
border-style: solid;
        }
textarea {
resize: vertical;
        }
input::placeholder, textarea::placeholder {
color: #9ca3af;
        }
button, [role="button"] {
cursor: pointer;
        }
h1, h2, h3, h4, h5, h6 {
font-size: inherit;
font-weight: inherit;
        }
a {
color: inherit;
text-decoration: inherit;
        }
pre, code, kbd, samp {
font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        }
img, svg, video, canvas, audio, iframe, embed, object {
display: block;
vertical-align: middle;
        }
img, video {
max-width: 100%;
height: auto;
        }
[hidden] {
display: none;
        }
@keyframes spin {
to {
transform: rotate(360deg);
        }
        }
@keyframes ping {
75%, 100% {
transform: scale(2);
opacity: 0;
        }
        }
@keyframes pulse {
50% {
opacity: .5;
        }
        }
@keyframes bounce {
0%, 100% {
transform: translateY(-25%);
animation-timing-function: cubic-bezier(0.8,0,1,1);
        }
50% {
transform: none;
animation-timing-function: cubic-bezier(0,0,0.2,1);
        }
        }`}),v=d`
  body {
    -webkit-tap-highlight-color: ${"#3b82f6"};
    ${{WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"}}
  }
`,x=()=>t(b.Fragment,null,t(h,null),t(w,{styles:v})),u=m.input(()=>[{transform:"var(--tw-transform)",paddingLeft:"2rem",paddingRight:"2rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",transitionDuration:"75ms",borderWidth:"2px",borderRadius:"0.25rem",":focus":{outline:"2px solid transparent",outlineOffset:"2px"}},,{":hover, :focus":{"--tw-scale-x":"1.05","--tw-scale-y":"1.05",transform:"var(--tw-transform)","--tw-text-opacity":"1",color:"rgba(96, 165, 250, var(--tw-text-opacity))","--tw-border-opacity":"1",borderColor:"rgba(165, 180, 252, var(--tw-border-opacity))"}},d`
      color: ${{"50":"#eff6ff","100":"#dbeafe","200":"#bfdbfe","300":"#93c5fd","400":"#60a5fa","500":"#3b82f6","600":"#2563eb","700":"#1d4ed8","800":"#1e40af","900":"#1e3a8a"}};
    `]),C=()=>t("div",{css:{width:"8rem",marginBottom:"2.5rem",padding:"1.25rem",display:"block",opacity:"0.5",":hover":{opacity:"1"}}},t(k,null)),k=()=>t("svg",{width:128,height:128,xmlns:"http://www.w3.org/2000/svg"},t("linearGradient",{id:"prefix__a",gradientTransform:"rotate(-30.052 61.43 99.937)",gradientUnits:"userSpaceOnUse",x1:76.152,x2:86.129,y1:58.593,y2:94.808},t("stop",{offset:0,stopColor:"#cc7e10"}),t("stop",{offset:.119,stopColor:"#ce8215"}),t("stop",{offset:.267,stopColor:"#d58c24"}),t("stop",{offset:.429,stopColor:"#e09e3e"}),t("stop",{offset:.6,stopColor:"#f0b660"}),t("stop",{offset:.739,stopColor:"#ffcd82"}),t("stop",{offset:.793,stopColor:"#fdca7d"}),t("stop",{offset:.861,stopColor:"#f8c16e"}),t("stop",{offset:.934,stopColor:"#f0b255"}),t("stop",{offset:1,stopColor:"#e6a138"})),t("path",{d:"M99 13l-4.67 4S83.9 27.07 78.84 34.51c0 0-11.59 6.55-13.51 12.49 0 0-8.62 5.64-12.17 11.5 0 0-7.08 4.21-10.9 11.39 0 0-8.52 5.85-11.28 11.27 0 0-8.21 4.98-10.54 10.95 0 0-7.94 5.06-9.73 10.95 0 0-9.38 9.55-5.56 16.16 5.36 9.27 25.29 5.92 44.86-10.89C73.67 88 102.86 59.65 122.67 24.67 127.67 15.83 115.42.56 99 13z",fill:"url(#prefix__a)"}),t("linearGradient",{id:"prefix__b",gradientTransform:"rotate(-12.312 -15.689 192.365)",gradientUnits:"userSpaceOnUse",x1:134.185,x2:128.916,y1:45.569,y2:57.279},t("stop",{offset:0,stopColor:"#822100"}),t("stop",{offset:.167,stopColor:"#ad5d30"}),t("stop",{offset:.326,stopColor:"#d08f57"}),t("stop",{offset:.465,stopColor:"#eab374"}),t("stop",{offset:.578,stopColor:"#f9c986"}),t("stop",{offset:.65,stopColor:"#ffd18c"})),t("path",{d:"M87.5 24.42c.44-.05 1.39-1.9 2.02-2.19C91 21.55 94.39 20.02 96 20c14.61-.26 11.65 7.59 11.41 7.56-6.7-.8-17.16-1.23-19.91-3.14z",fill:"url(#prefix__b)"}),t("linearGradient",{id:"prefix__c",gradientTransform:"rotate(-11.081 -25.042 205.767)",gradientUnits:"userSpaceOnUse",x1:120.556,x2:114.028,y1:54.535,y2:69.042},t("stop",{offset:0,stopColor:"#822100"}),t("stop",{offset:.167,stopColor:"#ad5d30"}),t("stop",{offset:.326,stopColor:"#d08f57"}),t("stop",{offset:.465,stopColor:"#eab374"}),t("stop",{offset:.578,stopColor:"#f9c986"}),t("stop",{offset:.65,stopColor:"#ffd18c"})),t("path",{d:"M77 36c.45-.04 2.74-3.89 9.17-3.25C101.05 34.23 96.25 41.99 96 42c-8.18.45-22.83-1.67-19-6z",fill:"url(#prefix__c)"}),t("linearGradient",{id:"prefix__d",gradientTransform:"rotate(-16.206 15.419 155.349)",gradientUnits:"userSpaceOnUse",x1:100.43,x2:94.659,y1:63.279,y2:76.103},t("stop",{offset:0,stopColor:"#822100"}),t("stop",{offset:.167,stopColor:"#ad5d30"}),t("stop",{offset:.326,stopColor:"#d08f57"}),t("stop",{offset:.465,stopColor:"#eab374"}),t("stop",{offset:.578,stopColor:"#f9c986"}),t("stop",{offset:.65,stopColor:"#ffd18c"})),t("path",{d:"M60.77 52.82c-1.06-.1-1.35-1.14-.61-1.9.31-.32 1.13-1.14 1.33-1.25 1.58-.87 3.88-2.93 5.67-3.08 16.12-1.38 12.94 8.93 12.67 8.92-6.43-.33-13.02-2.12-19.06-2.69z",fill:"url(#prefix__d)"}),t("linearGradient",{id:"prefix__e",gradientTransform:"rotate(-16.206 15.419 155.349)",gradientUnits:"userSpaceOnUse",x1:80.897,x2:74.783,y1:73.948,y2:87.534},t("stop",{offset:0,stopColor:"#822100"}),t("stop",{offset:.167,stopColor:"#ad5d30"}),t("stop",{offset:.326,stopColor:"#d08f57"}),t("stop",{offset:.465,stopColor:"#eab374"}),t("stop",{offset:.578,stopColor:"#f9c986"}),t("stop",{offset:.65,stopColor:"#ffd18c"})),t("path",{d:"M45.84 68.2c-1.1-.93-1.94-2.07-.7-2.79.01 0 .01-.01.02-.01 1.53-.84 5.04-2.71 6.76-2.86 15.59-1.34 12.01 8.28 11.75 8.3-7.77.58-15.5-.67-17.83-2.64z",fill:"url(#prefix__e)"}),t("linearGradient",{id:"prefix__f",gradientTransform:"rotate(-9.816 -8.325 200.946)",gradientUnits:"userSpaceOnUse",x1:64.949,x2:59.035,y1:83.691,y2:96.834},t("stop",{offset:0,stopColor:"#822100"}),t("stop",{offset:.167,stopColor:"#ad5d30"}),t("stop",{offset:.326,stopColor:"#d08f57"}),t("stop",{offset:.465,stopColor:"#eab374"}),t("stop",{offset:.578,stopColor:"#f9c986"}),t("stop",{offset:.65,stopColor:"#ffd18c"})),t("path",{d:"M31.26 80.19c.16-.67 2.44-2.43 3.07-2.69 1.5-.62 4.6-1.33 6.22-1.29 14.58.38 11.29 8.03 11.04 8.04-8.98.35-17.72-1.15-20.33-4.06z",fill:"url(#prefix__f)"}),t("linearGradient",{id:"prefix__g",gradientTransform:"rotate(-16.206 15.419 155.349)",gradientUnits:"userSpaceOnUse",x1:46.743,x2:40.36,y1:92.711,y2:106.897},t("stop",{offset:0,stopColor:"#822100"}),t("stop",{offset:.167,stopColor:"#ad5d30"}),t("stop",{offset:.326,stopColor:"#d08f57"}),t("stop",{offset:.465,stopColor:"#eab374"}),t("stop",{offset:.578,stopColor:"#f9c986"}),t("stop",{offset:.65,stopColor:"#ffd18c"})),t("path",{d:"M16.24 95.35c.43-.08 1.88-1.99 2.48-2.33 1.42-.78 4.7-2.53 6.3-2.66 14.53-1.25 12.11 6.71 11.87 6.76-10.22 2.21-18.22 1.55-20.65-1.77z",fill:"url(#prefix__g)"}),t("path",{d:"M111.09 11.31c3.58 0 6.77 1.8 8.52 4.8 1.39 2.39 1.56 5.1.44 7.07-15.57 27.52-39.12 54.62-72 82.88-11.1 9.54-23.08 15.24-32.03 15.24-2.84 0-6.57-.62-8.28-3.57-2.17-3.76 3.09-10.5 5.1-12.56.34-.34.59-.77.73-1.23 1.2-3.94 6.53-8.04 8.48-9.29.54-.34.95-.85 1.18-1.44 1.6-4.1 7.26-8.23 9.3-9.48.48-.29.86-.7 1.12-1.2 1.98-3.87 8.11-8.65 10.31-10.16.4-.27.72-.64.95-1.06 3.36-6.32 9.73-10.19 9.79-10.22.42-.25.78-.61 1.04-1.03 3.14-5.2 11.16-10.49 11.24-10.54.57-.38 1-.94 1.21-1.59 1.13-3.5 8.04-8.48 12.13-10.8.4-.23.74-.54 1-.92 4.63-6.8 14.17-16.14 15.03-16.98l4.53-3.88c3.5-2.65 7.03-4.04 10.21-4.04m0-3c-3.56 0-7.67 1.34-12.09 4.69l-4.67 4S83.9 27.07 78.84 34.51c0 0-11.59 6.55-13.51 12.49 0 0-8.62 5.64-12.17 11.5 0 0-7.08 4.21-10.9 11.39 0 0-8.52 5.85-11.28 11.27 0 0-8.21 4.98-10.54 10.95 0 0-7.94 5.06-9.73 10.95 0 0-9.38 9.55-5.56 16.16 1.94 3.37 5.81 5.07 10.88 5.07 8.9 0 21.51-5.25 33.98-15.96C73.67 88 102.86 59.65 122.67 24.67c3.65-6.46-1.91-16.36-11.58-16.36z",fill:"#424242",opacity:.2})),S={container:({hasBackground:o})=>[{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},o&&{backgroundImage:"linear-gradient(to bottom, var(--tw-gradient-stops))","--tw-gradient-from":"#bfdbfe","--tw-gradient-stops":"var(--tw-gradient-from), var(--tw-gradient-to, rgba(191, 219, 254, 0))","--tw-gradient-to":"#fff"}]},_=()=>{const{objective:o,sourceUp:s,sourceLow:r,up:n,low:e,err:a,setObjective:i,setSourceUp:f,setSourceLow:p}=z();return t("div",{css:S.container({hasBackground:!0})},t("div",{css:{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",rowGap:"1.25rem"}},t("span",null,a),t(u,{type:"number",placeholder:"W",onChange:l=>i(+l.target.value)}),t(u,{type:"number",placeholder:"WF",onChange:l=>f(+l.target.value)}),t(u,{type:"number",placeholder:"Wf",onChange:l=>p(+l.target.value)}),t("div",{css:{display:"flex",flexDirection:"column"}},t("div",null,t("strong",null,"W:")," ",o||" "),t("div",null,t("strong",null,"WF:")," ",s||" "," ~ ",n||" "," %"),t("div",null,t("strong",null,"Wf:")," ",r||" "," ~ ",e||" "," %"))),t(C,null))},z=()=>{const[o,s]=c.exports.useState(0);let[r,n]=c.exports.useState(0),[e,a]=c.exports.useState(0);const i=M(o,r,e),f=U(o,r,e);let p="";return(o===0||r===0||e===0)&&(p="Introduce todos los valores:"),{objective:o,sourceUp:r,sourceLow:e,up:f,low:i,err:p,setObjective:s,setSourceUp:n,setSourceLow:a}},M=(o,s,r)=>o===0||s===0||r===0?0:(100*(s-o)/(s-r)).toFixed(2),U=(o,s,r)=>o===0||s===0||r===0?0:(100*(o-r)/(s-r)).toFixed(2);g.render(t(b.StrictMode,null,t(x,null),t(_,null)),document.getElementById("root"));
