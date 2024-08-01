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
var AR=[0,0];var Bz=[0,0,0,0];var Em="\uFEFF";
C.AD={timer:null,V:null,Bw:0,FP:0,Dj:0xFFFFFFFF,F0:0x12,JE:0,BT:255,F_:false,Fb:function(
BC,aClip,aOffset,aOpacity,aBlend){var A;var FU=this.JE;if(this.FP>=0)FU=this.FP;
if(!this.V||(FU>=this.V.NoOfFrames))return;this.V.Update();var Ag=this.K$();var AX=
this.V.FrameSize;if((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3]))return;var BK;var BY;var BX;var
BO;var Bt=this.Dj;var Fq=(((aOpacity+1)*this.BT)>>8)+1;aBlend=aBlend&&((this.F&0x2
)===0x2);BK=BY=BO=BX=Bt;if(Fq<256){BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*Fq)>>8
)&0xFF)<<24);BY=(BY&0x00FFFFFF)|((((((BY>>24)&0xFF)*Fq)>>8)&0xFF)<<24);BX=(BX&0x00FFFFFF
)|((((((BX>>24)&0xFF)*Fq)>>8)&0xFF)<<24);BO=(BO&0x00FFFFFF)|((((((BO>>24)&0xFF)*
Fq)>>8)&0xFF)<<24);}if(B.aaX([Ag[2]-Ag[0],Ag[3]-Ag[1]],AX))BC.Oa(aClip,this.V,FU
,B.abh(this.U,aOffset),B.abe(this.U.slice(0,2),Ag.slice(0,2)),BK,BY,BX,BO,aBlend
);else BC.OT(aClip,this.V,FU,B.abh(Ag,aOffset),[].concat(AR,AX),BK,BY,BX,BO,aBlend
,true);},Jj:function(T){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U
);},Hl:function(T){var A;var FU=this.FP;var Is=0;if(!!this.V)Is=this.V.NoOfFrames
*this.V.FrameDelay;if((!!this.timer&&(this.FP<0))&&(Is>0))this.Bw=this.timer.A8-(
this.JE*this.V.FrameDelay);if(!!this.timer&&(Is>0)){var Au=(this.timer.A8-this.Bw
)|0;FU=(Au/this.V.FrameDelay)|0;if(Au>=Is){FU=FU%this.V.NoOfFrames;this.Bw=this.
timer.A8-(Au%Is);}}if(((FU!==this.FP)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Aw(
this.U);this.FP=FU;if(!Is&&!!this.timer){B.z9([this,this.Hl],this.timer,0);this.
timer=null;}},A$:function(E){var A;if(E===this.Dj)return;this.Dj=E;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Aw(this.U);},Lz:function(E){var A;if(this.F_===E)return;
this.F_=E;this.FP=-1;if(!E&&!!this.timer){B.z9([this,this.Hl],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.aci.H7);B.zV([this,this.Hl],this.
timer,0);B.pe([this,this.Hl],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(
this.U);},JV:function(E){var A;if(E===this.F0)return;this.F0=E;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Aw(this.U);},Nc:function(E){var A;if(E<0)E=0;if((E===this.JE
)&&(this.FP===-1))return;this.JE=E;if(!this.timer)this.FP=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Aw(this.U);},Bn:function(E){var A;if(E===this.V)return;if(!
!this.V&&this.V.H_)B.z9([this,this.Jj],this.V,0);this.V=E;this.FP=-1;if(!!E&&E.H_
)B.zV([this,this.Jj],E,0);if(this.F_){this.Lz(false);this.Lz(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Aw(this.U);},CX:function(E){var A;if(E>255)E=255;if(E<
0)E=0;if(E===this.BT)return;this.BT=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(
this.U);},Af:function(E){if(E)this.AH(0x1,0x0);else this.AH(0x0,0x1);},K$:function(
){var A;if(!this.V)return Bz;var Az=this.F0;var AX=this.V.FrameSize;var Ao=this.
U;var width=Ao[2]-Ao[0];var height=Ao[3]-Ao[1];if(!AX[0]||!AX[1])return Bz;var AA=[
0,0,width,height];var Ad=AA;if(((Az&0x40)===0x40)){var MO=((((AA[2]-AA[0])<<16)+((
AX[0]/2)|0))/AX[0])|0;var Ju=((((AA[3]-AA[1])<<16)+((AX[1]/2)|0))/AX[1])|0;var GC=
MO;if(Ju>GC)GC=Ju;Ad=B.abL(Ad,((AX[0]*GC)+32768)>>16);Ad=B.abI(Ad,((AX[1]*GC)+32768
)>>16);}else if(((Az&0x80)===0x80)){var MO=((((AA[2]-AA[0])<<16)+((AX[0]/2)|0))/
AX[0])|0;var Ju=((((AA[3]-AA[1])<<16)+((AX[1]/2)|0))/AX[1])|0;var GC=MO;if(Ju<GC
)GC=Ju;Ad=B.abL(Ad,((AX[0]*GC)+32768)>>16);Ad=B.abI(Ad,((AX[1]*GC)+32768)>>16);}
else if(!((Az&0x100)===0x100))Ad=B.abK(Ad,AX);if((Ad[2]-Ad[0])!==(AA[2]-AA[0])){
if(((Az&0x4)===0x4))Ad=B.abM(Ad,AA[2]-(Ad[2]-Ad[0]));else if(((Az&0x2)===0x2))Ad=
B.abM(Ad,(AA[0]+(((AA[2]-AA[0])/2)|0))-(((Ad[2]-Ad[0])/2)|0));}if((Ad[3]-Ad[1])!==(
AA[3]-AA[1])){if(((Az&0x20)===0x20))Ad=B.abO(Ad,AA[3]-(Ad[3]-Ad[1]));else if(((Az&
0x10)===0x10))Ad=B.abO(Ad,(AA[1]+(((AA[3]-AA[1])/2)|0))-(((Ad[3]-Ad[1])/2)|0));}
Ad=B.abh(Ad,Ao.slice(0,2));return Ad;},Hu:function(){return this.Dj;},_Init:function(
aArg){B.Core.Ca._Init.call(this,aArg);this.__proto__=C.AD;},_Mark:function(D){var
A;B.Core.Ca._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};
C.Text={Co:null,If:null,Bp:B.jV,String:B.jV,Ee:null,ES:B.wf,Ig:0,KM:0xFFFFFFFF,KN:
0xFFFFFFFF,KP:0xFFFFFFFF,KO:0xFFFFFFFF,F0:0x12,Dj:0xFFFFFFFF,GQ:0,G3:false,Hp:false
,K7:false,CA:false,Fa:function(){if(!!this.Ee){this.Mt(this.Ee);this.Ee=null;}},
Fb:function(BC,aClip,aOffset,aOpacity,aBlend){var A;if((this.Bp===B.jV)||!this.Co
)return;var Az=this.F0;var orient=this.GQ;var font=this.Co;var AA=B.abh(this.U,aOffset
);var BK=this.KO;var BY=this.KP;var BX=this.KN;var BO=this.KM;var Da=this.Dj;var
Fq=(((aOpacity+1)*255)>>8)+1;var Fp=this.Bp.charCodeAt(0)||0;var Ag=B.abh(this.K$(
),aOffset);var Jk=[AA[0]-Ag[0],(AA[1]-Ag[1])-font.Ascent];if(Fp<1)return;if((((BK===
BY)&&(BO===BX))&&(BK===BO))&&(BK===0xFFFFFFFF))BK=BY=BO=BX=Da;else if(Da!==0xFFFFFFFF
){BK=(BK&0x00FFFFFF)|((((((BK>>24)&0xFF)*(((Da>>24)&0xFF)+1))>>8)&0xFF)<<24);BK=(
BK&0xFFFFFF00)|((((BK&0xFF)*((Da&0xFF)+1))>>8)&0xFF);BK=(BK&0xFFFF00FF)|((((((BK>>
8)&0xFF)*(((Da>>8)&0xFF)+1))>>8)&0xFF)<<8);BK=(BK&0xFF00FFFF)|((((((BK>>16)&0xFF
)*(((Da>>16)&0xFF)+1))>>8)&0xFF)<<16);BY=(BY&0x00FFFFFF)|((((((BY>>24)&0xFF)*(((
Da>>24)&0xFF)+1))>>8)&0xFF)<<24);BY=(BY&0xFFFFFF00)|((((BY&0xFF)*((Da&0xFF)+1))>>
8)&0xFF);BY=(BY&0xFFFF00FF)|((((((BY>>8)&0xFF)*(((Da>>8)&0xFF)+1))>>8)&0xFF)<<8);
BY=(BY&0xFF00FFFF)|((((((BY>>16)&0xFF)*(((Da>>16)&0xFF)+1))>>8)&0xFF)<<16);BO=(BO&
0x00FFFFFF)|((((((BO>>24)&0xFF)*(((Da>>24)&0xFF)+1))>>8)&0xFF)<<24);BO=(BO&0xFFFFFF00
)|((((BO&0xFF)*((Da&0xFF)+1))>>8)&0xFF);BO=(BO&0xFFFF00FF)|((((((BO>>8)&0xFF)*(((
Da>>8)&0xFF)+1))>>8)&0xFF)<<8);BO=(BO&0xFF00FFFF)|((((((BO>>16)&0xFF)*(((Da>>16)&
0xFF)+1))>>8)&0xFF)<<16);BX=(BX&0x00FFFFFF)|((((((BX>>24)&0xFF)*(((Da>>24)&0xFF)+
1))>>8)&0xFF)<<24);BX=(BX&0xFFFFFF00)|((((BX&0xFF)*((Da&0xFF)+1))>>8)&0xFF);BX=(
BX&0xFFFF00FF)|((((((BX>>8)&0xFF)*(((Da>>8)&0xFF)+1))>>8)&0xFF)<<8);BX=(BX&0xFF00FFFF
)|((((((BX>>16)&0xFF)*(((Da>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(Fq<256){BK=(BK&0x00FFFFFF
)|((((((BK>>24)&0xFF)*Fq)>>8)&0xFF)<<24);BY=(BY&0x00FFFFFF)|((((((BY>>24)&0xFF)*
Fq)>>8)&0xFF)<<24);BX=(BX&0x00FFFFFF)|((((((BX>>24)&0xFF)*Fq)>>8)&0xFF)<<24);BO=(
BO&0x00FFFFFF)|((((((BO>>24)&0xFF)*Fq)>>8)&0xFF)<<24);}if(((Az&0x80)===0x80)){if(
this.Lh())Az=(Az&~0x80)|0x4;else Az=(Az&~0x80)|0x1;}if(((Fp===1)&&!((Az&0x40)===
0x40))&&!orient){BC.MZ(aClip,font,this.Bp,2,(this.Bp.charCodeAt(1)||0)-1,AA,Jk,0
,orient,BK,BY,BX,BO,true);return;}var leading=font.Leading;var MN=(font.Ascent+font.
Descent)+leading;var Kl=aClip[1]-Ag[1];var Km=aClip[3]-Ag[1];var I5=Ag[2]-Ag[0];
var BG=0;var O=1;var Bt=this.Bp.charCodeAt(1)||0;if(orient===1){Jk=[Ag[3]-AA[3],(
AA[0]-Ag[0])-font.Ascent];Kl=aClip[0]-Ag[0];Km=aClip[2]-Ag[0];I5=Ag[3]-Ag[1];}else
if(orient===2){Jk=[Ag[2]-AA[2],(Ag[3]-AA[3])-font.Ascent];Kl=Ag[3]-aClip[3];Km=Ag[
3]-aClip[1];}else if(orient===3){Jk=[AA[1]-Ag[1],(Ag[2]-AA[2])-font.Ascent];Kl=Ag[
2]-aClip[2];Km=Ag[2]-aClip[0];I5=Ag[3]-Ag[1];}while(((BG+MN)<Kl)&&(Bt>0)){O=O+Bt;
BG=BG+MN;Bt=this.Bp.charCodeAt(O)||0;}while((BG<Km)&&(Bt>0)){var HP=B.abe(Jk,[0,
BG]);var NV=0;var Ku=false;if(((((Az&0x40)===0x40)&&((this.Bp.charCodeAt((O+Bt)-
1)||0)!==0x0A))&&((this.Bp.charCodeAt(O+1)||0)!==0x0A))&&((this.Bp.charCodeAt(O+
Bt)||0)!==0x00))Ku=true;if(Ku&&!!(Az&0x6)){var NU=O+Bt;var NB=this.Bp.indexOf(String.
fromCharCode(0x20),O+1);var NC=this.Bp.indexOf(String.fromCharCode(0xA0),O+1);if(((
NB<0)||(NB>=NU))&&((NC<0)||(NC>=NU)))Ku=false;}if(Ku)NV=I5;else if(((Az&0x4)===0x4
))HP=[(HP[0]-I5)+font.IB(this.Bp,O+1,Bt-1),HP[1]];else if(((Az&0x2)===0x2))HP=[(
HP[0]-((I5/2)|0))+((font.IB(this.Bp,O+1,Bt-1)/2)|0),HP[1]];BC.MZ(aClip,font,this.
Bp,O+1,Bt-1,AA,HP,NV,orient,BK,BY,BX,BO,true);O=O+Bt;BG=BG+MN;Bt=this.Bp.charCodeAt(
O)||0;}},J:function(E){var A;if(B.aaY(E,this.U))return;var MM;if(!this.GQ||(this.
GQ===2))MM=((A=this.U)[2]-A[0])!==(E[2]-E[0]);else MM=((A=this.U)[3]-A[1])!==(E[
3]-E[1]);if(((MM&&this.G3)&&this.CA)&&!((this.F&0x2000)===0x2000)){this.Bp=B.jV;
this.CA=false;B.pe([this,this.FX],this);}if(((this.Hp&&this.CA)&&!B.aaX([(A=this.
U)[2]-A[0],A[3]-A[1]],[E[2]-E[0],E[3]-E[1]]))&&!((this.F&0x2000)===0x2000)){this.
Bp=B.jV;this.CA=false;B.pe([this,this.FX],this);}B.Core.Ca.J.call(this,E);B.pe([
this,this.Kz],this);},Mt:function(aBidi){if(!aBidi)return;B.rB(aBidi);},Sw:function(
aSize){var bidi=null;bidi=B.v3(aSize);return bidi;},Kz:function(T){B.pe(this.If,
this);},FX:function(T){B.pe([this,this.KA],this);},KA:function(T){var A;if(this.
CA)return;var orient=this.GQ;var width=(A=this.U)[2]-A[0];var height=(A=this.U)[
3]-A[1];var FV=-1;var font=this.Co;if((!!font&&!!!font.Ascent)&&!!!font.Descent)
font=null;if((orient===1)||(orient===3)){width=height;height=(A=this.U)[2]-A[0];
}if(this.G3){FV=width-(this.Ig*2);if(FV<0)FV=1;}if(!!this.Ee){this.Mt(this.Ee);this.
Ee=null;}this.CA=true;if((this.String!==B.jV)&&!!font){var length=this.String.length;
if(this.K7)this.Ee=this.Sw(length);this.Bp=font.OM(this.String,0,FV,length,this.
Ee);if(!!this.Ee&&!this.Oz()){this.Mt(this.Ee);this.Ee=null;}}else this.Bp=B.jV;
this.ES=AR;if((this.Hp&&(this.Bp!==B.jV))&&!!font){var Az=this.F0;var leading=font.
Leading;var BB=this.Bp;var KE=this.Lh();if(((Az&0x80)===0x80)){if(KE)Az=(Az&~0x80
)|0x4;else Az=(Az&~0x80)|0x1;}var KC=(font.Ascent+font.Descent)+leading;var Fp=BB.
charCodeAt(0)||0;var Hb=((height+leading)/KC)|0;var Mp=false;var Kk=false;if(Hb<=
0)Hb=1;if(Fp>Hb){var E$=0;var Jt=0;var KD=Fp-1;var Cc;var CG=BB.length;var tmp=B.
jV;if(!!(Az&0x110)&&!!(Az&0x28))Az&=~0x110;if(!!(Az&0x110))Az&=~0x28;if(((Az&0x20
)===0x20))Jt=Fp-Hb;else if(((Az&0x10)===0x10)||((Az&0x100)===0x100)){Jt=((Fp-Hb)
/2)|0;KD=(Jt+Hb)-1;}else KD=Hb-1;Mp=Jt>0;Kk=KD<(Fp-1);for(Cc=1;E$<Jt;E$=E$+1)Cc=
Cc+(BB.charCodeAt(Cc)||0);if(Kk)for(CG=Cc;E$<KD;E$=E$+1)CG=CG+(BB.charCodeAt(CG)||
0);if(Mp){var Dd=BB.charCodeAt(Cc)||0;tmp=(Em+B.abW(BB,Cc,Dd))+Em;tmp=B.abQ(tmp,
0,(Dd+2)&0xFFFF);Cc=Cc+Dd;if((tmp.charCodeAt(Dd)||0)===0x0A){tmp=B.abQ(tmp,Dd,0xFEFF
);tmp=B.abQ(tmp,Dd+1,0x0A);}if((tmp.charCodeAt(2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF
);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp,1,0xFEFF);}tmp=tmp+B.abW(BB,Cc,CG-Cc
);if(Kk&&(CG>=Cc)){var Dd=BB.charCodeAt(CG)||0;var DF=(Em+B.abW(BB,CG,Dd))+Em;DF=
B.abQ(DF,0,(Dd+2)&0xFFFF);DF=B.abQ(DF,1,0xFEFF);if((DF.charCodeAt(Dd)||0)===0x0A
){DF=B.abQ(DF,Dd,0xFEFF);DF=B.abQ(DF,Dd+1,0x0A);}if((DF.charCodeAt(2)||0)===0x0A
){DF=B.abQ(DF,2,0xFEFF);DF=B.abQ(DF,1,0x0A);}else DF=B.abQ(DF,1,0xFEFF);tmp=tmp+
DF;}BB=String.fromCharCode(Hb&0xFFFF)+tmp;}var E$=0;var Kt=1;var MD=width-(this.
Ig*2);Fp=BB.charCodeAt(0)||0;for(;E$<Fp;E$=E$+1){var Hj=Mp&&!E$;var Hk=Kk&&(E$===(
Fp-1));var EI=false;var EJ=false;var Iu=KE;if((KE&&Hj)&&!Hk){Hj=false;Hk=true;}else
if((KE&&Hk)&&!Hj){Hk=false;Hj=true;}var Jv=Kt+1;var Dd=BB.charCodeAt(Kt)||0;var Cc=
Jv;var CG=(Jv+Dd)-2;var My=-1;var Mz=-1;if(!this.G3&&(font.IB(BB,Jv,Dd-1)>MD)){var
HK=Az;if(((HK&0x2)===0x2)&&!!(HK&0x5))HK&=~0x2;if(((HK&0x2)===0x2))HK&=~0x5;if(((
HK&0x4)===0x4))EI=true;else if(((HK&0x2)===0x2)){EI=true;EJ=true;}else EJ=true;}
if((BB.charCodeAt(Cc)||0)===0x0A)Cc=Cc+1;if((BB.charCodeAt(CG)||0)===0x0A)CG=CG-
1;while(EI&&((BB.charCodeAt(Cc)||0)===0xFEFF))Cc=Cc+1;while(EJ&&((BB.charCodeAt(
CG)||0)===0xFEFF))CG=CG-1;EI=EI&&!Hk;EJ=EJ&&!Hj;while((((EI||EJ)||Hj)||Hk)&&(Cc<
CG)){if((EI&&(Iu||!EJ))||Hj){if(My>0)BB=B.abQ(BB,My,0xFEFF);BB=B.abQ(BB,Cc,0x2026
);My=Cc;Cc=Cc+1;Iu=!Iu;Hj=false;if(font.IB(BB,Jv,Dd-1)<=MD){EI=false;EJ=false;}else
EI=EI||!EJ;}if((EJ&&(!Iu||!EI))||Hk){if(Mz>0)BB=B.abQ(BB,Mz,0xFEFF);BB=B.abQ(BB,
CG,0x2026);Mz=CG;CG=CG-1;Iu=!Iu;Hk=false;if(font.IB(BB,Jv,Dd-1)<=MD){EI=false;EJ=
false;}else EJ=EJ||!EI;}}Kt=Kt+Dd;}this.ES=[font.M2(BB),((BB.charCodeAt(0)||0)*KC
)-leading];this.Bp=BB;}if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U);B.pe([
this,this.Kz],this);},J6:function(E){var A;if(E===this.GQ)return;this.GQ=E;if(!!
this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U);if(this.G3&&this.CA){this.Bp=B.jV;
this.CA=false;B.pe([this,this.FX],this);}if(this.CA)B.pe([this,this.Kz],this);},
OG:function(E){if(E===this.K7)return;this.K7=E;this.Bp=B.jV;this.CA=false;B.pe([
this,this.FX],this);},Ie:function(E){if(E<0)E=0;if(this.Ig===E)return;this.Ig=E;
this.Bp=B.jV;this.CA=false;B.pe([this,this.FX],this);},OF:function(E){if(E===this.
Hp)return;this.Hp=E;if((this.G3||E)||!!this.If)this.F=this.F&~0x100;else this.F=
this.F|0x100;this.Bp=B.jV;this.CA=false;B.pe([this,this.FX],this);},Nf:function(
E){if(B.aa0(E,this.If))return;this.If=E;if((this.G3||!!E)||this.Hp)this.F=this.F&
~0x100;else this.F=this.F|0x100;},M$:function(E){var A;if(E===this.KM)return;this.
KM=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U);},GN:function(E){var A;
if(E===this.KN)return;this.KN=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.
U);},Bx:function(E){var A;if(E===this.KP)return;this.KP=E;if(!!this.G&&((this.F&
0x1)===0x1))this.G.Aw(this.U);},Fe:function(E){var A;if(E===this.KO)return;this.
KO=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U);},OK:function(E){if(E===
this.G3)return;this.G3=E;if(this.CA){this.Bp=B.jV;this.CA=false;B.pe([this,this.
FX],this);}if((E||this.Hp)||!!this.If)this.F=this.F&~0x100;else this.F=this.F|0x100;
},JV:function(E){var A;if(E===this.F0)return;this.F0=E;if(!!this.G&&((this.F&0x1
)===0x1))this.G.Aw(this.U);if(this.Hp){this.Bp=B.jV;this.CA=false;B.pe([this,this.
FX],this);}if(this.CA)B.pe([this,this.Kz],this);},At:function(E){if(E===this.String
)return;this.String=E;this.Bp=B.jV;this.CA=false;B.pe([this,this.FX],this);},Ba:
function(E){if(E===this.Co)return;this.Co=E;this.Bp=B.jV;this.CA=false;B.pe([this
,this.FX],this);},A$:function(E){var A;if(E===this.Dj)return;this.Dj=E;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Aw(this.U);},Af:function(E){if(E)this.AH(0x1,0x0);
else this.AH(0x0,0x1);},Lh:function(){if(!this.CA)this.KA(this);if(!this.Ee)return false;
var result=false;var bidi=this.Ee;result=B.v2(bidi);return result;},Oz:function(
){if(!this.CA)this.KA(this);if(!this.Ee)return false;var result=false;var bidi=this.
Ee;result=B.zZ(bidi);return result;},K$:function(){var A;if((this.String===B.jV)||
!this.Co)return Bz;if(!this.CA)this.KA(this);if(this.Bp===B.jV)return Bz;var leading=
this.Co.Leading;var KC=(this.Co.Ascent+this.Co.Descent)+this.Co.Leading;if(B.aaX(
this.ES,AR))this.ES=[this.Co.M2(this.Bp),this.ES[1]];this.ES=[this.ES[0],((this.
Bp.charCodeAt(0)||0)*KC)-leading];var Az=this.F0;var orient=this.GQ;var Ao=this.
U;var NQ=this.Ig;var width=Ao[2]-Ao[0];var height=Ao[3]-Ao[1];if((orient===1)||(
orient===3)){width=height;height=Ao[2]-Ao[0];}var AA=[NQ,0,width-NQ,height];var Ad=[
].concat(AA.slice(0,2),B.abf(AA.slice(0,2),this.ES));if(((Az&0x80)===0x80)){if(this.
Lh())Az=(Az&~0x80)|0x4;else Az=(Az&~0x80)|0x1;}if(((Az&0x40)===0x40)){var FV;FV=
width-(this.Ig*2);if(FV<0)FV=0;if(FV>(Ad[2]-Ad[0]))Ad=B.abL(Ad,FV);}if((!!(Az&0x110
)&&!!(Az&0x28))&&((Ad[3]-Ad[1])>(AA[3]-AA[1])))Az&=~0x110;if(!!(Az&0x110))Az&=~0x28;
if((((Az&0x2)===0x2)&&!!(Az&0x5))&&((Ad[2]-Ad[0])>(AA[2]-AA[0])))Az&=~0x2;if(((Az&
0x2)===0x2))Az&=~0x5;if((Ad[2]-Ad[0])!==(AA[2]-AA[0])){if(((Az&0x4)===0x4))Ad=B.
abM(Ad,AA[2]-(Ad[2]-Ad[0]));else if(((Az&0x2)===0x2))Ad=B.abM(Ad,(AA[0]+(((AA[2]-
AA[0])/2)|0))-(((Ad[2]-Ad[0])/2)|0));}if((Ad[3]-Ad[1])!==(AA[3]-AA[1])){if(((Az&
0x20)===0x20))Ad=B.abO(Ad,AA[3]-(Ad[3]-Ad[1]));else if(((Az&0x100)===0x100))Ad=B.
abO(Ad,((AA[1]+(((AA[3]-AA[1])/2)|0))-(((Ad[3]-Ad[1])/2)|0))+(((this.Co.Descent-
this.Co.Ascent)/2)|0));else if(((Az&0x10)===0x10))Ad=B.abO(Ad,(AA[1]+(((AA[3]-AA[
1])/2)|0))-(((Ad[3]-Ad[1])/2)|0));}if(!orient)Ad=B.abh(Ad,Ao.slice(0,2));else if(
orient===1){var Hf=[Ao[0]+Ad[1],Ao[3]-Ad[2]];Ad=[].concat(Hf,B.abf(Hf,[this.ES[1
],this.ES[0]]));}else if(orient===2){var Hf=[Ao[2]-Ad[2],Ao[3]-Ad[3]];Ad=[].concat(
Hf,B.abf(Hf,this.ES));}else if(orient===3){var Hf=[Ao[2]-Ad[3],Ao[1]+Ad[0]];Ad=[
].concat(Hf,B.abf(Hf,[this.ES[1],this.ES[0]]));}return Ad;},Hu:function(){return this.
Dj;},_Init:function(aArg){B.Core.Ca._Init.call(this,aArg);this.__proto__=C.Text;
},_Done:function(){this.Fa();this.__proto__=B.Core.Ca;B.Core.Ca._Done.call(this);
},_Mark:function(D){var A;B.Core.Ca._Mark.call(this,D);if((A=this.Co)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.If)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);},_className:"Views::Text"};C.TI={N3:0x1,N2:0x2,N4:0x4,N7:0x8,N6:0x10,N5:0x20,
T_:0x40,T$:0x80,Ue:0x100};C.Uf={N3:0x1,N2:0x2,N4:0x4,N7:0x8,N6:0x10,N5:0x20,S3:0x40
,S2:0x80,S8:0x100};C.GQ={TQ:0,T8:1,T6:2,T7:3};C.Hq={V:null,IX:0xFFFFFFFF,J$:1,BT:
255,FG:0,Fb:function(BC,aClip,aOffset,aOpacity,aBlend){var A;aBlend=aBlend&&((this.
F&0x2)===0x2);aOpacity=(this.BT*(aOpacity+1))>>8;var Ki=this.N1(0);if(!!!this.V)
return;if(((!!!Ki&&!this.FG)&&aBlend)&&!!!aOpacity)return;if(aBlend&&!!!aOpacity
)return;if(((aBlend&&(this.J$===1))&&!!!((this.IX>>24)&0xFF))&&((this.FG===2)||(
this.FG===3)))return;this.V.Update();var Ao=B.abh(this.U,aOffset);var Ag=B.abh([
].concat(AR,this.V.FrameSize),Ao.slice(0,2));aClip=B.lb(aClip,B.aaT(Ag,[Ki,Ki]));
if((aClip[0]>=aClip[2])||(aClip[1]>=aClip[3]))return;BC.Ol(aClip,this.V,null,Ao,
AR,AR,false,false,Ki,false,this.FG,this.J$,this.IX,aOpacity,aBlend);},Jj:function(
T){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U);},Bn:function(E){var
A;if(E===this.V)return;if(!!this.V&&this.V.H_)B.z9([this,this.Jj],this.V,0);this.
V=E;if(!!E&&E.H_)B.zV([this,this.Jj],E,0);if(!!this.G&&((this.F&0x1)===0x1))this.
G.Aw(this.U);},Gh:function(E){var A;if(E===this.IX)return;this.IX=E;if((!!this.G&&((
this.F&0x1)===0x1))&&((this.FG===2)||(this.FG===3)))this.G.Aw(this.U);},IK:function(
E){var A;if(E<0)E=0;if(E>1)E=1;if(this.J$===E)return;this.J$=E;if((!!this.G&&((this.
F&0x1)===0x1))&&!!this.FG)this.G.Aw(this.U);},IL:function(E){var A;if(this.FG===
E)return;this.FG=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.U);},CX:function(
E){var A;if(E<0)E=0;if(E>255)E=255;if(E===this.BT)return;this.BT=E;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Aw(this.U);},Af:function(E){if(E)this.AH(0x1,0x0);else
this.AH(0x0,0x1);},N1:function(aBlurRadius){aBlurRadius=B.v1(aBlurRadius);return aBlurRadius;
},JR:function(){return this.IX;},_Init:function(aArg){B.Core.Ca._Init.call(this,
aArg);this.__proto__=C.Hq;},_Mark:function(D){var A;B.Core.Ca._Mark.call(this,D);
if((A=this.V)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::FilterImage"
};
C._Init=function(){C.AD.__proto__=B.Core.Ca;C.Text.__proto__=B.Core.Ca;C.Hq.__proto__=
B.Core.Ca;};C._ReInit=function(){};C.D$=function(D){};return C;})();

/* Embedded Wizard */