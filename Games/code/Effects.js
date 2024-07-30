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
);if(EmWiApp.ach)throw new Error("The unit file 'Effects.js' included twice!");EmWiApp.
ach=(function(){var B=EmWiApp;var C={};
var AT=[100,100];var Bh="Trying to remove a fader from a task, which is actually running";
var D4="The fader doesn\'t belong to this task";var FT="Trying to add a fader to a task, which is actually running";
var Fh="The fader belongs already to a task";
C.A0={Cg:null,timer:null,H9:null,Fb:null,Iv:0,Gf:0,D7:0,CA:0,IC:0.001,C0:0,A2:0,Bg:
0,Kg:0.5,LU:3,Id:3,HW:0.5,Eb:3,K7:0,K6:0,D0:0,FB:1000,FF:0,FP:0,A1:false,K1:false
,Hq:false,J5:false,GS:function(S){var A;if(!this.timer)return;if(!this.Gf){if(this.
K1)this.Gf=-1;else this.Gf=1;this.Iv=this.Gf;this.Bg=this.timer.Bl;this.A2=0;this.
C0=-1;}var CX;if((this.Gf>0)&&(this.Iv>0))CX=this.QX();else if((this.Gf<0)&&(this.
Iv<0))CX=this.Q0();else if(this.Gf>0)CX=this.QY();else CX=this.QZ();if(CX){this.
Q(false);(A=this.H9)?A[1].call(A[0],this):null;}},J1:function(N){var A;if(!this.
Cg&&(((this.FP===19)||(this.FP===20))||(this.FP===21))){var JI=this.LU+1;var QD=
Math.sqrt(this.Kg);var Ho=0.5;var L;this.Cg=B._NewObject(C.Jx,0);this.Cg.CE.Set(
0,1);this.Cg.GE.Set(0,1);for(L=1;L<JI;L=L+1){this.Cg.CE.Set(L,this.Cg.CE.Get(L-1
)*QD);this.Cg.GE.Set(L,this.Cg.GE.Get(L-1)*this.Kg);Ho=Ho+this.Cg.CE.Get(L);}var
QF=1/Ho;this.Cg.CE.Set(0,0.5);Ho=0;for(L=0;L<JI;L=L+1){this.Cg.CE.Set(L,this.Cg.
CE.Get(L)*QF);Ho=Ho+this.Cg.CE.Get(L);}this.Cg.CE.Set(JI,this.Cg.CE.Get(JI)+(1-Ho
));}switch(this.FP){case 1:N=Math.pow(N,this.Eb);break;case 2:{N=1-N;N=1-Math.pow(
N,this.Eb);}break;case 3:{N=N*2;if(N<1)N=Math.pow(N,this.Eb)/2;else{N=2-N;N=(2-Math.
pow(N,this.Eb))*0.5;}}break;case 4:N=(Math.pow(2.718,this.Eb*N)-1)/(Math.pow(2.718
,this.Eb)-1);break;case 5:{N=1-N;N=1-((Math.pow(2.718,this.Eb*N)-1)/(Math.pow(2.718
,this.Eb)-1));}break;case 6:{N=N*2;if(N<1)N=((Math.pow(2.718,this.Eb*N)-1)/(Math.
pow(2.718,this.Eb)-1))/2;else{N=2-N;N=(2-((Math.pow(2.718,this.Eb*N)-1)/(Math.pow(
2.718,this.Eb)-1)))*0.5;}}break;case 7:N=1-Math.cos((N*90)*B.k$);break;case 8:N=
Math.sin((N*90)*B.k$);break;case 9:{N=N*2;if(N<1){N=1-Math.cos((N*90)*B.k$);N=N*
0.5;}else{N=2-N;N=1-Math.cos((N*90)*B.k$);N=(2-N)*0.5;}}break;case 10:N=1-Math.sqrt(
1-(N*N));break;case 11:{N=1-N;N=Math.sqrt(1-(N*N));}break;case 12:{N=N*2;if(N<1){
N=1-Math.sqrt(1-(N*N));N=N*0.5;}else{N=2-N;N=1-Math.sqrt(1-(N*N));N=(2-N)*0.5;}}
break;case 13:N=((N*N)*N)-((N*this.HW)*Math.sin((N*180)*B.k$));break;case 14:{N=
1-N;N=((N*N)*N)-((N*this.HW)*Math.sin((N*180)*B.k$));N=1-N;}break;case 15:{N=N*2;
if(N<1){N=((N*N)*N)-((N*this.HW)*Math.sin((N*180)*B.k$));N=N*0.5;}else{N=2-N;N=((
N*N)*N)-((N*this.HW)*Math.sin((N*180)*B.k$));N=(2-N)*0.5;}}break;case 16:N=((N*N
)*N)*Math.sin(((N*90)*(1+(4*this.Id)))*B.k$);break;case 17:{N=1-N;N=1-(((N*N)*N)
*Math.sin(((N*90)*(1+(4*this.Id)))*B.k$));}break;case 18:{N=N*2;if(N<1){N=((N*N)
*N)*Math.sin(((N*90)*(1+(4*this.Id)))*B.k$);N=N*0.5;}else{N=2-N;N=((N*N)*N)*Math.
sin(((N*90)*(1+(4*this.Id)))*B.k$);N=(2-N)*0.5;}}break;case 19:{var EV=this.Cg;var
L=0;var E3=0;var C1=EV.CE.Get(0);var A9=1-N;while(A9>C1){L=L+1;E3=C1;C1=C1+EV.CE.
Get(L);}N=(A9-E3)/(C1-E3);if(!L)N=1-(N*N);else{N=(2*N)-1;N=EV.GE.Get(L)*(1-(N*N)
);}}break;case 20:{var EV=this.Cg;var L=0;var E3=0;var C1=EV.CE.Get(0);while(N>C1
){L=L+1;E3=C1;C1=C1+EV.CE.Get(L);}N=(N-E3)/(C1-E3);if(!L)N=N*N;else{N=(2*N)-1;N=
1-(EV.GE.Get(L)*(1-(N*N)));}}break;case 21:{var EV=this.Cg;var L=0;var E3=0;var C1=
EV.CE.Get(0);var Be=N*2;var A9=Be-1;if(Be<1)A9=-A9;while(A9>C1){L=L+1;E3=C1;C1=C1+
EV.CE.Get(L);}A9=(A9-E3)/(C1-E3);if(!L)A9=A9*A9;else{A9=(2*A9)-1;A9=1-(EV.GE.Get(
L)*(1-(A9*A9)));}if(Be<1)N=0.5*(1-A9);else N=0.5*(1+A9);}break;default:if(this.Hq
){var Be=N;var IG=1-Be;N=((IG*Be)*(this.CA+1))+(Be*Be);}else if(this.J5){var Be=
N;var IG=1-Be;var Mx=Be*Be;var QH=IG*IG;N=(((QH*Be)*(this.CA+1))+((IG*Mx)*(this.
D7+2)))+(Mx*Be);}}this.IW(N);(A=this.Fb)?A[1].call(A[0],this):null;},Q0:function(
){var As=(this.timer.Bl-this.Bg)|0;if(As<0)As=-As;var DU=this.FF;var Ev=this.FF+
this.FB;var By=this.FB;var CX=false;var AA=this.C0;if(!this.A2&&(As>=Ev)){this.A2=
1;As=As-Ev;this.Bg=this.Bg+Ev;}if((this.A2>0)&&(As>=By)){var BO=(As/By)|0;this.A2=
this.A2+BO;As=As-(BO*By);this.Bg=this.Bg+(BO*By);}if((this.A2>2)&&!this.D0)this.
A2=1;if(this.A2>0)DU=0;if((this.A2>=this.D0)&&(this.D0>0)){CX=true;AA=0;}else if(
As>=DU)AA=1-((As-DU)*this.IC);else if(AA>=0)AA=0;if(AA!==this.C0){if(AA<0)AA=0;if(
AA>1)AA=1;}if(AA!==this.C0){this.C0=AA;this.J1(AA);}return CX;},QZ:function(){var
As=(this.Bg-this.timer.Bl)|0;var DU=this.FF;var Ev=this.FF+this.FB;var By=this.FB;
var CX=false;var AA=this.C0;if((this.A2>1)&&(As<0)){var BO=(((-As+By)-1)/By)|0;if((
this.A2-BO)<=0)BO=this.A2-1;this.A2=this.A2-BO;As=As+(BO*By);this.Bg=this.Bg+(BO
*By);}if(((this.A2===1)&&(As<0))&&(this.D0>0)){this.A2=0;As=As+Ev;this.Bg=this.Bg+
Ev;}if(((this.A2===1)&&(As<0))&&!this.D0){var BO=(((-As+By)-1)/By)|0;As=As+(BO*By
);this.Bg=this.Bg+(BO*By);}if(this.A2>0)DU=0;if(As<0){CX=true;AA=1;}else if(As>=
DU)AA=1-((As-DU)*this.IC);else if(AA>=0)AA=1;if(AA!==this.C0){if(AA<0)AA=0;if(AA>
1)AA=1;}if(AA!==this.C0){this.C0=AA;this.J1(AA);}return CX;},QY:function(){var As=(
this.Bg-this.timer.Bl)|0;var DU=this.FF;var Ev=this.FF+this.FB;var By=this.FB;var
CX=false;var AA=this.C0;if((this.A2>1)&&(As<0)){var BO=(((-As+By)-1)/By)|0;if((this.
A2-BO)<=0)BO=this.A2-1;this.A2=this.A2-BO;As=As+(BO*By);this.Bg=this.Bg+(BO*By);
}if(((this.A2===1)&&(As<0))&&(this.D0>0)){this.A2=0;As=As+Ev;this.Bg=this.Bg+Ev;
}if(((this.A2===1)&&(As<0))&&!this.D0){var BO=(((-As+By)-1)/By)|0;As=As+(BO*By);
this.Bg=this.Bg+(BO*By);}if(this.A2>0)DU=0;if(As<0){CX=true;AA=0;}else if(As>=DU
)AA=(As-DU)*this.IC;else if(AA>=0)AA=0;if(AA!==this.C0){if(AA<0)AA=0;if(AA>1)AA=
1;}if(AA!==this.C0){this.C0=AA;this.J1(AA);}return CX;},QX:function(){var As=(this.
timer.Bl-this.Bg)|0;if(As<0)As=-As;var DU=this.FF;var Ev=this.FF+this.FB;var By=
this.FB;var CX=false;var AA=this.C0;if(!this.A2&&(As>=Ev)){this.A2=1;As=As-Ev;this.
Bg=this.Bg+Ev;}if((this.A2>0)&&(As>=By)){var BO=(As/By)|0;this.A2=this.A2+BO;As=
As-(BO*By);this.Bg=this.Bg+(BO*By);}if((this.A2>2)&&!this.D0)this.A2=1;if(this.A2>
0)DU=0;if((this.A2>=this.D0)&&(this.D0>0)){CX=true;AA=1;}else if(As>=DU)AA=(As-DU
)*this.IC;else if(AA>=0)AA=1;if(AA!==this.C0){if(AA<0)AA=0;if(AA>1)AA=1;}if(AA!==
this.C0){this.C0=AA;this.J1(AA);}return CX;},KP:function(E){if(this.K1===E)return;
this.K1=E;if(!this.A1||!this.Gf)return;if(E)this.Iv=-1;else this.Iv=1;this.Bg=(this.
timer.H1()*2)-this.Bg;},L$:function(E){if(E<0)E=0;if(E>1)E=1;this.Kg=E;},G1:function(
E){if(E<1)E=1;if(E>10)E=10;this.LU=E;this.Cg=null;},HF:function(E){if(E<1)E=1;if(
E>10)E=10;this.Id=E;},L9:function(E){if(E<0)E=0;if(E>10)E=10;this.HW=E;},Ma:function(
E){if(E<1)E=1;if(E>100)E=100;this.Eb=E;},KR:function(E){if(this.K7===E)return;this.
K7=E;if(this.FP===26){this.D7=E;this.Hq=(this.CA===this.D7)&&!!this.CA;this.J5=!
this.Hq&&(this.CA!==this.D7);}},KQ:function(E){if(this.K6===E)return;this.K6=E;if(
this.FP===26){this.CA=E;this.Hq=(this.CA===this.D7)&&!!this.CA;this.J5=!this.Hq&&(
this.CA!==this.D7);}},H$:function(E){if(this.FP===E)return;this.FP=E;this.Cg=null;
switch(E){case 24:{this.CA=-1.1;this.D7=1.1;}break;case 22:{this.CA=-1;this.D7=-
2;}break;case 23:{this.CA=2;this.D7=1;}break;case 25:{this.CA=1.1;this.D7=-1.1;}
break;case 0:{this.CA=0;this.D7=0;}break;default:{this.CA=this.K6;this.D7=this.K7;
}}this.Hq=(this.CA===this.D7)&&!!this.CA;this.J5=!this.Hq&&(this.CA!==this.D7);}
,Jr:function(E){if(E<0)E=0;this.D0=E;},Gm:function(E){if(E<15)E=15;this.FB=E;this.
IC=1/E;},Md:function(E){if(E<0)E=0;this.FF=E;},Q:function(E){if(this.A1===E)return;
this.A1=E;if(!E&&!!this.timer){B.z9([this,this.GS],this.timer,0);this.timer=null;
}if(E){this.timer=B._GetAutoObject(C.Hw);B.zV([this,this.GS],this.timer,0);this.
Gf=0;B.pe([this,this.GS],this);}},IW:function(Fn){},_Init:function(aArg){this.__proto__=
C.A0;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){}
,_Mark:function(D){var A;if((A=this.Cg)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=
this.timer)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H9)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Fb)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null
,_className:"Effects::Effect"};C.I8={CP:null,FQ:0,AR:255,AQ:0,IW:function(Fn){var
Fj;this.FQ=this.AQ+(Math.round((this.AR-this.AQ)*Fn)|0);if(!!this.CP)(Fj=this.CP
,Fj[2].call(Fj[0],this.FQ));},_Init:function(aArg){C.A0._Init.call(this,aArg);this.
__proto__=C.I8;},_Mark:function(D){var A;C.A0._Mark.call(this,D);if((A=this.CP)&&((
A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::Int32Effect"};C.KX={
FQ:B.wf,AR:AT,AQ:B.wf,IW:function(Fn){var BV=this.AQ[0];var Bn=this.AQ[1];BV=BV+(
Math.round((this.AR[0]-BV)*Fn)|0);Bn=Bn+(Math.round((this.AR[1]-Bn)*Fn)|0);this.
FQ=[BV,Bn];},_Init:function(aArg){C.A0._Init.call(this,aArg);this.__proto__=C.KX;
},_className:"Effects::PointEffect"};C.Bk={CP:null,FQ:0,AR:0xFFFFFFFF,AQ:0,IW:function(
Fn){var Fj;var GO=this.AQ&0xFF;var GH=(this.AQ>>8)&0xFF;var GF=(this.AQ>>16)&0xFF;
var GD=(this.AQ>>24)&0xFF;GO=GO+((((this.AR&0xFF)-GO)*Fn)|0);GH=GH+(((((this.AR>>
8)&0xFF)-GH)*Fn)|0);GF=GF+(((((this.AR>>16)&0xFF)-GF)*Fn)|0);GD=GD+(((((this.AR>>
24)&0xFF)-GD)*Fn)|0);if(GO<0)GO=0;if(GO>255)GO=255;if(GH<0)GH=0;if(GH>255)GH=255;
if(GF<0)GF=0;if(GF>255)GF=255;if(GD<0)GD=0;if(GD>255)GD=255;this.FQ=(GO&0xFF)|((
GH&0xFF)<<8)|((GF&0xFF)<<16)|((GD&0xFF)<<24);if(!!this.CP)(Fj=this.CP,Fj[2].call(
Fj[0],this.FQ));},_Init:function(aArg){C.A0._Init.call(this,aArg);this.__proto__=
C.Bk;},_Mark:function(D){var A;C.A0._Mark.call(this,D);if((A=this.CP)&&((A=A[0]).
_cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::ColorEffect"};C.DM={D$:null
,Y:null,W:null,G:null,I:null,JU:null,LH:null,Hz:null,AV:true,A1:true,Gy:true,Hr:
false,Hs:true,FL:true,EP:true,DK:function(){if(!!this.D$)this.D$.DK();},I9:function(
){return true;},Jc:function(){},G2:function(){this.DK();},_Init:function(aArg){this.
__proto__=C.DM;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.D$)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.W)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle
!=D))A._Mark(A._cycle=D);if((A=this.JU)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D
);if((A=this.LH)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hz)&&((A=A[
0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Effects::Fader"};C.HK={Mf:B.wf,
D8:false,I9:function(){return this.D8;},Jc:function(){if(!this.AV&&!!this.I.G)this.
I.Aq(false);if((!this.AV&&this.EP)&&!!this.I.G)this.I.G.Ig(this.I);if(!this.A1)this.
I.Q(false);},G2:function(){if(this.A1)this.I.Q(true);if((this.AV||this.Hr)&&!this.
I.G){this.I.Aq(false);this.G.V(this.I,0);}if(this.AV&&this.FL)this.I.G.K0(this.I
);if(this.AV&&this.Hs)this.I.G.D2(this.I);if(this.AV&&!this.Gy)this.I.R(B.abJ(this.
I.T,this.Mf));if(this.AV){this.I.Dc(255);this.I.Aq(true);}if(!this.AV&&(this.G.Cq===
this.I))this.G.D2(null);this.D8=true;this.DK();},_Init:function(aArg){C.DM._Init.
call(this,aArg);this.__proto__=C.HK;},_className:"Effects::VisibilityFader"};C.KT={
A0:null,D8:false,I9:function(){return this.D8;},Jc:function(){if(this.AV)this.I.
Dc(this.A0.AR);if(!this.AV&&!this.I.B7)this.I.Aq(false);if((!this.AV&&this.EP)&&
!!this.I.G)this.I.G.Ig(this.I);if(!this.A1)this.I.Q(false);},G2:function(){var A;
if(this.Gy){if(this.I.EE()&&!!this.I.G)this.A0.AQ=this.I.B7;else this.A0.AQ=0;}var
LA=((!this.I.G||!this.I.B7)||!this.I.EE())||(((A=B.lb(this.I.T,[0,0,(A=this.G.T)[
2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));var LB=((!this.AV&&((!this.I.G||!this.
I.EE())||this.EP))||!this.A0.AR)||(((A=B.lb(this.I.T,[0,0,(A=this.G.T)[2]-A[0],A[
3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(LA&&LB){this.A0.AQ=0;this.A0.AR=0;}if(this.
A1)this.I.Q(true);if((this.AV||this.Hr)&&!this.I.G){this.I.Aq(false);this.G.V(this.
I,0);}if(this.AV&&this.FL)this.I.G.K0(this.I);if(this.AV&&this.Hs)this.I.G.D2(this.
I);if(!this.AV&&(this.G.Cq===this.I))this.G.D2(null);if(this.AV&&!this.I.EE()){this.
I.Dc(this.A0.AQ);this.I.Aq(true);}if(!this.AV&&((!this.I.G||!this.I.EE())||!this.
I.B7)){this.D8=true;this.DK();return;}if(!this.AV&&(this.A0.AQ===this.A0.AR))this.
I.Dc(this.A0.AQ);if(this.I.B7===this.A0.AR){this.D8=true;this.DK();return;}if(this.
A0.AQ===this.A0.AR){this.D8=true;this.DK();return;}if(!this.A0.D0)this.A0.Jr(1);
this.A0.CP=[A=this.I,A.L8,A.Ml];this.A0.KP(false);this.A0.H9=[this,this.JV];this.
A0.Fb=null;this.A0.Q(true);},JV:function(S){this.D8=true;this.DK();},_Init:function(
aArg){C.DM._Init.call(this,aArg);C.I8._Init.call(this.A0={J:this},0);this.__proto__=
C.KT;},_Done:function(){this.__proto__=C.DM;this.A0._Done();C.DM._Done.call(this
);},_ReInit:function(){C.DM._ReInit.call(this);this.A0._ReInit();},_Mark:function(
D){var A;C.DM._Mark.call(this,D);if((A=this.A0)._cycle!=D)A._Mark(A._cycle=D);},
_className:"Effects::OpacityFader"};C.Go={AY:null,AB:null,D8:false,I9:function(){
return this.D8;},Jc:function(){if(this.AV){this.I.Dc(this.AY.AR);this.I.R(B.abJ(
this.I.T,this.AB.AR));}if(!this.AV&&!this.I.B7)this.I.Aq(false);if((!this.AV&&this.
EP)&&!!this.I.G)this.I.G.Ig(this.I);if(!this.A1)this.I.Q(false);},G2:function(){
var A;if(this.Gy){if(this.I.EE()&&!!this.I.G)this.AY.AQ=this.I.B7;else this.AY.AQ=
0;this.AB.AQ=this.I.T.slice(0,2);}var LA=((!this.I.G||!this.I.B7)||!this.I.EE())||(((
A=B.lb(this.I.T,[0,0,(A=this.G.T)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));
var LB=((!this.AV&&((!this.I.G||!this.I.EE())||this.EP))||!this.AY.AR)||(((A=B.lb(
B.abh([0,0,(A=this.I.T)[2]-A[0],A[3]-A[1]],this.AB.AR),[0,0,(A=this.G.T)[2]-A[0]
,A[3]-A[1]]))[0]>=A[2])||(A[1]>=A[3]));if(LA&&LB){this.AY.AQ=0;this.AY.AR=0;this.
AB.AQ=this.AB.AR;}if(this.A1)this.I.Q(true);if((this.AV||this.Hr)&&!this.I.G){this.
I.Aq(false);this.G.V(this.I,0);}if(this.AV&&this.FL)this.I.G.K0(this.I);if(this.
AV&&this.Hs)this.I.G.D2(this.I);if(!this.AV&&(this.G.Cq===this.I))this.G.D2(null
);if(this.AV&&!this.I.EE()){this.I.R(B.abJ(this.I.T,this.AB.AQ));this.I.Dc(this.
AY.AQ);this.I.Aq(true);}if(!this.AV&&((!this.I.G||!this.I.EE())||!this.I.B7)){this.
D8=true;this.DK();return;}if(!this.AV&&B.aaX(this.AB.AQ,this.AB.AR))this.I.R(B.abJ(
this.I.T,this.AB.AQ));if(!this.AV&&(this.AY.AQ===this.AY.AR))this.I.Dc(this.AY.AQ
);if((this.I.B7===this.AY.AR)&&B.aaX(this.I.T.slice(0,2),this.AB.AR)){this.D8=true;
this.DK();return;}if((this.AY.AQ===this.AY.AR)&&B.aaX(this.AB.AQ,this.AB.AR)){this.
D8=true;this.DK();return;}if(!this.AY.D0)this.AY.Jr(1);if(!this.AB.D0)this.AB.Jr(
1);this.AB.KP(false);this.AB.H9=[this,this.JV];this.AB.Fb=[this,this.QJ];this.AY.
CP=[A=this.I,A.L8,A.Ml];this.AY.KP(false);this.AY.H9=[this,this.JV];this.AY.Fb=null;
this.AB.Q(!B.aaX(this.AB.AQ,this.AB.AR));this.AY.Q(this.AY.AQ!==this.AY.AR);},JV:
function(S){this.D8=!this.AY.A1&&!this.AB.A1;this.DK();},QJ:function(S){this.I.R(
B.abJ(this.I.T,this.AB.FQ));},_Init:function(aArg){C.DM._Init.call(this,aArg);C.
I8._Init.call(this.AY={J:this},0);C.KX._Init.call(this.AB={J:this},0);this.__proto__=
C.Go;},_Done:function(){this.__proto__=C.DM;this.AY._Done();this.AB._Done();C.DM.
_Done.call(this);},_ReInit:function(){C.DM._ReInit.call(this);this.AY._ReInit();
this.AB._ReInit();},_Mark:function(D){var A;C.DM._Mark.call(this,D);if((A=this.AY
)._cycle!=D)A._Mark(A._cycle=D);if((A=this.AB)._cycle!=D)A._Mark(A._cycle=D);},_className:
"Effects::PositionFader"};C.EH={E6:function(){return null;},E5:function(){return null;
},Gj:function(){return this.E6();},Gi:function(){return this.E5();},_Init:function(
aArg){this.__proto__=C.EH;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(
A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Effects::Transition"};
C.K2={E6:function(){var K=B._NewObject(C.HK,0);K.AV=true;K.A1=true;K.Hs=false;K.
FL=true;K.Gy=false;K.Hz=[this,this.IJ];return K;},E5:function(){var K=B._NewObject(
C.HK,0);K.AV=false;K.A1=false;K.EP=true;return K;},Gj:function(){var K=C.EH.Gj.call(
this);K.FL=false;K.A1=true;return K;},Gi:function(){var K=B._NewObject(C.HK,0);K.
AV=false;K.A1=true;K.Hr=true;K.EP=false;return K;},IJ:function(S){var A;var K=(C.
HK.isPrototypeOf(S)?S:null);var Ap=[0,0,(A=K.G.T)[2]-A[0],A[3]-A[1]];var AU=[(A=
K.I.T)[2]-A[0],A[3]-A[1]];var Aa=Ap.slice(0,2);Aa=[(Ap[0]+(((Ap[2]-Ap[0])/2)|0))-((
AU[0]/2)|0),Aa[1]];Aa=[Aa[0],(Ap[1]+(((Ap[3]-Ap[1])/2)|0))-((AU[1]/2)|0)];K.Mf=Aa;
},_Init:function(aArg){C.EH._Init.call(this,aArg);this.__proto__=C.K2;},_className:
"Effects::ShowHideTransition"};C.Ki={E6:function(){var K=B._NewObject(C.Go,0);K.
AV=true;K.A1=true;K.Hs=false;K.FL=true;K.Gy=true;K.Hz=[this,this.IJ];K.AY.Gm(500
);K.AY.AQ=0;K.AY.AR=255;K.AB.Gm(500);K.AB.H$(23);return K;},E5:function(){var K=
B._NewObject(C.KT,0);K.AV=false;K.A1=false;K.EP=true;K.Gy=true;K.A0.AQ=255;K.A0.
AR=0;K.A0.Gm(500);return K;},Gj:function(){var K=C.EH.Gj.call(this);K.FL=false;K.
A1=true;return K;},Gi:function(){var K=C.EH.Gi.call(this);K.Hr=true;K.EP=false;K.
A1=true;return K;},IJ:function(S){var A;var K=(C.Go.isPrototypeOf(S)?S:null);var
Ap=[0,0,(A=K.G.T)[2]-A[0],A[3]-A[1]];var AU=[(A=K.I.T)[2]-A[0],A[3]-A[1]];var Aa=
Ap.slice(0,2);Aa=[(Ap[0]+(((Ap[2]-Ap[0])/2)|0))-((AU[0]/2)|0),Aa[1]];Aa=[Aa[0],(
Ap[1]+(((Ap[3]-Ap[1])/2)|0))-((AU[1]/2)|0)];K.AB.AR=Aa;if(((!K.I.G||!K.I.EE())||
!K.I.B7)||(((A=B.lb(K.I.T,[0,0,(A=K.G.T)[2]-A[0],A[3]-A[1]]))[0]>=A[2])||(A[1]>=
A[3])))K.I.R(B.abJ(K.I.T,Aa));},_Init:function(aArg){C.EH._Init.call(this,aArg);
this.__proto__=C.Ki;},_className:"Effects::FadeInOutTransition"};C.Jt={HY:0,E6:function(
){var K=B._NewObject(C.Go,0);K.AV=true;K.A1=true;K.Hs=false;K.FL=true;K.Gy=true;
K.Hz=[this,this.IJ];K.AY.Gm(500);K.AY.Md(0);K.AY.AQ=0;K.AY.AR=255;K.AB.Gm(500);K.
AB.H$(23);K.AB.KQ(0);K.AB.KR(0);K.AB.Ma(3);K.AB.L9(0.5);K.AB.HF(3);K.AB.G1(3);K.
AB.L$(0.5);return K;},E5:function(){var K=B._NewObject(C.Go,0);K.AV=false;K.A1=false;
K.EP=true;K.Gy=true;K.Hz=[this,this.QN];K.AY.AQ=255;K.AY.AR=0;K.AY.Gm(500);K.AY.
Md(0);K.AB.Gm(500);K.AB.H$(23);K.AB.KQ(0);K.AB.KR(0);K.AB.Ma(3);K.AB.L9(0.5);K.AB.
HF(3);K.AB.G1(3);K.AB.L$(0.5);return K;},Gj:function(){var K=C.EH.Gj.call(this);
K.FL=false;K.A1=true;return K;},Gi:function(){var K=C.EH.Gi.call(this);K.Hr=true;
K.EP=false;K.A1=true;return K;},IJ:function(S){var A;var K=(C.Go.isPrototypeOf(S
)?S:null);var Ap=[0,0,(A=K.G.T)[2]-A[0],A[3]-A[1]];var AU=[(A=K.I.T)[2]-A[0],A[3
]-A[1]];var Aa=Ap.slice(0,2);Aa=[(Ap[0]+(((Ap[2]-Ap[0])/2)|0))-((AU[0]/2)|0),Aa[
1]];Aa=[Aa[0],(Ap[1]+(((Ap[3]-Ap[1])/2)|0))-((AU[1]/2)|0)];K.AB.AR=Aa;if(((!K.I.
G||!K.I.EE())||!K.I.B7)||(((A=B.lb(K.I.T,[0,0,(A=K.G.T)[2]-A[0],A[3]-A[1]]))[0]>=
A[2])||(A[1]>=A[3]))){var Ew=[(A=K.G.T)[2]-A[0],A[3]-A[1]];switch(this.HY){case 5:
Aa=[Aa[0],-AU[1]];break;case 3:{Aa=[Aa[0],-AU[1]];Aa=[Ew[0],Aa[1]];}break;case 8:
Aa=[-AU[0],-AU[1]];break;case 2:Aa=[Ew[0],Aa[1]];break;case 7:Aa=[-AU[0],Aa[1]];
break;case 4:Aa=[Aa[0],Ew[1]];break;case 1:{Aa=[Aa[0],Ew[1]];Aa=[Ew[0],Aa[1]];}break;
case 6:{Aa=[Aa[0],Ew[1]];Aa=[-AU[0],Aa[1]];}break;default:;}K.I.R(B.abJ(K.I.T,Aa
));}},QN:function(S){var A;var K=(C.Go.isPrototypeOf(S)?S:null);var Aa=K.I.T.slice(
0,2);var AU=[(A=K.I.T)[2]-A[0],A[3]-A[1]];var Ew=[(A=K.G.T)[2]-A[0],A[3]-A[1]];switch(
this.HY){case 5:Aa=[Aa[0],Ew[1]];break;case 3:{Aa=[Aa[0],Ew[1]];Aa=[-AU[0],Aa[1]
];}break;case 8:{Aa=[Aa[0],Ew[1]];Aa=[Ew[0],Aa[1]];}break;case 2:Aa=[-AU[0],Aa[1
]];break;case 7:Aa=[Ew[0],Aa[1]];break;case 4:Aa=[Aa[0],-AU[1]];break;case 1:Aa=[-
AU[0],-AU[1]];break;case 6:{Aa=[Aa[0],-AU[1]];Aa=[Ew[0],Aa[1]];}break;default:;}
K.AB.AR=Aa;},_Init:function(aArg){C.EH._Init.call(this,aArg);this.__proto__=C.Jt;
},_className:"Effects::SlideTransition"};C.FP={RQ:0,RY:1,R0:2,RZ:3,RA:4,RC:5,RB:
6,Se:7,Sg:8,Sf:9,Rn:10,Rp:11,Ro:12,Rb:13,Rd:14,Rc:15,Rw:16,Ry:17,Rx:18,Rk:19,Rm:
20,Rl:21,Rv:22,RD:23,Ru:24,RE:25,Rq:26};C.Kf={Trigger:function(){B.Core.Timer.Trigger.
call(this);B.we(this,0);},_Init:function(aArg){B.Core.Timer._Init.call(this,aArg
);this.__proto__=C.Kf;},_className:"Effects::EffectTimerClass"};C.Hw={_Init:function(
){C.Kf._Init.call(this,0);this.B3(15);this.Q(true);},_ReInit:function(){},_variants:
function(){return this;},_this:null};C.Jx={CE:B.abi(12,0,null),GE:B.abi(12,0,null
),_Init:function(aArg){(this.CE=[]).__proto__=C.Jx.CE;(this.GE=[]).__proto__=C.Jx.
GE;this.__proto__=C.Jx;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Effects::TimingList"};C.I1={AS:
null,AN:null,L7:function(Is){var K=this.AN;while(!!K){K.Jc();K.I.F=K.I.F&~0x40000;
K=K.W;}K=this.AN;while(!!K){B.pe(K.LH,K);K=K.W;}},L6:function(Is){var K=this.AN;
while(!!K){B.pe(K.JU,K);K=K.W;}this.AN=null;this.AS=null;},G2:function(Is){var A;
if(!this.AN)this.DK();var K=this.AN;while(!!K){K.I.F=(K.I.F|0x40000)&~0x20000;K.
I.Hj=null;K=K.W;}K=this.AN;while(!!K){(A=K.Hz)?A[1].call(A[0],K):null;K.G2();K=K.
W;}},DK:function(){var K=this.AN;while(!!K&&K.I9())K=K.W;if(!K)B.Core.Ij.DK.call(
this);},ND:function(AZ){if(!AZ)return;if(this.Ks())throw new Error(Bh);if(AZ.D$!==
this)throw new Error(D4);if(!!AZ.W)AZ.W.Y=AZ.Y;else this.AS=AZ.Y;if(!!AZ.Y)AZ.Y.
W=AZ.W;else this.AN=AZ.W;AZ.D$=null;AZ.W=null;AZ.Y=null;if(!!AZ.I)AZ.I.Hj=null;B.
pe(AZ.JU,AZ);if(!this.AN)this.LV();},LT:function(AZ){if(!AZ)return;if(this.Ks())
throw new Error(FT);if(!!AZ.D$)throw new Error(Fh);AZ.Y=this.AS;AZ.W=null;if(!!this.
AS)this.AS.W=AZ;else this.AN=AZ;this.AS=AZ;AZ.D$=this;},_Init:function(aArg){B.Core.
Ij._Init.call(this,aArg);this.__proto__=C.I1;},_Mark:function(D){var A;B.Core.Ij.
_Mark.call(this,D);if((A=this.AS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AN)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Effects::FaderTask"};C.HJ={
_Init:function(){C.K2._Init.call(this,0);},_ReInit:function(){},_variants:function(
){return this;},_this:null};C.E8={_Init:function(){C.Ki._Init.call(this,0);},_ReInit:
function(){},_variants:function(){return this;},_this:null};C.Fe={_Init:function(
){C.Jt._Init.call(this,0);this.HY=2;},_ReInit:function(){},_variants:function(){
return this;},_this:null};C.G3={_Init:function(){C.Jt._Init.call(this,0);this.HY=
5;},_ReInit:function(){},_variants:function(){return this;},_this:null};
C._Init=function(){C.I8.__proto__=C.A0;C.KX.__proto__=C.A0;C.Bk.__proto__=C.A0;C.
HK.__proto__=C.DM;C.KT.__proto__=C.DM;C.Go.__proto__=C.DM;C.K2.__proto__=C.EH;C.
Ki.__proto__=C.EH;C.Jt.__proto__=C.EH;C.Kf.__proto__=B.Core.Timer;C.I1.__proto__=
B.Core.Ij;};C._ReInit=function(){var A;if((A=C.Hw._this))A._ReInit(),C.Hw._ReInit.
call(A);if((A=C.HJ._this))A._ReInit(),C.HJ._ReInit.call(A);if((A=C.E8._this))A._ReInit(
),C.E8._ReInit.call(A);if((A=C.Fe._this))A._ReInit(),C.Fe._ReInit.call(A);if((A=
C.G3._this))A._ReInit(),C.G3._ReInit.call(A);};C.DO=function(D){var A;if((A=C.Hw.
_this)&&(A._cycle!=D))A._Done(C.Hw._this=null);if((A=C.HJ._this)&&(A._cycle!=D))
A._Done(C.HJ._this=null);if((A=C.E8._this)&&(A._cycle!=D))A._Done(C.E8._this=null
);if((A=C.Fe._this)&&(A._cycle!=D))A._Done(C.Fe._this=null);if((A=C.G3._this)&&(
A._cycle!=D))A._Done(C.G3._this=null);};return C;})();

/* Embedded Wizard */