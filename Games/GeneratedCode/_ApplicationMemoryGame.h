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

#ifndef _ApplicationMemoryGame_H
#define _ApplicationMemoryGame_H

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
#include "_ViewsFilterImage.h"
#include "_ViewsText.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"

/* Forward declaration of the class Application::MemoryGame */
#ifndef _ApplicationMemoryGame_
  EW_DECLARE_CLASS( ApplicationMemoryGame )
#define _ApplicationMemoryGame_
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


/* Deklaration of class : 'Application::MemoryGame' */
EW_DEFINE_FIELDS( ApplicationMemoryGame, CoreGroup )
  EW_OBJECT  ( PushButtonConfig, WidgetSetPushButtonConfig )
  EW_OBJECT  ( FirstLabyrinth,  WidgetSetPushButton )
  EW_OBJECT  ( FirstBlackLeaves, WidgetSetPushButton )
  EW_OBJECT  ( FirstPendant,    WidgetSetPushButton )
  EW_OBJECT  ( FirstCoins,      WidgetSetPushButton )
  EW_OBJECT  ( SecondCoins,     WidgetSetPushButton )
  EW_OBJECT  ( FirstCup,        WidgetSetPushButton )
  EW_OBJECT  ( FirstGoldLeaves, WidgetSetPushButton )
  EW_OBJECT  ( SecondCup,       WidgetSetPushButton )
  EW_OBJECT  ( SecondGoldLeaves, WidgetSetPushButton )
  EW_OBJECT  ( SecondPendant,   WidgetSetPushButton )
  EW_OBJECT  ( SecondLabyrinth, WidgetSetPushButton )
  EW_OBJECT  ( SecondBlackLeaves, WidgetSetPushButton )
  EW_OBJECT  ( OpeningGameTimer, CoreTimer )
  EW_OBJECT  ( RevealCardTimer, CoreTimer )
  EW_OBJECT  ( GuessedText,     ViewsText )
  EW_OBJECT  ( FilterKeyboard,  ViewsFilterImage )
  EW_OBJECT  ( MenuButtonConfig, WidgetSetPushButtonConfig )
  EW_OBJECT  ( MenuButton,      WidgetSetPushButton )
  EW_VARIABLE( NumberDifferentPictures, XInt32 )
EW_END_OF_FIELDS( ApplicationMemoryGame )

/* Virtual Method Table (VMT) for the class : 'Application::MemoryGame' */
EW_DEFINE_METHODS( ApplicationMemoryGame, CoreGroup )
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
EW_END_OF_METHODS( ApplicationMemoryGame )

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationMemoryGame_Init( ApplicationMemoryGame _this, XHandle aArg );

/* 'C' function for method : 'Application::MemoryGame.OpeningGame()' */
void ApplicationMemoryGame_OpeningGame( ApplicationMemoryGame _this, XObject sender );

/* 'C' function for method : 'Application::MemoryGame.CountActiveCards()' */
void ApplicationMemoryGame_CountActiveCards( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.FirstLabyrinthPressed()' */
void ApplicationMemoryGame_FirstLabyrinthPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.SecondLabyrinthPressed()' */
void ApplicationMemoryGame_SecondLabyrinthPressed( ApplicationMemoryGame _this, 
  XObject sender );

/* 'C' function for method : 'Application::MemoryGame.FirstBlackLeavesPressed()' */
void ApplicationMemoryGame_FirstBlackLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender );

/* 'C' function for method : 'Application::MemoryGame.SecondBlackLeavesPressed()' */
void ApplicationMemoryGame_SecondBlackLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender );

/* 'C' function for method : 'Application::MemoryGame.FirstCupPressed()' */
void ApplicationMemoryGame_FirstCupPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.SecondCupPressed()' */
void ApplicationMemoryGame_SecondCupPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.FirstPendantPressed()' */
void ApplicationMemoryGame_FirstPendantPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.SecondPendantPressed()' */
void ApplicationMemoryGame_SecondPendantPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.FirstCoinsPressed()' */
void ApplicationMemoryGame_FirstCoinsPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.SecondCoinsPressed()' */
void ApplicationMemoryGame_SecondCoinsPressed( ApplicationMemoryGame _this, XObject 
  sender );

/* 'C' function for method : 'Application::MemoryGame.FirstGoldLeavesPressed()' */
void ApplicationMemoryGame_FirstGoldLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender );

/* 'C' function for method : 'Application::MemoryGame.SecondGoldLeavesPressed()' */
void ApplicationMemoryGame_SecondGoldLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender );

/* 'C' function for method : 'Application::MemoryGame.VerifyCards()' */
void ApplicationMemoryGame_VerifyCards( ApplicationMemoryGame _this, XObject sender );

/* 'C' function for method : 'Application::MemoryGame.WinMessage()' */
void ApplicationMemoryGame_WinMessage( ApplicationMemoryGame _this, XObject sender );

/* 'C' function for method : 'Application::MemoryGame.Schaffle()' */
void ApplicationMemoryGame_Schaffle( ApplicationMemoryGame _this, XObject sender );

/* 'C' function for method : 'Application::MemoryGame.OpenMenu()' */
void ApplicationMemoryGame_OpenMenu( ApplicationMemoryGame _this, XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationMemoryGame_H */

/* Embedded Wizard */
