var se=Object.defineProperty;var j=Object.getOwnPropertySymbols;var k=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var A=(e,t,r)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&A(e,r,t[r]);if(j)for(var r of j(t))z.call(t,r)&&A(e,r,t[r]);return e};var N=(e,t)=>{var r={};for(var n in e)k.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&j)for(var n of j(e))t.indexOf(n)<0&&z.call(e,n)&&(r[n]=e[n]);return r};import{R as f,f as _,r as d,g as I,h as U,i as D}from"./react.82c093c3.js";import{c as h}from"./lodash.71f9f2ff.js";import{g as $,u as L}from"./graphql.ee8eee84.js";import{B as H,p as ie,s as ce}from"./index.052fed19.js";function W(e){var t,r,n="";if(typeof e=="string"||typeof e=="number")n+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=W(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function ue(){for(var e=0,t,r,n="";e<arguments.length;)(t=arguments[e++])&&(r=W(t))&&(n&&(n+=" "),n+=r);return n}const le=({className:e})=>f.createElement("svg",{className:ue("spinner",e),width:"65px",height:"65px",viewBox:"0 0 66 66",xmlns:"http://www.w3.org/2000/svg"},f.createElement("circle",{className:"path",fill:"none",strokeWidth:"6",strokeLinecap:"round",cx:"33",cy:"33",r:"30"}));const q=({visible:e})=>e?f.createElement("div",{className:"loading-box"},f.createElement(le,{key:"spin"})):null;q.defaultProps={visible:!0};var xt=q,fe="/assets/error.045b384f.svg";const B="https://github.com/lencx/z/discussions",V=({visible:e,issues:t,type:r})=>{const n={blog:["lencx/z",`${B}`],issues:[`lencx/z #${t}`,`${B}/${t}`]}[r];return e?f.createElement("div",{className:"error-box"},f.createElement("div",null,f.createElement("img",{className:"error-icon",src:fe,alt:"Error :("}),f.createElement("p",null,f.createElement("b",null,"\u6E29\u99A8\u63D0\u793A")),f.createElement("p",null,"\u56E0 GitHub API \u8BF7\u6C42\u6B21\u6570\u9650\u5236\uFF0C\u6682\u65F6\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u70B9\u51FB\u6B64\u5904\u53EF\u4EE5\u67E5\u770B\u539F\u94FE\u63A5"),f.createElement("p",null,f.createElement("a",{href:n[1]},n[0])))):null};V.defaultProps={visible:!0,type:"blog"};var St=V;function de(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Q=de,ge=typeof h=="object"&&h&&h.Object===Object&&h,me=ge,be=me,pe=typeof self=="object"&&self&&self.Object===Object&&self,ve=be||pe||Function("return this")(),X=ve,ye=X,Ee=function(){return ye.Date.now()},Te=Ee,je=/\s/;function he(e){for(var t=e.length;t--&&je.test(e.charAt(t)););return t}var xe=he,Se=xe,_e=/^\s+/;function Ie(e){return e&&e.slice(0,Se(e)+1).replace(_e,"")}var $e=Ie,Le=X,Fe=Le.Symbol,K=Fe,C=K,Y=Object.prototype,we=Y.hasOwnProperty,Oe=Y.toString,E=C?C.toStringTag:void 0;function Ae(e){var t=we.call(e,E),r=e[E];try{e[E]=void 0;var n=!0}catch{}var a=Oe.call(e);return n&&(t?e[E]=r:delete e[E]),a}var ke=Ae,ze=Object.prototype,Me=ze.toString;function Ne(e){return Me.call(e)}var Be=Ne,R=K,Ce=ke,Re=Be,Ge="[object Null]",Pe="[object Undefined]",G=R?R.toStringTag:void 0;function Je(e){return e==null?e===void 0?Pe:Ge:G&&G in Object(e)?Ce(e):Re(e)}var Ze=Je;function Ue(e){return e!=null&&typeof e=="object"}var De=Ue,He=Ze,We=De,qe="[object Symbol]";function Ve(e){return typeof e=="symbol"||We(e)&&He(e)==qe}var Qe=Ve,Xe=$e,P=Q,Ke=Qe,J=0/0,Ye=/^[-+]0x[0-9a-f]+$/i,et=/^0b[01]+$/i,tt=/^0o[0-7]+$/i,rt=parseInt;function nt(e){if(typeof e=="number")return e;if(Ke(e))return J;if(P(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=P(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Xe(e);var r=et.test(e);return r||tt.test(e)?rt(e.slice(2),r?2:8):Ye.test(e)?J:+e}var at=nt,ot=Q,S=Te,Z=at,st="Expected a function",it=Math.max,ct=Math.min;function ut(e,t,r){var n,a,l,u,o,i,m=0,b=!1,c=!1,g=!0;if(typeof e!="function")throw new TypeError(st);t=Z(t)||0,ot(r)&&(b=!!r.leading,c="maxWait"in r,l=c?it(Z(r.maxWait)||0,t):l,g="trailing"in r?!!r.trailing:g);function v(s){var p=n,y=a;return n=a=void 0,m=s,u=e.apply(y,p),u}function re(s){return m=s,o=setTimeout(T,t),b?v(s):u}function ne(s){var p=s-i,y=s-m,O=t-p;return c?ct(O,l-y):O}function F(s){var p=s-i,y=s-m;return i===void 0||p>=t||p<0||c&&y>=l}function T(){var s=S();if(F(s))return w(s);o=setTimeout(T,ne(s))}function w(s){return o=void 0,g&&n?v(s):(n=a=void 0,u)}function ae(){o!==void 0&&clearTimeout(o),m=0,n=i=a=o=void 0}function oe(){return o===void 0?u:w(S())}function x(){var s=S(),p=F(s);if(n=arguments,a=this,i=s,p){if(o===void 0)return re(i);if(c)return clearTimeout(o),o=setTimeout(T,t),v(i)}return o===void 0&&(o=setTimeout(T,t)),u}return x.cancel=ae,x.flush=oe,x}var lt=ut;const ft=$`
  query FZJ_LIST($first: Int, $cursor: String) {
    repository(name: "z", owner: "lencx") {
      discussions(first: $first, after: $cursor) {
        totalCount
        pageInfo {
          # startCursor
          # hasPreviousPage
          endCursor
          hasNextPage
        }
        edges {
          cursor
          node {
            title
            number
            # bodyHTML
            createdAt
            updatedAt
            author {
              login
              avatarUrl
              url
            }
            category {
              name
              emojiHTML
            }
            labels(first: 100) {
              edges {
                node {
                  id
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
  }
`,dt=$`
  query FZJ_ITEM($number: Int!) {
    repository(name: "z", owner: "lencx") {
      discussion(number: $number) {
        id
        title
        bodyHTML
        createdAt
        updatedAt
        category {
          name
        }
        labels(first: 100) {
          edges {
            node {
              id
              name
            }
          }
        }
        reactions(first: 100) {
          totalCount
          edges {
            node {
              id
              content
            }
          }
        }
        comments(first: 100) {
          edges {
            node {
              id
              bodyHTML
              author {
                login
                avatarUrl
                url
              }
              replies(first: 100) {
                edges {
                  node {
                    id
                    author {
                      login
                      avatarUrl
                      url
                    }
                    bodyHTML
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`,gt=$`
  query FZJ_TAGS {
    repository(name: "z", owner: "lencx") {
      discussionCategories(first: 20) {
        edges {
          node {
            id
            name
            emojiHTML
          }
        }
      }
      labels(first: 100) {
        edges {
          node {
            id
            name
            color
          }
        }
      }
    }
  }
`,mt=_({key:"FZJ_LIST",default:{pageInfo:{},list:[]}}),_t=()=>{const[e,t]=d.exports.useState(null),r=I(mt),n=L(ft,{variables:{first:ie,cursor:null}}),[a,l]=r,[u,{loading:o,data:i,error:m}]=n,b=d.exports.useCallback(lt(()=>{ce(()=>{a.pageInfo.hasNextPage&&u({variables:{cursor:a.pageInfo.cursor}})})},500,{leading:!0}),[a.pageInfo]);return d.exports.useEffect(()=>{(async()=>{if(m){window.removeEventListener("scroll",b,!1);try{const c=await fetch(`${H}/discussions.json`).then(g=>g.json());l({pageInfo:{},list:c})}catch(c){t(c)}}})()},[m]),d.exports.useEffect(()=>(window.addEventListener("scroll",b,!1),()=>{window.removeEventListener("scroll",b,!1)}),[a.pageInfo]),d.exports.useEffect(()=>{!a.list.length&&u()},[]),d.exports.useEffect(()=>{if(i){const{endCursor:c,hasNextPage:g}=i.repository.discussions.pageInfo;l({pageInfo:{cursor:c,hasNextPage:g},list:[...a.list,...i.repository.discussions.edges||[]]})}},[i]),{data:a.list,loading:o,error:e}},ee=_({key:"FZJ_ITEM",default:new Map}),bt=U({key:"FZJ_ITEM_VALUE",get:({get:e})=>e(ee)}),pt=()=>D(bt),It=e=>{const[t,r]=I(ee),[n,a]=d.exports.useState(!1),[l,u]=d.exports.useState(null),[o,i]=L(dt,{variables:{number:parseInt(e)}}),m=pt();return d.exports.useEffect(()=>{m.has(e)||(a(!0),o())},[]),d.exports.useEffect(()=>{(async()=>{var b,c;if(i.data)r(t.set(e,(c=(b=i==null?void 0:i.data)==null?void 0:b.repository)==null?void 0:c.discussion)),u(null),a(!1);else try{const g=await fetch(`${H}/issues/${e}.json`).then(v=>v.json());r(t.set(e,g)),a(!1)}catch(g){u(g)}})()},[i.data]),{data:t.get(e),loading:n,error:l}},te=_({key:"FZJ_TAGS",default:{}}),vt=U({key:"FZJ_TAGS_VALUE",get:({get:e})=>e(te)}),$t=()=>{const[e,t]=I(te),r=D(vt),[n,u]=L(gt),o=u,{data:a}=o,l=N(o,["data"]);return d.exports.useEffect(()=>{Object.keys(r).length?t(r):n()},[]),d.exports.useEffect(()=>{a&&t(a)},[a]),M({data:e},l)};export{St as E,xt as L,It as a,$t as b,ue as c,_t as u};
