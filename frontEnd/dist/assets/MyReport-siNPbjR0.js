var xt=(s,t,e)=>{if(!t.has(s))throw TypeError("Cannot "+e)};var n=(s,t,e)=>(xt(s,t,"read from private field"),e?e.call(s):t.get(s)),v=(s,t,e)=>{if(t.has(s))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(s):t.set(s,e)},y=(s,t,e,a)=>(xt(s,t,"write to private field"),a?a.call(s,e):t.set(s,e),e);var C=(s,t,e)=>(xt(s,t,"access private method"),e);import{_ as Ce,r as x,e as Gt,f as B,a as D,R as h,ab as Pe,B as G,ac as Re,b as Ct,ad as mt,d as Pt,g as Jt,W as Ee,U as Se,ae as vt,af as Te,G as we,F as Y,$ as xe,h as Ht,a3 as Ie,a4 as It,ag as Le,ah as _t,ai as Vt,aj as Oe,ak as Ne,al as ke,am as Kt,a7 as Xt,a8 as Fe,j as E,q as Ue}from"./index-qNZksdZT.js";import{s as De,E as Me,S as je}from"./ErrorPage-br-YFI34.js";import{C as Be}from"./Title-KZ1cR9W3.js";import"./axios-jL_M4mp6.js";function M(s,t){const e=t-s+1;return Array.from({length:e},(a,c)=>c+s)}const gt="dots";function Qe({total:s,siblings:t=1,boundaries:e=1,page:a,initialPage:c=1,onChange:r}){const i=Math.max(Math.trunc(s),0),[o,u]=Ce({value:a,onChange:r,defaultValue:c,finalValue:c}),d=I=>{I<=0?u(1):I>i?u(i):u(I)},l=()=>d(o+1),f=()=>d(o-1),p=()=>d(1),m=()=>d(i);return{range:x.useMemo(()=>{if(t*2+3+e*2>=i)return M(1,i);const P=Math.max(o-t,e),k=Math.min(o+t,i-e),O=P>e+2,F=k<i-(e+1);if(!O&&F){const U=t*2+e+2;return[...M(1,U),gt,...M(i-(e-1),i)]}if(O&&!F){const U=e+1+2*t;return[...M(1,e),gt,...M(i-U,i)]}return[...M(1,e),gt,...M(P,k),gt,...M(i-e+1,i)]},[i,t,o]),active:o,setPage:d,next:l,previous:f,first:p,last:m}}const[ze,Rt]=Gt("Pagination.Root component was not found in tree");var lt={root:"m-4addd315",control:"m-326d024a",dots:"m-4ad7767d"};const Ae={withPadding:!0},ht=B((s,t)=>{const e=D("PaginationControl",Ae,s),{classNames:a,className:c,style:r,styles:i,vars:o,active:u,disabled:d,withPadding:l,...f}=e,p=Rt(),m=d||p.disabled;return h.createElement(Pe,{ref:t,disabled:m,mod:{active:u,disabled:m,"with-padding":l},...p.getStyles("control",{className:c,style:r,classNames:a,styles:i,active:!m}),...f})});ht.classes=lt;ht.displayName="@mantine/core/PaginationControl";function ut({style:s,children:t,path:e,...a}){return h.createElement("svg",{viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)",...s},...a},h.createElement("path",{d:e,fill:"currentColor"}))}const $e=s=>h.createElement(ut,{...s,path:"M8.781 8l-3.3-3.3.943-.943L10.667 8l-4.243 4.243-.943-.943 3.3-3.3z"}),He=s=>h.createElement(ut,{...s,path:"M7.219 8l3.3 3.3-.943.943L5.333 8l4.243-4.243.943.943-3.3 3.3z"}),_e=s=>h.createElement(ut,{...s,path:"M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"}),Ve=s=>h.createElement(ut,{...s,path:"M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"}),Ke=s=>h.createElement(ut,{...s,path:"M2 8c0-.733.6-1.333 1.333-1.333.734 0 1.334.6 1.334 1.333s-.6 1.333-1.334 1.333C2.6 9.333 2 8.733 2 8zm9.333 0c0-.733.6-1.333 1.334-1.333C13.4 6.667 14 7.267 14 8s-.6 1.333-1.333 1.333c-.734 0-1.334-.6-1.334-1.333zM6.667 8c0-.733.6-1.333 1.333-1.333s1.333.6 1.333 1.333S8.733 9.333 8 9.333 6.667 8.733 6.667 8z"}),We={icon:Ke},Et=B((s,t)=>{const e=D("PaginationDots",We,s),{classNames:a,className:c,style:r,styles:i,vars:o,icon:u,...d}=e,l=Rt(),f=u;return h.createElement(G,{ref:t,...l.getStyles("dots",{className:c,style:r,styles:i,classNames:a}),...d},h.createElement(f,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});Et.classes=lt;Et.displayName="@mantine/core/PaginationDots";function St({icon:s,name:t,action:e,type:a}){const c={icon:s},r=x.forwardRef((i,o)=>{const{icon:u,...d}=D(t,c,i),l=u,f=Rt(),p=a==="next"?f.active===f.total:f.active===1;return h.createElement(ht,{disabled:f.disabled||p,ref:o,onClick:f[e],withPadding:!1,...d},h.createElement(l,{style:{width:"calc(var(--pagination-control-size) / 1.8)",height:"calc(var(--pagination-control-size) / 1.8)"}}))});return r.displayName=`@mantine/core/${t}`,Re(r)}const Yt=St({icon:$e,name:"PaginationNext",action:"onNext",type:"next"}),te=St({icon:He,name:"PaginationPrevious",action:"onPrevious",type:"previous"}),ee=St({icon:_e,name:"PaginationFirst",action:"onFirst",type:"previous"}),se=St({icon:Ve,name:"PaginationLast",action:"onLast",type:"next"});function Bt({dotsIcon:s}){const t=Rt(),e=t.range.map((a,c)=>{var r;return a==="dots"?h.createElement(Et,{icon:s,key:c}):h.createElement(ht,{key:c,active:a===t.active,"aria-current":a===t.active?"page":void 0,onClick:()=>t.onChange(a),disabled:t.disabled,...(r=t.getItemProps)==null?void 0:r.call(t,a)},a)});return h.createElement(h.Fragment,null,e)}Bt.displayName="@mantine/core/PaginationItems";const qe={siblings:1,boundaries:1},Ze=Pt((s,{size:t,radius:e,color:a,autoContrast:c})=>({root:{"--pagination-control-radius":e===void 0?void 0:Jt(e),"--pagination-control-size":Ee(t,"pagination-control-size"),"--pagination-control-fz":Se(t),"--pagination-active-bg":a?vt(a,s):void 0,"--pagination-active-color":c?Te({color:a,theme:s}):void 0}})),Tt=B((s,t)=>{const e=D("PaginationRoot",qe,s),{classNames:a,className:c,style:r,styles:i,unstyled:o,vars:u,total:d,value:l,defaultValue:f,onChange:p,disabled:m,siblings:R,boundaries:I,color:P,radius:k,onNextPage:O,onPreviousPage:F,onFirstPage:U,onLastPage:ft,getItemProps:Q,autoContrast:S,...z}=e,J=Ct({name:"Pagination",classes:lt,props:e,className:c,style:r,classNames:a,styles:i,unstyled:o,vars:u,varsResolver:Ze}),{range:wt,setPage:pt,next:ue,previous:de,active:fe,first:pe,last:me}=Qe({page:l,initialPage:f,onChange:p,total:d,siblings:R,boundaries:I}),ge=mt(O,ue),ve=mt(F,de),ye=mt(U,pe),be=mt(ft,me);return h.createElement(ze,{value:{total:d,range:wt,active:fe,disabled:m,getItemProps:Q,onChange:pt,onNext:ge,onPrevious:ve,onFirst:ye,onLast:be,getStyles:J}},h.createElement(G,{ref:t,...J("root"),...z}))});Tt.classes=lt;Tt.displayName="@mantine/core/PaginationRoot";const Ge={withControls:!0,siblings:1,boundaries:1,gap:8},L=B((s,t)=>{const e=D("Pagination",Ge,s),{withEdges:a,withControls:c,getControlProps:r,nextIcon:i,previousIcon:o,lastIcon:u,firstIcon:d,dotsIcon:l,total:f,gap:p,...m}=e;return f<=0?null:h.createElement(Tt,{ref:t,total:f,...m},h.createElement(we,{gap:p},a&&h.createElement(ee,{icon:d,...r==null?void 0:r("first")}),c&&h.createElement(te,{icon:o,...r==null?void 0:r("previous")}),h.createElement(Bt,{dotsIcon:l}),c&&h.createElement(Yt,{icon:i,...r==null?void 0:r("next")}),a&&h.createElement(se,{icon:u,...r==null?void 0:r("last")})))});L.classes=lt;L.displayName="@mantine/core/Pagination";L.Root=Tt;L.Control=ht;L.Dots=Et;L.First=ee;L.Last=se;L.Next=Yt;L.Previous=te;L.Items=Bt;var ae={root:"m-18320242","skeleton-fade":"m-299c329c"};const Je={visible:!0,animate:!0},Xe=Pt((s,{width:t,height:e,radius:a,circle:c})=>({root:{"--skeleton-height":Y(e),"--skeleton-width":c?Y(e):Y(t),"--skeleton-radius":c?"1000px":a===void 0?void 0:Jt(a)}})),Qt=B((s,t)=>{const e=D("Skeleton",Je,s),{classNames:a,className:c,style:r,styles:i,unstyled:o,vars:u,width:d,height:l,circle:f,visible:p,radius:m,animate:R,...I}=e,P=Ct({name:"Skeleton",classes:ae,props:e,className:c,style:r,classNames:a,styles:i,unstyled:o,vars:u,varsResolver:Xe});return h.createElement(G,{ref:t,...P("root"),mod:{visible:p,animate:R},...I})});Qt.classes=ae;Qt.displayName="@mantine/core/Skeleton";const[Ye,ts]=Gt("Table component was not found in the tree");var dt={table:"m-b23fa0ef",th:"m-4e7aa4f3",tr:"m-4e7aa4fd",td:"m-4e7aa4ef",tbody:"m-b2404537",thead:"m-b242d975",caption:"m-9e5a3ac7",scrollContainer:"m-a100c15",scrollContainerInner:"m-62259741"};function es(s,t){if(!t)return;const e={};return t.columnBorder&&s.withColumnBorders&&(e["data-with-column-border"]=!0),t.rowBorder&&s.withRowBorders&&(e["data-with-row-border"]=!0),t.striped&&s.striped&&(e["data-striped"]=s.striped),t.highlightOnHover&&s.highlightOnHover&&(e["data-hover"]=!0),t.captionSide&&s.captionSide&&(e["data-side"]=s.captionSide),t.stickyHeader&&s.stickyHeader&&(e["data-sticky"]=!0),e}function V(s,t){const e=`Table${s.charAt(0).toUpperCase()}${s.slice(1)}`,a=B((c,r)=>{const i=D(e,{},c),{classNames:o,className:u,style:d,styles:l,...f}=i,p=ts();return h.createElement(G,{component:s,ref:r,...es(p,t),...p.getStyles(s,{className:u,classNames:o,style:d,styles:l,props:i}),...f})});return a.displayName=`@mantine/core/${e}`,a.classes=dt,a}const Lt=V("th",{columnBorder:!0}),ne=V("td",{columnBorder:!0}),yt=V("tr",{rowBorder:!0,striped:!0,highlightOnHover:!0}),re=V("thead",{stickyHeader:!0}),ie=V("tbody"),oe=V("tfoot"),ce=V("caption",{captionSide:!0});function zt({data:s}){return h.createElement(h.Fragment,null,s.caption&&h.createElement(ce,null,s.caption),s.head&&h.createElement(re,null,h.createElement(yt,null,s.head.map((t,e)=>h.createElement(Lt,{key:e},t)))),s.body&&h.createElement(ie,null,s.body.map((t,e)=>h.createElement(yt,{key:e},t.map((a,c)=>h.createElement(ne,{key:c},a))))),s.foot&&h.createElement(oe,null,h.createElement(yt,null,s.foot.map((t,e)=>h.createElement(Lt,{key:e},t)))))}zt.displayName="@mantine/core/TableDataRenderer";const ss={type:"scrollarea"},as=Pt((s,{minWidth:t,type:e})=>({scrollContainer:{"--table-min-width":Y(t),"--table-overflow":e==="native"?"auto":void 0}})),At=B((s,t)=>{const e=D("TableScrollContainer",ss,s),{classNames:a,className:c,style:r,styles:i,unstyled:o,vars:u,children:d,minWidth:l,type:f,...p}=e,m=Ct({name:"TableScrollContainer",classes:dt,props:e,className:c,style:r,classNames:a,styles:i,unstyled:o,vars:u,varsResolver:as,rootSelector:"scrollContainer"});return h.createElement(G,{component:f==="scrollarea"?xe:"div",...f==="scrollarea"?{offsetScrollbars:"x"}:{},ref:t,...m("scrollContainer"),...p},h.createElement("div",{...m("scrollContainerInner")},d))});At.classes=dt;At.displayName="@mantine/core/TableScrollContainer";const ns={withRowBorders:!0,verticalSpacing:7},rs=Pt((s,{layout:t,captionSide:e,horizontalSpacing:a,verticalSpacing:c,borderColor:r,stripedColor:i,highlightOnHoverColor:o,striped:u,highlightOnHover:d,stickyHeaderOffset:l,stickyHeader:f})=>({table:{"--table-layout":t,"--table-caption-side":e,"--table-horizontal-spacing":Ht(a),"--table-vertical-spacing":Ht(c),"--table-border-color":r?vt(r,s):void 0,"--table-striped-color":u&&i?vt(i,s):void 0,"--table-highlight-on-hover-color":d&&o?vt(o,s):void 0,"--table-sticky-header-offset":f?Y(l):void 0}})),b=B((s,t)=>{const e=D("Table",ns,s),{classNames:a,className:c,style:r,styles:i,unstyled:o,vars:u,horizontalSpacing:d,verticalSpacing:l,captionSide:f,stripedColor:p,highlightOnHoverColor:m,striped:R,highlightOnHover:I,withColumnBorders:P,withRowBorders:k,withTableBorder:O,borderColor:F,layout:U,variant:ft,data:Q,children:S,stickyHeader:z,stickyHeaderOffset:J,...wt}=e,pt=Ct({name:"Table",props:e,className:c,style:r,classes:dt,classNames:a,styles:i,unstyled:o,rootSelector:"table",vars:u,varsResolver:rs});return h.createElement(Ye,{value:{getStyles:pt,stickyHeader:z,striped:R===!0?"odd":R||void 0,highlightOnHover:I,withColumnBorders:P,withRowBorders:k,captionSide:f||"bottom"}},h.createElement(G,{component:"table",variant:ft,ref:t,mod:{"data-with-table-border":O},...pt("table"),...wt},S||!!Q&&h.createElement(zt,{data:Q})))});b.classes=dt;b.displayName="@mantine/core/Table";b.Td=ne;b.Th=Lt;b.Tr=yt;b.Thead=re;b.Tbody=ie;b.Tfoot=oe;b.Caption=ce;b.ScrollContainer=At;b.DataRenderer=zt;var w,g,tt,T,A,K,N,et,W,q,$,H,j,Z,_,X,st,Ot,at,Nt,nt,kt,rt,Ft,it,Ut,ot,Dt,ct,Mt,bt,le,Zt,is=(Zt=class extends Ie{constructor(t,e){super();v(this,_);v(this,st);v(this,at);v(this,nt);v(this,rt);v(this,it);v(this,ot);v(this,ct);v(this,bt);v(this,w,void 0);v(this,g,void 0);v(this,tt,void 0);v(this,T,void 0);v(this,A,void 0);v(this,K,void 0);v(this,N,void 0);v(this,et,void 0);v(this,W,void 0);v(this,q,void 0);v(this,$,void 0);v(this,H,void 0);v(this,j,void 0);v(this,Z,new Set);this.options=e,y(this,w,t),y(this,N,null),this.bindMethods(),this.setOptions(e)}bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(n(this,g).addObserver(this),Wt(n(this,g),this.options)?C(this,_,X).call(this):this.updateResult(),C(this,rt,Ft).call(this))}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return jt(n(this,g),this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return jt(n(this,g),this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,C(this,it,Ut).call(this),C(this,ot,Dt).call(this),n(this,g).removeObserver(this)}setOptions(t,e){const a=this.options,c=n(this,g);if(this.options=n(this,w).defaultQueryOptions(t),It(a,this.options)||n(this,w).getQueryCache().notify({type:"observerOptionsUpdated",query:n(this,g),observer:this}),typeof this.options.enabled<"u"&&typeof this.options.enabled!="boolean")throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=a.queryKey),C(this,ct,Mt).call(this);const r=this.hasListeners();r&&qt(n(this,g),c,this.options,a)&&C(this,_,X).call(this),this.updateResult(e),r&&(n(this,g)!==c||this.options.enabled!==a.enabled||this.options.staleTime!==a.staleTime)&&C(this,st,Ot).call(this);const i=C(this,at,Nt).call(this);r&&(n(this,g)!==c||this.options.enabled!==a.enabled||i!==n(this,j))&&C(this,nt,kt).call(this,i)}getOptimisticResult(t){const e=n(this,w).getQueryCache().build(n(this,w),t),a=this.createResult(e,t);return cs(this,a)&&(y(this,T,a),y(this,K,this.options),y(this,A,n(this,g).state)),a}getCurrentResult(){return n(this,T)}trackResult(t){const e={};return Object.keys(t).forEach(a=>{Object.defineProperty(e,a,{configurable:!1,enumerable:!0,get:()=>(n(this,Z).add(a),t[a])})}),e}getCurrentQuery(){return n(this,g)}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=n(this,w).defaultQueryOptions(t),a=n(this,w).getQueryCache().build(n(this,w),e);return a.isFetchingOptimistic=!0,a.fetch().then(()=>this.createResult(a,e))}fetch(t){return C(this,_,X).call(this,{...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),n(this,T)))}createResult(t,e){var Q;const a=n(this,g),c=this.options,r=n(this,T),i=n(this,A),o=n(this,K),d=t!==a?t.state:n(this,tt),{state:l}=t;let{error:f,errorUpdatedAt:p,fetchStatus:m,status:R}=l,I=!1,P;if(e._optimisticResults){const S=this.hasListeners(),z=!S&&Wt(t,e),J=S&&qt(t,a,e,c);(z||J)&&(m=ke(t.options.networkMode)?"fetching":"paused",l.dataUpdatedAt||(R="pending")),e._optimisticResults==="isRestoring"&&(m="idle")}if(e.select&&typeof l.data<"u")if(r&&l.data===(i==null?void 0:i.data)&&e.select===n(this,et))P=n(this,W);else try{y(this,et,e.select),P=e.select(l.data),P=Kt(r==null?void 0:r.data,P,e),y(this,W,P),y(this,N,null)}catch(S){y(this,N,S)}else P=l.data;if(typeof e.placeholderData<"u"&&typeof P>"u"&&R==="pending"){let S;if(r!=null&&r.isPlaceholderData&&e.placeholderData===(o==null?void 0:o.placeholderData))S=r.data;else if(S=typeof e.placeholderData=="function"?e.placeholderData((Q=n(this,q))==null?void 0:Q.state.data,n(this,q)):e.placeholderData,e.select&&typeof S<"u")try{S=e.select(S),y(this,N,null)}catch(z){y(this,N,z)}typeof S<"u"&&(R="success",P=Kt(r==null?void 0:r.data,S,e),I=!0)}n(this,N)&&(f=n(this,N),P=n(this,W),p=Date.now(),R="error");const k=m==="fetching",O=R==="pending",F=R==="error",U=O&&k;return{status:R,fetchStatus:m,isPending:O,isSuccess:R==="success",isError:F,isInitialLoading:U,isLoading:U,data:P,dataUpdatedAt:l.dataUpdatedAt,error:f,errorUpdatedAt:p,failureCount:l.fetchFailureCount,failureReason:l.fetchFailureReason,errorUpdateCount:l.errorUpdateCount,isFetched:l.dataUpdateCount>0||l.errorUpdateCount>0,isFetchedAfterMount:l.dataUpdateCount>d.dataUpdateCount||l.errorUpdateCount>d.errorUpdateCount,isFetching:k,isRefetching:k&&!O,isLoadingError:F&&l.dataUpdatedAt===0,isPaused:m==="paused",isPlaceholderData:I,isRefetchError:F&&l.dataUpdatedAt!==0,isStale:$t(t,e),refetch:this.refetch}}updateResult(t){const e=n(this,T),a=this.createResult(n(this,g),this.options);if(y(this,A,n(this,g).state),y(this,K,this.options),n(this,A).data!==void 0&&y(this,q,n(this,g)),It(a,e))return;y(this,T,a);const c={},r=()=>{if(!e)return!0;const{notifyOnChangeProps:i}=this.options,o=typeof i=="function"?i():i;if(o==="all"||!o&&!n(this,Z).size)return!0;const u=new Set(o??n(this,Z));return this.options.throwOnError&&u.add("error"),Object.keys(n(this,T)).some(d=>{const l=d;return n(this,T)[l]!==e[l]&&u.has(l)})};(t==null?void 0:t.listeners)!==!1&&r()&&(c.listeners=!0),C(this,bt,le).call(this,{...c,...t})}onQueryUpdate(){this.updateResult(),this.hasListeners()&&C(this,rt,Ft).call(this)}},w=new WeakMap,g=new WeakMap,tt=new WeakMap,T=new WeakMap,A=new WeakMap,K=new WeakMap,N=new WeakMap,et=new WeakMap,W=new WeakMap,q=new WeakMap,$=new WeakMap,H=new WeakMap,j=new WeakMap,Z=new WeakMap,_=new WeakSet,X=function(t){C(this,ct,Mt).call(this);let e=n(this,g).fetch(this.options,t);return t!=null&&t.throwOnError||(e=e.catch(Le)),e},st=new WeakSet,Ot=function(){if(C(this,it,Ut).call(this),_t||n(this,T).isStale||!Vt(this.options.staleTime))return;const e=Oe(n(this,T).dataUpdatedAt,this.options.staleTime)+1;y(this,$,setTimeout(()=>{n(this,T).isStale||this.updateResult()},e))},at=new WeakSet,Nt=function(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(n(this,g)):this.options.refetchInterval)??!1},nt=new WeakSet,kt=function(t){C(this,ot,Dt).call(this),y(this,j,t),!(_t||this.options.enabled===!1||!Vt(n(this,j))||n(this,j)===0)&&y(this,H,setInterval(()=>{(this.options.refetchIntervalInBackground||Ne.isFocused())&&C(this,_,X).call(this)},n(this,j)))},rt=new WeakSet,Ft=function(){C(this,st,Ot).call(this),C(this,nt,kt).call(this,C(this,at,Nt).call(this))},it=new WeakSet,Ut=function(){n(this,$)&&(clearTimeout(n(this,$)),y(this,$,void 0))},ot=new WeakSet,Dt=function(){n(this,H)&&(clearInterval(n(this,H)),y(this,H,void 0))},ct=new WeakSet,Mt=function(){const t=n(this,w).getQueryCache().build(n(this,w),this.options);if(t===n(this,g))return;const e=n(this,g);y(this,g,t),y(this,tt,t.state),this.hasListeners()&&(e==null||e.removeObserver(this),t.addObserver(this))},bt=new WeakSet,le=function(t){Xt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(n(this,T))}),n(this,w).getQueryCache().notify({query:n(this,g),type:"observerResultsUpdated"})})},Zt);function os(s,t){return t.enabled!==!1&&!s.state.dataUpdatedAt&&!(s.state.status==="error"&&t.retryOnMount===!1)}function Wt(s,t){return os(s,t)||s.state.dataUpdatedAt>0&&jt(s,t,t.refetchOnMount)}function jt(s,t,e){if(t.enabled!==!1){const a=typeof e=="function"?e(s):e;return a==="always"||a!==!1&&$t(s,t)}return!1}function qt(s,t,e,a){return e.enabled!==!1&&(s!==t||a.enabled===!1)&&(!e.suspense||s.state.status!=="error")&&$t(s,e)}function $t(s,t){return s.isStaleByTime(t.staleTime)}function cs(s,t){return!It(s.getCurrentResult(),t)}var he=x.createContext(!1),ls=()=>x.useContext(he);he.Provider;function hs(){let s=!1;return{clearReset:()=>{s=!1},reset:()=>{s=!0},isReset:()=>s}}var us=x.createContext(hs()),ds=()=>x.useContext(us),fs=(s,t)=>{(s.suspense||s.throwOnError)&&(t.isReset()||(s.retryOnMount=!1))},ps=s=>{x.useEffect(()=>{s.clearReset()},[s])},ms=({result:s,errorResetBoundary:t,throwOnError:e,query:a})=>s.isError&&!t.isReset()&&!s.isFetching&&a&&De(e,[s.error,a]),gs=s=>{s.suspense&&typeof s.staleTime!="number"&&(s.staleTime=1e3)},vs=(s,t)=>(s==null?void 0:s.suspense)&&t.isPending,ys=(s,t,e)=>t.fetchOptimistic(s).catch(()=>{e.clearReset()});function bs(s,t,e){const a=Fe(e),c=ls(),r=ds(),i=a.defaultQueryOptions(s);i._optimisticResults=c?"isRestoring":"optimistic",gs(i),fs(i,r),ps(r);const[o]=x.useState(()=>new t(a,i)),u=o.getOptimisticResult(i);if(x.useSyncExternalStore(x.useCallback(d=>{const l=c?()=>{}:o.subscribe(Xt.batchCalls(d));return o.updateResult(),l},[o,c]),()=>o.getCurrentResult(),()=>o.getCurrentResult()),x.useEffect(()=>{o.setOptions(i,{listeners:!1})},[i,o]),vs(i,u))throw ys(i,o,r);if(ms({result:u,errorResetBoundary:r,throwOnError:i.throwOnError,query:a.getQueryCache().get(i.queryHash)}))throw u.error;return i.notifyOnChangeProps?u:o.trackResult(u)}function Cs(s,t){return bs(s,is,t)}const Ps=new je,Rs=async(s,t)=>await Ps.get(`/api/plagiarism/report?page=${s}&limit=${t}`);function Is(){var l,f;const[t,e]=x.useState(1),[a,c]=x.useState(1),{isLoading:r,isError:i,data:o,isSuccess:u}=Cs({queryKey:["reports",a,10],queryFn:()=>Rs(a,10)});if(x.useEffect(()=>{var p,m;(p=o==null?void 0:o.data)!=null&&p.docs&&e((m=o==null?void 0:o.data)==null?void 0:m.totalPages)},[o,u]),i)return E.jsx(Me,{});const d=(f=(l=o==null?void 0:o.data)==null?void 0:l.docs)==null?void 0:f.map((p,m)=>E.jsxs(b.Tr,{children:[E.jsx(b.Td,{children:p.language}),E.jsx(b.Td,{children:new Date(p.createdAt).toLocaleString()}),E.jsx(b.Td,{children:p.resultUrl})]},m));return E.jsxs(Be,{size:"lg",children:[r&&E.jsx(Qt,{height:"80vh",visible:r,children:E.jsx(Ue,{m:"xl",children:" Under Construction... "})}),E.jsxs(b,{horizontalSpacing:"xl",verticalSpacing:"lg",highlightOnHover:!0,children:[E.jsx(b.Thead,{m:"xl",children:E.jsxs(b.Tr,{children:[E.jsx(b.Th,{children:"Language"}),E.jsx(b.Th,{children:"Created At"}),E.jsx(b.Th,{children:"Result"})]})}),E.jsx(b.Tbody,{children:d})]}),E.jsx(L,{m:"xl",value:a,onChange:c,total:t})]})}export{Is as default};