(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["MenuDrawer"],{"07c5":function(e,t,a){},"2e02":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ADrawer",{attrs:{visible:!e.collapsed,placement:"left",closable:!1,width:e.width,"wrap-class-name":"menu-drawer menu-drawer-"+e.theme,"mask-closable":""},on:{close:e.onClose}},[e._t("default")],2)},n=[],r={name:"MenuDrawer",model:{prop:"collapsed",event:"change"},props:{collapsed:Boolean,theme:{type:String,validator:e=>["dark","light"].includes(e),default:"light"},width:{type:Number,default:200}},methods:{onClose(){this.$emit("change",!0)}}},o=r,s=(a("cf18"),a("2877")),c=Object(s["a"])(o,l,n,!1,null,null,null);t["default"]=c.exports},cf18:function(e,t,a){"use strict";var l=a("07c5"),n=a.n(l);n.a}}]);