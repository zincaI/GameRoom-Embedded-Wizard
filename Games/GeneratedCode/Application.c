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
#include "_ApplicationDeviceClass.h"
#include "_ApplicationGuessTheWord.h"
#include "_ApplicationGuessTheWordMenu.h"
#include "_ApplicationMemoryGame.h"
#include "_ApplicationMenu.h"
#include "_ApplicationTilesPuzzle.h"
#include "_CoreGroup.h"
#include "_CoreRoot.h"
#include "_CoreTimer.h"
#include "_CoreView.h"
#include "_EffectsColorEffect.h"
#include "_EffectsFadeInOutTransition.h"
#include "_EffectsSlideTransition.h"
#include "_EffectsTransition.h"
#include "_ResourcesBitmap.h"
#include "_ResourcesFont.h"
#include "_ViewsFilterImage.h"
#include "_ViewsImage.h"
#include "_ViewsText.h"
#include "_WidgetSetPushButton.h"
#include "_WidgetSetPushButtonConfig.h"
#include "Application.h"
#include "Effects.h"
#include "Graphics.h"
#include "Resources.h"

/* Compressed strings for the language 'Default'. */
EW_CONST_STRING_PRAGMA static const unsigned int _StringsDefault0[] =
{
  0x000003EA, /* ratio 48.30 % */
  0xB8001500, 0x80086452, 0x00E00030, 0x0D2003A0, 0xDC003780, 0x60489800, 0x13289160,
  0xD8245401, 0x22C6E324, 0x2C5A3C57, 0x94A09222, 0xA0A84592, 0x0AB282CC, 0x9F2824CA,
  0x328284A0, 0x2829CA08, 0x8234A089, 0x244A08F2, 0x5CA09528, 0x4584B192, 0x9E25109D,
  0x04000858, 0x010F3300, 0x067001C8, 0x4EA61940, 0x5A744219, 0xAB1CC007, 0x01A2994D,
  0x53AAF5FB, 0x32196036, 0xABF53ABC, 0x2C0B8C8E, 0xD5D884B2, 0x12A89DE9, 0x603C6443,
  0x3C55E551, 0x645A294C, 0x4A0B5282, 0x0A0D282C, 0xA5056826, 0x324E9410, 0xD3C8B05A,
  0x4EB45A21, 0xCB0E5E11, 0xAF59AC70, 0x18020F09, 0x8C251643, 0x3A2C058C, 0x353139F5,
  0x5B36A741, 0x51D006AB, 0x24006BF6, 0x88B03627, 0x0018A116, 0x8C36A479, 0x8C401628,
  0xFE2C0E8C, 0xC01A3DEE, 0xAF68001A, 0xF603B422, 0x04B8C4F8, 0x48942215, 0x8644B446,
  0x272401D6, 0xC3AC7778, 0x3A21CDB5, 0xFC35F894, 0x87E522F8, 0x9EAD27A3, 0x7B1957F8,
  0xAAEE922D, 0xAAC5BDD0, 0x5DD5A110, 0x7751A274, 0x11F97B55, 0xF8685FB4, 0x801EF44D,
  0x203001D0, 0xD695D358, 0x15D80020, 0xDD711DA1, 0x85D4C76D, 0xDCC411BB, 0xB54DC16F,
  0xBE17715E, 0xA4689CB7, 0x8560473D, 0x51F85D57, 0x80D11F78, 0xC9280CD2, 0x280D5168,
  0x459A80E5, 0x58B8E1C7, 0x74A03611, 0xFC384A03, 0xA771D048, 0x71C456D9, 0x24F6B9E1,
  0x794A1700, 0x1E4E8D9C, 0x009663C7, 0x02513914, 0x10E42116, 0x99950E69, 0x3D1604D1,
  0x9C8B5086, 0x00159545, 0x1555859E, 0x35806D42, 0xB2690611, 0x5B9B5CE8, 0x9CD9F715,
  0xD9F9D400, 0x54411054, 0x290244E7, 0x53574008, 0x77D5754D, 0x1A41164A, 0x14651975,
  0x00000010, 0x00000000
};

/* Constant values used in this 'C' module only. */
static const XRect _Const0000 = {{ 0, 0 }, { 800, 480 }};
static const XRect _Const0001 = {{ 114, 177 }, { 246, 310 }};
static const XRect _Const0002 = {{ 281, 174 }, { 413, 307 }};
static const XRect _Const0003 = {{ 443, 174 }, { 590, 307 }};
static const XRect _Const0004 = {{ 614, 215 }, { 708, 266 }};
static const XStringRes _Const0005 = { _StringsDefault0, 0x0002 };
static const XRect _Const0006 = {{ 0, 0 }, { 800, 496 }};
static const XRect _Const0007 = {{ 177, 42 }, { 263, 118 }};
static const XRect _Const0008 = {{ 293, 42 }, { 379, 118 }};
static const XRect _Const0009 = {{ 413, 42 }, { 499, 118 }};
static const XRect _Const000A = {{ 534, 42 }, { 620, 118 }};
static const XRect _Const000B = {{ 185, 49 }, { 257, 112 }};
static const XRect _Const000C = {{ 300, 49 }, { 372, 112 }};
static const XRect _Const000D = {{ 420, 49 }, { 492, 112 }};
static const XRect _Const000E = {{ 541, 49 }, { 613, 112 }};
static const XRect _Const000F = {{ 84, 189 }, { 131, 242 }};
static const XStringRes _Const0010 = { _StringsDefault0, 0x000C };
static const XRect _Const0011 = {{ 521, 327 }, { 569, 382 }};
static const XStringRes _Const0012 = { _StringsDefault0, 0x0010 };
static const XRect _Const0013 = {{ 147, 190 }, { 202, 245 }};
static const XStringRes _Const0014 = { _StringsDefault0, 0x0014 };
static const XRect _Const0015 = {{ 212, 190 }, { 265, 248 }};
static const XStringRes _Const0016 = { _StringsDefault0, 0x0018 };
static const XRect _Const0017 = {{ 280, 187 }, { 328, 242 }};
static const XStringRes _Const0018 = { _StringsDefault0, 0x001C };
static const XRect _Const0019 = {{ 341, 187 }, { 389, 242 }};
static const XStringRes _Const001A = { _StringsDefault0, 0x0020 };
static const XRect _Const001B = {{ 396, 187 }, { 444, 242 }};
static const XStringRes _Const001C = { _StringsDefault0, 0x0024 };
static const XRect _Const001D = {{ 461, 188 }, { 509, 243 }};
static const XStringRes _Const001E = { _StringsDefault0, 0x0028 };
static const XRect _Const001F = {{ 527, 187 }, { 575, 242 }};
static const XStringRes _Const0020 = { _StringsDefault0, 0x002C };
static const XRect _Const0021 = {{ 594, 187 }, { 642, 242 }};
static const XStringRes _Const0022 = { _StringsDefault0, 0x0030 };
static const XRect _Const0023 = {{ 660, 187 }, { 708, 242 }};
static const XStringRes _Const0024 = { _StringsDefault0, 0x0034 };
static const XRect _Const0025 = {{ 98, 243 }, { 146, 325 }};
static const XStringRes _Const0026 = { _StringsDefault0, 0x0038 };
static const XRect _Const0027 = {{ 146, 258 }, { 194, 319 }};
static const XStringRes _Const0028 = { _StringsDefault0, 0x003C };
static const XRect _Const0029 = {{ 212, 260 }, { 260, 315 }};
static const XStringRes _Const002A = { _StringsDefault0, 0x0040 };
static const XRect _Const002B = {{ 280, 257 }, { 328, 312 }};
static const XStringRes _Const002C = { _StringsDefault0, 0x0044 };
static const XRect _Const002D = {{ 341, 254 }, { 389, 312 }};
static const XStringRes _Const002E = { _StringsDefault0, 0x0048 };
static const XRect _Const002F = {{ 396, 256 }, { 444, 311 }};
static const XStringRes _Const0030 = { _StringsDefault0, 0x004C };
static const XRect _Const0031 = {{ 461, 261 }, { 509, 316 }};
static const XStringRes _Const0032 = { _StringsDefault0, 0x0050 };
static const XRect _Const0033 = {{ 523, 257 }, { 571, 312 }};
static const XStringRes _Const0034 = { _StringsDefault0, 0x0054 };
static const XRect _Const0035 = {{ -55, 399 }, { 670, 486 }};
static const XColor _Const0036 = { 0xFF, 0xCC, 0x2D, 0xFF };
static const XColor _Const0037 = { 0xFF, 0xDE, 0xB9, 0xFF };
static const XStringRes _Const0038 = { _StringsDefault0, 0x0058 };
static const XRect _Const0039 = {{ 217, 166 }, { 549, 343 }};
static const XColor _Const003A = { 0xD2, 0x71, 0x29, 0xFF };
static const XColor _Const003B = { 0x07, 0x07, 0x07, 0xFF };
static const XStringRes _Const003C = { _StringsDefault0, 0x007D };
static const XRect _Const003D = {{ -307, 80 }, { -207, 110 }};
static const XStringRes _Const003E = { _StringsDefault0, 0x0088 };
static const XRect _Const003F = {{ 535, 425 }, { 635, 455 }};
static const XRect _Const0040 = {{ 585, 257 }, { 735, 307 }};
static const XRect _Const0041 = {{ 585, 327 }, { 735, 377 }};
static const XRect _Const0042 = {{ 104, 322 }, { 153, 387 }};
static const XStringRes _Const0043 = { _StringsDefault0, 0x008F };
static const XRect _Const0044 = {{ 153, 329 }, { 201, 379 }};
static const XStringRes _Const0045 = { _StringsDefault0, 0x0093 };
static const XRect _Const0046 = {{ 217, 327 }, { 265, 377 }};
static const XStringRes _Const0047 = { _StringsDefault0, 0x0097 };
static const XRect _Const0048 = {{ 283, 325 }, { 325, 375 }};
static const XStringRes _Const0049 = { _StringsDefault0, 0x009B };
static const XRect _Const004A = {{ 341, 327 }, { 381, 377 }};
static const XStringRes _Const004B = { _StringsDefault0, 0x009F };
static const XRect _Const004C = {{ 406, 329 }, { 446, 379 }};
static const XStringRes _Const004D = { _StringsDefault0, 0x00A3 };
static const XRect _Const004E = {{ 461, 332 }, { 510, 382 }};
static const XStringRes _Const004F = { _StringsDefault0, 0x00A7 };
static const XRect _Const0050 = {{ 23, 36 }, { 783, 126 }};
static const XColor _Const0051 = { 0xFF, 0x74, 0x03, 0xFF };
static const XStringRes _Const0052 = { _StringsDefault0, 0x00AB };
static const XRect _Const0053 = {{ 74, 180 }, { 735, 393 }};
static const XColor _Const0054 = { 0xCC, 0xC0, 0xAF, 0xFF };
static const XPoint _Const0055 = { 34, 34 };
static const XRect _Const0056 = {{ -28, -5 }, { 122, 89 }};
static const XStringRes _Const0057 = { _StringsDefault0, 0x00C1 };
static const XColor _Const0058 = { 0x11, 0x11, 0x11, 0xFF };
static const XStringRes _Const0059 = { _StringsDefault0, 0x00C5 };
static const XStringRes _Const005A = { _StringsDefault0, 0x00CA };
static const XStringRes _Const005B = { _StringsDefault0, 0x00CF };
static const XStringRes _Const005C = { _StringsDefault0, 0x00D4 };
static const XRect _Const005D = {{ 102, 36 }, { 230, 168 }};
static const XStringRes _Const005E = { _StringsDefault0, 0x00D9 };
static const XRect _Const005F = {{ 261, 36 }, { 399, 168 }};
static const XStringRes _Const0060 = { _StringsDefault0, 0x00E6 };
static const XRect _Const0061 = {{ 415, 38 }, { 552, 168 }};
static const XStringRes _Const0062 = { _StringsDefault0, 0x00F4 };
static const XRect _Const0063 = {{ 571, 36 }, { 710, 168 }};
static const XStringRes _Const0064 = { _StringsDefault0, 0x00FF };
static const XRect _Const0065 = {{ 98, 166 }, { 233, 306 }};
static const XStringRes _Const0066 = { _StringsDefault0, 0x010D };
static const XRect _Const0067 = {{ 260, 168 }, { 398, 308 }};
static const XStringRes _Const0068 = { _StringsDefault0, 0x011B };
static const XRect _Const0069 = {{ 418, 168 }, { 554, 308 }};
static const XStringRes _Const006A = { _StringsDefault0, 0x0122 };
static const XRect _Const006B = {{ 567, 168 }, { 706, 308 }};
static const XStringRes _Const006C = { _StringsDefault0, 0x0130 };
static const XRect _Const006D = {{ 98, 314 }, { 233, 452 }};
static const XStringRes _Const006E = { _StringsDefault0, 0x0137 };
static const XRect _Const006F = {{ 260, 314 }, { 398, 452 }};
static const XStringRes _Const0070 = { _StringsDefault0, 0x0145 };
static const XRect _Const0071 = {{ 416, 304 }, { 553, 463 }};
static const XStringRes _Const0072 = { _StringsDefault0, 0x0150 };
static const XRect _Const0073 = {{ 567, 302 }, { 706, 463 }};
static const XStringRes _Const0074 = { _StringsDefault0, 0x015D };
static const XRect _Const0075 = {{ 164, 86 }, { 667, 386 }};
static const XColor _Const0076 = { 0xFF, 0xFB, 0xF6, 0xFF };
static const XColor _Const0077 = { 0xFF, 0xF3, 0x6A, 0xFF };
static const XRect _Const0078 = {{ 86, 36 }, { 747, 453 }};
static const XRect _Const0079 = {{ -28, -21 }, { 86, 69 }};
static const XRect _Const007A = {{ 73, -17 }, { 702, 480 }};
static const XRect _Const007B = {{ 241, 80 }, { 322, 165 }};
static const XStringRes _Const007C = { _StringsDefault0, 0x016B };
static const XRect _Const007D = {{ 484, 82 }, { 565, 162 }};
static const XStringRes _Const007E = { _StringsDefault0, 0x016F };
static const XRect _Const007F = {{ 403, 82 }, { 484, 162 }};
static const XStringRes _Const0080 = { _StringsDefault0, 0x0173 };
static const XRect _Const0081 = {{ 322, 80 }, { 403, 162 }};
static const XStringRes _Const0082 = { _StringsDefault0, 0x0177 };
static const XRect _Const0083 = {{ 240, 161 }, { 321, 246 }};
static const XStringRes _Const0084 = { _StringsDefault0, 0x017B };
static const XRect _Const0085 = {{ 241, 243 }, { 322, 328 }};
static const XStringRes _Const0086 = { _StringsDefault0, 0x017F };
static const XRect _Const0087 = {{ 241, 324 }, { 322, 409 }};
static const XStringRes _Const0088 = { _StringsDefault0, 0x0183 };
static const XRect _Const0089 = {{ 322, 161 }, { 403, 246 }};
static const XStringRes _Const008A = { _StringsDefault0, 0x0188 };
static const XRect _Const008B = {{ 403, 160 }, { 484, 245 }};
static const XStringRes _Const008C = { _StringsDefault0, 0x018C };
static const XRect _Const008D = {{ 485, 160 }, { 566, 245 }};
static const XStringRes _Const008E = { _StringsDefault0, 0x0190 };
static const XRect _Const008F = {{ 322, 244 }, { 403, 325 }};
static const XStringRes _Const0090 = { _StringsDefault0, 0x0194 };
static const XRect _Const0091 = {{ 404, 243 }, { 485, 328 }};
static const XStringRes _Const0092 = { _StringsDefault0, 0x0199 };
static const XRect _Const0093 = {{ 485, 242 }, { 566, 327 }};
static const XStringRes _Const0094 = { _StringsDefault0, 0x019E };
static const XRect _Const0095 = {{ 323, 323 }, { 404, 408 }};
static const XStringRes _Const0096 = { _StringsDefault0, 0x01A3 };
static const XRect _Const0097 = {{ 403, 325 }, { 484, 410 }};
static const XStringRes _Const0098 = { _StringsDefault0, 0x01A8 };
static const XRect _Const0099 = {{ 485, 324 }, { 566, 409 }};
static const XStringRes _Const009A = { _StringsDefault0, 0x01AD };
static const XRect _Const009B = {{ 149, 90 }, { 652, 390 }};
static const XRect _Const009C = {{ 242, 74 }, { 566, 407 }};
static const XRect _Const009D = {{ 235, 77 }, { 566, 411 }};
static const XColor _Const009E = { 0x18, 0x0E, 0x00, 0xFF };
static const XColor _Const009F = { 0xD2, 0x85, 0x1B, 0xFF };
static const XColor _Const00A0 = { 0xF3, 0xFF, 0x00, 0xFF };
static const XColor _Const00A1 = { 0x00, 0x00, 0x00, 0xFF };
static const XColor _Const00A2 = { 0xE8, 0xA0, 0x38, 0x5D };
static const XRect _Const00A3 = {{ -39, -20 }, { 111, 74 }};
static const XRect _Const00A4 = {{ 0, 0 }, { 800, 627 }};
static const XRect _Const00A5 = {{ 140, 140 }, { 633, 627 }};
static const XRect _Const00A6 = {{ 299, 277 }, { 474, 490 }};
static const XRect _Const00A7 = {{ -1, -16 }, { 800, 669 }};
static const XStringRes _Const00A8 = { _StringsDefault0, 0x01B2 };
static const XRect _Const00A9 = {{ 0, 0 }, { 800, 486 }};
static const XRect _Const00AA = {{ 154, -1 }, { 647, 486 }};
static const XRect _Const00AB = {{ 311, 127 }, { 486, 340 }};
static const XRect _Const00AC = {{ -2, -100 }, { 799, 585 }};
static const XRect _Const00AD = {{ 317, 193 }, { 480, 225 }};
static const XStringRes _Const00AE = { _StringsDefault0, 0x01BB };
static const XRect _Const00AF = {{ 317, 233 }, { 480, 287 }};
static const XStringRes _Const00B0 = { _StringsDefault0, 0x01CE };
static const XStringRes _Const00B1 = { _StringsDefault0, 0x01E6 };
static const XStringRes _Const00B2 = { _StringsDefault0, 0x01F0 };

/* Initializer for the class 'Application::Application' */
void ApplicationApplication__Init( ApplicationApplication _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreRoot__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationApplication );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->WordGuessingButton, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->PushButtonConfig, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->TimerGuessingGame, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->MemoryGameButton, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->TimerMemoryGame, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->TilesPuzzleGameButton, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->TimeTilesPuzzleGame, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Arrow, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationApplication );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Image, _Const0000 );
  CoreRectView__OnSetBounds( &_this->WordGuessingButton, _Const0001 );
  WidgetSetPushButton_OnSetIconFrameActive( &_this->WordGuessingButton, 2 );
  WidgetSetPushButton_OnSetIconFrameFocused( &_this->WordGuessingButton, -1 );
  WidgetSetPushButton_OnSetIconFrameDisabled( &_this->WordGuessingButton, -1 );
  WidgetSetPushButton_OnSetIconFrameDefault( &_this->WordGuessingButton, -1 );
  WidgetSetPushButton_OnSetLabel( &_this->WordGuessingButton, 0 );
  CoreTimer_OnSetPeriod( &_this->TimerGuessingGame, 0 );
  CoreTimer_OnSetBegin( &_this->TimerGuessingGame, 1300 );
  CoreRectView__OnSetBounds( &_this->MemoryGameButton, _Const0002 );
  WidgetSetPushButton_OnSetIconFrameActive( &_this->MemoryGameButton, 2 );
  WidgetSetPushButton_OnSetIconFrameFocused( &_this->MemoryGameButton, -1 );
  WidgetSetPushButton_OnSetIconFrameDisabled( &_this->MemoryGameButton, -1 );
  WidgetSetPushButton_OnSetIconFrameDefault( &_this->MemoryGameButton, -1 );
  WidgetSetPushButton_OnSetLabel( &_this->MemoryGameButton, 0 );
  CoreTimer_OnSetPeriod( &_this->TimerMemoryGame, 0 );
  CoreTimer_OnSetBegin( &_this->TimerMemoryGame, 1300 );
  CoreRectView__OnSetBounds( &_this->TilesPuzzleGameButton, _Const0003 );
  WidgetSetPushButton_OnSetIconFrameActive( &_this->TilesPuzzleGameButton, 2 );
  WidgetSetPushButton_OnSetIconFrameFocused( &_this->TilesPuzzleGameButton, -1 );
  WidgetSetPushButton_OnSetIconFrameDisabled( &_this->TilesPuzzleGameButton, -1 );
  WidgetSetPushButton_OnSetIconFrameDefault( &_this->TilesPuzzleGameButton, -1 );
  WidgetSetPushButton_OnSetLabel( &_this->TilesPuzzleGameButton, 0 );
  CoreTimer_OnSetPeriod( &_this->TimeTilesPuzzleGame, 0 );
  CoreTimer_OnSetBegin( &_this->TimeTilesPuzzleGame, 1300 );
  CoreRectView__OnSetBounds( &_this->Arrow, _Const0004 );
  WidgetSetPushButton_OnSetLabel( &_this->Arrow, EwLoadString( &_Const0005 ));
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->WordGuessingButton ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->MemoryGameButton ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TilesPuzzleGameButton ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Arrow ), 0 );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
  _this->WordGuessingButton.OnPress = EwNewSlot( _this, ApplicationApplication_OnPressGuessingWordGame );
  WidgetSetPushButton_OnSetIcon( &_this->WordGuessingButton, EwLoadResource( &ApplicationWordGuessingLogo, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->WordGuessingButton, &_this->PushButtonConfig );
  _this->TimerGuessingGame.OnTrigger = EwNewSlot( _this, ApplicationApplication_OpenGuessingWordGame );
  _this->MemoryGameButton.OnPress = EwNewSlot( _this, ApplicationApplication_OnPressMemoryGame );
  WidgetSetPushButton_OnSetIcon( &_this->MemoryGameButton, EwLoadResource( &ApplicationMemoryGameLogo, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->MemoryGameButton, &_this->PushButtonConfig );
  _this->TimerMemoryGame.OnTrigger = EwNewSlot( _this, ApplicationApplication_OpenMemoryGame );
  _this->TilesPuzzleGameButton.OnPress = EwNewSlot( _this, ApplicationApplication_OnPressTilesPuzzleGame );
  WidgetSetPushButton_OnSetIcon( &_this->TilesPuzzleGameButton, EwLoadResource( 
  &ApplicationTilesPuzzleLogo, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->TilesPuzzleGameButton, &_this->PushButtonConfig );
  _this->TimeTilesPuzzleGame.OnTrigger = EwNewSlot( _this, ApplicationApplication_OpenTilesPuzzleGame );
  WidgetSetPushButton_OnSetIcon( &_this->Arrow, EwLoadResource( &ApplicationArrow, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->Arrow, &_this->PushButtonConfig );
}

/* Re-Initializer for the class 'Application::Application' */
void ApplicationApplication__ReInit( ApplicationApplication _this )
{
  /* At first re-initialize the super class ... */
  CoreRoot__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Image );
  WidgetSetPushButton__ReInit( &_this->WordGuessingButton );
  WidgetSetPushButtonConfig__ReInit( &_this->PushButtonConfig );
  CoreTimer__ReInit( &_this->TimerGuessingGame );
  WidgetSetPushButton__ReInit( &_this->MemoryGameButton );
  CoreTimer__ReInit( &_this->TimerMemoryGame );
  WidgetSetPushButton__ReInit( &_this->TilesPuzzleGameButton );
  CoreTimer__ReInit( &_this->TimeTilesPuzzleGame );
  WidgetSetPushButton__ReInit( &_this->Arrow );
}

/* Finalizer method for the class 'Application::Application' */
void ApplicationApplication__Done( ApplicationApplication _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreRoot );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Image );
  WidgetSetPushButton__Done( &_this->WordGuessingButton );
  WidgetSetPushButtonConfig__Done( &_this->PushButtonConfig );
  CoreTimer__Done( &_this->TimerGuessingGame );
  WidgetSetPushButton__Done( &_this->MemoryGameButton );
  CoreTimer__Done( &_this->TimerMemoryGame );
  WidgetSetPushButton__Done( &_this->TilesPuzzleGameButton );
  CoreTimer__Done( &_this->TimeTilesPuzzleGame );
  WidgetSetPushButton__Done( &_this->Arrow );

  /* Don't forget to deinitialize the super class ... */
  CoreRoot__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::Application.OpenGuessingWordGame()' */
void ApplicationApplication_OpenGuessingWordGame( ApplicationApplication _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( CoreGroup__IsActiveDialog( _this, 1 ))
    CoreGroup_SwitchToDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
    ApplicationGuessTheWord, 0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideLeftCentered, 
    EffectsSlideTransition )), ((EffectsTransition)EwGetAutoObject( &EffectsFadeInOutCentered, 
    EffectsFadeInOutTransition )), 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );

  sl = EwNewSlot( _this, ApplicationApplication_DisableButtons );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::Application.OnPressGuessingWordGame()' */
void ApplicationApplication_OnPressGuessingWordGame( ApplicationApplication _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->WordGuessingButton, EwLoadResource( &ApplicationOnPressWordGuessingLogo, 
  ResourcesBitmap ));
  CoreTimer_OnSetEnabled( &_this->TimerGuessingGame, 1 );
}

/* 'C' function for method : 'Application::Application.OpenMemoryGame()' */
void ApplicationApplication_OpenMemoryGame( ApplicationApplication _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( CoreGroup__IsActiveDialog( _this, 1 ))
    CoreGroup_SwitchToDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
    ApplicationMemoryGame, 0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideLeftCentered, 
    EffectsSlideTransition )), ((EffectsTransition)EwGetAutoObject( &EffectsFadeInOutCentered, 
    EffectsFadeInOutTransition )), 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );

  sl = EwNewSlot( _this, ApplicationApplication_DisableButtons );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::Application.OnPressMemoryGame()' */
void ApplicationApplication_OnPressMemoryGame( ApplicationApplication _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->MemoryGameButton, EwLoadResource( &ApplicationOnPressMemoryGameLogo, 
  ResourcesBitmap ));
  CoreTimer_OnSetEnabled( &_this->TimerMemoryGame, 1 );
}

/* 'C' function for method : 'Application::Application.DisableButtons()' */
void ApplicationApplication_DisableButtons( ApplicationApplication _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_OnSetEnabled((CoreGroup)&_this->WordGuessingButton, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->WordGuessingButton, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->MemoryGameButton, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->MemoryGameButton, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->TilesPuzzleGameButton, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->TilesPuzzleGameButton, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->Arrow, 0 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Arrow, 0 );
}

/* 'C' function for method : 'Application::Application.OpenTilesPuzzleGame()' */
void ApplicationApplication_OpenTilesPuzzleGame( ApplicationApplication _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( CoreGroup__IsActiveDialog( _this, 1 ))
    CoreGroup_SwitchToDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
    ApplicationTilesPuzzle, 0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideLeftCentered, 
    EffectsSlideTransition )), ((EffectsTransition)EwGetAutoObject( &EffectsFadeInOutCentered, 
    EffectsFadeInOutTransition )), 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );

  sl = EwNewSlot( _this, ApplicationApplication_DisableButtons );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::Application.OnPressTilesPuzzleGame()' */
void ApplicationApplication_OnPressTilesPuzzleGame( ApplicationApplication _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->TilesPuzzleGameButton, EwLoadResource( 
  &ApplicationOnPressTilesPuzzleLogo, ResourcesBitmap ));
  CoreTimer_OnSetEnabled( &_this->TimeTilesPuzzleGame, 1 );
}

/* Variants derived from the class : 'Application::Application' */
EW_DEFINE_CLASS_VARIANTS( ApplicationApplication )
EW_END_OF_CLASS_VARIANTS( ApplicationApplication )

/* Virtual Method Table (VMT) for the class : 'Application::Application' */
EW_DEFINE_CLASS( ApplicationApplication, CoreRoot, Image, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, "Application::Application" )
  CoreRectView_initLayoutContext,
  CoreRoot_GetRoot,
  CoreRoot_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreRoot_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreRoot_OnSetFocus,
  CoreRoot_OnSetOpacity,
  CoreRoot_IsActiveDialog,
  CoreRoot_DispatchEvent,
  CoreRoot_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreRoot_InvalidateArea,
EW_END_OF_CLASS( ApplicationApplication )

/* Include a file containing the bitmap resource : 'Application::BackgroudGamingRoom' */
#include "_ApplicationBackgroudGamingRoom.h"

/* Table with links to derived variants of the bitmap resource : 'Application::BackgroudGamingRoom' */
EW_RES_WITHOUT_VARIANTS( ApplicationBackgroudGamingRoom )

/* Include a file containing the bitmap resource : 'Application::WordGuessingLogo' */
#include "_ApplicationWordGuessingLogo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::WordGuessingLogo' */
EW_RES_WITHOUT_VARIANTS( ApplicationWordGuessingLogo )

/* Initializer for the class 'Application::GuessTheWord' */
void ApplicationGuessTheWord__Init( ApplicationGuessTheWord _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationGuessTheWord );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Image1, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Image2, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Image3, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->FirstLetter, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->SecondLetter, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->ThirdLetter, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->ForthLetter, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->q, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->TransparentButton, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->m, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->w, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->e, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->r, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->t, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->y, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->u, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->i, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->o, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->p, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->A, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->s, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->d, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->f, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->g, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->h, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->j, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->k, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->LettersToUse, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->GuessedText, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->RandomChoice, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->GuessedLetters, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->delete_key, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->enter, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->l, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->z, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->x, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->c, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->v, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->b, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->n, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->UnfilledSpaces, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->TimerUnfilledSpaces, &_this->_.XObject, 0 );
  EffectsColorEffect__Init( &_this->UnfilledSpacesGradient, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->ButtonPressed, &_this->_.XObject, 0 );
  ViewsFilterImage__Init( &_this->FilterKeyboard, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->MenuButtonConfig, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->MenuButton, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationGuessTheWord );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0006 );
  CoreRectView__OnSetBounds( &_this->Image, _Const0007 );
  CoreRectView__OnSetBounds( &_this->Image1, _Const0008 );
  CoreRectView__OnSetBounds( &_this->Image2, _Const0009 );
  CoreRectView__OnSetBounds( &_this->Image3, _Const000A );
  CoreRectView__OnSetBounds( &_this->FirstLetter, _Const000B );
  ViewsText_OnSetString( &_this->FirstLetter, 0 );
  CoreRectView__OnSetBounds( &_this->SecondLetter, _Const000C );
  ViewsText_OnSetString( &_this->SecondLetter, 0 );
  CoreRectView__OnSetBounds( &_this->ThirdLetter, _Const000D );
  ViewsText_OnSetString( &_this->ThirdLetter, 0 );
  CoreRectView__OnSetBounds( &_this->ForthLetter, _Const000E );
  ViewsText_OnSetString( &_this->ForthLetter, 0 );
  CoreRectView__OnSetBounds( &_this->q, _Const000F );
  WidgetSetPushButton_OnSetLabel( &_this->q, EwLoadString( &_Const0010 ));
  CoreRectView__OnSetBounds( &_this->m, _Const0011 );
  WidgetSetPushButton_OnSetLabel( &_this->m, EwLoadString( &_Const0012 ));
  CoreRectView__OnSetBounds( &_this->w, _Const0013 );
  WidgetSetPushButton_OnSetLabel( &_this->w, EwLoadString( &_Const0014 ));
  CoreRectView__OnSetBounds( &_this->e, _Const0015 );
  WidgetSetPushButton_OnSetLabel( &_this->e, EwLoadString( &_Const0016 ));
  CoreRectView__OnSetBounds( &_this->r, _Const0017 );
  WidgetSetPushButton_OnSetLabel( &_this->r, EwLoadString( &_Const0018 ));
  CoreRectView__OnSetBounds( &_this->t, _Const0019 );
  WidgetSetPushButton_OnSetLabel( &_this->t, EwLoadString( &_Const001A ));
  CoreRectView__OnSetBounds( &_this->y, _Const001B );
  WidgetSetPushButton_OnSetLabel( &_this->y, EwLoadString( &_Const001C ));
  CoreRectView__OnSetBounds( &_this->u, _Const001D );
  WidgetSetPushButton_OnSetLabel( &_this->u, EwLoadString( &_Const001E ));
  CoreRectView__OnSetBounds( &_this->i, _Const001F );
  WidgetSetPushButton_OnSetLabel( &_this->i, EwLoadString( &_Const0020 ));
  CoreRectView__OnSetBounds( &_this->o, _Const0021 );
  WidgetSetPushButton_OnSetLabel( &_this->o, EwLoadString( &_Const0022 ));
  CoreRectView__OnSetBounds( &_this->p, _Const0023 );
  WidgetSetPushButton_OnSetLabel( &_this->p, EwLoadString( &_Const0024 ));
  CoreRectView__OnSetBounds( &_this->A, _Const0025 );
  WidgetSetPushButton_OnSetLabel( &_this->A, EwLoadString( &_Const0026 ));
  CoreRectView__OnSetBounds( &_this->s, _Const0027 );
  WidgetSetPushButton_OnSetLabel( &_this->s, EwLoadString( &_Const0028 ));
  CoreRectView__OnSetBounds( &_this->d, _Const0029 );
  WidgetSetPushButton_OnSetLabel( &_this->d, EwLoadString( &_Const002A ));
  CoreRectView__OnSetBounds( &_this->f, _Const002B );
  WidgetSetPushButton_OnSetLabel( &_this->f, EwLoadString( &_Const002C ));
  CoreRectView__OnSetBounds( &_this->g, _Const002D );
  WidgetSetPushButton_OnSetLabel( &_this->g, EwLoadString( &_Const002E ));
  CoreRectView__OnSetBounds( &_this->h, _Const002F );
  WidgetSetPushButton_OnSetLabel( &_this->h, EwLoadString( &_Const0030 ));
  CoreRectView__OnSetBounds( &_this->j, _Const0031 );
  WidgetSetPushButton_OnSetLabel( &_this->j, EwLoadString( &_Const0032 ));
  CoreRectView__OnSetBounds( &_this->k, _Const0033 );
  WidgetSetPushButton_OnSetLabel( &_this->k, EwLoadString( &_Const0034 ));
  CoreRectView__OnSetBounds( &_this->LettersToUse, _Const0035 );
  ViewsText_OnSetColorTR( &_this->LettersToUse, _Const0036 );
  ViewsText_OnSetColorTL( &_this->LettersToUse, _Const0037 );
  ViewsText_OnSetString( &_this->LettersToUse, EwLoadString( &_Const0038 ));
  ViewsText_OnSetVisible( &_this->LettersToUse, 0 );
  CoreView_OnSetStackingPriority((CoreView)&_this->GuessedText, 2 );
  CoreRectView__OnSetBounds( &_this->GuessedText, _Const0039 );
  ViewsText_OnSetPadding( &_this->GuessedText, 0 );
  ViewsText_OnSetColorBR( &_this->GuessedText, _Const003A );
  ViewsText_OnSetColorTR( &_this->GuessedText, _Const003A );
  ViewsText_OnSetColorTL( &_this->GuessedText, _Const003B );
  ViewsText_OnSetString( &_this->GuessedText, EwLoadString( &_Const003C ));
  ViewsText_OnSetVisible( &_this->GuessedText, 0 );
  CoreRectView__OnSetBounds( &_this->RandomChoice, _Const003D );
  ViewsText_OnSetString( &_this->RandomChoice, EwLoadString( &_Const003E ));
  CoreRectView__OnSetBounds( &_this->GuessedLetters, _Const003F );
  ViewsText_OnSetColorTR( &_this->GuessedLetters, _Const0036 );
  ViewsText_OnSetColorTL( &_this->GuessedLetters, _Const0037 );
  ViewsText_OnSetString( &_this->GuessedLetters, 0 );
  ViewsText_OnSetVisible( &_this->GuessedLetters, 0 );
  CoreRectView__OnSetBounds( &_this->delete_key, _Const0040 );
  WidgetSetPushButton_OnSetLabel( &_this->delete_key, 0 );
  CoreRectView__OnSetBounds( &_this->enter, _Const0041 );
  WidgetSetPushButton_OnSetLabel( &_this->enter, EwLoadString( &_Const0005 ));
  CoreRectView__OnSetBounds( &_this->l, _Const0042 );
  WidgetSetPushButton_OnSetLabel( &_this->l, EwLoadString( &_Const0043 ));
  CoreRectView__OnSetBounds( &_this->z, _Const0044 );
  WidgetSetPushButton_OnSetLabel( &_this->z, EwLoadString( &_Const0045 ));
  CoreRectView__OnSetBounds( &_this->x, _Const0046 );
  WidgetSetPushButton_OnSetLabel( &_this->x, EwLoadString( &_Const0047 ));
  CoreRectView__OnSetBounds( &_this->c, _Const0048 );
  WidgetSetPushButton_OnSetLabel( &_this->c, EwLoadString( &_Const0049 ));
  CoreRectView__OnSetBounds( &_this->v, _Const004A );
  WidgetSetPushButton_OnSetLabel( &_this->v, EwLoadString( &_Const004B ));
  CoreRectView__OnSetBounds( &_this->b, _Const004C );
  WidgetSetPushButton_OnSetLabel( &_this->b, EwLoadString( &_Const004D ));
  CoreRectView__OnSetBounds( &_this->n, _Const004E );
  WidgetSetPushButton_OnSetLabel( &_this->n, EwLoadString( &_Const004F ));
  CoreRectView__OnSetBounds( &_this->UnfilledSpaces, _Const0050 );
  ViewsText_OnSetColorTR( &_this->UnfilledSpaces, _Const0051 );
  ViewsText_OnSetString( &_this->UnfilledSpaces, EwLoadString( &_Const0052 ));
  ViewsText_OnSetVisible( &_this->UnfilledSpaces, 0 );
  CoreTimer_OnSetPeriod( &_this->TimerUnfilledSpaces, 0 );
  CoreTimer_OnSetBegin( &_this->TimerUnfilledSpaces, 1000 );
  EffectsEffect_OnSetCycleDuration((EffectsEffect)&_this->UnfilledSpacesGradient, 
  2000 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->UnfilledSpacesGradient, 1 );
  CoreTimer_OnSetPeriod( &_this->ButtonPressed, 0 );
  CoreTimer_OnSetBegin( &_this->ButtonPressed, 300 );
  CoreRectView__OnSetBounds( &_this->FilterKeyboard, _Const0053 );
  ViewsFilterImage_OnSetTintColor( &_this->FilterKeyboard, _Const0054 );
  ViewsFilterImage_OnSetTintIntensity( &_this->FilterKeyboard, 5.0f );
  ViewsFilterImage_OnSetTintMode( &_this->FilterKeyboard, GraphicsTintModeTintByOpacity );
  ViewsFilterImage_OnSetOpacity( &_this->FilterKeyboard, 140 );
  ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 0 );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->MenuButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->MenuButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetIconTintActive( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetIconTintFocused( &_this->MenuButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetIconTintDisabled( &_this->MenuButtonConfig, ApplicationDarkOrange );
  WidgetSetPushButtonConfig_OnSetIconTintDefault( &_this->MenuButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetWidgetMinSize( &_this->MenuButtonConfig, _Const0055 );
  CoreView_OnSetStackingPriority((CoreView)&_this->MenuButton, 2 );
  CoreRectView__OnSetBounds( &_this->MenuButton, _Const0056 );
  WidgetSetPushButton_OnSetLabel( &_this->MenuButton, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image1 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image2 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image3 ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstLetter ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondLetter ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ThirdLetter ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ForthLetter ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->q ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->m ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->w ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->e ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->r ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->t ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->y ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->u ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->i ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->o ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->p ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->A ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->s ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->d ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->f ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->g ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->h ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->j ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->k ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->LettersToUse ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GuessedText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->RandomChoice ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GuessedLetters ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->delete_key ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->enter ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->l ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->z ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->x ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->c ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->v ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->b ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->n ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->UnfilledSpaces ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FilterKeyboard ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->MenuButton ), 0 );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ApplicationPlaceholderGuessingGame, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->Image1, EwLoadResource( &ApplicationPlaceholderGuessingGame, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->Image2, EwLoadResource( &ApplicationPlaceholderGuessingGame, 
  ResourcesBitmap ));
  ViewsImage_OnSetBitmap( &_this->Image3, EwLoadResource( &ApplicationPlaceholderGuessingGame, 
  ResourcesBitmap ));
  ViewsText_OnSetFont( &_this->FirstLetter, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->SecondLetter, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->ThirdLetter, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  ViewsText_OnSetOnUpdate( &_this->ForthLetter, EwNullSlot );
  ViewsText_OnSetFont( &_this->ForthLetter, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  _this->q.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->q, EwLoadResource( &Applicationq, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->q, &_this->TransparentButton );
  _this->m.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->m, EwLoadResource( &Applicationm, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->m, &_this->TransparentButton );
  _this->w.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->w, EwLoadResource( &Applicationw, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->w, &_this->TransparentButton );
  _this->e.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->e, EwLoadResource( &Applicatione, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->e, &_this->TransparentButton );
  _this->r.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->r, EwLoadResource( &Applicationr, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->r, &_this->TransparentButton );
  _this->t.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->t, EwLoadResource( &Applicationt, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->t, &_this->TransparentButton );
  _this->y.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->y, EwLoadResource( &Applicationy, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->y, &_this->TransparentButton );
  _this->u.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->u, EwLoadResource( &Applicationu, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->u, &_this->TransparentButton );
  _this->i.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->i, EwLoadResource( &Applicationi, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->i, &_this->TransparentButton );
  _this->o.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->o, EwLoadResource( &Applicationo, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->o, &_this->TransparentButton );
  _this->p.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->p, EwLoadResource( &Applicationp, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->p, &_this->TransparentButton );
  _this->A.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->A, EwLoadResource( &Applicationa, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->A, &_this->TransparentButton );
  _this->s.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->s, EwLoadResource( &Applications, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->s, &_this->TransparentButton );
  _this->d.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->d, EwLoadResource( &Applicationd, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->d, &_this->TransparentButton );
  _this->f.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->f, EwLoadResource( &Applicationf, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->f, &_this->TransparentButton );
  _this->g.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->g, EwLoadResource( &Applicationg, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->g, &_this->TransparentButton );
  _this->h.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->h, EwLoadResource( &Applicationh, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->h, &_this->TransparentButton );
  _this->j.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->j, EwLoadResource( &Applicationj, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->j, &_this->TransparentButton );
  _this->k.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->k, EwLoadResource( &Applicationk, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->k, &_this->TransparentButton );
  ViewsText_OnSetFont( &_this->LettersToUse, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->GuessedText, EwLoadResource( &ApplicationWordGuessingGameFontWin, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->RandomChoice, EwLoadResource( &ResourcesDefaultFont, 
  ResourcesFont ));
  ViewsText_OnSetFont( &_this->GuessedLetters, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  _this->delete_key.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressDelete );
  WidgetSetPushButton_OnSetIcon( &_this->delete_key, EwLoadResource( &Applicationdelete_key, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->delete_key, &_this->TransparentButton );
  _this->enter.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_GuessWord );
  WidgetSetPushButton_OnSetIcon( &_this->enter, EwLoadResource( &Applicationenter, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->enter, &_this->TransparentButton );
  _this->l.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->l, EwLoadResource( &Applicationl, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->l, &_this->TransparentButton );
  _this->z.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->z, EwLoadResource( &Applicationz, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->z, &_this->TransparentButton );
  _this->x.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->x, EwLoadResource( &Applicationx, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->x, &_this->TransparentButton );
  _this->c.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->c, EwLoadResource( &Applicationc, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->c, &_this->TransparentButton );
  _this->v.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->v, EwLoadResource( &Applicationv, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->v, &_this->TransparentButton );
  _this->b.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->b, EwLoadResource( &Applicationb, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->b, &_this->TransparentButton );
  _this->n.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_PressLetter );
  WidgetSetPushButton_OnSetIcon( &_this->n, EwLoadResource( &Applicationn, ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->n, &_this->TransparentButton );
  ViewsText_OnSetFont( &_this->UnfilledSpaces, EwLoadResource( &ApplicationWordGuessingGameFont, 
  ResourcesFont ));
  _this->TimerUnfilledSpaces.OnTrigger = EwNewSlot( _this, ApplicationGuessTheWord_DismissUnfilledSpacesWarning );
  _this->ButtonPressed.OnTrigger = EwNewSlot( _this, ApplicationGuessTheWord_PressButtonEffect );
  ViewsFilterImage_OnSetBitmap( &_this->FilterKeyboard, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->MenuButtonConfig, EwLoadResource( 
  &ResourcesFontLarge, ResourcesFont ));
  _this->MenuButton.OnPress = EwNewSlot( _this, ApplicationGuessTheWord_OpenMenu );
  WidgetSetPushButton_OnSetIcon( &_this->MenuButton, EwLoadResource( &Applicationopen_menu, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->MenuButton, &_this->MenuButtonConfig );

  /* Call the user defined constructor */
  ApplicationGuessTheWord_Init( _this, aArg );
}

/* Re-Initializer for the class 'Application::GuessTheWord' */
void ApplicationGuessTheWord__ReInit( ApplicationGuessTheWord _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Image );
  ViewsImage__ReInit( &_this->Image1 );
  ViewsImage__ReInit( &_this->Image2 );
  ViewsImage__ReInit( &_this->Image3 );
  ViewsText__ReInit( &_this->FirstLetter );
  ViewsText__ReInit( &_this->SecondLetter );
  ViewsText__ReInit( &_this->ThirdLetter );
  ViewsText__ReInit( &_this->ForthLetter );
  WidgetSetPushButton__ReInit( &_this->q );
  WidgetSetPushButtonConfig__ReInit( &_this->TransparentButton );
  WidgetSetPushButton__ReInit( &_this->m );
  WidgetSetPushButton__ReInit( &_this->w );
  WidgetSetPushButton__ReInit( &_this->e );
  WidgetSetPushButton__ReInit( &_this->r );
  WidgetSetPushButton__ReInit( &_this->t );
  WidgetSetPushButton__ReInit( &_this->y );
  WidgetSetPushButton__ReInit( &_this->u );
  WidgetSetPushButton__ReInit( &_this->i );
  WidgetSetPushButton__ReInit( &_this->o );
  WidgetSetPushButton__ReInit( &_this->p );
  WidgetSetPushButton__ReInit( &_this->A );
  WidgetSetPushButton__ReInit( &_this->s );
  WidgetSetPushButton__ReInit( &_this->d );
  WidgetSetPushButton__ReInit( &_this->f );
  WidgetSetPushButton__ReInit( &_this->g );
  WidgetSetPushButton__ReInit( &_this->h );
  WidgetSetPushButton__ReInit( &_this->j );
  WidgetSetPushButton__ReInit( &_this->k );
  ViewsText__ReInit( &_this->LettersToUse );
  ViewsText__ReInit( &_this->GuessedText );
  ViewsText__ReInit( &_this->RandomChoice );
  ViewsText__ReInit( &_this->GuessedLetters );
  WidgetSetPushButton__ReInit( &_this->delete_key );
  WidgetSetPushButton__ReInit( &_this->enter );
  WidgetSetPushButton__ReInit( &_this->l );
  WidgetSetPushButton__ReInit( &_this->z );
  WidgetSetPushButton__ReInit( &_this->x );
  WidgetSetPushButton__ReInit( &_this->c );
  WidgetSetPushButton__ReInit( &_this->v );
  WidgetSetPushButton__ReInit( &_this->b );
  WidgetSetPushButton__ReInit( &_this->n );
  ViewsText__ReInit( &_this->UnfilledSpaces );
  CoreTimer__ReInit( &_this->TimerUnfilledSpaces );
  EffectsColorEffect__ReInit( &_this->UnfilledSpacesGradient );
  CoreTimer__ReInit( &_this->ButtonPressed );
  ViewsFilterImage__ReInit( &_this->FilterKeyboard );
  WidgetSetPushButtonConfig__ReInit( &_this->MenuButtonConfig );
  WidgetSetPushButton__ReInit( &_this->MenuButton );
}

/* Finalizer method for the class 'Application::GuessTheWord' */
void ApplicationGuessTheWord__Done( ApplicationGuessTheWord _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Image );
  ViewsImage__Done( &_this->Image1 );
  ViewsImage__Done( &_this->Image2 );
  ViewsImage__Done( &_this->Image3 );
  ViewsText__Done( &_this->FirstLetter );
  ViewsText__Done( &_this->SecondLetter );
  ViewsText__Done( &_this->ThirdLetter );
  ViewsText__Done( &_this->ForthLetter );
  WidgetSetPushButton__Done( &_this->q );
  WidgetSetPushButtonConfig__Done( &_this->TransparentButton );
  WidgetSetPushButton__Done( &_this->m );
  WidgetSetPushButton__Done( &_this->w );
  WidgetSetPushButton__Done( &_this->e );
  WidgetSetPushButton__Done( &_this->r );
  WidgetSetPushButton__Done( &_this->t );
  WidgetSetPushButton__Done( &_this->y );
  WidgetSetPushButton__Done( &_this->u );
  WidgetSetPushButton__Done( &_this->i );
  WidgetSetPushButton__Done( &_this->o );
  WidgetSetPushButton__Done( &_this->p );
  WidgetSetPushButton__Done( &_this->A );
  WidgetSetPushButton__Done( &_this->s );
  WidgetSetPushButton__Done( &_this->d );
  WidgetSetPushButton__Done( &_this->f );
  WidgetSetPushButton__Done( &_this->g );
  WidgetSetPushButton__Done( &_this->h );
  WidgetSetPushButton__Done( &_this->j );
  WidgetSetPushButton__Done( &_this->k );
  ViewsText__Done( &_this->LettersToUse );
  ViewsText__Done( &_this->GuessedText );
  ViewsText__Done( &_this->RandomChoice );
  ViewsText__Done( &_this->GuessedLetters );
  WidgetSetPushButton__Done( &_this->delete_key );
  WidgetSetPushButton__Done( &_this->enter );
  WidgetSetPushButton__Done( &_this->l );
  WidgetSetPushButton__Done( &_this->z );
  WidgetSetPushButton__Done( &_this->x );
  WidgetSetPushButton__Done( &_this->c );
  WidgetSetPushButton__Done( &_this->v );
  WidgetSetPushButton__Done( &_this->b );
  WidgetSetPushButton__Done( &_this->n );
  ViewsText__Done( &_this->UnfilledSpaces );
  CoreTimer__Done( &_this->TimerUnfilledSpaces );
  EffectsColorEffect__Done( &_this->UnfilledSpacesGradient );
  CoreTimer__Done( &_this->ButtonPressed );
  ViewsFilterImage__Done( &_this->FilterKeyboard );
  WidgetSetPushButtonConfig__Done( &_this->MenuButtonConfig );
  WidgetSetPushButton__Done( &_this->MenuButton );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationGuessTheWord_Init( ApplicationGuessTheWord _this, XHandle aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  ViewsText_OnSetString( &_this->RandomChoice, EwLoadString( &_Const0057 ));
}

/* 'C' function for method : 'Application::GuessTheWord.GuessWord()' */
void ApplicationGuessTheWord_GuessWord( ApplicationGuessTheWord _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( !EwCompString( _this->ForthLetter.String, 0 ))
  {
    XSlot sl = EwNewSlot( _this, ApplicationGuessTheWord_UnfilledSpacesSlot );
    EwSignal( sl, ((XObject)_this ));
  }
  else
    if ( !EwCompString( _this->RandomChoice.String, EwLoadString( &_Const0057 )))
    {
      XSlot sl = EwNewSlot( _this, ApplicationGuessTheWord_GuessWordGame );
      EwSignal( sl, ((XObject)_this ));

      if ( EwCompColor( _this->FirstLetter.Color, _Const0058 ))
        ViewsText_OnSetString( &_this->FirstLetter, 0 );

      if ( EwCompColor( _this->SecondLetter.Color, _Const0058 ))
        ViewsText_OnSetString( &_this->SecondLetter, 0 );

      if ( EwCompColor( _this->ThirdLetter.Color, _Const0058 ))
        ViewsText_OnSetString( &_this->ThirdLetter, 0 );

      if ( EwCompColor( _this->ForthLetter.Color, _Const0058 ))
        ViewsText_OnSetString( &_this->ForthLetter, 0 );
    }
}

/* 'C' function for method : 'Application::GuessTheWord.GuessWordGame()' */
void ApplicationGuessTheWord_GuessWordGame( ApplicationGuessTheWord _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( !EwCompString( _this->FirstLetter.String, EwLoadString( &_Const002E )))
  {
    ViewsText_OnSetColor( &_this->FirstLetter, _Const0058 );

    if ( EwCompString( _this->GuessedLetters.String, 0 ) != 0 )
    {
      XInt32 poz = EwStringFindChar( _this->GuessedLetters.String, 'G', 0 );

      if ( poz != 0 )
        ViewsText_OnSetString( &_this->GuessedLetters, EwStringRemove( _this->GuessedLetters.String, 
        poz, 1 ));
    }
  }
  else
    if (( !EwCompString( _this->SecondLetter.String, EwLoadString( &_Const002E )) 
        || !EwCompString( _this->ThirdLetter.String, EwLoadString( &_Const002E ))) 
        || !EwCompString( _this->ForthLetter.String, EwLoadString( &_Const002E )))
    {
      ViewsText_OnSetVisible( &_this->LettersToUse, 1 );

      if (((( EwGetStringChar( _this->GuessedLetters.String, 0 ) != 'G' ) && ( EwGetStringChar( 
          _this->GuessedLetters.String, 1 ) != 'G' )) && ( EwGetStringChar( _this->GuessedLetters.String, 
          2 ) != 'G' )) && ( EwGetStringChar( _this->GuessedLetters.String, 3 ) 
          != 'G' ))
        ViewsText_OnSetString( &_this->GuessedLetters, EwConcatString( _this->GuessedLetters.String, 
        EwLoadString( &_Const0059 )));

      ViewsText_OnSetVisible( &_this->GuessedLetters, 1 );
    }

  if ( !EwCompString( _this->SecondLetter.String, EwLoadString( &_Const0026 )))
  {
    ViewsText_OnSetColor( &_this->SecondLetter, _Const0058 );

    if ( EwCompString( _this->GuessedLetters.String, 0 ) != 0 )
    {
      XInt32 poz = EwStringFindChar( _this->GuessedLetters.String, 'A', 0 );

      if ( poz != 0 )
        ViewsText_OnSetString( &_this->GuessedLetters, EwStringRemove( _this->GuessedLetters.String, 
        poz, 1 ));
    }
  }
  else
    if (( !EwCompString( _this->FirstLetter.String, EwLoadString( &_Const0026 )) 
        || !EwCompString( _this->ThirdLetter.String, EwLoadString( &_Const0026 ))) 
        || !EwCompString( _this->ForthLetter.String, EwLoadString( &_Const0026 )))
    {
      ViewsText_OnSetVisible( &_this->LettersToUse, 1 );

      if (((( EwGetStringChar( _this->GuessedLetters.String, 0 ) != 'A' ) && ( EwGetStringChar( 
          _this->GuessedLetters.String, 1 ) != 'A' )) && ( EwGetStringChar( _this->GuessedLetters.String, 
          2 ) != 'A' )) && ( EwGetStringChar( _this->GuessedLetters.String, 3 ) 
          != 'A' ))
        ViewsText_OnSetString( &_this->GuessedLetters, EwConcatString( _this->GuessedLetters.String, 
        EwLoadString( &_Const005A )));

      ViewsText_OnSetVisible( &_this->GuessedLetters, 1 );
    }

  if ( !EwCompString( _this->ThirdLetter.String, EwLoadString( &_Const0012 )))
  {
    XInt32 poz;
    ViewsText_OnSetColor( &_this->ThirdLetter, _Const0058 );
    poz = EwStringFindChar( _this->GuessedLetters.String, 'M', 0 );

    if ( poz != 0 )
      ViewsText_OnSetString( &_this->GuessedLetters, EwStringRemove( _this->GuessedLetters.String, 
      poz, 1 ));
  }
  else
    if (( !EwCompString( _this->SecondLetter.String, EwLoadString( &_Const0012 )) 
        || !EwCompString( _this->FirstLetter.String, EwLoadString( &_Const0012 ))) 
        || !EwCompString( _this->ForthLetter.String, EwLoadString( &_Const0012 )))
    {
      ViewsText_OnSetVisible( &_this->LettersToUse, 1 );

      if (((( EwGetStringChar( _this->GuessedLetters.String, 0 ) != 'M' ) && ( EwGetStringChar( 
          _this->GuessedLetters.String, 1 ) != 'M' )) && ( EwGetStringChar( _this->GuessedLetters.String, 
          2 ) != 'M' )) && ( EwGetStringChar( _this->GuessedLetters.String, 3 ) 
          != 'M' ))
        ViewsText_OnSetString( &_this->GuessedLetters, EwConcatString( _this->GuessedLetters.String, 
        EwLoadString( &_Const005B )));

      ViewsText_OnSetVisible( &_this->GuessedLetters, 1 );
    }

  if ( !EwCompString( _this->ForthLetter.String, EwLoadString( &_Const0016 )))
  {
    XInt32 poz;
    ViewsText_OnSetColor( &_this->ForthLetter, _Const0058 );
    poz = EwStringFindChar( _this->GuessedLetters.String, 'E', 0 );

    if ( poz != 0 )
      ViewsText_OnSetString( &_this->GuessedLetters, EwStringRemove( _this->GuessedLetters.String, 
      poz, 1 ));
  }
  else
    if (( !EwCompString( _this->SecondLetter.String, EwLoadString( &_Const0016 )) 
        || !EwCompString( _this->ThirdLetter.String, EwLoadString( &_Const0016 ))) 
        || !EwCompString( _this->FirstLetter.String, EwLoadString( &_Const0016 )))
    {
      ViewsText_OnSetVisible( &_this->LettersToUse, 1 );

      if (((( EwGetStringChar( _this->GuessedLetters.String, 0 ) != 'E' ) && ( EwGetStringChar( 
          _this->GuessedLetters.String, 1 ) != 'E' )) && ( EwGetStringChar( _this->GuessedLetters.String, 
          2 ) != 'E' )) && ( EwGetStringChar( _this->GuessedLetters.String, 3 ) 
          != 'E' ))
        ViewsText_OnSetString( &_this->GuessedLetters, EwConcatString( _this->GuessedLetters.String, 
        EwLoadString( &_Const005C )));

      ViewsText_OnSetVisible( &_this->GuessedLetters, 1 );
    }

  if ((( !EwCompString( _this->FirstLetter.String, EwLoadString( &_Const002E )) 
      && !EwCompString( _this->SecondLetter.String, EwLoadString( &_Const0026 ))) 
      && !EwCompString( _this->ThirdLetter.String, EwLoadString( &_Const0012 ))) 
      && !EwCompString( _this->ForthLetter.String, EwLoadString( &_Const0016 )))
  {
    XSlot sl;
    ViewsText_OnSetVisible( &_this->GuessedText, 1 );
    ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 1 );
    sl = EwNewSlot( _this, ApplicationGuessTheWord_DisableKeyboard );
    EwSignal( sl, ((XObject)_this ));
    ViewsText_OnSetVisible( &_this->LettersToUse, 0 );
  }
}

/* 'C' function for method : 'Application::GuessTheWord.UnfilledSpacesSlot()' */
void ApplicationGuessTheWord_UnfilledSpacesSlot( ApplicationGuessTheWord _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsText_OnSetVisible( &_this->UnfilledSpaces, 1 );
  ViewsText_OnSetColor( &_this->UnfilledSpaces, _this->UnfilledSpacesGradient.Value );
  CoreTimer_OnSetEnabled( &_this->TimerUnfilledSpaces, 1 );
}

/* 'C' function for method : 'Application::GuessTheWord.DismissUnfilledSpacesWarning()' */
void ApplicationGuessTheWord_DismissUnfilledSpacesWarning( ApplicationGuessTheWord _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsText_OnSetVisible( &_this->UnfilledSpaces, 0 );
}

/* 'C' function for method : 'Application::GuessTheWord.PressDelete()' */
void ApplicationGuessTheWord_PressDelete( ApplicationGuessTheWord _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if (( EwCompString( _this->ForthLetter.String, 0 ) != 0 ) && EwCompColor( _this->ForthLetter.Color, 
      _Const0058 ))
    ViewsText_OnSetString( &_this->ForthLetter, 0 );
  else
    if (( EwCompString( _this->ThirdLetter.String, 0 ) != 0 ) && EwCompColor( _this->ThirdLetter.Color, 
        _Const0058 ))
      ViewsText_OnSetString( &_this->ThirdLetter, 0 );
    else
      if (( EwCompString( _this->SecondLetter.String, 0 ) != 0 ) && EwCompColor( 
          _this->SecondLetter.Color, _Const0058 ))
        ViewsText_OnSetString( &_this->SecondLetter, 0 );
      else
        if ( EwCompColor( _this->FirstLetter.Color, _Const0058 ))
          ViewsText_OnSetString( &_this->FirstLetter, 0 );
}

/* 'C' function for method : 'Application::GuessTheWord.PressLetter()' */
void ApplicationGuessTheWord_PressLetter( ApplicationGuessTheWord _this, XObject 
  sender )
{
  WidgetSetPushButton currentSender = EwCastObject( sender, WidgetSetPushButton );
  XSlot sl;

  if ( !EwCompString( _this->FirstLetter.String, 0 ))
    ViewsText_OnSetString( &_this->FirstLetter, currentSender->Label );
  else
    if ( !EwCompString( _this->SecondLetter.String, 0 ))
      ViewsText_OnSetString( &_this->SecondLetter, currentSender->Label );
    else
      if ( !EwCompString( _this->ThirdLetter.String, 0 ))
        ViewsText_OnSetString( &_this->ThirdLetter, currentSender->Label );
      else
        if ( !EwCompString( _this->ForthLetter.String, 0 ))
          ViewsText_OnSetString( &_this->ForthLetter, currentSender->Label );

  ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 1 );
  sl = EwNewSlot( _this, ApplicationGuessTheWord_DisableKeyboard );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->ButtonPressed, 1 );
}

/* 'C' function for method : 'Application::GuessTheWord.PressButtonEffect()' */
void ApplicationGuessTheWord_PressButtonEffect( ApplicationGuessTheWord _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 0 );
  sl = EwNewSlot( _this, ApplicationGuessTheWord_EnableKeyboard );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::GuessTheWord.DisableKeyboard()' */
void ApplicationGuessTheWord_DisableKeyboard( ApplicationGuessTheWord _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_OnSetEnabled((CoreGroup)&_this->k, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->A, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->b, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->c, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->e, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->f, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->g, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->h, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->i, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->j, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->l, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->m, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->n, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->o, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->p, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->q, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->r, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->d, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->t, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->w, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->x, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->y, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->z, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->s, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->u, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->v, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->enter, 0 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->delete_key, 0 );
}

/* 'C' function for method : 'Application::GuessTheWord.EnableKeyboard()' */
void ApplicationGuessTheWord_EnableKeyboard( ApplicationGuessTheWord _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_OnSetEnabled((CoreGroup)&_this->k, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->A, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->b, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->c, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->e, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->f, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->g, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->h, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->i, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->j, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->l, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->m, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->n, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->o, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->p, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->q, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->r, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->d, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->t, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->w, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->x, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->y, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->z, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->s, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->u, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->v, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->enter, 1 );
  CoreGroup_OnSetEnabled((CoreGroup)&_this->delete_key, 1 );
}

/* 'C' function for method : 'Application::GuessTheWord.OpenMenu()' */
void ApplicationGuessTheWord_OpenMenu( ApplicationGuessTheWord _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_PresentDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
  ApplicationGuessTheWordMenu, 0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideDownCentered, 
  EffectsSlideTransition )), 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );
}

/* Variants derived from the class : 'Application::GuessTheWord' */
EW_DEFINE_CLASS_VARIANTS( ApplicationGuessTheWord )
EW_END_OF_CLASS_VARIANTS( ApplicationGuessTheWord )

/* Virtual Method Table (VMT) for the class : 'Application::GuessTheWord' */
EW_DEFINE_CLASS( ApplicationGuessTheWord, CoreGroup, Image, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, "Application::GuessTheWord" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_IsActiveDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationGuessTheWord )

/* Include a file containing the bitmap resource : 'Application::PlaceholderGuessingGame' */
#include "_ApplicationPlaceholderGuessingGame.h"

/* Table with links to derived variants of the bitmap resource : 'Application::PlaceholderGuessingGame' */
EW_RES_WITHOUT_VARIANTS( ApplicationPlaceholderGuessingGame )

/* Include a file containing the bitmap resource : 'Application::q' */
#include "_Applicationq.h"

/* Table with links to derived variants of the bitmap resource : 'Application::q' */
EW_RES_WITHOUT_VARIANTS( Applicationq )

/* Include a file containing the bitmap resource : 'Application::m' */
#include "_Applicationm.h"

/* Table with links to derived variants of the bitmap resource : 'Application::m' */
EW_RES_WITHOUT_VARIANTS( Applicationm )

/* Include a file containing the bitmap resource : 'Application::w' */
#include "_Applicationw.h"

/* Table with links to derived variants of the bitmap resource : 'Application::w' */
EW_RES_WITHOUT_VARIANTS( Applicationw )

/* Include a file containing the bitmap resource : 'Application::e' */
#include "_Applicatione.h"

/* Table with links to derived variants of the bitmap resource : 'Application::e' */
EW_RES_WITHOUT_VARIANTS( Applicatione )

/* Include a file containing the bitmap resource : 'Application::r' */
#include "_Applicationr.h"

/* Table with links to derived variants of the bitmap resource : 'Application::r' */
EW_RES_WITHOUT_VARIANTS( Applicationr )

/* Include a file containing the bitmap resource : 'Application::t' */
#include "_Applicationt.h"

/* Table with links to derived variants of the bitmap resource : 'Application::t' */
EW_RES_WITHOUT_VARIANTS( Applicationt )

/* Include a file containing the bitmap resource : 'Application::y' */
#include "_Applicationy.h"

/* Table with links to derived variants of the bitmap resource : 'Application::y' */
EW_RES_WITHOUT_VARIANTS( Applicationy )

/* Include a file containing the bitmap resource : 'Application::u' */
#include "_Applicationu.h"

/* Table with links to derived variants of the bitmap resource : 'Application::u' */
EW_RES_WITHOUT_VARIANTS( Applicationu )

/* Include a file containing the bitmap resource : 'Application::i' */
#include "_Applicationi.h"

/* Table with links to derived variants of the bitmap resource : 'Application::i' */
EW_RES_WITHOUT_VARIANTS( Applicationi )

/* Include a file containing the bitmap resource : 'Application::o' */
#include "_Applicationo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::o' */
EW_RES_WITHOUT_VARIANTS( Applicationo )

/* Include a file containing the bitmap resource : 'Application::p' */
#include "_Applicationp.h"

/* Table with links to derived variants of the bitmap resource : 'Application::p' */
EW_RES_WITHOUT_VARIANTS( Applicationp )

/* Include a file containing the bitmap resource : 'Application::a' */
#include "_Applicationa.h"

/* Table with links to derived variants of the bitmap resource : 'Application::a' */
EW_RES_WITHOUT_VARIANTS( Applicationa )

/* Include a file containing the bitmap resource : 'Application::s' */
#include "_Applications.h"

/* Table with links to derived variants of the bitmap resource : 'Application::s' */
EW_RES_WITHOUT_VARIANTS( Applications )

/* Include a file containing the bitmap resource : 'Application::d' */
#include "_Applicationd.h"

/* Table with links to derived variants of the bitmap resource : 'Application::d' */
EW_RES_WITHOUT_VARIANTS( Applicationd )

/* Include a file containing the bitmap resource : 'Application::f' */
#include "_Applicationf.h"

/* Table with links to derived variants of the bitmap resource : 'Application::f' */
EW_RES_WITHOUT_VARIANTS( Applicationf )

/* Include a file containing the bitmap resource : 'Application::g' */
#include "_Applicationg.h"

/* Table with links to derived variants of the bitmap resource : 'Application::g' */
EW_RES_WITHOUT_VARIANTS( Applicationg )

/* Include a file containing the bitmap resource : 'Application::h' */
#include "_Applicationh.h"

/* Table with links to derived variants of the bitmap resource : 'Application::h' */
EW_RES_WITHOUT_VARIANTS( Applicationh )

/* Include a file containing the bitmap resource : 'Application::j' */
#include "_Applicationj.h"

/* Table with links to derived variants of the bitmap resource : 'Application::j' */
EW_RES_WITHOUT_VARIANTS( Applicationj )

/* Include a file containing the bitmap resource : 'Application::k' */
#include "_Applicationk.h"

/* Table with links to derived variants of the bitmap resource : 'Application::k' */
EW_RES_WITHOUT_VARIANTS( Applicationk )

/* Include a file containing the bitmap resource : 'Application::l' */
#include "_Applicationl.h"

/* Table with links to derived variants of the bitmap resource : 'Application::l' */
EW_RES_WITHOUT_VARIANTS( Applicationl )

/* Include a file containing the bitmap resource : 'Application::z' */
#include "_Applicationz.h"

/* Table with links to derived variants of the bitmap resource : 'Application::z' */
EW_RES_WITHOUT_VARIANTS( Applicationz )

/* Include a file containing the bitmap resource : 'Application::x' */
#include "_Applicationx.h"

/* Table with links to derived variants of the bitmap resource : 'Application::x' */
EW_RES_WITHOUT_VARIANTS( Applicationx )

/* Include a file containing the bitmap resource : 'Application::c' */
#include "_Applicationc.h"

/* Table with links to derived variants of the bitmap resource : 'Application::c' */
EW_RES_WITHOUT_VARIANTS( Applicationc )

/* Include a file containing the bitmap resource : 'Application::v' */
#include "_Applicationv.h"

/* Table with links to derived variants of the bitmap resource : 'Application::v' */
EW_RES_WITHOUT_VARIANTS( Applicationv )

/* Include a file containing the bitmap resource : 'Application::b' */
#include "_Applicationb.h"

/* Table with links to derived variants of the bitmap resource : 'Application::b' */
EW_RES_WITHOUT_VARIANTS( Applicationb )

/* Include a file containing the bitmap resource : 'Application::n' */
#include "_Applicationn.h"

/* Table with links to derived variants of the bitmap resource : 'Application::n' */
EW_RES_WITHOUT_VARIANTS( Applicationn )

/* Include a file containing the bitmap resource : 'Application::delete_key' */
#include "_Applicationdelete_key.h"

/* Table with links to derived variants of the bitmap resource : 'Application::delete_key' */
EW_RES_WITHOUT_VARIANTS( Applicationdelete_key )

/* Include a file containing the bitmap resource : 'Application::enter' */
#include "_Applicationenter.h"

/* Table with links to derived variants of the bitmap resource : 'Application::enter' */
EW_RES_WITHOUT_VARIANTS( Applicationenter )

/* Include a file containing the font resource : 'Application::WordGuessingGameFont' */
#include "_ApplicationWordGuessingGameFont.h"

/* Table with links to derived variants of the font resource : 'Application::WordGuessingGameFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationWordGuessingGameFont )

/* Include a file containing the bitmap resource : 'Application::OnPressWordGuessingLogo' */
#include "_ApplicationOnPressWordGuessingLogo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::OnPressWordGuessingLogo' */
EW_RES_WITHOUT_VARIANTS( ApplicationOnPressWordGuessingLogo )

/* Include a file containing the font resource : 'Application::WordGuessingGameFontWin' */
#include "_ApplicationWordGuessingGameFontWin.h"

/* Table with links to derived variants of the font resource : 'Application::WordGuessingGameFontWin' */
EW_RES_WITHOUT_VARIANTS( ApplicationWordGuessingGameFontWin )

/* Include a file containing the bitmap resource : 'Application::MemoryGameLogo' */
#include "_ApplicationMemoryGameLogo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::MemoryGameLogo' */
EW_RES_WITHOUT_VARIANTS( ApplicationMemoryGameLogo )

/* Include a file containing the bitmap resource : 'Application::OnPressMemoryGameLogo' */
#include "_ApplicationOnPressMemoryGameLogo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::OnPressMemoryGameLogo' */
EW_RES_WITHOUT_VARIANTS( ApplicationOnPressMemoryGameLogo )

/* Initializer for the class 'Application::MemoryGame' */
void ApplicationMemoryGame__Init( ApplicationMemoryGame _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationMemoryGame );

  /* ... then construct all embedded objects */
  WidgetSetPushButtonConfig__Init( &_this->PushButtonConfig, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstLabyrinth, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstBlackLeaves, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstPendant, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstCoins, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondCoins, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstCup, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstGoldLeaves, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondCup, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondGoldLeaves, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondPendant, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondLabyrinth, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondBlackLeaves, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->OpeningGameTimer, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->RevealCardTimer, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->GuessedText, &_this->_.XObject, 0 );
  ViewsFilterImage__Init( &_this->FilterKeyboard, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->MenuButtonConfig, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->MenuButton, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationMemoryGame );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->FirstLabyrinth, _Const005D );
  WidgetSetPushButton_OnSetResignAfterHorizontalWipe( &_this->FirstLabyrinth, 0 );
  WidgetSetPushButton_OnSetLabel( &_this->FirstLabyrinth, EwLoadString( &_Const005E ));
  CoreRectView__OnSetBounds( &_this->FirstBlackLeaves, _Const005F );
  WidgetSetPushButton_OnSetLabel( &_this->FirstBlackLeaves, EwLoadString( &_Const0060 ));
  CoreRectView__OnSetBounds( &_this->FirstPendant, _Const0061 );
  WidgetSetPushButton_OnSetLabel( &_this->FirstPendant, EwLoadString( &_Const0062 ));
  CoreRectView__OnSetBounds( &_this->FirstCoins, _Const0063 );
  WidgetSetPushButton_OnSetLabel( &_this->FirstCoins, EwLoadString( &_Const0064 ));
  CoreRectView__OnSetBounds( &_this->SecondCoins, _Const0065 );
  WidgetSetPushButton_OnSetLabel( &_this->SecondCoins, EwLoadString( &_Const0066 ));
  CoreRectView__OnSetBounds( &_this->FirstCup, _Const0067 );
  WidgetSetPushButton_OnSetLabel( &_this->FirstCup, EwLoadString( &_Const0068 ));
  CoreRectView__OnSetBounds( &_this->FirstGoldLeaves, _Const0069 );
  WidgetSetPushButton_OnSetLabel( &_this->FirstGoldLeaves, EwLoadString( &_Const006A ));
  CoreRectView__OnSetBounds( &_this->SecondCup, _Const006B );
  WidgetSetPushButton_OnSetLabel( &_this->SecondCup, EwLoadString( &_Const006C ));
  CoreRectView__OnSetBounds( &_this->SecondGoldLeaves, _Const006D );
  WidgetSetPushButton_OnSetLabel( &_this->SecondGoldLeaves, EwLoadString( &_Const006E ));
  CoreRectView__OnSetBounds( &_this->SecondPendant, _Const006F );
  WidgetSetPushButton_OnSetLabel( &_this->SecondPendant, EwLoadString( &_Const0070 ));
  CoreRectView__OnSetBounds( &_this->SecondLabyrinth, _Const0071 );
  WidgetSetPushButton_OnSetLabel( &_this->SecondLabyrinth, EwLoadString( &_Const0072 ));
  CoreRectView__OnSetBounds( &_this->SecondBlackLeaves, _Const0073 );
  WidgetSetPushButton_OnSetLabel( &_this->SecondBlackLeaves, EwLoadString( &_Const0074 ));
  CoreTimer_OnSetPeriod( &_this->OpeningGameTimer, 0 );
  CoreTimer_OnSetBegin( &_this->OpeningGameTimer, 1000 );
  CoreTimer_OnSetPeriod( &_this->RevealCardTimer, 0 );
  CoreTimer_OnSetBegin( &_this->RevealCardTimer, 500 );
  CoreView_OnSetStackingPriority((CoreView)&_this->GuessedText, 3 );
  CoreRectView__OnSetBounds( &_this->GuessedText, _Const0075 );
  ViewsText_OnSetPadding( &_this->GuessedText, 0 );
  ViewsText_OnSetColorBL( &_this->GuessedText, _Const0076 );
  ViewsText_OnSetColorBR( &_this->GuessedText, _Const003A );
  ViewsText_OnSetColorTR( &_this->GuessedText, _Const003A );
  ViewsText_OnSetColorTL( &_this->GuessedText, _Const003B );
  ViewsText_OnSetString( &_this->GuessedText, EwLoadString( &_Const003C ));
  ViewsText_OnSetColor( &_this->GuessedText, _Const0077 );
  ViewsText_OnSetVisible( &_this->GuessedText, 0 );
  CoreRectView__OnSetBounds( &_this->FilterKeyboard, _Const0078 );
  ViewsFilterImage_OnSetTintColor( &_this->FilterKeyboard, _Const0054 );
  ViewsFilterImage_OnSetTintIntensity( &_this->FilterKeyboard, 9.0f );
  ViewsFilterImage_OnSetTintMode( &_this->FilterKeyboard, GraphicsTintModeTintByOpacity );
  ViewsFilterImage_OnSetOpacity( &_this->FilterKeyboard, 140 );
  ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 0 );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->MenuButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->MenuButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetIconTintActive( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetIconTintFocused( &_this->MenuButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetIconTintDisabled( &_this->MenuButtonConfig, ApplicationDarkOrange );
  WidgetSetPushButtonConfig_OnSetIconTintDefault( &_this->MenuButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetWidgetMinSize( &_this->MenuButtonConfig, _Const0055 );
  CoreView_OnSetStackingPriority((CoreView)&_this->MenuButton, 2 );
  CoreRectView__OnSetBounds( &_this->MenuButton, _Const0079 );
  WidgetSetPushButton_OnSetLabel( &_this->MenuButton, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstLabyrinth ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstBlackLeaves ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstPendant ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstCoins ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondCoins ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstCup ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstGoldLeaves ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondCup ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondGoldLeaves ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondPendant ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondLabyrinth ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondBlackLeaves ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GuessedText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FilterKeyboard ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->MenuButton ), 0 );
  _this->FirstLabyrinth.OnPress = EwNewSlot( _this, ApplicationMemoryGame_FirstLabyrinthPressed );
  WidgetSetPushButton_OnSetIcon( &_this->FirstLabyrinth, EwLoadResource( &ApplicationLabyrinth, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstLabyrinth, &_this->PushButtonConfig );
  _this->FirstBlackLeaves.OnPress = EwNewSlot( _this, ApplicationMemoryGame_FirstBlackLeavesPressed );
  WidgetSetPushButton_OnSetIcon( &_this->FirstBlackLeaves, EwLoadResource( &ApplicationBlackLeaves, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstBlackLeaves, &_this->PushButtonConfig );
  _this->FirstPendant.OnPress = EwNewSlot( _this, ApplicationMemoryGame_FirstPendantPressed );
  WidgetSetPushButton_OnSetIcon( &_this->FirstPendant, EwLoadResource( &ApplicationPandant, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstPendant, &_this->PushButtonConfig );
  _this->FirstCoins.OnPress = EwNewSlot( _this, ApplicationMemoryGame_FirstCoinsPressed );
  WidgetSetPushButton_OnSetIcon( &_this->FirstCoins, EwLoadResource( &ApplicationWhiteCoins, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstCoins, &_this->PushButtonConfig );
  _this->SecondCoins.OnPress = EwNewSlot( _this, ApplicationMemoryGame_SecondCoinsPressed );
  WidgetSetPushButton_OnSetIcon( &_this->SecondCoins, EwLoadResource( &ApplicationWhiteCoins, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondCoins, &_this->PushButtonConfig );
  _this->FirstCup.OnPress = EwNewSlot( _this, ApplicationMemoryGame_FirstCupPressed );
  WidgetSetPushButton_OnSetIcon( &_this->FirstCup, EwLoadResource( &Applicationcup, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstCup, &_this->PushButtonConfig );
  _this->FirstGoldLeaves.OnPress = EwNewSlot( _this, ApplicationMemoryGame_FirstGoldLeavesPressed );
  WidgetSetPushButton_OnSetIcon( &_this->FirstGoldLeaves, EwLoadResource( &ApplicationGoldLeaves, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstGoldLeaves, &_this->PushButtonConfig );
  _this->SecondCup.OnPress = EwNewSlot( _this, ApplicationMemoryGame_SecondCupPressed );
  WidgetSetPushButton_OnSetIcon( &_this->SecondCup, EwLoadResource( &Applicationcup, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondCup, &_this->PushButtonConfig );
  _this->SecondGoldLeaves.OnPress = EwNewSlot( _this, ApplicationMemoryGame_SecondGoldLeavesPressed );
  WidgetSetPushButton_OnSetIcon( &_this->SecondGoldLeaves, EwLoadResource( &ApplicationGoldLeaves, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondGoldLeaves, &_this->PushButtonConfig );
  _this->SecondPendant.OnPress = EwNewSlot( _this, ApplicationMemoryGame_SecondPendantPressed );
  WidgetSetPushButton_OnSetIcon( &_this->SecondPendant, EwLoadResource( &ApplicationPandant, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondPendant, &_this->PushButtonConfig );
  _this->SecondLabyrinth.OnPress = EwNewSlot( _this, ApplicationMemoryGame_SecondLabyrinthPressed );
  WidgetSetPushButton_OnSetIcon( &_this->SecondLabyrinth, EwLoadResource( &ApplicationLabyrinth, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondLabyrinth, &_this->PushButtonConfig );
  _this->SecondBlackLeaves.OnPress = EwNewSlot( _this, ApplicationMemoryGame_SecondBlackLeavesPressed );
  WidgetSetPushButton_OnSetIcon( &_this->SecondBlackLeaves, EwLoadResource( &ApplicationBlackLeaves, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondBlackLeaves, &_this->PushButtonConfig );
  _this->OpeningGameTimer.OnTrigger = EwNewSlot( _this, ApplicationMemoryGame_OpeningGame );
  _this->RevealCardTimer.OnTrigger = EwNewSlot( _this, ApplicationMemoryGame_VerifyCards );
  ViewsText_OnSetFont( &_this->GuessedText, EwLoadResource( &ApplicationWordGuessingGameFontWin, 
  ResourcesFont ));
  ViewsFilterImage_OnSetBitmap( &_this->FilterKeyboard, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->MenuButtonConfig, EwLoadResource( 
  &ResourcesFontLarge, ResourcesFont ));
  _this->MenuButton.OnPress = EwNewSlot( _this, ApplicationMemoryGame_OpenMenu );
  WidgetSetPushButton_OnSetIcon( &_this->MenuButton, EwLoadResource( &Applicationopen_menu, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->MenuButton, &_this->MenuButtonConfig );

  /* Call the user defined constructor */
  ApplicationMemoryGame_Init( _this, aArg );
}

/* Re-Initializer for the class 'Application::MemoryGame' */
void ApplicationMemoryGame__ReInit( ApplicationMemoryGame _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  WidgetSetPushButtonConfig__ReInit( &_this->PushButtonConfig );
  WidgetSetPushButton__ReInit( &_this->FirstLabyrinth );
  WidgetSetPushButton__ReInit( &_this->FirstBlackLeaves );
  WidgetSetPushButton__ReInit( &_this->FirstPendant );
  WidgetSetPushButton__ReInit( &_this->FirstCoins );
  WidgetSetPushButton__ReInit( &_this->SecondCoins );
  WidgetSetPushButton__ReInit( &_this->FirstCup );
  WidgetSetPushButton__ReInit( &_this->FirstGoldLeaves );
  WidgetSetPushButton__ReInit( &_this->SecondCup );
  WidgetSetPushButton__ReInit( &_this->SecondGoldLeaves );
  WidgetSetPushButton__ReInit( &_this->SecondPendant );
  WidgetSetPushButton__ReInit( &_this->SecondLabyrinth );
  WidgetSetPushButton__ReInit( &_this->SecondBlackLeaves );
  CoreTimer__ReInit( &_this->OpeningGameTimer );
  CoreTimer__ReInit( &_this->RevealCardTimer );
  ViewsText__ReInit( &_this->GuessedText );
  ViewsFilterImage__ReInit( &_this->FilterKeyboard );
  WidgetSetPushButtonConfig__ReInit( &_this->MenuButtonConfig );
  WidgetSetPushButton__ReInit( &_this->MenuButton );
}

/* Finalizer method for the class 'Application::MemoryGame' */
void ApplicationMemoryGame__Done( ApplicationMemoryGame _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  WidgetSetPushButtonConfig__Done( &_this->PushButtonConfig );
  WidgetSetPushButton__Done( &_this->FirstLabyrinth );
  WidgetSetPushButton__Done( &_this->FirstBlackLeaves );
  WidgetSetPushButton__Done( &_this->FirstPendant );
  WidgetSetPushButton__Done( &_this->FirstCoins );
  WidgetSetPushButton__Done( &_this->SecondCoins );
  WidgetSetPushButton__Done( &_this->FirstCup );
  WidgetSetPushButton__Done( &_this->FirstGoldLeaves );
  WidgetSetPushButton__Done( &_this->SecondCup );
  WidgetSetPushButton__Done( &_this->SecondGoldLeaves );
  WidgetSetPushButton__Done( &_this->SecondPendant );
  WidgetSetPushButton__Done( &_this->SecondLabyrinth );
  WidgetSetPushButton__Done( &_this->SecondBlackLeaves );
  CoreTimer__Done( &_this->OpeningGameTimer );
  CoreTimer__Done( &_this->RevealCardTimer );
  ViewsText__Done( &_this->GuessedText );
  ViewsFilterImage__Done( &_this->FilterKeyboard );
  WidgetSetPushButtonConfig__Done( &_this->MenuButtonConfig );
  WidgetSetPushButton__Done( &_this->MenuButton );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationMemoryGame_Init( ApplicationMemoryGame _this, XHandle aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  CoreTimer_OnSetEnabled( &_this->OpeningGameTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.OpeningGame()' */
void ApplicationMemoryGame_OpeningGame( ApplicationMemoryGame _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstLabyrinth, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->SecondLabyrinth, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->FirstBlackLeaves, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->SecondBlackLeaves, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->FirstPendant, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->SecondPendant, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->FirstCoins, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->SecondCoins, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->FirstCup, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->SecondCup, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->FirstGoldLeaves, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetIcon( &_this->SecondGoldLeaves, EwLoadResource( &ApplicationGoldPicture, 
  ResourcesBitmap ));
}

/* 'C' function for method : 'Application::MemoryGame.CountActiveCards()' */
void ApplicationMemoryGame_CountActiveCards( ApplicationMemoryGame _this, XObject 
  sender )
{
  XInt32 initialCount;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  initialCount = 0;

  if ( _this->FirstLabyrinth.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->SecondLabyrinth.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->FirstBlackLeaves.Icon != EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ))
    initialCount++;

  if ( _this->SecondBlackLeaves.Icon != EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ))
    initialCount++;

  if ( _this->FirstPendant.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->SecondPendant.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->FirstCoins.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->SecondCoins.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->FirstCup.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->SecondCup.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->FirstGoldLeaves.Icon != EwLoadResource( &ApplicationGoldPicture, ResourcesBitmap ))
    initialCount++;

  if ( _this->SecondGoldLeaves.Icon != EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ))
    initialCount++;

  _this->NumberDifferentPictures = initialCount;
}

/* 'C' function for method : 'Application::MemoryGame.FirstLabyrinthPressed()' */
void ApplicationMemoryGame_FirstLabyrinthPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstLabyrinth, EwLoadResource( &ApplicationLabyrinth, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.SecondLabyrinthPressed()' */
void ApplicationMemoryGame_SecondLabyrinthPressed( ApplicationMemoryGame _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SecondLabyrinth, EwLoadResource( &ApplicationLabyrinth, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.FirstBlackLeavesPressed()' */
void ApplicationMemoryGame_FirstBlackLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstBlackLeaves, EwLoadResource( &ApplicationBlackLeaves, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.SecondBlackLeavesPressed()' */
void ApplicationMemoryGame_SecondBlackLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SecondBlackLeaves, EwLoadResource( &ApplicationBlackLeaves, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.FirstCupPressed()' */
void ApplicationMemoryGame_FirstCupPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstCup, EwLoadResource( &Applicationcup, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.SecondCupPressed()' */
void ApplicationMemoryGame_SecondCupPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SecondCup, EwLoadResource( &Applicationcup, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.FirstPendantPressed()' */
void ApplicationMemoryGame_FirstPendantPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstPendant, EwLoadResource( &ApplicationPandant, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.SecondPendantPressed()' */
void ApplicationMemoryGame_SecondPendantPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SecondPendant, EwLoadResource( &ApplicationPandant, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.FirstCoinsPressed()' */
void ApplicationMemoryGame_FirstCoinsPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstCoins, EwLoadResource( &ApplicationWhiteCoins, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.SecondCoinsPressed()' */
void ApplicationMemoryGame_SecondCoinsPressed( ApplicationMemoryGame _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SecondCoins, EwLoadResource( &ApplicationWhiteCoins, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.FirstGoldLeavesPressed()' */
void ApplicationMemoryGame_FirstGoldLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->FirstGoldLeaves, EwLoadResource( &ApplicationGoldLeaves, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.SecondGoldLeavesPressed()' */
void ApplicationMemoryGame_SecondGoldLeavesPressed( ApplicationMemoryGame _this, 
  XObject sender )
{
  XSlot sl;
  XSlot sl2;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SecondGoldLeaves, EwLoadResource( &ApplicationGoldLeaves, 
  ResourcesBitmap ));
  sl = EwNewSlot( _this, ApplicationMemoryGame_CountActiveCards );
  EwSignal( sl, ((XObject)_this ));
  sl2 = EwNewSlot( _this, ApplicationMemoryGame_Schaffle );
  EwSignal( sl2, ((XObject)_this ));
  CoreTimer_OnSetEnabled( &_this->RevealCardTimer, 1 );
}

/* 'C' function for method : 'Application::MemoryGame.VerifyCards()' */
void ApplicationMemoryGame_VerifyCards( ApplicationMemoryGame _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if (( _this->NumberDifferentPictures % 2 ) == 0 )
  {
    XSlot sl;

    if (( _this->FirstLabyrinth.Icon != EwLoadResource( &ApplicationLabyrinth, ResourcesBitmap )) 
        || ( _this->SecondLabyrinth.Icon != EwLoadResource( &ApplicationLabyrinth, 
        ResourcesBitmap )))
    {
      WidgetSetPushButton_OnSetIcon( &_this->FirstLabyrinth, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
      WidgetSetPushButton_OnSetIcon( &_this->SecondLabyrinth, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
    }

    if (( _this->SecondBlackLeaves.Icon != EwLoadResource( &ApplicationBlackLeaves, 
        ResourcesBitmap )) || ( _this->FirstBlackLeaves.Icon != EwLoadResource( 
        &ApplicationBlackLeaves, ResourcesBitmap )))
    {
      WidgetSetPushButton_OnSetIcon( &_this->FirstBlackLeaves, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
      WidgetSetPushButton_OnSetIcon( &_this->SecondBlackLeaves, EwLoadResource( 
      &ApplicationGoldPicture, ResourcesBitmap ));
    }

    if (( _this->FirstPendant.Icon != EwLoadResource( &ApplicationPandant, ResourcesBitmap )) 
        || ( _this->SecondPendant.Icon != EwLoadResource( &ApplicationPandant, ResourcesBitmap )))
    {
      WidgetSetPushButton_OnSetIcon( &_this->FirstPendant, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
      WidgetSetPushButton_OnSetIcon( &_this->SecondPendant, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
    }

    if (( _this->FirstCup.Icon != EwLoadResource( &Applicationcup, ResourcesBitmap )) 
        || ( _this->SecondCup.Icon != EwLoadResource( &Applicationcup, ResourcesBitmap )))
    {
      WidgetSetPushButton_OnSetIcon( &_this->FirstCup, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
      WidgetSetPushButton_OnSetIcon( &_this->SecondCup, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
    }

    if (( _this->FirstCoins.Icon != EwLoadResource( &ApplicationWhiteCoins, ResourcesBitmap )) 
        || ( _this->SecondCoins.Icon != EwLoadResource( &ApplicationWhiteCoins, 
        ResourcesBitmap )))
    {
      WidgetSetPushButton_OnSetIcon( &_this->FirstCoins, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
      WidgetSetPushButton_OnSetIcon( &_this->SecondCoins, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
    }

    if (( _this->FirstGoldLeaves.Icon != EwLoadResource( &ApplicationGoldLeaves, 
        ResourcesBitmap )) || ( _this->SecondGoldLeaves.Icon != EwLoadResource( 
        &ApplicationGoldLeaves, ResourcesBitmap )))
    {
      WidgetSetPushButton_OnSetIcon( &_this->FirstGoldLeaves, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
      WidgetSetPushButton_OnSetIcon( &_this->SecondGoldLeaves, EwLoadResource( &ApplicationGoldPicture, 
      ResourcesBitmap ));
    }

    _this->NumberDifferentPictures = 0;
    sl = EwNewSlot( _this, ApplicationMemoryGame_WinMessage );
    EwSignal( sl, ((XObject)_this ));
  }
}

/* 'C' function for method : 'Application::MemoryGame.WinMessage()' */
void ApplicationMemoryGame_WinMessage( ApplicationMemoryGame _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if (((((((((((( _this->FirstLabyrinth.Icon == EwLoadResource( &ApplicationLabyrinth, 
      ResourcesBitmap )) && ( _this->SecondLabyrinth.Icon == EwLoadResource( &ApplicationLabyrinth, 
      ResourcesBitmap ))) && ( _this->FirstCup.Icon == EwLoadResource( &Applicationcup, 
      ResourcesBitmap ))) && ( _this->SecondCup.Icon == EwLoadResource( &Applicationcup, 
      ResourcesBitmap ))) && ( _this->FirstPendant.Icon == EwLoadResource( &ApplicationPandant, 
      ResourcesBitmap ))) && ( _this->SecondPendant.Icon == EwLoadResource( &ApplicationPandant, 
      ResourcesBitmap ))) && ( _this->FirstBlackLeaves.Icon == EwLoadResource( &ApplicationBlackLeaves, 
      ResourcesBitmap ))) && ( _this->SecondBlackLeaves.Icon == EwLoadResource( 
      &ApplicationBlackLeaves, ResourcesBitmap ))) && ( _this->FirstCoins.Icon == 
      EwLoadResource( &ApplicationWhiteCoins, ResourcesBitmap ))) && ( _this->SecondCoins.Icon 
      == EwLoadResource( &ApplicationWhiteCoins, ResourcesBitmap ))) && ( _this->FirstGoldLeaves.Icon 
      == EwLoadResource( &ApplicationGoldLeaves, ResourcesBitmap ))) && ( _this->SecondGoldLeaves.Icon 
      == EwLoadResource( &ApplicationGoldLeaves, ResourcesBitmap )))
  {
    ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 1 );
    ViewsText_OnSetVisible( &_this->GuessedText, 1 );
  }
}

/* 'C' function for method : 'Application::MemoryGame.Schaffle()' */
void ApplicationMemoryGame_Schaffle( ApplicationMemoryGame _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( _this );
  EW_UNUSED_ARG( sender );
}

/* 'C' function for method : 'Application::MemoryGame.OpenMenu()' */
void ApplicationMemoryGame_OpenMenu( ApplicationMemoryGame _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_PresentDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
  ApplicationGuessTheWordMenu, 0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideDownCentered, 
  EffectsSlideTransition )), 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );
}

/* Variants derived from the class : 'Application::MemoryGame' */
EW_DEFINE_CLASS_VARIANTS( ApplicationMemoryGame )
EW_END_OF_CLASS_VARIANTS( ApplicationMemoryGame )

/* Virtual Method Table (VMT) for the class : 'Application::MemoryGame' */
EW_DEFINE_CLASS( ApplicationMemoryGame, CoreGroup, PushButtonConfig, NumberDifferentPictures, 
                 NumberDifferentPictures, NumberDifferentPictures, NumberDifferentPictures, 
                 NumberDifferentPictures, "Application::MemoryGame" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_IsActiveDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationMemoryGame )

/* Include a file containing the bitmap resource : 'Application::cup' */
#include "_Applicationcup.h"

/* Table with links to derived variants of the bitmap resource : 'Application::cup' */
EW_RES_WITHOUT_VARIANTS( Applicationcup )

/* Include a file containing the bitmap resource : 'Application::WhiteCoins' */
#include "_ApplicationWhiteCoins.h"

/* Table with links to derived variants of the bitmap resource : 'Application::WhiteCoins' */
EW_RES_WITHOUT_VARIANTS( ApplicationWhiteCoins )

/* Include a file containing the bitmap resource : 'Application::BlackLeaves' */
#include "_ApplicationBlackLeaves.h"

/* Table with links to derived variants of the bitmap resource : 'Application::BlackLeaves' */
EW_RES_WITHOUT_VARIANTS( ApplicationBlackLeaves )

/* Include a file containing the bitmap resource : 'Application::GoldLeaves' */
#include "_ApplicationGoldLeaves.h"

/* Table with links to derived variants of the bitmap resource : 'Application::GoldLeaves' */
EW_RES_WITHOUT_VARIANTS( ApplicationGoldLeaves )

/* Include a file containing the bitmap resource : 'Application::Pandant' */
#include "_ApplicationPandant.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Pandant' */
EW_RES_WITHOUT_VARIANTS( ApplicationPandant )

/* Include a file containing the bitmap resource : 'Application::Labyrinth' */
#include "_ApplicationLabyrinth.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Labyrinth' */
EW_RES_WITHOUT_VARIANTS( ApplicationLabyrinth )

/* Include a file containing the bitmap resource : 'Application::GoldPicture' */
#include "_ApplicationGoldPicture.h"

/* Table with links to derived variants of the bitmap resource : 'Application::GoldPicture' */
EW_RES_WITHOUT_VARIANTS( ApplicationGoldPicture )

/* Include a file containing the bitmap resource : 'Application::TilesPuzzleLogo' */
#include "_ApplicationTilesPuzzleLogo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::TilesPuzzleLogo' */
EW_RES_WITHOUT_VARIANTS( ApplicationTilesPuzzleLogo )

/* Include a file containing the bitmap resource : 'Application::OnPressTilesPuzzleLogo' */
#include "_ApplicationOnPressTilesPuzzleLogo.h"

/* Table with links to derived variants of the bitmap resource : 'Application::OnPressTilesPuzzleLogo' */
EW_RES_WITHOUT_VARIANTS( ApplicationOnPressTilesPuzzleLogo )

/* Initializer for the class 'Application::TilesPuzzle' */
void ApplicationTilesPuzzle__Init( ApplicationTilesPuzzle _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationTilesPuzzle );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Image, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FirstTile, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->TransparentButton, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FourthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->ThirdTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SecondTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FifthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->NinthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->ThirteenthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SixthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SeventhTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->EighthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->TenthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->EleventhTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->TwelfthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FourteenthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->FifteenthTile, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->SixteenthTile, &_this->_.XObject, 0 );
  ViewsText__Init( &_this->GuessedText, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->RevealTilesTimer, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->RevealPictureTimer, &_this->_.XObject, 0 );
  ViewsImage__Init( &_this->Solution, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->RevealGuessedTextTimer, &_this->_.XObject, 0 );
  ViewsFilterImage__Init( &_this->FilterKeyboard, &_this->_.XObject, 0 );
  EffectsColorEffect__Init( &_this->GuessedTextPulse, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->RevealFilterTimer, &_this->_.XObject, 0 );
  EffectsColorEffect__Init( &_this->FilterEffect, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->DisableEffectTimer, &_this->_.XObject, 0 );
  WidgetSetPushButtonConfig__Init( &_this->MenuButtonConfig, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->MenuButton, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationTilesPuzzle );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const0000 );
  CoreRectView__OnSetBounds( &_this->Image, _Const007A );
  CoreRectView__OnSetBounds( &_this->FirstTile, _Const007B );
  WidgetSetPushButton_OnSetLabel( &_this->FirstTile, EwLoadString( &_Const007C ));
  CoreRectView__OnSetBounds( &_this->FourthTile, _Const007D );
  WidgetSetPushButton_OnSetLabel( &_this->FourthTile, EwLoadString( &_Const007E ));
  CoreRectView__OnSetBounds( &_this->ThirdTile, _Const007F );
  WidgetSetPushButton_OnSetLabel( &_this->ThirdTile, EwLoadString( &_Const0080 ));
  CoreRectView__OnSetBounds( &_this->SecondTile, _Const0081 );
  WidgetSetPushButton_OnSetLabel( &_this->SecondTile, EwLoadString( &_Const0082 ));
  CoreRectView__OnSetBounds( &_this->FifthTile, _Const0083 );
  WidgetSetPushButton_OnSetLabel( &_this->FifthTile, EwLoadString( &_Const0084 ));
  CoreRectView__OnSetBounds( &_this->NinthTile, _Const0085 );
  WidgetSetPushButton_OnSetLabel( &_this->NinthTile, EwLoadString( &_Const0086 ));
  CoreRectView__OnSetBounds( &_this->ThirteenthTile, _Const0087 );
  WidgetSetPushButton_OnSetLabel( &_this->ThirteenthTile, EwLoadString( &_Const0088 ));
  CoreRectView__OnSetBounds( &_this->SixthTile, _Const0089 );
  WidgetSetPushButton_OnSetLabel( &_this->SixthTile, EwLoadString( &_Const008A ));
  CoreRectView__OnSetBounds( &_this->SeventhTile, _Const008B );
  WidgetSetPushButton_OnSetLabel( &_this->SeventhTile, EwLoadString( &_Const008C ));
  CoreRectView__OnSetBounds( &_this->EighthTile, _Const008D );
  WidgetSetPushButton_OnSetLabel( &_this->EighthTile, EwLoadString( &_Const008E ));
  CoreRectView__OnSetBounds( &_this->TenthTile, _Const008F );
  WidgetSetPushButton_OnSetLabel( &_this->TenthTile, EwLoadString( &_Const0090 ));
  CoreRectView__OnSetBounds( &_this->EleventhTile, _Const0091 );
  WidgetSetPushButton_OnSetLabel( &_this->EleventhTile, EwLoadString( &_Const0092 ));
  CoreRectView__OnSetBounds( &_this->TwelfthTile, _Const0093 );
  WidgetSetPushButton_OnSetLabel( &_this->TwelfthTile, EwLoadString( &_Const0094 ));
  CoreRectView__OnSetBounds( &_this->FourteenthTile, _Const0095 );
  WidgetSetPushButton_OnSetLabel( &_this->FourteenthTile, EwLoadString( &_Const0096 ));
  CoreRectView__OnSetBounds( &_this->FifteenthTile, _Const0097 );
  WidgetSetPushButton_OnSetLabel( &_this->FifteenthTile, EwLoadString( &_Const0098 ));
  CoreRectView__OnSetBounds( &_this->SixteenthTile, _Const0099 );
  WidgetSetPushButton_OnSetLabel( &_this->SixteenthTile, EwLoadString( &_Const009A ));
  _this->FirstPos = 9;
  _this->SecondPos = 1;
  _this->FourthPos = 3;
  _this->FifthPos = 10;
  _this->SixthPos = 2;
  _this->SeventhPos = 6;
  _this->EighthPos = 4;
  _this->NinthPos = 13;
  _this->EleventhPos = 5;
  _this->TwelfthPos = 7;
  _this->ThirteenthPos = 14;
  _this->FourteenthPos = 15;
  _this->FifteenthPos = 8;
  _this->ThirdPos = 11;
  _this->SixteenthPos = 12;
  CoreView_OnSetStackingPriority((CoreView)&_this->GuessedText, 3 );
  CoreRectView__OnSetBounds( &_this->GuessedText, _Const009B );
  ViewsText_OnSetPadding( &_this->GuessedText, 0 );
  ViewsText_OnSetColorBL( &_this->GuessedText, _Const0076 );
  ViewsText_OnSetColorBR( &_this->GuessedText, _Const003A );
  ViewsText_OnSetColorTR( &_this->GuessedText, _Const003A );
  ViewsText_OnSetColorTL( &_this->GuessedText, _Const003B );
  ViewsText_OnSetString( &_this->GuessedText, EwLoadString( &_Const003C ));
  ViewsText_OnSetColor( &_this->GuessedText, _Const0077 );
  ViewsText_OnSetVisible( &_this->GuessedText, 0 );
  CoreTimer_OnSetPeriod( &_this->RevealTilesTimer, 0 );
  CoreTimer_OnSetBegin( &_this->RevealTilesTimer, 1000 );
  CoreTimer_OnSetPeriod( &_this->RevealPictureTimer, 0 );
  CoreTimer_OnSetBegin( &_this->RevealPictureTimer, 1500 );
  CoreRectView__OnSetBounds( &_this->Solution, _Const009C );
  ViewsImage_OnSetVisible( &_this->Solution, 0 );
  CoreTimer_OnSetPeriod( &_this->RevealGuessedTextTimer, 0 );
  CoreTimer_OnSetBegin( &_this->RevealGuessedTextTimer, 1200 );
  CoreRectView__OnSetBounds( &_this->FilterKeyboard, _Const009D );
  ViewsFilterImage_OnSetTintColor( &_this->FilterKeyboard, _Const009E );
  ViewsFilterImage_OnSetTintIntensity( &_this->FilterKeyboard, 5.0f );
  ViewsFilterImage_OnSetTintMode( &_this->FilterKeyboard, GraphicsTintModeTintByOpacity );
  ViewsFilterImage_OnSetOpacity( &_this->FilterKeyboard, 100 );
  ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 0 );
  EffectsEffect_OnSetBounces((EffectsEffect)&_this->GuessedTextPulse, 6 );
  EffectsEffect_OnSetTimingCustom2((EffectsEffect)&_this->GuessedTextPulse, 0.0f );
  EffectsEffect_OnSetTimingCustom1((EffectsEffect)&_this->GuessedTextPulse, 0.0f );
  EffectsEffect_OnSetTiming((EffectsEffect)&_this->GuessedTextPulse, EffectsTimingLinear );
  EffectsEffect_OnSetNoOfCycles((EffectsEffect)&_this->GuessedTextPulse, 6 );
  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->GuessedTextPulse, 0 );
  _this->GuessedTextPulse.Value2 = _Const009F;
  _this->GuessedTextPulse.Value1 = _Const00A0;
  CoreTimer_OnSetPeriod( &_this->RevealFilterTimer, 0 );
  CoreTimer_OnSetBegin( &_this->RevealFilterTimer, 200 );
  EffectsEffect_OnSetBounces((EffectsEffect)&_this->FilterEffect, 3 );
  EffectsEffect_OnSetOscillations((EffectsEffect)&_this->FilterEffect, 1 );
  _this->FilterEffect.Value2 = _Const00A1;
  _this->FilterEffect.Value1 = _Const00A2;
  CoreTimer_OnSetBegin( &_this->DisableEffectTimer, 1500 );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->MenuButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->MenuButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetIconTintActive( &_this->MenuButtonConfig, ApplicationLightOrange );
  WidgetSetPushButtonConfig_OnSetIconTintFocused( &_this->MenuButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetIconTintDisabled( &_this->MenuButtonConfig, ApplicationDarkOrange );
  WidgetSetPushButtonConfig_OnSetIconTintDefault( &_this->MenuButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetWidgetMinSize( &_this->MenuButtonConfig, _Const0055 );
  CoreView_OnSetStackingPriority((CoreView)&_this->MenuButton, 2 );
  CoreRectView__OnSetBounds( &_this->MenuButton, _Const00A3 );
  WidgetSetPushButton_OnSetLabel( &_this->MenuButton, 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Image ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FirstTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FourthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ThirdTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SecondTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FifthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->NinthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->ThirteenthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SixthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SeventhTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->EighthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TenthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->EleventhTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->TwelfthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FourteenthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FifteenthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->SixteenthTile ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GuessedText ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Solution ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->FilterKeyboard ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->MenuButton ), 0 );
  ViewsImage_OnSetBitmap( &_this->Image, EwLoadResource( &ApplicationFrame, ResourcesBitmap ));
  _this->FirstTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_FirstTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->FirstTile, EwLoadResource( &ApplicationNinthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FirstTile, &_this->TransparentButton );
  _this->FourthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_FourthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->FourthTile, EwLoadResource( &ApplicationThirthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FourthTile, &_this->TransparentButton );
  _this->ThirdTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_ThirdTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, EwLoadResource( &ApplicationEleventhTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->ThirdTile, &_this->TransparentButton );
  _this->SecondTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_SecondTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->SecondTile, EwLoadResource( &ApplicationFirstTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SecondTile, &_this->TransparentButton );
  _this->FifthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_FifthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->FifthTile, EwLoadResource( &ApplicationTenthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FifthTile, &_this->TransparentButton );
  _this->NinthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_NinthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->NinthTile, EwLoadResource( &ApplicationThirteenTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->NinthTile, &_this->TransparentButton );
  _this->ThirteenthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_ThirteenthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->ThirteenthTile, EwLoadResource( &ApplicationForteenthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->ThirteenthTile, &_this->TransparentButton );
  _this->SixthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_SixthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->SixthTile, EwLoadResource( &ApplicationSecondTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SixthTile, &_this->TransparentButton );
  _this->SeventhTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_SeventhTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, EwLoadResource( &ApplicationSixthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SeventhTile, &_this->TransparentButton );
  _this->EighthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_EighthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->EighthTile, EwLoadResource( &ApplicationForthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->EighthTile, &_this->TransparentButton );
  _this->TenthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_TenthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->TenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->TenthTile, &_this->TransparentButton );
  _this->EleventhTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_EleventhTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, EwLoadResource( &ApplicationFifthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->EleventhTile, &_this->TransparentButton );
  _this->TwelfthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_TwelfthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, EwLoadResource( &ApplicationSeventhTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->TwelfthTile, &_this->TransparentButton );
  _this->FourteenthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_FourteenthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, EwLoadResource( &ApplicationFifteenthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FourteenthTile, &_this->TransparentButton );
  _this->FifteenthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_FifteenthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, EwLoadResource( &ApplicationEighthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->FifteenthTile, &_this->TransparentButton );
  _this->SixteenthTile.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_SixteenthTileMovement );
  WidgetSetPushButton_OnSetIcon( &_this->SixteenthTile, EwLoadResource( &ApplicationTwelfthTile, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->SixteenthTile, &_this->TransparentButton );
  ViewsText_OnSetOnUpdate( &_this->GuessedText, EwNullSlot );
  ViewsText_OnSetFont( &_this->GuessedText, EwLoadResource( &ApplicationWordGuessingGameFontWin, 
  ResourcesFont ));
  _this->RevealTilesTimer.OnTrigger = EwNewSlot( _this, ApplicationTilesPuzzle_RevealAllTiles );
  _this->RevealPictureTimer.OnTrigger = EwNewSlot( _this, ApplicationTilesPuzzle_RevealCompletedPicture );
  ViewsImage_OnSetBitmap( &_this->Solution, EwLoadResource( &ApplicationMedusa, 
  ResourcesBitmap ));
  _this->RevealGuessedTextTimer.OnTrigger = EwNewSlot( _this, ApplicationTilesPuzzle_RevealGuessedText );
  ViewsFilterImage_OnSetBitmap( &_this->FilterKeyboard, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
  _this->GuessedTextPulse.Super1.OnAnimate = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  _this->GuessedTextPulse.Outlet = EwNewRef( &_this->GuessedText, ViewsText_OnGetColor, 
  ViewsText_OnSetColor );
  _this->RevealFilterTimer.OnTrigger = EwNewSlot( _this, ApplicationTilesPuzzle_RevealFilter );
  _this->FilterEffect.Super1.OnAnimate = EwNewSlot( _this, ApplicationTilesPuzzle_RevealFilter );
  _this->FilterEffect.Outlet = EwNewRef( &_this->FilterKeyboard, ViewsFilterImage_OnGetTintColor, 
  ViewsFilterImage_OnSetTintColor );
  _this->DisableEffectTimer.OnTrigger = EwNewSlot( _this, ApplicationTilesPuzzle_DisableEffect );
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->MenuButtonConfig, EwLoadResource( 
  &ResourcesFontLarge, ResourcesFont ));
  _this->MenuButton.OnPress = EwNewSlot( _this, ApplicationTilesPuzzle_OpenMenu );
  WidgetSetPushButton_OnSetIcon( &_this->MenuButton, EwLoadResource( &Applicationopen_menu, 
  ResourcesBitmap ));
  WidgetSetPushButton_OnSetAppearance( &_this->MenuButton, &_this->MenuButtonConfig );
}

/* Re-Initializer for the class 'Application::TilesPuzzle' */
void ApplicationTilesPuzzle__ReInit( ApplicationTilesPuzzle _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Image );
  WidgetSetPushButton__ReInit( &_this->FirstTile );
  WidgetSetPushButtonConfig__ReInit( &_this->TransparentButton );
  WidgetSetPushButton__ReInit( &_this->FourthTile );
  WidgetSetPushButton__ReInit( &_this->ThirdTile );
  WidgetSetPushButton__ReInit( &_this->SecondTile );
  WidgetSetPushButton__ReInit( &_this->FifthTile );
  WidgetSetPushButton__ReInit( &_this->NinthTile );
  WidgetSetPushButton__ReInit( &_this->ThirteenthTile );
  WidgetSetPushButton__ReInit( &_this->SixthTile );
  WidgetSetPushButton__ReInit( &_this->SeventhTile );
  WidgetSetPushButton__ReInit( &_this->EighthTile );
  WidgetSetPushButton__ReInit( &_this->TenthTile );
  WidgetSetPushButton__ReInit( &_this->EleventhTile );
  WidgetSetPushButton__ReInit( &_this->TwelfthTile );
  WidgetSetPushButton__ReInit( &_this->FourteenthTile );
  WidgetSetPushButton__ReInit( &_this->FifteenthTile );
  WidgetSetPushButton__ReInit( &_this->SixteenthTile );
  ViewsText__ReInit( &_this->GuessedText );
  CoreTimer__ReInit( &_this->RevealTilesTimer );
  CoreTimer__ReInit( &_this->RevealPictureTimer );
  ViewsImage__ReInit( &_this->Solution );
  CoreTimer__ReInit( &_this->RevealGuessedTextTimer );
  ViewsFilterImage__ReInit( &_this->FilterKeyboard );
  EffectsColorEffect__ReInit( &_this->GuessedTextPulse );
  CoreTimer__ReInit( &_this->RevealFilterTimer );
  EffectsColorEffect__ReInit( &_this->FilterEffect );
  CoreTimer__ReInit( &_this->DisableEffectTimer );
  WidgetSetPushButtonConfig__ReInit( &_this->MenuButtonConfig );
  WidgetSetPushButton__ReInit( &_this->MenuButton );
}

/* Finalizer method for the class 'Application::TilesPuzzle' */
void ApplicationTilesPuzzle__Done( ApplicationTilesPuzzle _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Image );
  WidgetSetPushButton__Done( &_this->FirstTile );
  WidgetSetPushButtonConfig__Done( &_this->TransparentButton );
  WidgetSetPushButton__Done( &_this->FourthTile );
  WidgetSetPushButton__Done( &_this->ThirdTile );
  WidgetSetPushButton__Done( &_this->SecondTile );
  WidgetSetPushButton__Done( &_this->FifthTile );
  WidgetSetPushButton__Done( &_this->NinthTile );
  WidgetSetPushButton__Done( &_this->ThirteenthTile );
  WidgetSetPushButton__Done( &_this->SixthTile );
  WidgetSetPushButton__Done( &_this->SeventhTile );
  WidgetSetPushButton__Done( &_this->EighthTile );
  WidgetSetPushButton__Done( &_this->TenthTile );
  WidgetSetPushButton__Done( &_this->EleventhTile );
  WidgetSetPushButton__Done( &_this->TwelfthTile );
  WidgetSetPushButton__Done( &_this->FourteenthTile );
  WidgetSetPushButton__Done( &_this->FifteenthTile );
  WidgetSetPushButton__Done( &_this->SixteenthTile );
  ViewsText__Done( &_this->GuessedText );
  CoreTimer__Done( &_this->RevealTilesTimer );
  CoreTimer__Done( &_this->RevealPictureTimer );
  ViewsImage__Done( &_this->Solution );
  CoreTimer__Done( &_this->RevealGuessedTextTimer );
  ViewsFilterImage__Done( &_this->FilterKeyboard );
  EffectsColorEffect__Done( &_this->GuessedTextPulse );
  CoreTimer__Done( &_this->RevealFilterTimer );
  EffectsColorEffect__Done( &_this->FilterEffect );
  CoreTimer__Done( &_this->DisableEffectTimer );
  WidgetSetPushButtonConfig__Done( &_this->MenuButtonConfig );
  WidgetSetPushButton__Done( &_this->MenuButton );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::TilesPuzzle.FirstTileMovement()' */
void ApplicationTilesPuzzle_FirstTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SecondPos == 0 )
  {
    _this->SecondPos = _this->FirstPos;
    _this->FirstPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SecondTile, _this->FirstTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FirstTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->FifthPos == 0 )
  {
    _this->FifthPos = _this->FirstPos;
    _this->FirstPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FifthTile, _this->FirstTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FirstTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.SecondTileMovement()' */
void ApplicationTilesPuzzle_SecondTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FirstPos == 0 )
  {
    _this->FirstPos = _this->SecondPos;
    _this->SecondPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FirstTile, _this->SecondTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SecondTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SixthPos == 0 )
  {
    _this->SixthPos = _this->SecondPos;
    _this->SecondPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, _this->SecondTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SecondTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->ThirdPos == 0 )
  {
    _this->ThirdPos = _this->SecondPos;
    _this->SecondPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, _this->SecondTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SecondTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.ThirdTileMovement()' */
void ApplicationTilesPuzzle_ThirdTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SecondPos == 0 )
  {
    _this->SecondPos = _this->ThirdPos;
    _this->ThirdPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SecondTile, _this->ThirdTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SeventhPos == 0 )
  {
    _this->SeventhPos = _this->ThirdPos;
    _this->ThirdPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, _this->ThirdTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->FourthPos == 0 )
  {
    _this->FourthPos = _this->ThirdPos;
    _this->ThirdPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FourthTile, _this->ThirdTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.FourthTileMovement()' */
void ApplicationTilesPuzzle_FourthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->ThirdPos == 0 )
  {
    _this->ThirdPos = _this->FourthPos;
    _this->FourthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, _this->FourthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FourthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EighthPos == 0 )
  {
    _this->EighthPos = _this->FourthPos;
    _this->FourthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EighthTile, _this->FourthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FourthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.FifthTileMovement()' */
void ApplicationTilesPuzzle_FifthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FirstPos == 0 )
  {
    _this->FirstPos = _this->FifthPos;
    _this->FifthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FirstTile, _this->FifthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FifthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SixthPos == 0 )
  {
    _this->SixthPos = _this->FifthPos;
    _this->FifthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, _this->FifthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FifthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->NinthPos == 0 )
  {
    _this->NinthPos = _this->FifthPos;
    _this->FifthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->NinthTile, _this->FifthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FifthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.SixthTileMovement()' */
void ApplicationTilesPuzzle_SixthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SecondPos == 0 )
  {
    _this->SecondPos = _this->SixthPos;
    _this->SixthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SecondTile, _this->SixthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->FifthPos == 0 )
  {
    _this->FifthPos = _this->SixthPos;
    _this->SixthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FifthTile, _this->SixthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SeventhPos == 0 )
  {
    _this->SeventhPos = _this->SixthPos;
    _this->SixthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, _this->SixthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->TenthPos == 0 )
  {
    _this->TenthPos = _this->SixthPos;
    _this->SixthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, _this->SixthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.SeventhTileMovement()' */
void ApplicationTilesPuzzle_SeventhTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->ThirdPos == 0 )
  {
    _this->ThirdPos = _this->SeventhPos;
    _this->SeventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->ThirdTile, _this->SeventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SixthPos == 0 )
  {
    _this->SixthPos = _this->SeventhPos;
    _this->SeventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, _this->SeventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EighthPos == 0 )
  {
    _this->EighthPos = _this->SeventhPos;
    _this->SeventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EighthTile, _this->SeventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EleventhPos == 0 )
  {
    _this->EleventhPos = _this->SeventhPos;
    _this->SeventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, _this->SeventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.EighthTileMovement()' */
void ApplicationTilesPuzzle_EighthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->TwelfthPos == 0 )
  {
    _this->TwelfthPos = _this->EighthPos;
    _this->EighthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, _this->EighthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EighthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SeventhPos == 0 )
  {
    _this->SeventhPos = _this->EighthPos;
    _this->EighthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, _this->EighthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EighthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->FourthPos == 0 )
  {
    _this->FourthPos = _this->EighthPos;
    _this->EighthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FourthTile, _this->EighthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EighthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.NinthTileMovement()' */
void ApplicationTilesPuzzle_NinthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FifthPos == 0 )
  {
    _this->FifthPos = _this->NinthPos;
    _this->NinthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FifthTile, _this->NinthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->NinthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->TenthPos == 0 )
  {
    _this->TenthPos = _this->NinthPos;
    _this->NinthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, _this->NinthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->NinthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->ThirteenthPos == 0 )
  {
    _this->ThirteenthPos = _this->NinthPos;
    _this->NinthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->ThirteenthTile, _this->NinthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->NinthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.TenthTileMovement()' */
void ApplicationTilesPuzzle_TenthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SixthPos == 0 )
  {
    _this->SixthPos = _this->TenthPos;
    _this->TenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SixthTile, _this->TenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->NinthPos == 0 )
  {
    _this->NinthPos = _this->TenthPos;
    _this->TenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->NinthTile, _this->TenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EleventhPos == 0 )
  {
    _this->EleventhPos = _this->TenthPos;
    _this->TenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, _this->TenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->FourteenthPos == 0 )
  {
    _this->FourteenthPos = _this->TenthPos;
    _this->TenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, _this->TenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.EleventhTileMovement()' */
void ApplicationTilesPuzzle_EleventhTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FifteenthPos == 0 )
  {
    _this->FifteenthPos = _this->EleventhPos;
    _this->EleventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, _this->EleventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->TwelfthPos == 0 )
  {
    _this->TwelfthPos = _this->EleventhPos;
    _this->EleventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, _this->EleventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->TenthPos == 0 )
  {
    _this->TenthPos = _this->EleventhPos;
    _this->EleventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, _this->EleventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->SeventhPos == 0 )
  {
    _this->SeventhPos = _this->EleventhPos;
    _this->EleventhPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SeventhTile, _this->EleventhTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.TwelfthTileMovement()' */
void ApplicationTilesPuzzle_TwelfthTileMovement( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SixteenthPos == 0 )
  {
    _this->SixteenthPos = _this->TwelfthPos;
    _this->TwelfthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SixteenthTile, _this->TwelfthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EighthPos == 0 )
  {
    _this->EighthPos = _this->TwelfthPos;
    _this->TwelfthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EighthTile, _this->TwelfthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EleventhPos == 0 )
  {
    _this->EleventhPos = _this->TwelfthPos;
    _this->TwelfthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, _this->TwelfthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.ThirteenthTileMovement()' */
void ApplicationTilesPuzzle_ThirteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FourteenthPos == 0 )
  {
    _this->FourteenthPos = _this->ThirteenthPos;
    _this->ThirteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, _this->ThirteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->ThirteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->NinthPos == 0 )
  {
    _this->NinthPos = _this->ThirteenthPos;
    _this->ThirteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->NinthTile, _this->ThirteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->ThirteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.FourteenthTileMovement()' */
void ApplicationTilesPuzzle_FourteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FifteenthPos == 0 )
  {
    _this->FifteenthPos = _this->FourteenthPos;
    _this->FourteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, _this->FourteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->TenthPos == 0 )
  {
    _this->TenthPos = _this->FourteenthPos;
    _this->FourteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TenthTile, _this->FourteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->ThirteenthPos == 0 )
  {
    _this->ThirteenthPos = _this->FourteenthPos;
    _this->FourteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->ThirteenthTile, _this->FourteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.FifteenthTileMovement()' */
void ApplicationTilesPuzzle_FifteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->SixteenthPos == 0 )
  {
    _this->SixteenthPos = _this->FifteenthPos;
    _this->FifteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->SixteenthTile, _this->FifteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->EleventhPos == 0 )
  {
    _this->EleventhPos = _this->FifteenthPos;
    _this->FifteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->EleventhTile, _this->FifteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->FourteenthPos == 0 )
  {
    _this->FourteenthPos = _this->FifteenthPos;
    _this->FifteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FourteenthTile, _this->FifteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.SixteenthTileMovement()' */
void ApplicationTilesPuzzle_SixteenthTileMovement( ApplicationTilesPuzzle _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if ( _this->FifteenthPos == 0 )
  {
    _this->FifteenthPos = _this->SixteenthPos;
    _this->SixteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->FifteenthTile, _this->SixteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SixteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  if ( _this->TwelfthPos == 0 )
  {
    _this->TwelfthPos = _this->SixteenthPos;
    _this->SixteenthPos = 0;
    WidgetSetPushButton_OnSetIcon( &_this->TwelfthTile, _this->SixteenthTile.Icon );
    WidgetSetPushButton_OnSetIcon( &_this->SixteenthTile, EwLoadResource( &ApplicationBackgroudGamingRoom, 
    ResourcesBitmap ));
  }

  sl = EwNewSlot( _this, ApplicationTilesPuzzle_FindSolution );
  EwSignal( sl, ((XObject)_this ));
}

/* 'C' function for method : 'Application::TilesPuzzle.FindSolution()' */
void ApplicationTilesPuzzle_FindSolution( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  if (((((((((((((((( _this->FirstPos == 1 ) && ( _this->SecondPos == 2 )) && ( 
      _this->ThirdPos == 3 )) && ( _this->FourthPos == 4 )) && ( _this->FifthPos 
      == 5 )) && ( _this->SixthPos == 6 )) && ( _this->SeventhPos == 7 )) && ( _this->EighthPos 
      == 8 )) && ( _this->NinthPos == 9 )) && ( _this->TenthPos == 10 )) && ( _this->EleventhPos 
      == 11 )) && ( _this->TwelfthPos == 12 )) && ( _this->ThirteenthPos == 13 )) 
      && ( _this->FourteenthPos == 14 )) && ( _this->FifteenthPos == 15 )) && ( 
      _this->SixteenthPos == 0 ))
    CoreTimer_OnSetEnabled( &_this->RevealTilesTimer, 1 );
}

/* 'C' function for method : 'Application::TilesPuzzle.RevealCompletedPicture()' */
void ApplicationTilesPuzzle_RevealCompletedPicture( ApplicationTilesPuzzle _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsImage_OnSetVisible( &_this->Solution, 1 );
  CoreTimer_OnSetEnabled( &_this->RevealGuessedTextTimer, 1 );
  CoreTimer_OnSetEnabled( &_this->RevealFilterTimer, 1 );
}

/* 'C' function for method : 'Application::TilesPuzzle.RevealAllTiles()' */
void ApplicationTilesPuzzle_RevealAllTiles( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  WidgetSetPushButton_OnSetIcon( &_this->SixteenthTile, EwLoadResource( &ApplicationSixteenthTile, 
  ResourcesBitmap ));
  CoreTimer_OnSetEnabled( &_this->RevealPictureTimer, 1 );
}

/* 'C' function for method : 'Application::TilesPuzzle.RevealGuessedText()' */
void ApplicationTilesPuzzle_RevealGuessedText( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  ViewsText_OnSetVisible( &_this->GuessedText, 1 );
}

/* 'C' function for method : 'Application::TilesPuzzle.RevealFilter()' */
void ApplicationTilesPuzzle_RevealFilter( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FilterEffect, 1 );
  ViewsFilterImage_OnSetVisible( &_this->FilterKeyboard, 1 );
  CoreTimer_OnSetEnabled( &_this->DisableEffectTimer, 1 );
}

/* 'C' function for method : 'Application::TilesPuzzle.DisableEffect()' */
void ApplicationTilesPuzzle_DisableEffect( ApplicationTilesPuzzle _this, XObject 
  sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FilterEffect, 0 );
}

/* 'C' function for method : 'Application::TilesPuzzle.OpenMenu()' */
void ApplicationTilesPuzzle_OpenMenu( ApplicationTilesPuzzle _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_PresentDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
  ApplicationGuessTheWordMenu, 0 )), ((EffectsTransition)EwGetAutoObject( &EffectsSlideDownCentered, 
  EffectsSlideTransition )), 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );
}

/* Variants derived from the class : 'Application::TilesPuzzle' */
EW_DEFINE_CLASS_VARIANTS( ApplicationTilesPuzzle )
EW_END_OF_CLASS_VARIANTS( ApplicationTilesPuzzle )

/* Virtual Method Table (VMT) for the class : 'Application::TilesPuzzle' */
EW_DEFINE_CLASS( ApplicationTilesPuzzle, CoreGroup, Image, FirstPos, FirstPos, FirstPos, 
                 FirstPos, FirstPos, "Application::TilesPuzzle" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_IsActiveDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationTilesPuzzle )

/* Include a file containing the bitmap resource : 'Application::Frame' */
#include "_ApplicationFrame.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Frame' */
EW_RES_WITHOUT_VARIANTS( ApplicationFrame )

/* Include a file containing the bitmap resource : 'Application::FirstTile' */
#include "_ApplicationFirstTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::FirstTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationFirstTile )

/* Include a file containing the bitmap resource : 'Application::SecondTile' */
#include "_ApplicationSecondTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::SecondTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationSecondTile )

/* Include a file containing the bitmap resource : 'Application::ThirthTile' */
#include "_ApplicationThirthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::ThirthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationThirthTile )

/* Include a file containing the bitmap resource : 'Application::ForthTile' */
#include "_ApplicationForthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::ForthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationForthTile )

/* Include a file containing the bitmap resource : 'Application::FifthTile' */
#include "_ApplicationFifthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::FifthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationFifthTile )

/* Include a file containing the bitmap resource : 'Application::TwelfthTile' */
#include "_ApplicationTwelfthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::TwelfthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationTwelfthTile )

/* Include a file containing the bitmap resource : 'Application::SixthTile' */
#include "_ApplicationSixthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::SixthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationSixthTile )

/* Include a file containing the bitmap resource : 'Application::SeventhTile' */
#include "_ApplicationSeventhTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::SeventhTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationSeventhTile )

/* Include a file containing the bitmap resource : 'Application::EighthTile' */
#include "_ApplicationEighthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::EighthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationEighthTile )

/* Include a file containing the bitmap resource : 'Application::NinthTile' */
#include "_ApplicationNinthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::NinthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationNinthTile )

/* Include a file containing the bitmap resource : 'Application::TenthTile' */
#include "_ApplicationTenthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::TenthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationTenthTile )

/* Include a file containing the bitmap resource : 'Application::EleventhTile' */
#include "_ApplicationEleventhTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::EleventhTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationEleventhTile )

/* Include a file containing the bitmap resource : 'Application::ThirteenTile' */
#include "_ApplicationThirteenTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::ThirteenTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationThirteenTile )

/* Include a file containing the bitmap resource : 'Application::ForteenthTile' */
#include "_ApplicationForteenthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::ForteenthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationForteenthTile )

/* Include a file containing the bitmap resource : 'Application::FifteenthTile' */
#include "_ApplicationFifteenthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::FifteenthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationFifteenthTile )

/* Include a file containing the bitmap resource : 'Application::SixteenthTile' */
#include "_ApplicationSixteenthTile.h"

/* Table with links to derived variants of the bitmap resource : 'Application::SixteenthTile' */
EW_RES_WITHOUT_VARIANTS( ApplicationSixteenthTile )

/* Include a file containing the bitmap resource : 'Application::Arrow' */
#include "_ApplicationArrow.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Arrow' */
EW_RES_WITHOUT_VARIANTS( ApplicationArrow )

/* Include a file containing the bitmap resource : 'Application::Medusa' */
#include "_ApplicationMedusa.h"

/* Table with links to derived variants of the bitmap resource : 'Application::Medusa' */
EW_RES_WITHOUT_VARIANTS( ApplicationMedusa )

/* Initializer for the class 'Application::Menu' */
void ApplicationMenu__Init( ApplicationMenu _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  CoreGroup__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationMenu );

  /* ... then construct all embedded objects */
  ViewsImage__Init( &_this->Frame, &_this->_.XObject, 0 );
  ViewsFilterImage__Init( &_this->BlackFilter, &_this->_.XObject, 0 );
  ViewsFilterImage__Init( &_this->BlackFilterBackground, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationMenu );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const00A4 );
  CoreView_OnSetStackingPriority((CoreView)&_this->Frame, 8 );
  CoreRectView__OnSetBounds( &_this->Frame, _Const00A5 );
  CoreView_OnSetStackingPriority((CoreView)&_this->BlackFilter, 9 );
  CoreRectView__OnSetBounds( &_this->BlackFilter, _Const00A6 );
  ViewsFilterImage_OnSetTintColor( &_this->BlackFilter, ApplicationBlack );
  ViewsFilterImage_OnSetTintIntensity( &_this->BlackFilter, 5.0f );
  ViewsFilterImage_OnSetTintMode( &_this->BlackFilter, GraphicsTintModeTintByOpacity );
  ViewsFilterImage_OnSetOpacity( &_this->BlackFilter, 140 );
  ViewsFilterImage_OnSetVisible( &_this->BlackFilter, 1 );
  CoreView_OnSetStackingPriority((CoreView)&_this->BlackFilterBackground, 7 );
  CoreRectView__OnSetBounds( &_this->BlackFilterBackground, _Const00A7 );
  ViewsFilterImage_OnSetTintColor( &_this->BlackFilterBackground, ApplicationBlack );
  ViewsFilterImage_OnSetTintIntensity( &_this->BlackFilterBackground, 5.0f );
  ViewsFilterImage_OnSetTintMode( &_this->BlackFilterBackground, GraphicsTintModeTintByOpacity );
  ViewsFilterImage_OnSetOpacity( &_this->BlackFilterBackground, 100 );
  ViewsFilterImage_OnSetVisible( &_this->BlackFilterBackground, 1 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Frame ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BlackFilter ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->BlackFilterBackground ), 0 );
  ViewsImage_OnSetBitmap( &_this->Frame, EwLoadResource( &ApplicationMenuFrame, 
  ResourcesBitmap ));
  ViewsFilterImage_OnSetBitmap( &_this->BlackFilter, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
  ViewsFilterImage_OnSetBitmap( &_this->BlackFilterBackground, EwLoadResource( &ApplicationBackgroudGamingRoom, 
  ResourcesBitmap ));
}

/* Re-Initializer for the class 'Application::Menu' */
void ApplicationMenu__ReInit( ApplicationMenu _this )
{
  /* At first re-initialize the super class ... */
  CoreGroup__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  ViewsImage__ReInit( &_this->Frame );
  ViewsFilterImage__ReInit( &_this->BlackFilter );
  ViewsFilterImage__ReInit( &_this->BlackFilterBackground );
}

/* Finalizer method for the class 'Application::Menu' */
void ApplicationMenu__Done( ApplicationMenu _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( CoreGroup );

  /* Finalize all embedded objects */
  ViewsImage__Done( &_this->Frame );
  ViewsFilterImage__Done( &_this->BlackFilter );
  ViewsFilterImage__Done( &_this->BlackFilterBackground );

  /* Don't forget to deinitialize the super class ... */
  CoreGroup__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::Menu.CloseMenu()' */
void ApplicationMenu_CloseMenu( ApplicationMenu _this, XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  EwTrace( "%s%*", EwLoadString( &_Const00A8 ), CoreGroup_FindCurrentDialog((CoreGroup)_this )->Super2.Owner );
  CoreGroup_DismissDialog( _this->Super3.Owner, CoreGroup_FindCurrentDialog((CoreGroup)_this ), 
  0, 0, 0, EwNullSlot, EwNullSlot, 0 );
}

/* Variants derived from the class : 'Application::Menu' */
EW_DEFINE_CLASS_VARIANTS( ApplicationMenu )
EW_END_OF_CLASS_VARIANTS( ApplicationMenu )

/* Virtual Method Table (VMT) for the class : 'Application::Menu' */
EW_DEFINE_CLASS( ApplicationMenu, CoreGroup, Frame, _.VMT, _.VMT, _.VMT, _.VMT, 
                 _.VMT, "Application::Menu" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_IsActiveDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationMenu )

/* Initializer for the class 'Application::GuessTheWordMenu' */
void ApplicationGuessTheWordMenu__Init( ApplicationGuessTheWordMenu _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  ApplicationMenu__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationGuessTheWordMenu );

  /* ... then construct all embedded objects */
  WidgetSetPushButtonConfig__Init( &_this->ButtonConfig, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->Game, &_this->_.XObject, 0 );
  WidgetSetPushButton__Init( &_this->GameRoom, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->ButtonsTimer, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->SecondPulseColorTimer, &_this->_.XObject, 0 );
  CoreTimer__Init( &_this->StopPulseColorTImer, &_this->_.XObject, 0 );
  EffectsColorEffect__Init( &_this->FilterEffect, &_this->_.XObject, 0 );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationGuessTheWordMenu );

  /* ... and initialize objects, variables, properties, etc. */
  CoreRectView__OnSetBounds( _this, _Const00A9 );
  CoreRectView__OnSetBounds( &_this->Super1.Frame, _Const00AA );
  CoreRectView__OnSetBounds( &_this->Super1.BlackFilter, _Const00AB );
  CoreRectView__OnSetBounds( &_this->Super1.BlackFilterBackground, _Const00AC );
  WidgetSetPushButtonConfig_OnSetLabelColorActive( &_this->ButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetLabelColorFocused( &_this->ButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetLabelColorDisabled( &_this->ButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetLabelColorDefault( &_this->ButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetIconTintActive( &_this->ButtonConfig, ApplicationVibrantOrange );
  WidgetSetPushButtonConfig_OnSetIconTintFocused( &_this->ButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetIconTintDisabled( &_this->ButtonConfig, ApplicationBlack );
  WidgetSetPushButtonConfig_OnSetIconTintDefault( &_this->ButtonConfig, ApplicationBlack );
  CoreView_OnSetStackingPriority((CoreView)&_this->Game, 8 );
  CoreRectView__OnSetBounds( &_this->Game, _Const00AD );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Game, 0 );
  WidgetSetPushButton_OnSetLabel( &_this->Game, EwLoadString( &_Const00AE ));
  CoreView_OnSetStackingPriority((CoreView)&_this->GameRoom, 9 );
  CoreRectView__OnSetBounds( &_this->GameRoom, _Const00AF );
  CoreGroup_OnSetVisible((CoreGroup)&_this->GameRoom, 0 );
  WidgetSetPushButton_OnSetLabel( &_this->GameRoom, EwLoadString( &_Const00B0 ));
  CoreTimer_OnSetPeriod( &_this->ButtonsTimer, 0 );
  CoreTimer_OnSetBegin( &_this->ButtonsTimer, 1000 );
  CoreTimer_OnSetPeriod( &_this->SecondPulseColorTimer, 0 );
  CoreTimer_OnSetBegin( &_this->SecondPulseColorTimer, 1000 );
  CoreTimer_OnSetPeriod( &_this->StopPulseColorTImer, 0 );
  CoreTimer_OnSetBegin( &_this->StopPulseColorTImer, 1000 );
  EffectsEffect_OnSetBounces((EffectsEffect)&_this->FilterEffect, 3 );
  EffectsEffect_OnSetOscillations((EffectsEffect)&_this->FilterEffect, 1 );
  EffectsEffect_OnSetTiming((EffectsEffect)&_this->FilterEffect, EffectsTimingCircle_Out );
  _this->FilterEffect.Value2 = _Const00A1;
  _this->FilterEffect.Value1 = ApplicationVibrantOrange;
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->Game ), 0 );
  CoreGroup_Add((CoreGroup)_this, ((CoreView)&_this->GameRoom ), 0 );
  WidgetSetPushButtonConfig_OnSetLabelFont( &_this->ButtonConfig, EwLoadResource( 
  &ApplicationWordGuessingGameSmallFont, ResourcesFont ));
  _this->Game.OnPress = EwNewSlot( _this, ApplicationGuessTheWordMenu_BackToGameSlot );
  WidgetSetPushButton_OnSetAppearance( &_this->Game, &_this->ButtonConfig );
  _this->GameRoom.OnPress = EwNewSlot( _this, ApplicationGuessTheWordMenu_BackToGameRoom );
  WidgetSetPushButton_OnSetAppearance( &_this->GameRoom, &_this->ButtonConfig );
  _this->ButtonsTimer.OnTrigger = EwNewSlot( _this, ApplicationGuessTheWordMenu_ShowButtons );
  _this->SecondPulseColorTimer.OnTrigger = EwNewSlot( _this, ApplicationGuessTheWordMenu_SecondPulseColor );
  _this->StopPulseColorTImer.OnTrigger = EwNewSlot( _this, ApplicationGuessTheWordMenu_StopPulseColor );
  _this->FilterEffect.Super1.OnAnimate = EwNullSlot;
  _this->FilterEffect.Outlet = EwNewRef( &_this->Super1.BlackFilter, ViewsFilterImage_OnGetTintColor, 
  ViewsFilterImage_OnSetTintColor );

  /* Call the user defined constructor */
  ApplicationGuessTheWordMenu_Init( _this, aArg );
}

/* Re-Initializer for the class 'Application::GuessTheWordMenu' */
void ApplicationGuessTheWordMenu__ReInit( ApplicationGuessTheWordMenu _this )
{
  /* At first re-initialize the super class ... */
  ApplicationMenu__ReInit( &_this->_.Super );

  /* ... then re-construct all embedded objects */
  WidgetSetPushButtonConfig__ReInit( &_this->ButtonConfig );
  WidgetSetPushButton__ReInit( &_this->Game );
  WidgetSetPushButton__ReInit( &_this->GameRoom );
  CoreTimer__ReInit( &_this->ButtonsTimer );
  CoreTimer__ReInit( &_this->SecondPulseColorTimer );
  CoreTimer__ReInit( &_this->StopPulseColorTImer );
  EffectsColorEffect__ReInit( &_this->FilterEffect );
}

/* Finalizer method for the class 'Application::GuessTheWordMenu' */
void ApplicationGuessTheWordMenu__Done( ApplicationGuessTheWordMenu _this )
{
  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( ApplicationMenu );

  /* Finalize all embedded objects */
  WidgetSetPushButtonConfig__Done( &_this->ButtonConfig );
  WidgetSetPushButton__Done( &_this->Game );
  WidgetSetPushButton__Done( &_this->GameRoom );
  CoreTimer__Done( &_this->ButtonsTimer );
  CoreTimer__Done( &_this->SecondPulseColorTimer );
  CoreTimer__Done( &_this->StopPulseColorTImer );
  EffectsColorEffect__Done( &_this->FilterEffect );

  /* Don't forget to deinitialize the super class ... */
  ApplicationMenu__Done( &_this->_.Super );
}

/* The method Init() is invoked automatically after the component has been created. 
   This method can be overridden and filled with logic containing additional initialization 
   statements. */
void ApplicationGuessTheWordMenu_Init( ApplicationGuessTheWordMenu _this, XHandle 
  aArg )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  CoreTimer_OnSetEnabled( &_this->ButtonsTimer, 1 );
}

/* 'C' function for method : 'Application::GuessTheWordMenu.BackToGameSlot()' */
void ApplicationGuessTheWordMenu_BackToGameSlot( ApplicationGuessTheWordMenu _this, 
  XObject sender )
{
  XSlot sl;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  sl = EwNewSlot( _this, ApplicationMenu_CloseMenu );
  EwSignal( sl, ((XObject)_this ));
  EwTrace( "%s%*", EwLoadString( &_Const00B1 ), CoreGroup_FindCurrentDialog((CoreGroup)_this ));
  CoreGroup_DismissDialog( _this->Super4.Owner, CoreGroup_FindCurrentDialog((CoreGroup)_this ), 
  0, 0, 0, EwNullSlot, EwNullSlot, 0 );
  EwTrace( "%s%*", EwLoadString( &_Const00B2 ), _this->Super4.Owner );
}

/* 'C' function for method : 'Application::GuessTheWordMenu.BackToGameRoom()' */
void ApplicationGuessTheWordMenu_BackToGameRoom( ApplicationGuessTheWordMenu _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_DismissDialog( _this->Super4.Owner, ((CoreGroup)_this ), 0, 0, 0, EwNullSlot, 
  EwNullSlot, 0 );
  CoreGroup_SwitchToDialog((CoreGroup)CoreView__GetRoot( _this ), ((CoreGroup)EwNewObject( 
  ApplicationApplication, 0 )), 0, 0, 0, 0, 0, 0, 0, EwNullSlot, EwNullSlot, 0 );
}

/* 'C' function for method : 'Application::GuessTheWordMenu.ShowButtons()' */
void ApplicationGuessTheWordMenu_ShowButtons( ApplicationGuessTheWordMenu _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  EffectsEffect_OnSetEnabled((EffectsEffect)&_this->FilterEffect, 1 );
  CoreGroup_OnSetVisible((CoreGroup)&_this->Game, 1 );
  CoreTimer_OnSetEnabled( &_this->SecondPulseColorTimer, 1 );
}

/* 'C' function for method : 'Application::GuessTheWordMenu.StopPulseColor()' */
void ApplicationGuessTheWordMenu_StopPulseColor( ApplicationGuessTheWordMenu _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  _this->FilterEffect.Outlet = EwNullRef;
}

/* 'C' function for method : 'Application::GuessTheWordMenu.SecondPulseColor()' */
void ApplicationGuessTheWordMenu_SecondPulseColor( ApplicationGuessTheWordMenu _this, 
  XObject sender )
{
  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( sender );

  CoreGroup_OnSetVisible((CoreGroup)&_this->GameRoom, 1 );
  CoreTimer_OnSetEnabled( &_this->StopPulseColorTImer, 1 );
}

/* Variants derived from the class : 'Application::GuessTheWordMenu' */
EW_DEFINE_CLASS_VARIANTS( ApplicationGuessTheWordMenu )
EW_END_OF_CLASS_VARIANTS( ApplicationGuessTheWordMenu )

/* Virtual Method Table (VMT) for the class : 'Application::GuessTheWordMenu' */
EW_DEFINE_CLASS( ApplicationGuessTheWordMenu, ApplicationMenu, ButtonConfig, _.VMT, 
                 _.VMT, _.VMT, _.VMT, _.VMT, "Application::GuessTheWordMenu" )
  CoreRectView_initLayoutContext,
  CoreView_GetRoot,
  CoreGroup_Draw,
  CoreGroup_GetClipping,
  CoreView_HandleEvent,
  CoreGroup_CursorHitTest,
  CoreGroup_AdjustDrawingArea,
  CoreRectView_ArrangeView,
  CoreRectView_MoveView,
  CoreRectView_GetExtent,
  CoreGroup_ChangeViewState,
  CoreGroup_OnSetBounds,
  CoreGroup_OnSetFocus,
  CoreGroup_OnSetOpacity,
  CoreGroup_IsActiveDialog,
  CoreGroup_DispatchEvent,
  CoreGroup_BroadcastEvent,
  CoreGroup_UpdateViewState,
  CoreGroup_InvalidateArea,
EW_END_OF_CLASS( ApplicationGuessTheWordMenu )

/* Include a file containing the bitmap resource : 'Application::MenuFrame' */
#include "_ApplicationMenuFrame.h"

/* Table with links to derived variants of the bitmap resource : 'Application::MenuFrame' */
EW_RES_WITHOUT_VARIANTS( ApplicationMenuFrame )

/* User defined constant: 'Application::DarkOrange' */
const XColor ApplicationDarkOrange = { 0xC6, 0x75, 0x28, 0xFF };

/* User defined constant: 'Application::VibrantOrange' */
const XColor ApplicationVibrantOrange = { 0xF3, 0xA5, 0x2B, 0xFF };

/* User defined constant: 'Application::LightOrange' */
const XColor ApplicationLightOrange = { 0xFF, 0xD1, 0x0D, 0xFF };

/* User defined constant: 'Application::Black' */
const XColor ApplicationBlack = { 0x00, 0x00, 0x00, 0xFF };

/* Include a file containing the bitmap resource : 'Application::open_menu' */
#include "_Applicationopen_menu.h"

/* Table with links to derived variants of the bitmap resource : 'Application::open_menu' */
EW_RES_WITHOUT_VARIANTS( Applicationopen_menu )

/* Include a file containing the font resource : 'Application::WordGuessingGameSmallFont' */
#include "_ApplicationWordGuessingGameSmallFont.h"

/* Table with links to derived variants of the font resource : 'Application::WordGuessingGameSmallFont' */
EW_RES_WITHOUT_VARIANTS( ApplicationWordGuessingGameSmallFont )

/* User defined inline code: 'Application::Inline' */
/*

  TO DO:

  Include external header files or add type and function declarations needed
  in the implementation of Application::DeviceClass. For example:

    #include "DeviceDriver.h"

    #include "your_middleware_api.h"

    void Your_Middleware_Some_Function( int aSomeArg );

*/

/* Initializer for the class 'Application::DeviceClass' */
void ApplicationDeviceClass__Init( ApplicationDeviceClass _this, XObject aLink, XHandle aArg )
{
  /* At first initialize the super class ... */
  TemplatesDeviceClass__Init( &_this->_.Super, aLink, aArg );

  /* Allow the Immediate Garbage Collection to evalute the members of this class. */
  _this->_.XObject._.GCT = EW_CLASS_GCT( ApplicationDeviceClass );

  /* Setup the VMT pointer */
  _this->_.VMT = EW_CLASS( ApplicationDeviceClass );

  /* Call the user defined constructor */
  ApplicationDeviceClass_Init( _this, aArg );
}

/* Re-Initializer for the class 'Application::DeviceClass' */
void ApplicationDeviceClass__ReInit( ApplicationDeviceClass _this )
{
  /* At first re-initialize the super class ... */
  TemplatesDeviceClass__ReInit( &_this->_.Super );
}

/* Finalizer method for the class 'Application::DeviceClass' */
void ApplicationDeviceClass__Done( ApplicationDeviceClass _this )
{
  /* Call the user defined destructor of the class */
  ApplicationDeviceClass_Done( _this );

  /* Finalize this class */
  _this->_.Super._.VMT = EW_CLASS( TemplatesDeviceClass );

  /* Don't forget to deinitialize the super class ... */
  TemplatesDeviceClass__Done( &_this->_.Super );
}

/* 'C' function for method : 'Application::DeviceClass.Done()' */
void ApplicationDeviceClass_Done( ApplicationDeviceClass _this )
{
  XObject thisObject = ((XObject)_this );

  {
    /*
       TO DO:

       Depending on your application case you call functions of the underlying
       middleware (or access the device directly) in order to perform the necessary
       de-initialization steps. For example, you invoke some 'C' function:

         YourDevice_DeInitialize();

       IMPORTANT:
       ----------

       The variable 'thisObject' represents the actually de-initialized instance of the
       Application::DeviceClass. If you have stored this object at the initialization
       time (in the 'Init' method) in some global C variable or registered it by the
       middleware, it is important to perform now the opposite operation. Set the
       global variable to NULL or de-register 'thisObject' object from the middleware.

    */
  }
}

/* 'C' function for method : 'Application::DeviceClass.Init()' */
void ApplicationDeviceClass_Init( ApplicationDeviceClass _this, XHandle aArg )
{
  XObject thisObject;

  /* Dummy expressions to avoid the 'C' warning 'unused argument'. */
  EW_UNUSED_ARG( aArg );

  thisObject = ((XObject)_this );
  {
    /*
       TO DO:

       Depending on your application case you call functions of the underlying
       middleware (or access the device directly) in order to perform the necessary
       initialization steps. For example, you invoke some 'C' function:

         YourDevice_Initialize();

       The variable 'thisObject' represents the actually initialized instance of the
       Application::DeviceClass. You can store this variable e.g. in the middleware
       and use it whenever the middleware needs to notify the GUI application about
       some state alternation or events. In this manner, the middleware will be able
       to invoke methods of the interface device object.

       For example, you can store 'thisObject' in some global C variable:

         // Declaration of the global C variable
         XObject theDeviceObject;

         // Store the instance in the global variable
         theDeviceObject = thisObject;

       Later use the global variable e.g. to provide the GUI application with events:

         ApplicationDeviceClass__TriggerSomeEvent( theDeviceObject );

       IMPORTANT:
       ----------

       If you store 'thisObject' for later use, don't forget to implement the opposite
       operation in the method 'Done'. Concrete, 'Done' should set the global variable
       again to the value NULL.

    */
  }
}

/* Variants derived from the class : 'Application::DeviceClass' */
EW_DEFINE_CLASS_VARIANTS( ApplicationDeviceClass )
EW_END_OF_CLASS_VARIANTS( ApplicationDeviceClass )

/* Virtual Method Table (VMT) for the class : 'Application::DeviceClass' */
EW_DEFINE_CLASS( ApplicationDeviceClass, TemplatesDeviceClass, _.VMT, _.VMT, _.VMT, 
                 _.VMT, _.VMT, _.VMT, "Application::DeviceClass" )
EW_END_OF_CLASS( ApplicationDeviceClass )

/* User defined auto object: 'Application::Device' */
EW_DEFINE_AUTOOBJECT( ApplicationDevice, ApplicationDeviceClass )

/* Initializer for the auto object 'Application::Device' */
void ApplicationDevice__Init( ApplicationDeviceClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Re-Initializer for the auto object 'Application::Device' */
void ApplicationDevice__ReInit( ApplicationDeviceClass _this )
{
  EW_UNUSED_ARG( _this );
}

/* Table with links to derived variants of the auto object : 'Application::Device' */
EW_DEFINE_AUTOOBJECT_VARIANTS( ApplicationDevice )
EW_END_OF_AUTOOBJECT_VARIANTS( ApplicationDevice )

/* User defined inline code: 'Application::Inline1' */
// Create an audio player element
var audioPlayer = new Audio("path/to/your/audio/file.mp3");

// Function to play the audio clip
function playAudioClip() {
    audioPlayer.play();
}

// Assuming you have a button in your Embedded Wizard project
var playButton = document.getElementById("playButton");
playButton.addEventListener("click", playAudioClip);

// Optional: If you have a video element and want to sync audio with video playback
var videoPlayer = document.getElementById("videoPlayer");
videoPlayer.addEventListener("play", function() {
    audioPlayer.play();
});
videoPlayer.addEventListener("pause", function() {
    audioPlayer.pause();
});
videoPlayer.addEventListener("ended", function() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
});


/* Embedded Wizard */
