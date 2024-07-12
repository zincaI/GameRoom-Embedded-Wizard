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

#ifndef Views_H
#define Views_H

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

#include "_ViewsRectangle.h"
#include "_ViewsText.h"

/* The definition Views::Orientation determines the possible options to control 
   the orientation of the content displayed in the Views::Image, Views::Group and 
   Views::Text views. Depending on the selected option the view displays the content 
   rotated. */
typedef XEnum ViewsOrientation;

#define ViewsOrientationNormal                              0
#define ViewsOrientationRotated_90                          1
#define ViewsOrientationRotated_180                         2
#define ViewsOrientationRotated_270                         3

#ifdef __cplusplus
  }
#endif

#endif /* Views_H */

/* Embedded Wizard */
