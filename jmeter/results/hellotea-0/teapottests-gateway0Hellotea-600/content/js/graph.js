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
        data: {"result": {"minY": 19.0, "minX": 0.0, "maxY": 470.0, "series": [{"data": [[0.0, 19.0], [0.1, 19.0], [0.2, 21.0], [0.3, 21.0], [0.4, 22.0], [0.5, 22.0], [0.6, 22.0], [0.7, 22.0], [0.8, 22.0], [0.9, 23.0], [1.0, 23.0], [1.1, 23.0], [1.2, 23.0], [1.3, 23.0], [1.4, 26.0], [1.5, 26.0], [1.6, 26.0], [1.7, 28.0], [1.8, 28.0], [1.9, 28.0], [2.0, 29.0], [2.1, 29.0], [2.2, 32.0], [2.3, 32.0], [2.4, 33.0], [2.5, 33.0], [2.6, 33.0], [2.7, 33.0], [2.8, 33.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 36.0], [3.3, 36.0], [3.4, 37.0], [3.5, 37.0], [3.6, 37.0], [3.7, 38.0], [3.8, 38.0], [3.9, 39.0], [4.0, 39.0], [4.1, 39.0], [4.2, 40.0], [4.3, 40.0], [4.4, 40.0], [4.5, 41.0], [4.6, 41.0], [4.7, 41.0], [4.8, 41.0], [4.9, 41.0], [5.0, 42.0], [5.1, 42.0], [5.2, 42.0], [5.3, 42.0], [5.4, 44.0], [5.5, 44.0], [5.6, 44.0], [5.7, 45.0], [5.8, 45.0], [5.9, 46.0], [6.0, 46.0], [6.1, 46.0], [6.2, 47.0], [6.3, 47.0], [6.4, 50.0], [6.5, 51.0], [6.6, 51.0], [6.7, 51.0], [6.8, 51.0], [6.9, 53.0], [7.0, 54.0], [7.1, 54.0], [7.2, 55.0], [7.3, 55.0], [7.4, 55.0], [7.5, 56.0], [7.6, 56.0], [7.7, 57.0], [7.8, 57.0], [7.9, 57.0], [8.0, 58.0], [8.1, 58.0], [8.2, 58.0], [8.3, 58.0], [8.4, 59.0], [8.5, 59.0], [8.6, 59.0], [8.7, 59.0], [8.8, 59.0], [8.9, 59.0], [9.0, 59.0], [9.1, 59.0], [9.2, 59.0], [9.3, 59.0], [9.4, 59.0], [9.5, 60.0], [9.6, 60.0], [9.7, 60.0], [9.8, 60.0], [9.9, 60.0], [10.0, 60.0], [10.1, 60.0], [10.2, 61.0], [10.3, 61.0], [10.4, 61.0], [10.5, 61.0], [10.6, 61.0], [10.7, 61.0], [10.8, 61.0], [10.9, 61.0], [11.0, 61.0], [11.1, 61.0], [11.2, 62.0], [11.3, 62.0], [11.4, 63.0], [11.5, 63.0], [11.6, 63.0], [11.7, 63.0], [11.8, 63.0], [11.9, 64.0], [12.0, 64.0], [12.1, 64.0], [12.2, 65.0], [12.3, 65.0], [12.4, 65.0], [12.5, 65.0], [12.6, 65.0], [12.7, 66.0], [12.8, 66.0], [12.9, 67.0], [13.0, 67.0], [13.1, 67.0], [13.2, 68.0], [13.3, 68.0], [13.4, 68.0], [13.5, 69.0], [13.6, 69.0], [13.7, 70.0], [13.8, 70.0], [13.9, 71.0], [14.0, 73.0], [14.1, 73.0], [14.2, 73.0], [14.3, 73.0], [14.4, 76.0], [14.5, 76.0], [14.6, 76.0], [14.7, 76.0], [14.8, 76.0], [14.9, 77.0], [15.0, 78.0], [15.1, 78.0], [15.2, 78.0], [15.3, 78.0], [15.4, 79.0], [15.5, 80.0], [15.6, 80.0], [15.7, 80.0], [15.8, 80.0], [15.9, 80.0], [16.0, 80.0], [16.1, 80.0], [16.2, 82.0], [16.3, 82.0], [16.4, 82.0], [16.5, 82.0], [16.6, 82.0], [16.7, 83.0], [16.8, 83.0], [16.9, 83.0], [17.0, 84.0], [17.1, 84.0], [17.2, 85.0], [17.3, 85.0], [17.4, 86.0], [17.5, 86.0], [17.6, 86.0], [17.7, 86.0], [17.8, 86.0], [17.9, 86.0], [18.0, 87.0], [18.1, 87.0], [18.2, 89.0], [18.3, 89.0], [18.4, 89.0], [18.5, 89.0], [18.6, 89.0], [18.7, 89.0], [18.8, 89.0], [18.9, 89.0], [19.0, 90.0], [19.1, 90.0], [19.2, 90.0], [19.3, 90.0], [19.4, 90.0], [19.5, 91.0], [19.6, 91.0], [19.7, 91.0], [19.8, 91.0], [19.9, 91.0], [20.0, 91.0], [20.1, 91.0], [20.2, 91.0], [20.3, 91.0], [20.4, 92.0], [20.5, 92.0], [20.6, 92.0], [20.7, 92.0], [20.8, 92.0], [20.9, 94.0], [21.0, 94.0], [21.1, 94.0], [21.2, 95.0], [21.3, 95.0], [21.4, 95.0], [21.5, 95.0], [21.6, 95.0], [21.7, 96.0], [21.8, 96.0], [21.9, 96.0], [22.0, 96.0], [22.1, 96.0], [22.2, 97.0], [22.3, 97.0], [22.4, 97.0], [22.5, 98.0], [22.6, 98.0], [22.7, 98.0], [22.8, 98.0], [22.9, 99.0], [23.0, 99.0], [23.1, 99.0], [23.2, 100.0], [23.3, 100.0], [23.4, 100.0], [23.5, 100.0], [23.6, 100.0], [23.7, 101.0], [23.8, 101.0], [23.9, 101.0], [24.0, 102.0], [24.1, 102.0], [24.2, 102.0], [24.3, 102.0], [24.4, 103.0], [24.5, 103.0], [24.6, 103.0], [24.7, 105.0], [24.8, 105.0], [24.9, 107.0], [25.0, 108.0], [25.1, 108.0], [25.2, 108.0], [25.3, 108.0], [25.4, 108.0], [25.5, 109.0], [25.6, 109.0], [25.7, 110.0], [25.8, 110.0], [25.9, 112.0], [26.0, 115.0], [26.1, 115.0], [26.2, 115.0], [26.3, 115.0], [26.4, 115.0], [26.5, 116.0], [26.6, 116.0], [26.7, 118.0], [26.8, 118.0], [26.9, 119.0], [27.0, 122.0], [27.1, 122.0], [27.2, 125.0], [27.3, 125.0], [27.4, 126.0], [27.5, 126.0], [27.6, 127.0], [27.7, 129.0], [27.8, 129.0], [27.9, 132.0], [28.0, 132.0], [28.1, 134.0], [28.2, 134.0], [28.3, 134.0], [28.4, 137.0], [28.5, 137.0], [28.6, 138.0], [28.7, 143.0], [28.8, 143.0], [28.9, 144.0], [29.0, 144.0], [29.1, 144.0], [29.2, 145.0], [29.3, 145.0], [29.4, 146.0], [29.5, 146.0], [29.6, 146.0], [29.7, 146.0], [29.8, 146.0], [29.9, 146.0], [30.0, 146.0], [30.1, 146.0], [30.2, 146.0], [30.3, 146.0], [30.4, 147.0], [30.5, 147.0], [30.6, 147.0], [30.7, 149.0], [30.8, 149.0], [30.9, 150.0], [31.0, 150.0], [31.1, 151.0], [31.2, 151.0], [31.3, 151.0], [31.4, 151.0], [31.5, 151.0], [31.6, 152.0], [31.7, 169.0], [31.8, 169.0], [31.9, 170.0], [32.0, 170.0], [32.1, 171.0], [32.2, 173.0], [32.3, 173.0], [32.4, 173.0], [32.5, 173.0], [32.6, 174.0], [32.7, 174.0], [32.8, 174.0], [32.9, 176.0], [33.0, 176.0], [33.1, 176.0], [33.2, 176.0], [33.3, 176.0], [33.4, 177.0], [33.5, 177.0], [33.6, 177.0], [33.7, 177.0], [33.8, 177.0], [33.9, 177.0], [34.0, 177.0], [34.1, 177.0], [34.2, 178.0], [34.3, 178.0], [34.4, 179.0], [34.5, 179.0], [34.6, 179.0], [34.7, 179.0], [34.8, 179.0], [34.9, 179.0], [35.0, 179.0], [35.1, 179.0], [35.2, 180.0], [35.3, 180.0], [35.4, 180.0], [35.5, 180.0], [35.6, 181.0], [35.7, 181.0], [35.8, 181.0], [35.9, 183.0], [36.0, 183.0], [36.1, 183.0], [36.2, 183.0], [36.3, 183.0], [36.4, 186.0], [36.5, 186.0], [36.6, 187.0], [36.7, 189.0], [36.8, 189.0], [36.9, 197.0], [37.0, 197.0], [37.1, 198.0], [37.2, 198.0], [37.3, 198.0], [37.4, 198.0], [37.5, 198.0], [37.6, 199.0], [37.7, 204.0], [37.8, 204.0], [37.9, 207.0], [38.0, 207.0], [38.1, 211.0], [38.2, 215.0], [38.3, 215.0], [38.4, 216.0], [38.5, 219.0], [38.6, 219.0], [38.7, 221.0], [38.8, 221.0], [38.9, 228.0], [39.0, 236.0], [39.1, 236.0], [39.2, 238.0], [39.3, 238.0], [39.4, 240.0], [39.5, 242.0], [39.6, 242.0], [39.7, 247.0], [39.8, 247.0], [39.9, 248.0], [40.0, 251.0], [40.1, 251.0], [40.2, 254.0], [40.3, 254.0], [40.4, 254.0], [40.5, 256.0], [40.6, 256.0], [40.7, 257.0], [40.8, 257.0], [40.9, 260.0], [41.0, 261.0], [41.1, 261.0], [41.2, 263.0], [41.3, 263.0], [41.4, 265.0], [41.5, 265.0], [41.6, 265.0], [41.7, 267.0], [41.8, 267.0], [41.9, 267.0], [42.0, 268.0], [42.1, 268.0], [42.2, 269.0], [42.3, 269.0], [42.4, 269.0], [42.5, 270.0], [42.6, 270.0], [42.7, 270.0], [42.8, 270.0], [42.9, 278.0], [43.0, 282.0], [43.1, 282.0], [43.2, 284.0], [43.3, 284.0], [43.4, 284.0], [43.5, 287.0], [43.6, 287.0], [43.7, 289.0], [43.8, 289.0], [43.9, 293.0], [44.0, 299.0], [44.1, 299.0], [44.2, 300.0], [44.3, 300.0], [44.4, 302.0], [44.5, 308.0], [44.6, 308.0], [44.7, 314.0], [44.8, 314.0], [44.9, 314.0], [45.0, 314.0], [45.1, 314.0], [45.2, 315.0], [45.3, 315.0], [45.4, 315.0], [45.5, 316.0], [45.6, 316.0], [45.7, 317.0], [45.8, 317.0], [45.9, 317.0], [46.0, 317.0], [46.1, 317.0], [46.2, 318.0], [46.3, 318.0], [46.4, 318.0], [46.5, 318.0], [46.6, 318.0], [46.7, 319.0], [46.8, 319.0], [46.9, 319.0], [47.0, 319.0], [47.1, 319.0], [47.2, 319.0], [47.3, 319.0], [47.4, 320.0], [47.5, 321.0], [47.6, 321.0], [47.7, 321.0], [47.8, 321.0], [47.9, 321.0], [48.0, 322.0], [48.1, 322.0], [48.2, 322.0], [48.3, 322.0], [48.4, 323.0], [48.5, 323.0], [48.6, 323.0], [48.7, 324.0], [48.8, 324.0], [48.9, 324.0], [49.0, 324.0], [49.1, 324.0], [49.2, 324.0], [49.3, 324.0], [49.4, 325.0], [49.5, 325.0], [49.6, 325.0], [49.7, 325.0], [49.8, 325.0], [49.9, 325.0], [50.0, 325.0], [50.1, 325.0], [50.2, 325.0], [50.3, 325.0], [50.4, 326.0], [50.5, 326.0], [50.6, 326.0], [50.7, 326.0], [50.8, 326.0], [50.9, 327.0], [51.0, 327.0], [51.1, 327.0], [51.2, 327.0], [51.3, 327.0], [51.4, 328.0], [51.5, 328.0], [51.6, 328.0], [51.7, 328.0], [51.8, 328.0], [51.9, 329.0], [52.0, 329.0], [52.1, 329.0], [52.2, 329.0], [52.3, 329.0], [52.4, 329.0], [52.5, 329.0], [52.6, 329.0], [52.7, 329.0], [52.8, 329.0], [52.9, 330.0], [53.0, 330.0], [53.1, 330.0], [53.2, 331.0], [53.3, 331.0], [53.4, 332.0], [53.5, 334.0], [53.6, 334.0], [53.7, 335.0], [53.8, 335.0], [53.9, 335.0], [54.0, 337.0], [54.1, 337.0], [54.2, 337.0], [54.3, 337.0], [54.4, 338.0], [54.5, 338.0], [54.6, 338.0], [54.7, 339.0], [54.8, 339.0], [54.9, 339.0], [55.0, 339.0], [55.1, 339.0], [55.2, 339.0], [55.3, 339.0], [55.4, 339.0], [55.5, 339.0], [55.6, 339.0], [55.7, 340.0], [55.8, 340.0], [55.9, 340.0], [56.0, 340.0], [56.1, 340.0], [56.2, 341.0], [56.3, 341.0], [56.4, 341.0], [56.5, 342.0], [56.6, 342.0], [56.7, 342.0], [56.8, 342.0], [56.9, 343.0], [57.0, 343.0], [57.1, 343.0], [57.2, 343.0], [57.3, 343.0], [57.4, 344.0], [57.5, 344.0], [57.6, 344.0], [57.7, 344.0], [57.8, 344.0], [57.9, 345.0], [58.0, 345.0], [58.1, 345.0], [58.2, 345.0], [58.3, 345.0], [58.4, 346.0], [58.5, 346.0], [58.6, 346.0], [58.7, 347.0], [58.8, 347.0], [58.9, 347.0], [59.0, 348.0], [59.1, 348.0], [59.2, 348.0], [59.3, 348.0], [59.4, 349.0], [59.5, 349.0], [59.6, 349.0], [59.7, 350.0], [59.8, 350.0], [59.9, 351.0], [60.0, 351.0], [60.1, 351.0], [60.2, 351.0], [60.3, 351.0], [60.4, 352.0], [60.5, 353.0], [60.6, 353.0], [60.7, 353.0], [60.8, 353.0], [60.9, 353.0], [61.0, 353.0], [61.1, 353.0], [61.2, 354.0], [61.3, 354.0], [61.4, 355.0], [61.5, 355.0], [61.6, 355.0], [61.7, 357.0], [61.8, 357.0], [61.9, 357.0], [62.0, 359.0], [62.1, 359.0], [62.2, 359.0], [62.3, 359.0], [62.4, 359.0], [62.5, 360.0], [62.6, 360.0], [62.7, 361.0], [62.8, 361.0], [62.9, 362.0], [63.0, 363.0], [63.1, 363.0], [63.2, 364.0], [63.3, 364.0], [63.4, 365.0], [63.5, 365.0], [63.6, 365.0], [63.7, 367.0], [63.8, 367.0], [63.9, 368.0], [64.0, 368.0], [64.1, 368.0], [64.2, 371.0], [64.3, 371.0], [64.4, 371.0], [64.5, 373.0], [64.6, 373.0], [64.7, 373.0], [64.8, 373.0], [64.9, 373.0], [65.0, 373.0], [65.1, 373.0], [65.2, 375.0], [65.3, 375.0], [65.4, 375.0], [65.5, 376.0], [65.6, 376.0], [65.7, 376.0], [65.8, 376.0], [65.9, 377.0], [66.0, 377.0], [66.1, 377.0], [66.2, 377.0], [66.3, 377.0], [66.4, 378.0], [66.5, 378.0], [66.6, 378.0], [66.7, 379.0], [66.8, 379.0], [66.9, 379.0], [67.0, 379.0], [67.1, 379.0], [67.2, 379.0], [67.3, 379.0], [67.4, 379.0], [67.5, 379.0], [67.6, 379.0], [67.7, 379.0], [67.8, 379.0], [67.9, 380.0], [68.0, 380.0], [68.1, 380.0], [68.2, 381.0], [68.3, 381.0], [68.4, 381.0], [68.5, 381.0], [68.6, 381.0], [68.7, 383.0], [68.8, 383.0], [68.9, 383.0], [69.0, 384.0], [69.1, 384.0], [69.2, 384.0], [69.3, 384.0], [69.4, 385.0], [69.5, 385.0], [69.6, 385.0], [69.7, 385.0], [69.8, 385.0], [69.9, 385.0], [70.0, 386.0], [70.1, 386.0], [70.2, 387.0], [70.3, 387.0], [70.4, 387.0], [70.5, 387.0], [70.6, 387.0], [70.7, 387.0], [70.8, 387.0], [70.9, 387.0], [71.0, 387.0], [71.1, 387.0], [71.2, 388.0], [71.3, 388.0], [71.4, 388.0], [71.5, 388.0], [71.6, 388.0], [71.7, 389.0], [71.8, 389.0], [71.9, 389.0], [72.0, 389.0], [72.1, 389.0], [72.2, 390.0], [72.3, 390.0], [72.4, 390.0], [72.5, 390.0], [72.6, 390.0], [72.7, 391.0], [72.8, 391.0], [72.9, 391.0], [73.0, 391.0], [73.1, 391.0], [73.2, 391.0], [73.3, 391.0], [73.4, 391.0], [73.5, 391.0], [73.6, 391.0], [73.7, 392.0], [73.8, 392.0], [73.9, 392.0], [74.0, 392.0], [74.1, 392.0], [74.2, 392.0], [74.3, 392.0], [74.4, 392.0], [74.5, 393.0], [74.6, 393.0], [74.7, 393.0], [74.8, 393.0], [74.9, 394.0], [75.0, 395.0], [75.1, 395.0], [75.2, 395.0], [75.3, 395.0], [75.4, 395.0], [75.5, 396.0], [75.6, 396.0], [75.7, 396.0], [75.8, 396.0], [75.9, 396.0], [76.0, 396.0], [76.1, 396.0], [76.2, 396.0], [76.3, 396.0], [76.4, 397.0], [76.5, 397.0], [76.6, 397.0], [76.7, 397.0], [76.8, 397.0], [76.9, 397.0], [77.0, 397.0], [77.1, 397.0], [77.2, 398.0], [77.3, 398.0], [77.4, 398.0], [77.5, 398.0], [77.6, 398.0], [77.7, 398.0], [77.8, 398.0], [77.9, 399.0], [78.0, 399.0], [78.1, 399.0], [78.2, 399.0], [78.3, 399.0], [78.4, 399.0], [78.5, 400.0], [78.6, 400.0], [78.7, 400.0], [78.8, 400.0], [78.9, 400.0], [79.0, 401.0], [79.1, 401.0], [79.2, 401.0], [79.3, 401.0], [79.4, 403.0], [79.5, 404.0], [79.6, 404.0], [79.7, 405.0], [79.8, 405.0], [79.9, 405.0], [80.0, 405.0], [80.1, 405.0], [80.2, 406.0], [80.3, 406.0], [80.4, 406.0], [80.5, 406.0], [80.6, 406.0], [80.7, 408.0], [80.8, 408.0], [80.9, 408.0], [81.0, 408.0], [81.1, 408.0], [81.2, 409.0], [81.3, 409.0], [81.4, 409.0], [81.5, 409.0], [81.6, 409.0], [81.7, 409.0], [81.8, 409.0], [81.9, 409.0], [82.0, 410.0], [82.1, 410.0], [82.2, 410.0], [82.3, 410.0], [82.4, 411.0], [82.5, 411.0], [82.6, 411.0], [82.7, 411.0], [82.8, 411.0], [82.9, 411.0], [83.0, 411.0], [83.1, 411.0], [83.2, 411.0], [83.3, 411.0], [83.4, 412.0], [83.5, 412.0], [83.6, 412.0], [83.7, 412.0], [83.8, 412.0], [83.9, 412.0], [84.0, 412.0], [84.1, 412.0], [84.2, 413.0], [84.3, 413.0], [84.4, 413.0], [84.5, 413.0], [84.6, 413.0], [84.7, 413.0], [84.8, 413.0], [84.9, 413.0], [85.0, 413.0], [85.1, 413.0], [85.2, 413.0], [85.3, 413.0], [85.4, 413.0], [85.5, 414.0], [85.6, 414.0], [85.7, 414.0], [85.8, 414.0], [85.9, 415.0], [86.0, 415.0], [86.1, 415.0], [86.2, 415.0], [86.3, 415.0], [86.4, 417.0], [86.5, 417.0], [86.6, 417.0], [86.7, 417.0], [86.8, 417.0], [86.9, 417.0], [87.0, 418.0], [87.1, 418.0], [87.2, 418.0], [87.3, 418.0], [87.4, 419.0], [87.5, 419.0], [87.6, 419.0], [87.7, 419.0], [87.8, 419.0], [87.9, 419.0], [88.0, 420.0], [88.1, 420.0], [88.2, 421.0], [88.3, 421.0], [88.4, 421.0], [88.5, 422.0], [88.6, 422.0], [88.7, 422.0], [88.8, 422.0], [88.9, 423.0], [89.0, 424.0], [89.1, 424.0], [89.2, 424.0], [89.3, 424.0], [89.4, 424.0], [89.5, 425.0], [89.6, 425.0], [89.7, 425.0], [89.8, 425.0], [89.9, 426.0], [90.0, 426.0], [90.1, 426.0], [90.2, 426.0], [90.3, 426.0], [90.4, 427.0], [90.5, 427.0], [90.6, 427.0], [90.7, 427.0], [90.8, 427.0], [90.9, 427.0], [91.0, 428.0], [91.1, 428.0], [91.2, 428.0], [91.3, 428.0], [91.4, 428.0], [91.5, 428.0], [91.6, 428.0], [91.7, 429.0], [91.8, 429.0], [91.9, 429.0], [92.0, 429.0], [92.1, 429.0], [92.2, 429.0], [92.3, 429.0], [92.4, 429.0], [92.5, 430.0], [92.6, 430.0], [92.7, 430.0], [92.8, 430.0], [92.9, 430.0], [93.0, 431.0], [93.1, 431.0], [93.2, 431.0], [93.3, 431.0], [93.4, 431.0], [93.5, 431.0], [93.6, 431.0], [93.7, 431.0], [93.8, 431.0], [93.9, 432.0], [94.0, 432.0], [94.1, 432.0], [94.2, 432.0], [94.3, 432.0], [94.4, 433.0], [94.5, 433.0], [94.6, 433.0], [94.7, 434.0], [94.8, 434.0], [94.9, 434.0], [95.0, 435.0], [95.1, 435.0], [95.2, 436.0], [95.3, 436.0], [95.4, 437.0], [95.5, 438.0], [95.6, 438.0], [95.7, 438.0], [95.8, 438.0], [95.9, 438.0], [96.0, 439.0], [96.1, 439.0], [96.2, 439.0], [96.3, 439.0], [96.4, 439.0], [96.5, 440.0], [96.6, 440.0], [96.7, 440.0], [96.8, 440.0], [96.9, 441.0], [97.0, 442.0], [97.1, 442.0], [97.2, 443.0], [97.3, 443.0], [97.4, 444.0], [97.5, 444.0], [97.6, 444.0], [97.7, 446.0], [97.8, 446.0], [97.9, 449.0], [98.0, 450.0], [98.1, 450.0], [98.2, 451.0], [98.3, 451.0], [98.4, 454.0], [98.5, 456.0], [98.6, 456.0], [98.7, 458.0], [98.8, 458.0], [98.9, 460.0], [99.0, 460.0], [99.1, 460.0], [99.2, 461.0], [99.3, 461.0], [99.4, 462.0], [99.5, 463.0], [99.6, 463.0], [99.7, 466.0], [99.8, 466.0], [99.9, 470.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 39.0, "minX": 0.0, "maxY": 206.0, "series": [{"data": [[0.0, 139.0], [300.0, 206.0], [100.0, 87.0], [200.0, 39.0], [400.0, 129.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 600.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 600.0, "series": [{"data": [[0.0, 600.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 185.29833333333355, "minX": 1.68831132E12, "maxY": 185.29833333333355, "series": [{"data": [[1.68831132E12, 185.29833333333355]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831132E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.0, "maxY": 461.0, "series": [{"data": [[2.0, 379.0], [5.0, 373.3333333333333], [6.0, 377.0], [8.0, 376.0], [9.0, 362.0], [10.0, 379.0], [11.0, 343.0], [12.0, 376.0], [14.0, 403.0], [15.0, 429.0], [16.0, 354.0], [17.0, 424.0], [18.0, 348.0], [19.0, 353.0], [20.0, 373.0], [22.0, 373.0], [23.0, 376.0], [24.0, 360.0], [25.0, 371.0], [26.0, 337.0], [27.0, 359.0], [29.0, 348.0], [30.0, 368.0], [31.0, 344.0], [33.0, 59.55555555555556], [32.0, 363.0], [35.0, 26.0], [34.0, 340.0], [37.0, 190.5], [36.0, 190.0], [39.0, 341.0], [38.0, 343.0], [41.0, 411.0], [40.0, 339.0], [43.0, 194.0], [42.0, 317.0], [45.0, 35.0], [44.0, 36.75], [46.0, 37.0], [47.0, 41.666666666666664], [48.0, 295.83333333333337], [49.0, 145.33333333333331], [51.0, 362.5], [53.0, 45.0], [52.0, 146.33333333333331], [57.0, 349.0], [59.0, 210.0], [58.0, 375.0], [60.0, 51.0], [61.0, 252.66666666666666], [62.0, 55.0], [63.0, 342.0], [65.0, 55.0], [64.0, 207.0], [67.0, 60.0], [66.0, 62.666666666666664], [70.0, 157.0], [68.0, 293.8], [69.0, 195.0], [71.0, 338.0], [75.0, 148.66666666666669], [74.0, 329.0], [73.0, 342.5], [76.0, 63.0], [79.0, 344.0], [78.0, 335.0], [77.0, 370.0], [83.0, 341.0], [82.0, 357.0], [80.0, 347.0], [87.0, 299.0], [86.0, 314.0], [85.0, 314.5], [91.0, 63.0], [90.0, 340.0], [89.0, 312.5], [95.0, 132.25], [93.0, 346.0], [92.0, 347.5], [96.0, 68.0], [97.0, 229.33333333333334], [99.0, 329.0], [103.0, 298.3333333333333], [100.0, 326.0], [106.0, 338.0], [110.0, 322.0], [109.0, 309.6666666666667], [115.0, 325.0], [114.0, 319.0], [113.0, 315.0], [112.0, 288.5], [119.0, 328.0], [118.0, 317.0], [117.0, 328.5], [123.0, 270.0], [122.0, 324.0], [121.0, 324.0], [120.0, 326.0], [127.0, 320.0], [126.0, 318.0], [124.0, 385.0], [133.0, 325.0], [132.0, 327.0], [131.0, 299.0], [129.0, 315.0], [128.0, 319.0], [142.0, 324.0], [141.0, 318.5], [139.0, 320.0], [137.0, 328.0], [136.0, 279.6666666666667], [148.0, 82.5], [147.0, 91.0], [145.0, 238.8], [152.0, 86.0], [159.0, 245.16666666666669], [156.0, 395.0], [155.0, 397.0], [154.0, 335.4285714285714], [153.0, 324.0], [165.0, 88.0], [164.0, 92.0], [163.0, 86.0], [166.0, 399.6666666666667], [160.0, 392.0], [168.0, 96.0], [170.0, 155.0], [169.0, 398.3333333333333], [183.0, 427.0], [182.0, 405.0], [178.0, 411.6666666666667], [177.0, 391.0], [176.0, 424.0], [191.0, 206.5], [189.0, 461.0], [186.0, 414.0], [185.0, 400.0], [196.0, 179.25], [195.0, 315.0], [197.0, 96.0], [192.0, 93.5], [199.0, 435.5], [198.0, 424.5], [206.0, 440.0], [203.0, 397.0], [202.0, 409.0], [201.0, 410.0], [212.0, 110.8], [215.0, 424.0], [214.0, 439.0], [211.0, 396.0], [210.0, 417.0], [209.0, 395.3333333333333], [221.0, 110.0], [223.0, 423.5], [222.0, 460.0], [220.0, 427.0], [217.0, 411.0], [216.0, 456.0], [228.0, 194.66666666666669], [229.0, 109.75], [230.0, 108.0], [227.0, 202.33333333333331], [226.0, 398.0], [224.0, 418.0], [236.0, 134.66666666666666], [238.0, 379.0], [237.0, 427.0], [233.0, 406.8], [246.0, 223.16666666666669], [247.0, 114.0], [245.0, 427.0], [244.0, 406.0], [252.0, 320.5], [253.0, 294.0], [254.0, 171.54545454545453], [248.0, 98.0], [255.0, 216.0], [251.0, 450.0], [249.0, 394.3333333333333], [268.0, 236.0], [270.0, 325.3333333333333], [265.0, 150.0], [257.0, 90.33333333333333], [256.0, 409.0], [259.0, 397.0], [258.0, 425.5], [267.0, 94.66666666666667], [271.0, 422.0], [269.0, 446.0], [263.0, 378.3333333333333], [260.0, 421.0], [272.0, 148.5], [277.0, 231.66666666666669], [279.0, 242.66666666666669], [278.0, 340.25], [274.0, 272.5], [273.0, 185.83333333333331], [285.0, 223.25], [284.0, 407.3333333333333], [286.0, 364.5], [287.0, 135.14285714285714], [283.0, 340.5], [282.0, 443.0], [281.0, 380.0], [302.0, 261.0], [290.0, 156.4], [289.0, 221.25], [295.0, 434.0], [294.0, 425.0], [291.0, 103.33333333333334], [293.0, 198.75], [292.0, 233.5], [298.0, 250.5], [299.0, 390.0], [303.0, 127.0], [296.0, 432.0], [301.0, 383.0], [319.0, 289.0], [307.0, 375.33333333333337], [314.0, 134.0], [318.0, 405.66666666666663], [315.0, 417.0], [313.0, 432.0], [312.0, 419.0], [311.0, 430.0], [304.0, 412.0], [306.0, 412.0], [305.0, 431.0], [322.0, 429.0], [327.0, 355.0], [333.0, 427.6666666666667], [332.0, 428.0], [330.0, 432.0], [326.0, 431.0], [324.0, 428.0], [323.0, 427.0], [321.0, 408.0], [320.0, 373.0], [339.0, 413.0], [349.0, 228.0], [348.0, 268.0], [347.0, 219.0], [346.0, 412.0], [345.0, 415.0], [343.0, 415.0], [342.0, 412.0], [340.0, 413.0], [338.0, 211.0], [337.0, 257.0], [336.0, 275.0], [365.0, 215.0], [364.0, 371.0], [355.0, 263.6666666666667], [363.0, 238.0], [362.0, 386.0], [361.0, 242.0], [360.0, 247.0], [359.0, 221.0], [358.0, 389.0], [357.0, 392.0], [356.0, 392.0], [1.0, 349.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[185.29833333333355, 267.07666666666654]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 365.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 960.0, "minX": 1.68831132E12, "maxY": 1280.0, "series": [{"data": [[1.68831132E12, 960.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68831132E12, 1280.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831132E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 267.07666666666654, "minX": 1.68831132E12, "maxY": 267.07666666666654, "series": [{"data": [[1.68831132E12, 267.07666666666654]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831132E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 267.07666666666654, "minX": 1.68831132E12, "maxY": 267.07666666666654, "series": [{"data": [[1.68831132E12, 267.07666666666654]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831132E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 18.903333333333325, "minX": 1.68831132E12, "maxY": 18.903333333333325, "series": [{"data": [[1.68831132E12, 18.903333333333325]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831132E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 19.0, "minX": 1.68831132E12, "maxY": 470.0, "series": [{"data": [[1.68831132E12, 470.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68831132E12, 19.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68831132E12, 426.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68831132E12, 460.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68831132E12, 325.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68831132E12, 434.94999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831132E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 91.0, "minX": 242.0, "maxY": 386.0, "series": [{"data": [[358.0, 386.0], [242.0, 91.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 358.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 91.0, "minX": 242.0, "maxY": 386.0, "series": [{"data": [[358.0, 386.0], [242.0, 91.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 358.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68831132E12, "maxY": 10.0, "series": [{"data": [[1.68831132E12, 10.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831132E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68831132E12, "maxY": 10.0, "series": [{"data": [[1.68831132E12, 10.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831132E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68831132E12, "maxY": 10.0, "series": [{"data": [[1.68831132E12, 10.0]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831132E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68831132E12, "maxY": 10.0, "series": [{"data": [[1.68831132E12, 10.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831132E12, "title": "Total Transactions Per Second"}},
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

