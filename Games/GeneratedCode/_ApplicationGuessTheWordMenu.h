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

#ifndef _ApplicationGuessTheWordMenu_H
#define _ApplicationGuessTheWordMenu_H

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

#include "_ApplicationMenu.h"
#include "_CoreTimer.h"
#include "_EffectsColorEffect.h"
#include "_ViewsFilterImage.h"
#include "_ViewsImage.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"

/* Forward declaration of the class Application::GuessTheWordMenu */
#ifndef _ApplicationGuessTheWordMenu_
  EW_DECLARE_CLASS( ApplicationGuessTheWordMenu )
#define _ApplicationGuessTheWordMenu_
#endif

/* Forward declaration of the class Core::DialogContext */
#ifndef _CoreDialogContext_
  EW_DECLARE_CLASS( CoreDialogContext )
#define _CoreDialogContext_
#endif

/* Forward declaration of the class Core::Group */
#ifndef _CoreGroup_
  EW_DECLARE_CLASS( CoreGroup )
#define _CoreGroup_
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


/* Deklaration of class : 'Application::GuessTheWordMenu' */
EW_DEFINE_FIELDS( ApplicationGuessTheWordMenu, ApplicationMenu )
  EW_OBJECT  ( ButtonConfig,    WidgetSetPushButtonConfig )
  EW_OBJECT  ( Game,            WidgetSetPushButton )
  EW_OBJECT  ( GameRoom,        WidgetSetPushButton )
  EW_OBJECT  ( ButtonsTimer,    CoreTimer )
  EW_OBJECT  ( SecondPulseColorTimer, CoreTimer )
  EW_OBJECT  ( StopPulseColorTImer, CoreTimer )
  EW_OBJECT  ( FilterEffect,    EffectsColorEffect )
EW_END_OF_FIELDS( ApplicationGuessTheWordMenu )

/* Virtual Method Table (VMT) for the class : 'Application::GuessTheWordMenu' */
EW_DEFINE_METHODS( ApplicationGuessTheWordMenu, ApplicationMenu )
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
EW_END_OF_METHODS( ApplicationGuessTheWordMenu )

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationGuessTheWordMenu_Init( ApplicationGuessTheWordMenu _this, XHandle 
  aArg );

/* 'C' function for method : 'Application::GuessTheWordMenu.BackToGameSlot()' */
void ApplicationGuessTheWordMenu_BackToGameSlot( ApplicationGuessTheWordMenu _this, 
  XObject sender );

/* 'C' function for method : 'Application::GuessTheWordMenu.BackToGameRoom()' */
void ApplicationGuessTheWordMenu_BackToGameRoom( ApplicationGuessTheWordMenu _this, 
  XObject sender );

/* 'C' function for method : 'Application::GuessTheWordMenu.ShowButtons()' */
void ApplicationGuessTheWordMenu_ShowButtons( ApplicationGuessTheWordMenu _this, 
  XObject sender );

/* 'C' function for method : 'Application::GuessTheWordMenu.StopPulseColor()' */
void ApplicationGuessTheWordMenu_StopPulseColor( ApplicationGuessTheWordMenu _this, 
  XObject sender );

/* 'C' function for method : 'Application::GuessTheWordMenu.SecondPulseColor()' */
void ApplicationGuessTheWordMenu_SecondPulseColor( ApplicationGuessTheWordMenu _this, 
  XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationGuessTheWordMenu_H */

/* Embedded Wizard */
