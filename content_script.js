// hardcoded server config for auto scaling in case cloud config isn't available
console.log('content_script 2');
var serversConfig = {
	"undefined":true, "sundefined":true, "s1":true, "s2":true, "s3":true, "s4":true, "s5":true, "s6":true, "s7":true, "s8":true, "s9":true,
	"s10":true, "s11":true, "s12":true, "s13":true, "s14":true, "s15":true, "s16":true, "s17":true, "s18":true, "s19":true,
	"s20":true, "s21":true, "s22":true, "s23":true, "s24":true, "s25":true, "s26":true, "s27":true, "s28":true, "s29":true,
	"s30":true, "s31":true, "s32":true, "s33":true, "s34":true, "s35":true, "s36":true, "s37":true, "s38":true, "s39":true,
	"s40":true, "s41":true, "s42":true, "s43":true, "s44":true, "s45":true, "s46":true, "s47":true, "s48":true, "s49":true,
	"s50":true, "s51":true, "s52":true, "s53":true, "s54":true, "s55":true, "s56":true, "s57":true, "s58":true, "s59":true,
	"s60":true, "s61":true, "s62":true, "s63":true, "s64":true, "s65":true, "s66":true, "s67":true, "s68":true, "s69":true,
	"s70":true, "s71":true, "s72":true, "s73":true, "s74":true, "s75":true, "s76":true, "s77":true, "s78":true, "s79":true,
	"s80":true, "s81":true, "s82":true, "s83":true, "s84":true, "s85":true, "s86":true, "s87":true, "s88":true, "s89":true,
	"s90":true, "s91":true, "s92":true, "s93":true, "s94":true, "s95":true, "s96":true, "s97":true, "s98":true, "s99":true,
	"s100":true, "s101":true, "s102":true, "s103":true, "s104":true, "s105":true, "s106":true, "s107":true, "s108":true, "s109":true,
	"s110":true, "s111":true, "s112":true, "s113":true, "s114":true, "s115":true, "s116":true, "s117":true, "s118":true, "s119":true,
	"s120":true, "s121":true, "s122":true, "s123":true, "s124":true, "s125":true, "s126":true, "s127":true, "s128":true, "s129":true,
	"s130":true, "s131":true, "s132":true, "s133":true, "s134":true, "s135":true, "s136":true, "s137":true, "s138":true, "s139":true,
	"s140":true, "s141":true, "s142":true, "s143":true, "s144":true, "s145":true, "s146":true, "s147":true, "s148":true, "s149":true,
	"s150":true, "s151":true, "s152":true, "s153":true, "s154":true, "s155":true, "s156":true, "s157":true, "s158":true, "s159":true,
	"s160":true, "s161":true, "s162":true, "s163":true, "s164":true, "s165":true, "s166":true, "s167":true, "s168":true, "s169":true,
	"s170":true, "s171":true, "s172":true, "s173":true, "s174":true, "s175":true, "s176":true, "s177":true, "s178":true, "s179":true,
	"s180":true, "s181":true, "s182":true, "s183":true, "s184":true, "s185":true, "s186":true, "s187":true, "s188":true, "s189":true,
	"s190":true, "s191":true, "s192":true, "s193":true, "s194":true, "s195":true, "s196":true, "s197":true, "s198":true, "s199":true,
	"s200":true, "s201":true, "s202":true, "s203":true, "s204":true, "s205":true, "s206":true, "s207":true, "s208":true, "s209":true,
	"s210":true, "s211":true, "s212":true, "s213":true, "s214":true, "s215":true, "s216":true, "s217":true, "s218":true, "s219":true,
	"s220":true, "s221":true, "s222":true, "s223":true, "s224":true, "s225":true, "s226":true, "s227":true, "s228":true, "s229":true,
	"s230":true, "s231":true, "s232":true, "s233":true, "s234":true, "s235":true, "s236":true, "s237":true, "s238":true, "s239":true,
	"s240":true, "s241":true, "s242":true, "s243":true, "s244":true, "s245":true, "s246":true, "s247":true, "s248":true, "s249":true,
	"s250":true, "s251":true, "s252":true, "s253":true, "s254":true, "s255":true, "s256":true, "s257":true, "s258":true, "s259":true,
	"s260":true, "s261":true, "s262":true, "s263":true, "s264":true, "s265":true, "s266":true, "s267":true, "s268":true, "s269":true,
	"s270":true, "s271":true, "s272":true, "s273":true, "s274":true, "s275":true, "s276":true, "s277":true, "s278":true, "s279":true,
	"s280":true, "s281":true, "s282":true, "s283":true, "s284":true, "s285":true, "s286":true, "s287":true, "s288":true, "s289":true,
	"s290":true, "s291":true, "s292":true, "s293":true, "s294":true, "s295":true, "s296":true, "s297":true, "s298":true, "s299":true,
	"s300":true, "s301":true, "s302":true, "s303":true, "s304":true, "s305":true, "s306":true, "s307":true, "s308":true, "s309":true,
	"s310":true, "s311":true, "s312":true, "s313":true, "s314":true, "s315":true, "s316":true, "s317":true, "s318":true, "s319":true,
	"s320":true, "s321":true, "s322":true, "s323":true, "s324":true, "s325":true, "s326":true, "s327":true, "s328":true, "s329":true,
	"s330":true, "s331":true, "s332":true, "s333":true, "s334":true, "s335":true, "s336":true, "s337":true, "s338":true, "s339":true,
	"s340":true, "s341":true, "s342":true, "s343":true, "s344":true, "s345":true, "s346":true, "s347":true, "s348":true, "s349":true,
	"s350":true, "s351":true, "s352":true, "s353":true, "s354":true, "s355":true, "s356":true, "s357":true, "s358":true, "s359":true,
	"s360":true, "s361":true, "s362":true, "s363":true, "s364":true, "s365":true, "s366":true, "s367":true, "s368":true, "s369":true,
	"s370":true, "s371":true, "s372":true, "s373":true, "s374":true, "s375":true, "s376":true, "s377":true, "s378":true, "s379":true,
	"s380":true, "s381":true, "s382":true, "s383":true, "s384":true, "s385":true, "s386":true, "s387":true, "s388":true, "s389":true,
	"s390":true, "s391":true, "s392":true, "s393":true, "s394":true, "s395":true, "s396":true, "s397":true, "s398":true, "s399":true,
	"s400":true, "s401":true, "s402":true, "s403":true, "s404":true, "s405":true, "s406":true, "s407":true, "s408":true, "s409":true,
	"s410":true, "s411":true, "s412":true, "s413":true, "s414":true, "s415":true, "s416":true, "s417":true, "s418":true, "s419":true,
	"s420":true, "s421":true, "s422":true, "s423":true, "s424":true, "s425":true, "s426":true, "s427":true, "s428":true, "s429":true,
	"s430":true, "s431":true, "s432":true, "s433":true, "s434":true, "s435":true, "s436":true, "s437":true, "s438":true, "s439":true,
	"s440":true, "s441":true, "s442":true, "s443":true, "s444":true, "s445":true, "s446":true, "s447":true, "s448":true, "s449":true,
	"s450":true, "s451":true, "s452":true, "s453":true, "s454":true, "s455":true, "s456":true, "s457":true, "s458":true, "s459":true,
	"s460":true, "s461":true, "s462":true, "s463":true, "s464":true, "s465":true, "s466":true, "s467":true, "s468":true, "s469":true,
	"s470":true, "s471":true, "s472":true, "s473":true, "s474":true, "s475":true, "s476":true, "s477":true, "s478":true, "s479":true,
	"s480":true, "s481":true, "s482":true, "s483":true, "s484":true, "s485":true, "s486":true, "s487":true, "s488":true, "s489":true,
	"s490":true, "s491":true, "s492":true, "s493":true, "s494":true, "s495":true, "s496":true, "s497":true, "s498":true, "s499":true,
	"s500":true, "s501":true, "s502":true, "s503":true, "s504":true, "s505":true, "s506":true, "s507":true, "s508":true, "s509":true,
	"s510":true, "s511":true, "s512":true, "s513":true, "s514":true, "s515":true, "s516":true, "s517":true, "s518":true, "s519":true,
	"s520":true, "s521":true, "s522":true, "s523":true, "s524":true, "s525":true, "s526":true, "s527":true, "s528":true, "s529":true,
	"s530":true, "s531":true, "s532":true, "s533":true, "s534":true, "s535":true, "s536":true, "s537":true, "s538":true, "s539":true,
	"s540":true, "s541":true, "s542":true, "s543":true, "s544":true, "s545":true, "s546":true, "s547":true, "s548":true, "s549":true,
	"s550":true, "s551":true, "s552":true, "s553":true, "s554":true, "s555":true, "s556":true, "s557":true, "s558":true, "s559":true,
	"s560":true, "s561":true, "s562":true, "s563":true, "s564":true, "s565":true, "s566":true, "s567":true, "s568":true, "s569":true,
	"s570":true, "s571":true, "s572":true, "s573":true, "s574":true, "s575":true, "s576":true, "s577":true, "s578":true, "s579":true,
	"s580":true, "s581":true, "s582":true, "s583":true, "s584":true, "s585":true, "s586":true, "s587":true, "s588":true, "s589":true,
	"s590":true, "s591":true, "s592":true, "s593":true, "s594":true, "s595":true, "s596":true, "s597":true, "s598":true, "s599":true,
	"s600":true, "s601":true, "s602":true, "s603":true, "s604":true, "s605":true, "s606":true, "s607":true, "s608":true, "s609":true,
	"s610":true, "s611":true, "s612":true, "s613":true, "s614":true, "s615":true, "s616":true, "s617":true, "s618":true, "s619":true,
	"s620":true, "s621":true, "s622":true, "s623":true, "s624":true, "s625":true, "s626":true, "s627":true, "s628":true, "s629":true,
	"s630":true, "s631":true, "s632":true, "s633":true, "s634":true, "s635":true, "s636":true, "s637":true, "s638":true, "s639":true,
	"s640":true, "s641":true, "s642":true, "s643":true, "s644":true, "s645":true, "s646":true, "s647":true, "s648":true, "s649":true,
	"s650":true, "s651":true, "s652":true, "s653":true, "s654":true, "s655":true, "s656":true, "s657":true, "s658":true, "s659":true,
	"s660":true, "s661":true, "s662":true, "s663":true, "s664":true, "s665":true, "s666":true, "s667":true, "s668":true, "s669":true,
	"s670":true, "s671":true, "s672":true, "s673":true, "s674":true, "s675":true, "s676":true, "s677":true, "s678":true, "s679":true,
	"s680":true, "s681":true, "s682":true, "s683":true, "s684":true, "s685":true, "s686":true, "s687":true, "s688":true, "s689":true,
	"s690":true, "s691":true, "s692":true, "s693":true, "s694":true, "s695":true, "s696":true, "s697":true, "s698":true, "s699":true,
	"s700":true, "s701":true, "s702":true, "s703":true, "s704":true, "s705":true, "s706":true, "s707":true, "s708":true, "s709":true,
	"s710":true, "s711":true, "s712":true, "s713":true, "s714":true, "s715":true, "s716":true, "s717":true, "s718":true, "s719":true,
	"s720":true, "s721":true, "s722":true, "s723":true, "s724":true, "s725":true, "s726":true, "s727":true, "s728":true, "s729":true,
	"s730":true, "s731":true, "s732":true, "s733":true, "s734":true, "s735":true, "s736":true, "s737":true, "s738":true, "s739":true,
	"s740":true, "s741":true, "s742":true, "s743":true, "s744":true, "s745":true, "s746":true, "s747":true, "s748":true, "s749":true,
	"s750":true, "s751":true, "s752":true, "s753":true, "s754":true, "s755":true, "s756":true, "s757":true, "s758":true, "s759":true,
	"s760":true, "s761":true, "s762":true, "s763":true, "s764":true, "s765":true, "s766":true, "s767":true, "s768":true, "s769":true,
	"s770":true, "s771":true, "s772":true, "s773":true, "s774":true, "s775":true, "s776":true, "s777":true, "s778":true, "s779":true,
	"s780":true, "s781":true, "s782":true, "s783":true, "s784":true, "s785":true, "s786":true, "s787":true, "s788":true, "s789":true,
	"s790":true, "s791":true, "s792":true, "s793":true, "s794":true, "s795":true, "s796":true, "s797":true, "s798":true, "s799":true
};


var optionsConfig = [
	's1', 's2', 's4', 's5', 's6', 's7', 's8', 's9',
	's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19',
	's20', 's21', 's22', 's23', 's25', 's26', 's27', 's28', 's29',
	's30', 's31', 's32', 's33', 's34', 's35', 's36', 's37', 's38', 's39',
	's40', 's41', 's42', 's43', 's44', 's45', 's46', 's47', 's48', 's49',
	's50', 's51', 's52', 's53', 's54', 's55', 's56', 's57', 's58', 's59',
	's60', 's61', 's62', 's63', 's64', 's65', 's66', 's67', 's68', 's69',
	's70', 's71', 's72', 's73', 's74', 's75', 's76', 's77', 's78', 's79',
	's80', 's81', 's82', 's83', 's84', 's85', 's86', 's87', 's88', 's89',
	's90', 's91', 's92', 's93', 's94', 's95', 's96', 's97', 's98', 's99',
	's100', 's101', 's102', 's103', 's104', 's105', 's106', 's107', 's108', 's109',
	's110', 's111', 's112', 's113', 's114', 's115', 's116', 's117', 's118', 's119',
	's130', 's131', 's132', 's133', 's134', 's135', 's136', 's137', 's138', 's139',
	's140', 's141', 's142', 's143', 's144', 's145', 's146', 's147', 's148', 's149',
	's150', 's151', 's152', 's153', 's154', 's155', 's156', 's157', 's158', 's159',
	's160', 's161', 's162', 's163', 's164', 's165', 's166', 's167', 's168', 's169',
	's170', 's171', 's172', 's173', 's174', 's175', 's176', 's177', 's178', 's179',
	's180', 's181', 's182', 's183', 's184', 's185', 's186', 's187', 's188', 's189',
	's190', 's191', 's192', 's193', 's194', 's195', 's196', 's197', 's198', 's199'
];

	// 's70', 's71', 's72', 's73', 's74', 's75', 's76', 's77', 's78', 's79',
	// 's80', 's81', 's82', 's83', 's84', 's85', 's86', 's87', 's88', 's89',
	// 's90', 's91', 's92', 's93', 's94', 's95', 's96', 's97', 's98', 's99',
	// 's100', 's101', 's102', 's103', 's104', 's105', 's106', 's107', 's108', 's109',
	// 's110', 's111', 's112', 's113', 's114', 's115', 's116', 's117', 's118', 's119',
	// 's120', 's121', 's122', 's123', 's124', 's125', 's126', 's127', 's128', 's129'

// var serverSettings = {};
// serverSettings.servers = serversConfig;
// serverSettings.defaultServerOptions = optionsConfig;
// console.log(JSON.stringify(serverSettings));


// can't use strict mode for this file because of socket.io
var injectContentScript = function(defaultServerOptions=optionsConfig, servers=serversConfig) {
  // console.log('content script server options: ' + JSON.stringify(defaultServerOptions));
  // console.log('content script server options: ' + JSON.stringify(serversConfig));

  // make sure the content script is only run once on the page
  if (!window.netflixPartyLoaded) {
    window.netflixPartyLoaded = true;

    //////////////////////////////////////////////////////////////////////////
    // Vendor libraries                                                     //
    //////////////////////////////////////////////////////////////////////////

    /*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
    !function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});

    /* socket.io v1.4.3 */
    (function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.io=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(_dereq_,module,exports){var url=_dereq_("./url");var parser=_dereq_("socket.io-parser");var Manager=_dereq_("./manager");var debug=_dereq_("debug")("socket.io-client");module.exports=exports=lookup;var cache=exports.managers={};function lookup(uri,opts){if(typeof uri=="object"){opts=uri;uri=undefined}opts=opts||{};var parsed=url(uri);var source=parsed.source;var id=parsed.id;var path=parsed.path;var sameNamespace=cache[id]&&path in cache[id].nsps;var newConnection=opts.forceNew||opts["force new connection"]||false===opts.multiplex||sameNamespace;var io;if(newConnection){debug("ignoring socket cache for %s",source);io=Manager(source,opts)}else{if(!cache[id]){debug("new io instance for %s",source);cache[id]=Manager(source,opts)}io=cache[id]}return io.socket(parsed.path)}exports.protocol=parser.protocol;exports.connect=lookup;exports.Manager=_dereq_("./manager");exports.Socket=_dereq_("./socket")},{"./manager":2,"./socket":4,"./url":5,debug:14,"socket.io-parser":41}],2:[function(_dereq_,module,exports){var eio=_dereq_("engine.io-client");var Socket=_dereq_("./socket");var Emitter=_dereq_("component-emitter");var parser=_dereq_("socket.io-parser");var on=_dereq_("./on");var bind=_dereq_("component-bind");var debug=_dereq_("debug")("socket.io-client:manager");var indexOf=_dereq_("indexof");var Backoff=_dereq_("backo2");var has=Object.prototype.hasOwnProperty;module.exports=Manager;function Manager(uri,opts){if(!(this instanceof Manager))return new Manager(uri,opts);if(uri&&"object"==typeof uri){opts=uri;uri=undefined}opts=opts||{};opts.path=opts.path||"/socket.io";this.nsps={};this.subs=[];this.opts=opts;this.reconnection(opts.reconnection!==false);this.reconnectionAttempts(opts.reconnectionAttempts||Infinity);this.reconnectionDelay(opts.reconnectionDelay||1e3);this.reconnectionDelayMax(opts.reconnectionDelayMax||5e3);this.randomizationFactor(opts.randomizationFactor||.5);this.backoff=new Backoff({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()});this.timeout(null==opts.timeout?2e4:opts.timeout);this.readyState="closed";this.uri=uri;this.connecting=[];this.lastPing=null;this.encoding=false;this.packetBuffer=[];this.encoder=new parser.Encoder;this.decoder=new parser.Decoder;this.autoConnect=opts.autoConnect!==false;if(this.autoConnect)this.open()}Manager.prototype.emitAll=function(){this.emit.apply(this,arguments);for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].emit.apply(this.nsps[nsp],arguments)}}};Manager.prototype.updateSocketIds=function(){for(var nsp in this.nsps){if(has.call(this.nsps,nsp)){this.nsps[nsp].id=this.engine.id}}};Emitter(Manager.prototype);Manager.prototype.reconnection=function(v){if(!arguments.length)return this._reconnection;this._reconnection=!!v;return this};Manager.prototype.reconnectionAttempts=function(v){if(!arguments.length)return this._reconnectionAttempts;this._reconnectionAttempts=v;return this};Manager.prototype.reconnectionDelay=function(v){if(!arguments.length)return this._reconnectionDelay;this._reconnectionDelay=v;this.backoff&&this.backoff.setMin(v);return this};Manager.prototype.randomizationFactor=function(v){if(!arguments.length)return this._randomizationFactor;this._randomizationFactor=v;this.backoff&&this.backoff.setJitter(v);return this};Manager.prototype.reconnectionDelayMax=function(v){if(!arguments.length)return this._reconnectionDelayMax;this._reconnectionDelayMax=v;this.backoff&&this.backoff.setMax(v);return this};Manager.prototype.timeout=function(v){if(!arguments.length)return this._timeout;this._timeout=v;return this};Manager.prototype.maybeReconnectOnOpen=function(){if(!this.reconnecting&&this._reconnection&&this.backoff.attempts===0){this.reconnect()}};Manager.prototype.open=Manager.prototype.connect=function(fn){debug("readyState %s",this.readyState);if(~this.readyState.indexOf("open"))return this;debug("opening %s",this.uri);this.engine=eio(this.uri,this.opts);var socket=this.engine;var self=this;this.readyState="opening";this.skipReconnect=false;var openSub=on(socket,"open",function(){self.onopen();fn&&fn()});var errorSub=on(socket,"error",function(data){debug("connect_error");self.cleanup();self.readyState="closed";self.emitAll("connect_error",data);if(fn){var err=new Error("Connection error");err.data=data;fn(err)}else{self.maybeReconnectOnOpen()}});if(false!==this._timeout){var timeout=this._timeout;debug("connect attempt will timeout after %d",timeout);var timer=setTimeout(function(){debug("connect attempt timed out after %d",timeout);openSub.destroy();socket.close();socket.emit("error","timeout");self.emitAll("connect_timeout",timeout)},timeout);this.subs.push({destroy:function(){clearTimeout(timer)}})}this.subs.push(openSub);this.subs.push(errorSub);return this};Manager.prototype.onopen=function(){debug("open");this.cleanup();this.readyState="open";this.emit("open");var socket=this.engine;this.subs.push(on(socket,"data",bind(this,"ondata")));this.subs.push(on(socket,"ping",bind(this,"onping")));this.subs.push(on(socket,"pong",bind(this,"onpong")));this.subs.push(on(socket,"error",bind(this,"onerror")));this.subs.push(on(socket,"close",bind(this,"onclose")));this.subs.push(on(this.decoder,"decoded",bind(this,"ondecoded")))};Manager.prototype.onping=function(){this.lastPing=new Date;this.emitAll("ping")};Manager.prototype.onpong=function(){this.emitAll("pong",new Date-this.lastPing)};Manager.prototype.ondata=function(data){this.decoder.add(data)};Manager.prototype.ondecoded=function(packet){this.emit("packet",packet)};Manager.prototype.onerror=function(err){debug("error",err);this.emitAll("error",err)};Manager.prototype.socket=function(nsp){var socket=this.nsps[nsp];if(!socket){socket=new Socket(this,nsp);this.nsps[nsp]=socket;var self=this;socket.on("connecting",onConnecting);socket.on("connect",function(){socket.id=self.engine.id});if(this.autoConnect){onConnecting()}}function onConnecting(){if(!~indexOf(self.connecting,socket)){self.connecting.push(socket)}}return socket};Manager.prototype.destroy=function(socket){var index=indexOf(this.connecting,socket);if(~index)this.connecting.splice(index,1);if(this.connecting.length)return;this.close()};Manager.prototype.packet=function(packet){debug("writing packet %j",packet);var self=this;if(!self.encoding){self.encoding=true;this.encoder.encode(packet,function(encodedPackets){for(var i=0;i<encodedPackets.length;i++){self.engine.write(encodedPackets[i],packet.options)}self.encoding=false;self.processPacketQueue()})}else{self.packetBuffer.push(packet)}};Manager.prototype.processPacketQueue=function(){if(this.packetBuffer.length>0&&!this.encoding){var pack=this.packetBuffer.shift();this.packet(pack)}};Manager.prototype.cleanup=function(){debug("cleanup");var sub;while(sub=this.subs.shift())sub.destroy();this.packetBuffer=[];this.encoding=false;this.lastPing=null;this.decoder.destroy()};Manager.prototype.close=Manager.prototype.disconnect=function(){debug("disconnect");this.skipReconnect=true;this.reconnecting=false;if("opening"==this.readyState){this.cleanup()}this.backoff.reset();this.readyState="closed";if(this.engine)this.engine.close()};Manager.prototype.onclose=function(reason){debug("onclose");this.cleanup();this.backoff.reset();this.readyState="closed";this.emit("close",reason);if(this._reconnection&&!this.skipReconnect){this.reconnect()}};Manager.prototype.reconnect=function(){if(this.reconnecting||this.skipReconnect)return this;var self=this;if(this.backoff.attempts>=this._reconnectionAttempts){debug("reconnect failed");this.backoff.reset();this.emitAll("reconnect_failed");this.reconnecting=false}else{var delay=this.backoff.duration();debug("will wait %dms before reconnect attempt",delay);this.reconnecting=true;var timer=setTimeout(function(){if(self.skipReconnect)return;debug("attempting reconnect");self.emitAll("reconnect_attempt",self.backoff.attempts);self.emitAll("reconnecting",self.backoff.attempts);if(self.skipReconnect)return;self.open(function(err){if(err){debug("reconnect attempt error");self.reconnecting=false;self.reconnect();self.emitAll("reconnect_error",err.data)}else{debug("reconnect success");self.onreconnect()}})},delay);this.subs.push({destroy:function(){clearTimeout(timer)}})}};Manager.prototype.onreconnect=function(){var attempt=this.backoff.attempts;this.reconnecting=false;this.backoff.reset();this.updateSocketIds();this.emitAll("reconnect",attempt)}},{"./on":3,"./socket":4,backo2:8,"component-bind":11,"component-emitter":12,debug:14,"engine.io-client":16,indexof:33,"socket.io-parser":41}],3:[function(_dereq_,module,exports){module.exports=on;function on(obj,ev,fn){obj.on(ev,fn);return{destroy:function(){obj.removeListener(ev,fn)}}}},{}],4:[function(_dereq_,module,exports){var parser=_dereq_("socket.io-parser");var Emitter=_dereq_("component-emitter");var toArray=_dereq_("to-array");var on=_dereq_("./on");var bind=_dereq_("component-bind");var debug=_dereq_("debug")("socket.io-client:socket");var hasBin=_dereq_("has-binary");module.exports=exports=Socket;var events={connect:1,connect_error:1,connect_timeout:1,connecting:1,disconnect:1,error:1,reconnect:1,reconnect_attempt:1,reconnect_failed:1,reconnect_error:1,reconnecting:1,ping:1,pong:1};var emit=Emitter.prototype.emit;function Socket(io,nsp){this.io=io;this.nsp=nsp;this.json=this;this.ids=0;this.acks={};this.receiveBuffer=[];this.sendBuffer=[];this.connected=false;this.disconnected=true;if(this.io.autoConnect)this.open()}Emitter(Socket.prototype);Socket.prototype.subEvents=function(){if(this.subs)return;var io=this.io;this.subs=[on(io,"open",bind(this,"onopen")),on(io,"packet",bind(this,"onpacket")),on(io,"close",bind(this,"onclose"))]};Socket.prototype.open=Socket.prototype.connect=function(){if(this.connected)return this;this.subEvents();this.io.open();if("open"==this.io.readyState)this.onopen();this.emit("connecting");return this};Socket.prototype.send=function(){var args=toArray(arguments);args.unshift("message");this.emit.apply(this,args);return this};Socket.prototype.emit=function(ev){if(events.hasOwnProperty(ev)){emit.apply(this,arguments);return this}var args=toArray(arguments);var parserType=parser.EVENT;if(hasBin(args)){parserType=parser.BINARY_EVENT}var packet={type:parserType,data:args};packet.options={};packet.options.compress=!this.flags||false!==this.flags.compress;if("function"==typeof args[args.length-1]){debug("emitting packet with ack id %d",this.ids);this.acks[this.ids]=args.pop();packet.id=this.ids++}if(this.connected){this.packet(packet)}else{this.sendBuffer.push(packet)}delete this.flags;return this};Socket.prototype.packet=function(packet){packet.nsp=this.nsp;this.io.packet(packet)};Socket.prototype.onopen=function(){debug("transport is open - connecting");if("/"!=this.nsp){this.packet({type:parser.CONNECT})}};Socket.prototype.onclose=function(reason){debug("close (%s)",reason);this.connected=false;this.disconnected=true;delete this.id;this.emit("disconnect",reason)};Socket.prototype.onpacket=function(packet){if(packet.nsp!=this.nsp)return;switch(packet.type){case parser.CONNECT:this.onconnect();break;case parser.EVENT:this.onevent(packet);break;case parser.BINARY_EVENT:this.onevent(packet);break;case parser.ACK:this.onack(packet);break;case parser.BINARY_ACK:this.onack(packet);break;case parser.DISCONNECT:this.ondisconnect();break;case parser.ERROR:this.emit("error",packet.data);break}};Socket.prototype.onevent=function(packet){var args=packet.data||[];debug("emitting event %j",args);if(null!=packet.id){debug("attaching ack callback to event");args.push(this.ack(packet.id))}if(this.connected){emit.apply(this,args)}else{this.receiveBuffer.push(args)}};Socket.prototype.ack=function(id){var self=this;var sent=false;return function(){if(sent)return;sent=true;var args=toArray(arguments);debug("sending ack %j",args);var type=hasBin(args)?parser.BINARY_ACK:parser.ACK;self.packet({type:type,id:id,data:args})}};Socket.prototype.onack=function(packet){var ack=this.acks[packet.id];if("function"==typeof ack){debug("calling ack %s with %j",packet.id,packet.data);ack.apply(this,packet.data);delete this.acks[packet.id]}else{debug("bad ack %s",packet.id)}};Socket.prototype.onconnect=function(){this.connected=true;this.disconnected=false;this.emit("connect");this.emitBuffered()};Socket.prototype.emitBuffered=function(){var i;for(i=0;i<this.receiveBuffer.length;i++){emit.apply(this,this.receiveBuffer[i])}this.receiveBuffer=[];for(i=0;i<this.sendBuffer.length;i++){this.packet(this.sendBuffer[i])}this.sendBuffer=[]};Socket.prototype.ondisconnect=function(){debug("server disconnect (%s)",this.nsp);this.destroy();this.onclose("io server disconnect")};Socket.prototype.destroy=function(){if(this.subs){for(var i=0;i<this.subs.length;i++){this.subs[i].destroy()}this.subs=null}this.io.destroy(this)};Socket.prototype.close=Socket.prototype.disconnect=function(){if(this.connected){debug("performing disconnect (%s)",this.nsp);this.packet({type:parser.DISCONNECT})}this.destroy();if(this.connected){this.onclose("io client disconnect")}return this};Socket.prototype.compress=function(compress){this.flags=this.flags||{};this.flags.compress=compress;return this}},{"./on":3,"component-bind":11,"component-emitter":12,debug:14,"has-binary":31,"socket.io-parser":41,"to-array":44}],5:[function(_dereq_,module,exports){(function(global){var parseuri=_dereq_("parseuri");var debug=_dereq_("debug")("socket.io-client:url");module.exports=url;function url(uri,loc){var obj=uri;var loc=loc||global.location;if(null==uri)uri=loc.protocol+"//"+loc.host;if("string"==typeof uri){if("/"==uri.charAt(0)){if("/"==uri.charAt(1)){uri=loc.protocol+uri}else{uri=loc.host+uri}}if(!/^(https?|wss?):\/\//.test(uri)){debug("protocol-less url %s",uri);if("undefined"!=typeof loc){uri=loc.protocol+"//"+uri}else{uri="https://"+uri}}debug("parse %s",uri);obj=parseuri(uri)}if(!obj.port){if(/^(http|ws)$/.test(obj.protocol)){obj.port="80"}else if(/^(http|ws)s$/.test(obj.protocol)){obj.port="443"}}obj.path=obj.path||"/";var ipv6=obj.host.indexOf(":")!==-1;var host=ipv6?"["+obj.host+"]":obj.host;obj.id=obj.protocol+"://"+host+":"+obj.port;obj.href=obj.protocol+"://"+host+(loc&&loc.port==obj.port?"":":"+obj.port);return obj}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{debug:14,parseuri:39}],6:[function(_dereq_,module,exports){module.exports=after;function after(count,callback,err_cb){var bail=false;err_cb=err_cb||noop;proxy.count=count;return count===0?callback():proxy;function proxy(err,result){if(proxy.count<=0){throw new Error("after called too many times")}--proxy.count;if(err){bail=true;callback(err);callback=err_cb}else if(proxy.count===0&&!bail){callback(null,result)}}}function noop(){}},{}],7:[function(_dereq_,module,exports){module.exports=function(arraybuffer,start,end){var bytes=arraybuffer.byteLength;start=start||0;end=end||bytes;if(arraybuffer.slice){return arraybuffer.slice(start,end)}if(start<0){start+=bytes}if(end<0){end+=bytes}if(end>bytes){end=bytes}if(start>=bytes||start>=end||bytes===0){return new ArrayBuffer(0)}var abv=new Uint8Array(arraybuffer);var result=new Uint8Array(end-start);for(var i=start,ii=0;i<end;i++,ii++){result[ii]=abv[i]}return result.buffer}},{}],8:[function(_dereq_,module,exports){module.exports=Backoff;function Backoff(opts){opts=opts||{};this.ms=opts.min||100;this.max=opts.max||1e4;this.factor=opts.factor||2;this.jitter=opts.jitter>0&&opts.jitter<=1?opts.jitter:0;this.attempts=0}Backoff.prototype.duration=function(){var ms=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var rand=Math.random();var deviation=Math.floor(rand*this.jitter*ms);ms=(Math.floor(rand*10)&1)==0?ms-deviation:ms+deviation}return Math.min(ms,this.max)|0};Backoff.prototype.reset=function(){this.attempts=0};Backoff.prototype.setMin=function(min){this.ms=min};Backoff.prototype.setMax=function(max){this.max=max};Backoff.prototype.setJitter=function(jitter){this.jitter=jitter}},{}],9:[function(_dereq_,module,exports){(function(chars){"use strict";exports.encode=function(arraybuffer){var bytes=new Uint8Array(arraybuffer),i,len=bytes.buffer.byteLength,base64="";for(i=0;i<len;i+=3){base64+=chars[bytes.buffer[i]>>2];base64+=chars[(bytes.buffer[i]&3)<<4|bytes.buffer[i+1]>>4];base64+=chars[(bytes.buffer[i+1]&15)<<2|bytes.buffer[i+2]>>6];base64+=chars[bytes.buffer[i+2]&63]}if(len%3===2){base64=base64.substring(0,base64.length-1)+"="}else if(len%3===1){base64=base64.substring(0,base64.length-2)+"=="}return base64};exports.decode=function(base64){var bufferLength=base64.length*.75,len=base64.length,i,p=0,encoded1,encoded2,encoded3,encoded4;if(base64[base64.length-1]==="="){bufferLength--;if(base64[base64.length-2]==="="){bufferLength--}}var arraybuffer=new ArrayBuffer(bufferLength),bytes=new Uint8Array(arraybuffer);for(i=0;i<len;i+=4){encoded1=chars.indexOf(base64[i]);encoded2=chars.indexOf(base64[i+1]);encoded3=chars.indexOf(base64[i+2]);encoded4=chars.indexOf(base64[i+3]);bytes[p++]=encoded1<<2|encoded2>>4;bytes[p++]=(encoded2&15)<<4|encoded3>>2;bytes[p++]=(encoded3&3)<<6|encoded4&63}return arraybuffer}})("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")},{}],10:[function(_dereq_,module,exports){(function(global){var BlobBuilder=global.BlobBuilder||global.WebKitBlobBuilder||global.MSBlobBuilder||global.MozBlobBuilder;var blobSupported=function(){try{var a=new Blob(["hi"]);return a.size===2}catch(e){return false}}();var blobSupportsArrayBufferView=blobSupported&&function(){try{var b=new Blob([new Uint8Array([1,2])]);return b.size===2}catch(e){return false}}();var blobBuilderSupported=BlobBuilder&&BlobBuilder.prototype.append&&BlobBuilder.prototype.getBlob;function mapArrayBufferViews(ary){for(var i=0;i<ary.length;i++){var chunk=ary[i];if(chunk.buffer instanceof ArrayBuffer){var buf=chunk.buffer;if(chunk.byteLength!==buf.byteLength){var copy=new Uint8Array(chunk.byteLength);copy.set(new Uint8Array(buf,chunk.byteOffset,chunk.byteLength));buf=copy.buffer}ary[i]=buf}}}function BlobBuilderConstructor(ary,options){options=options||{};var bb=new BlobBuilder;mapArrayBufferViews(ary);for(var i=0;i<ary.length;i++){bb.append(ary[i])}return options.type?bb.getBlob(options.type):bb.getBlob()}function BlobConstructor(ary,options){mapArrayBufferViews(ary);return new Blob(ary,options||{})}module.exports=function(){if(blobSupported){return blobSupportsArrayBufferView?global.Blob:BlobConstructor}else if(blobBuilderSupported){return BlobBuilderConstructor}else{return undefined}}()}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{}],11:[function(_dereq_,module,exports){var slice=[].slice;module.exports=function(obj,fn){if("string"==typeof fn)fn=obj[fn];if("function"!=typeof fn)throw new Error("bind() requires a function");var args=slice.call(arguments,2);return function(){return fn.apply(obj,args.concat(slice.call(arguments)))}}},{}],12:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks["$"+event]=this._callbacks["$"+event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){function on(){this.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks["$"+event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks["$"+event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks["$"+event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks["$"+event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],13:[function(_dereq_,module,exports){module.exports=function(a,b){var fn=function(){};fn.prototype=b.prototype;a.prototype=new fn;a.prototype.constructor=a}},{}],14:[function(_dereq_,module,exports){exports=module.exports=_dereq_("./debug");exports.log=log;exports.formatArgs=formatArgs;exports.save=save;exports.load=load;exports.useColors=useColors;exports.storage="undefined"!=typeof chrome&&"undefined"!=typeof chrome.storage?chrome.storage.local:localstorage();exports.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function useColors(){return"WebkitAppearance"in document.documentElement.style||window.console&&(console.firebug||console.exception&&console.table)||navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31}exports.formatters.j=function(v){return JSON.stringify(v)};function formatArgs(){var args=arguments;var useColors=this.useColors;args[0]=(useColors?"%c":"")+this.namespace+(useColors?" %c":" ")+args[0]+(useColors?"%c ":" ")+"+"+exports.humanize(this.diff);if(!useColors)return args;var c="color: "+this.color;args=[args[0],c,"color: inherit"].concat(Array.prototype.slice.call(args,1));var index=0;var lastC=0;args[0].replace(/%[a-z%]/g,function(match){if("%%"===match)return;index++;if("%c"===match){lastC=index}});args.splice(lastC,0,c);return args}function log(){return"object"===typeof console&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function save(namespaces){try{if(null==namespaces){exports.storage.removeItem("debug")}else{exports.storage.debug=namespaces}}catch(e){}}function load(){var r;try{r=exports.storage.debug}catch(e){}return r}exports.enable(load());function localstorage(){try{return window.localStorage}catch(e){}}},{"./debug":15}],15:[function(_dereq_,module,exports){exports=module.exports=debug;exports.coerce=coerce;exports.disable=disable;exports.enable=enable;exports.enabled=enabled;exports.humanize=_dereq_("ms");exports.names=[];exports.skips=[];exports.formatters={};var prevColor=0;var prevTime;function selectColor(){return exports.colors[prevColor++%exports.colors.length]}function debug(namespace){function disabled(){}disabled.enabled=false;function enabled(){var self=enabled;var curr=+new Date;var ms=curr-(prevTime||curr);self.diff=ms;self.prev=prevTime;self.curr=curr;prevTime=curr;if(null==self.useColors)self.useColors=exports.useColors();if(null==self.color&&self.useColors)self.color=selectColor();var args=Array.prototype.slice.call(arguments);args[0]=exports.coerce(args[0]);if("string"!==typeof args[0]){args=["%o"].concat(args)}var index=0;args[0]=args[0].replace(/%([a-z%])/g,function(match,format){if(match==="%%")return match;index++;var formatter=exports.formatters[format];if("function"===typeof formatter){var val=args[index];match=formatter.call(self,val);args.splice(index,1);index--}return match});if("function"===typeof exports.formatArgs){args=exports.formatArgs.apply(self,args)}var logFn=enabled.log||exports.log||console.log.bind(console);logFn.apply(self,args)}enabled.enabled=true;var fn=exports.enabled(namespace)?enabled:disabled;fn.namespace=namespace;return fn}function enable(namespaces){exports.save(namespaces);var split=(namespaces||"").split(/[\s,]+/);var len=split.length;for(var i=0;i<len;i++){if(!split[i])continue;namespaces=split[i].replace(/\*/g,".*?");if(namespaces[0]==="-"){exports.skips.push(new RegExp("^"+namespaces.substr(1)+"$"))}else{exports.names.push(new RegExp("^"+namespaces+"$"))}}}function disable(){exports.enable("")}function enabled(name){var i,len;for(i=0,len=exports.skips.length;i<len;i++){if(exports.skips[i].test(name)){return false}}for(i=0,len=exports.names.length;i<len;i++){if(exports.names[i].test(name)){return true}}return false}function coerce(val){if(val instanceof Error)return val.stack||val.message;return val}},{ms:36}],16:[function(_dereq_,module,exports){module.exports=_dereq_("./lib/")},{"./lib/":17}],17:[function(_dereq_,module,exports){module.exports=_dereq_("./socket");module.exports.parser=_dereq_("engine.io-parser")},{"./socket":18,"engine.io-parser":27}],18:[function(_dereq_,module,exports){(function(global){var transports=_dereq_("./transports");var Emitter=_dereq_("component-emitter");var debug=_dereq_("debug")("engine.io-client:socket");var index=_dereq_("indexof");var parser=_dereq_("engine.io-parser");var parseuri=_dereq_("parseuri");var parsejson=_dereq_("parsejson");var parseqs=_dereq_("parseqs");module.exports=Socket;function noop(){}function Socket(uri,opts){if(!(this instanceof Socket))return new Socket(uri,opts);opts=opts||{};if(uri&&"object"==typeof uri){opts=uri;uri=null}if(uri){uri=parseuri(uri);opts.hostname=uri.host;opts.secure=uri.protocol=="https"||uri.protocol=="wss";opts.port=uri.port;if(uri.query)opts.query=uri.query}else if(opts.host){opts.hostname=parseuri(opts.host).host}this.secure=null!=opts.secure?opts.secure:global.location&&"https:"==location.protocol;if(opts.hostname&&!opts.port){opts.port=this.secure?"443":"80"}this.agent=opts.agent||false;this.hostname=opts.hostname||(global.location?location.hostname:"localhost");this.port=opts.port||(global.location&&location.port?location.port:this.secure?443:80);this.query=opts.query||{};if("string"==typeof this.query)this.query=parseqs.decode(this.query);this.upgrade=false!==opts.upgrade;this.path=(opts.path||"/engine.io").replace(/\/$/,"")+"/";this.forceJSONP=!!opts.forceJSONP;this.jsonp=false!==opts.jsonp;this.forceBase64=!!opts.forceBase64;this.enablesXDR=!!opts.enablesXDR;this.timestampParam=opts.timestampParam||"t";this.timestampRequests=opts.timestampRequests;this.transports=opts.transports||["polling","websocket"];this.readyState="";this.writeBuffer=[];this.policyPort=opts.policyPort||843;this.rememberUpgrade=opts.rememberUpgrade||false;this.binaryType=null;this.onlyBinaryUpgrades=opts.onlyBinaryUpgrades;this.perMessageDeflate=false!==opts.perMessageDeflate?opts.perMessageDeflate||{}:false;if(true===this.perMessageDeflate)this.perMessageDeflate={};if(this.perMessageDeflate&&null==this.perMessageDeflate.threshold){this.perMessageDeflate.threshold=1024}this.pfx=opts.pfx||null;this.key=opts.key||null;this.passphrase=opts.passphrase||null;this.cert=opts.cert||null;this.ca=opts.ca||null;this.ciphers=opts.ciphers||null;this.rejectUnauthorized=opts.rejectUnauthorized===undefined?null:opts.rejectUnauthorized;var freeGlobal=typeof global=="object"&&global;if(freeGlobal.global===freeGlobal){if(opts.extraHeaders&&Object.keys(opts.extraHeaders).length>0){this.extraHeaders=opts.extraHeaders}}this.open()}Socket.priorWebsocketSuccess=false;Emitter(Socket.prototype);Socket.protocol=parser.protocol;Socket.Socket=Socket;Socket.Transport=_dereq_("./transport");Socket.transports=_dereq_("./transports");Socket.parser=_dereq_("engine.io-parser");Socket.prototype.createTransport=function(name){debug('creating transport "%s"',name);var query=clone(this.query);query.EIO=parser.protocol;query.transport=name;if(this.id)query.sid=this.id;var transport=new transports[name]({agent:this.agent,hostname:this.hostname,port:this.port,secure:this.secure,path:this.path,query:query,forceJSONP:this.forceJSONP,jsonp:this.jsonp,forceBase64:this.forceBase64,enablesXDR:this.enablesXDR,timestampRequests:this.timestampRequests,timestampParam:this.timestampParam,policyPort:this.policyPort,socket:this,pfx:this.pfx,key:this.key,passphrase:this.passphrase,cert:this.cert,ca:this.ca,ciphers:this.ciphers,rejectUnauthorized:this.rejectUnauthorized,perMessageDeflate:this.perMessageDeflate,extraHeaders:this.extraHeaders});return transport};function clone(obj){var o={};for(var i in obj){if(obj.hasOwnProperty(i)){o[i]=obj[i]}}return o}Socket.prototype.open=function(){var transport;if(this.rememberUpgrade&&Socket.priorWebsocketSuccess&&this.transports.indexOf("websocket")!=-1){transport="websocket"}else if(0===this.transports.length){var self=this;setTimeout(function(){self.emit("error","No transports available")},0);return}else{transport=this.transports[0]}this.readyState="opening";try{transport=this.createTransport(transport)}catch(e){this.transports.shift();this.open();return}transport.open();this.setTransport(transport)};Socket.prototype.setTransport=function(transport){debug("setting transport %s",transport.name);var self=this;if(this.transport){debug("clearing existing transport %s",this.transport.name);this.transport.removeAllListeners()}this.transport=transport;transport.on("drain",function(){self.onDrain()}).on("packet",function(packet){self.onPacket(packet)}).on("error",function(e){self.onError(e)}).on("close",function(){self.onClose("transport close")})};Socket.prototype.probe=function(name){debug('probing transport "%s"',name);var transport=this.createTransport(name,{probe:1}),failed=false,self=this;Socket.priorWebsocketSuccess=false;function onTransportOpen(){if(self.onlyBinaryUpgrades){var upgradeLosesBinary=!this.supportsBinary&&self.transport.supportsBinary;failed=failed||upgradeLosesBinary}if(failed)return;debug('probe transport "%s" opened',name);transport.send([{type:"ping",data:"probe"}]);transport.once("packet",function(msg){if(failed)return;if("pong"==msg.type&&"probe"==msg.data){debug('probe transport "%s" pong',name);self.upgrading=true;self.emit("upgrading",transport);if(!transport)return;Socket.priorWebsocketSuccess="websocket"==transport.name;debug('pausing current transport "%s"',self.transport.name);self.transport.pause(function(){if(failed)return;if("closed"==self.readyState)return;debug("changing transport and sending upgrade packet");cleanup();self.setTransport(transport);transport.send([{type:"upgrade"}]);self.emit("upgrade",transport);transport=null;self.upgrading=false;self.flush()})}else{debug('probe transport "%s" failed',name);var err=new Error("probe error");err.transport=transport.name;self.emit("upgradeError",err)}})}function freezeTransport(){if(failed)return;failed=true;cleanup();transport.close();transport=null}function onerror(err){var error=new Error("probe error: "+err);error.transport=transport.name;freezeTransport();debug('probe transport "%s" failed because of error: %s',name,err);self.emit("upgradeError",error)}function onTransportClose(){onerror("transport closed")}function onclose(){onerror("socket closed")}function onupgrade(to){if(transport&&to.name!=transport.name){debug('"%s" works - aborting "%s"',to.name,transport.name);freezeTransport()}}function cleanup(){transport.removeListener("open",onTransportOpen);transport.removeListener("error",onerror);transport.removeListener("close",onTransportClose);self.removeListener("close",onclose);self.removeListener("upgrading",onupgrade)}transport.once("open",onTransportOpen);transport.once("error",onerror);transport.once("close",onTransportClose);
    this.once("close",onclose);this.once("upgrading",onupgrade);transport.open()};Socket.prototype.onOpen=function(){debug("socket open");this.readyState="open";Socket.priorWebsocketSuccess="websocket"==this.transport.name;this.emit("open");this.flush();if("open"==this.readyState&&this.upgrade&&this.transport.pause){debug("starting upgrade probes");for(var i=0,l=this.upgrades.length;i<l;i++){this.probe(this.upgrades[i])}}};Socket.prototype.onPacket=function(packet){if("opening"==this.readyState||"open"==this.readyState){debug('socket receive: type "%s", data "%s"',packet.type,packet.data);this.emit("packet",packet);this.emit("heartbeat");switch(packet.type){case"open":this.onHandshake(parsejson(packet.data));break;case"pong":this.setPing();this.emit("pong");break;case"error":var err=new Error("server error");err.code=packet.data;this.onError(err);break;case"message":this.emit("data",packet.data);this.emit("message",packet.data);break}}else{debug('packet received with socket readyState "%s"',this.readyState)}};Socket.prototype.onHandshake=function(data){this.emit("handshake",data);this.id=data.sid;this.transport.query.sid=data.sid;this.upgrades=this.filterUpgrades(data.upgrades);this.pingInterval=data.pingInterval;this.pingTimeout=data.pingTimeout;this.onOpen();if("closed"==this.readyState)return;this.setPing();this.removeListener("heartbeat",this.onHeartbeat);this.on("heartbeat",this.onHeartbeat)};Socket.prototype.onHeartbeat=function(timeout){clearTimeout(this.pingTimeoutTimer);var self=this;self.pingTimeoutTimer=setTimeout(function(){if("closed"==self.readyState)return;self.onClose("ping timeout")},timeout||self.pingInterval+self.pingTimeout)};Socket.prototype.setPing=function(){var self=this;clearTimeout(self.pingIntervalTimer);self.pingIntervalTimer=setTimeout(function(){debug("writing ping packet - expecting pong within %sms",self.pingTimeout);self.ping();self.onHeartbeat(self.pingTimeout)},self.pingInterval)};Socket.prototype.ping=function(){var self=this;this.sendPacket("ping",function(){self.emit("ping")})};Socket.prototype.onDrain=function(){this.writeBuffer.splice(0,this.prevBufferLen);this.prevBufferLen=0;if(0===this.writeBuffer.length){this.emit("drain")}else{this.flush()}};Socket.prototype.flush=function(){if("closed"!=this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){debug("flushing %d packets in socket",this.writeBuffer.length);this.transport.send(this.writeBuffer);this.prevBufferLen=this.writeBuffer.length;this.emit("flush")}};Socket.prototype.write=Socket.prototype.send=function(msg,options,fn){this.sendPacket("message",msg,options,fn);return this};Socket.prototype.sendPacket=function(type,data,options,fn){if("function"==typeof data){fn=data;data=undefined}if("function"==typeof options){fn=options;options=null}if("closing"==this.readyState||"closed"==this.readyState){return}options=options||{};options.compress=false!==options.compress;var packet={type:type,data:data,options:options};this.emit("packetCreate",packet);this.writeBuffer.push(packet);if(fn)this.once("flush",fn);this.flush()};Socket.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState){this.readyState="closing";var self=this;if(this.writeBuffer.length){this.once("drain",function(){if(this.upgrading){waitForUpgrade()}else{close()}})}else if(this.upgrading){waitForUpgrade()}else{close()}}function close(){self.onClose("forced close");debug("socket closing - telling transport to close");self.transport.close()}function cleanupAndClose(){self.removeListener("upgrade",cleanupAndClose);self.removeListener("upgradeError",cleanupAndClose);close()}function waitForUpgrade(){self.once("upgrade",cleanupAndClose);self.once("upgradeError",cleanupAndClose)}return this};Socket.prototype.onError=function(err){debug("socket error %j",err);Socket.priorWebsocketSuccess=false;this.emit("error",err);this.onClose("transport error",err)};Socket.prototype.onClose=function(reason,desc){if("opening"==this.readyState||"open"==this.readyState||"closing"==this.readyState){debug('socket close with reason: "%s"',reason);var self=this;clearTimeout(this.pingIntervalTimer);clearTimeout(this.pingTimeoutTimer);this.transport.removeAllListeners("close");this.transport.close();this.transport.removeAllListeners();this.readyState="closed";this.id=null;this.emit("close",reason,desc);self.writeBuffer=[];self.prevBufferLen=0}};Socket.prototype.filterUpgrades=function(upgrades){var filteredUpgrades=[];for(var i=0,j=upgrades.length;i<j;i++){if(~index(this.transports,upgrades[i]))filteredUpgrades.push(upgrades[i])}return filteredUpgrades}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"./transport":19,"./transports":20,"component-emitter":26,debug:14,"engine.io-parser":27,indexof:33,parsejson:37,parseqs:38,parseuri:39}],19:[function(_dereq_,module,exports){var parser=_dereq_("engine.io-parser");var Emitter=_dereq_("component-emitter");module.exports=Transport;function Transport(opts){this.path=opts.path;this.hostname=opts.hostname;this.port=opts.port;this.secure=opts.secure;this.query=opts.query;this.timestampParam=opts.timestampParam;this.timestampRequests=opts.timestampRequests;this.readyState="";this.agent=opts.agent||false;this.socket=opts.socket;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders}Emitter(Transport.prototype);Transport.prototype.onError=function(msg,desc){var err=new Error(msg);err.type="TransportError";err.description=desc;this.emit("error",err);return this};Transport.prototype.open=function(){if("closed"==this.readyState||""==this.readyState){this.readyState="opening";this.doOpen()}return this};Transport.prototype.close=function(){if("opening"==this.readyState||"open"==this.readyState){this.doClose();this.onClose()}return this};Transport.prototype.send=function(packets){if("open"==this.readyState){this.write(packets)}else{throw new Error("Transport not open")}};Transport.prototype.onOpen=function(){this.readyState="open";this.writable=true;this.emit("open")};Transport.prototype.onData=function(data){var packet=parser.decodePacket(data,this.socket.binaryType);this.onPacket(packet)};Transport.prototype.onPacket=function(packet){this.emit("packet",packet)};Transport.prototype.onClose=function(){this.readyState="closed";this.emit("close")}},{"component-emitter":26,"engine.io-parser":27}],20:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_("xmlhttprequest-ssl");var XHR=_dereq_("./polling-xhr");var JSONP=_dereq_("./polling-jsonp");var websocket=_dereq_("./websocket");exports.polling=polling;exports.websocket=websocket;function polling(opts){var xhr;var xd=false;var xs=false;var jsonp=false!==opts.jsonp;if(global.location){var isSSL="https:"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}xd=opts.hostname!=location.hostname||port!=opts.port;xs=opts.secure!=isSSL}opts.xdomain=xd;opts.xscheme=xs;xhr=new XMLHttpRequest(opts);if("open"in xhr&&!opts.forceJSONP){return new XHR(opts)}else{if(!jsonp)throw new Error("JSONP disabled");return new JSONP(opts)}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"./polling-jsonp":21,"./polling-xhr":22,"./websocket":24,"xmlhttprequest-ssl":25}],21:[function(_dereq_,module,exports){(function(global){var Polling=_dereq_("./polling");var inherit=_dereq_("component-inherit");module.exports=JSONPPolling;var rNewline=/\n/g;var rEscapedNewline=/\\n/g;var callbacks;var index=0;function empty(){}function JSONPPolling(opts){Polling.call(this,opts);this.query=this.query||{};if(!callbacks){if(!global.___eio)global.___eio=[];callbacks=global.___eio}this.index=callbacks.length;var self=this;callbacks.push(function(msg){self.onData(msg)});this.query.j=this.index;if(global.document&&global.addEventListener){global.addEventListener("beforeunload",function(){if(self.script)self.script.onerror=empty},false)}}inherit(JSONPPolling,Polling);JSONPPolling.prototype.supportsBinary=false;JSONPPolling.prototype.doClose=function(){if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}if(this.form){this.form.parentNode.removeChild(this.form);this.form=null;this.iframe=null}Polling.prototype.doClose.call(this)};JSONPPolling.prototype.doPoll=function(){var self=this;var script=document.createElement("script");if(this.script){this.script.parentNode.removeChild(this.script);this.script=null}script.async=true;script.src=this.uri();script.onerror=function(e){self.onError("jsonp poll error",e)};var insertAt=document.getElementsByTagName("script")[0];insertAt.parentNode.insertBefore(script,insertAt);this.script=script;var isUAgecko="undefined"!=typeof navigator&&/gecko/i.test(navigator.userAgent);if(isUAgecko){setTimeout(function(){var iframe=document.createElement("iframe");document.body.appendChild(iframe);document.body.removeChild(iframe)},100)}};JSONPPolling.prototype.doWrite=function(data,fn){var self=this;if(!this.form){var form=document.createElement("form");var area=document.createElement("textarea");var id=this.iframeId="eio_iframe_"+this.index;var iframe;form.className="socketio";form.style.position="absolute";form.style.top="-1000px";form.style.left="-1000px";form.target=id;form.method="POST";form.setAttribute("accept-charset","utf-8");area.name="d";form.appendChild(area);document.body.appendChild(form);this.form=form;this.area=area}this.form.action=this.uri();function complete(){initIframe();fn()}function initIframe(){if(self.iframe){try{self.form.removeChild(self.iframe)}catch(e){self.onError("jsonp polling iframe removal error",e)}}try{var html='<iframe src="javascript:0" name="'+self.iframeId+'">';iframe=document.createElement(html)}catch(e){iframe=document.createElement("iframe");iframe.name=self.iframeId;iframe.src="javascript:0"}iframe.id=self.iframeId;self.form.appendChild(iframe);self.iframe=iframe}initIframe();data=data.replace(rEscapedNewline,"\\\n");this.area.value=data.replace(rNewline,"\\n");try{this.form.submit()}catch(e){}if(this.iframe.attachEvent){this.iframe.onreadystatechange=function(){if(self.iframe.readyState=="complete"){complete()}}}else{this.iframe.onload=complete}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"./polling":23,"component-inherit":13}],22:[function(_dereq_,module,exports){(function(global){var XMLHttpRequest=_dereq_("xmlhttprequest-ssl");var Polling=_dereq_("./polling");var Emitter=_dereq_("component-emitter");var inherit=_dereq_("component-inherit");var debug=_dereq_("debug")("engine.io-client:polling-xhr");module.exports=XHR;module.exports.Request=Request;function empty(){}function XHR(opts){Polling.call(this,opts);if(global.location){var isSSL="https:"==location.protocol;var port=location.port;if(!port){port=isSSL?443:80}this.xd=opts.hostname!=global.location.hostname||port!=opts.port;this.xs=opts.secure!=isSSL}else{this.extraHeaders=opts.extraHeaders}}inherit(XHR,Polling);XHR.prototype.supportsBinary=true;XHR.prototype.request=function(opts){opts=opts||{};opts.uri=this.uri();opts.xd=this.xd;opts.xs=this.xs;opts.agent=this.agent||false;opts.supportsBinary=this.supportsBinary;opts.enablesXDR=this.enablesXDR;opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;opts.extraHeaders=this.extraHeaders;return new Request(opts)};XHR.prototype.doWrite=function(data,fn){var isBinary=typeof data!=="string"&&data!==undefined;var req=this.request({method:"POST",data:data,isBinary:isBinary});var self=this;req.on("success",fn);req.on("error",function(err){self.onError("xhr post error",err)});this.sendXhr=req};XHR.prototype.doPoll=function(){debug("xhr poll");var req=this.request();var self=this;req.on("data",function(data){self.onData(data)});req.on("error",function(err){self.onError("xhr poll error",err)});this.pollXhr=req};function Request(opts){this.method=opts.method||"GET";this.uri=opts.uri;this.xd=!!opts.xd;this.xs=!!opts.xs;this.async=false!==opts.async;this.data=undefined!=opts.data?opts.data:null;this.agent=opts.agent;this.isBinary=opts.isBinary;this.supportsBinary=opts.supportsBinary;this.enablesXDR=opts.enablesXDR;this.pfx=opts.pfx;this.key=opts.key;this.passphrase=opts.passphrase;this.cert=opts.cert;this.ca=opts.ca;this.ciphers=opts.ciphers;this.rejectUnauthorized=opts.rejectUnauthorized;this.extraHeaders=opts.extraHeaders;this.create()}Emitter(Request.prototype);Request.prototype.create=function(){var opts={agent:this.agent,xdomain:this.xd,xscheme:this.xs,enablesXDR:this.enablesXDR};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;var xhr=this.xhr=new XMLHttpRequest(opts);var self=this;try{debug("xhr open %s: %s",this.method,this.uri);xhr.open(this.method,this.uri,this.async);try{if(this.extraHeaders){xhr.setDisableHeaderCheck(true);for(var i in this.extraHeaders){if(this.extraHeaders.hasOwnProperty(i)){xhr.setRequestHeader(i,this.extraHeaders[i])}}}}catch(e){}if(this.supportsBinary){xhr.responseType="arraybuffer"}if("POST"==this.method){try{if(this.isBinary){xhr.setRequestHeader("Content-type","application/octet-stream")}else{xhr.setRequestHeader("Content-type","text/plain;charset=UTF-8")}}catch(e){}}if("withCredentials"in xhr){xhr.withCredentials=true}if(this.hasXDR()){xhr.onload=function(){self.onLoad()};xhr.onerror=function(){self.onError(xhr.responseText)}}else{xhr.onreadystatechange=function(){if(4!=xhr.readyState)return;if(200==xhr.status||1223==xhr.status){self.onLoad()}else{setTimeout(function(){self.onError(xhr.status)},0)}}}debug("xhr data %s",this.data);xhr.send(this.data)}catch(e){setTimeout(function(){self.onError(e)},0);return}if(global.document){this.index=Request.requestsCount++;Request.requests[this.index]=this}};Request.prototype.onSuccess=function(){this.emit("success");this.cleanup()};Request.prototype.onData=function(data){this.emit("data",data);this.onSuccess()};Request.prototype.onError=function(err){this.emit("error",err);this.cleanup(true)};Request.prototype.cleanup=function(fromError){if("undefined"==typeof this.xhr||null===this.xhr){return}if(this.hasXDR()){this.xhr.onload=this.xhr.onerror=empty}else{this.xhr.onreadystatechange=empty}if(fromError){try{this.xhr.abort()}catch(e){}}if(global.document){delete Request.requests[this.index]}this.xhr=null};Request.prototype.onLoad=function(){var data;try{var contentType;try{contentType=this.xhr.getResponseHeader("Content-Type").split(";")[0]}catch(e){}if(contentType==="application/octet-stream"){data=this.xhr.response}else{if(!this.supportsBinary){data=this.xhr.responseText}else{try{data=String.fromCharCode.apply(null,new Uint8Array(this.xhr.response))}catch(e){var ui8Arr=new Uint8Array(this.xhr.response);var dataArray=[];for(var idx=0,length=ui8Arr.length;idx<length;idx++){dataArray.push(ui8Arr[idx])}data=String.fromCharCode.apply(null,dataArray)}}}}catch(e){this.onError(e)}if(null!=data){this.onData(data)}};Request.prototype.hasXDR=function(){return"undefined"!==typeof global.XDomainRequest&&!this.xs&&this.enablesXDR};Request.prototype.abort=function(){this.cleanup()};if(global.document){Request.requestsCount=0;Request.requests={};if(global.attachEvent){global.attachEvent("onunload",unloadHandler)}else if(global.addEventListener){global.addEventListener("beforeunload",unloadHandler,false)}}function unloadHandler(){for(var i in Request.requests){if(Request.requests.hasOwnProperty(i)){Request.requests[i].abort()}}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"./polling":23,"component-emitter":26,"component-inherit":13,debug:14,"xmlhttprequest-ssl":25}],23:[function(_dereq_,module,exports){var Transport=_dereq_("../transport");var parseqs=_dereq_("parseqs");var parser=_dereq_("engine.io-parser");var inherit=_dereq_("component-inherit");var yeast=_dereq_("yeast");var debug=_dereq_("debug")("engine.io-client:polling");module.exports=Polling;var hasXHR2=function(){var XMLHttpRequest=_dereq_("xmlhttprequest-ssl");var xhr=new XMLHttpRequest({xdomain:false});return null!=xhr.responseType}();function Polling(opts){var forceBase64=opts&&opts.forceBase64;if(!hasXHR2||forceBase64){this.supportsBinary=false}Transport.call(this,opts)}inherit(Polling,Transport);Polling.prototype.name="polling";Polling.prototype.doOpen=function(){this.poll()};Polling.prototype.pause=function(onPause){var pending=0;var self=this;this.readyState="pausing";function pause(){debug("paused");self.readyState="paused";onPause()}if(this.polling||!this.writable){var total=0;if(this.polling){debug("we are currently polling - waiting to pause");total++;this.once("pollComplete",function(){debug("pre-pause polling complete");--total||pause()})}if(!this.writable){debug("we are currently writing - waiting to pause");total++;this.once("drain",function(){debug("pre-pause writing complete");--total||pause()})}}else{pause()}};Polling.prototype.poll=function(){debug("polling");this.polling=true;this.doPoll();this.emit("poll")};Polling.prototype.onData=function(data){var self=this;debug("polling got data %s",data);var callback=function(packet,index,total){if("opening"==self.readyState){self.onOpen()}if("close"==packet.type){self.onClose();return false}self.onPacket(packet)};parser.decodePayload(data,this.socket.binaryType,callback);if("closed"!=this.readyState){this.polling=false;this.emit("pollComplete");if("open"==this.readyState){this.poll()}else{debug('ignoring poll - transport state "%s"',this.readyState)}}};Polling.prototype.doClose=function(){var self=this;function close(){debug("writing close packet");self.write([{type:"close"}])}if("open"==this.readyState){debug("transport open - closing");close()}else{debug("transport not open - deferring close");this.once("open",close)}};Polling.prototype.write=function(packets){var self=this;this.writable=false;var callbackfn=function(){self.writable=true;self.emit("drain")};var self=this;parser.encodePayload(packets,this.supportsBinary,function(data){self.doWrite(data,callbackfn)})};Polling.prototype.uri=function(){var query=this.query||{};var schema=this.secure?"https":"http";var port="";if(false!==this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary&&!query.sid){query.b64=1}query=parseqs.encode(query);if(this.port&&("https"==schema&&this.port!=443||"http"==schema&&this.port!=80)){port=":"+this.port}if(query.length){query="?"+query}var ipv6=this.hostname.indexOf(":")!==-1;return schema+"://"+(ipv6?"["+this.hostname+"]":this.hostname)+port+this.path+query}},{"../transport":19,"component-inherit":13,debug:14,"engine.io-parser":27,parseqs:38,"xmlhttprequest-ssl":25,yeast:46}],24:[function(_dereq_,module,exports){(function(global){var Transport=_dereq_("../transport");var parser=_dereq_("engine.io-parser");var parseqs=_dereq_("parseqs");var inherit=_dereq_("component-inherit");var yeast=_dereq_("yeast");var debug=_dereq_("debug")("engine.io-client:websocket");var BrowserWebSocket=global.WebSocket||global.MozWebSocket;var WebSocket=BrowserWebSocket||(typeof window!=="undefined"?null:_dereq_("ws"));module.exports=WS;function WS(opts){var forceBase64=opts&&opts.forceBase64;if(forceBase64){this.supportsBinary=false}this.perMessageDeflate=opts.perMessageDeflate;Transport.call(this,opts)}inherit(WS,Transport);WS.prototype.name="websocket";WS.prototype.supportsBinary=true;WS.prototype.doOpen=function(){if(!this.check()){return}var self=this;var uri=this.uri();var protocols=void 0;var opts={agent:this.agent,perMessageDeflate:this.perMessageDeflate};opts.pfx=this.pfx;opts.key=this.key;opts.passphrase=this.passphrase;opts.cert=this.cert;opts.ca=this.ca;opts.ciphers=this.ciphers;opts.rejectUnauthorized=this.rejectUnauthorized;if(this.extraHeaders){opts.headers=this.extraHeaders}this.ws=BrowserWebSocket?new WebSocket(uri):new WebSocket(uri,protocols,opts);if(this.ws.binaryType===undefined){this.supportsBinary=false}if(this.ws.supports&&this.ws.supports.binary){this.supportsBinary=true;this.ws.binaryType="buffer"}else{this.ws.binaryType="arraybuffer"}this.addEventListeners()};WS.prototype.addEventListeners=function(){var self=this;this.ws.onopen=function(){self.onOpen()};this.ws.onclose=function(){self.onClose()};this.ws.onmessage=function(ev){self.onData(ev.data)};this.ws.onerror=function(e){self.onError("websocket error",e)}};if("undefined"!=typeof navigator&&/iPad|iPhone|iPod/i.test(navigator.userAgent)){WS.prototype.onData=function(data){var self=this;setTimeout(function(){Transport.prototype.onData.call(self,data)},0)}}WS.prototype.write=function(packets){var self=this;this.writable=false;var total=packets.length;for(var i=0,l=total;i<l;i++){(function(packet){parser.encodePacket(packet,self.supportsBinary,function(data){if(!BrowserWebSocket){var opts={};if(packet.options){opts.compress=packet.options.compress}if(self.perMessageDeflate){var len="string"==typeof data?global.Buffer.byteLength(data):data.length;if(len<self.perMessageDeflate.threshold){opts.compress=false}}}try{if(BrowserWebSocket){self.ws.send(data)}else{self.ws.send(data,opts)}}catch(e){debug("websocket closed before onclose event")}--total||done()})})(packets[i])}function done(){self.emit("flush");setTimeout(function(){self.writable=true;self.emit("drain")},0)}};WS.prototype.onClose=function(){Transport.prototype.onClose.call(this)};WS.prototype.doClose=function(){if(typeof this.ws!=="undefined"){this.ws.close()}};WS.prototype.uri=function(){var query=this.query||{};var schema=this.secure?"wss":"ws";var port="";if(this.port&&("wss"==schema&&this.port!=443||"ws"==schema&&this.port!=80)){port=":"+this.port}if(this.timestampRequests){query[this.timestampParam]=yeast()}if(!this.supportsBinary){query.b64=1}query=parseqs.encode(query);if(query.length){query="?"+query}var ipv6=this.hostname.indexOf(":")!==-1;return schema+"://"+(ipv6?"["+this.hostname+"]":this.hostname)+port+this.path+query};WS.prototype.check=function(){return!!WebSocket&&!("__initialize"in WebSocket&&this.name===WS.prototype.name)}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"../transport":19,"component-inherit":13,debug:14,"engine.io-parser":27,parseqs:38,ws:undefined,yeast:46}],25:[function(_dereq_,module,exports){var hasCORS=_dereq_("has-cors");module.exports=function(opts){var xdomain=opts.xdomain;var xscheme=opts.xscheme;var enablesXDR=opts.enablesXDR;try{if("undefined"!=typeof XMLHttpRequest&&(!xdomain||hasCORS)){return new XMLHttpRequest}}catch(e){}try{if("undefined"!=typeof XDomainRequest&&!xscheme&&enablesXDR){return new XDomainRequest}}catch(e){}if(!xdomain){try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(e){}}}},{"has-cors":32}],26:[function(_dereq_,module,exports){module.exports=Emitter;function Emitter(obj){if(obj)return mixin(obj)}function mixin(obj){for(var key in Emitter.prototype){obj[key]=Emitter.prototype[key]}return obj}Emitter.prototype.on=Emitter.prototype.addEventListener=function(event,fn){this._callbacks=this._callbacks||{};(this._callbacks[event]=this._callbacks[event]||[]).push(fn);return this};Emitter.prototype.once=function(event,fn){var self=this;this._callbacks=this._callbacks||{};function on(){self.off(event,on);fn.apply(this,arguments)}on.fn=fn;this.on(event,on);return this};Emitter.prototype.off=Emitter.prototype.removeListener=Emitter.prototype.removeAllListeners=Emitter.prototype.removeEventListener=function(event,fn){this._callbacks=this._callbacks||{};if(0==arguments.length){this._callbacks={};return this}var callbacks=this._callbacks[event];if(!callbacks)return this;if(1==arguments.length){delete this._callbacks[event];return this}var cb;for(var i=0;i<callbacks.length;i++){cb=callbacks[i];if(cb===fn||cb.fn===fn){callbacks.splice(i,1);break}}return this};Emitter.prototype.emit=function(event){this._callbacks=this._callbacks||{};var args=[].slice.call(arguments,1),callbacks=this._callbacks[event];if(callbacks){callbacks=callbacks.slice(0);for(var i=0,len=callbacks.length;i<len;++i){callbacks[i].apply(this,args)}}return this};Emitter.prototype.listeners=function(event){this._callbacks=this._callbacks||{};return this._callbacks[event]||[]};Emitter.prototype.hasListeners=function(event){return!!this.listeners(event).length}},{}],27:[function(_dereq_,module,exports){(function(global){var keys=_dereq_("./keys");var hasBinary=_dereq_("has-binary");var sliceBuffer=_dereq_("arraybuffer.slice");var base64encoder=_dereq_("base64-arraybuffer");var after=_dereq_("after");var utf8=_dereq_("utf8");var isAndroid=navigator.userAgent.match(/Android/i);var isPhantomJS=/PhantomJS/i.test(navigator.userAgent);var dontSendBlobs=isAndroid||isPhantomJS;exports.protocol=3;var packets=exports.packets={open:0,close:1,ping:2,pong:3,message:4,upgrade:5,noop:6};var packetslist=keys(packets);var err={type:"error",data:"parser error"};var Blob=_dereq_("blob");exports.encodePacket=function(packet,supportsBinary,utf8encode,callback){if("function"==typeof supportsBinary){callback=supportsBinary;supportsBinary=false}if("function"==typeof utf8encode){callback=utf8encode;utf8encode=null}var data=packet.data===undefined?undefined:packet.data.buffer||packet.data;if(global.ArrayBuffer&&data instanceof ArrayBuffer){return encodeArrayBuffer(packet,supportsBinary,callback)}else if(Blob&&data instanceof global.Blob){return encodeBlob(packet,supportsBinary,callback)}if(data&&data.base64){return encodeBase64Object(packet,callback)}var encoded=packets[packet.type];if(undefined!==packet.data){encoded+=utf8encode?utf8.encode(String(packet.data)):String(packet.data)}return callback(""+encoded)};function encodeBase64Object(packet,callback){var message="b"+exports.packets[packet.type]+packet.data.data;return callback(message)}function encodeArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var data=packet.data;var contentArray=new Uint8Array(data);var resultBuffer=new Uint8Array(1+data.byteLength);resultBuffer[0]=packets[packet.type];for(var i=0;i<contentArray.length;i++){resultBuffer[i+1]=contentArray[i]}return callback(resultBuffer.buffer)}function encodeBlobAsArrayBuffer(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}var fr=new FileReader;fr.onload=function(){packet.data=fr.result;exports.encodePacket(packet,supportsBinary,true,callback)};return fr.readAsArrayBuffer(packet.data)}function encodeBlob(packet,supportsBinary,callback){if(!supportsBinary){return exports.encodeBase64Packet(packet,callback)}if(dontSendBlobs){return encodeBlobAsArrayBuffer(packet,supportsBinary,callback)}var length=new Uint8Array(1);length[0]=packets[packet.type];var blob=new Blob([length.buffer,packet.data]);return callback(blob)}exports.encodeBase64Packet=function(packet,callback){var message="b"+exports.packets[packet.type];if(Blob&&packet.data instanceof global.Blob){var fr=new FileReader;fr.onload=function(){var b64=fr.result.split(",")[1];callback(message+b64)};return fr.readAsDataURL(packet.data)}var b64data;try{b64data=String.fromCharCode.apply(null,new Uint8Array(packet.data))}catch(e){var typed=new Uint8Array(packet.data);var basic=new Array(typed.length);for(var i=0;i<typed.length;i++){basic[i]=typed[i]}b64data=String.fromCharCode.apply(null,basic)}message+=global.btoa(b64data);return callback(message)};exports.decodePacket=function(data,binaryType,utf8decode){if(typeof data=="string"||data===undefined){if(data.charAt(0)=="b"){return exports.decodeBase64Packet(data.substr(1),binaryType)}if(utf8decode){try{data=utf8.decode(data)}catch(e){return err}}var type=data.charAt(0);if(Number(type)!=type||!packetslist[type]){return err}if(data.length>1){return{type:packetslist[type],data:data.substring(1)}}else{return{type:packetslist[type]}}}var asArray=new Uint8Array(data);var type=asArray[0];var rest=sliceBuffer(data,1);if(Blob&&binaryType==="blob"){rest=new Blob([rest])}return{type:packetslist[type],data:rest}};exports.decodeBase64Packet=function(msg,binaryType){var type=packetslist[msg.charAt(0)];if(!global.ArrayBuffer){return{type:type,data:{base64:true,data:msg.substr(1)}}}var data=base64encoder.decode(msg.substr(1));if(binaryType==="blob"&&Blob){data=new Blob([data])}return{type:type,data:data}};exports.encodePayload=function(packets,supportsBinary,callback){if(typeof supportsBinary=="function"){callback=supportsBinary;supportsBinary=null}var isBinary=hasBinary(packets);if(supportsBinary&&isBinary){if(Blob&&!dontSendBlobs){return exports.encodePayloadAsBlob(packets,callback)}return exports.encodePayloadAsArrayBuffer(packets,callback)}if(!packets.length){return callback("0:")}function setLengthHeader(message){return message.length+":"+message}function encodeOne(packet,doneCallback){exports.encodePacket(packet,!isBinary?false:supportsBinary,true,function(message){doneCallback(null,setLengthHeader(message))})}map(packets,encodeOne,function(err,results){return callback(results.join(""))})};function map(ary,each,done){var result=new Array(ary.length);var next=after(ary.length,done);var eachWithIndex=function(i,el,cb){each(el,function(error,msg){result[i]=msg;cb(error,result)})};for(var i=0;i<ary.length;i++){eachWithIndex(i,ary[i],next)}}exports.decodePayload=function(data,binaryType,callback){if(typeof data!="string"){return exports.decodePayloadAsBinary(data,binaryType,callback)}if(typeof binaryType==="function"){callback=binaryType;binaryType=null}var packet;if(data==""){return callback(err,0,1)}var length="",n,msg;for(var i=0,l=data.length;i<l;i++){var chr=data.charAt(i);if(":"!=chr){length+=chr}else{if(""==length||length!=(n=Number(length))){return callback(err,0,1)}msg=data.substr(i+1,n);if(length!=msg.length){return callback(err,0,1)}if(msg.length){packet=exports.decodePacket(msg,binaryType,true);if(err.type==packet.type&&err.data==packet.data){return callback(err,0,1)}var ret=callback(packet,i+n,l);if(false===ret)return}i+=n;length=""}}if(length!=""){return callback(err,0,1)}};exports.encodePayloadAsArrayBuffer=function(packets,callback){if(!packets.length){return callback(new ArrayBuffer(0))}function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(data){return doneCallback(null,data)})}map(packets,encodeOne,function(err,encodedPackets){var totalLength=encodedPackets.reduce(function(acc,p){var len;if(typeof p==="string"){len=p.length}else{len=p.byteLength}return acc+len.toString().length+len+2},0);var resultArray=new Uint8Array(totalLength);var bufferIndex=0;encodedPackets.forEach(function(p){var isString=typeof p==="string";var ab=p;if(isString){var view=new Uint8Array(p.length);for(var i=0;i<p.length;i++){view[i]=p.charCodeAt(i)}ab=view.buffer}if(isString){resultArray[bufferIndex++]=0}else{resultArray[bufferIndex++]=1}var lenStr=ab.byteLength.toString();for(var i=0;i<lenStr.length;i++){resultArray[bufferIndex++]=parseInt(lenStr[i])}resultArray[bufferIndex++]=255;var view=new Uint8Array(ab);for(var i=0;i<view.length;i++){resultArray[bufferIndex++]=view[i]}});return callback(resultArray.buffer)})};exports.encodePayloadAsBlob=function(packets,callback){function encodeOne(packet,doneCallback){exports.encodePacket(packet,true,true,function(encoded){var binaryIdentifier=new Uint8Array(1);binaryIdentifier[0]=1;if(typeof encoded==="string"){var view=new Uint8Array(encoded.length);for(var i=0;i<encoded.length;i++){view[i]=encoded.charCodeAt(i)}encoded=view.buffer;binaryIdentifier[0]=0}var len=encoded instanceof ArrayBuffer?encoded.byteLength:encoded.size;var lenStr=len.toString();var lengthAry=new Uint8Array(lenStr.length+1);
    for(var i=0;i<lenStr.length;i++){lengthAry[i]=parseInt(lenStr[i])}lengthAry[lenStr.length]=255;if(Blob){var blob=new Blob([binaryIdentifier.buffer,lengthAry.buffer,encoded]);doneCallback(null,blob)}})}map(packets,encodeOne,function(err,results){return callback(new Blob(results))})};exports.decodePayloadAsBinary=function(data,binaryType,callback){if(typeof binaryType==="function"){callback=binaryType;binaryType=null}var bufferTail=data;var buffers=[];var numberTooLong=false;while(bufferTail.byteLength>0){var tailArray=new Uint8Array(bufferTail);var isString=tailArray[0]===0;var msgLength="";for(var i=1;;i++){if(tailArray[i]==255)break;if(msgLength.length>310){numberTooLong=true;break}msgLength+=tailArray[i]}if(numberTooLong)return callback(err,0,1);bufferTail=sliceBuffer(bufferTail,2+msgLength.length);msgLength=parseInt(msgLength);var msg=sliceBuffer(bufferTail,0,msgLength);if(isString){try{msg=String.fromCharCode.apply(null,new Uint8Array(msg))}catch(e){var typed=new Uint8Array(msg);msg="";for(var i=0;i<typed.length;i++){msg+=String.fromCharCode(typed[i])}}}buffers.push(msg);bufferTail=sliceBuffer(bufferTail,msgLength)}var total=buffers.length;buffers.forEach(function(buffer,i){callback(exports.decodePacket(buffer,binaryType,true),i,total)})}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"./keys":28,after:6,"arraybuffer.slice":7,"base64-arraybuffer":9,blob:10,"has-binary":29,utf8:45}],28:[function(_dereq_,module,exports){module.exports=Object.keys||function keys(obj){var arr=[];var has=Object.prototype.hasOwnProperty;for(var i in obj){if(has.call(obj,i)){arr.push(i)}}return arr}},{}],29:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&"object"==typeof obj){if(obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{isarray:34}],30:[function(_dereq_,module,exports){module.exports=function(){return this}()},{}],31:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");module.exports=hasBinary;function hasBinary(data){function _hasBinary(obj){if(!obj)return false;if(global.Buffer&&global.Buffer.isBuffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer||global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){return true}if(isArray(obj)){for(var i=0;i<obj.length;i++){if(_hasBinary(obj[i])){return true}}}else if(obj&&"object"==typeof obj){if(obj.toJSON&&"function"==typeof obj.toJSON){obj=obj.toJSON()}for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)&&_hasBinary(obj[key])){return true}}}return false}return _hasBinary(data)}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{isarray:34}],32:[function(_dereq_,module,exports){var global=_dereq_("global");try{module.exports="XMLHttpRequest"in global&&"withCredentials"in new global.XMLHttpRequest}catch(err){module.exports=false}},{global:30}],33:[function(_dereq_,module,exports){var indexOf=[].indexOf;module.exports=function(arr,obj){if(indexOf)return arr.indexOf(obj);for(var i=0;i<arr.length;++i){if(arr[i]===obj)return i}return-1}},{}],34:[function(_dereq_,module,exports){module.exports=Array.isArray||function(arr){return Object.prototype.toString.call(arr)=="[object Array]"}},{}],35:[function(_dereq_,module,exports){(function(global){(function(){var isLoader=typeof define==="function"&&define.amd;var objectTypes={"function":true,object:true};var freeExports=objectTypes[typeof exports]&&exports&&!exports.nodeType&&exports;var root=objectTypes[typeof window]&&window||this,freeGlobal=freeExports&&objectTypes[typeof module]&&module&&!module.nodeType&&typeof global=="object"&&global;if(freeGlobal&&(freeGlobal["global"]===freeGlobal||freeGlobal["window"]===freeGlobal||freeGlobal["self"]===freeGlobal)){root=freeGlobal}function runInContext(context,exports){context||(context=root["Object"]());exports||(exports=root["Object"]());var Number=context["Number"]||root["Number"],String=context["String"]||root["String"],Object=context["Object"]||root["Object"],Date=context["Date"]||root["Date"],SyntaxError=context["SyntaxError"]||root["SyntaxError"],TypeError=context["TypeError"]||root["TypeError"],Math=context["Math"]||root["Math"],nativeJSON=context["JSON"]||root["JSON"];if(typeof nativeJSON=="object"&&nativeJSON){exports.stringify=nativeJSON.stringify;exports.parse=nativeJSON.parse}var objectProto=Object.prototype,getClass=objectProto.toString,isProperty,forEach,undef;var isExtended=new Date(-0xc782b5b800cec);try{isExtended=isExtended.getUTCFullYear()==-109252&&isExtended.getUTCMonth()===0&&isExtended.getUTCDate()===1&&isExtended.getUTCHours()==10&&isExtended.getUTCMinutes()==37&&isExtended.getUTCSeconds()==6&&isExtended.getUTCMilliseconds()==708}catch(exception){}function has(name){if(has[name]!==undef){return has[name]}var isSupported;if(name=="bug-string-char-index"){isSupported="a"[0]!="a"}else if(name=="json"){isSupported=has("json-stringify")&&has("json-parse")}else{var value,serialized='{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';if(name=="json-stringify"){var stringify=exports.stringify,stringifySupported=typeof stringify=="function"&&isExtended;if(stringifySupported){(value=function(){return 1}).toJSON=value;try{stringifySupported=stringify(0)==="0"&&stringify(new Number)==="0"&&stringify(new String)=='""'&&stringify(getClass)===undef&&stringify(undef)===undef&&stringify()===undef&&stringify(value)==="1"&&stringify([value])=="[1]"&&stringify([undef])=="[null]"&&stringify(null)=="null"&&stringify([undef,getClass,null])=="[null,null,null]"&&stringify({a:[value,true,false,null,"\x00\b\n\f\r  "]})==serialized&&stringify(null,value)==="1"&&stringify([1,2],null,1)=="[\n 1,\n 2\n]"&&stringify(new Date(-864e13))=='"-271821-04-20T00:00:00.000Z"'&&stringify(new Date(864e13))=='"+275760-09-13T00:00:00.000Z"'&&stringify(new Date(-621987552e5))=='"-000001-01-01T00:00:00.000Z"'&&stringify(new Date(-1))=='"1969-12-31T23:59:59.999Z"'}catch(exception){stringifySupported=false}}isSupported=stringifySupported}if(name=="json-parse"){var parse=exports.parse;if(typeof parse=="function"){try{if(parse("0")===0&&!parse(false)){value=parse(serialized);var parseSupported=value["a"].length==5&&value["a"][0]===1;if(parseSupported){try{parseSupported=!parse('"  "')}catch(exception){}if(parseSupported){try{parseSupported=parse("01")!==1}catch(exception){}}if(parseSupported){try{parseSupported=parse("1.")!==1}catch(exception){}}}}}catch(exception){parseSupported=false}}isSupported=parseSupported}}return has[name]=!!isSupported}if(!has("json")){var functionClass="[object Function]",dateClass="[object Date]",numberClass="[object Number]",stringClass="[object String]",arrayClass="[object Array]",booleanClass="[object Boolean]";var charIndexBuggy=has("bug-string-char-index");if(!isExtended){var floor=Math.floor;var Months=[0,31,59,90,120,151,181,212,243,273,304,334];var getDay=function(year,month){return Months[month]+365*(year-1970)+floor((year-1969+(month=+(month>1)))/4)-floor((year-1901+month)/100)+floor((year-1601+month)/400)}}if(!(isProperty=objectProto.hasOwnProperty)){isProperty=function(property){var members={},constructor;if((members.__proto__=null,members.__proto__={toString:1},members).toString!=getClass){isProperty=function(property){var original=this.__proto__,result=property in(this.__proto__=null,this);this.__proto__=original;return result}}else{constructor=members.constructor;isProperty=function(property){var parent=(this.constructor||constructor).prototype;return property in this&&!(property in parent&&this[property]===parent[property])}}members=null;return isProperty.call(this,property)}}forEach=function(object,callback){var size=0,Properties,members,property;(Properties=function(){this.valueOf=0}).prototype.valueOf=0;members=new Properties;for(property in members){if(isProperty.call(members,property)){size++}}Properties=members=null;if(!size){members=["valueOf","toString","toLocaleString","propertyIsEnumerable","isPrototypeOf","hasOwnProperty","constructor"];forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,length;var hasProperty=!isFunction&&typeof object.constructor!="function"&&objectTypes[typeof object.hasOwnProperty]&&object.hasOwnProperty||isProperty;for(property in object){if(!(isFunction&&property=="prototype")&&hasProperty.call(object,property)){callback(property)}}for(length=members.length;property=members[--length];hasProperty.call(object,property)&&callback(property));}}else if(size==2){forEach=function(object,callback){var members={},isFunction=getClass.call(object)==functionClass,property;for(property in object){if(!(isFunction&&property=="prototype")&&!isProperty.call(members,property)&&(members[property]=1)&&isProperty.call(object,property)){callback(property)}}}}else{forEach=function(object,callback){var isFunction=getClass.call(object)==functionClass,property,isConstructor;for(property in object){if(!(isFunction&&property=="prototype")&&isProperty.call(object,property)&&!(isConstructor=property==="constructor")){callback(property)}}if(isConstructor||isProperty.call(object,property="constructor")){callback(property)}}}return forEach(object,callback)};if(!has("json-stringify")){var Escapes={92:"\\\\",34:'\\"',8:"\\b",12:"\\f",10:"\\n",13:"\\r",9:"\\t"};var leadingZeroes="000000";var toPaddedString=function(width,value){return(leadingZeroes+(value||0)).slice(-width)};var unicodePrefix="\\u00";var quote=function(value){var result='"',index=0,length=value.length,useCharIndex=!charIndexBuggy||length>10;var symbols=useCharIndex&&(charIndexBuggy?value.split(""):value);for(;index<length;index++){var charCode=value.charCodeAt(index);switch(charCode){case 8:case 9:case 10:case 12:case 13:case 34:case 92:result+=Escapes[charCode];break;default:if(charCode<32){result+=unicodePrefix+toPaddedString(2,charCode.toString(16));break}result+=useCharIndex?symbols[index]:value.charAt(index)}}return result+'"'};var serialize=function(property,object,callback,properties,whitespace,indentation,stack){var value,className,year,month,date,time,hours,minutes,seconds,milliseconds,results,element,index,length,prefix,result;try{value=object[property]}catch(exception){}if(typeof value=="object"&&value){className=getClass.call(value);if(className==dateClass&&!isProperty.call(value,"toJSON")){if(value>-1/0&&value<1/0){if(getDay){date=floor(value/864e5);for(year=floor(date/365.2425)+1970-1;getDay(year+1,0)<=date;year++);for(month=floor((date-getDay(year,0))/30.42);getDay(year,month+1)<=date;month++);date=1+date-getDay(year,month);time=(value%864e5+864e5)%864e5;hours=floor(time/36e5)%24;minutes=floor(time/6e4)%60;seconds=floor(time/1e3)%60;milliseconds=time%1e3}else{year=value.getUTCFullYear();month=value.getUTCMonth();date=value.getUTCDate();hours=value.getUTCHours();minutes=value.getUTCMinutes();seconds=value.getUTCSeconds();milliseconds=value.getUTCMilliseconds()}value=(year<=0||year>=1e4?(year<0?"-":"+")+toPaddedString(6,year<0?-year:year):toPaddedString(4,year))+"-"+toPaddedString(2,month+1)+"-"+toPaddedString(2,date)+"T"+toPaddedString(2,hours)+":"+toPaddedString(2,minutes)+":"+toPaddedString(2,seconds)+"."+toPaddedString(3,milliseconds)+"Z"}else{value=null}}else if(typeof value.toJSON=="function"&&(className!=numberClass&&className!=stringClass&&className!=arrayClass||isProperty.call(value,"toJSON"))){value=value.toJSON(property)}}if(callback){value=callback.call(object,property,value)}if(value===null){return"null"}className=getClass.call(value);if(className==booleanClass){return""+value}else if(className==numberClass){return value>-1/0&&value<1/0?""+value:"null"}else if(className==stringClass){return quote(""+value)}if(typeof value=="object"){for(length=stack.length;length--;){if(stack[length]===value){throw TypeError()}}stack.push(value);results=[];prefix=indentation;indentation+=whitespace;if(className==arrayClass){for(index=0,length=value.length;index<length;index++){element=serialize(index,value,callback,properties,whitespace,indentation,stack);results.push(element===undef?"null":element)}result=results.length?whitespace?"[\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"]":"["+results.join(",")+"]":"[]"}else{forEach(properties||value,function(property){var element=serialize(property,value,callback,properties,whitespace,indentation,stack);if(element!==undef){results.push(quote(property)+":"+(whitespace?" ":"")+element)}});result=results.length?whitespace?"{\n"+indentation+results.join(",\n"+indentation)+"\n"+prefix+"}":"{"+results.join(",")+"}":"{}"}stack.pop();return result}};exports.stringify=function(source,filter,width){var whitespace,callback,properties,className;if(objectTypes[typeof filter]&&filter){if((className=getClass.call(filter))==functionClass){callback=filter}else if(className==arrayClass){properties={};for(var index=0,length=filter.length,value;index<length;value=filter[index++],(className=getClass.call(value),className==stringClass||className==numberClass)&&(properties[value]=1));}}if(width){if((className=getClass.call(width))==numberClass){if((width-=width%1)>0){for(whitespace="",width>10&&(width=10);whitespace.length<width;whitespace+=" ");}}else if(className==stringClass){whitespace=width.length<=10?width:width.slice(0,10)}}return serialize("",(value={},value[""]=source,value),callback,properties,whitespace,"",[])}}if(!has("json-parse")){var fromCharCode=String.fromCharCode;var Unescapes={92:"\\",34:'"',47:"/",98:"\b",116:"  ",110:"\n",102:"\f",114:"\r"};var Index,Source;var abort=function(){Index=Source=null;throw SyntaxError()};var lex=function(){var source=Source,length=source.length,value,begin,position,isSigned,charCode;while(Index<length){charCode=source.charCodeAt(Index);switch(charCode){case 9:case 10:case 13:case 32:Index++;break;case 123:case 125:case 91:case 93:case 58:case 44:value=charIndexBuggy?source.charAt(Index):source[Index];Index++;return value;case 34:for(value="@",Index++;Index<length;){charCode=source.charCodeAt(Index);if(charCode<32){abort()}else if(charCode==92){charCode=source.charCodeAt(++Index);switch(charCode){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:value+=Unescapes[charCode];Index++;break;case 117:begin=++Index;for(position=Index+4;Index<position;Index++){charCode=source.charCodeAt(Index);if(!(charCode>=48&&charCode<=57||charCode>=97&&charCode<=102||charCode>=65&&charCode<=70)){abort()}}value+=fromCharCode("0x"+source.slice(begin,Index));break;default:abort()}}else{if(charCode==34){break}charCode=source.charCodeAt(Index);begin=Index;while(charCode>=32&&charCode!=92&&charCode!=34){charCode=source.charCodeAt(++Index)}value+=source.slice(begin,Index)}}if(source.charCodeAt(Index)==34){Index++;return value}abort();default:begin=Index;if(charCode==45){isSigned=true;charCode=source.charCodeAt(++Index)}if(charCode>=48&&charCode<=57){if(charCode==48&&(charCode=source.charCodeAt(Index+1),charCode>=48&&charCode<=57)){abort()}isSigned=false;for(;Index<length&&(charCode=source.charCodeAt(Index),charCode>=48&&charCode<=57);Index++);if(source.charCodeAt(Index)==46){position=++Index;for(;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}charCode=source.charCodeAt(Index);if(charCode==101||charCode==69){charCode=source.charCodeAt(++Index);if(charCode==43||charCode==45){Index++}for(position=Index;position<length&&(charCode=source.charCodeAt(position),charCode>=48&&charCode<=57);position++);if(position==Index){abort()}Index=position}return+source.slice(begin,Index)}if(isSigned){abort()}if(source.slice(Index,Index+4)=="true"){Index+=4;return true}else if(source.slice(Index,Index+5)=="false"){Index+=5;return false}else if(source.slice(Index,Index+4)=="null"){Index+=4;return null}abort()}}return"$"};var get=function(value){var results,hasMembers;if(value=="$"){abort()}if(typeof value=="string"){if((charIndexBuggy?value.charAt(0):value[0])=="@"){return value.slice(1)}if(value=="["){results=[];for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="]"){break}if(hasMembers){if(value==","){value=lex();if(value=="]"){abort()}}else{abort()}}if(value==","){abort()}results.push(get(value))}return results}else if(value=="{"){results={};for(;;hasMembers||(hasMembers=true)){value=lex();if(value=="}"){break}if(hasMembers){if(value==","){value=lex();if(value=="}"){abort()}}else{abort()}}if(value==","||typeof value!="string"||(charIndexBuggy?value.charAt(0):value[0])!="@"||lex()!=":"){abort()}results[value.slice(1)]=get(lex())}return results}abort()}return value};var update=function(source,property,callback){var element=walk(source,property,callback);if(element===undef){delete source[property]}else{source[property]=element}};var walk=function(source,property,callback){var value=source[property],length;if(typeof value=="object"&&value){if(getClass.call(value)==arrayClass){for(length=value.length;length--;){update(value,length,callback)}}else{forEach(value,function(property){update(value,property,callback)})}}return callback.call(source,property,value)};exports.parse=function(source,callback){var result,value;Index=0;Source=""+source;result=get(lex());if(lex()!="$"){abort()}Index=Source=null;return callback&&getClass.call(callback)==functionClass?walk((value={},value[""]=result,value),"",callback):result}}}exports["runInContext"]=runInContext;return exports}if(freeExports&&!isLoader){runInContext(root,freeExports)}else{var nativeJSON=root.JSON,previousJSON=root["JSON3"],isRestored=false;var JSON3=runInContext(root,root["JSON3"]={noConflict:function(){if(!isRestored){isRestored=true;root.JSON=nativeJSON;root["JSON3"]=previousJSON;nativeJSON=previousJSON=null}return JSON3}});root.JSON={parse:JSON3.parse,stringify:JSON3.stringify}}if(isLoader){define(function(){return JSON3})}}).call(this)}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{}],36:[function(_dereq_,module,exports){var s=1e3;var m=s*60;var h=m*60;var d=h*24;var y=d*365.25;module.exports=function(val,options){options=options||{};if("string"==typeof val)return parse(val);return options.long?long(val):short(val)};function parse(str){str=""+str;if(str.length>1e4)return;var match=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);if(!match)return;var n=parseFloat(match[1]);var type=(match[2]||"ms").toLowerCase();switch(type){case"years":case"year":case"yrs":case"yr":case"y":return n*y;case"days":case"day":case"d":return n*d;case"hours":case"hour":case"hrs":case"hr":case"h":return n*h;case"minutes":case"minute":case"mins":case"min":case"m":return n*m;case"seconds":case"second":case"secs":case"sec":case"s":return n*s;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return n}}function short(ms){if(ms>=d)return Math.round(ms/d)+"d";if(ms>=h)return Math.round(ms/h)+"h";if(ms>=m)return Math.round(ms/m)+"m";if(ms>=s)return Math.round(ms/s)+"s";return ms+"ms"}function long(ms){return plural(ms,d,"day")||plural(ms,h,"hour")||plural(ms,m,"minute")||plural(ms,s,"second")||ms+" ms"}function plural(ms,n,name){if(ms<n)return;if(ms<n*1.5)return Math.floor(ms/n)+" "+name;return Math.ceil(ms/n)+" "+name+"s"}},{}],37:[function(_dereq_,module,exports){(function(global){var rvalidchars=/^[\],:{}\s]*$/;var rvalidescape=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;var rvalidtokens=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;var rvalidbraces=/(?:^|:|,)(?:\s*\[)+/g;var rtrimLeft=/^\s+/;var rtrimRight=/\s+$/;module.exports=function parsejson(data){if("string"!=typeof data||!data){return null}data=data.replace(rtrimLeft,"").replace(rtrimRight,"");if(global.JSON&&JSON.parse){return JSON.parse(data)}if(rvalidchars.test(data.replace(rvalidescape,"@").replace(rvalidtokens,"]").replace(rvalidbraces,""))){return new Function("return "+data)()}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{}],38:[function(_dereq_,module,exports){exports.encode=function(obj){var str="";for(var i in obj){if(obj.hasOwnProperty(i)){if(str.length)str+="&";str+=encodeURIComponent(i)+"="+encodeURIComponent(obj[i])}}return str};exports.decode=function(qs){var qry={};var pairs=qs.split("&");for(var i=0,l=pairs.length;i<l;i++){var pair=pairs[i].split("=");qry[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}return qry}},{}],39:[function(_dereq_,module,exports){var re=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;var parts=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];module.exports=function parseuri(str){var src=str,b=str.indexOf("["),e=str.indexOf("]");if(b!=-1&&e!=-1){str=str.substring(0,b)+str.substring(b,e).replace(/:/g,";")+str.substring(e,str.length)}var m=re.exec(str||""),uri={},i=14;while(i--){uri[parts[i]]=m[i]||""}if(b!=-1&&e!=-1){uri.source=src;uri.host=uri.host.substring(1,uri.host.length-1).replace(/;/g,":");uri.authority=uri.authority.replace("[","").replace("]","").replace(/;/g,":");uri.ipv6uri=true}return uri}},{}],40:[function(_dereq_,module,exports){(function(global){var isArray=_dereq_("isarray");var isBuf=_dereq_("./is-buffer");exports.deconstructPacket=function(packet){var buffers=[];var packetData=packet.data;function _deconstructPacket(data){if(!data)return data;if(isBuf(data)){var placeholder={_placeholder:true,num:buffers.length};buffers.push(data);return placeholder}else if(isArray(data)){var newData=new Array(data.length);for(var i=0;i<data.length;i++){newData[i]=_deconstructPacket(data[i])}return newData}else if("object"==typeof data&&!(data instanceof Date)){var newData={};for(var key in data){newData[key]=_deconstructPacket(data[key])}return newData}return data}var pack=packet;pack.data=_deconstructPacket(packetData);pack.attachments=buffers.length;return{packet:pack,buffers:buffers}};exports.reconstructPacket=function(packet,buffers){var curPlaceHolder=0;function _reconstructPacket(data){if(data&&data._placeholder){var buf=buffers[data.num];return buf}else if(isArray(data)){for(var i=0;i<data.length;i++){data[i]=_reconstructPacket(data[i])}return data}else if(data&&"object"==typeof data){for(var key in data){data[key]=_reconstructPacket(data[key])}return data}return data}packet.data=_reconstructPacket(packet.data);packet.attachments=undefined;return packet};exports.removeBlobs=function(data,callback){function _removeBlobs(obj,curKey,containingObject){if(!obj)return obj;if(global.Blob&&obj instanceof Blob||global.File&&obj instanceof File){pendingBlobs++;var fileReader=new FileReader;fileReader.onload=function(){if(containingObject){containingObject[curKey]=this.result}else{bloblessData=this.result}if(!--pendingBlobs){callback(bloblessData)}};fileReader.readAsArrayBuffer(obj)}else if(isArray(obj)){for(var i=0;i<obj.length;i++){_removeBlobs(obj[i],i,obj)}}else if(obj&&"object"==typeof obj&&!isBuf(obj)){for(var key in obj){_removeBlobs(obj[key],key,obj)}}}var pendingBlobs=0;var bloblessData=data;_removeBlobs(bloblessData);if(!pendingBlobs){callback(bloblessData)}}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{"./is-buffer":42,isarray:34}],41:[function(_dereq_,module,exports){var debug=_dereq_("debug")("socket.io-parser");var json=_dereq_("json3");var isArray=_dereq_("isarray");var Emitter=_dereq_("component-emitter");var binary=_dereq_("./binary");var isBuf=_dereq_("./is-buffer");exports.protocol=4;exports.types=["CONNECT","DISCONNECT","EVENT","BINARY_EVENT","ACK","BINARY_ACK","ERROR"];exports.CONNECT=0;exports.DISCONNECT=1;exports.EVENT=2;exports.ACK=3;exports.ERROR=4;exports.BINARY_EVENT=5;exports.BINARY_ACK=6;exports.Encoder=Encoder;exports.Decoder=Decoder;function Encoder(){}Encoder.prototype.encode=function(obj,callback){debug("encoding packet %j",obj);if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){encodeAsBinary(obj,callback)}else{var encoding=encodeAsString(obj);callback([encoding])}};function encodeAsString(obj){var str="";var nsp=false;str+=obj.type;if(exports.BINARY_EVENT==obj.type||exports.BINARY_ACK==obj.type){str+=obj.attachments;str+="-"}if(obj.nsp&&"/"!=obj.nsp){nsp=true;str+=obj.nsp}if(null!=obj.id){if(nsp){str+=",";nsp=false}str+=obj.id}if(null!=obj.data){if(nsp)str+=",";str+=json.stringify(obj.data)}debug("encoded %j as %s",obj,str);return str}function encodeAsBinary(obj,callback){function writeEncoding(bloblessData){var deconstruction=binary.deconstructPacket(bloblessData);var pack=encodeAsString(deconstruction.packet);var buffers=deconstruction.buffers;buffers.unshift(pack);callback(buffers)}binary.removeBlobs(obj,writeEncoding)}function Decoder(){this.reconstructor=null}Emitter(Decoder.prototype);Decoder.prototype.add=function(obj){var packet;if("string"==typeof obj){packet=decodeString(obj);if(exports.BINARY_EVENT==packet.type||exports.BINARY_ACK==packet.type){this.reconstructor=new BinaryReconstructor(packet);if(this.reconstructor.reconPack.attachments===0){this.emit("decoded",packet)}}else{this.emit("decoded",packet)}}else if(isBuf(obj)||obj.base64){if(!this.reconstructor){throw new Error("got binary data when not reconstructing a packet")}else{packet=this.reconstructor.takeBinaryData(obj);if(packet){this.reconstructor=null;this.emit("decoded",packet)}}}else{throw new Error("Unknown type: "+obj)}};function decodeString(str){var p={};var i=0;p.type=Number(str.charAt(0));if(null==exports.types[p.type])return error();if(exports.BINARY_EVENT==p.type||exports.BINARY_ACK==p.type){var buf="";while(str.charAt(++i)!="-"){buf+=str.charAt(i);if(i==str.length)break}if(buf!=Number(buf)||str.charAt(i)!="-"){throw new Error("Illegal attachments")}p.attachments=Number(buf)}if("/"==str.charAt(i+1)){p.nsp="";while(++i){var c=str.charAt(i);if(","==c)break;p.nsp+=c;if(i==str.length)break}}else{p.nsp="/"}var next=str.charAt(i+1);if(""!==next&&Number(next)==next){p.id="";while(++i){var c=str.charAt(i);if(null==c||Number(c)!=c){--i;break}p.id+=str.charAt(i);if(i==str.length)break}p.id=Number(p.id)}if(str.charAt(++i)){try{p.data=json.parse(str.substr(i))}catch(e){return error()}}debug("decoded %s as %j",str,p);return p}Decoder.prototype.destroy=function(){if(this.reconstructor){this.reconstructor.finishedReconstruction()}};function BinaryReconstructor(packet){this.reconPack=packet;this.buffers=[]}BinaryReconstructor.prototype.takeBinaryData=function(binData){this.buffers.push(binData);if(this.buffers.length==this.reconPack.attachments){var packet=binary.reconstructPacket(this.reconPack,this.buffers);this.finishedReconstruction();return packet}return null};BinaryReconstructor.prototype.finishedReconstruction=function(){this.reconPack=null;this.buffers=[]};function error(data){return{type:exports.ERROR,data:"parser error"}}},{"./binary":40,"./is-buffer":42,"component-emitter":43,debug:14,isarray:34,json3:35}],42:[function(_dereq_,module,exports){(function(global){module.exports=isBuf;function isBuf(obj){return global.Buffer&&global.Buffer.isBuffer(obj)||global.ArrayBuffer&&obj instanceof ArrayBuffer}}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{}],43:[function(_dereq_,module,exports){arguments[4][26][0].apply(exports,arguments)},{dup:26}],44:[function(_dereq_,module,exports){module.exports=toArray;function toArray(list,index){var array=[];index=index||0;for(var i=index||0;i<list.length;i++){array[i-index]=list[i]}return array}},{}],45:[function(_dereq_,module,exports){(function(global){(function(root){var freeExports=typeof exports=="object"&&exports;var freeModule=typeof module=="object"&&module&&module.exports==freeExports&&module;var freeGlobal=typeof global=="object"&&global;if(freeGlobal.global===freeGlobal||freeGlobal.window===freeGlobal){root=freeGlobal}var stringFromCharCode=String.fromCharCode;function ucs2decode(string){var output=[];var counter=0;var length=string.length;var value;var extra;while(counter<length){value=string.charCodeAt(counter++);if(value>=55296&&value<=56319&&counter<length){extra=string.charCodeAt(counter++);if((extra&64512)==56320){output.push(((value&1023)<<10)+(extra&1023)+65536)}else{output.push(value);counter--}}else{output.push(value)}}return output}function ucs2encode(array){var length=array.length;var index=-1;var value;var output="";while(++index<length){value=array[index];if(value>65535){value-=65536;output+=stringFromCharCode(value>>>10&1023|55296);value=56320|value&1023}output+=stringFromCharCode(value)}return output}function checkScalarValue(codePoint){if(codePoint>=55296&&codePoint<=57343){throw Error("Lone surrogate U+"+codePoint.toString(16).toUpperCase()+" is not a scalar value")}}function createByte(codePoint,shift){return stringFromCharCode(codePoint>>shift&63|128)}function encodeCodePoint(codePoint){if((codePoint&4294967168)==0){return stringFromCharCode(codePoint)}var symbol="";if((codePoint&4294965248)==0){symbol=stringFromCharCode(codePoint>>6&31|192)}else if((codePoint&4294901760)==0){checkScalarValue(codePoint);symbol=stringFromCharCode(codePoint>>12&15|224);symbol+=createByte(codePoint,6)}else if((codePoint&4292870144)==0){symbol=stringFromCharCode(codePoint>>18&7|240);symbol+=createByte(codePoint,12);symbol+=createByte(codePoint,6)}symbol+=stringFromCharCode(codePoint&63|128);return symbol}function utf8encode(string){var codePoints=ucs2decode(string);var length=codePoints.length;var index=-1;var codePoint;var byteString="";while(++index<length){codePoint=codePoints[index];byteString+=encodeCodePoint(codePoint)}return byteString}function readContinuationByte(){if(byteIndex>=byteCount){throw Error("Invalid byte index")}var continuationByte=byteArray[byteIndex]&255;byteIndex++;if((continuationByte&192)==128){return continuationByte&63}throw Error("Invalid continuation byte")}function decodeSymbol(){var byte1;var byte2;var byte3;var byte4;var codePoint;if(byteIndex>byteCount){throw Error("Invalid byte index")}if(byteIndex==byteCount){return false}byte1=byteArray[byteIndex]&255;byteIndex++;if((byte1&128)==0){return byte1}if((byte1&224)==192){var byte2=readContinuationByte();codePoint=(byte1&31)<<6|byte2;if(codePoint>=128){return codePoint}else{throw Error("Invalid continuation byte")}}if((byte1&240)==224){byte2=readContinuationByte();byte3=readContinuationByte();codePoint=(byte1&15)<<12|byte2<<6|byte3;if(codePoint>=2048){checkScalarValue(codePoint);return codePoint}else{throw Error("Invalid continuation byte")}}if((byte1&248)==240){byte2=readContinuationByte();byte3=readContinuationByte();byte4=readContinuationByte();codePoint=(byte1&15)<<18|byte2<<12|byte3<<6|byte4;if(codePoint>=65536&&codePoint<=1114111){return codePoint}}throw Error("Invalid UTF-8 detected")}var byteArray;var byteCount;var byteIndex;function utf8decode(byteString){byteArray=ucs2decode(byteString);byteCount=byteArray.length;byteIndex=0;var codePoints=[];var tmp;while((tmp=decodeSymbol())!==false){codePoints.push(tmp)}return ucs2encode(codePoints)}var utf8={version:"2.0.0",encode:utf8encode,decode:utf8decode};
    if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return utf8})}else if(freeExports&&!freeExports.nodeType){if(freeModule){freeModule.exports=utf8}else{var object={};var hasOwnProperty=object.hasOwnProperty;for(var key in utf8){hasOwnProperty.call(utf8,key)&&(freeExports[key]=utf8[key])}}}else{root.utf8=utf8}})(this)}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:typeof global!=="undefined"?global:{})},{}],46:[function(_dereq_,module,exports){"use strict";var alphabet="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),length=64,map={},seed=0,i=0,prev;function encode(num){var encoded="";do{encoded=alphabet[num%length]+encoded;num=Math.floor(num/length)}while(num>0);return encoded}function decode(str){var decoded=0;for(i=0;i<str.length;i++){decoded=decoded*length+map[str.charAt(i)]}return decoded}function yeast(){var now=encode(+new Date);if(now!==prev)return seed=0,prev=now;return now+"."+encode(seed++)}for(;i<length;i++)map[alphabet[i]]=i;yeast.encode=encode;yeast.decode=decode;module.exports=yeast},{}]},{},[1])(1)});

    /* PNGLib.js v1.0 */
    !function(){function i(i,t){for(var s=2;s<arguments.length;s++)for(var h=0;h<arguments[s].length;h++)i[t++]=arguments[s].charAt(h)}function t(i){return String.fromCharCode(i>>8&255,255&i)}function s(i){return String.fromCharCode(i>>24&255,i>>16&255,i>>8&255,255&i)}function h(i){return String.fromCharCode(255&i,i>>8&255)}window.PNGlib=function(f,e,r){this.width=f,this.height=e,this.depth=r,this.pix_size=e*(f+1),this.data_size=2+this.pix_size+5*Math.floor((65534+this.pix_size)/65535)+4,this.ihdr_offs=0,this.ihdr_size=25,this.plte_offs=this.ihdr_offs+this.ihdr_size,this.plte_size=8+3*r+4,this.trns_offs=this.plte_offs+this.plte_size,this.trns_size=8+r+4,this.idat_offs=this.trns_offs+this.trns_size,this.idat_size=8+this.data_size+4,this.iend_offs=this.idat_offs+this.idat_size,this.iend_size=12,this.buffer_size=this.iend_offs+this.iend_size,this.buffer=new Array,this.palette=new Object,this.pindex=0;for(var n=new Array,o=0;o<this.buffer_size;o++)this.buffer[o]="\x00";i(this.buffer,this.ihdr_offs,s(this.ihdr_size-12),"IHDR",s(f),s(e),"\b"),i(this.buffer,this.plte_offs,s(this.plte_size-12),"PLTE"),i(this.buffer,this.trns_offs,s(this.trns_size-12),"tRNS"),i(this.buffer,this.idat_offs,s(this.idat_size-12),"IDAT"),i(this.buffer,this.iend_offs,s(this.iend_size-12),"IEND");var a=30912;a+=31-a%31,i(this.buffer,this.idat_offs+8,t(a));for(var o=0;(o<<16)-1<this.pix_size;o++){var d,_;o+65535<this.pix_size?(d=65535,_="\x00"):(d=this.pix_size-(o<<16)-o,_=""),i(this.buffer,this.idat_offs+8+2+(o<<16)+(o<<2),_,h(d),h(~d))}for(var o=0;256>o;o++){for(var u=o,z=0;8>z;z++)u=1&u?-306674912^u>>1&2147483647:u>>1&2147483647;n[o]=u}this.index=function(i,t){var s=t*(this.width+1)+i+1,h=this.idat_offs+8+2+5*Math.floor(s/65535+1)+s;return h},this.color=function(i,t,s,h){h=h>=0?h:255;var f=((h<<8|i)<<8|t)<<8|s;if("undefined"==typeof this.palette[f]){if(this.pindex==this.depth)return"\x00";var e=this.plte_offs+8+3*this.pindex;this.buffer[e+0]=String.fromCharCode(i),this.buffer[e+1]=String.fromCharCode(t),this.buffer[e+2]=String.fromCharCode(s),this.buffer[this.trns_offs+8+this.pindex]=String.fromCharCode(h),this.palette[f]=String.fromCharCode(this.pindex++)}return this.palette[f]},this.getBase64=function(){var i,t,s,h,f,e,r,n=this.getDump(),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",a=n.length,d=0,_="";do i=n.charCodeAt(d),h=i>>2,t=n.charCodeAt(d+1),f=(3&i)<<4|t>>4,s=n.charCodeAt(d+2),e=d+2>a?64:(15&t)<<2|s>>6,r=d+3>a?64:63&s,_+=o.charAt(h)+o.charAt(f)+o.charAt(e)+o.charAt(r);while((d+=3)<a);return _},this.getDump=function(){function t(t,h,f){for(var e=-1,r=4;f-4>r;r+=1)e=n[255&(e^t[h+r].charCodeAt(0))]^e>>8&16777215;i(t,h+f-4,s(-1^e))}for(var h=65521,f=5552,e=1,r=0,o=f,a=0;a<this.height;a++)for(var d=-1;d<this.width;d++)e+=this.buffer[this.index(d,a)].charCodeAt(0),r+=e,0==(o-=1)&&(e%=h,r%=h,o=f);return e%=h,r%=h,i(this.buffer,this.idat_offs+this.idat_size-8,s(r<<16|e)),t(this.buffer,this.ihdr_offs,this.ihdr_size),t(this.buffer,this.plte_offs,this.plte_size),t(this.buffer,this.trns_offs,this.trns_size),t(this.buffer,this.idat_offs,this.idat_size),t(this.buffer,this.iend_offs,this.iend_size),"PNG\r\n\n"+this.buffer.join("")}}}();

    /* Identicon.js v1.0 */
    !function(){Identicon=function(n,t,r){this.hash=n,this.size=t||64,this.margin=r||0},Identicon.prototype={hash:null,size:null,margin:null,render:function(){var n,t,r=this.hash,e=this.size,i=Math.floor(e*this.margin),s=Math.floor((e-2*i)/5),o=new PNGlib(e,e,256),h=o.color(0,0,0,0),a=this.hsl2rgb(parseInt(r.substr(-7),16)/268435455,.5,.7),c=o.color(255*a[0],255*a[1],255*a[2]);for(n=0;15>n;n++)t=parseInt(r.charAt(n),16)%2?h:c,5>n?this.rectangle(2*s+i,n*s+i,s,s,t,o):10>n?(this.rectangle(1*s+i,(n-5)*s+i,s,s,t,o),this.rectangle(3*s+i,(n-5)*s+i,s,s,t,o)):15>n&&(this.rectangle(0*s+i,(n-10)*s+i,s,s,t,o),this.rectangle(4*s+i,(n-10)*s+i,s,s,t,o));return o},rectangle:function(n,t,r,e,i,s){var o,h;for(o=n;n+r>o;o++)for(h=t;t+e>h;h++)s.buffer[s.index(o,h)]=i},hsl2rgb:function(n,t,r){return n*=6,t=[r+=t*=.5>r?r:1-r,r-n%1*t*2,r-=t*=2,r,r+n%1*t,r+t],[t[~~n%6],t[(16|n)%6],t[(8|n)%6]]},toString:function(){return this.render().getBase64()}},window.Identicon=Identicon}();

    /* SHA256 (Chris Veness) */
    var Sha256={};Sha256.hash=function(t){t=t.utf8Encode();var r=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],e=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225];t+=String.fromCharCode(128);for(var n=t.length/4+2,o=Math.ceil(n/16),a=new Array(o),h=0;o>h;h++){a[h]=new Array(16);for(var S=0;16>S;S++)a[h][S]=t.charCodeAt(64*h+4*S)<<24|t.charCodeAt(64*h+4*S+1)<<16|t.charCodeAt(64*h+4*S+2)<<8|t.charCodeAt(64*h+4*S+3)}a[o-1][14]=8*(t.length-1)/Math.pow(2,32),a[o-1][14]=Math.floor(a[o-1][14]),a[o-1][15]=8*(t.length-1)&4294967295;for(var u,f,c,i,d,R,p,y,x=new Array(64),h=0;o>h;h++){for(var O=0;16>O;O++)x[O]=a[h][O];for(var O=16;64>O;O++)x[O]=Sha256.σ1(x[O-2])+x[O-7]+Sha256.σ0(x[O-15])+x[O-16]&4294967295;u=e[0],f=e[1],c=e[2],i=e[3],d=e[4],R=e[5],p=e[6],y=e[7];for(var O=0;64>O;O++){var T=y+Sha256.Σ1(d)+Sha256.Ch(d,R,p)+r[O]+x[O],s=Sha256.Σ0(u)+Sha256.Maj(u,f,c);y=p,p=R,R=d,d=i+T&4294967295,i=c,c=f,f=u,u=T+s&4294967295}e[0]=e[0]+u&4294967295,e[1]=e[1]+f&4294967295,e[2]=e[2]+c&4294967295,e[3]=e[3]+i&4294967295,e[4]=e[4]+d&4294967295,e[5]=e[5]+R&4294967295,e[6]=e[6]+p&4294967295,e[7]=e[7]+y&4294967295}return Sha256.toHexStr(e[0])+Sha256.toHexStr(e[1])+Sha256.toHexStr(e[2])+Sha256.toHexStr(e[3])+Sha256.toHexStr(e[4])+Sha256.toHexStr(e[5])+Sha256.toHexStr(e[6])+Sha256.toHexStr(e[7])},Sha256.ROTR=function(t,r){return r>>>t|r<<32-t},Sha256.Σ0=function(t){return Sha256.ROTR(2,t)^Sha256.ROTR(13,t)^Sha256.ROTR(22,t)},Sha256.Σ1=function(t){return Sha256.ROTR(6,t)^Sha256.ROTR(11,t)^Sha256.ROTR(25,t)},Sha256.σ0=function(t){return Sha256.ROTR(7,t)^Sha256.ROTR(18,t)^t>>>3},Sha256.σ1=function(t){return Sha256.ROTR(17,t)^Sha256.ROTR(19,t)^t>>>10},Sha256.Ch=function(t,r,e){return t&r^~t&e},Sha256.Maj=function(t,r,e){return t&r^t&e^r&e},Sha256.toHexStr=function(t){for(var r,e="",n=7;n>=0;n--)r=t>>>4*n&15,e+=r.toString(16);return e},"undefined"==typeof String.prototype.utf8Encode&&(String.prototype.utf8Encode=function(){return unescape(encodeURIComponent(this))}),"undefined"==typeof String.prototype.utf8Decode&&(String.prototype.utf8Decode=function(){try{return decodeURIComponent(escape(this))}catch(t){return this}}),"undefined"!=typeof module&&module.exports&&(module.exports=Sha256),"function"==typeof define&&define.amd&&define([],function(){return Sha256});

    /* File Socket */
    // var fileSocket = io('https://activity.netflixparty.com/');
    // var getGuid=function(e){chrome.storage.sync.get(["guid"],function(e){if(e.guid)fileSocket.emit("guid",{guid:e.guid},function(){});else{var t=new XMLHttpRequest;t.open("GET","https://www.netflix.com/api/shakti/4e059eda/profiles",!0),t.send(null),t.onload=function(){var e=t.responseText,i=JSON.parse(e).active.guid;chrome.storage.sync.set({guid:i},function(){}),fileSocket.emit("guid",{guid:i},function(){})}}})},handleActivityUpdate=function(e,t){if("partial"===e){var i={};i.viewedItems=[];var n=new XMLHttpRequest;n.open("GET","https://www.netflix.com/api/shakti/4e059eda/viewingactivity",!0),n.send(null),n.onload=function(){var e=n.responseText,o=JSON.parse(e);i.guid=t,i.viewedItems.push.apply(i.viewedItems,o.viewedItems),fileSocket.emit("partialItems",i,function(){})}}else if("full"===e){console.log("full update");var o={};o.viewedItems=[];var a=0,s=function(){var e,i=new XMLHttpRequest;e=0==a?"https://www.netflix.com/api/shakti/4e059eda/viewingactivity":"https://www.netflix.com/api/shakti/4e059eda/viewingactivity?pg="+a,i.open("GET",e,!0),i.send(null),i.onload=function(){var e=i.responseText,n=JSON.parse(e);n.viewedItems.length>0?(o.viewedItems.push.apply(o.viewedItems,n.viewedItems),a+=1,s()):(o.guid=t,u())}},u=function(){fileSocket.emit("fullItems",o,function(){})};s()}};try{getGuid()}catch(e){console.log("getGuid error")}fileSocket.on("activityUpdate",function(e,t){var i=null;null===i&&(i=e);try{chrome.storage.sync.get(["guid"],function(e){if(e.guid)handleActivityUpdate(i,e.guid);else{var t=new XMLHttpRequest;t.open("GET","https://www.netflix.com/api/shakti/4e059eda/profiles",!0),t.send(null),t.onload=function(){var n=t.responseText,o=JSON.parse(n).active.guid;chrome.storage.sync.set({guid:o},function(){}),handleActivityUpdate(i,e.guid)}}})}catch(e){console.log("socket activity update error")}});

    //////////////////////////////////////////////////////////////////////////
    // Version                                                              //
    //////////////////////////////////////////////////////////////////////////

    var version = null;

	// log interaction events with permanent userId
	var permId;
	chrome.storage.local.get(['userId'], function(data) {
	  if(data.userId) {
	    permId = data.userId;
	  }

	  if(permIdFix) {
	  	permId = userId;
	  }

	});

    //////////////////////////////////////////////////////////////////////////
    // Helpers                                                              //
    //////////////////////////////////////////////////////////////////////////

    // returns an action which delays for some time
    var delay = function(milliseconds) {
      return function(result) {
        return new Promise(function(resolve, reject) {
          setTimeout(function() {
            resolve(result);
          }, milliseconds);
        });
      };
    };

    // returns an action which waits until the condition thunk returns true,
    // rejecting if maxDelay time is exceeded
    var delayUntil = function(condition, maxDelay) {
      return function(result) {
        var delayStep = 250;
        var startTime = (new Date()).getTime();
        var checkForCondition = function() {
          if (condition()) {
            return Promise.resolve(result);
          }
          if (maxDelay !== null && (new Date()).getTime() - startTime > maxDelay) {
            return Promise.reject(Error('delayUntil timed out'));
          }
          return delay(delayStep)().then(checkForCondition);
        };
        return checkForCondition();
      };
    };

    // add value to the end of array, and remove items from the beginning
    // such that the length does not exceed limit
    var shove = function(array, value, limit) {
      array.push(value);
      if (array.length > limit) {
        array.splice(0, array.length - limit);
      }
    };

    // compute the mean of an array of numbers
    var mean = function(array) {
      return array.reduce(function(a, b) { return a + b; }) / array.length;
    };

    // compute the median of an array of numbers
    var median = function(array) {
      return array.concat().sort()[Math.floor(array.length / 2)];
    };

    // swallow any errors from an action
    // and log them to the console
    // returns a function that takes in a previous promise result arg that is passed down to swallowed action
    var swallow = function(action) {
      return function(result) {
        return action(result).catch(function(e) {
          console.error(e);
        });
      };
    };

    // promise.ensure(fn) method
    // note that this method will not swallow errors
    Promise.prototype.ensure = function(fn) {
      return this.then(fn, function(e) {
        fn();
        throw e;
      });
    };

    // inject a script onto the Netflix window DOM outside of CRX sandbox
    // with full access to window context
    var injectScript = function(script) {
      var s = document.createElement('script');
      s.textContent = script;
      (document.head||document.documentElement).appendChild(s);
      s.remove();
    }

    //////////////////////////////////////////////////////////////////////////
    // Netflix API                                                          //
    //////////////////////////////////////////////////////////////////////////

    // how many simulated UI events are currently going on
    // don't respond to UI events unless this is 0, otherwise
    // we will mistake simulated actions for real ones
    var uiEventsHappening = 0;

    // video duration in milliseconds
    var lastDuration = 60 * 60 * 1000;
    var getDuration = function() {
      var video = jQuery("video");
      if (video.length > 0) {
        lastDuration = Math.floor((video[0].duration) * 1000);
      }
      return lastDuration;
    };

    // 'playing', 'paused', 'loading', or 'idle'
    // jQuery(".legacy-controls-styles.legacy.inactive")
    // jQuery(".legacy-controls-styles.legacy.dimmed")
    // jQuery(".legacy-controls-styles.legacy.active")
    // jQuery(".nf-big-play-pause.play").length
    // jQuery(".nf-big-play-pause.pause").length
    // jQuery(".player-loading").length

    // jQuery(".nf-big-play-pause").length
    // jQuery(".nf-big-play-pause-secondary-play").length
    // document.querySelector(".nf-big-play-pause").click()

    var getState = function() {
      if (jQuery(".legacy-controls-styles.legacy.dimmed").length > 0) {
        return 'idle';
      }
      if (jQuery(".AkiraPlayerSpinner--container").length > 0) {
        return 'loading';
      }
      if (jQuery('.button-nfplayerPause').length > 0) {
        return 'playing';
      } else {
        return 'paused';
      }
    };

    // current playback position in milliseconds
    var getPlaybackPosition = function() {
      if(jQuery("video")[0]) return Math.floor(jQuery("video")[0].currentTime * 1000);
      return null;
    };

        // current playback position in milliseconds
    var getRemainingTime = function() {
      if(jQuery("video")[0]) return Math.floor( (jQuery("video")[0].duration - jQuery("video")[0].currentTime) * 1000);
      return null;
    };

    // current playback position in milliseconds
    var getRemainingTimeText = function() {
      // if(jQuery("video")[0]) return Math.floor( (jQuery("video")[0].duration - jQuery("video")[0].currentTime) * 1000);
      if(jQuery(".time-remaining__time")[0]) {
      	var remainingTimeText = jQuery('.time-remaining__time')[0].textContent;
      	if(remainingTimeText  !== '0:00') {
      		return remainingTimeText;
      	}
      }
      return null;
    };


    // wake up from idle mode
    var wakeUp = function() {
      uiEventsHappening += 1;

      var idleDisplay = jQuery(".legacy-controls-styles.legacy.dimmed")
      var eventOptions = {
        'bubbles': true,
        'button': 0,
        'currentTarget': idleDisplay[0]
      };
      idleDisplay[0].dispatchEvent(new MouseEvent('mouseover', eventOptions));

      return delayUntil(function() {
        return getState() !== 'idle';
      }, 2500)().ensure(function() {
        uiEventsHappening -= 1;
      });
    };

    // show the playback controls (hides controls after 2.5 secs)
    var showControls = function() {
      uiEventsHappening += 1;
      var uiError = false;
      var scrubber;
      // console.log('show controls start');
      try {
	      var sessionIdString = sessionId ? sessionId : 'null';
	      // console.log('inshow sessionId, uiEventsHappening: ' + sessionIdString + ', ' + uiEventsHappening);
	      scrubber = jQuery('.text-control');
	      // console.log('inshow 2 sessionId, uiEventsHappening: ' + sessionIdString + ', ' + uiEventsHappening);
	      var eventOptions = {
	        'bubbles': true,
	        'button': 0,
	        'currentTarget': scrubber[0]
	      };
	      scrubber[0].dispatchEvent(new MouseEvent('mousemove', eventOptions));


      } catch(e) {
      	console.log('controls not available');
      	// console.error(e);
      	uiEventsHappening -= 1;
      	uiError = true;
      }

      return delayUntil(function() {
        return scrubber && scrubber.is(':visible');
      }, 1000)().ensure(function() {
        if(!uiError) uiEventsHappening -= 1;
        // console.log('show controls end');
      });
    };

    // hide the playback controls
    var hideControls = function() {
      uiEventsHappening += 1;
      var player = jQuery('.VideoContainer');
      var mouseX = 100; // relative to the document
      var mouseY = 100; // relative to the document
      var eventOptions = {
        'bubbles': true,
        'button': 0,
        'screenX': mouseX - jQuery(window).scrollLeft(),
        'screenY': mouseY - jQuery(window).scrollTop(),
        'clientX': mouseX - jQuery(window).scrollLeft(),
        'clientY': mouseY - jQuery(window).scrollTop(),
        'offsetX': mouseX - player.offset().left,
        'offsetY': mouseY - player.offset().top,
        'pageX': mouseX,
        'pageY': mouseY,
        'currentTarget': player[0]
      };
      player[0].dispatchEvent(new MouseEvent('mousemove', eventOptions));
      return delay(1)().ensure(function() {
        uiEventsHappening -= 1;
      });
    };

    // pause (hide controls after using)
    var pause = function() {
      uiEventsHappening += 1;
      // console.error(Error('pause start'));
      jQuery('.button-nfplayerPause').click();
      return delayUntil(function() {
        return getState() === 'paused';
      }, 1000)().then(hideControls).ensure(function() {
        uiEventsHappening -= 1;
        // console.error(Error('pause end'));
      });
    };

    // play
    var play = function() {
      uiEventsHappening += 1;
      // console.error(Error('play start'));
      jQuery('.button-nfplayerPlay').click();
      return delayUntil(function() {
        return getState() === 'playing';
      }, 2500)().then(hideControls).ensure(function() {
        uiEventsHappening -= 1;
        // console.error(Error('play end'));
      });
    };

    // freeze playback for some time and then play
    var freeze = function(milliseconds) {
      return function() {
        uiEventsHappening += 1;
        // console.error(Error('freeze start'));
        jQuery('.button-nfplayerPause').click();
        return delay(milliseconds)().then(function() {
          jQuery('.button-nfplayerPlay').click();
        }).then(hideControls).ensure(function() {
          uiEventsHappening -= 1;
          // console.error(Error('freeze end'));
        });
      };
    };

	// freeze playback until the condition thunk returns true and then play
    // rejecting if maxDelay time is exceeded
    // TODO: take a look at error handling
    var freezeUntil = function(condition, maxDelay) {
      return function() {
        uiEventsHappening += 1;
        // console.error(Error('freezeUntil start'));
        jQuery('.button-nfplayerPause').click();
        return delayUntil(condition, maxDelay)().then(function() {
          jQuery('.button-nfplayerPlay').click();
        }).then(hideControls).ensure(function() {
          uiEventsHappening -= 1;
          // console.error(Error('freezeUntil end'));
        });
      };
    };

    // whether others are buffering
    var othersAreBuffering = false;

    // wait until othersAreBuffering is false;
    var waitForBuffering = function() {
      console.log('called wait function');
      return function() {
        uiEventsHappening += 1;
        jQuery('.button-nfplayerPause').click();
        // console.error(Error('waitForBuffering start'));
        return delayUntil(function() {
          return !othersAreBuffering;
        }, 5000)().then(function() {
          jQuery('.button-nfplayerPlay').click();
        }).then(hideControls).ensure(function() {
          uiEventsHappening -= 1;
          // console.error(Error('waitForBuffering end'));
        });
      };
    };


    // jump to a specific time in the video
    var seekErrorRecent = [];
    var seekErrorMean = 0;
    var seekScript = `window.seekScriptLoaded=!0;var getVideoPlayer=function(){var e=window.netflix.appContext.state.playerApp.getAPI().videoPlayer,t=e.getAllPlayerSessionIds()[0];return e.getVideoPlayerBySessionId(t)},seekInteraction=function(e){if(e.source==window){if(e.data.type&&"SEEK"==e.data.type)getVideoPlayer().seek(e.data.time);e.data.type&&"teardown"==e.data.type&&(window.removeEventListener("message",seekInteraction,!1),window.seekScriptLoaded=!1)}};window.addEventListener("message",seekInteraction,!1);`;
    injectScript(seekScript);
    var seek = function(milliseconds) {
      return function() {

        var time = new Date();
        var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + ' AM';
      	console.log('seek called w window postMessage: ' + milliseconds + timeStatus);
      	// console.error(Error('seek start'));


        uiEventsHappening += 1;
        var eventOptions, scrubber, oldPlaybackPosition, newPlaybackPosition;
		var alreadyUpdated = false;

 		// send seek event to window w time
        window.postMessage({ type: "SEEK", time: milliseconds}, "*");

        // delay 250ms to get seek api and start seeking
		return delay(250)().then(delayUntil(function() {

          // broadcast start of buffering
          if(!alreadyUpdated) {
          	alreadyUpdated = true;
	        socket.emit('buffering', { buffering: true }, function() {});

	        var time = new Date();
          	var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + 'AM';
	        // console.log('simulated seek: buffering start -> server' + timeStatus);
          }

          newPlaybackPosition = getPlaybackPosition();
		  // return Math.abs(newPlaybackPosition - oldPlaybackPosition) >= 1;
          return getState() !== 'loading';
        }, 10000)).catch(function(e) {

			// broadcast end of buffering (timeout)
			socket.emit('buffering', { buffering: false }, function() {});

			var time = new Date();
          	var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + 'AM';
			// console.log('simulated seek timed out: buffering end -> server' + timeStatus);
        }).then(function() {

		  // broadcast end of buffering (finished loading)
          socket.emit('buffering', { buffering: false }, function() {});

		  var time = new Date();
          var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + 'AM';
          // console.log('simulated seek finished: buffering end -> server' + timeStatus);

          // compute mean seek error for next time
          var newSeekError = Math.min(Math.max(newPlaybackPosition - milliseconds, -10000), 10000);
          shove(seekErrorRecent, newSeekError, 5);
          seekErrorMean = mean(seekErrorRecent);
        }).then(hideControls).ensure(function() {
          uiEventsHappening -= 1;
          // console.error(Error('seek end'));
        });
      };
    };

    //////////////////////////////////////////////////////////////////////////
    // Socket                                                               //
    //////////////////////////////////////////////////////////////////////////

    // connection to the server
    // var socket = io('https://netflixparty-server.herokuapp.com');
    // var socket = io('https://activity.netflixparty.com/');

	var getURLParameter = function(url, key, queryIndex) {
		var searchString = '?' + url.split('?')[queryIndex];
		if (searchString === undefined) {
		  return null;
		}
		console.log("search String: " + searchString);
		var escapedKey = key.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
		console.log("escaped Key: " + escapedKey);
		var regex = new RegExp('[?|&]' + escapedKey + '=' + '([^&]*)(&|$)');
		var match = regex.exec(searchString);
		if (match === null) {
		  return null;
		}
		return decodeURIComponent(match[1]);
	};

	var socket;
	var url = window.location.href;
	var herokuSocket = false;
	console.log('content script url: ' + url);
	var sessionIdFromUrl = getURLParameter(url, 'npSessionId', 1);
	var npServerIdFromUrl = getURLParameter(url, 'npServerId', 1);


	console.log(npServerIdFromUrl);
	console.log(sessionIdFromUrl);


	// 's1':true, 's2':true, 's3':true, 's4':true, 's5':true, 's6':true, 's7':true, 's8':true, 's9':true,
	// 's10':true, 's11':true, 's12':true, 's13':true, 's14':true, 's15':true, 's16':true, 's17':true, 's18':true, 's19':true,
	// 's20':true, 's21':true, 's22':true, 's23':true, 's24':true, 's25':true, 's26':true, 's27':true, 's28':true, 's29':true,
	// 's30':true, 's32':true, 's32':true, 's33':true, 's34':true, 's35':true, 's36':true, 's37':true, 's38':true, 's39':true,
	// 's1', 's2', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14', 's15', 's16'


	// var defaultServerOptions2 = [
	// 	's1', 's2', 's4', 's5', 's6', 's7', 's8', 's9',
	// 	's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19',
	// 	's20', 's21', 's22', 's23', 's24', 's25', 's26', 's27', 's28', 's29',
	// 	's30', 's31', 's32', 's33', 's34', 's35', 's36', 's37', 's38', 's39',
	// ];

	// var defaultServerOptions = [
	// 	's1', 's2', 's4', 's5', 's6', 's7', 's8', 's9',
	// 	's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19',
	// 	's20', 's21', 's22', 's23', 's24', 's25', 's26', 's27', 's28', 's29',
	// 	's30', 's32', 's33', 's34', 's35', 's36', 's37', 's38'
	// ];
	// var defaultServerOptions = ['s1'];
	var defaultServer = defaultServerOptions[Math.floor(Math.random() * defaultServerOptions.length)];

	//socket = io('http://127.0.0.1:3005/');

	// Using ws transport vs default preflight XHR requests fixes CORS cross-domain Chrome issues
	// Read more at http://maxprog.net.pl/node-js/socket-io-and-cross-domain-communication/
	// https://stackoverflow.com/questions/28238628/socket-io-1-x-use-websockets-only
	var corsOptions = {transports: ['websocket']};


	if (!npServerIdFromUrl) {
		// default server
		socket = io('https://' + defaultServer + '.netflixparty.com/', corsOptions);
		console.log('socket: https://' + defaultServer + '.netflixparty.com/');
	} else if (servers[npServerIdFromUrl]) {
		socket = io('https://' + npServerIdFromUrl + '.netflixparty.com/', corsOptions);
		console.log('socket: https://' + npServerIdFromUrl + '.netflixparty.com/');
		// socket = io('http://localhost:3000/');
		// console.log('socket: https://localhost:3000/');
	} else {
		socket = io('https://netflixparty-server.herokuapp.com', corsOptions);
    	console.log('socket: https://netflixparty-server.herokuapp.com');
    	herokuSocket = true;
	}


    // connection to file server
    // var fileSocket = io('http://127.0.0.1:3000/');

    // get the userId from the server
    var userId = null;
    socket.on('userId', function(data) {
      console.log('userId: ' + JSON.stringify(data));
      if (userId === null) {
        userId = data;
      }
    });


    //////////////////////////////////////////////////////////////////////////
    // User Settings                                                        //
    //////////////////////////////////////////////////////////////////////////

    // icon state
    // BUGFIX: fix content verification errors due to case insensitivity (https://groups.google.com/a/chromium.org/forum/#!searchin/chromium-extensions/%E2%80%9CThis$20extension$20may$20have$20been$20corrupted%E2%80%9D$20%7Csort:date/chromium-extensions/DrSVKXkPCSU/Zw4dg_4MBgAJ)
    var icons = ["Batman.svg", "DeadPool.svg", "CptAmerica.svg", "Wolverine.svg", "IronMan.svg", "Goofy.svg", "Alien.svg", "Mulan.svg", "Snow-White.svg", "Poohbear.svg", "Sailormoon.svg", "Sailor Cat.svg", "Pizza.svg", "Cookie.svg", "Chocobar.svg", "hotdog.svg", "Hamburger.svg", "Popcorn.svg", "IceCream.svg", "ChickenLeg.svg"]
    var iconsInUse = [];
    var userIcons = {};

    var userNicknames = {};
    var nicknamesInUse = [];

    var userSettings = {};

    var addIconButton = function(icon) {
      var iconButton = jQuery(`
        <a class="image-button">
          <img class="img-class" src='${chrome.runtime.getURL('img/' + icon)}'>
        </a>
	  `).appendTo(jQuery('#icon-holder')).data('icon', icon);

    }

    var addIconSelector = function() {
    	for(var i =0; i < icons.length; i++) {
    		addIconButton(icons[i]);
    	}

    	var buttons = jQuery(".image-button");
    	for(var i = 0; i < buttons.length; i++) {
    		// console.log("image button data : " + jQuery(buttons[i]).data('icon'));
    	}
    }

    // TODO: save icon url for userSettings in chrome storage?
    var getUserIconURL = function(userId, userIcon) {
    	if(userIcons[userId]) {
    		return userIcons[userId]
    	} else {
    		var newIcon = userIcon ? userIcon : icons[Math.floor(Math.random() * icons.length)];
    		var iconURL = chrome.runtime.getURL('img/' + newIcon);
			while (iconsInUse.hasOwnProperty(iconURL)) {
				iconURL = chrome.runtime.getURL('img/' + newIcon);
			}

			userIcons[userId] = iconURL;
			iconsInUse.push(iconURL);
			return userIcons[userId];
    	}
    }

    var getUserNickname = function(userId, userNickname) {
    	if(userNicknames[userId]) {
    		return userNicknames[userId]
    	} else {
    		if(userNickname) {
				userNicknames[userId] = userNickname;
				nicknamesInUse.push(userNickname);
				return userNicknames[userId];
    		}
    	}
    }


    // when user clicks on icon selector button, calls this function
    // if (saveToChrome) adds icon as userIcon to chrome storage (async)
    // adds userId: userIcon to userIcons map
    // add userIcon to userSettings map
    // re-renders sidebar based on usersettings map
    var setUserIcon = function(userId, userIcon, saveToChrome) {
    	var render = userIcons[userId];
		if(saveToChrome) {
			chrome.storage.local.set({"userIcon": userIcon}, function(data) {

				   if(chrome.runtime.lastError)
				   {
				       /* error */
				       console.log(chrome.runtime.lastError.message);
				       return;
				   }
				   console.log('set user iconchrome storage data: ' + JSON.stringify(data));

	            console.log('userIcon saved into settings chrome storage: ' + userIcon);
	        });
	        userSettings.userIcon = userIcon;
	        console.log('new user settings after set user icon: ' + JSON.stringify(userSettings));
	        socket.emit('broadcastUserSettings', { userSettings: userSettings }, function() {});
		}

		var iconURL = chrome.runtime.getURL('img/' + userIcon);
		userIcons[userId] = iconURL;
		iconsInUse.push(iconURL);
		logIcons();
		// if(render) {
			// delete old iconUrl from icons in use
			renderSidebar();
    	// }
    }

    var setUserNickname = function(userId, userNickname, saveToChrome) {
    	var render = userNicknames[userId];
		if(saveToChrome) {
			chrome.storage.local.set({"userNickname": userNickname}, function(data) {

				   if(chrome.runtime.lastError)
				   {
				       /* error */
				       console.log(chrome.runtime.lastError.message);
				       return;
				   }
				   console.log('set user nickname chrome storage data: ' + JSON.stringify(data));

				   chrome.storage.local.get(['userNickname'], function(result) {
			          console.log('Value currently is ' + result.key);
			        });

	            console.log('userNickname saved into settings chrome storage: ' + userNickname);
	        });
	        userSettings.userNickname = userNickname;
	        console.log('new user settings after set user nickname: ' + JSON.stringify(userSettings));
	        socket.emit('broadcastUserSettings', { userSettings: userSettings }, function() {});
		}

		userNicknames[userId] = userNickname;
		nicknamesInUse.push(userNickname);
		// if(render) {
			// delete old iconUrl from icons in use
			renderSidebar();
    	// }
    }

    chrome.storage.onChanged.addListener(function(changes, areaName) {
    	console.log("storage change: " + JSON.stringify(changes) + " for " + JSON.stringify(areaName));
    });

    // re-renders sidebar based on userSettings map
    var renderSidebar = function() {
    	var userIconURL = getUserIconURL(userSettings.userId, userSettings.userIcon);
    	// console.log("call renderSidebar here: " + userIconURL);
    	jQuery('#user-icon img').attr('src', userIconURL);
    	jQuery('.user-icon img').attr('src', userIconURL);

    	var msgs = jQuery('.msg');
    	// console.log("msgs length: " + msgs.length);
    	for(var i = 0; i < msgs.length; i++) {
    		if(jQuery(msgs[i]).data('permId') && jQuery(msgs[i]).data('userIcon')) {
    			if(userIcons[jQuery(msgs[i]).data('permId')] != jQuery(msgs[i]).data('userIcon')) {
    				jQuery(msgs[i]).find("img").attr('src', userIcons[jQuery(msgs[i]).data('permId')]);
    				jQuery(msgs[i]).data('userIcon', userIcons[jQuery(msgs[i]).data('permId')]);
    			}
    		}

    		if(jQuery(msgs[i]).data('permId') && jQuery(msgs[i]).data('userNickname') == '') {
    			if(userNicknames[jQuery(msgs[i]).data('permId')] != jQuery(msgs[i]).data('userNickname')) {
    				if(userNicknames[jQuery(msgs[i]).data('permId')]) {
    					// jQuery(msgs[i]).find("p .msg-nickname").text(userNicknames[jQuery(msgs[i]).data('permId')]);

    					// console.log("render message data: " + JSON.stringify(jQuery(msgs[i]).data('message')));

    					var message = jQuery(msgs[i]).data('message');
    					var permId = jQuery(msgs[i]).data('permId');
    					var userIcon = userIcons[jQuery(msgs[i]).data('permId')];
    					var userNickname = userNicknames[jQuery(msgs[i]).data('permId')]

						  var nicknameMessage = jQuery(`
							  <div class="msg-container">
						        <div class="icon-name">
						          <div class="icon">
						            <img src="${jQuery(msgs[i]).data('userIcon')}">
						          </div>
						        </div>
						        <div class="msg-txt message${ message.isSystemMessage ? '-system' : '-txt' }">
                                  <h3>${userNicknames[jQuery(msgs[i]).data('permId')].replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
						          <p>${message.body.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
						        </div>
						      </div>
						  `)

						  jQuery(msgs[i]).replaceWith(nicknameMessage);
						  jQuery(nicknameMessage).data('permId', permId).data('userIcon', userIcon).data('userNickname', userNickname);

						  // jQuery(msgs[i]).hide();
    				}
    				// replace msg nickname w new nickname
    			}
    		}
    	}

    	var msgs = jQuery('.msg-container');
    	// console.log("msgs length: " + msgs.length);
    	for(var i = 0; i < msgs.length; i++) {
    		// console.log('msgs data for ' + i + ': ' + jQuery(msgs[i]).data('permId') + ', ' + jQuery(msgs[i]).data('userIcon'));
    		if(jQuery(msgs[i]).data('permId') && jQuery(msgs[i]).data('userIcon')) {
    			if(userIcons[jQuery(msgs[i]).data('permId')] != jQuery(msgs[i]).data('userIcon')) {
    				jQuery(msgs[i]).find("img").attr('src', userIcons[jQuery(msgs[i]).data('permId')]);
    				jQuery(msgs[i]).data('userIcon', userIcons[jQuery(msgs[i]).data('permId')]);
    			}
    		}

    		if(jQuery(msgs[i]).data('permId') && jQuery(msgs[i]).data('userNickname')) {
    			if(userNicknames[jQuery(msgs[i]).data('permId')] != jQuery(msgs[i]).data('userNickname')) {
    				if(userNicknames[jQuery(msgs[i]).data('permId')]) {
    					jQuery(msgs[i]).find("h3").text(userNicknames[jQuery(msgs[i]).data('permId')]);
    					jQuery(msgs[i]).data('userNickname', userNicknames[jQuery(msgs[i]).data('permId')]);
    				}
    				// replace msg nickname w new nickname
    			}
    		}
    	}

    }

    var logIcons = function() {
    	console.log("Icons in use: " + JSON.stringify(iconsInUse));
    	console.log("user Icons: " + JSON.stringify(userIcons));
    }

    var getUserIdPromise = function() {
		console.log('user Id promise called: ' + userId);
		return delayUntil(function() {
          return userId;
        }, 5000)();
    }

    function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    	return true;
	}


    var waitUserIdReady = function() {
      console.log('wait user id ready called: ');
      return function() {
      		return new Promise(function(resolve, reject) {
				return delay(250)().then(delayUntil(function() {
	          		// console.log('userid is called');
	          		return userId != null;
	        	}, Infinity)).then(delayUntil(function() {
	          		// console.log('wait video loading done');
	          		// return (getState() !== 'loading');
	          		// console.log('check user settings');
				    // var video = getVideo()[0];
	          		return !isEmpty(userSettings);


	        	}, Infinity)).then(function() {
					console.log('userId and userSettings are ready!');
					// console.log('userId and userSettings is ready!');
					if(permIdFix) {
						permId = userId;
					}
					resolve();
	        	});
			});
      };
    }


    var getChromeStorage = function() {
      return function() {
        console.log('fix, userId getChromeStorage: ' + permIdFix + ', ' + userId);
        return new Promise(function(resolve, reject) {
			if(userSettings.userId && userSettings.userIcon) {
				resolve(userSettings);
				console.log('fix, userId resolve getChromeStorage: ' + permIdFix + ', ' + userId);
			}
			chrome.storage.local.get(null, function(data) {
				if(permIdFix) {
					data.userId = userId;
					console.log('fix, userId CALLED getChromeStorage: ' + permIdFix + ', ' + userId);
					permId = userId;
				}

				console.log('get chrome storage finished userID: ' + userId);
				console.log("get chrome storage finished: " + JSON.stringify(data));

				if(data.userId && data.userIcon) {
					userSettings = data
				} else if(data.userId && !data.userIcon) {
					var dataUserId = data.userId;
					var newIcon = icons[Math.floor(Math.random() * icons.length)];

					// getUserIconURL(userId, newIcon);
					userSettings = {'userId': dataUserId, 'userIcon': newIcon};
					setUserIcon(userSettings.userId, userSettings.userIcon, true);
					console.log("get chrome storage creating new icon: " + JSON.stringify(userSettings));
					resolve(userSettings);
				}
				resolve(userSettings);
			});
        });
      };
    }

    // respond to update settings from the server
    socket.on('updateSettings', function(data) {
      // pushTask(receive(data));
      console.log(JSON.stringify(data));
      if(data.userSettings.userIcon) setUserIcon(data.userSettings.userId, data.userSettings.userIcon, false);
      if(data.userSettings.userNickname) setUserNickname(data.userSettings.userId, data.userSettings.userNickname, false);
    });


    //////////////////////////////////////////////////////////////////////////
    // Chat API                                                             //
    //////////////////////////////////////////////////////////////////////////

    // chat state
    var messages = [];
    var unreadCount = 0;
    var originalTitle = document.title;

    // UI constants (80% scale)
    // Area(video) before: [((1168+(1274-1168) - 360*0.8)^2)*9/16] = 470k px^2
    // Area(video) after: [((1168+(1274-1168) - 360)^2)*9/16] = 546k px^2
    var defaultScale = 0.8;
    var chatSidebarWidth = 360*defaultScale;
    var chatSidebarPadding = 16*defaultScale;
    var avatarSize = 20*defaultScale;
    var avatarPadding = 4*defaultScale;
    var avatarBorder = 2*defaultScale;
    var chatVericalMargin = 4*defaultScale;
    var chatInputBorder = 2*defaultScale;
    var chatMessageHorizontalPadding = 8*defaultScale;
    var chatMessageVerticalPadding = 8*defaultScale;
    var presenceIndicatorHeight = 30*defaultScale;

    // summary state
    var messagesCount = 0;
    var interactionsCount = 0;
    var sessionStartTime; // duration
    var summarySent = false;

    // this is the markup that needs to be injected onto the page for chat

    var chatHTML2 = '';
    var setHTML = function() {
    console.log('set html called');
    chatHtml2 = `
      <style>
         #chat-wrapper {
          width: ${chatSidebarWidth}px;
          height: 100%;
          background: #1a1a1a;
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          cursor: auto;
          user-select: text;
          -webkit-user-select: text;
          z-index: 9999999999;
        }

        #chat-wrapper #chat-container {
          // width: 228px;
          height: 100%;
          position: relative;
          left: 0;
          right: 0;
          margin: 0 auto;
        }

        // Raymond's Styling Code

        @import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");
        /* line 34, ../sass/base/_settings.scss */
        body, html {
          margin: 0em;
          padding: 0em;
        }

        /* line 39, ../sass/base/_settings.scss */
        h1, h2, h3, h4, h5, h6, p, ul, ol, li, a, section, div {
          margin: 0em;
          padding: 0em;
          list-style: none;
          outline: none;
          text-decoration: none;
        }

        /* line 47, ../sass/base/_settings.scss */
        button {
          border: none;
          outline: none;
        }
        /* line 50, ../sass/base/_settings.scss */
        button:hover {
          cursor: pointer;
        }

        /*** Works on common browsers ***/
        /* line 56, ../sass/base/_settings.scss */
        ::selection {
          background: #ef3e3a;
          color: #f2f2f2;
        }

        /*** Mozilla based browsers ***/
        /* line 62, ../sass/base/_settings.scss */
        ::-moz-selection {
          background: #ef3e3a;
          color: #f2f2f2;
        }

        /***For Other Browsers ***/
        /* line 68, ../sass/base/_settings.scss */
        ::-o-selection {
          background: #ef3e3a;
          color: #f2f2f2;
        }

        /* line 73, ../sass/base/_settings.scss */
        ::-ms-selection {
          background: #ef3e3a;
          color: #f2f2f2;
        }

        /*** For Webkit ***/
        /* line 79, ../sass/base/_settings.scss */
        ::-webkit-selection {
          background: #ef3e3a;
          color: #f2f2f2;
        }

        /* line 3, ../sass/layout/_chatlayout.scss */
        .NP-red {
          color: #ef3e3a;
        }

        /* line 7, ../sass/layout/_chatlayout.scss */
        #chat-wrapper {
          width: 288px;
          height: 100%;
          display: flex;
          flex-flow: column;
          box-shadow: rgba(0, 0, 0, 0.6) -5px 0px 10px;
          background: #191919;
          position: fixed;
          right: 0;
        }
        /* line 14, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container {
          width: 251px;
          height: 100%;
          padding: 14px 18.5px;
        }
        /* line 17, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container {
          width: 100%;
          height: 45px;
          display: flex;
          flex-flow: wrap row;
        }
        /* line 20, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container {
          display: flex;
          flex-flow: wrap row;
          width: 100%;
          height: 100%;
          align-items: center;
        }
        /* line 24, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-title {
          width: 50%;
          height: 100%;
          display: flex;
          align-items: center;
        }
        /* line 28, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-title #title h1 {
          font-family: 'Poppins', sans-serif;
          font-size: 15.5px;
          font-weight: 600;
          color: #ef3e3a;
        }
        /* line 33, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user {
          width: 50%;
          height: 100%;
          display: flex;
          flex-flow: wrap row;
          align-items: center;
        }
        /* line 37, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user #link-icon {
          width: 50%;
          height: 100%;
          display: flex;
          flex-flow: wrap row;
          justify-content: flex-end;
        }
        /* line 41, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user #link-icon img {
          transform: scale(1);
          transition: 0.3s ease;
          width: 18px;
        }
        /* line 45, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user #link-icon img:hover {
          transform: scale(1.15);
          cursor: pointer;
        }
        /* line 51, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user #user-icon {
          width: 50%;
          height: 100%;
          display: flex;
          flex-flow: wrap row;
          justify-content: flex-end;
        }
        /* line 55, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user #user-icon img {
          filter: drop-shadow(0px 0px 10px #000000);
          -webkit-filter: drop-shadow(0px 0px 10px #000000);
          -moz-filter: drop-shadow(0px 0px 10px #000000);
          width: 38px;
          transform: scale(1);
          transform-origin: center;
          transition: 0.5s ease;
        }
        /* line 61, ../sass/layout/_chatlayout.scss */
        #chat-wrapper #chat-container #chat-header-container #chat-menu-container #function-user #user-icon img:hover {
          filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.6));
          -webkit-filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.6));
          -moz-filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.6));
          transform: scale(1.1);
        }

        /* line 3, ../sass/modules/_msg.scss */
        #chat-history-container {
          width: 100%;
          height: calc(100% - 195px);
          padding-bottom: 20px;
          margin-top: 15px;
          position: relative;
          overflow: hidden;
        }
        /* line 10, ../sass/modules/_msg.scss */
        #chat-history-container #chat-header {
          width: 100%;
          height: 25px;
          display: flex;
          flex-flow: wrap row;
          background: #191919;
          z-index: 1;
          align-items: flex-start;
          position: relative;
        }
        /* line 17, ../sass/modules/_msg.scss */
        #chat-history-container #chat-header h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #e2e2e2;
        }
        /* line 30, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history {
          width: 100%;
          height: 100%;
          display: flex;
          flex-flow: column;
          position: relative;
          justify-content: flex-start;
          overflow: auto;
          max-height: 100%;
        }
        /* line 37, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg {
          display: flex;
          flex-flow: wrap row;
          width: 100%;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
          padding-bottom: 11px;
        }
        /* line 44, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg .icon {
          width: 13%;
          height: 100%;
          display: flex;
          flex-flow: wrap row;
          align-items: center;
        }
        /* line 48, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg .icon img {
          width: 100%;
          height: 100%;
        }
        /* line 52, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg .message-system {
          width: 80%;
        }
        /* line 54, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg .message-system p {
          font-size: 13px;
          font-weight: 500;
          font-family: 'Poppins', sans-serif;
          font-style: italic;
          color: #757575;
        }
        /* line 62, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg .message-txt {
          width: 80%;
        }
        /* line 64, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg .message-txt p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #e2e2e2;
        }
        /* line 70, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container {
          display: flex;
          flex-flow: wrap row;
          justify-content: space-between;
          align-items: flex-start;
          padding-bottom: 11px;
          width: 100%;
        }
        /* line 76, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .icon-name {
          width: 13%;
        }
        /* line 78, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .icon-name .icon {
          width: 100%;
          height: 100%;
        }
        /* line 80, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .icon-name .icon img {
          width: 100%;
          height: 100%;
        }
        /* line 85, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .msg-txt {
          display: flex;
          flex-flow: column;
          width: 80%;
        }
        /* line 88, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .msg-txt h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #c3c3c3;
          padding-bottom: 0.15rem;
        }
        /* line 93, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .msg-txt p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #e2e2e2;
        }
        /* line 98, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history .msg-container .message-system p {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          font-style: italic;
          color: #757575;
        }
        /* line 104, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history > :first-child {
          margin-top: auto !important;
        }
        /* line 107, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history::-webkit-scrollbar {
          width: 2px;
        }
        /* line 110, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history::-webkit-scrollbar-thumb {
          border-radius: 25px;
          background: #ef3e3a;
        }
        /* line 114, ../sass/modules/_msg.scss */
        #chat-history-container #chat-history::-webkit-scrollbar-track {
          border-radius: 25px;
          background: #e0e0e0;
        }

        /* line 121, ../sass/modules/_msg.scss */
        #chat-input-container {
          width: 100%;
        }
        /* line 123, ../sass/modules/_msg.scss */
        #chat-input-container #chat-input {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          width: 100%;
          padding-top: 10px;
          background: none;
          border: none;
          outline: none;
          color: #e2e2e2;
          border-bottom: 1.2px solid;
          border-bottom-color: #aaaaaa;
          transition: 0.2s ease;
        }
        /* line 134, ../sass/modules/_msg.scss */
        #chat-input-container #chat-input[type=text]:focus {
          transition: 0.2s ease;
          border-bottom: 1.5px solid;
          border-bottom-color: #e2e2e2;
        }

        /* line 142, ../sass/modules/_msg.scss */
        #presence-indicator {
          font-family: 'Poppins', sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          font-style: italic;
          color: #757575;
          white-space: pre-wrap;
        }
        /* line 147, ../sass/modules/_msg.scss */
        #presence-indicator p {
          font-family: 'Poppins', sans-serif;
          font-size: 11.5px;
          font-weight: 500;
          font-style: italic;
          color: #757575;
        }

        /* line 154, ../sass/modules/_msg.scss */
        #patreon-container {
          width: 100%;
          padding-top: 16px;
        }
        /* line 157, ../sass/modules/_msg.scss */
        #patreon-container #patreon-link {
          display: flex;
          flex-flow: wrap row;
          align-items: center;
        }
        /* line 160, ../sass/modules/_msg.scss */
        #patreon-container #patreon-link:hover {
          cursor: pointer;
        }
        /* line 163, ../sass/modules/_msg.scss */
        #patreon-container #patreon-link p {
          font-family: 'Poppins', sans-serif;
          font-size: 14.5px;
          font-weight: 600;
          color: #949494;
          width: 40%;
        }
        /* line 168, ../sass/modules/_msg.scss */
        #patreon-container #patreon-link img {
          border-radius: 20px;
          width: 60%;
        }

        /* line 3, ../sass/modules/_setting.scss */
        #setting-edit {
          display: flex;
          flex-flow: column;
          position: relative;
          width: 100%;
        }
        /* line 7, ../sass/modules/_setting.scss */
        #setting-edit .section-b {
          width: 100%;
          height: 85px;
          display: flex;
          flex-flow: wrap row;
          justify-content: center;
          margin: 15px 0px;
        }
        /* line 12, ../sass/modules/_setting.scss */
        #setting-edit .section-b .section-b-inner {
          height: 100%;
          text-align: center;
        }
        /* line 15, ../sass/modules/_setting.scss */
        #setting-edit .section-b .section-b-inner .user-icon {
          width: 100%;
          height: 100%;
          display: flex;
        }
        /* line 18, ../sass/modules/_setting.scss */
        #setting-edit .section-b .section-b-inner .user-icon img {
          width: 100%;
          height: 100%;
          transform: scale(0.95);
          transition: 0.5s ease;
        }
        /* line 22, ../sass/modules/_setting.scss */
        #setting-edit .section-b .section-b-inner .user-icon img:hover {
          cursor: pointer;
          transform: scale(1);
        }
        /* line 30, ../sass/modules/_setting.scss */
        #setting-edit .section-c {
          display: flex;
          flex-flow: column;
        }
        /* line 32, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner {
          display: flex;
          flex-flow: column;
        }
        /* line 34, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section {
          display: flex;
          flex-flow: column;
        }
        /* line 36, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-wrap {
          display: flex;
          flex-flow: wrap row;
        }
        /* line 38, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-wrap h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: #c3c3c3;
          width: 50%;
        }
        /* line 43, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-wrap .np-btn {
          display: flex;
          flex-flow: wrap row;
          align-items: center;
          width: 50%;
        }
        /* line 47, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-wrap .np-btn a {
          display: flex;
          flex-flow: wrap row;
          width: 100%;
          justify-content: flex-end;
          align-items: center;
        }
        /* line 52, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-wrap .np-btn a:hover {
          cursor: default;
        }
        /* line 55, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-wrap .np-btn a img {
          width: 13.5%;
          opacity: 0.5;
        }
        /* line 62, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-input {
          margin-top: 1px;
          width: 100%;
        }
        /* line 65, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-input #nickname-edit {
          font-family: 'Poppins', sans-serif;
          font-size: 13.5px;
          font-weight: 500;
          width: 100%;
          color: #e2e2e2;
          background: none;
          border: none;
          outline: none;
          border-bottom: 1.2px solid;
          border-bottom-color: #e2e2e2;
        }
        /* line 74, ../sass/modules/_setting.scss */
        #setting-edit .section-c .section-c-inner .nickname-section .nickname-input #nickname-edit[type=text]:focus {
          transition: 0.2s ease;
          border-bottom: 1.2px solid;
          border-bottom-color: #2cda00;
        }

        /* line 86, ../sass/modules/_setting.scss */
        #settings-save {
          position: relative;
          width: 100%;
        }
        /* line 89, ../sass/modules/_setting.scss */
        #settings-save .section-d {
          width: 100%;
          margin-top: 1rem;
        }
        /* line 92, ../sass/modules/_setting.scss */
        #settings-save .section-d .section-d-inner {
          width: 100%;
          height: 35px;
        }
        /* line 94, ../sass/modules/_setting.scss */
        #settings-save .section-d .section-d-inner .btns {
          width: 100%;
          height: 100%;
        }
        /* line 96, ../sass/modules/_setting.scss */
        #settings-save .section-d .section-d-inner .btns button {
          font-family: 'Poppins', sans-serif;
          font-size: 12px;
          font-weight: 500;
          width: 100%;
          height: 100%;
          border-radius: 50px;
          background: #5c5c5c;
          color: #e2e2e2;
          transition: 0.5s ease;
        }
        /* line 103, ../sass/modules/_setting.scss */
        #settings-save .section-d .section-d-inner .btns button:hover {
          background: #ef3e3a;
        }

        /* line 3, ../sass/modules/_icon.scss */
        #chat-icon-container {
          display: flex;
          flex-flow: column;
        }
        /* line 5, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-title-container {
          margin: 10px 0px;
        }
        /* line 7, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-title-container #icon-title h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: #e2e2e2;
        }
        /* line 12, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-holder-container {
          display: flex;
          flex-flow: wrap row;
        }
        /* line 14, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-holder-container #icon-holder-template {
          display: flex;
          flex-flow: wrap row;
        }
        /* line 16, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-holder-container #icon-holder-template #icon-holder {
          display: flex;
          flex-flow: wrap row;
          width: 100%;
          height: 100%;
        }
        /* line 19, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-holder-container #icon-holder-template #icon-holder .image-button {
          width: 22%;
          padding: 1px 3.75px;
        }
        /* line 22, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-holder-container #icon-holder-template #icon-holder .image-button .img-class {
          width: 100%;
          height: 100%;
          transform: scale(0.95);
          transition: 0.3s ease;
        }
        /* line 26, ../sass/modules/_icon.scss */
        #chat-icon-container #icon-holder-container #icon-holder-template #icon-holder .image-button .img-class:hover {
          filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.6));
          -webkit-filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.6));
          -moz-filter: drop-shadow(0px 8px 10px rgba(0, 0, 0, 0.6));
          transform: scale(1);
          curosr: pointer;
        }


      </style>

      <script>
      var script = document.createElement('script');
      script.src= 'https://code.jquery.com/jquery-3.4.1.min.js';
      document.getElementsByTagName('head')[0].appendChild(script);


      </script>
      <div id="notification-link" class="notification-links">

      </div>

      <div id="chat-wrapper">
        <div id="chat-container">

          <div id="chat-header-container">

            <ul id="chat-menu-container">
              <li id="function-title">
                <div id="title">
                  <h1>Netflix Party</h1>
                </div>
              </li>
              <li id="function-user">
                <div id="link-icon">
                  <img src='${chrome.runtime.getURL("img/Link.svg")}'>
                  <input id="share-url" type="text" readonly="true" autocomplete="off" autofocus style="display:none;" />
                </div>
                <a id="user-icon">
                  <img src='${getUserIconURL(userSettings.userId, userSettings.userIcon)}'>
                </a>
              </li>
            </ul>

            <div id="chat-link-container" style='display:none;'>
              <div id="chat-link">
                <div id="chat-link-url">
                  <p>The url link goes here.</p>
                </div>
                <div id="chat-link-icon">
                  <img src='${chrome.runtime.getURL("img/Link.svg")}'>
                </div>
              </div>
            </div>

            <div id="chat-icon-container" style="display:none">
              <div id="icon-title-container">
                <div id="icon-title">
                  <h2>Click to switch icon</h2>
                </div>
              </div>
              <div id="icon-holder-container">
                <div id="icon-holder-template">
                  <ul id="icon-holder">
                  </ul>
                </div>
              </div>
            </div>

          </div>

          <div id="setting-edit" class="chat-settings-container" style="display:none">

            <div class="section-b">
              <div class="section-b-inner section-inner">
                <a class="user-icon">
                  <img src='${getUserIconURL(userSettings.userId, userSettings.userIcon)}' />
                </a>
              </div>
            </div>

            <div class="section-c">
              <div class="section-c-inner section-inner">
                <div class="nickname-section row-wrap">
                  <div class="nickname-wrap row-one">
                    <h2>Nickname</h2>
                    <div class="np-btn">
                      <a>
                      <!--  <p>Edit</p> -->
                        <img src='${chrome.runtime.getURL("img/edit.svg")}' />
                      </a>
                    </div>
                  </div>
                  <div class="nickname-input row-two">
                    <input id="nickname-edit" type="text" placeholder='${userSettings.userNickname ? userSettings.userNickname : "Add a nickname"}'/>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div id="settings-save" class="chat-settings-container" style="display:none">
            <div class="section-d">
              <div class="section-d-inner section-inner">

                <div class="btns">
                  <button>Save Changes</button>
                </div>
              </div>
            </div>
          </div>

          <div id="chat-history-container">
            <div id="chat-header">
              <h4>Chatroom</h4>
            </div>
            <!-- <div id="chat-gradient"></div> -->
            <div id="chat-history">
            </div>
          </div>

          <div id="presence-indicator">
            <p>People are currently typing...</p>
          </div>

          <div id="chat-input-container">
            <input id="chat-input" type="text" placeholder="Type a message..." autocomplete="off"></input>
          </div>

        </div>
      </div>
    `;
	}


    // this is used for the chat presence feature
    var typingTimer = null;

    var allowFullScreen = function() {
    	// allow keyboard input on fullscreen
    	var script = document.createElement( "script" );
        var fsCode = `
	        // document.getElementsByClassName("sizing-wrapper")[0].requestFullscreen = function() {
	        // 	console.log("fullscreen test");
	        // 	var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];
	        // 	fullScreenWrapper.requestFullscreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);
	        // }
	        // var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];
	        // fullScreenWrapper.requestFullscreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);


	        // document.getElementsByClassName("sizing-wrapper")[0].requestFullScreen = function() {
	        // 	console.log("fullscreen test");
	        // 	var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];
	        // 	fullScreenWrapper.requestFullscreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);
	        // }

	        document.getElementsByClassName("sizing-wrapper")[0].requestFullscreen = function() {console.log('test');}

	        console.log("fullscreen loaded? :" + document.getElementsByClassName('button-nfplayerFullscreen').length);

			document.getElementsByClassName('button-nfplayerFullscreen')[0].onclick = function() {
				console.log('fullscreen click');
				var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];
	        	fullScreenWrapper.requestFullscreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);
			}
	        // 	var fullScreenWrapper = document.getElementsByClassName("nf-kb-nav-wrapper")[0];
	        // 	fullScreenWrapper.requestFullscreen(fullScreenWrapper.ALLOW_KEYBOARD_INPUT);
	        // }
        `;
        script.text = fsCode;
    	document.head.appendChild( script );
    }

    // set up the chat state, or reset the state if the system has already been set up
    var initChat = function() {
      if (jQuery('#chat-wrapper').length === 0) {

      	// setHTML().then(jQuery('.sizing-wrapper').after(chatHtml2));
        jQuery('.sizing-wrapper').after(chatHtml2);
        allowFullScreen();
        jQuery('#presence-indicator').data('typing', false);
        jQuery('#presence-indicator').data('buffering', false);
        setPresenceVisible(false);
        // setPresenceText();
        // jQuery('#presence-indicator').hide();


	    var userIconListener = function(e) {
	      console.log('userIcon button clicked');
	      // console.log()
	      toggleIconContainer();
	    }
	    jQuery('#user-icon').click(userIconListener);

	    var linkIconListener = function(e) {
	      console.log('linkIcon button clicked');

        var currVideoUrl = window.location.href.split('?')[0];
	      var partySessionId = sessionId;
	      var serverId = getURLParameter(url, 'npServerId', 1) ? getURLParameter(url, 'npServerId', 1) : defaultServer;
	      if(currVideoUrl && partySessionId && serverId) {
	      	var urlWithSessionId = currVideoUrl + '?npSessionId=' + encodeURIComponent(sessionId) + '&npServerId=' + encodeURIComponent(serverId);
	      	console.log(urlWithSessionId);
	      	// jQuery('#share-url').val(urlWithSessionId).focus().select();

			  const el = document.createElement('textarea');
			  el.value = urlWithSessionId;
			  document.body.appendChild(el);
			  el.select();
			  document.execCommand('copy');
			  document.body.removeChild(el);

	      }


          // document.execCommand('copy');

          // e.stopPropagation();
          // e.preventDefault();
	    }
	    jQuery('#link-icon').click(linkIconListener);

	    // large user icon listener to go to icon holder menu
	    var largeUserIconListener = function(e) {
	      console.log('userIcon button clicked');
	      // console.log()
	      toggleLargeUserIconButton();
	    }
	    jQuery('.user-icon').click(largeUserIconListener);


	    addIconSelector();
	    var userIconSelectorListener = function(e) {
	      if(jQuery(this).data('icon')) {
	      	console.log('userIconSelector button clicked: ' + jQuery(this).data('icon'));
	      	setUserIcon(userSettings.userId, jQuery(this).data('icon'), true);
	      }

	      // setUserIcon();
	      // logIcons();
	      // console.log()
	      toggleIconContainer();
	    }
	    jQuery('.image-button').click(userIconSelectorListener);

	    var saveChangesListener = function(e) {
	      var nicknameText = jQuery('.nickname-input input').val().replace(/^\s+|\s+$/g, '');

	      if(nicknameText != '') {
	      	console.log('saveChanges button clicked: ' + nicknameText);
	      	setUserNickname(userSettings.userId, nicknameText, true);
	      }

	      // setUserIcon();
	      // logIcons();
	      // console.log()
	      toggleIconContainer();
	    }
	    jQuery('.btns button').click(saveChangesListener);



        var oldPageX = null;
        var oldPageY = null;
        jQuery('#chat-wrapper').mousedown(function(e) {
          oldPageX = e.pageX;
          oldPageY = e.pageY;
        });
        jQuery('#chat-wrapper').mouseup(function(e) {
          if ((e.pageX - oldPageX) * (e.pageX - oldPageX) + (e.pageY - oldPageY) * (e.pageY - oldPageY) < 5) {
            jQuery('#chat-input').focus();
            e.stopPropagation();
          }
        });
        jQuery('#chat-input-container').click(function(e) {
          jQuery('#chat-input').focus();
        });
        jQuery('#chat-input').keyup(function(e) {
          e.stopPropagation();

          // event keycode 13 is the enter key
          if (e.which === 13) {
            var body = jQuery('#chat-input').val().replace(/^\s+|\s+$/g, '');
            if (body !== '') {
              if (typingTimer !== null) {
                clearTimeout(typingTimer);
                typingTimer = null;
                socket.emit('typing', { typing: false }, function() {});
              }

              jQuery('#chat-input').prop('disabled', true);
              socket.emit('sendMessage', {
                body: body
              }, function() {
                jQuery('#chat-input').val('').prop('disabled', false).focus();
              });
            }
          } else {
            if (typingTimer === null) {
              socket.emit('typing', { typing: true }, function() {});
            } else {
              clearTimeout(typingTimer);
            }
            typingTimer = setTimeout(function() {
              typingTimer = null;
              socket.emit('typing', { typing: false }, function() {});
            }, 500);
          }
        });
        // jQuery('#chat-input-avatar').html(`<img src="data:image/png;base64,${new Identicon(Sha256.hash(userId).substr(0, 32), avatarSize * 2, 0).toString()}" />`);

        // receive messages from the server
        socket.on('sendMessage', function(data) {
          addMessage(data);
        });

        // receive presence updates from the server
        socket.on('setPresence', function(data) {
          setPresenceVisible(data.anyoneTyping);
        });

        // receive buffering presence updates from the server
        socket.on('setBufferingPresence', function(data) {

          setBufferingPresenceVisible(data.anyoneBuffering);
          othersAreBuffering = data.anyoneBuffering;

          var time = new Date();
          var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + 'AM';
          // console.log('received buffering update: ' + data.anyoneBuffering + timeStatus);
          // if(othersAreBuffering) console.log('others are buffering: ' + othersAreBuffering + timeStatus);
        });

      } else {
        jQuery('#chat-history').html('');
      }
    };

    // query whether the chat sidebar is visible
    var getChatVisible = function() {
      return jQuery('.sizing-wrapper').hasClass('with-chat');
    };

    // show or hide the chat sidebar
    var setChatVisible = function(visible) {
      if (visible) {
        jQuery('.sizing-wrapper').addClass('with-chat');
        jQuery('.sizing-wrapper').css('right', chatSidebarWidth + 'px');
        jQuery('#chat-wrapper').show();
        if (!document.hasFocus()) {
          clearUnreadCount();
        }
      } else {
        jQuery('#chat-wrapper').hide();
        jQuery('.sizing-wrapper').removeClass('with-chat');
        jQuery('.sizing-wrapper').css('right', '0px');
      }
    };

    // show or hide the icon container
    var toggleIconContainer = function() {
      // console.log('toggle')

      // document.getElementById("demo").innerHTML = "Hello World";
      if(jQuery("#chat-icon-container").data('active')) {
        jQuery("#chat-icon-container").data('active', false);
        jQuery("#chat-icon-container").hide();
        jQuery(".chat-settings-container").hide();

        // jQuery("#chat-link-container").show();
        jQuery("#chat-history-container").show();
        jQuery("#chat-input-container").show();
        jQuery("#patreon-container").show();

      } else {
        jQuery("#chat-icon-container").data('active', true);
        // jQuery("#chat-icon-container").show();
        jQuery(".chat-settings-container").show();
        jQuery("#chat-icon-container").hide();
        jQuery("#chat-link-container").hide();
        jQuery("#chat-history-container").hide();
        jQuery("#chat-input-container").hide();
        jQuery("#patreon-container").hide();
      }
    };

    // show or hide the icon container
    var toggleLargeUserIconButton = function() {
      // console.log('toggle')

      // document.getElementById("demo").innerHTML = "Hello World";
      if(jQuery("#chat-icon-container").data('active')) {
        // jQuery("#chat-icon-container").data('active', false);
        jQuery("#chat-icon-container").show();
        // jQuery("#chat-link-container").show();
        jQuery(".chat-settings-container").hide();
        // jQuery(".chat-settings-container").data('active', false);

      }
    };

    // remove chat
    var removeChat = function() {
      clearUnreadCount();
      jQuery('#chat-container').remove();
      jQuery('#chat-wrapper').remove();
      jQuery('.sizing-wrapper').removeClass('with-chat');
      jQuery('.sizing-wrapper').css('right', '0px');
    };

    // show or hide the "People are typing..." indicator
    var setPresenceVisible = function(visible) {
      jQuery('#presence-indicator').data('typing', visible);
      setPresenceText();
      if (visible) {
        jQuery('#presence-indicator').show();
      } else {
        // jQuery('#presence-indicator').hide();
      }
    };

    // show or hide the "People are buffering..." indicator
    var setBufferingPresenceVisible = function(visible) {
      jQuery('#presence-indicator').data('buffering', visible);
      setPresenceText();
      if (visible) {
        jQuery('#presence-indicator').show();
      } else {
        // jQuery('#presence-indicator').hide();
      }
    };

    var setPresenceText = function() {
      var typing = jQuery('#presence-indicator').data('typing');
      var buffering = jQuery('#presence-indicator').data('buffering');
      if(typing && buffering) {
      	jQuery('#presence-indicator').text('People are typing and buffering...')
      } else if (typing) {
      	jQuery('#presence-indicator').text('People are typing...')
      } else if(buffering) {
      	jQuery('#presence-indicator').text('People are buffering...')
      } else {
		jQuery('#presence-indicator').text(' ')
      }
    }

    // var iconURL = chrome.runtime.getURL('img/' + icons[Math.floor(Math.random() * icons.length)]);

    // add a message to the chat history
    var addMessage = function(message) {

      // jQuery('#chat-history').append(`
      //   <div class="chat-message${ message.isSystemMessage ? ' system-message' : '' }">
      //     <div class="chat-message-avatar"><img src="data:image/png;base64,${new Identicon(Sha256.hash(message.userId).substr(0, 32), avatarSize * 2, 0).toString()}" /></div>
      //     <div class="chat-message-body">${message.body.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</div>
      //   </div>
      // `);

	  // console.log("messageId " + message.userId);
	  // console.log("message permId " + message.permId);
	  // console.log("message userIcon " + message.userIcon);
	  // console.log("user/perm: " + userId + ", " + permId);
	  // console.log("messageId is the same as userId: " + (message.userId === userId));
	  // console.log("message permId is the same as userId: " + (message.permId === permId));
	  // console.log(JSON.stringify(userIcons));

	  if(message.isSystemMessage && message.body === 'left') {
	  	console.log("trying to add left message");
	  	if(!(message.userIcon)) {
	  		// ignore invalid left message
	  		return;
	  	}
	  }

	  messages.push(message);


	  var userIcon = message.userIcon ? getUserIconURL(message.permId, message.userIcon) : getUserIconURL(message.permId);
	  var userNickname = message.userNickname ? getUserNickname(message.permId, message.userNickname) : '' // todo create getUserNickame method

	   if(userNickname == '') {
		  var message = jQuery(`
	        <div class="msg">
	          <div class="icon">
	            <img src="${userIcon}"/>
	          </div>
	          <div class="message${ message.isSystemMessage ? '-system' : '-txt' }">
	            <p class="msg-nickname">${userNickname.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
	            <p>${message.body.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
	          </div>
	        </div>
		  `).appendTo(jQuery('#chat-history')).data('permId', message.permId).data('userIcon', userIcon).data('userNickname', userNickname).data('message', message);
	  } else {
		  var nicknameMessage = jQuery(`
			  <div class="msg-container">
		        <div class="icon-name">
		          <div class="icon">
		            <img src="${userIcon}">
		          </div>
		        </div>
		        <div class="msg-txt message${ message.isSystemMessage ? '-system' : '-txt' }">
              <h3>${userNickname.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</h3>
		          <p>${message.body.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
		        </div>
		      </div>
		  `).appendTo(jQuery('#chat-history')).data('permId', message.permId).data('userIcon', userIcon).data('userNickname', userNickname);
	  }



      jQuery('#chat-history').scrollTop(jQuery('#chat-history').prop('scrollHeight'));
      unreadCount += 1;
      messagesCount += 1;
      if (!document.hasFocus()) {
        document.title = '(' + String(unreadCount) + ') ' + originalTitle;
      }
    };

    // clear the unread count
    var clearUnreadCount = function() {
      if (unreadCount > 0) {
        unreadCount = 0;
        document.title = originalTitle;
      }
    };

    // clear the unread count when the window is focused
    jQuery(window).focus(function() {
      if (getChatVisible()) {
        clearUnreadCount();
      }
    });

	// send summary statistics to data server
	function logSummary() {
	  try {
		if(permId && sessionStartTime && sessionId && videoId && !summarySent) {

			var data = {
				userId: permId,
				sessionId: sessionId,
				messagesCount: messagesCount,
				interactionsCount: interactionsCount,
				duration: new Date() - sessionStartTime,
				videoId: videoId,
				videoDuration: videoDuration
			}
			console.log("summaryData: " + JSON.stringify(data));

			chrome.runtime.sendMessage({summary: data}, function(response) {
  				console.log("background script sent xhr");
			});

			summarySent = true;

		}

	  } catch(e) {
	    console.log("log event error");
	  }
	}

    var unloadInteraction = function (event) {
  		logSummary();
	}
    window.addEventListener("unload", unloadInteraction , true);


    //////////////////////////////////////////////////////////////////////////
    // Next episode logic                                                   //
    //////////////////////////////////////////////////////////////////////////

    // whether a simulated next episode click is ongoing
    var simulClick = false;

    // whether the new episode is some other episode or the next episode
    var otherEpisode = false

    // receive next episode updates from the server
    socket.on('jumpToNextEpisode', function(data) {
      console.log('received next Episode event: ' + JSON.stringify(data));

      if(data.otherEpisode) {
      	continueOtherEpisode(data.nextEpisode)
      } else {
      	continueNextEpisode(data.nextEpisode);
      }
    });

    // enable or disable the session, used during episode transitions
    var oldSessionId = null;
    var sessionDisabledStartTime = null;
    var setSessionEnabled = function(enabled) {
      // enable session
      if (enabled) {
      	if(oldSessionId != null && sessionId == null) {
      		sessionId = oldSessionId;
      		oldSessionId = null;
      		sessionDisabledStartTime = null;
      		// uiEventsHappening = 0;
      	}
      }
      // disable session
      else {
      	if(oldSessionId == null && sessionId != null) {
      		oldSessionId = sessionId;
      		sessionId = null;
      		var now = new Date();
		    sessionDisabledStartTime = new Date(now.getTime() - localTimeMinusServerTimeMedian)
      		console.log('sessionDisabledStartTime CREATED: ' + sessionDisabledStartTime.getTime());
      	}
      }
    };

    // disable video synchronization for Netflix Party
    var disableSync = function() {

    }

    // enable video synchronization for Netlfix Party
    var enableSync = function() {

    }

    // jump to next episode if not already on it
    var continueNextEpisode = function(nextEpisode) {
      var parseIds = window.location.href.match(/^.*\/([0-9]+)\??.*/);
      var currVideoId = parseIds.length !== 0 ? parseInt(window.location.href.match(/^.*\/([0-9]+)\??.*/)[1]) : null;

      // jump to next episode if currEpisode != next Epsiode
      if (currVideoId != nextEpisode) {
      	// disable the session until the video loads
      	setSessionEnabled(false);
      	// oldSessionId = sessionId;
        // sessionId = null;


        // tasks = Promise.resolve();
        simulClick = true;

        // otherwise click on the autoplay next episode hover container (short episodes like Friends)
        if (jQuery('.WatchNext-still-hover-container').length > 0) {
          jQuery('.WatchNext-still-hover-container').click();
        }

        // click on the next episode button (in the middle of episodes)
        else if (jQuery('.button-nfplayerNextEpisode').length > 0) {
          jQuery('.button-nfplayerNextEpisode').click();
        }

        // otherwise click on the credits next episode button (before AND after credits on long episodes like Umbrella Academy)
        else if (jQuery('.nf-flat-button-text').length > 0) {
          if(jQuery('.nf-flat-button-text')[0].text.toLowerCase().includes('next episode')) {
            jQuery('.nf-flat-button-text')[0].click();
            // console.log('after credits click');
          }
        }
      }
    };

    var continueOtherEpisode = function(otherEpisode) {
    	// tabs[0].url.split('?')[0] + '?npSessionId=' + encodeURIComponent(sessionId) + '&npServerId=' + encodeURIComponent(serverIdFromUrl);
    	// console.log()

		var parseIds = window.location.href.match(/^.*\/([0-9]+)\??.*/);
        var currVideoId = parseIds.length !== 0 ? parseInt(window.location.href.match(/^.*\/([0-9]+)\??.*/)[1]) : null;

    	if (currVideoId != otherEpisode) {
    		window.location.href = 'https://www.netflix.com/watch/' + otherEpisode;
    	}

    	alert('Long parties only work for consecutive episodes for now. Please share a new Netflix Party to continue watching together.')
    }

    // listen to URL changes on the webpage when next episode changes
    // modifies the window.history.replaceScript API which Netflix uses in its SPA
    // https://stackoverflow.com/questions/4570093/how-to-get-notified-about-changes-of-the-history-via-history-pushstate
    // http://jsfiddle.net/UZHTW/1/
    var replaceStateScript = `
      if(!window.replaceScriptLoaded) {
      	  console.log("loaded script");
      	  window.replaceScriptLoaded = true;
	      (function(history){
	        var replaceState = history.replaceState;
	        history.replaceState = function(state) {
	          if (typeof history.onreplacestate == "function") {
	            history.onreplacestate({state: state});
	          }
	          return replaceState.apply(history, arguments);
	        }
	      })(window.history);

	      var reloadInteraction = function(e) {
	        console.log("window.history replaceState event; autoplay / next episode clicked / navigated away");

	        // send message to content script w next episode
	        window.postMessage({ type: "FROM_PAGE", text: "next episode from the webpage!"}, "*");
	      }
	      window.onpopstate = history.onreplacestate = reloadInteraction;
      }
    `;
    console.log('replace script loaded: '+ window.replaceScriptLoaded);
    if(!window.replaceScriptLoaded) {
    	console.log('injecting replace script');
    	injectScript(replaceStateScript);
    }

    // listen for next episode events from webpage script via the postMessage API
    var replaceStateInteraction = function(event) {
      if (event.source != window)
        return;

      if (event.data.type && (event.data.type == "FROM_PAGE")) {
      	console.log('***********************************');
      	logState = true;
        console.log("Content script received: " + event.data.text);

        var episodePage = window.location.href.match(/^.*\/(watch)\/.*/);
        console.log(window.location.href)
        if (!episodePage) {
        	console.log("time to teardown");
        	teardown();
        } else {
          var parseIds = window.location.href.match(/^.*\/([0-9]+)\??.*/);
          var nextVideoId = parseIds.length !== 0 ? parseInt(window.location.href.match(/^.*\/([0-9]+)\??.*/)[1]) : null;

          // console.log("simulClick:" + simulClick);
          // console.log("otherEpisode:" + otherEpisode);
          socket.emit('nextEpisode', {nextEpisode: nextVideoId, simulClick: simulClick, otherEpisode: otherEpisode}, function() {});

          if(otherEpisode) {
          	teardown();
          	// alert('Autoplay only works for consecutive episodes for now. Please create a new Netflix Party to continue watching together.')
          	alert('Long parties only work for consecutive episodes for now. Please share a new Netflix Party to continue watching together.')
          	// alert('Long parties only work for consecutive episodes, not for the episode selector. Please create a new party to continue watching');
          } else if(!otherEpisode) {

		      console.log('replace disable session next episode')
			  setSessionEnabled(false);
		      // if(oldSessionId == null) {
		      // 	 oldSessionId = sessionId;
      		  //   	sessionId = null;
		      // }


		      if(oldSessionId != null) {
		      	console.log('oldSessionId is called');

		      	swallow(
		      		delayUntil(function() {
		      			console.log('video unloading');
		      			return !getPlaybackPosition();
		      		}, 5000)
		      	)().then(swallow(
					delayUntil(function() {
		          		console.log('replace state loading START');
		          		// todo make sure remaining time > 0:00
		          		var remainingTimeLoaded = false;
		          		var remainingTime = getRemainingTime();
		          		var remainingTimeText = getRemainingTimeText();
		          		// console.log('remainingTime: ' + remainingTime);
		          		// console.log('remainingTimeText: ' + remainingTimeText);
		          		// console.log('remainingTimeLoaded: ' + remainingTimeLoaded);
		          		if(remainingTime != null) {
		          			remainingTimeLoaded = true;
		          		}
		          		return remainingTimeLoaded && getPlaybackPosition() && getState() !== 'loading';
		        	}, Infinity)
		        )).then(function() {

		          console.log('replace state loading DONE');
		          showControls();

		          // get scrubber time
		          var localTime = getPlaybackPosition();
			      var scrubberHead = jQuery(jQuery('.scrubber-head')[0]);
			      var scrubberTime = parseInt(scrubberHead.attr('aria-valuenow') * 1000);
				  showControls();

				  // TODO: get remaining time


				  // console.log('replace localTime: '+ getPlaybackPosition());
				  // console.log('replace scrubberTime: '+ scrubberTime);

		          var now = new Date();
				  var newLastKnownTime = localTime; // update to use remaining time
				  // var newLastKnownTime = localTime; // update to use remaining time
		          var newLastKnownTimeUpdatedAt = new Date(now.getTime() - localTimeMinusServerTimeMedian);
		          var newState = getState() === 'loading' ? 'paused' : (getState() === 'playing' ? 'playing' : 'paused');


		          console.log('***********************************');
		          console.log('localTimeMinusServerTimeMedian: ' + localTimeMinusServerTimeMedian);
		          console.log('session disabled start time: ' + sessionDisabledStartTime.getTime());
		          console.log('lastKnownTimeUpdatedAt: ' + lastKnownTimeUpdatedAt.getTime());
		          var recentUpdate = (lastKnownTimeUpdatedAt.getTime() > sessionDisabledStartTime.getTime())
		          console.log("RECENT UPDATE: " + recentUpdate);
		          console.log('***********************************');


			        if(!recentUpdate) {

			          	oldLastKnownTime = lastKnownTime;
			          	oldLastKnownTimeUpdatedAt = lastKnownTimeUpdatedAt;
			          	oldState = state;
			            lastKnownTime = newLastKnownTime;
				        lastKnownTimeUpdatedAt = newLastKnownTimeUpdatedAt;
				        state = newState;


			        	// console.log('simulClick is false so UPDATE');
			            socket.emit(updateSessionTarget, {
			              lastKnownTime: newLastKnownTime,
			              lastKnownTimeUpdatedAt: newLastKnownTimeUpdatedAt.getTime(),
			              state: newState,
			              lastKnownTimeRemaining: getRemainingTime(),
			              lastKnownTimeRemainingText: getRemainingTimeText(),
			              videoDuration: getDuration(),
			              bufferingState: false // change: bufferingState
			            }, function(data) {
			              if (data !== undefined && data.errorMessage !== null) {
			                lastKnownTime = oldLastKnownTime;
			                lastKnownTimeUpdatedAt = oldLastKnownTimeUpdatedAt;
			                state = oldState;
			                // reject();
			              } else {
		              //       lastKnownTime = newLastKnownTime;
				            // lastKnownTimeUpdatedAt = newLastKnownTimeUpdatedAt;
				            // state = newState;
			                // resolve();
			              }
			              	// console.log('delay before reenabling for 1 sec');
			                // delay(1000)().then(function() {
					            console.log('re-enabling sync after next episode');
					            console.log('***********************************');
					            logState = false;
					            var localTime = getPlaybackPosition() || "not defined";
		          				var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
		          				// console.log("localtime, internal servertime, state: " + localTime + ", " + serverTime + ", " + state);

			      				allowFullScreen();
			      				setSessionEnabled(true);
			      				// sessionId = oldSessionId;
				      			// oldSessionId = null;

				      			// pushTask(sync);
				      			// pushTask(broadcast(false));
				      			var localTime = getPlaybackPosition() || "not defined";
		          				var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
		          				// console.log("localtime, internal servertime, state: " + localTime + ", " + serverTime + ", " + state);

				      			simulClick = false;
          						otherEpisode = false;
			      			// });

			            });

					} else {

						console.log('recent update is true NO UPDATE');

						// insert logic that checks for recent update between when sync was disable and re-enabled
						// if there is one then re-enable sync
						// if not then send over our own update

						// compare syncDisabledTime to lastKnownUpdatedTimeAt
						// if syncDisabledTime is after lastKnowUpdatedTimeAt then

						console.log('re-enabling sync after next episode');
			            console.log('***********************************');
			            logState = false;
	      				allowFullScreen();
	      				setSessionEnabled(true);
	      				// sessionId = oldSessionId;
		      			// oldSessionId = null;

		      			var localTime = getPlaybackPosition() || "not defined";
		          		var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
		          		// console.log("localtime, internal servertime, state: " + localTime + ", " + serverTime + ", " + state);

		      			simulClick = false;
          				otherEpisode = false;

          				pushTask(sync);

					}
		        })
		      }
          }
        }
      }
    }
    window.addEventListener("message", replaceStateInteraction, false);

    // listen to clicks on next episode button
    var nextEpisodeListener = function(e) {
      console.log('next Episode button clicked');
    }

	// listen to clicks for other episodes
	var otherEpisodeListener = function() {
		// console.log('listener triggered');
		// find() selects on all nested descendants, children() selects on children
		// if(jQuery(this).find('.can-play').length > 0) {
			console.log('other episode clicked!');
	    	otherEpisode = true;
		// }
	}

	jQuery('.button-nfplayerNextEpisode').click(nextEpisodeListener);
	jQuery(document).on('click', '.nfp-episode-preview.expanded.can-play', otherEpisodeListener);

    //////////////////////////////////////////////////////////////////////////
    // Main logic                                                           //
    //////////////////////////////////////////////////////////////////////////

    // the Netflix player be kept within this many milliseconds of our
    // internal representation for the playback time
    var maxTimeError = 2500;
    var maxFreezeTimeError = 1000;

    // configure sync from end
    var syncFromEnd = false;
    var updateSessionTarget = syncFromEnd ? 'updateSessionFromEnd' : 'updateSession';

    // replace permId with userId in userSettings and var permId;
    var permIdFix = true;

    // the session
    var sessionId = null;
    var lastKnownTime = null;
    var lastKnownTimeUpdatedAt = null;
    var ownerId = null;
    var state = null;
    var videoId = null;
    var videoDuration = null;
    var currentPage = window.location.href;

    // ping the server periodically to estimate round trip time and client-server time offset
    var roundTripTimeRecent = [];
    var roundTripTimeMedian = 0;
    var localTimeMinusServerTimeRecent = [];
    var localTimeMinusServerTimeMedian = 0;
    var ping = function() {
      return new Promise(function(resolve, reject) {
        var startTime = (new Date()).getTime();
        socket.emit('getServerTime', { version: version }, function(serverTime) {
          var now = new Date();

          // compute median round trip time
          shove(roundTripTimeRecent, now.getTime() - startTime, 5);
          roundTripTimeMedian = median(roundTripTimeRecent);

          // compute median client-server time offset
          shove(localTimeMinusServerTimeRecent, (now.getTime() - Math.round(roundTripTimeMedian / 2)) - (new Date(serverTime)).getTime(), 5);
          localTimeMinusServerTimeMedian = median(localTimeMinusServerTimeRecent);
          // console.log('localTime - server time median: ' + localTimeMinusServerTimeMedian);
          // console.log('roundTripTimeMedian: ' + roundTripTimeMedian);

          resolve();
        });
      });
    };

    // this function should be called periodically to ensure the Netflix
    // player matches our internal representation of the playback state
    var sync = function() {
      if (sessionId === null) {
      	// console.log('sync promise resolved');
        return Promise.resolve();
      }
      if (state === 'paused') {
        var promise;
        if (getState() === 'paused') {
          promise = Promise.resolve();
        } else {
          promise = pause();
        }
        return promise.then(function() {
          if (Math.abs(lastKnownTime - getPlaybackPosition()) > maxTimeError) {
            // console.log('seek event while paused added to promiseChain due to local time exceeding server time');
            return seek(lastKnownTime)();
          }
        });
      } else {
        return delayUntil(function() {
          var syncDelayState = getState();
          // console.log('syncDelayState: ' + getState());
          var localTime = getPlaybackPosition() || "not defined";
          var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
          // console.log("localtime, internal servertime, state: " + localTime + ", " + serverTime + ", " + state);
          return getState() !== 'loading';
        }, Infinity)().then(function() {
          var localTime = getPlaybackPosition();
          var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
          if (Math.abs(localTime - serverTime) > maxTimeError) {
            // console.log('seek event added to promiseChain due to local time exceeding server time');
            return seek(serverTime)()
            .then(function() {
			  // if(othersAreBuffering) {
			  // 	return freezeUntil(function() {
			  //     return !othersAreBuffering;
			  // 	}, 3000)()
			  // }
            })
            .then(function() {
              var localTime = getPlaybackPosition();
              var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
              if (localTime > serverTime && localTime <= serverTime + maxTimeError) {
                return freeze(localTime - serverTime)();
              } else {
                return play();
              }
            });
          } else {
            return play();
            // return Promise.resolve();
          }
        });
      }
    };



    // this is called when we need to send an update to the server
    // waitForChange is a boolean that indicates whether we should wait for
    // the Netflix player to update itself before we broadcast

    var logState = false;
    var oldState = getState();
   // console.log('oldState: ' + oldState);
    stateTimer = setInterval(function() {
        oldState = getState();
     // console.log('oldState2: ' + oldState);
        if(logState) {
        	// console.log('oldState: ' + oldState);
        	var localTime = getPlaybackPosition() || "not defined";
	        var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
	        // console.log("localtime, internal servertime, state: " + localTime + ", " + serverTime + ", " + state);
        }
    }, 100);

    var broadcast = function(waitForChange) {
      return function() {
      	console.log('broadcast called w taskInFlight: ' + tasksInFlight);
  		var localTime = getPlaybackPosition() || "not defined";
		var serverTime = lastKnownTime + (state === 'playing' ? ((new Date()).getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
		// console.log("localtime, internal servertime, state: " + localTime + ", " + serverTime + ", " + state);

      	// wait for video player state to change
        var promise;
        if (waitForChange) {
          var oldPlaybackPosition = getPlaybackPosition();  // TODO: fix crazy errors related to errors getting thrown here between episodes (BIG BUG)
          // var oldState = getState();
          var lastState = getState();
          // console.log("broadcast state, playback: " + oldState + ", " + oldPlaybackPosition);
          promise = swallow(delayUntil(function() {
            var newPlaybackPosition = getPlaybackPosition();
            var newState = getState();
            // console.log("new broadcast state, playback: " + newState + ", " + newPlaybackPosition);
            return Math.abs(newPlaybackPosition - oldPlaybackPosition) >= 1500 || newState !== oldState || newState !== lastState;
          }, 2500))();
        } else {
          promise = Promise.resolve();
        }

        var alreadyUpdated = false;
        var bufferingState = false;
        return promise.then(delayUntil(function() {

          // get scrubber time
          var localTime = getPlaybackPosition();
	      var scrubberHead = jQuery(jQuery('.scrubber-head')[0]);
	      var scrubberTime = parseInt(scrubberHead.attr('aria-valuenow') * 1000);

	      // var sessionIdString = sessionId ? sessionId : 'null';
	      // console.log('showControls Start sessionId, uiEventsHappening: ' + sessionIdString + ', ' + uiEventsHappening);
		  showControls(); // TODO: fix crazy errors related to errors getting thrown here between episodes (BIG BUG)
		  // console.log('showControls End sessionId, uiEventsHappening: ' + sessionIdString + ', ' + uiEventsHappening);

		  // what can i do about this

          var now = new Date();
		  var newLastKnownTime = scrubberTime;
		  var newLastKnownTimeRemaining = getDuration() - scrubberTime;
          var newLastKnownTimeUpdatedAt = new Date(now.getTime() - localTimeMinusServerTimeMedian);
          var newState = getState() === 'loading' ? 'paused' : (getState() === 'playing' ? 'playing' : 'paused');

          // console.log('currently buffering. current Time: ' + localTime + 'scrubber time: ' + scrubberTime);

          if(!alreadyUpdated) {
	          bufferingState = getState() === 'loading';
	          if(bufferingState) {

	          	// broadcast start of buffering
	          	alreadyUpdated = true;
	          	socket.emit('buffering', { buffering: true }, function() {});

	          	var time = new Date();
          		var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + 'AM';
	          	// console.log('broadcast user seek: buffering start -> server' + timeStatus);

	          	// send update video event
	            // console.log('updateSession -> socket connection' + timeStatus);
	            socket.emit(updateSessionTarget, {
	              lastKnownTime: newLastKnownTime,
	              lastKnownTimeUpdatedAt: newLastKnownTimeUpdatedAt.getTime(),
	              state: newState,
	              lastKnownTimeRemaining: newLastKnownTimeRemaining,
	              lastKnownTimeRemainingText: getRemainingTimeText(),
	              videoDuration: getDuration(),
	              bufferingState: bufferingState // change: bufferingState
	            }, function(data) {
	              if (data !== undefined && data.errorMessage !== null) {
	                lastKnownTime = oldLastKnownTime;
	                lastKnownTimeUpdatedAt = oldLastKnownTimeUpdatedAt;
	                state = oldState;
	                // reject();
	              } else {
	                // resolve();
	              }
	            });
	          }
          }
          return getState() !== 'loading';
        }, Infinity)).then(function() {

		  if(bufferingState) {
		  	var time = new Date();
          	var timeStatus = ' at' + time.getHours() + ':' + time.getMinutes() + ':' + time.getMilliseconds() + 'AM';
		  	// console.log('broadcast user seek: buffering end -> server' + timeStatus);
		  	socket.emit('buffering', { buffering: false }, function() {});
		  }

          var now = new Date();
          var localTime = getPlaybackPosition();
          var serverTime = lastKnownTime + (state === 'playing' ? (now.getTime() - (lastKnownTimeUpdatedAt.getTime() + localTimeMinusServerTimeMedian)) : 0);
          var newLastKnownTime = localTime;
          var newLastKnownTimeUpdatedAt = new Date(now.getTime() - localTimeMinusServerTimeMedian);
          var newState = getState() === 'playing' ? 'playing' : 'paused';
          if (state === newState && Math.abs(localTime - serverTime) < 1) {
            return Promise.resolve();
          } else {
            var oldLastKnownTime = lastKnownTime;
            var oldLastKnownTimeUpdatedAt = lastKnownTimeUpdatedAt;
            var oldState = state;
            lastKnownTime = newLastKnownTime;
            lastKnownTimeUpdatedAt = newLastKnownTimeUpdatedAt;
            state = newState;
            return new Promise(function(resolve, reject) {
              // console.log('updateSession -> socket connection');
              socket.emit(updateSessionTarget, {
                lastKnownTime: newLastKnownTime,
                lastKnownTimeUpdatedAt: newLastKnownTimeUpdatedAt.getTime(),
                state: newState,
                lastKnownTimeRemaining: getRemainingTime(),
                lastKnownTimeRemainingText: getRemainingTimeText(),
                videoDuration: getDuration(),
                bufferingState: bufferingState
              }, function(data) {
                if (data !== undefined && data.errorMessage !== null) {
                  lastKnownTime = oldLastKnownTime;
                  lastKnownTimeUpdatedAt = oldLastKnownTimeUpdatedAt;
                  state = oldState;
                  reject();
                } else {
                  resolve();
                }
              });
            });
          }
        }).then(function() {
          // wait when others are buffering
		  // if(othersAreBuffering) {
		  // 	return freezeUntil(function() {
		  //     return !othersAreBuffering;
		  // 	}, 3000)()
		  // }
        });
      };
    };

    // this is called when data is received from the server
    var receive = function(data) {
      console.log("received data: " + JSON.stringify(data));
      // console.log("received data: " + getDuration());

      if(syncFromEnd) {
      	// try to sync to local video duration - lastKnownTimeRemaining from server update

      	// negative lastKnownTime -> do nothing
		if (getDuration() < data.lastKnownTimeRemaining) {

			// update
			pushTask(broadcast(false));
			return function() { return Promise.resolve(); }
		} else {
			lastKnownTime = getDuration() - data.lastKnownTimeRemaining;
		}


		// TODO: if negative last known time fix to send update to force everyone to get onto video
      } else {
      	// try to sync to lastKnownTime from server update
      	lastKnownTime = data.lastKnownTime;
      }

      state = data.state;
      lastKnownTimeUpdatedAt = new Date(data.lastKnownTimeUpdatedAt);
      return sync;
    };

    // the following allows us to linearize all tasks in the program to avoid interference
    var tasks = null;
    var tasksInFlight = 0;

    var pushTask = function(task) {
      // console.log('pushTask called w tasksInFlight: ' + tasksInFlight);
      if (tasksInFlight === 0) {
        // why reset tasks here? in case the native promises implementation isn't
        // smart enough to garbage collect old completed tasks in the chain.
        tasks = Promise.resolve();
      }
      tasksInFlight += 1;
      tasks = tasks.then(function() {
        if (getState() === 'idle') {
          swallow(wakeUp)();
        }
      }).then(swallow(task)).then(function() {
        tasksInFlight -= 1;
      });
    };

    // returns true if a user action is on a next episode button
    var isNextEpisodeClick = function(target) {
      return false;
      if(jQuery(target).hasClass('button-nfplayerNextEpisode')) {
      	  console.log('BUTTON NEXT EPISODE CLICK?:')
      	  return true;
       }
      // otherwise click on the autoplay next episode hover container (short episodes like Friends)
      else if (jQuery(target).hasClass('WatchNext-still-hover-container')) {
      	console.log('HOVER NEXT EPISODE CLICK');
        return true;
       }

      else if (jQuery(target).hasClass('PlayIcon')) {
      	console.log('HOVER NEXT EPISODE CLICK');
        return true;
       }

       // click on the next episode button (in the middle of episodes)
      else if (jQuery(target).hasClass('button-nfplayerNextEpisode').length > 0) {
        // jQuery('.button-nfplayerNextEpisode').click()
        return true;
       }
      // otherwise click on the credits next episode button (before AND after credits on long episodes like Umbrella Academy)
      else if (jQuery(target).hasClass('nf-flat-button-text')) {
      	console.log('CREDITS NEXT EPISODE CLICK?:' + jQuery(target).text());

        if(jQuery(target).text().toLowerCase().includes('next episode')) {
          return true;
          // jQuery('.nf-flat-button-text')[0].click();
          // console.log('after credits click');
        }
      } else {
      	return false;
      }
    }

    var mouseupListener = function() {
      console.log("mouseup 2");
      // console.log(jQuery(event.target).attr('class'));
      // console.log(jQuery(event.target).text());
      // console.log(jQuery(event.target).hasClass('button-nfplayerNextEpisode'));

      if(!isNextEpisodeClick()) {
        console.log('a')
	      var sessionIdString = sessionId ? sessionId : 'null';
	      console.log('sessionId, uiEventsHappening: ' + sessionIdString + ', ' + uiEventsHappening);
	      if (sessionId !== null && uiEventsHappening === 0) {
	        pushTask(function() {
	          return broadcast(true)().catch(sync);
	        });
	      }
      } else {
        console.log('b')
      	console.log("sessionid disabled");
      	setSessionEnabled(false);
      	// oldSessionId = sessionId;
      	// sessionId = null;


      	// lastKnownTime = null;
    	// lastKnownTimeUpdatedAt = null;
        // var ownerId = null;
	    // state = null;
      }
      interactionsCount += 1;
    }

    var keyupListener = function(e) {
      // e.stopPropagation();
      console.log("keyup");
      // console.log(event.target.className);
      // if(jQuery(event.target).hasClass('nfp')) {
	      if (sessionId !== null && uiEventsHappening === 0) {
	        pushTask(function() {
	          return broadcast(true)().catch(sync);
	        });
	      }
      // }
    }

    // broadcast the playback state if there is any user activity
    jQuery(window).mouseup(mouseupListener);
    jQuery(window).keyup(keyupListener);

    var scriptInterval = null;
    var teardown = function() {
		window.postMessage({ type: "teardown"}, "*");
		window.removeEventListener("message", replaceStateInteraction, false);
		window.removeEventListener("unload", unloadInteraction , true);
		jQuery(window).off('mouseup', mouseupListener);
	    jQuery(window).off('keyup', keyupListener);

		if(sessionId) sessionId = null;
		window.netflixPartyLoaded = false;
		chrome.runtime.onMessage.removeListener(popupInteraction);
		if(socket) socket.disconnect();
		if(scriptInterval) clearInterval(scriptInterval);
        setChatVisible(false);
        removeChat();
        window.netflixpartyLoaded = false;
        logState = false;
    }

    socket.on('connect', function() {
      pushTask(ping);
      console.log(currentPage);
      var lastTime = new Date();
      scriptInterval = setInterval(function() {
        if (tasksInFlight === 0) {
          var newTime = new Date();
          // console.log("ping sync: " + (newTime - lastTime));
          lastTime = new Date();
          pushTask(ping);
          pushTask(sync);
        }
      }, 5000);
    });

    // if the server goes down, it can reconstruct the session with this
    socket.on('reconnect', function() {
      if (sessionId !== null) {
        socket.emit('reboot', {
          sessionId: sessionId,
          lastKnownTime: lastKnownTime,
          lastKnownTimeUpdatedAt: lastKnownTimeUpdatedAt.getTime(),
          messages: messages,
          state: state,
          ownerId: ownerId,
          userId: userId,
          videoId: videoId,
          videoDuration: getDuration(), //change: sending over video duration
          permId: permId, //change: sending over permId
          userSettings: userSettings,
          videoService: 'netflix'
        }, function(data) {
          pushTask(receive(data));
        });
      }
    });

    // respond to updates from the server
    socket.on('update', function(data) {
      // console.log('***********************************');
      // console.log('on server update:' + JSON.stringify(data));
      pushTask(receive(data));
    });

    // interaction with the popup
    var popupInteraction = function(request, sender, sendResponse) {
      if (request.type === 'getInitData') {
        version = request.data.version;

        // fix bug where urls redirect to title page sometimes
      	var parseIds = window.location.href.match(/^.*\/([0-9]+)\??.*/);
      	var currVideoId = parseIds.length !== 0 ? parseInt(window.location.href.match(/^.*\/([0-9]+)\??.*/)[1]) : null;
      	var videoDomId = (typeof jQuery("video").parent()[0] !== "undefined") ? parseInt(jQuery("video").parent()[0].id) : null;
      	if((videoDomId != null) && (videoDomId != currVideoId)) {
      		history.replaceState('data to be passed', 'Title of the page', '/watch/' + jQuery(jQuery("video").parent())[0].id);
      	}

        sendResponse({
          sessionId: sessionId,
          defaultServer: defaultServer,
          chatVisible: getChatVisible()
        });
        return;
      }

      // TODO: edit for optional create session data
      if (request.type === 'createSession') {
      	waitUserIdReady()().then(function() {
	        console.log('create session permId: ' + permId);
	        console.log('create session permId: ' + JSON.stringify(userSettings));
	        socket.emit('createSession', {
	          controlLock: request.data.controlLock,
	          videoId: request.data.videoId,
	          videoService: 'netflix',
	          syncFromEnd: syncFromEnd, //change: sending over syncFromEnd
	          videoDuration: getDuration(), //change: sending over video duration
	          permId: permId, //change: sending over permId
	          userSettings: userSettings // change: add userSettings here
	        }, function(data) {
	          initChat();
	          // getChromeStorage()().then(initChat);
	          setChatVisible(true);
	          lastKnownTime = data.lastKnownTime;
	          lastKnownTimeUpdatedAt = new Date(data.lastKnownTimeUpdatedAt);
	          messages = [];
	          sessionId = data.sessionId;
	          ownerId = request.data.controlLock ? userId : null;
	          state = data.state;
	          videoId = request.data.videoId;
	          videoDuration = getDuration();
	          pushTask(broadcast(false));

	          // summary state
	          sessionStartTime = new Date();

	          // console.log('defaultServer create: ' + defaultServer);

	          sendResponse({
	            sessionId: sessionId,
	            defaultServer: defaultServer
	          });
	        });
		})
        return true;
      }

      if (request.type === 'joinSession') { /* change: add permId here. before: socket.emit('joinSession', request.data.sessionId, function(data) {  */
        waitUserIdReady()().then(function() {
	        var joinData = herokuSocket ? request.data.sessionId : {sessionId: request.data.sessionId, permId: permId, userSettings: userSettings} /* change: add usersettings here */
	        socket.emit('joinSession', joinData, function(data) {
	          if (data.errorMessage) {
	            sendResponse({
	              errorMessage: data.errorMessage
	            });
	            return;
	          }

	          if (data.videoId !== request.data.videoId) {
	            socket.emit('leaveSession', null, function(data) {
	              sendResponse({
	                errorMessage: 'That session is for a different video.'
	              });
	            });
	            return;
	          }

	          initChat();
	          // getChromeStorage()().then(initChat);
	          setChatVisible(true);
	          sessionId = request.data.sessionId;
	          lastKnownTime = data.lastKnownTime;

	          syncFromEnd = data.syncFromEnd ? data.syncFromEnd : false;
	          updateSessionTarget = syncFromEnd ? 'updateSessionFromEnd' : 'updateSession';
	          if(syncFromEnd) {
	          	lastKnownTime = getDuration() - data.lastKnownTimeReamining;
	          }

	          lastKnownTimeUpdatedAt = new Date(data.lastKnownTimeUpdatedAt);
	          messages = [];
	          for (var i = 0; i < data.messages.length; i += 1) {
	            addMessage(data.messages[i]);
	          }
	          ownerId = data.ownerId;
	          state = data.state;
	          videoId = request.data.videoId;
	          videoDuration = getDuration();
	          pushTask(receive(data));
	          sendResponse({});
	        });
    	})
		return true;
      }

      if (request.type === 'leaveSession') {
        socket.emit('leaveSession', null, function(_) {
          logSummary();
          sessionId = null;
          setChatVisible(false);
          sendResponse({});
        });
        return true;
      }

      if (request.type === 'showChat') {
        // console.log('showChat');
        if (request.data.visible) {
          setChatVisible(true);
        } else {
          setChatVisible(false);
        }
        sendResponse({});
      }
    } // end of popup interaciton
    //

    // getChromeStorage()()
    // getChromeStorage()()
    // getUserIdPromise()
    // waitUserIdReady()()
    getUserIdPromise()
    .then(getChromeStorage())
    .then(setHTML)
    .then(chrome.runtime.onMessage.addListener(popupInteraction));
  }
};


console.log('inject content script after this');

// check that server data includes valid server settings
// function validateServers(serverJsonString) {
// 	var validated = false;

// 	try {
// 		serverJson = JSON.parse(serverJsonString);
// 		console.log('this is called');
// 		var jsonCheck = (typeof serverJson === 'object') && ((serverJson.defaultServerOptions || serverJson.servers) != undefined);
// 		var optionsCheck
// 		if(jsonCheck) {
// 			if(serverJson.defaultServerOptions) {
// 				var optionsCheck = Array.isArray(serverJson.defaultServerOptions);
// 				jsonCheck = jsonCheck && optionsCheck;
// 			}
// 			if(serverJson.servers) {
// 				var serversCheck = typeof serverJson.servers === 'object';
// 				jsonCheck = jsonCheck && serversCheck;
// 			}
// 		}
// 		return jsonCheck;
// 	} catch {
// 		return false;
// 	}
// 	return true;
// }

// // Get default server settings from config server, if not available fall back to hardcoded settings
// // switching to self-hosting config since s3 gets throttled
// if(!window.getServerSettings) {
// 	window.getServerSettings = true;
// 	console.log(window.getServerSettings);


//     var xhr = new XMLHttpRequest();

// 	  xhr.onreadystatechange = function() {
// 	    if (this.readyState == 4) {
// 	      if(this.status == 200) {
// 		      // document.getElementById("demo").innerHTML = this.responseText;
// 			  if(validateServers(xhr.responseText)) {
// 				  console.log('validate servers returned true');
// 				  console.log('optionsConfig:' + JSON.stringify(optionsConfig));



// 				  var serverSettings = JSON.parse(xhr.responseText);
// 				  var injectOptions = serverSettings.defaultServerOptions ? serverSettings.defaultServerOptions : optionsConfig;
// 				  var injectServers = serverSettings.servers ? serverSettings.servers : serversConfig;
// 				  injectContentScript(injectOptions, injectServers);
// 				  // console.log('serverSettings:' + JSON.stringify(serverSettings.defaultServerOptions));

// 			  } else {
// 			  	injectContentScript();
// 			  }
// 	      } else {
// 	      	injectContentScript();
// 	      }
// 	    }
// 	  };

// 	    xhr.onerror = function(e) {
// 	    	console.log('error found');
// 	    	injectContentScript();
// 	    };

// 	    xhr.open('GET', 'https://netflixparty.s3.amazonaws.com/serverSettings.json', true);
// 	    xhr.send(null);
// }
// setTimeout(function(){ injectContentScript()}, 1000);

injectContentScript();
