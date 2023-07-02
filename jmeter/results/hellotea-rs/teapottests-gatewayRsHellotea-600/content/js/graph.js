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
        data: {"result": {"minY": 22.0, "minX": 0.0, "maxY": 771.0, "series": [{"data": [[0.0, 22.0], [0.1, 22.0], [0.2, 22.0], [0.3, 22.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 30.0], [0.9, 30.0], [1.0, 31.0], [1.1, 31.0], [1.2, 37.0], [1.3, 37.0], [1.4, 41.0], [1.5, 41.0], [1.6, 43.0], [1.7, 44.0], [1.8, 44.0], [1.9, 45.0], [2.0, 45.0], [2.1, 49.0], [2.2, 49.0], [2.3, 49.0], [2.4, 50.0], [2.5, 50.0], [2.6, 50.0], [2.7, 50.0], [2.8, 50.0], [2.9, 51.0], [3.0, 51.0], [3.1, 51.0], [3.2, 52.0], [3.3, 52.0], [3.4, 52.0], [3.5, 52.0], [3.6, 52.0], [3.7, 53.0], [3.8, 53.0], [3.9, 53.0], [4.0, 53.0], [4.1, 53.0], [4.2, 54.0], [4.3, 54.0], [4.4, 54.0], [4.5, 54.0], [4.6, 54.0], [4.7, 55.0], [4.8, 55.0], [4.9, 55.0], [5.0, 55.0], [5.1, 55.0], [5.2, 56.0], [5.3, 56.0], [5.4, 57.0], [5.5, 57.0], [5.6, 58.0], [5.7, 58.0], [5.8, 58.0], [5.9, 59.0], [6.0, 59.0], [6.1, 59.0], [6.2, 62.0], [6.3, 62.0], [6.4, 63.0], [6.5, 63.0], [6.6, 63.0], [6.7, 63.0], [6.8, 63.0], [6.9, 65.0], [7.0, 65.0], [7.1, 65.0], [7.2, 65.0], [7.3, 65.0], [7.4, 66.0], [7.5, 66.0], [7.6, 66.0], [7.7, 68.0], [7.8, 68.0], [7.9, 69.0], [8.0, 69.0], [8.1, 69.0], [8.2, 69.0], [8.3, 69.0], [8.4, 71.0], [8.5, 71.0], [8.6, 71.0], [8.7, 71.0], [8.8, 71.0], [8.9, 72.0], [9.0, 72.0], [9.1, 74.0], [9.2, 74.0], [9.3, 74.0], [9.4, 74.0], [9.5, 74.0], [9.6, 75.0], [9.7, 76.0], [9.8, 76.0], [9.9, 76.0], [10.0, 76.0], [10.1, 77.0], [10.2, 77.0], [10.3, 77.0], [10.4, 77.0], [10.5, 77.0], [10.6, 79.0], [10.7, 79.0], [10.8, 79.0], [10.9, 79.0], [11.0, 79.0], [11.1, 82.0], [11.2, 83.0], [11.3, 83.0], [11.4, 84.0], [11.5, 84.0], [11.6, 84.0], [11.7, 84.0], [11.8, 84.0], [11.9, 84.0], [12.0, 85.0], [12.1, 85.0], [12.2, 85.0], [12.3, 85.0], [12.4, 86.0], [12.5, 87.0], [12.6, 87.0], [12.7, 87.0], [12.8, 87.0], [12.9, 88.0], [13.0, 88.0], [13.1, 88.0], [13.2, 89.0], [13.3, 89.0], [13.4, 90.0], [13.5, 90.0], [13.6, 90.0], [13.7, 90.0], [13.8, 90.0], [13.9, 91.0], [14.0, 91.0], [14.1, 91.0], [14.2, 92.0], [14.3, 92.0], [14.4, 92.0], [14.5, 92.0], [14.6, 92.0], [14.7, 92.0], [14.8, 92.0], [14.9, 93.0], [15.0, 96.0], [15.1, 96.0], [15.2, 97.0], [15.3, 97.0], [15.4, 97.0], [15.5, 98.0], [15.6, 98.0], [15.7, 102.0], [15.8, 102.0], [15.9, 102.0], [16.0, 104.0], [16.1, 104.0], [16.2, 108.0], [16.3, 108.0], [16.4, 117.0], [16.5, 117.0], [16.6, 121.0], [16.7, 126.0], [16.8, 126.0], [16.9, 127.0], [17.0, 127.0], [17.1, 127.0], [17.2, 128.0], [17.3, 128.0], [17.4, 128.0], [17.5, 128.0], [17.6, 128.0], [17.7, 128.0], [17.8, 128.0], [17.9, 129.0], [18.0, 129.0], [18.1, 129.0], [18.2, 137.0], [18.3, 137.0], [18.4, 141.0], [18.5, 141.0], [18.6, 156.0], [18.7, 157.0], [18.8, 157.0], [18.9, 158.0], [19.0, 158.0], [19.1, 161.0], [19.2, 166.0], [19.3, 166.0], [19.4, 169.0], [19.5, 169.0], [19.6, 171.0], [19.7, 172.0], [19.8, 172.0], [19.9, 173.0], [20.0, 173.0], [20.1, 173.0], [20.2, 175.0], [20.3, 175.0], [20.4, 175.0], [20.5, 175.0], [20.6, 176.0], [20.7, 177.0], [20.8, 177.0], [20.9, 180.0], [21.0, 180.0], [21.1, 182.0], [21.2, 182.0], [21.3, 182.0], [21.4, 183.0], [21.5, 183.0], [21.6, 183.0], [21.7, 185.0], [21.8, 185.0], [21.9, 186.0], [22.0, 186.0], [22.1, 186.0], [22.2, 194.0], [22.3, 194.0], [22.4, 200.0], [22.5, 200.0], [22.6, 201.0], [22.7, 202.0], [22.8, 202.0], [22.9, 203.0], [23.0, 203.0], [23.1, 204.0], [23.2, 206.0], [23.3, 206.0], [23.4, 206.0], [23.5, 206.0], [23.6, 207.0], [23.7, 209.0], [23.8, 209.0], [23.9, 211.0], [24.0, 211.0], [24.1, 211.0], [24.2, 216.0], [24.3, 216.0], [24.4, 221.0], [24.5, 221.0], [24.6, 225.0], [24.7, 226.0], [24.8, 226.0], [24.9, 226.0], [25.0, 226.0], [25.1, 228.0], [25.2, 229.0], [25.3, 229.0], [25.4, 229.0], [25.5, 229.0], [25.6, 230.0], [25.7, 232.0], [25.8, 232.0], [25.9, 233.0], [26.0, 233.0], [26.1, 234.0], [26.2, 236.0], [26.3, 236.0], [26.4, 237.0], [26.5, 237.0], [26.6, 240.0], [26.7, 243.0], [26.8, 243.0], [26.9, 243.0], [27.0, 243.0], [27.1, 243.0], [27.2, 244.0], [27.3, 244.0], [27.4, 244.0], [27.5, 244.0], [27.6, 244.0], [27.7, 245.0], [27.8, 245.0], [27.9, 247.0], [28.0, 247.0], [28.1, 247.0], [28.2, 251.0], [28.3, 251.0], [28.4, 253.0], [28.5, 253.0], [28.6, 253.0], [28.7, 253.0], [28.8, 253.0], [28.9, 253.0], [29.0, 253.0], [29.1, 253.0], [29.2, 254.0], [29.3, 254.0], [29.4, 254.0], [29.5, 254.0], [29.6, 254.0], [29.7, 255.0], [29.8, 255.0], [29.9, 255.0], [30.0, 255.0], [30.1, 255.0], [30.2, 256.0], [30.3, 256.0], [30.4, 257.0], [30.5, 257.0], [30.6, 257.0], [30.7, 258.0], [30.8, 258.0], [30.9, 262.0], [31.0, 262.0], [31.1, 262.0], [31.2, 263.0], [31.3, 263.0], [31.4, 263.0], [31.5, 263.0], [31.6, 263.0], [31.7, 264.0], [31.8, 264.0], [31.9, 265.0], [32.0, 265.0], [32.1, 266.0], [32.2, 269.0], [32.3, 269.0], [32.4, 269.0], [32.5, 269.0], [32.6, 270.0], [32.7, 271.0], [32.8, 271.0], [32.9, 272.0], [33.0, 272.0], [33.1, 275.0], [33.2, 276.0], [33.3, 276.0], [33.4, 277.0], [33.5, 277.0], [33.6, 279.0], [33.7, 280.0], [33.8, 280.0], [33.9, 280.0], [34.0, 280.0], [34.1, 282.0], [34.2, 283.0], [34.3, 283.0], [34.4, 285.0], [34.5, 285.0], [34.6, 290.0], [34.7, 294.0], [34.8, 294.0], [34.9, 296.0], [35.0, 296.0], [35.1, 301.0], [35.2, 307.0], [35.3, 307.0], [35.4, 309.0], [35.5, 337.0], [35.6, 337.0], [35.7, 338.0], [35.8, 338.0], [35.9, 342.0], [36.0, 370.0], [36.1, 370.0], [36.2, 371.0], [36.3, 371.0], [36.4, 371.0], [36.5, 391.0], [36.6, 391.0], [36.7, 424.0], [36.8, 424.0], [36.9, 444.0], [37.0, 452.0], [37.1, 452.0], [37.2, 460.0], [37.3, 460.0], [37.4, 467.0], [37.5, 471.0], [37.6, 471.0], [37.7, 484.0], [37.8, 484.0], [37.9, 485.0], [38.0, 485.0], [38.1, 485.0], [38.2, 486.0], [38.3, 486.0], [38.4, 488.0], [38.5, 489.0], [38.6, 489.0], [38.7, 501.0], [38.8, 501.0], [38.9, 504.0], [39.0, 508.0], [39.1, 508.0], [39.2, 508.0], [39.3, 508.0], [39.4, 509.0], [39.5, 513.0], [39.6, 513.0], [39.7, 520.0], [39.8, 520.0], [39.9, 521.0], [40.0, 522.0], [40.1, 522.0], [40.2, 522.0], [40.3, 522.0], [40.4, 522.0], [40.5, 523.0], [40.6, 523.0], [40.7, 524.0], [40.8, 524.0], [40.9, 524.0], [41.0, 526.0], [41.1, 526.0], [41.2, 527.0], [41.3, 527.0], [41.4, 528.0], [41.5, 528.0], [41.6, 528.0], [41.7, 530.0], [41.8, 530.0], [41.9, 530.0], [42.0, 530.0], [42.1, 530.0], [42.2, 532.0], [42.3, 532.0], [42.4, 532.0], [42.5, 534.0], [42.6, 534.0], [42.7, 535.0], [42.8, 535.0], [42.9, 536.0], [43.0, 536.0], [43.1, 536.0], [43.2, 536.0], [43.3, 536.0], [43.4, 537.0], [43.5, 538.0], [43.6, 538.0], [43.7, 538.0], [43.8, 538.0], [43.9, 538.0], [44.0, 539.0], [44.1, 539.0], [44.2, 539.0], [44.3, 539.0], [44.4, 539.0], [44.5, 540.0], [44.6, 540.0], [44.7, 540.0], [44.8, 540.0], [44.9, 542.0], [45.0, 542.0], [45.1, 542.0], [45.2, 542.0], [45.3, 542.0], [45.4, 543.0], [45.5, 543.0], [45.6, 543.0], [45.7, 543.0], [45.8, 543.0], [45.9, 543.0], [46.0, 543.0], [46.1, 543.0], [46.2, 543.0], [46.3, 543.0], [46.4, 543.0], [46.5, 544.0], [46.6, 544.0], [46.7, 544.0], [46.8, 544.0], [46.9, 545.0], [47.0, 545.0], [47.1, 545.0], [47.2, 546.0], [47.3, 546.0], [47.4, 547.0], [47.5, 548.0], [47.6, 548.0], [47.7, 548.0], [47.8, 548.0], [47.9, 549.0], [48.0, 549.0], [48.1, 549.0], [48.2, 549.0], [48.3, 549.0], [48.4, 550.0], [48.5, 550.0], [48.6, 550.0], [48.7, 550.0], [48.8, 550.0], [48.9, 551.0], [49.0, 551.0], [49.1, 551.0], [49.2, 551.0], [49.3, 551.0], [49.4, 552.0], [49.5, 552.0], [49.6, 552.0], [49.7, 552.0], [49.8, 552.0], [49.9, 552.0], [50.0, 553.0], [50.1, 553.0], [50.2, 553.0], [50.3, 553.0], [50.4, 553.0], [50.5, 553.0], [50.6, 553.0], [50.7, 553.0], [50.8, 553.0], [50.9, 553.0], [51.0, 553.0], [51.1, 553.0], [51.2, 553.0], [51.3, 553.0], [51.4, 553.0], [51.5, 554.0], [51.6, 554.0], [51.7, 554.0], [51.8, 554.0], [51.9, 554.0], [52.0, 554.0], [52.1, 554.0], [52.2, 554.0], [52.3, 554.0], [52.4, 554.0], [52.5, 554.0], [52.6, 554.0], [52.7, 554.0], [52.8, 554.0], [52.9, 555.0], [53.0, 555.0], [53.1, 555.0], [53.2, 555.0], [53.3, 555.0], [53.4, 555.0], [53.5, 556.0], [53.6, 556.0], [53.7, 556.0], [53.8, 556.0], [53.9, 556.0], [54.0, 556.0], [54.1, 556.0], [54.2, 556.0], [54.3, 556.0], [54.4, 556.0], [54.5, 556.0], [54.6, 556.0], [54.7, 557.0], [54.8, 557.0], [54.9, 557.0], [55.0, 557.0], [55.1, 557.0], [55.2, 557.0], [55.3, 557.0], [55.4, 557.0], [55.5, 557.0], [55.6, 557.0], [55.7, 558.0], [55.8, 558.0], [55.9, 559.0], [56.0, 559.0], [56.1, 559.0], [56.2, 559.0], [56.3, 559.0], [56.4, 559.0], [56.5, 560.0], [56.6, 560.0], [56.7, 560.0], [56.8, 560.0], [56.9, 560.0], [57.0, 561.0], [57.1, 561.0], [57.2, 561.0], [57.3, 561.0], [57.4, 561.0], [57.5, 561.0], [57.6, 561.0], [57.7, 561.0], [57.8, 561.0], [57.9, 562.0], [58.0, 562.0], [58.1, 562.0], [58.2, 562.0], [58.3, 562.0], [58.4, 562.0], [58.5, 563.0], [58.6, 563.0], [58.7, 564.0], [58.8, 564.0], [58.9, 564.0], [59.0, 565.0], [59.1, 565.0], [59.2, 565.0], [59.3, 565.0], [59.4, 565.0], [59.5, 565.0], [59.6, 565.0], [59.7, 566.0], [59.8, 566.0], [59.9, 566.0], [60.0, 566.0], [60.1, 566.0], [60.2, 567.0], [60.3, 567.0], [60.4, 567.0], [60.5, 567.0], [60.6, 567.0], [60.7, 567.0], [60.8, 567.0], [60.9, 567.0], [61.0, 567.0], [61.1, 567.0], [61.2, 568.0], [61.3, 568.0], [61.4, 568.0], [61.5, 568.0], [61.6, 568.0], [61.7, 568.0], [61.8, 568.0], [61.9, 568.0], [62.0, 569.0], [62.1, 569.0], [62.2, 569.0], [62.3, 569.0], [62.4, 569.0], [62.5, 569.0], [62.6, 569.0], [62.7, 569.0], [62.8, 569.0], [62.9, 569.0], [63.0, 569.0], [63.1, 569.0], [63.2, 569.0], [63.3, 569.0], [63.4, 570.0], [63.5, 570.0], [63.6, 570.0], [63.7, 570.0], [63.8, 570.0], [63.9, 570.0], [64.0, 571.0], [64.1, 571.0], [64.2, 571.0], [64.3, 571.0], [64.4, 571.0], [64.5, 571.0], [64.6, 571.0], [64.7, 571.0], [64.8, 571.0], [64.9, 571.0], [65.0, 571.0], [65.1, 571.0], [65.2, 572.0], [65.3, 572.0], [65.4, 572.0], [65.5, 572.0], [65.6, 572.0], [65.7, 572.0], [65.8, 572.0], [65.9, 573.0], [66.0, 573.0], [66.1, 573.0], [66.2, 573.0], [66.3, 573.0], [66.4, 573.0], [66.5, 573.0], [66.6, 573.0], [66.7, 574.0], [66.8, 574.0], [66.9, 575.0], [67.0, 575.0], [67.1, 575.0], [67.2, 576.0], [67.3, 576.0], [67.4, 576.0], [67.5, 576.0], [67.6, 576.0], [67.7, 577.0], [67.8, 577.0], [67.9, 577.0], [68.0, 577.0], [68.1, 577.0], [68.2, 578.0], [68.3, 578.0], [68.4, 578.0], [68.5, 578.0], [68.6, 578.0], [68.7, 579.0], [68.8, 579.0], [68.9, 579.0], [69.0, 579.0], [69.1, 579.0], [69.2, 580.0], [69.3, 580.0], [69.4, 580.0], [69.5, 580.0], [69.6, 580.0], [69.7, 580.0], [69.8, 580.0], [69.9, 580.0], [70.0, 581.0], [70.1, 581.0], [70.2, 581.0], [70.3, 581.0], [70.4, 581.0], [70.5, 581.0], [70.6, 581.0], [70.7, 581.0], [70.8, 581.0], [70.9, 582.0], [71.0, 582.0], [71.1, 582.0], [71.2, 582.0], [71.3, 582.0], [71.4, 582.0], [71.5, 583.0], [71.6, 583.0], [71.7, 583.0], [71.8, 583.0], [71.9, 583.0], [72.0, 583.0], [72.1, 583.0], [72.2, 583.0], [72.3, 583.0], [72.4, 583.0], [72.5, 583.0], [72.6, 583.0], [72.7, 584.0], [72.8, 584.0], [72.9, 585.0], [73.0, 585.0], [73.1, 585.0], [73.2, 585.0], [73.3, 585.0], [73.4, 585.0], [73.5, 585.0], [73.6, 585.0], [73.7, 585.0], [73.8, 585.0], [73.9, 586.0], [74.0, 586.0], [74.1, 586.0], [74.2, 586.0], [74.3, 586.0], [74.4, 586.0], [74.5, 587.0], [74.6, 587.0], [74.7, 588.0], [74.8, 588.0], [74.9, 589.0], [75.0, 589.0], [75.1, 589.0], [75.2, 589.0], [75.3, 589.0], [75.4, 590.0], [75.5, 590.0], [75.6, 590.0], [75.7, 590.0], [75.8, 590.0], [75.9, 590.0], [76.0, 591.0], [76.1, 591.0], [76.2, 592.0], [76.3, 592.0], [76.4, 593.0], [76.5, 593.0], [76.6, 593.0], [76.7, 594.0], [76.8, 594.0], [76.9, 594.0], [77.0, 594.0], [77.1, 594.0], [77.2, 595.0], [77.3, 595.0], [77.4, 595.0], [77.5, 595.0], [77.6, 595.0], [77.7, 596.0], [77.8, 596.0], [77.9, 596.0], [78.0, 596.0], [78.1, 596.0], [78.2, 596.0], [78.3, 596.0], [78.4, 597.0], [78.5, 597.0], [78.6, 597.0], [78.7, 597.0], [78.8, 597.0], [78.9, 597.0], [79.0, 598.0], [79.1, 598.0], [79.2, 598.0], [79.3, 598.0], [79.4, 599.0], [79.5, 599.0], [79.6, 599.0], [79.7, 599.0], [79.8, 599.0], [79.9, 599.0], [80.0, 599.0], [80.1, 599.0], [80.2, 600.0], [80.3, 600.0], [80.4, 600.0], [80.5, 601.0], [80.6, 601.0], [80.7, 601.0], [80.8, 601.0], [80.9, 601.0], [81.0, 602.0], [81.1, 602.0], [81.2, 602.0], [81.3, 602.0], [81.4, 602.0], [81.5, 602.0], [81.6, 602.0], [81.7, 603.0], [81.8, 603.0], [81.9, 603.0], [82.0, 603.0], [82.1, 603.0], [82.2, 603.0], [82.3, 603.0], [82.4, 604.0], [82.5, 605.0], [82.6, 605.0], [82.7, 605.0], [82.8, 605.0], [82.9, 605.0], [83.0, 605.0], [83.1, 605.0], [83.2, 605.0], [83.3, 605.0], [83.4, 606.0], [83.5, 606.0], [83.6, 606.0], [83.7, 607.0], [83.8, 607.0], [83.9, 607.0], [84.0, 608.0], [84.1, 608.0], [84.2, 608.0], [84.3, 608.0], [84.4, 608.0], [84.5, 609.0], [84.6, 609.0], [84.7, 609.0], [84.8, 609.0], [84.9, 609.0], [85.0, 610.0], [85.1, 610.0], [85.2, 610.0], [85.3, 610.0], [85.4, 610.0], [85.5, 610.0], [85.6, 610.0], [85.7, 610.0], [85.8, 610.0], [85.9, 611.0], [86.0, 611.0], [86.1, 611.0], [86.2, 611.0], [86.3, 611.0], [86.4, 612.0], [86.5, 612.0], [86.6, 612.0], [86.7, 615.0], [86.8, 615.0], [86.9, 616.0], [87.0, 616.0], [87.1, 616.0], [87.2, 616.0], [87.3, 616.0], [87.4, 617.0], [87.5, 617.0], [87.6, 617.0], [87.7, 617.0], [87.8, 617.0], [87.9, 617.0], [88.0, 618.0], [88.1, 618.0], [88.2, 618.0], [88.3, 618.0], [88.4, 619.0], [88.5, 619.0], [88.6, 619.0], [88.7, 619.0], [88.8, 619.0], [88.9, 619.0], [89.0, 619.0], [89.1, 619.0], [89.2, 620.0], [89.3, 620.0], [89.4, 620.0], [89.5, 621.0], [89.6, 621.0], [89.7, 621.0], [89.8, 621.0], [89.9, 622.0], [90.0, 622.0], [90.1, 622.0], [90.2, 622.0], [90.3, 622.0], [90.4, 622.0], [90.5, 623.0], [90.6, 623.0], [90.7, 623.0], [90.8, 623.0], [90.9, 624.0], [91.0, 624.0], [91.1, 624.0], [91.2, 625.0], [91.3, 625.0], [91.4, 625.0], [91.5, 627.0], [91.6, 627.0], [91.7, 628.0], [91.8, 628.0], [91.9, 629.0], [92.0, 629.0], [92.1, 629.0], [92.2, 630.0], [92.3, 630.0], [92.4, 630.0], [92.5, 631.0], [92.6, 631.0], [92.7, 631.0], [92.8, 631.0], [92.9, 632.0], [93.0, 633.0], [93.1, 633.0], [93.2, 634.0], [93.3, 634.0], [93.4, 634.0], [93.5, 634.0], [93.6, 634.0], [93.7, 635.0], [93.8, 635.0], [93.9, 638.0], [94.0, 638.0], [94.1, 638.0], [94.2, 639.0], [94.3, 639.0], [94.4, 640.0], [94.5, 641.0], [94.6, 641.0], [94.7, 641.0], [94.8, 641.0], [94.9, 641.0], [95.0, 641.0], [95.1, 641.0], [95.2, 642.0], [95.3, 642.0], [95.4, 644.0], [95.5, 645.0], [95.6, 645.0], [95.7, 645.0], [95.8, 645.0], [95.9, 645.0], [96.0, 646.0], [96.1, 646.0], [96.2, 647.0], [96.3, 647.0], [96.4, 647.0], [96.5, 651.0], [96.6, 651.0], [96.7, 651.0], [96.8, 651.0], [96.9, 652.0], [97.0, 653.0], [97.1, 653.0], [97.2, 654.0], [97.3, 654.0], [97.4, 658.0], [97.5, 659.0], [97.6, 659.0], [97.7, 660.0], [97.8, 660.0], [97.9, 663.0], [98.0, 665.0], [98.1, 665.0], [98.2, 665.0], [98.3, 665.0], [98.4, 666.0], [98.5, 667.0], [98.6, 667.0], [98.7, 673.0], [98.8, 673.0], [98.9, 676.0], [99.0, 676.0], [99.1, 679.0], [99.2, 682.0], [99.3, 682.0], [99.4, 691.0], [99.5, 691.0], [99.6, 724.0], [99.7, 761.0], [99.8, 761.0], [99.9, 771.0], [100.0, 771.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 249.0, "series": [{"data": [[0.0, 94.0], [300.0, 10.0], [600.0, 116.0], [700.0, 3.0], [100.0, 40.0], [200.0, 76.0], [400.0, 12.0], [500.0, 249.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 368.0, "series": [{"data": [[0.0, 181.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 368.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 51.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 231.8883333333336, "minX": 1.6883028E12, "maxY": 231.8883333333336, "series": [{"data": [[1.6883028E12, 231.8883333333336]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 22.0, "minX": 2.0, "maxY": 771.0, "series": [{"data": [[2.0, 620.5], [3.0, 616.0], [6.0, 633.5], [7.0, 771.0], [8.0, 610.0], [10.0, 630.0], [11.0, 607.0], [12.0, 645.0], [16.0, 623.5], [18.0, 625.5], [20.0, 622.3333333333334], [21.0, 682.0], [23.0, 628.0], [24.0, 622.0], [25.0, 604.0], [26.0, 593.0], [31.0, 644.0], [33.0, 694.0], [35.0, 651.0], [34.0, 628.0], [37.0, 653.0], [39.0, 590.0], [38.0, 636.5], [41.0, 641.0], [40.0, 602.0], [43.0, 439.0], [44.0, 673.0], [49.0, 634.0], [48.0, 646.0], [50.0, 31.0], [52.0, 29.0], [53.0, 30.0], [55.0, 605.0], [54.0, 625.2], [57.0, 637.5], [67.0, 625.0], [65.0, 640.0], [64.0, 642.0], [71.0, 620.3333333333334], [68.0, 643.2], [75.0, 329.5], [74.0, 609.0], [73.0, 641.0], [72.0, 617.0], [79.0, 599.0], [78.0, 605.0], [77.0, 619.0], [76.0, 619.0], [82.0, 631.0], [81.0, 649.0], [86.0, 599.3333333333334], [85.0, 608.0], [91.0, 52.666666666666664], [90.0, 316.75], [88.0, 601.5], [92.0, 276.4], [95.0, 601.3333333333334], [98.0, 676.0], [97.0, 625.0], [103.0, 573.0], [102.0, 724.0], [101.0, 586.0], [100.0, 590.0], [107.0, 554.0], [106.0, 654.0], [105.0, 565.0], [104.0, 576.0], [109.0, 417.0], [111.0, 603.0], [110.0, 623.0], [112.0, 331.0], [114.0, 68.0], [115.0, 581.5], [113.0, 621.0], [118.0, 580.0], [116.0, 603.0], [123.0, 616.0], [122.0, 589.0], [121.0, 599.0], [125.0, 333.5], [127.0, 609.5], [124.0, 610.0], [134.0, 592.0], [133.0, 579.0], [132.0, 599.5], [130.0, 622.0], [129.0, 597.0], [128.0, 617.0], [138.0, 88.6], [139.0, 87.71428571428571], [137.0, 168.33333333333331], [140.0, 94.75], [141.0, 96.0], [143.0, 510.14285714285717], [136.0, 572.5], [146.0, 102.66666666666667], [151.0, 577.6666666666666], [148.0, 599.0], [147.0, 575.0], [145.0, 598.5], [159.0, 571.0], [157.0, 540.0], [156.0, 543.0], [155.0, 585.0], [154.0, 560.0], [167.0, 553.0], [165.0, 560.0], [163.0, 544.0], [162.0, 554.0], [161.0, 573.0], [160.0, 558.0], [175.0, 545.0], [174.0, 562.0], [173.0, 553.0], [172.0, 551.0], [171.0, 553.0], [170.0, 578.0], [169.0, 566.5], [181.0, 564.0], [180.0, 563.0], [179.0, 541.5], [177.0, 543.0], [176.0, 559.0], [187.0, 119.0], [190.0, 574.0], [188.0, 537.5], [186.0, 535.0], [185.0, 542.0], [184.0, 551.3333333333334], [198.0, 419.0], [197.0, 428.6666666666667], [196.0, 128.0], [195.0, 599.0], [193.0, 561.5], [192.0, 559.0], [200.0, 128.0], [206.0, 595.0], [205.0, 555.0], [203.0, 607.0], [201.0, 565.6666666666666], [213.0, 575.5], [212.0, 568.5], [209.0, 583.0], [217.0, 426.3333333333333], [223.0, 552.0], [221.0, 621.0], [220.0, 589.0], [231.0, 553.0], [229.0, 562.0], [228.0, 575.0], [225.0, 522.0], [224.0, 595.3333333333334], [239.0, 592.0], [237.0, 577.0], [236.0, 561.0], [235.0, 553.5], [234.0, 607.0], [233.0, 553.0], [232.0, 582.0], [247.0, 591.0], [245.0, 589.0], [243.0, 578.0], [242.0, 570.6666666666666], [249.0, 157.0], [248.0, 370.0], [255.0, 578.0], [253.0, 536.0], [252.0, 576.0], [251.0, 560.0], [250.0, 556.0], [258.0, 580.0], [271.0, 584.5], [270.0, 530.0], [267.0, 579.0], [266.0, 566.5], [264.0, 556.0], [261.0, 564.0], [260.0, 556.0], [257.0, 581.0], [256.0, 548.0], [287.0, 560.0], [281.0, 368.5], [285.0, 584.0], [284.0, 596.0], [283.0, 557.0], [282.0, 605.0], [280.0, 583.0], [279.0, 560.0], [275.0, 581.0], [274.0, 572.0], [273.0, 606.0], [277.0, 590.0], [300.0, 555.0], [290.0, 178.08333333333331], [291.0, 295.0], [293.0, 455.6666666666667], [292.0, 605.0], [294.0, 268.0], [295.0, 295.75], [289.0, 596.0], [297.0, 211.0], [298.0, 396.5], [299.0, 595.0], [302.0, 580.6666666666666], [296.0, 585.0], [318.0, 570.5], [319.0, 552.0], [316.0, 572.5], [314.0, 536.0], [313.0, 543.0], [312.0, 542.0], [310.0, 546.5], [308.0, 488.0], [307.0, 540.5], [305.0, 601.0], [304.0, 568.0], [322.0, 538.0], [327.0, 288.33333333333337], [333.0, 315.26666666666665], [326.0, 390.8], [335.0, 559.0], [334.0, 566.0], [329.0, 460.0], [328.0, 467.0], [325.0, 560.5], [321.0, 577.0], [320.0, 569.0], [349.0, 311.4], [339.0, 296.66666666666663], [348.0, 552.5], [350.0, 264.94444444444446], [344.0, 549.0], [337.0, 273.25], [341.0, 408.3333333333333], [340.0, 280.0], [343.0, 266.4285714285714], [336.0, 556.0], [342.0, 452.0], [345.0, 273.0], [346.0, 406.2], [338.0, 403.0], [365.0, 296.0], [357.0, 108.0], [356.0, 524.5], [352.0, 161.0], [364.0, 407.6666666666667], [355.0, 530.0], [353.0, 537.6666666666666], [367.0, 520.0], [366.0, 530.0], [362.0, 536.0], [361.0, 424.0], [360.0, 541.75], [380.0, 487.5], [383.0, 471.0], [373.0, 405.5], [372.0, 391.0], [378.0, 206.0], [382.0, 484.5], [381.0, 485.0], [377.0, 371.0], [376.0, 370.0], [375.0, 508.5], [368.0, 513.0], [371.0, 243.0], [370.0, 526.5], [396.0, 157.33333333333334], [384.0, 337.5], [385.0, 444.0], [399.0, 55.0], [394.0, 50.0], [393.0, 58.0], [392.0, 74.0], [391.0, 71.0], [390.0, 79.0], [389.0, 62.666666666666664], [388.0, 72.0], [402.0, 54.0], [404.0, 229.0], [415.0, 53.0], [414.0, 79.0], [410.0, 69.0], [407.0, 187.25], [403.0, 54.0], [401.0, 57.0], [400.0, 66.5], [430.0, 49.0], [416.0, 116.33333333333334], [425.0, 169.0], [429.0, 70.5], [417.0, 69.0], [427.0, 73.5], [424.0, 77.6], [423.0, 45.0], [422.0, 63.0], [421.0, 63.0], [438.0, 22.0], [437.0, 37.0], [436.0, 71.0], [435.0, 41.0], [434.0, 55.0], [433.0, 71.0], [432.0, 62.5]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[231.88666666666663, 425.7983333333338]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 438.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 4944.75, "minX": 1.6883028E12, "maxY": 13953.75, "series": [{"data": [[1.6883028E12, 4944.75]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883028E12, 13953.75]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 425.7983333333338, "minX": 1.6883028E12, "maxY": 425.7983333333338, "series": [{"data": [[1.6883028E12, 425.7983333333338]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 420.4083333333337, "minX": 1.6883028E12, "maxY": 420.4083333333337, "series": [{"data": [[1.6883028E12, 420.4083333333337]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 19.336666666666666, "minX": 1.6883028E12, "maxY": 19.336666666666666, "series": [{"data": [[1.6883028E12, 19.336666666666666]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 22.0, "minX": 1.6883028E12, "maxY": 771.0, "series": [{"data": [[1.6883028E12, 771.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883028E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883028E12, 624.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883028E12, 680.5]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883028E12, 556.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883028E12, 644.5]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 63.0, "minX": 82.0, "maxY": 630.5, "series": [{"data": [[518.0, 547.0], [82.0, 630.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[518.0, 63.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 518.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 82.0, "maxY": 630.5, "series": [{"data": [[518.0, 547.0], [82.0, 630.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[518.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 518.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.6883028E12, "maxY": 10.0, "series": [{"data": [[1.6883028E12, 10.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.6883028E12, "maxY": 9.15, "series": [{"data": [[1.6883028E12, 9.15]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6883028E12, 0.85]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883028E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.6883028E12, "maxY": 9.15, "series": [{"data": [[1.6883028E12, 9.15]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}, {"data": [[1.6883028E12, 0.85]], "isOverall": false, "label": "gateway_rs/hellotea-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 0.85, "minX": 1.6883028E12, "maxY": 9.15, "series": [{"data": [[1.6883028E12, 9.15]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6883028E12, 0.85]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883028E12, "title": "Total Transactions Per Second"}},
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

