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
var Bg=[0,0];var AW="The property \'FrameSize\' is READ ONLY.";
C.V={bitmap:null,FrameDelay:0,NoOfFrames:1,FrameSize:B.wf,H8:false,Gb:false,Fc:function(
){if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle);this.bitmap=
null;this.FrameSize=Bg;this.FrameDelay=0;this.NoOfFrames=1;this.Gb=false;},AZ:function(
aArg){if(!aArg)return;var handle=null;var noOfFrames=1;var frameSize=Bg;var frameDelay=
0;{var bmp=B.aa3(aArg,this);if(bmp){noOfFrames=bmp.NoOfFrames;frameSize=bmp.FrameSize;
frameDelay=bmp.FrameDelay;}handle=bmp;}this.bitmap=handle;this.NoOfFrames=noOfFrames;
this.FrameSize=frameSize;this.FrameDelay=frameDelay;this.H8=true;this.Gb=(!!this.
bitmap&&(this.FrameDelay>0))&&(this.NoOfFrames>1);},M$:function(E){throw new Error(
AW);},Update:function(){},_Init:function(aArg){B.Core.Gm._Init.call(this,aArg);this.
__proto__=C.V;this.AZ(aArg);},_Done:function(){this.Fc();this.__proto__=B.Core.Gm;
B.Core.Gm._Done.call(this);},_className:"Resources::Bitmap"};C.KJ={_class:function(
){return C.Cl;},0:{Data:function(){return B.acn;},Cache:[],_this:null}};C.Cl={font:
null,Leading:0,Descent:0,Ascent:0,Fc:function(){this.SR();},AZ:function(aArg){this.
ST(aArg);},SR:function(){if(!this.font)return;var handle=this.font;B.aal(handle);
this.font=null;this.Ascent=0;this.Descent=0;this.Leading=0;},ST:function(aFontResource
){if(!aFontResource)return;var handle=null;var ascent=0;var descent=0;var leading=
0;{var font=B.aa5(aFontResource);if(font){ascent=font.Ascent;descent=font.Descent;
leading=font.Leading;}handle=font;}this.font=handle;this.Ascent=ascent;this.Descent=
descent;this.Leading=leading;},MY:function(aFlowString){if(!this.font)return 0;var
handle=this.font;var advance=0;advance=B.aav(handle,aFlowString);return advance;
},OU:function(aString,aOffset,aWidth,aMaxNoOfRows,aBidi){if(aOffset<0)aOffset=0;
if(!this.font||((aOffset>0)&&(aOffset>=aString.length)))return B.jV;var handle=this.
font;var result=B.jV;result=B.abv(handle,aString,aOffset,aWidth,aMaxNoOfRows,aBidi
);return result;},Ix:function(aString,aOffset,aCount){if(aOffset<0)aOffset=0;if(
!this.font||((aOffset>0)&&(aOffset>=aString.length)))return 0;var handle=this.font;
var advance=0;advance=B.m9(handle,aString,aOffset,aCount);return advance;},_Init:
function(aArg){B.Core.Gm._Init.call(this,aArg);this.__proto__=C.Cl;this.AZ(aArg);
},_Done:function(){this.Fc();this.__proto__=B.Core.Gm;B.Core.Gm._Done.call(this);
},_className:"Resources::Font"};C.Iv={_class:function(){return C.Cl;},0:{Data:function(
){return B.aco;},Cache:[],_this:null}};
C._Init=function(){C.V.__proto__=B.Core.Gm;C.Cl.__proto__=B.Core.Gm;};C._ReInit=function(
){};C.D$=function(D){var A;if((A=C.KJ[0]._this)&&(A._cycle!=D))A._Done(C.KJ[0]._this=
null);if((A=C.Iv[0]._this)&&(A._cycle!=D))A._Done(C.Iv[0]._this=null);};return C;
})();

/* Embedded Wizard */