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
);if(EmWiApp.acf)throw new Error("The unit file 'WidgetSet.js' included twice!");
EmWiApp.acf=(function(){var B=EmWiApp;var C={};
var AT=[0,0,150,50];var Bh=[0,50];var D4=[150,50];var FT=[150,0];var Fh=[0,0];
C.Bp={H7:null,Ku:0xFF000000,Kx:0xFF000000,Kw:0xFF000000,Kv:0xFF000000,Kn:0xFFFFFFFF
,Kq:0xFFFFFFFF,Kp:0xFFFFFFFF,Ko:0xFFFFFFFF,HL:B.wf,Jm:function(E){if(this.Ku===E
)return;this.Ku=E;B.pe([this,this.Fw],this);},Jp:function(E){if(this.Kx===E)return;
this.Kx=E;B.pe([this,this.Fw],this);},Jo:function(E){if(this.Kw===E)return;this.
Kw=E;B.pe([this,this.Fw],this);},Jn:function(E){if(this.Kv===E)return;this.Kv=E;
B.pe([this,this.Fw],this);},Ji:function(E){if(this.Kn===E)return;this.Kn=E;B.pe([
this,this.Fw],this);},Jl:function(E){if(this.Kq===E)return;this.Kq=E;B.pe([this,
this.Fw],this);},Jk:function(E){if(this.Kp===E)return;this.Kp=E;B.pe([this,this.
Fw],this);},Jj:function(E){if(this.Ko===E)return;this.Ko=E;B.pe([this,this.Fw],this
);},Jq:function(E){if(this.H7===E)return;this.H7=E;B.pe([this,this.Fw],this);},KS:
function(E){if(E[0]<0)E=[0,E[1]];if(E[1]<0)E=[E[0],0];if(B.aaX(this.HL,E))return;
this.HL=E;B.pe([this,this.Fw],this);},_Init:function(aArg){C.Jz._Init.call(this,
aArg);this.__proto__=C.Bp;},_Mark:function(D){var A;C.Jz._Mark.call(this,D);if((
A=this.H7)&&(A._cycle!=D))A._Mark(A._cycle=D);},_className:"WidgetSet::PushButtonConfig"
};C.Jz={Fw:function(S){B.we(this,0);},_Init:function(aArg){this.__proto__=C.Jz;B.
h7++;},_Done:function(){this.__proto__=null;B.h7--;},_ReInit:function(){},_Mark:
function(D){var A;if((A=this.J)&&(A._cycle!=D))A._Mark(A._cycle=D);},J:null,_cycle:
0,_observers:null,_className:"WidgetSet::WidgetConfig"};C.Ad={C2:null,B$:null,Z:
null,BK:null,Ab:null,C$:null,CN:null,Bq:null,H6:B.jV,LK:0,I4:-1,I7:-1,I6:-1,I5:-
1,QV:0,Mh:false,R:function(E){var A;if(!!this.BK){var Mu=[E[2]-E[0],E[3]-E[1]];var
Ga=Mu;if(Ga[0]<this.BK.HL[0])Ga=[this.BK.HL[0],Ga[1]];if(Ga[1]<this.BK.HL[1])Ga=[
Ga[0],this.BK.HL[1]];var CW=B.abe(Ga,Mu);if(!!CW[0]){var Cw=((this.EB&0x4)===0x4
);var Cx=((this.EB&0x8)===0x8);if(Cw&&!Cx)E=B.abN(E,E[2]+CW[0]);else if(!Cw&&Cx)
E=[].concat(E[0]-CW[0],E.slice(1,4));else{E=[].concat(E[0]-((CW[0]/2)|0),E.slice(
1,4));E=B.abN(E,E[0]+Ga[0]);}}if(!!CW[1]){var Cy=((this.EB&0x10)===0x10);var Cv=((
this.EB&0x20)===0x20);if(Cy&&!Cv)E=[].concat(E.slice(0,3),E[3]+CW[1]);else if(!Cy&&
Cv)E=B.abP(E,E[1]-CW[1]);else{E=B.abP(E,E[1]-((CW[1]/2)|0));E=[].concat(E.slice(
0,3),E[1]+Ga[1]);}}}B.Core.I.R.call(this,E);},K8:function(JG){var A;B.Core.I.K8.
call(this,JG);var MD=!!this.Z;var ME=(!!this.BK&&!!this.H6)&&!!this.BK.H7;var Ar=[
0,0,(A=this.T)[2]-A[0],A[3]-A[1]];var F$;if(MD&&!!!this.B$){this.B$=B._NewObject(
B.aci.AO,0);this.V(this.B$,0);}else if(!MD&&!!this.B$){this.Ig(this.B$);this.B$=
null;}if(ME&&!!!this.C2){this.C2=B._NewObject(B.aci.Text,0);this.V(this.C2,0);this.
C2.Nu(true);}else if(!ME&&!!this.C2){this.Ig(this.C2);this.C2=null;}if(!((JG&0x10
)===0x10))F$=0x44;else if(((this.Bq.Down&&this.Bq.Gk)||this.CN.Down)||this.C$.A1
)F$=0x41;else if(((JG&0x40)===0x40))F$=0x46;else F$=0x45;this.QV=F$;if(!!this.B$&&
!!this.BK){var D9;var ET;switch(F$){case 0x44:D9=this.I6;break;case 0x41:D9=this.
I4;break;case 0x46:D9=this.I7;break;default:D9=this.I5;}switch(F$){case 0x44:ET=
this.BK.Kp;break;case 0x41:ET=this.BK.Kn;break;case 0x46:ET=this.BK.Kq;break;default:
ET=this.BK.Ko;}this.B$.KI(D9<0);if(D9<0)D9=0;this.B$.R([Ar[0],Ar[1],Ar[2],Ar[3]]
);this.B$.Jh(0x12);this.B$.CO(this.Z);this.B$.Mb(D9);this.B$.D1(ET);this.B$.DN(59
);}else if(!!this.B$){var D9;switch(F$){case 0x44:D9=this.I6;break;case 0x41:D9=
this.I4;break;case 0x46:D9=this.I7;break;default:D9=this.I5;}this.B$.R(Ar);this.
B$.Jh(0x12);this.B$.CO(this.Z);this.B$.Mb(D9);this.B$.D1(0xFFFFFFFF);this.B$.DN(
59);}if(!!this.C2){var ET;switch(F$){case 0x44:ET=this.BK.Kw;break;case 0x41:ET=
this.BK.Ku;break;case 0x46:ET=this.BK.Kx;break;default:ET=this.BK.Kv;}this.C2.R([
Ar[0],Ar[1],Ar[2],Ar[3]]);this.C2.Jh(0x12);this.C2.Nz(true);this.C2.Nt(true);this.
C2.EF(this.BK.H7);this.C2.A_(this.H6);this.C2.D1(ET);this.C2.DN(76);}this.ExtendClipping(
0,0,0,0);},LI:function(S){var MG=this.CN.E9;this.CN.E9=149;if(!MG&&!!this.CN.E9)
this.AC(0x4,0x0);if(!!MG&&!this.CN.E9)this.AC(0x0,0x4);if(!!this.BK)this.R(this.
T);this.Eg();},QM:function(S){this.Eg();},QT:function(S){var Hl=0;if(!!this.BK)Hl=
50;this.Bq.Q(true);this.Eg();if(!(((this.CN.Bl-this.LK)|0)>=Hl)){this.C$.BB(Hl-((
this.CN.Bl-this.LK)|0));this.C$.Q(true);}},QR:function(S){this.Bq.Q(false);this.
Eg();if(this.C$.A1)this.C$.Q(false);this.LK=this.CN.Bl;B.pe(this.Ab,this);},QO:function(
S){this.Eg();},QL:function(S){this.Eg();},QU:function(S){var Hl=0;if(!!this.BK)Hl=
50;this.CN.A1=true;if(!this.Bq.Gk)return;if(this.Bq.Ez)return;if(!(this.Bq.Cr>=Hl
)){this.C$.BB(Hl-this.Bq.Cr);this.C$.Q(true);}},QS:function(S){this.CN.A1=false;
if(this.C$.A1)this.C$.Q(false);B.pe(this.Ab,this);},Nx:function(E){if(this.Mh===
E)return;this.Mh=E;if(E)this.Bq.EG=this.Bq.EG|0xC;else this.Bq.EG=this.Bq.EG&~0xC;
},HB:function(E){if(this.I4===E)return;this.I4=E;this.Eg();},HE:function(E){if(this.
I7===E)return;this.I7=E;this.Eg();},HD:function(E){if(this.I6===E)return;this.I6=
E;this.Eg();},HC:function(E){if(this.I5===E)return;this.I5=E;this.Eg();},H:function(
E){if(this.Z===E)return;this.Z=E;this.Eg();},Ak:function(E){if(this.H6===E)return;
this.H6=E;this.Eg();},Aj:function(E){if(this.BK===E)return;if(!!this.BK)B.z9([this
,this.LI],this.BK,0);this.BK=E;if(!!E)B.zV([this,this.LI],E,0);B.pe([this,this.LI
],this);},_Init:function(aArg){B.Core.I._Init.call(this,aArg);B.Core.Timer._Init.
call(this.C$={J:this},0);B.Core.FG._Init.call(this.CN={J:this},0);B.Core.K3._Init.
call(this.Bq={J:this},0);this.__proto__=C.Ad;this.R(AT);this.C$.B3(0);this.C$.BB(
50);this.CN.E9=149;this.Bq.Nv(0x3F);this.Bq.KO(Bh);this.Bq.KN(D4);this.Bq.KM(FT);
this.Bq.KL(Fh);this.Bq.Ny(16);this.Bq.Nw(100);this.V(this.Bq,0);this.C$.Bt=[this
,this.QM];this.CN.G0=[this,this.QT];this.CN.Ab=[this,this.QR];this.Bq.KE=[this,this.
QO];this.Bq.KC=[this,this.QL];this.Bq.G0=[this,this.QU];this.Bq.Ab=[this,this.QS
];},_Done:function(){this.__proto__=B.Core.I;this.C$._Done();this.CN._Done();this.
Bq._Done();B.Core.I._Done.call(this);},_ReInit:function(){B.Core.I._ReInit.call(
this);this.C$._ReInit();this.CN._ReInit();this.Bq._ReInit();},_Mark:function(D){
var A;B.Core.I._Mark.call(this,D);if((A=this.C2)&&(A._cycle!=D))A._Mark(A._cycle=
D);if((A=this.B$)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.Z)&&(A._cycle!=D
))A._Mark(A._cycle=D);if((A=this.BK)&&(A._cycle!=D))A._Mark(A._cycle=D);if((A=this.
Ab)&&((A=A[0])._cycle!=D))A._Mark(A._cycle=D);if((A=this.C$)._cycle!=D)A._Mark(A.
_cycle=D);if((A=this.CN)._cycle!=D)A._Mark(A._cycle=D);if((A=this.Bq)._cycle!=D)
A._Mark(A._cycle=D);},_className:"WidgetSet::PushButton"};
C._Init=function(){C.Bp.__proto__=C.Jz;C.Ad.__proto__=B.Core.I;};C._ReInit=function(
){};C.DO=function(D){};return C;})();

/* Embedded Wizard */