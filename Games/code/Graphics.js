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
var AT=[0,0];var Bh="Can not resize explicitly attached graphics engine bitmaps";
var D4=[0,0,0,0];var FT="No graphics engine bitmap attached to this canvas";var Fh=
"The canvas is already initialized with a graphics engine bitmap";var FU="ScaleBitmap() operation has been omitted due to the resulting area "+
"being wider or higher than 4069 pixel.";
C.Canvas={AD:null,H4:B.wg,E7:0,It:false,EN:function(){if(this.It)this.DetachBitmap(
);},BL:function(aArg){this.Hy=true;},Mc:function(E){if((E[0]<=0)||(E[1]<=0))E=AT;
if(B.aaX(E,this.FrameSize))return;if(this.It)throw new Error(Bh);this.FrameSize=
E;this.FA=(((this.FrameSize[0]>0)&&(this.FrameSize[1]>0))&&(this.FrameDelay>0))&&(
this.NoOfFrames>1);if(!this.bitmap)return;var handle=this.bitmap;B._FreeBitmap(handle
);this.bitmap=null;},Update:function(){var A;if((!this.bitmap&&(this.FrameSize[0
]>0))&&(this.FrameSize[1]>0)){var frameSize=this.FrameSize;var noOfFrames=this.NoOfFrames;
var frameDelay=this.FrameDelay;var handle=null;{handle=B._CreateBitmap(B._PIXEL_FORMAT_NATIVE
,frameSize,frameDelay,noOfFrames);}this.bitmap=handle;if(!this.bitmap){this.FrameSize=
AT;this.FrameDelay=0;this.NoOfFrames=1;}this.H4=[].concat(AT,this.FrameSize);if(
!!this.bitmap){var dstFrameNr=this.E7;for(this.E7=this.NoOfFrames-1;this.E7>=0;this.
E7--)this.LZ(this.H4,this.H4,0x00000000,0x00000000,0x00000000,0x00000000,false);
this.E7=dstFrameNr;}}if(!(((A=this.H4)[0]>=A[2])||(A[1]>=A[3])))this.H4=D4;},DetachBitmap:
function(){if(!this.It)throw new Error(FT);this.bitmap=null;this.It=false;this.FrameSize=
AT;this.FrameDelay=0;this.NoOfFrames=1;this.FA=false;return this;},AttachBitmap:
function(aBitmap){if(!!this.bitmap)throw new Error(Fh);if(!aBitmap)return this;this.
bitmap=aBitmap;this.It=true;var noOfFrames=1;var frameSize=AT;var frameDelay=0;{
noOfFrames=aBitmap.NoOfFrames;frameSize=aBitmap.FrameSize;frameDelay=aBitmap.FrameDelay;
}this.NoOfFrames=noOfFrames;this.FrameSize=frameSize;this.FrameDelay=frameDelay;
this.FA=(this.FrameDelay>0)&&(this.NoOfFrames>1);return this;},LY:function(aClip
,Li,aString,aOffset,aCount,aDstRect,aSrcPos,aMinWidth,Lk,aColorTL,aColorTR,aColorBR
,aColorBL,aBlend){if(!this.bitmap)this.Update();if(!this.bitmap)return;if(aOffset<
0)aOffset=0;if((!Li||!Li.font)||((aOffset>0)&&(aOffset>=aString.length)))return;
var orient=0;if(Lk===1)orient=90;else if(Lk===2)orient=180;else if(Lk===3)orient=
270;var dstFrameNo=this.E7;var dstBitmap=this.bitmap;var srcFont=Li.font;{B.rz(dstBitmap
,srcFont,aString,aOffset,aCount,dstFrameNo,aClip,aDstRect,aSrcPos,aMinWidth,orient
,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},Nc:function(aClip,aBitmap,Mo,aDstRect
,aSrcPos,aMaskPos,aMaskInverted,aMaskBeforeBlur,aBlurRadius,aBlurClampToEdges,Qr
,aIntensity,aColor,aOpacity,aBlend){var mode;if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(!aBitmap||!aBitmap.bitmap)return;switch(Qr){case 1:mode=1;break;
case 2:mode=2;break;case 3:mode=3;break;default:mode=0;}var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var mskBitmap=(!!Mo?Mo.bitmap:null);var dstFrameNr=
this.E7;{B.aag(dstBitmap,srcBitmap,mskBitmap,dstFrameNr,aClip,aDstRect,aSrcPos,aMaskPos
,aMaskInverted,aMaskBeforeBlur,aBlurRadius,aBlurClampToEdges,mode,aIntensity,aColor
,aOpacity,aBlend);}},NI:function(aClip,aBitmap,aFrameNr,aDstRect,aSrcRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aFilter){if(!this.bitmap)this.Update();if(!this.
bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(aFrameNr>=aBitmap.
NoOfFrames))return;var top=aDstRect[1];var left=aDstRect[0];var right=aDstRect[2
];var bottom=aDstRect[3];if(((((right-left)>4096)||((right-left)<-4096))||((bottom-
top)>4096))||((bottom-top)<-4096)){B.ab5("%s",FU);return;}var dstBitmap=this.bitmap;
var srcBitmap=aBitmap.bitmap;var dstFrameNo=this.E7;{B.ab6(dstBitmap,srcBitmap,dstFrameNo
,aFrameNr,aClip,left,top,1,right,top,1,right,bottom,1,left,bottom,1,aSrcRect,aColorTL
,aColorTR,aColorBR,aColorBL,aBlend,aFilter);}},M5:function(aClip,aBitmap,aFrameNr
,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.
Update();if(!this.bitmap)return;if(((!aBitmap||!aBitmap.bitmap)||(aFrameNr<0))||(
aFrameNr>=aBitmap.NoOfFrames))return;var dstBitmap=this.bitmap;var srcBitmap=aBitmap.
bitmap;var dstFrameNr=this.E7;{B.db(dstBitmap,srcBitmap,dstFrameNr,aFrameNr,aClip
,aDstRect,aSrcPos,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);}},LZ:function(aClip
,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend){if(!this.bitmap)this.Update(
);if(!this.bitmap)return;var dstBitmap=this.bitmap;var dstFrameNo=this.E7;{B.fR(
dstBitmap,dstFrameNo,aClip,aDstRect,aColorTL,aColorTR,aColorBR,aColorBL,aBlend);
}},_Init:function(aArg){B.acg.U._Init.call(this,aArg);this.__proto__=C.Canvas;this.
BL(aArg);},_Done:function(){this.EN();this.__proto__=B.acg.U;B.acg.U._Done.call(
this);},_Mark:function(D){var A;B.acg.U._Mark.call(this,D);if((A=this.AD)&&(A._cycle
!=D))A._Mark(A._cycle=D);},_className:"Graphics::Canvas"};C.Ff={L5:0,RK:1,Sk:2,Sj:
3};
C._Init=function(){C.Canvas.__proto__=B.acg.U;};C._ReInit=function(){};C.DO=function(
D){};return C;})();

/* Embedded Wizard */