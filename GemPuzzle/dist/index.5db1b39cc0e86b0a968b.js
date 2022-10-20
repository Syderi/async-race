(()=>{"use strict";var t={};t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");a.length&&(e=a[a.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})();var e=document.createElement("div");e.className="wrapper",document.body.appendChild(e);var n=document.createElement("div");n.className="wrapper-Buttons",e.appendChild(n);var a=document.createElement("button");a.textContent="Shuffle and start";var r=document.createElement("button");r.textContent="Save";var o=document.createElement("button");o.textContent="Load";var i=document.createElement("button");i.textContent="Sound";var c=document.createElement("button");c.textContent="Result",n.append(a),n.append(r),n.append(o),n.append(i),n.append(c);var l=document.createElement("div");l.className="wrapper-Move-Time",e.appendChild(l);var u=document.createElement("div");u.textContent="Moves:";var d=document.createElement("div");d.textContent="0";var s=document.createElement("div");s.textContent="Time:";var m=document.createElement("div");m.textContent="00:00:00",l.append(u),l.append(d),l.append(s),l.append(m);var p=document.createElement("div");p.className="wrapper-game",e.appendChild(p);var v=document.createElement("div");v.className="wrapper-radio",e.appendChild(v);var f=document.createElement("label");f.textContent="3x3",f.setAttribute("for","radio9");var g=document.createElement("label");g.textContent="4x4",g.setAttribute("for","radio16");var y=document.createElement("label");y.textContent="5x5",y.setAttribute("for","radio25");var b=document.createElement("label");b.textContent="6x6",b.setAttribute("for","radio36");var E=document.createElement("label");E.textContent="7x7",E.setAttribute("for","radio49");var x=document.createElement("label");x.textContent="8x8",x.setAttribute("for","radio64");var h=document.createElement("input");h.setAttribute("type","radio"),h.setAttribute("name","radio"),h.setAttribute("id","radio9"),h.setAttribute("value","9");var S=document.createElement("input");S.setAttribute("type","radio"),S.setAttribute("name","radio"),S.setAttribute("id","radio16"),S.setAttribute("value","16"),S.checked=!0;var A=document.createElement("input");A.setAttribute("type","radio"),A.setAttribute("name","radio"),A.setAttribute("id","radio25"),A.setAttribute("value","25");var L=document.createElement("input");L.setAttribute("type","radio"),L.setAttribute("name","radio"),L.setAttribute("id","radio36"),L.setAttribute("value","36");var C=document.createElement("input");C.setAttribute("type","radio"),C.setAttribute("name","radio"),C.setAttribute("id","radio49"),C.setAttribute("value","49");var w=document.createElement("input");w.setAttribute("type","radio"),w.setAttribute("name","radio"),w.setAttribute("id","radio64"),w.setAttribute("value","64"),v.append(f),v.append(h),v.append(g),v.append(S),v.append(y),v.append(A),v.append(b),v.append(L),v.append(E),v.append(C),v.append(x),v.append(w);var I=document.createElement("div");I.className="wrapper-win",e.appendChild(I);const N=t.p+"audio/move.mp3";function T(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}var M,O,k,B,D=document.getElementsByName("radio"),J=16,j=0,$=0,G=!0,q=[],z=!1,H=new Audio(N);function R(t){var e;p.innerHTML="",k=Math.sqrt(t),(e=Array(t).keys(),function(t){if(Array.isArray(t))return T(t)}(e)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return T(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?T(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(t,e,n){var a=document.createElement("div");a.className="cell",a.textContent=t+1,a.dataset.matrixId=t+1,a.id=t+1,a.style.width="".concat(100/k,"%"),a.style.height="".concat(100/k,"%"),a.draggable=!0,a.addEventListener("dragstart",P),a.addEventListener("dragend",U),a.addEventListener("touchEnd",Y),p.append(a)})),M=Array.from(p.querySelectorAll(".cell")),O=M.map((function(t){return Number(t.dataset.matrixId)})),M.at(-1).style.display="none",B=Q(O),z&&(B=JSON.parse(localStorage.getItem("matrixLocalStorage"))),V(B),F()}function F(){for(var t=B.flat(),e=K(t);!et(e);)e=K(t);V(B=z?JSON.parse(localStorage.getItem("matrixLocalStorage")):Q(e))}function P(t){var e=t.target.id;t.dataTransfer.setData("id",t.target.id),document.getElementById(e).style.opacity="0"}function U(t){var e=t.target.id,n=document.getElementById(e);setTimeout((function(){n.style.opacity="1"}),110)}function Y(t){var e=t.target.id,n=document.getElementById(e);setTimeout((function(){n.style.opacity="1"}),110)}function K(t){for(var e=t.length-1;e>0;e--){var n=Math.floor(Math.random()*(e+1)),a=[t[n],t[e]];t[e]=a[0],t[n]=a[1]}return t}function Q(t){for(var e=[],n=0;n<k;n++)e.push([]);for(var a=0,r=0,o=0;o<t.length;o++)a>=k&&(r++,a=0),e[r][a]=t[o],a++;return e}function V(t){for(var e=0;e<t.length;e++)for(var n=0;n<t[e].length;n++){var a=t[e][n];W(M[a-1],n,e)}}function W(t,e,n){t.style.transform="translate3D(".concat(100*e,"%, ").concat(100*n,"%, 0)")}function X(t,e){for(var n=0;n<e.length;n++)for(var a=0;a<e[n].length;a++)if(e[n][a]===t)return{x:a,y:n};return null}function Z(t,e){var n=Math.abs(t.x-e.x),a=Math.abs(t.y-e.y);return!(1!==n&&1!==a||t.x!==e.x&&t.y!==e.y)}function _(t,e,n){var a=n[t.y][t.x];n[t.y][t.x]=n[e.y][e.x],n[e.y][e.x]=a,$++,d.textContent="".concat($),function(t){for(var e=new Array(J).fill(0).map((function(t,e){return e+1})),n=t.flat(),a=0;a<e.length;a++)if(n[a]!==e[a])return!1;return!0}(n)&&function(){var t=tt(j);setTimeout((function(){setTimeout((function(){I.classList.remove("wrapper-win-active"),I.textContent=""}),3e3),I.classList.add("wrapper-win-active"),I.textContent="Hooray! You solved the puzzle in ".concat(t," and ").concat($," moves!"),j=0}),500),q.push({typeGame:J,moves:$,winTime:t}),q.sort((function(t,e){return t.moves-e.moves})),q.length>10&&(q.length=10);var e=JSON.stringify(q);localStorage.setItem("resultArrayLocalStorage",e)}()}function tt(t){var e=new Date(2022,0,1);return e.setSeconds(t),e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1")}function et(t){var e=0,n=t.slice(),a=Math.ceil((n.indexOf(J)+1)/Math.sqrt(J))-1;n.splice(n.indexOf(J),1);for(var r=0;r<n.length;r++)for(var o=r;o<n.length;o++)n[r]>n[o]&&e++;return J%2!=0&&e%2==0||(e+a)%2!=0&&J%2==0}D.forEach((function(t){t.addEventListener("change",(function(){R(J=+t.value),j=0,$=0,m.textContent="00:00:00",d.textContent="".concat($)}))})),R(J),a.addEventListener("click",(function(t){j=0,$=0,m.textContent="00:00:00",F(),d.textContent="".concat($)})),p.addEventListener("click",(function(t){var e=t.target.closest(".cell");if(e){H.pause(),H.currentTime=0;var n=X(Number(e.dataset.matrixId),B),a=X(J,B);Z(n,a)&&G&&(_(a,n,B),V(B),H.play())}})),p.addEventListener("dragover",(function(t){t.preventDefault()})),p.addEventListener("drop",(function(t){var e=document.getElementById(t.dataTransfer.getData("id"));if(!t.target.classList.contains("cell")){H.pause(),H.currentTime=0;var n=X(Number(e.dataset.matrixId),B),a=X(J,B);Z(n,a)&&G&&(_(a,n,B),V(B),H.play())}})),p.addEventListener("transitionstart",(function(t){G=!1})),p.addEventListener("transitionend",(function(t){G=!0})),setInterval((function(){j++,m.textContent="".concat(tt(j))}),1e3),i.addEventListener("click",(function(t){i.classList.toggle("sound-mute"),t.target.classList.contains("sound-mute")?H.volume=0:H.volume=1})),r.addEventListener("click",(function(){var t=JSON.stringify(B);localStorage.setItem("matrixLocalStorage",t),localStorage.setItem("typeGameLocalStorage",J),localStorage.setItem("movesLocalStorage",$),localStorage.setItem("timeDurationLocalStorage",j)})),o.addEventListener("click",(function(){localStorage.getItem("matrixLocalStorage")&&(z=!0,B=JSON.parse(localStorage.getItem("matrixLocalStorage")),J=Number(localStorage.getItem("typeGameLocalStorage")),$=Number(localStorage.getItem("movesLocalStorage")),j=Number(localStorage.getItem("timeDurationLocalStorage")),d.textContent=$,R(J)),z=!1})),c.addEventListener("click",(function(){setTimeout((function(){setTimeout((function(){I.classList.remove("wrapper-win-active"),I.textContent=""}),3e3),I.classList.add("wrapper-win-active"),localStorage.getItem("resultArrayLocalStorage")?(q=JSON.parse(localStorage.getItem("resultArrayLocalStorage"))).forEach((function(t,e,n){var a=document.createElement("p");a.textContent="".concat(e+1,": Type: ").concat(t.typeGame,", Moves: ").concat(t.moves,", winTime: ").concat(t.winTime),I.appendChild(a)})):I.textContent="No Results"}),500)}))})();