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

#ifndef Application_H
#define Application_H

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

#include "_ApplicationApplication.h"
#include "_ApplicationDeviceClass.h"
#include "_ApplicationGuessTheWord.h"
#include "_ApplicationGuessTheWordMenu.h"
#include "_ApplicationMemoryGame.h"
#include "_ApplicationMenu.h"
#include "_ApplicationTilesPuzzle.h"

/* Bitmap resource : 'Application::BackgroudGamingRoom' */
EW_DECLARE_BITMAP_RES( ApplicationBackgroudGamingRoom )

/* Bitmap resource : 'Application::WordGuessingLogo' */
EW_DECLARE_BITMAP_RES( ApplicationWordGuessingLogo )

/* Bitmap resource : 'Application::PlaceholderGuessingGame' */
EW_DECLARE_BITMAP_RES( ApplicationPlaceholderGuessingGame )

/* Bitmap resource : 'Application::q' */
EW_DECLARE_BITMAP_RES( Applicationq )

/* Bitmap resource : 'Application::m' */
EW_DECLARE_BITMAP_RES( Applicationm )

/* Bitmap resource : 'Application::w' */
EW_DECLARE_BITMAP_RES( Applicationw )

/* Bitmap resource : 'Application::e' */
EW_DECLARE_BITMAP_RES( Applicatione )

/* Bitmap resource : 'Application::r' */
EW_DECLARE_BITMAP_RES( Applicationr )

/* Bitmap resource : 'Application::t' */
EW_DECLARE_BITMAP_RES( Applicationt )

/* Bitmap resource : 'Application::y' */
EW_DECLARE_BITMAP_RES( Applicationy )

/* Bitmap resource : 'Application::u' */
EW_DECLARE_BITMAP_RES( Applicationu )

/* Bitmap resource : 'Application::i' */
EW_DECLARE_BITMAP_RES( Applicationi )

/* Bitmap resource : 'Application::o' */
EW_DECLARE_BITMAP_RES( Applicationo )

/* Bitmap resource : 'Application::p' */
EW_DECLARE_BITMAP_RES( Applicationp )

/* Bitmap resource : 'Application::a' */
EW_DECLARE_BITMAP_RES( Applicationa )

/* Bitmap resource : 'Application::s' */
EW_DECLARE_BITMAP_RES( Applications )

/* Bitmap resource : 'Application::d' */
EW_DECLARE_BITMAP_RES( Applicationd )

/* Bitmap resource : 'Application::f' */
EW_DECLARE_BITMAP_RES( Applicationf )

/* Bitmap resource : 'Application::g' */
EW_DECLARE_BITMAP_RES( Applicationg )

/* Bitmap resource : 'Application::h' */
EW_DECLARE_BITMAP_RES( Applicationh )

/* Bitmap resource : 'Application::j' */
EW_DECLARE_BITMAP_RES( Applicationj )

/* Bitmap resource : 'Application::k' */
EW_DECLARE_BITMAP_RES( Applicationk )

/* Bitmap resource : 'Application::l' */
EW_DECLARE_BITMAP_RES( Applicationl )

/* Bitmap resource : 'Application::z' */
EW_DECLARE_BITMAP_RES( Applicationz )

/* Bitmap resource : 'Application::x' */
EW_DECLARE_BITMAP_RES( Applicationx )

/* Bitmap resource : 'Application::c' */
EW_DECLARE_BITMAP_RES( Applicationc )

/* Bitmap resource : 'Application::v' */
EW_DECLARE_BITMAP_RES( Applicationv )

/* Bitmap resource : 'Application::b' */
EW_DECLARE_BITMAP_RES( Applicationb )

/* Bitmap resource : 'Application::n' */
EW_DECLARE_BITMAP_RES( Applicationn )

/* Bitmap resource : 'Application::delete_key' */
EW_DECLARE_BITMAP_RES( Applicationdelete_key )

/* Bitmap resource : 'Application::enter' */
EW_DECLARE_BITMAP_RES( Applicationenter )

/* Font resource : 'Application::WordGuessingGameFont' */
EW_DECLARE_FONT_RES( ApplicationWordGuessingGameFont )

/* Bitmap resource : 'Application::OnPressWordGuessingLogo' */
EW_DECLARE_BITMAP_RES( ApplicationOnPressWordGuessingLogo )

/* Font resource : 'Application::WordGuessingGameFontWin' */
EW_DECLARE_FONT_RES( ApplicationWordGuessingGameFontWin )

/* Bitmap resource : 'Application::MemoryGameLogo' */
EW_DECLARE_BITMAP_RES( ApplicationMemoryGameLogo )

/* Bitmap resource : 'Application::OnPressMemoryGameLogo' */
EW_DECLARE_BITMAP_RES( ApplicationOnPressMemoryGameLogo )

/* Bitmap resource : 'Application::cup' */
EW_DECLARE_BITMAP_RES( Applicationcup )

/* Bitmap resource : 'Application::WhiteCoins' */
EW_DECLARE_BITMAP_RES( ApplicationWhiteCoins )

/* Bitmap resource : 'Application::BlackLeaves' */
EW_DECLARE_BITMAP_RES( ApplicationBlackLeaves )

/* Bitmap resource : 'Application::GoldLeaves' */
EW_DECLARE_BITMAP_RES( ApplicationGoldLeaves )

/* Bitmap resource : 'Application::Pandant' */
EW_DECLARE_BITMAP_RES( ApplicationPandant )

/* Bitmap resource : 'Application::Labyrinth' */
EW_DECLARE_BITMAP_RES( ApplicationLabyrinth )

/* Bitmap resource : 'Application::GoldPicture' */
EW_DECLARE_BITMAP_RES( ApplicationGoldPicture )

/* Bitmap resource : 'Application::TilesPuzzleLogo' */
EW_DECLARE_BITMAP_RES( ApplicationTilesPuzzleLogo )

/* Bitmap resource : 'Application::OnPressTilesPuzzleLogo' */
EW_DECLARE_BITMAP_RES( ApplicationOnPressTilesPuzzleLogo )

/* Bitmap resource : 'Application::Frame' */
EW_DECLARE_BITMAP_RES( ApplicationFrame )

/* Bitmap resource : 'Application::FirstTile' */
EW_DECLARE_BITMAP_RES( ApplicationFirstTile )

/* Bitmap resource : 'Application::SecondTile' */
EW_DECLARE_BITMAP_RES( ApplicationSecondTile )

/* Bitmap resource : 'Application::ThirthTile' */
EW_DECLARE_BITMAP_RES( ApplicationThirthTile )

/* Bitmap resource : 'Application::ForthTile' */
EW_DECLARE_BITMAP_RES( ApplicationForthTile )

/* Bitmap resource : 'Application::FifthTile' */
EW_DECLARE_BITMAP_RES( ApplicationFifthTile )

/* Bitmap resource : 'Application::TwelfthTile' */
EW_DECLARE_BITMAP_RES( ApplicationTwelfthTile )

/* Bitmap resource : 'Application::SixthTile' */
EW_DECLARE_BITMAP_RES( ApplicationSixthTile )

/* Bitmap resource : 'Application::SeventhTile' */
EW_DECLARE_BITMAP_RES( ApplicationSeventhTile )

/* Bitmap resource : 'Application::EighthTile' */
EW_DECLARE_BITMAP_RES( ApplicationEighthTile )

/* Bitmap resource : 'Application::NinthTile' */
EW_DECLARE_BITMAP_RES( ApplicationNinthTile )

/* Bitmap resource : 'Application::TenthTile' */
EW_DECLARE_BITMAP_RES( ApplicationTenthTile )

/* Bitmap resource : 'Application::EleventhTile' */
EW_DECLARE_BITMAP_RES( ApplicationEleventhTile )

/* Bitmap resource : 'Application::ThirteenTile' */
EW_DECLARE_BITMAP_RES( ApplicationThirteenTile )

/* Bitmap resource : 'Application::ForteenthTile' */
EW_DECLARE_BITMAP_RES( ApplicationForteenthTile )

/* Bitmap resource : 'Application::FifteenthTile' */
EW_DECLARE_BITMAP_RES( ApplicationFifteenthTile )

/* Bitmap resource : 'Application::SixteenthTile' */
EW_DECLARE_BITMAP_RES( ApplicationSixteenthTile )

/* Bitmap resource : 'Application::Arrow' */
EW_DECLARE_BITMAP_RES( ApplicationArrow )

/* Bitmap resource : 'Application::Medusa' */
EW_DECLARE_BITMAP_RES( ApplicationMedusa )

/* Bitmap resource : 'Application::MenuFrame' */
EW_DECLARE_BITMAP_RES( ApplicationMenuFrame )

/* Bitmap resource : 'Application::open_menu' */
EW_DECLARE_BITMAP_RES( Applicationopen_menu )

/* Font resource : 'Application::WordGuessingGameSmallFont' */
EW_DECLARE_FONT_RES( ApplicationWordGuessingGameSmallFont )

/* User defined constant: 'Application::DarkOrange' */
extern const XColor ApplicationDarkOrange;

/* User defined constant: 'Application::VibrantOrange' */
extern const XColor ApplicationVibrantOrange;

/* User defined constant: 'Application::LightOrange' */
extern const XColor ApplicationLightOrange;

/* User defined constant: 'Application::Black' */
extern const XColor ApplicationBlack;

/* User defined auto object: 'Application::Device' */
EW_DECLARE_AUTOOBJECT( ApplicationDevice, ApplicationDeviceClass )

#ifdef __cplusplus
  }
#endif

#endif /* Application_H */

/* Embedded Wizard */
