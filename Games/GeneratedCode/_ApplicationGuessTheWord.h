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

#ifndef _ApplicationGuessTheWord_H
#define _ApplicationGuessTheWord_H

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

/* Forward declaration of the class Application::GuessTheWord */
#ifndef _ApplicationGuessTheWord_
  EW_DECLARE_CLASS( ApplicationGuessTheWord )
#define _ApplicationGuessTheWord_
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


/* Deklaration of class : 'Application::GuessTheWord' */
EW_DEFINE_FIELDS( ApplicationGuessTheWord, CoreGroup )
  EW_OBJECT  ( Image,           ViewsImage )
  EW_OBJECT  ( Image1,          ViewsImage )
  EW_OBJECT  ( Image2,          ViewsImage )
  EW_OBJECT  ( Image3,          ViewsImage )
  EW_OBJECT  ( FirstLetter,     ViewsText )
  EW_OBJECT  ( SecondLetter,    ViewsText )
  EW_OBJECT  ( ThirdLetter,     ViewsText )
  EW_OBJECT  ( ForthLetter,     ViewsText )
  EW_OBJECT  ( q,               WidgetSetPushButton )
  EW_OBJECT  ( TransparentButton, WidgetSetPushButtonConfig )
  EW_OBJECT  ( m,               WidgetSetPushButton )
  EW_OBJECT  ( w,               WidgetSetPushButton )
  EW_OBJECT  ( e,               WidgetSetPushButton )
  EW_OBJECT  ( r,               WidgetSetPushButton )
  EW_OBJECT  ( t,               WidgetSetPushButton )
  EW_OBJECT  ( y,               WidgetSetPushButton )
  EW_OBJECT  ( u,               WidgetSetPushButton )
  EW_OBJECT  ( i,               WidgetSetPushButton )
  EW_OBJECT  ( o,               WidgetSetPushButton )
  EW_OBJECT  ( p,               WidgetSetPushButton )
  EW_OBJECT  ( A,               WidgetSetPushButton )
  EW_OBJECT  ( s,               WidgetSetPushButton )
  EW_OBJECT  ( d,               WidgetSetPushButton )
  EW_OBJECT  ( f,               WidgetSetPushButton )
  EW_OBJECT  ( g,               WidgetSetPushButton )
  EW_OBJECT  ( h,               WidgetSetPushButton )
  EW_OBJECT  ( j,               WidgetSetPushButton )
  EW_OBJECT  ( k,               WidgetSetPushButton )
  EW_OBJECT  ( LettersToUse,    ViewsText )
  EW_OBJECT  ( GuessedText,     ViewsText )
  EW_OBJECT  ( RandomChoice,    ViewsText )
  EW_OBJECT  ( GuessedLetters,  ViewsText )
  EW_OBJECT  ( delete_key,      WidgetSetPushButton )
  EW_OBJECT  ( enter,           WidgetSetPushButton )
  EW_OBJECT  ( l,               WidgetSetPushButton )
  EW_OBJECT  ( z,               WidgetSetPushButton )
  EW_OBJECT  ( x,               WidgetSetPushButton )
  EW_OBJECT  ( c,               WidgetSetPushButton )
  EW_OBJECT  ( v,               WidgetSetPushButton )
  EW_OBJECT  ( b,               WidgetSetPushButton )
  EW_OBJECT  ( n,               WidgetSetPushButton )
  EW_OBJECT  ( UnfilledSpaces,  ViewsText )
  EW_OBJECT  ( TimerUnfilledSpaces, CoreTimer )
  EW_OBJECT  ( UnfilledSpacesGradient, EffectsColorEffect )
  EW_OBJECT  ( ButtonPressed,   CoreTimer )
  EW_OBJECT  ( FilterKeyboard,  ViewsFilterImage )
  EW_OBJECT  ( MenuButtonConfig, WidgetSetPushButtonConfig )
  EW_OBJECT  ( MenuButton,      WidgetSetPushButton )
EW_END_OF_FIELDS( ApplicationGuessTheWord )

/* Virtual Method Table (VMT) for the class : 'Application::GuessTheWord' */
EW_DEFINE_METHODS( ApplicationGuessTheWord, CoreGroup )
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
EW_END_OF_METHODS( ApplicationGuessTheWord )

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationGuessTheWord_Init( ApplicationGuessTheWord _this, XHandle aArg );

/* 'C' function for method : 'Application::GuessTheWord.GuessWord()' */
void ApplicationGuessTheWord_GuessWord( ApplicationGuessTheWord _this, XObject sender );

/* 'C' function for method : 'Application::GuessTheWord.GuessWordGame()' */
void ApplicationGuessTheWord_GuessWordGame( ApplicationGuessTheWord _this, XObject 
  sender );

/* 'C' function for method : 'Application::GuessTheWord.UnfilledSpacesSlot()' */
void ApplicationGuessTheWord_UnfilledSpacesSlot( ApplicationGuessTheWord _this, 
  XObject sender );

/* 'C' function for method : 'Application::GuessTheWord.DismissUnfilledSpacesWarning()' */
void ApplicationGuessTheWord_DismissUnfilledSpacesWarning( ApplicationGuessTheWord _this, 
  XObject sender );

/* 'C' function for method : 'Application::GuessTheWord.PressDelete()' */
void ApplicationGuessTheWord_PressDelete( ApplicationGuessTheWord _this, XObject 
  sender );

/* 'C' function for method : 'Application::GuessTheWord.PressLetter()' */
void ApplicationGuessTheWord_PressLetter( ApplicationGuessTheWord _this, XObject 
  sender );

/* 'C' function for method : 'Application::GuessTheWord.PressButtonEffect()' */
void ApplicationGuessTheWord_PressButtonEffect( ApplicationGuessTheWord _this, XObject 
  sender );

/* 'C' function for method : 'Application::GuessTheWord.DisableKeyboard()' */
void ApplicationGuessTheWord_DisableKeyboard( ApplicationGuessTheWord _this, XObject 
  sender );

/* 'C' function for method : 'Application::GuessTheWord.EnableKeyboard()' */
void ApplicationGuessTheWord_EnableKeyboard( ApplicationGuessTheWord _this, XObject 
  sender );

/* 'C' function for method : 'Application::GuessTheWord.OpenMenu()' */
void ApplicationGuessTheWord_OpenMenu( ApplicationGuessTheWord _this, XObject sender );

#ifdef __cplusplus
  }
#endif

#endif /* _ApplicationGuessTheWord_H */

/* Embedded Wizard */
