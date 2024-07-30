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
);if(EmWiApp.aci)throw new Error("The unit file 'Views.js' included twice!");EmWiApp.
aci=(function(){var B=EmWiApp;var C={};
var AT=[0,0];var Bh=[0,0,0,0];var D4="\uFEFF";
C.AO={timer:null,U:null,Bg:0,Fo:0,C5:0xFFFFFFFF,Fz:0x12,I2:0,FA:false,EO:function(
Bm,aClip,aOffset,aOpacity,aBlend){var A;var Fu=this.I2;if(this.Fo>=0)Fu=this.Fo;
if(!this.U||(Fu>=this.U.NoOfFrames))return;this.U.Update();var Ar=this.Km();var AU=
this.U.FrameSize;if((Ar[0]>=Ar[2])||(Ar[1]>=Ar[3]))return;var Bs;var BH;var BG;var
Bw;var Bd=this.C5;var EY=(((aOpacity+1)*255)>>8)+1;aBlend=aBlend&&((this.F&0x2)===
0x2);Bs=BH=Bw=BG=Bd;if(EY<256){Bs=(Bs&0x00FFFFFF)|((((((Bs>>24)&0xFF)*EY)>>8)&0xFF
)<<24);BH=(BH&0x00FFFFFF)|((((((BH>>24)&0xFF)*EY)>>8)&0xFF)<<24);BG=(BG&0x00FFFFFF
)|((((((BG>>24)&0xFF)*EY)>>8)&0xFF)<<24);Bw=(Bw&0x00FFFFFF)|((((((Bw>>24)&0xFF)*
EY)>>8)&0xFF)<<24);}if(B.aaX([Ar[2]-Ar[0],Ar[3]-Ar[1]],AU))Bm.M5(aClip,this.U,Fu
,B.abh(this.T,aOffset),B.abe(this.T.slice(0,2),Ar.slice(0,2)),Bs,BH,BG,Bw,aBlend
);else Bm.NI(aClip,this.U,Fu,B.abh(Ar,aOffset),[].concat(AT,AU),Bs,BH,BG,Bw,aBlend
,true);},II:function(S){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.T
);},GS:function(S){var A;var Fu=this.Fo;var HT=0;if(!!this.U)HT=this.U.NoOfFrames
*this.U.FrameDelay;if((!!this.timer&&(this.Fo<0))&&(HT>0))this.Bg=this.timer.Bl-(
this.I2*this.U.FrameDelay);if(!!this.timer&&(HT>0)){var As=(this.timer.Bl-this.Bg
)|0;Fu=(As/this.U.FrameDelay)|0;if(As>=HT){Fu=Fu%this.U.NoOfFrames;this.Bg=this.
timer.Bl-(As%HT);}}if(((Fu!==this.Fo)&&!!this.G)&&((this.F&0x1)===0x1))this.G.Ax(
this.T);this.Fo=Fu;if(!HT&&!!this.timer){B.z9([this,this.GS],this.timer,0);this.
timer=null;}},D1:function(E){var A;if(E===this.C5)return;this.C5=E;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ax(this.T);},KI:function(E){var A;if(this.FA===E)return;
this.FA=E;this.Fo=-1;if(!E&&!!this.timer){B.z9([this,this.GS],this.timer,0);this.
timer=null;}if(E){this.timer=B._GetAutoObject(B.ach.Hw);B.zV([this,this.GS],this.
timer,0);B.pe([this,this.GS],this);}if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(
this.T);},Jh:function(E){var A;if(E===this.Fz)return;this.Fz=E;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ax(this.T);},Mb:function(E){var A;if(E<0)E=0;if((E===this.I2
)&&(this.Fo===-1))return;this.I2=E;if(!this.timer)this.Fo=-1;if(!!this.G&&((this.
F&0x1)===0x1))this.G.Ax(this.T);},CO:function(E){var A;if(E===this.U)return;if(!
!this.U&&this.U.Hy)B.z9([this,this.II],this.U,0);this.U=E;this.Fo=-1;if(!!E&&E.Hy
)B.zV([this,this.II],E,0);if(this.FA){this.KI(false);this.KI(true);}if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ax(this.T);},Aq:function(E){if(E)this.AC(0x1,0x0);else
this.AC(0x0,0x1);},Km:function(){var A;if(!this.U)return Bh;var Av=this.Fz;var AU=
this.U.FrameSize;var Ap=this.T;var width=Ap[2]-Ap[0];var height=Ap[3]-Ap[1];if(!
AU[0]||!AU[1])return Bh;var AG=[0,0,width,height];var Al=AG;if(((Av&0x40)===0x40
)){var LO=((((AG[2]-AG[0])<<16)+((AU[0]/2)|0))/AU[0])|0;var IS=((((AG[3]-AG[1])<<
16)+((AU[1]/2)|0))/AU[1])|0;var Gc=LO;if(IS>Gc)Gc=IS;Al=B.abL(Al,((AU[0]*Gc)+32768
)>>16);Al=B.abI(Al,((AU[1]*Gc)+32768)>>16);}else if(((Av&0x80)===0x80)){var LO=((((
AG[2]-AG[0])<<16)+((AU[0]/2)|0))/AU[0])|0;var IS=((((AG[3]-AG[1])<<16)+((AU[1]/2
)|0))/AU[1])|0;var Gc=LO;if(IS<Gc)Gc=IS;Al=B.abL(Al,((AU[0]*Gc)+32768)>>16);Al=B.
abI(Al,((AU[1]*Gc)+32768)>>16);}else if(!((Av&0x100)===0x100))Al=B.abK(Al,AU);if((
Al[2]-Al[0])!==(AG[2]-AG[0])){if(((Av&0x4)===0x4))Al=B.abM(Al,AG[2]-(Al[2]-Al[0]
));else if(((Av&0x2)===0x2))Al=B.abM(Al,(AG[0]+(((AG[2]-AG[0])/2)|0))-(((Al[2]-Al[
0])/2)|0));}if((Al[3]-Al[1])!==(AG[3]-AG[1])){if(((Av&0x20)===0x20))Al=B.abO(Al,
AG[3]-(Al[3]-Al[1]));else if(((Av&0x10)===0x10))Al=B.abO(Al,(AG[1]+(((AG[3]-AG[1
])/2)|0))-(((Al[3]-Al[1])/2)|0));}Al=B.abh(Al,Ap.slice(0,2));return Al;},_Init:function(
aArg){B.Core.BS._Init.call(this,aArg);this.__proto__=C.AO;},_Mark:function(D){var
A;B.Core.BS._Mark.call(this,D);if((A=this.timer)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.U)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Views::Image"};
C.Text={B6:null,HG:null,Bc:B.jV,String:B.jV,DT:null,GR:B.wf,HH:0,J8:0xFFFFFFFF,J9:
0xFFFFFFFF,J$:0xFFFFFFFF,J_:0xFFFFFFFF,Fz:0x12,C5:0xFFFFFFFF,G5:false,GV:false,Kh:
false,CD:false,EN:function(){if(!!this.DT){this.Lt(this.DT);this.DT=null;}},EO:function(
Bm,aClip,aOffset,aOpacity,aBlend){var A;if((this.Bc===B.jV)||!this.B6)return;var
Av=this.Fz;var font=this.B6;var AG=B.abh(this.T,aOffset);var Bs=this.J_;var BH=this.
J$;var BG=this.J9;var Bw=this.J8;var Cz=this.C5;var EY=(((aOpacity+1)*255)>>8)+1;
var EX=this.Bc.charCodeAt(0)||0;var Ar=B.abh(this.Km(),aOffset);var MF=[AG[0]-Ar[
0],(AG[1]-Ar[1])-font.Ascent];if(EX<1)return;if((((Bs===BH)&&(Bw===BG))&&(Bs===Bw
))&&(Bs===0xFFFFFFFF))Bs=BH=Bw=BG=Cz;else if(Cz!==0xFFFFFFFF){Bs=(Bs&0x00FFFFFF)|((((((
Bs>>24)&0xFF)*(((Cz>>24)&0xFF)+1))>>8)&0xFF)<<24);Bs=(Bs&0xFFFFFF00)|((((Bs&0xFF
)*((Cz&0xFF)+1))>>8)&0xFF);Bs=(Bs&0xFFFF00FF)|((((((Bs>>8)&0xFF)*(((Cz>>8)&0xFF)+
1))>>8)&0xFF)<<8);Bs=(Bs&0xFF00FFFF)|((((((Bs>>16)&0xFF)*(((Cz>>16)&0xFF)+1))>>8
)&0xFF)<<16);BH=(BH&0x00FFFFFF)|((((((BH>>24)&0xFF)*(((Cz>>24)&0xFF)+1))>>8)&0xFF
)<<24);BH=(BH&0xFFFFFF00)|((((BH&0xFF)*((Cz&0xFF)+1))>>8)&0xFF);BH=(BH&0xFFFF00FF
)|((((((BH>>8)&0xFF)*(((Cz>>8)&0xFF)+1))>>8)&0xFF)<<8);BH=(BH&0xFF00FFFF)|((((((
BH>>16)&0xFF)*(((Cz>>16)&0xFF)+1))>>8)&0xFF)<<16);Bw=(Bw&0x00FFFFFF)|((((((Bw>>24
)&0xFF)*(((Cz>>24)&0xFF)+1))>>8)&0xFF)<<24);Bw=(Bw&0xFFFFFF00)|((((Bw&0xFF)*((Cz&
0xFF)+1))>>8)&0xFF);Bw=(Bw&0xFFFF00FF)|((((((Bw>>8)&0xFF)*(((Cz>>8)&0xFF)+1))>>8
)&0xFF)<<8);Bw=(Bw&0xFF00FFFF)|((((((Bw>>16)&0xFF)*(((Cz>>16)&0xFF)+1))>>8)&0xFF
)<<16);BG=(BG&0x00FFFFFF)|((((((BG>>24)&0xFF)*(((Cz>>24)&0xFF)+1))>>8)&0xFF)<<24
);BG=(BG&0xFFFFFF00)|((((BG&0xFF)*((Cz&0xFF)+1))>>8)&0xFF);BG=(BG&0xFFFF00FF)|((((((
BG>>8)&0xFF)*(((Cz>>8)&0xFF)+1))>>8)&0xFF)<<8);BG=(BG&0xFF00FFFF)|((((((BG>>16)&
0xFF)*(((Cz>>16)&0xFF)+1))>>8)&0xFF)<<16);}if(EY<256){Bs=(Bs&0x00FFFFFF)|((((((Bs>>
24)&0xFF)*EY)>>8)&0xFF)<<24);BH=(BH&0x00FFFFFF)|((((((BH>>24)&0xFF)*EY)>>8)&0xFF
)<<24);BG=(BG&0x00FFFFFF)|((((((BG>>24)&0xFF)*EY)>>8)&0xFF)<<24);Bw=(Bw&0x00FFFFFF
)|((((((Bw>>24)&0xFF)*EY)>>8)&0xFF)<<24);}if(((Av&0x80)===0x80)){if(this.Kr())Av=(
Av&~0x80)|0x4;else Av=(Av&~0x80)|0x1;}if((EX===1)&&!((Av&0x40)===0x40)){Bm.LY(aClip
,font,this.Bc,2,(this.Bc.charCodeAt(1)||0)-1,AG,MF,0,0,Bs,BH,BG,Bw,true);return;
}var leading=font.Leading;var LN=(font.Ascent+font.Descent)+leading;var Qw=aClip[
1]-Ar[1];var Qx=aClip[3]-Ar[1];var Lm=Ar[2]-Ar[0];var Bn=0;var L=1;var Bd=this.Bc.
charCodeAt(1)||0;while(((Bn+LN)<Qw)&&(Bd>0)){L=L+Bd;Bn=Bn+LN;Bd=this.Bc.charCodeAt(
L)||0;}while((Bn<Qx)&&(Bd>0)){var Hg=B.abe(MF,[0,Bn]);var MO=0;var JR=false;if(((((
Av&0x40)===0x40)&&((this.Bc.charCodeAt((L+Bd)-1)||0)!==0x0A))&&((this.Bc.charCodeAt(
L+1)||0)!==0x0A))&&((this.Bc.charCodeAt(L+Bd)||0)!==0x00))JR=true;if(JR&&!!(Av&0x6
)){var MN=L+Bd;var Ms=this.Bc.indexOf(String.fromCharCode(0x20),L+1);var Mt=this.
Bc.indexOf(String.fromCharCode(0xA0),L+1);if(((Ms<0)||(Ms>=MN))&&((Mt<0)||(Mt>=MN
)))JR=false;}if(JR)MO=Lm;else if(((Av&0x4)===0x4))Hg=[(Hg[0]-Lm)+font.H2(this.Bc
,L+1,Bd-1),Hg[1]];else if(((Av&0x2)===0x2))Hg=[(Hg[0]-((Lm/2)|0))+((font.H2(this.
Bc,L+1,Bd-1)/2)|0),Hg[1]];Bm.LY(aClip,font,this.Bc,L+1,Bd-1,AG,Hg,MO,0,Bs,BH,BG,
Bw,true);L=L+Bd;Bn=Bn+LN;Bd=this.Bc.charCodeAt(L)||0;}},R:function(E){var A;if(B.
aaY(E,this.T))return;var MM;MM=((A=this.T)[2]-A[0])!==(E[2]-E[0]);if(((MM&&this.
G5)&&this.CD)&&!((this.F&0x2000)===0x2000)){this.Bc=B.jV;this.CD=false;B.pe([this
,this.Gb],this);}if(((this.GV&&this.CD)&&!B.aaX([(A=this.T)[2]-A[0],A[3]-A[1]],[
E[2]-E[0],E[3]-E[1]]))&&!((this.F&0x2000)===0x2000)){this.Bc=B.jV;this.CD=false;
B.pe([this,this.Gb],this);}B.Core.BS.R.call(this,E);B.pe([this,this.LL],this);},
Lt:function(aBidi){if(!aBidi)return;B.rB(aBidi);},Qz:function(aSize){var bidi=null;
bidi=B.v3(aSize);return bidi;},LL:function(S){B.pe(this.HG,this);},Gb:function(S
){B.pe([this,this.JW],this);},JW:function(S){var A;if(this.CD)return;var width=(
A=this.T)[2]-A[0];var height=(A=this.T)[3]-A[1];var Fv=-1;var font=this.B6;if((!
!font&&!!!font.Ascent)&&!!!font.Descent)font=null;if(this.G5){Fv=width-(this.HH*
2);if(Fv<0)Fv=1;}if(!!this.DT){this.Lt(this.DT);this.DT=null;}this.CD=true;if((this.
String!==B.jV)&&!!font){var length=this.String.length;if(this.Kh)this.DT=this.Qz(
length);this.Bc=font.NB(this.String,0,Fv,length,this.DT);if(!!this.DT&&!this.Np(
)){this.Lt(this.DT);this.DT=null;}}else this.Bc=B.jV;this.GR=AT;if((this.GV&&(this.
Bc!==B.jV))&&!!font){var Av=this.Fz;var leading=font.Leading;var Bj=this.Bc;var J0=
this.Kr();if(((Av&0x80)===0x80)){if(J0)Av=(Av&~0x80)|0x4;else Av=(Av&~0x80)|0x1;
}var JY=(font.Ascent+font.Descent)+leading;var EX=Bj.charCodeAt(0)||0;var GI=((height+
leading)/JY)|0;var Lp=false;var JJ=false;if(GI<=0)GI=1;if(EX>GI){var EM=0;var IR=
0;var JZ=EX-1;var BU;var Ck=Bj.length;var tmp=B.jV;if(!!(Av&0x110)&&!!(Av&0x28))
Av&=~0x110;if(!!(Av&0x110))Av&=~0x28;if(((Av&0x20)===0x20))IR=EX-GI;else if(((Av&
0x10)===0x10)||((Av&0x100)===0x100)){IR=((EX-GI)/2)|0;JZ=(IR+GI)-1;}else JZ=GI-1;
Lp=IR>0;JJ=JZ<(EX-1);for(BU=1;EM<IR;EM=EM+1)BU=BU+(Bj.charCodeAt(BU)||0);if(JJ)for(
Ck=BU;EM<JZ;EM=EM+1)Ck=Ck+(Bj.charCodeAt(Ck)||0);if(Lp){var CC=Bj.charCodeAt(BU)||
0;tmp=(D4+B.abW(Bj,BU,CC))+D4;tmp=B.abQ(tmp,0,(CC+2)&0xFFFF);BU=BU+CC;if((tmp.charCodeAt(
CC)||0)===0x0A){tmp=B.abQ(tmp,CC,0xFEFF);tmp=B.abQ(tmp,CC+1,0x0A);}if((tmp.charCodeAt(
2)||0)===0x0A){tmp=B.abQ(tmp,2,0xFEFF);tmp=B.abQ(tmp,1,0x0A);}else tmp=B.abQ(tmp
,1,0xFEFF);}tmp=tmp+B.abW(Bj,BU,Ck-BU);if(JJ&&(Ck>=BU)){var CC=Bj.charCodeAt(Ck)||
0;var C3=(D4+B.abW(Bj,Ck,CC))+D4;C3=B.abQ(C3,0,(CC+2)&0xFFFF);C3=B.abQ(C3,1,0xFEFF
);if((C3.charCodeAt(CC)||0)===0x0A){C3=B.abQ(C3,CC,0xFEFF);C3=B.abQ(C3,CC+1,0x0A
);}if((C3.charCodeAt(2)||0)===0x0A){C3=B.abQ(C3,2,0xFEFF);C3=B.abQ(C3,1,0x0A);}else
C3=B.abQ(C3,1,0xFEFF);tmp=tmp+C3;}Bj=String.fromCharCode(GI&0xFFFF)+tmp;}var EM=
0;var JQ=1;var LD=width-(this.HH*2);EX=Bj.charCodeAt(0)||0;for(;EM<EX;EM=EM+1){var
GP=Lp&&!EM;var GQ=JJ&&(EM===(EX-1));var Eo=false;var Ep=false;var HV=J0;if((J0&&
GP)&&!GQ){GP=false;GQ=true;}else if((J0&&GQ)&&!GP){GQ=false;GP=true;}var IT=JQ+1;
var CC=Bj.charCodeAt(JQ)||0;var BU=IT;var Ck=(IT+CC)-2;var Ly=-1;var Lz=-1;if(!this.
G5&&(font.H2(Bj,IT,CC-1)>LD)){var Hb=Av;if(((Hb&0x2)===0x2)&&!!(Hb&0x5))Hb&=~0x2;
if(((Hb&0x2)===0x2))Hb&=~0x5;if(((Hb&0x4)===0x4))Eo=true;else if(((Hb&0x2)===0x2
)){Eo=true;Ep=true;}else Ep=true;}if((Bj.charCodeAt(BU)||0)===0x0A)BU=BU+1;if((Bj.
charCodeAt(Ck)||0)===0x0A)Ck=Ck-1;while(Eo&&((Bj.charCodeAt(BU)||0)===0xFEFF))BU=
BU+1;while(Ep&&((Bj.charCodeAt(Ck)||0)===0xFEFF))Ck=Ck-1;Eo=Eo&&!GQ;Ep=Ep&&!GP;while((((
Eo||Ep)||GP)||GQ)&&(BU<Ck)){if((Eo&&(HV||!Ep))||GP){if(Ly>0)Bj=B.abQ(Bj,Ly,0xFEFF
);Bj=B.abQ(Bj,BU,0x2026);Ly=BU;BU=BU+1;HV=!HV;GP=false;if(font.H2(Bj,IT,CC-1)<=LD
){Eo=false;Ep=false;}else Eo=Eo||!Ep;}if((Ep&&(!HV||!Eo))||GQ){if(Lz>0)Bj=B.abQ(
Bj,Lz,0xFEFF);Bj=B.abQ(Bj,Ck,0x2026);Lz=Ck;Ck=Ck-1;HV=!HV;GQ=false;if(font.H2(Bj
,IT,CC-1)<=LD){Eo=false;Ep=false;}else Ep=Ep||!Eo;}}JQ=JQ+CC;}this.GR=[font.L1(Bj
),((Bj.charCodeAt(0)||0)*JY)-leading];this.Bc=Bj;}if(!!this.G&&((this.F&0x1)===0x1
))this.G.Ax(this.T);B.pe([this,this.LL],this);},Nu:function(E){if(E===this.Kh)return;
this.Kh=E;this.Bc=B.jV;this.CD=false;B.pe([this,this.Gb],this);},KK:function(E){
if(E<0)E=0;if(this.HH===E)return;this.HH=E;this.Bc=B.jV;this.CD=false;B.pe([this
,this.Gb],this);},Nt:function(E){if(E===this.GV)return;this.GV=E;if((this.G5||E)||
!!this.HG)this.F=this.F&~0x100;else this.F=this.F|0x100;this.Bc=B.jV;this.CD=false;
B.pe([this,this.Gb],this);},Me:function(E){if(B.aa0(E,this.HG))return;this.HG=E;
if((this.G5||!!E)||this.GV)this.F=this.F&~0x100;else this.F=this.F|0x100;},L_:function(
E){var A;if(E===this.J8)return;this.J8=E;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ax(this.T);},KJ:function(E){var A;if(E===this.J9)return;this.J9=E;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ax(this.T);},HA:function(E){var A;if(E===this.J$)return;
this.J$=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.T);},H_:function(E){var
A;if(E===this.J_)return;this.J_=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.
T);},Nz:function(E){if(E===this.G5)return;this.G5=E;if(this.CD){this.Bc=B.jV;this.
CD=false;B.pe([this,this.Gb],this);}if((E||this.GV)||!!this.HG)this.F=this.F&~0x100;
else this.F=this.F|0x100;},Jh:function(E){var A;if(E===this.Fz)return;this.Fz=E;
if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.T);if(this.GV){this.Bc=B.jV;this.
CD=false;B.pe([this,this.Gb],this);}if(this.CD)B.pe([this,this.LL],this);},A_:function(
E){if(E===this.String)return;this.String=E;this.Bc=B.jV;this.CD=false;B.pe([this
,this.Gb],this);},EF:function(E){if(E===this.B6)return;this.B6=E;this.Bc=B.jV;this.
CD=false;B.pe([this,this.Gb],this);},D1:function(E){var A;if(E===this.C5)return;
this.C5=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.T);},Aq:function(E){if(
E)this.AC(0x1,0x0);else this.AC(0x0,0x1);},Kr:function(){if(!this.CD)this.JW(this
);if(!this.DT)return false;var result=false;var bidi=this.DT;result=B.v2(bidi);return result;
},Np:function(){if(!this.CD)this.JW(this);if(!this.DT)return false;var result=false;
var bidi=this.DT;result=B.zZ(bidi);return result;},Km:function(){var A;if((this.
String===B.jV)||!this.B6)return Bh;if(!this.CD)this.JW(this);if(this.Bc===B.jV)return Bh;
var leading=this.B6.Leading;var JY=(this.B6.Ascent+this.B6.Descent)+this.B6.Leading;
if(B.aaX(this.GR,AT))this.GR=[this.B6.L1(this.Bc),this.GR[1]];this.GR=[this.GR[0
],((this.Bc.charCodeAt(0)||0)*JY)-leading];var Av=this.Fz;var Ap=this.T;var MI=this.
HH;var width=Ap[2]-Ap[0];var height=Ap[3]-Ap[1];var AG=[MI,0,width-MI,height];var
Al=[].concat(AG.slice(0,2),B.abf(AG.slice(0,2),this.GR));if(((Av&0x80)===0x80)){
if(this.Kr())Av=(Av&~0x80)|0x4;else Av=(Av&~0x80)|0x1;}if(((Av&0x40)===0x40)){var
Fv;Fv=width-(this.HH*2);if(Fv<0)Fv=0;if(Fv>(Al[2]-Al[0]))Al=B.abL(Al,Fv);}if((!!(
Av&0x110)&&!!(Av&0x28))&&((Al[3]-Al[1])>(AG[3]-AG[1])))Av&=~0x110;if(!!(Av&0x110
))Av&=~0x28;if((((Av&0x2)===0x2)&&!!(Av&0x5))&&((Al[2]-Al[0])>(AG[2]-AG[0])))Av&=
~0x2;if(((Av&0x2)===0x2))Av&=~0x5;if((Al[2]-Al[0])!==(AG[2]-AG[0])){if(((Av&0x4)===
0x4))Al=B.abM(Al,AG[2]-(Al[2]-Al[0]));else if(((Av&0x2)===0x2))Al=B.abM(Al,(AG[0
]+(((AG[2]-AG[0])/2)|0))-(((Al[2]-Al[0])/2)|0));}if((Al[3]-Al[1])!==(AG[3]-AG[1]
)){if(((Av&0x20)===0x20))Al=B.abO(Al,AG[3]-(Al[3]-Al[1]));else if(((Av&0x100)===
0x100))Al=B.abO(Al,((AG[1]+(((AG[3]-AG[1])/2)|0))-(((Al[3]-Al[1])/2)|0))+(((this.
B6.Descent-this.B6.Ascent)/2)|0));else if(((Av&0x10)===0x10))Al=B.abO(Al,(AG[1]+(((
AG[3]-AG[1])/2)|0))-(((Al[3]-Al[1])/2)|0));}Al=B.abh(Al,Ap.slice(0,2));return Al;
},KD:function(){return this.C5;},_Init:function(aArg){B.Core.BS._Init.call(this,
aArg);this.__proto__=C.Text;},_Done:function(){this.EN();this.__proto__=B.Core.BS;
B.Core.BS._Done.call(this);},_Mark:function(D){var A;B.Core.BS._Mark.call(this,D
);if((A=this.B6)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.HG)&&((A=A[0])._cycle
!=D))A._Mark(A._cycle=D);},_className:"Views::Text"};C.RL={MW:0x1,MV:0x2,MX:0x4,
M0:0x8,MZ:0x10,MY:0x20,Sb:0x40,Sc:0x80,Sh:0x100};C.Si={MW:0x1,MV:0x2,MX:0x4,M0:0x8
,MZ:0x10,MY:0x20,Q6:0x40,Q5:0x80,Q$:0x100};C.RU={RT:0,R$:1,R9:2,R_:3};C.GW={U:null
,Ik:0xFFFFFFFF,Jy:1,B7:255,Ff:0,EO:function(Bm,aClip,aOffset,aOpacity,aBlend){var
A;aBlend=aBlend&&((this.F&0x2)===0x2);aOpacity=(this.B7*(aOpacity+1))>>8;var JH=
this.MU(0);if(!!!this.U)return;if(((!!!JH&&!this.Ff)&&aBlend)&&!!!aOpacity)return;
if(aBlend&&!!!aOpacity)return;if(((aBlend&&(this.Jy===1))&&!!!((this.Ik>>24)&0xFF
))&&((this.Ff===2)||(this.Ff===3)))return;this.U.Update();var Ap=B.abh(this.T,aOffset
);var Ar=B.abh([].concat(AT,this.U.FrameSize),Ap.slice(0,2));aClip=B.lb(aClip,B.
aaT(Ar,[JH,JH]));if((aClip[0]>=aClip[2])||(aClip[1]>=aClip[3]))return;Bm.Nc(aClip
,this.U,null,Ap,AT,AT,false,false,JH,false,this.Ff,this.Jy,this.Ik,aOpacity,aBlend
);},II:function(S){var A;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.T);},CO:
function(E){var A;if(E===this.U)return;if(!!this.U&&this.U.Hy)B.z9([this,this.II
],this.U,0);this.U=E;if(!!E&&E.Hy)B.zV([this,this.II],E,0);if(!!this.G&&((this.F&
0x1)===0x1))this.G.Ax(this.T);},FJ:function(E){var A;if(E===this.Ik)return;this.
Ik=E;if((!!this.G&&((this.F&0x1)===0x1))&&((this.Ff===2)||(this.Ff===3)))this.G.
Ax(this.T);},Ia:function(E){var A;if(E<0)E=0;if(E>1)E=1;if(this.Jy===E)return;this.
Jy=E;if((!!this.G&&((this.F&0x1)===0x1))&&!!this.Ff)this.G.Ax(this.T);},Ib:function(
E){var A;if(this.Ff===E)return;this.Ff=E;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ax(this.T);},Dc:function(E){var A;if(E<0)E=0;if(E>255)E=255;if(E===this.B7)return;
this.B7=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.T);},Aq:function(E){if(
E)this.AC(0x1,0x0);else this.AC(0x0,0x1);},MU:function(aBlurRadius){aBlurRadius=
B.v1(aBlurRadius);return aBlurRadius;},Jd:function(){return this.Ik;},_Init:function(
aArg){B.Core.BS._Init.call(this,aArg);this.__proto__=C.GW;},_Mark:function(D){var
A;B.Core.BS._Mark.call(this,D);if((A=this.U)&&(A._cycle!=D))A._Mark(A._cycle=D);
},_className:"Views::FilterImage"};
C._Init=function(){C.AO.__proto__=B.Core.BS;C.Text.__proto__=B.Core.BS;C.GW.__proto__=
B.Core.BS;};C._ReInit=function(){};C.DO=function(D){};return C;})();

/* Embedded Wizard */