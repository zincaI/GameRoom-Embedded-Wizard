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
var AR=[0,0,150,50];var Bz=[0,50];var Em=[150,50];var Gr=[150,0];var FI=[0,0];
C.Bf={IF:null,Lk:0xFF000000,Ln:0xFF000000,Lm:0xFF000000,Ll:0xFF000000,Ld:0xFFFFFFFF
,Lg:0xFFFFFFFF,Lf:0xFFFFFFFF,Le:0xFFFFFFFF,Ik:B.wf,J0:function(E){if(this.Lk===E
)return;this.Lk=E;B.pe([this,this.FW],this);},J3:function(E){if(this.Ln===E)return;
this.Ln=E;B.pe([this,this.FW],this);},J2:function(E){if(this.Lm===E)return;this.
Lm=E;B.pe([this,this.FW],this);},J1:function(E){if(this.Ll===E)return;this.Ll=E;
B.pe([this,this.FW],this);},JW:function(E){if(this.Ld===E)return;this.Ld=E;B.pe([
this,this.FW],this);},JZ:function(E){if(this.Lg===E)return;this.Lg=E;B.pe([this,
this.FW],this);},JY:function(E){if(this.Lf===E)return;this.Lf=E;B.pe([this,this.
FW],this);},JX:function(E){if(this.Le===E)return;this.Le=E;B.pe([this,this.FW],this
);},J4:function(E){if(this.IF===E)return;this.IF=E;B.pe([this,this.FW],this);},LH:
function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(B.aaX(this.Ik,E))return;
this.Ik=E;B.pe([this,this.FW],this);},_Init:function(aArg){C.Ka._Init.call(this,
aArg);this.__proto__=C.Bf;},_Mark:function(D){var A;C.Ka._Mark.call(this,D);if((
A=this.IF)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"
};C.Ka={FW:function(T){B.we(this,0);},_Init:function(aArg){this.__proto__=C.Ka;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:
0,_observers:null,_className:"WidgetSet::WidgetConfig"};C.Ae={DE:null,Ct:null,Ab:
null,B1:null,X:null,DI:null,Dp:null,BI:null,IE:B.jV,MK:0,JG:-1,JJ:-1,JI:-1,JH:-1
,SS:0,Ni:false,J:function(E){var A;if(!!this.B1){var ND=[E[2]-E[0],E[3]-E[1]];var
GB=ND;if(GB[0]<this.B1.Ik[0])GB=[this.B1.Ik[0],GB[1]];if(GB[1]<this.B1.Ik[1])GB=[
GB[0],this.B1.Ik[1]];var Dy=B.abe(GB,ND);if(!!Dy[0]){var C9=((this.EZ&0x4)===0x4
);var C_=((this.EZ&0x8)===0x8);if(C9&&!C_)E=B.abN(E,E[2]+Dy[0]);else if(!C9&&C_)
E=[].concat(E[0]-Dy[0],E.slice(1,4));else{E=[].concat(E[0]-((Dy[0]/2)|0),E.slice(
1,4));E=B.abN(E,E[0]+GB[0]);}}if(!!Dy[1]){var C$=((this.EZ&0x10)===0x10);var C8=((
this.EZ&0x20)===0x20);if(C$&&!C8)E=[].concat(E.slice(0,3),E[3]+Dy[1]);else if(!C$&&
C8)E=B.abP(E,E[1]-Dy[1]);else{E=B.abP(E,E[1]-((Dy[1]/2)|0));E=[].concat(E.slice(
0,3),E[1]+GB[1]);}}}B.Core.K.J.call(this,E);},L0:function(Kh){var A;B.Core.K.L0.
call(this,Kh);var NM=!!this.Ab;var NN=(!!this.B1&&!!this.IE)&&!!this.B1.IF;var Ag=[
0,0,(A=this.U)[2]-A[0],A[3]-A[1]];var GA;if(NM&&!!!this.Ct){this.Ct=B._NewObject(
B.ach.AD,0);this.S(this.Ct,0);}else if(!NM&&!!this.Ct){this.IR(this.Ct);this.Ct=
null;}if(NN&&!!!this.DE){this.DE=B._NewObject(B.ach.Text,0);this.S(this.DE,0);this.
DE.OG(true);}else if(!NN&&!!this.DE){this.IR(this.DE);this.DE=null;}if(!((Kh&0x10
)===0x10))GA=0x44;else if(((this.BI.Down&&this.BI.GL)||this.Dp.Down)||this.DI.A7
)GA=0x41;else if(((Kh&0x40)===0x40))GA=0x46;else GA=0x45;this.SS=GA;if(!!this.Ct&&
!!this.B1){var Er;var Fl;switch(GA){case 0x44:Er=this.JI;break;case 0x41:Er=this.
JG;break;case 0x46:Er=this.JJ;break;default:Er=this.JH;}switch(GA){case 0x44:Fl=
this.B1.Lf;break;case 0x41:Fl=this.B1.Ld;break;case 0x46:Fl=this.B1.Lg;break;default:
Fl=this.B1.Le;}this.Ct.Lz(Er<0);if(Er<0)Er=0;this.Ct.J([Ag[0],Ag[1],Ag[2],Ag[3]]
);this.Ct.JV(0x12);this.Ct.Bn(this.Ab);this.Ct.Nc(Er);this.Ct.A$(Fl);this.Ct.Ax(
59);}else if(!!this.Ct){var Er;switch(GA){case 0x44:Er=this.JI;break;case 0x41:Er=
this.JG;break;case 0x46:Er=this.JJ;break;default:Er=this.JH;}this.Ct.J(Ag);this.
Ct.JV(0x12);this.Ct.Bn(this.Ab);this.Ct.Nc(Er);this.Ct.A$(0xFFFFFFFF);this.Ct.Ax(
59);}if(!!this.DE){var Fl;switch(GA){case 0x44:Fl=this.B1.Lm;break;case 0x41:Fl=
this.B1.Lk;break;case 0x46:Fl=this.B1.Ln;break;default:Fl=this.B1.Ll;}this.DE.J([
Ag[0],Ag[1],Ag[2],Ag[3]]);this.DE.JV(0x12);this.DE.OK(true);this.DE.OF(true);this.
DE.Ba(this.B1.IF);this.DE.At(this.IE);this.DE.A$(Fl);this.DE.Ax(76);}this.ExtendClipping(
0,0,0,0);},MI:function(T){var NO=this.Dp.FA;this.Dp.FA=149;if(!NO&&!!this.Dp.FA)
this.AH(0x4,0x0);if(!!NO&&!this.Dp.FA)this.AH(0x0,0x4);if(!!this.B1)this.J(this.
U);this.Ez();},SJ:function(T){this.Ez();},SQ:function(T){var HU=0;if(!!this.B1)HU=
50;this.BI.L(true);this.Ez();if(!(((this.Dp.A8-this.MK)|0)>=HU)){this.DI.Bm(HU-((
this.Dp.A8-this.MK)|0));this.DI.L(true);}},SO:function(T){this.BI.L(false);this.
Ez();if(this.DI.A7)this.DI.L(false);this.MK=this.Dp.A8;B.pe(this.X,this);},SL:function(
T){this.Ez();},SI:function(T){this.Ez();},SR:function(T){var HU=0;if(!!this.B1)HU=
50;this.Dp.A7=true;if(!this.BI.GL)return;if(this.BI.EU)return;if(!(this.BI.CU>=HU
)){this.DI.Bm(HU-this.BI.CU);this.DI.L(true);}},SP:function(T){this.Dp.A7=false;
if(this.DI.A7)this.DI.L(false);B.pe(this.X,this);},OI:function(E){if(this.Ni===E
)return;this.Ni=E;if(E)this.BI.E3=this.BI.E3|0xC;else this.BI.E3=this.BI.E3&~0xC;
},Ia:function(E){if(this.JG===E)return;this.JG=E;this.Ez();},Id:function(E){if(this.
JJ===E)return;this.JJ=E;this.Ez();},Ic:function(E){if(this.JI===E)return;this.JI=
E;this.Ez();},Ib:function(E){if(this.JH===E)return;this.JH=E;this.Ez();},H:function(
E){if(this.Ab===E)return;this.Ab=E;this.Ez();},Ak:function(E){if(this.IE===E)return;
this.IE=E;this.Ez();},Aj:function(E){if(this.B1===E)return;if(!!this.B1)B.z9([this
,this.MI],this.B1,0);this.B1=E;if(!!E)B.zV([this,this.MI],E,0);B.pe([this,this.MI
],this);},_Init:function(aArg){B.Core.K._Init.call(this,aArg);B.Core.Timer._Init.
call(this.DI={I:this},0);B.Core.Ge._Init.call(this.Dp={I:this},0);B.Core.LS._Init.
call(this.BI={I:this},0);this.__proto__=C.Ae;this.J(AR);this.DI.By(0);this.DI.Bm(
50);this.Dp.FA=149;this.BI.II(0x3F);this.BI.LD(Bz);this.BI.LC(Em);this.BI.LB(Gr);
this.BI.LA(FI);this.BI.OJ(16);this.BI.OH(100);this.S(this.BI,0);this.DI.Bk=[this
,this.SJ];this.Dp.Hv=[this,this.SQ];this.Dp.X=[this,this.SO];this.BI.Lv=[this,this.
SL];this.BI.Lu=[this,this.SI];this.BI.Hv=[this,this.SR];this.BI.X=[this,this.SP];
},_Done:function(){this.__proto__=B.Core.K;this.DI._Done();this.Dp._Done();this.
BI._Done();B.Core.K._Done.call(this);},_ReInit:function(){B.Core.K._ReInit.call(
this);this.DI._ReInit();this.Dp._ReInit();this.BI._ReInit();},_Mark:function(D){
var A;B.Core.K._Mark.call(this,D);if((A=this.DE)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Ct)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.B1)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
X)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.DI)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.Dp)._cycle!=D)A._Mark(A._cycle=D);if((A=this.BI)._cycle!=D)
A._Mark(A._cycle=D);},_className:"WidgetSet::PushButton"};
C._Init=function(){C.Bf.__proto__=C.Ka;C.Ae.__proto__=B.Core.K;};C._ReInit=function(
){};C.D$=function(D){};return C;})();

/* Embedded Wizard */