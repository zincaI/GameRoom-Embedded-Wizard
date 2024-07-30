/*******************************************************************************
*
* E M B E D D E D   W I Z A R D   P R O J E C T
*
*                                                Copyright (c) TARA Systems GmbH
*                                    written by Paul Banach and Manfred Schweyer
*
********************************************************************************
*
* This file was generated automatically by Embedded Wizard Studio.
*
* Please do not make any modifications of this file! The modifications are lost
* when the file is generated again by Embedded Wizard Studio!
*
* The template of this heading text can be found in the file 'head.ewt' in the
* directory 'Platforms' of your Embedded Wizard installation directory. If you
* wish to adapt this text, please copy the template file 'head.ewt' into your
* project directory and edit the copy only. Please avoid any modifications of
* the original template file!
*
* Version  : 13.04
* Profile  : WebProfile
* Platform : Web.WebGL.RGBA8888
*
*******************************************************************************/

EmWiCompr_13_04=(function(){var e={};e._SetLanguage=function(nn){if(this.o7===nn)
return nn;this.o7=nn;var eH=this.h8;while(eH){eH._ReInit();eH=eH._next;}this._ReInit(
);return nn;};e._SetStyles=function(nv){if(this.wA===nv)return nv;this.wA=nv;var
eH=this.h8;while(eH){eH._ReInit();eH=eH._next;}this._ReInit();return nv;};e.aaR=
function(lp){if(lp._variants)lp=lp._variants();var aR=lp[this.o7];if(aR!==undefined
)return aR;else return lp[0];};e._GetAutoObject=function(h9){if(h9._variants)h9=
h9._variants();if(!h9._this)h9._Init.call(h9._this={});return h9._this;};e.aaL=function(
dZ){if(dZ._variants)dZ=dZ._variants();var kN=dZ[this.o7];if(kN===undefined)kN=dZ[
0];if(!kN._this)dZ._class()._Init.call(kN._this={},kN);return kN._this;};e._NewObject=
function(rO,wE){var h;if(!rO)throw"No class specified to create the object";rO._Init.
call(h={},wE);h._next=this.h8;this.h8=h;return h;};e._LockObject=function(cF){if(
cF)this.j0.push(cF);};e._UnlockObject=function(cF){var tr=this.j0;var h;if(!cF)return;
for(h=tr.length-1;h>=0;h--)if(tr[h]===cF)break;if(h>=0)this.j0.splice(h,1);};e.abD=
function(cF){this.jS=cF;};e.aam=function(){return this.jS;};e.aa6=function(dV,fv
){var h;for(var d in dV)if(!isNaN(d)&&(h=dV[d])&&(h._cycle!==fv))h._Mark(h._cycle=
fv);};e.aa8=function(dV,fv){var h;for(var d in dV)if(!isNaN(d)&&(h=dV[d])&&(h=h[
0])&&(h._cycle!==fv))h._Mark(h._cycle=fv);};e.aa7=function(dV,fv){var h;for(var d
in dV)if(!isNaN(d)&&(h=dV[d])&&(h=h[0])&&(h._cycle!==fv))h._Mark(h._cycle=fv);};
e.rF=function(){var c8=(this.ry+=1);var y$=this.h7;var aN=null;var bo=null;var h=
null;function oT(rX,fv){var af=rX;var s8=0;var h;for(;af;af=af._next){if((h=af.fS
)&&(h._cycle!==fv)&&(af[0]._cycle===fv)){h._Mark(h._cycle=fv);af=rX;s8++;}}return s8;
}for(aN=this.j0.length-1;aN>=0;aN--)if((bo=this.j0[aN])&&(bo._cycle!==c8))bo._Mark(
bo._cycle=c8);oT(this.d_,c8);while((oT(this.e8,c8)>0)&&(oT(this.d_,c8)>0));while((
aN=this.d_)&&((aN[0]._cycle!==c8)||((h=aN.fS)&&(h._cycle!==c8))))this.d_=aN._next;
while((bo=this.e8)&&((bo[0]._cycle!==c8)||((h=bo.fS)&&(h._cycle!==c8))))this.e8=
bo._next;while(aN&&(h=aN._next))if((h.fS&&(h.fS._cycle!==c8))||(h[0]._cycle!==c8
))aN._next=h._next;else aN=h;while(bo&&(h=bo._next))if((h.fS&&(h.fS._cycle!==c8)
)||(h[0]._cycle!==c8))bo._next=h._next;else bo=h;while((aN=this.h8)&&(aN._cycle!==
c8)){this.h8=aN._next;if(aN===this.jS)this.jS=null;aN._Done();}if(aN)while(bo=aN.
_next){if(bo._cycle!==c8){aN._next=bo._next;if(bo===this.jS)this.jS=null;bo._Done(
);}else aN=bo;}this.abA(c8);while((aN=this.hj)&&(aN[0]._cycle!==c8))this.hj=aN._next;
if(aN)while(bo=aN._next)if(bo[0]._cycle!==c8)aN._next=bo._next;else aN=bo;while((
aN=this.jZ)&&(aN._cycle!==c8))this.jZ=aN.lk;while(aN){var gb;while((bo=aN._observers
)&&(bo[0]._cycle!==c8))aN._observers=bo._next;if(bo)while(gb=bo._next)if(gb[0]._cycle
!==c8)bo._next=gb._next;else bo=gb;while((bo=aN.lk)&&(bo._cycle!==c8))aN.lk=bo.lk;
aN=bo;}if(this.c5)console.log("Living objects: "+this.h7+"("+(this.h7-y$)+")");};
e.pe=function(br,lF){if(!br)return;var af=this.d_;var eH=br[0];var l3=br[1];var h=
null;var to=0;if(af&&(af[0]===eH)&&(af[1]===l3)){if(!af.ll)af.fS=lF;return;}if(af
)while((h=af._next)&&((h[0]!==eH)||(h[1]!==l3)))af=h;if(h&&h.ll&&(h.pi>2))throw"Could not post again a signal. The signal is currently in progress."+
" The operation was ignored to avoid endless signal delivery.";if(h&&h.ll)to=h.pi+
1;if(h&&!h.ll){af._next=h._next;h._next=null;}br=[br[0],br[1]];br._next=this.d_;
br.fS=lF;br.pi=to;this.d_=br;};e.aaS=function(br,lF){if(!br)return;var af=this.e8;
var eH=br[0];var l3=br[1];var h;if(af&&(af[0]===eH)&&(af[1]===l3)){if(!af.ll)af.
fS=lF;return;}if(af)while((h=af._next)&&((h[0]!==eH)||(h[1]!==l3)))af=h;if(h){af.
_next=h._next;h._next=null;}br=[br[0],br[1]];br._next=this.e8;br.fS=lF;br.pi=0;this.
e8=br;};e.wt=function(){var kA=[];if(!this.d_){if(this.e8){this.d_=this.e8;this.
e8=null;}return false;}for(;;){var lZ=this.d_;var qc=null;var h;while(lZ&&(lZ!==
kA)){h=lZ;lZ=lZ._next;h._next=qc;qc=h;}kA._next=qc;this.d_=kA;while(h=kA._next){
h.ll=true;h[1].call(h[0],h.fS);kA._next=h._next;}if(this.d_===kA){this.d_=null;break;
}}this.d_=this.e8;this.e8=null;return true;};e.zX=function(br,fT,cY){var eL;if(!
br||!fT||!(eL=fT[0]))return;var af=eL._observers;var d4=br[0];var d5=br[1];var i0=
fT[1];while(af&&((af[0]!==d4)||(af[1]!==d5)||(af[2]!==cY)||(af[3]!==i0)))af=af._next;
if(af)return;af=[d4,d5,cY,i0];af._next=eL._observers;eL._observers=af;if(!eL.ph){
eL.lk=this.jZ;eL.ph=true;this.jZ=eL;}};e.zV=function(br,cF,cY){if(!br||!cF)return;
var af=cF._observers;var d4=br[0];var d5=br[1];while(af&&((af[0]!==d4)||(af[1]!==
d5)||(af[2]!==cY)||af[3]))af=af._next;if(af)return;af=[d4,d5,cY,null];af._next=cF.
_observers;cF._observers=af;if(!cF.ph){cF.lk=this.jZ;cF.ph=true;this.jZ=cF;}};e.
zW=function(br,cY){if(!br)return;var af=this.hj;var d4=br[0];var d5=br[1];while(
af&&((af[0]!==d4)||(af[1]!==d5)||(af[2]!==cY)))af=af._next;if(af)return;af=[d4,d5
,cY];af._next=this.hj;this.hj=af;};e.z$=function(br,fT,cY){var eL;var af;if(!br||
!fT||!(eL=fT[0])||!(af=eL._observers))return;var d4=br[0];var d5=br[1];var i0=fT[
1];var cn;if((af[0]===d4)&&(af[1]===d5)&&(af[2]===cY)&&(af[3]===i0)){eL._observers=
af._next;af._next=null;return;}while((cn=af._next)&&((cn[0]!==d4)||(cn[1]!==d5)||(
cn[2]!==cY)||(cn[3]!==i0)))af=cn;if(!cn)return;af._next=cn._next;cn._next=null;};
e.z9=function(br,cF,cY){var af;if(!br||!cF||!(af=cF._observers))return;var d4=br[
0];var d5=br[1];var cn;if((af[0]===d4)&&(af[1]===d5)&&(af[2]===cY)&&!af[3]){cF._observers=
af._next;af._next=null;return;}while((cn=af._next)&&((cn[0]!==d4)||(cn[1]!==d5)||(
cn[2]!==cY)||cn[3]))af=cn;if(!cn)return;af._next=cn._next;cn._next=null;};e.z_=function(
br,cY){var af;if(!br||!(af=this.hj))return;var d4=br[0];var d5=br[1];var cn;if((
af[0]===d4)&&(af[1]===d5)&&(af[2]===cY)){this.hj=af._next;af._next=null;return;}
while((cn=af._next)&&((cn[0]!==d4)||(cn[1]!==d5)||(cn[2]!==cY)))af=cn;if(!cn)return;
af._next=cn._next;cn._next=null;};e.abo=function(fT,cY){var eL;var af;if(!fT||!(
eL=fT[0])||!(af=eL._observers))return;if(this.c5)console.log("NotifyRefObserver()"
);var i0=fT[1];while(af){if((af[2]===cY)&&(af[3]===i0))this.pe(af.slice(0,2),null
);af=af._next;}};e.we=function(cF,cY){var af;if(!cF||!(af=cF._observers))return;
if(this.c5)console.log("NotifyObjObserver()");while(af){if((af[2]===cY)&&!af[3])
this.pe(af.slice(0,2),null);af=af._next;}};e.abn=function(cY){var af;if(!(af=this.
hj))return;if(this.c5)console.log("NotifyObserver()");while(af){if(af[2]===cY)this.
pe(af.slice(0,2),null);af=af._next;}};function StartTimer(ng,j_){var ma=this;if((
ng>0)&&(j_>0))this.hg=window.setTimeout(function(){vy(ma,j_);},ng);else if(ng>0)
this.hg=window.setTimeout(function(){vz(ma);},ng);else if(j_>0)this.he=window.setInterval(
function(){re(ma);},j_);}function DestroyTimer(){if(this.he)window.clearInterval(
this.he);this.he=0;if(this.hg)window.clearTimeout(this.hg);this.hg=0;this.kR.h7--;
this.mq=null;this.mo=null;this.kR=null;}function ResetTimer(){if(this.he)window.
clearInterval(this.he);this.he=0;if(this.hg)window.clearTimeout(this.hg);this.hg=
0;}function vy(eF,j_){eF.vI=null;eF.he=window.setInterval(function(){re(eF);},j_
);try{eF.mo.call(eF.mq);eF.kR._RequestUpdate();}catch(bv){console.log("EmWi error: "+
bv+"!");}}function vz(eF){try{eF.vI=null;eF.mo.call(eF.mq);eF.kR._RequestUpdate(
);}catch(bv){console.log("EmWi error: "+bv+"!");}}function re(eF){try{eF.mo.call(
eF.mq);eF.kR._RequestUpdate();}catch(bv){console.log("EmWi error: "+bv+"!");}}e.
z8=function(cF,wT){var ma={DestroyTimer:DestroyTimer,ResetTimer:ResetTimer,StartTimer:
StartTimer,kR:this,mq:cF,mo:wT,he:0,hg:0};this.h7++;return ma;};function tR(){var
hF=this.q2;var gv=hF.length;var iJ=0;if(arguments.length!==gv)return this.oL;for(
var d=0;d<gv;d++){var lQ=hF[d];var t=arguments[d];if((t<0)||(t>=lQ))return this.
oL;iJ=(iJ*lQ)+t;}var aR=this[iJ];if(aR===undefined)return this.oL;return aR;};function
tS(){var hF=this.q2;var gv=hF.length;var iJ=0;if((arguments.length-1)!==gv)return;
for(var d=0;d<gv;d++){var lQ=hF[d];var t=arguments[d];if((t<0)||(t>=lQ))return;iJ=(
iJ*lQ)+t;}return this[iJ]=arguments[gv];};e.abi=function(){var gv=arguments.length-
2;var xA=arguments[gv];var p3=arguments[gv+1];var hF=[];for(var d=0;d<gv;d++)hF[
d]=arguments[d];var ke=[];ke.q2=hF;ke.oL=xA;if(p3)for(var d in p3)ke[d]=p3[d];ke.
Get=tR;ke.Set=tS;return ke;};e.ab5=function(){function gK(cp,wU){var h=cp.toString(
16).toUpperCase();var tl=wU-h.length;if(tl>0)h=e.nf.slice(0,tl)+h;return h;}var n$=
arguments[0];var cA="EmWi trace: ";var t=0;var dh=1;while(n$&&(t<n$.length)&&(dh<
arguments.length)){if(n$[t++]==='%'){if(dh>1)cA+=", ";switch(n$[t++]){case'i':case
'I':cA+=arguments[dh].toFixed();break;case'u':case'U':cA+=arguments[dh].toFixed(
);break;case'f':cA+=arguments[dh];break;case'e':cA+="enum:0x"+gK(arguments[dh],8
);break;case't':cA+="set:0x"+gK(arguments[dh],8);break;case'0':cA+="null";break;
case'b':cA+=arguments[dh];break;case'h':cA+="handle:"+arguments[dh];break;case'c':{
var h=arguments[dh];if((h>=0x20)&&(h<=0x7F))cA+="\'"+String.fromCharCode(h)+"\'";
else cA+="\'\\x"+gK(h,4)+"\'";}break;case'o':{var h=arguments[dh];var au=h&0xFF;
var dC=(h>>8)&0xFF;var aS=(h>>16)&0xFF;var cw=(h>>24)&0xFF;cA+="#"+gK(au,2)+gK(dC
,2)+gK(aS,2)+gK(cw,2);}break;case'p':{var h=arguments[dh];cA+="<"+h[0]+","+h[1]+
">";}break;case'r':{var h=arguments[dh];cA+="<"+h[0]+","+h[1]+","+h[2]+","+h[3]+
">";}break;case'l':{cA+="language:0x"+gK(arguments[dh],8);}break;case'g':{cA+="styles:0x"+
gK(arguments[dh],8);}break;case'^':{var h=arguments[dh];if(!h||!h[0])cA+="null";
else cA+="ref:(Object of class '"+h[0]._className+"', OnGet:'"+h[1].name+"', OnSet:'"+
h[2].name+"')";}break;case'*':{var h=arguments[dh];if(!h||!h._className)cA+="null";
else cA+="Object of class '"+h._className+"'";}break;case'$':{var h=arguments[dh
];if(!h||!h._className)cA+="null";else cA+=h._className;}break;case'&':{var h=arguments[
dh];if(!h||!h[0])cA+="null";else cA+="slot:(Object of class '"+h[0]._className+"', SlotProc:'"+
h[1].name+"')";}break;case's':{var h=arguments[dh];cA+="\""+h+"\"";}break;}dh++;
}}console.log(cA);};e._RequestUpdate=function(){if(this.ld)return;var fF=this;var
tp=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||
window.oRequestAnimationFrame||window.msRequestAnimationFrame;function tK(){fF.wq(
);}if(tp)tp(tK);else window.setTimeout(tK,15);this.ld=true;};e.rH=function(){if(
this.lc)return;var fF=this;function za(){fF.wm();}window.setTimeout(za,1000);this.
lc=true;};e.wq=function(){if(!this.ld)return;this.ld=false;try{var sP=this.wt();
if(this.h3&&this.cD.DoesNeedUpdate()){var a4=this._NewObject(this.Graphics.Canvas
,0);this.ah.q5=null;this.ah.eM=null;this.ah.kU=null;if(this.m7)this.h3.ey[0].mi=
true;a4.AttachBitmap(this.h3);this.cD.UpdateGE20(a4);a4.DetachBitmap();if(this.h3.
ey[0].mi){this.ah.clear(this.ah.COLOR_BUFFER_BIT);this.h3.ey[0].mi=false;}sP=true;
}if(sP)this.rH();if(this.d_||this.e8)this._RequestUpdate();}catch(bv){console.log(
"EmWi error: "+bv+"!");}};e.wm=function(){if(!this.lc)return;this.lc=false;this.
rF();};function vJ(ps,y){var s5=[y.Enter,y.Escape,y.Backspace,y.CtrlShiftPageUp,
y.CtrlShiftPageDown,y.CtrlShiftUp,y.CtrlShiftDown,y.CtrlShiftKeyP,y.CtrlShiftKeyR
,y.CtrlShiftLeft,y.CtrlShiftRight,y.CtrlShiftBackspace,y.CtrlShiftKeyE,y.CtrlShiftKeyT
,y.CtrlShiftKeyN,y.CtrlShiftKeyK,y.CtrlShiftKeyG,y.CtrlShiftKeyU,y.CtrlShiftKeyA
,y.CtrlShiftKeyD,y.CtrlShiftKeyM,y.CtrlShiftKey0,y.CtrlShiftKey1,y.CtrlShiftKey2
,y.CtrlShiftKey3,y.CtrlShiftKey4,y.CtrlShiftKey5,y.CtrlShiftKey6,y.CtrlShiftKey7
,y.CtrlShiftKey8,y.CtrlShiftKey9,y.CtrlKeyM,y.CtrlPageUp,y.CtrlPageDown,y.CtrlInsert
,y.CtrlDelete,y.CtrlKeyP,y.CtrlKeyS,y.CtrlLeft,y.CtrlRight,y.CtrlUp,y.CtrlDown,y.
CtrlKeyH,y.CtrlKeyR,y.CtrlKeyG,y.CtrlKeyB,y.CtrlKeyY,y.CtrlKeyL,y.CtrlKeyN,y.CtrlKeyW
,y.CtrlKeyD,y.CtrlKeyV,y.CtrlKeyE,y.CtrlKeyO,y.CtrlKeyT,y.CtrlKeyQ,y.CtrlKeyA,y.
CtrlKeyC,y.CtrlKeyU,y.CtrlKeyZ,y.CtrlKeyX,y.CtrlKeyI,y.CtrlHome,y.CtrlEnd,y.CtrlKey0
,y.CtrlKey1,y.CtrlKey2,y.CtrlKey3,y.CtrlKey4,y.CtrlKey5,y.CtrlKey6,y.CtrlKey7,y.
CtrlKey8,y.CtrlKey9];var y1=[y.Ok,y.Exit,y.Clear,y.ChannelUp,y.ChannelDown,y.SkipPrev
,y.SkipNext,y.Pause,y.Record,y.SlowRev,y.SlowFwd,y.Eject,y.Repeat,y.Timer,y.Navigation
,y.Karaoke,y.Game,y.Setup,y.Angle,y.Mode,y.Mute,y.User10,y.User11,y.User12,y.User13
,y.User14,y.User15,y.User16,y.User17,y.User18,y.User19,y.Menu,y.VolumeUp,y.VolumeDown
,y.Show,y.Hide,y.Play,y.Stop,y.Rev,y.Fwd,y.SkipBwd,y.SkipFwd,y.Help,y.Red,y.Green
,y.Blue,y.Yellow,y.White,y.Magenta,y.TV,y.DVD,y.VCR,y.EPG,y.OSD,y.Text,y.PIP,y.Audio
,y.Clock,y.Subtitle,y.Zoom,y.Index,y.Info,y.Display,y.Power,y.User0,y.User1,y.User2
,y.User3,y.User4,y.User5,y.User6,y.User7,y.User8,y.User9];var t=s5.length-1;while((
t>=0)&&(s5[t]!==ps))t--;if(t>=0)ps=y1[t];return ps;}e.wi=function(aC){var g=this.
Core.KeyCode;var p4=aC.type==="keyup";var keyCode=g.NoKey;var i7=g.NoKey;var charCode=
0;if(((aC.type==="keydown")||(aC.type==="keypress"))&&this.o9){var aX=this.o9.call(
this,aC);if(aX&&aX.KeyCode)keyCode=aX.KeyCode;else if(aX&&aX.tX)charCode=aX.tX;}
if((aC.type==="keypress")&&!aC.ctrlKey&&(aC.charCode!==13)&&(aC.charCode!==8)&&(
keyCode===g.NoKey)&&!charCode)charCode=aC.charCode;else if((aC.type==="keydown")&&(
keyCode===g.NoKey)&&!charCode){if(aC.ctrlKey&&aC.shiftKey&&!aC.altKey)switch(aC.
keyCode){case 13:keyCode=g.CtrlShiftEnter;break;case 27:keyCode=g.CtrlShiftEscape;
break;case 8:keyCode=g.CtrlShiftBackspace;break;case 9:keyCode=g.CtrlShiftTab;break;
case 40:keyCode=g.CtrlShiftDown;break;case 38:keyCode=g.CtrlShiftUp;break;case 37:
keyCode=g.CtrlShiftLeft;break;case 39:keyCode=g.CtrlShiftRight;break;case 36:keyCode=
g.CtrlShiftHome;break;case 35:keyCode=g.CtrlShiftEnd;break;case 33:keyCode=g.CtrlShiftPageUp;
break;case 34:keyCode=g.CtrlShiftPageDown;break;case 45:keyCode=g.CtrlShiftInsert;
break;case 46:keyCode=g.CtrlShiftDelete;break;case 112:keyCode=g.CtrlShiftF1;break;
case 113:keyCode=g.CtrlShiftF2;break;case 114:keyCode=g.CtrlShiftF3;break;case 115:
keyCode=g.CtrlShiftF4;break;case 116:keyCode=g.CtrlShiftF5;break;case 117:keyCode=
g.CtrlShiftF6;break;case 118:keyCode=g.CtrlShiftF7;break;case 119:keyCode=g.CtrlShiftF8;
break;case 120:keyCode=g.CtrlShiftF9;break;case 121:keyCode=g.CtrlShiftF10;break;
case 32:keyCode=g.CtrlShiftSpace;break;case 48:keyCode=g.CtrlShiftKey0;break;case
49:keyCode=g.CtrlShiftKey1;break;case 50:keyCode=g.CtrlShiftKey2;break;case 51:keyCode=
g.CtrlShiftKey3;break;case 52:keyCode=g.CtrlShiftKey4;break;case 53:keyCode=g.CtrlShiftKey5;
break;case 54:keyCode=g.CtrlShiftKey6;break;case 55:keyCode=g.CtrlShiftKey7;break;
case 56:keyCode=g.CtrlShiftKey8;break;case 57:keyCode=g.CtrlShiftKey9;break;case
96:keyCode=g.CtrlShiftKey0;break;case 97:keyCode=g.CtrlShiftKey1;break;case 98:keyCode=
g.CtrlShiftKey2;break;case 99:keyCode=g.CtrlShiftKey3;break;case 100:keyCode=g.CtrlShiftKey4;
break;case 101:keyCode=g.CtrlShiftKey5;break;case 102:keyCode=g.CtrlShiftKey6;break;
case 103:keyCode=g.CtrlShiftKey7;break;case 104:keyCode=g.CtrlShiftKey8;break;case
105:keyCode=g.CtrlShiftKey9;break;case 65:keyCode=g.CtrlShiftKeyA;break;case 66:
keyCode=g.CtrlShiftKeyB;break;case 67:keyCode=g.CtrlShiftKeyC;break;case 68:keyCode=
g.CtrlShiftKeyD;break;case 69:keyCode=g.CtrlShiftKeyE;break;case 70:keyCode=g.CtrlShiftKeyF;
break;case 71:keyCode=g.CtrlShiftKeyG;break;case 72:keyCode=g.CtrlShiftKeyH;break;
case 73:keyCode=g.CtrlShiftKeyI;break;case 74:keyCode=g.CtrlShiftKeyJ;break;case
75:keyCode=g.CtrlShiftKeyK;break;case 76:keyCode=g.CtrlShiftKeyL;break;case 77:keyCode=
g.CtrlShiftKeyM;break;case 78:keyCode=g.CtrlShiftKeyN;break;case 79:keyCode=g.CtrlShiftKeyO;
break;case 80:keyCode=g.CtrlShiftKeyP;break;case 81:keyCode=g.CtrlShiftKeyQ;break;
case 82:keyCode=g.CtrlShiftKeyR;break;case 83:keyCode=g.CtrlShiftKeyS;break;case
84:keyCode=g.CtrlShiftKeyT;break;case 85:keyCode=g.CtrlShiftKeyU;break;case 86:keyCode=
g.CtrlShiftKeyV;break;case 87:keyCode=g.CtrlShiftKeyW;break;case 88:keyCode=g.CtrlShiftKeyX;
break;case 89:keyCode=g.CtrlShiftKeyY;break;case 90:keyCode=g.CtrlShiftKeyZ;break;
}else if(aC.ctrlKey&&!aC.shiftKey&&!aC.altKey)switch(aC.keyCode){case 13:keyCode=
g.CtrlEnter;break;case 27:keyCode=g.CtrlEscape;break;case 8:keyCode=g.CtrlBackspace;
break;case 9:keyCode=g.CtrlTab;break;case 40:keyCode=g.CtrlDown;break;case 38:keyCode=
g.CtrlUp;break;case 37:keyCode=g.CtrlLeft;break;case 39:keyCode=g.CtrlRight;break;
case 36:keyCode=g.CtrlHome;break;case 35:keyCode=g.CtrlEnd;break;case 33:keyCode=
g.CtrlPageUp;break;case 34:keyCode=g.CtrlPageDown;break;case 45:keyCode=g.CtrlInsert;
break;case 46:keyCode=g.CtrlDelete;break;case 112:keyCode=g.CtrlF1;break;case 113:
keyCode=g.CtrlF2;break;case 114:keyCode=g.CtrlF3;break;case 115:keyCode=g.CtrlF4;
break;case 116:keyCode=g.CtrlF5;break;case 117:keyCode=g.CtrlF6;break;case 118:keyCode=
g.CtrlF7;break;case 119:keyCode=g.CtrlF8;break;case 120:keyCode=g.CtrlF9;break;case
121:keyCode=g.CtrlF10;break;case 32:keyCode=g.CtrlSpace;break;case 48:keyCode=g.
CtrlKey0;break;case 49:keyCode=g.CtrlKey1;break;case 50:keyCode=g.CtrlKey2;break;
case 51:keyCode=g.CtrlKey3;break;case 52:keyCode=g.CtrlKey4;break;case 53:keyCode=
g.CtrlKey5;break;case 54:keyCode=g.CtrlKey6;break;case 55:keyCode=g.CtrlKey7;break;
case 56:keyCode=g.CtrlKey8;break;case 57:keyCode=g.CtrlKey9;break;case 96:keyCode=
g.CtrlKey0;break;case 97:keyCode=g.CtrlKey1;break;case 98:keyCode=g.CtrlKey2;break;
case 99:keyCode=g.CtrlKey3;break;case 100:keyCode=g.CtrlKey4;break;case 101:keyCode=
g.CtrlKey5;break;case 102:keyCode=g.CtrlKey6;break;case 103:keyCode=g.CtrlKey7;break;
case 104:keyCode=g.CtrlKey8;break;case 105:keyCode=g.CtrlKey9;break;case 65:keyCode=
g.CtrlKeyA;break;case 66:keyCode=g.CtrlKeyB;break;case 67:keyCode=g.CtrlKeyC;break;
case 68:keyCode=g.CtrlKeyD;break;case 69:keyCode=g.CtrlKeyE;break;case 70:keyCode=
g.CtrlKeyF;break;case 71:keyCode=g.CtrlKeyG;break;case 72:keyCode=g.CtrlKeyH;break;
case 73:keyCode=g.CtrlKeyI;break;case 74:keyCode=g.CtrlKeyJ;break;case 75:keyCode=
g.CtrlKeyK;break;case 76:keyCode=g.CtrlKeyL;break;case 77:keyCode=g.CtrlKeyM;break;
case 78:keyCode=g.CtrlKeyN;break;case 79:keyCode=g.CtrlKeyO;break;case 80:keyCode=
g.CtrlKeyP;break;case 81:keyCode=g.CtrlKeyQ;break;case 82:keyCode=g.CtrlKeyR;break;
case 83:keyCode=g.CtrlKeyS;break;case 84:keyCode=g.CtrlKeyT;break;case 85:keyCode=
g.CtrlKeyU;break;case 86:keyCode=g.CtrlKeyV;break;case 87:keyCode=g.CtrlKeyW;break;
case 88:keyCode=g.CtrlKeyX;break;case 89:keyCode=g.CtrlKeyY;break;case 90:keyCode=
g.CtrlKeyZ;break;}else if(!aC.ctrlKey&&!aC.shiftKey&&!aC.altKey)switch(aC.keyCode
){case 13:keyCode=g.Enter;break;case 27:keyCode=g.Escape;break;case 8:keyCode=g.
Backspace;break;case 9:keyCode=g.Tab;break;case 40:keyCode=g.Down;break;case 38:
keyCode=g.Up;break;case 37:keyCode=g.Left;break;case 39:keyCode=g.Right;break;case
36:keyCode=g.Home;break;case 35:keyCode=g.End;break;case 33:keyCode=g.PageUp;break;
case 34:keyCode=g.PageDown;break;case 45:keyCode=g.Insert;break;case 46:keyCode=
g.Delete;break;case 112:keyCode=g.F1;break;case 113:keyCode=g.F2;break;case 114:
keyCode=g.F3;break;case 115:keyCode=g.F4;break;case 116:keyCode=g.F5;break;case 117:
keyCode=g.F6;break;case 118:keyCode=g.F7;break;case 119:keyCode=g.F8;break;case 120:
keyCode=g.F9;break;case 121:keyCode=g.F10;break;}else if(!aC.ctrlKey&&!aC.shiftKey&&
aC.altKey)switch(aC.keyCode){case 13:keyCode=g.AltEnter;break;case 27:keyCode=g.
AltEscape;break;case 8:keyCode=g.AltBackspace;break;case 9:keyCode=g.AltTab;break;
case 40:keyCode=g.AltDown;break;case 38:keyCode=g.AltUp;break;case 37:keyCode=g.
AltLeft;break;case 39:keyCode=g.AltRight;break;case 36:keyCode=g.AltHome;break;case
35:keyCode=g.AltEnd;break;case 33:keyCode=g.AltPageUp;break;case 34:keyCode=g.AltPageDown;
break;case 45:keyCode=g.AltInsert;break;case 46:keyCode=g.AltDelete;break;case 112:
keyCode=g.AltF1;break;case 113:keyCode=g.AltF2;break;case 114:keyCode=g.AltF3;break;
case 115:keyCode=g.AltF4;break;case 116:keyCode=g.AltF5;break;case 117:keyCode=g.
AltF6;break;case 118:keyCode=g.AltF7;break;case 119:keyCode=g.AltF8;break;case 120:
keyCode=g.AltF9;break;case 121:keyCode=g.AltF10;break;}else if(!aC.ctrlKey&&aC.shiftKey&&
aC.altKey)switch(aC.keyCode){case 13:keyCode=g.AltShiftEnter;break;case 27:keyCode=
g.AltShiftEscape;break;case 8:keyCode=g.AltShiftBackspace;break;case 9:keyCode=g.
AltShiftTab;break;case 40:keyCode=g.AltShiftDown;break;case 38:keyCode=g.AltShiftUp;
break;case 37:keyCode=g.AltShiftLeft;break;case 39:keyCode=g.AltShiftRight;break;
case 36:keyCode=g.AltShiftHome;break;case 35:keyCode=g.AltShiftEnd;break;case 33:
keyCode=g.AltShiftPageUp;break;case 34:keyCode=g.AltShiftPageDown;break;case 45:
keyCode=g.AltShiftInsert;break;case 46:keyCode=g.AltShiftDelete;break;case 112:keyCode=
g.AltShiftF1;break;case 113:keyCode=g.AltShiftF2;break;case 114:keyCode=g.AltShiftF3;
break;case 115:keyCode=g.AltShiftF4;break;case 116:keyCode=g.AltShiftF5;break;case
117:keyCode=g.AltShiftF6;break;case 118:keyCode=g.AltShiftF7;break;case 119:keyCode=
g.AltShiftF8;break;case 120:keyCode=g.AltShiftF9;break;case 121:keyCode=g.AltShiftF10;
break;}else if(!aC.ctrlKey&&aC.shiftKey&&!aC.altKey)switch(aC.keyCode){case 13:keyCode=
g.ShiftEnter;break;case 27:keyCode=g.ShiftEscape;break;case 8:keyCode=g.ShiftBackspace;
break;case 9:keyCode=g.ShiftTab;break;case 40:keyCode=g.ShiftDown;break;case 38:
keyCode=g.ShiftUp;break;case 37:keyCode=g.ShiftLeft;break;case 39:keyCode=g.ShiftRight;
break;case 36:keyCode=g.ShiftHome;break;case 35:keyCode=g.ShiftEnd;break;case 33:
keyCode=g.ShiftPageUp;break;case 34:keyCode=g.ShiftPageDown;break;case 45:keyCode=
g.ShiftInsert;break;case 46:keyCode=g.ShiftDelete;break;case 112:keyCode=g.ShiftF1;
break;case 113:keyCode=g.ShiftF2;break;case 114:keyCode=g.ShiftF3;break;case 115:
keyCode=g.ShiftF4;break;case 116:keyCode=g.ShiftF5;break;case 117:keyCode=g.ShiftF6;
break;case 118:keyCode=g.ShiftF7;break;case 119:keyCode=g.ShiftF8;break;case 120:
keyCode=g.ShiftF9;break;case 121:keyCode=g.ShiftF10;break;}i7=vJ(keyCode,g);if(i7===
this.ez)keyCode=this.ez;else if(keyCode===this.ez)i7=this.ez;}if((keyCode===g.NoKey
)&&!charCode&&(!p4||((this.ez===g.NoKey)&&!this.gk)))return;try{if((this.ez!==g.
NoKey)&&((keyCode!==this.ez)||p4)){this.cD.DriveKeyboardHitting(this.ez,0,false);
this.ez=g.NoKey;}if(this.gk&&((charCode!==this.gk)||p4)){this.cD.DriveKeyboardHitting(
g.NoKey,this.gk,false);this.gk=0;}if(charCode&&this.cD.DriveKeyboardHitting(g.NoKey
,charCode,true))this.gk=charCode;else if((i7!==keyCode)&&(i7!==g.NoKey)&&this.cD.
DriveKeyboardHitting(i7,0,true))this.ez=i7;else if((keyCode!==g.NoKey)&&this.cD.
DriveKeyboardHitting(keyCode,0,true))this.ez=keyCode;this._RequestUpdate();}catch(
bv){console.log("EmWi error: "+bv+"!");}aC.stopPropagation();aC.preventDefault();
};e.wh=function(aC){var g=this.Core.KeyCode;try{if(this.ez!==g.NoKey){if(this.cD.
DriveKeyboardHitting)this.cD.DriveKeyboardHitting(this.ez,0,false);else{var lS=this.
_NewObject(this.Core.KeyEvent,0);lS.Initialize(this.ez,false);this.cD.DispatchEvent(
lS);}this.ez=g.NoKey;this._RequestUpdate();}if(this.gk){if(this.cD.DriveKeyboardHitting
)this.cD.DriveKeyboardHitting(g.NoKey,this.gk,false);else{var lS=this._NewObject(
this.Core.KeyEvent,0);lS.Initialize2(this.gk,false);this.cD.DispatchEvent(lS);}this.
gk=0;this._RequestUpdate();}}catch(bv){console.log("EmWi error: "+bv+"!");}};function
oO(aC,eA){aC.stopPropagation();aC.preventDefault();var is=eA.getBoundingClientRect(
);var p=aC.clientX-is.left;var aa=aC.clientY-is.top;p=((eA.width*p)/eA.offsetWidth
)|0;aa=((eA.height*aa)/eA.offsetHeight)|0;return[p,aa];};e.wj=function(aC){if(this.
h6||aC.w$||this.ft)return;this.fs.focus();document.addEventListener("mousemove",
this.jY,true);document.addEventListener("mouseup",this.nb,true);this.h6=true;var
be=oO(aC,this.fs);try{this.cD.DriveCursorHitting(true,0,be);this._RequestUpdate(
);}catch(bv){console.log("EmWi error: "+bv+"!");}};e.wl=function(aC){if(!this.h6||
aC.w$)return;document.removeEventListener("mousemove",this.jY,true);document.removeEventListener(
"mouseup",this.nb,true);this.h6=false;var be=oO(aC,this.fs);try{this.cD.DriveCursorHitting(
false,0,be);this._RequestUpdate();}catch(bv){console.log("EmWi error: "+bv+"!");
}};e.wk=function(aC){if(!this.h6)return;var be=oO(aC,this.fs);try{this.cD.DriveCursorMovement(
be);this._RequestUpdate();}catch(bv){console.log("EmWi error: "+bv+"!");}};function
oQ(r3,eA){var is=eA.getBoundingClientRect();var p=r3.clientX-is.left;var aa=r3.clientY-
is.top;p=((eA.width*p)/eA.offsetWidth)|0;aa=((eA.height*aa)/eA.offsetHeight)|0;return[
p,aa];}e.wp=function(aC){var mb=this.ft;var qA=(new Date()).getTime();if(this.h6||(
this.ft===10))return;for(var d=0;d<aC.changedTouches.length;d++){var e3=aC.changedTouches[
d];var ci=0;var is=[e3.screenX-16,e3.screenY-16,e3.screenX+32,e3.screenY+32];while((
ci<10)&&((this.j2[ci]!==undefined)||(this.pf[ci]===undefined)||((qA-this.rG[ci])>
500)||!this.wa(is,this.pf[ci])))ci++;if(ci==10)for(ci=0;(ci<10)&&(this.j2[ci]!==
undefined);)ci++;if(ci==10)return;this.j2[ci]=e3.identifier;this.ft++;try{this.cD.
DriveMultiTouchHitting(true,ci,oQ(e3,this.fs));this._RequestUpdate();}catch(bv){
console.log("EmWi error: "+bv+"!");}}if(mb!==this.ft){this.fs.focus();aC.stopPropagation(
);aC.preventDefault();}};e.wn=function(aC){var mb=this.ft;var qA=(new Date()).getTime(
);if(this.ft===0)return;for(var d=0;d<aC.changedTouches.length;d++){var e3=aC.changedTouches[
d];var ci=9;while((ci>=0)&&(this.j2[ci]!==e3.identifier))ci--;if(ci>=0){this.pf[
ci]=[e3.screenX,e3.screenY];this.rG[ci]=qA;this.j2[ci]=undefined;this.ft--;try{this.
cD.DriveMultiTouchHitting(false,ci,oQ(e3,this.fs));this._RequestUpdate();}catch(
bv){console.log("EmWi error: "+bv+"!");}}}if(mb!==this.ft){aC.stopPropagation();
aC.preventDefault();}};e.wo=function(aC){var mb=this.ft;if(this.ft===0)return;for(
var d=0;d<aC.changedTouches.length;d++){var e3=aC.changedTouches[d];var ci=9;while((
ci>=0)&&(this.j2[ci]!==e3.identifier))ci--;if(ci>=0){try{this.cD.DriveMultiTouchMovement(
ci,oQ(e3,this.fs));this._RequestUpdate();}catch(bv){console.log("EmWi error: "+bv+
"!");}}}if(mb!==this.ft){aC.stopPropagation();aC.preventDefault();}};e._Init=function(
eA,eE){var fF=this;var a4=document.getElementById(eA);var sa=this.rs();var b=null;
var aJ={};var bitmap={};this.v$=(new Date()).getTime();if(eE&&eE.hasOwnProperty(
"Debug"))this.c5=eE.Debug;if(eE&&eE.hasOwnProperty("FullScreenUpdate"))this.m7=eE.
FullScreenUpdate;if(eE&&eE.hasOwnProperty("Alpha"))this.o4=eE.Alpha;if(eE&&eE.hasOwnProperty(
"OnKeyEvent"))this.o9=eE.OnKeyEvent;if(this.c5)console.log("EmWi debug: Initializing application '"+
sa._className+"'.");if(eE&&eE.hasOwnProperty("ExternBitmapLoader"))this.cP=eE.ExternBitmapLoader;
console.log("EmWi info: Init application for canvas '"+eA+"'. "+"FullScreenUpdate="+
this.m7+", "+"Alpha="+this.o4+", "+"Debug="+this.c5+", "+"ExternBitmapLoader="+(
this.cP?"user-defined":"default"));if(!a4){console.log("EmWi error: Initialization failed. The canvas element '"+
eA+"' doesn't exist!");return false;}var gp={depth:false,antialias:false,alpha:this.
o4,preserveDrawingBuffer:!this.m7};b=a4.getContext("webgl",gp)||a4.getContext("experimental-webgl"
,gp);if(!b){console.log("EmWi error: WebGL context creation failed.");return false;
}this.h5=b.getParameter(b.MAX_TEXTURE_SIZE);if(this.v_>this.h5)this.v_=this.h5;this.
v9=(this.m$/this.h4)|0;b.clearColor(0.0,0.0,0.0,0.0);b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL
,true);b.pixelStorei(b.UNPACK_ALIGNMENT,1);b.blendEquation(b.FUNC_ADD);b.blendFunc(
b.ONE,b.ONE_MINUS_SRC_ALPHA);b.disable(b.BLEND);b.dk=new ArrayBuffer(14*11*4);b.
hW=new Float32Array(b.dk);b.kQ=new Uint32Array(b.dk);b.oF=0;b.oI=1;b.oH=2;b.oE=3;
b.oG=4;b.bindBuffer(b.ARRAY_BUFFER,b.createBuffer());b.bufferData(b.ARRAY_BUFFER
,b.dk,b.STREAM_DRAW);b.vertexAttribPointer(b.oF,2,b.FLOAT,false,11*4,0*4);b.vertexAttribPointer(
b.oI,3,b.FLOAT,false,11*4,2*4);b.vertexAttribPointer(b.oH,4,b.UNSIGNED_BYTE,true
,11*4,5*4);b.vertexAttribPointer(b.oE,3,b.FLOAT,false,11*4,6*4);b.vertexAttribPointer(
b.oG,2,b.FLOAT,false,11*4,9*4);b.enableVertexAttribArray(b.oF);b.enableVertexAttribArray(
b.oI);b.enableVertexAttribArray(b.oH);b.enableVertexAttribArray(b.oE);b.enableVertexAttribArray(
b.oG);this.la=b.createTexture();b.bindTexture(b.TEXTURE_2D,this.la);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER
,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.ALPHA
,this.m$,this.m$,0,b.ALPHA,b.UNSIGNED_BYTE,null);this.jW=new Uint32Array(this.h4
*this.h4/32);aJ.Framebuffer=b.getParameter(b.FRAMEBUFFER_BINDING);aJ.Format=this.
_PIXEL_FORMAT_NATIVE;aJ.Width=a4.width;aJ.Height=a4.height;aJ.k1=a4.width;aJ.k0=
a4.height;aJ.dI=1/a4.width;aJ.dH=1/a4.height;aJ.ge=2/a4.width;aJ.gd=2/a4.height;
aJ.cV=null;bitmap.Format=this._PIXEL_FORMAT_NATIVE;bitmap.ey=[aJ];bitmap.FrameSize=[
a4.width,a4.height];bitmap.FrameDelay=0;bitmap.NoOfFrames=1;bitmap.cB=[{aT:bitmap.
ey[0],aK:[0,0]}];if(!vr(b)){console.log("EmWi error: WebGL initialization failed."
);return false;}if(this.c5)fn(b);b.t3=[0,0,0,-1,0,0,0,-1,0,0,0,0,0,0,0,1];this.fs=
a4;this.ah=b;this.h3=bitmap;try{this.cD=this._NewObject(sa,0);this.cD.Initialize(
this.abC);}catch(bv){console.log("EmWi error: "+bv+"!");this._Done();return false;
}function s_(aC){fF.wj(aC);}function y6(aC){fF.wl(aC);}function p9(aC){fF.wk(aC);
}function tG(aC){fF.wp(aC);}function qF(aC){fF.wn(aC);}function tF(aC){fF.wo(aC);
}function oh(aC){fF.wi(aC);}function sc(aC){fF.wh(aC);}this.o8=s_;this.nb=y6;this.
jY=p9;this.rM=tG;this.pg=qF;this.rL=tF;this.na=oh;this.z4=sc;a4.addEventListener(
"mousedown",s_,true);a4.addEventListener("mousemove",p9,false);a4.addEventListener(
"mouseout",p9,false);a4.addEventListener("touchstart",tG,true);a4.addEventListener(
"touchend",qF,false);a4.addEventListener("touchcancel",qF,false);a4.addEventListener(
"touchmove",tF,false);a4.addEventListener("keydown",oh,true);a4.addEventListener(
"keyup",oh,false);a4.addEventListener("keypress",oh,false);a4.addEventListener("blur"
,sc,false);this._RequestUpdate();this.rH();this._LockObject(this.cD);a4.focus();
return true;};e._Done=function(){if(this.c5)console.log("EmWi debug: De-Initializing application '"+
this.rs()._className+"'.");if(this.fs&&this.o8){var a4=this.fs;a4.removeEventListener(
"mousedown",this.o8,true);a4.removeEventListener("mousemove",this.jY,false);a4.removeEventListener(
"mouseout",this.jY,false);a4.removeEventListener("touchstart",this.rM,true);a4.removeEventListener(
"touchend",this.pg,false);a4.removeEventListener("touchcancel",this.pg,false);a4.
removeEventListener("touchmove",this.rL,false);a4.removeEventListener("keydown",
this.na,true);a4.removeEventListener("keyup",this.na,false);a4.removeEventListener(
"keypress",this.na,false);document.removeEventListener("mousemove",this.jY,true);
document.removeEventListener("mouseup",this.nb,true);delete this.o8;delete this.
nb;delete this.jY;delete this.rM;delete this.pg;delete this.rL;delete this.na;}if(
this.ah){fM(this.ah,null,false);mY(this.ah,null,false);ex(this.ah,null,null);this.
ah.clear(this.ah.COLOR_BUFFER_BIT);this.ah.flush();this.ah.finish();this.ah.kW=null;
this.ah.jg=null;this.ah.jh=null;this.ah.mr=null;this.ah.ji=null;this.ah.ms=null;
this.ah.hZ=null;this.ah.mt=null;this.ah.mu=null;this.ah.mv=null;this.ah.mw=null;
this.ah.jj=null;this.ah.jk=null;this.ah.mx=null;this.ah.my=null;this.ah.mz=null;
this.ah.mA=null;this.ah.mB=null;this.ah.es=null;this.ah.et=null;this.ah.eu=null;
this.ah.ev=null;this.ah.ew=null;this.ah.jq=null;this.ah.js=null;this.ah.ju=null;
this.ah.jw=null;this.ah.jy=null;this.ah.jA=null;this.ah.jB=null;this.ah.jC=null;
this.ah.jD=null;this.ah.jE=null;this.ah.jF=null;this.ah.jG=null;this.ah.jH=null;
this.ah.mF=null;this.ah.mH=null;this.ah.jI=null;this.ah.jJ=null;this.ah.jK=null;
this.ah.jL=null;this.ah.mM=null;this.ah.mO=null;this.ah.jM=null;this.ah.jN=null;
this.ah.jO=null;this.ah.jP=null;this.ah.mT=null;this.ah.mV=null;this.ah.kX=null;
this.ah.kY=null;this.ah.kZ=null;this.ah.jl=null;this.ah.jm=null;this.ah.jn=null;
this.ah.jo=null;this.ah.jp=null;this.ah.jr=null;this.ah.jt=null;this.ah.jv=null;
this.ah.jx=null;this.ah.jz=null;this.ah.mC=null;this.ah.mD=null;this.ah.mE=null;
this.ah.mG=null;this.ah.mI=null;this.ah.mJ=null;this.ah.mK=null;this.ah.mL=null;
this.ah.mN=null;this.ah.mP=null;this.ah.mQ=null;this.ah.mR=null;this.ah.mS=null;
this.ah.mU=null;this.ah.mW=null;fn(this.ah);}while(this.hh)o2(this,this.hh);this.
la=null;this.jW=null;this.hh=null;this.m_=null;this.h3=null;this.ah=null;this.fs=
null;this.d_=null;this.e8=null;if(this.cD)this._UnlockObject(this.cD);this.cD=null;
try{this.rF();}catch(bv){console.log("EmWi error: "+bv+"!");}if(this.c5)console.
log("EmWi debug: "+this.h7+" objects after the final GC run.");this.j0=[];this.h8=
null;this.h7=0;this.ry=0;this.ld=false;this.lc=false;this.h6=false;};e.abh=function(
aH,ak){return[aH[0]+ak[0],aH[1]+ak[1],aH[2]+ak[0],aH[3]+ak[1]];};e.abg=function(
aH,ak){return[aH[0]-ak[0],aH[1]-ak[1],aH[2]-ak[0],aH[3]-ak[1]];};e.lb=function(df
,dg){var cI=df[0];var cK=df[1];var cJ=df[2];var cL=df[3];var eo=dg[0];var eq=dg[
1];var ep=dg[2];var er=dg[3];if(cJ<=cI)cI=cJ=0;if(cL<=cK)cK=cL=0;if(ep<=eo)eo=ep=
0;if(er<=eq)eq=er=0;if(cI<eo)cI=eo;if(cJ>ep)cJ=ep;if(cK<eq)cK=eq;if(cL>er)cL=er;
if(cJ<=cI)cI=cJ=0;if(cL<=cK)cK=cL=0;return[cI,cK,cJ,cL];};e.aaV=function(df,dg){
var cI=df[0];var cK=df[1];var cJ=df[2];var cL=df[3];var eo=dg[0];var eq=dg[1];var
ep=dg[2];var er=dg[3];if(cJ<=cI)cI=cJ=0;if(cL<=cK)cK=cL=0;if(ep<=eo)eo=ep=0;if(er<=
eq)eq=er=0;if((cI===cJ)||(cK===cL))return dg;if((eo===ep)||(eq===er))return df;if(
cI<eo)cI=eo;if(cJ>ep)cJ=ep;if(cK<eq)cK=eq;if(cL>er)cL=er;if(cJ<=cI)cI=cJ=0;if(cL<=
cK)cK=cL=0;return[cI,cK,cJ,cL];};e.wC=function(df,dg){var cI=df[0];var cK=df[1];
var cJ=df[2];var cL=df[3];var eo=dg[0];var eq=dg[1];var ep=dg[2];var er=dg[3];if(
cJ<=cI)cI=cJ=0;if(cL<=cK)cK=cL=0;if(ep<=eo)eo=ep=0;if(er<=eq)eq=er=0;if((cI===cJ
)||(cK===cL))return dg;if((eo===ep)||(eq===er))return df;if(cI>eo)cI=eo;if(cJ<ep
)cJ=ep;if(cK>eq)cK=eq;if(cL<er)cL=er;if(cJ<=cI)cI=cJ=0;if(cL<=cK)cK=cL=0;return[
cI,cK,cJ,cL];};e.aaT=function(aH,nj){return[aH[0]-nj[0],aH[1]-nj[1],aH[2]+nj[0],
aH[3]+nj[1]];};e.abP=function(aH,ny){return[aH[0],ny,aH[2],aH[3]];};e.abN=function(
aH,nx){return[aH[0],aH[1],nx,aH[3]];};e.abM=function(aH,bx){return[bx,aH[1],bx+aH[
2]-aH[0],aH[3]];};e.abO=function(aH,bM){return[aH[0],bM,aH[2],bM+aH[3]-aH[1]];};
e.abL=function(aH,w8){return[aH[0],aH[1],aH[0]+w8,aH[3]];};e.abI=function(aH,wN){
return[aH[0],aH[1],aH[2],aH[1]+wN];};e.abJ=function(aH,nq){return[nq[0],nq[1],nq[
0]+aH[2]-aH[0],nq[1]+aH[3]-aH[1]];};e.abK=function(aH,bc){return[aH[0],aH[1],aH[
0]+bc[0],aH[1]+bc[1]];};e.aaY=function(df,dg){return(df[0]===dg[0])&&(df[1]===dg[
1])&&(df[2]===dg[2])&&(df[3]===dg[3]);};e.wa=function(aH,dL){if((dL[0]<aH[0])||(
dL[0]>=aH[2]))return false;if((dL[1]<aH[1])||(dL[1]>=aH[3]))return false;return true;
};e.aaH=function(aH){return(aH[2]-aH[0])*(aH[3]-aH[1]);};e.aaI=function(aH){var p=
aH[0];var aa=aH[1];return[p+((aH[2]-p)>>1),aa+((aH[3]-aa)>>1)];};e.aaG=function(
aH){return[Math.abs(aH[0]),Math.abs(aH[1]),Math.abs(aH[2]),Math.abs(aH[3])];};e.
aaK=function(){var ao=arguments.length;var aR=arguments[0];aR=[aR[0],aR[1],aR[2]
,aR[3]];for(var d=1;d<ao;d++){var h=arguments[d];if(h[0]<aR[0])aR[0]=h[0];if(h[1
]<aR[1])aR[1]=h[1];if(h[2]<aR[2])aR[2]=h[2];if(h[3]<aR[3])aR[3]=h[3];}return aR;
};e.aaJ=function(){var ao=arguments.length;var aR=arguments[0];aR=[aR[0],aR[1],aR[
2],aR[3]];for(var d=1;d<ao;d++){var h=arguments[d];if(h[0]>aR[0])aR[0]=h[0];if(h[
1]>aR[1])aR[1]=h[1];if(h[2]>aR[2])aR[2]=h[2];if(h[3]>aR[3])aR[3]=h[3];}return aR;
};e.abf=function(dL,ak){return[dL[0]+ak[0],dL[1]+ak[1]];};e.abe=function(dL,ak){
return[dL[0]-ak[0],dL[1]-ak[1]];};e.aaX=function(r0,r1){return(r0[0]===r1[0])&&(
r0[1]===r1[1]);};e.aaC=function(dL){return[Math.abs(dL[0]),Math.abs(dL[1])];};e.
aaE=function(){var ao=arguments.length;var aR=arguments[0];aR=[aR[0],aR[1]];for(
var d=1;d<ao;d++){var h=arguments[d];if(h[0]<aR[0])aR[0]=h[0];if(h[1]<aR[1])aR[1
]=h[1];}return aR;};e.aaD=function(){var ao=arguments.length;var aR=arguments[0];
aR=[aR[0],aR[1]];for(var d=1;d<ao;d++){var h=arguments[d];if(h[0]>aR[0])aR[0]=h[
0];if(h[1]>aR[1])aR[1]=h[1];}return aR;};e.abw=function(bd,bg){var au=(bd&0xFF)+(
bg&0xFF);var dC=((bd>>8)&0xFF)+((bg>>8)&0xFF);var aS=((bd>>16)&0xFF)+((bg>>16)&0xFF
);var cw=((bd>>24)&0xFF)+((bg>>24)&0xFF);if(au>255)au=255;if(dC>255)dC=255;if(aS>
255)aS=255;if(cw>255)cw=255;return au|(dC<<8)|(aS<<16)|(cw<<24);};e.aa9=function(
bd,bg){var au=(bd&0xFF)-(bg&0xFF);var dC=((bd>>8)&0xFF)-((bg>>8)&0xFF);var aS=((
bd>>16)&0xFF)-((bg>>16)&0xFF);var cw=((bd>>24)&0xFF)-((bg>>24)&0xFF);if(au<0)au=
0;if(dC<0)dC=0;if(aS<0)aS=0;if(cw<0)cw=0;return au|(dC<<8)|(aS<<16)|(cw<<24);};e.
z2=function(bd,bg){var au=(bg&0xFF);var dC=((bg>>8)&0xFF);var aS=((bg>>16)&0xFF);
var cw=((bg>>24)&0xFF);var oi=255-cw;au=((au*cw)+((bd&0xFF)*oi))/255;dC=((dC*cw)+(((
bd>>8)&0xFF)*oi))/255;aS=((aS*cw)+(((bd>>16)&0xFF)*oi))/255;cw=255-((oi*(255-((bd>>
24)&0xFF)))/255);if(au>255)au=255;if(dC>255)dC=255;if(aS>255)aS=255;if(cw>255)cw=
255;return au|(dC<<8)|(aS<<16)|(cw<<24);};e.z3=function(ar,hk){var au=(ar&0xFF);
var dC=((ar>>8)&0xFF);var aS=((ar>>16)&0xFF);var cw=((ar>>24)&0xFF);if(hk<0)hk=0;
if(hk>255)hk=255;au=(au*hk)/255;dC=(dC*hk)/255;aS=(aS*hk)/255;cw=(cw*hk)/255;return au|(
dC<<8)|(aS<<16)|(cw<<24);};e.aat=function(){var ao=arguments.length;var aR=arguments[
0];var c=aR&0x000000FF;var a7=aR&0x0000FF00;var i8=aR&0x00FF0000;var i9=(aR>>8)&
0x00FF0000;for(var d=1;d<ao;d++){var h=arguments[d];var ck=h&0x000000FF;var b8=h&
0x0000FF00;var l_=h&0x00FF0000;var l$=(h>>8)&0x00FF0000;if(ck<c)c=ck;if(b8<a7)a7=
b8;if(l_<i8)i8=l_;if(l$<i9)i9=l$;}return c|a7|i8|(i9<<8);};e.aas=function(){var ao=
arguments.length;var aR=arguments[0];var c=aR&0x000000FF;var a7=aR&0x0000FF00;var
i8=aR&0x00FF0000;var i9=aR&0xFF000000;for(var d=1;d<ao;d++){var h=arguments[d];var
ck=h&0x000000FF;var b8=h&0x0000FF00;var l_=h&0x00FF0000;var l$=h&0xFF000000;if(ck>
c)c=ck;if(b8>a7)a7=b8;if(l_>i8)i8=l_;if(l$>i9)i9=l$;}return c|a7|i8|i9;};e.wc=function(
cR,c7,aW){if(aW<0.0)aW=0.0;if(aW>1.0)aW=1.0;return(((1.0-aW)*cR)+(aW*c7))|0;};e.
abc=e.wc;e.wd=function(cR,c7,aW){if(aW<0.0)aW=0.0;if(aW>1.0)aW=1.0;return Math.trunc(((
1.0-aW)*cR)+(aW*c7));};e.abd=e.wd;e.aa$=function(cR,c7,aW){if(aW<0.0)aW=0.0;if(aW>
1.0)aW=1.0;return((1.0-aW)*cR)+(aW*c7);};e.aba=function(cR,c7,aW){if(aW<0.0)aW=0.0;
if(aW>1.0)aW=1.0;return[(((1.0-aW)*cR[0])+(aW*c7[0]))|0,(((1.0-aW)*cR[1])+(aW*c7[
1]))|0];};e.abb=function(cR,c7,aW){if(aW<0.0)aW=0.0;if(aW>1.0)aW=1.0;return[(((1.0-
aW)*cR[0])+(aW*c7[0]))|0,(((1.0-aW)*cR[1])+(aW*c7[1]))|0,(((1.0-aW)*cR[2])+(aW*c7[
2]))|0,(((1.0-aW)*cR[3])+(aW*c7[3]))|0];};e.aa_=function(cR,c7,aW){if(aW<0.0)aW=
0.0;if(aW>1.0)aW=1.0;var iu=cR&0xFF;var pM=c7&0xFF;var iv=(cR>>8)&0xFF;var pN=(c7>>
8)&0xFF;var iw=(cR>>16)&0xFF;var pO=(c7>>16)&0xFF;var ix=(cR>>24)&0xFF;var pP=(c7>>
24)&0xFF;iu=(((1.0-aW)*iu)+(aW*pM))|0;iv=(((1.0-aW)*iv)+(aW*pN))|0;iw=(((1.0-aW)
*iw)+(aW*pO))|0;ix=(((1.0-aW)*ix)+(aW*pP))|0;return iu|(iv<<8)|(iw<<16)|(ix<<24);
};e.abm=function(cp,ae,cg){if((cg!==2)&&(cg!==8)&&(cg!==16))cg=10;if(ae>128)ae=128;
var h=cp.toString(cg);var hX=ae-h.length;if(hX>0)h=e.nf.slice(0,hX)+h;return h;};
e.abl=function(cp,ae,cg){if((cg!==2)&&(cg!==8)&&(cg!==16))cg=10;var aR=(cp<0)?-cp:
cp;if(ae>128)ae=128;var h=aR.toString(cg);var hX=ae-h.length-((cp<0)?1:0);if(hX>
0)h=e.nf.slice(0,hX)+h;if(cp<0)return"-"+h;else return h;};e.abk=function(cp,ae,
lx){if(ae<0)ae=0;if(ae>32)ae=32;if(lx<0)lx=0;if(lx>32)lx=32;var l5=(cp<0)?"-":"";
var h=Math.abs(cp).toFixed(lx);var hX=ae-h.length-l5.length;if(hX>0)h=e.nf.slice(
0,hX)+h;return l5+h;};e.abj=function(pr,ae){ae=Math.floor(ae);if(ae<=0)return this.
jV;return new Array(ae+1).join(String.fromCharCode(pr));};e.abV=function(m,ae){if(
ae<=0)return this.jV;if(ae>=m.length)return m;return m.slice(0,ae|0);};e.ab2=function(
m,ae){if(ae<=0)return this.jV;if(ae>=m.length)return m;return m.slice(-(ae|0));};
e.abW=function(m,bK,ae){var bf=(bK>0)?(bK|0):0;var dQ=(bK+ae)|0;var a_=m.length;
if((bf>=a_)||(dQ<=0)||(bf>=dQ))return this.jV;if((bf===0)&&(dQ>=a_))return m;return m.
slice(bf,dQ);};e.abU=function(ka,lI,bK){var tv=ka.length;var g8=lI.length;if(g8<=
0)return ka;if(tv<=0)return lI;if(bK<0)return lI+ka;if(bK>=tv)return ka+lI;return ka.
slice(0,(bK|=0))+lI+ka.slice(bK);};e.ab1=function(m,bK,ae){var bf=(bK>=0)?(bK|0):
0;var dQ=(bK+ae)|0;var a_=m.length;if((bf>=a_)||(dQ<=0)||(bf>=dQ))return m;return m.
slice(0,bf)+m.slice(dQ);};e.wz=function(m,id,cg){if((cg!==2)&&(cg!==8)&&(cg!==16
))cg=10;var h=parseInt(m,cg);if(!isNaN(h))return h;return id;};e.abZ=function(m,
id,cg){if((cg!==2)&&(cg!==8)&&(cg!==16))cg=10;var h=parseInt(m,cg);if(!isNaN(h)){
if(h<0)h+=0x100000000;return h;}return id;};e.abY=e.wz;e.ab0=function(m,id,cg){if((
cg!==2)&&(cg!==8)&&(cg!==16))cg=10;var h=parseInt(m,cg);if(!isNaN(h)){if(h<0)h+=
0x10000000000000000;return h;}return id;};e.abX=function(m,id){var h=parseFloat(
m);if(!isNaN(h))return h;return id;};e.abQ=function(m,bK,pr){if((bK<0)||(bK>=m.length
))return m;return m.slice(0,bK)+String.fromCharCode(pr)+m.slice(bK+1);};e.aaZ=function(
ly,lz){if(!ly&&!lz)return true;if(!ly||!lz)return false;return(ly[0]===lz[0])&&(
ly[1]===lz[1])&&(ly[2]===lz[2]);};e.aa0=function(ns,nt){if(!ns&&!nt)return true;
if(!ns||!nt)return false;return(ns[0]===nt[0])&&(ns[1]===nt[1]);};e.abz=function(
cR,c7){return(cR+((c7-cR)*Math.random()))|0;};e.aby=function(cR,c7){return cR+((
c7-cR)*Math.random());};e.aai=function(cp){return cp-Math.trunc(cp);};e.aa1=function(
bx,bM){return Math.sqrt((bx*bx)+(bM*bM));};e.aa2=function(dL){return Math.sqrt((
dL[0]*dL[0])+(dL[1]*dL[1]));};function fn(a){var r$=false;var sS;while((sS=a.getError(
))!==a.NO_ERROR){console.log("EmWi error: WebGL error '"+sS+"' reported.");r$=true;
}return r$;}function j(w5,wW){return w5.replace(new RegExp("{[0-9A-Za-z]}","g"),
function(y2){return wW[y2.substr(1,1)]||"";});}var vS="precision mediump float;\n"+
"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+"\n"+"void main()\n"+
"{\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";
var vT="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute lowp    vec4 src_clr;\n"+"varying   lowp    vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_clr_var = src_clr;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vU="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"varying   highp   vec3 src_pos_var;\n"+"\n"+
"void main()\n"+"{\n"+"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vV="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"attribute lowp    vec4 src_clr;\n"+"varying   highp   vec3 src_pos_var;\n"+
"varying   lowp    vec4 src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  src_clr_var = src_clr;\n"+
"  src_pos_var = src_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vW="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute highp   vec3 src_pos;\n"+"varying   highp   vec3 src_pos_var;\n"+"attribute mediump vec3 clr_pos;\n"+
"varying   mediump vec3 clr_pos_var;\n"+"\n"+"void main()\n"+"{\n"+"  src_pos_var = src_pos;\n"+
"  clr_pos_var = clr_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vX="precision mediump float;\n"+"uniform   highp   mat4  dst_map;\n"+"attribute highp   vec2  dst_pos;\n"+
"attribute highp   vec3  src_pos;\n"+"varying   highp   vec3  src_pos_var;\n"+"uniform   highp   vec2  src_pxl;\n"+
"uniform   highp   vec2  src_step;\n"+"\n"+"void main()\n"+"{\n"+"  src_pos_var = src_pos * vec3( src_pxl, 1.0 );\n"+
"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+"}\n";var vY=
"precision mediump float;\n"+"uniform   highp   mat4  dst_map;\n"+"attribute highp   vec2  dst_pos;\n"+
"attribute highp   vec3  src_pos;\n"+"varying   highp   vec3  src_pos_var;\n"+"uniform   highp   vec2  src_pxl;\n"+
"uniform   highp   vec2  src_step;\n"+"attribute highp   vec2  msk_pos;\n"+"varying   highp   vec2  msk_pos_var;\n"+
"uniform   highp   vec2  msk_pxl;\n"+"\n"+"void main()\n"+"{\n"+"  src_pos_var = src_pos * vec3( src_pxl, 1.0 );\n"+
"  msk_pos_var = msk_pos * msk_pxl;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var vZ="precision mediump float;\n"+"uniform   highp   mat4 dst_map;\n"+"attribute highp   vec2 dst_pos;\n"+
"attribute mediump vec3 clr_pos;\n"+"varying   mediump vec3 clr_pos_var;\n"+"\n"+
"void main()\n"+"{\n"+"  clr_pos_var = clr_pos;\n"+"  gl_Position = vec4( dst_pos.x, dst_pos.y, 0.0, 1.0 ) * dst_map;\n"+
"}\n";var t8="precision mediump float;\n"+"void main()\n"+"{\n"+"  gl_FragColor = vec4( 0.0, 0.0, 0.0, 0.0 );\n"+
"}\n";var t9="precision mediump float;\n"+"varying   lowp vec4 src_clr_var;\n"+"\n"+
"void main()\n"+"{\n"+"  gl_FragColor = src_clr_var;\n"+"}\n";var t_="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy );\n"+
"}\n";var t$="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var );\n"+
"}\n";var ua="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ) * src_clr_var.a;\n"+
"}\n";var ub="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ) * src_clr_var.a;\n"+
"}\n";var uc="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_pos_var.xy ).a * src_clr_var;\n"+
"}\n";var ud="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ).a * src_clr_var;\n"+
"}\n";var ue="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size );\n"+
"}\n";var uf="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+
"uniform   highp   vec2      src_ofs;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   lowp    vec4      src_clr_var;\n"+"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size )\n"+
"                            * src_clr_var.a;\n"+"}\n";var ug="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+"uniform   highp   vec2      src_ofs;\n"+
"varying   highp   vec3      src_pos_var;\n"+"varying   lowp    vec4      src_clr_var;\n"+
"\n"+"void main()\n"+"{\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size ).a\n"+
"                            * src_clr_var;\n"+"}\n";var uh="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  float clr_l  = mix( clr_tl.a, clr_bl.a, clr_pos_var.y );\n"+
"  float clr_r  = mix( clr_tr.a, clr_br.a, clr_pos_var.y );\n"+"  float clr    = mix( clr_l,    clr_r,    clr_pos_var.x );\n"+
"  gl_FragColor = texture2D( src, src_pos_var.xy ) * clr;\n"+"}\n";var ui="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos_var.y );\n"+
"  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos_var.y );\n"+"  vec4 clr     = mix( clr_l,  clr_r,  clr_pos_var.x );\n"+
"  gl_FragColor = texture2D( src, src_pos_var.xy ).a * clr;\n"+"}\n";var uj="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2  clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  float clr_l   = mix( clr_tl.a, clr_bl.a, clr_pos.y );\n"+"  float clr_r   = mix( clr_tr.a, clr_br.a, clr_pos.y );\n"+
"  float clr     = mix( clr_l,    clr_r,    clr_pos.x );\n"+"  gl_FragColor  = texture2DProj( src, src_pos_var ) * clr;\n"+
"}\n";var uk="precision mediump float;\n"+"uniform   lowp    sampler2D src;\n"+"varying   highp   vec3      src_pos_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2 clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos.y );\n"+"  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos.y );\n"+
"  vec4 clr     = mix( clr_l,  clr_r,  clr_pos.x );\n"+"  gl_FragColor = texture2DProj( src, src_pos_var ).a * clr;\n"+
"}\n";var ul="precision mediump float;\n"+"varying   mediump vec3 clr_pos_var;\n"+
"uniform   lowp    vec4 clr_tl;\n"+"uniform   lowp    vec4 clr_tr;\n"+"uniform   lowp    vec4 clr_br;\n"+
"uniform   lowp    vec4 clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2 clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos.y );\n"+"  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos.y );\n"+
"  gl_FragColor = mix( clr_l,  clr_r,  clr_pos.x );\n"+"}\n";var um="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+"uniform   highp   vec2      src_ofs;\n"+
"varying   highp   vec3      src_pos_var;\n"+"varying   lowp    vec4      src_clr_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2  clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  float clr_l   = mix( clr_tl.a, clr_bl.a, clr_pos.y );\n"+"  float clr_r   = mix( clr_tr.a, clr_br.a, clr_pos.y );\n"+
"  float clr     = mix( clr_l,    clr_r,    clr_pos.x );\n"+"  gl_FragColor  = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size )\n"+
"                            * clr;\n"+"}\n";var un="precision mediump float;\n"+
"uniform   lowp    sampler2D src;\n"+"uniform   highp   vec2      src_size;\n"+"uniform   highp   vec2      src_ofs;\n"+
"varying   highp   vec3      src_pos_var;\n"+"varying   lowp    vec4      src_clr_var;\n"+
"varying   mediump vec3      clr_pos_var;\n"+"uniform   lowp    vec4      clr_tl;\n"+
"uniform   lowp    vec4      clr_tr;\n"+"uniform   lowp    vec4      clr_br;\n"+
"uniform   lowp    vec4      clr_bl;\n"+"\n"+"void main()\n"+"{\n"+"  vec2 clr_pos = clr_pos_var.xy / clr_pos_var.z;\n"+
"  vec4 clr_l   = mix( clr_tl, clr_bl, clr_pos.y );\n"+"  vec4 clr_r   = mix( clr_tr, clr_br, clr_pos.y );\n"+
"  vec4 clr     = mix( clr_l,  clr_r,  clr_pos.x );\n"+"  gl_FragColor = texture2D( src, src_ofs + fract( src_pos_var.xy ) * src_size ).a\n"+
"                            * clr;\n"+"}\n";var aZ="precision mediump       float;\n"+
"uniform lowp  sampler2D src;\n"+"varying highp vec3      src_pos_var;\n";var ba=
"uniform highp vec2      src_step;\n";var dT="uniform lowp  sampler2D msk;\n"+"varying highp vec2      msk_pos_var;\n"+
"uniform       bool      msk_invert;\n";var gg="uniform highp vec2      msk_step;\n";
var bQ="uniform lowp  float     opacity;\n";var cO="uniform lowp  vec4      tint;\n"+
"uniform lowp  float     intensity;\n";var cC="uniform highp vec2      clamp_tl;\n"+
"uniform highp vec2      clamp_br;\n";var a0="void main()\n"+"{\n";var a1="}\n";
var eN="  vec2 {0}_pos_0  = {0}_pos_var.xy;\n"+"  vec2 {0}_pos_1L = {0}_pos_0  - {0}_step;\n"+
"  vec2 {0}_pos_1R = {0}_pos_0  + {0}_step;\n"+"  vec2 {0}_pos_2L = {0}_pos_1L - {0}_step;\n"+
"  vec2 {0}_pos_2R = {0}_pos_1R + {0}_step;\n";var cv=eN+"  vec2 {0}_pos_3L = {0}_pos_2L - {0}_step;\n"+
"  vec2 {0}_pos_3R = {0}_pos_2R + {0}_step;\n"+"  vec2 {0}_pos_4L = {0}_pos_3L - {0}_step;\n"+
"  vec2 {0}_pos_4R = {0}_pos_3R + {0}_step;\n";var eO=cv+"  vec2 {0}_pos_5L = {0}_pos_4L - {0}_step;\n"+
"  vec2 {0}_pos_5R = {0}_pos_4R + {0}_step;\n"+"  vec2 {0}_pos_6L = {0}_pos_5L - {0}_step;\n"+
"  vec2 {0}_pos_6R = {0}_pos_5R + {0}_step;\n";var fo=eO+"  vec2 {0}_pos_7L = {0}_pos_6L - {0}_step;\n"+
"  vec2 {0}_pos_7R = {0}_pos_6R + {0}_step;\n"+"  vec2 {0}_pos_8L = {0}_pos_7L - {0}_step;\n"+
"  vec2 {0}_pos_8R = {0}_pos_7R + {0}_step;\n";var jQ="  src_pos_0  = max( src_pos_0,  clamp_tl - src_pos_0  );\n"+
"  src_pos_0  = min( src_pos_0,  clamp_br - src_pos_0  );\n"+"  src_pos_1L = max( src_pos_1L, clamp_tl - src_pos_1L );\n"+
"  src_pos_1L = min( src_pos_1L, clamp_br - src_pos_1L );\n"+"  src_pos_1R = max( src_pos_1R, clamp_tl - src_pos_1R );\n"+
"  src_pos_1R = min( src_pos_1R, clamp_br - src_pos_1R );\n"+"  src_pos_2L = max( src_pos_2L, clamp_tl - src_pos_2L );\n"+
"  src_pos_2L = min( src_pos_2L, clamp_br - src_pos_2L );\n"+"  src_pos_2R = max( src_pos_2R, clamp_tl - src_pos_2R );\n"+
"  src_pos_2R = min( src_pos_2R, clamp_br - src_pos_2R );\n";var fN=jQ+"  src_pos_3L = max( src_pos_3L, clamp_tl - src_pos_3L );\n"+
"  src_pos_3L = min( src_pos_3L, clamp_br - src_pos_3L );\n"+"  src_pos_3R = max( src_pos_3R, clamp_tl - src_pos_3R );\n"+
"  src_pos_3R = min( src_pos_3R, clamp_br - src_pos_3R );\n"+"  src_pos_4L = max( src_pos_4L, clamp_tl - src_pos_4L );\n"+
"  src_pos_4L = min( src_pos_4L, clamp_br - src_pos_4L );\n"+"  src_pos_4R = max( src_pos_4R, clamp_tl - src_pos_4R );\n"+
"  src_pos_4R = min( src_pos_4R, clamp_br - src_pos_4R );\n";var jR=fN+"  src_pos_5L = max( src_pos_5L, clamp_tl - src_pos_5L );\n"+
"  src_pos_5L = min( src_pos_5L, clamp_br - src_pos_5L );\n"+"  src_pos_5R = max( src_pos_5R, clamp_tl - src_pos_5R );\n"+
"  src_pos_5R = min( src_pos_5R, clamp_br - src_pos_5R );\n"+"  src_pos_6L = max( src_pos_6L, clamp_tl - src_pos_6L );\n"+
"  src_pos_6L = min( src_pos_6L, clamp_br - src_pos_6L );\n"+"  src_pos_6R = max( src_pos_6R, clamp_tl - src_pos_6R );\n"+
"  src_pos_6R = min( src_pos_6R, clamp_br - src_pos_6R );\n";var k2=jR+"  src_pos_7L = max( src_pos_7L, clamp_tl - src_pos_7L );\n"+
"  src_pos_7L = min( src_pos_7L, clamp_br - src_pos_7L );\n"+"  src_pos_7R = max( src_pos_7R, clamp_tl - src_pos_7R );\n"+
"  src_pos_7R = min( src_pos_7R, clamp_br - src_pos_7R );\n"+"  src_pos_8L = max( src_pos_8L, clamp_tl - src_pos_8L );\n"+
"  src_pos_8L = min( src_pos_8L, clamp_br - src_pos_8L );\n"+"  src_pos_8R = max( src_pos_8R, clamp_tl - src_pos_8R );\n"+
"  src_pos_8R = min( src_pos_8R, clamp_br - src_pos_8R );\n";var h0="  float msk_0 = texture2D( msk, msk_pos_var.xy ).a;\n";
var oY="  float msk_0  = texture2D( msk, msk_pos_0  ).a;\n"+"  float msk_1L = texture2D( msk, msk_pos_1L ).a;\n"+
"  float msk_1R = texture2D( msk, msk_pos_1R ).a;\n"+"  float msk_2L = texture2D( msk, msk_pos_2L ).a;\n"+
"  float msk_2R = texture2D( msk, msk_pos_2R ).a;\n";var k3=oY+"  float msk_3L = texture2D( msk, msk_pos_3L ).a;\n"+
"  float msk_3R = texture2D( msk, msk_pos_3R ).a;\n"+"  float msk_4L = texture2D( msk, msk_pos_4L ).a;\n"+
"  float msk_4R = texture2D( msk, msk_pos_4R ).a;\n";var oZ=k3+"  float msk_5L = texture2D( msk, msk_pos_5L ).a;\n"+
"  float msk_5R = texture2D( msk, msk_pos_5R ).a;\n"+"  float msk_6L = texture2D( msk, msk_pos_6L ).a;\n"+
"  float msk_6R = texture2D( msk, msk_pos_6R ).a;\n";var rk=oZ+"  float msk_7L = texture2D( msk, msk_pos_7L ).a;\n"+
"  float msk_7R = texture2D( msk, msk_pos_7R ).a;\n"+"  float msk_8L = texture2D( msk, msk_pos_8L ).a;\n"+
"  float msk_8R = texture2D( msk, msk_pos_8R ).a;\n";var h1="  {0} = ( msk_invert? 1.0 - msk_0 : msk_0 ) * {1};\n";
var o0="  if ( msk_invert )\n"+"  {\n"+"    msk_0  = 1.0 - msk_0;\n"+"    msk_1L = 1.0 - msk_1L;\n"+
"    msk_1R = 1.0 - msk_1R;\n"+"    msk_2L = 1.0 - msk_2L;\n"+"    msk_2R = 1.0 - msk_2R;\n";
var k4=o0+"    msk_3L = 1.0 - msk_3L;\n"+"    msk_3R = 1.0 - msk_3R;\n"+"    msk_4L = 1.0 - msk_4L;\n"+
"    msk_4R = 1.0 - msk_4R;\n";var o1=k4+"    msk_5L = 1.0 - msk_5L;\n"+"    msk_5R = 1.0 - msk_5R;\n"+
"    msk_6L = 1.0 - msk_6L;\n"+"    msk_6R = 1.0 - msk_6R;\n";var rl=o1+"    msk_7L = 1.0 - msk_7L;\n"+
"    msk_7R = 1.0 - msk_7R;\n"+"    msk_8L = 1.0 - msk_8L;\n"+"    msk_8R = 1.0 - msk_8R;\n";
var gh="  }\n";var h2="  {0} = texture2D( src, src_pos_var.xy );\n";var fO="  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.375  ) +\n"+
"              ((( texture2D( src, src_pos_1L ) {2} ) +\n"+"                ( texture2D( src, src_pos_1R ) {3} )) * 0.25   ) +\n"+
"              ((( texture2D( src, src_pos_2L ) {4} ) +\n"+"                ( texture2D( src, src_pos_2R ) {5} )) * 0.0625 );\n"+
"\n"+"  {0} = tmp;\n";var fP="  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.2736 ) +\n"+
"              ((( texture2D( src, src_pos_1L ) {2} ) +\n"+"                ( texture2D( src, src_pos_1R ) {3} )) * 0.2187 ) +\n"+
"              ((( texture2D( src, src_pos_2L ) {4} ) +\n"+"                ( texture2D( src, src_pos_2R ) {5} )) * 0.1093 ) +\n"+
"              ((( texture2D( src, src_pos_3L ) {6} ) +\n"+"                ( texture2D( src, src_pos_3R ) {7} )) * 0.0312 ) +\n"+
"              ((( texture2D( src, src_pos_4L ) {8} ) +\n"+"                ( texture2D( src, src_pos_4R ) {9} )) * 0.0040 );\n"+
"\n"+"  {0} = tmp;\n";var fQ="  vec4  tmp = (   texture2D( src, src_pos_0  ) {1}    * 0.1964 ) +\n"+
"              ((( texture2D( src, src_pos_1L ) {2} ) +\n"+"                ( texture2D( src, src_pos_1R ) {3} )) * 0.1747 ) +\n"+
"              ((( texture2D( src, src_pos_2L ) {4} ) +\n"+"                ( texture2D( src, src_pos_2R ) {5} )) * 0.1223 ) +\n"+
"              ((( texture2D( src, src_pos_3L ) {6} ) +\n"+"                ( texture2D( src, src_pos_3R ) {7} )) * 0.0667 ) +\n"+
"              ((( texture2D( src, src_pos_4L ) {8} ) +\n"+"                ( texture2D( src, src_pos_4R ) {9} )) * 0.0278 ) +\n"+
"              ((( texture2D( src, src_pos_5L ) {A} ) +\n"+"                ( texture2D( src, src_pos_5R ) {B} )) * 0.0085 ) +\n"+
"              ((( texture2D( src, src_pos_6L ) {C} ) +\n"+"                ( texture2D( src, src_pos_6R ) {D} )) * 0.0018 );\n"+
"\n"+"  {0} = tmp;\n";var gi="  vec4  tmp = (( texture2D( src, src_pos_0  ) {1} ) +\n"+
"               ( texture2D( src, src_pos_1L ) {2} ) +\n"+"               ( texture2D( src, src_pos_1R ) {3} ) +\n"+
"               ( texture2D( src, src_pos_2L ) {4} ) +\n"+"               ( texture2D( src, src_pos_2R ) {5} ) +\n"+
"               ( texture2D( src, src_pos_3L ) {6} ) +\n"+"               ( texture2D( src, src_pos_3R ) {7} ) +\n"+
"               ( texture2D( src, src_pos_4L ) {8} ) +\n"+"               ( texture2D( src, src_pos_4R ) {9} )) * ( 1.0 / 9.0 );\n"+
"\n"+"  {0} = tmp;\n";var gj="  vec4  tmp = (( texture2D( src, src_pos_0  ) {1} ) +\n"+
"               ( texture2D( src, src_pos_1L ) {2} ) +\n"+"               ( texture2D( src, src_pos_1R ) {3} ) +\n"+
"               ( texture2D( src, src_pos_2L ) {4} ) +\n"+"               ( texture2D( src, src_pos_2R ) {5} ) +\n"+
"               ( texture2D( src, src_pos_3L ) {6} ) +\n"+"               ( texture2D( src, src_pos_3R ) {7} ) +\n"+
"               ( texture2D( src, src_pos_4L ) {8} ) +\n"+"               ( texture2D( src, src_pos_4R ) {9} ) +\n"+
"               ( texture2D( src, src_pos_5L ) {A} ) +\n"+"               ( texture2D( src, src_pos_5R ) {B} ) +\n"+
"               ( texture2D( src, src_pos_6L ) {C} ) +\n"+"               ( texture2D( src, src_pos_6R ) {D} ) +\n"+
"               ( texture2D( src, src_pos_7L ) {E} ) +\n"+"               ( texture2D( src, src_pos_7R ) {F} ) +\n"+
"               ( texture2D( src, src_pos_8L ) {G} ) +\n"+"               ( texture2D( src, src_pos_8R ) {H} )) * ( 1.0 / 17.0 );\n"+
"\n"+"  {0} = tmp;\n";var fp="  {0} = {1} * opacity;\n";var fq="  float gray   = dot( {1}.rgb, vec3( 0.299, 0.587, 0.114 ));\n"+
"  vec4  color2 = tint * vec4( vec3( gray ), {1}.a );\n"+"  {0} = mix( {1}, color2, intensity ) * opacity;\n";
var fr="  vec4 color2 = {1}.a * tint;\n"+"  {0} = mix( {1}, color2, intensity ) * opacity;\n";
var uo=aZ+ba+a0+j(eN,{'0':'src'})+j(fO,{'0':'gl_FragColor'})+a1;var up=aZ+ba+cC+
a0+j(eN,{'0':'src'})+jQ+j(fO,{'0':'gl_FragColor'})+a1;var uq=aZ+ba+a0+j(cv,{'0':
'src'})+j(fP,{'0':'gl_FragColor'})+a1;var ur=aZ+ba+cC+a0+j(cv,{'0':'src'})+fN+j(
fP,{'0':'gl_FragColor'})+a1;var us=aZ+ba+a0+j(eO,{'0':'src'})+j(fQ,{'0':'gl_FragColor'
})+a1;var ut=aZ+ba+cC+a0+j(eO,{'0':'src'})+jR+j(fQ,{'0':'gl_FragColor'})+a1;var uu=
aZ+ba+a0+j(cv,{'0':'src'})+j(gi,{'0':'gl_FragColor'})+a1;var uv=aZ+ba+cC+a0+j(cv
,{'0':'src'})+fN+j(gi,{'0':'gl_FragColor'})+a1;var uw=aZ+ba+a0+j(fo,{'0':'src'})+
j(gj,{'0':'gl_FragColor'})+a1;var ux=aZ+ba+cC+a0+j(fo,{'0':'src'})+k2+j(gj,{'0':
'gl_FragColor'})+a1;var uy=aZ+ba+dT+gg+a0+j(eN,{'0':'src'})+j(eN,{'0':'msk'})+j(
oY)+j(o0)+j(gh)+j(fO,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R'
,'4':'* msk_2L','5':'* msk_2R'})+a1;var uz=aZ+ba+dT+gg+cC+a0+j(eN,{'0':'src'})+j(
eN,{'0':'msk'})+jQ+j(oY)+j(o0)+j(gh)+j(fO,{'0':'gl_FragColor','1':'* msk_0','2':
'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R'})+a1;var uA=aZ+ba+dT+gg+
a0+j(cv,{'0':'src'})+j(cv,{'0':'msk'})+j(k3)+j(k4)+j(gh)+j(fP,{'0':'gl_FragColor'
,'1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L'
,'7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+a1;var uB=aZ+ba+dT+gg+cC+a0+j(cv
,{'0':'src'})+j(cv,{'0':'msk'})+fN+j(k3)+j(k4)+j(gh)+j(fP,{'0':'gl_FragColor','1':
'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L'
,'7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+a1;var uC=aZ+ba+dT+gg+a0+j(eO,{'0':
'src'})+j(eO,{'0':'msk'})+j(oZ)+j(o1)+j(gh)+j(fQ,{'0':'gl_FragColor','1':'* msk_0'
,'2':'* msk_1L','3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L','7':
'* msk_3R','8':'* msk_4L','9':'* msk_4R','A':'* msk_5L','B':'* msk_5R','C':'* msk_6L'
,'D':'* msk_6R'})+a1;var uD=aZ+ba+dT+gg+cC+a0+j(eO,{'0':'src'})+j(eO,{'0':'msk'}
)+jR+j(oZ)+j(o1)+j(gh)+j(fQ,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':
'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L'
,'9':'* msk_4R','A':'* msk_5L','B':'* msk_5R','C':'* msk_6L','D':'* msk_6R'})+a1;
var uE=aZ+ba+dT+gg+a0+j(cv,{'0':'src'})+j(cv,{'0':'msk'})+j(k3)+j(k4)+j(gh)+j(gi
,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L',
'5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+a1;
var uF=aZ+ba+dT+gg+cC+a0+j(cv,{'0':'src'})+j(cv,{'0':'msk'})+fN+j(k3)+j(k4)+j(gh
)+j(gi,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L'
,'5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L','9':'* msk_4R'})+a1;
var uG=aZ+ba+dT+gg+a0+j(fo,{'0':'src'})+j(fo,{'0':'msk'})+j(rk)+j(rl)+j(gh)+j(gj
,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L','3':'* msk_1R','4':'* msk_2L',
'5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':'* msk_4L','9':'* msk_4R','A':'* msk_5L'
,'B':'* msk_5R','C':'* msk_6L','D':'* msk_6R','E':'* msk_7L','F':'* msk_7R','G':
'* msk_8L','H':'* msk_8R'})+a1;var uH=aZ+ba+dT+gg+cC+a0+j(fo,{'0':'src'})+j(fo,{
'0':'msk'})+k2+j(rk)+j(rl)+j(gh)+j(gj,{'0':'gl_FragColor','1':'* msk_0','2':'* msk_1L'
,'3':'* msk_1R','4':'* msk_2L','5':'* msk_2R','6':'* msk_3L','7':'* msk_3R','8':
'* msk_4L','9':'* msk_4R','A':'* msk_5L','B':'* msk_5R','C':'* msk_6L','D':'* msk_6R'
,'E':'* msk_7L','F':'* msk_7R','G':'* msk_8L','H':'* msk_8R'})+a1;var uI=aZ+dT+a0+
j(h0)+j(h2,{'0':'vec4 color'})+j(h1,{'0':'gl_FragColor','1':'color'})+a1;var uJ=
aZ+ba+dT+a0+j(eN,{'0':'src'})+j(h0)+j(fO,{'0':'vec4 color'})+j(h1,{'0':'gl_FragColor'
,'1':'color'})+a1;var uK=aZ+ba+dT+a0+j(cv,{'0':'src'})+j(h0)+j(fP,{'0':'vec4 color'
})+j(h1,{'0':'gl_FragColor','1':'color'})+a1;var uL=aZ+ba+dT+a0+j(eO,{'0':'src'}
)+j(h0)+j(fQ,{'0':'vec4 color'})+j(h1,{'0':'gl_FragColor','1':'color'})+a1;var uP=
aZ+bQ+cO+a0+j(h2,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var
uQ=aZ+ba+bQ+cO+a0+j(eN,{'0':'src'})+j(fO,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor'
,'1':'color'})+a1;var uR=aZ+ba+bQ+cO+cC+a0+j(eN,{'0':'src'})+jQ+j(fO,{'0':'vec4 color'
})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var uS=aZ+ba+bQ+cO+a0+j(cv,{'0':'src'
})+j(fP,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var uT=aZ+
ba+bQ+cO+cC+a0+j(cv,{'0':'src'})+fN+j(fP,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor'
,'1':'color'})+a1;var uU=aZ+ba+bQ+cO+a0+j(eO,{'0':'src'})+j(fQ,{'0':'vec4 color'
})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var uV=aZ+ba+bQ+cO+cC+a0+j(eO,{'0':
'src'})+jR+j(fQ,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var
uW=aZ+ba+bQ+cO+a0+j(cv,{'0':'src'})+j(gi,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor'
,'1':'color'})+a1;var uX=aZ+ba+bQ+cO+cC+a0+j(cv,{'0':'src'})+fN+j(gi,{'0':'vec4 color'
})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var uY=aZ+ba+bQ+cO+a0+j(fo,{'0':'src'
})+j(gj,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor','1':'color'})+a1;var uZ=aZ+
ba+bQ+cO+cC+a0+j(fo,{'0':'src'})+k2+j(gj,{'0':'vec4 color'})+j(fq,{'0':'gl_FragColor'
,'1':'color'})+a1;var u0=aZ+bQ+cO+a0+j(h2,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor'
,'1':'color'})+a1;var u1=aZ+ba+bQ+cO+a0+j(eN,{'0':'src'})+j(fO,{'0':'vec4 color'
})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var u2=aZ+ba+bQ+cO+cC+a0+j(eN,{'0':
'src'})+jQ+j(fO,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var
u3=aZ+ba+bQ+cO+a0+j(cv,{'0':'src'})+j(fP,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor'
,'1':'color'})+a1;var u4=aZ+ba+bQ+cO+cC+a0+j(cv,{'0':'src'})+fN+j(fP,{'0':'vec4 color'
})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var u5=aZ+ba+bQ+cO+a0+j(eO,{'0':'src'
})+j(fQ,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var u6=aZ+
ba+bQ+cO+cC+a0+j(eO,{'0':'src'})+jR+j(fQ,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor'
,'1':'color'})+a1;var u7=aZ+ba+bQ+cO+a0+j(cv,{'0':'src'})+j(gi,{'0':'vec4 color'
})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var u8=aZ+ba+bQ+cO+cC+a0+j(cv,{'0':
'src'})+fN+j(gi,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var
u9=aZ+ba+bQ+cO+a0+j(fo,{'0':'src'})+j(gj,{'0':'vec4 color'})+j(fr,{'0':'gl_FragColor'
,'1':'color'})+a1;var u_=aZ+ba+bQ+cO+cC+a0+j(fo,{'0':'src'})+k2+j(gj,{'0':'vec4 color'
})+j(fr,{'0':'gl_FragColor','1':'color'})+a1;var u$=aZ+bQ+a0+j(h2,{'0':'vec4 color'
})+j(fp,{'0':'gl_FragColor','1':'color'})+a1;var va=aZ+ba+bQ+a0+j(eN,{'0':'src'}
)+j(fO,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor','1':'color'})+a1;var vb=aZ+ba+
bQ+cC+a0+j(eN,{'0':'src'})+jQ+j(fO,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor',
'1':'color'})+a1;var vc=aZ+ba+bQ+a0+j(cv,{'0':'src'})+j(fP,{'0':'vec4 color'})+j(
fp,{'0':'gl_FragColor','1':'color'})+a1;var vd=aZ+ba+bQ+cC+a0+j(cv,{'0':'src'})+
fN+j(fP,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor','1':'color'})+a1;var ve=aZ+
ba+bQ+a0+j(eO,{'0':'src'})+j(fQ,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor','1':
'color'})+a1;var vf=aZ+ba+bQ+cC+a0+j(eO,{'0':'src'})+jR+j(fQ,{'0':'vec4 color'})+
j(fp,{'0':'gl_FragColor','1':'color'})+a1;var vg=aZ+ba+bQ+a0+j(cv,{'0':'src'})+j(
gi,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor','1':'color'})+a1;var vh=aZ+ba+bQ+
cC+a0+j(cv,{'0':'src'})+fN+j(gi,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor','1':
'color'})+a1;var vi=aZ+ba+bQ+a0+j(fo,{'0':'src'})+j(gj,{'0':'vec4 color'})+j(fp,{
'0':'gl_FragColor','1':'color'})+a1;var vj=aZ+ba+bQ+cC+a0+j(fo,{'0':'src'})+k2+j(
gj,{'0':'vec4 color'})+j(fp,{'0':'gl_FragColor','1':'color'})+a1;var uM=aZ+dT+bQ+
cO+a0+j(h0)+j(h2,{'0':'vec4 color'})+j(fq,{'0':'color','1':'color'})+j(h1,{'0':'gl_FragColor'
,'1':'color'})+a1;var uN=aZ+dT+bQ+cO+a0+j(h0)+j(h2,{'0':'vec4 color'})+j(fr,{'0':
'color','1':'color'})+j(h1,{'0':'gl_FragColor','1':'color'})+a1;var uO=aZ+dT+bQ+
a0+j(h0)+j(h2,{'0':'vec4 color'})+j(fp,{'0':'color','1':'color'})+j(h1,{'0':'gl_FragColor'
,'1':'color'})+a1;function vr(a){var zM=aw(a,a.VERTEX_SHADER,vS);var zN=aw(a,a.VERTEX_SHADER
,vT);var qH=aw(a,a.VERTEX_SHADER,vU);var kO=aw(a,a.VERTEX_SHADER,vV);var kP=aw(a
,a.VERTEX_SHADER,vW);var bw=aw(a,a.VERTEX_SHADER,vX);var d6=aw(a,a.VERTEX_SHADER
,vY);var zO=aw(a,a.VERTEX_SHADER,vZ);var xF=aw(a,a.FRAGMENT_SHADER,t8);var xG=aw(
a,a.FRAGMENT_SHADER,t9);var xH=aw(a,a.FRAGMENT_SHADER,t_);var xI=aw(a,a.FRAGMENT_SHADER
,t$);var xJ=aw(a,a.FRAGMENT_SHADER,ua);var xK=aw(a,a.FRAGMENT_SHADER,ub);var xL=
aw(a,a.FRAGMENT_SHADER,uc);var xM=aw(a,a.FRAGMENT_SHADER,ud);var xN=aw(a,a.FRAGMENT_SHADER
,ue);var xO=aw(a,a.FRAGMENT_SHADER,uf);var xP=aw(a,a.FRAGMENT_SHADER,ug);var xQ=
aw(a,a.FRAGMENT_SHADER,uh);var xR=aw(a,a.FRAGMENT_SHADER,ui);var xS=aw(a,a.FRAGMENT_SHADER
,uj);var xT=aw(a,a.FRAGMENT_SHADER,uk);var xU=aw(a,a.FRAGMENT_SHADER,ul);var xV=
aw(a,a.FRAGMENT_SHADER,um);var xW=aw(a,a.FRAGMENT_SHADER,un);var xX=aw(a,a.FRAGMENT_SHADER
,uo);var xZ=aw(a,a.FRAGMENT_SHADER,uq);var x1=aw(a,a.FRAGMENT_SHADER,us);var x3=
aw(a,a.FRAGMENT_SHADER,uu);var x5=aw(a,a.FRAGMENT_SHADER,uw);var x7=aw(a,a.FRAGMENT_SHADER
,uy);var x9=aw(a,a.FRAGMENT_SHADER,uA);var x$=aw(a,a.FRAGMENT_SHADER,uC);var yb=
aw(a,a.FRAGMENT_SHADER,uE);var yd=aw(a,a.FRAGMENT_SHADER,uG);var yf=aw(a,a.FRAGMENT_SHADER
,uI);var yg=aw(a,a.FRAGMENT_SHADER,uJ);var yh=aw(a,a.FRAGMENT_SHADER,uK);var yi=
aw(a,a.FRAGMENT_SHADER,uL);var ym=aw(a,a.FRAGMENT_SHADER,uP);var yn=aw(a,a.FRAGMENT_SHADER
,uQ);var yp=aw(a,a.FRAGMENT_SHADER,uS);var yr=aw(a,a.FRAGMENT_SHADER,uU);var yt=
aw(a,a.FRAGMENT_SHADER,uW);var yv=aw(a,a.FRAGMENT_SHADER,uY);var yx=aw(a,a.FRAGMENT_SHADER
,u0);var yy=aw(a,a.FRAGMENT_SHADER,u1);var yA=aw(a,a.FRAGMENT_SHADER,u3);var yC=
aw(a,a.FRAGMENT_SHADER,u5);var yE=aw(a,a.FRAGMENT_SHADER,u7);var yG=aw(a,a.FRAGMENT_SHADER
,u9);var yI=aw(a,a.FRAGMENT_SHADER,u$);var yJ=aw(a,a.FRAGMENT_SHADER,va);var yL=
aw(a,a.FRAGMENT_SHADER,vc);var yN=aw(a,a.FRAGMENT_SHADER,ve);var yP=aw(a,a.FRAGMENT_SHADER
,vg);var yR=aw(a,a.FRAGMENT_SHADER,vi);var yj=aw(a,a.FRAGMENT_SHADER,uM);var yk=
aw(a,a.FRAGMENT_SHADER,uN);var yl=aw(a,a.FRAGMENT_SHADER,uO);var xY=aw(a,a.FRAGMENT_SHADER
,up);var x0=aw(a,a.FRAGMENT_SHADER,ur);var x2=aw(a,a.FRAGMENT_SHADER,ut);var x4=
aw(a,a.FRAGMENT_SHADER,uv);var x6=aw(a,a.FRAGMENT_SHADER,ux);var x8=aw(a,a.FRAGMENT_SHADER
,uz);var x_=aw(a,a.FRAGMENT_SHADER,uB);var ya=aw(a,a.FRAGMENT_SHADER,uD);var yc=
aw(a,a.FRAGMENT_SHADER,uF);var ye=aw(a,a.FRAGMENT_SHADER,uH);var yo=aw(a,a.FRAGMENT_SHADER
,uR);var yq=aw(a,a.FRAGMENT_SHADER,uT);var ys=aw(a,a.FRAGMENT_SHADER,uV);var yu=
aw(a,a.FRAGMENT_SHADER,uX);var yw=aw(a,a.FRAGMENT_SHADER,uZ);var yz=aw(a,a.FRAGMENT_SHADER
,u2);var yB=aw(a,a.FRAGMENT_SHADER,u4);var yD=aw(a,a.FRAGMENT_SHADER,u6);var yF=
aw(a,a.FRAGMENT_SHADER,u8);var yH=aw(a,a.FRAGMENT_SHADER,u_);var yK=aw(a,a.FRAGMENT_SHADER
,vb);var yM=aw(a,a.FRAGMENT_SHADER,vd);var yO=aw(a,a.FRAGMENT_SHADER,vf);var yQ=
aw(a,a.FRAGMENT_SHADER,vh);var yS=aw(a,a.FRAGMENT_SHADER,vj);a.kW=aF(a,zM,xF);a.
jg=aF(a,zN,xG);a.jh=aF(a,qH,xH);a.mr=aF(a,qH,xI);a.ji=aF(a,kO,xJ);a.ms=aF(a,kO,xK
);a.hZ=aF(a,kO,xL);a.mt=aF(a,kO,xM);a.mu=aF(a,qH,xN);a.mv=aF(a,kO,xO);a.mw=aF(a,
kO,xP);a.jj=aF(a,kP,xQ);a.jk=aF(a,kP,xR);a.mx=aF(a,kP,xS);a.my=aF(a,kP,xT);a.mz=
aF(a,zO,xU);a.mA=aF(a,kP,xV);a.mB=aF(a,kP,xW);a.es=aF(a,bw,xX);a.et=aF(a,bw,xZ);
a.eu=aF(a,bw,x1);a.ev=aF(a,bw,x3);a.ew=aF(a,bw,x5);a.jq=aF(a,d6,x7);a.js=aF(a,d6
,x9);a.ju=aF(a,d6,x$);a.jw=aF(a,d6,yb);a.jy=aF(a,d6,yd);a.jA=aF(a,d6,yf);a.jB=aF(
a,d6,yg);a.jC=aF(a,d6,yh);a.jD=aF(a,d6,yi);a.jE=aF(a,bw,ym);a.jF=aF(a,bw,yn);a.jG=
aF(a,bw,yp);a.jH=aF(a,bw,yr);a.mF=aF(a,bw,yt);a.mH=aF(a,bw,yv);a.jI=aF(a,bw,yx);
a.jJ=aF(a,bw,yy);a.jK=aF(a,bw,yA);a.jL=aF(a,bw,yC);a.mM=aF(a,bw,yE);a.mO=aF(a,bw
,yG);a.jM=aF(a,bw,yI);a.jN=aF(a,bw,yJ);a.jO=aF(a,bw,yL);a.jP=aF(a,bw,yN);a.mT=aF(
a,bw,yP);a.mV=aF(a,bw,yR);a.kX=aF(a,d6,yj);a.kY=aF(a,d6,yk);a.kZ=aF(a,d6,yl);a.jl=
aF(a,bw,xY);a.jm=aF(a,bw,x0);a.jn=aF(a,bw,x2);a.jo=aF(a,bw,x4);a.jp=aF(a,bw,x6);
a.jr=aF(a,d6,x8);a.jt=aF(a,d6,x_);a.jv=aF(a,d6,ya);a.jx=aF(a,d6,yc);a.jz=aF(a,d6
,ye);a.mC=aF(a,bw,yo);a.mD=aF(a,bw,yq);a.mE=aF(a,bw,ys);a.mG=aF(a,bw,yu);a.mI=aF(
a,bw,yw);a.mJ=aF(a,bw,yz);a.mK=aF(a,bw,yB);a.mL=aF(a,bw,yD);a.mN=aF(a,bw,yF);a.mP=
aF(a,bw,yH);a.mQ=aF(a,bw,yK);a.mR=aF(a,bw,yM);a.mS=aF(a,bw,yO);a.mU=aF(a,bw,yQ);
a.mW=aF(a,bw,yS);if(a.kW&&a.jg&&a.jh&&a.mr&&a.ji&&a.ms&&a.hZ&&a.mt&&a.mu&&a.mv&&
a.mw&&a.jj&&a.jk&&a.mx&&a.my&&a.mz&&a.mA&&a.mB&&a.es&&a.et&&a.eu&&a.ev&&a.ew&&a.
jq&&a.js&&a.ju&&a.jw&&a.jy&&a.jA&&a.jB&&a.jC&&a.jD&&a.jE&&a.jF&&a.jG&&a.jH&&a.mF&&
a.mH&&a.jI&&a.jJ&&a.jK&&a.jL&&a.mM&&a.mO&&a.jM&&a.jN&&a.jO&&a.jP&&a.mT&&a.mV&&a.
kX&&a.kY&&a.kZ&&a.jl&&a.jm&&a.jn&&a.jo&&a.jp&&a.jr&&a.jt&&a.jv&&a.jx&&a.jz&&a.mC&&
a.mD&&a.mE&&a.mG&&a.mI&&a.mJ&&a.mK&&a.mL&&a.mN&&a.mP&&a.mQ&&a.mR&&a.mS&&a.mU&&a.
mW)return true;a.kW=null;a.jg=null;a.jh=null;a.mr=null;a.ji=null;a.ms=null;a.hZ=
null;a.mt=null;a.mu=null;a.mv=null;a.mw=null;a.jj=null;a.jk=null;a.mx=null;a.my=
null;a.mz=null;a.mA=null;a.mB=null;a.es=null;a.et=null;a.eu=null;a.ev=null;a.ew=
null;a.jq=null;a.js=null;a.ju=null;a.jw=null;a.jy=null;a.jA=null;a.jB=null;a.jC=
null;a.jD=null;a.jE=null;a.jF=null;a.jG=null;a.jH=null;a.mF=null;a.mH=null;a.jI=
null;a.jJ=null;a.jK=null;a.jL=null;a.mM=null;a.mO=null;a.jM=null;a.jN=null;a.jO=
null;a.jP=null;a.mT=null;a.mV=null;a.kX=null;a.kY=null;a.kZ=null;a.jl=null;a.jm=
null;a.jn=null;a.jo=null;a.jp=null;a.jr=null;a.jt=null;a.jv=null;a.jx=null;a.jz=
null;a.mC=null;a.mD=null;a.mE=null;a.mG=null;a.mI=null;a.mJ=null;a.mK=null;a.mL=
null;a.mN=null;a.mP=null;a.mQ=null;a.mR=null;a.mS=null;a.mU=null;a.mW=null;return false;
}function aw(a,w1,w2){var l4=a.createShader(w1);a.shaderSource(l4,w2);a.compileShader(
l4);var bJ=a.getShaderParameter(l4,a.COMPILE_STATUS);var log=a.getShaderInfoLog(
l4);if(bJ&&(log.length>1))console.log("EmWi info: "+log);if(!bJ)console.log("EmWi error: "+
log);if(!bJ)return null;return l4;}function aF(a,r6,rT){var bk=a.createProgram();
if(!r6||!rT)return null;a.attachShader(bk,r6);a.attachShader(bk,rT);a.bindAttribLocation(
bk,a.oF,"dst_pos");a.bindAttribLocation(bk,a.oI,"src_pos");a.bindAttribLocation(
bk,a.oH,"src_clr");a.bindAttribLocation(bk,a.oE,"clr_pos");a.bindAttribLocation(
bk,a.oG,"msk_pos");a.linkProgram(bk);var bJ=a.getProgramParameter(bk,a.LINK_STATUS
);var log=a.getProgramInfoLog(bk);if(bJ&&(log.length>1))console.log("EmWi info: "+
log);if(!bJ)console.log("EmWi error: "+log);if(!bJ)return null;var zz=a.getUniformLocation(
bk,"dst_map");var tJ=a.getUniformLocation(bk,"src");var zF=a.getUniformLocation(
bk,"src_ofs");var zH=a.getUniformLocation(bk,"src_size");var zG=a.getUniformLocation(
bk,"src_pxl");var zI=a.getUniformLocation(bk,"src_step");var zu=a.getUniformLocation(
bk,"clamp_tl");var zt=a.getUniformLocation(bk,"clamp_br");var zx=a.getUniformLocation(
bk,"clr_tl");var zy=a.getUniformLocation(bk,"clr_tr");var zw=a.getUniformLocation(
bk,"clr_br");var zv=a.getUniformLocation(bk,"clr_bl");var zJ=a.getUniformLocation(
bk,"tint");var zA=a.getUniformLocation(bk,"intensity");var zE=a.getUniformLocation(
bk,"opacity");var tI=a.getUniformLocation(bk,"msk");var zC=a.getUniformLocation(
bk,"msk_pxl");var zD=a.getUniformLocation(bk,"msk_step");var zB=a.getUniformLocation(
bk,"msk_invert");a.useProgram(bk);if(tJ)a.uniform1i(tJ,0);if(tI)a.uniform1i(tI,1
);bk.vK=zz;bk.vO=zF;bk.vQ=zH;bk.vP=zG;bk.vR=zI;bk.m1=zu;bk.rm=zt;bk.k7=zx;bk.k8=
zy;bk.k6=zw;bk.k5=zv;bk.rp=zJ;bk.rn=zA;bk.ro=zE;bk.vM=zC;bk.vN=zD;bk.vL=zB;return bk;
}function ex(a,n,cb){if(n!==a.q5){if(n&&n.cV&&!n.Framebuffer){n.Framebuffer=a.createFramebuffer(
);a.bindFramebuffer(a.FRAMEBUFFER,n.Framebuffer);a.framebufferTexture2D(a.FRAMEBUFFER
,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,n.cV,0);}else if(n)a.bindFramebuffer(a.FRAMEBUFFER
,n?n.Framebuffer:null);if(n)a.viewport(0,0,n.k1,n.k0);a.q5=n;}if(a.da!==cb){a.useProgram(
cb);a.da=cb;}if(n&&cb&&((n.ge!==cb.ge)||(n.gd!==cb.gd)||(!!n.cV!==!!cb.cV))){var
iP=a.t3;if(n.cV){iP[0]=n.ge;iP[5]=n.gd;iP[7]=-1;}else{iP[0]=n.ge;iP[5]=-n.gd;iP[
7]=1;}a.uniformMatrix4fv(cb.vK,false,iP);cb.ge=n.ge;cb.gd=n.gd;cb.cV=!!n.cV;}if(
n&&n.mi){a.clear(a.COLOR_BUFFER_BIT);n.mi=false;}}function fM(a,ay,eQ){if(ay!==a.
eM){if(ay)a.bindTexture(a.TEXTURE_2D,ay.cV);a.eM=ay;}if(ay&&(!ay.cM!==!eQ)){if(eQ
){a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.
TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.LINEAR);}else{a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER
,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);}ay.cM=
eQ;}}function mY(a,cf,eQ){a.activeTexture(a.TEXTURE1);if(cf!==a.kU){if(cf)a.bindTexture(
a.TEXTURE_2D,cf.cV);a.kU=cf;}if(cf&&(!cf.cM!==!eQ)){if(eQ){a.texParameteri(a.TEXTURE_2D
,a.TEXTURE_MIN_FILTER,a.LINEAR);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER
,a.LINEAR);}else{a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.
texParameteri(a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);}cf.cM=eQ;}a.activeTexture(
a.TEXTURE0);}function bp(bd,bg,aW){if(aW<=0)return bd;if(aW>=1)return bg;var iu=(
bd&0xFF);var iv=((bd>>8)&0xFF);var iw=((bd>>16)&0xFF);var ix=((bd>>24)&0xFF);var
pM=(bg&0xFF);var pN=((bg>>8)&0xFF);var pO=((bg>>16)&0xFF);var pP=((bg>>24)&0xFF);
iu+=(pM-iu)*aW;iv+=(pN-iv)*aW;iw+=(pO-iw)*aW;ix+=(pP-ix)*aW;return iu|(iv<<8)|(iw<<
16)|(ix<<24);}function mm(aQ,ip,de,pF,fa){for(var d=0;d<(de-(pF?1:0));d++){var bq=
d;var cm=(d+1)%de;var oa=aQ[bq*11];var p0=aQ[cm*11];if(((fa>oa)&&(fa<p0))||((fa<
oa)&&(fa>p0))){var cd=(fa-oa)/(p0-oa);var dB=1.0-cd;var f3=(de-d-1)*11;if(f3>0){
var bf=(d+1)*11;aQ.set(aQ.subarray(bf,bf+f3),bf+11);}de++;if(cm)cm++;d++;var q=aQ[
bq=bq*11+1];var c0=aQ[bq+=1];var ck=aQ[bq+=1];var hc=aQ[bq+=1];var cr=ip[bq+=1];
var gV=aQ[bq+=1];var gW=aQ[bq+=1];var gX=aQ[bq+=1];var g6=aQ[bq+=1];var g7=aQ[bq+
1];var w=aQ[cm=cm*11+1];var dE=aQ[cm+=1];var b8=aQ[cm+=1];var md=aQ[cm+=1];var ec=
ip[cm+=1];var lM=aQ[cm+=1];var lN=aQ[cm+=1];var lP=aQ[cm+=1];var lU=aQ[cm+=1];var
lV=aQ[cm+1];if(q!==w)q=q*dB+w*cd;if(c0!==dE)c0=c0*dB+dE*cd;if(ck!==b8)ck=ck*dB+b8
*cd;if(hc!==md)hc=hc*dB+md*cd;if(cr!==ec)cr=bp(cr,ec,cd);if(gV!==lM)gV=gV*dB+lM*
cd;if(gW!==lN)gW=gW*dB+lN*cd;if(gX!==lP)gX=gX*dB+lP*cd;if(g6!==lU)g6=g6*dB+lU*cd;
if(g7!==lV)g7=g7*dB+lV*cd;aQ[bq=d*11]=fa;aQ[bq+=1]=q;aQ[bq+=1]=c0;aQ[bq+=1]=ck;aQ[
bq+=1]=hc;ip[bq+=1]=cr;aQ[bq+=1]=gV;aQ[bq+=1]=gW;aQ[bq+=1]=gX;aQ[bq+=1]=g6;aQ[bq+
1]=g7;}}return de;}function ml(aQ,ip,de,pF,fa){for(var d=0;d<(de-(pF?1:0));d++){
var bq=d;var cm=(d+1)%de;var ob=aQ[bq*11+1];var p1=aQ[cm*11+1];if(((fa>ob)&&(fa<
p1))||((fa<ob)&&(fa>p1))){var cd=(fa-ob)/(p1-ob);var dB=1.0-cd;var f3=(de-d-1)*11;
if(f3>0){var bf=(d+1)*11;aQ.set(aQ.subarray(bf,bf+f3),bf+11);}de++;if(cm)cm++;d++;
var s=aQ[bq*=11];var c0=aQ[bq+=2];var ck=aQ[bq+=1];var hc=aQ[bq+=1];var cr=ip[bq+=
1];var gV=aQ[bq+=1];var gW=aQ[bq+=1];var gX=aQ[bq+=1];var g6=aQ[bq+=1];var g7=aQ[
bq+1];var x=aQ[cm*=11];var dE=aQ[cm+=2];var b8=aQ[cm+=1];var md=aQ[cm+=1];var ec=
ip[cm+=1];var lM=aQ[cm+=1];var lN=aQ[cm+=1];var lP=aQ[cm+=1];var lU=aQ[cm+=1];var
lV=aQ[cm+1];if(s!==x)s=s*dB+x*cd;if(c0!==dE)c0=c0*dB+dE*cd;if(ck!==b8)ck=ck*dB+b8
*cd;if(hc!==md)hc=hc*dB+md*cd;if(cr!==ec)cr=bp(cr,ec,cd);if(gV!==lM)gV=gV*dB+lM*
cd;if(gW!==lN)gW=gW*dB+lN*cd;if(gX!==lP)gX=gX*dB+lP*cd;if(g6!==lU)g6=g6*dB+lU*cd;
if(g7!==lV)g7=g7*dB+lV*cd;aQ[bq=d*11]=s;aQ[bq+=1]=fa;aQ[bq+=1]=c0;aQ[bq+=1]=ck;aQ[
bq+=1]=hc;ip[bq+=1]=cr;aQ[bq+=1]=gV;aQ[bq+=1]=gW;aQ[bq+=1]=gX;aQ[bq+=1]=g6;aQ[bq+
1]=g7;}}return de;}function qY(o,de,wQ,w0){for(var d=0;d<de;d++){var p=o[d*11];if((
p<wQ)||(p>w0)){var f3=(de-d-1)*11;if(f3>0){var bf=(d+1)*11;o.set(o.subarray(bf,bf+
f3),bf-11);}d--;de--;}}return de;}function qX(o,de,w6,wF){for(var d=0;d<de;d++){
var aa=o[d*11+1];if((aa<w6)||(aa>wF)){var f3=(de-d-1)*11;if(f3>0){var bf=(d+1)*11;
o.set(o.subarray(bf,bf+f3),bf-11);}d--;de--;}}return de;}function c$(ar){return[((
ar>>0)&0xFF)/255,((ar>>8)&0xFF)/255,((ar>>16)&0xFF)/255,((ar>>24)&0xFF)/255];}function
cU(ar){var pL=(ar>>0)&0xFF;var cr=(ar>>8)&0xFF;var ec=(ar>>16)&0xFF;var nI=(ar>>
24)&0xFF;pL=(pL*(nI+1))>>8;cr=(cr*(nI+1))>>8;ec=(ec*(nI+1))>>8;return pL|(cr<<8)|(
ec<<16)|(nI<<24);}var oJ=[0x00000000,0x00000001,0x00000003,0x00000007,0x0000000F
,0x0000001F,0x0000003F,0x0000007F,0x000000FF,0x000001FF,0x000003FF,0x000007FF,0x00000FFF
,0x00001FFF,0x00003FFF,0x00007FFF,0x0000FFFF,0x0001FFFF,0x0003FFFF,0x0007FFFF,0x000FFFFF
,0x001FFFFF,0x003FFFFF,0x007FFFFF,0x00FFFFFF,0x01FFFFFF,0x03FFFFFF,0x07FFFFFF,0x0FFFFFFF
,0x1FFFFFFF,0x3FFFFFFF,0x7FFFFFFF,0xFFFFFFFF];function t6(ap,ik,hq){var yY=ap.h4-
hq;var iO=ap.h4>>5;for(var au=0;au<=yY;au++)for(var as=0;as<iO;as++){var ao=32-ik;
var g5=oJ[ik];var tL=ap.jW[au*iO+as];var f4;do{while(ao&&(tL&g5)){g5<<=1;ao--;}f4=
!(tL&g5);for(var qr=au+1;f4&&(qr<(au+hq));qr++)f4=!(ap.jW[qr*iO+as]&g5);if(!f4){
g5<<=1;ao--;}}while(!f4&&(ao>0));if(f4)return[(as*32)+32-ik-ao,au];}return null;
}function vH(ap,gP,lD,ik,hq){var g5=oJ[ik]<<(gP&0x1F);var as=gP>>5;var iO=ap.h4>>
5;for(;hq>0;lD++,hq--)ap.jW[lD*iO+as]|=g5;}function vG(ap,gP,lD,ik,hq){var g5=~(
oJ[ik]<<(gP&0x1F));var as=gP>>5;var iO=ap.h4>>5;for(;hq>0;lD++,hq--)ap.jW[lD*iO+
as]&=g5;}function qS(ap,dc){dc.je=ap.hh;dc.gG=null;if(ap.hh)ap.hh.gG=dc;else ap.
m_=dc;ap.hh=dc;dc.Cache[dc.mk]=dc;}function o2(ap,dc){if(dc.je)dc.je.gG=dc.gG;else
ap.m_=dc.gG;if(dc.gG)dc.gG.je=dc.je;else ap.hh=dc.je;dc.je=null;dc.gG=null;dc.Cache[
dc.mk]=null;}function q8(eB,gR,ae){var oc=0;var min=0;var max=ae-1;var ed=-1;var
be;while(max>=min){oc=(max+min)>>1;be=oc*8;ed=eB-gR.charCodeAt(be);if(!ed)return be;
if(ed>0)min=oc+1;else if(ed<0)max=oc-1;}return-1;}var jc=[[0x10,0x01],[0x02,0x05
],[0x03,0x04],[0x11,0x12],[0x14,0x18],[0x06,0x09],[0x07,0x08],[0x13,0x16],[0x17,
0x1C],[0x0A,0x0B],[0x1E,0x1F],[0x0C,0x0D],[0x15,0x19],[0x1A,0x0E],[0x1B,0x1D]];function
tZ(ay,a2,ak,ae){var i;var t=0;var f_=0;var fd=0;var kp=a2.length;f_=ak>>4;ak&=0xF;
i=ay.charCodeAt(f_++)>>ak;while(ae--){if(i&1)t=jc[t][1];else t=jc[t][0];if(t>15){
t-=16;a2[fd++]=(t&0x01)?0xFF:0x00;if(fd!==kp)a2[fd++]=(t&0x02)?0xFF:0x00;if(fd!==
kp)a2[fd++]=(t&0x04)?0xFF:0x00;if(fd!==kp)a2[fd++]=(t&0x08)?0xFF:0x00;t=0;}if((ak=(
ak+1))&0x0F)i>>=1;else i=ay.charCodeAt(f_++);}}function t0(ay,a2,ak,ae){var tH=[
0x00,0x55,0xAA,0xFF];var i;var t=0;var f_=0;var fd=0;var kp=a2.length;f_=ak>>4;ak&=
0xF;i=ay.charCodeAt(f_++)>>ak;while(ae--){if(i&1)t=jc[t][1];else t=jc[t][0];if(t>
15){t-=16;a2[fd++]=tH[t&0x03];if(fd!==kp)a2[fd++]=tH[t>>2];t=0;}if((ak=(ak+1))&0x0F
)i>>=1;else i=ay.charCodeAt(f_++);}}function t1(ay,a2,ak,ae){var i;var t=0;var f_=
0;var fd=0;var kp=a2.length;f_=ak>>4;ak&=0xF;i=ay.charCodeAt(f_++)>>ak;while(ae--
){if(i&1)t=jc[t][1];else t=jc[t][0];if(t>15){t-=16;a2[fd++]=t|(t<<4);t=0;}if((ak=(
ak+1))&0x0F)i>>=1;else i=ay.charCodeAt(f_++);}}function v0(bR,ae,aI){var ff=0;var
fD=aI;ae-=aI;while(ae--)bR[fD++]^=bR[ff++];}e._CreateBitmap=function(nm,rU,wK,wV
){var bitmap={ey:[],cB:[],ca:null};var ol=Math.max(wV,1);var width=rU[0];var height=
rU[1];var b=this.ah;if((nm!==e._PIXEL_FORMAT_NATIVE)&&(nm!==e._PIXEL_FORMAT_ALPHA8
)){console.log("EmWi error: Wrong pixel format of bitmap to create.");return null;
}if((width<=0)||(width>(this.h5-2))||(height<=0)||(height>(this.h5-2))){console.
log("EmWi error: Invalid size of bitmap to create.");return null;}var hO=((this.
h5-1)/(width+1))|0;var p7=((this.h5-1)/(height+1))|0;var kv=hO*p7;var s1=(ol%kv)||
kv;var s2=Math.min(s1,hO);var s3=((s1+hO-1)/hO)|0;var y5=hO*width+hO+1;var y4=p7
*height+p7+1;var y0=s2*width+s2+1;var yZ=s3*height+s3+1;var th=((ol+kv-1)/kv)|0;
for(var d=0;d<th;d++){b.getError();var i6=y5;var i5=y4;var dF=b.createTexture();
var aJ={};if(d===(th-1)){i6=y0;i5=yZ;}b.eM=null;b.kU=null;b.bindTexture(b.TEXTURE_2D
,dF);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S
,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
if(nm===this._PIXEL_FORMAT_NATIVE)b.texImage2D(b.TEXTURE_2D,0,b.RGBA,i6,i5,0,b.RGBA
,b.UNSIGNED_BYTE,null);else b.texImage2D(b.TEXTURE_2D,0,b.ALPHA,i6,i5,0,b.ALPHA,
b.UNSIGNED_BYTE,null);aJ.Format=nm;aJ.Width=i6;aJ.Height=i5;aJ.k1=i6;aJ.k0=i5;aJ.
dI=1/i6;aJ.dH=1/i5;aJ.ge=2/i6;aJ.gd=2/i5;aJ.cV=dF;aJ.Framebuffer=null;bitmap.ey[
d]=aJ;if(this.c5)fn(b);}for(var d=0;d<ol;d++){var hL=d%kv;var tj=hL%hO;var tk=(hL
/hO)|0;var cG={};cG.aT=bitmap.ey[(d/kv)|0];cG.aK=[(tj*width)+tj+1,(tk*height)+tk+
1];bitmap.cB[d]=cG;}bitmap.FrameSize=[width,height];bitmap.FrameDelay=wK;bitmap.
NoOfFrames=ol;return bitmap;};function vx(ap,cE){try{var sx=cE.gI;var fe=cE.Image;
var width=fe.width;var height=fe.height;var iK=cE.FrameSize[0];var kr=cE.FrameSize[
1];var te=(width/iK)|0;var b=ap.ah;delete cE.gI;delete cE.Image;if(!sx.bitmap)return;
if((fe.width===iK)&&(fe.height===kr)){var cG=cE.cB[0];var dF=cG.aT.cV;var bj=cG.
aK[0];var aY=cG.aK[1];b.bindTexture(b.TEXTURE_2D,dF);b.eM=null;if(cG.aT.Format===
ap._PIXEL_FORMAT_NATIVE)b.texSubImage2D(b.TEXTURE_2D,0,bj,aY,b.RGBA,b.UNSIGNED_BYTE
,fe);else b.texSubImage2D(b.TEXTURE_2D,0,bj,aY,b.ALPHA,b.UNSIGNED_BYTE,fe);}else{
var a4=document.createElement('canvas');var pS;a4.width=iK;a4.height=kr;pS=a4.getContext(
"2d");for(var d=0;d<cE.vF;d++){var cG=cE.cB[d];var dF=cG.aT.cV;var bj=cG.aK[0];var
aY=cG.aK[1];var op=(d/te)|0;var pQ=d-(op*te);var zd=pQ*iK;var ze=op*kr;pS.clearRect(
0,0,iK,kr);pS.drawImage(fe,zd,ze,iK,kr,0,0,iK,kr);b.bindTexture(b.TEXTURE_2D,dF);
b.eM=null;if(cG.aT.Format===ap._PIXEL_FORMAT_NATIVE)b.texSubImage2D(b.TEXTURE_2D
,0,bj,aY,b.RGBA,b.UNSIGNED_BYTE,a4);else b.texSubImage2D(b.TEXTURE_2D,0,bj,aY,b.
ALPHA,b.UNSIGNED_BYTE,a4);}}ap.we(sx,0);ap._RequestUpdate();}catch(bv){console.log(
"EmWi error: "+bv+"!");}}e.aa3=function(dZ,wI){var zb=this;var bitmap=this._CreateBitmap(
dZ.Format,dZ.FrameSize,dZ.FrameDelay,dZ.NoOfFrames);if(!bitmap)return;bitmap.vF=
bitmap.NoOfFrames;bitmap.gI=wI;bitmap.Image=new Image();bitmap.Image.addEventListener(
'load',function(){vx(zb,bitmap);});bitmap.Image.src=dZ.FileName;if(dZ.FrameMapping
){bitmap.ca=dZ.FrameMapping;bitmap.NoOfFrames=bitmap.ca.length;}return bitmap;};
e._FreeBitmap=function(cE){var b=this.ah;if(!cE)return;for(var d=0;cE.ey&&(d<cE.
ey.length);d++){var aJ=cE.ey[d];if(b.eM===aJ)fM(b,null,false);if(b.kU===aJ)mY(b,
null,false);if(aJ.cV)b.deleteTexture(aJ.cV);if(aJ.Framebuffer)b.deleteFramebuffer(
aJ.Framebuffer);}cE.ey=null;cE.cB=null;cE.NoOfFrames=0;};e._LockBitmap=function(
cE,px){if(!cE||(px<0)||(px>=cE.NoOfFrames))return null;var cG=cE.cB[px];var dF=cG.
aT.cV;var bj=cG.aK[0];var aY=cG.aK[1];var b=this.ah;b.bindTexture(b.TEXTURE_2D,null
);b.eM=null;return{"Context":b,"Texture":dF,"Area":[bj,aY,bj+cE.FrameSize[0],aY+
cE.FrameSize[1]]};};e._UnlockBitmap=function(aca){var b=this.ah;b.bindTexture(b.
TEXTURE_2D,null);b.eM=null;};e.aa4=function(lt){if(this.cP&&this.cP.LoadExternBitmap
){try{return this.cP.LoadExternBitmap(lt);}catch(bv){console.log("Error in extern bitmap loader: "+
bv+"!");return null;}}return null;};e.abT=function(lt){if(this.cP&&this.cP.StartExternBitmap
){try{return this.cP.StartExternBitmap(lt);}catch(bv){console.log("Error in extern bitmap loader: "+
bv+"!");return null;}}if(this.cP)throw"Extern bitmap loader is missing the function StartExternBitmap()";
var i1={oS:false,q6:false};i1.Image=new Image();i1.Image.addEventListener('load'
,function(){i1.oS=true;});i1.Image.addEventListener('error',function(){i1.q6=true;
});i1.Image.src=lt;return i1;};e.abx=function(eC){if(this.cP&&this.cP.ProgressExternBitmap
){try{return this.cP.ProgressExternBitmap(eC);}catch(bv){console.log("Error in extern bitmap loader: "+
bv+"!");return false;}}if(this.cP)throw"Extern bitmap loader is missing the function ProgressExternBitmap()";
return!eC.oS&&!eC.q6;};e.aah=function(eC){if(this.cP&&this.cP.FinishExternBitmap
){try{return this.cP.FinishExternBitmap(eC);}catch(bv){console.log("Error in extern bitmap loader: "+
bv+"!");return null;}}if(this.cP)throw"Extern bitmap loader is missing the function FinishExternBitmap()";
var fe=eC.Image;if(!eC.oS||(fe.width<=0)||(fe.height<=0))return null;var bitmap=
this._CreateBitmap(this._PIXEL_FORMAT_NATIVE,[fe.width,fe.height],0,1);var cG=bitmap.
cB[0];var dF=cG.aT.cV;var bj=cG.aK[0];var aY=cG.aK[1];var b=this.ah;try{b.bindTexture(
b.TEXTURE_2D,dF);b.eM=null;b.texSubImage2D(b.TEXTURE_2D,0,bj,aY,b.RGBA,b.UNSIGNED_BYTE
,fe);b.bindTexture(b.TEXTURE_2D,null);return bitmap;}catch(bv){this._FreeBitmap(
bitmap);console.log("EmWi error: "+bv+"!");return null;}};e.z5=function(eC){if(this.
cP&&this.cP.CancelExternBitmap){try{this.cP.CancelExternBitmap(eC);}catch(bv){console.
log("Error in extern bitmap loader: "+bv+"!");}return;}if(this.cP)throw"Extern bitmap loader is missing the function CancelExternBitmap()";
eC.Image.src="";};e.aau=function(eC){if(this.cP&&this.cP.GetExternBitmapInfo){try{
return this.cP.GetExternBitmapInfo(eC);}catch(bv){console.log("Error in extern bitmap loader: "+
bv+"!");}}return"";};e.aaw=function(lt,dy,ab8,ab_,ab7,j9,ab$,acc,acb){return null;
};e.aa5=function(dZ){var i=dZ.Data();var at={Cache:dZ.Cache,Ascent:i[0],Descent:
i[1],Leading:i[2],oV:i[5],rd:i[4],oR:i[6],oX:i[7],rb:i[8],vp:i[9]};if(i[3]===2)at.
oK=tZ;if(i[3]===4)at.oK=t0;if(i[3]===16)at.oK=t1;return at;};e.aal=function(az){
};e.rD=function(az,ij){if(!az){console.log("EmWi error: Invalid font resource.");
return null;}var ad=this.e7(az,ij);if(!ad)return null;if(ad.rc)return ad;var fy=
this.v9;var oq=((ad.Height+fy-1)/fy)|0;var nX=((ad.Width+fy-1)/fy)|0;var be=null;
var hU=this.m_;var pU=null;do{if(!(be=pU=t6(this,nX,oq))){while(hU&&hU.m2)hU=hU.
gG;if(hU){var ad=hU;var op=(ad.mh/fy)|0;var pQ=(ad.mg/fy)|0;var oq=((ad.Height+fy-
1)/fy)|0;var nX=((ad.Width+fy-1)/fy)|0;if(this.c5)console.log("EmWi info: DiscardGlyph( "+
ad.mk+", "+ad.Width+", "+ad.Height+" )");pU=ad;hU=hU.gG;o2(this,ad);vG(this,pQ,op
,nX,oq);}}}while(!be&&pU);if(!be)return null;var of=1/this.m$;ad.mg=be[0]*fy;ad.
mh=be[1]*fy;ad.qT=ad.mg*of;ad.qV=ad.mh*of;ad.qU=(ad.mg+ad.Width)*of;ad.qW=(ad.mh+
ad.Height)*of;ad.rc=true;ad.m2=0;if((ad.Width>0)&&(ad.Height>0)){var cz=ad.Width
*ad.Height;var qp=new Uint8Array(cz);var b=this.ah;az.oK(az.oX,qp,ad.oX,ad.vu);v0(
qp,cz,ad.Width);b.bindTexture(b.TEXTURE_2D,this.la);b.texSubImage2D(b.TEXTURE_2D
,0,ad.mg,ad.mh,ad.Width,ad.Height,b.ALPHA,b.UNSIGNED_BYTE,qp);b.eM=null;}vH(this
,be[0],be[1],nX,oq);if(this.c5)console.log("EmWi info: CreateGlyph( "+ad.mk+", "+
ad.Width+", "+ad.Height+" )");return ad;};e.jX=function(az,eB){if(!az){console.log(
"EmWi error: Invalid font resource.");return false;}return q8(eB,az.oR,az.rd)>=0;
};e.gL=function(az,eB){if(!az){console.log("EmWi error: Invalid font resource.");
return false;}var be=q8(eB,az.oR,az.rd);if((be<0)&&(eB===0x00AD))return this.gL(
az,0x002D);if((be<0)&&(eB===0x00A0))return this.gL(az,0x0020);if(be<0)return 0;return be>>
3;};e.hi=function(){return null;};e.lg=function(eC){};e.rK=function(eC){};e.ne=function(
eC){};e.gl=function(az,nh,ni,rZ,wJ,eR,ab9){if(rZ<=0)return 0;if(wJ)rZ=1;eR[1]=this.
gL(az,nh.charCodeAt(ni));if(!eR[1]&&(nh.charCodeAt(ni)===0x00A0))eR[1]=this.gL(az
,0x20);else if(!eR[1]&&(nh.charCodeAt(ni)===0x00AD))eR[1]=this.gL(az,0x2D);else if(
!eR[1]&&(nh.charCodeAt(ni)===0x2026)){eR[1]=eR[2]=eR[3]=this.gL(az,0x2E);if(eR[1
]){eR[0]=3;return 1;}}if(eR[1]){eR[0]=1;return 1;}eR[0]=0;return 0;};e.e7=function(
az,ij){if(!az){console.log("EmWi error: Invalid font resource.");return null;}if((
ij<0)||(ij>=az.oV))return null;var ad=az.Cache[ij];if(ad){o2(this,ad);qS(this,ad
);return ad;}var cS=az.oR;var be=ij*8;var zR=cS.charCodeAt(be+6);var zS=cS.charCodeAt(
be+7);var zP=cS.charCodeAt(be+14);var zQ=cS.charCodeAt(be+15);var bf=zS|(zR<<16);
var dQ=zQ|(zP<<16);ad={Cache:az.Cache,mk:ij,OriginX:cS.charCodeAt(be+1)-32768,OriginY:
cS.charCodeAt(be+2)-32768,Width:cS.charCodeAt(be+3),Height:cS.charCodeAt(be+4),Advance:
cS.charCodeAt(be+5)-32768,oX:bf,vu:dQ-bf,rc:false};qS(this,ad);return ad;};e.dw=
function(az,py,pz){if(!az){console.log("EmWi error: Invalid font resource.");return 0;
}if(!az.rb||(py<0)||(pz<0)||(py>=az.oV)||(pz>=az.oV))return 0;var g=az.rb;var zK=
az.vp;var yX=py|(pz<<16);var t=0;var min=0;var max=(g.length>>1)-1;var ed=-1;while(
max>=min){t=(max+min)>>1;ed=yX-(g.charCodeAt(t*2)|(g.charCodeAt(t*2+1)<<16));if(
!ed)return zK.charCodeAt(t)-128;if(ed<0)max=t-1;else min=t+1;}return 0;};e.m9=function(
az,m,ak,ae){var p=0;var bm=0;var a_=m.length;var aq;if(!az){console.log("EmWi error: Invalid font resource."
);return 0;}if(ae===-1)ae=a_;if(a_<ae)ae=a_;if(ak<0){ae+=ak;ak=0;}if((ak+ae)>a_)
ae=a_-ak;aq=this.hi();while(ae>0){var aD=[];var ab=m.charCodeAt(ak);var a$;var d;
if((ab===0x061C)||(ab===0xFEFF)||((ab>=0x200B)&&(ab<=0x200F))||((ab>=0x202A)&&(ab<=
0x202E))||((ab>=0x2066)&&(ab<=0x2069))){ae--;ak++;continue;}if(ab===0x000A){ae--;
ak++;bm=0;continue;}a$=this.gl(az,m,ak,Math.min(ae,8),false,aD,aq);if(!a$){aD[0]=
1;aD[1]=0;a$=1;}for(d=0;d<aD[0];d++){var ad=this.e7(az,aD[d+1]);if(!ad){bm=0;continue;
}p+=this.dw(az,bm,aD[d+1])+ad.Advance;bm=aD[d+1];}ae-=a$;ak+=a$;}return p;};e.aaQ=
function(az,m,ak,ae){var gr=[0,0,0,0];var p=0;var bm=0;var a_=m.length;var aq;if(
!az){console.log("EmWi error: Invalid font resource.");return this.wg;}if(ae===-
1)ae=a_;if(a_<ae)ae=a_;if(ak<0){ae+=ak;ak=0;}if((ak+ae)>a_)ae=a_-ak;aq=this.hi();
while(ae>0){var aD=[];var ab=m.charCodeAt(ak);var a$;var d;if((ab===0x061C)||(ab===
0xFEFF)||((ab>=0x200B)&&(ab<=0x200F))||((ab>=0x202A)&&(ab<=0x202E))||((ab>=0x2066
)&&(ab<=0x2069))){ae--;ak++;continue;}if(ab===0x000A){ae--;ak++;bm=0;continue;}a$=
this.gl(az,m,ak,Math.min(ae,8),false,aD,aq);if(!a$){aD[0]=1;aD[1]=0;a$=1;}for(d=
0;d<aD[0];d++){var ad=this.e7(az,aD[d+1]);if(!ad){bm=0;continue;}if(!p)gr[0]=ad.
OriginX;gr[1]=Math.min(gr[1],ad.OriginY);gr[3]=Math.max(gr[3],ad.OriginY+ad.Height
);p+=this.dw(az,bm,aD[d+1]);gr[2]=Math.max(gr[2],p+ad.OriginX+ad.Width);p+=ad.Advance;
if(!(ad.OriginX+ad.Width)&&ad.Advance)gr[2]=Math.max(p,gr[2]);bm=aD[d+1];}ae-=a$;
ak+=a$;}return gr;};e.aaP=function(az,m,ak,ae,bx,eT){var ga=0;var f$=0x8000;var sD=
0;var a_=m.length;var bm=0;var aq;if(!az){console.log("EmWi error: Invalid font resource."
);return 0;}if(ae===-1)ae=a_;if(a_<ae)ae=a_;if(ak<0){ae+=ak;ak=0;}if((ak+ae)>a_)
ae=a_-ak;if(!ae)return 0;if(bx<0)return-1;if(eT>0)eT-=this.m9(az,m,ak,ae);if(eT>
0){var co=ak;var ao=ae;var f5=0;for(;ao;co++,ao--){var ab=m.charCodeAt(co);if((ab===
32)||(ab===0xA0))f5++;}if(f5)ga=((eT<<16)/f5)|0;}aq=this.hi();while(ae>0){var aD=[
];var ab=m.charCodeAt(ak);var kc=0;var a$;var d;if((ab===0x061C)||(ab===0xFEFF)||((
ab>=0x200B)&&(ab<=0x200F))||((ab>=0x202A)&&(ab<=0x202E))||((ab>=0x2066)&&(ab<=0x2069
))){ae--;ak++;continue;}if(ab===0x000A){ae--;ak++;bm=0;continue;}a$=this.gl(az,m
,ak,Math.min(ae,8),false,aD,aq);if(!a$){aD[0]=1;aD[1]=0;a$=1;}for(d=0;d<aD[0];d++
){var ad=this.e7(az,aD[d+1]);if(!ad){bm=0;continue;}kc+=this.dw(az,bm,aD[d+1]);kc+=
ad.Advance;bm=aD[d+1];}if(ga&&((ab===0x20)||(ab===0xA0))){f$+=ga;kc+=f$>>16;f$&=
0xFFFF;}if(bx<((kc>>1)+1))break;ae-=a$;ak+=a$;sD+=a$;bx-=kc;}return sD;};e.aaF=function(
az,m,ak,ae,gP,eT){var ga=0;var f$=0x8000;var p=0;var a_=m.length;var bm=0;var aq;
if(!az){console.log("EmWi error: Invalid font resource.");return 0;}if(ae===-1)ae=
a_;if(a_<ae)ae=a_;if(ak<0){ae+=ak;ak=0;}if((ak+ae)>a_)ae=a_-ak;if(!ae)return 0;if(
gP<0)return-1;if(eT>0)eT-=this.m9(az,m,ak,ae);if(eT>0){var co=ak;var ao=ae;var f5=
0;for(;ao;co++,ao--){var ab=m.charCodeAt(co);if((ab===32)||(ab===0xA0))f5++;}if(
f5)ga=((eT<<16)/f5)|0;}aq=this.hi();while(ae>0){var aD=[];var ab=m.charCodeAt(ak
);var kc=0;var a$;var d;if((ab===0x061C)||(ab===0xFEFF)||((ab>=0x200B)&&(ab<=0x200F
))||((ab>=0x202A)&&(ab<=0x202E))||((ab>=0x2066)&&(ab<=0x2069))){ae--;ak++;continue;
}if(ab===0x000A){ae--;ak++;bm=0;continue;}a$=this.gl(az,m,ak,Math.min(ae,8),false
,aD,aq);if(!a$){aD[0]=1;aD[1]=0;a$=1;}if(a$>gP)break;for(d=0;d<aD[0];d++){var ad=
this.e7(az,aD[d+1]);if(!ad){bm=0;continue;}p+=this.dw(az,bm,aD[d+1]);p+=ad.Advance;
bm=aD[d+1];}if(ga&&((ab===0x20)||(ab===0xA0))){f$+=ga;p+=f$>>16;f$&=0xFFFF;}ae-=
a$;ak+=a$;gP-=a$;}return p;};e.abv=function(az,m,ak,aI,rY,aB){var p8=(aI<0)?0x7FFFFFFE:
aI;var s9=(rY<0)?0x7FFFFFFF:rY;var lY=Math.max(ak,0);var i3=Math.max(m.length-lY
,0);var pW=i3*2+1;var ag=new Uint16Array(pW+1);var src=ag;var fX=1;var c9=fX+1;var
g_=pW-i3;var b5=g_;var cH=0;var e4=false;var bm=0;var ei=-1;var width=0;var ao=0;
var ab=0;var t=0;var aq;if(!az||!i3||!s9)return"";for(t=0;t<i3;t++)ag[t+b5]=m.charCodeAt(
t+lY);ag[pW]=0;for(t=0;t<i3;t++)switch(src[t+b5]){case 0x25:src[b5+t++]=0xFEFF;break;
case 0x5E:src[b5+t]=0x200B;break;case 0x7E:src[b5+t]=0x00AD;break;}if(aB&&!this.
rv(aB,src,b5,i3,-1))aB=null;if(aB){this.rx(aB,src,b5);this.rw(aB,src,b5);this.ru(
aB,src,b5,null,[az]);}var tx=String.fromCharCode.apply(null,src.slice(b5));aq=this.
hi();for(t=0;ab=src[b5];){var a$=1;if(ab!==0xA){var ad;var eG=0;var fV=0;var xt=
b5;if((ab===0x061C)||((ab>=0x200C)&&(ab<=0x200F))||((ab>=0x202A)&&(ab<=0x202E))||((
ab>=0x2066)&&(ab<=0x2069)))ab=0xFEFF;if(e4&&(ab!==0xFEFF)&&(ab!==0x200B)&&(ab!==
0x00AD)&&(ab!==0x20))e4=false;if((ab===0x200B)&&width&&!e4){if(cH&&(ag[cH]===0xAD
))ag[cH]=0xFEFF;cH=c9;e4=true;}if((ab===0x20)&&width){if(cH&&(ag[cH]===0xAD))ag[
cH]=0xFEFF;cH=c9;e4=true;}if((ab===0xAD)&&(!width||e4))ab=0xFEFF;if(ab===0x00AD){
var fB=this.gL(az,0x00AD);var kH=0;if(fB&&(ad=this.e7(az,fB))!==null){var av=aB?
this.jT(aB,b5-g_):0;kH=ad.Advance;if(av===ei)if(av&1)kH+=this.dw(az,fB,bm);else kH+=
this.dw(az,bm,fB);}if(((width+kH)<=p8)&&kH||!cH){if(cH&&(ag[cH]===0xAD))ag[cH]=0xFEFF;
width-=kH;cH=c9;e4=true;}}if(ab===0x200B)ab=0xFEFF;if(ab!=0xFEFF){var aD=[];var eh=
Math.min(i3-(b5-g_),8);var l2=ei;var iY=bm;var av;var d;if(aB){av=this.jT(aB,b5-
g_);for(d=1;d<eh;d++)if(av!==this.jT(aB,b5-g_+d))eh=d;}this.rK(aq);a$=this.gl(az
,tx,b5-g_,eh,av&1,aD,aq);if(!a$){aD[0]=1;aD[1]=0;a$=1;}for(d=0;d<aD[0];d++){var ad=
this.e7(az,aD[d+1]);if(ad){eG+=ad.Advance;if(av===ei){if(av&1)eG+=this.dw(az,aD[
d+1],bm);else eG+=this.dw(az,bm,aD[d+1]);}bm=aD[d+1];ei=av;}}fV=eG;if((a$<eh)&&((
p8-width)<(3*fV))){var fU=0;this.ne(aq);this.gl(az,tx,b5-g_,a$,av&1,aD,aq);this.
ne(aq);for(d=0;d<aD[0];d++){var ad=this.e7(az,aD[d+1]);if(ad){fU+=ad.Advance;if(
av===l2){if(av&1)fU+=this.dw(az,aD[d+1],iY);else fU+=this.dw(az,iY,aD[d+1]);}iY=
aD[d+1];l2=av;}}if(fU>fV)fV=fU;}}if(((fV+width)<=p8)||!width){width+=eG;while(a$-->
0)ag[c9++]=src[b5++];}else if(cH){if(ag[cH]===0x20)ag[cH]=0xFEFF;for(b5--,c9--;c9>
cH;b5--,c9--)src[b5]=ag[c9];cH=0;ab=0xA;b5++;c9++;}else{b5=xt;ab=0xA;}if(ab===0xA
){if(src[b5]===0x20){ag[c9++]=0xFEFF;b5++;}while(((ab=src[b5])===0xAD)||(ab===0x061C
)||(ab===0xFEFF)||((ab>=0x200B)&&(ab<=0x200F))||((ab>=0x202A)&&(ab<=0x202E))||((
ab>=0x2066)&&(ab<=0x2069))){ag[c9++]=0xFEFF;b5++;}ab=0xA;}}else{b5++;ag[c9++]=ab;
}if((ab===0xA)&&src[b5]){if(--s9<=0)break;if(cH&&(ag[cH]===0xAD))ag[cH]=0xFEFF;if(
aB){var f2=b5-g_;var ha=f2-(c9-fX)+1;this.o5(aB,ha,f2);this.k9(aB,ha,f2,ag,fX+1);
}ag[fX]=c9-fX;ag[c9]=0;fX=c9;c9+=1;cH=0;e4=false;width=0;bm=0;ei=-1;ao++;this.lg(
aq);}}if(cH&&(ag[cH]===0xAD))ag[cH]=0xFEFF;if((c9-fX)>1){if(aB){var f2=b5-g_;var
ha=f2-(c9-fX)+1;this.o5(aB,ha,f2);this.k9(aB,ha,f2,ag,fX+1);}ag[fX]=c9-fX;ag[c9]=
0;ao++;}ag[0]=ao;var tq="";for(t=0;t<c9;t++)tq+=String.fromCharCode(ag[t]);return tq;
};e.aav=function(az,pv){var a_=pv.length;var t=1;var en=0;if(!a_)return 0;if(!az
){console.log("EmWi error: Invalid font resource.");return 0;}while(t<a_){var lY=
pv.charCodeAt(t);var tt=lY-1;var ts=t+1;var qq;if((ts+tt)>a_)return 0;qq=this.m9(
az,pv,ts,tt);if(qq>en)en=qq;t+=lY;}return en;};e.z6=function(lv,lu,j9){if(lv<0)lv=
0;if(lu<0)lu=0;if(j9<0)j9=0;if(lv>256)lv=256;if(lu>256)lu=256;if(j9>256)j9=256;return{
gf:lv,hY:lu,kV:j9,fl:[],hd:[],jb:[]};};e.aaj=function(ax){if(ax){delete ax.fl;delete
ax.hd;delete ax.jb;}};e.abF=function(ax,pt,ar){if(!ax||(pt<0))return;if(pt<ax.kV
)ax.jb[pt]=ar;};e.abE=function(ax,pk,cE){if(!ax||(pk<0))return;if(pk<ax.hY)ax.hd[
pk]=cE;};e.abG=function(ax,pw,az){if(!ax||(pw<0))return;if(pw<ax.gf)ax.fl[pw]=az;
};function gH(m,l,aG,eD){var h=0;var as=m.charCodeAt(l);while((as>=0x30)&&(as<=0x39
)){h=(h*10)+(as-0x30);as=m.charCodeAt(++l);}aG[eD]=h;return l;}function oW(m,l,wZ
,aG,eD){l=gH(m,l,aG,eD);if(m.charCodeAt(l)===0x25){var gw=aG[eD]*wZ;aG[eD]=(gw/100
)|0;if((gw-(aG[eD]*100))>50)aG[eD]++;l++;}return l;}function rh(m,l,aI,aG){aG[0]=
0;aG[1]=0;aG[2]=0;aG[3]=0;l=oW(m,l,aI,aG,0);if(m.charCodeAt(l)===0x2C){l=oW(m,l+
1,aI,aG,1);if(m.charCodeAt(l)===0x2C){l=gH(m,l+1,aG,2);if(m.charCodeAt(l)===0x2C
)l=gH(m,l+1,aG,3);}}if(aG[0]>aI)aG[0]=aI;if(aG[1]>(aI-aG[0]))aG[1]=aI-aG[0];return l;
}function vA(m,l,aG,eD){var h=0x6C;var cr=m.charCodeAt(l);var ec=cr?m.charCodeAt(
l+1):0;if(((cr===0x6C)||(cr===0x72)||(cr===0x63)||(cr===0x61))&&(ec===0x6A)){h=cr-
0x20;l+=2;}else if((cr===0x6A)&&((ec===0x6C)||(ec===0x72)||(ec===0x63)||(ec===0x61
))){h=ec-0x20;l+=2;}else if((cr===0x6C)||(cr===0x72)||(cr===0x63)||(cr===0x61)){
h=cr;l++;}else if(cr===0x6A){h=0x4C;l++;}aG[eD]=h;return l;}function rg(m,l,aG,eD
){var h=0x6D;var as=m.charCodeAt(l);if((as===0x74)||(as===0x6D)||(as===0x62)){h=
as;l++;}aG[eD]=h;return l;}function vB(m,l,aI,ic){var h=[0,0,0];var as=m.charCodeAt(
l);var d=0;var bP=0;var n_=aI;var lR=0;var cw=[0];while((d<3)&&(((as>=0x30)&&(as<=
0x39))||(as===0x2A))){if(as===0x2A){h[d]=-1;lR++;l++;}else{l=oW(m,l,aI,h,d);n_=n_-
h[d];}if((as=m.charCodeAt(l))===0x2C)as=m.charCodeAt(++l);d++;}if(!d){h[0]=aI;d=
1;}for(;bP<lR;bP++){var en=(n_/lR)|0;if(bP===(lR-1))en=n_-(lR-1)*en;if(h[0]<0)h[
0]=en;else if(h[1]<0)h[1]=en;else if(h[2]<0)h[2]=en;}for(d=0;d<3;d++){if(h[d]<0)
h[d]=0;if(h[d]>aI)h[d]=aI;aI=aI-h[d];ic[d]=h[d];}return l;}function d8(m,l,rW){return m.
slice(l,l+rW.length)===rW;}function t5(m,l){var ab;for(;(ab=m.charCodeAt(l));l++
){if((ab===0x7B)&&(d8(m,l+1,"par")||d8(m,l+1,"lay")||d8(m,l+1,"col")||d8(m,l+1,"end"
)))break;if((ab===0x25)&&(l<(m.length-1)))l++;}return l;}function vC(m,l,pu,lB,lA
,lC,eS){var ace=l;var ej=0;var eW=0;var dq=0;var mc=false;var ku=false;var eI=[0
,0,0];while(l<pu){var ab=m.charCodeAt(l);if(ab===0x7B){if(d8(m,l,"{img")){l=rg(m
,l+4,eI,0);l=gH(m,l,eI,1);if(m.charCodeAt(l)===0x2E){l++;l=gH(m,l,eI,2);}if(m.charCodeAt(
l)===0x7D)l++;if(eI[2]>4095)eI[2]=0;if(eI[1]>255)eI[1]=0;lB[ej]=0xFEFF;lA[ej]=((
eI[0]===0x74)?5:(eI[0]===0x62)?4:3)|(eW<<4)|(eI[1]<<12)|(eI[2]<<20);lC[ej++]=ku?
eS[0]:0;continue;}if(d8(m,l,"{fnt")){l=gH(m,l+4,eI,0);if(m.charCodeAt(l)===0x7D)
l++;dq=eI[0];if(dq>255)dq=0;continue;}if(d8(m,l,"{clr")){l=gH(m,l+4,eI,0);if(m.charCodeAt(
l)===0x7D)l++;eW=eI[0];if(eW>255)eW=0;continue;}if(d8(m,l,"{ul+}")){mc=true;l+=5;
continue;}if(d8(m,l,"{ul-}")){mc=false;l+=5;continue;}if(d8(m,l,"{lnk:")){l+=5;ku=
true;eS[0]+=1;while((l<pu)&&((ab=m.charCodeAt(l))!==0x7D)&&(ab!==0x7B))l++;if(m.
charCodeAt(l)===0x7D)l++;continue;}if(d8(m,l,"{lnk}")){l+=5;ku=false;continue;}}
if(ab===0x5E){lB[ej]=0x200B;lA[ej]=(mc?2:1)|(eW<<4)|(dq<<12);lC[ej++]=ku?eS[0]:0;
l++;continue;}if(ab===0x7E){lB[ej]=0xAD;lA[ej]=(mc?2:1)|(eW<<4)|(dq<<12);lC[ej++
]=ku?eS[0]:0;l++;continue;}if(ab===0x25){ab=m.charCodeAt(++l);if(l===pu)break;}lB[
ej]=ab;lA[ej]=(mc?2:1)|(eW<<4)|(dq<<12);lC[ej++]=ku?eS[0]:0;l++;}lB[ej]=0;lA[ej]=
0;lC[ej]=0;return ej;}function qR(ap,ax,m,l,aI,gQ,a2,dy,wO,e_,wP,ho,eS){var aa=[
0];var g3=[0];var dG=a2.length;a2.push(0x47,0,0,aI,0,0,0);l=rf(ap,ax,m,l,aI,0x6C
,gQ,a2,aa,g3,ho,eS);if(a2.length>(dG+7)){a2[dG+4]=aa[0];a2[dG+5]=a2.length-dG;}else
a2.splice(dG,a2.length-dG);while(l<m.length){if(d8(m,l,"{par")){var dN=[0,0,0,0];
var gT=[-1];var r9=[];var width;var height=[0];l=vA(m,l+4,r9,0);l=rh(m,l,aI,dN);
if(m.charCodeAt(l)===0x3A)l=gH(m,l+1,gT,0);if(m.charCodeAt(l)===0x7D)l++;if(gT[0
]!==-1)a2.push(0x52,0,aa[0]+g3[0],aI,0,gT[0]);dG=a2.length;width=aI-dN[0]-dN[1];
a2.push(0x47,0,(aa[0]+=g3[0])+dN[2],aI,0,0,dN[0]);l=rf(ap,ax,m,l,width,r9[0],gQ,
a2,height,g3,ho,eS);aa[0]+=dN[2]+height[0]+dN[3];a2[dG+4]=aa[0]-dN[3];a2[dG+5]=a2.
length-dG;if(gT[0]!==-1)a2[dG-2]=aa[0];}else if(d8(m,l,"{lay")){var sE=[];var height=[
0];dG=a2.length;l=vB(m,l+4,aI,sE);if(m.charCodeAt(l)===0x7D)l++;a2.push(0x47,0,aa[
0]+=g3[0],aI,0,0,0);l=vq(ap,ax,m,l,gQ,sE,a2,height,g3,ho,eS);aa[0]+=height[0];a2[
dG+4]=aa[0];a2[dG+5]=a2.length-dG;}else break;}dy[wO]=aa[0];e_[wP]=g3[0];return l;
}function vq(ap,ax,m,l,gQ,ic,a2,dy,e_,ho,eS){var r_=[];var lL=[];var ki=[];var gT=[-
1,-1,-1];var s6=[0,0,0];var d=0;var bP=0;var p=0;var height=0;var qE=0;while((l<
m.length)&&(d<ic.length)){if(d8(m,l,"{col")){var dN=[0,0,0,0];var width;l=rg(m,l+
4,r_,d);l=rh(m,l,ic[d],dN);if(m.charCodeAt(l)===0x3A)l=gH(m,l+1,gT,d);if(m.charCodeAt(
l)===0x7D)l++;if(gT[d]!==-1)a2.push(0x52,p,0,p+ic[d],0,gT[d]);lL[d]=a2.length;width=
ic[d]-dN[0]-dN[1];a2.push(0x47,p+dN[0],dN[2],p+dN[0]+width,0,0,0);l=qR(ap,ax,m,l
,width,gQ,a2,ki,d,s6,d,ho,eS);ki[d]+=dN[2]+dN[3];height=Math.max(height,ki[d]);qE=
Math.max(qE,ki[d]+s6[d]);a2[lL[d]+4]=ki[d]-dN[3];a2[lL[d]+5]=a2.length-lL[d];p+=
ic[d];d++;}else break;}for(bP=0;bP<d;bP++){var dG=lL[bP];var om=height-ki[bP];switch(
r_[bP]){case 0x74:om=0;break;case 0x6D:om>>=1;break;}a2[dG+2]+=om;a2[dG+4]+=om;if(
gT[bP]!==-1)a2[dG-2]=height;}dy[0]=height;e_[0]=qE-height;if(d8(m,l,"{end}"))l+=
5;return l;}function vE(ap,ax,eP,fu,dd,pE,aB,aG){var nR=String.fromCharCode.apply(
null,eP);var ha=dd;var at=null;var dq=-1;var d7=0;var qM=0;var tM=0;var qL=0;var
qI=0;var qJ=0;var qK=0;var e4=false;var gZ=0;var bm=0;var ei=-1;var aq=ap.hi();aG[
0]=0;aG[1]=0;aG[2]=0;aG[3]=0;aG[4]=0;for(;eP[dd];dd++){var fc=fu[dd];var aX=eP[dd
];var type=fc&0xF;var fW=0;var pT=0;var sL=0;var sO=0;var nY=0;var nZ=0;var n0=0;
var a$=0;if(((type===1)||(type===2))&&(((fc>>12)&0xFF)!==dq)){dq=(fc>>12)&0xFF;at=
null;if(ax&&(dq>=0)&&(dq<ax.gf))at=ax.fl[dq];if(!at){dq=0;at=(ax&&(ax.gf>0))?ax.
fl[0]:null;}ei=-1;bm=0;ap.lg(aq);}if((aX===0xA)&&at){aG[3]=Math.max(aG[3],at.Ascent
);aG[4]=Math.max(aG[4],at.Leading);gZ=Math.max(gZ,at.Descent);}if(aX===0xA)break;
if((type>=3)&&(type<=5)){var hw=(fc>>12)&0xFF;var ch=null;if(ax&&(hw>=0)&&(hw<ax.
hY))ch=ax.hd[hw];if(!ch&&ax&&(ax.hY>0))ch=ax.hd[0];if(ch){fW=ch.FrameSize[0];sL=
ch.FrameSize[1];pT=fW;}ei=-1;bm=0;a$=1;ap.lg(aq);}else{var ad;if((aX===0x200B)&&(
!aG[0]||e4))aX=0xFEFF;if((aX===0xAD)&&(!aG[0]||e4))aX=0xFEFF;if((aX===0x20)&&!aG[
0])aX=0xA0;if((aX===0x20)||(aX===0x200B)){if(d7&&(eP[d7]===0xAD))eP[d7]=0xFEFF;d7=
dd;qM=aG[0];tM=aG[1];qL=aG[2];qI=aG[3];qK=aG[4];qJ=gZ;e4=true;}if(aX===0xAD){var
fB=at?ap.gL(at,aX):0;if(fB&&aG[0]&&(ad=ap.e7(at,fB))){var av=aB?ap.jT(aB,dd):0;fW=
ad.Advance;nY=at.Ascent;nZ=at.Descent;n0=at.Leading;if(av===ei)if(av&1)fW+=ap.dw(
at,fB,bm);else fW+=ap.dw(at,bm,fB);}if(((aG[0]+fW)<=pE)&&fW){if(d7&&(eP[d7]===0xAD
))eP[d7]=0xFEFF;d7=dd;qM=aG[0]+fW;qI=Math.max(aG[3],nY);qK=Math.max(aG[4],n0);qJ=
Math.max(gZ,nZ);qL=aG[2];e4=true;}continue;}if((aX===0x061C)||((aX>=0x200B)&&(aX<=
0x200F))||((aX>=0x202A)&&(aX<=0x202E))||((aX>=0x2066)&&(aX<=0x2069)))aX=0xFEFF;if(
aX===0xFEFF){eP[dd]=0xFEFF;continue;}if(d7!==dd)e4=false;if(at){var aD=[];var av=
0;var eh=1;var eG=0;var fV=0;var l2=ei;var iY=bm;var d=dd+1;while(eP[d]&&(fu[d]===
fc)&&(eh<8)){eh++;d++;}if(aB){av=ap.jT(aB,dd);for(d=1;d<eh;d++)if(av!=ap.jT(aB,dd+
d))eh=d;}ap.rK(aq);a$=ap.gl(at,nR,dd,eh,av&1,aD,aq);if(!a$){aD[0]=1;aD[1]=0;a$=1;
}for(d=0;d<aD[0];d++){var ad=ap.e7(at,aD[d+1]);if(ad){eG+=ad.Advance;if(av===ei){
if(av&1)eG+=ap.dw(at,aD[d+1],bm);else eG+=ap.dw(at,bm,aD[d+1]);}bm=aD[d+1];ei=av;
}}fV=eG;if((a$<eh)&&((pE-aG[0])<(3*fV))){var fU=0;ap.ne(aq);ap.gl(at,nR,dd,a$,av&
1,aD,aq);ap.ne(aq);for(d=0;d<aD[0];d++){var ad=ap.e7(at,aD[d+1]);if(ad){fU+=ad.Advance;
if(av===l2){if(av&1)fU+=ap.dw(at,aD[d+1],iY);else fU+=ap.dw(at,iY,aD[d+1]);}iY=aD[
d+1];l2=av;}}if(fU>fV)fV=fU;}fW=eG;pT=fV;nY=at.Ascent;nZ=at.Descent;n0=at.Leading;
if((aX===0x20)||(aX===0xA0))sO=fW;}}if(((pT+aG[0])<=pE)||!aG[0]){aG[0]+=fW;aG[1]=
Math.max(aG[1],sL);aG[3]=Math.max(aG[3],nY);aG[4]=Math.max(aG[4],n0);gZ=Math.max(
gZ,nZ);aG[2]+=sO;dd+=a$-1;continue;}if(d7){aG[0]=qM;aG[1]=tM;aG[2]=qL;aG[3]=qI;aG[
4]=qK;gZ=qJ;dd=d7+1;if(eP[d7]===0x20)eP[d7]=0xFEFF;while((((type=(fu[dd]&0xF))===
1)||(type===2))&&(((aX=eP[dd])===0xFEFF)||(aX===0x200B)||(aX===0xAD)))dd++;d7=0;
}break;}if(d7&&(eP[d7]===0xAD))eP[d7]=0xFEFF;aG[1]=Math.max(aG[1],aG[3]+gZ);aG[3
]+=(aG[1]-aG[3]-gZ)>>1;return dd-ha;}function rf(ap,ax,m,l,aI,wD,gQ,a2,dy,e_,ho,
eS){var f2=t5(m,l);var at=(ax&&(ax.gf>0))?ax.fl[0]:null;var a_=f2-l+1;var eV=new
Uint16Array(a_);var gp=new Uint32Array(a_);var p6=new Uint16Array(a_);var dM=null;
var iN=false;var t=0;var dq=0;var eW=0;var hb=0;var g4=0;var s4=[0];var eg=[0,0,
0,0,0];a_=vC(m,l,f2,eV,gp,p6,s4);if(a_&&gQ)dM=ap.v3(a_);if(dM&&!ap.rv(dM,eV,0,a_
,-1)){ap.rB(dM);dM=null;}if(dM){ap.rx(dM,eV,0);ap.rw(dM,eV,0);ap.ru(dM,eV,0,gp,ax.
fl);iN=ap.v2(dM);if(ho[0]<0)ho[0]=iN?1:0;}dy[0]=0;e_[0]=0;while(t<a_){var fE=wD;
var p=0;var s7=0;var g9=0;var os=0;var tw=0;var bm=0;var aq=ap.hi();var ao=vE(ap
,ax,eV,gp,t,aI,dM,eg);if(dM){ap.o5(dM,t,t+ao);ap.k9(dM,t,t+ao,eV,t);ap.k9(dM,t,t+
ao,gp,t);ap.k9(dM,t,t+ao,p6,t);}if(fE===0x61)fE=iN?0x72:0x6C;if(fE===0x41)fE=iN?
0x52:0x4C;if((fE===0x4C)||(fE===0x52)||(fE===0x43))if((!eV[t+ao]||(eV[t+ao]===0xA
)||!eg[2])){fE+=0x20;eg[2]=0;}else fE=0x4C;if(fE===0x72)p+=aI-eg[0];else if(fE===
0x63)p+=(aI-eg[0])>>1;var nR=String.fromCharCode.apply(null,eV);for(;ao>=0;ao--,
t++){var aX=ao?eV[t]:0;var fc=ao?gp[t]:0;var type=fc&0xF;var qb=eW;var hP=dq;var
ok=hb;var oj=ao?p6[t]:0;var ad;if((type>=1)&&(type<=5))qb=(fc>>4)&0xFF;if((type===
1)||(type===2))hP=(fc>>12)&0xFF;if(type===1)ok=0;if(type===2)ok=1;if(g9&&(((type
!==1)&&(type!==2))||(eW!==qb)||(dq!==hP)||(hb!==ok)||(g4!==oj))){if(os&&(fE===0x4C
)){var aN=(os*(aI-eg[0]))+tw;var bo=(aN/eg[2])|0;tw=aN-(bo*eg[2]);p+=bo;a2[g9]=0x4A;
a2.push(p-a2[g9+1]);}if(hb){var fB=at?ap.gL(at,0x2D):0;if(fB&&((ad=ap.e7(at,fB))
!=null))hb=ad.Height;if(hb<=0)hb=1;a2.push(0x52,a2[g9+1],dy[0]+e_[0]+eg[3]+hb,p,
dy[0]+e_[0]+eg[3]+(hb*2),eW);}g9=0;os=0;}if(dq!==hP){at=null;if(ax&&(hP>=0)&&(hP<
ax.gf))at=ax.fl[hP];if(!at)at=(ax&&(ax.gf>0))?ax.fl[0]:null;}if(g4&&(g4!==oj))a2.
push(0x41,g4+eS[0],s7,dy[0]+e_[0],p,dy[0]+e_[0]+eg[1],eg[3]);if(g4!==oj)s7=p;if(
dq!==hP){bm=0;ap.lg(aq);}eW=qb;dq=hP;hb=ok;g4=oj;if((type>=3)&&(type<=5)){var hw=(
fc>>12)&0xFF;var hL=(fc>>20)&0xFFF;var ch=null;if(ax&&(hw>=0)&&(hw<ax.hY))ch=ax.
hd[hw];if(!ch&&ax&&(ax.hY>0))ch=ax.hd[0];if(ch&&(hL>=ch.NoOfFrames))hL=0;if(ch){
var co=eg[1]-ch.FrameSize[1];switch(type){case 3:co>>=1;break;case 5:co=0;break;
}a2.push(0x49,p,dy[0]+e_[0]+co,hw,hL,eW);p+=ch.FrameSize[0];}bm=0;ap.lg(aq);}if(((
type===1)||(type===2))&&at&&(aX!==0xFEFF)){var aD=[];var eh=1;var d=t+1;var pZ=true;
var fc=gp[t];var a$=0;var eG=0;var d1=0;var bP;while(eV[d]&&(gp[d]==fc)&&(eh<8)&&(
eh<ao)){eh++;d++;}a$=ap.gl(at,nR,t,eh,false,aD,aq);if(!a$){aD[0]=1;aD[1]=0;a$=1;
}for(d=0;d<aD[0];d++){var ad=ap.e7(at,aD[d+1]);if(ad){eG+=ad.Advance;if(pZ){d1=ap.
dw(at,bm,aD[1]);pZ=false;}else eG+=ap.dw(at,bm,aD[d+1]);bm=aD[d+1];}}if(!g9&&!pZ
){g9=a2.length;a2.push(0x54,p+d1,dy[0]+e_[0]+eg[3],"",dq,eW);}for(bP=0;(bP<a$)&&
g9;bP++)a2[g9+3]+=String.fromCharCode(eV[t+bP]);p+=eG+d1;t+=a$-1;ao-=a$-1;if((aX===
0x20)||(aX===0xA0))os+=ad.Advance;}}if(eV[t-1]!==0xA)t--;dy[0]+=eg[1]+e_[0];e_[0
]=eg[4];}if(dM)ap.rB(dM);eS[0]+=s4[0];return f2;}function tY(m,l,no){var ab;while((
ab=m.charCodeAt(l))){if((ab===0x7B)&&d8(m,l,"{lnk:")){var ha=l+=5;while(((ab=m.charCodeAt(
l)))&&(ab!==0x7D)&&(ab!==0x7B))l++;no.push({mj:0,m0:0xFFFFFFFE,mp:0,o3:0,m3:0,vt:
m.slice(ha,l)});continue;}if((ab===0x25)&&((l+1)<m.length))l++;l++;}}function qZ(
no,fw,fx,bs,aO,hm){while(aO<hm){switch(bs[aO]){case 0x47:{var ao=bs[aO+5];var p=
bs[aO+1]+bs[aO+6]+fw;var aa=bs[aO+2]+fx;qZ(no,p,aa,bs,aO+7,aO+ao);aO+=ao;}break;
case 0x54:aO+=6;break;case 0x4A:aO+=7;break;case 0x49:aO+=6;break;case 0x52:aO+=
6;break;case 0x41:{var c_=no[bs[aO+1]-1];c_.m0=Math.min(c_.m0,aO);c_.mj=Math.max(
c_.mj,aO+7);c_.o3=fw;c_.m3=fx;c_.mp++;aO+=7;}break;}}}function rj(dn,gm,bs,w4,rS
){var v=w4;while(v<rS){switch(bs[v]){case 0x54:v+=6;break;case 0x4A:v+=7;break;case
0x49:v+=6;break;case 0x52:v+=6;break;case 0x41:{var g4=bs[v+1];if((g4===dn)&&!gm
)return v;if(g4===dn)gm--;v+=7;}break;default:v=rS;}}return-1;}function t2(ap,n,
ac,k,dl,fw,fx,ax,bs,aO,hm,an,bh){function d9(e9,bx,bM,ar){var kd=e9.tN;var sb=e9.
tP;if(bx<0)bx=0;if(bM<0)bM=0;if(bx>e9.Width)bx=e9.Width;if(bM>e9.Height)bM=e9.Height;
if(e9.ra&&bM)kd+=bM*e9.tO;if(e9.ra&&e9.q$&&bM)sb+=bM*e9.tQ;if(e9.q$&&bx)kd+=(sb-
kd)*e9.vn*bx;if(kd>=255)return ar;if(kd<=0)return ar&0xFFFFFF;var xq=((((ar>>24)&
0xFF)*kd/255)<<24)|(ar&0xFFFFFF);return xq;}function q3(ap,n,ac,k,dl,fw,fx,ax,bs
,aO,hm,an,bh){while(aO<hm){var ab=bs[aO];if((ab===0x47)||(ab===0x52)){var au=[bs[
aO+1]+fw,bs[aO+2]+fx,bs[aO+3]+fw,bs[aO+4]+fx];switch(ab){case 0x47:{var ao=bs[aO+
5];if((k[0]<k[2])&&(k[1]<k[3]))q3(ap,n,ac,k,dl,au[0]+bs[aO+6],au[1],ax,bs,aO+7,aO+
ao,an,bh);aO+=ao;}break;case 0x52:{var bH=bs[aO+5];var s=au[0]-dl[0];var x=au[2]-
dl[0];var q=au[1]-dl[1];var w=au[3]-dl[1];if((bH>=0)&&(bH<ax.kV))bH=ax.jb[bH];else
bH=0;var iA=d9(bh,s,q,bH);var iB=d9(bh,x,q,bH);var iz=d9(bh,x,w,bH);var iy=d9(bh
,s,w,bH);ap.fR(n,ac,k,au,iA,iB,iz,iy,an);aO+=6;}break;}}else if((ab===0x54)||(ab===
0x49))aO+=6;else if(ab===0x4A)aO+=7;else if(ab===0x41)aO+=7;}}function q4(ap,n,ac
,k,dl,fw,fx,ax,bs,aO,hm,an,bh){while(aO<hm){var ab=bs[aO];if((ab===0x47)||(ab===
0x52)){var au=[bs[aO+1]+fw,bs[aO+2]+fx,bs[aO+3]+fw,bs[aO+4]+fx];switch(ab){case 0x47:{
var ao=bs[aO+5];if((k[0]<k[2])&&(k[1]<k[3]))q4(ap,n,ac,k,dl,au[0]+bs[aO+6],au[1]
,ax,bs,aO+7,aO+ao,an,bh);aO+=ao;}break;case 0x52:{aO+=6;}break;}}else if((ab===0x54
)||(ab===0x4A)||(ab===0x49)){var be=[bs[aO+1]+fw,bs[aO+2]+fx];switch(ab){case 0x54:{
var at=bs[aO+4];var bH=bs[aO+5];var s=k[0]-dl[0];var q=k[1]-dl[1];var x=k[2]-dl[
0];var w=k[3]-dl[1];if((bH>=0)&&(bH<ax.kV))bH=ax.jb[bH];else bH=0;if((at>=0)&&(at<
ax.gf))at=ax.fl[at];else at=null;if(!at&&ax.gf)at=ax.fl[0];be[0]=k[0]-be[0];be[1
]=k[1]-be[1];if(at){var iA=d9(bh,s,q,bH);var iB=d9(bh,x,q,bH);var iz=d9(bh,x,w,bH
);var iy=d9(bh,s,w,bH);ap.rz(n,at,bs[aO+3],0,-1,ac,k,k,be,0,0,iA,iB,iz,iy,an);}aO+=
6;}break;case 0x4A:{var at=bs[aO+4];var bH=bs[aO+5];var s=k[0]-dl[0];var q=k[1]-
dl[1];var x=k[2]-dl[0];var w=k[3]-dl[1];var width=bs[aO+6];if((bH>=0)&&(bH<ax.kV
))bH=ax.jb[bH];else bH=0;if((at>=0)&&(at<ax.gf))at=ax.fl[at];else at=null;if(!at&&
ax.gf)at=ax.fl[0];be[0]=k[0]-be[0];be[1]=k[1]-be[1];if(at){var iA=d9(bh,s,q,bH);
var iB=d9(bh,x,q,bH);var iz=d9(bh,x,w,bH);var iy=d9(bh,s,w,bH);ap.rz(n,at,bs[aO+
3],0,-1,ac,k,k,be,width,0,iA,iB,iz,iy,an);}aO+=7;}break;case 0x49:{var ch=bs[aO+
3];var hL=bs[aO+4];var bH=bs[aO+5];if((bH>=0)&&(bH<ax.kV))bH=ax.jb[bH];else bH=0;
if((ch>=0)&&(ch<ax.hY))ch=ax.hd[ch];else ch=null;if(!ch&&ax.hY)ch=ax.hd[0];if(ch
){var s=be[0]-dl[0];var q=be[1]-dl[1];var x=s+ch.FrameSize[0];var w=q+ch.FrameSize[
1];var iA=d9(bh,s,q,bH);var iB=d9(bh,x,q,bH);var iz=d9(bh,x,w,bH);var iy=d9(bh,s
,w,bH);var aP=[be[0],be[1],be[0]+ch.FrameSize[0],be[1]+ch.FrameSize[1]];ap.db(n,
ch,ac,hL,k,aP,[0,0],iA,iB,iz,iy,an);}aO+=6;}break;}}else if(ab===0x41)aO+=7;}}q3(
ap,n,ac,k,dl,fw,fx,ax,bs,aO,hm,an,bh);q4(ap,n,ac,k,dl,fw,fx,ax,bs,aO,hm,an,bh);}
e.abu=function(ax,m,aI,gQ){var sf=[];var hv={};var height=[0];var tf=[0];var g3=[
0];var iN=[-1];if(!ax||!m.length||(aI<=0))return null;qR(this,ax,m,0,aI,gQ,sf,height
,0,g3,0,iN,tf);hv.Data=sf;hv.fL=[];hv.vo=iN[0]===1;if(tf){tY(m,0,hv.fL);qZ(hv.fL
,0,0,hv.Data,0,hv.Data.length);}return hv;};e.aak=function(bB){};e.aaq=function(
bB){if(!bB)return this.wf;if(!bB.gJ){var i=bB?bB.Data:null;var v=0;var dQ=i?i.length:
0;var dj=[0,0,0,0];while(v<dQ){var s=i[v+1];var q=i[v+2];var x=i[v+3];var w=i[v+
4];if((s<x)&&(q<w)){if(dj[0]>s)dj[0]=s;if(dj[2]<x)dj[2]=x;if(dj[1]>q)dj[1]=q;if(
dj[3]<w)dj[3]=w;}if(i[v]===0x52)v+=6;else v+=i[v+5];}var en=dj[2]-dj[0];var ks=dj[
3]-dj[1];if(en<0)en=0;if(ks<0)ks=0;bB.gJ=[en,ks];}return bB.gJ;};e.aaz=function(
bB){if(!bB)return 0;return bB.fL.length;};e.aao=function(bB,dn){if(!bB)return this.
jV;if((dn<0)||(dn>=bB.fL.length))return this.jV;return bB.fL[dn].vt;};e.aay=function(
bB,dn){if(!bB)return 0;if((dn<0)||(dn>=bB.fL.length))return 0;return bB.fL[dn].mp;
};e.aap=function(bB,dn,gm){var c_;var v;var dj=[0,0,0,0];if(!bB)return dj;if((dn<
0)||(dn>=bB.fL.length))return dj;c_=bB.fL[dn];if((gm<0)||(gm>=c_.mp))return dj;v=
rj(dn+1,gm,bB.Data,c_.m0,c_.mj);if(v>=0){dj[0]=bB.Data[v+2]+c_.o3;dj[1]=bB.Data[
v+3]+c_.m3;dj[2]=bB.Data[v+4]+c_.o3;dj[3]=bB.Data[v+5]+c_.m3;}return dj;};e.aan=
function(bB,dn,gm){var c_;var v;if(!bB)return 0;if((dn<0)||(dn>=bB.fL.length))return 0;
c_=bB.fL[dn];if((gm<0)||(gm>=c_.mp))return 0;v=rj(dn+1,gm,bB.Data,c_.m0,c_.mj);if(
v>=0)return c_.m3+bB.Data[v+6];return 0;};e.aaW=function(bB){return bB&&bB.vo;};
var tV="\u0000\u0009\u000A\u000B\u000C\u000D\u000E\u001C\u001F\u0020"+"\u0021\u0023\u0026\u0028\u0029\u002A\u002B\u002C\u002D\u002E"+
"\u0030\u003A\u003B\u003C\u003D\u003E\u003F\u0041\u005B\u005C"+"\u005D\u005E\u0061\u007B\u007C\u007D\u007E\u007F\u0085\u0086"+
"\u00A0\u00A1\u00A2\u00A6\u00AA\u00AB\u00AC\u00AD\u00AE\u00B0"+"\u00B2\u00B4\u00B5\u00B6\u00B9\u00BA\u00BB\u00BC\u00C0\u00D7"+
"\u00D8\u00F7\u00F8\u02B9\u02BB\u02C2\u02D0\u02D2\u02E0\u02E5"+"\u02EE\u02EF\u0300\u0370\u0374\u0376\u037E\u037F\u0384\u0386"+
"\u0387\u0388\u03F6\u03F7\u0483\u048A\u058A\u058B\u058D\u058F"+"\u0590\u0591\u05BE\u05BF\u05C0\u05C1\u05C3\u05C4\u05C6\u05C7"+
"\u05C8\u0600\u0606\u0608\u0609\u060B\u060C\u060D\u060E\u0610"+"\u061B\u061C\u061D\u0620\u0621\u0622\u0626\u0627\u0628\u0629"+
"\u062A\u062F\u0633\u0640\u0641\u0648\u0649\u064B\u0660\u066A"+"\u066B\u066D\u066E\u0670\u0671\u0674\u0675\u0678\u0688\u069A"+
"\u06C0\u06C1\u06C3\u06CC\u06CD\u06CE\u06CF\u06D0\u06D2\u06D4"+"\u06D5\u06D6\u06DD\u06DE\u06DF\u06E5\u06E7\u06E9\u06EA\u06EE"+
"\u06F0\u06FA\u06FD\u06FF\u0700\u070F\u0710\u0711\u0712\u0715"+"\u071A\u071E\u071F\u0728\u0729\u072A\u072B\u072C\u072D\u072F"+
"\u0730\u074B\u074D\u074E\u0759\u075C\u076B\u076D\u0771\u0772"+"\u0773\u0775\u0778\u077A\u0780\u07A6\u07B1\u07C0\u07EB\u07F4"+
"\u07F6\u07FA\u0816\u081A\u081B\u0824\u0825\u0828\u0829\u082E"+"\u0859\u085C\u0860\u0861\u0862\u0866\u0867\u0868\u0869\u086B"+
"\u0870\u08A0\u08AA\u08AD\u08AE\u08AF\u08B1\u08B3\u08B5\u08B6"+"\u08B9\u08BA\u08BE\u08D4\u08E2\u08E3\u0903\u093A\u093B\u093C"+
"\u093D\u0941\u0949\u094D\u094E\u0951\u0958\u0962\u0964\u0981"+"\u0982\u09BC\u09BD\u09C1\u09C5\u09CD\u09CE\u09E2\u09E4\u09F2"+
"\u09F4\u09FB\u09FC\u0A01\u0A03\u0A3C\u0A3D\u0A41\u0A43\u0A47"+"\u0A49\u0A4B\u0A4E\u0A51\u0A52\u0A70\u0A72\u0A75\u0A76\u0A81"+
"\u0A83\u0ABC\u0ABD\u0AC1\u0AC6\u0AC7\u0AC9\u0ACD\u0ACE\u0AE2"+"\u0AE4\u0AF1\u0AF2\u0AFA\u0B00\u0B01\u0B02\u0B3C\u0B3D\u0B3F"+
"\u0B40\u0B41\u0B45\u0B4D\u0B4E\u0B56\u0B57\u0B62\u0B64\u0B82"+"\u0B83\u0BC0\u0BC1\u0BCD\u0BCE\u0BF3\u0BF9\u0BFA\u0BFB\u0C00"+
"\u0C01\u0C3E\u0C41\u0C46\u0C49\u0C4A\u0C4E\u0C55\u0C57\u0C62"+"\u0C64\u0C78\u0C7F\u0C81\u0C82\u0CBC\u0CBD\u0CBF\u0CC0\u0CC6"+
"\u0CC7\u0CCC\u0CCE\u0CE2\u0CE4\u0D00\u0D02\u0D3B\u0D3D\u0D41"+"\u0D45\u0D4D\u0D4E\u0D62\u0D64\u0DCA\u0DCB\u0DD2\u0DD5\u0DD6"+
"\u0DD7\u0E31\u0E32\u0E34\u0E3B\u0E3F\u0E40\u0E47\u0E4F\u0EB1"+"\u0EB2\u0EB4\u0EBA\u0EBB\u0EBD\u0EC8\u0ECE\u0F18\u0F1A\u0F35"+
"\u0F36\u0F37\u0F38\u0F39\u0F3A\u0F3B\u0F3C\u0F3D\u0F3E\u0F71"+"\u0F7F\u0F80\u0F85\u0F86\u0F88\u0F8D\u0F98\u0F99\u0FBD\u0FC6"+
"\u0FC7\u102D\u1031\u1032\u1038\u1039\u103B\u103D\u103F\u1058"+"\u105A\u105E\u1061\u1071\u1075\u1082\u1083\u1085\u1087\u108D"+
"\u108E\u109D\u109E\u135D\u1360\u1390\u139A\u1400\u1401\u1680"+"\u1681\u169B\u169C\u169D\u1712\u1715\u1732\u1735\u1752\u1754"+
"\u1772\u1774\u17B4\u17B6\u17B7\u17BE\u17C6\u17C7\u17C9\u17D4"+"\u17DB\u17DC\u17DD\u17DE\u17F0\u17FA\u1800\u180B\u180E\u180F"+
"\u1885\u1887\u18A9\u18AA\u1920\u1923\u1927\u1929\u1932\u1933"+"\u1939\u193C\u1940\u1941\u1944\u1946\u19DE\u1A00\u1A17\u1A19"+
"\u1A1B\u1A1C\u1A56\u1A57\u1A58\u1A5F\u1A60\u1A61\u1A62\u1A63"+"\u1A65\u1A6D\u1A73\u1A7D\u1A7F\u1A80\u1AB0\u1ABF\u1B00\u1B04"+
"\u1B34\u1B35\u1B36\u1B3B\u1B3C\u1B3D\u1B42\u1B43\u1B6B\u1B74"+"\u1B80\u1B82\u1BA2\u1BA6\u1BA8\u1BAA\u1BAB\u1BAE\u1BE6\u1BE7"+
"\u1BE8\u1BEA\u1BED\u1BEE\u1BEF\u1BF2\u1C2C\u1C34\u1C36\u1C38"+"\u1CD0\u1CD3\u1CD4\u1CE1\u1CE2\u1CE9\u1CED\u1CEE\u1CF4\u1CF5"+
"\u1CF8\u1CFA\u1DC0\u1DFA\u1DFB\u1E00\u1FBD\u1FBE\u1FBF\u1FC2"+"\u1FCD\u1FD0\u1FDD\u1FE0\u1FED\u1FF0\u1FFD\u1FFF\u2000\u200B"+
"\u200C\u200D\u200E\u200F\u2010\u2028\u2029\u202A\u202B\u202C"+"\u202D\u202E\u202F\u2030\u2035\u2039\u203B\u2044\u2045\u2046"+
"\u2047\u205F\u2060\u2065\u2066\u2067\u2068\u2069\u206A\u2070"+"\u2071\u2074\u207A\u207C\u207D\u207E\u207F\u2080\u208A\u208C"+
"\u208D\u208E\u208F\u20A0\u20D0\u20F1\u2100\u2102\u2103\u2107"+"\u2108\u210A\u2114\u2115\u2116\u2119\u211E\u2124\u2125\u2126"+
"\u2127\u2128\u2129\u212A\u212E\u212F\u213A\u213C\u2140\u2145"+"\u214A\u214E\u2150\u2160\u2189\u218C\u2190\u2208\u220E\u2212"+
"\u2213\u2214\u2215\u2216\u223C\u223E\u2243\u2244\u2252\u2256"+"\u2264\u226C\u226E\u228C\u228F\u2293\u2298\u2299\u22A2\u22A4"+
"\u22A6\u22A7\u22A8\u22AA\u22AB\u22AC\u22B0\u22B8\u22C9\u22CE"+"\u22D0\u22D2\u22D6\u22EE\u22F0\u22F5\u22F6\u22F8\u22FA\u22FF"+
"\u2308\u2309\u230A\u230B\u230C\u2329\u232A\u232B\u2336\u237B"+"\u2395\u2396\u2427\u2440\u244B\u2460\u2488\u249C\u24EA\u26AC"+
"\u26AD\u2768\u2769\u276A\u276B\u276C\u276D\u276E\u276F\u2770"+"\u2771\u2772\u2773\u2774\u2775\u2776\u27C3\u27C5\u27C6\u27C7"+
"\u27C8\u27CA\u27CB\u27CC\u27CD\u27CE\u27D5\u27D7\u27DD\u27DF"+"\u27E2\u27E6\u27E7\u27E8\u27E9\u27EA\u27EB\u27EC\u27ED\u27EE"+
"\u27EF\u27F0\u2800\u2900\u2983\u2984\u2985\u2986\u2987\u2988"+"\u2989\u298A\u298B\u298C\u298D\u298E\u298F\u2990\u2991\u2992"+
"\u2993\u2994\u2995\u2996\u2997\u2998\u2999\u29B8\u29B9\u29C0"+"\u29C2\u29C4\u29C6\u29CF\u29D3\u29D4\u29D6\u29D8\u29D9\u29DA"+
"\u29DB\u29DC\u29F5\u29F6\u29F8\u29FA\u29FC\u29FD\u29FE\u2A2B"+"\u2A2F\u2A34\u2A36\u2A3C\u2A3E\u2A64\u2A66\u2A79\u2A7B\u2A7D"+
"\u2A85\u2A8B\u2A8D\u2A91\u2A9D\u2AA1\u2AA3\u2AA6\u2AAE\u2AAF"+"\u2AB1\u2AB3\u2AB5\u2ABB\u2AC7\u2ACD\u2AD7\u2ADE\u2ADF\u2AE3"+
"\u2AE6\u2AEC\u2AEE\u2AF7\u2AFB\u2B74\u2B76\u2B96\u2B98\u2BBA"+"\u2BBD\u2BC9\u2BCA\u2BD3\u2BEC\u2BF0\u2CE5\u2CEB\u2CEF\u2CF2"+
"\u2CF9\u2D00\u2D7F\u2D80\u2DE0\u2E00\u2E02\u2E06\u2E09\u2E0B"+"\u2E0C\u2E0E\u2E1C\u2E1E\u2E20\u2E22\u2E23\u2E24\u2E25\u2E26"+
"\u2E27\u2E28\u2E29\u2E2A\u2E4A\u2E80\u2E9A\u2E9B\u2EF4\u2F00"+"\u2FD6\u2FF0\u2FFC\u3000\u3001\u3005\u3008\u3009\u300A\u300B"+
"\u300C\u300D\u300E\u300F\u3010\u3011\u3012\u3014\u3015\u3016"+"\u3017\u3018\u3019\u301A\u301B\u301C\u3021\u302A\u302E\u3030"+
"\u3031\u3036\u3038\u303D\u3040\u3099\u309B\u309D\u30A0\u30A1"+"\u30FB\u30FC\u31C0\u31E4\u321D\u321F\u3250\u3260\u327C\u327F"+
"\u32B1\u32C0\u32CC\u32D0\u3377\u337B\u33DE\u33E0\u33FF\u3400"+"\u4DC0\u4E00\uA490\uA4C7\uA60D\uA610\uA66F\uA673\uA674\uA67E"+
"\uA680\uA69E\uA6A0\uA6F0\uA6F2\uA700\uA722\uA788\uA789\uA802"+"\uA803\uA806\uA807\uA80B\uA80C\uA825\uA827\uA828\uA82C\uA838"+
"\uA83A\uA874\uA878\uA8C4\uA8C6\uA8E0\uA8F2\uA926\uA92E\uA947"+"\uA952\uA980\uA983\uA9B3\uA9B4\uA9B6\uA9BA\uA9BC\uA9BD\uA9E5"+
"\uA9E6\uAA29\uAA2F\uAA31\uAA33\uAA35\uAA37\uAA43\uAA44\uAA4C"+"\uAA4D\uAA7C\uAA7D\uAAB0\uAAB1\uAAB2\uAAB5\uAAB7\uAAB9\uAABE"+
"\uAAC0\uAAC1\uAAC2\uAAEC\uAAEE\uAAF6\uAAF7\uABE5\uABE6\uABE8"+"\uABE9\uABED\uABEE\uFB1D\uFB1E\uFB1F\uFB29\uFB2A\uFB50\uFD3E"+
"\uFD40\uFDD0\uFDF0\uFDFD\uFDFE\uFE00\uFE10\uFE1A\uFE20\uFE30"+"\uFE50\uFE51\uFE52\uFE53\uFE54\uFE55\uFE56\uFE59\uFE5A\uFE5B"+
"\uFE5C\uFE5D\uFE5E\uFE5F\uFE60\uFE62\uFE64\uFE66\uFE67\uFE68"+"\uFE69\uFE6B\uFE6C\uFE70\uFEFF\uFF00\uFF01\uFF03\uFF06\uFF08"+
"\uFF09\uFF0A\uFF0B\uFF0C\uFF0D\uFF0E\uFF10\uFF1A\uFF1B\uFF1C"+"\uFF1D\uFF1E\uFF1F\uFF21\uFF3B\uFF3C\uFF3D\uFF3E\uFF41\uFF5B"+
"\uFF5C\uFF5D\uFF5E\uFF5F\uFF60\uFF61\uFF62\uFF63\uFF64\uFF66"+"\uFFE0\uFFE2\uFFE5\uFFE7\uFFE8\uFFEF\uFFF9\uFFFC\uFFFE\uFFFF";
var tW="\x0A\x0C\x0B\x0C\x0D\x0B\x0A\x0B\x0C\x0D\x0E\x06\x0E"+"\x2E\x4E\x0E\x05\x08\x05\x08\x04\x08\x0E\x6E\x0E\x6E"+
"\x0E\x01\x2E\x0E\x4E\x0E\x01\x2E\x0E\x4E\x0E\x0A\x0B"+"\x0A\x08\x0E\x06\x0E\x01\x6E\x0E\x8A\x0E\x06\x04\x0E"+
"\x01\x0E\x04\x01\x6E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+"\x0E\x01\x0E\x01\x0E\x01\x0E\x89\x01\x0E\x01\x0E\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x89\x01\x0E\x01\x0E\x06\x02"+"\x89\x02\x89\x02\x89\x02\x89\x02\x89\x02\x07\x0E\x03"+
"\x06\x03\x08\x03\x0E\x89\x03\x83\x03\x1A\x03\x18\x1A"+"\x18\x1A\x18\x1A\x18\x1A\x1B\x1A\x18\x1A\x89\x07\x06"+
"\x07\x03\x1A\x89\x18\x03\x18\x1A\x18\x1A\x18\x1A\x18"+"\x1A\x18\x1A\x18\x1A\x18\x03\x18\x89\x07\x0E\x89\x03"+
"\x89\x0E\x89\x18\x04\x1A\x03\x1A\x03\x83\x18\x89\x1A"+"\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x89\x03"+
"\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x18\x1A\x03"+"\x89\x03\x02\x89\x02\x0E\x02\x89\x02\x89\x02\x89\x02"+
"\x89\x02\x89\x02\x1A\x03\x1A\x03\x18\x1A\x18\x03\x02"+"\x1A\x18\x03\x18\x1A\x18\x1A\x03\x1A\x18\x1A\x03\x89"+
"\x07\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x06"+
"\x01\x06\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x89\x01\x06\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x0E\x06\x0E\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x0E\x01\x89\x01\x89\x01\x81"+
"\x01\x81\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x06\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x2E\x4E\x2E\x4E\x01\x89"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x0E\x01\x0E\x01"+"\x0D\x01\x2E\x4E\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x89\x01\x89\x01\x06\x01\x89\x01\x0E"+"\x01\x0E\x89\x0A\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x0E\x01\x0E\x01\x0E\x01\x89\x01\x89"+"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0D"+"\x8A\x0A\x8A\x81\x82\x0E\x0D\x0B\x8F\x91\x93\x90\x92"+
"\x08\x06\x0E\x6E\x0E\x08\x2E\x4E\x0E\x0D\x8A\x01\x14"+"\x15\x16\x17\x8A\x04\x01\x04\x05\x0E\x2E\x4E\x01\x04"+
"\x05\x0E\x2E\x4E\x01\x06\x89\x01\x0E\x01\x0E\x01\x0E"+"\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
"\x06\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E"+"\x6E\x0E\x05\x06\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
"\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E"+"\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
"\x6E\x0E\x6E\x0E\x2E\x4E\x2E\x4E\x0E\x2E\x4E\x0E\x01"+"\x0E\x01\x0E\x01\x0E\x01\x0E\x04\x01\x0E\x01\x0E\x2E"+
"\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+"\x0E\x6E\x2E\x4E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+
"\x6E\x0E\x6E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+"\x0E\x01\x0E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
"\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x0E"+"\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x2E\x4E\x2E"+
"\x4E\x0E\x6E\x0E\x6E\x0E\x2E\x4E\x0E\x6E\x0E\x6E\x0E"+"\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E"+
"\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E"+"\x6E\x0E\x6E\x0E\x6E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x89\x01\x0E\x01\x89\x01\x89"+"\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x0E\x6E\x2E\x4E\x2E"+
"\x4E\x2E\x4E\x2E\x4E\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+"\x0E\x01\x0D\x0E\x01\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E"+
"\x2E\x4E\x0E\x2E\x4E\x2E\x4E\x2E\x4E\x2E\x4E\x0E\x01"+"\x89\x01\x0E\x01\x0E\x01\x0E\x01\x89\x0E\x01\x0E\x01"+
"\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E"+"\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01\x0E\x01"+
"\x89\x0E\x89\x0E\x01\x89\x01\x89\x01\x0E\x01\x0E\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x0E\x01\x06\x01\x0E"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89"+
"\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01"+"\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x89\x01\x02"+
"\x89\x02\x05\x02\x03\x0E\x03\x01\x03\x0E\x03\x89\x0E"+"\x01\x89\x0E\x08\x0E\x08\x01\x0E\x08\x0E\x2E\x4E\x2E"+
"\x4E\x2E\x4E\x06\x0E\x05\x6E\x0E\x01\x0E\x06\x0E\x01"+"\x03\x8A\x01\x0E\x06\x0E\x2E\x4E\x0E\x05\x08\x05\x08"+
"\x04\x08\x0E\x6E\x0E\x6E\x0E\x01\x2E\x0E\x4E\x0E\x01"+"\x2E\x0E\x4E\x0E\x2E\x4E\x0E\x2E\x4E\x0E\x01\x06\x0E"+
"\x06\x01\x0E\x01\x8E\x0E\x01\x01";var tT="\u0028\u0029\u0029\u0028\u003C\u003E\u003E\u003C\u005B\u005D"+
"\u005D\u005B\u007B\u007D\u007D\u007B\u00AB\u00BB\u00BB\u00AB"+"\u0F3A\u0F3B\u0F3B\u0F3A\u0F3C\u0F3D\u0F3D\u0F3C\u169B\u169C"+
"\u169C\u169B\u2039\u203A\u203A\u2039\u2045\u2046\u2046\u2045"+"\u207D\u207E\u207E\u207D\u208D\u208E\u208E\u208D\u2208\u220B"+
"\u2209\u220C\u220A\u220D\u220B\u2208\u220C\u2209\u220D\u220A"+"\u2215\u29F5\u223C\u223D\u223D\u223C\u2243\u22CD\u2252\u2253"+
"\u2253\u2252\u2254\u2255\u2255\u2254\u2264\u2265\u2265\u2264"+"\u2266\u2267\u2267\u2266\u2268\u2269\u2269\u2268\u226A\u226B"+
"\u226B\u226A\u226E\u226F\u226F\u226E\u2270\u2271\u2271\u2270"+"\u2272\u2273\u2273\u2272\u2274\u2275\u2275\u2274\u2276\u2277"+
"\u2277\u2276\u2278\u2279\u2279\u2278\u227A\u227B\u227B\u227A"+"\u227C\u227D\u227D\u227C\u227E\u227F\u227F\u227E\u2280\u2281"+
"\u2281\u2280\u2282\u2283\u2283\u2282\u2284\u2285\u2285\u2284"+"\u2286\u2287\u2287\u2286\u2288\u2289\u2289\u2288\u228A\u228B"+
"\u228B\u228A\u228F\u2290\u2290\u228F\u2291\u2292\u2292\u2291"+"\u2298\u29B8\u22A2\u22A3\u22A3\u22A2\u22A6\u2ADE\u22A8\u2AE4"+
"\u22A9\u2AE3\u22AB\u2AE5\u22B0\u22B1\u22B1\u22B0\u22B2\u22B3"+"\u22B3\u22B2\u22B4\u22B5\u22B5\u22B4\u22B6\u22B7\u22B7\u22B6"+
"\u22C9\u22CA\u22CA\u22C9\u22CB\u22CC\u22CC\u22CB\u22CD\u2243"+"\u22D0\u22D1\u22D1\u22D0\u22D6\u22D7\u22D7\u22D6\u22D8\u22D9"+
"\u22D9\u22D8\u22DA\u22DB\u22DB\u22DA\u22DC\u22DD\u22DD\u22DC"+"\u22DE\u22DF\u22DF\u22DE\u22E0\u22E1\u22E1\u22E0\u22E2\u22E3"+
"\u22E3\u22E2\u22E4\u22E5\u22E5\u22E4\u22E6\u22E7\u22E7\u22E6"+"\u22E8\u22E9\u22E9\u22E8\u22EA\u22EB\u22EB\u22EA\u22EC\u22ED"+
"\u22ED\u22EC\u22F0\u22F1\u22F1\u22F0\u22F2\u22FA\u22F3\u22FB"+"\u22F4\u22FC\u22F6\u22FD\u22F7\u22FE\u22FA\u22F2\u22FB\u22F3"+
"\u22FC\u22F4\u22FD\u22F6\u22FE\u22F7\u2308\u2309\u2309\u2308"+"\u230A\u230B\u230B\u230A\u2329\u232A\u232A\u2329\u2768\u2769"+
"\u2769\u2768\u276A\u276B\u276B\u276A\u276C\u276D\u276D\u276C"+"\u276E\u276F\u276F\u276E\u2770\u2771\u2771\u2770\u2772\u2773"+
"\u2773\u2772\u2774\u2775\u2775\u2774\u27C3\u27C4\u27C4\u27C3"+"\u27C5\u27C6\u27C6\u27C5\u27C8\u27C9\u27C9\u27C8\u27CB\u27CD"+
"\u27CD\u27CB\u27D5\u27D6\u27D6\u27D5\u27DD\u27DE\u27DE\u27DD"+"\u27E2\u27E3\u27E3\u27E2\u27E4\u27E5\u27E5\u27E4\u27E6\u27E7"+
"\u27E7\u27E6\u27E8\u27E9\u27E9\u27E8\u27EA\u27EB\u27EB\u27EA"+"\u27EC\u27ED\u27ED\u27EC\u27EE\u27EF\u27EF\u27EE\u2983\u2984"+
"\u2984\u2983\u2985\u2986\u2986\u2985\u2987\u2988\u2988\u2987"+"\u2989\u298A\u298A\u2989\u298B\u298C\u298C\u298B\u298D\u2990"+
"\u298E\u298F\u298F\u298E\u2990\u298D\u2991\u2992\u2992\u2991"+"\u2993\u2994\u2994\u2993\u2995\u2996\u2996\u2995\u2997\u2998"+
"\u2998\u2997\u29B8\u2298\u29C0\u29C1\u29C1\u29C0\u29C4\u29C5"+"\u29C5\u29C4\u29CF\u29D0\u29D0\u29CF\u29D1\u29D2\u29D2\u29D1"+
"\u29D4\u29D5\u29D5\u29D4\u29D8\u29D9\u29D9\u29D8\u29DA\u29DB"+"\u29DB\u29DA\u29F5\u2215\u29F8\u29F9\u29F9\u29F8\u29FC\u29FD"+
"\u29FD\u29FC\u2A2B\u2A2C\u2A2C\u2A2B\u2A2D\u2A2E\u2A2E\u2A2D"+"\u2A34\u2A35\u2A35\u2A34\u2A3C\u2A3D\u2A3D\u2A3C\u2A64\u2A65"+
"\u2A65\u2A64\u2A79\u2A7A\u2A7A\u2A79\u2A7D\u2A7E\u2A7E\u2A7D"+"\u2A7F\u2A80\u2A80\u2A7F\u2A81\u2A82\u2A82\u2A81\u2A83\u2A84"+
"\u2A84\u2A83\u2A8B\u2A8C\u2A8C\u2A8B\u2A91\u2A92\u2A92\u2A91"+"\u2A93\u2A94\u2A94\u2A93\u2A95\u2A96\u2A96\u2A95\u2A97\u2A98"+
"\u2A98\u2A97\u2A99\u2A9A\u2A9A\u2A99\u2A9B\u2A9C\u2A9C\u2A9B"+"\u2AA1\u2AA2\u2AA2\u2AA1\u2AA6\u2AA7\u2AA7\u2AA6\u2AA8\u2AA9"+
"\u2AA9\u2AA8\u2AAA\u2AAB\u2AAB\u2AAA\u2AAC\u2AAD\u2AAD\u2AAC"+"\u2AAF\u2AB0\u2AB0\u2AAF\u2AB3\u2AB4\u2AB4\u2AB3\u2ABB\u2ABC"+
"\u2ABC\u2ABB\u2ABD\u2ABE\u2ABE\u2ABD\u2ABF\u2AC0\u2AC0\u2ABF"+"\u2AC1\u2AC2\u2AC2\u2AC1\u2AC3\u2AC4\u2AC4\u2AC3\u2AC5\u2AC6"+
"\u2AC6\u2AC5\u2ACD\u2ACE\u2ACE\u2ACD\u2ACF\u2AD0\u2AD0\u2ACF"+"\u2AD1\u2AD2\u2AD2\u2AD1\u2AD3\u2AD4\u2AD4\u2AD3\u2AD5\u2AD6"+
"\u2AD6\u2AD5\u2ADE\u22A6\u2AE3\u22A9\u2AE4\u22A8\u2AE5\u22AB"+"\u2AEC\u2AED\u2AED\u2AEC\u2AF7\u2AF8\u2AF8\u2AF7\u2AF9\u2AFA"+
"\u2AFA\u2AF9\u2E02\u2E03\u2E03\u2E02\u2E04\u2E05\u2E05\u2E04"+"\u2E09\u2E0A\u2E0A\u2E09\u2E0C\u2E0D\u2E0D\u2E0C\u2E1C\u2E1D"+
"\u2E1D\u2E1C\u2E20\u2E21\u2E21\u2E20\u2E22\u2E23\u2E23\u2E22"+"\u2E24\u2E25\u2E25\u2E24\u2E26\u2E27\u2E27\u2E26\u2E28\u2E29"+
"\u2E29\u2E28\u3008\u3009\u3009\u3008\u300A\u300B\u300B\u300A"+"\u300C\u300D\u300D\u300C\u300E\u300F\u300F\u300E\u3010\u3011"+
"\u3011\u3010\u3014\u3015\u3015\u3014\u3016\u3017\u3017\u3016"+"\u3018\u3019\u3019\u3018\u301A\u301B\u301B\u301A\uFE59\uFE5A"+
"\uFE5A\uFE59\uFE5B\uFE5C\uFE5C\uFE5B\uFE5D\uFE5E\uFE5E\uFE5D"+"\uFE64\uFE65\uFE65\uFE64\uFF08\uFF09\uFF09\uFF08\uFF1C\uFF1E"+
"\uFF1E\uFF1C\uFF3B\uFF3D\uFF3D\uFF3B\uFF5B\uFF5D\uFF5D\uFF5B"+"\uFF5F\uFF60\uFF60\uFF5F\uFF62\uFF63\uFF63\uFF62";
var tU=[0x0621,"\u0000\u0000\u0000",0x0622,"\u0000\u0000\uFE82",0x0623,"\u0000\u0000\uFE84"
,0x0624,"\u0000\u0000\uFE86",0x0625,"\u0000\u0000\uFE88",0x0626,"\uFE8B\uFE8C\uFE8A"
,0x0627,"\u0000\u0000\uFE8E",0x0628,"\uFE91\uFE92\uFE90",0x0629,"\u0000\u0000\uFE94"
,0x062A,"\uFE97\uFE98\uFE96",0x062B,"\uFE9B\uFE9C\uFE9A",0x062C,"\uFE9F\uFEA0\uFE9E"
,0x062D,"\uFEA3\uFEA4\uFEA2",0x062E,"\uFEA7\uFEA8\uFEA6",0x062F,"\u0000\u0000\uFEAA"
,0x0630,"\u0000\u0000\uFEAC",0x0631,"\u0000\u0000\uFEAE",0x0632,"\u0000\u0000\uFEB0"
,0x0633,"\uFEB3\uFEB4\uFEB2",0x0634,"\uFEB7\uFEB8\uFEB6",0x0635,"\uFEBB\uFEBC\uFEBA"
,0x0636,"\uFEBF\uFEC0\uFEBE",0x0637,"\uFEC3\uFEC4\uFEC2",0x0638,"\uFEC7\uFEC8\uFEC6"
,0x0639,"\uFECB\uFECC\uFECA",0x063A,"\uFECF\uFED0\uFECE",0x0641,"\uFED3\uFED4\uFED2"
,0x0642,"\uFED7\uFED8\uFED6",0x0643,"\uFEDB\uFEDC\uFEDA",0x0644,"\uFEDF\uFEE0\uFEDE"
,0x0645,"\uFEE3\uFEE4\uFEE2",0x0646,"\uFEE7\uFEE8\uFEE6",0x0647,"\uFEEB\uFEEC\uFEEA"
,0x0648,"\u0000\u0000\uFEEE",0x0649,"\uFBE8\uFBE9\uFEF0",0x064A,"\uFEF3\uFEF4\uFEF2"
,0x0671,"\u0000\u0000\uFB51",0x0677,"\u0000\u0000\u0000",0x0679,"\uFB68\uFB69\uFB67"
,0x067A,"\uFB60\uFB61\uFB5F",0x067B,"\uFB54\uFB55\uFB53",0x067E,"\uFB58\uFB59\uFB57"
,0x067F,"\uFB64\uFB65\uFB63",0x0680,"\uFB5C\uFB5D\uFB5B",0x0683,"\uFB78\uFB79\uFB77"
,0x0684,"\uFB74\uFB75\uFB73",0x0686,"\uFB7C\uFB7D\uFB7B",0x0687,"\uFB80\uFB81\uFB7F"
,0x0688,"\u0000\u0000\uFB89",0x068C,"\u0000\u0000\uFB85",0x068D,"\u0000\u0000\uFB83"
,0x068E,"\u0000\u0000\uFB87",0x0691,"\u0000\u0000\uFB8D",0x0698,"\u0000\u0000\uFB8B"
,0x06A4,"\uFB6C\uFB6D\uFB6B",0x06A6,"\uFB70\uFB71\uFB6F",0x06A9,"\uFB90\uFB91\uFB8F"
,0x06AD,"\uFBD5\uFBD6\uFBD4",0x06AF,"\uFB94\uFB95\uFB93",0x06B1,"\uFB9C\uFB9D\uFB9B"
,0x06B3,"\uFB98\uFB99\uFB97",0x06BA,"\u0000\u0000\uFB9F",0x06BB,"\uFBA2\uFBA3\uFBA1"
,0x06BE,"\uFBAC\uFBAD\uFBAB",0x06C0,"\u0000\u0000\uFBA5",0x06C1,"\uFBA8\uFBA9\uFBA7"
,0x06C5,"\u0000\u0000\uFBE1",0x06C6,"\u0000\u0000\uFBDA",0x06C7,"\u0000\u0000\uFBD8"
,0x06C8,"\u0000\u0000\uFBDC",0x06C9,"\u0000\u0000\uFBE3",0x06CB,"\u0000\u0000\uFBDF"
,0x06CC,"\uFBFE\uFBFF\uFBFD",0x06D0,"\uFBE6\uFBE7\uFBE5",0x06D2,"\u0000\u0000\uFBAF"
,0x06D3,"\u0000\u0000\uFBB1",0xFEF5,"\u0000\u0000\uFEF6",0xFEF7,"\u0000\u0000\uFEF8"
,0xFEF9,"\u0000\u0000\uFEFA",0xFEFB,"\u0000\u0000\uFEFC"];function vm(eB){var t=
0;var min=0;var i=tV;var max=i.length-1;while(max>=min){t=(max+min)>>1;if(eB===i.
charCodeAt(t))break;else if(eB<i.charCodeAt(t))max=t-1;else if((eB>=i.charCodeAt(
t+1)))min=t+1;else break;}return tW.charCodeAt(t);}function q9(eB){var t=0;var min=
0;var i=tT;var max=(i.length>>1)-1;var ed=-1;while(max>=min){t=(max+min)>>1;ed=eB-
i.charCodeAt(t*2);if(!ed)return i.charCodeAt(t*2+1);if(ed<0)max=t-1;else min=t+1;
}return 0;}function oP(eB){var t=0;var min=0;var i=tU;var max=(i.length>>1)-1;var
ed=-1;while(max>=min){t=(max+min)>>1;ed=eB-i[t*2];if(!ed)return i[t*2+1];if(ed<0
)max=t-1;else min=t+1;}return"";}function t7(bR,bV,pH){var g2=0;var bi=bR[bV*4];
if(bi!==23)return 0;for(;bV>=pH;bV--){bi=bR[bV*4];if(bi===23)g2--;if(g2&&((bi===
20)||(bi===21)||(bi===22)))if(++g2===0)return bV;}return 0;}function oN(bR,bV,gn
){var g2=0;var bi=bR[bV*4];if((bi!==20)&&(bi!==21)&&(bi!==22))return 0;for(;bV<gn;
bV++){bi=bR[bV*4];if((bi===20)||(bi===21)||(bi===22))g2++;else if(g2&&(bi===23)){
if(g2===1)return bV;if(g2>1)g2--;}}return 0;}function q7(bR,bV,gn){for(;bV<gn;bV++
){var bi=bR[bV*4];if((bi===1)||(bi===2)||(bi===3))return bV;if((bi!==20)&&(bi!==
21)&&(bi!==22))continue;if(!(bV=oN(bR,bV,gn)))bV=gn;}return 0;}function oM(bR,bV
,gn){var av=bR[bV*4+1];if(bV>=gn)return 0;while((bV<gn)&&(bR[bV*4+1]===av))bV++;
return bV-1;}function vD(lG,fb,nr,bR,m,l,wL,wM,rV){var gU=[];var n4=[];var cs=-1;
var ao=0;var co=0;for(;fb<nr;fb++){var a5=lG[fb];while((rV>0)&&((a5+co)>=wL[wM-co
])){co++;rV--;}if(bR[a5*4]!==14)continue;var bJ=bR[a5*4+2];if(bJ===1){if(cs>=(63-
1))break;n4.push(a5);gU.push(q9(m[l+a5-3+co]));cs++;}else if(bJ===2){var aX=m[l+
a5-3+co];var gy=cs;while((gy>0)&&(aX!==gU[gy])&&((aX!==0x232A)||(gU[gy]!==0x3009
))&&((aX!==0x3009)||(gU[gy]!==0x232A)))gy--;if((gy>=0)&&((aX===gU[gy])||((aX===0x232A
)&&(gU[gy]===0x3009))||((aX===0x3009)&&(gU[gy]===0x232A)))){while(cs>gy){bR[n4.pop(
)*4+2]=3;gU.pop();cs--;}gU.pop();n4.pop();cs--;ao++;}else bR[a5*4+2]=3;}}while(cs>=
0){bR[n4.pop()*4+2]=3;cs--;}for(;fb<nr;fb++){var a5=lG[fb]*4;if((bR[a5]===14)&&((
bR[a5+2]===1)||(bR[a5+2]===2)))bR[a5+2]=3;}return ao;}function t4(lG,fb,nr,bR){var
a5=lG[fb]*4;var ao=1;if((bR[a5]!==14)||(bR[a5+2]!==1))return 0;for(fb++;fb<nr;fb++
){var a5=lG[fb]*4;var type=bR[a5];var bJ=bR[a5+2];if((type===14)&&(bJ===1))ao++;
else if((type===14)&&(bJ===2))if(!--ao)return fb;}return 0;}function vl(bR,bV,pH
,pG){var av=bR[bV*4+1];var ei=pG;if(bV>pH)ei=bR[bV*4-3];if(ei>av)av=ei;if(av&1)return 2;
else return 1;}function vk(bR,bV,gn,pG){var av=bR[bV*4+1];var qe=pG;var type=bR[
bV*4];if((bV<(gn-1))&&(type!==21)&&(type!==20)&&(type!==22))qe=bR[bV*4+5];if(qe>
av)av=qe;if(av&1)return 2;else return 1;}e.v3=function(pD){if(pD<=0)return null;
return{Data:new Uint8Array((pD+4)*4),vs:pD,gJ:0,q_:false,jf:0};};e.rB=function(aB
){};e.zZ=function(aB){return aB&&aB.q_;};e.v2=function(aB){return aB&&(aB.jf===1
);};e.jT=function(aB,bK){if(!aB)return 0;if((bK<0)||(bK>=aB.gJ))return aB.jf;return aB.
Data[bK*4+13];};e.rv=function(aB,m,l,ae,pj){var i=aB?aB.Data:null;var y3=aB?aB.vs:
0;var length=(ae<0)?(m.length-l-1):ae;var f4=pj>0;var t=0;var hE=12;if(y3<length
)return false;for(;t<length;t++){var p2=vm(m[l+t]);var type=p2&31;var pK=p2&96;var
yW=p2&128;var bJ=0;if(type===24)bJ=8;else if(type===25)bJ=9;else if(type===26)bJ=
10;else if(type===27)bJ=11;else if(pK===32)bJ=1;else if(pK===64)bJ=2;else if(pK===
96)bJ=3;else if(type===9)bJ=4;else if(type===13)bJ=5;else if(type===12)bJ=6;else
if(type===11)bJ=6;else if((type===21)||(type===20)||(type===22)||(type===23))bJ=
7;else if(yW)bJ=12;if((type>=24)&&(type<=27))type=3;if(!f4&&((type===3)||(type===
2)||(type===17)||(type===18)||(type===21)))f4=1;i[hE++]=type;i[hE++]=0;i[hE++]=bJ;
i[hE++]=0;}i[hE++]=0;i[hE++]=0;i[hE++]=0;i[hE++]=0;aB.gJ=length;aB.q_=f4;aB.jf=(
pj>0)?1:0;if(!f4)return false;if((pj<0)&&(t=q7(i,3,length+3)))aB.jf=(i[t*4]===1)?
0:1;return true;};e.rx=function(aB,m,l){var cT=[];var length=aB?aB.gJ:0;var iX=aB?
aB.jf:0;var i=aB?aB.Data:null;var dR=3+length;var a5=new Uint32Array(length+2);var
cs=0;var iW=0;var ky=0;var qG=0;var iL=0;var v;var ce;cT.push({jd:iX,hf:0,mn:false
});for(v=3;v<dR;v++){var bi=i[v*4];if(bi===22){var tn=oN(i,v,dR);var h=q7(i,v+1,
tn?tn:dR);if(h&&((i[h*4]===3)||(i[h*4]===2)))bi=21;else bi=20;}if((bi===17)||(bi===
15)||(bi===18)||(bi===16)){var av=cT[cs].jd;var type=0;if((bi===17)||(bi===18))av+=(
av&1)?2:1;else av+=(av&1)?1:2;if(bi===18)type=2;if(bi===16)type=1;if((av<=125)&&
!iW&&!ky){cs++;cT.push({jd:av,hf:type,mn:false});}if((av>125)&&!iW)ky++;}else if((
bi===21)||(bi===20)){var av=cT[cs].jd;i[v*4+1]=av;if(cT[cs].hf)i[v*4]=cT[cs].hf;
if(bi===21)av+=(av&1)?2:1;else av+=(av&1)?1:2;if((av<=125)&&!iW&&!ky){qG++;cs++;
cT.push({jd:av,hf:0,mn:true});}else iW++;}else if(bi===23){if(iW)iW--;else if(qG
){ky=0;while(!cT[cs].mn){cT.pop();cs--;}cT.pop();cs--;qG--;}i[v*4+1]=cT[cs].jd;if(
cT[cs].hf)i[v*4]=cT[cs].hf;}else if(bi===19){if(!iW){if(ky)ky--;else if((cs&&!cT[
cs].mn)){cT.pop();cs--;}}}else if((bi!==11)&&(bi!==10)){i[v*4+1]=cT[cs].jd;if(cT[
cs].hf)i[v*4]=cT[cs].hf;}}for(ce=3,v=3;v<dR;v++,ce++){var bi=i[v*4];if((bi===17)||(
bi===15)||(bi===18)||(bi===16)||(bi===19)||(bi===10)){a5[length+2-++iL]=v;ce--;}
else if(ce<v){i[ce*4]=i[v*4];i[ce*4+1]=i[v*4+1];i[ce*4+2]=i[v*4+2];}}dR-=iL;for(
v=3;v<dR;){var bl=0;var gx;var gs;var l6;var kq;var eK;i[4]=0;i[5]=0;i[6]=0;i[8]=
0;i[9]=0;i[10]=0;if((i[v*4]===23)&&t7(i,v,3)){v=oM(i,v,dR)+1;continue;}i[4]=vl(i
,v,3,iX);a5[bl++]=1;kq=oM(i,v,dR);for(;v<=kq;v++)a5[bl++]=v;while(l6=oN(i,kq,dR)
){kq=oM(i,l6,dR);for(;l6<=kq;l6++)a5[bl++]=l6;}i[8]=vk(i,kq,dR,iX);a5[bl++]=2;gx=
bl;for(eK=i[4],bl=1;bl<gx;bl++){var b0=a5[bl];if(i[b0*4]===9){var kz=i[a5[bl-1]*
4];if((kz===21)||(kz===20)||(kz===22)||(kz===23))kz=14;i[b0*4]=kz;}}for(eK=i[4],
bl=1;bl<gx;bl++){var b0=a5[bl];var n1=a5[bl-1];var type=i[b0*4];if((type===1)||(
type===2)||(type===3))eK=type;if((type===4)&&(eK===3))type=i[b0*4]=7;if(type===3
)type=i[b0*4]=2;if((type===4)&&(i[n1*4]===5)&&(i[a5[bl-2]*4]===type))i[n1*4]=type;
if(((type===7)||(type===4))&&(i[n1*4]===8)&&(i[a5[bl-2]*4]===type))i[n1*4]=type;
}for(bl=1;bl<gx;bl++){var b0=a5[bl];var type=i[b0*4];if(type===4){var e0=bl-1;while(
i[a5[e0]*4]===6)i[a5[e0--]*4]=4;}if((type===6)&&(i[a5[bl-1]*4]===4))i[b0*4]=4;}for(
bl=1;bl<gx;bl++){var b0=a5[bl];var type=i[b0*4];if((type===6)||(type===5)||(type===
8))i[b0*4]=14;}for(eK=i[4],bl=1;bl<gx;bl++){var b0=a5[bl];var type=i[b0*4];if((type===
4)&&(eK===1))i[b0*4]=1;if((type===1)||(type===2)||(type===3))eK=type;}if(vD(a5,bl=
1,gx-1,i,m,l,a5,length+1,iL)){var f1=(i[a5[bl]*4+1]&1)?2:1;var eK=i[8];for(;bl<gx;
bl++){var kf=t4(a5,bl,gx,i);var e0=bl+1;var type=i[a5[bl]*4];var l9=0;var i4=0;var
kw=0;if((type===4)||(type===7))type=2;if((type===2)||(type===1))eK=type;if(!kf)continue;
for(;(e0<kf)&&(!l9||!i4);e0++){var oA=i[a5[e0]*4];if(oA===1)l9++;if(oA===2)i4++;
if(oA===7)i4++;if(oA===4)i4++;}if(((f1===1)&&l9)||((f1===2)&&i4)){i[a5[bl]*4]=f1;
i[a5[kf]*4]=f1;kw=f1;eK=f1;}else if((l9||i4)&&(eK!==f1)){i[a5[bl]*4]=eK;i[a5[kf]
*4]=eK;kw=eK;}else if(l9||i4){i[a5[bl]*4]=f1;i[a5[kf]*4]=f1;kw=f1;eK=f1;}if(kw){
for(e0=bl+1;i[a5[e0]*4+2]===4;e0++)i[a5[e0]*4]=kw;for(e0=kf+1;i[a5[e0]*4+2]===4;
e0++)i[a5[e0]*4]=kw;}}}for(gs=0,bl=1;bl<gx;bl++){var b0=a5[bl];var type=i[b0*4];
if(!gs&&((type===11)||(type===12)||(type===13)||(type===14)||(type===22)||(type===
20)||(type===21)||(type===23)))gs=bl;if(gs&&(type!==11)&&(type!==12)&&(type!==13
)&&(type!==14)&&(type!==22)&&(type!==20)&&(type!==21)&&(type!==23)){var hV=i[a5[
gs-1]*4];var oB=type;if((hV===4)||(hV===7))hV=2;if((oB===4)||(oB===7))oB=2;if((hV
!==oB)||((hV!==1)&&(hV!==2)))hV=(i[a5[gs]*4+1]&1)?2:1;for(;gs<bl;gs++)i[a5[gs]*4
]=hV;gs=0;}}}for(v=3;v<dR;v++){var type=i[v*4];if(i[v*4+1]&1)if((type===1)||(type===
4)||(type===7))i[v*4+1]++;else;else if(type===2)i[v*4+1]++;else if((type===4)||(
type===7))i[v*4+1]+=2;}for(v=dR-1,ce=v+iL;iL>0;v--,ce--){if(a5[length+2-iL]===ce
){var av=iX;var aX=m[l+ce-3];if((v>=3)&&(i[v*4+1]>av))av=i[v*4+1];if((ce<(dR-1))&&(
i[(ce+1)*4+1]>av))av=i[(ce+1)*4+1];if(aX===0x200D)i[ce*4+2]=11;else if(((aX<0x0000
)||(aX>0x0008))&&((aX<0x000E)||(aX>0x001B))&&((aX<0x007F)||(aX>0x0084))&&((aX<0x0086
)||(aX>0x009F))&&(aX!==0x180E)&&(aX!==0x200C))i[ce*4+2]=12;else i[ce*4+2]=0;i[ce
*4]=31;i[ce*4+1]=av;v++;iL--;dR++;}else if(ce>v){i[ce*4]=i[v*4];i[ce*4+1]=i[v*4+
1];i[ce*4+2]=i[v*4+2];}}};e.ru=function(aB,m,l,fu,hn){var length=aB?aB.gJ:0;var i=
aB?aB.Data:null;var dR=3+length;var v=3;var ce=3;var av=i[13];for(;(v<=dR);v++){
var hR=0;var b0=0;var iQ=0;if((av===i[v*4+1])&&(v<dR))continue;for(;(ce<v)||b0||
hR||iQ;ce++){var eX;var eY;if(ce<v){var bJ=i[ce*4+2];if((bJ===12)||(bJ===4))continue;
hR=b0;b0=iQ;iQ=ce;}else{hR=b0;b0=iQ;iQ=0;}if(av&1){eX=iQ;eY=hR;}else{eX=hR;eY=iQ;
}if(b0&&(i[b0*4+2]===8)){var t=b0-3;var aX=m[l+t];var g=oP(aX);var at=fu?hn[(fu[
l+t]>>12)&0xFF]:null;if(!at)at=hn[0];if(g.charCodeAt(2)&&eY&&((i[eY*4+2]===9)||(
i[eY*4+2]===10)||(i[eY*4+2]===11))&&(!at||this.jX(at,g.charCodeAt(2))))m[l+t]=g.
charCodeAt(2);}else if(b0&&(i[b0*4+2]===9)){var t=b0-3;var aX=m[l+t];var g=oP(aX
);var at=fu?hn[(fu[l+t]>>12)&0xFF]:null;if(!at)at=hn[0];if(g.charCodeAt(0)&&eX&&((
i[eX*4+2]===8)||(i[eX*4+2]===10)||(i[eX*4+2]===11))&&(!at||this.jX(at,g.charCodeAt(
0))))m[l+t]=g.charCodeAt(0);}else if(b0&&(i[b0*4+2]===10)){var t=b0-3;var aX=m[l+
t];var g=oP(aX);var at=fu?hn[(fu[l+t]>>12)&0xFF]:null;if(!at)at=hn[0];if(g.charCodeAt(
1)&&eY&&eX&&((i[eY*4+2]===9)||(i[eY*4+2]===10)||(i[eY*4+2]===11))&&((i[eX*4+2]===
8)||(i[eX*4+2]===10)||(i[eX*4+2]===11))){if(!at||this.jX(at,g.charCodeAt(1)))m[l+
t]=g.charCodeAt(1);}else if(g.charCodeAt(2)&&eY&&((i[eY*4+2]===9)||(i[eY*4+2]===
10)||(i[eY*4+2]===11))){if(!at||this.jX(at,g.charCodeAt(2)))m[l+t]=g.charCodeAt(
2);}else if(g.charCodeAt(0)&&eX&&((i[eX*4+2]===8)||(i[eX*4+2]===10)||(i[eX*4+2]===
11))){if(!at||this.jX(at,g.charCodeAt(0)))m[l+t]=g.charCodeAt(0);}}if(b0&&hR){var
ff=((av&1)?b0:hR)-3;var fD=((av&1)?hR:b0)-3;var sB=m[l+ff];var sC=m[l+fD];var fg=
0;if(sC===0xFEDF)switch(sB){case 0xFE82:fg=0xFEF5;break;case 0xFE84:fg=0xFEF7;break;
case 0xFE88:fg=0xFEF9;break;case 0xFE8E:fg=0xFEFB;break;}if(sC===0xFEE0)switch(sB
){case 0xFE82:fg=0xFEF6;break;case 0xFE84:fg=0xFEF8;break;case 0xFE88:fg=0xFEFA;
break;case 0xFE8E:fg=0xFEFC;break;}if(fg){var at=fu?hn[(fu[l+ff]>>12)&0xFF]:null;
if(!at)at=hn[0];if(at&&!this.jX(at,fg))fg=0;}if(fg){m[l+ff]=fg;m[l+fD]=0xFEFF;}}
}ce=v;av=i[v*4+1];}};e.rw=function(aB,m,l){var length=aB?aB.gJ:0;var i=aB?aB.Data:
null;var gY=3+length;var b3;if(!i)return;for(b3=gY-1;b3>=3;b3--){var bJ=i[b3*4+2
];if((i[b3*4+1]&1)&&((bJ===1)||(bJ===2)||(bJ===3))){var tm=q9(m[l+b3-3]);if(tm)m[
l+b3-3]=tm;}}};e.o5=function(aB,ht,iq){var i=aB?aB.Data:null;var ee=ht+3;var gY=
iq+3;var iX=aB?aB.jf:0;var pI=true;var b3;if(!i)return;for(b3=gY-1;b3>=ee;b3--){
var bJ=i[b3*4+2];if(bJ===6){i[b3*4+1]=iX;pI=true;}else if(pI&&((bJ===5)||(bJ===7
)))i[b3*4+1]=iX;else if(i[b3*4]!==31)pI=0;}};e.k9=function(aB,ht,iq,dV,hl){var cT=[
];var i=aB?aB.Data:null;var ee=ht+3;var gY=iq+3;var bf=ee;var av=0;var f9=0;var f8=
0;var b3;if(!i)return;for(b3=ee;b3<=gY;b3++){var lO=(b3<gY)?i[b3*4+1]:0;while((lO>
av)&&(av<(125+2))){cT.push(bf);bf=b3;av++;}while((lO<av)&&(av>0)){var l7=bf;bf=cT.
pop();av--;if((b3-l7)>1){var ty=l7-ee;var tz=b3-ee-1;if((ty===f9)&&(tz===f8)){f9=
0;f8=0;continue;}for(;f9<f8;f9++,f8--){var h=dV[f9+hl];dV[f9+hl]=dV[f8+hl];dV[f8+
hl]=h;}f9=ty;f8=tz;}}}for(;f9<f8;f9++,f8--){var h=dV[f9+hl];dV[f9+hl]=dV[f8+hl];
dV[f8+hl]=h;}};e.z0=function(aB,ht,iq,bK){var cT=[];var i=aB?aB.Data:null;var ee=
ht+3;var gY=iq+3;var bf=ee;var av=0;var b3;if(!i)return bK;for(b3=ee;b3<=gY;b3++
){var lO=(b3<gY)?i[b3*4+1]:0;while((lO>av)&&(av<(125+2))){cT.push(bf);bf=b3;av++;
}while((lO<av)&&(av>0)){var l7=bf;bf=cT.pop();av--;if((b3-l7)>1){var ff=l7-ee;var
fD=b3-ee-1;if((bK>=ff)&&(bK<=fD))bK=fD-(bK-ff);}}}return bK;};e.z1=function(aB,ht
,iq,bK){var qy=[];var pY=[];var i=aB?aB.Data:null;var ee=ht+3;var bf=0;var dQ=iq-
ht-1;var av=0;var t=0;if(!i)return bK;if(dQ>65535)return bK;while(bf<dQ){var sN=
i[(ee+bf)*4+1];var sM=i[(ee+dQ)*4+1];if((sN>av)&&(sM>av)&&(av<(125+2))){qy.push(
bf);pY.push(dQ);av++;}if(sN<=av)bf++;if(sM<=av)dQ--;}while((t<av)&&(bK>=qy[t])&&(
bK<=pY[t])){var w_=qy[t];var w9=pY[t];var ff=bK;var fD=bK;while((ff>w_)&&(i[(ee+
ff-1)*4+1]>t))ff--;while((fD<w9)&&(i[(ee+fD+1)*4+1]>t))fD++;bK=fD-(bK-ff);t++;}return bK;
};e.zY=function(aB,w7,wR){var i=aB?aB.Data:null;var a_=aB?aB.gJ:0;var t=0;while(
t<a_){w7[t]=i[t*4+12];wR[t]=i[t*4+13];t++;}};e.aac=function(n,ac,k,rQ,rR,bd,bg,an
){var b=this.ah;var ag=null;var g0=rQ[0];var g1=rQ[1];var kn=rR[0];var ko=rR[1];
var bA=kn;var bC=ko;var en=kn-g0;var ks=ko-g1;var s,q,x,w;if(n&&(ac>=0)&&(ac<n.NoOfFrames
)){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(!ag||(ag.aT.Format!==this._PIXEL_FORMAT_NATIVE
)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(Math.abs(kn-g0)>Math.abs(ko-g1)){if(bA>g0)bA--;if(bA<g0)bA++;}else{
if(bC>g1)bC--;if(bC<g1)bC++;}s=Math.max(k[0],Math.min(g0,bA),0);q=Math.max(k[1],
Math.min(g1,bC),0);x=Math.min(k[2],Math.max(g0,bA)+1,n.FrameSize[0]);w=Math.min(
k[3],Math.max(g1,bC)+1,n.FrameSize[1]);if((x<=s)||(w<=q))return;var dO=ag.aK[0];
var dP=ag.aK[1];var c=b.hW;var a7=b.kQ;var ao=2;bd=cU(bd);bg=cU(bg);c[0]=g0+dO+0.5;
c[1]=g1+dP+0.5;c[11]=kn+dO+0.5;c[12]=ko+dP+0.5;a7[5]=bd;a7[16]=bg;if(en>0)x+=0.5;
if(en<0)s-=0.5;if(ks>0)w+=0.5;if(ks<0)q-=0.5;if((g0<s)||(g0>x)||(g1<q)||(g1>w)||(
kn<s)||(kn>x)||(ko<q)||(ko>w)){ao=mm(c,a7,ao,true,s+dO);ao=mm(c,a7,ao,true,x+dO);
ao=qY(c,ao,s+dO,x+dO);ao=ml(c,a7,ao,true,q+dP);ao=ml(c,a7,ao,true,w+dP);ao=qX(c,
ao,q+dP,w+dP);if(ao!==2)return;}ex(b,ag.aT,b.jg);if(b.ct&&!an)b.disable(b.BLEND);
if(!b.ct&&an)b.enable(b.BLEND);b.ct=an;b.bufferSubData(b.ARRAY_BUFFER,0,b.dk);b.
drawArrays(b.LINES,0,ao);if(this.c5)fn(b);};e.fR=function(n,ac,k,f,am,aj,ai,al,an
){var b=this.ah;var ag=null;var s,q,x,w;if(n&&(ac>=0)&&(ac<n.NoOfFrames)){ac=n.ca?
n.ca[ac]:ac;ag=n.cB[ac];}if(!ag||(ag.aT.Format!==this._PIXEL_FORMAT_NATIVE)){console.
log("EmWi error: Invalid destination bitmap in the drawing operation.");return;}
s=Math.max(k[0],f[0],0);q=Math.max(k[1],f[1],0);x=Math.min(k[2],f[2],n.FrameSize[
0]);w=Math.min(k[3],f[3],n.FrameSize[1]);am=cU(am);aj=cU(aj);al=cU(al);ai=cU(ai);
var clear=!am&&!aj&&!al&&!ai;if((x<=s)||(w<=q)||(clear&&an))return;if(clear){var
c=b.hW;c[0]=c[22]=s+ag.aK[0];c[1]=c[12]=q+ag.aK[1];c[11]=c[33]=x+ag.aK[0];c[34]=
c[23]=w+ag.aK[1];if(b.ct&&!an)b.disable(b.BLEND);if(!b.ct&&an)b.enable(b.BLEND);
b.ct=an;ex(b,ag.aT,clear?b.kW:b.jg);b.bufferSubData(b.ARRAY_BUFFER,0,b.dk);b.drawArrays(
b.TRIANGLE_STRIP,0,4);if(this.c5)fn(b);return;}var i_=(am!==al)||(aj!==ai);var iM=(
am!==aj)||(al!==ai);var di=((am!==ai)||(aj!==al))&&((am!==aj)||(ai!==al));var zL=
i_&&((q!==f[1])||(w!==f[3]));var yT=iM&&((s!==f[0])||(x!==f[2]));if(zL){var cj=1
/(f[3]-f[1]);var a6=(q-f[1])*cj;var aS=(f[3]-w)*cj;if(am!==al){var d0=am;if(a6)am=
bp(d0,al,a6);if(aS)al=bp(al,d0,aS);}if(aj!==ai){var hD=aj;if(a6)aj=bp(hD,ai,a6);
if(aS)ai=bp(ai,hD,aS);}}if(yT){var cj=1/(f[2]-f[0]);var by=(s-f[0])*cj;var au=(f[
2]-x)*cj;if(am!==aj){var d0=am;if(by)am=bp(d0,aj,by);if(au)aj=bp(aj,d0,au);}if(al
!==ai){var hy=al;if(by)al=bp(hy,ai,by);if(au)ai=bp(ai,hy,au);}}var c=b.hW;var a7=
b.kQ;c[0]=c[22]=s+ag.aK[0];c[1]=c[12]=q+ag.aK[1];c[11]=c[33]=x+ag.aK[0];c[34]=c[
23]=w+ag.aK[1];a7[5]=am;a7[16]=aj;a7[38]=ai;a7[27]=al;if(di){c[6]=0;c[17]=1;c[7]=
0;c[18]=0;c[8]=1;c[19]=1;c[28]=0;c[39]=1;c[29]=1;c[40]=1;c[30]=1;c[41]=1;}if(b.ct&&
!an)b.disable(b.BLEND);if(!b.ct&&an)b.enable(b.BLEND);b.ct=an;ex(b,ag.aT,clear?b.
kW:(di?b.mz:b.jg));if(di){b.uniform4fv(b.da.k7,c$(am));b.uniform4fv(b.da.k8,c$(aj
));b.uniform4fv(b.da.k6,c$(ai));b.uniform4fv(b.da.k5,c$(al));}b.bufferSubData(b.
ARRAY_BUFFER,0,b.dk);b.drawArrays(b.TRIANGLE_STRIP,0,4);if(this.c5)fn(b);};e.rA=
function(n,ac,k,f,bY,bZ,bX,bW,am,aj,ai,al,an){var a9;var bitmap;var cz=[0,0];var
g8=[0,0];var aL=[0,0,0,0];var bn=[0,0];var iU;var iV;var iT;var iS;var aE;var d2=
Math.min(f[2]-f[0],f[3]-f[1]);if((an&&!((am|aj|al|ai)>>24))||(d2<=0)||(k[2]<=k[0
])||(k[3]<=k[1]))return;bY=Math.min(bY,d2>>1);bZ=Math.min(bZ,d2>>1);bW=Math.min(
bW,d2>>1);bX=Math.min(bX,d2>>1);bY=Math.max(bY,0);bZ=Math.max(bZ,0);bW=Math.max(
bW,0);bX=Math.max(bX,0);aE=Math.max(bY,bZ,bX,bW);if(aE<=0){this.fR(n,ac,k,f,am,aj
,ai,al,an);return;}iU=1+((90/Math.acos(1.0-(0.5/(bY+1))))|0);iV=1+((90/Math.acos(
1.0-(0.5/(bZ+1))))|0);iT=1+((90/Math.acos(1.0-(0.5/(bX+1))))|0);iS=1+((90/Math.acos(
1.0-(0.5/(bW+1))))|0);if(!(a9=this.k_(1)))return;if(!this.gM(a9,0,iU+iV+iT+iS+51
)){this.e6(a9);return;}this.dU(a9,0,aE-bX,aE-bX,bX,bX,0,90,iT);this.dU(a9,0,bW-aE
,aE-bW,bW,bW,90,180,iS);this.dU(a9,0,bY-aE,bY-aE,bY,bY,180,270,iU);this.dU(a9,0,
aE-bZ,bZ-aE,bZ,bZ,270,360,iV);this.jU(a9,0);cz[0]=cz[1]=aE;g8[0]=g8[1]=aE*2;if(!(
bitmap=this.m8(g8,a9,false,cz,true,false))){this.e6(a9);return;}this.e6(a9);aL[1
]=k[1];aL[0]=Math.max(k[0],f[0]+aE);aL[2]=Math.min(k[2],f[2]-aE);aL[3]=Math.min(
k[3],f[1]+aE);this.fR(n,ac,aL,f,am,aj,ai,al,an);aL[0]=k[0];aL[2]=k[2];aL[1]=Math.
max(k[1],f[1]+aE);aL[3]=Math.min(k[3],f[3]-aE);this.fR(n,ac,aL,f,am,aj,ai,al,an);
aL[3]=k[3];aL[0]=Math.max(k[0],f[0]+aE);aL[2]=Math.min(k[2],f[2]-aE);aL[1]=Math.
max(k[1],f[3]-aE);this.fR(n,ac,aL,f,am,aj,ai,al,an);aL[0]=k[0];aL[1]=k[1];aL[2]=
Math.min(k[2],f[0]+aE);aL[3]=Math.min(k[3],f[1]+aE);bn[0]=0;bn[1]=0;this.db(n,bitmap
,ac,0,aL,f,bn,am,aj,ai,al,an);aL[1]=k[1];aL[2]=k[2];aL[0]=Math.max(k[0],f[2]-aE);
aL[3]=Math.min(k[3],f[1]+aE);bn[0]=aE*2-(f[2]-f[0]);bn[1]=0;this.db(n,bitmap,ac,
0,aL,f,bn,am,aj,ai,al,an);aL[0]=k[0];aL[3]=k[3];aL[2]=Math.min(k[2],f[0]+aE);aL[
1]=Math.max(k[1],f[3]-aE);bn[0]=0;bn[1]=aE*2-(f[3]-f[1]);this.db(n,bitmap,ac,0,aL
,f,bn,am,aj,ai,al,an);aL[2]=k[2];aL[3]=k[3];aL[0]=Math.max(k[0],f[2]-aE);aL[1]=Math.
max(k[1],f[3]-aE);bn[0]=aE*2-(f[2]-f[0]);bn[1]=aE*2-(f[3]-f[1]);this.db(n,bitmap
,ac,0,aL,f,bn,am,aj,ai,al,an);this._FreeBitmap(bitmap);};e.m6=function(n,ac,k,f,
b6,am,aj,ai,al,an){if(b6<=0)return;if(((b6*2)>=(f[2]-f[0]))||((b6*2)>=(f[3]-f[1]
))){this.fR(n,ac,k,f,am,aj,ai,al,an);return;}var aP=[0,0,0,0];var hx;aP[0]=f[0];
aP[1]=f[1];aP[2]=f[2];aP[3]=f[1]+b6;hx=this.lb(k,aP);this.fR(n,ac,hx,f,am,aj,ai,
al,an);aP[0]=f[0];aP[1]=f[3]-b6;aP[2]=f[2];aP[3]=f[3];hx=this.lb(k,aP);this.fR(n
,ac,hx,f,am,aj,ai,al,an);aP[0]=f[0];aP[1]=f[1]+b6;aP[2]=f[0]+b6;aP[3]=f[3]-b6;hx=
this.lb(k,aP);this.fR(n,ac,hx,f,am,aj,ai,al,an);aP[0]=f[2]-b6;aP[2]=f[2];hx=this.
lb(k,aP);this.fR(n,ac,hx,f,am,aj,ai,al,an);};e.aad=function(n,ac,k,f,b6,bY,bZ,bX
,bW,am,aj,ai,al,an){var a9;var bitmap;var cz=[0,0];var g8=[0,0];var aL=[0,0,0,0];
var bn=[0,0];var ql;var qm;var qk;var qj;var qh;var qi;var qg;var qf;var kF;var kG;
var kE;var kD;var aE;var d2=Math.min(f[2]-f[0],f[3]-f[1]);if((an&&!((am|aj|al|ai
)>>24))||(d2<=0)||(b6<=0)||(k[2]<=k[0])||(k[3]<=k[1]))return;bY=Math.min(bY,d2>>
1);bZ=Math.min(bZ,d2>>1);bW=Math.min(bW,d2>>1);bX=Math.min(bX,d2>>1);bY=Math.max(
bY,0);bZ=Math.max(bZ,0);bW=Math.max(bW,0);bX=Math.max(bX,0);aE=Math.max(bY,bZ,bX
,bW);if(aE<=0){this.m6(n,ac,k,f,b6,am,aj,ai,al,an);return;}if(((b6*2)>=(f[2]-f[0
]))||((b6*2)>=(f[3]-f[1]))){this.rA(n,ac,k,f,bY,bZ,bX,bW,am,aj,ai,al,an);return;
}kF=Math.max(bY-b6,0);kG=Math.max(bZ-b6,0);kE=Math.max(bX-b6,0);kD=Math.max(bW-b6
,0);ql=1+((90/Math.acos(1.0-(0.5/(bY+1))))|0);qm=1+((90/Math.acos(1.0-(0.5/(bZ+1
))))|0);qk=1+((90/Math.acos(1.0-(0.5/(bX+1))))|0);qj=1+((90/Math.acos(1.0-(0.5/(
bW+1))))|0);qh=1+((90/Math.acos(1.0-(0.5/(kF+1))))|0);qi=1+((90/Math.acos(1.0-(0.5
/(kG+1))))|0);qg=1+((90/Math.acos(1.0-(0.5/(kE+1))))|0);qf=1+((90/Math.acos(1.0-(
0.5/(kD+1))))|0);if(!(a9=this.k_(2)))return;if(!this.gM(a9,0,ql+qm+qk+qj+5)){this.
e6(a9);return;}if((aE>b6)&&!this.gM(a9,1,qh+qi+qg+qf+5)){this.e6(a9);return;}this.
dU(a9,0,aE-bX,aE-bX,bX,bX,0,90,qk);this.dU(a9,0,bW-aE,aE-bW,bW,bW,90,180,qj);this.
dU(a9,0,bY-aE,bY-aE,bY,bY,180,270,ql);this.dU(a9,0,aE-bZ,bZ-aE,bZ,bZ,270,360,qm);
this.jU(a9,0);if(aE>b6){this.dU(a9,1,aE-b6-kE,aE-b6-kE,kE,kE,0,90,qg);this.dU(a9
,1,kD+b6-aE,aE-b6-kD,kD,kD,90,180,qf);this.dU(a9,1,kF+b6-aE,kF+b6-aE,kF,kF,180,270
,qh);this.dU(a9,1,aE-b6-kG,kG+b6-aE,kG,kG,270,360,qi);this.jU(a9,1);}cz[0]=cz[1]=
aE;g8[0]=g8[1]=aE*2;if(!(bitmap=this.m8(g8,a9,false,cz,true,false))){this.e6(a9);
return;}this.e6(a9);aL[1]=k[1];aL[0]=Math.max(k[0],f[0]+aE);aL[2]=Math.min(k[2],
f[2]-aE);aL[3]=Math.min(k[3],f[1]+aE);this.m6(n,ac,aL,f,b6,am,aj,ai,al,an);aL[0]=
k[0];aL[2]=k[2];aL[1]=Math.max(k[1],f[1]+aE);aL[3]=Math.min(k[3],f[3]-aE);this.m6(
n,ac,aL,f,b6,am,aj,ai,al,an);aL[3]=k[3];aL[0]=Math.max(k[0],f[0]+aE);aL[2]=Math.
min(k[2],f[2]-aE);aL[1]=Math.max(k[1],f[3]-aE);this.m6(n,ac,aL,f,b6,am,aj,ai,al,
an);aL[0]=k[0];aL[1]=k[1];aL[2]=Math.min(k[2],f[0]+aE);aL[3]=Math.min(k[3],f[1]+
aE);bn[0]=0;bn[1]=0;this.db(n,bitmap,ac,0,aL,f,bn,am,aj,ai,al,an);aL[1]=k[1];aL[
2]=k[2];aL[0]=Math.max(k[0],f[2]-aE);aL[3]=Math.min(k[3],f[1]+aE);bn[0]=aE*2-(f[
2]-f[0]);bn[1]=0;this.db(n,bitmap,ac,0,aL,f,bn,am,aj,ai,al,an);aL[0]=k[0];aL[3]=
k[3];aL[2]=Math.min(k[2],f[0]+aE);aL[1]=Math.max(k[1],f[3]-aE);bn[0]=0;bn[1]=aE*
2-(f[3]-f[1]);this.db(n,bitmap,ac,0,aL,f,bn,am,aj,ai,al,an);aL[2]=k[2];aL[3]=k[3
];aL[0]=Math.max(k[0],f[2]-aE);aL[1]=Math.max(k[1],f[3]-aE);bn[0]=aE*2-(f[2]-f[0
]);bn[1]=aE*2-(f[3]-f[1]);this.db(n,bitmap,ac,0,aL,f,bn,am,aj,ai,al,an);this._FreeBitmap(
bitmap);};e.aae=function(n,ac,k,f,bY,bZ,bX,bW,aM,ar,an){var a9;var bitmap;var cz=[
0,0];var bn=[0,0];var aP=[0,0,0,0];var dr=[0,0,0,0];var iU;var iV;var iT;var iS;
var aE;var by,au,a6,aS;var e2,e1;var acd=0xFFFFFFFF;var n8=f[2]-f[0];var n6=f[3]-
f[1];var d2=Math.min(n8,n6);if((an&&!(ar>>24))||(d2<=0)||(k[2]<=k[0])||(k[3]<=k[
1]))return;if(aM<0)aM=0;if(aM>64)aM=64;if(aM<=0){this.rA(n,ac,k,f,bY,bZ,bX,bW,ar
,ar,ar,ar,an);return;}bY=Math.min(bY,d2>>1);bZ=Math.min(bZ,d2>>1);bW=Math.min(bW
,d2>>1);bX=Math.min(bX,d2>>1);bY=Math.max(bY,0);bZ=Math.max(bZ,0);bW=Math.max(bW
,0);bX=Math.max(bX,0);aE=Math.max(bY,bZ,bX,bW);by=au=aE+aM;a6=aS=aE+aM;by=Math.min(
by,n8>>1);au=Math.min(au,n8>>1);a6=Math.min(a6,n6>>1);aS=Math.min(aS,n6>>1);e2=Math.
min(by+au+8,n8);e1=Math.min(a6+aS+8,n6);if((by+au)<e2)by++;if((by+au)<e2)au++;if((
a6+aS)<e1)a6++;if((a6+aS)<e1)aS++;if((by+au)<e2)by++;if((by+au)<e2)au++;if((a6+aS
)<e1)a6++;if((a6+aS)<e1)aS++;iU=1+((90/Math.acos(1.0-(0.5/(bY+1))))|0);iV=1+((90
/Math.acos(1.0-(0.5/(bZ+1))))|0);iT=1+((90/Math.acos(1.0-(0.5/(bX+1))))|0);iS=1+((
90/Math.acos(1.0-(0.5/(bW+1))))|0);if(!(a9=this.k_(1)))return;if(!this.gM(a9,0,iU+
iV+iT+iS+5)){this.e6(a9);return;}this.dU(a9,0,e2-bX,e1-bX,bX,bX,0,90,iT);this.dU(
a9,0,bW,e1-bW,bW,bW,90,180,iS);this.dU(a9,0,bY,bY,bY,bY,180,270,iU);this.dU(a9,0
,e2-bZ,bZ,bZ,bZ,270,360,iV);this.jU(a9,0);cz[0]=e2+(aM*2);cz[1]=e1+(aM*2);bn[0]=
bn[1]=aM;if(!(bitmap=this.v6(cz,a9,false,bn,true,false,Math.ceil(aM*0.90)))){this.
e6(a9);return;}this.e6(a9);aP[0]=f[0]+by;aP[2]=f[2]-au;aP[3]=f[1]+a6;aP[1]=f[1]-
aM;bn[0]=0;bn[1]=0;dr[0]=aM+by;dr[2]=cz[0]-aM-au;dr[1]=0;dr[3]=aM+a6;this.gN(n,bitmap
,ac,0,k,aP,dr,bn,ar,ar,ar,ar,an);aP[0]=f[0]+by;aP[2]=f[2]-au;aP[1]=f[3]-aS;aP[3]=
f[3]+aM;dr[0]=aM+by;dr[2]=cz[0]-aM-au;dr[1]=cz[1]-aM-aS;dr[3]=cz[1];this.gN(n,bitmap
,ac,0,k,aP,dr,bn,ar,ar,ar,ar,an);aP[2]=f[0]+by;aP[0]=f[0]-aM;aP[1]=f[1]+a6;aP[3]=
f[3]-aS;dr[0]=0;dr[2]=aM+by;dr[1]=aM+a6;dr[3]=cz[1]-aM-aS;this.gN(n,bitmap,ac,0,
k,aP,dr,bn,ar,ar,ar,ar,an);aP[0]=f[2]-au;aP[2]=f[2]+aM;aP[1]=f[1]+a6;aP[3]=f[3]-
aS;dr[0]=cz[0]-aM-au;dr[2]=cz[0];dr[1]=aM+a6;dr[3]=cz[0]-aM-aS;this.gN(n,bitmap,
ac,0,k,aP,dr,bn,ar,ar,ar,ar,an);aP[2]=f[0]+by;aP[0]=f[0]-aM;aP[3]=f[1]+a6;aP[1]=
f[1]-aM;bn[0]=0;bn[1]=0;this.db(n,bitmap,ac,0,k,aP,bn,ar,ar,ar,ar,an);aP[0]=f[2]-
au;aP[2]=f[2]+aM;aP[3]=f[1]+a6;aP[1]=f[1]-aM;bn[0]=cz[0]-aM-au;bn[1]=0;this.db(n
,bitmap,ac,0,k,aP,bn,ar,ar,ar,ar,an);aP[2]=f[0]+by;aP[0]=f[0]-aM;aP[1]=f[3]-aS;aP[
3]=f[3]+aM;bn[0]=0;bn[1]=cz[1]-aM-aS;this.db(n,bitmap,ac,0,k,aP,bn,ar,ar,ar,ar,an
);aP[0]=f[2]-au;aP[2]=f[2]+aM;aP[1]=f[3]-aS;aP[3]=f[3]+aM;bn[0]=cz[0]-aM-au;bn[1
]=cz[1]-aM-aS;this.db(n,bitmap,ac,0,k,aP,bn,ar,ar,ar,ar,an);aP[0]=f[0]+by;aP[2]=
f[2]-au;aP[1]=f[1]+a6;aP[3]=f[3]-aS;this.fR(n,ac,k,aP,ar,ar,ar,ar,an);this._FreeBitmap(
bitmap);};e.k_=function(pC){if(pC<1)return null;return{kT:pC,vw:0,vv:0,a8:0,cu:true
,b$:[0,0,0,0],e5:[1.0,0.0,0.0,0.0,1.0,0.0],oU:[],cN:new Array(pC)};};function mZ(
m,l){var as=m.charCodeAt(l);while((as===0x20)||(as===0x09)||(as===0x0A)||(as===0x0D
)||(as===0x2C)||(as===0x0C))as=m.charCodeAt(++l);return l;}function bO(dA,aG,eD){
var fi=dA[0];var bf=mZ(fi,dA[1]);var v=bf;var gw=0.0;var exp=0.1;var ao=0;var l5=
1;var as=fi.charCodeAt(v);if((as===0x2B)||(as===0x2D)){l5=(as===0x2D)?-1:1;as=fi.
charCodeAt(++v);}while((as>=0x30)&&(as<=0x39)){gw=gw*10+(as-0x30);as=fi.charCodeAt(++
v);ao++;}if(as===0x2E)as=fi.charCodeAt(++v);while((as>=0x30)&&(as<=0x39)){gw+=exp
*(as-0x30);exp*=0.1;as=fi.charCodeAt(++v);ao++;}if(!ao){dA[1]=bf;return false;}if((
as===0x65)||(as===0x45)){var sR=1;var n9=0.0;var sQ=0;as=fi.charCodeAt(++v);if((
as===0x2B)||(as===0x2D)){sR=(as===0x2D)?-1:1;as=fi.charCodeAt(++v);}while((as>=0x30
)&&(as<=0x39)){n9=n9*10+(as-0x30);as=fi.charCodeAt(++v);sQ++;}if(!sQ){dA[1]=bf;return false;
}gw=gw*Math.pow(10.0,(sR<0)?-n9:n9);}dA[1]=v;aG[eD]=(l5<0)?-gw:gw;return true;}function
ri(dA,aG,eD){var fi=dA[0];var bf=mZ(fi,dA[1]);var v=bf;var as=fi.charCodeAt(v);if((
as===0x30)||(as==0x31)){aG[eD]=(as===0x31);as=fi.charCodeAt(++v);}dA[1]=v;return v>
bf;}function gE(o,bz,bL){var r=o.cN[bz];var y_=r.gC-r.a8;if(y_>=bL)return bz;var
qd=(bz+1)%2;this.gM(o,qd,r.a8+bL+256);this.m4(o,qd,o,bz,0,bb);return qd;}e.z7=function(
dA,j$,lE,lq,j4,lm){var tA=[dA,mZ(dA,0)];var v=[dA,tA[1]];var sA=0;var l1=(Math.abs(
j$)+Math.abs(lE))/16;var on=false;var ao=0;var lJ=0.0;var bt=0.0;var bu=0.0;var p=[
0.0,0.0,0.0,0.0];var aa=[0.0,0.0,0.0,0.0];var lJ=[0.0];var cd=[false,false,false
];var as=dA.charCodeAt(v[1]);var bb;function gc(r7,ny,nx,r8){return Math.sqrt((r7-
nx)*(r7-nx)+(ny-r8)*(ny-r8));}this.j1=this.wx;this.lh=-1;if(!as){this.j1=this.wv;
return null;}if((as!==0x6D)&&(as!==0x4D)){this.j1=this.rJ;this.lh=v[1];return null;
}for(;as;as=dA.charCodeAt(++v[1])){as=((as>=0x61)&&(as<=0x7A))?as-0x20:as;if(as===
0x4D){on=false;ao++;}else if(as===0x5A)on=true;else if(on&&((as===0x4C)||(as===0x48
)||(as===0x56)||(as===0x43)||(as===0x53)||(as===0x51)||(as===0x54)||(as===0x41))
){ao++;on=false;}}var a9=this.k_(ao);var bN=this.k_(2);var bG=0;if((lq!==0.0)||(
j4!==0.0)||(j$!==1.0)||(j4!==1.0)||(lm!==0.0)){this.rN(a9,lq,j4);this.rI(a9,lm);
this.wy(a9,j$,lE);}this.gM(bN,0,256);for(ao=0,v[1]=tA[1];dA.charCodeAt(v[1]);ao++
){var f6=0;var bS=0;var sz=0;this.rt(bN,bG,bt,bu);for(;dA.charCodeAt(v[1]);sz++){
f6=bS;bS=dA.charCodeAt(v[1]);if(sz&&((bS===0x6D)||(bS===0x4D)))break;v[1]++;if((
bS===0x6D)||(bS===0x4D)){if(!bO(v,p,1)||!bO(v,aa,1))return dS(this);if(bS===0x4D
){bt=p[1];bu=aa[1];}else{bt+=p[1];bu+=aa[1];}this.rt(bN,bG,bt,bu);while(bO(v,p,1
)){if(!bO(v,aa,1))return dS(this);bG=gE(bN,bG,1);if(bS===0x4D){bt=p[1];bu=aa[1];
}else{bt+=p[1];bu+=aa[1];}this.m5(bN,bG,bt,bu);}}else if((bS===0x6C)||(bS===0x4C
)){if(!bO(v,p,1))return dS(this);do{if(!bO(v,aa,1))return dS(this);bG=gE(bN,bG,1
);if(bS===0x4C){bt=p[1];bu=aa[1];}else{bt+=p[1];bu+=aa[1];}this.m5(bN,bG,bt,bu);
}while(bO(v,p,1));}else if((bS===0x68)||(bS===0x48)){if(!bO(v,p,1))return dS(this
);do{bG=gE(bN,bG,1);if(bS===0x48)bt=p[1];else bt+=p[1];this.m5(bN,bG,bt,bu);}while(
bO(v,p,1));}else if((bS===0x76)||(bS===0x56)){if(!bO(v,aa,1))return dS(this);do{
bG=gE(bN,bG,1);if(bS===0x56)bu=aa[1];else bu+=aa[1];this.m5(bN,bG,bt,bu);}while(
bO(v,aa,1));}else if((bS===0x63)||(bS==0x43)){if(!bO(v,p,1))return dS(this);do{if(
!bO(v,aa,1)||!bO(v,p,2)||!bO(v,aa,2)||!bO(v,p,3)||!bO(v,aa,3))return dS(this);if(
bS===0x63)p[1]+=bt,aa[1]+=bu,p[2]+=bt,aa[2]+=bu,p[3]+=bt,aa[3]+=bu;bb=((gc(p[1],
aa[1],bt,bu)+gc(p[2],aa[2],p[1],aa[1])+gc(p[3],aa[3],p[2],aa[2]))*l1)|0;if(bb<8)
bb+=2;bG=gE(bN,bG,bb+1);this.rr(bN,bG,p[1],aa[1],p[2],aa[2],p[3],aa[3],bb+1);bt=
p[3];bu=aa[3];}while(bO(v,p,1));}else if((bS===0x73)||(bS===0x53)){p[1]=p[2];aa[
1]=aa[2];if(!bO(v,p,2))return dS(this);do{if(!bO(v,aa,2)||!bO(v,p,3)||!bO(v,aa,3
))return dS(this);if(bS===0x73)p[2]+=bt,aa[2]+=bu,p[3]+=bt,aa[3]+=bu;if((f6===0x43
)||(f6===0x63)||(f6===0x53)||(f6===0x73)){p[1]=bt-(p[1]-bt);aa[1]=bu-(aa[1]-bu);
}else p[1]=bt,aa[1]=bu;bb=((gc(p[1],aa[1],bt,bu)+gc(p[2],aa[2],p[1],aa[1])+gc(p[
3],aa[3],p[2],aa[2]))*l1)|0;if(bb<8)bb+=2;bG=gE(bN,bG,bb+1);this.rr(bN,bG,p[1],aa[
1],p[2],aa[2],p[3],aa[3],bb+1);bt=p[3];bu=aa[3];s=p[2];q=aa[2];f6=bS;}while(bO(v
,p,2));}else if((bS===0x71)||(bS===0x51)){if(!bO(v,p,1))return dS(this);do{if(!bO(
v,aa,1)||!bO(v,p,2)||!bO(v,aa,2))return dS(this);if(bS===0x71)p[1]+=bt,aa[1]+=bu
,p[2]+=bt,aa[2]+=bu;bb=((gc(p[1],aa[1],bt,bu)+gc(p[2],aa[2],p[1],aa[1]))*l1)|0;if(
bb<8)bb+=2;bG=gE(bN,bG,bb+1);this.rq(bN,bG,p[1],aa[1],p[2],aa[2],bb+1);bt=p[2];bu=
aa[2];}while(bO(v,p,1));}else if((bS===0x74)||(bS===0x54)){if(!bO(v,p,2))return dS(
this);do{if(!bO(v,aa,2))return dS(this);if(bS===0x74)p[2]+=bt,aa[2]+=bu;if((f6===
0x51)||(f6===0x71)||(f6===0x54)||(f6===0x74)){p[1]=bt-(p[1]-bt);aa[1]=bu-(aa[1]-
bu);}else p[1]=bt,aa[1]=bu;bb=((gc(p[1],aa[1],bt,bu)+gc(p[2],aa[2],p[1],aa[1]))*
l1)|0;if(bb<8)bb+=2;bG=gE(bN,bG,bb+1);this.rq(bN,bG,p[1],aa[1],p[2],aa[2],bb+1);
bt=p[2];bu=aa[2];f6=bS;}while(bO(v,p,2));}else if((bS===0x61)||(bS===0x41)){sA=v[
1]-1;if(!bO(v,p,0))return dS(this);do{p[1]=bt;aa[1]=bu;if(!bO(v,aa,0)||!bO(v,lJ,
0)||!ri(v,cd,1)||!ri(v,cd,2)||!bO(v,p,2)||!bO(v,aa,2))return dS(this);if(bS===0x61
)p[2]+=bt,aa[2]+=bu;if((p[0]<=0)||(aa[0]<=0))return mX(this);var or=Math.sin(lJ[
0]*this.k$);var nH=Math.cos(lJ[0]*this.k$);var sW=(p[1]-p[2])/2;var sX=(aa[1]-aa[
2])/2;var yU=(p[1]+p[2])/2;var yV=(aa[1]+aa[2])/2;var me=nH*sW+or*sX;var mf=nH*sX-
or*sW;var p5=(me*me)/(p[0]*p[0])+(mf*mf)/(aa[0]*aa[0]);if(p5>1){p[0]=p[0]*Math.sqrt(
p5);aa[0]=aa[0]*Math.sqrt(p5);}var tu=p[0]*aa[0];var qs=p[0]*mf;var qt=aa[0]*me;
var qz=qs*qs+qt*qt;if(qz===0.0)return mX(this);var abs=(tu*tu-qz)/qz;if(abs<0.0)
abs=-abs;var nS=Math.sqrt(abs);if(cd[1]===cd[2])nS=-nS;var n2=nS*qs/aa[0];var n3=-
nS*qt/p[0];var xu=nH*n2-or*n3+yU;var xx=or*n2+nH*n3+yV;var i$=(me-n2)/p[0];var oC=(
me+n2)/p[0];var ja=(mf-n3)/aa[0];var oD=(mf+n3)/aa[0];var h=i$*i$+ja*ja;if(h===0.0
)return mX(this);var ov=Math.acos(i$/Math.sqrt(h))*this.rE;if(ja<0.0)ov=-ov;h=(i$
*i$+ja*ja)*(oC*oC+oD*oD);if(h===0.0)return mX(this);var ef=Math.acos((i$*-oC+ja*-
oD)/Math.sqrt(h))*this.rE;if((i$*-oD-ja*-oC)<0)ef=-ef;while(ef>360){ef=ef-360;}while(
ef<-360){ef=ef+360;}if(!cd[2]&&(ef>0))ef=ef-360;if(cd[2]&&(ef<0))ef=ef+360;bb=((
p[0]+aa[0])*ef*(3.14/360)*l1)|0;if(bb<0)bb=-bb;if(bb<8)bb+=2;bG=gE(bN,bG,bb+1);this.
wu(bN);this.rN(bN,xu,xx);this.rI(bN,lJ);this.dU(bN,bG,0,0,p[0],aa[0],ov,ov+ef,bb+
1);this.ws(bN);bt=p[2];bu=aa[2];}while(bO(v,p,0));}else if((bS===0x5A)||(bS==0x7A
)){v[1]=mZ(dA,v[1]);this.jU(bN,bG);bt=this.v7(bN,bG,0);bu=this.v8(bN,bG,0);break;
}else{v[1]--;return dS(this);}}bb=this.o6(bN,bG);this.gM(a9,ao,bb);this.m4(a9,ao
,bN,bG,0,bb);if(this.wb(bN,bG))this.jU(a9,ao);}this.e6(bN);return a9;function dS(
ap){bb=ap.o6(bN,bG);ap.gM(a9,ao,bb);ap.m4(a9,ao,bN,bG,0,bb);ap.j1=ap.rJ;ap.lh=v[
1];ap.e6(bN);return a9;}function mX(ap){bb=ap.o6(bN,bG);ap.gM(a9,ao,bb);ap.m4(a9
,ao,bN,bG,0,bb);ap.j1=ap.ww;ap.lh=sA;ap.e6(bN);return a9;}};e.aaN=function(){return this.
j1;};e.aaM=function(){return this.lh;};e.e6=function(o){if(o){delete o.cN;delete
o.oU;}};e.aax=function(o){if(!o)return 0;return o.kT;};e.gM=function(o,bz,ls){if(
!o||(bz>=o.kT)||(bz<0))return false;if(ls<=0)ls=0;var r=null;if(ls)r={gC:ls,a8:0
,gF:false,fm:false,dJ:false,cu:true,b$:[0,0,0,0],Data:new Float32Array((ls+1)*8)
};if(o.cN[bz])o.cu=false;o.cN[bz]=r;return true;};e.rt=function(o,bz,bx,bM){var r=
o?o.cN[bz]:null;if(!r)return;var u=o.e5;var p=bx;var aa=bM;if((u[0]!==1)||(u[1]!==
0)||(u[2]!==0)||(u[3]!==0)||(u[4]!==1)||(u[5]!==0)){p=bx*u[0]+bM*u[1]+u[2];aa=bx
*u[3]+bM*u[4]+u[5];}r.dJ=false;r.fm=false;r.cu=false;r.a8=0;r.gF=true;r.Data[0]=
p;r.Data[1]=aa;o.cu=false;};e.m5=function(o,bz,bx,bM){var r=o?o.cN[bz]:null;if(!
r||r.dJ||((r.a8+1)>r.gC))return 0;var u=o.e5;var a3=r.Data;var b4=r.a8*2+2;var p=
bx;var aa=bM;r.gF=true;r.fm=true;r.cu=false;o.cu=false;if((u[0]!==1)||(u[1]!==0)||(
u[2]!==0)||(u[3]!==0)||(u[4]!==1)||(u[5]!==0)){p=bx*u[0]+bM*u[1]+u[2];aa=bx*u[3]+
bM*u[4]+u[5];}a3[b4]=p;a3[b4+1]=aa;return r.a8++;};e.rq=function(o,bz,pp,pq,bx,bM
,bL){var r=o?o.cN[bz]:null;if((bL<=0)||!r||r.dJ||((r.a8+bL)>r.gC))return 0;var u=
o.e5;var a3=r.Data;var b4=r.a8*2;var bt=pp;var bu=pq;var p=bx;var aa=bM;var eZ=1
/bL;var a6;var d;r.gF=true;r.fm=true;r.cu=false;o.cu=false;if((u[0]!==1)||(u[1]!==
0)||(u[2]!==0)||(u[3]!==0)||(u[4]!==1)||(u[5]!==0)){bt=pp*u[0]+pq*u[1]+u[2];bu=pp
*u[3]+pq*u[4]+u[5];p=bx*u[0]+bM*u[1]+u[2];aa=bx*u[3]+bM*u[4]+u[5];}var qN=a3[b4++
];var qO=a3[b4++];for(a6=eZ,d=1;d<bL;d++,a6+=eZ){var hQ=1-a6;var lX=hQ*hQ;var b8=
a6*a6;var lT=2*hQ*a6;a3[b4++]=lX*qN+lT*bt+b8*p;a3[b4++]=lX*qO+lT*bu+b8*aa;}a3[b4++
]=p;a3[b4++]=aa;return(r.a8+=d)-d;};e.rr=function(o,bz,pl,pm,pn,po,bx,bM,bL){var
r=o?o.cN[bz]:null;if((bL<=0)||!r||r.dJ||((r.a8+bL)>r.gC))return 0;var u=o.e5;var
a3=r.Data;var b4=r.a8*2;var sF=pl;var sG=pm;var sH=pn;var sI=po;var p=bx;var aa=
bM;var eZ=1/bL;var a6;var d;r.gF=true;r.fm=true;r.cu=false;o.cu=false;if((u[0]!==
1)||(u[1]!==0)||(u[2]!==0)||(u[3]!==0)||(u[4]!==1)||(u[5]!==0)){sF=pl*u[0]+pm*u[
1]+u[2];sG=pl*u[3]+pm*u[4]+u[5];sH=pn*u[0]+po*u[1]+u[2];sI=pn*u[3]+po*u[4]+u[5];
p=bx*u[0]+bM*u[1]+u[2];aa=bx*u[3]+bM*u[4]+u[5];}var qN=a3[b4++];var qO=a3[b4++];
for(a6=eZ,d=1;d<bL;d++,a6+=eZ){var hQ=1-a6;var b8=a6*a6;var lX=hQ*hQ;var sT=hQ*lX;
var lT=3*lX*a6;var sU=3*hQ*b8;var sV=a6*b8;a3[b4++]=sT*qN+lT*sF+sU*sH+sV*p;a3[b4++
]=sT*qO+lT*sG+sU*sI+sV*aa;}a3[b4++]=p;a3[b4++]=aa;return(r.a8+=d)-d;};e.dU=function(
o,bz,wG,wH,wX,wY,lH,nl,bL){var r=o?o.cN[bz]:null;var bb=bL;if(r&&r.gF)bb++;if((bL<=
0)||(lH===nl)||!r||r.dJ||((r.a8+bb)>r.gC))return 0;lH*=this.k$;nl*=this.k$;var u=
o.e5;var a3=r.Data;var b4=r.a8*2+(bb-bL)*2;var eZ=(nl-lH)/bL;var d;r.gF=true;r.fm=
true;r.cu=false;o.cu=false;var xB=(u[0]!==1)||(u[1]!==0)||(u[2]!==0)||(u[3]!==0)||(
u[4]!==1)||(u[5]!==0);for(d=0;d<=bL;d++,lH+=eZ){var cw=(d===bL)?nl:lH;var p=wG+wX
*Math.cos(cw);var aa=wH+wY*Math.sin(cw);if(xB){a3[b4++]=p*u[0]+aa*u[1]+u[2];a3[b4++
]=p*u[3]+aa*u[4]+u[5];}else{a3[b4++]=p;a3[b4++]=aa;}}return(r.a8+=bb)-bL;};e.m4=
function(o,bz,r2,w3,nu,bL){var fY=o?o.cN[bz]:null;var ot=r2?r2.cN[w3]:null;var bb=
bL;if(!bL||!fY||!ot||(nu<0))return 0;if(bL<0)bb=bL=ot.a8-nu;if((nu+bb)>ot.a8)return 0;
if(fY.gF)bb++;if(((fY.a8+bb)>fY.gC)||fY.dJ)return 0;fY.gF=true;fY.fm=true;fY.cu=
false;o.cu=false;var u=o.e5;var a3=fY.Data;var eZ=ot.Data;var b4=fY.a8*2+(bb-bL)
*2;var au=nu*2;var d=0;if((u[0]!==1)||(u[1]!==0)||(u[2]!==0)||(u[3]!==0)||(u[4]!==
1)||(u[5]!==0))for(;d<=bL;d++,au+=2){a3[b4++]=eZ[au]*u[0]+eZ[au+1]*u[1]+u[2];a3[
b4++]=eZ[au]*u[3]+eZ[au+1]*u[4]+u[5];}else for(;d<=bL;d++){a3[b4++]=eZ[au++];a3[
b4++]=eZ[au++];}return(fY.a8+=bb)-bL;};e.jU=function(o,bz){var r=o?o.cN[bz]:null;
if(!r||r.dJ||!r.fm)return;r.fm=false;r.dJ=true;o.cu=false;var a3=r.Data;var dO=a3[
r.a8*2+0]-a3[0];var dP=a3[r.a8*2+1]-a3[1];if((dO>0.001)||(dO<-0.001)||(dP>0.001)||(
dP<-0.001)){r.a8++;a3[r.a8*2+0]=a3[0];a3[r.a8*2+1]=a3[1];}else{a3[r.a8*2+0]=a3[0
];a3[r.a8*2+1]=a3[1];}};e.abS=function(o,bz,il,r4,r5){var r=o?o.cN[bz]:null;if(!
r||r.dJ||!r.fm)return 0;if(il<=0)return 0;if(il>r.a8)il=r.a8;r.Data.copyWithin(0
,il*2);if((r4!==0.0)||(r5!==0.0)){var a3=r.Data;var d;for(d=0;d<a3.length;d+=2){
a3[d]+=r4;a3[d+1]+=r5;}}r.fm=il<r.a8;r.a8=r.a8-il;r.cu=false;o.cu=false;return il;
};e.abR=function(o,bz,eU,bx,bM){var r=o?o.cN[bz]:null;if(!r||(eU>r.a8)||(eU<0))return;
var u=o.e5;var a3=r.Data;var p=bx;var aa=bM;if((u[0]!==1)||(u[1]!==0)||(u[2]!==0
)||(u[3]!==0)||(u[4]!==1)||(u[5]!==0)){p=bx*u[0]+bM*u[1]+u[2];aa=bx*u[3]+bM*u[4]+
u[5];}a3[eU*2+0]=p;a3[eU*2+1]=aa;if(!eU&&r.dJ){a3[r.a8*2+0]=p;a3[r.a8*2+1]=aa;}if((
eU===r.a8)&&r.dJ){a3[0]=p;a3[1]=aa;}r.cu=false;o.cu=false;};e.v7=function(o,bz,eU
){var r=o?o.cN[bz]:null;if(!r||(eU>r.a8)||(eU<0))return 0.0;return r.Data[eU*2+0
];};e.v8=function(o,bz,eU){var r=o?o.cN[bz]:null;if(!r||(eU>r.a8)||(eU<0))return 0.0;
return r.Data[eU*2+1];};e.abH=function(o,bz,bL){var r=o?o.cN[bz]:null;if(!r||r.dJ
)return 0;if(bL<0)bL=0;if(bL>r.gC)bL=r.gC;n5=bL-r.a8;if(!n5)return 0;if(n5>0){var
a3=r.Data;var b4=r.a8*2+2;var d;for(d=0;d<n5;d++){a3[b4++]=0;a3[b4++]=0;}}r.a8=bL;
r.gF=bL>0;r.fm=bL>0;r.cu=false;o.cu=false;return n5;};e.o6=function(o,bz){var r=
o?o.cN[bz]:null;return r?r.a8:0;};e.aaA=function(o,bz){var r=o?o.cN[bz]:null;if(
!r||r.dJ)return 0;return r.gC-r.a8;};e.wb=function(o,bz){var r=o?o.cN[bz]:null;return r?
r.dJ:false;};e.aaO=function(o,bz){var r=o?o.cN[bz]:null;this.j3(o);return r?r.b$:[
0,0,0,0];};e.aaB=function(o){this.j3(o);return o?o.b$:[0,0,0,0];};e.rN=function(
o,lq,j4){if(!o)return;var u=o.e5;u[2]=u[2]+(u[0]*lq)+(u[1]*j4);u[5]=u[5]+(u[3]*lq
)+(u[4]*j4);};e.wy=function(o,j$,lE){if(!o)return;var u=o.e5;u[0]*=j$;u[1]*=lE;u[
3]*=j$;u[4]*=lE;};e.rI=function(o,lm){if(!o)return;var u=o.e5;var sin=Math.sin(lm
*=this.k$);var cos=Math.cos(lm);var s$,ta,tb,tc;s$=(u[0]*cos)+(u[1]*sin);ta=(u[0
]*-sin)+(u[1]*cos);tb=(u[3]*cos)+(u[4]*sin);tc=(u[3]*-sin)+(u[4]*cos);u[0]=s$;u[
1]=ta;u[3]=tb;u[4]=tc;};e.wu=function(o){if(!o)return;var u=o.e5;o.oU.push([u[0]
,u[1],u[2],u[3],u[4],u[5]]);};e.ws=function(o){if(!o)return;var u=o.e5;var iR=o.
oU.pop();if(iR){u[0]=iR[0];u[1]=iR[1];u[2]=iR[2];u[3]=iR[3];u[4]=iR[4];u[5]=iR[5
];}else{u[0]=1;u[1]=0;u[2]=0;u[3]=0;u[4]=1;u[5]=0;}};e.aaU=function(o){if(!o)return;
var u=o.e5;u[0]=1;u[1]=0;u[2]=0;u[3]=0;u[4]=1;u[5]=0;};e.j3=function(o){if(!o||o.
cu)return;var kJ=o.cN;var kx=o.kT;var pJ=[0,0,0,0];var tg=0;var td=0;var bb=0;var
d;for(d=0;d<kx;d++){var r=kJ[d];if(r&&!r.cu&&r.a8){var a3=r.Data;var b4=2;var s=
a3[0];var q=a3[1];var x=s;var w=q;var ao=r.a8;for(;ao>0;ao--,b4+=2){var p=a3[b4];
var aa=a3[b4+1];if(p<s)s=p;if(p>x)x=p;if(aa<q)q=aa;if(aa>w)w=aa;}r.b$=[s|0,q|0,(
x+1)|0,(w+1)|0];r.cu=true;}if(r&&r.cu){tg+=r.fm?1:0;td+=r.dJ?1:0;bb+=r.a8;pJ=this.
wC(pJ,r.b$);}}o.vw=tg;o.vv=td;o.a8=bb;o.b$=pJ;o.cu=true;};e.m8=function(bc,o,dY,
ak,gO,lw,aM=0){var bj=ak[0];var aY=ak[1];var s,q,x,w;if((bc[0]<=0)||(bc[1]<=0)||
!o)return null;this.j3(o);if(!dY){q=aY+o.b$[1]-1;w=aY+o.b$[3]+1;}else{aY+=bc[1];
q=aY-o.b$[3]-1;w=aY-o.b$[1]+1;}s=bj+o.b$[0]-1;x=bj+o.b$[2]+1;s=Math.max(s,0);q=Math.
max(q,0);x=Math.min(x,bc[0]);w=Math.min(w,bc[1]);var b=this.ah;var a4=document.createElement(
"canvas");var dF=b.createTexture();var aJ={};var cG={aT:aJ,aK:[1,1]};var bitmap={
FrameSize:bc,FrameDelay:0,NoOfFrames:1,ey:[aJ],cB:[cG]};a4.width=bc[0]+2;a4.height=
bc[1]+2;var aq=a4.getContext("2d");var kJ=o.cN;var kx=o.kT;var d;if(aM>0){aq.shadowColor=
"#ffffff";aq.shadowOffsetX=x+2;aq.shadowBlur=aM-1;aq.translate(-x-2,0);}aq.translate(
bj+1,aY+1);aq.scale(1,dY?-1:1);aq.beginPath();for(d=0;d<kx;d++){var r=kJ[d];if(r&&
r.a8){var i=r.Data;var qn=r.a8*2+2;var bP;aq.moveTo(i[0],i[1]);for(bP=2;bP<qn;bP+=
2)aq.lineTo(i[bP],i[bP+1]);if(r.dJ)aq.closePath();}}aq.fill(lw?"nonzero":"evenodd"
);if(aM>0){aq.shadowOffsetX=0;aq.shadowBlur=0;}aq.resetTransform();aq.clearRect(
0,0,bc[0]+2,1);aq.clearRect(0,bc[1]+1,bc[0]+2,1);aq.clearRect(0,1,1,bc[1]);aq.clearRect(
bc[0]+1,1,1,bc[1]);b.eM=null;b.bindTexture(b.TEXTURE_2D,dF);b.texParameteri(b.TEXTURE_2D
,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER
,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE);b.texParameteri(
b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);b.texImage2D(b.TEXTURE_2D,0,b.RGBA
,b.RGBA,b.UNSIGNED_BYTE,a4);aJ.Format=e._PIXEL_FORMAT_ALPHA8;aJ.Width=bc[0]+2;aJ.
Height=bc[1]+2;aJ.k1=bc[0]+2;aJ.k0=bc[1]+2;aJ.dI=1/(bc[0]+2);aJ.dH=1/(bc[1]+2);aJ.
ge=2/(bc[0]+2);aJ.gd=2/(bc[1]+2);aJ.cV=dF;aJ.Framebuffer=null;return bitmap;};e.
rC=function(bc,o,dY,ak,aI,go,gS,gO,aM=0){var el=go&0x0000FF;var ek=go&0x00FF00;var
gz=go&0xFF0000;var bj=ak[0];var aY=ak[1];var s,q,x,w;var cy;if((bc[0]<=0)||(bc[1
]<=0)||!o||(aI<=0))return null;if((el===this.nd)&&(aI<4))el=this.pa;if((ek===this.
nc)&&(aI<4))ek=this.o_;if((gz===this.pd)&&(aI<3))gz=this.pb;if(gz===this.pc){if(
gS>1)cy=(gS*aI*0.5)|0;else cy=(aI*0.5)|0;}else if((el===this.lf)||(ek===this.le)
)cy=(aI*0.75)|0;else cy=(aI+0.5)|0;this.j3(o);if(!dY){q=aY+o.b$[1]-cy-1;w=aY+o.b$[
3]+cy+1;}else{aY+=bc[1];q=aY-o.b$[3]-cy-1;w=aY-o.b$[1]+cy+1;}s=bj+o.b$[0]-cy-1;x=
bj+o.b$[2]+cy+1;s=Math.max(s,0);q=Math.max(q,0);x=Math.min(x,bc[0]);w=Math.min(w
,bc[1]);var b=this.ah;var a4=document.createElement("canvas");var dF=b.createTexture(
);var aJ={};var cG={aT:aJ,aK:[1,1]};var bitmap={FrameSize:bc,FrameDelay:0,NoOfFrames:
1,ey:[aJ],cB:[cG]};a4.width=bc[0]+2;a4.height=bc[1]+2;var aq=a4.getContext("2d");
var kJ=o.cN;var kx=o.kT;var d;if(aM>0){aq.shadowColor="#ffffff";aq.shadowOffsetX=
x+2;aq.shadowBlur=aM-1;aq.translate(-x-2,0);}aq.translate(bj+1,aY+1);aq.scale(1,
dY?-1:1);aq.beginPath();for(d=0;d<kx;d++){var r=kJ[d];if(r&&r.a8){var i=r.Data;var
qn=r.a8*2+2;var bP;aq.moveTo(i[0],i[1]);for(bP=2;bP<qn;bP+=2)aq.lineTo(i[bP],i[bP+
1]);if(r.dJ)aq.closePath();}}if(aI!==1.0)aq.lineWidth=aI;if(gz===this.pc)aq.miterLimit=
gS;else if(gz===this.pb)aq.lineJoin="bevel";else if(gz===this.pd)aq.lineJoin="round";
if((el===this.nd)&&(ek===this.nc)){el=ek=this.o$;aq.lineCap="round";}else if((el===
this.lf)&&(ek===this.le)){el=ek=this.o$;aq.lineCap="square";}aq.stroke();if((el!==
this.o$)||(ek!==this.wr)){aq.beginPath();for(d=0;d<kx;d++){var r=kJ[d];if(r&&r.a8&&
!r.dJ){var i=r.Data;var kC=0;var kB=r.a8*2+1;var fI=i[kC++];var fK=i[kC++];var fJ=
i[kB--];var fH=i[kB--];if((el===this.lf)||(el===this.pa)){var dt,dv;do{dt=i[kC++
];dv=i[kC++];}while((dt===fI)&&(dv===fK)&&(kC<kB));dt=fI-dt;dv=fK-dv;if(dt||dv){
var a_=Math.sqrt(dt*dt+dv*dv);var fj,fk;fj=dt/a_;dt=fj*aI*0.5;fk=dv/a_;dv=fk*aI*
0.5;if(el===this.lf){aq.moveTo(fI+dv-fj,fK-dt-fk);aq.lineTo(fI-dv-fj,fK+dt-fk);aq.
lineTo(fI-dv+dt,fK+dt+dv);aq.lineTo(fI+dv+dt,fK-dt+dv);}else{aq.moveTo(fI+dv,fK-
dt);aq.lineTo(fI+dv-fj,fK-dt-fk);aq.lineTo(fI-dv-fj,fK+dt-fk);aq.lineTo(fI-dv,fK+
dt);aq.lineTo(fI+dt,fK+dv);}aq.closePath();}}else if(el===this.nd)aq.arc(fI,fK,aI
/2,0,2*Math.PI);if((ek===this.le)||(ek===this.o_)){var ds,du;do{du=i[kB--];ds=i[
kB--];}while((ds===fH)&&(du===fJ)&&(kC<kB));ds=fH-ds;du=fJ-du;if(ds||du){var a_=
Math.sqrt(ds*ds+du*du);var fj,fk;fj=ds/a_;ds=fj*aI*0.5;fk=du/a_;du=fk*aI*0.5;if(
ek===this.le){aq.moveTo(fH+du-fj,fJ-ds-fk);aq.lineTo(fH-du-fj,fJ+ds-fk);aq.lineTo(
fH-du+ds,fJ+ds+du);aq.lineTo(fH+du+ds,fJ-ds+du);}else{aq.moveTo(fH+du,fJ-ds);aq.
lineTo(fH+du-fj,fJ-ds-fk);aq.lineTo(fH-du-fj,fJ+ds-fk);aq.lineTo(fH-du,fJ+ds);aq.
lineTo(fH+ds,fJ+du);}aq.closePath();}}else if(ek===this.nc)aq.arc(fH,fJ,aI/2,0,2
*Math.PI);}}aq.fill();}if(aM>0){aq.shadowOffsetX=0;aq.shadowBlur=0;}aq.resetTransform(
);aq.clearRect(0,0,bc[0]+2,1);aq.clearRect(0,bc[1]+1,bc[0]+2,1);aq.clearRect(0,1
,1,bc[1]);aq.clearRect(bc[0]+1,1,1,bc[1]);b.eM=null;b.bindTexture(b.TEXTURE_2D,dF
);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.NEAREST);b.texParameteri(b.
TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.NEAREST);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S
,b.CLAMP_TO_EDGE);b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE);
b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,a4);aJ.Format=e._PIXEL_FORMAT_ALPHA8;
aJ.Width=bc[0]+2;aJ.Height=bc[1]+2;aJ.k1=bc[0]+2;aJ.k0=bc[1]+2;aJ.dI=1/(bc[0]+2);
aJ.dH=1/(bc[1]+2);aJ.ge=2/(bc[0]+2);aJ.gd=2/(bc[1]+2);aJ.cV=dF;aJ.Framebuffer=null;
return bitmap;};e.v6=function(bc,o,dY,ak,gO,lw,aM){return this.m8(bc,o,dY,ak,gO,
lw,aM);};e.aar=function(bc,o,dY,ak,aI,go,gS,gO,aM){return this.rC(bc,o,dY,ak,aI,
go,gS,gO,aM);};e.aaf=function(n,o,ac,k,f,dY,ak,am,aj,ai,al,an,gO,lw){var b=this.
ah;var ag=null;var bj=ak[0];var aY=ak[1];var s,q,x,w;if(n&&(ac>=0)&&(ac<n.NoOfFrames
)){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(!ag||(ag.aT.Format!==this._PIXEL_FORMAT_NATIVE
)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!o){console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.j3(o);if(!dY){aY+=f[1];q=aY+o.b$[1]-1;w=aY+o.b$[3]+1;}else{aY+=f[
3];q=aY-o.b$[3]-1;w=aY-o.b$[1]+1;}bj+=f[0];s=bj+o.b$[0]-1;x=bj+o.b$[2]+1;s=Math.
max(k[0],f[0],s,0);q=Math.max(k[1],f[1],q,0);x=Math.min(k[2],f[2],x,n.FrameSize[
0]);w=Math.min(k[3],f[3],w,n.FrameSize[1]);bj-=s;if((x<=s)||(w<=q)||!o.a8)return;
if(dY)aY-=w;else aY-=q;var bitmap=this.m8([x-s,w-q],o,dY,[bj,aY],gO,lw);if(!bitmap
)return;this.db(n,bitmap,ac,0,[s,q,x,w],f,[f[0]-s,f[1]-q],am,aj,ai,al,an);fM(b,null
,false);b.deleteTexture(bitmap.ey[0].cV);};e.ab3=function(n,o,ac,k,f,dY,ak,aI,go
,gS,am,aj,ai,al,an,gO){var el=go&0x0000FF;var ek=go&0x00FF00;var gz=go&0xFF0000;
var b=this.ah;var ag=null;var bj=ak[0];var aY=ak[1];var s,q,x,w;var cy;if(n&&(ac>=
0)&&(ac<n.NoOfFrames)){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(!ag||(ag.aT.Format!==
this._PIXEL_FORMAT_NATIVE)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!o){console.log("EmWi error: Invalid path object in the drawing operation."
);return;}this.j3(o);if((el===this.nd)&&(aI<4))el=this.pa;if((ek===this.nc)&&(aI<
4))ek=this.o_;if((gz===this.pd)&&(aI<3))gz=this.pb;if(gz===this.pc){if(gS>1)cy=(
gS*aI*0.5)|0;else cy=(aI*0.5)|0;}else if((el===this.lf)||(ek===this.le))cy=(aI*0.75
)|0;else cy=(aI+0.5)|0;if(!dY){aY+=f[1];q=aY+o.b$[1]-cy-1;w=aY+o.b$[3]+cy+1;}else{
aY+=f[3];q=aY-o.b$[3]-cy-1;w=aY-o.b$[1]+cy+1;}bj+=f[0];s=bj+o.b$[0]-cy-1;x=bj+o.
b$[2]+cy+1;s=Math.max(k[0],f[0],s,0);q=Math.max(k[1],f[1],q,0);x=Math.min(k[2],f[
2],x,n.FrameSize[0]);w=Math.min(k[3],f[3],w,n.FrameSize[1]);bj-=s;if((x<=s)||(w<=
q)||!o.a8||(aI<=0))return;if(dY)aY-=w;else aY-=q;var bitmap=this.rC([x-s,w-q],o,
dY,[bj,aY],aI,go,gS,gO);if(!bitmap)return;this.db(n,bitmap,ac,0,[s,q,x,w],f,[f[0
]-s,f[1]-q],am,aj,ai,al,an);fM(b,null,false);b.deleteTexture(bitmap.ey[0].cV);};
e.db=function(n,ay,ac,bF,k,f,cZ,am,aj,ai,al,an){var b=this.ah;var ag=null;var src=
null;var s=f[0];var q=f[1];var x=f[2];var w=f[3];var gA=cZ[0];var gB=cZ[1];if(n&&(
ac>=0)&&(ac<n.NoOfFrames)){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(ay&&(bF>=0)&&(bF<
ay.NoOfFrames)){bF=ay.ca?ay.ca[bF]:bF;src=ay.cB[bF];}if(ay.gI)return;if(!ag||(ag.
aT.Format!==this._PIXEL_FORMAT_NATIVE)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}x=Math.min(x,s+ay.FrameSize[0]-cZ[0]);w=Math.min(w,q+ay.FrameSize[1]-cZ[
1]);s=Math.max(s,s-cZ[0]);q=Math.max(q,q-cZ[1]);s=Math.max(k[0],s,0);q=Math.max(
k[1],q,0);x=Math.min(k[2],x,n.FrameSize[0]);w=Math.min(k[3],w,n.FrameSize[1]);if((
x<=s)||(w<=q))return;am=cU(am);aj=cU(aj);al=cU(al);ai=cU(ai);var i_=(am!==al)||(
aj!==ai);var iM=(am!==aj)||(al!==ai);var di=((am!==ai)||(aj!==al))&&((am!==aj)||(
ai!==al));var fC=i_||iM;var iI=fC||(((am>>24)&0xFF)<255);gA+=s-f[0]+src.aK[0];gB+=
q-f[1]+src.aK[1];var bI=gA*src.aT.dI;var bE=gB*src.aT.dH;var b2=(gA+x-s)*src.aT.
dI;var b1=(gB+w-q)*src.aT.dH;if(i_&&((q!==f[1])||(w!==f[3]))){var cj=1/(f[3]-f[1
]);var a6=(q-f[1])*cj;var aS=(f[3]-w)*cj;if(am!==al){var d0=am;if(a6)am=bp(d0,al
,a6);if(aS)al=bp(al,d0,aS);}if(aj!==ai){var hD=aj;if(a6)aj=bp(hD,ai,a6);if(aS)ai=
bp(ai,hD,aS);}}if(iM&&((s!==f[0])||(x!==f[2]))){var cj=1/(f[2]-f[0]);var by=(s-f[
0])*cj;var au=(f[2]-x)*cj;if(am!==aj){var d0=am;if(by)am=bp(d0,aj,by);if(au)aj=bp(
aj,d0,au);}if(al!==ai){var hy=al;if(by)al=bp(hy,ai,by);if(au)ai=bp(ai,hy,au);}}var
c=b.hW;var a7=b.kQ;c[0]=c[22]=s+ag.aK[0];c[1]=c[12]=q+ag.aK[1];c[11]=c[33]=x+ag.
aK[0];c[34]=c[23]=w+ag.aK[1];c[2]=bI;c[3]=bE;c[4]=1;c[13]=b2;c[14]=bE;c[15]=1;c[
35]=b2;c[36]=b1;c[37]=1;c[24]=bI;c[25]=b1;c[26]=1;a7[5]=am;a7[16]=aj;a7[38]=ai;a7[
27]=al;if(di){c[6]=0;c[17]=1;c[7]=0;c[18]=0;c[8]=1;c[19]=1;c[28]=0;c[39]=1;c[29]=
1;c[40]=1;c[30]=1;c[41]=1;}if(src.aT.Format===this._PIXEL_FORMAT_NATIVE)ex(b,ag.
aT,di?b.jj:(iI?b.ji:b.jh));else ex(b,ag.aT,di?b.jk:b.hZ);fM(b,src.aT,false);if(b.
ct&&!an)b.disable(b.BLEND);if(!b.ct&&an)b.enable(b.BLEND);b.ct=an;if(di){b.uniform4fv(
b.da.k7,c$(am));b.uniform4fv(b.da.k8,c$(aj));b.uniform4fv(b.da.k6,c$(ai));b.uniform4fv(
b.da.k5,c$(al));}b.bufferSubData(b.ARRAY_BUFFER,0,b.dk);b.drawArrays(b.TRIANGLE_STRIP
,0,4);if(this.c5)fn(b);};e.gN=function(n,ay,ac,bF,k,f,dp,cZ,am,aj,ai,al,an){var b=
this.ah;var ag=null;var src=null;var s=f[0];var q=f[1];var x=f[2];var w=f[3];var
hS=dp[0];var hT=dp[1];var kK=dp[2];var kL=dp[3];if(n&&(ac>=0)&&(ac<n.NoOfFrames)
){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(ay&&(bF>=0)&&(bF<ay.NoOfFrames)){bF=ay.ca?
ay.ca[bF]:bF;src=ay.cB[bF];}if(ay.gI)return;if(!ag||(ag.aT.Format!==this._PIXEL_FORMAT_NATIVE
)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}hS=Math.max(hS,0);hT=Math.max(hT,0);kK=Math.min(kK,ay.FrameSize[0]);kL=
Math.min(kL,ay.FrameSize[1]);var e2=kK-hS;var e1=kL-hT;s=Math.max(k[0],s,0);q=Math.
max(k[1],q,0);x=Math.min(k[2],x,n.FrameSize[0]);w=Math.min(k[3],w,n.FrameSize[1]
);if((x<=s)||(w<=q)||(e2<=0)||(e1<=0))return;am=cU(am);aj=cU(aj);al=cU(al);ai=cU(
ai);var i_=(am!==al)||(aj!==ai);var iM=(am!==aj)||(al!==ai);var di=((am!==ai)||(
aj!==al))&&((am!==aj)||(ai!==al));var fC=i_||iM;var iI=fC||(((am>>24)&0xFF)<255);
var oo;if(i_&&((q!==f[1])||(w!==f[3]))){var cj=1/(f[3]-f[1]);var a6=(q-f[1])*cj;
var aS=(f[3]-w)*cj;if(am!==al){var d0=am;if(a6)am=bp(d0,al,a6);if(aS)al=bp(al,d0
,aS);}if(aj!==ai){var hD=aj;if(a6)aj=bp(hD,ai,a6);if(aS)ai=bp(ai,hD,aS);}}if(iM&&((
s!==f[0])||(x!==f[2]))){var cj=1/(f[2]-f[0]);var by=(s-f[0])*cj;var au=(f[2]-x)*
cj;if(am!==aj){var d0=am;if(by)am=bp(d0,aj,by);if(au)aj=bp(aj,d0,au);}if(al!==ai
){var hy=al;if(by)al=bp(hy,ai,by);if(au)ai=bp(ai,hy,au);}}var c=b.hW;var a7=b.kQ;
if(src.aT.Format===this._PIXEL_FORMAT_NATIVE)ex(b,ag.aT,oo=(di?b.mA:(iI?b.mv:b.mu
)));else ex(b,ag.aT,oo=(di?b.mB:b.mw));fM(b,src.aT,false);b.uniform2f(oo.vQ,e2*src.
aT.dI,e1*src.aT.dH);b.uniform2f(oo.vO,(hS+src.aK[0])*src.aT.dI,(hT+src.aK[1])*src.
aT.dH);hS=(cZ[0]+s-f[0]+e2)/e2;hT=(cZ[1]+q-f[1]+e1)/e1;kK=hS+((x-s)/e2);kL=hT+((
w-q)/e1);c[0]=c[22]=s+ag.aK[0];c[1]=c[12]=q+ag.aK[1];c[11]=c[33]=x+ag.aK[0];c[34
]=c[23]=w+ag.aK[1];c[2]=hS;c[3]=hT;c[4]=1;c[13]=kK;c[14]=hT;c[15]=1;c[35]=kK;c[36
]=kL;c[37]=1;c[24]=hS;c[25]=kL;c[26]=1;a7[5]=am;a7[16]=aj;a7[38]=ai;a7[27]=al;if(
di){c[6]=0;c[17]=1;c[7]=0;c[18]=0;c[8]=1;c[19]=1;c[28]=0;c[39]=1;c[29]=1;c[40]=1;
c[30]=1;c[41]=1;}if(b.ct&&!an)b.disable(b.BLEND);if(!b.ct&&an)b.enable(b.BLEND);
b.ct=an;if(di){b.uniform4fv(b.da.k7,c$(am));b.uniform4fv(b.da.k8,c$(aj));b.uniform4fv(
b.da.k6,c$(ai));b.uniform4fv(b.da.k5,c$(al));}b.bufferSubData(b.ARRAY_BUFFER,0,b.
dk);b.drawArrays(b.TRIANGLE_STRIP,0,4);if(this.c5)fn(b);};e.aab=function(n,ay,ac
,bF,k,f,dp,dW,dX,ea,d$,rP,am,aj,ai,al,an){var co=[0,0];var bT=f[0];var bU=f[1];var
bA=f[2];var bC=f[3];var bI=dp[0];var bE=dp[1];var b2=dp[2];var b1=dp[3];var cl=bA-
bT;var cc=bC-bU;var cq=((b2-bI)/3)|0;var b7=((b1-bE)/3)|0;var hN=(b2-bI-cq*2)|0;
var hM=(b1-bE-b7*2)|0;var ti=0;var qo=0;var hB=am;var hC=aj;var hz=al;var hA=ai;
var kl=am;var km=aj;var kj=al;var kk=ai;var nU=am;var nW=aj;var nT=al;var nV=ai;
if((cl<=0)||(cc<=0)||(hN<=0)||(hM<=0))return;if(ay&&ay.gI)return;if(dW&&ea&&dX&&
d$&&rP&&(cl===(b2-bI))&&(cc===(b1-bE))){this.db(n,ay,ac,bF,k,f,[bI,bE],am,aj,ai,
al,an);return;}if((am!==aj)||(ai!==al)||(aj!==al)){if(dW){kl=bp(am,aj,cq/cl);kj=
bp(al,ai,cq/cl);}if(ea){km=bp(aj,am,cq/cl);kk=bp(ai,al,cq/cl);}if(dX){nU=bp(am,al
,b7/cc);nW=bp(aj,ai,b7/cc);}if(d$){nT=bp(al,am,b7/cc);nV=bp(ai,aj,b7/cc);}if(!dW&&
!dX)hB=am;if(dW&&!dX)hB=kl;if(!dW&&dX)hB=nU;if(!ea&&!dX)hC=aj;if(ea&&!dX)hC=km;if(
!ea&&dX)hC=nW;if(!dW&&!d$)hz=al;if(dW&&!d$)hz=kj;if(!dW&&d$)hz=nT;if(!ea&&!d$)hA=
ai;if(ea&&!d$)hA=kk;if(!ea&&d$)hA=nV;if(dW&&dX)hB=bp(kl,kj,b7/cc);if(dW&&d$)hz=bp(
kj,kl,b7/cc);if(ea&&dX)hC=bp(km,kk,b7/cc);if(ea&&d$)hA=bp(kk,km,b7/cc);}if(ea&&!
dW)ti=cq-cl;if(d$&&!dX)qo=b7-cc;b2=bI+cq;b1=bE+b7;bA=bT+cq;bC=bU+b7;if(dW&&dX)this.
db(n,ay,ac,bF,k,[bT,bU,bA,bC],[bI,bE],am,kl,hB,nU,an);bT+=cl-cq;bA+=cl-cq;bI+=cq+
hN;b2+=cq+hN;if(ea&&dX)this.db(n,ay,ac,bF,k,[bT,bU,bA,bC],[bI,bE],km,aj,nW,hC,an
);bU+=cc-b7;bC+=cc-b7;bE+=b7+hM;b1+=b7+hM;if(ea&&d$)this.db(n,ay,ac,bF,k,[bT,bU,
bA,bC],[bI,bE],hA,nV,ai,kk,an);bT-=cl-cq;bA-=cl-cq;bI-=cq+hN;b2-=cq+hN;if(dW&&d$
)this.db(n,ay,ac,bF,k,[bT,bU,bA,bC],[bI,bE],nT,hz,kj,al,an);bU-=cc-b7;bE-=hM;b1-=
b7;co[1]=qo;if(dX)bU+=b7;if(d$)bC-=b7;if(dW)this.gN(n,ay,ac,bF,k,[bT,bU,bA,bC],[
bI,bE,b2,b1],co,nU,hB,hz,nT,an);bT+=cl-cq;bA+=cl-cq;bI+=cq+hN;b2+=cq+hN;if(ea)this.
gN(n,ay,ac,bF,k,[bT,bU,bA,bC],[bI,bE,b2,b1],co,hC,nW,nV,hA,an);if(dX)bU-=b7;bC=bU+
b7;bT-=cl-cq;bI-=hN;b2-=cq;bE-=b7;b1-=hM;co[0]=ti;co[1]=0;if(dW)bT+=cq;if(ea)bA-=
cq;if(dX)this.gN(n,ay,ac,bF,k,[bT,bU,bA,bC],[bI,bE,b2,b1],co,kl,km,hC,hB,an);bU+=
cc-b7;bC+=cc-b7;bE+=b7+hM;b1+=b7+hM;if(d$)this.gN(n,ay,ac,bF,k,[bT,bU,bA,bC],[bI
,bE,b2,b1],co,hz,hA,kk,kj,an);if(dW)bT-=cq;bA=bT+cl;bU-=cc-b7;bE-=hM;b1-=b7;co[1
]=qo;if(dW)bT+=cq;if(dX)bU+=b7;if(ea)bA-=cq;if(d$)bC-=b7;if(rP)this.gN(n,ay,ac,bF
,k,[bT,bU,bA,bC],[bI,bE,b2,b1],co,hB,hC,hA,hz,an);};e.ab6=function(n,ay,ac,bF,k,
ie,ih,dK,ig,j7,dm,j5,ii,c6,j6,j8,dx,dp,bd,bg,cW,cX,an,eQ){bd=cU(bd);bg=cU(bg);cW=
cU(cW);cX=cU(cX);if((ie===j6)&&(ig===j5)&&(ih===j7)&&(ii===j8)&&(dK===dm)&&(dm===
c6)&&(c6===dx))this.v4.apply(this,arguments);else this.v5.apply(this,arguments);
};e.v4=function(n,ay,ac,bF,k,ie,ih,dK,ig,j7,dm,j5,ii,c6,j6,j8,dx,dp,bd,bg,cW,cX,
an,eQ){var b=this.ah;var ag=null;var src=null;var bT=ie;var bU=ih;var bA=ig;var bC=
ii;var bI=dp[0];var bE=dp[1];var b2=dp[2];var b1=dp[3];var s=Math.min(bT,bA);var
q=Math.min(bU,bC);var x=Math.max(bT,bA);var w=Math.max(bU,bC);var di=((bd!=cW)||(
bg!=cX))&&((bd!=bg)||(cW!=cX));if(n&&(ac>=0)&&(ac<n.NoOfFrames)){ac=n.ca?n.ca[ac
]:ac;ag=n.cB[ac];}if(ay&&(bF>=0)&&(bF<ay.NoOfFrames)){bF=ay.ca?ay.ca[bF]:bF;src=
ay.cB[bF];}if(ay.gI)return;if(!ag||(ag.aT.Format!==this._PIXEL_FORMAT_NATIVE)){console.
log("EmWi error: Invalid destination bitmap in the drawing operation.");return;}
if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}bI=Math.max(bI,0);bE=Math.max(bE,0);b2=Math.min(b2,ay.FrameSize[0]);b1=
Math.min(b1,ay.FrameSize[1]);s=Math.max(k[0],s,0);q=Math.max(k[1],q,0);x=Math.min(
k[2],x,n.FrameSize[0]);w=Math.min(k[3],w,n.FrameSize[1]);if((x<=s)||(w<=q))return;
if((q>bU)||(w<bU)||(q>bC)||(w<bC)){var cj=1/(bC-bU);var a6,aS;if(cj>0){a6=(q-bU)
*cj;aS=(bC-w)*cj;}else{a6=(w-bU)*cj;aS=(bC-q)*cj;}if(bd!==cX){var pR=bd;if(a6)bd=
bp(bd,cX,a6);if(aS)cX=bp(cX,pR,aS);}if(bg!==cW){var xr=bg;if(a6)bg=bp(bg,cW,a6);
if(aS)cW=bp(cW,xr,aS);}var zo=bE;bE=bE+(b1-bE)*a6;b1=b1+(zo-b1)*aS;if(q>bU)bU=q;
else if(w<bU)bU=w;if(q>bC)bC=q;else if(w<bC)bC=w;}if((s>bT)||(x<bT)||(s>bA)||(x<
bA)){var cj=1/(bA-bT);var by,au;if(cj>0){by=(s-bT)*cj;au=(bA-x)*cj;}else{by=(x-bT
)*cj;au=(bA-s)*cj;}if(bd!==bg){var pR=bd;if(by)bd=bp(bd,bg,by);if(au)bg=bp(bg,pR
,au);}if(cX!==cW){var xs=cX;if(by)cX=bp(cX,cW,by);if(au)cW=bp(cW,xs,au);}var zn=
bI;bI=bI+(b2-bI)*by;b2=b2+(zn-b2)*au;if(s>bT)bT=s;else if(x<bT)bT=x;if(s>bA)bA=s;
else if(x<bA)bA=x;}bI=(bI+src.aK[0])*src.aT.dI;bE=(bE+src.aK[1])*src.aT.dH;b2=(b2+
src.aK[0])*src.aT.dI;b1=(b1+src.aK[1])*src.aT.dH;bT+=ag.aK[0];bA+=ag.aK[0];bU+=ag.
aK[1];bC+=ag.aK[1];var iI=(((bd&bg&cW&cX)>>24)&0xFF)<255;var c=b.hW;var a7=b.kQ;
c[0]=bT;c[11]=bA;c[1]=bU;c[12]=bU;c[2]=bI;c[13]=b2;c[3]=bE;c[14]=bE;c[4]=1;c[15]=
1;a7[5]=bd;a7[16]=bg;c[6]=0;c[17]=1;c[7]=0;c[18]=0;c[8]=1;c[19]=1;c[22]=bT;c[33]=
bA;c[23]=bC;c[34]=bC;c[24]=bI;c[35]=b2;c[25]=b1;c[36]=b1;c[26]=1;c[37]=1;a7[27]=
cX;a7[38]=cW;c[28]=0;c[39]=1;c[29]=1;c[40]=1;c[30]=1;c[41]=1;if(src.aT.Format===
this._PIXEL_FORMAT_NATIVE)ex(b,ag.aT,iI?(di?b.jj:b.ji):b.jh);else ex(b,ag.aT,di?
b.jk:b.hZ);fM(b,src.aT,eQ);if(b.ct&&!an)b.disable(b.BLEND);if(!b.ct&&an)b.enable(
b.BLEND);b.ct=an;if(di){b.uniform4fv(b.da.k7,c$(bd));b.uniform4fv(b.da.k8,c$(bg)
);b.uniform4fv(b.da.k6,c$(cW));b.uniform4fv(b.da.k5,c$(cX));}b.bufferSubData(b.ARRAY_BUFFER
,0,b.dk);b.drawArrays(b.TRIANGLE_STRIP,0,4);if(this.c5)fn(b);};e.v5=function(n,ay
,ac,bF,k,ie,ih,dK,ig,j7,dm,j5,ii,c6,j6,j8,dx,dp,bd,bg,cW,cX,an,eQ){var b=this.ah;
var ag=null;var src=null;var bT=Math.min(ie,ig,j5,j6);var bU=Math.min(ih,j7,ii,j8
);var bA=Math.max(ie,ig,j5,j6);var bC=Math.max(ih,j7,ii,j8);var bI=dp[0];var bE=
dp[1];var b2=dp[2];var b1=dp[3];var s=Math.round(bT);var q=Math.round(bU);var x=
Math.round(bA);var w=Math.round(bC);var xv=s;var xy=q;var xw=x;var xz=w;if(n&&(ac>=
0)&&(ac<n.NoOfFrames)){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(ay&&(bF>=0)&&(bF<ay.NoOfFrames
)){bF=ay.ca?ay.ca[bF]:bF;src=ay.cB[bF];}if(ay.gI)return;if(!ag||(ag.aT.Format!==
this._PIXEL_FORMAT_NATIVE)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}bI=Math.max(bI,0);bE=Math.max(bE,0);b2=Math.min(b2,ay.FrameSize[0]);b1=
Math.min(b1,ay.FrameSize[1]);s=Math.max(k[0],s,0);q=Math.max(k[1],q,0);x=Math.min(
k[2],x,n.FrameSize[0]);w=Math.min(k[3],w,n.FrameSize[1]);if((x<=s)||(w<=q))return;
if((dK<=0)&&(dm<=0)&&(c6<=0)&&(dx<=0)){dK=-dK;dm=-dm;c6=-c6;dx=-dx;}if((dK<0)||(
dm<0)||(c6<0)||(dx<0)){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}var l0=(dK!==dm)||(c6!==dx)||(dK!==c6);var fC=(bd!==bg)||(cW!==cX)||(bd
!==cX)||(bg!==cW);var iI=fC||(((bd>>24)&0xFF)<255);var qu=fC;var di=fC&&((bd!=cW
)||(bg!=cX))&&((bd!=bg)||(cW!=cX));if(l0){var gt=dK;if(dm<gt)gt=dm;if(c6<gt)gt=c6;
if(dx<gt)gt=dx;if(!dK||!dm||!c6||!dx){console.log("Emwi error: Not convex destination polygon to warp bitmap."
);return;}dK=gt/dK;dm=gt/dm;c6=gt/c6;dx=gt/dx;}else{dK=1;dm=1;c6=1;dx=1;}bI=(bI+
src.aK[0])*src.aT.dI;bE=(bE+src.aK[1])*src.aT.dH;b2=(b2+src.aK[0])*src.aT.dI;b1=(
b1+src.aK[1])*src.aT.dH;var c=b.hW;var a7=b.kQ;var dO=ag.aK[0];var dP=ag.aK[1];var
ao=4;c[0]=ie+dO;c[11]=ig+dO;c[1]=ih+dP;c[12]=j7+dP;c[2]=bI*dK;c[13]=b2*dm;c[3]=bE
*dK;c[14]=bE*dm;c[4]=dK;c[15]=dm;a7[5]=bd;a7[16]=bg;c[6]=0;c[17]=dm;c[7]=0;c[18]=
0;c[8]=dK;c[19]=dm;c[33]=j6+dO;c[22]=j5+dO;c[34]=j8+dP;c[23]=ii+dP;c[35]=bI*dx;c[
24]=b2*c6;c[36]=b1*dx;c[25]=b1*c6;c[37]=dx;c[26]=c6;a7[38]=cX;a7[27]=cW;c[39]=0;
c[28]=c6;c[40]=dx;c[29]=c6;c[41]=dx;c[30]=c6;if((s>xv)||(q>xy)||(x<xw)||(w<xz)){
ao=mm(c,a7,ao,false,s+dO);ao=mm(c,a7,ao,false,x+dO);ao=qY(c,ao,s+dO,x+dO);ao=ml(
c,a7,ao,false,q+dP);ao=ml(c,a7,ao,false,w+dP);ao=qX(c,ao,q+dP,w+dP);if(ao<3)return;
}if((src.aT.Format===this._PIXEL_FORMAT_NATIVE)&&!iI)ex(b,ag.aT,l0?b.mr:b.jh);else
if(src.aT.Format===this._PIXEL_FORMAT_NATIVE)ex(b,ag.aT,l0?(qu?b.mx:b.ms):(di?b.
jj:b.ji));else ex(b,ag.aT,l0?(qu?b.my:b.mt):(di?b.jk:b.hZ));fM(b,src.aT,eQ);if(b.
ct&&!an)b.disable(b.BLEND);if(!b.ct&&an)b.enable(b.BLEND);b.ct=an;switch(ao){case
4:{c.set(c.subarray(22,44),33);c.set(c.subarray(44,55),22);break;}case 5:{c.set(
c.subarray(22,55),33);c.set(c.subarray(55,66),22);break;}case 6:{c.set(c.subarray(
22,66),66);c.set(c.subarray(99,110),22);c.set(c.subarray(66,77),33);c.set(c.subarray(
88,99),44);c.set(c.subarray(77,88),55);break;}case 7:{c.set(c.subarray(22,77),77
);c.set(c.subarray(121,132),22);c.set(c.subarray(77,88),33);c.set(c.subarray(110
,121),44);c.set(c.subarray(88,110),55);break;}case 8:{c.set(c.subarray(22,88),88
);c.set(c.subarray(143,154),22);c.set(c.subarray(88,99),33);c.set(c.subarray(132
,143),44);c.set(c.subarray(99,110),55);c.set(c.subarray(121,132),66);c.set(c.subarray(
110,121),77);break;}}if(di||(qu&&l0)){b.uniform4fv(b.da.k7,c$(bd));b.uniform4fv(
b.da.k8,c$(bg));b.uniform4fv(b.da.k6,c$(cW));b.uniform4fv(b.da.k5,c$(cX));}b.bufferSubData(
b.ARRAY_BUFFER,0,b.dk);b.drawArrays(b.TRIANGLE_STRIP,0,ao);if(this.c5)fn(b);};function
kS(a,aI,dy){var dF=a.createTexture();var aJ={};a.eM=null;a.bindTexture(a.TEXTURE_2D
,dF);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.NEAREST);a.texParameteri(
a.TEXTURE_2D,a.TEXTURE_MAG_FILTER,a.NEAREST);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S
,a.CLAMP_TO_EDGE);a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE);
a.texImage2D(a.TEXTURE_2D,0,a.RGBA,aI,dy,0,a.RGBA,a.UNSIGNED_BYTE,null);aJ.Width=
aI;aJ.Height=dy;aJ.k1=aI;aJ.k0=dy;aJ.dI=1/aI;aJ.dH=1/dy;aJ.ge=2/aI;aJ.gd=2/dy;aJ.
cV=dF;aJ.Framebuffer=null;return aJ;}function gD(a,kb){if(a.eM===kb)fM(a,null,false
);if(a.kU===kb)mY(a,null,false);if(kb.cV)a.deleteTexture(kb.cV);if(kb.Framebuffer
)a.deleteFramebuffer(kb.Framebuffer);}function cM(a,n,ay,cf,nk,hu,hp,lo,nw,cx,ar
,wS,cb,bh,an,eQ){var c=a.hW;ex(a,n,cb);fM(a,ay,eQ);c[0]=c[22]=nk[0];c[1]=c[12]=nk[
1];c[11]=c[33]=nk[2];c[34]=c[23]=nk[3];c[2]=hu[0];c[3]=hu[1];c[4]=1;c[13]=hu[2];
c[14]=hu[1];c[15]=1;c[35]=hu[2];c[36]=hu[3];c[37]=1;c[24]=hu[0];c[25]=hu[3];c[26
]=1;if(cf){c[9]=hp[0];c[10]=hp[1];c[20]=hp[2];c[21]=hp[1];c[42]=hp[2];c[43]=hp[3
];c[31]=hp[0];c[32]=hp[3];mY(a,cf,false);a.uniform1i(cb.vL,wS?1:0);a.uniform2f(cb.
vM,cf.dI,cf.dH);a.uniform2f(cb.vN,nw?0:cf.dI,nw?cf.dH:0);}if(lo&&cb.m1){a.uniform2f(
cb.m1,2*lo[0]*ay.dI,2*lo[1]*ay.dH);a.uniform2f(cb.rm,2*lo[2]*ay.dI,2*lo[3]*ay.dH
);}else if(cb.m1){a.uniform2f(cb.m1,0,0);a.uniform2f(cb.rm,0,0);}a.uniform2f(cb.
vP,ay.dI,ay.dH);a.uniform2f(cb.vR,nw?0:ay.dI,nw?ay.dH:0);if(cb.rp)a.uniform4fv(cb.
rp,c$(ar));if(cb.ro)a.uniform1f(cb.ro,bh/255);if(cb.rn)a.uniform1f(cb.rn,cx);if(
!an&&a.ct)a.disable(a.BLEND);if(an&&!a.ct)a.enable(a.BLEND);a.ct=an;a.bufferSubData(
a.ARRAY_BUFFER,0,a.dk);a.drawArrays(a.TRIANGLE_STRIP,0,4);}function qQ(cp,ir){if(
cp>=0)return cp-cp%ir;else return cp-(ir-(-cp%ir));}function qP(cp,ir){if(cp>=0)
return cp+ir-(cp%ir);else return cp+-cp%ir;}e.v1=function(aM){if(aM<=0)return 0;
else if(aM<=3)return 2;else if(aM<=6)return 4;else if(aM<=12)return 8;else if(aM<=
20)return 16;else if(aM<=28)return 24;else if(aM<=40)return 32;else if(aM<=56)return 48;
else return 64;};e.aag=function(n,ay,cf,ac,k,f,cZ,np,dz,pB,aM,ln,e$,cx,ar,bh,an){
var b=this.ah;var ag=null;var src=null;var gu=null;if(cx<0)cx=0;if(cx>1)cx=1;if(
bh<0)bh=0;if(bh>255)bh=255;ar=cU(ar);var aA=this.v1(aM);e$&=(cx>0)?3:0;if(e$===this.
wB){e$=this.li;ar=0xFFFFFFFF;}var n7=cf!==null;var pV=aA>0;var hG=((e$===this.lj
)||(e$===this.li))&&(cx>0);pB&=pV&&n7;dz&=n7;ln&=pV;if(n&&(ac>=0)&&(ac<n.NoOfFrames
)){ac=n.ca?n.ca[ac]:ac;ag=n.cB[ac];}if(ay&&(ay.NoOfFrames===1))src=ay.cB[0];if(cf&&(
cf.NoOfFrames===1))gu=cf.cB[0];if(ay.gI||(cf&&cf.gI))return;if(!ag||(ag.aT.Format
!==this._PIXEL_FORMAT_NATIVE)){console.log("EmWi error: Invalid destination bitmap in the drawing operation."
);return;}if(!src){console.log("EmWi error: Invalid source bitmap in the drawing operation."
);return;}if(cf&&(!gu||(gu.aT.Format!==this._PIXEL_FORMAT_ALPHA8))){console.log(
"EmWi error: Invalid mask bitmap in the drawing operation.");return;}if((src.aT.
Format===this._PIXEL_FORMAT_ALPHA8)&&!e$)ar=0xFFFFFFFF;if(src.aT.Format===this._PIXEL_FORMAT_ALPHA8
)e$=this.lj;if(an&&!bh)return;if(an&&hG&&(cx===1)&&!(ar&0xFF000000))return;if(!pV&&
!n7&&!hG){var as=0x00FFFFFF|(bh<<24);this.db(n,ay,ac,0,k,f,cZ,as,as,as,as,an);return;
}var ow=f[0];var ox=f[1];var tB=f[2];var tC=f[3];var oy=ow-cZ[0];var oz=ox-cZ[1];
var zr=oy+ay.FrameSize[0];var zs=oz+ay.FrameSize[1];var tD=cf?ow-np[0]:0;var tE=
cf?ox-np[1]:0;var zp=cf?tD+cf.FrameSize[0]:0;var zq=cf?tE+cf.FrameSize[1]:0;var fz=
Math.max(k[0],ow,0);var fA=Math.max(k[1],ox,0);var fZ=Math.min(k[2],tB,n.FrameSize[
0]);var f0=Math.min(k[3],tC,n.FrameSize[1]);if(cf&&!dz){var cy=pB?aA:0;fz=Math.max(
fz,tD-cy);fA=Math.max(fA,tE-cy);fZ=Math.min(fZ,zp+cy);f0=Math.min(f0,zq+cy);}fz=
Math.max(fz,oy-aA);fA=Math.max(fA,oz-aA);fZ=Math.min(fZ,zr+aA);f0=Math.min(f0,zs+
aA);if((fZ<=fz)||(f0<=fA))return;var iE=fz-oy;var iG=fA-oz;var iF=fZ-oy;var iH=f0-
oz;var sd=iE-aA;var it=iG-aA;var se=iF+aA;var lK=iH+aA;var iC=np[0]+fz-f[0];var iD=
np[1]+fA-f[1];var kg=iC+(fZ-fz);var kh=iD+(f0-fA);var sy=Math.min(cZ[0],0);var sK=
Math.min(cZ[1],0);var sJ=Math.max(cZ[0]+(tB-ow),ay.FrameSize[0]);var so=Math.max(
cZ[1]+(tC-ox),ay.FrameSize[1]);var gq=[sy+1,sK+1,sJ-1,so-1];var pX=ag.aT;var eJ=
src.aT;var d3=gu?gu.aT:null;var bD;fz+=ag.aK[0];fA+=ag.aK[1];fZ+=ag.aK[0];f0+=ag.
aK[1];iE+=src.aK[0];iG+=src.aK[1];iF+=src.aK[0];iH+=src.aK[1];sd+=src.aK[0];it+=
src.aK[1];se+=src.aK[0];lK+=src.aK[1];sy+=src.aK[0];sK+=src.aK[1];sJ+=src.aK[0];
so+=src.aK[1];if(gu){iC+=gu.aK[0];iD+=gu.aK[1];kg+=gu.aK[0];kh+=gu.aK[1];}if(pB)
if(hG&&(e$===this.li))bD=[b.kX,b.jq,b.js,b.ju,null,null,b.jw,b.jy,null,null,b.ev
,b.ew,null,b.es,b.et,b.eu,b.jE,b.jF,b.jG,b.jH,b.jr,b.jt,b.jv,b.jx,b.jz];else if(
hG&&(e$===this.lj))bD=[b.kY,b.jq,b.js,b.ju,null,null,b.jw,b.jy,null,null,b.ev,b.
ew,null,b.es,b.et,b.eu,b.jI,b.jJ,b.jK,b.jL,b.jr,b.jt,b.jv,b.jx,b.jz];else bD=[b.
kZ,b.jq,b.js,b.ju,null,null,b.jw,b.jy,null,null,b.ev,b.ew,null,b.es,b.et,b.eu,b.
jM,b.jN,b.jO,b.jP,b.jr,b.jt,b.jv,b.jx,b.jz];else if(n7)if(hG&&(e$===this.li))bD=[
b.kX,b.jF,b.jG,b.jH,null,null,b.mF,b.mH,null,null,b.ev,b.ew,null,b.es,b.et,b.eu,
b.jA,b.jB,b.jC,b.jD,b.mC,b.mD,b.mE,b.mG,b.mI];else if(hG&&(e$===this.lj))bD=[b.kY
,b.jJ,b.jK,b.jL,null,null,b.mM,b.mO,null,null,b.ev,b.ew,null,b.es,b.et,b.eu,b.jA
,b.jB,b.jC,b.jD,b.mJ,b.mK,b.mL,b.mN,b.mP];else bD=[b.kZ,b.jN,b.jO,b.jP,null,null
,b.mT,b.mV,null,null,b.ev,b.ew,null,b.es,b.et,b.eu,b.jA,b.jB,b.jC,b.jD,b.mQ,b.mR
,b.mS,b.mU,b.mW];else if(hG&&(e$===this.li))bD=[b.jE,b.es,b.et,b.eu,null,null,b.
ev,b.ew,null,null,b.ev,b.ew,null,b.es,b.et,b.eu,b.jE,b.jF,b.jG,b.jH,b.jl,b.jm,b.
jn,b.jo,b.jp];else if(hG&&(e$===this.lj))bD=[b.jI,b.es,b.et,b.eu,null,null,b.ev,
b.ew,null,null,b.ev,b.ew,null,b.es,b.et,b.eu,b.jI,b.jJ,b.jK,b.jL,b.jl,b.jm,b.jn,
b.jo,b.jp];else bD=[b.jM,b.es,b.et,b.eu,null,null,b.ev,b.ew,null,null,b.ev,b.ew,
null,b.es,b.et,b.eu,b.jM,b.jN,b.jO,b.jP,b.jl,b.jm,b.jn,b.jo,b.jp];if(aM<=0){var xE=[
fz,fA,fZ,f0];var zc=[iE,iG,iF,iH];var y9=[iC,iD,kg,kh];cM(b,pX,eJ,d3,xE,zc,y9,null
,false,cx,ar,dz,bD[0],bh,an,false);}else if(aM<=12){var fh,dD,f7;if(aM<=3){fh=bD[
1];dD=bD[20];f7=bD[17];}else if(aM<=6){fh=bD[2];dD=bD[21];f7=bD[18];}else{fh=bD[
3];dD=bD[22];f7=bD[19];}var em=iF-iE;var fG=lK-it;var aV=[iE,it,iF,lK];var aU=[iC
,iD-(iG-it),kg,kh+(lK-iH)];var b_=[0,0,em,fG];var xC=[fz,fA,fZ,f0];var y7=[iC,iD
,kg,kh];var zm=[0,iG-it,em,iH-it];var aN=kS(b,em,fG);if(!aN)return;if(ln&&(em>(2
*aA))&&(fG>(2*aA))){var qB=b_[0];var qv=aV[0];var p_=aU[0];var qC=b_[2];var qw=aV[
2];var p$=aU[2];var qD=b_[3];var qx=aV[3];var qa=aU[3];b_[0]+=aA;aV[0]+=aA;aU[0]+=
aA;b_[1]+=aA;aV[1]+=aA;aU[1]+=aA;b_[2]-=aA;aV[2]-=aA;aU[2]-=aA;b_[3]-=aA;aV[3]-=
aA;aU[3]-=aA;cM(b,aN,eJ,d3,b_,aV,aU,null,false,cx,ar,dz,fh,bh,false,false);b_[0]-=
aA;aV[0]-=aA;aU[0]-=aA;b_[1]-=aA;aV[1]-=aA;aU[1]-=aA;b_[2]+=aA;aV[2]+=aA;aU[2]+=
aA;b_[3]+=aA;aV[3]+=aA;aU[3]+=aA;b_[2]=b_[0]+aA;aV[2]=aV[0]+aA;aU[2]=aU[0]+aA;cM(
b,aN,eJ,d3,b_,aV,aU,gq,false,cx,ar,dz,dD,bh,false,false);b_[2]=qC;aV[2]=qw;aU[2]=
p$;b_[0]=b_[2]-aA;aV[0]=aV[2]-aA;aU[0]=aU[2]-aA;cM(b,aN,eJ,d3,b_,aV,aU,gq,false,
cx,ar,dz,dD,bh,false,false);b_[0]=qB;aV[0]=qv;aU[0]=p_;b_[0]+=aA;aV[0]+=aA;aU[0]+=
aA;b_[2]-=aA;aV[2]-=aA;aU[2]-=aA;b_[3]=b_[1]+aA;aV[3]=aV[1]+aA;aU[3]=aU[1]+aA;cM(
b,aN,eJ,d3,b_,aV,aU,gq,false,cx,ar,dz,dD,bh,false,false);b_[3]=qD;aV[3]=qx;aU[3]=
qa;b_[1]=b_[3]-aA;aV[1]=aV[3]-aA;aU[1]=aU[3]-aA;cM(b,aN,eJ,d3,b_,aV,aU,gq,false,
cx,ar,dz,dD,bh,false,false);}else if(ln)cM(b,aN,eJ,d3,b_,aV,aU,gq,false,cx,ar,dz
,dD,bh,false,false);else cM(b,aN,eJ,d3,b_,aV,aU,null,false,cx,ar,dz,fh,bh,false,
false);cM(b,pX,aN,d3,xC,zm,y7,null,true,cx,ar,dz,f7,bh,an,false);gD(b,aN);}else{
var fh,dD,f7,iZ;var scale;if(aM<=20){fh=bD[6];dD=bD[23];f7=bD[10];iZ=bD[14];scale=
2;}else if(aM<=28){fh=bD[6];dD=bD[23];f7=bD[10];iZ=bD[15];scale=3;}else if(aM<=40
){fh=bD[6];dD=bD[23];f7=bD[10];iZ=bD[15];scale=4;}else if(aM<=56){fh=bD[7];dD=bD[
24];f7=bD[11];iZ=bD[15];scale=6;}else{fh=bD[7];dD=bD[24];f7=bD[11];iZ=bD[15];scale=
8;}var kI=qQ(sd,scale);var g$=qQ(it,scale);var ou=qP(se,scale);var i2=qP(lK,scale
);var em=((ou-kI)/scale)|0;var fG=((i2-g$)/scale)|0;var aV=[kI,g$,ou,i2];var aU=[
iC+kI-iE,iD+g$-iG,kg+ou-iF,kh+i2-iH];var b9=[0,0,em,(i2-g$)];var zf=[0,0,em,i2-g$
];var zg=[0,0,em,fG];var zh=[0,0,em,fG];var zi=[0,0,em,fG];var zj=[0,0,em,fG];var
zk=[0,0,em,fG];var zl=[(iE-kI)/scale,(iG-g$)/scale,(iF-kI)/scale,(iH-g$)/scale];
var xD=[fz,fA,fZ,f0];var y8=[iC,iD,kg,kh];var aN=kS(b,em,i2-g$);var bo=kS(b,em,fG
);var gb=kS(b,em,fG);var kM=kS(b,em,fG);if(!aN||!bo||!gb||!kM){if(aN)gD(b,aN);if(
bo)gD(b,bo);if(gb)gD(b,gb);if(kM)gD(b,kM);return;}if(ln&&((ou-kI)>(2*aA))&&((i2-
g$)>(2*aA))){var qB=b9[0];var qv=aV[0];var p_=aU[0];var qC=b9[2];var qw=aV[2];var
p$=aU[2];var qD=b9[3];var qx=aV[3];var qa=aU[3];var eb=aA*scale;b9[0]+=aA;aV[0]+=
eb;aU[0]+=eb;b9[1]+=aA;aV[1]+=aA;aU[1]+=aA;b9[2]-=aA;aV[2]-=eb;aU[2]-=eb;b9[3]-=
aA;aV[3]-=aA;aU[3]-=aA;cM(b,aN,eJ,d3,b9,aV,aU,null,false,cx,ar,dz,fh,bh,false,false
);b9[0]-=aA;aV[0]-=eb;aU[0]-=eb;b9[1]-=aA;aV[1]-=aA;aU[1]-=aA;b9[2]+=aA;aV[2]+=eb;
aU[2]+=eb;b9[3]+=aA;aV[3]+=aA;aU[3]+=aA;b9[2]=b9[0]+aA;aV[2]=aV[0]+eb;aU[2]=aU[0
]+eb;cM(b,aN,eJ,d3,b9,aV,aU,gq,false,cx,ar,dz,dD,bh,false,false);b9[2]=qC;aV[2]=
qw;aU[2]=p$;b9[0]=b9[2]-aA;aV[0]=aV[2]-eb;aU[0]=aU[2]-eb;cM(b,aN,eJ,d3,b9,aV,aU,
gq,false,cx,ar,dz,dD,bh,false,false);b9[0]=qB;aV[0]=qv;aU[0]=p_;b9[0]+=aA;aV[0]+=
eb;aU[0]+=eb;b9[2]-=aA;aV[2]-=eb;aU[2]-=eb;b9[3]=b9[1]+aA+2;aV[3]=aV[1]+aA+2;aU[
3]=aU[1]+aA+2;cM(b,aN,eJ,d3,b9,aV,aU,gq,false,cx,ar,dz,dD,bh,false,false);b9[3]=
qD;aV[3]=qx;aU[3]=qa;b9[1]=b9[3]-aA-2;aV[1]=aV[3]-aA-2;aU[1]=aU[3]-aA-2;cM(b,aN,
eJ,d3,b9,aV,aU,gq,false,cx,ar,dz,dD,bh,false,false);}else if(ln)cM(b,aN,eJ,d3,b9
,aV,aU,gq,false,cx,ar,dz,dD,bh,false,false);else cM(b,aN,eJ,d3,b9,aV,aU,null,false
,cx,ar,dz,fh,bh,false,false);cM(b,bo,aN,null,zg,zf,null,null,true,0,0,false,f7,255
,false,false);cM(b,gb,bo,null,zi,zh,null,null,false,0,0,false,iZ,255,false,false
);cM(b,kM,gb,null,zk,zj,null,null,true,0,0,false,iZ,255,false,false);cM(b,pX,kM,
d3,xD,zl,y8,null,false,cx,ar,dz,bD[16],bh,an,true);gD(b,aN);gD(b,bo);gD(b,gb);gD(
b,kM);}if(this.c5)fn(b);};function q0(a,gR,pA,lr,bx,bM,cQ,h_,ia,h$,ib,f,ar){var lW=
gR.length*6;var dk=new ArrayBuffer(lW*11*4);var c=new Float32Array(dk);var a7=new
Uint32Array(dk);var bj=lr[0]+f[0];var aY=lr[1]+f[1];var cl=f[2]-f[0];var cc=f[3]-
f[1];for(var d=0;d<gR.length;d++){var z=d*66;var ad=gR[d];var d1=pA[d];var s=bx+
ad.OriginX+d1;var q=bM+ad.OriginY;var x=s+ad.Width;var w=q+ad.Height;var c0=ad.qT;
var dE=ad.qU;var ck=ad.qV;var b8=ad.qW;if((q<ia)&&(w!==q)){ck+=((ia-q)/(w-q))*(b8-
ck);q=ia;}if((w>ib)&&(w!==q)){b8+=((ib-w)/(w-q))*(b8-ck);w=ib;}if((s<h_)&&(s!==x
)){c0+=((h_-s)/(x-s))*(dE-c0);s=h_;}if((x>h$)&&(s!==x)){dE+=((h$-x)/(x-s))*(dE-c0
);x=h$;}if(s>x)s=x;if(q>w)q=w;if(cQ===0){s+=bj;q+=aY;x+=bj;w+=aY;c[z+0]=s;c[z+11
]=x;c[z+1]=q;c[z+12]=q;c[z+22]=s;c[z+33]=s;c[z+23]=w;c[z+34]=w;c[z+44]=x;c[z+55]=
x;c[z+45]=q;c[z+56]=w;}else if(cQ===90){var c1=bj+q;var c3=aY+cc-s;var c2=bj+w;var
c4=aY+cc-x;c[z+0]=c1;c[z+11]=c1;c[z+1]=c3;c[z+12]=c4;c[z+22]=c2;c[z+33]=c2;c[z+23
]=c3;c[z+34]=c3;c[z+44]=c1;c[z+55]=c2;c[z+45]=c4;c[z+56]=c4;}else if(cQ===180){var
c1=bj+cl-s;var c3=aY+cc-q;var c2=bj+cl-x;var c4=aY+cc-w;c[z+0]=c1;c[z+11]=c2;c[z+
1]=c3;c[z+12]=c3;c[z+22]=c1;c[z+33]=c1;c[z+23]=c4;c[z+34]=c4;c[z+44]=c2;c[z+55]=
c2;c[z+45]=c3;c[z+56]=c4;}else if(cQ===270){var c1=bj+cl-q;var c3=aY+s;var c2=bj+
cl-w;var c4=aY+x;c[z+0]=c1;c[z+11]=c1;c[z+1]=c3;c[z+12]=c4;c[z+22]=c2;c[z+33]=c2;
c[z+23]=c3;c[z+34]=c3;c[z+44]=c1;c[z+55]=c2;c[z+45]=c4;c[z+56]=c4;}c[z+2]=c0;c[z+
13]=dE;c[z+3]=ck;c[z+14]=ck;c[z+4]=1;c[z+15]=1;a7[z+5]=ar;a7[z+16]=ar;c[z+24]=c0;
c[z+35]=c0;c[z+25]=b8;c[z+36]=b8;c[z+26]=1;c[z+37]=1;a7[z+27]=ar;a7[z+38]=ar;c[z+
46]=dE;c[z+57]=dE;c[z+47]=ck;c[z+58]=b8;c[z+48]=1;c[z+59]=1;a7[z+49]=ar;a7[z+60]=
ar;bx+=ad.Advance+d1;}a.bufferData(a.ARRAY_BUFFER,dk,a.STREAM_DRAW);a.drawArrays(
a.TRIANGLES,0,lW);a.bufferData(a.ARRAY_BUFFER,a.dk,a.STREAM_DRAW);}function q1(a
,gR,pA,lr,bx,bM,cQ,h_,ia,h$,ib,f,am,aj,ai,al){var lW=gR.length*6;var dk=new ArrayBuffer(
lW*11*4);var c=new Float32Array(dk);var a7=new Uint32Array(dk);var bj=lr[0]+f[0];
var aY=lr[1]+f[1];var cl=f[2]-f[0];var cc=f[3]-f[1];var og=1/cl;var od=1/cc;if(cQ===
90){var h=am;am=al;al=ai;ai=aj;aj=h;og=1/cc;od=1/cl;}else if(cQ===180){var aN=am;
var bo=al;am=ai;ai=aN;al=aj;aj=bo;}else if(cQ===270){var h=am;am=aj;aj=ai;ai=al;
al=h;og=1/cc;od=1/cl;}var nz=(am&0xFF);var nA=((am>>8)&0xFF);var nB=((am>>16)&0xFF
);var nC=((am>>24)&0xFF);var nD=(aj&0xFF);var nE=((aj>>8)&0xFF);var nF=((aj>>16)&
0xFF);var nG=((aj>>24)&0xFF);var sg=(al&0xFF);var sh=((al>>8)&0xFF);var si=((al>>
16)&0xFF);var sj=((al>>24)&0xFF);var sk=(ai&0xFF);var sl=((ai>>8)&0xFF);var sm=((
ai>>16)&0xFF);var sn=((ai>>24)&0xFF);for(var d=0;d<gR.length;d++){var z=d*66;var
ad=gR[d];var d1=pA[d];var s=bx+ad.OriginX+d1;var q=bM+ad.OriginY;var x=s+ad.Width;
var w=q+ad.Height;var c0=ad.qT;var dE=ad.qU;var ck=ad.qV;var b8=ad.qW;if((q<ia)&&(
w!==q)){ck+=((ia-q)/(w-q))*(b8-ck);q=ia;}if((w>ib)&&(w!==q)){b8+=((ib-w)/(w-q))*(
b8-ck);w=ib;}if((s<h_)&&(s!==x)){c0+=((h_-s)/(x-s))*(dE-c0);s=h_;}if((x>h$)&&(s!==
x)){dE+=((h$-x)/(x-s))*(dE-c0);x=h$;}if(s>x)s=x;if(q>w)q=w;var hK=q*od;var hH=w*
od;var hI=s*og;var hJ=x*og;var nN=nz+(sg-nz)*hK;var nO=nA+(sh-nA)*hK;var nP=nB+(
si-nB)*hK;var nQ=nC+(sj-nC)*hK;var st=nD+(sk-nD)*hK;var su=nE+(sl-nE)*hK;var sv=
nF+(sm-nF)*hK;var sw=nG+(sn-nG)*hK;var nJ=nz+(sg-nz)*hH;var nK=nA+(sh-nA)*hH;var
nL=nB+(si-nB)*hH;var nM=nC+(sj-nC)*hH;var sp=nD+(sk-nD)*hH;var sq=nE+(sl-nE)*hH;
var sr=nF+(sm-nF)*hH;var ss=nG+(sn-nG)*hH;var xi=nN+(st-nN)*hI;var xj=nO+(su-nO)
*hI;var xk=nP+(sv-nP)*hI;var xl=nQ+(sw-nQ)*hI;var xm=nN+(st-nN)*hJ;var xn=nO+(su-
nO)*hJ;var xo=nP+(sv-nP)*hJ;var xp=nQ+(sw-nQ)*hJ;var xa=nJ+(sp-nJ)*hI;var xb=nK+(
sq-nK)*hI;var xc=nL+(sr-nL)*hI;var xd=nM+(ss-nM)*hI;var xe=nJ+(sp-nJ)*hJ;var xf=
nK+(sq-nK)*hJ;var xg=nL+(sr-nL)*hJ;var xh=nM+(ss-nM)*hJ;am=xi|(xj<<8)|(xk<<16)|(
xl<<24);aj=xm|(xn<<8)|(xo<<16)|(xp<<24);ai=xe|(xf<<8)|(xg<<16)|(xh<<24);al=xa|(xb<<
8)|(xc<<16)|(xd<<24);if(cQ===0){s+=bj;q+=aY;x+=bj;w+=aY;c[z+0]=s;c[z+11]=x;c[z+1
]=q;c[z+12]=q;c[z+22]=s;c[z+33]=s;c[z+23]=w;c[z+34]=w;c[z+44]=x;c[z+55]=x;c[z+45
]=q;c[z+56]=w;}else if(cQ===90){var c1=bj+q;var c3=aY+cc-s;var c2=bj+w;var c4=aY+
cc-x;c[z+0]=c1;c[z+11]=c1;c[z+1]=c3;c[z+12]=c4;c[z+22]=c2;c[z+33]=c2;c[z+23]=c3;
c[z+34]=c3;c[z+44]=c1;c[z+55]=c2;c[z+45]=c4;c[z+56]=c4;}else if(cQ===180){var c1=
bj+cl-s;var c3=aY+cc-q;var c2=bj+cl-x;var c4=aY+cc-w;c[z+0]=c1;c[z+11]=c2;c[z+1]=
c3;c[z+12]=c3;c[z+22]=c1;c[z+33]=c1;c[z+23]=c4;c[z+34]=c4;c[z+44]=c2;c[z+55]=c2;
c[z+45]=c3;c[z+56]=c4;}else if(cQ===270){var c1=bj+cl-q;var c3=aY+s;var c2=bj+cl-
w;var c4=aY+x;c[z+0]=c1;c[z+11]=c1;c[z+1]=c3;c[z+12]=c4;c[z+22]=c2;c[z+33]=c2;c[
z+23]=c3;c[z+34]=c3;c[z+44]=c1;c[z+55]=c2;c[z+45]=c4;c[z+56]=c4;}c[z+2]=c0;c[z+13
]=dE;c[z+3]=ck;c[z+14]=ck;c[z+4]=1;c[z+15]=1;a7[z+5]=am;a7[z+16]=aj;c[z+24]=c0;c[
z+35]=c0;c[z+25]=b8;c[z+36]=b8;c[z+26]=1;c[z+37]=1;a7[z+27]=al;a7[z+38]=al;c[z+46
]=dE;c[z+57]=dE;c[z+47]=ck;c[z+58]=b8;c[z+48]=1;c[z+59]=1;a7[z+49]=aj;a7[z+60]=ai;
bx+=ad.Advance+d1;}a.bufferData(a.ARRAY_BUFFER,dk,a.STREAM_DRAW);a.drawArrays(a.
TRIANGLES,0,lW);a.bufferData(a.ARRAY_BUFFER,a.dk,a.STREAM_DRAW);}e.rz=function(n
,az,m,ak,ae,ac,k,f,cZ,eT,cQ,am,aj,ai,al,an){var b=this.ah;var ag=null;var s=f[0];
var q=f[1];var x=f[2];var w=f[3];var gA=-cZ[0];var gB=-cZ[1];var ga=0;var f$=0x8000;
var bm=0;var a_=m.length;var aq;if(n&&(ac>=0)&&(ac<n.NoOfFrames)){ac=n.ca?n.ca[ac
]:ac;ag=n.cB[ac];}if(!ag||(ag.aT.Format!==this._PIXEL_FORMAT_NATIVE)){console.log(
"EmWi error: Invalid destination bitmap in the drawing operation.");return;}if(!
az){console.log("EmWi error: Invalid font in the drawing operation.");return;}if(
ae===-1)ae=a_;if(a_<ae)ae=a_;if(ak<0){ae+=ak;ak=0;}if((ak+ae)>a_)ae=a_-ak;if(ae<=
0)return;if((cQ!==90)&&(cQ!==180)&&(cQ!==270))cQ=0;s=Math.max(k[0],s,0);q=Math.max(
k[1],q,0);x=Math.min(k[2],x,n.FrameSize[0]);w=Math.min(k[3],w,n.FrameSize[1]);if(
cQ===90){var h=q;q=s-f[0];s=f[3]-w;w=x-f[0];x=f[3]-h;}else if(cQ===180){var aN=s;
var bo=q;s=f[2]-x;q=f[3]-w;x=f[2]-aN;w=f[3]-bo;}else if(cQ===270){var h=s;s=q-f[
1];q=f[2]-x;x=w-f[1];w=f[2]-h;}else{s-=f[0];q-=f[1];x-=f[0];w-=f[1];}q=Math.max(
q,gB-az.Ascent);w=Math.min(w,gB+az.Descent+1);if((x<=s)||(w<=q))return;if(eT>0)eT-=
this.m9(az,m,ak,ae);if(eT>0){var co=ak;var ao=ae;var f5=0;for(;ao;co++,ao--){var
ab=m.charCodeAt(co);if((ab===32)||(ab===0xA0))f5++;}if(f5)ga=((eT<<16)/f5)|0;}am=
cU(am);aj=cU(aj);al=cU(al);ai=cU(ai);var fC=(am!==al)||(aj!==ai)||(am!==aj);ex(b
,ag.aT,b.hZ);fM(b,null,false);b.bindTexture(b.TEXTURE_2D,this.la);if(b.ct&&!an)b.
disable(b.BLEND);if(!b.ct&&an)b.enable(b.BLEND);b.ct=an;var cS=[];var kt=[];var l8=
gA;aq=this.hi();while(ae>0){var aD=[];var ab=m.charCodeAt(ak);var a$;var d,bP;if((
ab===0x061C)||(ab===0xFEFF)||((ab>=0x200B)&&(ab<=0x200F))||((ab>=0x202A)&&(ab<=0x202E
))||((ab>=0x2066)&&(ab<=0x2069))){ae--;ak++;continue;}if(ab===0x000A){ae--;ak++;
bm=0;continue;}a$=this.gl(az,m,ak,Math.min(ae,8),false,aD,aq);if(!a$){aD[0]=1;aD[
1]=0;a$=1;console.log("EmWi error: No glyph available for the character code: "+
m.charCodeAt(ak));}for(d=0;d<aD[0];d++){var ad=this.rD(az,aD[d+1]);var d1;if(!ad&&
cS.length){if(fC)q1(b,cS,kt,ag.aK,l8,gB,cQ,s,q,x,w,f,am,aj,ai,al);else q0(b,cS,kt
,ag.aK,l8,gB,cQ,s,q,x,w,f,am);for(bP=0;bP<cS.length;bP++)cS[bP].m2--;cS=[];kt=[];
ad=this.rD(az,aD[d+1]);}if(!ad){console.log("EmWi error: Not able to load the glyph: "+
aD[d+1]);return;}d1=this.dw(az,bm,aD[d+1]);if(ga&&((ab===0x20)||(ab===0xA0))){f$+=
ga;d1+=f$>>16;f$&=0xFFFF;}if(((gA+d1+ad.OriginX+ad.Width)<=s)&&!cS.length){gA+=d1+
ad.Advance;bm=aD[d+1];continue;}if((gA+d1+ad.OriginX)>=x){ae=0;break;}if(!cS.length
)l8=gA;ad.m2++;cS.push(ad);kt.push(d1);gA+=d1+ad.Advance;bm=aD[d+1];}ae-=a$;ak+=
a$;}if(cS.length){if(fC)q1(b,cS,kt,ag.aK,l8,gB,cQ,s,q,x,w,f,am,aj,ai,al);else q0(
b,cS,kt,ag.aK,l8,gB,cQ,s,q,x,w,f,am);for(bP=0;bP<cS.length;bP++)cS[bP].m2--;}if(
this.c5)fn(b);};e.aaa=function(n,ax,bB,ac,k,f,cZ,hr,hs,io,im,an){if(!n||!ax||!bB||(
ac<0)||(ac>=n.NoOfFrames))return;k=this.lb(k,f);if((k[2]<=k[0])||(k[3]<=k[1]))return;
if(hr<0)hr=0;if(hr>255)hr=255;if(hs<0)hs=0;if(hs>255)hs=255;if(im<0)im=0;if(im>255
)im=255;if(io<0)io=0;if(io>255)io=255;var width=f[2]-f[0];var height=f[3]-f[1];var
sY=1;var oe=1;var s0=(hr!==im)||(hs!==io);var sZ=(hr!==hs)||(im!==io);if(width&&
sZ)sY/=width;if(height&&s0)oe/=height;var fC={q$:sZ,ra:s0,vn:sY,zT:oe,Width:width
,Height:height,tN:hr,tO:(im-hr)*oe,tP:hs,tQ:(io-hs)*oe};t2(this,n,ac,k,f,f[0]-cZ[
0],f[1]-cZ[1],ax,bB.Data,0,bB.Data.length,an,fC);};e.wf=[0,0];e.wg=[0,0,0,0];e.jV=
"";e.k$=3.1415926535/180;e.rE=180/3.1415926535;e.nf=new Array(129).join('0');e.j0=[
];e.h8=null;e.h7=0;e.jS=null;e.ry=0;e.d_=null;e.e8=null;e.hj=null;e.jZ=null;e.rs=
null;e.zU="";e.cD=null;e.v$=0;e.fs=null;e.ah=null;e.h3=null;e.ld=false;e.lc=false;
e.h6=false;e.ft=0;e.j2=[];e.pf=[];e.rG=[];e.ez=0;e.gk=0;e.o9=null;e.m7=false;e.o4=
false;e.c5=false;e.cP=null;e.h5=1024;e.m$=1024;e.h4=64;e.la=null;e.hh=null;e.m_=
null;e.jW=null;e.j1=0;e.lh=-1;e._PIXEL_FORMAT_NATIVE=0;e._PIXEL_FORMAT_ALPHA8=1;
e.o$=0x00000000;e.lf=0x00000001;e.pa=0x00000002;e.nd=0x00000003;e.wr=0x00000000;
e.le=0x00000100;e.o_=0x00000200;e.nc=0x00000300;e.abp=0x00000000;e.abr=0x00000101;
e.abt=0x00000202;e.abq=0x00000303;e.pb=0x00000000;e.pc=0x00010000;e.pd=0x00020000;
e.wx=0;e.wv=1;e.rJ=2;e.ww=3;e.abB=4;e.ab4=0;e.wB=1;e.lj=2;e.li=3;return e;})();

/* Embedded Wizard */