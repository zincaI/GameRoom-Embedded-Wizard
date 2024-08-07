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
);if(EmWiApp.Graphics)throw new Error("The unit file 'Graphics.js' included twice!"
);EmWiApp.Graphics=(function(){var B=EmWiApp;var C={};
var Bg=[0,0];var AW="Can not resize explicitly attached graphics engine bitmaps";
var D_=[0,0,0,0];var En="No graphics engine bitmap attached to this canvas";var FL=
"The canvas is already initialized with a graphics engine bitmap";var IV="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={AE:null,Iz:B.wg,FA:0,I4:false,Fc:function(){if(this.I4)this.DetachBitmap(
);},AZ:function(aArg){this.H8=true;},M$:function(E){if((E[0]<=0)||(E[1]<=0))E=Bg;
if(B.aaX(E,this.FrameSize))return;if(this.I4)throw new Error(AW);this.FrameSize=
E;this.Gb=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
Bg;this.FrameDelay=0;this.NoOfFrames=1;}this.Iz=[].concat(Bg,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.FA;for(this.FA=this.NoOfFrames-1;this.FA>=0;this.
FA--)this.MW(this.Iz,this.Iz,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.FA=dstFrameNr;}}if(!(((A=this.Iz)[0]>=A[2])||(A[1]>=A[3])))this.Iz=D_;},DetachBitmap:
function(){if(!this.I4)throw new Error(En);this.bitmap=null;this.I4=false;this.FrameSize=
Bg;this.FrameDelay=0;this.NoOfFrames=1;this.Gb=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(FL);if(!aBitmap)return this;this.
bitmap=aBitmap;this.I4=true;var noOfFrames=1;var frameSize=Bg;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.Gb=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},MV:function(aClip
,Mg,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Mi,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Mg||!Mg.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(Mi===1)orient=90;else if(Mi===2)orient=180;else if(Mi===3)orient=
270;var dstFrameNo=this.FA;var dstBitmap=this.bitmap;var srcFont=Mg.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},On:function(aClip,aBitmap,Ny,aDstRect
,aSrcPos,aMaskPos,aMaskInverted,aMaskBeforeBlur,aBlurRadius,aBlurClampToEdges,SG
,aIntensity,aColor,aOpacity,aBlend){var mode;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(!aBitmap||!aBitmap.bitmap)return;switch(SG){case 1:mode=1;break;
case 2:mode=2;break;case 3:mode=3;break;default:mode=0;}var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var mskBitmap=(!!Ny?Ny.bitmap:null);var dstFrameNr=
this.FA;{B.aag(dstBitmap,srcBitmap,mskBitmap,dstFrameNr,aClip,aDstRect,aSrcPos,aMaskPos
,aMaskInverted,aMaskBeforeBlur,aBlurRadius,aBlurClampToEdges,mode,aIntensity,aColor
,aOpacity,aBlend);}},O1:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2
];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-
top)>4096))||((bottom-top)<-4096)){B.ab5("%s",IV);return;}var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.FA;{B.ab6(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},Ob:function(aClip,aBitmap,aFrameNr
,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.FA;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},MW:function(aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.FA;{B.fR(
dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);
}},_Init:function(aArg){B.acf.V._Init.call(this,aArg);this.__proto__=C.Canvas;this.
AZ(aArg);},_Done:function(){this.Fc();this.__proto__=B.acf.V;B.acf.V._Done.call(
this);},_Mark:function(D){var A;B.acf.V._Mark.call(this,D);if((A=this.AE)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};C.FJ={M2:0,TY:1,Uy:2,Ux:
3};
C._Init=function(){C.Canvas.__proto__=B.acf.V;};C._ReInit=function(){};C.D$=function(
D){};return C;})();

/* Embedded Wizard */