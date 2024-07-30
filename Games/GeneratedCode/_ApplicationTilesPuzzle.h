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

#ifndef _ApplicationTilesPuzzle_H
#define _ApplicationTilesPuzzle_H

#ifdef __cplusplus
  extern "C"
  {
#endif

#include "ewrte.h"
#if ( EW_RTE_VERSION >> 16 ) != 13
  #error Wrong version of Embedded Wizard Runtime Environment.
#endif

#include "ewgfx.h"
#if ( EW_GFX_VERSION >> 16 ) != 13
  #error Wrong version of Embedded Wizard Graphics Engine.
#endif

#include "_CoreGroup.h"
#include "_CoreTimer.h"
#include "_EffectsColorEffect.h"
#include "_ViewsFilterImage.h"
#include "_ViewsImage.h"
#include "_ViewsText.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"

/* Forward declaration of the class Application::TilesPuzzle */
#ifndef _ApplicationTilesPuzzle_
  EW_DECLARE_CLASS( ApplicationTilesPuzzle )
#define _ApplicationTilesPuzzle_
#endif

/* Forward declaration of the class Core::DialogContext */
#ifndef _CoreDialogContext_
  EW_DECLARE_CLASS( CoreDialogContext )
#define _CoreDialogContext_
#endif

/* Forward declaration of the class Core::KeyPressHandler */
#ifndef _CoreKeyPressHandler_
  EW_DECLARE_CLASS( CoreKeyPressHandler )
#define _CoreKeyPressHandler_
#endif

/* Forward declaration of the class Core::LayoutContext */
#ifndef _CoreLayoutContext_
  EW_DECLARE_CLASS( CoreLayoutContext )
#define _CoreLayoutContext_
#endif

/* Forward declaration of the class Core::TaskQueue */
#ifndef _CoreTaskQueue_
  EW_DECLARE_CLASS( CoreTaskQueue )
#define _CoreTaskQueue_
#endif

/* Forward declaration of the class Core::View */
#ifndef _CoreView_
  EW_DECLARE_CLASS( CoreView )
#define _CoreView_
#endif

/* Forward declaration of the class Effects::Fader */
#ifndef _EffectsFader_
  EW_DECLARE_CLASS( EffectsFader )
#define _EffectsFader_
#endif


/* Deklaration of class : 'Application::TilesPuzzle' */
EW_DEFINE_FIELDS( ApplicationTilesPuzzle, CoreGroup )
  EW_OBJECT  ( Image,           ViewsImage )
  EW_OBJECT  ( FirstTile,       WidgetSetPushButton )
  EW_OBJECT  ( TransparentButton, WidgetSetPushButtonConfig )
  EW_OBJECT  ( FourthTile,      WidgetSetPushButton )
  EW_OBJECT  ( ThirdTile,       WidgetSetPushButton )
  EW_OBJECT  ( SecondTile,      WidgetSetPushButton )
  EW_OBJECT  ( FifthTile,       WidgetSetPushButton )
  EW_OBJECT  ( NinthTile,       WidgetSetPushButton )
  EW_OBJECT  ( ThirteenthTile,  WidgetSetPushButton )
  EW_OBJECT  ( SixthTile,       WidgetSetPushButton )
  EW_OBJECT  ( SeventhTile,     WidgetSetPushButton )
  EW_OBJECT  ( EighthTile,      WidgetSetPushButton )
  EW_OBJECT  ( TenthTile,       WidgetSetPushButton )
  EW_OBJECT  ( EleventhTile,    WidgetSetPushButton )
  EW_OBJECT  ( TwelfthTile,     WidgetSetPushButton )
  EW_OBJECT  ( FourteenthTile,  WidgetSetPushButton )
  EW_OBJECT  ( FifteenthTile,   WidgetSetPushButton )
  EW_OBJECT  ( SixteenthTile,   WidgetSetPushButton )
  EW_OBJECT  ( GuessedText,     ViewsText )
  EW_OBJECT  ( RevealTilesTimer, CoreTimer )
  EW_OBJECT  ( RevealPictureTimer, CoreTimer )
  EW_OBJECT  ( Solution,        ViewsImage )
  EW_OBJECT  ( RevealGuessedTextTimer, CoreTimer )
  EW_OBJECT  ( FilterKeyboard,  ViewsFilterImage )
  EW_OBJECT  ( GuessedTextPulse, EffectsColorEffect )
  EW_OBJECT  ( RevealFilterTimer, CoreTimer )
  EW_OBJECT  ( FilterEffect,    EffectsColorEffect )
  EW_OBJECT  ( DisableEffectTimer, CoreTimer )
  EW_OBJECT  ( MenuButtonConfig, WidgetSetPushButtonConfig )
  EW_OBJECT  ( MenuButton,      WidgetSetPushButton )
  EW_VARIABLE( FirstPos,        XInt32 )
  EW_VARIABLE( SecondPos,       XInt32 )
  EW_VARIABLE( FourthPos,       XInt32 )
  EW_VARIABLE( FifthPos,        XInt32 )
  EW_VARIABLE( SixthPos,        XInt32 )
  EW_VARIABLE( SeventhPos,      XInt32 )
  EW_VARIABLE( EighthPos,       XInt32 )
  EW_VARIABLE( NinthPos,        XInt32 )
  EW_VARIABLE( TenthPos,        XInt32 )
  EW_VARIABLE( EleventhPos,     XInt32 )
  EW_VARIABLE( TwelfthPos,      XInt32 )
  EW_VARIABLE( ThirteenthPos,   XInt32 )
  EW_VARIABLE( FourteenthPos,   XInt32 )
  EW_VARIABLE( FifteenthPos,    XInt32 )
  EW_VARIABLE( ThirdPos,        XInt32 )
  EW_VARIABLE( SixteenthPos,    XInt32 )
EW_END_OF_FIELDS( ApplicationTilesPuzzle )

/* Virtual Method Table (VMT) for the class : 'Application::TilesPuzzle' */
EW_DEFINE_METHODS( ApplicationTilesPuzzle, CoreGroup )
  EW_METHOD( initLayoutContext, void )( CoreRectView _this, XRect aBounds, CoreOutline 
    aOutline )
  EW_METHOD( GetRoot,           CoreRoot )( CoreView _this )
  EW_METHOD( Draw,              void )( CoreGroup _this, GraphicsCanvas aCanvas, 
    XRect aClip, XPoint aOffset, XInt32 aOpacity, XBool aBlend )
  EW_METHOD( GetClipping,       XRect )( CoreGroup _this )
  EW_METHOD( HandleEvent,       XObject )( CoreView _this, CoreEvent aEvent )
  EW_METHOD( CursorHitTest,     CoreCursorHit )( CoreGroup _this, XRect aArea, XInt32 
    aFinger, XInt32 aStrikeCount, CoreView aDedicatedView, CoreView aStartView, 
    XSet aRetargetReason )
  EW_METHOD( AdjustDrawingArea, XRect )( CoreGroup _this, XRect aArea )
  EW_METHOD( ArrangeView,       XPoint )( CoreRectView _this, XRect aBounds, XEnum 
    aFormation )
  EW_METHOD( MoveView,          void )( CoreRectView _this, XPoint aOffset, XBool 
    aFastMove )
  EW_METHOD( GetExtent,         XRect )( CoreRectView _this )
  EW_METHOD( ChangeViewState,   void )( CoreGroup _this, XSet aSetState, XSet aClearState )
  EW_METHOD( OnSetBounds,       void )( CoreGroup _this, XRect value )
  EW_METHOD( OnSetFocus,        void )( CoreGroup _this, CoreView value )
  EW_METHOD( OnSetOpacity,      void )( CoreGroup _this, XInt32 value )
  EW_METHOD( IsActiveDialog,    XBool )( CoreGroup _this, XBool aRecursive )
  EW_METHOD( DispatchEvent,     XObject )( CoreGroup _this, CoreEvent aEvent )
  EW_METHOD( BroadcastEvent,    XObject )( CoreGroup _this, CoreEvent aEvent, XSet 
    aFilter )
  EW_METHOD( UpdateViewState,   void )( CoreGroup _this, XSet aState )
  EW_METHOD( InvalidateArea,    void )( CoreGroup _this, XRect aArea )
EW_END_OF_METHODS( ApplicationTilesPuzzle )

/* 'C' function for method : 'Application::TilesPuzzle.FirstTileMovement()' */
void ApplicationTilesPuzzle_FirstTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.SecondTileMovement()' */
void ApplicationTilesPuzzle_SecondTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.ThirdTileMovement()' */
void ApplicationTilesPuzzle_ThirdTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.FourthTileMovement()' */
void ApplicationTilesPuzzle_FourthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.FifthTileMovement()' */
void ApplicationTilesPuzzle_FifthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.SixthTileMovement()' */
void ApplicationTilesPuzzle_SixthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.SeventhTileMovement()' */
void ApplicationTilesPuzzle_SeventhTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.EighthTileMovement()' */
void ApplicationTilesPuzzle_EighthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.NinthTileMovement()' */
void ApplicationTilesPuzzle_NinthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.TenthTileMovement()' */
void ApplicationTilesPuzzle_TenthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.EleventhTileMovement()' */
void ApplicationTilesPuzzle_EleventhTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender );

/* 'C' function for method : 'Application::TilesPuzzle.TwelfthTileMovement()' */
void ApplicationTilesPuzzle_TwelfthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.ThirteenthTileMovement()' */
void ApplicationTilesPuzzle_ThirteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender );

/* 'C' function for method : 'Application::TilesPuzzle.FourteenthTileMovement()' */
void ApplicationTilesPuzzle_FourteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender );

/* 'C' function for method : 'Application::TilesPuzzle.FifteenthTileMovement()' */
void ApplicationTilesPuzzle_FifteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender );

/* 'C' function for method : 'Application::TilesPuzzle.SixteenthTileMovement()' */
void ApplicationTilesPuzzle_SixteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender );

/* 'C' function for method : 'Application::TilesPuzzle.FindSolution()' */
void ApplicationTilesPuzzle_FindSolution( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.RevealCompletedPicture()' */
void ApplicationTilesPuzzle_RevealCompletedPicture( ApplicationTilesPuzzle _this, 
  XObject sender );

/* 'C' function for method : 'Application::TilesPuzzle.RevealAllTiles()' */
void ApplicationTilesPuzzle_RevealAllTiles( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.RevealGuessedText()' */
void ApplicationTilesPuzzle_RevealGuessedText( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.RevealFilter()' */
void ApplicationTilesPuzzle_RevealFilter( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.DisableEffect()' */
void ApplicationTilesPuzzle_DisableEffect( ApplicationTilesPuzzle _this, XObject 
  sender );

/* 'C' function for method : 'Application::TilesPuzzle.OpenMenu()' */
void ApplicationTilesPuzzle_OpenMenu( ApplicationTilesPuzzle _this, XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationTilesPuzzle_H */

/* Embedded Wizard */
