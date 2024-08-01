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
);if(EmWiApp.acf)throw new Error("The unit file 'Resources.js' included twice!");
EmWiApp.acf=(function(){var B=EmWiApp;var C={};
var AR=[0,0];var Bz="The property \'FrameSize\' is READ ONLY.";
C.V={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.wf,H_:false,F_:false,Fa:function(
){if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=AR;this.FrameDelay=0;this.NoOfFrames=1;this.F_=false;},AY:function(
aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=AR;var frameDelay=
0;{var bmp=B.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.H_=true;this.F_=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},Nd:function(E){throw new Error(
Bz);},Update:function(){},_Init:function(aArg){B.Core.Gi._Init.call(this,aArg);this.
__proto__=C.V;this.AY(aArg);},_Done:function(){this.Fa();this.__proto__=B.Core.Gi;
B.Core.Gi._Done.call(this);},_className:"Resources::Bitmap"};C.KS={_class:function(
){return C.Co;},0:{Data:function(){return B.acn;},Cache:[],_this:null}};C.Co={font:
null,Leading:0,Descent:0,Ascent:0,Fa:function(){this.SB();},AY:function(aArg){this.
SD(aArg);},SB:function(){if(!this.font)return;var handle=this.font;B.aal(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},SD:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aa5(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},M2:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.aav(handle,aFlowString);return advance;
},OM:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;
if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jV;var handle=this.
font;var result=B.jV;result=B.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},IB:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.m9(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.Gi._Init.call(this,aArg);this.__proto__=C.Co;this.AY(aArg);
},_Done:function(){this.Fa();this.__proto__=B.Core.Gi;B.Core.Gi._Done.call(this);
},_className:"Resources::Font"};C.Iz={_class:function(){return C.Co;},0:{Data:function(
){return B.aco;},Cache:[],_this:null}};
C._Init=function(){C.V.__proto__=B.Core.Gi;C.Co.__proto__=B.Core.Gi;};C._ReInit=function(
){};C.D$=function(D){var A;if((A=C.KS[0]._this)&&(A._cycle!=D))A._Done(C.KS[0]._this=
null);if((A=C.Iz[0]._this)&&(A._cycle!=D))A._Done(C.Iz[0]._this=null);};return C;
})();

/* Embedded Wizard */