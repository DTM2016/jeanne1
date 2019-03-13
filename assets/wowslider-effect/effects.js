// blur
// options.noCanvas - stop using canvas
function ws_blur(n,T,R){function U(m,p,e){wowAnimate(m.css({visibility:"visible"}),{opacity:0},{opacity:1},p,e)}function V(m,p,e){wowAnimate(m,{opacity:1},{opacity:0},p,e)}function S(m,p,e,n){var q=(parseInt(m.parent().css("z-index"))||0)+1;if(H){q=n.getContext("2d");q.drawImage(m.get(0),0,0,p.width,p.height);var g;a:if(m=n.width,p=n.height,isNaN(e)||1>e)g=void 0;else{e|=0;try{g=q.getImageData(0,0,m,p)}catch(D){console.log("error:unable to access image data: "+D);g=!1;break a}var d=g.data,z,G,a,c,
f,E,h,k,l,A,B,C,r,t,u,w,x,y,I;z=e+e+1;var P=m-1,J=p-1,v=e+1,K=v*(v+1)/2,L=new Q,b=L;for(a=1;a<z;a++)if(b=b.next=new Q,a==v)var O=b;b.next=L;b=a=null;E=f=0;var M=Z[e],N=aa[e];for(G=0;G<p;G++){r=t=u=h=k=l=0;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;for(a=1;a<v;a++)c=f+((P<a?P:a)<<2),h+=(b.r=w=d[c])*(I=v-a),k+=(b.g=x=d[c+1])*I,l+=(b.b=y=d[c+2])*I,r+=w,t+=x,u+=y,b=b.next;a=L;b=O;for(z=0;z<m;z++)d[f]=h*M>>N,d[f+1]=k*M>>N,d[f+2]=l*M>>
N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=E+((c=z+e+1)<P?c:P)<<2,r+=a.r=d[c],t+=a.g=d[c+1],u+=a.b=d[c+2],h+=r,k+=t,l+=u,a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=4;E+=m}for(z=0;z<m;z++){t=u=r=k=l=h=0;f=z<<2;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;c=m;for(a=1;a<=e;a++)f=c+z<<2,h+=(b.r=w=d[f])*(I=v-a),k+=(b.g=x=d[f+1])*I,l+=(b.b=y=d[f+2])*I,r+=w,t+=x,u+=y,b=b.next,a<J&&(c+=m);f=z;a=L;b=O;for(G=0;G<p;G++)c=f<<2,
d[c]=h*M>>N,d[c+1]=k*M>>N,d[c+2]=l*M>>N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=z+((c=G+v)<J?c:J)*m<<2,h+=r+=a.r=d[c],k+=t+=a.g=d[c+1],l+=u+=a.b=d[c+2],a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=m}q.putImageData(g,0,0);g=!0}return g?F(n):0}n=F("<div></div>").css({position:"absolute","z-index":q,left:0,top:0,display:"none"}).css(p).appendTo(X);g=(Math.sqrt(5)+1)/2;O=1-g/2;for(c=0;O*c<e;c++)d=Math.PI*g*c,J=O*c+1,p=J*Math.cos(d),d=J*Math.sin(d),F(document.createElement("img")).attr("src",
m.attr("src")).css({opacity:1/(c/1.8+1),position:"absolute","z-index":q,left:Math.round(p)+"px",top:Math.round(d)+"px",width:"100%",height:"100%"}).appendTo(n);return n}function Q(){this.a=this.b=this.g=this.r=0;this.next=null}var F=jQuery,Y=F(this),X=F("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(R),H=!n.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(H)try{document.createElement("canvas").getContext("2d").getImageData(0,
0,1,1)}catch(ba){H=0}var D,E;this.go=function(m,p){if(E)return-1;E=1;var e=F(T.get(p)),Q=F(T.get(m)),q={width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")},g;H&&(D||(D='<canvas width="'+q.width+'" height="'+q.height+'"/>',D=F(D+D).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(X)),D.css(q).attr({width:q.width,height:q.height}),g=S(e,q,30,D.get(0)));if(H&&g){var W=S(Q,q,30,D.get(1));U(g,n.duration/3,function(){R.find(".ws_list").css({visibility:"hidden"});
V(g,n.duration/6);U(W,n.duration/6,function(){g.css({visibility:"hidden"});R.find(".ws_list").css({visibility:"visible"});Y.trigger("effectEnd",{delay:n.duration/2});V(W,n.duration/2,function(){E=0})})})}else H=0,g=S(e,q,8),g.fadeIn(n.duration/3,"linear",function(){Y.trigger("effectEnd",{delay:n.duration/3});g.fadeOut(n.duration/3,"linear",function(){g.remove();E=0})})};var Z=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,
512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,
337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],aa=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,
19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,
24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]};
// blur
// options.noCanvas - stop using canvas
function ws_blur(n,T,R){function U(m,p,e){wowAnimate(m.css({visibility:"visible"}),{opacity:0},{opacity:1},p,e)}function V(m,p,e){wowAnimate(m,{opacity:1},{opacity:0},p,e)}function S(m,p,e,n){var q=(parseInt(m.parent().css("z-index"))||0)+1;if(H){q=n.getContext("2d");q.drawImage(m.get(0),0,0,p.width,p.height);var g;a:if(m=n.width,p=n.height,isNaN(e)||1>e)g=void 0;else{e|=0;try{g=q.getImageData(0,0,m,p)}catch(D){console.log("error:unable to access image data: "+D);g=!1;break a}var d=g.data,z,G,a,c,
f,E,h,k,l,A,B,C,r,t,u,w,x,y,I;z=e+e+1;var P=m-1,J=p-1,v=e+1,K=v*(v+1)/2,L=new Q,b=L;for(a=1;a<z;a++)if(b=b.next=new Q,a==v)var O=b;b.next=L;b=a=null;E=f=0;var M=Z[e],N=aa[e];for(G=0;G<p;G++){r=t=u=h=k=l=0;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;for(a=1;a<v;a++)c=f+((P<a?P:a)<<2),h+=(b.r=w=d[c])*(I=v-a),k+=(b.g=x=d[c+1])*I,l+=(b.b=y=d[c+2])*I,r+=w,t+=x,u+=y,b=b.next;a=L;b=O;for(z=0;z<m;z++)d[f]=h*M>>N,d[f+1]=k*M>>N,d[f+2]=l*M>>
N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=E+((c=z+e+1)<P?c:P)<<2,r+=a.r=d[c],t+=a.g=d[c+1],u+=a.b=d[c+2],h+=r,k+=t,l+=u,a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=4;E+=m}for(z=0;z<m;z++){t=u=r=k=l=h=0;f=z<<2;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;c=m;for(a=1;a<=e;a++)f=c+z<<2,h+=(b.r=w=d[f])*(I=v-a),k+=(b.g=x=d[f+1])*I,l+=(b.b=y=d[f+2])*I,r+=w,t+=x,u+=y,b=b.next,a<J&&(c+=m);f=z;a=L;b=O;for(G=0;G<p;G++)c=f<<2,
d[c]=h*M>>N,d[c+1]=k*M>>N,d[c+2]=l*M>>N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=z+((c=G+v)<J?c:J)*m<<2,h+=r+=a.r=d[c],k+=t+=a.g=d[c+1],l+=u+=a.b=d[c+2],a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=m}q.putImageData(g,0,0);g=!0}return g?F(n):0}n=F("<div></div>").css({position:"absolute","z-index":q,left:0,top:0,display:"none"}).css(p).appendTo(X);g=(Math.sqrt(5)+1)/2;O=1-g/2;for(c=0;O*c<e;c++)d=Math.PI*g*c,J=O*c+1,p=J*Math.cos(d),d=J*Math.sin(d),F(document.createElement("img")).attr("src",
m.attr("src")).css({opacity:1/(c/1.8+1),position:"absolute","z-index":q,left:Math.round(p)+"px",top:Math.round(d)+"px",width:"100%",height:"100%"}).appendTo(n);return n}function Q(){this.a=this.b=this.g=this.r=0;this.next=null}var F=jQuery,Y=F(this),X=F("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(R),H=!n.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(H)try{document.createElement("canvas").getContext("2d").getImageData(0,
0,1,1)}catch(ba){H=0}var D,E;this.go=function(m,p){if(E)return-1;E=1;var e=F(T.get(p)),Q=F(T.get(m)),q={width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")},g;H&&(D||(D='<canvas width="'+q.width+'" height="'+q.height+'"/>',D=F(D+D).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(X)),D.css(q).attr({width:q.width,height:q.height}),g=S(e,q,30,D.get(0)));if(H&&g){var W=S(Q,q,30,D.get(1));U(g,n.duration/3,function(){R.find(".ws_list").css({visibility:"hidden"});
V(g,n.duration/6);U(W,n.duration/6,function(){g.css({visibility:"hidden"});R.find(".ws_list").css({visibility:"visible"});Y.trigger("effectEnd",{delay:n.duration/2});V(W,n.duration/2,function(){E=0})})})}else H=0,g=S(e,q,8),g.fadeIn(n.duration/3,"linear",function(){Y.trigger("effectEnd",{delay:n.duration/3});g.fadeOut(n.duration/3,"linear",function(){g.remove();E=0})})};var Z=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,
512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,
337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],aa=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,
19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,
24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]};
// blur
// options.noCanvas - stop using canvas
function ws_blur(n,T,R){function U(m,p,e){wowAnimate(m.css({visibility:"visible"}),{opacity:0},{opacity:1},p,e)}function V(m,p,e){wowAnimate(m,{opacity:1},{opacity:0},p,e)}function S(m,p,e,n){var q=(parseInt(m.parent().css("z-index"))||0)+1;if(H){q=n.getContext("2d");q.drawImage(m.get(0),0,0,p.width,p.height);var g;a:if(m=n.width,p=n.height,isNaN(e)||1>e)g=void 0;else{e|=0;try{g=q.getImageData(0,0,m,p)}catch(D){console.log("error:unable to access image data: "+D);g=!1;break a}var d=g.data,z,G,a,c,
f,E,h,k,l,A,B,C,r,t,u,w,x,y,I;z=e+e+1;var P=m-1,J=p-1,v=e+1,K=v*(v+1)/2,L=new Q,b=L;for(a=1;a<z;a++)if(b=b.next=new Q,a==v)var O=b;b.next=L;b=a=null;E=f=0;var M=Z[e],N=aa[e];for(G=0;G<p;G++){r=t=u=h=k=l=0;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;for(a=1;a<v;a++)c=f+((P<a?P:a)<<2),h+=(b.r=w=d[c])*(I=v-a),k+=(b.g=x=d[c+1])*I,l+=(b.b=y=d[c+2])*I,r+=w,t+=x,u+=y,b=b.next;a=L;b=O;for(z=0;z<m;z++)d[f]=h*M>>N,d[f+1]=k*M>>N,d[f+2]=l*M>>
N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=E+((c=z+e+1)<P?c:P)<<2,r+=a.r=d[c],t+=a.g=d[c+1],u+=a.b=d[c+2],h+=r,k+=t,l+=u,a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=4;E+=m}for(z=0;z<m;z++){t=u=r=k=l=h=0;f=z<<2;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;c=m;for(a=1;a<=e;a++)f=c+z<<2,h+=(b.r=w=d[f])*(I=v-a),k+=(b.g=x=d[f+1])*I,l+=(b.b=y=d[f+2])*I,r+=w,t+=x,u+=y,b=b.next,a<J&&(c+=m);f=z;a=L;b=O;for(G=0;G<p;G++)c=f<<2,
d[c]=h*M>>N,d[c+1]=k*M>>N,d[c+2]=l*M>>N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=z+((c=G+v)<J?c:J)*m<<2,h+=r+=a.r=d[c],k+=t+=a.g=d[c+1],l+=u+=a.b=d[c+2],a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=m}q.putImageData(g,0,0);g=!0}return g?F(n):0}n=F("<div></div>").css({position:"absolute","z-index":q,left:0,top:0,display:"none"}).css(p).appendTo(X);g=(Math.sqrt(5)+1)/2;O=1-g/2;for(c=0;O*c<e;c++)d=Math.PI*g*c,J=O*c+1,p=J*Math.cos(d),d=J*Math.sin(d),F(document.createElement("img")).attr("src",
m.attr("src")).css({opacity:1/(c/1.8+1),position:"absolute","z-index":q,left:Math.round(p)+"px",top:Math.round(d)+"px",width:"100%",height:"100%"}).appendTo(n);return n}function Q(){this.a=this.b=this.g=this.r=0;this.next=null}var F=jQuery,Y=F(this),X=F("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(R),H=!n.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(H)try{document.createElement("canvas").getContext("2d").getImageData(0,
0,1,1)}catch(ba){H=0}var D,E;this.go=function(m,p){if(E)return-1;E=1;var e=F(T.get(p)),Q=F(T.get(m)),q={width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")},g;H&&(D||(D='<canvas width="'+q.width+'" height="'+q.height+'"/>',D=F(D+D).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(X)),D.css(q).attr({width:q.width,height:q.height}),g=S(e,q,30,D.get(0)));if(H&&g){var W=S(Q,q,30,D.get(1));U(g,n.duration/3,function(){R.find(".ws_list").css({visibility:"hidden"});
V(g,n.duration/6);U(W,n.duration/6,function(){g.css({visibility:"hidden"});R.find(".ws_list").css({visibility:"visible"});Y.trigger("effectEnd",{delay:n.duration/2});V(W,n.duration/2,function(){E=0})})})}else H=0,g=S(e,q,8),g.fadeIn(n.duration/3,"linear",function(){Y.trigger("effectEnd",{delay:n.duration/3});g.fadeOut(n.duration/3,"linear",function(){g.remove();E=0})})};var Z=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,
512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,
337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],aa=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,
19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,
24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]};
// blur
// options.noCanvas - stop using canvas
function ws_blur(n,T,R){function U(m,p,e){wowAnimate(m.css({visibility:"visible"}),{opacity:0},{opacity:1},p,e)}function V(m,p,e){wowAnimate(m,{opacity:1},{opacity:0},p,e)}function S(m,p,e,n){var q=(parseInt(m.parent().css("z-index"))||0)+1;if(H){q=n.getContext("2d");q.drawImage(m.get(0),0,0,p.width,p.height);var g;a:if(m=n.width,p=n.height,isNaN(e)||1>e)g=void 0;else{e|=0;try{g=q.getImageData(0,0,m,p)}catch(D){console.log("error:unable to access image data: "+D);g=!1;break a}var d=g.data,z,G,a,c,
f,E,h,k,l,A,B,C,r,t,u,w,x,y,I;z=e+e+1;var P=m-1,J=p-1,v=e+1,K=v*(v+1)/2,L=new Q,b=L;for(a=1;a<z;a++)if(b=b.next=new Q,a==v)var O=b;b.next=L;b=a=null;E=f=0;var M=Z[e],N=aa[e];for(G=0;G<p;G++){r=t=u=h=k=l=0;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;for(a=1;a<v;a++)c=f+((P<a?P:a)<<2),h+=(b.r=w=d[c])*(I=v-a),k+=(b.g=x=d[c+1])*I,l+=(b.b=y=d[c+2])*I,r+=w,t+=x,u+=y,b=b.next;a=L;b=O;for(z=0;z<m;z++)d[f]=h*M>>N,d[f+1]=k*M>>N,d[f+2]=l*M>>
N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=E+((c=z+e+1)<P?c:P)<<2,r+=a.r=d[c],t+=a.g=d[c+1],u+=a.b=d[c+2],h+=r,k+=t,l+=u,a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=4;E+=m}for(z=0;z<m;z++){t=u=r=k=l=h=0;f=z<<2;A=v*(w=d[f]);B=v*(x=d[f+1]);C=v*(y=d[f+2]);h+=K*w;k+=K*x;l+=K*y;b=L;for(a=0;a<v;a++)b.r=w,b.g=x,b.b=y,b=b.next;c=m;for(a=1;a<=e;a++)f=c+z<<2,h+=(b.r=w=d[f])*(I=v-a),k+=(b.g=x=d[f+1])*I,l+=(b.b=y=d[f+2])*I,r+=w,t+=x,u+=y,b=b.next,a<J&&(c+=m);f=z;a=L;b=O;for(G=0;G<p;G++)c=f<<2,
d[c]=h*M>>N,d[c+1]=k*M>>N,d[c+2]=l*M>>N,h-=A,k-=B,l-=C,A-=a.r,B-=a.g,C-=a.b,c=z+((c=G+v)<J?c:J)*m<<2,h+=r+=a.r=d[c],k+=t+=a.g=d[c+1],l+=u+=a.b=d[c+2],a=a.next,A+=w=b.r,B+=x=b.g,C+=y=b.b,r-=w,t-=x,u-=y,b=b.next,f+=m}q.putImageData(g,0,0);g=!0}return g?F(n):0}n=F("<div></div>").css({position:"absolute","z-index":q,left:0,top:0,display:"none"}).css(p).appendTo(X);g=(Math.sqrt(5)+1)/2;O=1-g/2;for(c=0;O*c<e;c++)d=Math.PI*g*c,J=O*c+1,p=J*Math.cos(d),d=J*Math.sin(d),F(document.createElement("img")).attr("src",
m.attr("src")).css({opacity:1/(c/1.8+1),position:"absolute","z-index":q,left:Math.round(p)+"px",top:Math.round(d)+"px",width:"100%",height:"100%"}).appendTo(n);return n}function Q(){this.a=this.b=this.g=this.r=0;this.next=null}var F=jQuery,Y=F(this),X=F("<div>").addClass("ws_effect ws_blur").css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%",height:"100%"}).appendTo(R),H=!n.noCanvas&&!window.opera&&!!document.createElement("canvas").getContext;if(H)try{document.createElement("canvas").getContext("2d").getImageData(0,
0,1,1)}catch(ba){H=0}var D,E;this.go=function(m,p){if(E)return-1;E=1;var e=F(T.get(p)),Q=F(T.get(m)),q={width:e.width(),height:e.height(),marginTop:e.css("marginTop"),marginLeft:e.css("marginLeft")},g;H&&(D||(D='<canvas width="'+q.width+'" height="'+q.height+'"/>',D=F(D+D).css({"z-index":8,position:"absolute",left:0,top:0,visibility:"hidden"}).appendTo(X)),D.css(q).attr({width:q.width,height:q.height}),g=S(e,q,30,D.get(0)));if(H&&g){var W=S(Q,q,30,D.get(1));U(g,n.duration/3,function(){R.find(".ws_list").css({visibility:"hidden"});
V(g,n.duration/6);U(W,n.duration/6,function(){g.css({visibility:"hidden"});R.find(".ws_list").css({visibility:"visible"});Y.trigger("effectEnd",{delay:n.duration/2});V(W,n.duration/2,function(){E=0})})})}else H=0,g=S(e,q,8),g.fadeIn(n.duration/3,"linear",function(){Y.trigger("effectEnd",{delay:n.duration/3});g.fadeOut(n.duration/3,"linear",function(){g.remove();E=0})})};var Z=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,
512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,
337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],aa=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,
19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,
24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24]};
// louvers
// options.cols - number of cols
// options.perspective - 3d perspective size

// easing functions
jQuery.extend(jQuery.easing,{easeInBack:function(b,a,f,q,p,c){void 0==c&&(c=1.70158);return q*(a/=p)*a*((c+1)*a-c)+f},easeOutBack:function(b,a,f,q,p,c){void 0==c&&(c=1.70158);return q*((a=a/p-1)*a*((c+1)*a+c)+1)+f},easeInBackQ:function(b,a,f,q,p,c){b=(a/=p)*a;return f+q*b*(4*a*b-8*b+8*a-3)},easeOutBackQ:function(b,a,f,q,p,c){b=(a/=p)*a;return f+q*(4*b*a*b-12*b*b+16*b*a-13*b+6*a)},easeInBackQ2:function(b,a,f,q,p,c){b=(a/=p)*a;return f+q*b*(1.5*a*b-2.5*b+5*a-3)},easeOutBackQ2:function(b,a,f,q,p,c){b=
(a/=p)*a;return f+q*(1.5*b*a*b-5*b*b+10*b*a-12*b+6.5*a)}});
function ws_louvers(b,a,f){function q(m){for(var f={},n=a.get(m),v=b.width/u,r=b.height,l=0;l<u;l++){m=l%u;var N=l;a:{var d=n,g={x:m*v,y:Math.floor(l/u)*r,w:v,h:r},g=g||{};m=g.exclude||[];var x=void 0,k=document.createElement("canvas"),h=k.getContext("2d");k.width=d.naturalWidth;k.height=d.naturalHeight;h.drawImage(d,0,0,d.naturalWidth,d.naturalHeight);try{x=h.getImageData(g.x?g.x:0,g.y?g.y:0,g.w?g.w:d.width,g.h?g.h:d.height).data}catch(O){console.log("error:unable to access image data: "+O);m="#ccc";
break a}for(var d=(g.w?g.w:d.width*g.h?g.h:d.height)||x.length,g={},k="",h=[],G="",H=0,c=0;c<d;){h[0]=x[c];h[1]=x[c+1];h[2]=x[c+2];k=h.join(",");g[k]=k in g?g[k]+1:1;if(-1===m.indexOf(["rgb(",k,")"].join(""))){var e=g[k];e>H&&(G=k,H=e)}c+=4}m=["rgb(",G,")"].join("")}f[N]=m}return f}function p(b,a){var f=0,c;for(c in b)"function"!==typeof b[c]&&function(b,l){wowAnimate(function(a){var d,g,f,k="",h={};.5>=a?(d=n.easing.easeInBack(1,2*a,0,1,1,1).toFixed(3),g=n.easing.easeInBackQ(1,2*a,0,1,1,1).toFixed(3),
f=n.easing.easeInBackQ2(1,2*a,0,1,1,1).toFixed(3),l[b].back.css("backfaceVisibility","hidden")):(d=n.easing.easeOutBack(1,2*(a-.5),0,1,1,1).toFixed(3),g=n.easing.easeOutBackQ(1,2*(a-.5),0,1,1,1).toFixed(3),f=n.easing.easeOutBackQ2(1,2*(a-.5),0,1,1,1).toFixed(3),l[b].back.css("backfaceVisibility","visible"));for(var c in l[b].animate[.5>=a?"half":"end"]){var m=l[b].animate[.5>=a?"begin":"half"][c]||0,e=l[b].animate[.5>=a?"half":"end"][c]||0;"object"!==typeof e&&(e="scale"===c||"rotateX"===c||"rotateY"===
c?m+(e-m)*g:"left"===c||"top"===c?m+(e-m)*f:m+(e-m)*d);"rotateX"===c||"rotateY"===c||"rotateZ"===c?k+=c+"("+e+"deg) ":"scale"===c?k+=c+"("+e+") ":"translate3d"===c?k+=c+"("+(m[0]+(e[0]-m[0])*d).toFixed(3)+"px,"+(m[1]+(e[1]-m[1])*d).toFixed(3)+"px,"+(m[2]+(e[2]-m[2])*d).toFixed(3)+"px) ":h[c]=e}l[b].wrapper.css({transform:"translate3d("+(h.left?h.left:0).toFixed(3)+"px,"+(h.top?h.top:0).toFixed(3)+"px,0)"});delete h.left;delete h.top;k&&(h.transform=k);l[b].part.css(h)},0,1,l[b].animate.duration,l[b].animate.delay,
function(){f++;f==l.length&&a&&a()})}(c,b)}function c(a,c,n,v){var r=f.width(),l=f.height(),q=r/u,d=1E3<.4*b.duration?1E3:.4*b.duration,g=.6*b.duration,x=[0,0];c=D[c];for(var k in a)"function"!==typeof e[k]&&(a[k].topEdge.css({width:q,height:5,background:c[k],transform:"rotateX(90deg) translate3d(0,-2.5px,2.5px)"}),a[k].bottomEdge.css({width:q,height:5,background:c[k],transform:"rotateX(90deg) translate3d(0,-2.5px,"+(-l+2.5)+"px)"}),a[k].leftEdge.css({width:5,height:l,background:c[k],transform:"rotateY(90deg) translate3d(2.5px,0,-2.5px)"}),
a[k].rightEdge.css({width:5,height:l,background:c[k],transform:"rotateY(90deg) translate3d(2.5px,0,"+(q-2.5)+"px)"}));B.css({transformOrigin:r/2+"px "+l/2+"px 0",width:r,height:l});for(var h in a)"function"!==typeof a[h]&&(r=y[h].delay*d,x[1]<=r&&(x[0]=h,x[1]=r),a[h].part[0].ws_delay=[r,0]);a[x[0]].part[0].ws_delay[1]=1;for(h in a)"function"!==typeof a[h]&&(d=a[h],d.animate={delay:d.part[0].ws_delay[0],duration:g,begin:{left:0,top:0,width:q,height:l,scale:1,rotateX:0,rotateY:0,translate3d:[0,0,E?
5:0]},half:{left:y[h].halfLeft*q,top:y[h].halfTop*l,scale:y[h].halfScale,rotateX:y[h].rotateX/2,rotateY:y[h].rotateY/2,translate3d:[0,0,5*(E?1:.5)]},end:{left:0,top:0,scale:1,rotateX:y[h].rotateX,rotateY:y[h].rotateY,translate3d:[0,0,5]}},d.front.find("img").css(n),d.back.css("backfaceVisibility","hidden").find("img").css(n),d.part.css({width:d.animate.begin.width,height:d.animate.begin.height,left:d.animate.begin.left,top:d.animate.begin.top}));p(a,v)}var n=jQuery,I=n(this),u=b.cols||10,w=b.perspective||
2E3,F=f.find(".ws_list"),e=[],D={},B=n("<div>").addClass("ws_effect ws_louvers").appendTo(f),z=b.support.transform&&b.support.transition&&b.support.perspective,E=/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/WOW Slider/g.test(navigator.userAgent),y=[];B.css({position:"absolute",top:0,left:0,width:f.width(),height:f.height(),transform:"translate3d(0,0,0)",transformOrigin:b.width/2+"px "+b.height/2+"px 0",perspective:w+2E3}).hide();for(w=0;w<u;w++){var t=w%u,J=Math.floor(w/
u),K=n("<div>").css({position:"absolute",left:100*t/u+"%",top:0,outline:"1px solid transparent",transformStyle:E?"flat":"preserve-3d",overflow:z?"visible":"hidden"}).appendTo(B),A=n("<div>").css({transform:"scale(1) rotateX(0) rotateY(0) translate3d(0,0,0)",outline:"1px solid transparent",transformStyle:"preserve-3d"}).appendTo(K),L=n("<div>").addClass("ws_front_image").appendTo(A),M=z?n("<div>").addClass("ws_back_image").appendTo(A):0;L.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",
backfaceVisibility:"hidden",transform:"translate3d(0,0,0)"}).append(n("<img>").css({left:100*-t+"%",top:100*-J+"%",position:"absolute",outline:"1px solid transparent"}));z&&M.css({position:"absolute",width:"100%",height:"100%",overflow:"hidden",backfaceVisibility:"hidden",transform:"rotateY(180deg) translate3d(0,0,5px)"}).append(n("<img>").css({left:100*-t+"%",top:100*-J+"%",position:"absolute",outline:"1px solid transparent"}));t={position:"absolute",outline:"1px solid transparent"};e[w]={part:A,
front:L,back:M,wrapper:K,leftEdge:z?n("<div>").addClass("ws_left_edge").css(t).appendTo(A):0,rightEdge:z?n("<div>").addClass("ws_right_edge").css(t).appendTo(A):0,topEdge:z?n("<div>").addClass("ws_top_edge").css(t).appendTo(A):0,bottomEdge:z?n("<div>").addClass("ws_bottom_edge").css(t).appendTo(A):0}}var C;this.go=function(m,p){if(C)return p;B.show();var t=n(a.get(p)),t={width:t.width(),height:t.height(),marginTop:parseFloat(t.css("marginTop")),marginLeft:parseFloat(t.css("marginLeft"))};y=function(){for(var a=
[0,1],b=[1.2,.8],c=[.2,0,-.2],d=[180,-180],a=a[Math.floor(Math.random()*a.length)],b=b[Math.floor(Math.random()*b.length)],c=c[Math.floor(Math.random()*c.length)],d=d[Math.floor(Math.random()*d.length)],f=u,g=[],e=a?0:f;a?e<=f:0<=e;a?e++:e--)g.push({zIndex:e-(a?f:0),rotateY:d,delay:e/f,halfScale:b,halfLeft:c});return g}();if(z){e[0].front.find("img").on("load",function(){F.hide()});for(var v in e)"function"!==typeof e[v]&&(e[v].front.find("img").attr("src",a.get(p).src),e[v].back.find("img").attr("src",
a.get(m).src));D[p]||(D[p]=q(p));C=new c(e,p,t,function(){F.show();I.trigger("effectEnd");B.hide();for(var a in e)"function"!==typeof e[a]&&e[a].part.css({transition:"",transform:"rotateX(0) rotateY(0) translate3d(0,0,0)"});C=0})}else{C=!0;var r=f.width(),l=f.height(),w=r/u;B.css({width:r,height:l});var d=0;for(v in e){var r=v%u,g=Math.floor(v/u);e[v].front.find("img").attr("src",a.get(m).src).css(t);r=b.duration*(1-Math.abs((5-r*g)/(2*u)));g=0<3*Math.random()+-1?1:-1;e[v].wrapper.css({width:w,height:l});
e[v].part.css({position:"absolute",top:0,left:g*w,opacity:0,width:w,height:l}).animate({left:0,opacity:1},r,function(){d++;d==u&&(F.stop(1,1),C=!1,I.trigger("effectEnd"))})}}}};
