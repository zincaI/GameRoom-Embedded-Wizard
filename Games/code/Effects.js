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
);if(EmWiApp.aci)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
aci=(function(){var B=EmWiApp;var C={};
var Bg=[100,100];var AW="Trying to remove a fader from a task, which is actually running";
var D_="The fader doesn\'t belong to this task";var En="Trying to add a fader to a task, which is actually running";
var FL="The fader belongs already to a task";
C.A7={CB:null,timer:null,IE:null,FE:null,I6:0,GH:0,Eq:0,Dd:0,Jb:0.001,DF:0,A9:0,Bv:
0,KY:0.5,MS:3,IL:3,Iq:0.5,Ex:3,LV:0,LU:0,Ej:0,Gc:1000,Gg:0,Gs:0,A8:false,LM:false
,H0:false,Kz:false,Hr:function(T){var A;if(!this.timer)return;if(!this.GH){if(this.
LM)this.GH=-1;else this.GH=1;this.I6=this.GH;this.Bv=this.timer.A1;this.A9=0;this.
DF=-1;}var DA;if((this.GH>0)&&(this.I6>0))DA=this.S_();else if((this.GH<0)&&(this.
I6<0))DA=this.Tb();else if(this.GH>0)DA=this.S$();else DA=this.Ta();if(DA){this.
L(false);(A=this.IE)?A[1].call(A[0],this):null;}},Kv:function(P){var A;if(!this.
CB&&(((this.Gs===19)||(this.Gs===20))||(this.Gs===21))){var J$=this.MS+1;var SQ=
Math.sqrt(this.KY);var HY=0.5;var N;this.CB=B._NewObject(C.J2,0);this.CB.Dg.Set(
0,1);this.CB.Hd.Set(0,1);for(N=1;N<J$;N=N+1){this.CB.Dg.Set(N,this.CB.Dg.Get(N-1
)*SQ);this.CB.Hd.Set(N,this.CB.Hd.Get(N-1)*this.KY);HY=HY+this.CB.Dg.Get(N);}var
SS=1/HY;this.CB.Dg.Set(0,0.5);HY=0;for(N=0;N<J$;N=N+1){this.CB.Dg.Set(N,this.CB.
Dg.Get(N)*SS);HY=HY+this.CB.Dg.Get(N);}this.CB.Dg.Set(J$,this.CB.Dg.Get(J$)+(1-HY
));}switch(this.Gs){case 1:P=Math.pow(P,this.Ex);break;case 2:{P=1-P;P=1-Math.pow(
P,this.Ex);}break;case 3:{P=P*2;if(P<1)P=Math.pow(P,this.Ex)/2;else{P=2-P;P=(2-Math.
pow(P,this.Ex))*0.5;}}break;case 4:P=(Math.pow(2.718,this.Ex*P)-1)/(Math.pow(2.718
,this.Ex)-1);break;case 5:{P=1-P;P=1-((Math.pow(2.718,this.Ex*P)-1)/(Math.pow(2.718
,this.Ex)-1));}break;case 6:{P=P*2;if(P<1)P=((Math.pow(2.718,this.Ex*P)-1)/(Math.
pow(2.718,this.Ex)-1))/2;else{P=2-P;P=(2-((Math.pow(2.718,this.Ex*P)-1)/(Math.pow(
2.718,this.Ex)-1)))*0.5;}}break;case 7:P=1-Math.cos((P*90)*B.k$);break;case 8:P=
Math.sin((P*90)*B.k$);break;case 9:{P=P*2;if(P<1){P=1-Math.cos((P*90)*B.k$);P=P*
0.5;}else{P=2-P;P=1-Math.cos((P*90)*B.k$);P=(2-P)*0.5;}}break;case 10:P=1-Math.sqrt(
1-(P*P));break;case 11:{P=1-P;P=Math.sqrt(1-(P*P));}break;case 12:{P=P*2;if(P<1){
P=1-Math.sqrt(1-(P*P));P=P*0.5;}else{P=2-P;P=1-Math.sqrt(1-(P*P));P=(2-P)*0.5;}}
break;case 13:P=((P*P)*P)-((P*this.Iq)*Math.sin((P*180)*B.k$));break;case 14:{P=
1-P;P=((P*P)*P)-((P*this.Iq)*Math.sin((P*180)*B.k$));P=1-P;}break;case 15:{P=P*2;
if(P<1){P=((P*P)*P)-((P*this.Iq)*Math.sin((P*180)*B.k$));P=P*0.5;}else{P=2-P;P=((
P*P)*P)-((P*this.Iq)*Math.sin((P*180)*B.k$));P=(2-P)*0.5;}}break;case 16:P=((P*P
)*P)*Math.sin(((P*90)*(1+(4*this.IL)))*B.k$);break;case 17:{P=1-P;P=1-(((P*P)*P)
*Math.sin(((P*90)*(1+(4*this.IL)))*B.k$));}break;case 18:{P=P*2;if(P<1){P=((P*P)
*P)*Math.sin(((P*90)*(1+(4*this.IL)))*B.k$);P=P*0.5;}else{P=2-P;P=((P*P)*P)*Math.
sin(((P*90)*(1+(4*this.IL)))*B.k$);P=(2-P)*0.5;}}break;case 19:{var Fp=this.CB;var
N=0;var Fx=0;var DL=Fp.Dg.Get(0);var Bb=1-P;while(Bb>DL){N=N+1;Fx=DL;DL=DL+Fp.Dg.
Get(N);}P=(Bb-Fx)/(DL-Fx);if(!N)P=1-(P*P);else{P=(2*P)-1;P=Fp.Hd.Get(N)*(1-(P*P)
);}}break;case 20:{var Fp=this.CB;var N=0;var Fx=0;var DL=Fp.Dg.Get(0);while(P>DL
){N=N+1;Fx=DL;DL=DL+Fp.Dg.Get(N);}P=(P-Fx)/(DL-Fx);if(!N)P=P*P;else{P=(2*P)-1;P=
1-(Fp.Hd.Get(N)*(1-(P*P)));}}break;case 21:{var Fp=this.CB;var N=0;var Fx=0;var DL=
Fp.Dg.Get(0);var Bs=P*2;var Bb=Bs-1;if(Bs<1)Bb=-Bb;while(Bb>DL){N=N+1;Fx=DL;DL=DL+
Fp.Dg.Get(N);}Bb=(Bb-Fx)/(DL-Fx);if(!N)Bb=Bb*Bb;else{Bb=(2*Bb)-1;Bb=1-(Fp.Hd.Get(
N)*(1-(Bb*Bb)));}if(Bs<1)P=0.5*(1-Bb);else P=0.5*(1+Bb);}break;default:if(this.H0
){var Bs=P;var Jf=1-Bs;P=((Jf*Bs)*(this.Dd+1))+(Bs*Bs);}else if(this.Kz){var Bs=
P;var Jf=1-Bs;var NH=Bs*Bs;var SU=Jf*Jf;P=(((SU*Bs)*(this.Dd+1))+((Jf*NH)*(this.
Eq+2)))+(NH*Bs);}}this.Jw(P);(A=this.FE)?A[1].call(A[0],this):null;},Tb:function(
){var Av=(this.timer.A1-this.Bv)|0;if(Av<0)Av=-Av;var Ef=this.Gg;var EQ=this.Gg+
this.Gc;var BN=this.Gc;var DA=false;var AF=this.DF;if(!this.A9&&(Av>=EQ)){this.A9=
1;Av=Av-EQ;this.Bv=this.Bv+EQ;}if((this.A9>0)&&(Av>=BN)){var B2=(Av/BN)|0;this.A9=
this.A9+B2;Av=Av-(B2*BN);this.Bv=this.Bv+(B2*BN);}if((this.A9>2)&&!this.Ej)this.
A9=1;if(this.A9>0)Ef=0;if((this.A9>=this.Ej)&&(this.Ej>0)){DA=true;AF=0;}else if(
Av>=Ef)AF=1-((Av-Ef)*this.Jb);else if(AF>=0)AF=0;if(AF!==this.DF){if(AF<0)AF=0;if(
AF>1)AF=1;}if(AF!==this.DF){this.DF=AF;this.Kv(AF);}return DA;},Ta:function(){var
Av=(this.Bv-this.timer.A1)|0;var Ef=this.Gg;var EQ=this.Gg+this.Gc;var BN=this.Gc;
var DA=false;var AF=this.DF;if((this.A9>1)&&(Av<0)){var B2=(((-Av+BN)-1)/BN)|0;if((
this.A9-B2)<=0)B2=this.A9-1;this.A9=this.A9-B2;Av=Av+(B2*BN);this.Bv=this.Bv+(B2
*BN);}if(((this.A9===1)&&(Av<0))&&(this.Ej>0)){this.A9=0;Av=Av+EQ;this.Bv=this.Bv+
EQ;}if(((this.A9===1)&&(Av<0))&&!this.Ej){var B2=(((-Av+BN)-1)/BN)|0;Av=Av+(B2*BN
);this.Bv=this.Bv+(B2*BN);}if(this.A9>0)Ef=0;if(Av<0){DA=true;AF=1;}else if(Av>=
Ef)AF=1-((Av-Ef)*this.Jb);else if(AF>=0)AF=1;if(AF!==this.DF){if(AF<0)AF=0;if(AF>
1)AF=1;}if(AF!==this.DF){this.DF=AF;this.Kv(AF);}return DA;},S$:function(){var Av=(
this.Bv-this.timer.A1)|0;var Ef=this.Gg;var EQ=this.Gg+this.Gc;var BN=this.Gc;var
DA=false;var AF=this.DF;if((this.A9>1)&&(Av<0)){var B2=(((-Av+BN)-1)/BN)|0;if((this.
A9-B2)<=0)B2=this.A9-1;this.A9=this.A9-B2;Av=Av+(B2*BN);this.Bv=this.Bv+(B2*BN);
}if(((this.A9===1)&&(Av<0))&&(this.Ej>0)){this.A9=0;Av=Av+EQ;this.Bv=this.Bv+EQ;
}if(((this.A9===1)&&(Av<0))&&!this.Ej){var B2=(((-Av+BN)-1)/BN)|0;Av=Av+(B2*BN);
this.Bv=this.Bv+(B2*BN);}if(this.A9>0)Ef=0;if(Av<0){DA=true;AF=0;}else if(Av>=Ef
)AF=(Av-Ef)*this.Jb;else if(AF>=0)AF=0;if(AF!==this.DF){if(AF<0)AF=0;if(AF>1)AF=
1;}if(AF!==this.DF){this.DF=AF;this.Kv(AF);}return DA;},S_:function(){var Av=(this.
timer.A1-this.Bv)|0;if(Av<0)Av=-Av;var Ef=this.Gg;var EQ=this.Gg+this.Gc;var BN=
this.Gc;var DA=false;var AF=this.DF;if(!this.A9&&(Av>=EQ)){this.A9=1;Av=Av-EQ;this.
Bv=this.Bv+EQ;}if((this.A9>0)&&(Av>=BN)){var B2=(Av/BN)|0;this.A9=this.A9+B2;Av=
Av-(B2*BN);this.Bv=this.Bv+(B2*BN);}if((this.A9>2)&&!this.Ej)this.A9=1;if(this.A9>
0)Ef=0;if((this.A9>=this.Ej)&&(this.Ej>0)){DA=true;AF=1;}else if(Av>=Ef)AF=(Av-Ef
)*this.Jb;else if(AF>=0)AF=1;if(AF!==this.DF){if(AF<0)AF=0;if(AF>1)AF=1;}if(AF!==
this.DF){this.DF=AF;this.Kv(AF);}return DA;},LC:function(E){if(this.LM===E)return;
this.LM=E;if(!this.A8||!this.GH)return;if(E)this.I6=-1;else this.I6=1;this.Bv=(this.
timer.Iw()*2)-this.Bv;},M8:function(E){if(E<0)E=0;if(E>1)E=1;this.KY=E;},Hz:function(
E){if(E<1)E=1;if(E>10)E=10;this.MS=E;this.CB=null;},HA:function(E){if(E<1)E=1;if(
E>10)E=10;this.IL=E;},M6:function(E){if(E<0)E=0;if(E>10)E=10;this.Iq=E;},M9:function(
E){if(E<1)E=1;if(E>100)E=100;this.Ex=E;},LE:function(E){if(this.LV===E)return;this.
LV=E;if(this.Gs===26){this.Eq=E;this.H0=(this.Dd===this.Eq)&&!!this.Dd;this.Kz=!
this.H0&&(this.Dd!==this.Eq);}},LD:function(E){if(this.LU===E)return;this.LU=E;if(
this.Gs===26){this.Dd=E;this.H0=(this.Dd===this.Eq)&&!!this.Dd;this.Kz=!this.H0&&(
this.Dd!==this.Eq);}},IG:function(E){if(this.Gs===E)return;this.Gs=E;this.CB=null;
switch(E){case 24:{this.Dd=-1.1;this.Eq=1.1;}break;case 22:{this.Dd=-1;this.Eq=-
2;}break;case 23:{this.Dd=2;this.Eq=1;}break;case 25:{this.Dd=1.1;this.Eq=-1.1;}
break;case 0:{this.Dd=0;this.Eq=0;}break;default:{this.Dd=this.LU;this.Eq=this.LV;
}}this.H0=(this.Dd===this.Eq)&&!!this.Dd;this.Kz=!this.H0&&(this.Dd!==this.Eq);}
,JY:function(E){if(E<0)E=0;this.Ej=E;},GT:function(E){if(E<15)E=15;this.Gc=E;this.
Jb=1/E;},Na:function(E){if(E<0)E=0;this.Gg=E;},L:function(E){if(this.A8===E)return;
this.A8=E;if(!E&&!!this.timer){B.z9([this,this.Hr],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.H6);B.zV([this,this.Hr],this.timer,0);this.
GH=0;B.pe([this,this.Hr],this);}},Jw:function(FR){},_Init:function(aArg){this.__proto__=
C.A7;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.CB)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IE)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.FE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};C.JI={CE:null,Gt:0,AU:255,AT:0,Jw:function(FR){var
FN;this.Gt=this.AT+(Math.round((this.AU-this.AT)*FR)|0);if(!!this.CE)(FN=this.CE
,FN[2].call(FN[0],this.Gt));},_Init:function(aArg){C.A7._Init.call(this,aArg);this.
__proto__=C.JI;},_Mark:function(D){var A;C.A7._Mark.call(this,D);if((A=this.CE)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};C.LI={
Gt:B.wf,AU:Bg,AT:B.wf,Jw:function(FR){var B5=this.AT[0];var BD=this.AT[1];B5=B5+(
Math.round((this.AU[0]-B5)*FR)|0);BD=BD+(Math.round((this.AU[1]-BD)*FR)|0);this.
Gt=[B5,BD];},_Init:function(aArg){C.A7._Init.call(this,aArg);this.__proto__=C.LI;
},_className:"Effects::PointEffect"};C.Bl={CE:null,Gt:0,AU:0xFFFFFFFF,AT:0,Jw:function(
FR){var FN;var Ho=this.AT&0xFF;var Hg=(this.AT>>8)&0xFF;var He=(this.AT>>16)&0xFF;
var Hc=(this.AT>>24)&0xFF;Ho=Ho+((((this.AU&0xFF)-Ho)*FR)|0);Hg=Hg+(((((this.AU>>
8)&0xFF)-Hg)*FR)|0);He=He+(((((this.AU>>16)&0xFF)-He)*FR)|0);Hc=Hc+(((((this.AU>>
24)&0xFF)-Hc)*FR)|0);if(Ho<0)Ho=0;if(Ho>255)Ho=255;if(Hg<0)Hg=0;if(Hg>255)Hg=255;
if(He<0)He=0;if(He>255)He=255;if(Hc<0)Hc=0;if(Hc>255)Hc=255;this.Gt=(Ho&0xFF)|((
Hg&0xFF)<<8)|((He&0xFF)<<16)|((Hc&0xFF)<<24);if(!!this.CE)(FN=this.CE,FN[2].call(
FN[0],this.Gt));},_Init:function(aArg){C.A7._Init.call(this,aArg);this.__proto__=
C.Bl;},_Mark:function(D){var A;C.A7._Mark.call(this,D);if((A=this.CE)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::ColorEffect"};C.D8={Eu:null
,Ab:null,X:null,G:null,K:null,Kn:null,MF:null,H9:null,A2:true,A8:true,G8:true,H1:
false,H2:true,Gn:true,Fh:true,D6:function(){if(!!this.Eu)this.Eu.D6();},JJ:function(
){return true;},JM:function(){},HB:function(){this.D6();},_Init:function(aArg){this.
__proto__=C.D8;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Eu)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.X)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Kn)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.MF)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.H9)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=
D);},H:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Ie={Nd:B.wf,
Er:false,JJ:function(){return this.Er;},JM:function(){if(!this.A2&&!!this.K.G)this.
K.Af(false);if((!this.A2&&this.Fh)&&!!this.K.G)this.K.G.IO(this.K);if(!this.A8)this.
K.L(false);},HB:function(){if(this.A8)this.K.L(true);if((this.A2||this.H1)&&!this.
K.G){this.K.Af(false);this.G.S(this.K,0);}if(this.A2&&this.Gn)this.K.G.LL(this.K
);if(this.A2&&this.H2)this.K.G.Ek(this.K);if(this.A2&&!this.G8)this.K.J(B.abJ(this.
K.U,this.Nd));if(this.A2){this.K.C5(255);this.K.Af(true);}if(!this.A2&&(this.G.C1===
this.K))this.G.Ek(null);this.Er=true;this.D6();},_Init:function(aArg){C.D8._Init.
call(this,aArg);this.__proto__=C.Ie;},_className:"Effects::VisibilityFader"};C.LG={
A7:null,Er:false,JJ:function(){return this.Er;},JM:function(){if(this.A2)this.K.
C5(this.A7.AU);if(!this.A2&&!this.K.BR)this.K.Af(false);if((!this.A2&&this.Fh)&&
!!this.K.G)this.K.G.IO(this.K);if(!this.A8)this.K.L(false);},HB:function(){var A;
if(this.G8){if(this.K.E2()&&!!this.K.G)this.A7.AT=this.K.BR;else this.A7.AT=0;}var
My=((!this.K.G||!this.K.BR)||!this.K.E2())||(((A=B.lb(this.K.U,[0,0,(A=this.G.U)[
2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var Mz=((!this.A2&&((!this.K.G||!this.
K.E2())||this.Fh))||!this.A7.AU)||(((A=B.lb(this.K.U,[0,0,(A=this.G.U)[2]-A[0],A[
3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(My&&Mz){this.A7.AT=0;this.A7.AU=0;}if(this.
A8)this.K.L(true);if((this.A2||this.H1)&&!this.K.G){this.K.Af(false);this.G.S(this.
K,0);}if(this.A2&&this.Gn)this.K.G.LL(this.K);if(this.A2&&this.H2)this.K.G.Ek(this.
K);if(!this.A2&&(this.G.C1===this.K))this.G.Ek(null);if(this.A2&&!this.K.E2()){this.
K.C5(this.A7.AT);this.K.Af(true);}if(!this.A2&&((!this.K.G||!this.K.E2())||!this.
K.BR)){this.Er=true;this.D6();return;}if(!this.A2&&(this.A7.AT===this.A7.AU))this.
K.C5(this.A7.AT);if(this.K.BR===this.A7.AU){this.Er=true;this.D6();return;}if(this.
A7.AT===this.A7.AU){this.Er=true;this.D6();return;}if(!this.A7.Ej)this.A7.JY(1);
this.A7.CE=[A=this.K,A.M5,A.Nu];this.A7.LC(false);this.A7.IE=[this,this.Ko];this.
A7.FE=null;this.A7.L(true);},Ko:function(T){this.Er=true;this.D6();},_Init:function(
aArg){C.D8._Init.call(this,aArg);C.JI._Init.call(this.A7={H:this},0);this.__proto__=
C.LG;},_Done:function(){this.__proto__=C.D8;this.A7._Done();C.D8._Done.call(this
);},_ReInit:function(){C.D8._ReInit.call(this);this.A7._ReInit();},_Mark:function(
D){var A;C.D8._Mark.call(this,D);if((A=this.A7)._cycle!=D)A._Mark(A._cycle=D);},
_className:"Effects::OpacityFader"};C.GW={A5:null,AI:null,Er:false,JJ:function(){
return this.Er;},JM:function(){if(this.A2){this.K.C5(this.A5.AU);this.K.J(B.abJ(
this.K.U,this.AI.AU));}if(!this.A2&&!this.K.BR)this.K.Af(false);if((!this.A2&&this.
Fh)&&!!this.K.G)this.K.G.IO(this.K);if(!this.A8)this.K.L(false);},HB:function(){
var A;if(this.G8){if(this.K.E2()&&!!this.K.G)this.A5.AT=this.K.BR;else this.A5.AT=
0;this.AI.AT=this.K.U.slice(0,2);}var My=((!this.K.G||!this.K.BR)||!this.K.E2())||(((
A=B.lb(this.K.U,[0,0,(A=this.G.U)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
var Mz=((!this.A2&&((!this.K.G||!this.K.E2())||this.Fh))||!this.A5.AU)||(((A=B.lb(
B.abh([0,0,(A=this.K.U)[2]-A[0],A[3]-A[1]],this.AI.AU),[0,0,(A=this.G.U)[2]-A[0]
,A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(My&&Mz){this.A5.AT=0;this.A5.AU=0;this.
AI.AT=this.AI.AU;}if(this.A8)this.K.L(true);if((this.A2||this.H1)&&!this.K.G){this.
K.Af(false);this.G.S(this.K,0);}if(this.A2&&this.Gn)this.K.G.LL(this.K);if(this.
A2&&this.H2)this.K.G.Ek(this.K);if(!this.A2&&(this.G.C1===this.K))this.G.Ek(null
);if(this.A2&&!this.K.E2()){this.K.J(B.abJ(this.K.U,this.AI.AT));this.K.C5(this.
A5.AT);this.K.Af(true);}if(!this.A2&&((!this.K.G||!this.K.E2())||!this.K.BR)){this.
Er=true;this.D6();return;}if(!this.A2&&B.aaX(this.AI.AT,this.AI.AU))this.K.J(B.abJ(
this.K.U,this.AI.AT));if(!this.A2&&(this.A5.AT===this.A5.AU))this.K.C5(this.A5.AT
);if((this.K.BR===this.A5.AU)&&B.aaX(this.K.U.slice(0,2),this.AI.AU)){this.Er=true;
this.D6();return;}if((this.A5.AT===this.A5.AU)&&B.aaX(this.AI.AT,this.AI.AU)){this.
Er=true;this.D6();return;}if(!this.A5.Ej)this.A5.JY(1);if(!this.AI.Ej)this.AI.JY(
1);this.AI.LC(false);this.AI.IE=[this,this.Ko];this.AI.FE=[this,this.SW];this.A5.
CE=[A=this.K,A.M5,A.Nu];this.A5.LC(false);this.A5.IE=[this,this.Ko];this.A5.FE=null;
this.AI.L(!B.aaX(this.AI.AT,this.AI.AU));this.A5.L(this.A5.AT!==this.A5.AU);},Ko:
function(T){this.Er=!this.A5.A8&&!this.AI.A8;this.D6();},SW:function(T){this.K.J(
B.abJ(this.K.U,this.AI.Gt));},_Init:function(aArg){C.D8._Init.call(this,aArg);C.
JI._Init.call(this.A5={H:this},0);C.LI._Init.call(this.AI={H:this},0);this.__proto__=
C.GW;},_Done:function(){this.__proto__=C.D8;this.A5._Done();this.AI._Done();C.D8.
_Done.call(this);},_ReInit:function(){C.D8._ReInit.call(this);this.A5._ReInit();
this.AI._ReInit();},_Mark:function(D){var A;C.D8._Mark.call(this,D);if((A=this.A5
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AI)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Effects::PositionFader"};C.E6={Fz:function(){return null;},Fy:function(){return null;
},GL:function(){return this.Fz();},GK:function(){return this.Fy();},_Init:function(
aArg){this.__proto__=C.E6;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(
A._cycle=D);},H:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.LN={Fz:function(){var M=B._NewObject(C.Ie,0);M.A2=true;M.A8=true;M.H2=false;M.
Gn=true;M.G8=false;M.H9=[this,this.Jj];return M;},Fy:function(){var M=B._NewObject(
C.Ie,0);M.A2=false;M.A8=false;M.Fh=true;return M;},GL:function(){var M=C.E6.GL.call(
this);M.Gn=false;M.A8=true;return M;},GK:function(){var M=B._NewObject(C.Ie,0);M.
A2=false;M.A8=true;M.H1=true;M.Fh=false;return M;},Jj:function(T){var A;var M=(C.
Ie.isPrototypeOf(T)?T:null);var Am=[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]];var AY=[(A=
M.K.U)[2]-A[0],A[3]-A[1]];var Ad=Am.slice(0,2);Ad=[(Am[0]+(((Am[2]-Am[0])/2)|0))-((
AY[0]/2)|0),Ad[1]];Ad=[Ad[0],(Am[1]+(((Am[3]-Am[1])/2)|0))-((AY[1]/2)|0)];M.Nd=Ad;
},_Init:function(aArg){C.E6._Init.call(this,aArg);this.__proto__=C.LN;},_className:
"Effects::ShowHideTransition"};C.K0={Fz:function(){var M=B._NewObject(C.GW,0);M.
A2=true;M.A8=true;M.H2=false;M.Gn=true;M.G8=true;M.H9=[this,this.Jj];M.A5.GT(500
);M.A5.AT=0;M.A5.AU=255;M.AI.GT(500);M.AI.IG(23);return M;},Fy:function(){var M=
B._NewObject(C.LG,0);M.A2=false;M.A8=false;M.Fh=true;M.G8=true;M.A7.AT=255;M.A7.
AU=0;M.A7.GT(500);return M;},GL:function(){var M=C.E6.GL.call(this);M.Gn=false;M.
A8=true;return M;},GK:function(){var M=C.E6.GK.call(this);M.H1=true;M.Fh=false;M.
A8=true;return M;},Jj:function(T){var A;var M=(C.GW.isPrototypeOf(T)?T:null);var
Am=[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]];var AY=[(A=M.K.U)[2]-A[0],A[3]-A[1]];var Ad=
Am.slice(0,2);Ad=[(Am[0]+(((Am[2]-Am[0])/2)|0))-((AY[0]/2)|0),Ad[1]];Ad=[Ad[0],(
Am[1]+(((Am[3]-Am[1])/2)|0))-((AY[1]/2)|0)];M.AI.AU=Ad;if(((!M.K.G||!M.K.E2())||
!M.K.BR)||(((A=B.lb(M.K.U,[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=
A[3])))M.K.J(B.abJ(M.K.U,Ad));},_Init:function(aArg){C.E6._Init.call(this,aArg);
this.__proto__=C.K0;},_className:"Effects::FadeInOutTransition"};C.J0={It:0,Fz:function(
){var M=B._NewObject(C.GW,0);M.A2=true;M.A8=true;M.H2=false;M.Gn=true;M.G8=true;
M.H9=[this,this.Jj];M.A5.GT(500);M.A5.Na(0);M.A5.AT=0;M.A5.AU=255;M.AI.GT(500);M.
AI.IG(23);M.AI.LD(0);M.AI.LE(0);M.AI.M9(3);M.AI.M6(0.5);M.AI.HA(3);M.AI.Hz(3);M.
AI.M8(0.5);return M;},Fy:function(){var M=B._NewObject(C.GW,0);M.A2=false;M.A8=false;
M.Fh=true;M.G8=true;M.H9=[this,this.S0];M.A5.AT=255;M.A5.AU=0;M.A5.GT(500);M.A5.
Na(0);M.AI.GT(500);M.AI.IG(23);M.AI.LD(0);M.AI.LE(0);M.AI.M9(3);M.AI.M6(0.5);M.AI.
HA(3);M.AI.Hz(3);M.AI.M8(0.5);return M;},GL:function(){var M=C.E6.GL.call(this);
M.Gn=false;M.A8=true;return M;},GK:function(){var M=C.E6.GK.call(this);M.H1=true;
M.Fh=false;M.A8=true;return M;},Jj:function(T){var A;var M=(C.GW.isPrototypeOf(T
)?T:null);var Am=[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]];var AY=[(A=M.K.U)[2]-A[0],A[3
]-A[1]];var Ad=Am.slice(0,2);Ad=[(Am[0]+(((Am[2]-Am[0])/2)|0))-((AY[0]/2)|0),Ad[
1]];Ad=[Ad[0],(Am[1]+(((Am[3]-Am[1])/2)|0))-((AY[1]/2)|0)];M.AI.AU=Ad;if(((!M.K.
G||!M.K.E2())||!M.K.BR)||(((A=B.lb(M.K.U,[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]]))[0]>=
A[2])||(A[1]>=A[3]))){var ER=[(A=M.G.U)[2]-A[0],A[3]-A[1]];switch(this.It){case 5:
Ad=[Ad[0],-AY[1]];break;case 3:{Ad=[Ad[0],-AY[1]];Ad=[ER[0],Ad[1]];}break;case 8:
Ad=[-AY[0],-AY[1]];break;case 2:Ad=[ER[0],Ad[1]];break;case 7:Ad=[-AY[0],Ad[1]];
break;case 4:Ad=[Ad[0],ER[1]];break;case 1:{Ad=[Ad[0],ER[1]];Ad=[ER[0],Ad[1]];}break;
case 6:{Ad=[Ad[0],ER[1]];Ad=[-AY[0],Ad[1]];}break;default:;}M.K.J(B.abJ(M.K.U,Ad
));}},S0:function(T){var A;var M=(C.GW.isPrototypeOf(T)?T:null);var Ad=M.K.U.slice(
0,2);var AY=[(A=M.K.U)[2]-A[0],A[3]-A[1]];var ER=[(A=M.G.U)[2]-A[0],A[3]-A[1]];switch(
this.It){case 5:Ad=[Ad[0],ER[1]];break;case 3:{Ad=[Ad[0],ER[1]];Ad=[-AY[0],Ad[1]
];}break;case 8:{Ad=[Ad[0],ER[1]];Ad=[ER[0],Ad[1]];}break;case 2:Ad=[-AY[0],Ad[1
]];break;case 7:Ad=[ER[0],Ad[1]];break;case 4:Ad=[Ad[0],-AY[1]];break;case 1:Ad=[-
AY[0],-AY[1]];break;case 6:{Ad=[Ad[0],-AY[1]];Ad=[ER[0],Ad[1]];}break;default:;}
M.AI.AU=Ad;},_Init:function(aArg){C.E6._Init.call(this,aArg);this.__proto__=C.J0;
},_className:"Effects::SlideTransition"};C.Gs={T4:0,T$:1,Ub:2,Ua:3,TN:4,TP:5,TO:
6,Us:7,Uu:8,Ut:9,TA:10,TC:11,TB:12,To:13,Tq:14,Tp:15,TJ:16,TL:17,TK:18,Tx:19,Tz:
20,Ty:21,TI:22,TQ:23,TH:24,TR:25,TD:26};C.KX={Trigger:function(){B.Core.Timer.Trigger.
call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg
);this.__proto__=C.KX;},_className:"Effects::EffectTimerClass"};C.H6={_Init:function(
){C.KX._Init.call(this,0);this.Bt(15);this.L(true);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.J2={Dg:B.abi(12,0,null),Hd:B.abi(12,0,null
),_Init:function(aArg){(this.Dg=[]).__proto__=C.J2.Dg;(this.Hd=[]).__proto__=C.J2.
Hd;this.__proto__=C.J2;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=
D);},H:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.JB={AV:
null,AR:null,M4:function(I2){var M=this.AR;while(!!M){M.JM();M.K.F=M.K.F&~0x40000;
M=M.X;}M=this.AR;while(!!M){B.pe(M.MF,M);M=M.X;}},M3:function(I2){var M=this.AR;
while(!!M){B.pe(M.Kn,M);M=M.X;}this.AR=null;this.AV=null;},HB:function(I2){var A;
if(!this.AR)this.D6();var M=this.AR;while(!!M){M.K.F=(M.K.F|0x40000)&~0x20000;M.
K.HT=null;M=M.X;}M=this.AR;while(!!M){(A=M.H9)?A[1].call(A[0],M):null;M.HB();M=M.
X;}},D6:function(){var M=this.AR;while(!!M&&M.JJ())M=M.X;if(!M)B.Core.IS.D6.call(
this);},OW:function(A6){if(!A6)return;if(this.La())throw new Error(AW);if(A6.Eu!==
this)throw new Error(D_);if(!!A6.X)A6.X.Ab=A6.Ab;else this.AV=A6.Ab;if(!!A6.Ab)A6.
Ab.X=A6.X;else this.AR=A6.X;A6.Eu=null;A6.X=null;A6.Ab=null;if(!!A6.K)A6.K.HT=null;
B.pe(A6.Kn,A6);if(!this.AR)this.MT();},MR:function(A6){if(!A6)return;if(this.La(
))throw new Error(En);if(!!A6.Eu)throw new Error(FL);A6.Ab=this.AV;A6.X=null;if(
!!this.AV)this.AV.X=A6;else this.AR=A6;this.AV=A6;A6.Eu=this;},_Init:function(aArg
){B.Core.IS._Init.call(this,aArg);this.__proto__=C.JB;},_Mark:function(D){var A;
B.Core.IS._Mark.call(this,D);if((A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.AR)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};
C.Ic={_Init:function(){C.LN._Init.call(this,0);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Hv={_Init:function(){C.K0._Init.call(this
,0);},_ReInit:function(){},_variants:function(){return this;},_this:null};C.HC={
_Init:function(){C.J0._Init.call(this,0);this.It=2;},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.FI={_Init:function(){C.J0._Init.call(this
,0);this.It=5;},_ReInit:function(){},_variants:function(){return this;},_this:null
};
C._Init=function(){C.JI.__proto__=C.A7;C.LI.__proto__=C.A7;C.Bl.__proto__=C.A7;C.
Ie.__proto__=C.D8;C.LG.__proto__=C.D8;C.GW.__proto__=C.D8;C.LN.__proto__=C.E6;C.
K0.__proto__=C.E6;C.J0.__proto__=C.E6;C.KX.__proto__=B.Core.Timer;C.JB.__proto__=
B.Core.IS;};C._ReInit=function(){var A;if((A=C.H6._this))A._ReInit(),C.H6._ReInit.
call(A);if((A=C.Ic._this))A._ReInit(),C.Ic._ReInit.call(A);if((A=C.Hv._this))A._ReInit(
),C.Hv._ReInit.call(A);if((A=C.HC._this))A._ReInit(),C.HC._ReInit.call(A);if((A=
C.FI._this))A._ReInit(),C.FI._ReInit.call(A);};C.D$=function(D){var A;if((A=C.H6.
_this)&&(A._cycle!=D))A._Done(C.H6._this=null);if((A=C.Ic._this)&&(A._cycle!=D))
A._Done(C.Ic._this=null);if((A=C.Hv._this)&&(A._cycle!=D))A._Done(C.Hv._this=null
);if((A=C.HC._this)&&(A._cycle!=D))A._Done(C.HC._this=null);if((A=C.FI._this)&&(
A._cycle!=D))A._Done(C.FI._this=null);};return C;})();

/* Embedded Wizard */