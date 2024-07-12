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
* Profile  : Profile
* Platform : Windows.Software.RGBA8888
*
*******************************************************************************/

#include "ewlocale.h"
#include "_ApplicationApplication.h"
#include "_CoreView.h"
#include "_EffectsInt32Effect.h"
#include "_ResourcesFont.h"
#include "_ViewsRectangle.h"
#include "_ViewsText.h"
#include "Application.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x00000040, /* ratio 100.00 % */
  0xB8003D00, 0x800AE452, 0x00D80032, 0x0DE00318, 0x01073680, 0xA7400080, 0x00050021,
  0x20043C8A, 0x00192226, 0x9C7E111F, 0x000D3068, 0x00C2003D, 0x40120390, 0x63300008,
  0x00080802, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 800, 480 }};
static const XRect _Const0001 = {{ 165, 186 }, { 636, 294 }};
static const XStringRes _Const0002 = { _StringsDefault0, 0x0002 };
static const XColor _Const0003 = { 0x00, 0x00, 0x00, 0xFF };

/* Initializer for the class 'Application::Application' */
void ApplicationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreRoot__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationApplication );

  /* ... then construct all embedded objects */
  ViewsRectangle__Init( &_this->Rectangle, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->Text, &_this->_.XObject, 0 );
  EffectsInt32Effect__Init( &_this->Int32Effect, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Rectangle, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Text, _Const0001 );
  ViewsText_OnSetWrapText( &_this->Text, 1 );
  ViewsText_OnSetString( &_this->Text, EwLoadString( &_Const0002 ));
  ViewsText_OnSetColor( &_this->Text, _Const0003 );
  _this->Int32Effect.Super1.Symmetric = 1;
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->Int32Effect, 1 );
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_this->Int32Effect, 2000 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->Int32Effect, 1 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Rectangle ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Text ), 0 );
  ViewsText_OnSetFont( &_this->Text, EwLoadResource( &ApplicationFont, ResourcesFont ));
  _this->Int32Effect.Super1.OnFinished = EwNewSlot( _this, ApplicationApplication_ConfigureText );
  _this->Int32Effect.Outlet = EwNewRef( &_this->Text, ViewsText_OnGetOpacity, ViewsText_OnSetOpacity );
}

/* Re-Initializer for the class 'Application::Application' */
void ApplicationApplication__ReInit( ApplicationApplication _this )
{
  /* At first re-initialize the super class ... */
  CoreRoot__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsRectangle__ReInit( &_this->Rectangle );
  ViewsText__ReInit( &_this->Text );
  EffectsInt32Effect__ReInit( &_this->Int32Effect );
}

/* Finalizer method for the class 'Application::Application' */
void ApplicationApplication__Done( ApplicationApplication _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreRoot );

  /* Finalize all embedded objects */
  ViewsRectangle__Done( &_this->Rectangle );
  ViewsText__Done( &_this->Text );
  EffectsInt32Effect__Done( &_this->Int32Effect );

  /* Don't forget to deinitialize the super class ... */
  CoreRoot__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::Application.ConfigureText()' */
void ApplicationApplication_ConfigureText( ApplicationApplication _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreRectView__OnSetBounds( &_this->Text, EwSetRectOrigin( _this->Text.Super1.Bounds, 
  EwNewPoint( EwMathRandInt32( 0, EwGetRectW( _this->Super3.Bounds ) - EwGetRectW( 
  _this->Text.Super1.Bounds )), EwMathRandInt32( 0, EwGetRectH( _this->Super3.Bounds ) 
  - EwGetRectH( _this->Text.Super1.Bounds )))));
  ViewsText_OnSetColor( &_this->Text, EwNewColor((XUInt8)EwMathRandInt32( 0, 255 ), 
  (XUInt8)EwMathRandInt32( 0, 255 ), (XUInt8)EwMathRandInt32( 0, 255 ), 255 ));
  EwPostSignal( EwNewSlot( &_this->Int32Effect, EffectsEffect_StartEffect ), ((XObject)_this ));
}

/* Variants derived from the class : 'Application::Application' */
EW_DEFINE_CLASS_VARIANTS( ApplicationApplication )
EW_END_OF_CLASS_VARIANTS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_CLASS( ApplicationApplication, CoreRoot, Rectangle, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Application::Application" )
  CoreRoot_Draw,
  CoreGroup_GetClipping,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreRoot_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreRoot_OnSetFocus,
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreRoot_InvalidateArea,
EW_END_OF_CLASS( ApplicationApplication )

/* Include a file containing the font resource : 'Application::Font' */
#include "_ApplicationFont.h"

/* Table with links to derived variants of the font resource : 'Application::Font' */
EW_RES_WITHOUT_VARIANTS( ApplicationFont )

/* Embedded Wizard */
