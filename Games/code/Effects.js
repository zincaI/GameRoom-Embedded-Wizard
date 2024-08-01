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
var AR=[100,100];var Bz="Trying to remove a fader from a task, which is actually running";
var Em="The fader doesn\'t belong to this task";var Gr="Trying to add a fader to a task, which is actually running";
var FI="The fader belongs already to a task";
C.A6={CB:null,timer:null,IH:null,FC:null,I8:0,GF:0,Ep:0,Db:0,Jd:0.001,DC:0,A9:0,Bw:
0,K6:0.5,MW:3,IO:3,Iv:0.5,Ev:3,LY:0,LX:0,Ej:0,F$:1000,Gd:0,Go:0,A7:false,LQ:false
,HZ:false,KJ:false,Hl:function(T){var A;if(!this.timer)return;if(!this.GF){if(this.
LQ)this.GF=-1;else this.GF=1;this.I8=this.GF;this.Bw=this.timer.A8;this.A9=0;this.
DC=-1;}var Dz;if((this.GF>0)&&(this.I8>0))Dz=this.SU();else if((this.GF<0)&&(this.
I8<0))Dz=this.SX();else if(this.GF>0)Dz=this.SV();else Dz=this.SW();if(Dz){this.
L(false);(A=this.IH)?A[1].call(A[0],this):null;}},KF:function(Q){var A;if(!this.
CB&&(((this.Go===19)||(this.Go===20))||(this.Go===21))){var Kj=this.MW+1;var SA=
Math.sqrt(this.K6);var HX=0.5;var O;this.CB=B._NewObject(C.J_,0);this.CB.De.Set(
0,1);this.CB.G9.Set(0,1);for(O=1;O<Kj;O=O+1){this.CB.De.Set(O,this.CB.De.Get(O-1
)*SA);this.CB.G9.Set(O,this.CB.G9.Get(O-1)*this.K6);HX=HX+this.CB.De.Get(O);}var
SC=1/HX;this.CB.De.Set(0,0.5);HX=0;for(O=0;O<Kj;O=O+1){this.CB.De.Set(O,this.CB.
De.Get(O)*SC);HX=HX+this.CB.De.Get(O);}this.CB.De.Set(Kj,this.CB.De.Get(Kj)+(1-HX
));}switch(this.Go){case 1:Q=Math.pow(Q,this.Ev);break;case 2:{Q=1-Q;Q=1-Math.pow(
Q,this.Ev);}break;case 3:{Q=Q*2;if(Q<1)Q=Math.pow(Q,this.Ev)/2;else{Q=2-Q;Q=(2-Math.
pow(Q,this.Ev))*0.5;}}break;case 4:Q=(Math.pow(2.718,this.Ev*Q)-1)/(Math.pow(2.718
,this.Ev)-1);break;case 5:{Q=1-Q;Q=1-((Math.pow(2.718,this.Ev*Q)-1)/(Math.pow(2.718
,this.Ev)-1));}break;case 6:{Q=Q*2;if(Q<1)Q=((Math.pow(2.718,this.Ev*Q)-1)/(Math.
pow(2.718,this.Ev)-1))/2;else{Q=2-Q;Q=(2-((Math.pow(2.718,this.Ev*Q)-1)/(Math.pow(
2.718,this.Ev)-1)))*0.5;}}break;case 7:Q=1-Math.cos((Q*90)*B.k$);break;case 8:Q=
Math.sin((Q*90)*B.k$);break;case 9:{Q=Q*2;if(Q<1){Q=1-Math.cos((Q*90)*B.k$);Q=Q*
0.5;}else{Q=2-Q;Q=1-Math.cos((Q*90)*B.k$);Q=(2-Q)*0.5;}}break;case 10:Q=1-Math.sqrt(
1-(Q*Q));break;case 11:{Q=1-Q;Q=Math.sqrt(1-(Q*Q));}break;case 12:{Q=Q*2;if(Q<1){
Q=1-Math.sqrt(1-(Q*Q));Q=Q*0.5;}else{Q=2-Q;Q=1-Math.sqrt(1-(Q*Q));Q=(2-Q)*0.5;}}
break;case 13:Q=((Q*Q)*Q)-((Q*this.Iv)*Math.sin((Q*180)*B.k$));break;case 14:{Q=
1-Q;Q=((Q*Q)*Q)-((Q*this.Iv)*Math.sin((Q*180)*B.k$));Q=1-Q;}break;case 15:{Q=Q*2;
if(Q<1){Q=((Q*Q)*Q)-((Q*this.Iv)*Math.sin((Q*180)*B.k$));Q=Q*0.5;}else{Q=2-Q;Q=((
Q*Q)*Q)-((Q*this.Iv)*Math.sin((Q*180)*B.k$));Q=(2-Q)*0.5;}}break;case 16:Q=((Q*Q
)*Q)*Math.sin(((Q*90)*(1+(4*this.IO)))*B.k$);break;case 17:{Q=1-Q;Q=1-(((Q*Q)*Q)
*Math.sin(((Q*90)*(1+(4*this.IO)))*B.k$));}break;case 18:{Q=Q*2;if(Q<1){Q=((Q*Q)
*Q)*Math.sin(((Q*90)*(1+(4*this.IO)))*B.k$);Q=Q*0.5;}else{Q=2-Q;Q=((Q*Q)*Q)*Math.
sin(((Q*90)*(1+(4*this.IO)))*B.k$);Q=(2-Q)*0.5;}}break;case 19:{var Fn=this.CB;var
O=0;var Fv=0;var DD=Fn.De.Get(0);var Bj=1-Q;while(Bj>DD){O=O+1;Fv=DD;DD=DD+Fn.De.
Get(O);}Q=(Bj-Fv)/(DD-Fv);if(!O)Q=1-(Q*Q);else{Q=(2*Q)-1;Q=Fn.G9.Get(O)*(1-(Q*Q)
);}}break;case 20:{var Fn=this.CB;var O=0;var Fv=0;var DD=Fn.De.Get(0);while(Q>DD
){O=O+1;Fv=DD;DD=DD+Fn.De.Get(O);}Q=(Q-Fv)/(DD-Fv);if(!O)Q=Q*Q;else{Q=(2*Q)-1;Q=
1-(Fn.G9.Get(O)*(1-(Q*Q)));}}break;case 21:{var Fn=this.CB;var O=0;var Fv=0;var DD=
Fn.De.Get(0);var Bu=Q*2;var Bj=Bu-1;if(Bu<1)Bj=-Bj;while(Bj>DD){O=O+1;Fv=DD;DD=DD+
Fn.De.Get(O);}Bj=(Bj-Fv)/(DD-Fv);if(!O)Bj=Bj*Bj;else{Bj=(2*Bj)-1;Bj=1-(Fn.G9.Get(
O)*(1-(Bj*Bj)));}if(Bu<1)Q=0.5*(1-Bj);else Q=0.5*(1+Bj);}break;default:if(this.HZ
){var Bu=Q;var Jh=1-Bu;Q=((Jh*Bu)*(this.Db+1))+(Bu*Bu);}else if(this.KJ){var Bu=
Q;var Jh=1-Bu;var NG=Bu*Bu;var SE=Jh*Jh;Q=(((SE*Bu)*(this.Db+1))+((Jh*NG)*(this.
Ep+2)))+(NG*Bu);}}this.Jy(Q);(A=this.FC)?A[1].call(A[0],this):null;},SX:function(
){var Au=(this.timer.A8-this.Bw)|0;if(Au<0)Au=-Au;var Ef=this.Gd;var EP=this.Gd+
this.F$;var BQ=this.F$;var Dz=false;var AE=this.DC;if(!this.A9&&(Au>=EP)){this.A9=
1;Au=Au-EP;this.Bw=this.Bw+EP;}if((this.A9>0)&&(Au>=BQ)){var B6=(Au/BQ)|0;this.A9=
this.A9+B6;Au=Au-(B6*BQ);this.Bw=this.Bw+(B6*BQ);}if((this.A9>2)&&!this.Ej)this.
A9=1;if(this.A9>0)Ef=0;if((this.A9>=this.Ej)&&(this.Ej>0)){Dz=true;AE=0;}else if(
Au>=Ef)AE=1-((Au-Ef)*this.Jd);else if(AE>=0)AE=0;if(AE!==this.DC){if(AE<0)AE=0;if(
AE>1)AE=1;}if(AE!==this.DC){this.DC=AE;this.KF(AE);}return Dz;},SW:function(){var
Au=(this.Bw-this.timer.A8)|0;var Ef=this.Gd;var EP=this.Gd+this.F$;var BQ=this.F$;
var Dz=false;var AE=this.DC;if((this.A9>1)&&(Au<0)){var B6=(((-Au+BQ)-1)/BQ)|0;if((
this.A9-B6)<=0)B6=this.A9-1;this.A9=this.A9-B6;Au=Au+(B6*BQ);this.Bw=this.Bw+(B6
*BQ);}if(((this.A9===1)&&(Au<0))&&(this.Ej>0)){this.A9=0;Au=Au+EP;this.Bw=this.Bw+
EP;}if(((this.A9===1)&&(Au<0))&&!this.Ej){var B6=(((-Au+BQ)-1)/BQ)|0;Au=Au+(B6*BQ
);this.Bw=this.Bw+(B6*BQ);}if(this.A9>0)Ef=0;if(Au<0){Dz=true;AE=1;}else if(Au>=
Ef)AE=1-((Au-Ef)*this.Jd);else if(AE>=0)AE=1;if(AE!==this.DC){if(AE<0)AE=0;if(AE>
1)AE=1;}if(AE!==this.DC){this.DC=AE;this.KF(AE);}return Dz;},SV:function(){var Au=(
this.Bw-this.timer.A8)|0;var Ef=this.Gd;var EP=this.Gd+this.F$;var BQ=this.F$;var
Dz=false;var AE=this.DC;if((this.A9>1)&&(Au<0)){var B6=(((-Au+BQ)-1)/BQ)|0;if((this.
A9-B6)<=0)B6=this.A9-1;this.A9=this.A9-B6;Au=Au+(B6*BQ);this.Bw=this.Bw+(B6*BQ);
}if(((this.A9===1)&&(Au<0))&&(this.Ej>0)){this.A9=0;Au=Au+EP;this.Bw=this.Bw+EP;
}if(((this.A9===1)&&(Au<0))&&!this.Ej){var B6=(((-Au+BQ)-1)/BQ)|0;Au=Au+(B6*BQ);
this.Bw=this.Bw+(B6*BQ);}if(this.A9>0)Ef=0;if(Au<0){Dz=true;AE=0;}else if(Au>=Ef
)AE=(Au-Ef)*this.Jd;else if(AE>=0)AE=0;if(AE!==this.DC){if(AE<0)AE=0;if(AE>1)AE=
1;}if(AE!==this.DC){this.DC=AE;this.KF(AE);}return Dz;},SU:function(){var Au=(this.
timer.A8-this.Bw)|0;if(Au<0)Au=-Au;var Ef=this.Gd;var EP=this.Gd+this.F$;var BQ=
this.F$;var Dz=false;var AE=this.DC;if(!this.A9&&(Au>=EP)){this.A9=1;Au=Au-EP;this.
Bw=this.Bw+EP;}if((this.A9>0)&&(Au>=BQ)){var B6=(Au/BQ)|0;this.A9=this.A9+B6;Au=
Au-(B6*BQ);this.Bw=this.Bw+(B6*BQ);}if((this.A9>2)&&!this.Ej)this.A9=1;if(this.A9>
0)Ef=0;if((this.A9>=this.Ej)&&(this.Ej>0)){Dz=true;AE=1;}else if(Au>=Ef)AE=(Au-Ef
)*this.Jd;else if(AE>=0)AE=1;if(AE!==this.DC){if(AE<0)AE=0;if(AE>1)AE=1;}if(AE!==
this.DC){this.DC=AE;this.KF(AE);}return Dz;},LE:function(E){if(this.LQ===E)return;
this.LQ=E;if(!this.A7||!this.GF)return;if(E)this.I8=-1;else this.I8=1;this.Bw=(this.
timer.IA()*2)-this.Bw;},Na:function(E){if(E<0)E=0;if(E>1)E=1;this.K6=E;},Hw:function(
E){if(E<1)E=1;if(E>10)E=10;this.MW=E;this.CB=null;},Hx:function(E){if(E<1)E=1;if(
E>10)E=10;this.IO=E;},M_:function(E){if(E<0)E=0;if(E>10)E=10;this.Iv=E;},Nb:function(
E){if(E<1)E=1;if(E>100)E=100;this.Ev=E;},LG:function(E){if(this.LY===E)return;this.
LY=E;if(this.Go===26){this.Ep=E;this.HZ=(this.Db===this.Ep)&&!!this.Db;this.KJ=!
this.HZ&&(this.Db!==this.Ep);}},LF:function(E){if(this.LX===E)return;this.LX=E;if(
this.Go===26){this.Db=E;this.HZ=(this.Db===this.Ep)&&!!this.Db;this.KJ=!this.HZ&&(
this.Db!==this.Ep);}},IJ:function(E){if(this.Go===E)return;this.Go=E;this.CB=null;
switch(E){case 24:{this.Db=-1.1;this.Ep=1.1;}break;case 22:{this.Db=-1;this.Ep=-
2;}break;case 23:{this.Db=2;this.Ep=1;}break;case 25:{this.Db=1.1;this.Ep=-1.1;}
break;case 0:{this.Db=0;this.Ep=0;}break;default:{this.Db=this.LX;this.Ep=this.LY;
}}this.HZ=(this.Db===this.Ep)&&!!this.Db;this.KJ=!this.HZ&&(this.Db!==this.Ep);}
,J5:function(E){if(E<0)E=0;this.Ej=E;},GO:function(E){if(E<15)E=15;this.F$=E;this.
Jd=1/E;},Ne:function(E){if(E<0)E=0;this.Gd=E;},L:function(E){if(this.A7===E)return;
this.A7=E;if(!E&&!!this.timer){B.z9([this,this.Hl],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.H7);B.zV([this,this.Hl],this.timer,0);this.
GF=0;B.pe([this,this.Hl],this);}},Jy:function(FO){},_Init:function(aArg){this.__proto__=
C.A6;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.CB)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.IH)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.FC)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};C.JK={CE:null,Gp:0,AV:255,AU:0,Jy:function(FO){var
FK;this.Gp=this.AU+(Math.round((this.AV-this.AU)*FO)|0);if(!!this.CE)(FK=this.CE
,FK[2].call(FK[0],this.Gp));},_Init:function(aArg){C.A6._Init.call(this,aArg);this.
__proto__=C.JK;},_Mark:function(D){var A;C.A6._Mark.call(this,D);if((A=this.CE)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};C.LM={
Gp:B.wf,AV:AR,AU:B.wf,Jy:function(FO){var Cd=this.AU[0];var BG=this.AU[1];Cd=Cd+(
Math.round((this.AV[0]-Cd)*FO)|0);BG=BG+(Math.round((this.AV[1]-BG)*FO)|0);this.
Gp=[Cd,BG];},_Init:function(aArg){C.A6._Init.call(this,aArg);this.__proto__=C.LM;
},_className:"Effects::PointEffect"};C.Bl={CE:null,Gp:0,AV:0xFFFFFFFF,AU:0,Jy:function(
FO){var FK;var Hi=this.AU&0xFF;var Ha=(this.AU>>8)&0xFF;var G_=(this.AU>>16)&0xFF;
var G8=(this.AU>>24)&0xFF;Hi=Hi+((((this.AV&0xFF)-Hi)*FO)|0);Ha=Ha+(((((this.AV>>
8)&0xFF)-Ha)*FO)|0);G_=G_+(((((this.AV>>16)&0xFF)-G_)*FO)|0);G8=G8+(((((this.AV>>
24)&0xFF)-G8)*FO)|0);if(Hi<0)Hi=0;if(Hi>255)Hi=255;if(Ha<0)Ha=0;if(Ha>255)Ha=255;
if(G_<0)G_=0;if(G_>255)G_=255;if(G8<0)G8=0;if(G8>255)G8=255;this.Gp=(Hi&0xFF)|((
Ha&0xFF)<<8)|((G_&0xFF)<<16)|((G8&0xFF)<<24);if(!!this.CE)(FK=this.CE,FK[2].call(
FK[0],this.Gp));},_Init:function(aArg){C.A6._Init.call(this,aArg);this.__proto__=
C.Bl;},_Mark:function(D){var A;C.A6._Mark.call(this,D);if((A=this.CE)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::ColorEffect"};C.D9={Et:null
,Z:null,W:null,G:null,K:null,Kx:null,MH:null,H$:null,A0:true,A7:true,G1:true,H0:
false,H1:true,Gj:true,Ff:true,D7:function(){if(!!this.Et)this.Et.D7();},JL:function(
){return true;},JQ:function(){},Hy:function(){this.D7();},_Init:function(aArg){this.
__proto__=C.D9;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.Et)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.W)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.K)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.Kx)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.MH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.H$)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.Ij={Ng:B.wf,
Eq:false,JL:function(){return this.Eq;},JQ:function(){if(!this.A0&&!!this.K.G)this.
K.Af(false);if((!this.A0&&this.Ff)&&!!this.K.G)this.K.G.IR(this.K);if(!this.A7)this.
K.L(false);},Hy:function(){if(this.A7)this.K.L(true);if((this.A0||this.H0)&&!this.
K.G){this.K.Af(false);this.G.S(this.K,0);}if(this.A0&&this.Gj)this.K.G.LP(this.K
);if(this.A0&&this.H1)this.K.G.Ek(this.K);if(this.A0&&!this.G1)this.K.J(B.abJ(this.
K.U,this.Ng));if(this.A0){this.K.CX(255);this.K.Af(true);}if(!this.A0&&(this.G.CS===
this.K))this.G.Ek(null);this.Eq=true;this.D7();},_Init:function(aArg){C.D9._Init.
call(this,aArg);this.__proto__=C.Ij;},_className:"Effects::VisibilityFader"};C.LI={
A6:null,Eq:false,JL:function(){return this.Eq;},JQ:function(){if(this.A0)this.K.
CX(this.A6.AV);if(!this.A0&&!this.K.BT)this.K.Af(false);if((!this.A0&&this.Ff)&&
!!this.K.G)this.K.G.IR(this.K);if(!this.A7)this.K.L(false);},Hy:function(){var A;
if(this.G1){if(this.K.E1()&&!!this.K.G)this.A6.AU=this.K.BT;else this.A6.AU=0;}var
MA=((!this.K.G||!this.K.BT)||!this.K.E1())||(((A=B.lb(this.K.U,[0,0,(A=this.G.U)[
2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var MB=((!this.A0&&((!this.K.G||!this.
K.E1())||this.Ff))||!this.A6.AV)||(((A=B.lb(this.K.U,[0,0,(A=this.G.U)[2]-A[0],A[
3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(MA&&MB){this.A6.AU=0;this.A6.AV=0;}if(this.
A7)this.K.L(true);if((this.A0||this.H0)&&!this.K.G){this.K.Af(false);this.G.S(this.
K,0);}if(this.A0&&this.Gj)this.K.G.LP(this.K);if(this.A0&&this.H1)this.K.G.Ek(this.
K);if(!this.A0&&(this.G.CS===this.K))this.G.Ek(null);if(this.A0&&!this.K.E1()){this.
K.CX(this.A6.AU);this.K.Af(true);}if(!this.A0&&((!this.K.G||!this.K.E1())||!this.
K.BT)){this.Eq=true;this.D7();return;}if(!this.A0&&(this.A6.AU===this.A6.AV))this.
K.CX(this.A6.AU);if(this.K.BT===this.A6.AV){this.Eq=true;this.D7();return;}if(this.
A6.AU===this.A6.AV){this.Eq=true;this.D7();return;}if(!this.A6.Ej)this.A6.J5(1);
this.A6.CE=[A=this.K,A.M9,A.Nu];this.A6.LE(false);this.A6.IH=[this,this.Ky];this.
A6.FC=null;this.A6.L(true);},Ky:function(T){this.Eq=true;this.D7();},_Init:function(
aArg){C.D9._Init.call(this,aArg);C.JK._Init.call(this.A6={I:this},0);this.__proto__=
C.LI;},_Done:function(){this.__proto__=C.D9;this.A6._Done();C.D9._Done.call(this
);},_ReInit:function(){C.D9._ReInit.call(this);this.A6._ReInit();},_Mark:function(
D){var A;C.D9._Mark.call(this,D);if((A=this.A6)._cycle!=D)A._Mark(A._cycle=D);},
_className:"Effects::OpacityFader"};C.GR={A4:null,AG:null,Eq:false,JL:function(){
return this.Eq;},JQ:function(){if(this.A0){this.K.CX(this.A4.AV);this.K.J(B.abJ(
this.K.U,this.AG.AV));}if(!this.A0&&!this.K.BT)this.K.Af(false);if((!this.A0&&this.
Ff)&&!!this.K.G)this.K.G.IR(this.K);if(!this.A7)this.K.L(false);},Hy:function(){
var A;if(this.G1){if(this.K.E1()&&!!this.K.G)this.A4.AU=this.K.BT;else this.A4.AU=
0;this.AG.AU=this.K.U.slice(0,2);}var MA=((!this.K.G||!this.K.BT)||!this.K.E1())||(((
A=B.lb(this.K.U,[0,0,(A=this.G.U)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
var MB=((!this.A0&&((!this.K.G||!this.K.E1())||this.Ff))||!this.A4.AV)||(((A=B.lb(
B.abh([0,0,(A=this.K.U)[2]-A[0],A[3]-A[1]],this.AG.AV),[0,0,(A=this.G.U)[2]-A[0]
,A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(MA&&MB){this.A4.AU=0;this.A4.AV=0;this.
AG.AU=this.AG.AV;}if(this.A7)this.K.L(true);if((this.A0||this.H0)&&!this.K.G){this.
K.Af(false);this.G.S(this.K,0);}if(this.A0&&this.Gj)this.K.G.LP(this.K);if(this.
A0&&this.H1)this.K.G.Ek(this.K);if(!this.A0&&(this.G.CS===this.K))this.G.Ek(null
);if(this.A0&&!this.K.E1()){this.K.J(B.abJ(this.K.U,this.AG.AU));this.K.CX(this.
A4.AU);this.K.Af(true);}if(!this.A0&&((!this.K.G||!this.K.E1())||!this.K.BT)){this.
Eq=true;this.D7();return;}if(!this.A0&&B.aaX(this.AG.AU,this.AG.AV))this.K.J(B.abJ(
this.K.U,this.AG.AU));if(!this.A0&&(this.A4.AU===this.A4.AV))this.K.CX(this.A4.AU
);if((this.K.BT===this.A4.AV)&&B.aaX(this.K.U.slice(0,2),this.AG.AV)){this.Eq=true;
this.D7();return;}if((this.A4.AU===this.A4.AV)&&B.aaX(this.AG.AU,this.AG.AV)){this.
Eq=true;this.D7();return;}if(!this.A4.Ej)this.A4.J5(1);if(!this.AG.Ej)this.AG.J5(
1);this.AG.LE(false);this.AG.IH=[this,this.Ky];this.AG.FC=[this,this.SG];this.A4.
CE=[A=this.K,A.M9,A.Nu];this.A4.LE(false);this.A4.IH=[this,this.Ky];this.A4.FC=null;
this.AG.L(!B.aaX(this.AG.AU,this.AG.AV));this.A4.L(this.A4.AU!==this.A4.AV);},Ky:
function(T){this.Eq=!this.A4.A7&&!this.AG.A7;this.D7();},SG:function(T){this.K.J(
B.abJ(this.K.U,this.AG.Gp));},_Init:function(aArg){C.D9._Init.call(this,aArg);C.
JK._Init.call(this.A4={I:this},0);C.LM._Init.call(this.AG={I:this},0);this.__proto__=
C.GR;},_Done:function(){this.__proto__=C.D9;this.A4._Done();this.AG._Done();C.D9.
_Done.call(this);},_ReInit:function(){C.D9._ReInit.call(this);this.A4._ReInit();
this.AG._ReInit();},_Mark:function(D){var A;C.D9._Mark.call(this,D);if((A=this.A4
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AG)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Effects::PositionFader"};C.E4={Fx:function(){return null;},Fw:function(){return null;
},GJ:function(){return this.Fx();},GI:function(){return this.Fw();},_Init:function(
aArg){this.__proto__=C.E4;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.I)&&(A._cycle!=D))A._Mark(
A._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.LR={Fx:function(){var M=B._NewObject(C.Ij,0);M.A0=true;M.A7=true;M.H1=false;M.
Gj=true;M.G1=false;M.H$=[this,this.Jl];return M;},Fw:function(){var M=B._NewObject(
C.Ij,0);M.A0=false;M.A7=false;M.Ff=true;return M;},GJ:function(){var M=C.E4.GJ.call(
this);M.Gj=false;M.A7=true;return M;},GI:function(){var M=B._NewObject(C.Ij,0);M.
A0=false;M.A7=true;M.H0=true;M.Ff=false;return M;},Jl:function(T){var A;var M=(C.
Ij.isPrototypeOf(T)?T:null);var Ao=[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]];var AX=[(A=
M.K.U)[2]-A[0],A[3]-A[1]];var Ac=Ao.slice(0,2);Ac=[(Ao[0]+(((Ao[2]-Ao[0])/2)|0))-((
AX[0]/2)|0),Ac[1]];Ac=[Ac[0],(Ao[1]+(((Ao[3]-Ao[1])/2)|0))-((AX[1]/2)|0)];M.Ng=Ac;
},_Init:function(aArg){C.E4._Init.call(this,aArg);this.__proto__=C.LR;},_className:
"Effects::ShowHideTransition"};C.K8={Fx:function(){var M=B._NewObject(C.GR,0);M.
A0=true;M.A7=true;M.H1=false;M.Gj=true;M.G1=true;M.H$=[this,this.Jl];M.A4.GO(500
);M.A4.AU=0;M.A4.AV=255;M.AG.GO(500);M.AG.IJ(23);return M;},Fw:function(){var M=
B._NewObject(C.LI,0);M.A0=false;M.A7=false;M.Ff=true;M.G1=true;M.A6.AU=255;M.A6.
AV=0;M.A6.GO(500);return M;},GJ:function(){var M=C.E4.GJ.call(this);M.Gj=false;M.
A7=true;return M;},GI:function(){var M=C.E4.GI.call(this);M.H0=true;M.Ff=false;M.
A7=true;return M;},Jl:function(T){var A;var M=(C.GR.isPrototypeOf(T)?T:null);var
Ao=[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]];var AX=[(A=M.K.U)[2]-A[0],A[3]-A[1]];var Ac=
Ao.slice(0,2);Ac=[(Ao[0]+(((Ao[2]-Ao[0])/2)|0))-((AX[0]/2)|0),Ac[1]];Ac=[Ac[0],(
Ao[1]+(((Ao[3]-Ao[1])/2)|0))-((AX[1]/2)|0)];M.AG.AV=Ac;if(((!M.K.G||!M.K.E1())||
!M.K.BT)||(((A=B.lb(M.K.U,[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=
A[3])))M.K.J(B.abJ(M.K.U,Ac));},_Init:function(aArg){C.E4._Init.call(this,aArg);
this.__proto__=C.K8;},_className:"Effects::FadeInOutTransition"};C.IV={H5:0,Fx:function(
){var M=B._NewObject(C.GR,0);M.A0=true;M.A7=true;M.H1=false;M.Gj=true;M.G1=true;
M.H$=[this,this.Jl];M.A4.GO(500);M.A4.Ne(0);M.A4.AU=0;M.A4.AV=255;M.AG.GO(500);M.
AG.IJ(23);M.AG.LF(0);M.AG.LG(0);M.AG.Nb(3);M.AG.M_(0.5);M.AG.Hx(3);M.AG.Hw(3);M.
AG.Na(0.5);return M;},Fw:function(){var M=B._NewObject(C.GR,0);M.A0=false;M.A7=false;
M.Ff=true;M.G1=true;M.H$=[this,this.SK];M.A4.AU=255;M.A4.AV=0;M.A4.GO(500);M.A4.
Ne(0);M.AG.GO(500);M.AG.IJ(23);M.AG.LF(0);M.AG.LG(0);M.AG.Nb(3);M.AG.M_(0.5);M.AG.
Hx(3);M.AG.Hw(3);M.AG.Na(0.5);return M;},GJ:function(){var M=C.E4.GJ.call(this);
M.Gj=false;M.A7=true;return M;},GI:function(){var M=C.E4.GI.call(this);M.H0=true;
M.Ff=false;M.A7=true;return M;},Jl:function(T){var A;var M=(C.GR.isPrototypeOf(T
)?T:null);var Ao=[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]];var AX=[(A=M.K.U)[2]-A[0],A[3
]-A[1]];var Ac=Ao.slice(0,2);Ac=[(Ao[0]+(((Ao[2]-Ao[0])/2)|0))-((AX[0]/2)|0),Ac[
1]];Ac=[Ac[0],(Ao[1]+(((Ao[3]-Ao[1])/2)|0))-((AX[1]/2)|0)];M.AG.AV=Ac;if(((!M.K.
G||!M.K.E1())||!M.K.BT)||(((A=B.lb(M.K.U,[0,0,(A=M.G.U)[2]-A[0],A[3]-A[1]]))[0]>=
A[2])||(A[1]>=A[3]))){var EQ=[(A=M.G.U)[2]-A[0],A[3]-A[1]];switch(this.H5){case 5:
Ac=[Ac[0],-AX[1]];break;case 3:{Ac=[Ac[0],-AX[1]];Ac=[EQ[0],Ac[1]];}break;case 8:
Ac=[-AX[0],-AX[1]];break;case 2:Ac=[EQ[0],Ac[1]];break;case 7:Ac=[-AX[0],Ac[1]];
break;case 4:Ac=[Ac[0],EQ[1]];break;case 1:{Ac=[Ac[0],EQ[1]];Ac=[EQ[0],Ac[1]];}break;
case 6:{Ac=[Ac[0],EQ[1]];Ac=[-AX[0],Ac[1]];}break;default:;}M.K.J(B.abJ(M.K.U,Ac
));}},SK:function(T){var A;var M=(C.GR.isPrototypeOf(T)?T:null);var Ac=M.K.U.slice(
0,2);var AX=[(A=M.K.U)[2]-A[0],A[3]-A[1]];var EQ=[(A=M.G.U)[2]-A[0],A[3]-A[1]];switch(
this.H5){case 5:Ac=[Ac[0],EQ[1]];break;case 3:{Ac=[Ac[0],EQ[1]];Ac=[-AX[0],Ac[1]
];}break;case 8:{Ac=[Ac[0],EQ[1]];Ac=[EQ[0],Ac[1]];}break;case 2:Ac=[-AX[0],Ac[1
]];break;case 7:Ac=[EQ[0],Ac[1]];break;case 4:Ac=[Ac[0],-AX[1]];break;case 1:Ac=[-
AX[0],-AX[1]];break;case 6:{Ac=[Ac[0],-AX[1]];Ac=[EQ[0],Ac[1]];}break;default:;}
M.AG.AV=Ac;},_Init:function(aArg){C.E4._Init.call(this,aArg);this.__proto__=C.IV;
},_className:"Effects::SlideTransition"};C.Go={TN:0,TU:1,TX:2,TW:3,Tx:4,Tz:5,Ty:
6,Ub:7,Ud:8,Uc:9,Tk:10,Tm:11,Tl:12,S_:13,Ta:14,S$:15,Tt:16,Tv:17,Tu:18,Th:19,Tj:
20,Ti:21,Ts:22,TA:23,Tr:24,TB:25,Tn:26};C.K5={Trigger:function(){B.Core.Timer.Trigger.
call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg
);this.__proto__=C.K5;},_className:"Effects::EffectTimerClass"};C.H7={_Init:function(
){C.K5._Init.call(this,0);this.By(15);this.L(true);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.J_={De:B.abi(12,0,null),G9:B.abi(12,0,null
),_Init:function(aArg){(this.De=[]).__proto__=C.J_.De;(this.G9=[]).__proto__=C.J_.
G9;this.__proto__=C.J_;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.JD={AW:
null,AS:null,M8:function(I4){var M=this.AS;while(!!M){M.JQ();M.K.F=M.K.F&~0x40000;
M=M.W;}M=this.AS;while(!!M){B.pe(M.MH,M);M=M.W;}},M7:function(I4){var M=this.AS;
while(!!M){B.pe(M.Kx,M);M=M.W;}this.AS=null;this.AW=null;},Hy:function(I4){var A;
if(!this.AS)this.D7();var M=this.AS;while(!!M){M.K.F=(M.K.F|0x40000)&~0x20000;M.
K.HS=null;M=M.W;}M=this.AS;while(!!M){(A=M.H$)?A[1].call(A[0],M):null;M.Hy();M=M.
W;}},D7:function(){var M=this.AS;while(!!M&&M.JL())M=M.W;if(!M)B.Core.IW.D7.call(
this);},OO:function(A5){if(!A5)return;if(this.Li())throw new Error(Bz);if(A5.Et!==
this)throw new Error(Em);if(!!A5.W)A5.W.Z=A5.Z;else this.AW=A5.Z;if(!!A5.Z)A5.Z.
W=A5.W;else this.AS=A5.W;A5.Et=null;A5.W=null;A5.Z=null;if(!!A5.K)A5.K.HS=null;B.
pe(A5.Kx,A5);if(!this.AS)this.MX();},MU:function(A5){if(!A5)return;if(this.Li())
throw new Error(Gr);if(!!A5.Et)throw new Error(FI);A5.Z=this.AW;A5.W=null;if(!!this.
AW)this.AW.W=A5;else this.AS=A5;this.AW=A5;A5.Et=this;},_Init:function(aArg){B.Core.
IW._Init.call(this,aArg);this.__proto__=C.JD;},_Mark:function(D){var A;B.Core.IW.
_Mark.call(this,D);if((A=this.AW)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AS)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.Ii={
_Init:function(){C.LR._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.Fz={_Init:function(){C.K8._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.FF={_Init:function(
){C.IV._Init.call(this,0);this.H5=2;},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.HB={_Init:function(){C.IV._Init.call(this,0);this.H5=
4;},_ReInit:function(){},_variants:function(){return this;},_this:null};C.HA={_Init:
function(){C.IV._Init.call(this,0);this.H5=5;},_ReInit:function(){},_variants:function(
){return this;},_this:null};
C._Init=function(){C.JK.__proto__=C.A6;C.LM.__proto__=C.A6;C.Bl.__proto__=C.A6;C.
Ij.__proto__=C.D9;C.LI.__proto__=C.D9;C.GR.__proto__=C.D9;C.LR.__proto__=C.E4;C.
K8.__proto__=C.E4;C.IV.__proto__=C.E4;C.K5.__proto__=B.Core.Timer;C.JD.__proto__=
B.Core.IW;};C._ReInit=function(){var A;if((A=C.H7._this))A._ReInit(),C.H7._ReInit.
call(A);if((A=C.Ii._this))A._ReInit(),C.Ii._ReInit.call(A);if((A=C.Fz._this))A._ReInit(
),C.Fz._ReInit.call(A);if((A=C.FF._this))A._ReInit(),C.FF._ReInit.call(A);if((A=
C.HB._this))A._ReInit(),C.HB._ReInit.call(A);if((A=C.HA._this))A._ReInit(),C.HA.
_ReInit.call(A);};C.D$=function(D){var A;if((A=C.H7._this)&&(A._cycle!=D))A._Done(
C.H7._this=null);if((A=C.Ii._this)&&(A._cycle!=D))A._Done(C.Ii._this=null);if((A=
C.Fz._this)&&(A._cycle!=D))A._Done(C.Fz._this=null);if((A=C.FF._this)&&(A._cycle
!=D))A._Done(C.FF._this=null);if((A=C.HB._this)&&(A._cycle!=D))A._Done(C.HB._this=
null);if((A=C.HA._this)&&(A._cycle!=D))A._Done(C.HA._this=null);};return C;})();

/* Embedded Wizard */