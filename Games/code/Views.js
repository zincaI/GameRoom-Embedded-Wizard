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

var EmWiApp;if(!EmWiApp)throw new Error("The application file '_project.js' isn't yet loaded!"
);if(EmWiApp.ach)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
ach=(function(){var B=EmWiApp;var C={};
var Bg=[0,0];var AW=[0,0,0,0];var D_="\uFEFF";
C.AA={timer:null,V:null,Bv:0,FS:0,Dj:0xFFFFFFFF,Ga:0x12,JD:0,BR:255,Gb:false,Fd:function(
BE,aClip,aOffset,aOpacity,aBlend){var A;var FX=this.JD;if(this.FS>=0)FX=this.FS;
if(!this.V||(FX>=this.V.NoOfFrames))return;this.V.Update();var Ag=this.K3();var AY=
this.V.FrameSize;if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var BH;var BW;var BV;var
BL;var Br=this.Dj;var Fs=(((aOpacity+1)*this.BR)>>8)+1;aBlend=aBlend&&((this.F&0x2
)===0x2);BH=BW=BL=BV=Br;if(Fs<256){BH=(BH&0x00FFFFFF)|((((((BH>>24)&0xFF)*Fs)>>8
)&0xFF)<<24);BW=(BW&0x00FFFFFF)|((((((BW>>24)&0xFF)*Fs)>>8)&0xFF)<<24);BV=(BV&0x00FFFFFF
)|((((((BV>>24)&0xFF)*Fs)>>8)&0xFF)<<24);BL=(BL&0x00FFFFFF)|((((((BL>>24)&0xFF)*
Fs)>>8)&0xFF)<<24);}if(B.aaX([Ag[2]-Ag[0],Ag[3]-Ag[1]],AY))BE.Ob(aClip,this.V,FX
,B.abh(this.U,aOffset),B.abe(this.U.slice(0,2),Ag.slice(0,2)),BH,BW,BV,BL,aBlend
);else BE.O1(aClip,this.V,FX,B.abh(Ag,aOffset),[].concat(Bg,AY),BH,BW,BV,BL,aBlend
,true);},Jh:function(T){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U
);},Hr:function(T){var A;var FX=this.FS;var In=0;if(!!this.V)In=this.V.NoOfFrames
*this.V.FrameDelay;if((!!this.timer&&(this.FS<0))&&(In>0))this.Bv=this.timer.A1-(
this.JD*this.V.FrameDelay);if(!!this.timer&&(In>0)){var Av=(this.timer.A1-this.Bv
)|0;FX=(Av/this.V.FrameDelay)|0;if(Av>=In){FX=FX%this.V.NoOfFrames;this.Bv=this.
timer.A1-(Av%In);}}if(((FX!==this.FS)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ay(
this.U);this.FS=FX;if(!In&&!!this.timer){B.z9([this,this.Hr],this.timer,0);this.
timer=null;}},A$:function(E){var A;if(E===this.Dj)return;this.Dj=E;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ay(this.U);},Lt:function(E){var A;if(this.Gb===E)return;
this.Gb=E;this.FS=-1;if(!E&&!!this.timer){B.z9([this,this.Hr],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.aci.H6);B.zV([this,this.Hr],this.
timer,0);B.pe([this,this.Hr],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(
this.U);},JO:function(E){var A;if(E===this.Ga)return;this.Ga=E;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ay(this.U);},M_:function(E){var A;if(E<0)E=0;if((E===this.JD
)&&(this.FS===-1))return;this.JD=E;if(!this.timer)this.FS=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ay(this.U);},Bf:function(E){var A;if(E===this.V)return;if(!
!this.V&&this.V.H8)B.z9([this,this.Jh],this.V,0);this.V=E;this.FS=-1;if(!!E&&E.H8
)B.zV([this,this.Jh],E,0);if(this.Gb){this.Lt(false);this.Lt(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ay(this.U);},C5:function(E){var A;if(E>255)E=255;if(E<
0)E=0;if(E===this.BR)return;this.BR=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(
this.U);},Af:function(E){if(E)this.AM(0x1,0x0);else this.AM(0x0,0x1);},K3:function(
){var A;if(!this.V)return AW;var Az=this.Ga;var AY=this.V.FrameSize;var Am=this.
U;var width=Am[2]-Am[0];var height=Am[3]-Am[1];if(!AY[0]||!AY[1])return AW;var AB=[
0,0,width,height];var Ae=AB;if(((Az&0x40)===0x40)){var MM=((((AB[2]-AB[0])<<16)+((
AY[0]/2)|0))/AY[0])|0;var Js=((((AB[3]-AB[1])<<16)+((AY[1]/2)|0))/AY[1])|0;var GE=
MM;if(Js>GE)GE=Js;Ae=B.abL(Ae,((AY[0]*GE)+32768)>>16);Ae=B.abI(Ae,((AY[1]*GE)+32768
)>>16);}else if(((Az&0x80)===0x80)){var MM=((((AB[2]-AB[0])<<16)+((AY[0]/2)|0))/
AY[0])|0;var Js=((((AB[3]-AB[1])<<16)+((AY[1]/2)|0))/AY[1])|0;var GE=MM;if(Js<GE
)GE=Js;Ae=B.abL(Ae,((AY[0]*GE)+32768)>>16);Ae=B.abI(Ae,((AY[1]*GE)+32768)>>16);}
else if(!((Az&0x100)===0x100))Ae=B.abK(Ae,AY);if((Ae[2]-Ae[0])!==(AB[2]-AB[0])){
if(((Az&0x4)===0x4))Ae=B.abM(Ae,AB[2]-(Ae[2]-Ae[0]));else if(((Az&0x2)===0x2))Ae=
B.abM(Ae,(AB[0]+(((AB[2]-AB[0])/2)|0))-(((Ae[2]-Ae[0])/2)|0));}if((Ae[3]-Ae[1])!==(
AB[3]-AB[1])){if(((Az&0x20)===0x20))Ae=B.abO(Ae,AB[3]-(Ae[3]-Ae[1]));else if(((Az&
0x10)===0x10))Ae=B.abO(Ae,(AB[1]+(((AB[3]-AB[1])/2)|0))-(((Ae[3]-Ae[1])/2)|0));}
Ae=B.abh(Ae,Am.slice(0,2));return Ae;},Hx:function(){return this.Dj;},_Init:function(
aArg){B.Core.B_._Init.call(this,aArg);this.__proto__=C.AA;},_Mark:function(D){var
A;B.Core.B_._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};
C.Text={Cl:null,H$:null,Bp:B.jV,String:B.jV,Ee:null,ET:B.wf,Ia:0,KD:0xFFFFFFFF,KE:
0xFFFFFFFF,KG:0xFFFFFFFF,KF:0xFFFFFFFF,Ga:0x12,Dj:0xFFFFFFFF,GV:0,G_:false,Hu:false
,KZ:false,CA:false,Fc:function(){if(!!this.Ee){this.Mr(this.Ee);this.Ee=null;}},
Fd:function(BE,aClip,aOffset,aOpacity,aBlend){var A;if((this.Bp===B.jV)||!this.Cl
)return;var Az=this.Ga;var orient=this.GV;var font=this.Cl;var AB=B.abh(this.U,aOffset
);var BH=this.KF;var BW=this.KG;var BV=this.KE;var BL=this.KD;var Dc=this.Dj;var
Fs=(((aOpacity+1)*255)>>8)+1;var Fr=this.Bp.charCodeAt(0)||0;var Ag=B.abh(this.K3(
),aOffset);var Ji=[AB[0]-Ag[0],(AB[1]-Ag[1])-font.Ascent];if(Fr<1)return;if((((BH===
BW)&&(BL===BV))&&(BH===BL))&&(BH===0xFFFFFFFF))BH=BW=BL=BV=Dc;else if(Dc!==0xFFFFFFFF
){BH=(BH&0x00FFFFFF)|((((((BH>>24)&0xFF)*(((Dc>>24)&0xFF)+1))>>8)&0xFF)<<24);BH=(
BH&0xFFFFFF00)|((((BH&0xFF)*((Dc&0xFF)+1))>>8)&0xFF);BH=(BH&0xFFFF00FF)|((((((BH>>
8)&0xFF)*(((Dc>>8)&0xFF)+1))>>8)&0xFF)<<8);BH=(BH&0xFF00FFFF)|((((((BH>>16)&0xFF
)*(((Dc>>16)&0xFF)+1))>>8)&0xFF)<<16);BW=(BW&0x00FFFFFF)|((((((BW>>24)&0xFF)*(((
Dc>>24)&0xFF)+1))>>8)&0xFF)<<24);BW=(BW&0xFFFFFF00)|((((BW&0xFF)*((Dc&0xFF)+1))>>
8)&0xFF);BW=(BW&0xFFFF00FF)|((((((BW>>8)&0xFF)*(((Dc>>8)&0xFF)+1))>>8)&0xFF)<<8);
BW=(BW&0xFF00FFFF)|((((((BW>>16)&0xFF)*(((Dc>>16)&0xFF)+1))>>8)&0xFF)<<16);BL=(BL&
0x00FFFFFF)|((((((BL>>24)&0xFF)*(((Dc>>24)&0xFF)+1))>>8)&0xFF)<<24);BL=(BL&0xFFFFFF00
)|((((BL&0xFF)*((Dc&0xFF)+1))>>8)&0xFF);BL=(BL&0xFFFF00FF)|((((((BL>>8)&0xFF)*(((
Dc>>8)&0xFF)+1))>>8)&0xFF)<<8);BL=(BL&0xFF00FFFF)|((((((BL>>16)&0xFF)*(((Dc>>16)&
0xFF)+1))>>8)&0xFF)<<16);BV=(BV&0x00FFFFFF)|((((((BV>>24)&0xFF)*(((Dc>>24)&0xFF)+
1))>>8)&0xFF)<<24);BV=(BV&0xFFFFFF00)|((((BV&0xFF)*((Dc&0xFF)+1))>>8)&0xFF);BV=(
BV&0xFFFF00FF)|((((((BV>>8)&0xFF)*(((Dc>>8)&0xFF)+1))>>8)&0xFF)<<8);BV=(BV&0xFF00FFFF
)|((((((BV>>16)&0xFF)*(((Dc>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Fs<256){BH=(BH&0x00FFFFFF
)|((((((BH>>24)&0xFF)*Fs)>>8)&0xFF)<<24);BW=(BW&0x00FFFFFF)|((((((BW>>24)&0xFF)*
Fs)>>8)&0xFF)<<24);BV=(BV&0x00FFFFFF)|((((((BV>>24)&0xFF)*Fs)>>8)&0xFF)<<24);BL=(
BL&0x00FFFFFF)|((((((BL>>24)&0xFF)*Fs)>>8)&0xFF)<<24);}if(((Az&0x80)===0x80)){if(
this.K$())Az=(Az&~0x80)|0x4;else Az=(Az&~0x80)|0x1;}if(((Fr===1)&&!((Az&0x40)===
0x40))&&!orient){BE.MV(aClip,font,this.Bp,2,(this.Bp.charCodeAt(1)||0)-1,AB,Ji,0
,orient,BH,BW,BV,BL,true);return;}var leading=font.Leading;var ML=(font.Ascent+font.
Descent)+leading;var Kb=aClip[1]-Ag[1];var Kc=aClip[3]-Ag[1];var I3=Ag[2]-Ag[0];
var BD=0;var N=1;var Br=this.Bp.charCodeAt(1)||0;if(orient===1){Ji=[Ag[3]-AB[3],(
AB[0]-Ag[0])-font.Ascent];Kb=aClip[0]-Ag[0];Kc=aClip[2]-Ag[0];I3=Ag[3]-Ag[1];}else
if(orient===2){Ji=[Ag[2]-AB[2],(Ag[3]-AB[3])-font.Ascent];Kb=Ag[3]-aClip[3];Kc=Ag[
3]-aClip[1];}else if(orient===3){Ji=[AB[1]-Ag[1],(Ag[2]-AB[2])-font.Ascent];Kb=Ag[
2]-aClip[2];Kc=Ag[2]-aClip[0];I3=Ag[3]-Ag[1];}while(((BD+ML)<Kb)&&(Br>0)){N=N+Br;
BD=BD+ML;Br=this.Bp.charCodeAt(N)||0;}while((BD<Kc)&&(Br>0)){var HQ=B.abe(Ji,[0,
BD]);var NW=0;var Kk=false;if(((((Az&0x40)===0x40)&&((this.Bp.charCodeAt((N+Br)-
1)||0)!==0x0A))&&((this.Bp.charCodeAt(N+1)||0)!==0x0A))&&((this.Bp.charCodeAt(N+
Br)||0)!==0x00))Kk=true;if(Kk&&!!(Az&0x6)){var NV=N+Br;var NC=this.Bp.indexOf(String.
fromCharCode(0x20),N+1);var ND=this.Bp.indexOf(String.fromCharCode(0xA0),N+1);if(((
NC<0)||(NC>=NV))&&((ND<0)||(ND>=NV)))Kk=false;}if(Kk)NW=I3;else if(((Az&0x4)===0x4
))HQ=[(HQ[0]-I3)+font.Ix(this.Bp,N+1,Br-1),HQ[1]];else if(((Az&0x2)===0x2))HQ=[(
HQ[0]-((I3/2)|0))+((font.Ix(this.Bp,N+1,Br-1)/2)|0),HQ[1]];BE.MV(aClip,font,this.
Bp,N+1,Br-1,AB,HQ,NW,orient,BH,BW,BV,BL,true);N=N+Br;BD=BD+ML;Br=this.Bp.charCodeAt(
N)||0;}},J:function(E){var A;if(B.aaY(E,this.U))return;var MK;if(!this.GV||(this.
GV===2))MK=((A=this.U)[2]-A[0])!==(E[2]-E[0]);else MK=((A=this.U)[3]-A[1])!==(E[
3]-E[1]);if(((MK&&this.G_)&&this.CA)&&!((this.F&0x2000)===0x2000)){this.Bp=B.jV;
this.CA=false;B.pe([this,this.F0],this);}if(((this.Hu&&this.CA)&&!B.aaX([(A=this.
U)[2]-A[0],A[3]-A[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.F&0x2000)===0x2000)){this.
Bp=B.jV;this.CA=false;B.pe([this,this.F0],this);}B.Core.B_.J.call(this,E);B.pe([
this,this.Kp],this);},Mr:function(aBidi){if(!aBidi)return;B.rB(aBidi);},SM:function(
aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},Kp:function(T){B.pe(this.H$,
this);},F0:function(T){B.pe([this,this.Kq],this);},Kq:function(T){var A;if(this.
CA)return;var orient=this.GV;var width=(A=this.U)[2]-A[0];var height=(A=this.U)[
3]-A[1];var FY=-1;var font=this.Cl;if((!!font&&!!!font.Ascent)&&!!!font.Descent)
font=null;if((orient===1)||(orient===3)){width=height;height=(A=this.U)[2]-A[0];
}if(this.G_){FY=width-(this.Ia*2);if(FY<0)FY=1;}if(!!this.Ee){this.Mr(this.Ee);this.
Ee=null;}this.CA=true;if((this.String!==B.jV)&&!!font){var length=this.String.length;
if(this.KZ)this.Ee=this.SM(length);this.Bp=font.OU(this.String,0,FY,length,this.
Ee);if(!!this.Ee&&!this.OB()){this.Mr(this.Ee);this.Ee=null;}}else this.Bp=B.jV;
this.ET=Bg;if((this.Hu&&(this.Bp!==B.jV))&&!!font){var Az=this.Ga;var leading=font.
Leading;var BA=this.Bp;var Ku=this.K$();if(((Az&0x80)===0x80)){if(Ku)Az=(Az&~0x80
)|0x4;else Az=(Az&~0x80)|0x1;}var Ks=(font.Ascent+font.Descent)+leading;var Fr=BA.
charCodeAt(0)||0;var Hh=((height+leading)/Ks)|0;var Mn=false;var Ka=false;if(Hh<=
0)Hh=1;if(Fr>Hh){var Fb=0;var Jr=0;var Kt=Fr-1;var Cb;var CG=BA.length;var tmp=B.
jV;if(!!(Az&0x110)&&!!(Az&0x28))Az&=~0x110;if(!!(Az&0x110))Az&=~0x28;if(((Az&0x20
)===0x20))Jr=Fr-Hh;else if(((Az&0x10)===0x10)||((Az&0x100)===0x100)){Jr=((Fr-Hh)
/2)|0;Kt=(Jr+Hh)-1;}else Kt=Hh-1;Mn=Jr>0;Ka=Kt<(Fr-1);for(Cb=1;Fb<Jr;Fb=Fb+1)Cb=
Cb+(BA.charCodeAt(Cb)||0);if(Ka)for(CG=Cb;Fb<Kt;Fb=Fb+1)CG=CG+(BA.charCodeAt(CG)||
0);if(Mn){var Df=BA.charCodeAt(Cb)||0;tmp=(D_+B.abW(BA,Cb,Df))+D_;tmp=B.abQ(tmp,
0,(Df+2)&0xFFFF);Cb=Cb+Df;if((tmp.charCodeAt(Df)||0)===0x0A){tmp=B.abQ(tmp,Df,0xFEFF
);tmp=B.abQ(tmp,Df+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF
);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(BA,Cb,CG-Cb
);if(Ka&&(CG>=Cb)){var Df=BA.charCodeAt(CG)||0;var DN=(D_+B.abW(BA,CG,Df))+D_;DN=
B.abQ(DN,0,(Df+2)&0xFFFF);DN=B.abQ(DN,1,0xFEFF);if((DN.charCodeAt(Df)||0)===0x0A
){DN=B.abQ(DN,Df,0xFEFF);DN=B.abQ(DN,Df+1,0x0A);}if((DN.charCodeAt(2)||0)===0x0A
){DN=B.abQ(DN,2,0xFEFF);DN=B.abQ(DN,1,0x0A);}else DN=B.abQ(DN,1,0xFEFF);tmp=tmp+
DN;}BA=String.fromCharCode(Hh&0xFFFF)+tmp;}var Fb=0;var Kj=1;var MB=width-(this.
Ia*2);Fr=BA.charCodeAt(0)||0;for(;Fb<Fr;Fb=Fb+1){var Hp=Mn&&!Fb;var Hq=Ka&&(Fb===(
Fr-1));var EJ=false;var EK=false;var Ip=Ku;if((Ku&&Hp)&&!Hq){Hp=false;Hq=true;}else
if((Ku&&Hq)&&!Hp){Hq=false;Hp=true;}var Jt=Kj+1;var Df=BA.charCodeAt(Kj)||0;var Cb=
Jt;var CG=(Jt+Df)-2;var Mw=-1;var Mx=-1;if(!this.G_&&(font.Ix(BA,Jt,Df-1)>MB)){var
HL=Az;if(((HL&0x2)===0x2)&&!!(HL&0x5))HL&=~0x2;if(((HL&0x2)===0x2))HL&=~0x5;if(((
HL&0x4)===0x4))EJ=true;else if(((HL&0x2)===0x2)){EJ=true;EK=true;}else EK=true;}
if((BA.charCodeAt(Cb)||0)===0x0A)Cb=Cb+1;if((BA.charCodeAt(CG)||0)===0x0A)CG=CG-
1;while(EJ&&((BA.charCodeAt(Cb)||0)===0xFEFF))Cb=Cb+1;while(EK&&((BA.charCodeAt(
CG)||0)===0xFEFF))CG=CG-1;EJ=EJ&&!Hq;EK=EK&&!Hp;while((((EJ||EK)||Hp)||Hq)&&(Cb<
CG)){if((EJ&&(Ip||!EK))||Hp){if(Mw>0)BA=B.abQ(BA,Mw,0xFEFF);BA=B.abQ(BA,Cb,0x2026
);Mw=Cb;Cb=Cb+1;Ip=!Ip;Hp=false;if(font.Ix(BA,Jt,Df-1)<=MB){EJ=false;EK=false;}else
EJ=EJ||!EK;}if((EK&&(!Ip||!EJ))||Hq){if(Mx>0)BA=B.abQ(BA,Mx,0xFEFF);BA=B.abQ(BA,
CG,0x2026);Mx=CG;CG=CG-1;Ip=!Ip;Hq=false;if(font.Ix(BA,Jt,Df-1)<=MB){EJ=false;EK=
false;}else EK=EK||!EJ;}}Kj=Kj+Df;}this.ET=[font.MY(BA),((BA.charCodeAt(0)||0)*Ks
)-leading];this.Bp=BA;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U);B.pe([
this,this.Kp],this);},JZ:function(E){var A;if(E===this.GV)return;this.GV=E;if(!!
this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U);if(this.G_&&this.CA){this.Bp=B.jV;
this.CA=false;B.pe([this,this.F0],this);}if(this.CA)B.pe([this,this.Kp],this);},
OL:function(E){if(E===this.KZ)return;this.KZ=E;this.Bp=B.jV;this.CA=false;B.pe([
this,this.F0],this);},H_:function(E){if(E<0)E=0;if(this.Ia===E)return;this.Ia=E;
this.Bp=B.jV;this.CA=false;B.pe([this,this.F0],this);},OK:function(E){if(E===this.
Hu)return;this.Hu=E;if((this.G_||E)||!!this.H$)this.F=this.F&~0x100;else this.F=
this.F|0x100;this.Bp=B.jV;this.CA=false;B.pe([this,this.F0],this);},Nb:function(
E){if(B.aa0(E,this.H$))return;this.H$=E;if((this.G_||!!E)||this.Hu)this.F=this.F&
~0x100;else this.F=this.F|0x100;},M7:function(E){var A;if(E===this.KD)return;this.
KD=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U);},GS:function(E){var A;
if(E===this.KE)return;this.KE=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.
U);},Bw:function(E){var A;if(E===this.KG)return;this.KG=E;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ay(this.U);},Fg:function(E){var A;if(E===this.KF)return;this.
KF=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U);},OP:function(E){if(E===
this.G_)return;this.G_=E;if(this.CA){this.Bp=B.jV;this.CA=false;B.pe([this,this.
F0],this);}if((E||this.Hu)||!!this.H$)this.F=this.F&~0x100;else this.F=this.F|0x100;
},JO:function(E){var A;if(E===this.Ga)return;this.Ga=E;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Ay(this.U);if(this.Hu){this.Bp=B.jV;this.CA=false;B.pe([this,this.
F0],this);}if(this.CA)B.pe([this,this.Kp],this);},Au:function(E){if(E===this.String
)return;this.String=E;this.Bp=B.jV;this.CA=false;B.pe([this,this.F0],this);},Ba:
function(E){if(E===this.Cl)return;this.Cl=E;this.Bp=B.jV;this.CA=false;B.pe([this
,this.F0],this);},A$:function(E){var A;if(E===this.Dj)return;this.Dj=E;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ay(this.U);},Af:function(E){if(E)this.AM(0x1,0x0);
else this.AM(0x0,0x1);},K$:function(){if(!this.CA)this.Kq(this);if(!this.Ee)return false;
var result=false;var bidi=this.Ee;result=B.v2(bidi);return result;},OB:function(
){if(!this.CA)this.Kq(this);if(!this.Ee)return false;var result=false;var bidi=this.
Ee;result=B.zZ(bidi);return result;},K3:function(){var A;if((this.String===B.jV)||
!this.Cl)return AW;if(!this.CA)this.Kq(this);if(this.Bp===B.jV)return AW;var leading=
this.Cl.Leading;var Ks=(this.Cl.Ascent+this.Cl.Descent)+this.Cl.Leading;if(B.aaX(
this.ET,Bg))this.ET=[this.Cl.MY(this.Bp),this.ET[1]];this.ET=[this.ET[0],((this.
Bp.charCodeAt(0)||0)*Ks)-leading];var Az=this.Ga;var orient=this.GV;var Am=this.
U;var NR=this.Ia;var width=Am[2]-Am[0];var height=Am[3]-Am[1];if((orient===1)||(
orient===3)){width=height;height=Am[2]-Am[0];}var AB=[NR,0,width-NR,height];var Ae=[
].concat(AB.slice(0,2),B.abf(AB.slice(0,2),this.ET));if(((Az&0x80)===0x80)){if(this.
K$())Az=(Az&~0x80)|0x4;else Az=(Az&~0x80)|0x1;}if(((Az&0x40)===0x40)){var FY;FY=
width-(this.Ia*2);if(FY<0)FY=0;if(FY>(Ae[2]-Ae[0]))Ae=B.abL(Ae,FY);}if((!!(Az&0x110
)&&!!(Az&0x28))&&((Ae[3]-Ae[1])>(AB[3]-AB[1])))Az&=~0x110;if(!!(Az&0x110))Az&=~0x28;
if((((Az&0x2)===0x2)&&!!(Az&0x5))&&((Ae[2]-Ae[0])>(AB[2]-AB[0])))Az&=~0x2;if(((Az&
0x2)===0x2))Az&=~0x5;if((Ae[2]-Ae[0])!==(AB[2]-AB[0])){if(((Az&0x4)===0x4))Ae=B.
abM(Ae,AB[2]-(Ae[2]-Ae[0]));else if(((Az&0x2)===0x2))Ae=B.abM(Ae,(AB[0]+(((AB[2]-
AB[0])/2)|0))-(((Ae[2]-Ae[0])/2)|0));}if((Ae[3]-Ae[1])!==(AB[3]-AB[1])){if(((Az&
0x20)===0x20))Ae=B.abO(Ae,AB[3]-(Ae[3]-Ae[1]));else if(((Az&0x100)===0x100))Ae=B.
abO(Ae,((AB[1]+(((AB[3]-AB[1])/2)|0))-(((Ae[3]-Ae[1])/2)|0))+(((this.Cl.Descent-
this.Cl.Ascent)/2)|0));else if(((Az&0x10)===0x10))Ae=B.abO(Ae,(AB[1]+(((AB[3]-AB[
1])/2)|0))-(((Ae[3]-Ae[1])/2)|0));}if(!orient)Ae=B.abh(Ae,Am.slice(0,2));else if(
orient===1){var Hl=[Am[0]+Ae[1],Am[3]-Ae[2]];Ae=[].concat(Hl,B.abf(Hl,[this.ET[1
],this.ET[0]]));}else if(orient===2){var Hl=[Am[2]-Ae[2],Am[3]-Ae[3]];Ae=[].concat(
Hl,B.abf(Hl,this.ET));}else if(orient===3){var Hl=[Am[2]-Ae[3],Am[1]+Ae[0]];Ae=[
].concat(Hl,B.abf(Hl,[this.ET[1],this.ET[0]]));}return Ae;},Hx:function(){return this.
Dj;},_Init:function(aArg){B.Core.B_._Init.call(this,aArg);this.__proto__=C.Text;
},_Done:function(){this.Fc();this.__proto__=B.Core.B_;B.Core.B_._Done.call(this);
},_Mark:function(D){var A;B.Core.B_._Mark.call(this,D);if((A=this.Cl)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.H$)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Views::Text"};C.TZ={N4:0x1,N3:0x2,N5:0x4,N8:0x8,N7:0x10,N6:0x20,
Uo:0x40,Uq:0x80,Uv:0x100};C.Uw={N4:0x1,N3:0x2,N5:0x4,N8:0x8,N7:0x10,N6:0x20,Th:0x40
,Tg:0x80,Tm:0x100};C.GV={T7:0,Um:1,Uk:2,Ul:3};C.Hw={V:null,IU:0xFFFFFFFF,J3:1,BR:
255,FJ:0,Fd:function(BE,aClip,aOffset,aOpacity,aBlend){var A;aBlend=aBlend&&((this.
F&0x2)===0x2);aOpacity=(this.BR*(aOpacity+1))>>8;var J_=this.N2(0);if(!!!this.V)
return;if(((!!!J_&&!this.FJ)&&aBlend)&&!!!aOpacity)return;if(aBlend&&!!!aOpacity
)return;if(((aBlend&&(this.J3===1))&&!!!((this.IU>>24)&0xFF))&&((this.FJ===2)||(
this.FJ===3)))return;this.V.Update();var Am=B.abh(this.U,aOffset);var Ag=B.abh([
].concat(Bg,this.V.FrameSize),Am.slice(0,2));aClip=B.lb(aClip,B.aaT(Ag,[J_,J_]));
if((aClip[0]>=aClip[2])||(aClip[1]>=aClip[3]))return;BE.On(aClip,this.V,null,Am,
Bg,Bg,false,false,J_,false,this.FJ,this.J3,this.IU,aOpacity,aBlend);},Jh:function(
T){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U);},Bf:function(E){var
A;if(E===this.V)return;if(!!this.V&&this.V.H8)B.z9([this,this.Jh],this.V,0);this.
V=E;if(!!E&&E.H8)B.zV([this,this.Jh],E,0);if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ay(this.U);},Gl:function(E){var A;if(E===this.IU)return;this.IU=E;if((!!this.G&&((
this.F&0x1)===0x1))&&((this.FJ===2)||(this.FJ===3)))this.G.Ay(this.U);},IH:function(
E){var A;if(E<0)E=0;if(E>1)E=1;if(this.J3===E)return;this.J3=E;if((!!this.G&&((this.
F&0x1)===0x1))&&!!this.FJ)this.G.Ay(this.U);},II:function(E){var A;if(this.FJ===
E)return;this.FJ=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.U);},C5:function(
E){var A;if(E<0)E=0;if(E>255)E=255;if(E===this.BR)return;this.BR=E;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ay(this.U);},Af:function(E){if(E)this.AM(0x1,0x0);else
this.AM(0x0,0x1);},N2:function(aBlurRadius){aBlurRadius=B.v1(aBlurRadius);return aBlurRadius;
},JN:function(){return this.IU;},_Init:function(aArg){B.Core.B_._Init.call(this,
aArg);this.__proto__=C.Hw;},_Mark:function(D){var A;B.Core.B_._Mark.call(this,D);
if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::FilterImage"
};
C._Init=function(){C.AA.__proto__=B.Core.B_;C.Text.__proto__=B.Core.B_;C.Hw.__proto__=
B.Core.B_;};C._ReInit=function(){};C.D$=function(D){};return C;})();

/* Embedded Wizard */