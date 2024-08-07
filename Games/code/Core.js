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
);if(EmWiApp.Core)throw new Error("The unit file 'Core.js' included twice!");EmWiApp.
Core=(function(){var B=EmWiApp;var C={};
var Bg=[0,0];var AW=[0,0,0,0];var D_="The view does not belong to this group";var
En=[800,480];var FL="The dialog component is already presented";var IV="The dialog component is actually not presented";
var G$="No fader to perform the fade-in/out operation";var L0="Trying to use the same fader twice";
var Ha="Trying to fade-in/out a group which belongs to another owner";var J5="No view to restack";
var FM="View is not in this group";var L1="No view to remove";var L2="No view to add";
var L3="View already in a group";var L4="Recursive invalidate during active update cycle.";
var IW=[-8,-8,9,9];var L5=[0,0,1,1];var L6="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var L7="Trying to cancel a task not belonging to this queue!";
var L8="Trying to enqueue a task twice!";
C.C9={X:null,Ab:null,G:null,Bh:null,F:0x103,El:0,E0:0x14,Ja:function(Ap,J7){},W:function(
E){if(this.El===E)return;this.El=E;if(!!this.G){var GG=this.X;var Dz=0;while(!!GG&&(
E>GG.El)){GG=GG.X;Dz=Dz+1;}GG=this.Ab;while(!!GG&&(E<GG.El)){GG=GG.Ab;Dz=Dz-1;}if(
!!Dz)this.G.FH(this,Dz);}},IF:function(E){var A;var Dz=E^this.E0;if(!Dz)return;this.
E0=E;if(!!this.Bh&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.pe([A=this.
G,A.Dh],this);this.G.Ay([0,0,(A=this.G.U)[2]-A[0],A[3]-A[1]]);}if(!!this.Bh&&((this.
F&0x400)===0x400)){this.Bh.HR.F=this.Bh.HR.F|0x1000;this.G.F=this.G.F|0x4000;B.pe([
A=this.G,A.Dh],this);}},C2:function(){var Ar=this.G;while(!!Ar){var Fw=(C.Root.isPrototypeOf(
Ar)?Ar:null);if(!!Fw)return Fw;Ar=Ar.G;}return null;},Fd:function(BE,aClip,aOffset
,aOpacity,aBlend){},GetClipping:function(){return this.GetExtent();},Cf:function(
AS){return null;},Ht:function(AD,Aa,DX,HF,Gw,HK){return null;},Jv:function(AD){return AD;
},Jx:function(Ap,Ep){return Bg;},Ll:function(aOffset,J6){},GetExtent:function(){
return AW;},AM:function(DW,Eo){var A;if(((this.F&0x200)===0x200))DW=DW&~0x400;var
MD=(this.F&~Eo)|DW;var EN=MD^this.F;this.F=MD;if(!!this.G&&!!(EN&0x14)){var NI=((
this.F&0x14)===0x14);if(NI&&!this.G.C1)this.G.Ek(this);if(!NI&&(this.G.C1===this
))this.G.Ek(this.G.MX(this,0x14));}if(!!this.G&&!!(EN&0x403))this.G.Ay(this.GetClipping(
));if(((!!this.Bh&&!!this.G)&&((MD&0x400)===0x400))&&((EN&0x1)===0x1)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Dh],this);}if(!!this.G&&((EN&0x400
)===0x400)){this.Bh=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.Dh],this);}if(((((EN&0x100000)===0x100000)&&((Eo&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.AM(0x0,0x10);if(((((EN&0x100000
)===0x100000)&&((DW&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.G)&&((this.G.F&0x10)===
0x10))))this.AM(0x10,0x0);if(((((EN&0x200000)===0x200000)&&((Eo&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.AM(0x10,0x0);if((((((
EN&0x200000)===0x200000)&&((DW&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.G&&!((this.G.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.G)&&(this.G.AX.AE!==this))))this.AM(0x0,0x10);},_Init:
function(aArg){this.__proto__=C.C9;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.X)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Ab)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bh)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::View"};C.IN={Cn:B.wf,C7:B.wf,Cm:B.wf,C6:B.wf,Ja:function(
Ap,J7){var Aq=B._NewObject(C.JL,0);this.Bh=null;Aq.DD=this.GetExtent();Aq.Am=Ap;
Aq.HR=J7;Aq.Jm=this.C6;Aq.Jn=this.Cm;Aq.Jo=this.C7;Aq.Jp=this.Cn;this.Bh=Aq;},Jx:
function(Ap,Ep){var A;var B4=this.E0;var Aq=(C.JL.isPrototypeOf(A=this.Bh)?A:null
);var Ah=Aq.DD[0];var Ai=Aq.DD[1];var Ak=Aq.DD[2];var Al=Aq.DD[3];var DB=[Ap[2]-
Ap[0],Ap[3]-Ap[1]];var AL=Ak-Ah;var AJ=Al-Ai;if(!Ep){var ES=[(A=Aq.Am)[2]-A[0],A[
3]-A[1]];Ah=Ah-Aq.Am[0];Ai=Ai-Aq.Am[1];if(ES[0]!==DB[0]){var C$=((B4&0x4)===0x4);
var Da=((B4&0x8)===0x8);var Fu=((B4&0x1)===0x1);if(!C$&&(Fu||!Da))Ah=((Ah*DB[0])
/ES[0])|0;if(!Da&&(Fu||!C$)){Ak=Ak-Aq.Am[0];Ak=((Ak*DB[0])/ES[0])|0;Ak=Ak-DB[0];
}else Ak=Ak-Aq.Am[2];Ah=Ah+Ap[0];Ak=Ak+Ap[2];if(!Fu){if(C$&&!Da)Ak=Ah+AL;else if(
!C$&&Da)Ah=Ak-AL;else{Ah=Ah+((((Ak-Ah)-AL)/2)|0);Ak=Ah+AL;}}}else{Ak=Ak-Aq.Am[2];
Ah=Ah+Ap[0];Ak=Ak+Ap[2];}if(ES[1]!==DB[1]){var Db=((B4&0x10)===0x10);var C_=((B4&
0x20)===0x20);var Fv=((B4&0x2)===0x2);if(!Db&&(Fv||!C_))Ai=((Ai*DB[1])/ES[1])|0;
if(!C_&&(Fv||!Db)){Al=Al-Aq.Am[1];Al=((Al*DB[1])/ES[1])|0;Al=Al-DB[1];}else Al=Al-
Aq.Am[3];Ai=Ai+Ap[1];Al=Al+Ap[3];if(!Fv){if(Db&&!C_)Al=Ai+AJ;else if(!Db&&C_)Ai=
Al-AJ;else{Ai=Ai+((((Al-Ai)-AJ)/2)|0);Al=Ai+AJ;}}}else{Al=Al-Aq.Am[3];Ai=Ai+Ap[1
];Al=Al+Ap[3];}}else{switch(Ep){case 3:{Ah=Ap[0];Ak=Ah+AL;}break;case 4:{Ak=Ap[2
];Ah=Ak-AL;}break;case 1:{Ai=Ap[1];Al=Ai+AJ;}break;case 2:{Al=Ap[3];Ai=Al-AJ;}break;
default:;}if((Ep===3)||(Ep===4)){var Db=((B4&0x10)===0x10);var C_=((B4&0x20)===0x20
);var Fv=((B4&0x2)===0x2);if(Fv){Ai=Ap[1];Al=Ap[3];}else if(Db&&!C_){Ai=Ap[1];Al=
Ai+AJ;}else if(C_&&!Db){Al=Ap[3];Ai=Al-AJ;}else{Ai=Ap[1]+((((Ap[3]-Ap[1])-AJ)/2)|
0);Al=Ai+AJ;}}if((Ep===1)||(Ep===2)){var C$=((B4&0x4)===0x4);var Da=((B4&0x8)===
0x8);var Fu=((B4&0x1)===0x1);if(Fu){Ah=Ap[0];Ak=Ap[2];}else if(C$&&!Da){Ah=Ap[0];
Ak=Ah+AL;}else if(Da&&!C$){Ak=Ap[2];Ah=Ak-AL;}else{Ah=Ap[0]+((((Ap[2]-Ap[0])-AL)
/2)|0);Ak=Ah+AL;}}}Aq.isEmpty=(Ah>=Ak)||(Ai>=Al);AL=(Ak-Ah)-1;AJ=(Al-Ai)-1;var Gz=
Aq.DD[0];var GA=Aq.DD[1];var FV=(Aq.DD[2]-Gz)-1;var FU=(Aq.DD[3]-GA)-1;if(!FV)FV=
1;if(!FU)FU=1;if(((this.F&0x100)===0x100)){this.C6=[Ah+((((Aq.Jm[0]-Gz)*AL)/FV)|
0),Ai+((((Aq.Jm[1]-GA)*AJ)/FU)|0)];this.Cm=[Ah+((((Aq.Jn[0]-Gz)*AL)/FV)|0),Ai+((((
Aq.Jn[1]-GA)*AJ)/FU)|0)];this.C7=[Ah+((((Aq.Jo[0]-Gz)*AL)/FV)|0),Ai+((((Aq.Jo[1]-
GA)*AJ)/FU)|0)];this.Cn=[Ah+((((Aq.Jp[0]-Gz)*AL)/FV)|0),Ai+((((Aq.Jp[1]-GA)*AJ)/
FU)|0)];}else{this.Ly([Ah+((((Aq.Jm[0]-Gz)*AL)/FV)|0),Ai+((((Aq.Jm[1]-GA)*AJ)/FU
)|0)]);this.Lz([Ah+((((Aq.Jn[0]-Gz)*AL)/FV)|0),Ai+((((Aq.Jn[1]-GA)*AJ)/FU)|0)]);
this.LA([Ah+((((Aq.Jo[0]-Gz)*AL)/FV)|0),Ai+((((Aq.Jo[1]-GA)*AJ)/FU)|0)]);this.LB([
Ah+((((Aq.Jp[0]-Gz)*AL)/FV)|0),Ai+((((Aq.Jp[1]-GA)*AJ)/FU)|0)]);this.Bh=Aq;}return[
AL+1,AJ+1];},Ll:function(aOffset,J6){if(J6){this.C6=B.abf(this.C6,aOffset);this.
Cm=B.abf(this.Cm,aOffset);this.C7=B.abf(this.C7,aOffset);this.Cn=B.abf(this.Cn,aOffset
);}else{this.Ly(B.abf(this.C6,aOffset));this.Lz(B.abf(this.Cm,aOffset));this.LA(
B.abf(this.C7,aOffset));this.LB(B.abf(this.Cn,aOffset));}},GetExtent:function(){
if(!!this.Bh&&this.Bh.isEmpty)return AW;var Ah=this.C6[0];var Ai=this.C6[1];var Ak=
this.C7[0];var Al=this.C7[1];if((((this.Cn[0]!==Ah)||(this.Cm[1]!==Ai))||(this.Cm[
0]!==Ak))||(this.Cn[1]!==Al)){if(this.Cm[0]<Ah)Ah=this.Cm[0];if(this.C7[0]<Ah)Ah=
this.C7[0];if(this.Cn[0]<Ah)Ah=this.Cn[0];if(this.Cm[1]<Ai)Ai=this.Cm[1];if(this.
C7[1]<Ai)Ai=this.C7[1];if(this.Cn[1]<Ai)Ai=this.Cn[1];if(this.C6[0]>Ak)Ak=this.C6[
0];if(this.Cm[0]>Ak)Ak=this.Cm[0];if(this.Cn[0]>Ak)Ak=this.Cn[0];if(this.C6[1]>Al
)Al=this.C6[1];if(this.Cm[1]>Al)Al=this.Cm[1];if(this.Cn[1]>Al)Al=this.Cn[1];}else{
var tmp;if(Ak<Ah){tmp=Ah;Ah=Ak;Ak=tmp;}if(Al<Ai){tmp=Ai;Ai=Al;Al=tmp;}}return[Ah
,Ai,Ak+1,Al+1];},LB:function(E){var A;if(B.aaX(E,this.Cn))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ay(this.GetClipping());this.Bh=null;this.Cn=E;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.Dh],this);}},LA:function(E){var A;if(B.aaX(E,this.C7))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping());this.Bh=null;
this.C7=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping());if((!!
this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Dh],this);}},Lz:function(E){var A;
if(B.aaX(E,this.Cm))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping(
));this.Bh=null;this.Cm=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Dh],this);}},Ly:function(
E){var A;if(B.aaX(E,this.C6))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(
this.GetClipping());this.Bh=null;this.C6=E;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ay(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Dh],this
);}},Lb:function(Fl){var Bq=B.abi(4,B.wf,null);var N=0;var AK=3;var Mu=false;var
Mv=false;Bq.Set(0,this.C6);Bq.Set(1,this.Cm);Bq.Set(2,this.C7);Bq.Set(3,this.Cn);
while(N<4){var N0=Bq.Get(N)[0];var KA=Bq.Get(N)[1];var Tf=Bq.Get(AK)[0];var MQ=Bq.
Get(AK)[1];if(((KA>Fl[1])!==(MQ>Fl[1]))||((KA<Fl[1])!==(MQ<Fl[1]))){var B5=((((Tf-
N0)*(Fl[1]-KA))/(MQ-KA))|0)+N0;if(Fl[0]>B5)Mu=!Mu;if(Fl[0]<B5)Mv=!Mv;}AK=N;N=N+1;
}return Mu||Mv;},OA:function(){return((((this.C6[0]===this.Cn[0])&&(this.Cm[0]===
this.C7[0]))&&(this.C6[1]===this.Cm[1]))&&(this.C7[1]===this.Cn[1]))||((((this.C6[
0]===this.Cm[0])&&(this.C7[0]===this.Cn[0]))&&(this.C6[1]===this.Cn[1]))&&(this.
Cm[1]===this.C7[1]));},_Init:function(aArg){C.C9._Init.call(this,aArg);this.__proto__=
C.IN;},_className:"Core::QuadView"};C.B_={U:B.wg,Ja:function(Ap,J7){var Aq=B._NewObject(
C.JK,0);Aq.DD=this.U;Aq.Am=Ap;Aq.HR=J7;this.Bh=Aq;},Jx:function(Ap,Ep){var A;var
B4=this.E0;var Aq=this.Bh;var Ah=Aq.DD[0];var Ai=Aq.DD[1];var Ak=Aq.DD[2];var Al=
Aq.DD[3];var DB=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var AL=Ak-Ah;var AJ=Al-Ai;if(!Ep){var ES=[(
A=Aq.Am)[2]-A[0],A[3]-A[1]];Ah=Ah-Aq.Am[0];Ai=Ai-Aq.Am[1];if(ES[0]!==DB[0]){var C$=((
B4&0x4)===0x4);var Da=((B4&0x8)===0x8);var Fu=((B4&0x1)===0x1);if(!C$&&(Fu||!Da)
)Ah=((Ah*DB[0])/ES[0])|0;if(!Da&&(Fu||!C$)){Ak=Ak-Aq.Am[0];Ak=((Ak*DB[0])/ES[0])|
0;Ak=Ak-DB[0];}else Ak=Ak-Aq.Am[2];Ah=Ah+Ap[0];Ak=Ak+Ap[2];if(!Fu){if(C$&&!Da)Ak=
Ah+AL;else if(!C$&&Da)Ah=Ak-AL;else{Ah=Ah+((((Ak-Ah)-AL)/2)|0);Ak=Ah+AL;}}}else{
Ak=Ak-Aq.Am[2];Ah=Ah+Ap[0];Ak=Ak+Ap[2];}if(ES[1]!==DB[1]){var Db=((B4&0x10)===0x10
);var C_=((B4&0x20)===0x20);var Fv=((B4&0x2)===0x2);if(!Db&&(Fv||!C_))Ai=((Ai*DB[
1])/ES[1])|0;if(!C_&&(Fv||!Db)){Al=Al-Aq.Am[1];Al=((Al*DB[1])/ES[1])|0;Al=Al-DB[
1];}else Al=Al-Aq.Am[3];Ai=Ai+Ap[1];Al=Al+Ap[3];if(!Fv){if(Db&&!C_)Al=Ai+AJ;else
if(!Db&&C_)Ai=Al-AJ;else{Ai=Ai+((((Al-Ai)-AJ)/2)|0);Al=Ai+AJ;}}}else{Al=Al-Aq.Am[
3];Ai=Ai+Ap[1];Al=Al+Ap[3];}}else{switch(Ep){case 3:{Ah=Ap[0];Ak=Ah+AL;}break;case
4:{Ak=Ap[2];Ah=Ak-AL;}break;case 1:{Ai=Ap[1];Al=Ai+AJ;}break;case 2:{Al=Ap[3];Ai=
Al-AJ;}break;default:;}if((Ep===3)||(Ep===4)){var Db=((B4&0x10)===0x10);var C_=((
B4&0x20)===0x20);var Fv=((B4&0x2)===0x2);if(Fv){Ai=Ap[1];Al=Ap[3];}else if(Db&&!
C_){Ai=Ap[1];Al=Ai+AJ;}else if(C_&&!Db){Al=Ap[3];Ai=Al-AJ;}else{Ai=Ap[1]+((((Ap[
3]-Ap[1])-AJ)/2)|0);Al=Ai+AJ;}}if((Ep===1)||(Ep===2)){var C$=((B4&0x4)===0x4);var
Da=((B4&0x8)===0x8);var Fu=((B4&0x1)===0x1);if(Fu){Ah=Ap[0];Ak=Ap[2];}else if(C$&&
!Da){Ah=Ap[0];Ak=Ah+AL;}else if(Da&&!C$){Ak=Ap[2];Ah=Ak-AL;}else{Ah=Ap[0]+((((Ap[
2]-Ap[0])-AL)/2)|0);Ak=Ah+AL;}}}Aq.isEmpty=(Ah>=Ak)||(Ai>=Al);if(((this.F&0x100)===
0x100))this.U=[Ah,Ai,Ak,Al];else{this.J([Ah,Ai,Ak,Al]);this.Bh=Aq;}return[Ak-Ah,
Al-Ai];},Ll:function(aOffset,J6){if(J6)this.U=B.abh(this.U,aOffset);else this.J(
B.abh(this.U,aOffset));},GetExtent:function(){return this.U;},J:function(E){var A;
if(B.aaY(E,this.U))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping(
));this.Bh=null;this.U=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Dh],this);}},_Init:function(
aArg){C.C9._Init.call(this,aArg);this.__proto__=C.B_;},_className:"Core::RectView"
};C.K={AR:null,AV:null,Kl:null,AX:null,EO:null,HT:null,C1:null,BR:255,I7:0,I_:0,
I9:0,I8:0,AZ:function(aArg){this.EB();},Fd:function(BE,aClip,aOffset,aOpacity,aBlend
){var A;aOpacity=((aOpacity+1)*this.BR)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.
SP(BE,aClip,B.abf(aOffset,this.U.slice(0,2)),aOpacity,aBlend);},GetClipping:function(
){var A;var Z=this.U;Z=[].concat(Z[0]-this.I8,Z.slice(1,4));Z=B.abP(Z,Z[1]-this.
I_);Z=B.abN(Z,Z[2]+this.I9);Z=[].concat(Z.slice(0,3),Z[3]+this.I7);if(((this.F&0x80000
)===0x80000)){var HX=AW;var O;for(O=this.AR;!!O;O=O.X)if(((O.F&0x1)===0x1))HX=B.
wC(HX,O.GetClipping());Z=B.wC(Z,B.abh(HX,this.U.slice(0,2)));}return Z;},Ht:function(
AD,Aa,DX,HF,Gw,HK){var A;var O=this.AV;var HP=null;var Ag=AW;var D2=null;var MA=
!!this.EO&&(!!this.EO.DZ||!!this.EO.AR);if(((A=B.lb(AD,this.U))[0]>=A[2])||(A[1]>=
A[3]))return null;AD=B.abg(AD,this.U.slice(0,2));if(!!Gw){O=Gw;while(!!O&&(O.G!==
this))O=O.G;}while(!!O){if(((O.F&0x400)===0x400)&&!D2){D2=O.Ab;while(!!D2&&!((D2.
F&0x200)===0x200))D2=D2.Ab;if(!!D2)Ag=B.lb(AD,D2.GetExtent());else Ag=AW;}if(D2===
O){D2=null;Ag=AW;}if((!!HF&&!!(C.K.isPrototypeOf(O)?O:null))||((((((O.F&0x8)===0x8
)&&((O.F&0x10)===0x10))&&!((O.F&0x40000)===0x40000))&&!((O.F&0x20000)===0x20000)
)&&(!((O.F&0x10000)===0x10000)||((this.AX.AE===O)&&!MA)))){var DD=O.GetExtent();
var Ke=HF;var HO=null;if(Ke===O)Ke=null;if(((O.F&0x400)===0x400)){if(!(((A=B.lb(
DD,Ag))[0]>=A[2])||(A[1]>=A[3])))HO=O.Ht(Ag,Aa,DX,Ke,Gw,HK);}else if(!(((A=B.lb(
DD,AD))[0]>=A[2])||(A[1]>=A[3]))||(HF===O))HO=O.Ht(AD,Aa,DX,Ke,Gw,HK);O=O.Ab;if(
!!HO){if(!HP||((HO.Is<HP.Is)&&(HO.Is>=0)))HP=HO;if(!HO.Is)O=null;}}else O=O.Ab;Gw=
null;}return HP;},Jv:function(AD){var A;var FN;var O=this.AR;var HM=AW;var Jl=true;
var result=(AD=FN=B.abg(AD,this.U.slice(0,2)),FN);while(!!O){if(((O.F&0x200)===0x200
)){var Im=(C.IM.isPrototypeOf(O)?O:null);HM=B.lb(AD,Im.U);Jl=((Im.F&0x1)===0x1);
}if(((O.F&0x1)===0x1)){if(((O.F&0x400)===0x400)){if(Jl){var Ag=B.lb(O.GetClipping(
),HM);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))result=B.wC(result,O.Jv(Ag));}}else{var
Ag=B.lb(O.GetClipping(),AD);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))result=B.wC(result
,O.Jv(Ag));}}O=O.X;}return B.lb(B.abh(result,this.U.slice(0,2)),this.U);},AM:function(
DW,Eo){var A;var Km=this.F;if((!!this.G&&((this.F&0x80001)===0x80001))&&((Eo&0x80000
)===0x80000))this.G.Ay(this.GetClipping());C.B_.AM.call(this,DW,Eo);if(((!!this.
G&&((this.F&0x1)===0x1))&&((DW&0x80000)===0x80000))&&!((Km&0x80000)===0x80000))this.
G.Ay(this.GetClipping());var EN=this.F^Km;if(!!this.C1&&((EN&0x40)===0x40)){if(((
this.F&0x40)===0x40))this.C1.AM(0x40,0x0);else this.C1.AM(0x0,0x40);}if(!!this.AX&&((
EN&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((this.AX.AE.F&0x14)===0x14))this.AX.
AE.AM(0x40,0x0);else this.AX.AE.AM(0x0,0x40);}if(((EN&0x10)===0x10)){var O;for(O=
this.AR;!!O;O=O.X)if((((O.F&0x300000)===0x300000)&&!((O.F&0x80)===0x80))&&(!((O.
F&0x10000)===0x10000)||(this.AX.AE===O)))O.AM(DW&0x10,Eo&0x10);}if(!!EN){this.F=
this.F|0x8000;B.pe([this,this.Ky],this);}},J:function(E){var A;if(B.aaY(E,this.U
))return;var Hk=[(A=this.U)[2]-A[0],A[3]-A[1]];var MC=[E[2]-E[0],E[3]-E[1]];var Io=
!B.aaX(Hk,MC);C.B_.J.call(this,E);if((Io&&(Hk[0]>0))&&(Hk[1]>0)){var Am=[].concat(
Bg,Hk);var O=this.AR;while(!!O){if((!O.Bh&&(O.E0!==0x14))&&!((O.F&0x400)===0x400
))O.Ja(Am,null);O=O.X;}}if(Io){this.F=this.F|0x5000;B.pe([this,this.Ky],this);}}
,NS:function(AS){var NL=(C.KeyEvent.isPrototypeOf(AS)?AS:null);var Fa=this.Kl;if(
!NL)return null;while(!!Fa&&(!Fa.A8||!Fa.Cf(NL)))Fa=Fa.X;return Fa;},SP:function(
BE,aClip,aOffset,aOpacity,aBlend){var A;var O=this.AR;var HM=AW;var Jl=true;this.
Oe(BE,aClip,aOffset,aOpacity,aBlend);while(!!O){if(((O.F&0x200)===0x200)){var Im=(
C.IM.isPrototypeOf(O)?O:null);Jl=((Im.F&0x1)===0x1);HM=aClip;if(!((Im.F&0x80000)===
0x80000))HM=B.lb(HM,B.abh(Im.U,aOffset));}if(((O.F&0x1)===0x1)){if(((O.F&0x400)===
0x400)){if(Jl){var Ag=B.lb(B.abh(O.GetClipping(),aOffset),HM);if(!((Ag[0]>=Ag[2]
)||(Ag[1]>=Ag[3])))O.Fd(BE,Ag,aOffset,aOpacity,aBlend);}}else{var Ag=B.lb(B.abh(
O.GetClipping(),aOffset),aClip);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))O.Fd(BE,Ag,
aOffset,aOpacity,aBlend);}}O=O.X;}this.Of(BE,aClip,aOffset,aOpacity,aBlend);},S9:
function(){var A;var Ms=((this.F&0x1000)===0x1000);var GB=[0,0,(A=this.U)[2]-A[0
],A[3]-A[1]];var FW=false;var Ij=AW;var Mq=AW;var O=this.AV;var D2=null;while(!!
O){if(((O.F&0x800)===0x800)){FW=true;O.F=O.F&~0x800;}if(FW&&((O.F&0x200)===0x200
))FW=false;O=O.Ab;}FW=false;O=this.AR;if(Ms){this.F=this.F&~0x1000;Ms=!((GB[0]>=
GB[2])||(GB[1]>=GB[3]));}this.F=this.F|0x2000;while(!!O){if(((O.F&0x400)===0x400
)){if(!!O.Bh&&(O.Bh.HR!==D2))O.Bh=null;if((!O.Bh&&FW)&&(O.E0!==0x14))O.Ja(Mq,D2);
}if(!!O.Bh){if(Ms&&!((O.F&0x400)===0x400))O.Jx(GB,0);if(FW&&((O.F&0x400)===0x400
))O.Jx(Mq,0);}if(((O.F&0x200)===0x200)){FW=((O.F&0x1000)===0x1000);D2=(C.IM.isPrototypeOf(
O)?O:null);if(FW){O.F=O.F&~0x1000;Ij=D2.U;Mq=Ij;FW=!((Ij[0]>=Ij[2])||(Ij[1]>=Ij[
3]));}if(FW)this.Ay(D2.U);}O=O.X;}this.F=this.F&~0x2000;this.Nj([GB[2]-GB[0],GB[
3]-GB[1]]);},Dh:function(T){B.pe([this,this.Ky],this);},Ky:function(T){var A;var
Te=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.S9();}if(((this.F&0x8000)===0x8000)||Te){this.F=this.F&~0x8000;this.LX(this.
F);}},Ek:function(E){var A;if(!!E&&(E.G!==this))throw new Error(D_);if(!!E&&!((E.
F&0x14)===0x14))E=null;if(!!E&&((E.F&0x10000)===0x10000))E=null;if(E===this.C1)return;
if(!!this.C1)this.C1.AM(0x0,0x60);this.C1=E;if(!!E){if(((this.F&0x40)===0x40))E.
AM(0x60,0x0);else E.AM(0x20,0x0);}},L:function(E){if(E)this.AM(0x100000,0x0);else
this.AM(0x0,0x100000);},C5:function(E){var A;if(E>255)E=255;if(E<0)E=0;if(E===this.
BR)return;this.BR=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ay(this.GetClipping(
));},Nu:function(CZ){this.C5(CZ);},E2:function(){var A;return((this.F&0x1)===0x1
);},Af:function(E){if(E)this.AM(0x1,0x0);else this.AM(0x0,0x1);},ExtendClipping:
function(HH,HI,HJ,HG){var A;var I5=this.U;var DY=I5;if(HH<0)HH=0;if(HH>255)HH=255;
if(HI<0)HI=0;if(HI>255)HI=255;if(HJ<0)HJ=0;if(HJ>255)HJ=255;if(HG<0)HG=0;if(HG>255
)HG=255;DY=[].concat(DY[0]-(Math.max(HH,this.I8)&0xFF),DY.slice(1,4));DY=B.abN(DY
,DY[2]+(Math.max(HI,this.I9)&0xFF));DY=B.abP(DY,DY[1]-(Math.max(HJ,this.I_)&0xFF
));DY=[].concat(DY.slice(0,3),DY[3]+(Math.max(HG,this.I7)&0xFF));if(HH!==this.I8
){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Z=DY;Z=
B.abN(Z,I5[0]);this.G.Ay(Z);}this.I8=HH&0xFF;}if(HI!==this.I9){if((!!this.G&&((this.
F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Z=DY;Z=[].concat(I5[2],Z.slice(
1,4));this.G.Ay(Z);}this.I9=HI&0xFF;}if(HJ!==this.I_){if((!!this.G&&((this.F&0x1
)===0x1))&&!((this.F&0x80000)===0x80000)){var Z=DY;Z=[].concat(Z.slice(0,3),I5[1
]);this.G.Ay(Z);}this.I_=HJ&0xFF;}if(HG!==this.I7){if((!!this.G&&((this.F&0x1)===
0x1))&&!((this.F&0x80000)===0x80000)){var Z=DY;Z=B.abP(Z,I5[3]);this.G.Ay(Z);}this.
I7=HG&0xFF;}},Of:function(BE,aClip,aOffset,aOpacity,aBlend){},Oe:function(BE,aClip
,aOffset,aOpacity,aBlend){},GetMaximalSize:function(){return En;},GetMinimalSize:
function(){return Bg;},JC:function(Nw){var A;var By=this.AX;while(!!By){var AE=By.
AE.JC(Nw);if(!!AE)return AE;By=By.X;}if(!((this.F&0x10000)===0x10000)||(this.__proto__
!==Nw))return null;return this;},FC:function(){var A;if(!!this.AX)return this.AX.
AE.FC();if(!((this.F&0x10000)===0x10000))return null;return this;},Gh:function(NA
){var A;return(((((this.F&0x10000)===0x10000)&&!!this.G)&&!!this.G.AX)&&(this.G.
AX.AE===this))&&(!NA||this.G.Gh(true));},Id:function(Ca,Ed,Gv,Fk,Fm,I1,E_,FQ,Ec,
Ea,Eb){var A;if(!this.AX){this.FF(Ca,Ed,Gv,Fk,Fm,null,null,Ec,Ea,Eb);return;}var
Hj=this.AX;var BM=Hj.X;if(((Ca.F&0x10000)===0x10000)&&(this.AX.AE!==Ca))throw new
Error(FL);var Fq=B._NewObject(C.KK,0);var D1=Hj.D1;var D4=null;var Cv=null;if(!!
BM){D4=BM.D4;Cv=BM.Cv;}if(!!BM&&!!Hj.HS)D4=Hj.HS;if(!!BM&&!!E_)Cv=E_;if(!!I1)D1=
I1;if(!Ed)Ed=B._GetAutoObject(B.aci.Ic);if(!Gv)Gv=Ed;if(!Fm)Fm=Fk;if(!Fk)Fk=Fm;Fq.
D1=Gv;Fq.Cv=Fk;Fq.D4=Fm;Fq.HS=FQ;Fq.AE=Ca;Fq.X=this.AX.X;this.AX.X=null;this.AX=
Fq;if(this.C1===Ca)this.Ek(null);Hj.AE.AM(0x0,0x10040);if(((this.F&0x40)===0x40)&&((
Ca.F&0x4)===0x4))Ca.AM(0x10040,0x0);else Ca.AM(0x10000,0x0);if(!!Cv){this.Dl(BM.
AE,Cv.GK(),null,null,Eb);this.Dl(Hj.AE,D1.Fy(),null,null,true);this.Dl(Fq.AE,Ed.
Fz(),Ec,Ea,true);}else if(!!D4){this.Dl(BM.AE,D4.GL(),null,null,Eb);this.Dl(Hj.AE
,D1.Fy(),null,null,true);this.Dl(Fq.AE,Ed.Fz(),Ec,Ea,true);}else if(!!D1){this.Dl(
Hj.AE,D1.Fy(),null,null,Eb);this.Dl(Fq.AE,Ed.Fz(),Ec,Ea,true);}else this.Dl(Fq.AE
,Ed.Fz(),Ec,Ea,Eb);},EX:function(Ca,I1,E_,FQ,Ec,Ea,Eb){var A;if(!this.AX)return;
if(!Ca)return;var By=this.AX;var BM=this.AX.X;var HW=null;while((!!By&&(By.AE!==
Ca))&&!!By.X){HW=By;By=BM;BM=By.X;}if(!By||(By.AE!==Ca))throw new Error(IV);if(!
HW){this.AX=BM;By.X=null;}else{HW.X=BM;By.X=null;}By.AE.AM(0x0,0x10040);if(((((this.
F&0x10)===0x10)&&!!BM)&&!HW)&&((BM.AE.F&0x200000)===0x200000))BM.AE.AM(0x10,0x0);
if(((((this.F&0x40)===0x40)&&!!BM)&&!HW)&&((BM.AE.F&0x4)===0x4))BM.AE.AM(0x40,0x0
);var D1=By.D1;var D4=null;var Cv=null;if(!!BM)D4=BM.D4;if(!!BM&&!!By.HS)D4=By.HS;
if(!!BM&&!!FQ)D4=FQ;if(!!HW&&!!BM)Cv=BM.Cv;if((!!HW&&!!BM)&&!!E_)Cv=E_;if(!!I1)D1=
I1;if(!!Cv){this.Dl(BM.AE,Cv.GK(),null,null,Eb);this.Dl(By.AE,D1.Fy(),Ec,Ea,true
);}else if(!!D4){this.Dl(BM.AE,D4.GL(),null,null,Eb);this.Dl(By.AE,D1.Fy(),Ec,Ea
,true);}else this.Dl(By.AE,D1.Fy(),Ec,Ea,Eb);},FF:function(Ca,Ed,Gv,Fk,Fm,E_,FQ,
Ec,Ea,Eb){var A;if(!Ca)return;if(!!this.AX&&(this.AX.AE===Ca)){this.Id(Ca,Ed,Gv,
Fk,Fm,null,E_,FQ,Ec,Ea,Eb);return;}if(((Ca.F&0x10000)===0x10000))throw new Error(
FL);var By=B._NewObject(C.KK,0);if(!!this.AX&&!this.AX.Cv){if(!FQ)FQ=E_;if(!E_)E_=
FQ;}var Cv=null;if(!!this.AX)Cv=this.AX.Cv;if(!!this.AX&&!!E_)Cv=E_;if(!Ed)Ed=B.
_GetAutoObject(B.aci.Ic);if(!Gv)Gv=Ed;if(!Fm)Fm=Fk;if(!Fk)Fk=Fm;By.D1=Gv;By.Cv=Fk;
By.D4=Fm;By.HS=FQ;if(this.C1===Ca)this.Ek(null);if(!!this.AX&&((this.AX.AE.F&0x200000
)===0x200000))this.AX.AE.AM(0x0,0x10);if(!!this.AX)this.AX.AE.AM(0x0,0x40);if(((
this.F&0x40)===0x40)&&((Ca.F&0x4)===0x4))Ca.AM(0x10040,0x0);else Ca.AM(0x10000,0x0
);By.AE=Ca;By.X=this.AX;this.AX=By;if(!!Cv){this.Dl(this.AX.X.AE,Cv.GK(),null,null
,Eb);this.Dl(Ca,Ed.Fz(),Ec,Ea,true);}else this.Dl(Ca,Ed.Fz(),Ec,Ea,Eb);},OD:function(
Fl){var tmp=this;while(!!tmp){Fl=B.abe(Fl,tmp.U.slice(0,2));tmp=tmp.G;}return Fl;
},DispatchEvent:function(AS){var A;var O=this.C1;var Ar=(C.K.isPrototypeOf(O)?O:
null);var Bu=null;var MA=!!this.EO&&(!!this.EO.DZ||!!this.EO.AR);if(!!O&&((((O.F&
0x10000)===0x10000)||((O.F&0x40000)===0x40000))||((O.F&0x20000)===0x20000))){O=null;
Ar=null;}if(!!this.AX&&!MA)Bu=this.AX.AE.DispatchEvent(AS);if(!Bu&&!!Ar)Bu=Ar.DispatchEvent(
AS);else if(!Bu&&!!O)Bu=O.Cf(AS);if(!Bu)Bu=this.Cf(AS);if(!Bu)Bu=this.NS(AS);return Bu;
},BroadcastEventAtPosition:function(AS,Nz,aFilter){var A;var O=this.AV;var Bu=null;
while(!!O&&!Bu){if((!aFilter||((A=aFilter)&&((O.F&A)===A)))&&B.wa(O.GetExtent(),
Nz)){var Ar=(C.K.isPrototypeOf(O)?O:null);if(!!Ar)Bu=Ar.BroadcastEventAtPosition(
AS,B.abe(Nz,Ar.U.slice(0,2)),aFilter);else Bu=O.Cf(AS);}O=O.Ab;}if(!Bu)Bu=this.Cf(
AS);return Bu;},BroadcastEvent:function(AS,aFilter){var A;var O=this.AV;var Bu=null;
while(!!O&&!Bu){if(!aFilter||((A=aFilter)&&((O.F&A)===A))){var Ar=(C.K.isPrototypeOf(
O)?O:null);if(!!Ar)Bu=Ar.BroadcastEvent(AS,aFilter);else Bu=O.Cf(AS);}O=O.Ab;}if(
!Bu)Bu=this.Cf(AS);if(!Bu)Bu=this.NS(AS);return Bu;},Nj:function(aSize){},LX:function(
J9){},EB:function(){this.F=this.F|0x8000;B.pe([this,this.Ky],this);},Ay:function(
AD){var A;var Ar=this;while(!!Ar&&!((AD[0]>=AD[2])||(AD[1]>=AD[3]))){if(!Ar.G&&(
Ar!==this)){Ar.Ay(AD);return;}if(!((Ar.F&0x1)===0x1))return;var Z=Ar.U;AD=B.abh(
AD,Z.slice(0,2));if(!((Ar.F&0x80000)===0x80000)){Z=[].concat(Z[0]-Ar.I8,Z.slice(
1,4));Z=B.abP(Z,Z[1]-Ar.I_);Z=B.abN(Z,Z[2]+Ar.I9);Z=[].concat(Z.slice(0,3),Z[3]+
Ar.I7);AD=B.lb(AD,Z);}Ar=Ar.G;}},MX:function(Q,aFilter){var A;if(!Q||(Q.G!==this
))return null;var Hi=Q.X;var Hm=Q.Ab;var Jg=0x10000;if(((aFilter&0x10000)===0x10000
))Jg=0x0;while(!!Hi||!!Hm){if((!!Hi&&(!aFilter||((A=aFilter)&&((Hi.F&A)===A))))&&(
!Jg||!((A=Jg)&&((Hi.F&A)===A))))return Hi;if((!!Hm&&(!aFilter||((A=aFilter)&&((Hm.
F&A)===A))))&&(!Jg||!((A=Jg)&&((Hm.F&A)===A))))return Hm;if(!!Hi)Hi=Hi.X;if(!!Hm
)Hm=Hm.Ab;}return null;},Dl:function(FO,A6,Ec,Ea,Eb){var A;if(!FO)return;if(!A6)
throw new Error(G$);if((!!A6.K||!!A6.G)||!!A6.Eu)throw new Error(L0);if(!!FO.G&&(
FO.G!==this))throw new Error(Ha);if(!this.EO)this.EO=B._NewObject(C.Ni,0);A6.G=this;
A6.K=FO;A6.Kn=Ea;A6.MF=Ec;if(!!FO.HT)FO.HT.Eu.OW(FO.HT);FO.HT=A6;FO.F=FO.F|0x20000;
if((Eb&&!!this.EO.AV)&&!this.EO.AV.La())(B.aci.JB.isPrototypeOf(A=this.EO.AV)?A:
null).MR(A6);else{var Eu=B._NewObject(B.aci.JB,0);Eu.MR(A6);this.EO.O3(Eu,false);
}},LL:function(Q){var A;if(!Q)throw new Error(J5);if(Q.G!==this)throw new Error(
FM);if(!Q.X)return;var CF=this.AV;var GF=Q.El;while(!!CF&&(CF.El>GF))CF=CF.Ab;if(((
CF===Q)||!CF)||(CF.X===Q))return;if(((Q.F&0x401)===0x401)){if(!!Q.Ab&&!!Q.Bh)Q.Ab.
F=Q.Ab.F|0x800;Q.F=Q.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dh],this);}if(((
Q.F&0x200)===0x200)){if(!!Q.Ab)Q.Ab.F=Q.Ab.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.Dh],this);}if(!!Q.Ab)Q.Ab.X=Q.X;else this.AR=Q.X;Q.X.Ab=Q.Ab;Q.Ab=CF;Q.X=CF.
X;CF.X=Q;if(!!Q.X)Q.X.Ab=Q;else this.AV=Q;if(((Q.F&0x1)===0x1))this.Ay(Q.GetClipping(
));},FH:function(Q,EI){var A;if(!Q)throw new Error(J5);if(Q.G!==this)throw new Error(
FM);var CF=Q;var BK=Q;var GF=Q.El;while(((EI>0)&&!!CF.X)&&(CF.X.El<=GF)){CF=CF.X;
EI=EI-1;}while(((EI<0)&&!!BK.Ab)&&(BK.Ab.El>=GF)){BK=BK.Ab;EI=EI+1;}if((CF===Q)&&(
BK===Q))return;if(((Q.F&0x401)===0x401)){if(!!Q.Ab&&!!Q.Bh)Q.Ab.F=Q.Ab.F|0x800;Q.
F=Q.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Dh],this);}if(((Q.F&0x200)===0x200
)){if(!!Q.Ab)Q.Ab.F=Q.Ab.F|0x800;Q.F=Q.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Dh],this);}if(!!Q.Ab)Q.Ab.X=Q.X;if(!!Q.X)Q.X.Ab=Q.Ab;if(this.AR===Q)this.AR=Q.X;
if(this.AV===Q)this.AV=Q.Ab;if(CF!==Q){Q.X=CF.X;Q.Ab=CF;CF.X=Q;if(!!Q.X)Q.X.Ab=Q;
}if(BK!==Q){Q.X=BK;Q.Ab=BK.Ab;BK.Ab=Q;if(!!Q.Ab)Q.Ab.X=Q;}if(!Q.X)this.AV=Q;if(!
Q.Ab)this.AR=Q;if(((Q.F&0x1)===0x1))this.Ay(Q.GetClipping());},IO:function(Q){var
A;if(!Q)throw new Error(L1);if(Q.G!==this)throw new Error(FM);if((((Q.F&0x401)===
0x401)&&!!Q.Ab)&&!!Q.Bh){Q.Ab.F=Q.Ab.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Dh],this);}if(((Q.F&0x200)===0x200)){if(!!Q.Ab)Q.Ab.F=Q.Ab.F|0x800;this.F=this.F|
0x4000;B.pe([this,this.Dh],this);}Q.Bh=null;if(this.C1===Q)this.Ek(this.MX(Q,0x14
));if(!!Q.Ab)Q.Ab.X=Q.X;if(!!Q.X)Q.X.Ab=Q.Ab;if(this.AR===Q)this.AR=Q.X;if(this.
AV===Q)this.AV=Q.Ab;Q.G=null;Q.X=null;Q.Ab=null;if((!((Q.F&0x10)===0x10)&&((Q.F&
0x100000)===0x100000))&&!((this.F&0x80)===0x80))Q.AM(0x10,0x0);if(((Q.F&0x1)===0x1
))this.Ay(Q.GetClipping());},S:function(Q,EI){var A;if(!Q)throw new Error(L2);if(
!!Q.G)throw new Error(L3);var BK=null;var GF=Q.El;if(((EI<0)&&!!this.AV)&&(this.
AV.El>=GF)){BK=this.AV;EI=EI+1;}while((((EI<0)&&!!BK)&&!!BK.Ab)&&(BK.Ab.El>=GF)){
BK=BK.Ab;EI=EI+1;}if((!BK&&!!this.AV)&&(this.AV.El>GF))BK=this.AV;while((!!BK&&!
!BK.Ab)&&(BK.Ab.El>GF))BK=BK.Ab;if(!BK){Q.G=this;Q.Ab=this.AV;if(!!this.AV)this.
AV.X=Q;if(!this.AR)this.AR=Q;this.AV=Q;}else{Q.G=this;Q.Ab=BK.Ab;Q.X=BK;BK.Ab=Q;
if(!!Q.Ab)Q.Ab.X=Q;else this.AR=Q;}if(((Q.F&0x1)===0x1))this.Ay(Q.GetClipping());
if(((Q.F&0x80)===0x80)&&(B.aam().Oy()===Q))Q.AM(0x10,0x0);else if(!((this.F&0x10
)===0x10)&&((Q.F&0x200010)===0x200010))Q.AM(0x0,0x10);else if((((this.F&0x10)===
0x10)&&!((Q.F&0x10)===0x10))&&((Q.F&0x100000)===0x100000))Q.AM(0x10,0x0);if(((!this.
C1&&((Q.F&0x4)===0x4))&&((Q.F&0x10)===0x10))&&!((Q.F&0x10000)===0x10000))this.Ek(
Q);if(((Q.F&0x401)===0x401)){Q.F=Q.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Dh],this);}if(((Q.F&0x200)===0x200)){Q.F=Q.F|0x800;this.F=this.F|0x4000;B.pe([this
,this.Dh],this);}},M5:function(){return this.BR;},_Init:function(aArg){C.B_._Init.
call(this,aArg);this.__proto__=C.K;this.F=0x10001F;this.AZ(aArg);},_Mark:function(
D){var A;C.B_._Mark.call(this,D);if((A=this.AR)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Kl)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.AX)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
EO)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.HT)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.C1)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::Group"};
C.Root={D3:null,Bn:B.abi(10,null,null),Ig:null,Gy:null,Ju:0,Bx:0,Cy:B.abi(10,0,null
),Kd:B.abi(10,B.wg,null),EM:B.abi(10,0,null),FT:B.abi(10,B.wf,null),Ii:B.abi(10,
0,null),Gx:B.abi(10,B.wf,null),EL:B.abi(10,B.wf,null),D0:B.abi(10,B.wf,null),Fo:
B.abi(10,B.wf,null),AO:0,Kh:0,Kg:0,CY:B.abi(4,0,null),BY:B.abi(4,B.wg,null),BX:0
,Jd:0,Il:0,Mt:true,AZ:function(aArg){if(!!!this.H){var obj=this;B.abD(obj);}},C2:
function(){return this;},Fd:function(BE,aClip,aOffset,aOpacity,aBlend){var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)BE.MW(aClip,B.abh(B.abh(aClip,aOffset
),this.U.slice(0,2)),0x00000000,0x00000000,0x00000000,0x00000000,false);C.K.Fd.call(
this,BE,aClip,aOffset,aOpacity,aBlend);},AM:function(DW,Eo){var A;C.K.AM.call(this
,DW,Eo);if(!this.G&&(((DW&0x1)===0x1)||((Eo&0x1)===0x1)))this.Ay([0,0,(A=this.U)[
2]-A[0],A[3]-A[1]]);if(!this.G&&(((DW&0x2)===0x2)||((Eo&0x2)===0x2)))this.Ay([0,
0,(A=this.U)[2]-A[0],A[3]-A[1]]);},Ek:function(E){if((E!==null)||!E)C.K.Ek.call(
this,E);},C5:function(E){var A;var SV=this.BR;C.K.C5.call(this,E);if(((SV!==this.
BR)&&!this.G)&&((this.F&0x1)===0x1))this.Ay([0,0,(A=this.U)[2]-A[0],A[3]-A[1]]);
},Gh:function(NA){return true;},DispatchEvent:function(AS){if(!!AS){AS.IA=!!this.
Bx;if(!!this.Bx)AS.A1=this.Bx;}var Bu;Bu=C.K.DispatchEvent.call(this,AS);this.Bx=
0;return Bu;},BroadcastEvent:function(AS,aFilter){if(!!AS){AS.IA=!!this.Bx;if(!!
this.Bx)AS.A1=this.Bx;}var Bu=C.K.BroadcastEvent.call(this,AS,aFilter);this.Bx=0;
return Bu;},Ay:function(AD){var A;if(this.Ju>0)throw new Error(L4);var fullScreenUpdate=
false;fullScreenUpdate=B.m7;if(fullScreenUpdate)AD=[0,0,(A=this.U)[2]-A[0],A[3]-
A[1]];if(!!this.G){C.K.Ay.call(this,AD);return;}AD=B.lb(B.abh(AD,this.U.slice(0,
2)),this.U);if((AD[0]>=AD[2])||(AD[1]>=AD[3]))return;var N;for(N=0;N<this.BX;N=N+
1)if(!(((A=B.lb(this.BY.Get(N),AD))[0]>=A[2])||(A[1]>=A[3]))){this.BY.Set(N,B.wC(
this.BY.Get(N),AD));this.CY.Set(N,B.aaH(this.BY.Get(N)));return;}if(this.BX<3){this.
BY.Set(this.BX,AD);this.CY.Set(this.BX,B.aaH(AD));this.BX=this.BX+1;return;}var AK;
var Bk;var Jc=0;var Je=0;var NB=2147483647;this.BY.Set(this.BX,AD);this.CY.Set(this.
BX,B.aaH(AD));for(AK=0;AK<=this.BX;AK=AK+1)for(Bk=AK+1;Bk<=this.BX;Bk=Bk+1){var Kx=
B.aaH(B.wC(this.BY.Get(AK),this.BY.Get(Bk)));var NQ=((Kx<<8)/(this.CY.Get(AK)+this.
CY.Get(Bk)))|0;if(NQ<NB){NB=NQ;Jc=AK;Je=Bk;}}this.BY.Set(Jc,B.wC(this.BY.Get(Jc)
,this.BY.Get(Je)));this.CY.Set(Jc,B.aaH(this.BY.Get(Jc)));if(Je!==this.BX){this.
BY.Set(Je,this.BY.Get(this.BX));this.CY.Set(Je,this.CY.Get(this.BX));}},SN:function(
){var Cz=B._NewObject(C.JA,0);Cz.IA=!!this.Bx;if(!!this.Bx)Cz.A1=this.Bx;return Cz;
},HN:function(){var Cz=B._NewObject(C.H4,0);Cz.IA=!!this.Bx;if(!!this.Bx)Cz.A1=this.
Bx;return Cz;},Ih:function(){var Cz=B._NewObject(C.Jz,0);Cz.IA=!!this.Bx;if(!!this.
Bx)Cz.A1=this.Bx;return Cz;},SO:function(T){var N;var HP=false;for(N=0;N<10;N=N+
1)if(!!this.Bn.Get(N)){var Ad=this.D0.Get(N);var Ar=this.Bn.Get(N).G;while(!!Ar&&(
Ar!==this)){Ad=B.abe(Ad,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.Bn.Get(N)!==this
)){var tmp=this.Bn.Get(N);this.AO=N;this.Bn.Set(N,null);tmp.Cf(this.HN().InitializeUp(
N,this.Gx.Get(N),this.FT.Get(N),this.EM.Get(N),this.Cy.Get(N)+1,this.EL.Get(N),false
,this.D0.Get(N),this.Fo.Get(N)));this.BroadcastEvent(this.Ih().InitializeUp(N,this.
Cy.Get(N)+1,false,tmp,this.D0.Get(N)),0x18);}else{this.EM.Set(N,(this.Gy.A1-this.
Ii.Get(N))|0);if(this.EM.Get(N)<10)this.EM.Set(N,10);this.AO=N;this.Bn.Get(N).Cf(
this.HN().InitializeHold(N,Ad,this.FT.Get(N),this.EM.Get(N),this.Cy.Get(N)+1,this.
EL.Get(N),this.D0.Get(N),this.Fo.Get(N)));HP=true;}}if(!HP)this.Gy.L(false);},GetFPS:
function(){var ticksCount=0;var NJ=0;ticksCount=((new Date).getTime()-B.v$)|0;if(
!!this.Kh&&(ticksCount>this.Kh))NJ=((this.Kg*1000)/((ticksCount-this.Kh)|0))|0;this.
Kg=0;this.Kh=ticksCount;return NJ;},Update:function(){var A;if(!this.Ig)this.Ig=
B._NewObject(B.Graphics.Canvas,0);this.Ig.M$([(A=this.U)[2]-A[0],A[3]-A[1]]);this.
Ig.Update();return this.UpdateGE20(this.Ig);},UpdateGE20:function(BE){if(!this.BeginUpdate(
))return AW;var F$=this.UpdateCanvas(BE,Bg);this.EndUpdate();return F$;},EndUpdate:
function(){if(this.BX>0){this.Kg=this.Kg+1;this.BX=0;}},UpdateCanvas:function(BE
,aOffset){var A;var F$=AW;var SK=[].concat(aOffset,B.abf(BE.FrameSize,aOffset));
var N;var AK=this.BX;this.Ju=this.Ju+1;BE.AE=this;for(N=0;(N<AK)&&(N<4);N=N+1)if(
this.CY.Get(N)>0){this.Fd(BE,B.abg(this.BY.Get(N),aOffset),[-aOffset[0],-aOffset[
1]],255,true);F$=B.wC(F$,B.lb(SK,this.BY.Get(N)));}else AK=AK+1;BE.AE=null;this.
Ju=this.Ju-1;if(!((F$[0]>=F$[2])||(F$[1]>=F$[3])))return B.abg(F$,aOffset);else return F$;
},GetUpdateRegion:function(J8){var N;var AK=this.BX;if(J8<0)return AW;for(N=0;(N<
AK)&&(N<4);N=N+1)if(!this.CY.Get(N)){AK=AK+1;J8=J8+1;}else if(N===J8)return this.
BY.Get(N);return AW;},BeginUpdate:function(){var A;var N;if(!!this.BX&&!B.aaY(this.
BY.Get(0),[0,0,(A=this.U)[2]-A[0],A[3]-A[1]])){var NZ=B.abi(3,B.wg,null);var NY=
this.BX;for(N=0;N<NY;N++)NZ.Set(N,this.BY.Get(N));for(N=0;N<NY;N++){var NT=B.abh(
NZ.Get(N),this.U.slice(0,2));var NU=this.Jv(NT);if(!B.aaY(NT,NU))this.Ay(B.abg(NU
,this.U.slice(0,2)));}}var AK;var Bk;for(AK=0;AK<(this.BX-1);AK++)if(this.CY.Get(
AK)>0)for(Bk=AK+1;Bk<this.BX;Bk++)if(this.CY.Get(Bk)>0){var Kx=B.aaH(B.wC(this.BY.
Get(AK),this.BY.Get(Bk)));if(((Kx-this.CY.Get(AK))-this.CY.Get(Bk))<0){this.BY.Set(
AK,B.wC(this.BY.Get(AK),this.BY.Get(Bk)));this.CY.Set(AK,Kx);this.CY.Set(Bk,0);}
}for(N=this.BX-1;N>=0;N--)if(!this.CY.Get(N))this.BX=this.BX-1;return this.BX;},
DoesNeedUpdate:function(){if(this.BX>0)return true;return false;},Initialize:function(
aSize){this.J([].concat(Bg,aSize));if(this.Mt)this.F=this.F|0x60;else this.F=this.
F|0x20;this.Ay(this.U);return this;},SetRootFocus:function(Mh){if(Mh===this.Mt)return false;
this.Mt=Mh;if(!Mh)this.AM(0x0,0x40);else this.AM(0x40,0x0);return true;},SetUserInputTimestamp:
function(SI){this.Bx=SI;},DriveKeyboardHitting:function(B1,IX,E8){var A;var MJ=!
!this.D3;if(!!this.D3&&((!E8||(this.Jd!==B1))||(this.Il!==IX))){var Cz=null;var O=(
C.C9.isPrototypeOf(A=this.D3)?A:null);var Fa=(C.Gi.isPrototypeOf(A=this.D3)?A:null
);if(!!this.Jd)Cz=B._NewObject(C.KeyEvent,0).Initialize(this.Jd,false);if(this.Il
!==0x00)Cz=B._NewObject(C.KeyEvent,0).Initialize2(this.Il,false);if(!!Fa)Fa.Cf(Cz
);else if(!!O)O.Cf(Cz);this.Jd=0;this.Il=0x00;this.D3=null;}if(!!this.D3){var Cz=
null;var O=(C.C9.isPrototypeOf(A=this.D3)?A:null);var Fa=(C.Gi.isPrototypeOf(A=this.
D3)?A:null);if(!!B1)Cz=B._NewObject(C.KeyEvent,0).Initialize(B1,true);if(this.Il
!==0x00)Cz=B._NewObject(C.KeyEvent,0).Initialize2(IX,true);if(!!Fa)Fa.Cf(Cz);else
if(!!O)O.Cf(Cz);}if(!this.D3&&E8){if(!!B1)this.D3=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize(B1,true));if(IX!==0x00)this.D3=this.DispatchEvent(B._NewObject(
C.KeyEvent,0).Initialize2(IX,true));if(!(C.Gi.isPrototypeOf(A=this.D3)?A:null)&&
!(C.C9.isPrototypeOf(A=this.D3)?A:null))this.D3=null;this.Jd=B1;this.Il=IX;MJ=MJ||
!!this.D3;}this.Bx=0;return MJ;},DriveCursorMovement:function(Ct){return this.DriveMultiTouchMovement(
this.AO,Ct);},DriveMultiTouchMovement:function(Aa,Ct){if((Aa<0)||(Aa>9)){this.Bx=
0;return false;}var Eg=B.abe(Ct,this.D0.Get(Aa));this.D0.Set(Aa,Ct);if(!this.Bn.
Get(Aa)||B.aaX(Eg,Bg)){this.Bx=0;return false;}var Ad=Ct;var Ar=this.Bn.Get(Aa).
G;while(!!Ar&&(Ar!==this)){Ad=B.abe(Ad,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.Bn.
Get(Aa)!==this)){var tmp=this.Bn.Get(Aa);this.AO=Aa;this.Bn.Set(Aa,null);tmp.Cf(
this.HN().InitializeUp(Aa,this.Gx.Get(Aa),this.FT.Get(Aa),this.EM.Get(Aa),this.Cy.
Get(Aa)+1,this.EL.Get(Aa),false,this.D0.Get(Aa),this.Fo.Get(Aa)));this.BroadcastEvent(
this.Ih().InitializeUp(Aa,this.Cy.Get(Aa)+1,false,tmp,Ct),0x18);}else{this.Gx.Set(
Aa,Ad);this.AO=Aa;this.Bn.Get(Aa).Cf(this.SN().Initialize(Aa,Ad,this.FT.Get(Aa),
Eg,this.EM.Get(Aa),this.Cy.Get(Aa)+1,this.EL.Get(Aa),Ct,this.Fo.Get(Aa)));}this.
Bx=0;return true;},DriveCursorHitting:function(E8,Aa,Ct){return this.DriveMultiTouchHitting(
E8,Aa,Ct);},DriveMultiTouchHitting:function(E8,Aa,Ct){if((Aa<0)||(Aa>9)){this.Bx=
0;return false;}var ticksCount=this.Bx;if(!ticksCount)ticksCount=((new Date).getTime(
)-B.v$)|0;var Tc=this.Bx;this.DriveMultiTouchMovement(Aa,Ct);Ct=this.D0.Get(Aa);
this.Bx=Tc;if(E8)this.Fo.Set(Aa,Ct);if(E8&&!this.Bn.Get(Aa)){var De;var Ad=Ct;if(
B.wa(this.Kd.Get(Aa),Ct)&&((ticksCount-this.Ii.Get(Aa))<=250))this.Cy.Set(Aa,this.
Cy.Get(Aa)+1);else this.Cy.Set(Aa,0);this.Kd.Set(Aa,B.abh(IW,Ct));this.Ii.Set(Aa
,ticksCount);De=this.Ht(B.abh(IW,Ct),Aa,this.Cy.Get(Aa)+1,null,null,0x0);if(!!De
){this.BroadcastEvent(this.Ih().InitializeDown(Aa,this.Cy.Get(Aa)+1,false,De.C9,
Ct),0x18);this.Bn.Set(Aa,De.C9);this.EL.Set(Aa,De.Gk);}else{this.Bn.Set(Aa,null);
this.EL.Set(Aa,Bg);this.Bx=0;return false;}var Ar=De.C9.G;while(!!Ar&&(Ar!==this
)){Ad=B.abe(Ad,Ar.U.slice(0,2));Ar=Ar.G;}this.FT.Set(Aa,Ad);this.Gx.Set(Aa,Ad);this.
EM.Set(Aa,0);this.Gy.L(true);this.AO=Aa;this.Bn.Get(Aa).Cf(this.HN().InitializeDown(
Aa,Ad,this.Cy.Get(Aa)+1,this.EL.Get(Aa),false,Ct));this.Bx=0;return true;}if(!E8&&
!!this.Bn.Get(Aa)){var Ad=Ct;var Ar=this.Bn.Get(Aa).G;while(!!Ar&&(Ar!==this)){Ad=
B.abe(Ad,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar)Ad=this.Gx.Get(Aa);this.AO=Aa;var tmp=
this.Bn.Get(Aa);this.Bn.Set(Aa,null);tmp.Cf(this.HN().InitializeUp(Aa,Ad,this.FT.
Get(Aa),this.EM.Get(Aa),this.Cy.Get(Aa)+1,this.EL.Get(Aa),false,Ct,this.Fo.Get(Aa
)));this.BroadcastEvent(this.Ih().InitializeUp(Aa,this.Cy.Get(Aa)+1,false,tmp,Ct
),0x18);this.Bx=0;return true;}this.Bx=0;return false;},Ng:function(FP,Nx,Gw,HK){
if(FP===this)FP=null;if(!this.Bn.Get(this.AO))return;var De;De=this.Ht(B.abh(IW,
this.D0.Get(this.AO)),this.AO,1,FP,Gw,HK);if(!!De&&(this.Bn.Get(this.AO)!==De.C9
))this.MU(De.C9,De.Gk);if(!De&&(this.Bn.Get(this.AO)!==Nx))this.MU(Nx,Bg);},MU:function(
FP,EH){if(!this.Bn.Get(this.AO)||(this.Bn.Get(this.AO)===FP))return;var tmp=this.
Bn.Get(this.AO);this.Bn.Set(this.AO,null);tmp.Cf(this.HN().InitializeUp(this.AO,
this.Gx.Get(this.AO),this.FT.Get(this.AO),this.EM.Get(this.AO),this.Cy.Get(this.
AO)+1,this.EL.Get(this.AO),true,this.D0.Get(this.AO),this.Fo.Get(this.AO)));this.
BroadcastEvent(this.Ih().InitializeUp(this.AO,this.Cy.Get(this.AO)+1,true,tmp,this.
D0.Get(this.AO)),0x18);var Ad=this.D0.Get(this.AO);var Ar=null;if(!!FP)Ar=FP.G;while(
!!Ar&&(Ar!==this)){Ad=B.abe(Ad,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar&&(FP!==this)){this.
Bn.Set(this.AO,null);return;}this.BroadcastEvent(this.Ih().InitializeDown(this.AO
,this.Cy.Get(this.AO)+1,true,FP,this.D0.Get(this.AO)),0x18);var ticksCount=0;ticksCount=((
new Date).getTime()-B.v$)|0;this.Bn.Set(this.AO,FP);this.EL.Set(this.AO,EH);this.
FT.Set(this.AO,Ad);this.Gx.Set(this.AO,Ad);this.Cy.Set(this.AO,0);this.EM.Set(this.
AO,0);this.Ii.Set(this.AO,ticksCount);this.Fo.Set(this.AO,this.D0.Get(this.AO));
this.Bn.Get(this.AO).Cf(this.HN().InitializeDown(this.AO,Ad,this.Cy.Get(this.AO)+
1,this.EL.Get(this.AO),true,this.Fo.Get(this.AO)));},Oy:function(){return null;}
,_Init:function(aArg){C.K._Init.call(this,aArg);C.Timer._Init.call(this.Gy={H:this
},0);(this.Bn=[]).__proto__=C.Root.Bn;(this.Cy=[]).__proto__=C.Root.Cy;(this.Kd=[
]).__proto__=C.Root.Kd;(this.EM=[]).__proto__=C.Root.EM;(this.FT=[]).__proto__=C.
Root.FT;(this.Ii=[]).__proto__=C.Root.Ii;(this.Gx=[]).__proto__=C.Root.Gx;(this.
EL=[]).__proto__=C.Root.EL;(this.D0=[]).__proto__=C.Root.D0;(this.Fo=[]).__proto__=
C.Root.Fo;(this.CY=[]).__proto__=C.Root.CY;(this.BY=[]).__proto__=C.Root.BY;this.
__proto__=C.Root;this.F=0x10007F;this.Gy.Bt(10);this.Gy.Bi=[this,this.SO];this.AZ(
aArg);},_Done:function(){this.__proto__=C.K;this.Gy._Done();C.K._Done.call(this);
},_ReInit:function(){C.K._ReInit.call(this);this.Gy._ReInit();},_Mark:function(D
){var A;C.K._Mark.call(this,D);if((A=this.D3)&&(A._cycle!=D))A._Mark(A._cycle=D);
B.aa6(this.Bn,D);if((A=this.Ig)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Gy
)._cycle!=D)A._Mark(A._cycle=D);},_className:"Core::Root"};C.Event={A1:0,IA:false
,AZ:function(aArg){this.A1=this.Iw();},Iw:function(){var ticksCount=0;ticksCount=((
new Date).getTime()-B.v$)|0;return ticksCount;},_Init:function(aArg){this.__proto__=
C.Event;this.AZ(aArg);B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=
D);},H:null,_cycle:0,_observers:null,_className:"Core::Event"};C.KeyEvent={BO:0,
AQ:0,Down:false,Initialize2:function(B1,E8){this.BO=0;this.AQ=B1;this.Down=E8;if((
B1>=0x30)&&(B1<=0x39))this.BO=(10+B1)-48;if((B1>=0x41)&&(B1<=0x5A))this.BO=(105+
B1)-65;if((B1>=0x61)&&(B1<=0x7A))this.BO=(105+B1)-97;if(B1===0x20)this.BO=131;if(
!this.BO)switch(B1){case 0x2B:this.BO=132;break;case 0x2D:this.BO=133;break;case
0x2A:this.BO=134;break;case 0x2F:this.BO=135;break;case 0x3D:this.BO=136;break;case
0x2E:this.BO=137;break;case 0x2C:this.BO=138;break;case 0x3A:this.BO=139;break;case
0x3B:this.BO=140;break;default:;}return this;},Initialize:function(B1,E8){this.BO=
B1;this.Down=E8;this.AQ=0x00;var Ml=B1-10;var Mk=B1-105;if((Ml>=0)&&(Ml<=9))this.
AQ=(48+Ml)&0xFFFF;if((Mk>=0)&&(Mk<=25))this.AQ=(65+Mk)&0xFFFF;if(B1===131)this.AQ=
0x20;if(this.AQ===0x00)switch(B1){case 132:this.AQ=0x2B;break;case 133:this.AQ=0x2D;
break;case 134:this.AQ=0x2A;break;case 135:this.AQ=0x2F;break;case 136:this.AQ=0x3D;
break;case 137:this.AQ=0x2E;break;case 138:this.AQ=0x2C;break;case 139:this.AQ=0x3A;
break;case 140:this.AQ=0x3B;break;default:;}return this;},OC:function(Nv){switch(
Nv){case 141:return((this.AQ>=0x41)&&(this.AQ<=0x5A))||((this.AQ>=0x61)&&(this.AQ<=
0x7A));case 142:return(((this.AQ>=0x41)&&(this.AQ<=0x5A))||((this.AQ>=0x61)&&(this.
AQ<=0x7A)))||((this.AQ>=0x30)&&(this.AQ<=0x39));case 143:return(this.AQ>=0x30)&&(
this.AQ<=0x39);case 144:return(((this.AQ>=0x41)&&(this.AQ<=0x46))||((this.AQ>=0x61
)&&(this.AQ<=0x66)))||((this.AQ>=0x30)&&(this.AQ<=0x39));case 145:return this.AQ
!==0x00;case 146:return(this.AQ===0x00)&&!!this.BO;case 147:return(((this.BO===6
)||(this.BO===7))||(this.BO===4))||(this.BO===5);case 148:return(this.AQ!==0x00)||
!!this.BO;default:;}return Nv===this.BO;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"};C.Jz={J1:null
,Dn:B.wf,DU:0,CH:0,Down:false,EU:false,InitializeUp:function(Aa,DX,HE,Mj,E9){this.
Down=false;this.CH=Aa;this.DU=DX;this.Dn=E9;this.J1=Mj;this.EU=HE;return this;},
InitializeDown:function(Aa,DX,HE,Mj,E9){this.Down=true;this.CH=Aa;this.DU=DX;this.
Dn=E9;this.J1=Mj;this.EU=HE;return this;},_Init:function(aArg){C.Event._Init.call(
this,aArg);this.__proto__=C.Jz;},_Mark:function(D){var A;C.Event._Mark.call(this
,D);if((A=this.J1)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};C.H4={Gf:B.wf,Dn:B.wf,DU:0,C3:0,FD:B.wf,D7:B.wf,CH:0,Down:false,EU:false,InitializeHold:
function(Aa,Hb,IZ,I0,DX,EH,E9,IY){this.Down=true;this.CH=Aa;this.D7=B.abf(Hb,EH);
this.FD=B.abf(IZ,EH);this.C3=I0;this.DU=DX;this.Dn=E9;this.Gf=IY;return this;},InitializeUp:
function(Aa,Hb,IZ,I0,DX,EH,HE,E9,IY){this.Down=false;this.CH=Aa;this.D7=B.abf(Hb
,EH);this.FD=B.abf(IZ,EH);this.C3=I0;this.DU=DX;this.EU=HE;this.Dn=E9;this.Gf=IY;
return this;},InitializeDown:function(Aa,Hb,DX,EH,HE,E9){this.Down=true;this.CH=
Aa;this.D7=B.abf(Hb,EH);this.FD=B.abf(Hb,EH);this.C3=0;this.DU=DX;this.EU=HE;this.
Dn=E9;this.Gf=E9;return this;},_Init:function(aArg){C.Event._Init.call(this,aArg
);this.__proto__=C.H4;},_className:"Core::CursorEvent"};C.JA={Gf:B.wf,Dn:B.wf,DU:
0,C3:0,Gk:B.wf,FD:B.wf,D7:B.wf,CH:0,Initialize:function(Aa,Hb,IZ,aOffset,I0,SH,EH
,E9,IY){this.CH=Aa;this.D7=B.abf(Hb,EH);this.FD=B.abf(IZ,EH);this.Gk=aOffset;this.
C3=I0;this.DU=SH;this.Dn=E9;this.Gf=IY;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.JA;},_className:"Core::DragEvent"};C.IM={
Fd:function(BE,aClip,aOffset,aOpacity,aBlend){},GetClipping:function(){var A;var
Z=C.B_.GetClipping.call(this);if(((this.F&0x80000)===0x80000)){var HX=AW;var O;for(
O=this.X;!!O&&!((O.F&0x200)===0x200);O=O.X)if(((O.F&0x1)===0x1))HX=B.wC(HX,O.GetClipping(
));Z=B.wC(Z,HX);}return Z;},AM:function(DW,Eo){var A;var Km=this.F;if((!!this.G&&((
this.F&0x80001)===0x80001))&&((Eo&0x80000)===0x80000))this.G.Ay(this.GetClipping(
));C.B_.AM.call(this,DW,Eo);if(((!!this.G&&((this.F&0x1)===0x1))&&((DW&0x80000)===
0x80000))&&!((Km&0x80000)===0x80000))this.G.Ay(this.GetClipping());},J:function(
E){var A;if(B.aaY(E,this.U))return;var Hk=[(A=this.U)[2]-A[0],A[3]-A[1]];var MC=[
E[2]-E[0],E[3]-E[1]];var Io=!B.aaX(Hk,MC);var Eg=B.abe(E.slice(0,2),this.U.slice(
0,2));if(!B.aaX(Eg,Bg)&&!Io){var O=this.X;while(!!O&&!((O.F&0x200)===0x200)){if(((
O.F&0x400)===0x400)){var tmp=((O.F&0x100)===0x100);O.Ll(Eg,tmp);}O=O.X;}}if((Io&&(
Hk[0]>0))&&(Hk[1]>0)){var Am=this.U;var O=this.X;while(!!O&&!((O.F&0x200)===0x200
)){if(((O.F&0x400)===0x400)){if(!!O.Bh&&(O.Bh.HR!==this))O.Bh=null;if(!O.Bh&&(O.
E0!==0x14))O.Ja(Am,this);}O=O.X;}}C.B_.J.call(this,E);if(!!this.G&&Io){this.F=this.
F|0x1000;if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.Dh],this);}}},_Init:function(aArg){C.B_._Init.call(this,aArg);this.__proto__=
C.IM;this.F=0x203;},_className:"Core::Outline"};C.LO={Lp:null,Lo:null,Hy:null,Y:
null,Kw:0,A_:0,CH:0,A1:0,DU:0,C3:0,Gk:B.wf,FD:B.wf,D7:B.wf,IP:8,E4:0,M0:1,Down:false
,GR:false,EU:false,Mp:false,NM:0,Fd:function(BE,aClip,aOffset,aOpacity,aBlend){}
,Cf:function(AS){var A;var AP=(C.H4.isPrototypeOf(AS)?AS:null);var B3=(C.JA.isPrototypeOf(
AS)?AS:null);var Ki=this.GR;var Jq;var Ik;var NX;var F_;var NG;if(!AP&&!B3)return null;
Jq=(!!AP&&AP.Down)&&!AP.C3;Ik=(!!AP&&AP.Down)&&(AP.C3>0);NX=(!!AP&&AP.Down)&&(AP.
C3>this.NM);F_=!!AP&&!AP.Down;NG=!!B3;if(Jq)this.NM=((A=(AP.EU?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if((((this.E4&0x20)===0x20)&&(this.A_>0))&&(this.A_<33554432)){var Kf=(C.
Jz.isPrototypeOf(AS)?AS:null);if(((!!Kf&&Kf.Down)&&(Kf.J1!==this))&&B.wa(this.GetExtent(
),this.G.OD(Kf.Dn))){this.Kw=0x20;this.A_=this.A_|67108864;return null;}}if(Jq){
var ME=0;var I$;this.A_=this.A_|(1<<AP.CH);for(I$=this.A_&4095;I$>0;I$=I$>>1)if(
!!(I$&1))ME=ME+1;if(ME===1)this.A_=(this.A_|16777216)|(4096<<AP.CH);}if(F_&&(this.
A_<16777216)){var Fw=this.C2();var De=null;if(!!Fw){var Td=(!!this.Ab?this.Ab:this.
G);De=Fw.Ht(B.abh(L5,AP.Dn),AP.CH,AP.DU,null,Td,0x0);}if(!!De){var N;for(N=0;N<10;
N++)if(!!(this.A_&(1<<N)))De.C9.Cf(B._NewObject(C.H4,0).InitializeDown(N,AP.D7,AP.
DU,Bg,true,AP.Dn));for(N=0;N<10;N++)if(!!(this.A_&(1<<N)))De.C9.Cf(B._NewObject(
C.H4,0).InitializeUp(N,AP.D7,AP.D7,0,AP.DU,Bg,false,AP.Dn,AP.Dn));}}if(F_)this.A_=(
this.A_&~(1<<AP.CH))|33554432;if(NX&&(this.A_<16777216))this.A_=this.A_|67108864;
if(F_&&AP.EU)this.A_=this.A_|67108864;if(F_&&!(this.A_&4095))this.Kw=0x0;if(F_&&
!(this.A_&16777215))this.A_=0;if(Ik&&(this.A_>=67108864)){var Fw=this.C2();if(!!
Fw)Fw.Ng(null,null,this,this.Kw);}if((Ik&&!!(this.A_&16777216))&&!!(this.A_&33554432
)){Ik=false;F_=true;}if(!!AP&&!(this.A_&(4096<<AP.CH)))return this;if(!!B3&&!(this.
A_&(4096<<B3.CH)))return this;if(F_&&!(this.A_&16777216))return this;if(((Jq||NG
)||Ik)&&((this.A_<16777216)||(this.A_>=33554432)))return this;if(F_)this.A_=this.
A_&3758100479;if(F_&&!(this.A_&16777215))this.A_=0;if(!!AP){this.Down=Jq||Ik;this.
GR=this.Lb(AP.D7);this.FD=AP.FD;this.D7=AP.D7;this.Gk=Bg;this.C3=AP.C3;this.DU=AP.
DU;this.EU=AP.EU;this.CH=AP.CH;this.A1=AP.A1;if(AP.Down&&!AP.C3)Ki=false;}if(!!B3
){this.Down=true;this.GR=this.Lb(B3.D7);this.FD=B3.FD;this.D7=B3.D7;this.Gk=B3.Gk;
this.C3=B3.C3;this.DU=B3.DU;this.CH=B3.CH;this.EU=false;this.A1=B3.A1;}var Mo=this.
Down;if((!!AP&&this.Down)&&!this.C3)(A=this.Y)?A[1].call(A[0],this):null;if((this.
Down&&this.GR)&&!Ki){this.Mp=true;(A=this.Lo)?A[1].call(A[0],this):null;}if(this.
Mp&&(((Mo&&!this.GR)&&Ki)||((!Mo&&this.GR)&&Ki))){this.Mp=false;(A=this.Lp)?A[1].
call(A[0],this):null;}if(!!AP&&!Mo)(A=this.Hy)?A[1].call(A[0],this):null;if(!!this.
E4){var Hn=0x0;if(((((this.E4&0x10)===0x10)&&!!AP)&&AP.Down)&&(AP.C3>=1000))Hn=0x10;
if((((this.E4&0x1)===0x1)&&!!B3)&&((B3.Dn[1]-B3.Gf[1])<=-this.IP))Hn=0x1;if((((this.
E4&0x2)===0x2)&&!!B3)&&((B3.Dn[1]-B3.Gf[1])>=this.IP))Hn=0x2;if((((this.E4&0x4)===
0x4)&&!!B3)&&((B3.Dn[0]-B3.Gf[0])<=-this.IP))Hn=0x4;if((((this.E4&0x8)===0x8)&&!
!B3)&&((B3.Dn[0]-B3.Gf[0])>=this.IP))Hn=0x8;if(!!Hn){var Fw=this.C2();if(!!Fw){this.
Kw=Hn;Fw.Ng(null,this,this,Hn);}}}return this;},Ht:function(AD,Aa,DX,HF,Gw,HK){var
A;if(!!HF&&(HF!==this))return null;if((DX<1)||(DX>this.M0))return null;if(this.A_>=
33554432)return null;if((this.A_>=16777216)&&!(this.A_&(4096<<Aa)))return null;if(
!!(HK&this.E4))return null;if(this.OA()){var Z=B.lb(AD,this.GetExtent());if(!((Z[
0]>=Z[2])||(Z[1]>=Z[3]))){var Hf=B.aaI(AD);var Eg=Bg;if(Hf[0]<Z[0])Eg=[Z[0]-Hf[0
],Eg[1]];if(Hf[0]>=Z[2])Eg=[(Z[2]-Hf[0])-1,Eg[1]];if(Hf[1]<Z[1])Eg=[Eg[0],Z[1]-Hf[
1]];if(Hf[1]>=Z[3])Eg=[Eg[0],(Z[3]-Hf[1])-1];return B._NewObject(C.KH,0).Initialize(
this,Eg);}}else{var Bq=B.abi(9,B.wf,null);var N;Bq.Set(0,B.aaI(AD));Bq.Set(1,Bq.
Get(0));Bq.Set(2,Bq.Get(0));Bq.Set(3,Bq.Get(0));Bq.Set(4,Bq.Get(0));Bq.Set(1,[AD[
0],Bq.Get(1)[1]]);Bq.Set(2,[Bq.Get(2)[0],AD[1]]);Bq.Set(3,[AD[2],Bq.Get(3)[1]]);
Bq.Set(4,[Bq.Get(4)[0],AD[3]]);Bq.Set(5,AD.slice(0,2));Bq.Set(6,[AD[2],AD[1]]);Bq.
Set(7,[AD[0],AD[3]]);Bq.Set(8,AD.slice(2,4));for(N=0;N<9;N=N+1)if(this.Lb(Bq.Get(
N)))return B._NewObject(C.KH,0).Initialize(this,B.abe(Bq.Get(N),Bq.Get(0)));}return null;
},OO:function(E){if(E<1)E=1;this.IP=E;},OM:function(E){if(E<1)E=1;this.M0=E;},L:
function(E){if(E)this.AM(0x100000,0x0);else this.AM(0x0,0x100000);},_Init:function(
aArg){C.IN._Init.call(this,aArg);this.__proto__=C.LO;this.F=0x10011B;},_Mark:function(
D){var A;C.IN._Mark.call(this,D);if((A=this.Lp)&&((A=A[0])._cycle!=D))A._Mark(A.
_cycle=D);if((A=this.Lo)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hy
)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Y)&&((A=A[0])._cycle!=D))
A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"};C.Gi={X:null,Hy:null
,Y:null,HU:0,A1:0,Ne:0,FB:148,BO:0,AQ:0,A8:true,Down:false,LK:false,AZ:function(
aArg){var A;var AE=(C.K.isPrototypeOf(A=this.H)?A:null);if(!AE)throw new Error(L6
);this.X=AE.Kl;AE.Kl=this;},Cf:function(AS){var A;if(!!AS&&AS.OC(this.FB)){this.
Down=AS.Down;this.BO=AS.BO;this.AQ=AS.AQ;this.A1=AS.A1;if(AS.Down){this.Ne=this.
HU;this.LK=this.HU>0;if(!this.LK)(A=this.Y)?A[1].call(A[0],this):null;this.HU=this.
HU+1;return true;}if(!AS.Down){this.LK=this.HU>1;this.Ne=this.HU-1;this.HU=0;(A=
this.Hy)?A[1].call(A[0],this):null;return true;}}return false;},_Init:function(aArg
){this.__proto__=C.Gi;this.AZ(aArg);B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.X)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Hy)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Y)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle
!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:"Core::KeyPressHandler"
};C.KH={C9:null,Is:0,Gk:B.wf,Initialize:function(Q,aOffset){this.C9=Q;this.Gk=aOffset;
this.Is=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[1]);return this;},_Init:function(
aArg){this.__proto__=C.KH;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;}
,_ReInit:function(){},_Mark:function(D){var A;if((A=this.C9)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::CursorHit"};C.JK={HR:null,DD:B.wg,Am:B.wg,isEmpty:false,_Init:
function(aArg){this.__proto__=C.JK;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.HR)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null
,_cycle:0,_observers:null,_className:"Core::LayoutContext"};C.JL={Jp:B.wf,Jo:B.wf
,Jn:B.wf,Jm:B.wf,_Init:function(aArg){C.JK._Init.call(this,aArg);this.__proto__=
C.JL;},_className:"Core::LayoutQuadContext"};C.KK={AE:null,X:null,D1:null,D4:null
,Cv:null,HS:null,_Init:function(aArg){this.__proto__=C.KK;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.AE)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.X)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.D1)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.D4)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Cv)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.HS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A.
_Mark(A._cycle=D);},H:null,_cycle:0,_observers:null,_className:"Core::DialogContext"
};C.Ni={DZ:null,AV:null,AR:null,NK:false,SL:function(){if(!this.DZ)return;var Eu=
this.DZ;this.DZ.Et=null;this.DZ=null;B.pe([this,this.MH],this);Eu.M4(this);},SX:
function(T){if(!!this.DZ)return;if(!this.AR)return;this.DZ=this.AR;this.AR=this.
AR.X;if(!!this.AR)this.AR.Ab=null;else this.AV=null;this.DZ.X=null;this.NK=true;
this.DZ.HB(this);this.NK=false;},S3:function(T){B.pe([this,this.SX],this);},S2:function(
T){B.pe([this,this.S3],this);},MH:function(T){B.pe([this,this.S2],this);},N_:function(
BG){if(!BG||!BG.Et)return;if(BG.Et!==this)throw new Error(L7);var N1=false;if(this.
DZ===BG){this.DZ=null;N1=true;B.pe([this,this.MH],this);}else{if(!!BG.X)BG.X.Ab=
BG.Ab;else this.AV=BG.Ab;if(!!BG.Ab)BG.Ab.X=BG.X;else this.AR=BG.X;BG.Ab=null;BG.
X=null;}BG.Et=null;if(N1)BG.M3(this);},O3:function(BG,SJ){if(!BG)return;if(!!BG.
Et)throw new Error(L8);BG.Et=this;if(SJ){BG.X=this.AR;if(!!this.AR)this.AR.Ab=BG;
else this.AV=BG;this.AR=BG;}else{BG.Ab=this.AV;if(!!this.AV)this.AV.X=BG;else this.
AR=BG;this.AV=BG;}if(!this.DZ)B.pe([this,this.MH],this);},_Init:function(aArg){this.
__proto__=C.Ni;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.DZ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.AV)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AR)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::TaskQueue"};C.IS={Et:null,Ab:null,X:null,M4:function(I2){
},M3:function(I2){},HB:function(I2){this.MT();},D6:function(){if(!!this.Et&&(this.
Et.DZ===this))this.Et.SL();},MT:function(){if(!!this.Et)this.Et.N_(this);},La:function(
){return!!this.Et&&(this.Et.DZ===this);},_Init:function(aArg){this.__proto__=C.IS;
B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Et)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ab
)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.X)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null,_cycle:0,_observers:
null,_className:"Core::Task"};C.Gm={resource:null,Fc:function(){this.resource=null;
},AZ:function(aArg){this.resource=aArg;},_Init:function(aArg){this.__proto__=C.Gm;
this.AZ(aArg);B.h7++;},_Done:function(){this.Fc();this.__proto__=null;B.h7--;},_ReInit:
function(){},_Mark:function(D){var A;if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=
D);},H:null,_cycle:0,_observers:null,_className:"Core::Resource"};C.Timer={Bi:null
,timer:null,A1:0,Period:1000,Jy:0,A8:false,Fc:function(){var tmp=this.timer;if(!
!tmp)tmp.DestroyTimer();this.timer=null;},Kr:function(aBegin,aPeriod){if(aBegin<
0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(!tmp&&((aBegin>0)||(aPeriod>
0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer();tmp.StartTimer(aBegin
,aPeriod);}this.timer=tmp;},Bt:function(E){if(E<0)E=0;if(E===this.Period)return;
this.Period=E;if(this.A8)this.Kr(this.Jy,E);},Bm:function(E){if(E<0)E=0;if(E===this.
Jy)return;this.Jy=E;if(this.A8)this.Kr(E,this.Period);},L:function(E){if(E===this.
A8)return;this.A8=E;if(E)this.Kr(this.Jy,this.Period);else this.Kr(0,0);this.A1=
this.Iw();},Iw:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$
)|0;return ticksCount;},Trigger:function(){var A;this.A1=this.Iw();if(!this.Period
)this.L(false);(A=this.Bi)?A[1].call(A[0],this):null;},_Init:function(aArg){this.
__proto__=C.Timer;B.h7++;},_Done:function(){this.Fc();this.__proto__=null;B.h7--;
},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Bi)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.H)&&(A._cycle!=D))A._Mark(A._cycle=D);},H:null
,_cycle:0,_observers:null,_className:"Core::Timer"};C.UH={A2:0x1,Tn:0x2,TT:0x4,UF:
0x8,A8:0x10,Ur:0x20,TU:0x40,T6:0x80,TS:0x100,T0:0x200,TM:0x400,Ud:0x800,Nj:0x1000
,UG:0x2000,T9:0x4000,T_:0x8000,TF:0x10000,T8:0x20000,Un:0x40000,TG:0x80000,Uc:0x100000
,TE:0x200000};C.E0={Ue:0x1,Uf:0x2,Tj:0x4,Tk:0x8,Tl:0x10,Ti:0x20};C.TX={M2:0,UC:1
,Tu:2,T1:3,Uh:4,UD:5,UE:6,Tv:7,Tw:8,T3:9,T2:10,Uj:11,Ui:12};C.It={M2:0,UA:1,Left:
2,Ts:3,Uz:4,Tr:5,UB:6,Right:7,Tt:8};C.KeyCode={NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:
5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10,Key1:11,Key2:12,Key3:13,Key4:14,Key5:
15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,Green:21,Blue:22,Yellow:23,White:24,Magenta:
25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:
37,Display:38,SkipPrev:39,SkipNext:40,Home:41,End:42,Insert:43,Delete:44,Clear:45
,VolumeUp:46,VolumeDown:47,Show:48,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:
54,Fwd:55,SlowRev:56,SlowFwd:57,SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62
,TV:63,DVD:64,VCR:65,EPG:66,OSD:67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:
73,Karaoke:74,Game:75,Subtitle:76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:
82,Mode:83,Mute:84,User0:85,User1:86,User2:87,User3:88,User4:89,User5:90,User6:91
,User7:92,User8:93,User9:94,User10:95,User11:96,User12:97,User13:98,User14:99,User15:
100,User16:101,User17:102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:
108,KeyE:109,KeyF:110,KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:
117,KeyN:118,KeyO:119,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:
126,KeyW:127,KeyX:128,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134
,Divide:135,Equals:136,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141
,AlphaOrDigitKeys:142,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:
146,CursorKeys:147,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:
153,CtrlKeyB:154,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159
,CtrlKeyH:160,CtrlKeyI:161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:
166,CtrlKeyO:167,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172
,CtrlKeyU:173,CtrlKeyV:174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:
179,CtrlKey0:180,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185
,CtrlKey6:186,CtrlKey7:187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:
192,CtrlF4:193,CtrlF5:194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199
,CtrlEnter:200,CtrlEscape:201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205
,CtrlPageUp:206,CtrlPageDown:207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210
,CtrlHome:211,CtrlEnd:212,CtrlTab:213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:
216,CtrlShiftKeyD:217,CtrlShiftKeyE:218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:
221,CtrlShiftKeyI:222,CtrlShiftKeyJ:223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:
226,CtrlShiftKeyN:227,CtrlShiftKeyO:228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:
231,CtrlShiftKeyS:232,CtrlShiftKeyT:233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:
236,CtrlShiftKeyX:237,CtrlShiftKeyY:238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:
241,CtrlShiftKey1:242,CtrlShiftKey2:243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:
246,CtrlShiftKey6:247,CtrlShiftKey7:248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:
251,CtrlShiftF2:252,CtrlShiftF3:253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:
256,CtrlShiftF7:257,CtrlShiftF8:258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:
261,CtrlShiftEscape:262,CtrlShiftUp:263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:
266,CtrlShiftPageUp:267,CtrlShiftPageDown:268,CtrlShiftBackspace:269,CtrlShiftInsert:
270,CtrlShiftDelete:271,CtrlShiftHome:272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:
275,AltF2:276,AltF3:277,AltF4:278,AltF5:279,AltF6:280,AltF7:281,AltF8:282,AltF9:
283,AltF10:284,AltEnter:285,AltEscape:286,AltUp:287,AltDown:288,AltLeft:289,AltRight:
290,AltPageUp:291,AltPageDown:292,AltBackspace:293,AltInsert:294,AltDelete:295,AltHome:
296,AltEnd:297,AltTab:298,AltShiftF1:299,AltShiftF2:300,AltShiftF3:301,AltShiftF4:
302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:
308,AltShiftEnter:309,AltShiftEscape:310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:
313,AltShiftRight:314,AltShiftPageUp:315,AltShiftPageDown:316,AltShiftBackspace:
317,AltShiftInsert:318,AltShiftDelete:319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:
322,ShiftF1:323,ShiftF2:324,ShiftF3:325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:
329,ShiftF8:330,ShiftF9:331,ShiftF10:332,ShiftEnter:333,ShiftEscape:334,ShiftUp:
335,ShiftDown:336,ShiftLeft:337,ShiftRight:338,ShiftPageUp:339,ShiftPageDown:340
,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:343,ShiftHome:344,ShiftEnd:345,ShiftTab:
346};C.Ug={UL:0x1,UI:0x2,UJ:0x4,UK:0x8,T5:0x10,TW:0x20};
C._Init=function(){C.IN.__proto__=C.C9;C.B_.__proto__=C.C9;C.K.__proto__=C.B_;C.Root.
__proto__=C.K;C.KeyEvent.__proto__=C.Event;C.Jz.__proto__=C.Event;C.H4.__proto__=
C.Event;C.JA.__proto__=C.Event;C.IM.__proto__=C.B_;C.LO.__proto__=C.IN;C.JL.__proto__=
C.JK;};C._ReInit=function(){};C.D$=function(D){};return C;})();

/* Embedded Wizard */