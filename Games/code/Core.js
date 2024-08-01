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
var AR=[0,0];var Bz=[0,0,0,0];var Em="The view does not belong to this group";var
Gr=[800,480];var FI="The dialog component is already presented";var Gs="The dialog component is actually not presented";
var L1="No fader to perform the fade-in/out operation";var Kc="Trying to use the same fader twice";
var G4="Trying to fade-in/out a group which belongs to another owner";var Kd="No view to restack";
var IY="View is not in this group";var G5="No view to remove";var L2="No view to add";
var G6="View already in a group";var L3="Recursive invalidate during active update cycle.";
var FJ=[-8,-8,9,9];var L4=[0,0,1,1];var L5="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var L6="Trying to cancel a task not belonging to this queue!";
var L7="Trying to enqueue a task twice!";
C.C7={W:null,Z:null,G:null,Bi:null,F:0x103,El:0,EZ:0x14,Jc:function(Ap,Kf){},Ax:function(
E){if(this.El===E)return;this.El=E;if(!!this.G){var GE=this.W;var Dy=0;while(!!GE&&(
E>GE.El)){GE=GE.W;Dy=Dy+1;}GE=this.Z;while(!!GE&&(E<GE.El)){GE=GE.Z;Dy=Dy-1;}if(
!!Dy)this.G.FE(this,Dy);}},II:function(E){var A;var Dy=E^this.EZ;if(!Dy)return;this.
EZ=E;if(!!this.Bi&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.pe([A=this.
G,A.Df],this);this.G.Aw([0,0,(A=this.G.U)[2]-A[0],A[3]-A[1]]);}if(!!this.Bi&&((this.
F&0x400)===0x400)){this.Bi.HQ.F=this.Bi.HQ.F|0x1000;this.G.F=this.G.F|0x4000;B.pe([
A=this.G,A.Df],this);}},Dn:function(){var Ar=this.G;while(!!Ar){var Fu=(C.Root.isPrototypeOf(
Ar)?Ar:null);if(!!Fu)return Fu;Ar=Ar.G;}return null;},Fb:function(BC,aClip,aOffset
,aOpacity,aBlend){},GetClipping:function(){return this.GetExtent();},Ci:function(
AT){return null;},Hn:function(AC,Y,DO,HE,Gu,HJ){return null;},Jx:function(AC){return AC;
},Jz:function(Ap,Eo){return AR;},Ls:function(aOffset,Ke){},GetExtent:function(){
return Bz;},AH:function(DN,En){var A;if(((this.F&0x200)===0x200))DN=DN&~0x400;var
MF=(this.F&~En)|DN;var EM=MF^this.F;this.F=MF;if(!!this.G&&!!(EM&0x14)){var NH=((
this.F&0x14)===0x14);if(NH&&!this.G.CS)this.G.Ek(this);if(!NH&&(this.G.CS===this
))this.G.Ek(this.G.M1(this,0x14));}if(!!this.G&&!!(EM&0x403))this.G.Aw(this.GetClipping(
));if(((!!this.Bi&&!!this.G)&&((MF&0x400)===0x400))&&((EM&0x1)===0x1)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Df],this);}if(!!this.G&&((EM&0x400
)===0x400)){this.Bi=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.Df],this);}if(((((EM&0x100000)===0x100000)&&((En&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.AH(0x0,0x10);if(((((EM&0x100000
)===0x100000)&&((DN&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.G)&&((this.G.F&0x10)===
0x10))))this.AH(0x10,0x0);if(((((EM&0x200000)===0x200000)&&((En&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.AH(0x10,0x0);if((((((
EM&0x200000)===0x200000)&&((DN&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.G&&!((this.G.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.G)&&(this.G.A1.AI!==this))))this.AH(0x0,0x10);},_Init:
function(aArg){this.__proto__=C.C7;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.W)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Bi)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:
null,_className:"Core::View"};C.IQ={Cq:B.wf,CZ:B.wf,Cp:B.wf,CY:B.wf,Jc:function(
Ap,Kf){var Aq=B._NewObject(C.JN,0);this.Bi=null;Aq.DB=this.GetExtent();Aq.Ao=Ap;
Aq.HQ=Kf;Aq.Jo=this.CY;Aq.Jp=this.Cp;Aq.Jq=this.CZ;Aq.Jr=this.Cq;this.Bi=Aq;},Jz:
function(Ap,Eo){var A;var B9=this.EZ;var Aq=(C.JN.isPrototypeOf(A=this.Bi)?A:null
);var Ah=Aq.DB[0];var Ai=Aq.DB[1];var Am=Aq.DB[2];var An=Aq.DB[3];var DA=[Ap[2]-
Ap[0],Ap[3]-Ap[1]];var AL=Am-Ah;var AJ=An-Ai;if(!Eo){var ER=[(A=Aq.Ao)[2]-A[0],A[
3]-A[1]];Ah=Ah-Aq.Ao[0];Ai=Ai-Aq.Ao[1];if(ER[0]!==DA[0]){var C9=((B9&0x4)===0x4);
var C_=((B9&0x8)===0x8);var Fs=((B9&0x1)===0x1);if(!C9&&(Fs||!C_))Ah=((Ah*DA[0])
/ER[0])|0;if(!C_&&(Fs||!C9)){Am=Am-Aq.Ao[0];Am=((Am*DA[0])/ER[0])|0;Am=Am-DA[0];
}else Am=Am-Aq.Ao[2];Ah=Ah+Ap[0];Am=Am+Ap[2];if(!Fs){if(C9&&!C_)Am=Ah+AL;else if(
!C9&&C_)Ah=Am-AL;else{Ah=Ah+((((Am-Ah)-AL)/2)|0);Am=Ah+AL;}}}else{Am=Am-Aq.Ao[2];
Ah=Ah+Ap[0];Am=Am+Ap[2];}if(ER[1]!==DA[1]){var C$=((B9&0x10)===0x10);var C8=((B9&
0x20)===0x20);var Ft=((B9&0x2)===0x2);if(!C$&&(Ft||!C8))Ai=((Ai*DA[1])/ER[1])|0;
if(!C8&&(Ft||!C$)){An=An-Aq.Ao[1];An=((An*DA[1])/ER[1])|0;An=An-DA[1];}else An=An-
Aq.Ao[3];Ai=Ai+Ap[1];An=An+Ap[3];if(!Ft){if(C$&&!C8)An=Ai+AJ;else if(!C$&&C8)Ai=
An-AJ;else{Ai=Ai+((((An-Ai)-AJ)/2)|0);An=Ai+AJ;}}}else{An=An-Aq.Ao[3];Ai=Ai+Ap[1
];An=An+Ap[3];}}else{switch(Eo){case 3:{Ah=Ap[0];Am=Ah+AL;}break;case 4:{Am=Ap[2
];Ah=Am-AL;}break;case 1:{Ai=Ap[1];An=Ai+AJ;}break;case 2:{An=Ap[3];Ai=An-AJ;}break;
default:;}if((Eo===3)||(Eo===4)){var C$=((B9&0x10)===0x10);var C8=((B9&0x20)===0x20
);var Ft=((B9&0x2)===0x2);if(Ft){Ai=Ap[1];An=Ap[3];}else if(C$&&!C8){Ai=Ap[1];An=
Ai+AJ;}else if(C8&&!C$){An=Ap[3];Ai=An-AJ;}else{Ai=Ap[1]+((((Ap[3]-Ap[1])-AJ)/2)|
0);An=Ai+AJ;}}if((Eo===1)||(Eo===2)){var C9=((B9&0x4)===0x4);var C_=((B9&0x8)===
0x8);var Fs=((B9&0x1)===0x1);if(Fs){Ah=Ap[0];Am=Ap[2];}else if(C9&&!C_){Ah=Ap[0];
Am=Ah+AL;}else if(C_&&!C9){Am=Ap[2];Ah=Am-AL;}else{Ah=Ap[0]+((((Ap[2]-Ap[0])-AL)
/2)|0);Am=Ah+AL;}}}Aq.isEmpty=(Ah>=Am)||(Ai>=An);AL=(Am-Ah)-1;AJ=(An-Ai)-1;var Gx=
Aq.DB[0];var Gy=Aq.DB[1];var FS=(Aq.DB[2]-Gx)-1;var FR=(Aq.DB[3]-Gy)-1;if(!FS)FS=
1;if(!FR)FR=1;if(((this.F&0x100)===0x100)){this.CY=[Ah+((((Aq.Jo[0]-Gx)*AL)/FS)|
0),Ai+((((Aq.Jo[1]-Gy)*AJ)/FR)|0)];this.Cp=[Ah+((((Aq.Jp[0]-Gx)*AL)/FS)|0),Ai+((((
Aq.Jp[1]-Gy)*AJ)/FR)|0)];this.CZ=[Ah+((((Aq.Jq[0]-Gx)*AL)/FS)|0),Ai+((((Aq.Jq[1]-
Gy)*AJ)/FR)|0)];this.Cq=[Ah+((((Aq.Jr[0]-Gx)*AL)/FS)|0),Ai+((((Aq.Jr[1]-Gy)*AJ)/
FR)|0)];}else{this.LA([Ah+((((Aq.Jo[0]-Gx)*AL)/FS)|0),Ai+((((Aq.Jo[1]-Gy)*AJ)/FR
)|0)]);this.LB([Ah+((((Aq.Jp[0]-Gx)*AL)/FS)|0),Ai+((((Aq.Jp[1]-Gy)*AJ)/FR)|0)]);
this.LC([Ah+((((Aq.Jq[0]-Gx)*AL)/FS)|0),Ai+((((Aq.Jq[1]-Gy)*AJ)/FR)|0)]);this.LD([
Ah+((((Aq.Jr[0]-Gx)*AL)/FS)|0),Ai+((((Aq.Jr[1]-Gy)*AJ)/FR)|0)]);this.Bi=Aq;}return[
AL+1,AJ+1];},Ls:function(aOffset,Ke){if(Ke){this.CY=B.abf(this.CY,aOffset);this.
Cp=B.abf(this.Cp,aOffset);this.CZ=B.abf(this.CZ,aOffset);this.Cq=B.abf(this.Cq,aOffset
);}else{this.LA(B.abf(this.CY,aOffset));this.LB(B.abf(this.Cp,aOffset));this.LC(
B.abf(this.CZ,aOffset));this.LD(B.abf(this.Cq,aOffset));}},GetExtent:function(){
if(!!this.Bi&&this.Bi.isEmpty)return Bz;var Ah=this.CY[0];var Ai=this.CY[1];var Am=
this.CZ[0];var An=this.CZ[1];if((((this.Cq[0]!==Ah)||(this.Cp[1]!==Ai))||(this.Cp[
0]!==Am))||(this.Cq[1]!==An)){if(this.Cp[0]<Ah)Ah=this.Cp[0];if(this.CZ[0]<Ah)Ah=
this.CZ[0];if(this.Cq[0]<Ah)Ah=this.Cq[0];if(this.Cp[1]<Ai)Ai=this.Cp[1];if(this.
CZ[1]<Ai)Ai=this.CZ[1];if(this.Cq[1]<Ai)Ai=this.Cq[1];if(this.CY[0]>Am)Am=this.CY[
0];if(this.Cp[0]>Am)Am=this.Cp[0];if(this.Cq[0]>Am)Am=this.Cq[0];if(this.CY[1]>An
)An=this.CY[1];if(this.Cp[1]>An)An=this.Cp[1];if(this.Cq[1]>An)An=this.Cq[1];}else{
var tmp;if(Am<Ah){tmp=Ah;Ah=Am;Am=tmp;}if(An<Ai){tmp=Ai;Ai=An;An=tmp;}}return[Ah
,Ai,Am+1,An+1];},LD:function(E){var A;if(B.aaX(E,this.Cq))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Aw(this.GetClipping());this.Bi=null;this.Cq=E;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.Df],this);}},LC:function(E){var A;if(B.aaX(E,this.CZ))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping());this.Bi=null;
this.CZ=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping());if((!!
this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Df],this);}},LB:function(E){var A;
if(B.aaX(E,this.Cp))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping(
));this.Bi=null;this.Cp=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Df],this);}},LA:function(
E){var A;if(B.aaX(E,this.CY))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(
this.GetClipping());this.Bi=null;this.CY=E;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Aw(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Df],this
);}},Lj:function(Fj){var Br=B.abi(4,B.wf,null);var O=0;var AK=3;var Mw=false;var
Mx=false;Br.Set(0,this.CY);Br.Set(1,this.Cp);Br.Set(2,this.CZ);Br.Set(3,this.Cq);
while(O<4){var NZ=Br.Get(O)[0];var KK=Br.Get(O)[1];var S1=Br.Get(AK)[0];var MT=Br.
Get(AK)[1];if(((KK>Fj[1])!==(MT>Fj[1]))||((KK<Fj[1])!==(MT<Fj[1]))){var Cd=((((S1-
NZ)*(Fj[1]-KK))/(MT-KK))|0)+NZ;if(Fj[0]>Cd)Mw=!Mw;if(Fj[0]<Cd)Mx=!Mx;}AK=O;O=O+1;
}return Mw||Mx;},Oy:function(){return((((this.CY[0]===this.Cq[0])&&(this.Cp[0]===
this.CZ[0]))&&(this.CY[1]===this.Cp[1]))&&(this.CZ[1]===this.Cq[1]))||((((this.CY[
0]===this.Cp[0])&&(this.CZ[0]===this.Cq[0]))&&(this.CY[1]===this.Cq[1]))&&(this.
Cp[1]===this.CZ[1]));},_Init:function(aArg){C.C7._Init.call(this,aArg);this.__proto__=
C.IQ;},_className:"Core::QuadView"};C.Ca={U:B.wg,Jc:function(Ap,Kf){var Aq=B._NewObject(
C.JM,0);Aq.DB=this.U;Aq.Ao=Ap;Aq.HQ=Kf;this.Bi=Aq;},Jz:function(Ap,Eo){var A;var
B9=this.EZ;var Aq=this.Bi;var Ah=Aq.DB[0];var Ai=Aq.DB[1];var Am=Aq.DB[2];var An=
Aq.DB[3];var DA=[Ap[2]-Ap[0],Ap[3]-Ap[1]];var AL=Am-Ah;var AJ=An-Ai;if(!Eo){var ER=[(
A=Aq.Ao)[2]-A[0],A[3]-A[1]];Ah=Ah-Aq.Ao[0];Ai=Ai-Aq.Ao[1];if(ER[0]!==DA[0]){var C9=((
B9&0x4)===0x4);var C_=((B9&0x8)===0x8);var Fs=((B9&0x1)===0x1);if(!C9&&(Fs||!C_)
)Ah=((Ah*DA[0])/ER[0])|0;if(!C_&&(Fs||!C9)){Am=Am-Aq.Ao[0];Am=((Am*DA[0])/ER[0])|
0;Am=Am-DA[0];}else Am=Am-Aq.Ao[2];Ah=Ah+Ap[0];Am=Am+Ap[2];if(!Fs){if(C9&&!C_)Am=
Ah+AL;else if(!C9&&C_)Ah=Am-AL;else{Ah=Ah+((((Am-Ah)-AL)/2)|0);Am=Ah+AL;}}}else{
Am=Am-Aq.Ao[2];Ah=Ah+Ap[0];Am=Am+Ap[2];}if(ER[1]!==DA[1]){var C$=((B9&0x10)===0x10
);var C8=((B9&0x20)===0x20);var Ft=((B9&0x2)===0x2);if(!C$&&(Ft||!C8))Ai=((Ai*DA[
1])/ER[1])|0;if(!C8&&(Ft||!C$)){An=An-Aq.Ao[1];An=((An*DA[1])/ER[1])|0;An=An-DA[
1];}else An=An-Aq.Ao[3];Ai=Ai+Ap[1];An=An+Ap[3];if(!Ft){if(C$&&!C8)An=Ai+AJ;else
if(!C$&&C8)Ai=An-AJ;else{Ai=Ai+((((An-Ai)-AJ)/2)|0);An=Ai+AJ;}}}else{An=An-Aq.Ao[
3];Ai=Ai+Ap[1];An=An+Ap[3];}}else{switch(Eo){case 3:{Ah=Ap[0];Am=Ah+AL;}break;case
4:{Am=Ap[2];Ah=Am-AL;}break;case 1:{Ai=Ap[1];An=Ai+AJ;}break;case 2:{An=Ap[3];Ai=
An-AJ;}break;default:;}if((Eo===3)||(Eo===4)){var C$=((B9&0x10)===0x10);var C8=((
B9&0x20)===0x20);var Ft=((B9&0x2)===0x2);if(Ft){Ai=Ap[1];An=Ap[3];}else if(C$&&!
C8){Ai=Ap[1];An=Ai+AJ;}else if(C8&&!C$){An=Ap[3];Ai=An-AJ;}else{Ai=Ap[1]+((((Ap[
3]-Ap[1])-AJ)/2)|0);An=Ai+AJ;}}if((Eo===1)||(Eo===2)){var C9=((B9&0x4)===0x4);var
C_=((B9&0x8)===0x8);var Fs=((B9&0x1)===0x1);if(Fs){Ah=Ap[0];Am=Ap[2];}else if(C9&&
!C_){Ah=Ap[0];Am=Ah+AL;}else if(C_&&!C9){Am=Ap[2];Ah=Am-AL;}else{Ah=Ap[0]+((((Ap[
2]-Ap[0])-AL)/2)|0);Am=Ah+AL;}}}Aq.isEmpty=(Ah>=Am)||(Ai>=An);if(((this.F&0x100)===
0x100))this.U=[Ah,Ai,Am,An];else{this.J([Ah,Ai,Am,An]);this.Bi=Aq;}return[Am-Ah,
An-Ai];},Ls:function(aOffset,Ke){if(Ke)this.U=B.abh(this.U,aOffset);else this.J(
B.abh(this.U,aOffset));},GetExtent:function(){return this.U;},J:function(E){var A;
if(B.aaY(E,this.U))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping(
));this.Bi=null;this.U=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Df],this);}},_Init:function(
aArg){C.C7._Init.call(this,aArg);this.__proto__=C.Ca;},_className:"Core::RectView"
};C.K={AS:null,AW:null,Kv:null,A1:null,EN:null,HS:null,CS:null,BT:255,I9:0,Ja:0,
I$:0,I_:0,AY:function(aArg){this.Ez();},Fb:function(BC,aClip,aOffset,aOpacity,aBlend
){var A;aOpacity=((aOpacity+1)*this.BT)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.
Sz(BC,aClip,B.abf(aOffset,this.U.slice(0,2)),aOpacity,aBlend);},GetClipping:function(
){var A;var Aa=this.U;Aa=[].concat(Aa[0]-this.I_,Aa.slice(1,4));Aa=B.abP(Aa,Aa[1
]-this.Ja);Aa=B.abN(Aa,Aa[2]+this.I$);Aa=[].concat(Aa.slice(0,3),Aa[3]+this.I9);
if(((this.F&0x80000)===0x80000)){var HW=Bz;var P;for(P=this.AS;!!P;P=P.W)if(((P.
F&0x1)===0x1))HW=B.wC(HW,P.GetClipping());Aa=B.wC(Aa,B.abh(HW,this.U.slice(0,2))
);}return Aa;},Hn:function(AC,Y,DO,HE,Gu,HJ){var A;var P=this.AW;var HO=null;var
Ag=Bz;var DX=null;var MC=!!this.EN&&(!!this.EN.DR||!!this.EN.AS);if(((A=B.lb(AC,
this.U))[0]>=A[2])||(A[1]>=A[3]))return null;AC=B.abg(AC,this.U.slice(0,2));if(!
!Gu){P=Gu;while(!!P&&(P.G!==this))P=P.G;}while(!!P){if(((P.F&0x400)===0x400)&&!DX
){DX=P.Z;while(!!DX&&!((DX.F&0x200)===0x200))DX=DX.Z;if(!!DX)Ag=B.lb(AC,DX.GetExtent(
));else Ag=Bz;}if(DX===P){DX=null;Ag=Bz;}if((!!HE&&!!(C.K.isPrototypeOf(P)?P:null
))||((((((P.F&0x8)===0x8)&&((P.F&0x10)===0x10))&&!((P.F&0x40000)===0x40000))&&!((
P.F&0x20000)===0x20000))&&(!((P.F&0x10000)===0x10000)||((this.A1.AI===P)&&!MC)))
){var DB=P.GetExtent();var Ko=HE;var HN=null;if(Ko===P)Ko=null;if(((P.F&0x400)===
0x400)){if(!(((A=B.lb(DB,Ag))[0]>=A[2])||(A[1]>=A[3])))HN=P.Hn(Ag,Y,DO,Ko,Gu,HJ);
}else if(!(((A=B.lb(DB,AC))[0]>=A[2])||(A[1]>=A[3]))||(HE===P))HN=P.Hn(AC,Y,DO,Ko
,Gu,HJ);P=P.Z;if(!!HN){if(!HO||((HN.Ix<HO.Ix)&&(HN.Ix>=0)))HO=HN;if(!HN.Ix)P=null;
}}else P=P.Z;Gu=null;}return HO;},Jx:function(AC){var A;var FK;var P=this.AS;var
HL=Bz;var Jn=true;var result=(AC=FK=B.abg(AC,this.U.slice(0,2)),FK);while(!!P){if(((
P.F&0x200)===0x200)){var Ir=(C.IP.isPrototypeOf(P)?P:null);HL=B.lb(AC,Ir.U);Jn=((
Ir.F&0x1)===0x1);}if(((P.F&0x1)===0x1)){if(((P.F&0x400)===0x400)){if(Jn){var Ag=
B.lb(P.GetClipping(),HL);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))result=B.wC(result
,P.Jx(Ag));}}else{var Ag=B.lb(P.GetClipping(),AC);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[
3])))result=B.wC(result,P.Jx(Ag));}}P=P.W;}return B.lb(B.abh(result,this.U.slice(
0,2)),this.U);},AH:function(DN,En){var A;var Kw=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((En&0x80000)===0x80000))this.G.Aw(this.GetClipping());C.Ca.AH.call(
this,DN,En);if(((!!this.G&&((this.F&0x1)===0x1))&&((DN&0x80000)===0x80000))&&!((
Kw&0x80000)===0x80000))this.G.Aw(this.GetClipping());var EM=this.F^Kw;if(!!this.
CS&&((EM&0x40)===0x40)){if(((this.F&0x40)===0x40))this.CS.AH(0x40,0x0);else this.
CS.AH(0x0,0x40);}if(!!this.A1&&((EM&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((
this.A1.AI.F&0x14)===0x14))this.A1.AI.AH(0x40,0x0);else this.A1.AI.AH(0x0,0x40);
}if(((EM&0x10)===0x10)){var P;for(P=this.AS;!!P;P=P.W)if((((P.F&0x300000)===0x300000
)&&!((P.F&0x80)===0x80))&&(!((P.F&0x10000)===0x10000)||(this.A1.AI===P)))P.AH(DN&
0x10,En&0x10);}if(!!EM){this.F=this.F|0x8000;B.pe([this,this.KI],this);}},J:function(
E){var A;if(B.aaY(E,this.U))return;var He=[(A=this.U)[2]-A[0],A[3]-A[1]];var ME=[
E[2]-E[0],E[3]-E[1]];var It=!B.aaX(He,ME);C.Ca.J.call(this,E);if((It&&(He[0]>0))&&(
He[1]>0)){var Ao=[].concat(AR,He);var P=this.AS;while(!!P){if((!P.Bi&&(P.EZ!==0x14
))&&!((P.F&0x400)===0x400))P.Jc(Ao,null);P=P.W;}}if(It){this.F=this.F|0x5000;B.pe([
this,this.KI],this);}},NR:function(AT){var NK=(C.KeyEvent.isPrototypeOf(AT)?AT:null
);var E_=this.Kv;if(!NK)return null;while(!!E_&&(!E_.A7||!E_.Ci(NK)))E_=E_.W;return E_;
},Sz:function(BC,aClip,aOffset,aOpacity,aBlend){var A;var P=this.AS;var HL=Bz;var
Jn=true;this.Od(BC,aClip,aOffset,aOpacity,aBlend);while(!!P){if(((P.F&0x200)===0x200
)){var Ir=(C.IP.isPrototypeOf(P)?P:null);Jn=((Ir.F&0x1)===0x1);HL=aClip;if(!((Ir.
F&0x80000)===0x80000))HL=B.lb(HL,B.abh(Ir.U,aOffset));}if(((P.F&0x1)===0x1)){if(((
P.F&0x400)===0x400)){if(Jn){var Ag=B.lb(B.abh(P.GetClipping(),aOffset),HL);if(!((
Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))P.Fb(BC,Ag,aOffset,aOpacity,aBlend);}}else{var Ag=
B.lb(B.abh(P.GetClipping(),aOffset),aClip);if(!((Ag[0]>=Ag[2])||(Ag[1]>=Ag[3])))
P.Fb(BC,Ag,aOffset,aOpacity,aBlend);}}P=P.W;}this.Oe(BC,aClip,aOffset,aOpacity,aBlend
);},ST:function(){var A;var Mu=((this.F&0x1000)===0x1000);var Gz=[0,0,(A=this.U)[
2]-A[0],A[3]-A[1]];var FT=false;var Io=Bz;var Ms=Bz;var P=this.AW;var DX=null;while(
!!P){if(((P.F&0x800)===0x800)){FT=true;P.F=P.F&~0x800;}if(FT&&((P.F&0x200)===0x200
))FT=false;P=P.Z;}FT=false;P=this.AS;if(Mu){this.F=this.F&~0x1000;Mu=!((Gz[0]>=Gz[
2])||(Gz[1]>=Gz[3]));}this.F=this.F|0x2000;while(!!P){if(((P.F&0x400)===0x400)){
if(!!P.Bi&&(P.Bi.HQ!==DX))P.Bi=null;if((!P.Bi&&FT)&&(P.EZ!==0x14))P.Jc(Ms,DX);}if(
!!P.Bi){if(Mu&&!((P.F&0x400)===0x400))P.Jz(Gz,0);if(FT&&((P.F&0x400)===0x400))P.
Jz(Ms,0);}if(((P.F&0x200)===0x200)){FT=((P.F&0x1000)===0x1000);DX=(C.IP.isPrototypeOf(
P)?P:null);if(FT){P.F=P.F&~0x1000;Io=DX.U;Ms=Io;FT=!((Io[0]>=Io[2])||(Io[1]>=Io[
3]));}if(FT)this.Aw(DX.U);}P=P.W;}this.F=this.F&~0x2000;this.Nm([Gz[2]-Gz[0],Gz[
3]-Gz[1]]);},Df:function(T){B.pe([this,this.KI],this);},KI:function(T){var A;var
S0=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.ST();}if(((this.F&0x8000)===0x8000)||S0){this.F=this.F&~0x8000;this.L0(this.
F);}},Ek:function(E){var A;if(!!E&&(E.G!==this))throw new Error(Em);if(!!E&&!((E.
F&0x14)===0x14))E=null;if(!!E&&((E.F&0x10000)===0x10000))E=null;if(E===this.CS)return;
if(!!this.CS)this.CS.AH(0x0,0x60);this.CS=E;if(!!E){if(((this.F&0x40)===0x40))E.
AH(0x60,0x0);else E.AH(0x20,0x0);}},L:function(E){if(E)this.AH(0x100000,0x0);else
this.AH(0x0,0x100000);},CX:function(E){var A;if(E>255)E=255;if(E<0)E=0;if(E===this.
BT)return;this.BT=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Aw(this.GetClipping(
));},Nu:function(Dg){this.CX(Dg);},E1:function(){var A;return((this.F&0x1)===0x1
);},Af:function(E){if(E)this.AH(0x1,0x0);else this.AH(0x0,0x1);},ExtendClipping:
function(HG,HH,HI,HF){var A;var I7=this.U;var DQ=I7;if(HG<0)HG=0;if(HG>255)HG=255;
if(HH<0)HH=0;if(HH>255)HH=255;if(HI<0)HI=0;if(HI>255)HI=255;if(HF<0)HF=0;if(HF>255
)HF=255;DQ=[].concat(DQ[0]-(Math.max(HG,this.I_)&0xFF),DQ.slice(1,4));DQ=B.abN(DQ
,DQ[2]+(Math.max(HH,this.I$)&0xFF));DQ=B.abP(DQ,DQ[1]-(Math.max(HI,this.Ja)&0xFF
));DQ=[].concat(DQ.slice(0,3),DQ[3]+(Math.max(HF,this.I9)&0xFF));if(HG!==this.I_
){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Aa=DQ;
Aa=B.abN(Aa,I7[0]);this.G.Aw(Aa);}this.I_=HG&0xFF;}if(HH!==this.I$){if((!!this.G&&((
this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Aa=DQ;Aa=[].concat(I7[2]
,Aa.slice(1,4));this.G.Aw(Aa);}this.I$=HH&0xFF;}if(HI!==this.Ja){if((!!this.G&&((
this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Aa=DQ;Aa=[].concat(Aa.slice(
0,3),I7[1]);this.G.Aw(Aa);}this.Ja=HI&0xFF;}if(HF!==this.I9){if((!!this.G&&((this.
F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Aa=DQ;Aa=B.abP(Aa,I7[3]);this.
G.Aw(Aa);}this.I9=HF&0xFF;}},Oe:function(BC,aClip,aOffset,aOpacity,aBlend){},Od:
function(BC,aClip,aOffset,aOpacity,aBlend){},GetMaximalSize:function(){return Gr;
},GetMinimalSize:function(){return AR;},H9:function(){var A;if(!!this.A1)return this.
A1.AI.H9();if(!((this.F&0x10000)===0x10000))return null;return this;},GM:function(
Nz){var A;return(((((this.F&0x10000)===0x10000)&&!!this.G)&&!!this.G.A1)&&(this.
G.A1.AI===this))&&(!Nz||this.G.GM(true));},GY:function(Cb,Ed,Gt,Fi,Fk,I3,E8,FN,Ec
,Ea,Eb){var A;if(!this.A1){this.Hz(Cb,Ed,Gt,Fi,Fk,null,null,Ec,Ea,Eb);return;}var
Hd=this.A1;var BP=Hd.W;if(((Cb.F&0x10000)===0x10000)&&(this.A1.AI!==Cb))throw new
Error(FI);var Fo=B._NewObject(C.KT,0);var DV=Hd.DV;var D5=null;var Cu=null;if(!!
BP){D5=BP.D5;Cu=BP.Cu;}if(!!BP&&!!Hd.HR)D5=Hd.HR;if(!!BP&&!!E8)Cu=E8;if(!!I3)DV=
I3;if(!Ed)Ed=B._GetAutoObject(B.aci.Ii);if(!Gt)Gt=Ed;if(!Fk)Fk=Fi;if(!Fi)Fi=Fk;Fo.
DV=Gt;Fo.Cu=Fi;Fo.D5=Fk;Fo.HR=FN;Fo.AI=Cb;Fo.W=this.A1.W;this.A1.W=null;this.A1=
Fo;if(this.CS===Cb)this.Ek(null);Hd.AI.AH(0x0,0x10040);if(((this.F&0x40)===0x40)&&((
Cb.F&0x4)===0x4))Cb.AH(0x10040,0x0);else Cb.AH(0x10000,0x0);if(!!Cu){this.Dl(BP.
AI,Cu.GI(),null,null,Eb);this.Dl(Hd.AI,DV.Fw(),null,null,true);this.Dl(Fo.AI,Ed.
Fx(),Ec,Ea,true);}else if(!!D5){this.Dl(BP.AI,D5.GJ(),null,null,Eb);this.Dl(Hd.AI
,DV.Fw(),null,null,true);this.Dl(Fo.AI,Ed.Fx(),Ec,Ea,true);}else if(!!DV){this.Dl(
Hd.AI,DV.Fw(),null,null,Eb);this.Dl(Fo.AI,Ed.Fx(),Ec,Ea,true);}else this.Dl(Fo.AI
,Ed.Fx(),Ec,Ea,Eb);},H6:function(Cb,I3,E8,FN,Ec,Ea,Eb){var A;if(!this.A1)return;
if(!Cb)return;var B7=this.A1;var BP=this.A1.W;var HV=null;while((!!B7&&(B7.AI!==
Cb))&&!!B7.W){HV=B7;B7=BP;BP=B7.W;}if(!B7||(B7.AI!==Cb))throw new Error(Gs);if(!
HV){this.A1=BP;B7.W=null;}else{HV.W=BP;B7.W=null;}B7.AI.AH(0x0,0x10040);if(((((this.
F&0x10)===0x10)&&!!BP)&&!HV)&&((BP.AI.F&0x200000)===0x200000))BP.AI.AH(0x10,0x0);
if(((((this.F&0x40)===0x40)&&!!BP)&&!HV)&&((BP.AI.F&0x4)===0x4))BP.AI.AH(0x40,0x0
);var DV=B7.DV;var D5=null;var Cu=null;if(!!BP)D5=BP.D5;if(!!BP&&!!B7.HR)D5=B7.HR;
if(!!BP&&!!FN)D5=FN;if(!!HV&&!!BP)Cu=BP.Cu;if((!!HV&&!!BP)&&!!E8)Cu=E8;if(!!I3)DV=
I3;if(!!Cu){this.Dl(BP.AI,Cu.GI(),null,null,Eb);this.Dl(B7.AI,DV.Fw(),Ec,Ea,true
);}else if(!!D5){this.Dl(BP.AI,D5.GJ(),null,null,Eb);this.Dl(B7.AI,DV.Fw(),Ec,Ea
,true);}else this.Dl(B7.AI,DV.Fw(),Ec,Ea,Eb);},Hz:function(Cb,Ed,Gt,Fi,Fk,E8,FN,
Ec,Ea,Eb){var A;if(!Cb)return;if(!!this.A1&&(this.A1.AI===Cb)){this.GY(Cb,Ed,Gt,
Fi,Fk,null,E8,FN,Ec,Ea,Eb);return;}if(((Cb.F&0x10000)===0x10000))throw new Error(
FI);var B7=B._NewObject(C.KT,0);if(!!this.A1&&!this.A1.Cu){if(!FN)FN=E8;if(!E8)E8=
FN;}var Cu=null;if(!!this.A1)Cu=this.A1.Cu;if(!!this.A1&&!!E8)Cu=E8;if(!Ed)Ed=B.
_GetAutoObject(B.aci.Ii);if(!Gt)Gt=Ed;if(!Fk)Fk=Fi;if(!Fi)Fi=Fk;B7.DV=Gt;B7.Cu=Fi;
B7.D5=Fk;B7.HR=FN;if(this.CS===Cb)this.Ek(null);if(!!this.A1&&((this.A1.AI.F&0x200000
)===0x200000))this.A1.AI.AH(0x0,0x10);if(!!this.A1)this.A1.AI.AH(0x0,0x40);if(((
this.F&0x40)===0x40)&&((Cb.F&0x4)===0x4))Cb.AH(0x10040,0x0);else Cb.AH(0x10000,0x0
);B7.AI=Cb;B7.W=this.A1;this.A1=B7;if(!!Cu){this.Dl(this.A1.W.AI,Cu.GI(),null,null
,Eb);this.Dl(Cb,Ed.Fx(),Ec,Ea,true);}else this.Dl(Cb,Ed.Fx(),Ec,Ea,Eb);},OB:function(
Fj){var tmp=this;while(!!tmp){Fj=B.abe(Fj,tmp.U.slice(0,2));tmp=tmp.G;}return Fj;
},DispatchEvent:function(AT){var A;var P=this.CS;var Ar=(C.K.isPrototypeOf(P)?P:
null);var Bv=null;var MC=!!this.EN&&(!!this.EN.DR||!!this.EN.AS);if(!!P&&((((P.F&
0x10000)===0x10000)||((P.F&0x40000)===0x40000))||((P.F&0x20000)===0x20000))){P=null;
Ar=null;}if(!!this.A1&&!MC)Bv=this.A1.AI.DispatchEvent(AT);if(!Bv&&!!Ar)Bv=Ar.DispatchEvent(
AT);else if(!Bv&&!!P)Bv=P.Ci(AT);if(!Bv)Bv=this.Ci(AT);if(!Bv)Bv=this.NR(AT);return Bv;
},BroadcastEventAtPosition:function(AT,Ny,aFilter){var A;var P=this.AW;var Bv=null;
while(!!P&&!Bv){if((!aFilter||((A=aFilter)&&((P.F&A)===A)))&&B.wa(P.GetExtent(),
Ny)){var Ar=(C.K.isPrototypeOf(P)?P:null);if(!!Ar)Bv=Ar.BroadcastEventAtPosition(
AT,B.abe(Ny,Ar.U.slice(0,2)),aFilter);else Bv=P.Ci(AT);}P=P.Z;}if(!Bv)Bv=this.Ci(
AT);return Bv;},BroadcastEvent:function(AT,aFilter){var A;var P=this.AW;var Bv=null;
while(!!P&&!Bv){if(!aFilter||((A=aFilter)&&((P.F&A)===A))){var Ar=(C.K.isPrototypeOf(
P)?P:null);if(!!Ar)Bv=Ar.BroadcastEvent(AT,aFilter);else Bv=P.Ci(AT);}P=P.Z;}if(
!Bv)Bv=this.Ci(AT);if(!Bv)Bv=this.NR(AT);return Bv;},Nm:function(aSize){},L0:function(
Kh){},Ez:function(){this.F=this.F|0x8000;B.pe([this,this.KI],this);},Aw:function(
AC){var A;var Ar=this;while(!!Ar&&!((AC[0]>=AC[2])||(AC[1]>=AC[3]))){if(!Ar.G&&(
Ar!==this)){Ar.Aw(AC);return;}if(!((Ar.F&0x1)===0x1))return;var Aa=Ar.U;AC=B.abh(
AC,Aa.slice(0,2));if(!((Ar.F&0x80000)===0x80000)){Aa=[].concat(Aa[0]-Ar.I_,Aa.slice(
1,4));Aa=B.abP(Aa,Aa[1]-Ar.Ja);Aa=B.abN(Aa,Aa[2]+Ar.I$);Aa=[].concat(Aa.slice(0,
3),Aa[3]+Ar.I9);AC=B.lb(AC,Aa);}Ar=Ar.G;}},M1:function(R,aFilter){var A;if(!R||(
R.G!==this))return null;var Hc=R.W;var Hg=R.Z;var Ji=0x10000;if(((aFilter&0x10000
)===0x10000))Ji=0x0;while(!!Hc||!!Hg){if((!!Hc&&(!aFilter||((A=aFilter)&&((Hc.F&
A)===A))))&&(!Ji||!((A=Ji)&&((Hc.F&A)===A))))return Hc;if((!!Hg&&(!aFilter||((A=
aFilter)&&((Hg.F&A)===A))))&&(!Ji||!((A=Ji)&&((Hg.F&A)===A))))return Hg;if(!!Hc)
Hc=Hc.W;if(!!Hg)Hg=Hg.Z;}return null;},Dl:function(FL,A5,Ec,Ea,Eb){var A;if(!FL)
return;if(!A5)throw new Error(L1);if((!!A5.K||!!A5.G)||!!A5.Et)throw new Error(Kc
);if(!!FL.G&&(FL.G!==this))throw new Error(G4);if(!this.EN)this.EN=B._NewObject(
C.Nl,0);A5.G=this;A5.K=FL;A5.Kx=Ea;A5.MH=Ec;if(!!FL.HS)FL.HS.Et.OO(FL.HS);FL.HS=
A5;FL.F=FL.F|0x20000;if((Eb&&!!this.EN.AW)&&!this.EN.AW.Li())(B.aci.JD.isPrototypeOf(
A=this.EN.AW)?A:null).MU(A5);else{var Et=B._NewObject(B.aci.JD,0);Et.MU(A5);this.
EN.OV(Et,false);}},LP:function(R){var A;if(!R)throw new Error(Kd);if(R.G!==this)
throw new Error(IY);if(!R.W)return;var CF=this.AW;var GD=R.El;while(!!CF&&(CF.El>
GD))CF=CF.Z;if(((CF===R)||!CF)||(CF.W===R))return;if(((R.F&0x401)===0x401)){if(!
!R.Z&&!!R.Bi)R.Z.F=R.Z.F|0x800;R.F=R.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
Df],this);}if(((R.F&0x200)===0x200)){if(!!R.Z)R.Z.F=R.Z.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.Df],this);}if(!!R.Z)R.Z.W=R.W;else this.AS=R.W;R.W.Z=R.Z;R.Z=CF;
R.W=CF.W;CF.W=R;if(!!R.W)R.W.Z=R;else this.AW=R;if(((R.F&0x1)===0x1))this.Aw(R.GetClipping(
));},FE:function(R,EH){var A;if(!R)throw new Error(Kd);if(R.G!==this)throw new Error(
IY);var CF=R;var BN=R;var GD=R.El;while(((EH>0)&&!!CF.W)&&(CF.W.El<=GD)){CF=CF.W;
EH=EH-1;}while(((EH<0)&&!!BN.Z)&&(BN.Z.El>=GD)){BN=BN.Z;EH=EH+1;}if((CF===R)&&(BN===
R))return;if(((R.F&0x401)===0x401)){if(!!R.Z&&!!R.Bi)R.Z.F=R.Z.F|0x800;R.F=R.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.Df],this);}if(((R.F&0x200)===0x200)){if(!!R.
Z)R.Z.F=R.Z.F|0x800;R.F=R.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Df],this);
}if(!!R.Z)R.Z.W=R.W;if(!!R.W)R.W.Z=R.Z;if(this.AS===R)this.AS=R.W;if(this.AW===R
)this.AW=R.Z;if(CF!==R){R.W=CF.W;R.Z=CF;CF.W=R;if(!!R.W)R.W.Z=R;}if(BN!==R){R.W=
BN;R.Z=BN.Z;BN.Z=R;if(!!R.Z)R.Z.W=R;}if(!R.W)this.AW=R;if(!R.Z)this.AS=R;if(((R.
F&0x1)===0x1))this.Aw(R.GetClipping());},IR:function(R){var A;if(!R)throw new Error(
G5);if(R.G!==this)throw new Error(IY);if((((R.F&0x401)===0x401)&&!!R.Z)&&!!R.Bi){
R.Z.F=R.Z.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Df],this);}if(((R.F&0x200
)===0x200)){if(!!R.Z)R.Z.F=R.Z.F|0x800;this.F=this.F|0x4000;B.pe([this,this.Df],
this);}R.Bi=null;if(this.CS===R)this.Ek(this.M1(R,0x14));if(!!R.Z)R.Z.W=R.W;if(!
!R.W)R.W.Z=R.Z;if(this.AS===R)this.AS=R.W;if(this.AW===R)this.AW=R.Z;R.G=null;R.
W=null;R.Z=null;if((!((R.F&0x10)===0x10)&&((R.F&0x100000)===0x100000))&&!((this.
F&0x80)===0x80))R.AH(0x10,0x0);if(((R.F&0x1)===0x1))this.Aw(R.GetClipping());},S:
function(R,EH){var A;if(!R)throw new Error(L2);if(!!R.G)throw new Error(G6);var BN=
null;var GD=R.El;if(((EH<0)&&!!this.AW)&&(this.AW.El>=GD)){BN=this.AW;EH=EH+1;}while((((
EH<0)&&!!BN)&&!!BN.Z)&&(BN.Z.El>=GD)){BN=BN.Z;EH=EH+1;}if((!BN&&!!this.AW)&&(this.
AW.El>GD))BN=this.AW;while((!!BN&&!!BN.Z)&&(BN.Z.El>GD))BN=BN.Z;if(!BN){R.G=this;
R.Z=this.AW;if(!!this.AW)this.AW.W=R;if(!this.AS)this.AS=R;this.AW=R;}else{R.G=this;
R.Z=BN.Z;R.W=BN;BN.Z=R;if(!!R.Z)R.Z.W=R;else this.AS=R;}if(((R.F&0x1)===0x1))this.
Aw(R.GetClipping());if(((R.F&0x80)===0x80)&&(B.aam().Ow()===R))R.AH(0x10,0x0);else
if(!((this.F&0x10)===0x10)&&((R.F&0x200010)===0x200010))R.AH(0x0,0x10);else if((((
this.F&0x10)===0x10)&&!((R.F&0x10)===0x10))&&((R.F&0x100000)===0x100000))R.AH(0x10
,0x0);if(((!this.CS&&((R.F&0x4)===0x4))&&((R.F&0x10)===0x10))&&!((R.F&0x10000)===
0x10000))this.Ek(R);if(((R.F&0x401)===0x401)){R.F=R.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.Df],this);}if(((R.F&0x200)===0x200)){R.F=R.F|0x800;this.F=this.F|
0x4000;B.pe([this,this.Df],this);}},M9:function(){return this.BT;},_Init:function(
aArg){C.Ca._Init.call(this,aArg);this.__proto__=C.K;this.F=0x10001F;this.AY(aArg
);},_Mark:function(D){var A;C.Ca._Mark.call(this,D);if((A=this.AS)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.AW)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Kv)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.A1)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.EN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.HS)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.CS)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::Group"};C.Root={DZ:null,Bo:B.abi(10,null,null),Il:null,Gw:null,Jw:0,BA:0,
Cy:B.abi(10,0,null),Kn:B.abi(10,B.wg,null),EL:B.abi(10,0,null),FQ:B.abi(10,B.wf,
null),In:B.abi(10,0,null),Gv:B.abi(10,B.wf,null),EK:B.abi(10,B.wf,null),DS:B.abi(
10,B.wf,null),Fm:B.abi(10,B.wf,null),AO:0,Kr:0,Kq:0,CM:B.abi(4,0,null),B0:B.abi(
4,B.wg,null),BZ:0,Jf:0,Iq:0,Mv:true,AY:function(aArg){if(!!!this.I){var obj=this;
B.abD(obj);}},Dn:function(){return this;},Fb:function(BC,aClip,aOffset,aOpacity,
aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)BC.
M0(aClip,B.abh(B.abh(aClip,aOffset),this.U.slice(0,2)),0x00000000,0x00000000,0x00000000
,0x00000000,false);C.K.Fb.call(this,BC,aClip,aOffset,aOpacity,aBlend);},AH:function(
DN,En){var A;C.K.AH.call(this,DN,En);if(!this.G&&(((DN&0x1)===0x1)||((En&0x1)===
0x1)))this.Aw([0,0,(A=this.U)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((DN&0x2)===0x2)||((
En&0x2)===0x2)))this.Aw([0,0,(A=this.U)[2]-A[0],A[3]-A[1]]);},Ek:function(E){if((
E!==null)||!E)C.K.Ek.call(this,E);},CX:function(E){var A;var SF=this.BT;C.K.CX.call(
this,E);if(((SF!==this.BT)&&!this.G)&&((this.F&0x1)===0x1))this.Aw([0,0,(A=this.
U)[2]-A[0],A[3]-A[1]]);},GM:function(Nz){return true;},DispatchEvent:function(AT
){if(!!AT){AT.ID=!!this.BA;if(!!this.BA)AT.A8=this.BA;}var Bv;Bv=C.K.DispatchEvent.
call(this,AT);this.BA=0;return Bv;},BroadcastEvent:function(AT,aFilter){if(!!AT){
AT.ID=!!this.BA;if(!!this.BA)AT.A8=this.BA;}var Bv=C.K.BroadcastEvent.call(this,
AT,aFilter);this.BA=0;return Bv;},Aw:function(AC){var A;if(this.Jw>0)throw new Error(
L3);var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate)AC=[0,0
,(A=this.U)[2]-A[0],A[3]-A[1]];if(!!this.G){C.K.Aw.call(this,AC);return;}AC=B.lb(
B.abh(AC,this.U.slice(0,2)),this.U);if((AC[0]>=AC[2])||(AC[1]>=AC[3]))return;var
O;for(O=0;O<this.BZ;O=O+1)if(!(((A=B.lb(this.B0.Get(O),AC))[0]>=A[2])||(A[1]>=A[
3]))){this.B0.Set(O,B.wC(this.B0.Get(O),AC));this.CM.Set(O,B.aaH(this.B0.Get(O))
);return;}if(this.BZ<3){this.B0.Set(this.BZ,AC);this.CM.Set(this.BZ,B.aaH(AC));this.
BZ=this.BZ+1;return;}var AK;var Bq;var Je=0;var Jg=0;var NA=2147483647;this.B0.Set(
this.BZ,AC);this.CM.Set(this.BZ,B.aaH(AC));for(AK=0;AK<=this.BZ;AK=AK+1)for(Bq=AK+
1;Bq<=this.BZ;Bq=Bq+1){var KH=B.aaH(B.wC(this.B0.Get(AK),this.B0.Get(Bq)));var NP=((
KH<<8)/(this.CM.Get(AK)+this.CM.Get(Bq)))|0;if(NP<NA){NA=NP;Je=AK;Jg=Bq;}}this.B0.
Set(Je,B.wC(this.B0.Get(Je),this.B0.Get(Jg)));this.CM.Set(Je,B.aaH(this.B0.Get(Je
)));if(Jg!==this.BZ){this.B0.Set(Jg,this.B0.Get(this.BZ));this.CM.Set(Jg,this.CM.
Get(this.BZ));}},Sx:function(){var Cz=B._NewObject(C.JC,0);Cz.ID=!!this.BA;if(!!
this.BA)Cz.A8=this.BA;return Cz;},HM:function(){var Cz=B._NewObject(C.H3,0);Cz.ID=
!!this.BA;if(!!this.BA)Cz.A8=this.BA;return Cz;},Im:function(){var Cz=B._NewObject(
C.JB,0);Cz.ID=!!this.BA;if(!!this.BA)Cz.A8=this.BA;return Cz;},Sy:function(T){var
O;var HO=false;for(O=0;O<10;O=O+1)if(!!this.Bo.Get(O)){var Ac=this.DS.Get(O);var
Ar=this.Bo.Get(O).G;while(!!Ar&&(Ar!==this)){Ac=B.abe(Ac,Ar.U.slice(0,2));Ar=Ar.
G;}if(!Ar&&(this.Bo.Get(O)!==this)){var tmp=this.Bo.Get(O);this.AO=O;this.Bo.Set(
O,null);tmp.Ci(this.HM().InitializeUp(O,this.Gv.Get(O),this.FQ.Get(O),this.EL.Get(
O),this.Cy.Get(O)+1,this.EK.Get(O),false,this.DS.Get(O),this.Fm.Get(O)));this.BroadcastEvent(
this.Im().InitializeUp(O,this.Cy.Get(O)+1,false,tmp,this.DS.Get(O)),0x18);}else{
this.EL.Set(O,(this.Gw.A8-this.In.Get(O))|0);if(this.EL.Get(O)<10)this.EL.Set(O,
10);this.AO=O;this.Bo.Get(O).Ci(this.HM().InitializeHold(O,Ac,this.FQ.Get(O),this.
EL.Get(O),this.Cy.Get(O)+1,this.EK.Get(O),this.DS.Get(O),this.Fm.Get(O)));HO=true;
}}if(!HO)this.Gw.L(false);},GetFPS:function(){var ticksCount=0;var NI=0;ticksCount=((
new Date).getTime()-B.v$)|0;if(!!this.Kr&&(ticksCount>this.Kr))NI=((this.Kq*1000
)/((ticksCount-this.Kr)|0))|0;this.Kq=0;this.Kr=ticksCount;return NI;},Update:function(
){var A;if(!this.Il)this.Il=B._NewObject(B.Graphics.Canvas,0);this.Il.Nd([(A=this.
U)[2]-A[0],A[3]-A[1]]);this.Il.Update();return this.UpdateGE20(this.Il);},UpdateGE20:
function(BC){if(!this.BeginUpdate())return Bz;var FZ=this.UpdateCanvas(BC,AR);this.
EndUpdate();return FZ;},EndUpdate:function(){if(this.BZ>0){this.Kq=this.Kq+1;this.
BZ=0;}},UpdateCanvas:function(BC,aOffset){var A;var FZ=Bz;var Su=[].concat(aOffset
,B.abf(BC.FrameSize,aOffset));var O;var AK=this.BZ;this.Jw=this.Jw+1;BC.AI=this;
for(O=0;(O<AK)&&(O<4);O=O+1)if(this.CM.Get(O)>0){this.Fb(BC,B.abg(this.B0.Get(O)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);FZ=B.wC(FZ,B.lb(Su,this.B0.Get(O))
);}else AK=AK+1;BC.AI=null;this.Jw=this.Jw-1;if(!((FZ[0]>=FZ[2])||(FZ[1]>=FZ[3])
))return B.abg(FZ,aOffset);else return FZ;},GetUpdateRegion:function(Kg){var O;var
AK=this.BZ;if(Kg<0)return Bz;for(O=0;(O<AK)&&(O<4);O=O+1)if(!this.CM.Get(O)){AK=
AK+1;Kg=Kg+1;}else if(O===Kg)return this.B0.Get(O);return Bz;},BeginUpdate:function(
){var A;var O;if(!!this.BZ&&!B.aaY(this.B0.Get(0),[0,0,(A=this.U)[2]-A[0],A[3]-A[
1]])){var NY=B.abi(3,B.wg,null);var NX=this.BZ;for(O=0;O<NX;O++)NY.Set(O,this.B0.
Get(O));for(O=0;O<NX;O++){var NS=B.abh(NY.Get(O),this.U.slice(0,2));var NT=this.
Jx(NS);if(!B.aaY(NS,NT))this.Aw(B.abg(NT,this.U.slice(0,2)));}}var AK;var Bq;for(
AK=0;AK<(this.BZ-1);AK++)if(this.CM.Get(AK)>0)for(Bq=AK+1;Bq<this.BZ;Bq++)if(this.
CM.Get(Bq)>0){var KH=B.aaH(B.wC(this.B0.Get(AK),this.B0.Get(Bq)));if(((KH-this.CM.
Get(AK))-this.CM.Get(Bq))<0){this.B0.Set(AK,B.wC(this.B0.Get(AK),this.B0.Get(Bq)
));this.CM.Set(AK,KH);this.CM.Set(Bq,0);}}for(O=this.BZ-1;O>=0;O--)if(!this.CM.Get(
O))this.BZ=this.BZ-1;return this.BZ;},DoesNeedUpdate:function(){if(this.BZ>0)return true;
return false;},Initialize:function(aSize){this.J([].concat(AR,aSize));if(this.Mv
)this.F=this.F|0x60;else this.F=this.F|0x20;this.Aw(this.U);return this;},SetRootFocus:
function(Mj){if(Mj===this.Mv)return false;this.Mv=Mj;if(!Mj)this.AH(0x0,0x40);else
this.AH(0x40,0x0);return true;},SetUserInputTimestamp:function(Ss){this.BA=Ss;},
DriveKeyboardHitting:function(B5,IZ,E6){var A;var ML=!!this.DZ;if(!!this.DZ&&((!
E6||(this.Jf!==B5))||(this.Iq!==IZ))){var Cz=null;var P=(C.C7.isPrototypeOf(A=this.
DZ)?A:null);var E_=(C.Ge.isPrototypeOf(A=this.DZ)?A:null);if(!!this.Jf)Cz=B._NewObject(
C.KeyEvent,0).Initialize(this.Jf,false);if(this.Iq!==0x00)Cz=B._NewObject(C.KeyEvent
,0).Initialize2(this.Iq,false);if(!!E_)E_.Ci(Cz);else if(!!P)P.Ci(Cz);this.Jf=0;
this.Iq=0x00;this.DZ=null;}if(!!this.DZ){var Cz=null;var P=(C.C7.isPrototypeOf(A=
this.DZ)?A:null);var E_=(C.Ge.isPrototypeOf(A=this.DZ)?A:null);if(!!B5)Cz=B._NewObject(
C.KeyEvent,0).Initialize(B5,true);if(this.Iq!==0x00)Cz=B._NewObject(C.KeyEvent,0
).Initialize2(IZ,true);if(!!E_)E_.Ci(Cz);else if(!!P)P.Ci(Cz);}if(!this.DZ&&E6){
if(!!B5)this.DZ=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(B5,true
));if(IZ!==0x00)this.DZ=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
IZ,true));if(!(C.Ge.isPrototypeOf(A=this.DZ)?A:null)&&!(C.C7.isPrototypeOf(A=this.
DZ)?A:null))this.DZ=null;this.Jf=B5;this.Iq=IZ;ML=ML||!!this.DZ;}this.BA=0;return ML;
},DriveCursorMovement:function(Cs){return this.DriveMultiTouchMovement(this.AO,Cs
);},DriveMultiTouchMovement:function(Y,Cs){if((Y<0)||(Y>9)){this.BA=0;return false;
}var Eg=B.abe(Cs,this.DS.Get(Y));this.DS.Set(Y,Cs);if(!this.Bo.Get(Y)||B.aaX(Eg,
AR)){this.BA=0;return false;}var Ac=Cs;var Ar=this.Bo.Get(Y).G;while(!!Ar&&(Ar!==
this)){Ac=B.abe(Ac,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar&&(this.Bo.Get(Y)!==this)){var
tmp=this.Bo.Get(Y);this.AO=Y;this.Bo.Set(Y,null);tmp.Ci(this.HM().InitializeUp(Y
,this.Gv.Get(Y),this.FQ.Get(Y),this.EL.Get(Y),this.Cy.Get(Y)+1,this.EK.Get(Y),false
,this.DS.Get(Y),this.Fm.Get(Y)));this.BroadcastEvent(this.Im().InitializeUp(Y,this.
Cy.Get(Y)+1,false,tmp,Cs),0x18);}else{this.Gv.Set(Y,Ac);this.AO=Y;this.Bo.Get(Y).
Ci(this.Sx().Initialize(Y,Ac,this.FQ.Get(Y),Eg,this.EL.Get(Y),this.Cy.Get(Y)+1,this.
EK.Get(Y),Cs,this.Fm.Get(Y)));}this.BA=0;return true;},DriveCursorHitting:function(
E6,Y,Cs){return this.DriveMultiTouchHitting(E6,Y,Cs);},DriveMultiTouchHitting:function(
E6,Y,Cs){if((Y<0)||(Y>9)){this.BA=0;return false;}var ticksCount=this.BA;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var SY=this.BA;this.DriveMultiTouchMovement(
Y,Cs);Cs=this.DS.Get(Y);this.BA=SY;if(E6)this.Fm.Set(Y,Cs);if(E6&&!this.Bo.Get(Y
)){var Dc;var Ac=Cs;if(B.wa(this.Kn.Get(Y),Cs)&&((ticksCount-this.In.Get(Y))<=250
))this.Cy.Set(Y,this.Cy.Get(Y)+1);else this.Cy.Set(Y,0);this.Kn.Set(Y,B.abh(FJ,Cs
));this.In.Set(Y,ticksCount);Dc=this.Hn(B.abh(FJ,Cs),Y,this.Cy.Get(Y)+1,null,null
,0x0);if(!!Dc){this.BroadcastEvent(this.Im().InitializeDown(Y,this.Cy.Get(Y)+1,false
,Dc.C7,Cs),0x18);this.Bo.Set(Y,Dc.C7);this.EK.Set(Y,Dc.Gg);}else{this.Bo.Set(Y,null
);this.EK.Set(Y,AR);this.BA=0;return false;}var Ar=Dc.C7.G;while(!!Ar&&(Ar!==this
)){Ac=B.abe(Ac,Ar.U.slice(0,2));Ar=Ar.G;}this.FQ.Set(Y,Ac);this.Gv.Set(Y,Ac);this.
EL.Set(Y,0);this.Gw.L(true);this.AO=Y;this.Bo.Get(Y).Ci(this.HM().InitializeDown(
Y,Ac,this.Cy.Get(Y)+1,this.EK.Get(Y),false,Cs));this.BA=0;return true;}if(!E6&&!
!this.Bo.Get(Y)){var Ac=Cs;var Ar=this.Bo.Get(Y).G;while(!!Ar&&(Ar!==this)){Ac=B.
abe(Ac,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar)Ac=this.Gv.Get(Y);this.AO=Y;var tmp=this.
Bo.Get(Y);this.Bo.Set(Y,null);tmp.Ci(this.HM().InitializeUp(Y,Ac,this.FQ.Get(Y),
this.EL.Get(Y),this.Cy.Get(Y)+1,this.EK.Get(Y),false,Cs,this.Fm.Get(Y)));this.BroadcastEvent(
this.Im().InitializeUp(Y,this.Cy.Get(Y)+1,false,tmp,Cs),0x18);this.BA=0;return true;
}this.BA=0;return false;},Nj:function(FM,Nw,Gu,HJ){if(FM===this)FM=null;if(!this.
Bo.Get(this.AO))return;var Dc;Dc=this.Hn(B.abh(FJ,this.DS.Get(this.AO)),this.AO,
1,FM,Gu,HJ);if(!!Dc&&(this.Bo.Get(this.AO)!==Dc.C7))this.MY(Dc.C7,Dc.Gg);if(!Dc&&(
this.Bo.Get(this.AO)!==Nw))this.MY(Nw,AR);},MY:function(FM,EG){if(!this.Bo.Get(this.
AO)||(this.Bo.Get(this.AO)===FM))return;var tmp=this.Bo.Get(this.AO);this.Bo.Set(
this.AO,null);tmp.Ci(this.HM().InitializeUp(this.AO,this.Gv.Get(this.AO),this.FQ.
Get(this.AO),this.EL.Get(this.AO),this.Cy.Get(this.AO)+1,this.EK.Get(this.AO),true
,this.DS.Get(this.AO),this.Fm.Get(this.AO)));this.BroadcastEvent(this.Im().InitializeUp(
this.AO,this.Cy.Get(this.AO)+1,true,tmp,this.DS.Get(this.AO)),0x18);var Ac=this.
DS.Get(this.AO);var Ar=null;if(!!FM)Ar=FM.G;while(!!Ar&&(Ar!==this)){Ac=B.abe(Ac
,Ar.U.slice(0,2));Ar=Ar.G;}if(!Ar&&(FM!==this)){this.Bo.Set(this.AO,null);return;
}this.BroadcastEvent(this.Im().InitializeDown(this.AO,this.Cy.Get(this.AO)+1,true
,FM,this.DS.Get(this.AO)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.Bo.Set(this.AO,FM);this.EK.Set(this.AO,EG);this.FQ.Set(this.AO,Ac
);this.Gv.Set(this.AO,Ac);this.Cy.Set(this.AO,0);this.EL.Set(this.AO,0);this.In.
Set(this.AO,ticksCount);this.Fm.Set(this.AO,this.DS.Get(this.AO));this.Bo.Get(this.
AO).Ci(this.HM().InitializeDown(this.AO,Ac,this.Cy.Get(this.AO)+1,this.EK.Get(this.
AO),true,this.Fm.Get(this.AO)));},Ow:function(){return null;},_Init:function(aArg
){C.K._Init.call(this,aArg);C.Timer._Init.call(this.Gw={I:this},0);(this.Bo=[]).
__proto__=C.Root.Bo;(this.Cy=[]).__proto__=C.Root.Cy;(this.Kn=[]).__proto__=C.Root.
Kn;(this.EL=[]).__proto__=C.Root.EL;(this.FQ=[]).__proto__=C.Root.FQ;(this.In=[]
).__proto__=C.Root.In;(this.Gv=[]).__proto__=C.Root.Gv;(this.EK=[]).__proto__=C.
Root.EK;(this.DS=[]).__proto__=C.Root.DS;(this.Fm=[]).__proto__=C.Root.Fm;(this.
CM=[]).__proto__=C.Root.CM;(this.B0=[]).__proto__=C.Root.B0;this.__proto__=C.Root;
this.F=0x10007F;this.Gw.By(10);this.Gw.Bk=[this,this.Sy];this.AY(aArg);},_Done:function(
){this.__proto__=C.K;this.Gw._Done();C.K._Done.call(this);},_ReInit:function(){C.
K._ReInit.call(this);this.Gw._ReInit();},_Mark:function(D){var A;C.K._Mark.call(
this,D);if((A=this.DZ)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.Bo,D);if((A=
this.Il)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Gw)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Core::Root"};C.Event={A8:0,ID:false,AY:function(aArg){this.A8=this.
IA();},IA:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=C.Event;this.AY(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={BR:0,AQ:0,Down:false,Initialize2:function(B5,E6){this.
BR=0;this.AQ=B5;this.Down=E6;if((B5>=0x30)&&(B5<=0x39))this.BR=(10+B5)-48;if((B5>=
0x41)&&(B5<=0x5A))this.BR=(105+B5)-65;if((B5>=0x61)&&(B5<=0x7A))this.BR=(105+B5)-
97;if(B5===0x20)this.BR=131;if(!this.BR)switch(B5){case 0x2B:this.BR=132;break;case
0x2D:this.BR=133;break;case 0x2A:this.BR=134;break;case 0x2F:this.BR=135;break;case
0x3D:this.BR=136;break;case 0x2E:this.BR=137;break;case 0x2C:this.BR=138;break;case
0x3A:this.BR=139;break;case 0x3B:this.BR=140;break;default:;}return this;},Initialize:
function(B5,E6){this.BR=B5;this.Down=E6;this.AQ=0x00;var Mn=B5-10;var Mm=B5-105;
if((Mn>=0)&&(Mn<=9))this.AQ=(48+Mn)&0xFFFF;if((Mm>=0)&&(Mm<=25))this.AQ=(65+Mm)&
0xFFFF;if(B5===131)this.AQ=0x20;if(this.AQ===0x00)switch(B5){case 132:this.AQ=0x2B;
break;case 133:this.AQ=0x2D;break;case 134:this.AQ=0x2A;break;case 135:this.AQ=0x2F;
break;case 136:this.AQ=0x3D;break;case 137:this.AQ=0x2E;break;case 138:this.AQ=0x2C;
break;case 139:this.AQ=0x3A;break;case 140:this.AQ=0x3B;break;default:;}return this;
},OA:function(Nv){switch(Nv){case 141:return((this.AQ>=0x41)&&(this.AQ<=0x5A))||((
this.AQ>=0x61)&&(this.AQ<=0x7A));case 142:return(((this.AQ>=0x41)&&(this.AQ<=0x5A
))||((this.AQ>=0x61)&&(this.AQ<=0x7A)))||((this.AQ>=0x30)&&(this.AQ<=0x39));case
143:return(this.AQ>=0x30)&&(this.AQ<=0x39);case 144:return(((this.AQ>=0x41)&&(this.
AQ<=0x46))||((this.AQ>=0x61)&&(this.AQ<=0x66)))||((this.AQ>=0x30)&&(this.AQ<=0x39
));case 145:return this.AQ!==0x00;case 146:return(this.AQ===0x00)&&!!this.BR;case
147:return(((this.BR===6)||(this.BR===7))||(this.BR===4))||(this.BR===5);case 148:
return(this.AQ!==0x00)||!!this.BR;default:;}return Nv===this.BR;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.JB={J7:null,Do:B.wf,DL:0,CH:0,Down:false,EU:false,InitializeUp:function(Y,DO
,HD,Ml,E7){this.Down=false;this.CH=Y;this.DL=DO;this.Do=E7;this.J7=Ml;this.EU=HD;
return this;},InitializeDown:function(Y,DO,HD,Ml,E7){this.Down=true;this.CH=Y;this.
DL=DO;this.Do=E7;this.J7=Ml;this.EU=HD;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.JB;},_Mark:function(D){var A;C.Event._Mark.
call(this,D);if((A=this.J7)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};C.H3={Gc:B.wf,Do:B.wf,DL:0,CU:0,FB:B.wf,D8:B.wf,CH:0,Down:false,EU:false,InitializeHold:
function(Y,G7,I1,I2,DO,EG,E7,I0){this.Down=true;this.CH=Y;this.D8=B.abf(G7,EG);this.
FB=B.abf(I1,EG);this.CU=I2;this.DL=DO;this.Do=E7;this.Gc=I0;return this;},InitializeUp:
function(Y,G7,I1,I2,DO,EG,HD,E7,I0){this.Down=false;this.CH=Y;this.D8=B.abf(G7,EG
);this.FB=B.abf(I1,EG);this.CU=I2;this.DL=DO;this.EU=HD;this.Do=E7;this.Gc=I0;return this;
},InitializeDown:function(Y,G7,DO,EG,HD,E7){this.Down=true;this.CH=Y;this.D8=B.abf(
G7,EG);this.FB=B.abf(G7,EG);this.CU=0;this.DL=DO;this.EU=HD;this.Do=E7;this.Gc=E7;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.H3;},_className:"Core::CursorEvent"};C.JC={Gc:B.wf,Do:B.wf,DL:0,CU:0,Gg:B.wf,FB:
B.wf,D8:B.wf,CH:0,Initialize:function(Y,G7,I1,aOffset,I2,Sr,EG,E7,I0){this.CH=Y;
this.D8=B.abf(G7,EG);this.FB=B.abf(I1,EG);this.Gg=aOffset;this.CU=I2;this.DL=Sr;
this.Do=E7;this.Gc=I0;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.JC;},_className:"Core::DragEvent"};C.IP={Fb:function(BC,
aClip,aOffset,aOpacity,aBlend){},GetClipping:function(){var A;var Aa=C.Ca.GetClipping.
call(this);if(((this.F&0x80000)===0x80000)){var HW=Bz;var P;for(P=this.W;!!P&&!((
P.F&0x200)===0x200);P=P.W)if(((P.F&0x1)===0x1))HW=B.wC(HW,P.GetClipping());Aa=B.
wC(Aa,HW);}return Aa;},AH:function(DN,En){var A;var Kw=this.F;if((!!this.G&&((this.
F&0x80001)===0x80001))&&((En&0x80000)===0x80000))this.G.Aw(this.GetClipping());C.
Ca.AH.call(this,DN,En);if(((!!this.G&&((this.F&0x1)===0x1))&&((DN&0x80000)===0x80000
))&&!((Kw&0x80000)===0x80000))this.G.Aw(this.GetClipping());},J:function(E){var A;
if(B.aaY(E,this.U))return;var He=[(A=this.U)[2]-A[0],A[3]-A[1]];var ME=[E[2]-E[0
],E[3]-E[1]];var It=!B.aaX(He,ME);var Eg=B.abe(E.slice(0,2),this.U.slice(0,2));if(
!B.aaX(Eg,AR)&&!It){var P=this.W;while(!!P&&!((P.F&0x200)===0x200)){if(((P.F&0x400
)===0x400)){var tmp=((P.F&0x100)===0x100);P.Ls(Eg,tmp);}P=P.W;}}if((It&&(He[0]>0
))&&(He[1]>0)){var Ao=this.U;var P=this.W;while(!!P&&!((P.F&0x200)===0x200)){if(((
P.F&0x400)===0x400)){if(!!P.Bi&&(P.Bi.HQ!==this))P.Bi=null;if(!P.Bi&&(P.EZ!==0x14
))P.Jc(Ao,this);}P=P.W;}}C.Ca.J.call(this,E);if(!!this.G&&It){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.Df],
this);}}},_Init:function(aArg){C.Ca._Init.call(this,aArg);this.__proto__=C.IP;this.
F=0x203;},_className:"Core::Outline"};C.LS={Lv:null,Lu:null,Hv:null,X:null,KG:0,
A_:0,CH:0,A8:0,DL:0,CU:0,Gg:B.wf,FB:B.wf,D8:B.wf,IS:8,E3:0,M4:1,Down:false,GL:false
,EU:false,Mr:false,NL:0,Fb:function(BC,aClip,aOffset,aOpacity,aBlend){},Ci:function(
AT){var A;var AP=(C.H3.isPrototypeOf(AT)?AT:null);var B8=(C.JC.isPrototypeOf(AT)?
AT:null);var Ks=this.GL;var Js;var Ip;var NW;var FY;var NF;if(!AP&&!B8)return null;
Js=(!!AP&&AP.Down)&&!AP.CU;Ip=(!!AP&&AP.Down)&&(AP.CU>0);NW=(!!AP&&AP.Down)&&(AP.
CU>this.NL);FY=!!AP&&!AP.Down;NF=!!B8;if(Js)this.NL=((A=(AP.EU?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if((((this.E3&0x20)===0x20)&&(this.A_>0))&&(this.A_<33554432)){var Kp=(C.
JB.isPrototypeOf(AT)?AT:null);if(((!!Kp&&Kp.Down)&&(Kp.J7!==this))&&B.wa(this.GetExtent(
),this.G.OB(Kp.Do))){this.KG=0x20;this.A_=this.A_|67108864;return null;}}if(Js){
var MG=0;var Jb;this.A_=this.A_|(1<<AP.CH);for(Jb=this.A_&4095;Jb>0;Jb=Jb>>1)if(
!!(Jb&1))MG=MG+1;if(MG===1)this.A_=(this.A_|16777216)|(4096<<AP.CH);}if(FY&&(this.
A_<16777216)){var Fu=this.Dn();var Dc=null;if(!!Fu){var SZ=(!!this.Z?this.Z:this.
G);Dc=Fu.Hn(B.abh(L4,AP.Do),AP.CH,AP.DL,null,SZ,0x0);}if(!!Dc){var O;for(O=0;O<10;
O++)if(!!(this.A_&(1<<O)))Dc.C7.Ci(B._NewObject(C.H3,0).InitializeDown(O,AP.D8,AP.
DL,AR,true,AP.Do));for(O=0;O<10;O++)if(!!(this.A_&(1<<O)))Dc.C7.Ci(B._NewObject(
C.H3,0).InitializeUp(O,AP.D8,AP.D8,0,AP.DL,AR,false,AP.Do,AP.Do));}}if(FY)this.A_=(
this.A_&~(1<<AP.CH))|33554432;if(NW&&(this.A_<16777216))this.A_=this.A_|67108864;
if(FY&&AP.EU)this.A_=this.A_|67108864;if(FY&&!(this.A_&4095))this.KG=0x0;if(FY&&
!(this.A_&16777215))this.A_=0;if(Ip&&(this.A_>=67108864)){var Fu=this.Dn();if(!!
Fu)Fu.Nj(null,null,this,this.KG);}if((Ip&&!!(this.A_&16777216))&&!!(this.A_&33554432
)){Ip=false;FY=true;}if(!!AP&&!(this.A_&(4096<<AP.CH)))return this;if(!!B8&&!(this.
A_&(4096<<B8.CH)))return this;if(FY&&!(this.A_&16777216))return this;if(((Js||NF
)||Ip)&&((this.A_<16777216)||(this.A_>=33554432)))return this;if(FY)this.A_=this.
A_&3758100479;if(FY&&!(this.A_&16777215))this.A_=0;if(!!AP){this.Down=Js||Ip;this.
GL=this.Lj(AP.D8);this.FB=AP.FB;this.D8=AP.D8;this.Gg=AR;this.CU=AP.CU;this.DL=AP.
DL;this.EU=AP.EU;this.CH=AP.CH;this.A8=AP.A8;if(AP.Down&&!AP.CU)Ks=false;}if(!!B8
){this.Down=true;this.GL=this.Lj(B8.D8);this.FB=B8.FB;this.D8=B8.D8;this.Gg=B8.Gg;
this.CU=B8.CU;this.DL=B8.DL;this.CH=B8.CH;this.EU=false;this.A8=B8.A8;}var Mq=this.
Down;if((!!AP&&this.Down)&&!this.CU)(A=this.X)?A[1].call(A[0],this):null;if((this.
Down&&this.GL)&&!Ks){this.Mr=true;(A=this.Lu)?A[1].call(A[0],this):null;}if(this.
Mr&&(((Mq&&!this.GL)&&Ks)||((!Mq&&this.GL)&&Ks))){this.Mr=false;(A=this.Lv)?A[1].
call(A[0],this):null;}if(!!AP&&!Mq)(A=this.Hv)?A[1].call(A[0],this):null;if(!!this.
E3){var Hh=0x0;if(((((this.E3&0x10)===0x10)&&!!AP)&&AP.Down)&&(AP.CU>=1000))Hh=0x10;
if((((this.E3&0x1)===0x1)&&!!B8)&&((B8.Do[1]-B8.Gc[1])<=-this.IS))Hh=0x1;if((((this.
E3&0x2)===0x2)&&!!B8)&&((B8.Do[1]-B8.Gc[1])>=this.IS))Hh=0x2;if((((this.E3&0x4)===
0x4)&&!!B8)&&((B8.Do[0]-B8.Gc[0])<=-this.IS))Hh=0x4;if((((this.E3&0x8)===0x8)&&!
!B8)&&((B8.Do[0]-B8.Gc[0])>=this.IS))Hh=0x8;if(!!Hh){var Fu=this.Dn();if(!!Fu){this.
KG=Hh;Fu.Nj(null,this,this,Hh);}}}return this;},Hn:function(AC,Y,DO,HE,Gu,HJ){var
A;if(!!HE&&(HE!==this))return null;if((DO<1)||(DO>this.M4))return null;if(this.A_>=
33554432)return null;if((this.A_>=16777216)&&!(this.A_&(4096<<Y)))return null;if(
!!(HJ&this.E3))return null;if(this.Oy()){var Aa=B.lb(AC,this.GetExtent());if(!((
Aa[0]>=Aa[2])||(Aa[1]>=Aa[3]))){var G$=B.aaI(AC);var Eg=AR;if(G$[0]<Aa[0])Eg=[Aa[
0]-G$[0],Eg[1]];if(G$[0]>=Aa[2])Eg=[(Aa[2]-G$[0])-1,Eg[1]];if(G$[1]<Aa[1])Eg=[Eg[
0],Aa[1]-G$[1]];if(G$[1]>=Aa[3])Eg=[Eg[0],(Aa[3]-G$[1])-1];return B._NewObject(C.
KQ,0).Initialize(this,Eg);}}else{var Br=B.abi(9,B.wf,null);var O;Br.Set(0,B.aaI(
AC));Br.Set(1,Br.Get(0));Br.Set(2,Br.Get(0));Br.Set(3,Br.Get(0));Br.Set(4,Br.Get(
0));Br.Set(1,[AC[0],Br.Get(1)[1]]);Br.Set(2,[Br.Get(2)[0],AC[1]]);Br.Set(3,[AC[2
],Br.Get(3)[1]]);Br.Set(4,[Br.Get(4)[0],AC[3]]);Br.Set(5,AC.slice(0,2));Br.Set(6
,[AC[2],AC[1]]);Br.Set(7,[AC[0],AC[3]]);Br.Set(8,AC.slice(2,4));for(O=0;O<9;O=O+
1)if(this.Lj(Br.Get(O)))return B._NewObject(C.KQ,0).Initialize(this,B.abe(Br.Get(
O),Br.Get(0)));}return null;},OJ:function(E){if(E<1)E=1;this.IS=E;},OH:function(
E){if(E<1)E=1;this.M4=E;},L:function(E){if(E)this.AH(0x100000,0x0);else this.AH(
0x0,0x100000);},_Init:function(aArg){C.IQ._Init.call(this,aArg);this.__proto__=C.
LS;this.F=0x10011B;},_Mark:function(D){var A;C.IQ._Mark.call(this,D);if((A=this.
Lv)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.Lu)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Hv)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.X)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.Ge={W:null,Hv:null,X:null,HT:0,A8:0,Nh:0,FA:148,BR:0,AQ:0,A7:true,Down:false
,LO:false,AY:function(aArg){var A;var AI=(C.K.isPrototypeOf(A=this.I)?A:null);if(
!AI)throw new Error(L5);this.W=AI.Kv;AI.Kv=this;},Ci:function(AT){var A;if(!!AT&&
AT.OA(this.FA)){this.Down=AT.Down;this.BR=AT.BR;this.AQ=AT.AQ;this.A8=AT.A8;if(AT.
Down){this.Nh=this.HT;this.LO=this.HT>0;if(!this.LO)(A=this.X)?A[1].call(A[0],this
):null;this.HT=this.HT+1;return true;}if(!AT.Down){this.LO=this.HT>1;this.Nh=this.
HT-1;this.HT=0;(A=this.Hv)?A[1].call(A[0],this):null;return true;}}return false;
},_Init:function(aArg){this.__proto__=C.Ge;this.AY(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hv)&&((A=A[0])._cycle!=D
))A._Mark(A._cycle=D);if((A=this.X)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.KQ={C7:null,Ix:0,Gg:B.wf,Initialize:function(R,aOffset
){this.C7=R;this.Gg=aOffset;this.Ix=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.KQ;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.C7)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(
A._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.JM={
HQ:null,DB:B.wg,Ao:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=C.JM;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.HQ)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I
)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.JN={Jr:B.wf,Jq:B.wf,Jp:B.wf,Jo:B.wf,_Init:function(aArg
){C.JM._Init.call(this,aArg);this.__proto__=C.JN;},_className:"Core::LayoutQuadContext"
};C.KT={AI:null,W:null,DV:null,D5:null,Cu:null,HR:null,_Init:function(aArg){this.
__proto__=C.KT;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.AI)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.DV)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.D5)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Cu)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.HR)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};C.Nl={DR:null,AW:null,AS:null,NJ:false,Sv:function(
){if(!this.DR)return;var Et=this.DR;this.DR.Es=null;this.DR=null;B.pe([this,this.
MJ],this);Et.M8(this);},SH:function(T){if(!!this.DR)return;if(!this.AS)return;this.
DR=this.AS;this.AS=this.AS.W;if(!!this.AS)this.AS.Z=null;else this.AW=null;this.
DR.W=null;this.NJ=true;this.DR.Hy(this);this.NJ=false;},SN:function(T){B.pe([this
,this.SH],this);},SM:function(T){B.pe([this,this.SN],this);},MJ:function(T){B.pe([
this,this.SM],this);},N9:function(BJ){if(!BJ||!BJ.Es)return;if(BJ.Es!==this)throw new
Error(L6);var N0=false;if(this.DR===BJ){this.DR=null;N0=true;B.pe([this,this.MJ]
,this);}else{if(!!BJ.W)BJ.W.Z=BJ.Z;else this.AW=BJ.Z;if(!!BJ.Z)BJ.Z.W=BJ.W;else this.
AS=BJ.W;BJ.Z=null;BJ.W=null;}BJ.Es=null;if(N0)BJ.M7(this);},OV:function(BJ,St){if(
!BJ)return;if(!!BJ.Es)throw new Error(L7);BJ.Es=this;if(St){BJ.W=this.AS;if(!!this.
AS)this.AS.Z=BJ;else this.AW=BJ;this.AS=BJ;}else{BJ.Z=this.AW;if(!!this.AW)this.
AW.W=BJ;else this.AS=BJ;this.AW=BJ;}if(!this.DR)B.pe([this,this.MJ],this);},_Init:
function(aArg){this.__proto__=C.Nl;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.DR)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.AW)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.IW={Es:null
,Z:null,W:null,M8:function(I4){},M7:function(I4){},Hy:function(I4){this.MX();},D7:
function(){if(!!this.Es&&(this.Es.DR===this))this.Es.Sv();},MX:function(){if(!!this.
Es)this.Es.N9(this);},Li:function(){return!!this.Es&&(this.Es.DR===this);},_Init:
function(aArg){this.__proto__=C.IW;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Es)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Z)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=
D);},I:null,_cycle:0,_observers:null,_className:"Core::Task"};C.Gi={resource:null
,Fa:function(){this.resource=null;},AY:function(aArg){this.resource=aArg;},_Init:
function(aArg){this.__proto__=C.Gi;this.AY(aArg);B.h7++;},_Done:function(){this.
Fa();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.I)&&(A._cycle!=D))A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null,_className:
"Core::Resource"};C.Timer={Bk:null,timer:null,A8:0,Period:1000,JA:0,A7:false,Fa:
function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},KB:function(
aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(
!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer(
);tmp.StartTimer(aBegin,aPeriod);}this.timer=tmp;},By:function(E){if(E<0)E=0;if(
E===this.Period)return;this.Period=E;if(this.A7)this.KB(this.JA,E);},Bm:function(
E){if(E<0)E=0;if(E===this.JA)return;this.JA=E;if(this.A7)this.KB(E,this.Period);
},L:function(E){if(E===this.A7)return;this.A7=E;if(E)this.KB(this.JA,this.Period
);else this.KB(0,0);this.A8=this.IA();},IA:function(){var ticksCount=0;ticksCount=((
new Date).getTime()-B.v$)|0;return ticksCount;},Trigger:function(){var A;this.A8=
this.IA();if(!this.Period)this.L(false);(A=this.Bk)?A[1].call(A[0],this):null;},
_Init:function(aArg){this.__proto__=C.Timer;B.h7++;},_Done:function(){this.Fa();
this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=
this.Bk)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.I)&&(A._cycle!=D))
A._Mark(A._cycle=D);},I:null,_cycle:0,_observers:null,_className:"Core::Timer"};
C.Ur={A0:0x1,S9:0x2,TD:0x4,Uo:0x8,A7:0x10,Ua:0x20,TE:0x40,TP:0x80,TC:0x100,TJ:0x200
,Tw:0x400,TZ:0x800,Nm:0x1000,Uq:0x2000,TS:0x4000,TT:0x8000,Tp:0x10000,TR:0x20000
,T9:0x40000,Tq:0x80000,TY:0x100000,To:0x200000};C.EZ={T0:0x1,T1:0x2,S5:0x4,S6:0x8
,S7:0x10,S4:0x20};C.TG={M6:0,Ul:1,Te:2,TK:3,T3:4,Um:5,Un:6,Tf:7,Tg:8,TM:9,TL:10,
T5:11,T4:12};C.H5={M6:0,Uj:1,Left:2,Tc:3,Ui:4,Tb:5,Uk:6,Right:7,Td:8};C.KeyCode={
NoKey:0,Ok:1,Exit:2,Menu:3,Up:4,Down:5,Left:6,Right:7,PageUp:8,PageDown:9,Key0:10
,Key1:11,Key2:12,Key3:13,Key4:14,Key5:15,Key6:16,Key7:17,Key8:18,Key9:19,Red:20,
Green:21,Blue:22,Yellow:23,White:24,Magenta:25,F1:26,F2:27,F3:28,F4:29,F5:30,F6:
31,F7:32,F8:33,F9:34,F10:35,ChannelUp:36,ChannelDown:37,Display:38,SkipPrev:39,SkipNext:
40,Home:41,End:42,Insert:43,Delete:44,Clear:45,VolumeUp:46,VolumeDown:47,Show:48
,Hide:49,Play:50,Pause:51,Record:52,Stop:53,Rev:54,Fwd:55,SlowRev:56,SlowFwd:57,
SkipBwd:58,SkipFwd:59,Repeat:60,Eject:61,Help:62,TV:63,DVD:64,VCR:65,EPG:66,OSD:
67,Text:68,PIP:69,Audio:70,Clock:71,Timer:72,Navigation:73,Karaoke:74,Game:75,Subtitle:
76,Zoom:77,Index:78,Info:79,Power:80,Setup:81,Angle:82,Mode:83,Mute:84,User0:85,
User1:86,User2:87,User3:88,User4:89,User5:90,User6:91,User7:92,User8:93,User9:94
,User10:95,User11:96,User12:97,User13:98,User14:99,User15:100,User16:101,User17:
102,User18:103,User19:104,KeyA:105,KeyB:106,KeyC:107,KeyD:108,KeyE:109,KeyF:110,
KeyG:111,KeyH:112,KeyI:113,KeyJ:114,KeyK:115,KeyL:116,KeyM:117,KeyN:118,KeyO:119
,KeyP:120,KeyQ:121,KeyR:122,KeyS:123,KeyT:124,KeyU:125,KeyV:126,KeyW:127,KeyX:128
,KeyY:129,KeyZ:130,Space:131,Plus:132,Minus:133,Multiply:134,Divide:135,Equals:136
,Period:137,Comma:138,Colon:139,Semicolon:140,AlphaKeys:141,AlphaOrDigitKeys:142
,DigitKeys:143,HexDigitKeys:144,CharacterKeys:145,ControlKeys:146,CursorKeys:147
,AnyKey:148,Enter:149,Escape:150,Backspace:151,Tab:152,CtrlKeyA:153,CtrlKeyB:154
,CtrlKeyC:155,CtrlKeyD:156,CtrlKeyE:157,CtrlKeyF:158,CtrlKeyG:159,CtrlKeyH:160,CtrlKeyI:
161,CtrlKeyJ:162,CtrlKeyK:163,CtrlKeyL:164,CtrlKeyM:165,CtrlKeyN:166,CtrlKeyO:167
,CtrlKeyP:168,CtrlKeyQ:169,CtrlKeyR:170,CtrlKeyS:171,CtrlKeyT:172,CtrlKeyU:173,CtrlKeyV:
174,CtrlKeyW:175,CtrlKeyX:176,CtrlKeyY:177,CtrlKeyZ:178,CtrlSpace:179,CtrlKey0:180
,CtrlKey1:181,CtrlKey2:182,CtrlKey3:183,CtrlKey4:184,CtrlKey5:185,CtrlKey6:186,CtrlKey7:
187,CtrlKey8:188,CtrlKey9:189,CtrlF1:190,CtrlF2:191,CtrlF3:192,CtrlF4:193,CtrlF5:
194,CtrlF6:195,CtrlF7:196,CtrlF8:197,CtrlF9:198,CtrlF10:199,CtrlEnter:200,CtrlEscape:
201,CtrlUp:202,CtrlDown:203,CtrlLeft:204,CtrlRight:205,CtrlPageUp:206,CtrlPageDown:
207,CtrlBackspace:208,CtrlInsert:209,CtrlDelete:210,CtrlHome:211,CtrlEnd:212,CtrlTab:
213,CtrlShiftKeyA:214,CtrlShiftKeyB:215,CtrlShiftKeyC:216,CtrlShiftKeyD:217,CtrlShiftKeyE:
218,CtrlShiftKeyF:219,CtrlShiftKeyG:220,CtrlShiftKeyH:221,CtrlShiftKeyI:222,CtrlShiftKeyJ:
223,CtrlShiftKeyK:224,CtrlShiftKeyL:225,CtrlShiftKeyM:226,CtrlShiftKeyN:227,CtrlShiftKeyO:
228,CtrlShiftKeyP:229,CtrlShiftKeyQ:230,CtrlShiftKeyR:231,CtrlShiftKeyS:232,CtrlShiftKeyT:
233,CtrlShiftKeyU:234,CtrlShiftKeyV:235,CtrlShiftKeyW:236,CtrlShiftKeyX:237,CtrlShiftKeyY:
238,CtrlShiftKeyZ:239,CtrlShiftSpace:240,CtrlShiftKey0:241,CtrlShiftKey1:242,CtrlShiftKey2:
243,CtrlShiftKey3:244,CtrlShiftKey4:245,CtrlShiftKey5:246,CtrlShiftKey6:247,CtrlShiftKey7:
248,CtrlShiftKey8:249,CtrlShiftKey9:250,CtrlShiftF1:251,CtrlShiftF2:252,CtrlShiftF3:
253,CtrlShiftF4:254,CtrlShiftF5:255,CtrlShiftF6:256,CtrlShiftF7:257,CtrlShiftF8:
258,CtrlShiftF9:259,CtrlShiftF10:260,CtrlShiftEnter:261,CtrlShiftEscape:262,CtrlShiftUp:
263,CtrlShiftDown:264,CtrlShiftLeft:265,CtrlShiftRight:266,CtrlShiftPageUp:267,CtrlShiftPageDown:
268,CtrlShiftBackspace:269,CtrlShiftInsert:270,CtrlShiftDelete:271,CtrlShiftHome:
272,CtrlShiftEnd:273,CtrlShiftTab:274,AltF1:275,AltF2:276,AltF3:277,AltF4:278,AltF5:
279,AltF6:280,AltF7:281,AltF8:282,AltF9:283,AltF10:284,AltEnter:285,AltEscape:286
,AltUp:287,AltDown:288,AltLeft:289,AltRight:290,AltPageUp:291,AltPageDown:292,AltBackspace:
293,AltInsert:294,AltDelete:295,AltHome:296,AltEnd:297,AltTab:298,AltShiftF1:299
,AltShiftF2:300,AltShiftF3:301,AltShiftF4:302,AltShiftF5:303,AltShiftF6:304,AltShiftF7:
305,AltShiftF8:306,AltShiftF9:307,AltShiftF10:308,AltShiftEnter:309,AltShiftEscape:
310,AltShiftUp:311,AltShiftDown:312,AltShiftLeft:313,AltShiftRight:314,AltShiftPageUp:
315,AltShiftPageDown:316,AltShiftBackspace:317,AltShiftInsert:318,AltShiftDelete:
319,AltShiftHome:320,AltShiftEnd:321,AltShiftTab:322,ShiftF1:323,ShiftF2:324,ShiftF3:
325,ShiftF4:326,ShiftF5:327,ShiftF6:328,ShiftF7:329,ShiftF8:330,ShiftF9:331,ShiftF10:
332,ShiftEnter:333,ShiftEscape:334,ShiftUp:335,ShiftDown:336,ShiftLeft:337,ShiftRight:
338,ShiftPageUp:339,ShiftPageDown:340,ShiftBackspace:341,ShiftInsert:342,ShiftDelete:
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.T2={Uv:0x1,Us:0x2,Ut:0x4,Uu:0x8,TO:
0x10,TF:0x20};
C._Init=function(){C.IQ.__proto__=C.C7;C.Ca.__proto__=C.C7;C.K.__proto__=C.Ca;C.Root.
__proto__=C.K;C.KeyEvent.__proto__=C.Event;C.JB.__proto__=C.Event;C.H3.__proto__=
C.Event;C.JC.__proto__=C.Event;C.IP.__proto__=C.Ca;C.LS.__proto__=C.IQ;C.JN.__proto__=
C.JM;};C._ReInit=function(){};C.D$=function(D){};return C;})();

/* Embedded Wizard */