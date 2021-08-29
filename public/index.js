!function(){"use strict";let t=null;class e{constructor(e){this.canvas=e,t=this.canvas.getContext("2d"),this.camera={x:0,y:0}}cameraAdjustX(t){return t-this.camera.x+this.canvas.width/2}cameraAdjustY(t){return t-this.camera.y+this.canvas.height/2}draw(e){t.save(),e(),t.restore()}clearBackground(){t.clearRect(0,0,this.canvas.width,this.canvas.height)}drawBackground(e){t.fillStyle=e,t.fillRect(0,0,this.canvas.width,this.canvas.height)}rect({rect:e,fillColor:a,strokeColor:r,shadowBlur:n,shadowColor:i,lineWidth:s=1,adjusted:o=!0,rotation:l,size:c}){o&&(e[0]=this.cameraAdjustX(e[0]),e[1]=this.cameraAdjustY(e[1])),l&&(t.translate(e[0]+c/2,e[1]+c/2),t.rotate(l),t.translate(-1*e[0]-c/2,-1*e[1]-c/2)),t.shadowBlur=n,t.shadowColor=i,a&&(t.fillStyle=a,t.fillRect(e[0],e[1],...e.slice(2))),r&&(t.strokeStyle=r,t.lineWidth=s,t.strokeRect(e[0],e[1],...e.slice(2)))}arc({arc:e,fillColor:a,strokeColor:r,shadowBlur:n,shadowColor:i}){t.beginPath(),t.arc(this.cameraAdjustX(e[0]),this.cameraAdjustY(e[1]),...e.slice(2)),t.shadowBlur=n,t.shadowColor=i,a&&(t.fillStyle=a,t.fill()),r&&(t.strokeStyle=r,t.stroke())}text({text:e,x:a,y:r,size:n="14px",font:i="Courier",letterSpacing:s=!1,adjusted:o=!0,filter:l,fillColor:c}){o&&(a=this.cameraAdjustX(a),r=this.cameraAdjustY(r)),l&&(t.filter=l),t.font=n+" "+i,e=s?e.split("").join(" "):e,t.fillStyle=c||"#fff",t.fillText(e,a,r)}lines({lines:e,shadowBlur:a=0,shadowColor:r,rotation:n,x:i,y:s,fillColor:o,strokeColor:l}){n&&(t.translate(this.cameraAdjustX(i),this.cameraAdjustY(s)),t.rotate(n),t.translate(-1*this.cameraAdjustX(i),-1*this.cameraAdjustY(s))),t.beginPath(),t.moveTo(this.cameraAdjustX(e[0][0]),this.cameraAdjustY(e[0][1])),e.slice(1).map(e=>t.lineTo(this.cameraAdjustX(e[0]),this.cameraAdjustY(e[1]))),t.closePath(),t.shadowBlur=a,t.shadowColor=r,l&&(t.strokeStyle=l,t.stroke()),o&&(t.fillStyle=o,t.fill())}fill({path:e,x:a,y:r,fillColor:n,strokeColor:i,rotation:s,adjusted:o=!0,centered:l=!0,size:c}){o&&(a=this.cameraAdjustX(a),r=this.cameraAdjustY(r)),s&&(t.translate(a,r),t.rotate(s),t.translate(-1*a,-1*r)),t.translate(a,r),l||t.translate(-c/2,-c/2+.5),n&&(t.fillStyle=n,t.fill(e)),i&&(t.strokeStyle=i,t.fillStyle=n||"#131",t.fill(e),t.stroke(e))}hitbox({x:t,y:e,size:a}){this.rect({rect:[t-a/2,e-a/2,a,a],color:"#f00"})}}let a=document.getElementById("c");class r{constructor(){this.canvas=a}initialize(){let t=document.querySelector("body"),e=e=>{t.clientWidth/t.clientHeight>640/480?(a.style.height="100vh")&&(a.style.width="auto"):(a.style.height="auto")&&(a.style.width="100vw")};e(),t.onresize=e}}class n{constructor(){document.addEventListener("keyup",t=>this.onKeyup(t)),document.addEventListener("keydown",t=>this.onKeydown(t)),this._pressed={},this.ENTER=13,this.SPACE=32,this.LEFT=37,this.UP=38,this.RIGHT=39,this.DOWN=40}isDown(t){return this._pressed[t]}onKeydown(t){this._pressed[t.keyCode]=!0}onKeyup(t){delete this._pressed[t.keyCode]}}var i={songData:[{i:[0,100,128,0,1,201,128,0,0,0,0,8,28,0,0,0,194,4,1,3,25,191,115,244,147,6,43,4],p:[5,1,2,2,1,1,1,1,3,4,1,2,1,2,1,2,,,7,7,7,7,7,7,7,7],c:[{n:[132,132,134,134,135,135,132,132,137,137,135,135,134,134,135,135,139,139,137,137,135,135,137,137,134,,133,,132,,131],f:[21,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,48]},{n:[132,132,134,134,135,135,132,132,137,137,135,135,134,134,135,135,139,139,137,137,135,135,137,137,139,139,135,135,134,134,130,130],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,11,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,31]},{n:[],f:[]},{n:[159,,,,,,,,158,,,,,,,,157,,,,,,,,156,155,154,153,152,151,150,149],f:[13,,,,,,,,,,,,,,,,,,,,,,,,13,,13,,13,,13,11,29,,,,,,,,,,,,,,,,,,,,,,,,32,,41,,29,,25,15]},{n:[132,132,134,134,135,135,132,132,137,137,135,135,134,134,135,135,139,139,137,137,135,135,137,137,139,139,135,135,134,134,130,130],f:[13,11,21,17,,,,,,,,,,,,,,,,,,,,,,,,,,,,17,29,,25,113,,,,,,,,,,,,,,,,,,,,,,,,,,,,194]},{n:[120,,,,,,,,132,,,,,,,,120,,,,,,,,108],f:[]},{n:[132,144,134,146,132,144,135,147,132,144,137,149,132,144,139,151,140,152,139,151,137,149,139,151,138,150,137,149,135,147,134,146],f:[]}]},{i:[0,255,117,1,0,255,110,0,1,0,4,6,35,0,0,0,0,0,0,2,14,1,1,39,76,5,0,0],p:[,,1,3,1,3,1,3,2,,,,1,3,1,3,1,3,,,1,3,1,3,1,3],c:[{n:[147,,,,,,147,,,,147,,,,,,147,,,,,,147,,,,147,,,,147],f:[]},{n:[147],f:[]},{n:[147,,,,,,147,,,,147,,,,147,,147,,,,,,147,,,,147,,,,147,147],f:[]}]},{i:[0,0,140,0,0,0,140,0,0,60,4,10,68,0,0,0,187,5,0,1,239,135,0,32,108,5,16,4],p:[,,1,1,2,3,2,3,4,,,,2,3,2,3,2,3,,,5,5,5,5,5,5],c:[{n:[,,,,147,,,,,,,,148,,,,,,,,147,,,,,,,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[,,,,147,,,147,,,,,148,,,,,,,,147,,,147,,,147,,,147,147,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]},{n:[147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,68]},{n:[147,,,147,,,147,,147,,,147,,147,,147,147,,,147,,,147,,147,,,147,,147,,147],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,35]}]},{i:[2,192,128,0,2,192,140,18,0,0,107,115,138,0,0,0,136,5,1,2,8,93,22,56,148,5,85,8],p:[3,,2,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2],c:[{n:[120],f:[]},{n:[120],f:[]},{n:[120],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,56]}]},{i:[3,0,127,0,3,68,127,0,1,218,11,0,40,0,0,1,55,4,1,2,67,115,124,190,67,6,39,1],p:[,,,2,1,2,1,2,3,,,,1,2,1,2,1,2,,,1,4,1,4,1,4],c:[{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147],f:[]},{n:[,,,,147,,,,,,147,,147,,,,,,,,147,,,,,,,,147],f:[]},{n:[147],f:[]},{n:[,,,,147,,,,,,,,147,,,,,,,,147,,,,,,,,147,,,147],f:[]}]},{i:[3,91,128,0,0,95,128,12,0,0,12,0,67,0,0,0,0,0,0,2,255,15,0,32,83,3,51,4],p:[,,,,1,2,1,2,1,2,,,1,2,3,2,1,2,,,,,5,4,5,4],c:[{n:[156,,,164,,,163,,161,,,,,,,,,,158,,159,,161,,159,,158,,159,,154,,159],f:[5,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[144,,,147,,,149,,151,,,,,,,,,,149,,151,,152,,151,,151,,147,,147,,139],f:[]},{n:[156,,,156,,,156,,154,,,154,,,154,,152,,,152,,,152,,151,,,147,,,146,,,,151,,,151,,151,,,146,,,146,,146,,,144,,,144,,144,,,142,,,139,,137],f:[5,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,3]},{n:[163,,164,,166,,163,,163,,164,,166,,163,,163,,164,,166,,163,,163,,164,,166,,163],f:[13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,25]},{n:[168,,170,,171,,168,,168,,170,,171,,168,,159,,159,,158,,158,,157,,157,,156,,156],f:[,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,13,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]}]},{i:[0,146,140,0,1,224,128,3,0,0,61,0,63,0,0,3,179,5,1,3,37,162,0,67,150,3,37,2],p:[,1,,,,,,,,,1,2,3,,1,2,1,2,3,,4,5],c:[{n:[,,,,,,,,,,,,,,,,,,,,,,,,122,,121,,120,,119],f:[]},{n:[,,,,,,,,,,,,110,109,,,,,,,,,,,,,,,132,144,120,108],f:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,11,,,,95,,,,,,,,,,,,,,,,,,,,,,,,,,,,29]},{n:[123],f:[24,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,24,52,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,67]},{n:[120,,,,,,120,,120,,,,,,,,,,,,,,,,,,,,,,,,123,,,,,,123,,123,,,,,,,,,,,,,,,,,,,,,,,,125,,,,,,125,,125],f:[11,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,95]},{n:[120,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,123,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,125],f:[]}]},{i:[2,138,116,0,2,138,128,4,0,0,47,48,107,124,3,0,139,4,1,3,64,160,3,32,147,4,121,5],p:[,,,,,,,,1,,,,,,,,,,1],c:[{n:[156,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,168],f:[]}]}],rowLen:5513,patternLen:32,endPattern:25,numChannels:8};let s=new function(){var t,e,a,r,n,i=function(t){return Math.sin(6.283184*t)},s=function(t){return.003959503758*Math.pow(2,(t-128)/12)},o=function(t,e,a){var r,n,i,o,c,h,d,f=l[t.i[0]],u=t.i[1],w=t.i[3],m=l[t.i[4]],y=t.i[5],v=t.i[8],p=t.i[9],g=t.i[10]*t.i[10]*4,x=t.i[11]*t.i[11]*4,A=t.i[12]*t.i[12]*4,C=1/A,j=t.i[13],k=a*Math.pow(2,2-t.i[14]),S=new Int32Array(g+x+A),M=0,B=0;for(r=0,n=0;r<g+x+A;r++,n++)n>=0&&(n-=k,h=s(e+(15&(j=j>>8|(255&j)<<4))+t.i[2]-128),d=s(e+(15&j)+t.i[6]-128)*(1+8e-4*t.i[7])),i=1,r<g?i=r/g:r>=g+x&&(i-=(r-g-x)*C),o=h,w&&(o*=i*i),c=f(M+=o)*u,o=d,v&&(o*=i*i),c+=m(B+=o)*y,p&&(c+=(2*Math.random()-1)*p),S[r]=80*c*i|0;return S},l=[i,function(t){return t%1<.5?1:-1},function(t){return t%1*2-1},function(t){var e=t%1*4;return e<2?e-1:3-e}];this.init=function(i){t=i,e=i.endPattern,a=0,r=i.rowLen*i.patternLen*(e+1)*2,n=new Int32Array(r)},this.generate=function(){var s,c,h,d,f,u,w,m,y,v,p,g,x,A,C=new Int32Array(r),j=t.songData[a],k=t.rowLen,S=t.patternLen,M=0,B=0,E=!1,b=[];for(h=0;h<=e;++h)for(w=j.p[h],d=0;d<S;++d){var L=w?j.c[w-1].f[d]:0;L&&(j.i[L-1]=j.c[w-1].f[d+S]||0,L<16&&(b=[]));var T=l[j.i[15]],X=j.i[16]/512,Y=Math.pow(2,j.i[17]-9)/k,z=j.i[18],P=j.i[19],D=43.23529*j.i[20]*3.141592/44100,R=1-j.i[21]/255,I=1e-5*j.i[22],W=j.i[23]/32,K=j.i[24]/512,N=6.283184*Math.pow(2,j.i[25]-9)/k,_=j.i[26]/255,q=j.i[27]*k&-2;for(p=(h*S+d)*k,f=0;f<4;++f)if(u=w?j.c[w-1].n[d+f*S]:0){b[u]||(b[u]=o(j,u,k));var U=b[u];for(c=0,s=2*p;c<U.length;c++,s+=2)C[s]+=U[c]}for(c=0;c<k;c++)(v=C[m=2*(p+c)])||E?(g=D,z&&(g*=T(Y*m)*X+.5),B+=(g=1.5*Math.sin(g))*(x=R*(v-B)-(M+=g*B)),v=3==P?B:1==P?x:M,I&&(v=(v*=I)<1?v>-1?i(.25*v):-1:1,v/=I),E=(v*=W)*v>1e-5,A=v*(1-(y=Math.sin(N*m)*K+.5)),v*=y):A=0,m>=q&&(A+=C[m-q+1]*_,v+=C[m-q]*_),C[m]=0|A,C[m+1]=0|v,n[m]+=0|A,n[m+1]+=0|v}return++a/t.numChannels},this.createWave=function(){var t=44+2*r-8,e=t-36,a=new Uint8Array(44+2*r);a.set([82,73,70,70,255&t,t>>8&255,t>>16&255,t>>24&255,87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,255&e,e>>8&255,e>>16&255,e>>24&255]);for(var i=0,s=44;i<r;++i){var o=n[i];o=o<-32767?-32767:o>32767?32767:o,a[s++]=255&o,a[s++]=o>>8&255}return a},this.getData=function(t,e){for(var a=2*Math.floor(44100*t),r=new Array(e),i=0;i<2*e;i+=1){var s=a+i;r[i]=t>0&&s<n.length?n[s]/32768:0}return r}};s.init(i),s.init(i);let o=!1;setInterval((function(){if(!o&&(o=s.generate()>=1,o)){let t=s.createWave();postMessage(t)}}),10);let l=[],c=[];function h(t,e){return(t%e+e)%e}class d{constructor({cw:t,ch:e}){for(let a=0;a<100;a++)l.push([Math.random()*t,Math.random()*e,Math.random()]);for(let a=0;a<100;a++)c.push([Math.random()*t,Math.random()*e,Math.random()])}draw(t){t.draw(()=>{t.drawBackground("#111"),l.map(e=>t.rect({rect:[h(e[0]-t.camera.x/(3+3*e[2]),t.canvas.width),h(e[1]-t.camera.y/(3+3*e[2]),t.canvas.height),1,1],fillColor:"rgba(255, 255, 255, 0.6)",adjusted:!1})),c.map(e=>t.rect({rect:[h(e[0]-t.camera.x/(7+3*e[2]),t.canvas.width),h(e[1]-t.camera.y/(7+3*e[2]),t.canvas.height),1,1],fillColor:"rgba(255, 255, 255, 0.3)",adjusted:!1})),t.text({text:"back to earth",x:-145,y:-95,size:"36px",font:"serif",letterSpacing:!0}),t.text({text:"Arrow keys to move. SPACE to shoot.",x:-145,y:105}),t.text({text:"ENTER to land back on earth.",x:-115,y:130}),t.text({text:"Shoot things. Collect ore. Upgrade weapons.",x:-178,y:155})})}}console.log("bdts"),window.onload=()=>{let t=new r,a=new e(t.canvas);new n;t.initialize();let i=(new Date).getTime(),s=0,o=0,l=()=>{c()},c=()=>{window.requestAnimationFrame(l),s=(new Date).getTime(),o=s-i,o>16.666666666666668&&(a.clearBackground(),h().map(t=>t.draw(a)),i=s-o%16.666666666666668)},h=()=>[f],f=new d({cw:t.canvas.width,ch:t.canvas.height});document.querySelector("main").className+=" loaded",l()}}();
