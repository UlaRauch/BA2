/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 729.0, "series": [{"data": [[0.0, 26.0], [0.1, 26.0], [0.2, 29.0], [0.3, 29.0], [0.4, 30.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 31.0], [0.9, 31.0], [1.0, 31.0], [1.1, 32.0], [1.2, 32.0], [1.3, 32.0], [1.4, 32.0], [1.5, 35.0], [1.6, 35.0], [1.7, 36.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 38.0], [2.3, 38.0], [2.4, 38.0], [2.5, 38.0], [2.6, 39.0], [2.7, 39.0], [2.8, 40.0], [2.9, 40.0], [3.0, 40.0], [3.1, 41.0], [3.2, 41.0], [3.3, 42.0], [3.4, 42.0], [3.5, 42.0], [3.6, 42.0], [3.7, 43.0], [3.8, 43.0], [3.9, 43.0], [4.0, 44.0], [4.1, 44.0], [4.2, 44.0], [4.3, 44.0], [4.4, 44.0], [4.5, 44.0], [4.6, 47.0], [4.7, 47.0], [4.8, 49.0], [4.9, 49.0], [5.0, 50.0], [5.1, 51.0], [5.2, 51.0], [5.3, 62.0], [5.4, 62.0], [5.5, 75.0], [5.6, 75.0], [5.7, 85.0], [5.8, 85.0], [5.9, 86.0], [6.0, 86.0], [6.1, 86.0], [6.2, 86.0], [6.3, 86.0], [6.4, 87.0], [6.5, 87.0], [6.6, 87.0], [6.7, 87.0], [6.8, 90.0], [6.9, 90.0], [7.0, 91.0], [7.1, 92.0], [7.2, 92.0], [7.3, 92.0], [7.4, 92.0], [7.5, 93.0], [7.6, 93.0], [7.7, 94.0], [7.8, 94.0], [7.9, 94.0], [8.0, 97.0], [8.1, 97.0], [8.2, 97.0], [8.3, 97.0], [8.4, 98.0], [8.5, 98.0], [8.6, 98.0], [8.7, 98.0], [8.8, 98.0], [8.9, 98.0], [9.0, 98.0], [9.1, 98.0], [9.2, 98.0], [9.3, 99.0], [9.4, 99.0], [9.5, 100.0], [9.6, 100.0], [9.7, 102.0], [9.8, 102.0], [9.9, 103.0], [10.0, 104.0], [10.1, 104.0], [10.2, 104.0], [10.3, 104.0], [10.4, 106.0], [10.5, 106.0], [10.6, 106.0], [10.7, 106.0], [10.8, 106.0], [10.9, 106.0], [11.0, 112.0], [11.1, 115.0], [11.2, 115.0], [11.3, 115.0], [11.4, 115.0], [11.5, 116.0], [11.6, 116.0], [11.7, 116.0], [11.8, 116.0], [11.9, 116.0], [12.0, 117.0], [12.1, 117.0], [12.2, 118.0], [12.3, 118.0], [12.4, 122.0], [12.5, 122.0], [12.6, 127.0], [12.7, 127.0], [12.8, 128.0], [12.9, 128.0], [13.0, 130.0], [13.1, 130.0], [13.2, 130.0], [13.3, 130.0], [13.4, 130.0], [13.5, 131.0], [13.6, 131.0], [13.7, 131.0], [13.8, 131.0], [13.9, 131.0], [14.0, 133.0], [14.1, 133.0], [14.2, 137.0], [14.3, 137.0], [14.4, 137.0], [14.5, 137.0], [14.6, 138.0], [14.7, 138.0], [14.8, 139.0], [14.9, 139.0], [15.0, 140.0], [15.1, 140.0], [15.2, 140.0], [15.3, 140.0], [15.4, 140.0], [15.5, 141.0], [15.6, 141.0], [15.7, 142.0], [15.8, 142.0], [15.9, 142.0], [16.0, 143.0], [16.1, 143.0], [16.2, 150.0], [16.3, 150.0], [16.4, 150.0], [16.5, 150.0], [16.6, 150.0], [16.7, 150.0], [16.8, 152.0], [16.9, 152.0], [17.0, 152.0], [17.1, 153.0], [17.2, 153.0], [17.3, 153.0], [17.4, 153.0], [17.5, 154.0], [17.6, 154.0], [17.7, 154.0], [17.8, 154.0], [17.9, 154.0], [18.0, 154.0], [18.1, 154.0], [18.2, 154.0], [18.3, 154.0], [18.4, 163.0], [18.5, 163.0], [18.6, 169.0], [18.7, 169.0], [18.8, 173.0], [18.9, 173.0], [19.0, 173.0], [19.1, 173.0], [19.2, 173.0], [19.3, 174.0], [19.4, 174.0], [19.5, 174.0], [19.6, 174.0], [19.7, 174.0], [19.8, 174.0], [19.9, 175.0], [20.0, 178.0], [20.1, 178.0], [20.2, 179.0], [20.3, 179.0], [20.4, 181.0], [20.5, 181.0], [20.6, 182.0], [20.7, 182.0], [20.8, 183.0], [20.9, 183.0], [21.0, 183.0], [21.1, 187.0], [21.2, 187.0], [21.3, 201.0], [21.4, 201.0], [21.5, 204.0], [21.6, 204.0], [21.7, 212.0], [21.8, 212.0], [21.9, 213.0], [22.0, 213.0], [22.1, 213.0], [22.2, 213.0], [22.3, 213.0], [22.4, 219.0], [22.5, 219.0], [22.6, 220.0], [22.7, 220.0], [22.8, 223.0], [22.9, 223.0], [23.0, 223.0], [23.1, 225.0], [23.2, 225.0], [23.3, 226.0], [23.4, 226.0], [23.5, 227.0], [23.6, 227.0], [23.7, 227.0], [23.8, 227.0], [23.9, 228.0], [24.0, 228.0], [24.1, 228.0], [24.2, 230.0], [24.3, 230.0], [24.4, 230.0], [24.5, 230.0], [24.6, 230.0], [24.7, 230.0], [24.8, 230.0], [24.9, 230.0], [25.0, 230.0], [25.1, 241.0], [25.2, 241.0], [25.3, 243.0], [25.4, 243.0], [25.5, 244.0], [25.6, 244.0], [25.7, 244.0], [25.8, 244.0], [25.9, 249.0], [26.0, 249.0], [26.1, 251.0], [26.2, 264.0], [26.3, 264.0], [26.4, 265.0], [26.5, 265.0], [26.6, 267.0], [26.7, 267.0], [26.8, 268.0], [26.9, 268.0], [27.0, 273.0], [27.1, 277.0], [27.2, 277.0], [27.3, 278.0], [27.4, 278.0], [27.5, 292.0], [27.6, 292.0], [27.7, 295.0], [27.8, 295.0], [27.9, 305.0], [28.0, 305.0], [28.1, 309.0], [28.2, 309.0], [28.3, 309.0], [28.4, 314.0], [28.5, 314.0], [28.6, 324.0], [28.7, 324.0], [28.8, 327.0], [28.9, 327.0], [29.0, 329.0], [29.1, 332.0], [29.2, 332.0], [29.3, 342.0], [29.4, 342.0], [29.5, 348.0], [29.6, 348.0], [29.7, 350.0], [29.8, 350.0], [29.9, 350.0], [30.0, 350.0], [30.1, 357.0], [30.2, 358.0], [30.3, 358.0], [30.4, 379.0], [30.5, 379.0], [30.6, 380.0], [30.7, 380.0], [30.8, 381.0], [30.9, 381.0], [31.0, 389.0], [31.1, 392.0], [31.2, 392.0], [31.3, 399.0], [31.4, 399.0], [31.5, 400.0], [31.6, 400.0], [31.7, 409.0], [31.8, 409.0], [31.9, 422.0], [32.0, 422.0], [32.1, 423.0], [32.2, 434.0], [32.3, 434.0], [32.4, 435.0], [32.5, 435.0], [32.6, 436.0], [32.7, 436.0], [32.8, 437.0], [32.9, 437.0], [33.0, 437.0], [33.1, 438.0], [33.2, 438.0], [33.3, 439.0], [33.4, 439.0], [33.5, 439.0], [33.6, 439.0], [33.7, 439.0], [33.8, 439.0], [33.9, 444.0], [34.0, 444.0], [34.1, 445.0], [34.2, 453.0], [34.3, 453.0], [34.4, 454.0], [34.5, 454.0], [34.6, 455.0], [34.7, 455.0], [34.8, 462.0], [34.9, 462.0], [35.0, 463.0], [35.1, 464.0], [35.2, 464.0], [35.3, 466.0], [35.4, 466.0], [35.5, 469.0], [35.6, 469.0], [35.7, 470.0], [35.8, 470.0], [35.9, 471.0], [36.0, 471.0], [36.1, 473.0], [36.2, 476.0], [36.3, 476.0], [36.4, 478.0], [36.5, 478.0], [36.6, 482.0], [36.7, 482.0], [36.8, 485.0], [36.9, 485.0], [37.0, 491.0], [37.1, 492.0], [37.2, 492.0], [37.3, 492.0], [37.4, 492.0], [37.5, 494.0], [37.6, 494.0], [37.7, 495.0], [37.8, 495.0], [37.9, 496.0], [38.0, 496.0], [38.1, 497.0], [38.2, 497.0], [38.3, 497.0], [38.4, 498.0], [38.5, 498.0], [38.6, 498.0], [38.7, 498.0], [38.8, 498.0], [38.9, 498.0], [39.0, 499.0], [39.1, 500.0], [39.2, 500.0], [39.3, 502.0], [39.4, 502.0], [39.5, 504.0], [39.6, 504.0], [39.7, 506.0], [39.8, 506.0], [39.9, 506.0], [40.0, 506.0], [40.1, 508.0], [40.2, 508.0], [40.3, 508.0], [40.4, 509.0], [40.5, 509.0], [40.6, 509.0], [40.7, 509.0], [40.8, 511.0], [40.9, 511.0], [41.0, 511.0], [41.1, 512.0], [41.2, 512.0], [41.3, 513.0], [41.4, 513.0], [41.5, 514.0], [41.6, 514.0], [41.7, 514.0], [41.8, 514.0], [41.9, 514.0], [42.0, 514.0], [42.1, 514.0], [42.2, 515.0], [42.3, 515.0], [42.4, 517.0], [42.5, 517.0], [42.6, 518.0], [42.7, 518.0], [42.8, 519.0], [42.9, 519.0], [43.0, 520.0], [43.1, 520.0], [43.2, 520.0], [43.3, 520.0], [43.4, 520.0], [43.5, 521.0], [43.6, 521.0], [43.7, 521.0], [43.8, 521.0], [43.9, 522.0], [44.0, 522.0], [44.1, 522.0], [44.2, 523.0], [44.3, 523.0], [44.4, 524.0], [44.5, 524.0], [44.6, 524.0], [44.7, 524.0], [44.8, 524.0], [44.9, 524.0], [45.0, 525.0], [45.1, 526.0], [45.2, 526.0], [45.3, 526.0], [45.4, 526.0], [45.5, 526.0], [45.6, 526.0], [45.7, 526.0], [45.8, 526.0], [45.9, 526.0], [46.0, 526.0], [46.1, 527.0], [46.2, 527.0], [46.3, 527.0], [46.4, 527.0], [46.5, 527.0], [46.6, 527.0], [46.7, 527.0], [46.8, 527.0], [46.9, 527.0], [47.0, 527.0], [47.1, 528.0], [47.2, 528.0], [47.3, 529.0], [47.4, 529.0], [47.5, 530.0], [47.6, 530.0], [47.7, 530.0], [47.8, 530.0], [47.9, 531.0], [48.0, 531.0], [48.1, 531.0], [48.2, 531.0], [48.3, 531.0], [48.4, 532.0], [48.5, 532.0], [48.6, 532.0], [48.7, 532.0], [48.8, 532.0], [48.9, 532.0], [49.0, 533.0], [49.1, 534.0], [49.2, 534.0], [49.3, 534.0], [49.4, 534.0], [49.5, 534.0], [49.6, 534.0], [49.7, 534.0], [49.8, 534.0], [49.9, 535.0], [50.0, 535.0], [50.1, 535.0], [50.2, 535.0], [50.3, 535.0], [50.4, 536.0], [50.5, 536.0], [50.6, 536.0], [50.7, 536.0], [50.8, 537.0], [50.9, 537.0], [51.0, 537.0], [51.1, 537.0], [51.2, 537.0], [51.3, 538.0], [51.4, 538.0], [51.5, 539.0], [51.6, 539.0], [51.7, 539.0], [51.8, 539.0], [51.9, 539.0], [52.0, 539.0], [52.1, 540.0], [52.2, 540.0], [52.3, 540.0], [52.4, 541.0], [52.5, 541.0], [52.6, 542.0], [52.7, 542.0], [52.8, 543.0], [52.9, 543.0], [53.0, 544.0], [53.1, 544.0], [53.2, 544.0], [53.3, 544.0], [53.4, 544.0], [53.5, 544.0], [53.6, 544.0], [53.7, 545.0], [53.8, 545.0], [53.9, 545.0], [54.0, 545.0], [54.1, 546.0], [54.2, 546.0], [54.3, 546.0], [54.4, 546.0], [54.5, 546.0], [54.6, 546.0], [54.7, 546.0], [54.8, 547.0], [54.9, 547.0], [55.0, 547.0], [55.1, 547.0], [55.2, 547.0], [55.3, 548.0], [55.4, 548.0], [55.5, 549.0], [55.6, 549.0], [55.7, 550.0], [55.8, 550.0], [55.9, 550.0], [56.0, 550.0], [56.1, 551.0], [56.2, 551.0], [56.3, 551.0], [56.4, 551.0], [56.5, 551.0], [56.6, 551.0], [56.7, 551.0], [56.8, 552.0], [56.9, 552.0], [57.0, 552.0], [57.1, 553.0], [57.2, 553.0], [57.3, 554.0], [57.4, 554.0], [57.5, 554.0], [57.6, 554.0], [57.7, 555.0], [57.8, 555.0], [57.9, 555.0], [58.0, 555.0], [58.1, 555.0], [58.2, 556.0], [58.3, 556.0], [58.4, 556.0], [58.5, 556.0], [58.6, 556.0], [58.7, 556.0], [58.8, 556.0], [58.9, 556.0], [59.0, 556.0], [59.1, 557.0], [59.2, 557.0], [59.3, 557.0], [59.4, 557.0], [59.5, 557.0], [59.6, 557.0], [59.7, 558.0], [59.8, 558.0], [59.9, 558.0], [60.0, 558.0], [60.1, 559.0], [60.2, 559.0], [60.3, 559.0], [60.4, 560.0], [60.5, 560.0], [60.6, 560.0], [60.7, 560.0], [60.8, 560.0], [60.9, 560.0], [61.0, 561.0], [61.1, 561.0], [61.2, 561.0], [61.3, 561.0], [61.4, 561.0], [61.5, 561.0], [61.6, 561.0], [61.7, 562.0], [61.8, 562.0], [61.9, 562.0], [62.0, 562.0], [62.1, 562.0], [62.2, 562.0], [62.3, 562.0], [62.4, 563.0], [62.5, 563.0], [62.6, 565.0], [62.7, 565.0], [62.8, 565.0], [62.9, 565.0], [63.0, 565.0], [63.1, 566.0], [63.2, 566.0], [63.3, 566.0], [63.4, 566.0], [63.5, 566.0], [63.6, 566.0], [63.7, 566.0], [63.8, 566.0], [63.9, 566.0], [64.0, 566.0], [64.1, 566.0], [64.2, 567.0], [64.3, 567.0], [64.4, 567.0], [64.5, 567.0], [64.6, 567.0], [64.7, 567.0], [64.8, 568.0], [64.9, 568.0], [65.0, 568.0], [65.1, 568.0], [65.2, 568.0], [65.3, 568.0], [65.4, 568.0], [65.5, 568.0], [65.6, 568.0], [65.7, 570.0], [65.8, 570.0], [65.9, 570.0], [66.0, 570.0], [66.1, 570.0], [66.2, 570.0], [66.3, 570.0], [66.4, 570.0], [66.5, 570.0], [66.6, 571.0], [66.7, 571.0], [66.8, 572.0], [66.9, 572.0], [67.0, 572.0], [67.1, 572.0], [67.2, 572.0], [67.3, 573.0], [67.4, 573.0], [67.5, 573.0], [67.6, 573.0], [67.7, 573.0], [67.8, 573.0], [67.9, 573.0], [68.0, 573.0], [68.1, 573.0], [68.2, 574.0], [68.3, 574.0], [68.4, 574.0], [68.5, 574.0], [68.6, 574.0], [68.7, 574.0], [68.8, 574.0], [68.9, 574.0], [69.0, 574.0], [69.1, 575.0], [69.2, 575.0], [69.3, 575.0], [69.4, 575.0], [69.5, 577.0], [69.6, 577.0], [69.7, 577.0], [69.8, 577.0], [69.9, 579.0], [70.0, 579.0], [70.1, 579.0], [70.2, 579.0], [70.3, 579.0], [70.4, 580.0], [70.5, 580.0], [70.6, 581.0], [70.7, 581.0], [70.8, 582.0], [70.9, 582.0], [71.0, 582.0], [71.1, 585.0], [71.2, 585.0], [71.3, 585.0], [71.4, 585.0], [71.5, 585.0], [71.6, 585.0], [71.7, 585.0], [71.8, 585.0], [71.9, 586.0], [72.0, 586.0], [72.1, 586.0], [72.2, 586.0], [72.3, 586.0], [72.4, 586.0], [72.5, 586.0], [72.6, 587.0], [72.7, 587.0], [72.8, 587.0], [72.9, 587.0], [73.0, 588.0], [73.1, 588.0], [73.2, 588.0], [73.3, 588.0], [73.4, 588.0], [73.5, 589.0], [73.6, 589.0], [73.7, 591.0], [73.8, 591.0], [73.9, 591.0], [74.0, 591.0], [74.1, 591.0], [74.2, 591.0], [74.3, 591.0], [74.4, 592.0], [74.5, 592.0], [74.6, 593.0], [74.7, 593.0], [74.8, 593.0], [74.9, 593.0], [75.0, 593.0], [75.1, 594.0], [75.2, 594.0], [75.3, 595.0], [75.4, 595.0], [75.5, 595.0], [75.6, 595.0], [75.7, 595.0], [75.8, 595.0], [75.9, 595.0], [76.0, 595.0], [76.1, 595.0], [76.2, 595.0], [76.3, 595.0], [76.4, 596.0], [76.5, 596.0], [76.6, 597.0], [76.7, 597.0], [76.8, 598.0], [76.9, 598.0], [77.0, 600.0], [77.1, 603.0], [77.2, 603.0], [77.3, 603.0], [77.4, 603.0], [77.5, 603.0], [77.6, 603.0], [77.7, 604.0], [77.8, 604.0], [77.9, 604.0], [78.0, 604.0], [78.1, 605.0], [78.2, 606.0], [78.3, 606.0], [78.4, 606.0], [78.5, 606.0], [78.6, 606.0], [78.7, 606.0], [78.8, 607.0], [78.9, 607.0], [79.0, 607.0], [79.1, 608.0], [79.2, 608.0], [79.3, 608.0], [79.4, 608.0], [79.5, 611.0], [79.6, 611.0], [79.7, 611.0], [79.8, 611.0], [79.9, 611.0], [80.0, 611.0], [80.1, 611.0], [80.2, 612.0], [80.3, 612.0], [80.4, 612.0], [80.5, 612.0], [80.6, 613.0], [80.7, 613.0], [80.8, 613.0], [80.9, 613.0], [81.0, 616.0], [81.1, 617.0], [81.2, 617.0], [81.3, 618.0], [81.4, 618.0], [81.5, 620.0], [81.6, 620.0], [81.7, 621.0], [81.8, 621.0], [81.9, 621.0], [82.0, 621.0], [82.1, 621.0], [82.2, 622.0], [82.3, 622.0], [82.4, 622.0], [82.5, 622.0], [82.6, 622.0], [82.7, 622.0], [82.8, 623.0], [82.9, 623.0], [83.0, 623.0], [83.1, 623.0], [83.2, 623.0], [83.3, 623.0], [83.4, 623.0], [83.5, 623.0], [83.6, 623.0], [83.7, 624.0], [83.8, 624.0], [83.9, 624.0], [84.0, 624.0], [84.1, 624.0], [84.2, 627.0], [84.3, 627.0], [84.4, 628.0], [84.5, 628.0], [84.6, 630.0], [84.7, 630.0], [84.8, 631.0], [84.9, 631.0], [85.0, 631.0], [85.1, 632.0], [85.2, 632.0], [85.3, 632.0], [85.4, 632.0], [85.5, 635.0], [85.6, 635.0], [85.7, 636.0], [85.8, 636.0], [85.9, 636.0], [86.0, 636.0], [86.1, 636.0], [86.2, 636.0], [86.3, 636.0], [86.4, 637.0], [86.5, 637.0], [86.6, 637.0], [86.7, 637.0], [86.8, 637.0], [86.9, 637.0], [87.0, 639.0], [87.1, 639.0], [87.2, 639.0], [87.3, 639.0], [87.4, 639.0], [87.5, 641.0], [87.6, 641.0], [87.7, 642.0], [87.8, 642.0], [87.9, 645.0], [88.0, 645.0], [88.1, 645.0], [88.2, 648.0], [88.3, 648.0], [88.4, 648.0], [88.5, 648.0], [88.6, 649.0], [88.7, 649.0], [88.8, 650.0], [88.9, 650.0], [89.0, 651.0], [89.1, 652.0], [89.2, 652.0], [89.3, 653.0], [89.4, 653.0], [89.5, 654.0], [89.6, 654.0], [89.7, 655.0], [89.8, 655.0], [89.9, 656.0], [90.0, 656.0], [90.1, 657.0], [90.2, 657.0], [90.3, 657.0], [90.4, 657.0], [90.5, 657.0], [90.6, 658.0], [90.7, 658.0], [90.8, 661.0], [90.9, 661.0], [91.0, 662.0], [91.1, 663.0], [91.2, 663.0], [91.3, 665.0], [91.4, 665.0], [91.5, 665.0], [91.6, 665.0], [91.7, 666.0], [91.8, 666.0], [91.9, 666.0], [92.0, 666.0], [92.1, 669.0], [92.2, 670.0], [92.3, 670.0], [92.4, 670.0], [92.5, 670.0], [92.6, 671.0], [92.7, 671.0], [92.8, 672.0], [92.9, 672.0], [93.0, 674.0], [93.1, 675.0], [93.2, 675.0], [93.3, 679.0], [93.4, 679.0], [93.5, 680.0], [93.6, 680.0], [93.7, 681.0], [93.8, 681.0], [93.9, 682.0], [94.0, 682.0], [94.1, 683.0], [94.2, 684.0], [94.3, 684.0], [94.4, 685.0], [94.5, 685.0], [94.6, 688.0], [94.7, 688.0], [94.8, 689.0], [94.9, 689.0], [95.0, 689.0], [95.1, 689.0], [95.2, 689.0], [95.3, 690.0], [95.4, 690.0], [95.5, 692.0], [95.6, 692.0], [95.7, 693.0], [95.8, 693.0], [95.9, 694.0], [96.0, 694.0], [96.1, 695.0], [96.2, 696.0], [96.3, 696.0], [96.4, 696.0], [96.5, 696.0], [96.6, 697.0], [96.7, 697.0], [96.8, 697.0], [96.9, 697.0], [97.0, 701.0], [97.1, 702.0], [97.2, 702.0], [97.3, 702.0], [97.4, 702.0], [97.5, 702.0], [97.6, 702.0], [97.7, 704.0], [97.8, 704.0], [97.9, 706.0], [98.0, 706.0], [98.1, 709.0], [98.2, 711.0], [98.3, 711.0], [98.4, 713.0], [98.5, 713.0], [98.6, 713.0], [98.7, 713.0], [98.8, 713.0], [98.9, 713.0], [99.0, 714.0], [99.1, 717.0], [99.2, 717.0], [99.3, 717.0], [99.4, 717.0], [99.5, 722.0], [99.6, 722.0], [99.7, 723.0], [99.8, 723.0], [99.9, 729.0], [100.0, 729.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 208.0, "series": [{"data": [[0.0, 52.0], [300.0, 20.0], [600.0, 110.0], [700.0, 17.0], [100.0, 65.0], [200.0, 36.0], [400.0, 42.0], [500.0, 208.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 27.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 334.0, "series": [{"data": [[0.0, 189.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 334.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 27.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 220.7345454545452, "minX": 1.6883028E12, "maxY": 220.7345454545452, "series": [{"data": [[1.6883028E12, 220.7345454545452]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 26.0, "minX": 1.0, "maxY": 717.0, "series": [{"data": [[2.0, 562.0], [4.0, 573.0], [5.0, 573.0], [7.0, 681.0], [9.0, 555.3333333333334], [11.0, 572.0], [12.0, 552.0], [14.0, 577.5], [16.0, 533.0], [17.0, 541.0], [18.0, 538.5], [20.0, 582.5], [21.0, 550.0], [22.0, 543.0], [24.0, 538.5], [25.0, 568.0], [26.0, 525.0], [27.0, 524.0], [28.0, 562.0], [29.0, 621.0], [31.0, 545.0], [33.0, 623.0], [32.0, 561.0], [36.0, 560.6666666666666], [39.0, 704.0], [41.0, 616.5], [40.0, 556.0], [43.0, 616.0], [45.0, 560.0], [44.0, 581.5], [48.0, 570.0], [51.0, 542.0], [50.0, 607.0], [53.0, 559.0], [52.0, 524.0], [54.0, 639.0], [57.0, 534.25], [59.0, 594.0], [58.0, 591.0], [61.0, 570.5], [63.0, 528.0], [67.0, 526.5], [65.0, 595.0], [64.0, 591.0], [71.0, 462.0], [70.0, 527.0], [69.0, 622.0], [68.0, 556.0], [73.0, 503.0], [79.0, 551.0], [78.0, 538.0], [77.0, 570.0], [76.0, 554.6666666666666], [83.0, 557.0], [82.0, 466.0], [81.0, 495.0], [80.0, 497.0], [87.0, 43.5], [85.0, 44.0], [86.0, 556.0], [84.0, 562.0], [91.0, 556.0], [90.0, 603.0], [89.0, 578.0], [95.0, 469.0], [94.0, 582.0], [93.0, 534.0], [99.0, 584.5], [97.0, 533.0], [103.0, 586.0], [101.0, 611.0], [107.0, 499.6666666666667], [105.0, 628.0], [111.0, 453.0], [110.0, 588.0], [108.0, 505.5], [114.0, 616.0], [113.0, 515.0], [112.0, 555.0], [119.0, 538.5], [117.0, 597.0], [116.0, 560.5], [120.0, 534.0], [127.0, 697.0], [126.0, 714.0], [124.0, 555.0], [134.0, 414.0], [132.0, 575.0], [130.0, 577.0], [128.0, 559.0], [143.0, 627.0], [141.0, 499.0], [140.0, 595.0], [138.0, 514.0], [136.0, 523.0], [151.0, 572.0], [150.0, 547.0], [149.0, 585.0], [148.0, 547.0], [147.0, 544.0], [145.0, 508.0], [144.0, 627.5], [156.0, 378.75], [154.0, 374.75], [159.0, 566.0], [152.0, 532.0], [167.0, 402.5], [166.0, 91.5], [164.0, 213.8], [162.0, 332.2], [161.0, 97.66666666666667], [165.0, 712.0], [160.0, 678.0], [168.0, 334.4], [169.0, 196.33333333333331], [175.0, 667.0], [174.0, 631.0], [172.0, 709.0], [171.0, 645.0], [170.0, 690.0], [180.0, 117.0], [177.0, 116.0], [178.0, 414.0], [183.0, 649.0], [181.0, 697.0], [179.0, 670.0], [176.0, 689.0], [191.0, 573.0], [190.0, 566.0], [189.0, 506.0], [188.0, 689.0], [185.0, 717.0], [184.0, 702.6666666666666], [199.0, 340.5], [198.0, 326.66666666666663], [197.0, 131.0], [196.0, 132.0], [194.0, 383.0], [195.0, 497.0], [193.0, 520.0], [202.0, 304.0], [201.0, 138.5], [204.0, 697.0], [203.0, 536.0], [200.0, 568.0], [208.0, 342.8], [209.0, 237.8], [214.0, 635.5], [213.0, 663.0], [212.0, 694.0], [210.0, 656.3333333333334], [222.0, 463.0], [221.0, 153.0], [220.0, 373.7142857142857], [219.0, 153.33333333333334], [218.0, 153.0], [217.0, 412.5], [223.0, 639.0], [230.0, 669.5], [229.0, 652.5], [226.0, 612.0], [225.0, 556.0], [224.0, 539.0], [239.0, 509.0], [238.0, 608.0], [237.0, 704.0], [236.0, 648.0], [234.0, 623.0], [232.0, 674.5], [247.0, 505.0], [245.0, 482.0], [243.0, 518.0], [242.0, 696.0], [240.0, 654.0], [255.0, 511.0], [253.0, 624.0], [252.0, 673.5], [250.0, 536.0], [249.0, 515.5], [270.0, 621.0], [259.0, 176.58333333333334], [266.0, 418.0], [264.0, 202.5], [271.0, 303.0], [269.0, 498.0], [268.0, 621.0], [267.0, 661.0], [261.0, 573.3333333333334], [257.0, 657.0], [256.0, 606.0], [258.0, 570.0], [284.0, 604.0], [286.0, 93.0], [272.0, 213.0], [274.0, 607.0], [273.0, 617.0], [287.0, 609.5], [285.0, 565.0], [283.0, 602.0], [280.0, 592.0], [278.0, 645.0], [277.0, 389.0], [276.0, 587.0], [291.0, 228.66666666666666], [292.0, 180.22222222222223], [293.0, 85.0], [294.0, 249.0], [295.0, 577.0], [290.0, 570.3333333333334], [303.0, 454.0], [300.0, 555.0], [299.0, 563.0], [298.0, 573.0], [297.0, 585.0], [317.0, 128.0], [307.0, 336.3333333333333], [305.0, 603.6666666666666], [309.0, 191.0], [310.0, 466.0], [311.0, 459.3333333333333], [312.0, 340.5], [314.0, 273.0], [313.0, 595.0], [315.0, 615.5], [318.0, 209.0], [319.0, 528.6666666666666], [316.0, 613.0], [333.0, 574.3333333333334], [335.0, 595.0], [325.0, 441.5], [324.0, 605.0], [328.0, 368.5], [334.0, 588.0], [330.0, 595.0], [329.0, 581.0], [327.0, 455.0], [323.0, 605.75], [326.0, 546.0], [349.0, 187.0], [345.0, 163.0], [343.0, 433.0], [346.0, 422.0], [351.0, 347.0], [350.0, 477.0], [348.0, 554.0], [338.0, 566.0], [337.0, 534.0], [344.0, 547.0], [342.0, 529.0], [341.0, 508.0], [340.0, 568.0], [364.0, 528.3333333333334], [366.0, 527.0], [367.0, 530.0], [365.0, 324.0], [362.0, 521.5], [360.0, 530.5], [357.0, 530.5], [353.0, 538.0], [355.0, 350.0], [354.0, 528.0], [380.0, 241.33333333333331], [370.0, 467.6666666666667], [368.0, 381.0], [371.0, 523.0], [379.0, 306.3333333333333], [383.0, 309.0], [382.0, 476.0], [381.0, 314.0], [377.0, 350.0], [376.0, 348.0], [375.0, 515.0], [373.0, 512.5], [399.0, 251.0], [391.0, 379.0], [384.0, 463.0], [386.0, 309.0], [385.0, 31.0], [394.0, 171.33333333333331], [396.0, 243.5], [397.0, 36.0], [395.0, 41.0], [393.0, 31.5], [392.0, 38.0], [390.0, 26.0], [389.0, 30.0], [388.0, 31.0], [403.0, 158.0], [413.0, 428.75], [412.0, 134.75], [414.0, 153.5], [408.0, 199.66666666666669], [415.0, 42.0], [405.0, 38.0], [404.0, 35.0], [402.0, 43.5], [400.0, 40.0], [419.0, 306.33333333333337], [417.0, 54.5], [1.0, 549.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[220.7363636363635, 446.1727272727272]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 419.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 3764.0833333333335, "minX": 1.6883028E12, "maxY": 13292.916666666666, "series": [{"data": [[1.6883028E12, 3764.0833333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883028E12, 13292.916666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 446.1727272727272, "minX": 1.6883028E12, "maxY": 446.1727272727272, "series": [{"data": [[1.6883028E12, 446.1727272727272]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 444.2618181818182, "minX": 1.6883028E12, "maxY": 444.2618181818182, "series": [{"data": [[1.6883028E12, 444.2618181818182]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 13.892727272727267, "minX": 1.6883028E12, "maxY": 13.892727272727267, "series": [{"data": [[1.6883028E12, 13.892727272727267]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 43.0, "minX": 1.6883028E12, "maxY": 729.0, "series": [{"data": [[1.6883028E12, 729.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883028E12, 43.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883028E12, 657.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883028E12, 716.28]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883028E12, 541.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883028E12, 689.8]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 38.0, "minX": 63.0, "maxY": 561.0, "series": [{"data": [[487.0, 531.5], [63.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[487.0, 38.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 487.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 0.0, "minX": 63.0, "maxY": 561.0, "series": [{"data": [[487.0, 531.5], [63.0, 561.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[487.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 487.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 9.166666666666666, "minX": 1.6883028E12, "maxY": 9.166666666666666, "series": [{"data": [[1.6883028E12, 9.166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.6883028E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6883028E12, 8.716666666666667]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6883028E12, 0.45]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.6883028E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6883028E12, 8.716666666666667]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}, {"data": [[1.6883028E12, 0.45]], "isOverall": false, "label": "gateway_rs/hellotea-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.45, "minX": 1.6883028E12, "maxY": 8.716666666666667, "series": [{"data": [[1.6883028E12, 8.716666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6883028E12, 0.45]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

