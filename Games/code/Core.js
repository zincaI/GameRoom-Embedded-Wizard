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
var AT=[0,0];var Bh=[0,0,0,0];var D4="The view does not belong to this group";var
FT=[800,480];var Fh="The dialog component is already presented";var FU="The dialog component is actually not presented";
var K_="No fader to perform the fade-in/out operation";var JB="Trying to use the same fader twice";
var Gz="Trying to fade-in/out a group which belongs to another owner";var JC="No view to restack";
var Im="View is not in this group";var GA="No view to remove";var K$="No view to add";
var GB="View already in a group";var La="Recursive invalidate during active update cycle.";
var Fi=[-8,-8,9,9];var Lb=[0,0,1,1];var Lc="The KeyPressHandler is embedded within an object not being derived "+
"from Core::Group.";var Ld="Trying to cancel a task not belonging to this queue!";
var Le="Trying to enqueue a task twice!";
C.Cu={W:null,Y:null,G:null,A8:null,F:0x103,D3:0,EB:0x14,IB:function(Am,JE){},DN:function(
E){if(this.D3===E)return;this.D3=E;if(!!this.G){var Ge=this.W;var CW=0;while(!!Ge&&(
E>Ge.D3)){Ge=Ge.W;CW=CW+1;}Ge=this.Y;while(!!Ge&&(E<Ge.D3)){Ge=Ge.Y;CW=CW-1;}if(
!!CW)this.G.NE(this,CW);}},Nv:function(E){var A;var CW=E^this.EB;if(!CW)return;this.
EB=E;if(!!this.A8&&!((this.F&0x400)===0x400)){this.G.F=this.G.F|0x5000;B.pe([A=this.
G,A.CF],this);this.G.Ax([0,0,(A=this.G.T)[2]-A[0],A[3]-A[1]]);}if(!!this.A8&&((this.
F&0x400)===0x400)){this.A8.Hh.F=this.A8.Hh.F|0x1000;this.G.F=this.G.F|0x4000;B.pe([
A=this.G,A.CF],this);}},DY:function(){var Ao=this.G;while(!!Ao){var E2=(C.Root.isPrototypeOf(
Ao)?Ao:null);if(!!E2)return E2;Ao=Ao.G;}return null;},EO:function(Bm,aClip,aOffset
,aOpacity,aBlend){},GetClipping:function(){return this.GetExtent();},B1:function(
AP){return null;},GT:function(Ay,X,Dm,G7,FW,Ha){return null;},IV:function(Ay){return Ay;
},IX:function(Am,D6){return AT;},KA:function(aOffset,JD){},GetExtent:function(){
return Bh;},AC:function(Dl,D5){var A;if(((this.F&0x200)===0x200))Dl=Dl&~0x400;var
LF=(this.F&~D5)|Dl;var Es=LF^this.F;this.F=LF;if(!!this.G&&!!(Es&0x14)){var My=((
this.F&0x14)===0x14);if(My&&!this.G.Cq)this.G.D2(this);if(!My&&(this.G.Cq===this
))this.G.D2(this.G.L0(this,0x14));}if(!!this.G&&!!(Es&0x403))this.G.Ax(this.GetClipping(
));if(((!!this.A8&&!!this.G)&&((LF&0x400)===0x400))&&((Es&0x1)===0x1)){this.F=this.
F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CF],this);}if(!!this.G&&((Es&0x400
)===0x400)){this.A8=null;this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.
G,A.CF],this);}if(((((Es&0x100000)===0x100000)&&((D5&0x100000)===0x100000))&&((this.
F&0x10)===0x10))&&!((this.F&0x200080)===0x200080))this.AC(0x0,0x10);if(((((Es&0x100000
)===0x100000)&&((Dl&0x100000)===0x100000))&&!((this.F&0x10)===0x10))&&(!((this.F&
0x200000)===0x200000)||((!((this.F&0x80)===0x80)&&!!this.G)&&((this.G.F&0x10)===
0x10))))this.AC(0x10,0x0);if(((((Es&0x200000)===0x200000)&&((D5&0x200000)===0x200000
))&&!((this.F&0x10)===0x10))&&((this.F&0x100000)===0x100000))this.AC(0x10,0x0);if((((((
Es&0x200000)===0x200000)&&((Dl&0x200000)===0x200000))&&((this.F&0x100010)===0x100010
))&&!((this.F&0x80)===0x80))&&((!!this.G&&!((this.G.F&0x10)===0x10))||((((this.F&
0x10000)===0x10000)&&!!this.G)&&(this.G.AW.AD!==this))))this.AC(0x0,0x10);},_Init:
function(aArg){this.__proto__=C.Cu;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.W)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
G)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.A8)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:
null,_className:"Core::View"};C.If={B9:B.wf,Ct:B.wf,B8:B.wf,Cs:B.wf,IB:function(
Am,JE){var An=B._NewObject(C.I$,0);this.A8=null;An.CZ=this.GetExtent();An.Ap=Am;
An.Hh=JE;An.IM=this.Cs;An.IN=this.B8;An.IO=this.Ct;An.IP=this.B9;this.A8=An;},IX:
function(Am,D6){var A;var BR=this.EB;var An=(C.I$.isPrototypeOf(A=this.A8)?A:null
);var Ae=An.CZ[0];var Af=An.CZ[1];var Ah=An.CZ[2];var Ai=An.CZ[3];var CY=[Am[2]-
Am[0],Am[3]-Am[1]];var AH=Ah-Ae;var AE=Ai-Af;if(!D6){var Ex=[(A=An.Ap)[2]-A[0],A[
3]-A[1]];Ae=Ae-An.Ap[0];Af=Af-An.Ap[1];if(Ex[0]!==CY[0]){var Cw=((BR&0x4)===0x4);
var Cx=((BR&0x8)===0x8);var E0=((BR&0x1)===0x1);if(!Cw&&(E0||!Cx))Ae=((Ae*CY[0])
/Ex[0])|0;if(!Cx&&(E0||!Cw)){Ah=Ah-An.Ap[0];Ah=((Ah*CY[0])/Ex[0])|0;Ah=Ah-CY[0];
}else Ah=Ah-An.Ap[2];Ae=Ae+Am[0];Ah=Ah+Am[2];if(!E0){if(Cw&&!Cx)Ah=Ae+AH;else if(
!Cw&&Cx)Ae=Ah-AH;else{Ae=Ae+((((Ah-Ae)-AH)/2)|0);Ah=Ae+AH;}}}else{Ah=Ah-An.Ap[2];
Ae=Ae+Am[0];Ah=Ah+Am[2];}if(Ex[1]!==CY[1]){var Cy=((BR&0x10)===0x10);var Cv=((BR&
0x20)===0x20);var E1=((BR&0x2)===0x2);if(!Cy&&(E1||!Cv))Af=((Af*CY[1])/Ex[1])|0;
if(!Cv&&(E1||!Cy)){Ai=Ai-An.Ap[1];Ai=((Ai*CY[1])/Ex[1])|0;Ai=Ai-CY[1];}else Ai=Ai-
An.Ap[3];Af=Af+Am[1];Ai=Ai+Am[3];if(!E1){if(Cy&&!Cv)Ai=Af+AE;else if(!Cy&&Cv)Af=
Ai-AE;else{Af=Af+((((Ai-Af)-AE)/2)|0);Ai=Af+AE;}}}else{Ai=Ai-An.Ap[3];Af=Af+Am[1
];Ai=Ai+Am[3];}}else{switch(D6){case 3:{Ae=Am[0];Ah=Ae+AH;}break;case 4:{Ah=Am[2
];Ae=Ah-AH;}break;case 1:{Af=Am[1];Ai=Af+AE;}break;case 2:{Ai=Am[3];Af=Ai-AE;}break;
default:;}if((D6===3)||(D6===4)){var Cy=((BR&0x10)===0x10);var Cv=((BR&0x20)===0x20
);var E1=((BR&0x2)===0x2);if(E1){Af=Am[1];Ai=Am[3];}else if(Cy&&!Cv){Af=Am[1];Ai=
Af+AE;}else if(Cv&&!Cy){Ai=Am[3];Af=Ai-AE;}else{Af=Am[1]+((((Am[3]-Am[1])-AE)/2)|
0);Ai=Af+AE;}}if((D6===1)||(D6===2)){var Cw=((BR&0x4)===0x4);var Cx=((BR&0x8)===
0x8);var E0=((BR&0x1)===0x1);if(E0){Ae=Am[0];Ah=Am[2];}else if(Cw&&!Cx){Ae=Am[0];
Ah=Ae+AH;}else if(Cx&&!Cw){Ah=Am[2];Ae=Ah-AH;}else{Ae=Am[0]+((((Am[2]-Am[0])-AH)
/2)|0);Ah=Ae+AH;}}}An.isEmpty=(Ae>=Ah)||(Af>=Ai);AH=(Ah-Ae)-1;AE=(Ai-Af)-1;var FZ=
An.CZ[0];var F0=An.CZ[1];var Fs=(An.CZ[2]-FZ)-1;var Fr=(An.CZ[3]-F0)-1;if(!Fs)Fs=
1;if(!Fr)Fr=1;if(((this.F&0x100)===0x100)){this.Cs=[Ae+((((An.IM[0]-FZ)*AH)/Fs)|
0),Af+((((An.IM[1]-F0)*AE)/Fr)|0)];this.B8=[Ae+((((An.IN[0]-FZ)*AH)/Fs)|0),Af+((((
An.IN[1]-F0)*AE)/Fr)|0)];this.Ct=[Ae+((((An.IO[0]-FZ)*AH)/Fs)|0),Af+((((An.IO[1]-
F0)*AE)/Fr)|0)];this.B9=[Ae+((((An.IP[0]-FZ)*AH)/Fs)|0),Af+((((An.IP[1]-F0)*AE)/
Fr)|0)];}else{this.KL([Ae+((((An.IM[0]-FZ)*AH)/Fs)|0),Af+((((An.IM[1]-F0)*AE)/Fr
)|0)]);this.KM([Ae+((((An.IN[0]-FZ)*AH)/Fs)|0),Af+((((An.IN[1]-F0)*AE)/Fr)|0)]);
this.KN([Ae+((((An.IO[0]-FZ)*AH)/Fs)|0),Af+((((An.IO[1]-F0)*AE)/Fr)|0)]);this.KO([
Ae+((((An.IP[0]-FZ)*AH)/Fs)|0),Af+((((An.IP[1]-F0)*AE)/Fr)|0)]);this.A8=An;}return[
AH+1,AE+1];},KA:function(aOffset,JD){if(JD){this.Cs=B.abf(this.Cs,aOffset);this.
B8=B.abf(this.B8,aOffset);this.Ct=B.abf(this.Ct,aOffset);this.B9=B.abf(this.B9,aOffset
);}else{this.KL(B.abf(this.Cs,aOffset));this.KM(B.abf(this.B8,aOffset));this.KN(
B.abf(this.Ct,aOffset));this.KO(B.abf(this.B9,aOffset));}},GetExtent:function(){
if(!!this.A8&&this.A8.isEmpty)return Bh;var Ae=this.Cs[0];var Af=this.Cs[1];var Ah=
this.Ct[0];var Ai=this.Ct[1];if((((this.B9[0]!==Ae)||(this.B8[1]!==Af))||(this.B8[
0]!==Ah))||(this.B9[1]!==Ai)){if(this.B8[0]<Ae)Ae=this.B8[0];if(this.Ct[0]<Ae)Ae=
this.Ct[0];if(this.B9[0]<Ae)Ae=this.B9[0];if(this.B8[1]<Af)Af=this.B8[1];if(this.
Ct[1]<Af)Af=this.Ct[1];if(this.B9[1]<Af)Af=this.B9[1];if(this.Cs[0]>Ah)Ah=this.Cs[
0];if(this.B8[0]>Ah)Ah=this.B8[0];if(this.B9[0]>Ah)Ah=this.B9[0];if(this.Cs[1]>Ai
)Ai=this.Cs[1];if(this.B8[1]>Ai)Ai=this.B8[1];if(this.B9[1]>Ai)Ai=this.B9[1];}else{
var tmp;if(Ah<Ae){tmp=Ae;Ae=Ah;Ah=tmp;}if(Ai<Af){tmp=Af;Af=Ai;Ai=tmp;}}return[Ae
,Af,Ah+1,Ai+1];},KO:function(E){var A;if(B.aaX(E,this.B9))return;if(!!this.G&&((
this.F&0x1)===0x1))this.G.Ax(this.GetClipping());this.A8=null;this.B9=E;if(!!this.
G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping());if((!!this.G&&((this.F&0x400
)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.
F|0x4000;B.pe([A=this.G,A.CF],this);}},KN:function(E){var A;if(B.aaX(E,this.Ct))
return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping());this.A8=null;
this.Ct=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping());if((!!
this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.F=this.F|
0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CF],this);}},KM:function(E){var A;
if(B.aaX(E,this.B8))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping(
));this.A8=null;this.B8=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CF],this);}},KL:function(
E){var A;if(B.aaX(E,this.Cs))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(
this.GetClipping());this.A8=null;this.Cs=E;if(!!this.G&&((this.F&0x1)===0x1))this.
G.Ax(this.GetClipping());if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000
)===0x2000)){this.F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CF],this
);}},Kt:function(ER){var Bb=B.abi(4,B.wf,null);var L=0;var AF=3;var Lw=false;var
Lx=false;Bb.Set(0,this.Cs);Bb.Set(1,this.B8);Bb.Set(2,this.Ct);Bb.Set(3,this.B9);
while(L<4){var MS=Bb.Get(L)[0];var J6=Bb.Get(L)[1];var Q4=Bb.Get(AF)[0];var LS=Bb.
Get(AF)[1];if(((J6>ER[1])!==(LS>ER[1]))||((J6<ER[1])!==(LS<ER[1]))){var BV=((((Q4-
MS)*(ER[1]-J6))/(LS-J6))|0)+MS;if(ER[0]>BV)Lw=!Lw;if(ER[0]<BV)Lx=!Lx;}AF=L;L=L+1;
}return Lw||Lx;},No:function(){return((((this.Cs[0]===this.B9[0])&&(this.B8[0]===
this.Ct[0]))&&(this.Cs[1]===this.B8[1]))&&(this.Ct[1]===this.B9[1]))||((((this.Cs[
0]===this.B8[0])&&(this.Ct[0]===this.B9[0]))&&(this.Cs[1]===this.B9[1]))&&(this.
B8[1]===this.Ct[1]));},_Init:function(aArg){C.Cu._Init.call(this,aArg);this.__proto__=
C.If;},_className:"Core::QuadView"};C.BS={T:B.wg,IB:function(Am,JE){var An=B._NewObject(
C.I_,0);An.CZ=this.T;An.Ap=Am;An.Hh=JE;this.A8=An;},IX:function(Am,D6){var A;var
BR=this.EB;var An=this.A8;var Ae=An.CZ[0];var Af=An.CZ[1];var Ah=An.CZ[2];var Ai=
An.CZ[3];var CY=[Am[2]-Am[0],Am[3]-Am[1]];var AH=Ah-Ae;var AE=Ai-Af;if(!D6){var Ex=[(
A=An.Ap)[2]-A[0],A[3]-A[1]];Ae=Ae-An.Ap[0];Af=Af-An.Ap[1];if(Ex[0]!==CY[0]){var Cw=((
BR&0x4)===0x4);var Cx=((BR&0x8)===0x8);var E0=((BR&0x1)===0x1);if(!Cw&&(E0||!Cx)
)Ae=((Ae*CY[0])/Ex[0])|0;if(!Cx&&(E0||!Cw)){Ah=Ah-An.Ap[0];Ah=((Ah*CY[0])/Ex[0])|
0;Ah=Ah-CY[0];}else Ah=Ah-An.Ap[2];Ae=Ae+Am[0];Ah=Ah+Am[2];if(!E0){if(Cw&&!Cx)Ah=
Ae+AH;else if(!Cw&&Cx)Ae=Ah-AH;else{Ae=Ae+((((Ah-Ae)-AH)/2)|0);Ah=Ae+AH;}}}else{
Ah=Ah-An.Ap[2];Ae=Ae+Am[0];Ah=Ah+Am[2];}if(Ex[1]!==CY[1]){var Cy=((BR&0x10)===0x10
);var Cv=((BR&0x20)===0x20);var E1=((BR&0x2)===0x2);if(!Cy&&(E1||!Cv))Af=((Af*CY[
1])/Ex[1])|0;if(!Cv&&(E1||!Cy)){Ai=Ai-An.Ap[1];Ai=((Ai*CY[1])/Ex[1])|0;Ai=Ai-CY[
1];}else Ai=Ai-An.Ap[3];Af=Af+Am[1];Ai=Ai+Am[3];if(!E1){if(Cy&&!Cv)Ai=Af+AE;else
if(!Cy&&Cv)Af=Ai-AE;else{Af=Af+((((Ai-Af)-AE)/2)|0);Ai=Af+AE;}}}else{Ai=Ai-An.Ap[
3];Af=Af+Am[1];Ai=Ai+Am[3];}}else{switch(D6){case 3:{Ae=Am[0];Ah=Ae+AH;}break;case
4:{Ah=Am[2];Ae=Ah-AH;}break;case 1:{Af=Am[1];Ai=Af+AE;}break;case 2:{Ai=Am[3];Af=
Ai-AE;}break;default:;}if((D6===3)||(D6===4)){var Cy=((BR&0x10)===0x10);var Cv=((
BR&0x20)===0x20);var E1=((BR&0x2)===0x2);if(E1){Af=Am[1];Ai=Am[3];}else if(Cy&&!
Cv){Af=Am[1];Ai=Af+AE;}else if(Cv&&!Cy){Ai=Am[3];Af=Ai-AE;}else{Af=Am[1]+((((Am[
3]-Am[1])-AE)/2)|0);Ai=Af+AE;}}if((D6===1)||(D6===2)){var Cw=((BR&0x4)===0x4);var
Cx=((BR&0x8)===0x8);var E0=((BR&0x1)===0x1);if(E0){Ae=Am[0];Ah=Am[2];}else if(Cw&&
!Cx){Ae=Am[0];Ah=Ae+AH;}else if(Cx&&!Cw){Ah=Am[2];Ae=Ah-AH;}else{Ae=Am[0]+((((Am[
2]-Am[0])-AH)/2)|0);Ah=Ae+AH;}}}An.isEmpty=(Ae>=Ah)||(Af>=Ai);if(((this.F&0x100)===
0x100))this.T=[Ae,Af,Ah,Ai];else{this.R([Ae,Af,Ah,Ai]);this.A8=An;}return[Ah-Ae,
Ai-Af];},KA:function(aOffset,JD){if(JD)this.T=B.abh(this.T,aOffset);else this.R(
B.abh(this.T,aOffset));},GetExtent:function(){return this.T;},R:function(E){var A;
if(B.aaY(E,this.T))return;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping(
));this.A8=null;this.T=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping(
));if((!!this.G&&((this.F&0x400)===0x400))&&!((this.G.F&0x2000)===0x2000)){this.
F=this.F|0x800;this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CF],this);}},_Init:function(
aArg){C.Cu._Init.call(this,aArg);this.__proto__=C.BS;},_className:"Core::RectView"
};C.I={AN:null,AS:null,JS:null,AW:null,Et:null,Hj:null,Cq:null,B7:255,Iw:0,Iz:0,
Iy:0,Ix:0,BL:function(aArg){this.Eg();},EO:function(Bm,aClip,aOffset,aOpacity,aBlend
){var A;aOpacity=((aOpacity+1)*this.B7)>>8;aBlend=aBlend&&((this.F&0x2)===0x2);this.
QC(Bm,aClip,B.abf(aOffset,this.T.slice(0,2)),aOpacity,aBlend);},GetClipping:function(
){var A;var Ac=this.T;Ac=[].concat(Ac[0]-this.Ix,Ac.slice(1,4));Ac=B.abP(Ac,Ac[1
]-this.Iz);Ac=B.abN(Ac,Ac[2]+this.Iy);Ac=[].concat(Ac.slice(0,3),Ac[3]+this.Iw);
if(((this.F&0x80000)===0x80000)){var Hn=Bh;var M;for(M=this.AN;!!M;M=M.W)if(((M.
F&0x1)===0x1))Hn=B.wC(Hn,M.GetClipping());Ac=B.wC(Ac,B.abh(Hn,this.T.slice(0,2))
);}return Ac;},GT:function(Ay,X,Dm,G7,FW,Ha){var A;var M=this.AS;var Hf=null;var
Ar=Bh;var Dw=null;var LC=!!this.Et&&(!!this.Et.Dp||!!this.Et.AN);if(((A=B.lb(Ay,
this.T))[0]>=A[2])||(A[1]>=A[3]))return null;Ay=B.abg(Ay,this.T.slice(0,2));if(!
!FW){M=FW;while(!!M&&(M.G!==this))M=M.G;}while(!!M){if(((M.F&0x400)===0x400)&&!Dw
){Dw=M.Y;while(!!Dw&&!((Dw.F&0x200)===0x200))Dw=Dw.Y;if(!!Dw)Ar=B.lb(Ay,Dw.GetExtent(
));else Ar=Bh;}if(Dw===M){Dw=null;Ar=Bh;}if((!!G7&&!!(C.I.isPrototypeOf(M)?M:null
))||((((((M.F&0x8)===0x8)&&((M.F&0x10)===0x10))&&!((M.F&0x40000)===0x40000))&&!((
M.F&0x20000)===0x20000))&&(!((M.F&0x10000)===0x10000)||((this.AW.AD===M)&&!LC)))
){var CZ=M.GetExtent();var JL=G7;var He=null;if(JL===M)JL=null;if(((M.F&0x400)===
0x400)){if(!(((A=B.lb(CZ,Ar))[0]>=A[2])||(A[1]>=A[3])))He=M.GT(Ar,X,Dm,JL,FW,Ha);
}else if(!(((A=B.lb(CZ,Ay))[0]>=A[2])||(A[1]>=A[3]))||(G7===M))He=M.GT(Ay,X,Dm,JL
,FW,Ha);M=M.Y;if(!!He){if(!Hf||((He.HX<Hf.HX)&&(He.HX>=0)))Hf=He;if(!He.HX)M=null;
}}else M=M.Y;FW=null;}return Hf;},IV:function(Ay){var A;var Fj;var M=this.AN;var
Hc=Bh;var IL=true;var result=(Ay=Fj=B.abg(Ay,this.T.slice(0,2)),Fj);while(!!M){if(((
M.F&0x200)===0x200)){var HS=(C.Ie.isPrototypeOf(M)?M:null);Hc=B.lb(Ay,HS.T);IL=((
HS.F&0x1)===0x1);}if(((M.F&0x1)===0x1)){if(((M.F&0x400)===0x400)){if(IL){var Ar=
B.lb(M.GetClipping(),Hc);if(!((Ar[0]>=Ar[2])||(Ar[1]>=Ar[3])))result=B.wC(result
,M.IV(Ar));}}else{var Ar=B.lb(M.GetClipping(),Ay);if(!((Ar[0]>=Ar[2])||(Ar[1]>=Ar[
3])))result=B.wC(result,M.IV(Ar));}}M=M.W;}return B.lb(B.abh(result,this.T.slice(
0,2)),this.T);},AC:function(Dl,D5){var A;var JT=this.F;if((!!this.G&&((this.F&0x80001
)===0x80001))&&((D5&0x80000)===0x80000))this.G.Ax(this.GetClipping());C.BS.AC.call(
this,Dl,D5);if(((!!this.G&&((this.F&0x1)===0x1))&&((Dl&0x80000)===0x80000))&&!((
JT&0x80000)===0x80000))this.G.Ax(this.GetClipping());var Es=this.F^JT;if(!!this.
Cq&&((Es&0x40)===0x40)){if(((this.F&0x40)===0x40))this.Cq.AC(0x40,0x0);else this.
Cq.AC(0x0,0x40);}if(!!this.AW&&((Es&0x40)===0x40)){if(((this.F&0x40)===0x40)&&((
this.AW.AD.F&0x14)===0x14))this.AW.AD.AC(0x40,0x0);else this.AW.AD.AC(0x0,0x40);
}if(((Es&0x10)===0x10)){var M;for(M=this.AN;!!M;M=M.W)if((((M.F&0x300000)===0x300000
)&&!((M.F&0x80)===0x80))&&(!((M.F&0x10000)===0x10000)||(this.AW.AD===M)))M.AC(Dl&
0x10,D5&0x10);}if(!!Es){this.F=this.F|0x8000;B.pe([this,this.J4],this);}},R:function(
E){var A;if(B.aaY(E,this.T))return;var GL=[(A=this.T)[2]-A[0],A[3]-A[1]];var LE=[
E[2]-E[0],E[3]-E[1]];var HU=!B.aaX(GL,LE);C.BS.R.call(this,E);if((HU&&(GL[0]>0))&&(
GL[1]>0)){var Ap=[].concat(AT,GL);var M=this.AN;while(!!M){if((!M.A8&&(M.EB!==0x14
))&&!((M.F&0x400)===0x400))M.IB(Ap,null);M=M.W;}}if(HU){this.F=this.F|0x5000;B.pe([
this,this.J4],this);}},MJ:function(AP){var MB=(C.KeyEvent.isPrototypeOf(AP)?AP:null
);var EL=this.JS;if(!MB)return null;while(!!EL&&(!EL.A1||!EL.B1(MB)))EL=EL.W;return EL;
},QC:function(Bm,aClip,aOffset,aOpacity,aBlend){var A;var M=this.AN;var Hc=Bh;var
IL=true;this.M7(Bm,aClip,aOffset,aOpacity,aBlend);while(!!M){if(((M.F&0x200)===0x200
)){var HS=(C.Ie.isPrototypeOf(M)?M:null);IL=((HS.F&0x1)===0x1);Hc=aClip;if(!((HS.
F&0x80000)===0x80000))Hc=B.lb(Hc,B.abh(HS.T,aOffset));}if(((M.F&0x1)===0x1)){if(((
M.F&0x400)===0x400)){if(IL){var Ar=B.lb(B.abh(M.GetClipping(),aOffset),Hc);if(!((
Ar[0]>=Ar[2])||(Ar[1]>=Ar[3])))M.EO(Bm,Ar,aOffset,aOpacity,aBlend);}}else{var Ar=
B.lb(B.abh(M.GetClipping(),aOffset),aClip);if(!((Ar[0]>=Ar[2])||(Ar[1]>=Ar[3])))
M.EO(Bm,Ar,aOffset,aOpacity,aBlend);}}M=M.W;}this.M8(Bm,aClip,aOffset,aOpacity,aBlend
);},QW:function(){var A;var Lu=((this.F&0x1000)===0x1000);var F_=[0,0,(A=this.T)[
2]-A[0],A[3]-A[1]];var Ft=false;var HP=Bh;var Ls=Bh;var M=this.AS;var Dw=null;while(
!!M){if(((M.F&0x800)===0x800)){Ft=true;M.F=M.F&~0x800;}if(Ft&&((M.F&0x200)===0x200
))Ft=false;M=M.Y;}Ft=false;M=this.AN;if(Lu){this.F=this.F&~0x1000;Lu=!((F_[0]>=F_[
2])||(F_[1]>=F_[3]));}this.F=this.F|0x2000;while(!!M){if(((M.F&0x400)===0x400)){
if(!!M.A8&&(M.A8.Hh!==Dw))M.A8=null;if((!M.A8&&Ft)&&(M.EB!==0x14))M.IB(Ls,Dw);}if(
!!M.A8){if(Lu&&!((M.F&0x400)===0x400))M.IX(F_,0);if(Ft&&((M.F&0x400)===0x400))M.
IX(Ls,0);}if(((M.F&0x200)===0x200)){Ft=((M.F&0x1000)===0x1000);Dw=(C.Ie.isPrototypeOf(
M)?M:null);if(Ft){M.F=M.F&~0x1000;HP=Dw.T;Ls=HP;Ft=!((HP[0]>=HP[2])||(HP[1]>=HP[
3]));}if(Ft)this.Ax(Dw.T);}M=M.W;}this.F=this.F&~0x2000;this.Mk([F_[2]-F_[0],F_[
3]-F_[1]]);},CF:function(S){B.pe([this,this.J4],this);},J4:function(S){var A;var
Q3=((this.F&0x1000)===0x1000);if(((this.F&0x4000)===0x4000)){this.F=this.F&~0x4000;
this.QW();}if(((this.F&0x8000)===0x8000)||Q3){this.F=this.F&~0x8000;this.K8(this.
F);}},D2:function(E){var A;if(!!E&&(E.G!==this))throw new Error(D4);if(!!E&&!((E.
F&0x14)===0x14))E=null;if(!!E&&((E.F&0x10000)===0x10000))E=null;if(E===this.Cq)return;
if(!!this.Cq)this.Cq.AC(0x0,0x60);this.Cq=E;if(!!E){if(((this.F&0x40)===0x40))E.
AC(0x60,0x0);else E.AC(0x20,0x0);}},Q:function(E){if(E)this.AC(0x100000,0x0);else
this.AC(0x0,0x100000);},Dc:function(E){var A;if(E>255)E=255;if(E<0)E=0;if(E===this.
B7)return;this.B7=E;if(!!this.G&&((this.F&0x1)===0x1))this.G.Ax(this.GetClipping(
));},Ml:function(CG){this.Dc(CG);},EE:function(){var A;return((this.F&0x1)===0x1
);},Aq:function(E){if(E)this.AC(0x1,0x0);else this.AC(0x0,0x1);},ExtendClipping:
function(G9,G_,G$,G8){var A;var Iu=this.T;var Do=Iu;if(G9<0)G9=0;if(G9>255)G9=255;
if(G_<0)G_=0;if(G_>255)G_=255;if(G$<0)G$=0;if(G$>255)G$=255;if(G8<0)G8=0;if(G8>255
)G8=255;Do=[].concat(Do[0]-(Math.max(G9,this.Ix)&0xFF),Do.slice(1,4));Do=B.abN(Do
,Do[2]+(Math.max(G_,this.Iy)&0xFF));Do=B.abP(Do,Do[1]-(Math.max(G$,this.Iz)&0xFF
));Do=[].concat(Do.slice(0,3),Do[3]+(Math.max(G8,this.Iw)&0xFF));if(G9!==this.Ix
){if((!!this.G&&((this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Ac=Do;
Ac=B.abN(Ac,Iu[0]);this.G.Ax(Ac);}this.Ix=G9&0xFF;}if(G_!==this.Iy){if((!!this.G&&((
this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Ac=Do;Ac=[].concat(Iu[2]
,Ac.slice(1,4));this.G.Ax(Ac);}this.Iy=G_&0xFF;}if(G$!==this.Iz){if((!!this.G&&((
this.F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Ac=Do;Ac=[].concat(Ac.slice(
0,3),Iu[1]);this.G.Ax(Ac);}this.Iz=G$&0xFF;}if(G8!==this.Iw){if((!!this.G&&((this.
F&0x1)===0x1))&&!((this.F&0x80000)===0x80000)){var Ac=Do;Ac=B.abP(Ac,Iu[3]);this.
G.Ax(Ac);}this.Iw=G8&0xFF;}},M8:function(Bm,aClip,aOffset,aOpacity,aBlend){},M7:
function(Bm,aClip,aOffset,aOpacity,aBlend){},GetMaximalSize:function(){return FT;
},GetMinimalSize:function(){return AT;},Kj:function(){var A;if(!!this.AW)return this.
AW.AD.Kj();if(!((this.F&0x10000)===0x10000))return null;return this;},Gl:function(
Mq){var A;return(((((this.F&0x10000)===0x10000)&&!!this.G)&&!!this.G.AW)&&(this.
G.AW.AD===this))&&(!Mq||this.G.Gl(true));},Gv:function(BT,DS,FV,EQ,ES,Ir,EK,Fm,DR
,DP,DQ){var A;if(!this.AW){this.Js(BT,DS,FV,EQ,ES,null,null,DR,DP,DQ);return;}var
GK=this.AW;var Bx=GK.W;if(((BT.F&0x10000)===0x10000)&&(this.AW.AD!==BT))throw new
Error(Fh);var EW=B._NewObject(C.Kd,0);var Dt=GK.Dt;var DF=null;var Ca=null;if(!!
Bx){DF=Bx.DF;Ca=Bx.Ca;}if(!!Bx&&!!GK.Hi)DF=GK.Hi;if(!!Bx&&!!EK)Ca=EK;if(!!Ir)Dt=
Ir;if(!DS)DS=B._GetAutoObject(B.ach.HJ);if(!FV)FV=DS;if(!ES)ES=EQ;if(!EQ)EQ=ES;EW.
Dt=FV;EW.Ca=EQ;EW.DF=ES;EW.Hi=Fm;EW.AD=BT;EW.W=this.AW.W;this.AW.W=null;this.AW=
EW;if(this.Cq===BT)this.D2(null);GK.AD.AC(0x0,0x10040);if(((this.F&0x40)===0x40)&&((
BT.F&0x4)===0x4))BT.AC(0x10040,0x0);else BT.AC(0x10000,0x0);if(!!Ca){this.CI(Bx.
AD,Ca.Gi(),null,null,DQ);this.CI(GK.AD,Dt.E5(),null,null,true);this.CI(EW.AD,DS.
E6(),DR,DP,true);}else if(!!DF){this.CI(Bx.AD,DF.Gj(),null,null,DQ);this.CI(GK.AD
,Dt.E5(),null,null,true);this.CI(EW.AD,DS.E6(),DR,DP,true);}else if(!!Dt){this.CI(
GK.AD,Dt.E5(),null,null,DQ);this.CI(EW.AD,DS.E6(),DR,DP,true);}else this.CI(EW.AD
,DS.E6(),DR,DP,DQ);},Ke:function(BT,Ir,EK,Fm,DR,DP,DQ){var A;if(!this.AW)return;
if(!BT)return;var BP=this.AW;var Bx=this.AW.W;var Hm=null;while((!!BP&&(BP.AD!==
BT))&&!!BP.W){Hm=BP;BP=Bx;Bx=BP.W;}if(!BP||(BP.AD!==BT))throw new Error(FU);if(!
Hm){this.AW=Bx;BP.W=null;}else{Hm.W=Bx;BP.W=null;}BP.AD.AC(0x0,0x10040);if(((((this.
F&0x10)===0x10)&&!!Bx)&&!Hm)&&((Bx.AD.F&0x200000)===0x200000))Bx.AD.AC(0x10,0x0);
if(((((this.F&0x40)===0x40)&&!!Bx)&&!Hm)&&((Bx.AD.F&0x4)===0x4))Bx.AD.AC(0x40,0x0
);var Dt=BP.Dt;var DF=null;var Ca=null;if(!!Bx)DF=Bx.DF;if(!!Bx&&!!BP.Hi)DF=BP.Hi;
if(!!Bx&&!!Fm)DF=Fm;if(!!Hm&&!!Bx)Ca=Bx.Ca;if((!!Hm&&!!Bx)&&!!EK)Ca=EK;if(!!Ir)Dt=
Ir;if(!!Ca){this.CI(Bx.AD,Ca.Gi(),null,null,DQ);this.CI(BP.AD,Dt.E5(),DR,DP,true
);}else if(!!DF){this.CI(Bx.AD,DF.Gj(),null,null,DQ);this.CI(BP.AD,Dt.E5(),DR,DP
,true);}else this.CI(BP.AD,Dt.E5(),DR,DP,DQ);},Js:function(BT,DS,FV,EQ,ES,EK,Fm,
DR,DP,DQ){var A;if(!BT)return;if(!!this.AW&&(this.AW.AD===BT)){this.Gv(BT,DS,FV,
EQ,ES,null,EK,Fm,DR,DP,DQ);return;}if(((BT.F&0x10000)===0x10000))throw new Error(
Fh);var BP=B._NewObject(C.Kd,0);if(!!this.AW&&!this.AW.Ca){if(!Fm)Fm=EK;if(!EK)EK=
Fm;}var Ca=null;if(!!this.AW)Ca=this.AW.Ca;if(!!this.AW&&!!EK)Ca=EK;if(!DS)DS=B.
_GetAutoObject(B.ach.HJ);if(!FV)FV=DS;if(!ES)ES=EQ;if(!EQ)EQ=ES;BP.Dt=FV;BP.Ca=EQ;
BP.DF=ES;BP.Hi=Fm;if(this.Cq===BT)this.D2(null);if(!!this.AW&&((this.AW.AD.F&0x200000
)===0x200000))this.AW.AD.AC(0x0,0x10);if(!!this.AW)this.AW.AD.AC(0x0,0x40);if(((
this.F&0x40)===0x40)&&((BT.F&0x4)===0x4))BT.AC(0x10040,0x0);else BT.AC(0x10000,0x0
);BP.AD=BT;BP.W=this.AW;this.AW=BP;if(!!Ca){this.CI(this.AW.W.AD,Ca.Gi(),null,null
,DQ);this.CI(BT,DS.E6(),DR,DP,true);}else this.CI(BT,DS.E6(),DR,DP,DQ);},Nr:function(
ER){var tmp=this;while(!!tmp){ER=B.abe(ER,tmp.T.slice(0,2));tmp=tmp.G;}return ER;
},DispatchEvent:function(AP){var A;var M=this.Cq;var Ao=(C.I.isPrototypeOf(M)?M:
null);var Bf=null;var LC=!!this.Et&&(!!this.Et.Dp||!!this.Et.AN);if(!!M&&((((M.F&
0x10000)===0x10000)||((M.F&0x40000)===0x40000))||((M.F&0x20000)===0x20000))){M=null;
Ao=null;}if(!!this.AW&&!LC)Bf=this.AW.AD.DispatchEvent(AP);if(!Bf&&!!Ao)Bf=Ao.DispatchEvent(
AP);else if(!Bf&&!!M)Bf=M.B1(AP);if(!Bf)Bf=this.B1(AP);if(!Bf)Bf=this.MJ(AP);return Bf;
},BroadcastEventAtPosition:function(AP,Mp,aFilter){var A;var M=this.AS;var Bf=null;
while(!!M&&!Bf){if((!aFilter||((A=aFilter)&&((M.F&A)===A)))&&B.wa(M.GetExtent(),
Mp)){var Ao=(C.I.isPrototypeOf(M)?M:null);if(!!Ao)Bf=Ao.BroadcastEventAtPosition(
AP,B.abe(Mp,Ao.T.slice(0,2)),aFilter);else Bf=M.B1(AP);}M=M.Y;}if(!Bf)Bf=this.B1(
AP);return Bf;},BroadcastEvent:function(AP,aFilter){var A;var M=this.AS;var Bf=null;
while(!!M&&!Bf){if(!aFilter||((A=aFilter)&&((M.F&A)===A))){var Ao=(C.I.isPrototypeOf(
M)?M:null);if(!!Ao)Bf=Ao.BroadcastEvent(AP,aFilter);else Bf=M.B1(AP);}M=M.Y;}if(
!Bf)Bf=this.B1(AP);if(!Bf)Bf=this.MJ(AP);return Bf;},Mk:function(aSize){},K8:function(
JG){},Eg:function(){this.F=this.F|0x8000;B.pe([this,this.J4],this);},Ax:function(
Ay){var A;var Ao=this;while(!!Ao&&!((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))){if(!Ao.G&&(
Ao!==this)){Ao.Ax(Ay);return;}if(!((Ao.F&0x1)===0x1))return;var Ac=Ao.T;Ay=B.abh(
Ay,Ac.slice(0,2));if(!((Ao.F&0x80000)===0x80000)){Ac=[].concat(Ac[0]-Ao.Ix,Ac.slice(
1,4));Ac=B.abP(Ac,Ac[1]-Ao.Iz);Ac=B.abN(Ac,Ac[2]+Ao.Iy);Ac=[].concat(Ac.slice(0,
3),Ac[3]+Ao.Iw);Ay=B.lb(Ay,Ac);}Ao=Ao.G;}},L0:function(P,aFilter){var A;if(!P||(
P.G!==this))return null;var GJ=P.W;var GM=P.Y;var IH=0x10000;if(((aFilter&0x10000
)===0x10000))IH=0x0;while(!!GJ||!!GM){if((!!GJ&&(!aFilter||((A=aFilter)&&((GJ.F&
A)===A))))&&(!IH||!((A=IH)&&((GJ.F&A)===A))))return GJ;if((!!GM&&(!aFilter||((A=
aFilter)&&((GM.F&A)===A))))&&(!IH||!((A=IH)&&((GM.F&A)===A))))return GM;if(!!GJ)
GJ=GJ.W;if(!!GM)GM=GM.Y;}return null;},CI:function(Fk,AZ,DR,DP,DQ){var A;if(!Fk)
return;if(!AZ)throw new Error(K_);if((!!AZ.I||!!AZ.G)||!!AZ.D$)throw new Error(JB
);if(!!Fk.G&&(Fk.G!==this))throw new Error(Gz);if(!this.Et)this.Et=B._NewObject(
C.Mj,0);AZ.G=this;AZ.I=Fk;AZ.JU=DP;AZ.LH=DR;if(!!Fk.Hj)Fk.Hj.D$.ND(Fk.Hj);Fk.Hj=
AZ;Fk.F=Fk.F|0x20000;if((DQ&&!!this.Et.AS)&&!this.Et.AS.Ks())(B.ach.I1.isPrototypeOf(
A=this.Et.AS)?A:null).LT(AZ);else{var D$=B._NewObject(B.ach.I1,0);D$.LT(AZ);this.
Et.NK(D$,false);}},K0:function(P){var A;if(!P)throw new Error(JC);if(P.G!==this)
throw new Error(Im);if(!P.W)return;var Cj=this.AS;var Gd=P.D3;while(!!Cj&&(Cj.D3>
Gd))Cj=Cj.Y;if(((Cj===P)||!Cj)||(Cj.W===P))return;if(((P.F&0x401)===0x401)){if(!
!P.Y&&!!P.A8)P.Y.F=P.Y.F|0x800;P.F=P.F|0x800;this.F=this.F|0x4000;B.pe([this,this.
CF],this);}if(((P.F&0x200)===0x200)){if(!!P.Y)P.Y.F=P.Y.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.CF],this);}if(!!P.Y)P.Y.W=P.W;else this.AN=P.W;P.W.Y=P.Y;P.Y=Cj;
P.W=Cj.W;Cj.W=P;if(!!P.W)P.W.Y=P;else this.AS=P;if(((P.F&0x1)===0x1))this.Ax(P.GetClipping(
));},NE:function(P,En){var A;if(!P)throw new Error(JC);if(P.G!==this)throw new Error(
Im);var Cj=P;var Bv=P;var Gd=P.D3;while(((En>0)&&!!Cj.W)&&(Cj.W.D3<=Gd)){Cj=Cj.W;
En=En-1;}while(((En<0)&&!!Bv.Y)&&(Bv.Y.D3>=Gd)){Bv=Bv.Y;En=En+1;}if((Cj===P)&&(Bv===
P))return;if(((P.F&0x401)===0x401)){if(!!P.Y&&!!P.A8)P.Y.F=P.Y.F|0x800;P.F=P.F|0x800;
this.F=this.F|0x4000;B.pe([this,this.CF],this);}if(((P.F&0x200)===0x200)){if(!!P.
Y)P.Y.F=P.Y.F|0x800;P.F=P.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CF],this);
}if(!!P.Y)P.Y.W=P.W;if(!!P.W)P.W.Y=P.Y;if(this.AN===P)this.AN=P.W;if(this.AS===P
)this.AS=P.Y;if(Cj!==P){P.W=Cj.W;P.Y=Cj;Cj.W=P;if(!!P.W)P.W.Y=P;}if(Bv!==P){P.W=
Bv;P.Y=Bv.Y;Bv.Y=P;if(!!P.Y)P.Y.W=P;}if(!P.W)this.AS=P;if(!P.Y)this.AN=P;if(((P.
F&0x1)===0x1))this.Ax(P.GetClipping());},Ig:function(P){var A;if(!P)throw new Error(
GA);if(P.G!==this)throw new Error(Im);if((((P.F&0x401)===0x401)&&!!P.Y)&&!!P.A8){
P.Y.F=P.Y.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CF],this);}if(((P.F&0x200
)===0x200)){if(!!P.Y)P.Y.F=P.Y.F|0x800;this.F=this.F|0x4000;B.pe([this,this.CF],
this);}P.A8=null;if(this.Cq===P)this.D2(this.L0(P,0x14));if(!!P.Y)P.Y.W=P.W;if(!
!P.W)P.W.Y=P.Y;if(this.AN===P)this.AN=P.W;if(this.AS===P)this.AS=P.Y;P.G=null;P.
W=null;P.Y=null;if((!((P.F&0x10)===0x10)&&((P.F&0x100000)===0x100000))&&!((this.
F&0x80)===0x80))P.AC(0x10,0x0);if(((P.F&0x1)===0x1))this.Ax(P.GetClipping());},V:
function(P,En){var A;if(!P)throw new Error(K$);if(!!P.G)throw new Error(GB);var Bv=
null;var Gd=P.D3;if(((En<0)&&!!this.AS)&&(this.AS.D3>=Gd)){Bv=this.AS;En=En+1;}while((((
En<0)&&!!Bv)&&!!Bv.Y)&&(Bv.Y.D3>=Gd)){Bv=Bv.Y;En=En+1;}if((!Bv&&!!this.AS)&&(this.
AS.D3>Gd))Bv=this.AS;while((!!Bv&&!!Bv.Y)&&(Bv.Y.D3>Gd))Bv=Bv.Y;if(!Bv){P.G=this;
P.Y=this.AS;if(!!this.AS)this.AS.W=P;if(!this.AN)this.AN=P;this.AS=P;}else{P.G=this;
P.Y=Bv.Y;P.W=Bv;Bv.Y=P;if(!!P.Y)P.Y.W=P;else this.AN=P;}if(((P.F&0x1)===0x1))this.
Ax(P.GetClipping());if(((P.F&0x80)===0x80)&&(B.aam().Nm()===P))P.AC(0x10,0x0);else
if(!((this.F&0x10)===0x10)&&((P.F&0x200010)===0x200010))P.AC(0x0,0x10);else if((((
this.F&0x10)===0x10)&&!((P.F&0x10)===0x10))&&((P.F&0x100000)===0x100000))P.AC(0x10
,0x0);if(((!this.Cq&&((P.F&0x4)===0x4))&&((P.F&0x10)===0x10))&&!((P.F&0x10000)===
0x10000))this.D2(P);if(((P.F&0x401)===0x401)){P.F=P.F|0x800;this.F=this.F|0x4000;
B.pe([this,this.CF],this);}if(((P.F&0x200)===0x200)){P.F=P.F|0x800;this.F=this.F|
0x4000;B.pe([this,this.CF],this);}},L8:function(){return this.B7;},_Init:function(
aArg){C.BS._Init.call(this,aArg);this.__proto__=C.I;this.F=0x10001F;this.BL(aArg
);},_Mark:function(D){var A;C.BS._Mark.call(this,D);if((A=this.AN)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.AS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
JS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.AW)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.Et)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Hj)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Cq)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:
"Core::Group"};C.Root={Dy:null,A$:B.abi(10,null,null),HM:null,FY:null,IU:0,Bi:0,
Ce:B.abi(10,0,null),JK:B.abi(10,B.wg,null),Er:B.abi(10,0,null),Fq:B.abi(10,B.wf,
null),HO:B.abi(10,0,null),FX:B.abi(10,B.wf,null),Eq:B.abi(10,B.wf,null),Dq:B.abi(
10,B.wf,null),EU:B.abi(10,B.wf,null),AK:0,JO:0,JN:0,Cp:B.abi(4,0,null),BJ:B.abi(
4,B.wg,null),BI:0,IE:0,HR:0,Lv:true,BL:function(aArg){if(!!!this.J){var obj=this;
B.abD(obj);}},DY:function(){return this;},EO:function(Bm,aClip,aOffset,aOpacity,
aBlend){var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(!fullScreenUpdate)Bm.
LZ(aClip,B.abh(B.abh(aClip,aOffset),this.T.slice(0,2)),0x00000000,0x00000000,0x00000000
,0x00000000,false);C.I.EO.call(this,Bm,aClip,aOffset,aOpacity,aBlend);},AC:function(
Dl,D5){var A;C.I.AC.call(this,Dl,D5);if(!this.G&&(((Dl&0x1)===0x1)||((D5&0x1)===
0x1)))this.Ax([0,0,(A=this.T)[2]-A[0],A[3]-A[1]]);if(!this.G&&(((Dl&0x2)===0x2)||((
D5&0x2)===0x2)))this.Ax([0,0,(A=this.T)[2]-A[0],A[3]-A[1]]);},D2:function(E){if((
E!==null)||!E)C.I.D2.call(this,E);},Dc:function(E){var A;var QI=this.B7;C.I.Dc.call(
this,E);if(((QI!==this.B7)&&!this.G)&&((this.F&0x1)===0x1))this.Ax([0,0,(A=this.
T)[2]-A[0],A[3]-A[1]]);},Gl:function(Mq){return true;},DispatchEvent:function(AP
){if(!!AP){AP.H5=!!this.Bi;if(!!this.Bi)AP.Bl=this.Bi;}var Bf;Bf=C.I.DispatchEvent.
call(this,AP);this.Bi=0;return Bf;},BroadcastEvent:function(AP,aFilter){if(!!AP){
AP.H5=!!this.Bi;if(!!this.Bi)AP.Bl=this.Bi;}var Bf=C.I.BroadcastEvent.call(this,
AP,aFilter);this.Bi=0;return Bf;},Ax:function(Ay){var A;if(this.IU>0)throw new Error(
La);var fullScreenUpdate=false;fullScreenUpdate=B.m7;if(fullScreenUpdate)Ay=[0,0
,(A=this.T)[2]-A[0],A[3]-A[1]];if(!!this.G){C.I.Ax.call(this,Ay);return;}Ay=B.lb(
B.abh(Ay,this.T.slice(0,2)),this.T);if((Ay[0]>=Ay[2])||(Ay[1]>=Ay[3]))return;var
L;for(L=0;L<this.BI;L=L+1)if(!(((A=B.lb(this.BJ.Get(L),Ay))[0]>=A[2])||(A[1]>=A[
3]))){this.BJ.Set(L,B.wC(this.BJ.Get(L),Ay));this.Cp.Set(L,B.aaH(this.BJ.Get(L))
);return;}if(this.BI<3){this.BJ.Set(this.BI,Ay);this.Cp.Set(this.BI,B.aaH(Ay));this.
BI=this.BI+1;return;}var AF;var Ba;var ID=0;var IF=0;var Mr=2147483647;this.BJ.Set(
this.BI,Ay);this.Cp.Set(this.BI,B.aaH(Ay));for(AF=0;AF<=this.BI;AF=AF+1)for(Ba=AF+
1;Ba<=this.BI;Ba=Ba+1){var J3=B.aaH(B.wC(this.BJ.Get(AF),this.BJ.Get(Ba)));var MH=((
J3<<8)/(this.Cp.Get(AF)+this.Cp.Get(Ba)))|0;if(MH<Mr){Mr=MH;ID=AF;IF=Ba;}}this.BJ.
Set(ID,B.wC(this.BJ.Get(ID),this.BJ.Get(IF)));this.Cp.Set(ID,B.aaH(this.BJ.Get(ID
)));if(IF!==this.BI){this.BJ.Set(IF,this.BJ.Get(this.BI));this.Cp.Set(IF,this.Cp.
Get(this.BI));}},QA:function(){var Cf=B._NewObject(C.I0,0);Cf.H5=!!this.Bi;if(!!
this.Bi)Cf.Bl=this.Bi;return Cf;},Hd:function(){var Cf=B._NewObject(C.Hu,0);Cf.H5=
!!this.Bi;if(!!this.Bi)Cf.Bl=this.Bi;return Cf;},HN:function(){var Cf=B._NewObject(
C.IZ,0);Cf.H5=!!this.Bi;if(!!this.Bi)Cf.Bl=this.Bi;return Cf;},QB:function(S){var
L;var Hf=false;for(L=0;L<10;L=L+1)if(!!this.A$.Get(L)){var Aa=this.Dq.Get(L);var
Ao=this.A$.Get(L).G;while(!!Ao&&(Ao!==this)){Aa=B.abe(Aa,Ao.T.slice(0,2));Ao=Ao.
G;}if(!Ao&&(this.A$.Get(L)!==this)){var tmp=this.A$.Get(L);this.AK=L;this.A$.Set(
L,null);tmp.B1(this.Hd().InitializeUp(L,this.FX.Get(L),this.Fq.Get(L),this.Er.Get(
L),this.Ce.Get(L)+1,this.Eq.Get(L),false,this.Dq.Get(L),this.EU.Get(L)));this.BroadcastEvent(
this.HN().InitializeUp(L,this.Ce.Get(L)+1,false,tmp,this.Dq.Get(L)),0x18);}else{
this.Er.Set(L,(this.FY.Bl-this.HO.Get(L))|0);if(this.Er.Get(L)<10)this.Er.Set(L,
10);this.AK=L;this.A$.Get(L).B1(this.Hd().InitializeHold(L,Aa,this.Fq.Get(L),this.
Er.Get(L),this.Ce.Get(L)+1,this.Eq.Get(L),this.Dq.Get(L),this.EU.Get(L)));Hf=true;
}}if(!Hf)this.FY.Q(false);},GetFPS:function(){var ticksCount=0;var Mz=0;ticksCount=((
new Date).getTime()-B.v$)|0;if(!!this.JO&&(ticksCount>this.JO))Mz=((this.JN*1000
)/((ticksCount-this.JO)|0))|0;this.JN=0;this.JO=ticksCount;return Mz;},Update:function(
){var A;if(!this.HM)this.HM=B._NewObject(B.Graphics.Canvas,0);this.HM.Mc([(A=this.
T)[2]-A[0],A[3]-A[1]]);this.HM.Update();return this.UpdateGE20(this.HM);},UpdateGE20:
function(Bm){if(!this.BeginUpdate())return Bh;var Fy=this.UpdateCanvas(Bm,AT);this.
EndUpdate();return Fy;},EndUpdate:function(){if(this.BI>0){this.JN=this.JN+1;this.
BI=0;}},UpdateCanvas:function(Bm,aOffset){var A;var Fy=Bh;var Qv=[].concat(aOffset
,B.abf(Bm.FrameSize,aOffset));var L;var AF=this.BI;this.IU=this.IU+1;Bm.AD=this;
for(L=0;(L<AF)&&(L<4);L=L+1)if(this.Cp.Get(L)>0){this.EO(Bm,B.abg(this.BJ.Get(L)
,aOffset),[-aOffset[0],-aOffset[1]],255,true);Fy=B.wC(Fy,B.lb(Qv,this.BJ.Get(L))
);}else AF=AF+1;Bm.AD=null;this.IU=this.IU-1;if(!((Fy[0]>=Fy[2])||(Fy[1]>=Fy[3])
))return B.abg(Fy,aOffset);else return Fy;},GetUpdateRegion:function(JF){var L;var
AF=this.BI;if(JF<0)return Bh;for(L=0;(L<AF)&&(L<4);L=L+1)if(!this.Cp.Get(L)){AF=
AF+1;JF=JF+1;}else if(L===JF)return this.BJ.Get(L);return Bh;},BeginUpdate:function(
){var A;var L;if(!!this.BI&&!B.aaY(this.BJ.Get(0),[0,0,(A=this.T)[2]-A[0],A[3]-A[
1]])){var MR=B.abi(3,B.wg,null);var MQ=this.BI;for(L=0;L<MQ;L++)MR.Set(L,this.BJ.
Get(L));for(L=0;L<MQ;L++){var MK=B.abh(MR.Get(L),this.T.slice(0,2));var ML=this.
IV(MK);if(!B.aaY(MK,ML))this.Ax(B.abg(ML,this.T.slice(0,2)));}}var AF;var Ba;for(
AF=0;AF<(this.BI-1);AF++)if(this.Cp.Get(AF)>0)for(Ba=AF+1;Ba<this.BI;Ba++)if(this.
Cp.Get(Ba)>0){var J3=B.aaH(B.wC(this.BJ.Get(AF),this.BJ.Get(Ba)));if(((J3-this.Cp.
Get(AF))-this.Cp.Get(Ba))<0){this.BJ.Set(AF,B.wC(this.BJ.Get(AF),this.BJ.Get(Ba)
));this.Cp.Set(AF,J3);this.Cp.Set(Ba,0);}}for(L=this.BI-1;L>=0;L--)if(!this.Cp.Get(
L))this.BI=this.BI-1;return this.BI;},DoesNeedUpdate:function(){if(this.BI>0)return true;
return false;},Initialize:function(aSize){this.R([].concat(AT,aSize));if(this.Lv
)this.F=this.F|0x60;else this.F=this.F|0x20;this.Ax(this.T);return this;},SetRootFocus:
function(Lj){if(Lj===this.Lv)return false;this.Lv=Lj;if(!Lj)this.AC(0x0,0x40);else
this.AC(0x40,0x0);return true;},SetUserInputTimestamp:function(Qt){this.Bi=Qt;},
DriveKeyboardHitting:function(BN,In,EI){var A;var LM=!!this.Dy;if(!!this.Dy&&((!
EI||(this.IE!==BN))||(this.HR!==In))){var Cf=null;var M=(C.Cu.isPrototypeOf(A=this.
Dy)?A:null);var EL=(C.FG.isPrototypeOf(A=this.Dy)?A:null);if(!!this.IE)Cf=B._NewObject(
C.KeyEvent,0).Initialize(this.IE,false);if(this.HR!==0x00)Cf=B._NewObject(C.KeyEvent
,0).Initialize2(this.HR,false);if(!!EL)EL.B1(Cf);else if(!!M)M.B1(Cf);this.IE=0;
this.HR=0x00;this.Dy=null;}if(!!this.Dy){var Cf=null;var M=(C.Cu.isPrototypeOf(A=
this.Dy)?A:null);var EL=(C.FG.isPrototypeOf(A=this.Dy)?A:null);if(!!BN)Cf=B._NewObject(
C.KeyEvent,0).Initialize(BN,true);if(this.HR!==0x00)Cf=B._NewObject(C.KeyEvent,0
).Initialize2(In,true);if(!!EL)EL.B1(Cf);else if(!!M)M.B1(Cf);}if(!this.Dy&&EI){
if(!!BN)this.Dy=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize(BN,true
));if(In!==0x00)this.Dy=this.DispatchEvent(B._NewObject(C.KeyEvent,0).Initialize2(
In,true));if(!(C.FG.isPrototypeOf(A=this.Dy)?A:null)&&!(C.Cu.isPrototypeOf(A=this.
Dy)?A:null))this.Dy=null;this.IE=BN;this.HR=In;LM=LM||!!this.Dy;}this.Bi=0;return LM;
},DriveCursorMovement:function(B_){return this.DriveMultiTouchMovement(this.AK,B_
);},DriveMultiTouchMovement:function(X,B_){if((X<0)||(X>9)){this.Bi=0;return false;
}var DV=B.abe(B_,this.Dq.Get(X));this.Dq.Set(X,B_);if(!this.A$.Get(X)||B.aaX(DV,
AT)){this.Bi=0;return false;}var Aa=B_;var Ao=this.A$.Get(X).G;while(!!Ao&&(Ao!==
this)){Aa=B.abe(Aa,Ao.T.slice(0,2));Ao=Ao.G;}if(!Ao&&(this.A$.Get(X)!==this)){var
tmp=this.A$.Get(X);this.AK=X;this.A$.Set(X,null);tmp.B1(this.Hd().InitializeUp(X
,this.FX.Get(X),this.Fq.Get(X),this.Er.Get(X),this.Ce.Get(X)+1,this.Eq.Get(X),false
,this.Dq.Get(X),this.EU.Get(X)));this.BroadcastEvent(this.HN().InitializeUp(X,this.
Ce.Get(X)+1,false,tmp,B_),0x18);}else{this.FX.Set(X,Aa);this.AK=X;this.A$.Get(X).
B1(this.QA().Initialize(X,Aa,this.Fq.Get(X),DV,this.Er.Get(X),this.Ce.Get(X)+1,this.
Eq.Get(X),B_,this.EU.Get(X)));}this.Bi=0;return true;},DriveCursorHitting:function(
EI,X,B_){return this.DriveMultiTouchHitting(EI,X,B_);},DriveMultiTouchHitting:function(
EI,X,B_){if((X<0)||(X>9)){this.Bi=0;return false;}var ticksCount=this.Bi;if(!ticksCount
)ticksCount=((new Date).getTime()-B.v$)|0;var Q1=this.Bi;this.DriveMultiTouchMovement(
X,B_);B_=this.Dq.Get(X);this.Bi=Q1;if(EI)this.EU.Set(X,B_);if(EI&&!this.A$.Get(X
)){var CB;var Aa=B_;if(B.wa(this.JK.Get(X),B_)&&((ticksCount-this.HO.Get(X))<=250
))this.Ce.Set(X,this.Ce.Get(X)+1);else this.Ce.Set(X,0);this.JK.Set(X,B.abh(Fi,B_
));this.HO.Set(X,ticksCount);CB=this.GT(B.abh(Fi,B_),X,this.Ce.Get(X)+1,null,null
,0x0);if(!!CB){this.BroadcastEvent(this.HN().InitializeDown(X,this.Ce.Get(X)+1,false
,CB.Cu,B_),0x18);this.A$.Set(X,CB.Cu);this.Eq.Set(X,CB.FI);}else{this.A$.Set(X,null
);this.Eq.Set(X,AT);this.Bi=0;return false;}var Ao=CB.Cu.G;while(!!Ao&&(Ao!==this
)){Aa=B.abe(Aa,Ao.T.slice(0,2));Ao=Ao.G;}this.Fq.Set(X,Aa);this.FX.Set(X,Aa);this.
Er.Set(X,0);this.FY.Q(true);this.AK=X;this.A$.Get(X).B1(this.Hd().InitializeDown(
X,Aa,this.Ce.Get(X)+1,this.Eq.Get(X),false,B_));this.Bi=0;return true;}if(!EI&&!
!this.A$.Get(X)){var Aa=B_;var Ao=this.A$.Get(X).G;while(!!Ao&&(Ao!==this)){Aa=B.
abe(Aa,Ao.T.slice(0,2));Ao=Ao.G;}if(!Ao)Aa=this.FX.Get(X);this.AK=X;var tmp=this.
A$.Get(X);this.A$.Set(X,null);tmp.B1(this.Hd().InitializeUp(X,Aa,this.Fq.Get(X),
this.Er.Get(X),this.Ce.Get(X)+1,this.Eq.Get(X),false,B_,this.EU.Get(X)));this.BroadcastEvent(
this.HN().InitializeUp(X,this.Ce.Get(X)+1,false,tmp,B_),0x18);this.Bi=0;return true;
}this.Bi=0;return false;},Mi:function(Fl,Mn,FW,Ha){if(Fl===this)Fl=null;if(!this.
A$.Get(this.AK))return;var CB;CB=this.GT(B.abh(Fi,this.Dq.Get(this.AK)),this.AK,
1,Fl,FW,Ha);if(!!CB&&(this.A$.Get(this.AK)!==CB.Cu))this.LW(CB.Cu,CB.FI);if(!CB&&(
this.A$.Get(this.AK)!==Mn))this.LW(Mn,AT);},LW:function(Fl,Em){if(!this.A$.Get(this.
AK)||(this.A$.Get(this.AK)===Fl))return;var tmp=this.A$.Get(this.AK);this.A$.Set(
this.AK,null);tmp.B1(this.Hd().InitializeUp(this.AK,this.FX.Get(this.AK),this.Fq.
Get(this.AK),this.Er.Get(this.AK),this.Ce.Get(this.AK)+1,this.Eq.Get(this.AK),true
,this.Dq.Get(this.AK),this.EU.Get(this.AK)));this.BroadcastEvent(this.HN().InitializeUp(
this.AK,this.Ce.Get(this.AK)+1,true,tmp,this.Dq.Get(this.AK)),0x18);var Aa=this.
Dq.Get(this.AK);var Ao=null;if(!!Fl)Ao=Fl.G;while(!!Ao&&(Ao!==this)){Aa=B.abe(Aa
,Ao.T.slice(0,2));Ao=Ao.G;}if(!Ao&&(Fl!==this)){this.A$.Set(this.AK,null);return;
}this.BroadcastEvent(this.HN().InitializeDown(this.AK,this.Ce.Get(this.AK)+1,true
,Fl,this.Dq.Get(this.AK)),0x18);var ticksCount=0;ticksCount=((new Date).getTime(
)-B.v$)|0;this.A$.Set(this.AK,Fl);this.Eq.Set(this.AK,Em);this.Fq.Set(this.AK,Aa
);this.FX.Set(this.AK,Aa);this.Ce.Set(this.AK,0);this.Er.Set(this.AK,0);this.HO.
Set(this.AK,ticksCount);this.EU.Set(this.AK,this.Dq.Get(this.AK));this.A$.Get(this.
AK).B1(this.Hd().InitializeDown(this.AK,Aa,this.Ce.Get(this.AK)+1,this.Eq.Get(this.
AK),true,this.EU.Get(this.AK)));},Nm:function(){return null;},_Init:function(aArg
){C.I._Init.call(this,aArg);C.Timer._Init.call(this.FY={J:this},0);(this.A$=[]).
__proto__=C.Root.A$;(this.Ce=[]).__proto__=C.Root.Ce;(this.JK=[]).__proto__=C.Root.
JK;(this.Er=[]).__proto__=C.Root.Er;(this.Fq=[]).__proto__=C.Root.Fq;(this.HO=[]
).__proto__=C.Root.HO;(this.FX=[]).__proto__=C.Root.FX;(this.Eq=[]).__proto__=C.
Root.Eq;(this.Dq=[]).__proto__=C.Root.Dq;(this.EU=[]).__proto__=C.Root.EU;(this.
Cp=[]).__proto__=C.Root.Cp;(this.BJ=[]).__proto__=C.Root.BJ;this.__proto__=C.Root;
this.F=0x10007F;this.FY.B3(10);this.FY.Bt=[this,this.QB];this.BL(aArg);},_Done:function(
){this.__proto__=C.I;this.FY._Done();C.I._Done.call(this);},_ReInit:function(){C.
I._ReInit.call(this);this.FY._ReInit();},_Mark:function(D){var A;C.I._Mark.call(
this,D);if((A=this.Dy)&&(A._cycle!=D))A._Mark(A._cycle=D);B.aa6(this.A$,D);if((A=
this.HM)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.FY)._cycle!=D)A._Mark(A._cycle=
D);},_className:"Core::Root"};C.Event={Bl:0,H5:false,BL:function(aArg){this.Bl=this.
H1();},H1:function(){var ticksCount=0;ticksCount=((new Date).getTime()-B.v$)|0;return ticksCount;
},_Init:function(aArg){this.__proto__=C.Event;this.BL(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::Event"};C.KeyEvent={Bz:0,AM:0,Down:false,Initialize2:function(BN,EI){this.
Bz=0;this.AM=BN;this.Down=EI;if((BN>=0x30)&&(BN<=0x39))this.Bz=(10+BN)-48;if((BN>=
0x41)&&(BN<=0x5A))this.Bz=(105+BN)-65;if((BN>=0x61)&&(BN<=0x7A))this.Bz=(105+BN)-
97;if(BN===0x20)this.Bz=131;if(!this.Bz)switch(BN){case 0x2B:this.Bz=132;break;case
0x2D:this.Bz=133;break;case 0x2A:this.Bz=134;break;case 0x2F:this.Bz=135;break;case
0x3D:this.Bz=136;break;case 0x2E:this.Bz=137;break;case 0x2C:this.Bz=138;break;case
0x3A:this.Bz=139;break;case 0x3B:this.Bz=140;break;default:;}return this;},Initialize:
function(BN,EI){this.Bz=BN;this.Down=EI;this.AM=0x00;var Lo=BN-10;var Ln=BN-105;
if((Lo>=0)&&(Lo<=9))this.AM=(48+Lo)&0xFFFF;if((Ln>=0)&&(Ln<=25))this.AM=(65+Ln)&
0xFFFF;if(BN===131)this.AM=0x20;if(this.AM===0x00)switch(BN){case 132:this.AM=0x2B;
break;case 133:this.AM=0x2D;break;case 134:this.AM=0x2A;break;case 135:this.AM=0x2F;
break;case 136:this.AM=0x3D;break;case 137:this.AM=0x2E;break;case 138:this.AM=0x2C;
break;case 139:this.AM=0x3A;break;case 140:this.AM=0x3B;break;default:;}return this;
},Nq:function(Mm){switch(Mm){case 141:return((this.AM>=0x41)&&(this.AM<=0x5A))||((
this.AM>=0x61)&&(this.AM<=0x7A));case 142:return(((this.AM>=0x41)&&(this.AM<=0x5A
))||((this.AM>=0x61)&&(this.AM<=0x7A)))||((this.AM>=0x30)&&(this.AM<=0x39));case
143:return(this.AM>=0x30)&&(this.AM<=0x39);case 144:return(((this.AM>=0x41)&&(this.
AM<=0x46))||((this.AM>=0x61)&&(this.AM<=0x66)))||((this.AM>=0x30)&&(this.AM<=0x39
));case 145:return this.AM!==0x00;case 146:return(this.AM===0x00)&&!!this.Bz;case
147:return(((this.Bz===6)||(this.Bz===7))||(this.Bz===4))||(this.Bz===5);case 148:
return(this.AM!==0x00)||!!this.Bz;default:;}return Mm===this.Bz;},_Init:function(
aArg){C.Event._Init.call(this,aArg);this.__proto__=C.KeyEvent;},_className:"Core::KeyEvent"
};C.IZ={Ju:null,CL:B.wf,Dj:0,Cl:0,Down:false,Ez:false,InitializeUp:function(X,Dm
,G6,Ll,EJ){this.Down=false;this.Cl=X;this.Dj=Dm;this.CL=EJ;this.Ju=Ll;this.Ez=G6;
return this;},InitializeDown:function(X,Dm,G6,Ll,EJ){this.Down=true;this.Cl=X;this.
Dj=Dm;this.CL=EJ;this.Ju=Ll;this.Ez=G6;return this;},_Init:function(aArg){C.Event.
_Init.call(this,aArg);this.__proto__=C.IZ;},_Mark:function(D){var A;C.Event._Mark.
call(this,D);if((A=this.Ju)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::CursorGrabEvent"
};C.Hu={FE:B.wf,CL:B.wf,Dj:0,Cr:0,E$:B.wf,DL:B.wf,Cl:0,Down:false,Ez:false,InitializeHold:
function(X,GC,Ip,Iq,Dm,Em,EJ,Io){this.Down=true;this.Cl=X;this.DL=B.abf(GC,Em);this.
E$=B.abf(Ip,Em);this.Cr=Iq;this.Dj=Dm;this.CL=EJ;this.FE=Io;return this;},InitializeUp:
function(X,GC,Ip,Iq,Dm,Em,G6,EJ,Io){this.Down=false;this.Cl=X;this.DL=B.abf(GC,Em
);this.E$=B.abf(Ip,Em);this.Cr=Iq;this.Dj=Dm;this.Ez=G6;this.CL=EJ;this.FE=Io;return this;
},InitializeDown:function(X,GC,Dm,Em,G6,EJ){this.Down=true;this.Cl=X;this.DL=B.abf(
GC,Em);this.E$=B.abf(GC,Em);this.Cr=0;this.Dj=Dm;this.Ez=G6;this.CL=EJ;this.FE=EJ;
return this;},_Init:function(aArg){C.Event._Init.call(this,aArg);this.__proto__=
C.Hu;},_className:"Core::CursorEvent"};C.I0={FE:B.wf,CL:B.wf,Dj:0,Cr:0,FI:B.wf,E$:
B.wf,DL:B.wf,Cl:0,Initialize:function(X,GC,Ip,aOffset,Iq,Qs,Em,EJ,Io){this.Cl=X;
this.DL=B.abf(GC,Em);this.E$=B.abf(Ip,Em);this.FI=aOffset;this.Cr=Iq;this.Dj=Qs;
this.CL=EJ;this.FE=Io;return this;},_Init:function(aArg){C.Event._Init.call(this
,aArg);this.__proto__=C.I0;},_className:"Core::DragEvent"};C.Ie={EO:function(Bm,
aClip,aOffset,aOpacity,aBlend){},GetClipping:function(){var A;var Ac=C.BS.GetClipping.
call(this);if(((this.F&0x80000)===0x80000)){var Hn=Bh;var M;for(M=this.W;!!M&&!((
M.F&0x200)===0x200);M=M.W)if(((M.F&0x1)===0x1))Hn=B.wC(Hn,M.GetClipping());Ac=B.
wC(Ac,Hn);}return Ac;},AC:function(Dl,D5){var A;var JT=this.F;if((!!this.G&&((this.
F&0x80001)===0x80001))&&((D5&0x80000)===0x80000))this.G.Ax(this.GetClipping());C.
BS.AC.call(this,Dl,D5);if(((!!this.G&&((this.F&0x1)===0x1))&&((Dl&0x80000)===0x80000
))&&!((JT&0x80000)===0x80000))this.G.Ax(this.GetClipping());},R:function(E){var A;
if(B.aaY(E,this.T))return;var GL=[(A=this.T)[2]-A[0],A[3]-A[1]];var LE=[E[2]-E[0
],E[3]-E[1]];var HU=!B.aaX(GL,LE);var DV=B.abe(E.slice(0,2),this.T.slice(0,2));if(
!B.aaX(DV,AT)&&!HU){var M=this.W;while(!!M&&!((M.F&0x200)===0x200)){if(((M.F&0x400
)===0x400)){var tmp=((M.F&0x100)===0x100);M.KA(DV,tmp);}M=M.W;}}if((HU&&(GL[0]>0
))&&(GL[1]>0)){var Ap=this.T;var M=this.W;while(!!M&&!((M.F&0x200)===0x200)){if(((
M.F&0x400)===0x400)){if(!!M.A8&&(M.A8.Hh!==this))M.A8=null;if(!M.A8&&(M.EB!==0x14
))M.IB(Ap,this);}M=M.W;}}C.BS.R.call(this,E);if(!!this.G&&HU){this.F=this.F|0x1000;
if(!((this.G.F&0x2000)===0x2000)){this.G.F=this.G.F|0x4000;B.pe([A=this.G,A.CF],
this);}}},_Init:function(aArg){C.BS._Init.call(this,aArg);this.__proto__=C.Ie;this.
F=0x203;},_className:"Core::Outline"};C.K3={KE:null,KC:null,G0:null,Ab:null,J2:0
,A3:0,Cl:0,Bl:0,Dj:0,Cr:0,FI:B.wf,E$:B.wf,DL:B.wf,Ih:8,EG:0,L3:1,Down:false,Gk:false
,Ez:false,Lr:false,MC:0,EO:function(Bm,aClip,aOffset,aOpacity,aBlend){},B1:function(
AP){var A;var AL=(C.Hu.isPrototypeOf(AP)?AP:null);var BQ=(C.I0.isPrototypeOf(AP)?
AP:null);var JP=this.Gk;var IQ;var HQ;var MP;var Fx;var Mw;if(!AL&&!BQ)return null;
IQ=(!!AL&&AL.Down)&&!AL.Cr;HQ=(!!AL&&AL.Down)&&(AL.Cr>0);MP=(!!AL&&AL.Down)&&(AL.
Cr>this.MC);Fx=!!AL&&!AL.Down;Mw=!!BQ;if(IQ)this.MC=((A=(AL.Ez?0:50))&0x80)?A|0xFFFFFF00:
A&0xFF;if((((this.EG&0x20)===0x20)&&(this.A3>0))&&(this.A3<33554432)){var JM=(C.
IZ.isPrototypeOf(AP)?AP:null);if(((!!JM&&JM.Down)&&(JM.Ju!==this))&&B.wa(this.GetExtent(
),this.G.Nr(JM.CL))){this.J2=0x20;this.A3=this.A3|67108864;return null;}}if(IQ){
var LG=0;var IA;this.A3=this.A3|(1<<AL.Cl);for(IA=this.A3&4095;IA>0;IA=IA>>1)if(
!!(IA&1))LG=LG+1;if(LG===1)this.A3=(this.A3|16777216)|(4096<<AL.Cl);}if(Fx&&(this.
A3<16777216)){var E2=this.DY();var CB=null;if(!!E2){var Q2=(!!this.Y?this.Y:this.
G);CB=E2.GT(B.abh(Lb,AL.CL),AL.Cl,AL.Dj,null,Q2,0x0);}if(!!CB){var L;for(L=0;L<10;
L++)if(!!(this.A3&(1<<L)))CB.Cu.B1(B._NewObject(C.Hu,0).InitializeDown(L,AL.DL,AL.
Dj,AT,true,AL.CL));for(L=0;L<10;L++)if(!!(this.A3&(1<<L)))CB.Cu.B1(B._NewObject(
C.Hu,0).InitializeUp(L,AL.DL,AL.DL,0,AL.Dj,AT,false,AL.CL,AL.CL));}}if(Fx)this.A3=(
this.A3&~(1<<AL.Cl))|33554432;if(MP&&(this.A3<16777216))this.A3=this.A3|67108864;
if(Fx&&AL.Ez)this.A3=this.A3|67108864;if(Fx&&!(this.A3&4095))this.J2=0x0;if(Fx&&
!(this.A3&16777215))this.A3=0;if(HQ&&(this.A3>=67108864)){var E2=this.DY();if(!!
E2)E2.Mi(null,null,this,this.J2);}if((HQ&&!!(this.A3&16777216))&&!!(this.A3&33554432
)){HQ=false;Fx=true;}if(!!AL&&!(this.A3&(4096<<AL.Cl)))return this;if(!!BQ&&!(this.
A3&(4096<<BQ.Cl)))return this;if(Fx&&!(this.A3&16777216))return this;if(((IQ||Mw
)||HQ)&&((this.A3<16777216)||(this.A3>=33554432)))return this;if(Fx)this.A3=this.
A3&3758100479;if(Fx&&!(this.A3&16777215))this.A3=0;if(!!AL){this.Down=IQ||HQ;this.
Gk=this.Kt(AL.DL);this.E$=AL.E$;this.DL=AL.DL;this.FI=AT;this.Cr=AL.Cr;this.Dj=AL.
Dj;this.Ez=AL.Ez;this.Cl=AL.Cl;this.Bl=AL.Bl;if(AL.Down&&!AL.Cr)JP=false;}if(!!BQ
){this.Down=true;this.Gk=this.Kt(BQ.DL);this.E$=BQ.E$;this.DL=BQ.DL;this.FI=BQ.FI;
this.Cr=BQ.Cr;this.Dj=BQ.Dj;this.Cl=BQ.Cl;this.Ez=false;this.Bl=BQ.Bl;}var Lq=this.
Down;if((!!AL&&this.Down)&&!this.Cr)(A=this.Ab)?A[1].call(A[0],this):null;if((this.
Down&&this.Gk)&&!JP){this.Lr=true;(A=this.KC)?A[1].call(A[0],this):null;}if(this.
Lr&&(((Lq&&!this.Gk)&&JP)||((!Lq&&this.Gk)&&JP))){this.Lr=false;(A=this.KE)?A[1].
call(A[0],this):null;}if(!!AL&&!Lq)(A=this.G0)?A[1].call(A[0],this):null;if(!!this.
EG){var GN=0x0;if(((((this.EG&0x10)===0x10)&&!!AL)&&AL.Down)&&(AL.Cr>=1000))GN=0x10;
if((((this.EG&0x1)===0x1)&&!!BQ)&&((BQ.CL[1]-BQ.FE[1])<=-this.Ih))GN=0x1;if((((this.
EG&0x2)===0x2)&&!!BQ)&&((BQ.CL[1]-BQ.FE[1])>=this.Ih))GN=0x2;if((((this.EG&0x4)===
0x4)&&!!BQ)&&((BQ.CL[0]-BQ.FE[0])<=-this.Ih))GN=0x4;if((((this.EG&0x8)===0x8)&&!
!BQ)&&((BQ.CL[0]-BQ.FE[0])>=this.Ih))GN=0x8;if(!!GN){var E2=this.DY();if(!!E2){this.
J2=GN;E2.Mi(null,this,this,GN);}}}return this;},GT:function(Ay,X,Dm,G7,FW,Ha){var
A;if(!!G7&&(G7!==this))return null;if((Dm<1)||(Dm>this.L3))return null;if(this.A3>=
33554432)return null;if((this.A3>=16777216)&&!(this.A3&(4096<<X)))return null;if(
!!(Ha&this.EG))return null;if(this.No()){var Ac=B.lb(Ay,this.GetExtent());if(!((
Ac[0]>=Ac[2])||(Ac[1]>=Ac[3]))){var GG=B.aaI(Ay);var DV=AT;if(GG[0]<Ac[0])DV=[Ac[
0]-GG[0],DV[1]];if(GG[0]>=Ac[2])DV=[(Ac[2]-GG[0])-1,DV[1]];if(GG[1]<Ac[1])DV=[DV[
0],Ac[1]-GG[1]];if(GG[1]>=Ac[3])DV=[DV[0],(Ac[3]-GG[1])-1];return B._NewObject(C.
Ka,0).Initialize(this,DV);}}else{var Bb=B.abi(9,B.wf,null);var L;Bb.Set(0,B.aaI(
Ay));Bb.Set(1,Bb.Get(0));Bb.Set(2,Bb.Get(0));Bb.Set(3,Bb.Get(0));Bb.Set(4,Bb.Get(
0));Bb.Set(1,[Ay[0],Bb.Get(1)[1]]);Bb.Set(2,[Bb.Get(2)[0],Ay[1]]);Bb.Set(3,[Ay[2
],Bb.Get(3)[1]]);Bb.Set(4,[Bb.Get(4)[0],Ay[3]]);Bb.Set(5,Ay.slice(0,2));Bb.Set(6
,[Ay[2],Ay[1]]);Bb.Set(7,[Ay[0],Ay[3]]);Bb.Set(8,Ay.slice(2,4));for(L=0;L<9;L=L+
1)if(this.Kt(Bb.Get(L)))return B._NewObject(C.Ka,0).Initialize(this,B.abe(Bb.Get(
L),Bb.Get(0)));}return null;},Ny:function(E){if(E<1)E=1;this.Ih=E;},Nw:function(
E){if(E<1)E=1;this.L3=E;},Q:function(E){if(E)this.AC(0x100000,0x0);else this.AC(
0x0,0x100000);},_Init:function(aArg){C.If._Init.call(this,aArg);this.__proto__=C.
K3;this.F=0x10011B;},_Mark:function(D){var A;C.If._Mark.call(this,D);if((A=this.
KE)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.KC)&&((A=A[0])._cycle!=
D))A._Mark(A._cycle=D);if((A=this.G0)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);
if((A=this.Ab)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);},_className:"Core::SimpleTouchHandler"
};C.FG={W:null,G0:null,Ab:null,Hk:0,Bl:0,Mg:0,E9:148,Bz:0,AM:0,A1:true,Down:false
,KZ:false,BL:function(aArg){var A;var AD=(C.I.isPrototypeOf(A=this.J)?A:null);if(
!AD)throw new Error(Lc);this.W=AD.JS;AD.JS=this;},B1:function(AP){var A;if(!!AP&&
AP.Nq(this.E9)){this.Down=AP.Down;this.Bz=AP.Bz;this.AM=AP.AM;this.Bl=AP.Bl;if(AP.
Down){this.Mg=this.Hk;this.KZ=this.Hk>0;if(!this.KZ)(A=this.Ab)?A[1].call(A[0],this
):null;this.Hk=this.Hk+1;return true;}if(!AP.Down){this.KZ=this.Hk>1;this.Mg=this.
Hk-1;this.Hk=0;(A=this.G0)?A[1].call(A[0],this):null;return true;}}return false;
},_Init:function(aArg){this.__proto__=C.FG;this.BL(aArg);B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.G0)&&((A=A[0])._cycle!=D
))A._Mark(A._cycle=D);if((A=this.Ab)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((
A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::KeyPressHandler"};C.Ka={Cu:null,HX:0,FI:B.wf,Initialize:function(P,aOffset
){this.Cu=P;this.FI=aOffset;this.HX=(aOffset[0]*aOffset[0])+(aOffset[1]*aOffset[
1]);return this;},_Init:function(aArg){this.__proto__=C.Ka;B.h7++;},_Done:function(
){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.Cu)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(
A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::CursorHit"};C.I_={
Hh:null,CZ:B.wg,Ap:B.wg,isEmpty:false,_Init:function(aArg){this.__proto__=C.I_;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.Hh)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J
)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::LayoutContext"};C.I$={IP:B.wf,IO:B.wf,IN:B.wf,IM:B.wf,_Init:function(aArg
){C.I_._Init.call(this,aArg);this.__proto__=C.I$;},_className:"Core::LayoutQuadContext"
};C.Kd={AD:null,W:null,Dt:null,DF:null,Ca:null,Hi:null,_Init:function(aArg){this.
__proto__=C.Kd;B.h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(
){},_Mark:function(D){var A;if((A=this.AD)&&(A._cycle!=D))A._Mark(A._cycle=D);if((
A=this.W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Dt)&&(A._cycle!=D))A._Mark(
A._cycle=D);if((A=this.DF)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Ca)&&(A.
_cycle!=D))A._Mark(A._cycle=D);if((A=this.Hi)&&(A._cycle!=D))A._Mark(A._cycle=D);
if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null
,_className:"Core::DialogContext"};C.Mj={Dp:null,AS:null,AN:null,MA:false,Qy:function(
){if(!this.Dp)return;var D$=this.Dp;this.Dp.D_=null;this.Dp=null;B.pe([this,this.
LJ],this);D$.L7(this);},QK:function(S){if(!!this.Dp)return;if(!this.AN)return;this.
Dp=this.AN;this.AN=this.AN.W;if(!!this.AN)this.AN.Y=null;else this.AS=null;this.
Dp.W=null;this.MA=true;this.Dp.G2(this);this.MA=false;},QQ:function(S){B.pe([this
,this.QK],this);},QP:function(S){B.pe([this,this.QQ],this);},LJ:function(S){B.pe([
this,this.QP],this);},M3:function(Br){if(!Br||!Br.D_)return;if(Br.D_!==this)throw new
Error(Ld);var MT=false;if(this.Dp===Br){this.Dp=null;MT=true;B.pe([this,this.LJ]
,this);}else{if(!!Br.W)Br.W.Y=Br.Y;else this.AS=Br.Y;if(!!Br.Y)Br.Y.W=Br.W;else this.
AN=Br.W;Br.Y=null;Br.W=null;}Br.D_=null;if(MT)Br.L6(this);},NK:function(Br,Qu){if(
!Br)return;if(!!Br.D_)throw new Error(Le);Br.D_=this;if(Qu){Br.W=this.AN;if(!!this.
AN)this.AN.Y=Br;else this.AS=Br;this.AN=Br;}else{Br.Y=this.AS;if(!!this.AS)this.
AS.W=Br;else this.AN=Br;this.AS=Br;}if(!this.Dp)B.pe([this,this.LJ],this);},_Init:
function(aArg){this.__proto__=C.Mj;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.Dp)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.AS)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
AN)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::TaskQueue"};C.Ij={D_:null
,Y:null,W:null,L7:function(Is){},L6:function(Is){},G2:function(Is){this.LV();},DK:
function(){if(!!this.D_&&(this.D_.Dp===this))this.D_.Qy();},LV:function(){if(!!this.
D_)this.D_.M3(this);},Ks:function(){return!!this.D_&&(this.D_.Dp===this);},_Init:
function(aArg){this.__proto__=C.Ij;B.h7++;},_Done:function(){this.__proto__=null;
B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=this.D_)&&(A._cycle!=
D))A._Mark(A._cycle=D);if((A=this.Y)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
W)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=
D);},J:null,_cycle:0,_observers:null,_className:"Core::Task"};C.FK={resource:null
,EN:function(){this.resource=null;},BL:function(aArg){this.resource=aArg;},_Init:
function(aArg){this.__proto__=C.FK;this.BL(aArg);B.h7++;},_Done:function(){this.
EN();this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((
A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:
"Core::Resource"};C.Timer={Bt:null,timer:null,Bl:0,Period:1000,IY:0,A1:false,EN:
function(){var tmp=this.timer;if(!!tmp)tmp.DestroyTimer();this.timer=null;},JX:function(
aBegin,aPeriod){if(aBegin<0)aBegin=0;if(aPeriod<0)aPeriod=0;var tmp=this.timer;if(
!tmp&&((aBegin>0)||(aPeriod>0)))tmp=B.z8(this,this.Trigger);if(!!tmp){tmp.ResetTimer(
);tmp.StartTimer(aBegin,aPeriod);}this.timer=tmp;},B3:function(E){if(E<0)E=0;if(
E===this.Period)return;this.Period=E;if(this.A1)this.JX(this.IY,E);},BB:function(
E){if(E<0)E=0;if(E===this.IY)return;this.IY=E;if(this.A1)this.JX(E,this.Period);
},Q:function(E){if(E===this.A1)return;this.A1=E;if(E)this.JX(this.IY,this.Period
);else this.JX(0,0);this.Bl=this.H1();},H1:function(){var ticksCount=0;ticksCount=((
new Date).getTime()-B.v$)|0;return ticksCount;},Trigger:function(){var A;this.Bl=
this.H1();if(!this.Period)this.Q(false);(A=this.Bt)?A[1].call(A[0],this):null;},
_Init:function(aArg){this.__proto__=C.Timer;B.h7++;},_Done:function(){this.EN();
this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:function(D){var A;if((A=
this.Bt)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.J)&&(A._cycle!=D))
A._Mark(A._cycle=D);},J:null,_cycle:0,_observers:null,_className:"Core::Timer"};
C.St={AV:0x1,Ra:0x2,RG:0x4,Sr:0x8,A1:0x10,Sd:0x20,RH:0x40,RS:0x80,RF:0x100,RM:0x200
,Rz:0x400,R2:0x800,Mk:0x1000,Ss:0x2000,RW:0x4000,RX:0x8000,Rs:0x10000,RV:0x20000
,Sa:0x40000,Rt:0x80000,R1:0x100000,Rr:0x200000};C.EB={R3:0x1,R4:0x2,Q8:0x4,Q9:0x8
,Q_:0x10,Q7:0x20};C.RJ={L5:0,So:1,Rh:2,RN:3,R6:4,Sp:5,Sq:6,Ri:7,Rj:8,RP:9,RO:10,
R8:11,R7:12};C.HY={L5:0,Sm:1,Left:2,Rf:3,Sl:4,Re:5,Sn:6,Right:7,Rg:8};C.KeyCode={
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
343,ShiftHome:344,ShiftEnd:345,ShiftTab:346};C.R5={Sx:0x1,Su:0x2,Sv:0x4,Sw:0x8,RR:
0x10,RI:0x20};
C._Init=function(){C.If.__proto__=C.Cu;C.BS.__proto__=C.Cu;C.I.__proto__=C.BS;C.Root.
__proto__=C.I;C.KeyEvent.__proto__=C.Event;C.IZ.__proto__=C.Event;C.Hu.__proto__=
C.Event;C.I0.__proto__=C.Event;C.Ie.__proto__=C.BS;C.K3.__proto__=C.If;C.I$.__proto__=
C.I_;};C._ReInit=function(){};C.DO=function(D){};return C;})();

/* Embedded Wizard */