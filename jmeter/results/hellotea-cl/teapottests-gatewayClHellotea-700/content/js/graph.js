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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 756.0, "series": [{"data": [[0.0, 31.0], [0.1, 31.0], [0.2, 31.0], [0.3, 35.0], [0.4, 35.0], [0.5, 36.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 43.0], [1.0, 53.0], [1.1, 53.0], [1.2, 58.0], [1.3, 58.0], [1.4, 58.0], [1.5, 59.0], [1.6, 59.0], [1.7, 59.0], [1.8, 69.0], [1.9, 71.0], [2.0, 71.0], [2.1, 71.0], [2.2, 71.0], [2.3, 71.0], [2.4, 71.0], [2.5, 75.0], [2.6, 78.0], [2.7, 78.0], [2.8, 79.0], [2.9, 80.0], [3.0, 81.0], [3.1, 81.0], [3.2, 86.0], [3.3, 86.0], [3.4, 86.0], [3.5, 88.0], [3.6, 88.0], [3.7, 88.0], [3.8, 90.0], [3.9, 91.0], [4.0, 95.0], [4.1, 95.0], [4.2, 95.0], [4.3, 98.0], [4.4, 98.0], [4.5, 98.0], [4.6, 99.0], [4.7, 99.0], [4.8, 100.0], [4.9, 100.0], [5.0, 101.0], [5.1, 101.0], [5.2, 101.0], [5.3, 102.0], [5.4, 102.0], [5.5, 102.0], [5.6, 104.0], [5.7, 104.0], [5.8, 105.0], [5.9, 105.0], [6.0, 107.0], [6.1, 107.0], [6.2, 107.0], [6.3, 108.0], [6.4, 108.0], [6.5, 108.0], [6.6, 109.0], [6.7, 109.0], [6.8, 109.0], [6.9, 109.0], [7.0, 109.0], [7.1, 109.0], [7.2, 110.0], [7.3, 113.0], [7.4, 113.0], [7.5, 113.0], [7.6, 114.0], [7.7, 114.0], [7.8, 114.0], [7.9, 114.0], [8.0, 114.0], [8.1, 114.0], [8.2, 114.0], [8.3, 115.0], [8.4, 115.0], [8.5, 115.0], [8.6, 115.0], [8.7, 115.0], [8.8, 116.0], [8.9, 117.0], [9.0, 123.0], [9.1, 123.0], [9.2, 123.0], [9.3, 124.0], [9.4, 124.0], [9.5, 124.0], [9.6, 124.0], [9.7, 124.0], [9.8, 124.0], [9.9, 124.0], [10.0, 124.0], [10.1, 124.0], [10.2, 125.0], [10.3, 125.0], [10.4, 125.0], [10.5, 125.0], [10.6, 125.0], [10.7, 125.0], [10.8, 125.0], [10.9, 125.0], [11.0, 125.0], [11.1, 125.0], [11.2, 126.0], [11.3, 126.0], [11.4, 126.0], [11.5, 126.0], [11.6, 126.0], [11.7, 126.0], [11.8, 126.0], [11.9, 127.0], [12.0, 127.0], [12.1, 127.0], [12.2, 127.0], [12.3, 127.0], [12.4, 127.0], [12.5, 127.0], [12.6, 128.0], [12.7, 128.0], [12.8, 129.0], [12.9, 129.0], [13.0, 129.0], [13.1, 129.0], [13.2, 129.0], [13.3, 129.0], [13.4, 129.0], [13.5, 130.0], [13.6, 130.0], [13.7, 130.0], [13.8, 130.0], [13.9, 130.0], [14.0, 131.0], [14.1, 131.0], [14.2, 131.0], [14.3, 131.0], [14.4, 131.0], [14.5, 131.0], [14.6, 132.0], [14.7, 132.0], [14.8, 134.0], [14.9, 134.0], [15.0, 134.0], [15.1, 134.0], [15.2, 138.0], [15.3, 138.0], [15.4, 138.0], [15.5, 139.0], [15.6, 139.0], [15.7, 139.0], [15.8, 139.0], [15.9, 140.0], [16.0, 140.0], [16.1, 140.0], [16.2, 140.0], [16.3, 140.0], [16.4, 140.0], [16.5, 140.0], [16.6, 140.0], [16.7, 140.0], [16.8, 140.0], [16.9, 140.0], [17.0, 141.0], [17.1, 141.0], [17.2, 141.0], [17.3, 141.0], [17.4, 141.0], [17.5, 142.0], [17.6, 142.0], [17.7, 142.0], [17.8, 142.0], [17.9, 142.0], [18.0, 142.0], [18.1, 142.0], [18.2, 142.0], [18.3, 142.0], [18.4, 142.0], [18.5, 143.0], [18.6, 143.0], [18.7, 143.0], [18.8, 143.0], [18.9, 144.0], [19.0, 144.0], [19.1, 144.0], [19.2, 144.0], [19.3, 144.0], [19.4, 144.0], [19.5, 145.0], [19.6, 145.0], [19.7, 145.0], [19.8, 145.0], [19.9, 145.0], [20.0, 145.0], [20.1, 145.0], [20.2, 145.0], [20.3, 145.0], [20.4, 145.0], [20.5, 145.0], [20.6, 146.0], [20.7, 146.0], [20.8, 146.0], [20.9, 147.0], [21.0, 147.0], [21.1, 147.0], [21.2, 147.0], [21.3, 147.0], [21.4, 147.0], [21.5, 147.0], [21.6, 148.0], [21.7, 148.0], [21.8, 148.0], [21.9, 149.0], [22.0, 149.0], [22.1, 149.0], [22.2, 149.0], [22.3, 149.0], [22.4, 149.0], [22.5, 150.0], [22.6, 150.0], [22.7, 150.0], [22.8, 150.0], [22.9, 151.0], [23.0, 153.0], [23.1, 153.0], [23.2, 153.0], [23.3, 153.0], [23.4, 153.0], [23.5, 154.0], [23.6, 154.0], [23.7, 154.0], [23.8, 154.0], [23.9, 154.0], [24.0, 155.0], [24.1, 155.0], [24.2, 155.0], [24.3, 155.0], [24.4, 155.0], [24.5, 155.0], [24.6, 157.0], [24.7, 157.0], [24.8, 157.0], [24.9, 157.0], [25.0, 157.0], [25.1, 157.0], [25.2, 157.0], [25.3, 158.0], [25.4, 158.0], [25.5, 158.0], [25.6, 158.0], [25.7, 158.0], [25.8, 158.0], [25.9, 158.0], [26.0, 158.0], [26.1, 158.0], [26.2, 158.0], [26.3, 159.0], [26.4, 159.0], [26.5, 159.0], [26.6, 160.0], [26.7, 160.0], [26.8, 162.0], [26.9, 163.0], [27.0, 164.0], [27.1, 164.0], [27.2, 164.0], [27.3, 164.0], [27.4, 164.0], [27.5, 164.0], [27.6, 164.0], [27.7, 164.0], [27.8, 164.0], [27.9, 164.0], [28.0, 164.0], [28.1, 164.0], [28.2, 164.0], [28.3, 165.0], [28.4, 165.0], [28.5, 165.0], [28.6, 166.0], [28.7, 166.0], [28.8, 166.0], [28.9, 167.0], [29.0, 167.0], [29.1, 167.0], [29.2, 168.0], [29.3, 169.0], [29.4, 169.0], [29.5, 170.0], [29.6, 170.0], [29.7, 170.0], [29.8, 171.0], [29.9, 171.0], [30.0, 171.0], [30.1, 171.0], [30.2, 172.0], [30.3, 172.0], [30.4, 172.0], [30.5, 173.0], [30.6, 173.0], [30.7, 173.0], [30.8, 173.0], [30.9, 173.0], [31.0, 174.0], [31.1, 174.0], [31.2, 174.0], [31.3, 175.0], [31.4, 175.0], [31.5, 175.0], [31.6, 175.0], [31.7, 175.0], [31.8, 175.0], [31.9, 175.0], [32.0, 175.0], [32.1, 175.0], [32.2, 175.0], [32.3, 176.0], [32.4, 176.0], [32.5, 177.0], [32.6, 178.0], [32.7, 178.0], [32.8, 178.0], [32.9, 178.0], [33.0, 179.0], [33.1, 179.0], [33.2, 179.0], [33.3, 180.0], [33.4, 180.0], [33.5, 180.0], [33.6, 180.0], [33.7, 180.0], [33.8, 181.0], [33.9, 181.0], [34.0, 182.0], [34.1, 182.0], [34.2, 182.0], [34.3, 182.0], [34.4, 182.0], [34.5, 182.0], [34.6, 182.0], [34.7, 182.0], [34.8, 183.0], [34.9, 183.0], [35.0, 184.0], [35.1, 184.0], [35.2, 184.0], [35.3, 184.0], [35.4, 184.0], [35.5, 184.0], [35.6, 185.0], [35.7, 185.0], [35.8, 185.0], [35.9, 186.0], [36.0, 186.0], [36.1, 186.0], [36.2, 186.0], [36.3, 186.0], [36.4, 186.0], [36.5, 187.0], [36.6, 187.0], [36.7, 187.0], [36.8, 187.0], [36.9, 188.0], [37.0, 188.0], [37.1, 188.0], [37.2, 190.0], [37.3, 190.0], [37.4, 190.0], [37.5, 190.0], [37.6, 191.0], [37.7, 191.0], [37.8, 191.0], [37.9, 191.0], [38.0, 192.0], [38.1, 192.0], [38.2, 192.0], [38.3, 193.0], [38.4, 193.0], [38.5, 194.0], [38.6, 194.0], [38.7, 194.0], [38.8, 196.0], [38.9, 199.0], [39.0, 200.0], [39.1, 200.0], [39.2, 201.0], [39.3, 201.0], [39.4, 201.0], [39.5, 202.0], [39.6, 202.0], [39.7, 202.0], [39.8, 204.0], [39.9, 205.0], [40.0, 205.0], [40.1, 205.0], [40.2, 207.0], [40.3, 207.0], [40.4, 207.0], [40.5, 208.0], [40.6, 208.0], [40.7, 208.0], [40.8, 208.0], [40.9, 209.0], [41.0, 209.0], [41.1, 210.0], [41.2, 210.0], [41.3, 211.0], [41.4, 211.0], [41.5, 211.0], [41.6, 212.0], [41.7, 212.0], [41.8, 212.0], [41.9, 214.0], [42.0, 214.0], [42.1, 216.0], [42.2, 218.0], [42.3, 228.0], [42.4, 228.0], [42.5, 229.0], [42.6, 238.0], [42.7, 238.0], [42.8, 238.0], [42.9, 246.0], [43.0, 246.0], [43.1, 255.0], [43.2, 257.0], [43.3, 266.0], [43.4, 266.0], [43.5, 280.0], [43.6, 307.0], [43.7, 307.0], [43.8, 384.0], [43.9, 410.0], [44.0, 410.0], [44.1, 448.0], [44.2, 453.0], [44.3, 453.0], [44.4, 453.0], [44.5, 453.0], [44.6, 455.0], [44.7, 455.0], [44.8, 459.0], [44.9, 472.0], [45.0, 472.0], [45.1, 472.0], [45.2, 472.0], [45.3, 472.0], [45.4, 472.0], [45.5, 473.0], [45.6, 486.0], [45.7, 486.0], [45.8, 486.0], [45.9, 488.0], [46.0, 488.0], [46.1, 491.0], [46.2, 492.0], [46.3, 496.0], [46.4, 496.0], [46.5, 498.0], [46.6, 499.0], [46.7, 499.0], [46.8, 506.0], [46.9, 506.0], [47.0, 506.0], [47.1, 507.0], [47.2, 510.0], [47.3, 512.0], [47.4, 512.0], [47.5, 514.0], [47.6, 515.0], [47.7, 515.0], [47.8, 541.0], [47.9, 553.0], [48.0, 553.0], [48.1, 556.0], [48.2, 557.0], [48.3, 563.0], [48.4, 563.0], [48.5, 566.0], [48.6, 566.0], [48.7, 566.0], [48.8, 567.0], [48.9, 568.0], [49.0, 568.0], [49.1, 572.0], [49.2, 579.0], [49.3, 582.0], [49.4, 582.0], [49.5, 583.0], [49.6, 585.0], [49.7, 585.0], [49.8, 587.0], [49.9, 588.0], [50.0, 588.0], [50.1, 588.0], [50.2, 589.0], [50.3, 589.0], [50.4, 589.0], [50.5, 590.0], [50.6, 590.0], [50.7, 590.0], [50.8, 590.0], [50.9, 592.0], [51.0, 592.0], [51.1, 592.0], [51.2, 593.0], [51.3, 593.0], [51.4, 593.0], [51.5, 593.0], [51.6, 593.0], [51.7, 593.0], [51.8, 594.0], [51.9, 594.0], [52.0, 594.0], [52.1, 595.0], [52.2, 595.0], [52.3, 596.0], [52.4, 596.0], [52.5, 596.0], [52.6, 596.0], [52.7, 596.0], [52.8, 597.0], [52.9, 598.0], [53.0, 598.0], [53.1, 600.0], [53.2, 600.0], [53.3, 600.0], [53.4, 600.0], [53.5, 601.0], [53.6, 601.0], [53.7, 601.0], [53.8, 602.0], [53.9, 602.0], [54.0, 602.0], [54.1, 602.0], [54.2, 602.0], [54.3, 603.0], [54.4, 603.0], [54.5, 603.0], [54.6, 605.0], [54.7, 605.0], [54.8, 606.0], [54.9, 606.0], [55.0, 606.0], [55.1, 606.0], [55.2, 607.0], [55.3, 607.0], [55.4, 607.0], [55.5, 608.0], [55.6, 608.0], [55.7, 608.0], [55.8, 608.0], [55.9, 609.0], [56.0, 609.0], [56.1, 609.0], [56.2, 609.0], [56.3, 609.0], [56.4, 609.0], [56.5, 610.0], [56.6, 610.0], [56.7, 610.0], [56.8, 610.0], [56.9, 610.0], [57.0, 610.0], [57.1, 612.0], [57.2, 612.0], [57.3, 612.0], [57.4, 612.0], [57.5, 612.0], [57.6, 612.0], [57.7, 612.0], [57.8, 613.0], [57.9, 613.0], [58.0, 613.0], [58.1, 614.0], [58.2, 615.0], [58.3, 615.0], [58.4, 615.0], [58.5, 615.0], [58.6, 616.0], [58.7, 616.0], [58.8, 616.0], [58.9, 617.0], [59.0, 617.0], [59.1, 617.0], [59.2, 617.0], [59.3, 617.0], [59.4, 617.0], [59.5, 618.0], [59.6, 618.0], [59.7, 618.0], [59.8, 618.0], [59.9, 619.0], [60.0, 619.0], [60.1, 619.0], [60.2, 619.0], [60.3, 619.0], [60.4, 619.0], [60.5, 621.0], [60.6, 623.0], [60.7, 623.0], [60.8, 623.0], [60.9, 624.0], [61.0, 624.0], [61.1, 624.0], [61.2, 624.0], [61.3, 626.0], [61.4, 626.0], [61.5, 626.0], [61.6, 627.0], [61.7, 627.0], [61.8, 627.0], [61.9, 628.0], [62.0, 628.0], [62.1, 628.0], [62.2, 628.0], [62.3, 629.0], [62.4, 629.0], [62.5, 629.0], [62.6, 629.0], [62.7, 629.0], [62.8, 629.0], [62.9, 629.0], [63.0, 629.0], [63.1, 630.0], [63.2, 630.0], [63.3, 630.0], [63.4, 630.0], [63.5, 630.0], [63.6, 630.0], [63.7, 630.0], [63.8, 630.0], [63.9, 630.0], [64.0, 630.0], [64.1, 631.0], [64.2, 631.0], [64.3, 631.0], [64.4, 631.0], [64.5, 631.0], [64.6, 632.0], [64.7, 632.0], [64.8, 632.0], [64.9, 633.0], [65.0, 633.0], [65.1, 633.0], [65.2, 633.0], [65.3, 633.0], [65.4, 633.0], [65.5, 634.0], [65.6, 635.0], [65.7, 635.0], [65.8, 635.0], [65.9, 635.0], [66.0, 635.0], [66.1, 636.0], [66.2, 636.0], [66.3, 636.0], [66.4, 636.0], [66.5, 637.0], [66.6, 638.0], [66.7, 638.0], [66.8, 638.0], [66.9, 639.0], [67.0, 639.0], [67.1, 639.0], [67.2, 639.0], [67.3, 640.0], [67.4, 640.0], [67.5, 640.0], [67.6, 641.0], [67.7, 641.0], [67.8, 641.0], [67.9, 642.0], [68.0, 642.0], [68.1, 642.0], [68.2, 642.0], [68.3, 643.0], [68.4, 643.0], [68.5, 643.0], [68.6, 643.0], [68.7, 643.0], [68.8, 643.0], [68.9, 644.0], [69.0, 644.0], [69.1, 644.0], [69.2, 646.0], [69.3, 646.0], [69.4, 646.0], [69.5, 646.0], [69.6, 646.0], [69.7, 646.0], [69.8, 647.0], [69.9, 647.0], [70.0, 647.0], [70.1, 647.0], [70.2, 648.0], [70.3, 648.0], [70.4, 648.0], [70.5, 648.0], [70.6, 648.0], [70.7, 648.0], [70.8, 648.0], [70.9, 648.0], [71.0, 648.0], [71.1, 649.0], [71.2, 649.0], [71.3, 649.0], [71.4, 649.0], [71.5, 649.0], [71.6, 649.0], [71.7, 649.0], [71.8, 650.0], [71.9, 650.0], [72.0, 650.0], [72.1, 651.0], [72.2, 651.0], [72.3, 651.0], [72.4, 651.0], [72.5, 651.0], [72.6, 651.0], [72.7, 651.0], [72.8, 651.0], [72.9, 651.0], [73.0, 651.0], [73.1, 652.0], [73.2, 653.0], [73.3, 653.0], [73.4, 653.0], [73.5, 653.0], [73.6, 653.0], [73.7, 653.0], [73.8, 653.0], [73.9, 653.0], [74.0, 653.0], [74.1, 653.0], [74.2, 654.0], [74.3, 655.0], [74.4, 655.0], [74.5, 656.0], [74.6, 657.0], [74.7, 657.0], [74.8, 657.0], [74.9, 657.0], [75.0, 657.0], [75.1, 658.0], [75.2, 658.0], [75.3, 658.0], [75.4, 658.0], [75.5, 659.0], [75.6, 659.0], [75.7, 659.0], [75.8, 659.0], [75.9, 660.0], [76.0, 660.0], [76.1, 660.0], [76.2, 660.0], [76.3, 660.0], [76.4, 660.0], [76.5, 661.0], [76.6, 661.0], [76.7, 661.0], [76.8, 661.0], [76.9, 662.0], [77.0, 662.0], [77.1, 662.0], [77.2, 662.0], [77.3, 662.0], [77.4, 662.0], [77.5, 662.0], [77.6, 662.0], [77.7, 662.0], [77.8, 662.0], [77.9, 664.0], [78.0, 664.0], [78.1, 664.0], [78.2, 665.0], [78.3, 665.0], [78.4, 665.0], [78.5, 666.0], [78.6, 666.0], [78.7, 666.0], [78.8, 666.0], [78.9, 666.0], [79.0, 666.0], [79.1, 666.0], [79.2, 666.0], [79.3, 666.0], [79.4, 666.0], [79.5, 667.0], [79.6, 667.0], [79.7, 667.0], [79.8, 668.0], [79.9, 668.0], [80.0, 668.0], [80.1, 669.0], [80.2, 669.0], [80.3, 669.0], [80.4, 669.0], [80.5, 669.0], [80.6, 669.0], [80.7, 669.0], [80.8, 670.0], [80.9, 670.0], [81.0, 670.0], [81.1, 670.0], [81.2, 670.0], [81.3, 670.0], [81.4, 670.0], [81.5, 671.0], [81.6, 671.0], [81.7, 671.0], [81.8, 672.0], [81.9, 672.0], [82.0, 672.0], [82.1, 672.0], [82.2, 672.0], [82.3, 673.0], [82.4, 673.0], [82.5, 673.0], [82.6, 674.0], [82.7, 674.0], [82.8, 674.0], [82.9, 674.0], [83.0, 674.0], [83.1, 675.0], [83.2, 676.0], [83.3, 676.0], [83.4, 676.0], [83.5, 676.0], [83.6, 676.0], [83.7, 676.0], [83.8, 677.0], [83.9, 677.0], [84.0, 677.0], [84.1, 677.0], [84.2, 677.0], [84.3, 677.0], [84.4, 677.0], [84.5, 678.0], [84.6, 678.0], [84.7, 678.0], [84.8, 678.0], [84.9, 678.0], [85.0, 678.0], [85.1, 679.0], [85.2, 679.0], [85.3, 679.0], [85.4, 679.0], [85.5, 679.0], [85.6, 679.0], [85.7, 679.0], [85.8, 680.0], [85.9, 680.0], [86.0, 680.0], [86.1, 681.0], [86.2, 681.0], [86.3, 682.0], [86.4, 682.0], [86.5, 682.0], [86.6, 682.0], [86.7, 682.0], [86.8, 682.0], [86.9, 683.0], [87.0, 683.0], [87.1, 683.0], [87.2, 683.0], [87.3, 683.0], [87.4, 683.0], [87.5, 683.0], [87.6, 683.0], [87.7, 683.0], [87.8, 684.0], [87.9, 685.0], [88.0, 685.0], [88.1, 686.0], [88.2, 686.0], [88.3, 686.0], [88.4, 686.0], [88.5, 687.0], [88.6, 687.0], [88.7, 687.0], [88.8, 687.0], [88.9, 688.0], [89.0, 688.0], [89.1, 688.0], [89.2, 688.0], [89.3, 688.0], [89.4, 688.0], [89.5, 688.0], [89.6, 690.0], [89.7, 690.0], [89.8, 691.0], [89.9, 691.0], [90.0, 691.0], [90.1, 691.0], [90.2, 692.0], [90.3, 692.0], [90.4, 692.0], [90.5, 693.0], [90.6, 694.0], [90.7, 694.0], [90.8, 695.0], [90.9, 696.0], [91.0, 696.0], [91.1, 696.0], [91.2, 696.0], [91.3, 696.0], [91.4, 696.0], [91.5, 696.0], [91.6, 697.0], [91.7, 697.0], [91.8, 699.0], [91.9, 699.0], [92.0, 699.0], [92.1, 699.0], [92.2, 700.0], [92.3, 700.0], [92.4, 700.0], [92.5, 700.0], [92.6, 700.0], [92.7, 700.0], [92.8, 701.0], [92.9, 701.0], [93.0, 701.0], [93.1, 702.0], [93.2, 702.0], [93.3, 703.0], [93.4, 703.0], [93.5, 703.0], [93.6, 703.0], [93.7, 703.0], [93.8, 703.0], [93.9, 704.0], [94.0, 704.0], [94.1, 704.0], [94.2, 706.0], [94.3, 706.0], [94.4, 706.0], [94.5, 708.0], [94.6, 708.0], [94.7, 708.0], [94.8, 708.0], [94.9, 708.0], [95.0, 708.0], [95.1, 709.0], [95.2, 709.0], [95.3, 709.0], [95.4, 709.0], [95.5, 710.0], [95.6, 711.0], [95.7, 711.0], [95.8, 712.0], [95.9, 712.0], [96.0, 712.0], [96.1, 714.0], [96.2, 714.0], [96.3, 715.0], [96.4, 715.0], [96.5, 715.0], [96.6, 717.0], [96.7, 717.0], [96.8, 717.0], [96.9, 719.0], [97.0, 719.0], [97.1, 721.0], [97.2, 721.0], [97.3, 721.0], [97.4, 721.0], [97.5, 722.0], [97.6, 724.0], [97.7, 724.0], [97.8, 725.0], [97.9, 728.0], [98.0, 728.0], [98.1, 728.0], [98.2, 729.0], [98.3, 731.0], [98.4, 731.0], [98.5, 734.0], [98.6, 734.0], [98.7, 734.0], [98.8, 737.0], [98.9, 740.0], [99.0, 740.0], [99.1, 742.0], [99.2, 743.0], [99.3, 744.0], [99.4, 744.0], [99.5, 745.0], [99.6, 748.0], [99.7, 748.0], [99.8, 754.0], [99.9, 756.0], [100.0, 756.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 274.0, "series": [{"data": [[0.0, 33.0], [300.0, 2.0], [600.0, 274.0], [700.0, 55.0], [100.0, 240.0], [200.0, 32.0], [400.0, 20.0], [500.0, 44.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 700.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 140.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 373.0, "series": [{"data": [[0.0, 187.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 373.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 140.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 256.77857142857096, "minX": 1.68830082E12, "maxY": 256.77857142857096, "series": [{"data": [[1.68830082E12, 256.77857142857096]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830082E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.0, "maxY": 754.0, "series": [{"data": [[3.0, 717.0], [5.0, 687.5], [6.0, 734.0], [7.0, 706.0], [8.0, 701.0], [9.0, 724.0], [12.0, 693.6666666666666], [13.0, 700.0], [14.0, 696.0], [15.0, 686.0], [18.0, 728.3333333333334], [21.0, 717.0], [23.0, 692.25], [24.0, 682.0], [25.0, 646.0], [26.0, 734.0], [28.0, 692.0], [29.0, 678.0], [31.0, 679.0], [33.0, 684.3333333333334], [35.0, 666.0], [34.0, 700.0], [37.0, 655.5], [38.0, 717.0], [41.0, 743.0], [40.0, 698.0], [42.0, 694.0], [44.0, 686.5], [46.0, 697.5], [52.0, 671.6666666666666], [54.0, 688.5], [57.0, 688.0], [56.0, 668.5], [58.0, 31.0], [59.0, 639.0], [61.0, 654.0], [62.0, 683.0], [65.0, 312.42857142857144], [67.0, 365.0], [66.0, 683.0], [71.0, 708.0], [70.0, 669.0], [69.0, 670.5], [74.0, 662.0], [73.0, 682.0], [72.0, 665.0], [76.0, 53.0], [78.0, 214.5], [77.0, 520.0], [79.0, 669.0], [83.0, 651.0], [82.0, 667.0], [87.0, 678.3333333333334], [85.0, 658.0], [91.0, 662.0], [90.0, 662.0], [89.0, 649.0], [88.0, 691.0], [95.0, 632.0], [94.0, 706.0], [93.0, 644.0], [99.0, 609.0], [98.0, 648.5], [97.0, 635.0], [103.0, 520.75], [102.0, 77.0], [100.0, 647.0], [105.0, 354.75], [111.0, 624.5], [109.0, 647.0], [108.0, 634.6666666666666], [115.0, 87.0], [114.0, 630.0], [113.0, 619.0], [112.0, 623.0], [119.0, 609.0], [118.0, 601.0], [117.0, 629.0], [116.0, 636.0], [123.0, 636.0], [122.0, 638.0], [121.0, 641.0], [127.0, 612.0], [125.0, 660.0], [124.0, 592.0], [129.0, 263.0], [128.0, 352.5], [135.0, 595.0], [134.0, 617.0], [133.0, 626.0], [132.0, 664.0], [131.0, 616.5], [143.0, 613.5], [141.0, 596.0], [139.0, 617.5], [137.0, 590.0], [136.0, 587.0], [148.0, 101.0], [150.0, 481.5], [151.0, 603.0], [147.0, 600.0], [145.0, 606.0], [144.0, 602.0], [159.0, 566.0], [158.0, 588.0], [157.0, 612.0], [156.0, 610.0], [155.0, 541.0], [154.0, 593.0], [153.0, 593.0], [152.0, 631.0], [166.0, 592.4], [161.0, 592.0], [175.0, 643.0], [172.0, 582.0], [171.0, 596.0], [170.0, 594.0], [169.0, 583.0], [168.0, 599.0], [180.0, 125.0], [179.0, 387.1666666666667], [183.0, 698.75], [176.0, 589.0], [189.0, 136.0], [187.0, 497.0], [191.0, 709.0], [185.0, 579.0], [184.0, 590.0], [195.0, 135.0], [196.0, 129.0], [193.0, 379.6363636363636], [198.0, 635.0], [197.0, 693.6666666666666], [194.0, 754.0], [204.0, 326.66666666666663], [202.0, 145.75], [207.0, 127.0], [206.0, 661.0], [203.0, 735.0], [201.0, 646.0], [200.0, 633.0], [213.0, 240.77777777777777], [215.0, 664.0], [210.0, 629.5], [208.0, 666.0], [223.0, 571.6], [222.0, 187.0], [220.0, 150.0], [219.0, 493.6666666666667], [218.0, 654.5], [231.0, 164.0], [229.0, 179.0], [228.0, 155.0], [227.0, 186.0], [225.0, 182.0], [224.0, 458.0], [230.0, 675.5], [226.0, 696.0], [239.0, 350.5454545454545], [235.0, 345.8], [236.0, 168.33333333333334], [233.0, 330.3333333333333], [232.0, 461.0], [237.0, 173.0], [244.0, 160.66666666666666], [241.0, 160.0], [240.0, 146.5], [242.0, 378.2857142857143], [246.0, 648.0], [245.0, 661.5], [253.0, 314.2857142857143], [254.0, 255.14285714285714], [252.0, 667.0], [250.0, 655.0], [249.0, 659.0], [248.0, 627.0], [257.0, 446.5], [258.0, 347.55555555555554], [260.0, 183.0], [261.0, 560.5], [262.0, 174.68421052631578], [263.0, 613.0], [267.0, 216.0], [269.0, 432.55555555555554], [270.0, 360.0], [271.0, 406.0], [264.0, 447.75], [287.0, 630.0], [273.0, 437.5], [283.0, 102.0], [285.0, 608.0], [275.0, 645.0], [282.0, 649.0], [281.0, 632.0], [279.0, 609.0], [278.0, 673.0], [277.0, 629.0], [289.0, 256.0], [294.0, 266.0], [293.0, 113.0], [302.0, 558.6], [300.0, 677.0], [297.0, 643.0], [296.0, 678.25], [295.0, 631.0], [288.0, 681.0], [291.0, 704.0], [290.0, 648.5], [310.0, 280.0], [318.0, 680.0], [316.0, 630.0], [315.0, 648.0], [314.0, 669.6], [309.0, 646.8], [308.0, 619.0], [335.0, 676.0], [334.0, 647.0], [332.0, 630.5], [330.0, 642.0], [327.0, 671.5], [325.0, 677.6666666666666], [324.0, 688.0], [321.0, 636.25], [350.0, 650.0], [351.0, 512.0], [349.0, 609.0], [347.0, 679.0], [346.0, 636.0], [344.0, 640.5], [342.0, 633.8], [340.0, 650.0], [336.0, 679.0], [366.0, 600.5], [364.0, 506.0], [362.0, 488.0], [361.0, 515.0], [360.0, 610.0], [359.0, 491.0], [358.0, 659.0], [356.0, 620.0], [354.0, 503.0], [380.0, 492.0], [382.0, 486.0], [383.0, 623.0], [381.0, 486.0], [379.0, 472.0], [378.0, 475.75], [374.0, 634.0], [368.0, 605.0], [371.0, 578.0], [369.0, 472.0], [373.0, 643.0], [372.0, 610.0], [387.0, 455.0], [396.0, 201.0], [397.0, 117.0], [395.0, 126.0], [393.0, 173.0], [391.0, 593.0], [390.0, 453.0], [386.0, 448.0], [385.0, 609.0], [384.0, 472.0], [411.0, 294.0], [413.0, 184.0], [412.0, 181.0], [409.0, 207.0], [407.0, 160.75], [404.0, 218.0], [402.0, 143.0], [401.0, 112.75], [429.0, 125.0], [427.0, 127.5], [424.0, 108.0], [422.0, 114.5], [421.0, 110.0], [420.0, 109.0], [419.0, 149.0], [417.0, 178.5], [435.0, 136.0], [447.0, 125.0], [446.0, 134.0], [443.0, 100.0], [442.0, 133.0], [439.0, 114.5], [437.0, 125.0], [433.0, 126.0], [432.0, 124.66666666666667], [462.0, 98.0], [463.0, 99.0], [461.0, 114.0], [460.0, 109.0], [459.0, 114.0], [458.0, 115.0], [457.0, 140.0], [456.0, 176.0], [455.0, 141.66666666666666], [449.0, 125.0], [448.0, 107.0], [452.0, 120.0], [479.0, 158.0], [477.0, 162.0], [475.0, 164.0], [474.0, 113.0], [472.0, 211.0], [471.0, 130.0], [468.0, 132.5], [466.0, 95.0], [465.0, 111.5], [483.0, 193.0], [494.0, 160.0], [495.0, 175.0], [493.0, 175.0], [491.0, 174.33333333333334], [490.0, 200.0], [487.0, 164.0], [484.0, 159.0], [481.0, 164.0], [480.0, 212.0], [511.0, 143.0], [508.0, 144.0], [499.0, 150.0], [507.0, 144.5], [505.0, 158.24999999999997], [504.0, 145.0], [503.0, 149.0], [502.0, 169.5], [501.0, 167.5], [500.0, 147.0], [531.0, 134.5], [536.0, 307.0], [534.0, 510.0], [533.0, 212.0], [532.0, 135.5], [529.0, 145.0], [526.0, 163.0], [513.0, 145.0], [516.0, 142.5], [514.0, 138.0], [519.0, 139.0], [518.0, 140.0], [525.0, 410.0], [524.0, 144.0], [523.0, 137.5], [522.0, 140.0], [1.0, 708.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[256.77857142857096, 426.0871428571425]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 536.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1698.6666666666667, "minX": 1.68830082E12, "maxY": 9872.333333333334, "series": [{"data": [[1.68830082E12, 9872.333333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830082E12, 1698.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830082E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 426.0871428571425, "minX": 1.68830082E12, "maxY": 426.0871428571425, "series": [{"data": [[1.68830082E12, 426.0871428571425]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830082E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 397.4000000000002, "minX": 1.68830082E12, "maxY": 397.4000000000002, "series": [{"data": [[1.68830082E12, 397.4000000000002]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830082E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 59.210000000000015, "minX": 1.68830082E12, "maxY": 59.210000000000015, "series": [{"data": [[1.68830082E12, 59.210000000000015]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830082E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.68830082E12, "maxY": 756.0, "series": [{"data": [[1.68830082E12, 756.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830082E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830082E12, 699.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830082E12, 743.39]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830082E12, 619.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830082E12, 713.8999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830082E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 142.0, "minX": 166.0, "maxY": 650.0, "series": [{"data": [[534.0, 650.0], [166.0, 158.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[534.0, 142.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 534.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 0.0, "minX": 166.0, "maxY": 650.0, "series": [{"data": [[534.0, 650.0], [166.0, 158.5]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[534.0, 0.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 534.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.666666666666666, "minX": 1.68830082E12, "maxY": 11.666666666666666, "series": [{"data": [[1.68830082E12, 11.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830082E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.68830082E12, "maxY": 9.333333333333334, "series": [{"data": [[1.68830082E12, 9.333333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.68830082E12, 2.3333333333333335]], "isOverall": false, "label": "Non HTTP response code: org.apache.http.conn.HttpHostConnectException", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830082E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.68830082E12, "maxY": 9.333333333333334, "series": [{"data": [[1.68830082E12, 2.3333333333333335]], "isOverall": false, "label": "gateway_cl/hellotea/tea-failure", "isController": false}, {"data": [[1.68830082E12, 9.333333333333334]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830082E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 2.3333333333333335, "minX": 1.68830082E12, "maxY": 9.333333333333334, "series": [{"data": [[1.68830082E12, 9.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.68830082E12, 2.3333333333333335]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830082E12, "title": "Total Transactions Per Second"}},
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

