"use strict";(self.webpackChunkfitstreet=self.webpackChunkfitstreet||[]).push([[177],{5177:function(e,s,t){t.r(s);var a=t(885),n=t(2791),r=t(4569),c=t.n(r),i=t(1087),d=t(184);s.default=function(){var e=(0,n.useState)([]),s=(0,a.Z)(e,2),t=s[0],r=s[1];return(0,n.useEffect)((function(){!function(){var e={method:"get",url:"http://159.89.164.11:3000/api/subscription-plans",headers:{Authorization:localStorage.getItem("token")}};c()(e).then((function(e){console.log(e.data);var s=[];e.data.data.map((function(e){s.push({id:e._id,name:e.name,price:e.price,monthDuration:e.monthDuration,eventFree:e.eventsFree,description:e.description})})),r(s)})).catch((function(e){console.log(e)}))}()}),[]),(0,d.jsx)("section",{children:(0,d.jsx)("div",{className:"container-fluid subscription-page",children:(0,d.jsxs)("div",{className:"container pt-5 mt-5",children:[(0,d.jsx)("div",{className:"row",children:(0,d.jsxs)("div",{className:"col-12",children:[(0,d.jsx)("h1",{className:"text-center pageHeading",children:"Choose your subscription plan"}),(0,d.jsx)("div",{className:"text-center headingDes",children:"Choose the right plan with best pricing and start tracking your data"})]})}),t.map((function(e){return(0,d.jsxs)("div",{className:"row g-3 mt-5",children:[(0,d.jsx)("div",{className:"col-12 col-md-4",children:(0,d.jsxs)("div",{className:"card border-0 h-100",children:[(0,d.jsxs)("div",{className:"card-header bg-transparent border-0",children:[(0,d.jsx)("div",{className:"cardHeading",children:e.name}),(0,d.jsx)("div",{className:"planPrice",children:e.price}),(0,d.jsxs)("div",{className:"monthFree",children:[e.eventFree," events will be free for ",e.monthDuration," months"]})]}),(0,d.jsx)("div",{className:"card-body",children:(0,d.jsx)("p",{className:"description",children:e.description})}),(0,d.jsx)("div",{className:"card-footer bg-transparent border-0",children:(0,d.jsx)(i.OL,{to:"javascript:;",role:"button",className:"btn",children:"Get Started"})})]})}),(0,d.jsx)("div",{className:"col-12 py-5 text-center",children:(0,d.jsx)(i.OL,{to:"javascript:;",type:"button",className:"btn p-1 border-0 text-center bottomThanks",children:"No Thanks"})})]})}))]})})})}}}]);
//# sourceMappingURL=177.c18921a2.chunk.js.map