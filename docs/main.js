!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=3)}([function(t,e,i){function s(){this.setSettings=function(t){for(var e=0;e<24;e++)this[String.fromCharCode(97+e)]=t[e]||0;this.c<.01&&(this.c=.01);var i=this.b+this.c+this.e;if(i<.18){var s=.18/i;this.b*=s,this.c*=s,this.e*=s}}}var a=new function(){var t,e,i,a,r,o,n,h,l,c,d,f;this._params=new s,this.reset=function(){var t=this._params;a=100/(t.f*t.f+.001),r=100/(t.g*t.g+.001),o=1-t.h*t.h*t.h*.01,n=-t.i*t.i*t.i*1e-6,t.a||(d=.5-t.n/2,f=5e-5*-t.o),h=1+t.l*t.l*(t.l>0?-.9:10),l=0,c=1==t.m?0:(1-t.m)*(1-t.m)*2e4+32},this.totalReset=function(){this.reset();var s=this._params;return t=s.b*s.b*1e5,e=s.c*s.c*1e5,i=s.e*s.e*1e5+12,3*((t+e+i)/3|0)},this.synthWave=function(s,p){var u=this._params,m=1!=u.s||u.v,y=u.v*u.v*.1,g=1+3e-4*u.w,x=u.s*u.s*u.s*.1,w=1+1e-4*u.t,v=1!=u.s,k=u.x*u.x,j=u.g,b=u.q||u.r,C=u.r*u.r*u.r*.2,M=u.q*u.q*(u.q<0?-1020:1020),S=u.p?32+((1-u.p)*(1-u.p)*2e4|0):0,z=u.d,T=u.j/2,O=u.k*u.k*.01,P=u.a,L=t,_=1/t,E=1/e,F=1/i,D=5/(1+u.u*u.u*20)*(.01+x);D>.8&&(D=.8),D=1-D;for(var H,B,R,A,I,W,X=!1,Y=0,U=0,J=0,q=0,G=0,K=0,N=0,$=0,Q=0,V=0,Z=new Array(1024),tt=new Array(32),et=Z.length;et--;)Z[et]=0;for(et=tt.length;et--;)tt[et]=2*Math.random()-1;for(et=0;et<p;et++){if(X)return et;if(S&&++Q>=S&&(Q=0,this.reset()),c&&++l>=c&&(c=0,a*=h),(a*=o+=n)>r&&(a=r,j>0&&(X=!0)),B=a,T>0&&(V+=O,B*=1+Math.sin(V)*T),(B|=0)<8&&(B=8),P||((d+=f)<0?d=0:d>.5&&(d=.5)),++U>L)switch(U=0,++Y){case 1:L=e;break;case 2:L=i}switch(Y){case 0:J=U*_;break;case 1:J=1+2*(1-U*E)*z;break;case 2:J=1-U*F;break;case 3:J=0,X=!0}b&&((R=0|(M+=C))<0?R=-R:R>1023&&(R=1023)),m&&g&&((y*=g)<1e-5?y=1e-5:y>.1&&(y=.1)),W=0;for(var it=8;it--;){if(++N>=B&&(N%=B,3==P))for(var st=tt.length;st--;)tt[st]=2*Math.random()-1;switch(P){case 0:I=N/B<d?.5:-.5;break;case 1:I=1-N/B*2;break;case 2:I=.225*(((I=1.27323954*(A=6.28318531*((A=N/B)>.5?A-1:A))+.405284735*A*A*(A<0?1:-1))<0?-1:1)*I*I-I)+I;break;case 3:I=tt[Math.abs(32*N/B|0)]}m&&(H=K,(x*=w)<0?x=0:x>.1&&(x=.1),v?(G+=(I-K)*x,G*=D):(K=I,G=0),q+=(K+=G)-H,I=q*=1-y),b&&(Z[$%1024]=I,I+=Z[($-R+1024)%1024],$++),W+=I}W*=.125*J*k,s[et]=W>=1?32767:W<=-1?-32768:32767*W|0}return p}};t.exports=function(t){a._params.setSettings(t);var e=a.totalReset(),i=new Uint8Array(4*((e+1)/2|0)+44),s=2*a.synthWave(new Uint16Array(i.buffer,44),e),r=new Uint32Array(i.buffer,0,44);r[0]=1179011410,r[1]=s+36,r[2]=1163280727,r[3]=544501094,r[4]=16,r[5]=65537,r[6]=44100,r[7]=88200,r[8]=1048578,r[9]=1635017060,r[10]=s,s+=44;for(var o=0,n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",h="data:audio/wav;base64,";o<s;o+=3){var l=i[o]<<16|i[o+1]<<8|i[o+2];h+=n[l>>18]+n[l>>12&63]+n[l>>6&63]+n[63&l]}return h}},function(t,e,i){t.exports=function(){return i(2)('!function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);var r={songData:[{i:[0,100,128,0,1,201,128,0,0,0,0,8,28,0,0,0,194,4,1,3,25,191,115,244,147,6,43,4],p:[5,1,2,2,1,1,1,1,3,4,1,2,1,2,1,2,,,7,7,7,7,7,7,7,7],c:[{n:[132,132,134,134,135,135,132,132,137,137,135,135,134,134,135,135,139,139,137,137,135,135,137,137,134,,133,,132,,131],f:[21,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,48]},{n:[132,132,134,134,135,135,132,132,137,137,135,135,134,134,135,135,139,139,137,137,135,135,137,137,139,139,135,135,134,134,130,130],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,11,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,31]},{n:[],f:[]},{n:[159,,,,,,,,158,,,,,,,,157,,,,,,,,156,155,154,153,152,151,150,149],f:[13,,,,,,,,,,,,,,,,,,,,,,,,13,,13,,13,,13,11,29,,,,,,,,,,,,,,,,,,,,,,,,32,,41,,29,,25,15]},{n:[132,132,134,134,135,135,132,132,137,137,135,135,134,134,135,135,139,139,137,137,135,135,137,137,139,139,135,135,134,134,130,130],f:[13,11,21,17,,,,,,,,,,,,,,,,,,,,,,,,,,,,17,29,,25,113,,,,,,,,,,,,,,,,,,,,,,,,,,,,194]},{n:[120,,,,,,,,132,,,,,,,,120,,,,,,,,108],f:[]},{n:[132,144,134,146,132,144,135,147,132,144,137,149,132,144,139,151,140,152,139,151,137,149,139,151,138,150,137,149,135,147,134,146],f:[]}]},{i:[0,255,117,1,0,255,110,0,1,0,4,6,35,0,0,0,0,0,0,2,14,1,1,39,76,5,0,0],p:[,,1,3,1,3,1,3,2,,,,1,3,1,3,1,3,,,1,3,1,3,1,3],c:[{n:[147,,,,,,147,,,,147,,,,,,147,,,,,,147,,,,147,,,,147],f:[]},{n:[147],f:[]},{n:[147,,,,,,147,,,,147,,,,147,,147,,,,,,147,,,,147,,,,147,147],f:[]}]},{i:[0,0,140,0,0,0,140,0,0,60,4,10,68,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[,,1,1,2,3,2,3,4,,,,2,3,2,3,2,3,,,5,5,5,5,5,5],c:[{n:[,,,,147,,,,,,,,148,,,,,,,,147,,,,,,,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,147,147,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,68]},{n:[147,,,147,,,147,,147,,,147,,147,,147,147,,,147,,,147,,147,,,147,,147,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]}]},{i:[2,192,128,0,2,192,140,18,0,0,107,115,138,0,0,0,136,5,1,2,8,93,22,56,148,5,85,8],p:[3,,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],c:[{n:[120],f:[]},{n:[120],f:[]},{n:[120],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,56]}]},{i:[3,0,127,0,3,68,127,0,1,218,11,0,40,0,0,1,55,4,1,2,67,115,124,190,67,6,39,1],p:[,,,2,1,2,1,2,3,,,,1,2,1,2,1,2,,,1,4,1,4,1,4],c:[{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147],f:[]},{n:[,,,,147,,,,,,147,,147,,,,,,,,147,,,,,,,,147],f:[]},{n:[147],f:[]},{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147,,,147],f:[]}]},{i:[3,91,128,0,0,95,128,12,0,0,12,0,67,0,0,0,0,0,0,2,255,15,0,32,83,3,51,4],p:[,,,,1,2,1,2,1,2,,,1,2,3,2,1,2,,,,,5,4,5,4],c:[{n:[156,,,164,,,163,,161,,,,,,,,,,158,,159,,161,,159,,158,,159,,154,,159],f:[5,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[144,,,147,,,149,,151,,,,,,,,,,149,,151,,152,,151,,151,,147,,147,,139],f:[]},{n:[156,,,156,,,156,,154,,,154,,,154,,152,,,152,,,152,,151,,,147,,,146,,,,151,,,151,,151,,,146,,,146,,146,,,144,,,144,,144,,,142,,,139,,137],f:[5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3]},{n:[163,,164,,166,,163,,163,,164,,166,,163,,163,,164,,166,,163,,163,,164,,166,,163],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,25]},{n:[168,,170,,171,,168,,168,,170,,171,,168,,159,,159,,158,,158,,157,,157,,156,,156],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]}]},{i:[0,146,140,0,1,224,128,3,0,0,61,0,63,0,0,3,179,5,1,3,37,162,0,67,150,3,37,2],p:[,1,,,,,,,,,1,2,3,,1,2,1,2,3,,4,5],c:[{n:[,,,,,,,,,,,,,,,,,,,,,,,,122,,121,,120,,119],f:[]},{n:[,,,,,,,,,,,,110,109,,,,,,,,,,,,,,,132,144,120,108],f:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,11,,,,95,,,,,,,,,,,,,,,,,,,,,,,,,,,,29]},{n:[123],f:[24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,52,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[120,,,,,,120,,120,,,,,,,,,,,,,,,,,,,,,,,,123,,,,,,123,,123,,,,,,,,,,,,,,,,,,,,,,,,125,,,,,,125,,125],f:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,95]},{n:[120,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,123,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,125],f:[]}]},{i:[2,138,116,0,2,138,128,4,0,0,47,48,107,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],p:[,,,,,,,,1,,,,,,,,,,1],c:[{n:[156,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,168],f:[]}]}],rowLen:5513,patternLen:32,endPattern:25,numChannels:8};let i=new function(){var n,t,e,r,i,f=function(n){return Math.sin(6.283184*n)},o=function(n){return.003959503758*Math.pow(2,(n-128)/12)},a=function(n,t,e){var r,i,f,a,c,l,p,s=u[n.i[0]],v=n.i[1],d=n.i[3],h=u[n.i[4]],y=n.i[5],g=n.i[8],w=n.i[9],M=n.i[10]*n.i[10]*4,b=n.i[11]*n.i[11]*4,m=n.i[12]*n.i[12]*4,j=1/m,O=n.i[13],P=e*Math.pow(2,2-n.i[14]),L=new Int32Array(M+b+m),_=0,x=0;for(r=0,i=0;r<M+b+m;r++,i++)i>=0&&(i-=P,l=o(t+(15&(O=O>>8|(255&O)<<4))+n.i[2]-128),p=o(t+(15&O)+n.i[6]-128)*(1+8e-4*n.i[7])),f=1,r<M?f=r/M:r>=M+b&&(f-=(r-M-b)*j),a=l,d&&(a*=f*f),c=s(_+=a)*v,a=p,g&&(a*=f*f),c+=h(x+=a)*y,w&&(c+=(2*Math.random()-1)*w),L[r]=80*c*f|0;return L},u=[f,function(n){return n%1<.5?1:-1},function(n){return n%1*2-1},function(n){var t=n%1*4;return t<2?t-1:3-t}];this.init=function(f){n=f,t=f.endPattern,e=0,r=f.rowLen*f.patternLen*(t+1)*2,i=new Int32Array(r)},this.generate=function(){var o,c,l,p,s,v,d,h,y,g,w,M,b,m,j=new Int32Array(r),O=n.songData[e],P=n.rowLen,L=n.patternLen,_=0,x=0,A=!1,S=[];for(l=0;l<=t;++l)for(d=O.p[l],p=0;p<L;++p){var I=d?O.c[d-1].f[p]:0;I&&(O.i[I-1]=O.c[d-1].f[p+L]||0,I<16&&(S=[]));var D=u[O.i[15]],C=O.i[16]/512,T=Math.pow(2,O.i[17]-9)/P,W=O.i[18],U=O.i[19],k=43.23529*O.i[20]*3.141592/44100,q=1-O.i[21]/255,z=1e-5*O.i[22],B=O.i[23]/32,E=O.i[24]/512,F=6.283184*Math.pow(2,O.i[25]-9)/P,G=O.i[26]/255,H=O.i[27]*P&-2;for(w=(l*L+p)*P,s=0;s<4;++s)if(v=d?O.c[d-1].n[p+s*L]:0){S[v]||(S[v]=a(O,v,P));var J=S[v];for(c=0,o=2*w;c<J.length;c++,o+=2)j[o]+=J[c]}for(c=0;c<P;c++)(g=j[h=2*(w+c)])||A?(M=k,W&&(M*=D(T*h)*C+.5),x+=(M=1.5*Math.sin(M))*(b=q*(g-x)-(_+=M*x)),g=3==U?x:1==U?b:_,z&&(g=(g*=z)<1?g>-1?f(.25*g):-1:1,g/=z),A=(g*=B)*g>1e-5,m=g*(1-(y=Math.sin(F*h)*E+.5)),g*=y):m=0,h>=H&&(m+=j[h-H+1]*G,g+=j[h-H]*G),j[h]=0|m,j[h+1]=0|g,i[h]+=0|m,i[h+1]+=0|g}return++e/n.numChannels},this.createWave=function(){var n=44+2*r-8,t=n-36,e=new Uint8Array(44+2*r);e.set([82,73,70,70,255&n,n>>8&255,n>>16&255,n>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&t,t>>8&255,t>>16&255,t>>24&255]);for(var f=0,o=44;f<r;++f){var a=i[f];a=a<-32767?-32767:a>32767?32767:a,e[o++]=255&a,e[o++]=a>>8&255}return e},this.getData=function(n,t){for(var e=2*Math.floor(44100*n),r=new Array(t),f=0;f<2*t;f+=1){var o=e+f;r[f]=n>0&&o<i.length?i[o]/32768:0}return r}};i.init(r),i.init(r);let f=!1;setInterval((function(){if(!f&&(f=i.generate()>=1,f)){let n=i.createWave();postMessage(n)}}),10),t.default=i}]);',null)}},function(t,e,i){"use strict";var s=window.URL||window.webkitURL;t.exports=function(t,e){try{try{var i;try{(i=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),i=i.getBlob()}catch(e){i=new Blob([t])}return new Worker(s.createObjectURL(i))}catch(e){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(t){if(!e)throw Error("Inline worker is not supported");return new Worker(e)}}},function(t,e,i){"use strict";i.r(e);var s=class{constructor(){this.x=0,this.y=128,this.position_x=0,this.position_y=128,this.shakeRemaining=0,this.shakeForce=0}adjustX(t,e){return t-this.x+e/2}adjustY(t,e){return t-this.y+e/2}clampX(t){this.position_x=Math.round(Math.min(Math.max(8*t.tileSize,this.position_x),(t.mapLength-8)*t.tileSize))}clampY(t){this.position_y=Math.round(Math.min(Math.max(8*t.tileSize,this.position_y),(t.mapHeight-8)*t.tileSize+15))}followSubject(t){t.x-this.position_x>16&&(this.position_x=t.x-16),t.x-this.position_x<-16&&(this.position_x=t.x+16),t.y-this.position_y>16&&(this.position_y=t.y-16),t.y-this.position_y<-16&&(this.position_y=t.y+16)}shake(t,e){this.shakeRemaining=e,this.shakeForce=t}applyShake(){if(this.shakeRemaining=Math.max(0,this.shakeRemaining-1),!this.shakeRemaining)return;const t=Math.random()*this.shakeForce*2-this.shakeForce,e=Math.random()*this.shakeForce*2-this.shakeForce;this.x+=t,this.y+=e}tick({player:t,map:e}){this.followSubject(t,e),this.clampX(e),this.clampY(e),this.x=this.position_x,this.y=this.position_y,this.applyShake()}};let a=null;class r{constructor(t){this.canvas=t,a=this.canvas.getContext("2d"),this.camera=new s}draw(t){a.save(),t(),a.restore()}clearBackground(){a.clearRect(0,0,this.canvas.width,this.canvas.height)}drawBackground(t){a.fillStyle=t,a.fillRect(0,0,this.canvas.width,this.canvas.height)}rect({rect:t,fillColor:e,strokeColor:i,shadowBlur:s=0,shadowColor:r="none",lineWidth:o=1,adjusted:n=!0,rotation:h,size:l,crisp:c=!0}){c&&(t[0]=Math.floor(t[0]),t[1]=Math.floor(t[1])),n&&(t[0]=this.camera.adjustX(t[0],this.canvas.width),t[1]=this.camera.adjustY(t[1],this.canvas.height)),h&&(a.translate(t[0]+l/2,t[1]+l/2),a.rotate(h),a.translate(-1*t[0]-l/2,-1*t[1]-l/2)),a.shadowBlur=s,a.shadowColor=r,e&&(a.fillStyle=e,a.fillRect(t[0],t[1],...t.slice(2))),i&&(a.strokeStyle=i,a.lineWidth=o,a.strokeRect(t[0],t[1],...t.slice(2))),a.shadowBlur=0}arc({arc:t,fillColor:e,strokeColor:i,shadowBlur:s,shadowColor:r}){a.beginPath(),a.arc(this.camera.adjustX(t[0],this.canvas.width),this.camera.adjustY(t[1],this.canvas.height),...t.slice(2)),a.shadowBlur=s,a.shadowColor=r,e&&(a.fillStyle=e,a.fill()),i&&(a.strokeStyle=i,a.stroke()),a.shadowBlur=0}text({text:t,x:e,y:i,fillColor:s="#fff",size:r=1}){a.fillStyle=s;let n=0;t.toUpperCase().split("").map(t=>(o[t]||console.log(t),o[t])).forEach(t=>{let s=0,o=0;t.forEach(t=>{t.forEach((t,o)=>{t&&a.fillRect(n+o*r+e,s+i,r,r)}),o=Math.max(o,t.length*r),s+=r}),n+=r+o})}lines({lines:t,shadowBlur:e=0,shadowColor:i,rotation:s,x:r,y:o,fillColor:n,strokeColor:h}){s&&(a.translate(this.camera.adjustX(r,this.canvas.width),this.camera.adjustY(o,this.canvas.height)),a.rotate(s),a.translate(-1*this.camera.adjustX(r,this.canvas.width),-1*this.camera.adjustY(o,this.canvas.height))),a.beginPath(),a.moveTo(this.camera.adjustX(t[0][0],this.canvas.width),this.camera.adjustY(t[0][1],this.canvas.height)),t.slice(1).map(t=>a.lineTo(this.camera.adjustX(t[0],this.canvas.width),this.camera.adjustY(t[1],this.canvas.height))),a.closePath(),a.shadowBlur=e,a.shadowColor=i,h&&(a.strokeStyle=h,a.stroke()),n&&(a.fillStyle=n,a.fill())}fill({path:t,x:e,y:i,fillColor:s,strokeColor:r,rotation:o,adjusted:n=!0,centered:h=!0,size:l}){n&&(e=this.camera.adjustX(e,this.canvas.width),i=this.camera.adjustY(i,this.canvas.height)),o&&(a.translate(e,i),a.rotate(o),a.translate(-1*e,-1*i)),a.translate(e,i),h||a.translate(-l/2,-l/2+.5),s&&(a.fillStyle=s,a.fill(t)),r&&(a.strokeStyle=r,a.fillStyle=s||"#131",a.fill(t),a.stroke(t))}emoji({emoji:t,x:e,y:i,adjusted:s=!0}){s&&(e=this.camera.adjustX(e,this.canvas.width),i=this.camera.adjustY(i,this.canvas.height)),a.font="4px serif",a.fillText(t,e,i)}hitbox({x:t,y:e,size:i}){this.rect({rect:[t-i/2,e-i/2,i,i],color:"#f00"})}}const o={A:[[,1],[1,,1],[1,,1],[1,1,1],[1,,1]],B:[[1,1],[1,,1],[1,1,1],[1,,1],[1,1]],C:[[1,1,1],[1],[1],[1],[1,1,1]],D:[[1,1],[1,,1],[1,,1],[1,,1],[1,1]],E:[[1,1,1],[1],[1,1,1],[1],[1,1,1]],F:[[1,1,1],[1],[1,1],[1],[1]],G:[[,1,1],[1],[1,,1,1],[1,,,1],[,1,1]],H:[[1,,1],[1,,1],[1,1,1],[1,,1],[1,,1]],I:[[1,1,1],[,1],[,1],[,1],[1,1,1]],J:[[1,1,1],[,,1],[,,1],[1,,1],[1,1,1]],K:[[1,,,1],[1,,1],[1,1],[1,,1],[1,,,1]],L:[[1],[1],[1],[1],[1,1,1]],M:[[1,1,1,1,1],[1,,1,,1],[1,,1,,1],[1,,,,1],[1,,,,1]],N:[[1,,,1],[1,1,,1],[1,,1,1],[1,,,1],[1,,,1]],O:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],P:[[1,1,1],[1,,1],[1,1,1],[1],[1]],Q:[[0,1,1],[1,,,1],[1,,,1],[1,,1,1],[1,1,1,1]],R:[[1,1],[1,,1],[1,,1],[1,1],[1,,1]],S:[[1,1,1],[1],[1,1,1],[,,1],[1,1,1]],T:[[1,1,1],[,1],[,1],[,1],[,1]],U:[[1,,1],[1,,1],[1,,1],[1,,1],[1,1,1]],V:[[1,,,,1],[1,,,,1],[,1,,1],[,1,,1],[,,1]],W:[[1,,,,1],[1,,,,1],[1,,,,1],[1,,1,,1],[1,1,1,1,1]],X:[[1,,,,1],[,1,,1],[,,1],[,1,,1],[1,,,,1]],Y:[[1,,1],[1,,1],[,1],[,1],[,1]],Z:[[1,1,1,1,1],[,,,1],[,,1],[,1],[1,1,1,1,1]]," ":[[,,],[,,],[,,],[,,],[,,]],0:[[1,1,1],[1,,1],[1,,1],[1,,1],[1,1,1]],1:[[,1],[,1],[,1],[,1],[,1]],2:[[1,1,1],[0,0,1],[1,1,1],[1,0,0],[1,1,1]],3:[[1,1,1],[0,0,1],[1,1,1],[0,0,1],[1,1,1]],4:[[1,0,1],[1,0,1],[1,1,1],[0,0,1],[0,0,1]],5:[[1,1,1],[1,0,0],[1,1,1],[0,0,1],[1,1,1]],6:[[1,1,1],[1,0,0],[1,1,1],[1,0,1],[1,1,1]],7:[[1,1,1],[0,0,1],[0,0,1],[0,0,1],[0,0,1]],8:[[1,1,1],[1,0,1],[1,1,1],[1,0,1],[1,1,1]],9:[[1,1,1],[1,0,1],[1,1,1],[0,0,1],[1,1,1]]};let n=document.getElementById("c");class h{constructor(){this.canvas=n}initialize(){let t=document.querySelector("body"),e=e=>{t.clientWidth/t.clientHeight>1?(n.style.height="100vh")&&(n.style.width="auto"):(n.style.height="auto")&&(n.style.width="100vw")};e(),t.onresize=e}}var l=class{constructor(){document.addEventListener("keyup",t=>this.onKeyup(t)),document.addEventListener("keydown",t=>this.onKeydown(t)),this._pressed={},this.ENTER=[13],this.SPACE=[32],this.LEFT=[37,65],this.UP=[38,87],this.RIGHT=[39,68],this.DOWN=[40,83]}isDown(t){return t.some(t=>this._pressed[t])||!1}onKeydown(t){this._pressed[t.keyCode]=!0}onKeyup(t){delete this._pressed[t.keyCode]}},c=i(0),d=i.n(c);class f{constructor(){this.state={engine:!1}}engineOn(){}engineOff(){}playSound(t){let e=d()(t),i=new Audio;i.src=e,i.play()}mainLaser(){this.playSound([2,,.1749,,.3063,.713,.2,-.2645,,,,,,.0543,.1546,,,,1,,,,,.5])}secondaryLaser(){this.playSound([2,,.1426,,.2251,.7799,.2555,-.2285,,,,,,.7631,-.4501,,,,1,,,.0846,,.5])}missile(){this.playSound([3,,.0937,.571,.3803,.7495,,,,,,,,,,,,,1,,,,,.5])}projectileHit(){this.playSound([3,,.0867,,.2283,.2711,,-.6853,,,,,,,,,,,1,,,,,.5])}enemyLaser(){this.playSound([0,,.2934,.1381,.2143,.6919,.3422,-.2379,,,,,,.4281,-.6711,,,,1,,,.194,,.5])}}i(1);class p{constructor({x:t,y:e,maxDx:i,maxDy:s,grav:a}){this.x=t,this.y=e,this.dx=0,this.dy=0,this.maxDx=i,this.maxDy=s,this.grav=a}}var u=class extends p{constructor(t,e,i,s,a){super({x:t,y:e,grav:.1}),this.dx=i,this.dy=s,this.color=a,this.stuck=!1}stick(){this.stuck=!0}tick(){this.stuck||(this.x+=this.dx,this.dy+=this.grav,this.y+=this.dy)}draw(t){t.rect({fillColor:this.color,rect:[this.x,this.y,1,1]})}};var m=class{constructor({x:t,y:e,facing:i},{color:s,speed:a,spreadX:r=0,spreadY:o=0,lift:n=0,grav:h=0,damage:l,damageMod:c,explosion:d,blood:f,size:p,emoji:u}){this.size=p||1,this.x=t-this.size/2,this.y=e,this.dx=i*a+(Math.random()-r/2)*r,this.dy=(Math.random()-o/2)*o-n,this.grav=h,this.color=s,this.explosion=d||1,this.lifespan=0,this.shouldDie=!1,this.exploding=!1,this.lifeleft=null,this.damage=l,this.damageMod=c||1,this.blood=f,this.emoji=u}destroy(){this.exploding=!0,this.lifeleft=2}tick(){this.lifespan+=1,this.lifeleft&&(this.lifeleft-=1,0===this.lifeleft&&(this.shouldDie=!0)),this.exploding||(this.x+=this.dx,this.dy+=this.grav,this.y+=this.dy)}draw(t){this.exploding?t.arc({arc:[this.x,this.y,2/this.lifeleft*this.explosion,0,2*Math.PI],fillColor:"#ff8",shadowBlur:10,shadowColor:"#ff0"}):this.emoji?t.emoji({x:this.x,y:this.y,emoji:this.emoji}):1===this.size?t.rect({fillColor:this.color(),rect:[this.x,this.y,this.size,this.size]}):t.arc({arc:[this.x,this.y,this.size,0,2*Math.PI],fillColor:this.color(),shadowBlur:this.size,shadowColor:"#ff0"})}};var y=class{constructor({name:t,cooldown:e,cooldownMod:i=1,payloadCount:s,knockback:a,shake:r,projectileConfig:o}){this.name=t,this.cooldown=e,this.cooldownMod=i,this.payloadCount=s,this.knockback=a,this.shake=r,this.projectileConfig=o,this.ticksSinceLastFired=e}tick(t,e,i,s){return this.ticksSinceLastFired+=1,this.cooldown*this.cooldownMod<this.ticksSinceLastFired&&t?(this.fire(e,i),this.shake&&s.shake(this.shake.force,this.shake.duration),this.knockback):0}fire(t,e){this.ticksSinceLastFired=0;for(let i=0;i<this.payloadCount;i++){const i=new m(e,this.projectileConfig);t.add(i)}}};const g={name:"Debug Pistol",cooldown:2,payloadCount:1,knockback:0,projectileConfig:{color:()=>"#eee",speed:3,spreadX:0,spreadY:.15,damage:100,blood:5}},x={name:"Pistol",cooldown:10,payloadCount:1,knockback:0,projectileConfig:{color:()=>"#eee",speed:3,spreadX:0,spreadY:.15,damage:10,blood:5}},w={name:"Minigun",cooldown:2,payloadCount:1,knockback:.5,shake:{force:1,duration:1},projectileConfig:{color:()=>"#fff",speed:4,spreadX:1,spreadY:.3,damage:2,blood:5}},v={name:"Assault Rifle",cooldown:8,payloadCount:1,knockback:.1,projectileConfig:{color:()=>"#fff",speed:3,spreadX:0,spreadY:.3,damage:4,blood:5}},k={name:"Shotgun",cooldown:40,payloadCount:12,knockback:2,shake:{force:2,duration:8},projectileConfig:{color:()=>"yellow",speed:4,spreadX:.7,spreadY:1,damage:1,blood:5}},j={name:"Grenade",cooldown:40,payloadCount:1,knockback:0,projectileConfig:{emoji:"💣",speed:2,lift:4,grav:.3,explosion:3,size:3,damage:20,blood:5}},b=[{prefix:"Rainbow",projectileConfig:{color:()=>["#FF0000","#FFAC00","#FFF100","#0BFF00","#00F6FF"][Math.floor(6*Math.random())]}},{prefix:"Collosal",cooldownMod:3,projectileConfig:{color:()=>"yellow",damageMod:3,explosion:5,size:5}},{prefix:"Shrimp",projectileConfig:{emoji:"🍤",explosion:3,size:3}},{prefix:"Bomb",projectileConfig:{emoji:"💣",explosion:3,size:3}}];var C=class{constructor(){}create(t){const e=Math.random()>.9?b[Math.floor(Math.random()*b.length)]:{projectileConfig:{}},i={...t.projectileConfig,...e.projectileConfig},s={...t,...e,projectileConfig:i,name:`${e.prefix?e.prefix+" ":""}${t.name}`};return new y(s)}random(){const t=[x,v,w,k,j],e=t[Math.floor(Math.random()*t.length)];return this.create(e)}};const M=(t,e,i)=>Math.min(Math.max(e,t),i);var S=class extends p{constructor(t,e,i,s){super({x:t,y:e,maxDx:1,maxDy:2,grav:.15}),this.size=8,this.acc=.05,this.dcc=.8,this.airDcc=1,this.grounded=!0,this.facing=s||1,this.lifespan=0,this.holdJump=0,this.airtime=0,this.jumpHoldTime=0,this.jumpSpeed=2,this.maxJumpPress=12,this.health=i,this.maxHealth=i;const a=new C;this.weapon=a.random()}static tick({camera:t,map:e,projectiles:i,presses:s,immobile:a}){this.lifespan+=1;const{left:r,right:o,up:n,space:h}=s;this.holdJump=n?this.holdJump+1:0;const l={x:this.x+(1===this.facing?this.size-1:1),y:this.y+5,facing:this.facing},c=this.weapon.tick(h,i,l,t);if(r?(this.dx-=this.acc,this.facing=-1):o?(this.dx+=this.acc,this.facing=1):this.grounded?this.dx*=this.dcc:this.dx*=this.airDcc,Math.abs(this.dx)<.01&&(this.dx=0),this.dx=M(this.dx,-this.maxDx,this.maxDx),this.dx+=c*-this.facing,this.x+=a?0:this.dx,((t,e)=>{let{x:i,y:s,dx:a,size:r}=t;if(a>0){const a=e.getTile(i+r,s),o=e.getTile(i+r,s+r-1);(a||o)&&(t.dx=0,t.x=8*Math.floor(i/8))}else if(a<0){const a=e.getTile(i,s),o=e.getTile(i,s+r-1);(a||o)&&(t.dx=0,t.x=8*Math.floor(i/8)+8)}})(this,e),n){const t=this.grounded||this.airtime<5,e=this.holdJump<10;(this.jumpHoldTime>0||t&&e)&&(this.jumpHoldTime+=1,this.jumpHoldTime<this.maxJumpPress&&(this.dy=-this.jumpSpeed))}else this.jumpHoldTime=0;this.dy+=this.grav,this.dy=M(this.dy,-this.maxDy,this.maxDy),this.y+=this.dy,((t,e)=>{const{x:i,y:s,dy:a,size:r}=t;if(a<0)return!1;const o=e.getTile(i,s+r),n=e.getTile(i+r-1,s+r);return!(!o&&!n)&&(t.dy=0,t.y=8*Math.floor(s/8),t.grounded=!0,t.airtime=0,!0)})(this,e)||(this.grounded=!1,this.airtime+=1),((t,e)=>{const{x:i,y:s,size:a}=t,r=e.getTile(i,s),o=e.getTile(i+a-1,s);(r||o)&&(t.dy=0,t.y=8*Math.floor((s-a/2)/8)+8+a/2,t.jumpHoldTime=0)})(this,e)}static takeDamage(t){this.health-=t}};const z=(t,e)=>t.x<e.x+e.size&&t.x+t.size>e.x&&t.y<e.y+e.size&&t.y+t.size>e.y;class T{handleProjectile(t,e,i){if(t.exploding||e.exploding||!z(t,e))return!1;t.destroy(),S.takeDamage.call(e,t.damage*t.damageMod);for(let s=0;s<t.blood;s++)i.add(new u(t.x,t.y,t.dx/3*Math.random()*2,-1.5*Math.random(),e.bloodColor));return!0}handlePackage(t,e,i){z(t,e)&&(e.weapon=t.weapon,i.packages=i.packages.filter(e=>e!==t))}}let O=[],P=[];function L(t,e){return(t%e+e)%e}class _{constructor({cw:t,ch:e}){for(let i=0;i<10;i++)O.push([Math.random()*t,Math.random()*e,Math.random()]);for(let i=0;i<10;i++)P.push([Math.random()*t,Math.random()*e,Math.random()])}draw(t){t.draw(()=>{t.drawBackground("#111"),O.map(e=>t.rect({rect:[L(e[0]-t.camera.x/(3+3*e[2]),t.canvas.width),L(e[1]-t.camera.y/(3+3*e[2]),t.canvas.height),1,1],fillColor:"rgba(255, 255, 255, 0.6)",adjusted:!1})),P.map(e=>t.rect({rect:[L(e[0]-t.camera.x/(7+3*e[2]),t.canvas.width),L(e[1]-t.camera.y/(7+3*e[2]),t.canvas.height),1,1],fillColor:"rgba(255, 255, 255, 0.3)",adjusted:!1}))})}}const E=[{concurrentEnemies:5,enemyCount:10,spawnPoint:[40,10]}];var F=class{initializeLevel(t,{player:e,enemies:i,chunks:s,spurts:a,packages:r}){this.level=E[t]||E[0],this.level.level=t,e.health=e.maxHealth,e.x=this.level.spawnPoint[0],e.y=this.level.spawnPoint[1],s.chunks=[],a.spurts=[],r.packages=[],i.initialize(this.level),this.levelOverTimer=0,this.levelFadeIn=0}tick({player:t,enemies:e,chunks:i,spurts:s,packages:a}){this.levelFadeIn+=1,e.enemies.length<=0&&(this.levelOverTimer+=1),this.levelOverTimer>80*(6+(1===this.level.level?3:0))&&this.initializeLevel(this.level.level+1,{player:t,enemies:e,chunks:i,spurts:s,packages:a})}draw(t){this.levelOverTimer>80&&t.rect({adjusted:!1,fillColor:"rgba(0,0,0,0.9)",rect:[20,20,88,42]}),this.levelOverTimer>160&&t.text({text:`level ${this.level.level} complete`,size:1,x:32-(this.level.level>=10?2:0),y:30}),this.levelOverTimer>240&&t.text({text:this.level.enemyCount+" aliens defeated",size:1,x:31-(this.level.enemyCount>=10?2:0),y:45}),1===this.level.level&&this.levelOverTimer>400&&(t.rect({adjusted:!1,fillColor:"#000",rect:[14,68,100,42]}),t.text({text:"Welcome",size:2,x:32,y:74}),t.text({text:"to space",size:2,x:33,y:94})),this.levelFadeIn<200&&t.rect({adjusted:!1,fillColor:`rgba(0,0,0,${1-this.levelFadeIn/200})`,rect:[0,0,128,128]})}};const D=[[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]],H=["ffffffffff","8000000001","8000000001","8000000001","8000000001","87007e00e1","8000000001","8000000001","f03c003c0f","8000000001","8000000001","8300c300c1","8000000001","8000000001","8fc07e03f1","8000000001","8000000001","e00f00f007","8000000001","8000000001","ffffffffff"];class B{constructor(t){this.drawer=null,this.tileSize=8,this.mapTiles=[],this.mapHeight=0,this.mapLength=0;(t=>{t.map(t=>parseInt(t.join(""),2).toString(16))})(D);const e=H.map(t=>parseInt(t,16).toString(2).split("").map(Number));this.loadLevel(e),this.mapWidthPixels=this.tileSize*this.mapLength,this.mapHeightPixels=this.tileSize*this.mapHeight}loadLevel(t){this.mapTiles=t,this.mapHeight=t.length,this.mapLength=t[0].length}getTile(t,e){const i=this.mapTiles[Math.floor(e/this.tileSize)];return i?i[Math.floor(t/this.tileSize)]:1}draw(t){this.drawer=this.drawer||t,this.mapTiles.forEach((e,i)=>{e.forEach((e,s)=>{1===e&&t.rect({fillColor:"darkblue",rect:[s*this.tileSize,i*this.tileSize,this.tileSize,this.tileSize]})})})}}const R=(t,e,i,s,a={})=>{const{skin:r,hair:o,horns:n,eyes:h,body:l}=s;let c=[],d=[[r,[1,3,5,3]],[h,[2,4,1,1]],[h,[5,4,1,1]]];c=c.concat(d);let f=[[l,[1,7,3,1]],[r,[1,7,1,1]],[r,[4,7,1,1]]];return a.bodyless||(c=c.concat(f)),o&&(c=c.concat([[o,[2,1,4,1]],[o,[1,2,6,1]]])),n&&(c=c.concat([[n,[1,2,1,1]],[n,[5,2,1,1]]])),c=c.map(([s,a])=>({c:s,r:[1===i?t+a[0]:8-(a[0]+a[2])+t,e+a[1],a[2],a[3]]})),c};var A=class{constructor(){}tick(t,e){this.weapon=t.weapon.name,this.health=t.health,this.maxHealth=t.maxHealth,this.enemyCount=e.enemyCount+e.enemies.length}draw(t){t.text({text:this.weapon,size:1,x:2,y:117});R(113,115,1,{skin:"red",horns:"red",eyes:"yellow",body:"orange"},{bodyless:!0}).forEach(({c:e,r:i})=>t.rect({adjusted:!1,fillColor:e,rect:i})),t.text({text:""+this.enemyCount,size:1,x:120,y:117}),t.rect({adjusted:!1,fillColor:`rgb(${255*(1-this.health/this.maxHealth)}, ${this.health/this.maxHealth*255}, 0)`,rect:[2,124,this.health/this.maxHealth*124,2]})}};class I extends S{constructor(t,e,i){super(t,e,i),this.bloodColor="red",this.weapon=(new C).create(g)}tick({camera:t,keyboard:e,map:i,projectiles:s}){S.tick.call(this,{camera:t,map:i,projectiles:s,presses:{left:e.isDown(e.LEFT),right:e.isDown(e.RIGHT),up:e.isDown(e.UP),space:e.isDown(e.SPACE)}})}draw(t){R(this.x,this.y,this.facing,{skin:"#FFCCAA",hair:"#FFA300",eyes:"#008751",body:"#29ADFF"}).forEach(({c:e,r:i})=>t.rect({fillColor:e,rect:i}))}}var W=class extends p{constructor(t,e,i,s,a){super({x:t,y:e}),this.dx=i,this.dy=s,this.grav=.1,this.color=a,this.stuck=!1}stick(){this.stuck=!0}tick(){this.stuck||(this.x+=this.dx,this.dy+=this.grav,this.y+=this.dy)}draw(t){t.rect({fillColor:this.color,rect:[this.x,this.y-2,2,3]}),[[1,2],[2,3]].forEach(([e,i])=>{t.rect({fillColor:this.color,rect:[this.x+e-2,this.y+i-2,1,1]})}),[[2,0],[1,1],[0,2],[1,3]].forEach(([e,i])=>{t.rect({fillColor:"#FF77A8",rect:[this.x+e-2,this.y+i-2,1,1]})})}};var X=class extends S{constructor(t,e,i,s,a,r){super(t,e,i,s),this.colors=a,this.bloodColor="#32CD32",this.presses={left:!1,right:!1,up:!1,space:!1},this.persona=r}tick({camera:t,map:e,projectiles:i}){const[s,a]=this.persona({enemy:this,map:e});s&&(this.presses=s),S.tick.call(this,{camera:t,map:e,projectiles:i,presses:this.presses,immobile:a})}draw(t){this.health<this.maxHealth&&t.rect({fillColor:"white",rect:[this.x,this.y-1,this.health/this.maxHealth*8,1]}),R(this.x,this.y,this.facing,this.colors).forEach(({c:e,r:i})=>t.rect({fillColor:e,rect:i}))}};const Y=({enemy:t,map:e})=>{if(t.holdLeft||t.holdRight||(t.holdRight=!0),t.x<16&&(t.holdLeft=!1,t.holdRight=!0),t.x>288&&(t.holdLeft=!0,t.holdRight=!1),t.jumpTimer>0)t.jumpTimer-=1;else{const i=e.getTile(t.x+24*t.facing,t.y-16);t.jumpTimer=i&&Math.random()<.1?30:0}return[{left:t.holdLeft,right:t.holdRight,up:t.jumpTimer>0},!1]},U={skin:"red",horns:"red",eyes:"yellow",body:"orange"};var J=class{constructor(){this.enemies=[],this.enemyCount=0}initialize({concurrentEnemies:t,enemyCount:e}){this.concurrentEnemies=t,this.enemyCount=e;for(let e=0;e<t;e++)this.enemies.push(new X(249,20,100,Math.random()>.5?1:-1,U,Y)),this.enemyCount-=1}tick({camera:t,map:e,projectiles:i,spurts:s,chunks:a}){this.enemies.forEach(s=>{s.tick({camera:t,map:e,projectiles:i})}),this.enemies=this.enemies.reduce((t,e)=>{if(e.health<=0){for(let t=0;t<100;t++)s.add(new u(e.x,e.y,5*Math.random()-2.5,5*Math.random()-5,e.bloodColor));for(let t=0;t<5;t++)a.chunks.push(new W(e.x,e.y-2,3*Math.random()-1.5,3*Math.random()-1.5,"red"));this.enemies.length<=this.concurrentEnemies&&this.enemyCount>0&&(t.push(new X(249,20,100,-1,U,Y)),this.enemyCount-=1)}else t.push(e);return t},[])}draw(t){this.enemies.forEach(e=>e.draw(t))}};var q=class{constructor(){this.projectiles=[]}add(t){this.projectiles.push(t)}tick(){this.projectiles.map(t=>t.tick()),this.projectiles=this.projectiles.filter(t=>!t.shouldDie)}draw(t){this.projectiles.map(e=>e.draw(t))}};var G=class{constructor(){this.spurts=[]}add(t){this.spurts.push(t)}tick(){this.spurts.length>1e3&&(this.spurts=this.spurts.slice(this.spurts.length-1e3)),this.spurts.forEach(t=>t.tick())}draw(t){this.spurts.forEach(e=>e.draw(t))}};var K=class extends p{constructor(t,e){super({x:t,y:e});const i=new C;this.weapon=i.random(),this.size=5,this.grav=.04,this.dy=.4,this.landed=!1}tick(){this.landed||(this.dy+=this.grav,this.y+=this.dy)}draw(t){t.rect({fillColor:"#C3732A",rect:[this.x,this.y,5,5]}),[[0,1],[1,0],[2,0],[3,0],[4,1],[3,2],[2,2],[2,4]].forEach(([e,i])=>t.rect({fillColor:"yellow",rect:[this.x+e,this.y+i,1,1]}))}};var N=class{constructor(){this.packages=[new K(138,20)],this.lifespan=0}tick(t,e){if(1!==e){if(this.lifespan+=1,!(this.lifespan%500)){let e=Math.random()*t.mapWidthPixels,i=Math.random()*t.mapHeightPixels;for(;t.getTile(e,i);)e=Math.random()*t.mapWidthPixels,i=Math.random()*t.mapHeightPixels;this.packages.push(new K(e,i))}this.packages.forEach(t=>t.tick())}}draw(t){this.packages.forEach(e=>e.draw(t))}};window.onload=()=>{let t=new h,e=new r(t.canvas),i=new l,s=(new f,new T),a=new _({cw:t.canvas.width,ch:t.canvas.height}),o=new F,n=new B(o.level),c=new A,d=new I(10,10,1e3),p=new J,u=new q,m=new G,y={chunks:[]},g=new N;t.initialize(),o.initializeLevel(1,{player:d,enemies:p,chunks:y,spurts:m,packages:g});let x=(new Date).getTime(),w=0,v=0,k=()=>{j(),b(),C()},j=()=>{const{camera:t}=e;o.tick({player:d,enemies:p,chunks:y,spurts:m,packages:g}),d.tick({camera:t,keyboard:i,map:n,projectiles:u}),p.tick({camera:t,map:n,projectiles:u,spurts:m,chunks:y}),t.tick({player:d,map:n}),u.tick(),m.tick(),y.chunks.length>1e3&&(y.chunks=y.chunks.slice(y.chunks.length-1e3)),y.chunks.forEach(t=>t.tick()),c.tick(d,p),g.tick(n)},b=()=>{u.projectiles.filter(t=>!t.exploding&&t.lifespan>2).forEach(t=>{n.getTile(t.x,t.y)&&t.destroy(),p.enemies.concat([d]).forEach(e=>{s.handleProjectile(t,e,m)})}),m.spurts.concat(y.chunks).forEach(t=>{n.getTile(t.x,t.y)&&t.stick()}),g.packages.forEach(t=>{n.getTile(t.x,t.y+t.size)&&(t.landed=!0),p.enemies.concat([d]).forEach(e=>{s.handlePackage(t,e,g)})})},C=()=>{window.requestAnimationFrame(k),w=(new Date).getTime(),v=w-x,v>1e3/60&&(e.clearBackground(),M().map(t=>t.draw(e)),x=w-v%(1e3/60))},M=()=>[a,n,p,d,g,u,m,...y.chunks,c,o];document.querySelector("div").className+=" loaded",k()}}]);