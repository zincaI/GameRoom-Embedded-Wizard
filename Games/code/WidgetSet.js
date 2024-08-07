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
);if(EmWiApp.acg)throw new Error("The unit file 'WidgetSet.js' included twice!");
EmWiApp.acg=(function(){var B=EmWiApp;var C={};
var Bg=[0,0,150,50];var AW=[0,50];var D_=[150,50];var En=[150,0];var FL=[0,0];
C.Bj={IC:null,Lc:0xFF000000,Lf:0xFF000000,Le:0xFF000000,Ld:0xFF000000,K7:0xFFFFFFFF
,K_:0xFFFFFFFF,K9:0xFFFFFFFF,K8:0xFFFFFFFF,If:B.wf,JT:function(E){if(this.Lc===E
)return;this.Lc=E;B.pe([this,this.FZ],this);},JW:function(E){if(this.Lf===E)return;
this.Lf=E;B.pe([this,this.FZ],this);},JV:function(E){if(this.Le===E)return;this.
Le=E;B.pe([this,this.FZ],this);},JU:function(E){if(this.Ld===E)return;this.Ld=E;
B.pe([this,this.FZ],this);},JP:function(E){if(this.K7===E)return;this.K7=E;B.pe([
this,this.FZ],this);},JS:function(E){if(this.K_===E)return;this.K_=E;B.pe([this,
this.FZ],this);},JR:function(E){if(this.K9===E)return;this.K9=E;B.pe([this,this.
FZ],this);},JQ:function(E){if(this.K8===E)return;this.K8=E;B.pe([this,this.FZ],this
);},JX:function(E){if(this.IC===E)return;this.IC=E;B.pe([this,this.FZ],this);},LF:
function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(B.aaX(this.If,E))return;
this.If=E;B.pe([this,this.FZ],this);},_Init:function(aArg){C.J4._Init.call(this,
aArg);this.__proto__=C.Bj;},_Mark:function(D){var A;C.J4._Mark.call(this,D);if((
A=this.IC)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"
};C.J4={FZ:function(T){B.we(this,0);},_Init:function(aArg){this.__proto__=C.J4;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:
0,_observers:null,_className:"WidgetSet::WidgetConfig"};C.Aj={DM:null,Cu:null,Ac:
null,BZ:null,Y:null,DR:null,Do:null,BF:null,IB:B.jV,MI:0,JE:-1,JH:-1,JG:-1,JF:-1
,S8:0,Nf:false,J:function(E){var A;if(!!this.BZ){var NE=[E[2]-E[0],E[3]-E[1]];var
GD=NE;if(GD[0]<this.BZ.If[0])GD=[this.BZ.If[0],GD[1]];if(GD[1]<this.BZ.If[1])GD=[
GD[0],this.BZ.If[1]];var Dz=B.abe(GD,NE);if(!!Dz[0]){var C$=((this.E0&0x4)===0x4
);var Da=((this.E0&0x8)===0x8);if(C$&&!Da)E=B.abN(E,E[2]+Dz[0]);else if(!C$&&Da)
E=[].concat(E[0]-Dz[0],E.slice(1,4));else{E=[].concat(E[0]-((Dz[0]/2)|0),E.slice(
1,4));E=B.abN(E,E[0]+GD[0]);}}if(!!Dz[1]){var Db=((this.E0&0x10)===0x10);var C_=((
this.E0&0x20)===0x20);if(Db&&!C_)E=[].concat(E.slice(0,3),E[3]+Dz[1]);else if(!Db&&
C_)E=B.abP(E,E[1]-Dz[1]);else{E=B.abP(E,E[1]-((Dz[1]/2)|0));E=[].concat(E.slice(
0,3),E[1]+GD[1]);}}}B.Core.K.J.call(this,E);},LX:function(J9){var A;B.Core.K.LX.
call(this,J9);var NN=!!this.Ac;var NO=(!!this.BZ&&!!this.IB)&&!!this.BZ.IC;var Ag=[
0,0,(A=this.U)[2]-A[0],A[3]-A[1]];var GC;if(NN&&!!!this.Cu){this.Cu=B._NewObject(
B.ach.AA,0);this.S(this.Cu,0);}else if(!NN&&!!this.Cu){this.IO(this.Cu);this.Cu=
null;}if(NO&&!!!this.DM){this.DM=B._NewObject(B.ach.Text,0);this.S(this.DM,0);this.
DM.OL(true);}else if(!NO&&!!this.DM){this.IO(this.DM);this.DM=null;}if(!((J9&0x10
)===0x10))GC=0x44;else if(((this.BF.Down&&this.BF.GR)||this.Do.Down)||this.DR.A8
)GC=0x41;else if(((J9&0x40)===0x40))GC=0x46;else GC=0x45;this.S8=GC;if(!!this.Cu&&
!!this.BZ){var Es;var Fn;switch(GC){case 0x44:Es=this.JG;break;case 0x41:Es=this.
JE;break;case 0x46:Es=this.JH;break;default:Es=this.JF;}switch(GC){case 0x44:Fn=
this.BZ.K9;break;case 0x41:Fn=this.BZ.K7;break;case 0x46:Fn=this.BZ.K_;break;default:
Fn=this.BZ.K8;}this.Cu.Lt(Es<0);if(Es<0)Es=0;this.Cu.J([Ag[0],Ag[1],Ag[2],Ag[3]]
);this.Cu.JO(0x12);this.Cu.Bf(this.Ac);this.Cu.M_(Es);this.Cu.A$(Fn);this.Cu.W(59
);}else if(!!this.Cu){var Es;switch(GC){case 0x44:Es=this.JG;break;case 0x41:Es=
this.JE;break;case 0x46:Es=this.JH;break;default:Es=this.JF;}this.Cu.J(Ag);this.
Cu.JO(0x12);this.Cu.Bf(this.Ac);this.Cu.M_(Es);this.Cu.A$(0xFFFFFFFF);this.Cu.W(
59);}if(!!this.DM){var Fn;switch(GC){case 0x44:Fn=this.BZ.Le;break;case 0x41:Fn=
this.BZ.Lc;break;case 0x46:Fn=this.BZ.Lf;break;default:Fn=this.BZ.Ld;}this.DM.J([
Ag[0],Ag[1],Ag[2],Ag[3]]);this.DM.JO(0x12);this.DM.OP(true);this.DM.OK(true);this.
DM.Ba(this.BZ.IC);this.DM.Au(this.IB);this.DM.A$(Fn);this.DM.W(76);}this.ExtendClipping(
0,0,0,0);},MG:function(T){var NP=this.Do.FB;this.Do.FB=149;if(!NP&&!!this.Do.FB)
this.AM(0x4,0x0);if(!!NP&&!this.Do.FB)this.AM(0x0,0x4);if(!!this.BZ)this.J(this.
U);this.EB();},SZ:function(T){this.EB();},S6:function(T){var HV=0;if(!!this.BZ)HV=
50;this.BF.L(true);this.EB();if(!(((this.Do.A1-this.MI)|0)>=HV)){this.DR.Bm(HV-((
this.Do.A1-this.MI)|0));this.DR.L(true);}},S4:function(T){this.BF.L(false);this.
EB();if(this.DR.A8)this.DR.L(false);this.MI=this.Do.A1;B.pe(this.Y,this);},S1:function(
T){this.EB();},SY:function(T){this.EB();},S7:function(T){var HV=0;if(!!this.BZ)HV=
50;this.Do.A8=true;if(!this.BF.GR)return;if(this.BF.EU)return;if(!(this.BF.C3>=HV
)){this.DR.Bm(HV-this.BF.C3);this.DR.L(true);}},S5:function(T){this.Do.A8=false;
if(this.DR.A8)this.DR.L(false);B.pe(this.Y,this);},ON:function(E){if(this.Nf===E
)return;this.Nf=E;if(E)this.BF.E4=this.BF.E4|0xC;else this.BF.E4=this.BF.E4&~0xC;
},Lu:function(E){if(this.JE===E)return;this.JE=E;this.EB();},Lx:function(E){if(this.
JH===E)return;this.JH=E;this.EB();},Lw:function(E){if(this.JG===E)return;this.JG=
E;this.EB();},Lv:function(E){if(this.JF===E)return;this.JF=E;this.EB();},I:function(
E){if(this.Ac===E)return;this.Ac=E;this.EB();},Ao:function(E){if(this.IB===E)return;
this.IB=E;this.EB();},An:function(E){if(this.BZ===E)return;if(!!this.BZ)B.z9([this
,this.MG],this.BZ,0);this.BZ=E;if(!!E)B.zV([this,this.MG],E,0);B.pe([this,this.MG
],this);},_Init:function(aArg){B.Core.K._Init.call(this,aArg);B.Core.Timer._Init.
call(this.DR={H:this},0);B.Core.Gi._Init.call(this.Do={H:this},0);B.Core.LO._Init.
call(this.BF={H:this},0);this.__proto__=C.Aj;this.J(Bg);this.DR.Bt(0);this.DR.Bm(
50);this.Do.FB=149;this.BF.IF(0x3F);this.BF.LB(AW);this.BF.LA(D_);this.BF.Lz(En);
this.BF.Ly(FL);this.BF.OO(16);this.BF.OM(100);this.S(this.BF,0);this.DR.Bi=[this
,this.SZ];this.Do.Hy=[this,this.S6];this.Do.Y=[this,this.S4];this.BF.Lp=[this,this.
S1];this.BF.Lo=[this,this.SY];this.BF.Hy=[this,this.S7];this.BF.Y=[this,this.S5];
},_Done:function(){this.__proto__=B.Core.K;this.DR._Done();this.Do._Done();this.
BF._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.call(
this);this.DR._ReInit();this.Do._ReInit();this.BF._ReInit();},_Mark:function(D){
var A;B.Core.K._Mark.call(this,D);if((A=this.DM)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Cu)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ac)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.BZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Y)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.DR)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.Do)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BF)._cycle!=D)
A._Mark(A._cycle=D);},_className:"WidgetSet::PushButton"};
C._Init=function(){C.Bj.__proto__=C.J4;C.Aj.__proto__=B.Core.K;};C._ReInit=function(
){};C.D$=function(D){};return C;})();

/* Embedded Wizard */