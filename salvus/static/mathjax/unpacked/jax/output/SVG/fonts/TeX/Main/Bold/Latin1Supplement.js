/*************************************************************
 *
 *  MathJax/jax/output/SVG/fonts/TeX/svg/Main/Bold/Latin1Supplement.js
 *
 *  Copyright (c) 2011-2014 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 *
 */

MathJax.Hub.Insert(
  MathJax.OutputJax.SVG.FONTDATA.FONTS['MathJax_Main-bold'],
  {
    // DIAERESIS
    0xA8: [695,-535,575,96,478,'96 615Q96 650 120 672T178 695Q214 693 234 669T255 615Q255 583 232 559T176 535Q147 535 122 556T96 615ZM319 615Q319 651 343 673T399 695Q426 695 452 675T478 615Q478 578 454 557T395 535Q364 537 342 559T319 615'],

    // NOT SIGN
    0xAC: [371,-61,767,64,703,'680 371Q683 369 688 366T695 361T698 356T701 346T701 332T702 308V216Q702 196 702 168T703 130Q703 90 697 76T671 61Q650 61 643 81Q641 86 641 198V310H364L87 311Q64 319 64 341Q64 362 84 369Q89 371 385 371H680'],

    // MACRON
    0xAF: [607,-540,575,80,494,'80 540V607H494V540H80'],

    // DEGREE SIGN
    0xB0: [702,-535,575,160,414,'160 618Q160 653 193 677T279 702H284Q381 702 407 647Q414 634 414 618Q414 607 410 596T395 570T355 546T287 536T220 545T181 568T165 594T160 618ZM352 618Q352 645 341 652T301 659H292Q286 659 278 659T268 660Q247 660 236 653T224 638T222 619Q222 591 234 585T287 578Q315 578 326 580T345 590T352 618'],

    // PLUS-MINUS SIGN
    0xB1: [728,35,894,64,829,'64 328T64 346T87 377H416V542L417 707Q431 728 443 728Q467 728 475 709Q477 704 477 540V377H807Q808 376 811 374T817 370T823 365T827 358T829 347Q829 326 807 317L642 316H477V25H807Q808 24 811 22T817 18T823 13T827 6T829 -5Q829 -26 807 -35H87Q64 -24 64 -6T87 25H416V316H251L87 317Q64 328 64 346'],

    // ACUTE ACCENT
    0xB4: [706,-503,575,236,460,'391 706Q419 706 439 683T460 634Q460 608 441 593T366 550Q356 545 351 543L275 503L256 527Q236 552 237 553Q242 558 292 620Q299 629 309 641T324 659T336 673T346 685T354 693T363 699T371 703T380 705T391 706'],

    // MULTIPLICATION SIGN
    0xD7: [530,28,894,168,726,'168 500Q168 515 178 522T195 530H198Q207 530 218 521T282 458Q312 428 331 409L447 294L563 409Q674 520 682 525Q687 529 695 529Q711 529 718 520T726 499V498Q726 489 720 481T666 427Q631 392 606 367L490 251L606 135Q717 23 721 17T726 2Q726 -9 719 -18T695 -28H692Q685 -28 674 -18T608 47Q581 74 563 92L447 207L331 91Q217 -22 208 -27Q206 -28 203 -28H197Q168 -28 168 2Q168 13 178 24T288 135L404 250L288 366Q177 479 173 485T168 500'],

    // DIVISION SIGN
    0xF7: [597,96,894,64,828,'344 495Q344 535 372 566T447 597Q490 597 519 566T548 495Q548 452 518 423T446 393Q404 393 374 423T344 495ZM87 221Q64 230 64 251T84 279Q89 281 448 281H806Q807 280 810 278T816 274T822 269T826 262T828 251Q828 230 806 221H87ZM344 -36T344 6T373 78T446 108Q487 108 517 79T548 6Q548 -35 519 -65T446 -96Q406 -96 375 -66']
  }
);

MathJax.Ajax.loadComplete(MathJax.OutputJax.SVG.fontDir+"/Main/Bold/Latin1Supplement.js");
