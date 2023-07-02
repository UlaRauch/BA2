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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 698.0, "series": [{"data": [[0.0, 20.0], [0.1, 20.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 33.0], [0.6, 34.0], [0.7, 34.0], [0.8, 35.0], [0.9, 35.0], [1.0, 35.0], [1.1, 35.0], [1.2, 38.0], [1.3, 39.0], [1.4, 39.0], [1.5, 41.0], [1.6, 41.0], [1.7, 41.0], [1.8, 41.0], [1.9, 44.0], [2.0, 47.0], [2.1, 47.0], [2.2, 47.0], [2.3, 47.0], [2.4, 47.0], [2.5, 48.0], [2.6, 50.0], [2.7, 50.0], [2.8, 54.0], [2.9, 55.0], [3.0, 55.0], [3.1, 55.0], [3.2, 55.0], [3.3, 56.0], [3.4, 56.0], [3.5, 58.0], [3.6, 62.0], [3.7, 62.0], [3.8, 62.0], [3.9, 63.0], [4.0, 63.0], [4.1, 63.0], [4.2, 63.0], [4.3, 63.0], [4.4, 63.0], [4.5, 63.0], [4.6, 64.0], [4.7, 64.0], [4.8, 64.0], [4.9, 66.0], [5.0, 66.0], [5.1, 66.0], [5.2, 67.0], [5.3, 67.0], [5.4, 67.0], [5.5, 67.0], [5.6, 68.0], [5.7, 68.0], [5.8, 71.0], [5.9, 73.0], [6.0, 76.0], [6.1, 76.0], [6.2, 76.0], [6.3, 76.0], [6.4, 76.0], [6.5, 78.0], [6.6, 80.0], [6.7, 80.0], [6.8, 80.0], [6.9, 81.0], [7.0, 81.0], [7.1, 83.0], [7.2, 84.0], [7.3, 85.0], [7.4, 85.0], [7.5, 85.0], [7.6, 85.0], [7.7, 85.0], [7.8, 86.0], [7.9, 86.0], [8.0, 86.0], [8.1, 87.0], [8.2, 87.0], [8.3, 88.0], [8.4, 88.0], [8.5, 89.0], [8.6, 89.0], [8.7, 89.0], [8.8, 90.0], [8.9, 90.0], [9.0, 90.0], [9.1, 90.0], [9.2, 91.0], [9.3, 91.0], [9.4, 91.0], [9.5, 91.0], [9.6, 92.0], [9.7, 92.0], [9.8, 92.0], [9.9, 92.0], [10.0, 92.0], [10.1, 92.0], [10.2, 92.0], [10.3, 92.0], [10.4, 92.0], [10.5, 92.0], [10.6, 92.0], [10.7, 92.0], [10.8, 92.0], [10.9, 93.0], [11.0, 93.0], [11.1, 93.0], [11.2, 94.0], [11.3, 94.0], [11.4, 94.0], [11.5, 95.0], [11.6, 95.0], [11.7, 95.0], [11.8, 95.0], [11.9, 95.0], [12.0, 95.0], [12.1, 95.0], [12.2, 96.0], [12.3, 96.0], [12.4, 96.0], [12.5, 96.0], [12.6, 97.0], [12.7, 97.0], [12.8, 97.0], [12.9, 97.0], [13.0, 97.0], [13.1, 97.0], [13.2, 97.0], [13.3, 97.0], [13.4, 97.0], [13.5, 98.0], [13.6, 99.0], [13.7, 99.0], [13.8, 99.0], [13.9, 99.0], [14.0, 99.0], [14.1, 100.0], [14.2, 100.0], [14.3, 100.0], [14.4, 100.0], [14.5, 100.0], [14.6, 100.0], [14.7, 100.0], [14.8, 101.0], [14.9, 101.0], [15.0, 101.0], [15.1, 101.0], [15.2, 101.0], [15.3, 102.0], [15.4, 102.0], [15.5, 102.0], [15.6, 103.0], [15.7, 103.0], [15.8, 103.0], [15.9, 103.0], [16.0, 103.0], [16.1, 103.0], [16.2, 104.0], [16.3, 104.0], [16.4, 104.0], [16.5, 105.0], [16.6, 106.0], [16.7, 106.0], [16.8, 106.0], [16.9, 106.0], [17.0, 106.0], [17.1, 106.0], [17.2, 107.0], [17.3, 108.0], [17.4, 108.0], [17.5, 108.0], [17.6, 108.0], [17.7, 108.0], [17.8, 109.0], [17.9, 109.0], [18.0, 109.0], [18.1, 110.0], [18.2, 110.0], [18.3, 111.0], [18.4, 111.0], [18.5, 113.0], [18.6, 114.0], [18.7, 114.0], [18.8, 115.0], [18.9, 117.0], [19.0, 117.0], [19.1, 117.0], [19.2, 117.0], [19.3, 117.0], [19.4, 117.0], [19.5, 117.0], [19.6, 117.0], [19.7, 117.0], [19.8, 117.0], [19.9, 118.0], [20.0, 118.0], [20.1, 118.0], [20.2, 118.0], [20.3, 118.0], [20.4, 118.0], [20.5, 119.0], [20.6, 121.0], [20.7, 121.0], [20.8, 122.0], [20.9, 122.0], [21.0, 123.0], [21.1, 123.0], [21.2, 125.0], [21.3, 125.0], [21.4, 125.0], [21.5, 125.0], [21.6, 127.0], [21.7, 127.0], [21.8, 127.0], [21.9, 128.0], [22.0, 128.0], [22.1, 128.0], [22.2, 128.0], [22.3, 129.0], [22.4, 129.0], [22.5, 129.0], [22.6, 131.0], [22.7, 131.0], [22.8, 131.0], [22.9, 131.0], [23.0, 132.0], [23.1, 132.0], [23.2, 132.0], [23.3, 132.0], [23.4, 132.0], [23.5, 132.0], [23.6, 133.0], [23.7, 133.0], [23.8, 133.0], [23.9, 133.0], [24.0, 133.0], [24.1, 133.0], [24.2, 133.0], [24.3, 134.0], [24.4, 134.0], [24.5, 135.0], [24.6, 135.0], [24.7, 135.0], [24.8, 135.0], [24.9, 135.0], [25.0, 135.0], [25.1, 135.0], [25.2, 135.0], [25.3, 136.0], [25.4, 136.0], [25.5, 136.0], [25.6, 137.0], [25.7, 137.0], [25.8, 137.0], [25.9, 138.0], [26.0, 138.0], [26.1, 138.0], [26.2, 139.0], [26.3, 139.0], [26.4, 139.0], [26.5, 139.0], [26.6, 139.0], [26.7, 139.0], [26.8, 139.0], [26.9, 139.0], [27.0, 140.0], [27.1, 140.0], [27.2, 140.0], [27.3, 140.0], [27.4, 140.0], [27.5, 141.0], [27.6, 141.0], [27.7, 141.0], [27.8, 142.0], [27.9, 142.0], [28.0, 142.0], [28.1, 142.0], [28.2, 142.0], [28.3, 142.0], [28.4, 142.0], [28.5, 142.0], [28.6, 143.0], [28.7, 143.0], [28.8, 143.0], [28.9, 144.0], [29.0, 144.0], [29.1, 144.0], [29.2, 144.0], [29.3, 144.0], [29.4, 144.0], [29.5, 145.0], [29.6, 146.0], [29.7, 146.0], [29.8, 146.0], [29.9, 146.0], [30.0, 146.0], [30.1, 146.0], [30.2, 148.0], [30.3, 149.0], [30.4, 149.0], [30.5, 149.0], [30.6, 149.0], [30.7, 149.0], [30.8, 150.0], [30.9, 151.0], [31.0, 151.0], [31.1, 151.0], [31.2, 151.0], [31.3, 152.0], [31.4, 152.0], [31.5, 152.0], [31.6, 152.0], [31.7, 152.0], [31.8, 153.0], [31.9, 153.0], [32.0, 154.0], [32.1, 154.0], [32.2, 154.0], [32.3, 154.0], [32.4, 154.0], [32.5, 155.0], [32.6, 155.0], [32.7, 155.0], [32.8, 156.0], [32.9, 156.0], [33.0, 157.0], [33.1, 157.0], [33.2, 157.0], [33.3, 157.0], [33.4, 157.0], [33.5, 158.0], [33.6, 159.0], [33.7, 159.0], [33.8, 159.0], [33.9, 160.0], [34.0, 160.0], [34.1, 160.0], [34.2, 160.0], [34.3, 160.0], [34.4, 160.0], [34.5, 161.0], [34.6, 161.0], [34.7, 161.0], [34.8, 161.0], [34.9, 163.0], [35.0, 164.0], [35.1, 164.0], [35.2, 164.0], [35.3, 164.0], [35.4, 164.0], [35.5, 164.0], [35.6, 164.0], [35.7, 164.0], [35.8, 165.0], [35.9, 165.0], [36.0, 165.0], [36.1, 165.0], [36.2, 165.0], [36.3, 165.0], [36.4, 165.0], [36.5, 165.0], [36.6, 166.0], [36.7, 166.0], [36.8, 166.0], [36.9, 166.0], [37.0, 166.0], [37.1, 166.0], [37.2, 166.0], [37.3, 167.0], [37.4, 167.0], [37.5, 168.0], [37.6, 168.0], [37.7, 168.0], [37.8, 168.0], [37.9, 169.0], [38.0, 169.0], [38.1, 169.0], [38.2, 169.0], [38.3, 169.0], [38.4, 169.0], [38.5, 171.0], [38.6, 171.0], [38.7, 171.0], [38.8, 171.0], [38.9, 171.0], [39.0, 172.0], [39.1, 172.0], [39.2, 172.0], [39.3, 172.0], [39.4, 172.0], [39.5, 174.0], [39.6, 174.0], [39.7, 174.0], [39.8, 174.0], [39.9, 174.0], [40.0, 175.0], [40.1, 175.0], [40.2, 175.0], [40.3, 176.0], [40.4, 176.0], [40.5, 176.0], [40.6, 176.0], [40.7, 176.0], [40.8, 177.0], [40.9, 177.0], [41.0, 177.0], [41.1, 177.0], [41.2, 178.0], [41.3, 179.0], [41.4, 179.0], [41.5, 179.0], [41.6, 180.0], [41.7, 180.0], [41.8, 180.0], [41.9, 180.0], [42.0, 182.0], [42.1, 182.0], [42.2, 182.0], [42.3, 183.0], [42.4, 183.0], [42.5, 184.0], [42.6, 185.0], [42.7, 185.0], [42.8, 188.0], [42.9, 188.0], [43.0, 188.0], [43.1, 190.0], [43.2, 192.0], [43.3, 193.0], [43.4, 193.0], [43.5, 195.0], [43.6, 195.0], [43.7, 195.0], [43.8, 196.0], [43.9, 198.0], [44.0, 198.0], [44.1, 199.0], [44.2, 199.0], [44.3, 199.0], [44.4, 199.0], [44.5, 199.0], [44.6, 200.0], [44.7, 200.0], [44.8, 200.0], [44.9, 200.0], [45.0, 200.0], [45.1, 200.0], [45.2, 200.0], [45.3, 200.0], [45.4, 200.0], [45.5, 202.0], [45.6, 203.0], [45.7, 203.0], [45.8, 204.0], [45.9, 204.0], [46.0, 204.0], [46.1, 204.0], [46.2, 205.0], [46.3, 205.0], [46.4, 205.0], [46.5, 206.0], [46.6, 206.0], [46.7, 206.0], [46.8, 206.0], [46.9, 206.0], [47.0, 206.0], [47.1, 208.0], [47.2, 208.0], [47.3, 209.0], [47.4, 209.0], [47.5, 210.0], [47.6, 211.0], [47.7, 211.0], [47.8, 211.0], [47.9, 212.0], [48.0, 212.0], [48.1, 213.0], [48.2, 213.0], [48.3, 214.0], [48.4, 214.0], [48.5, 215.0], [48.6, 216.0], [48.7, 216.0], [48.8, 218.0], [48.9, 218.0], [49.0, 218.0], [49.1, 226.0], [49.2, 227.0], [49.3, 228.0], [49.4, 228.0], [49.5, 231.0], [49.6, 232.0], [49.7, 232.0], [49.8, 233.0], [49.9, 234.0], [50.0, 234.0], [50.1, 234.0], [50.2, 236.0], [50.3, 238.0], [50.4, 238.0], [50.5, 238.0], [50.6, 238.0], [50.7, 238.0], [50.8, 239.0], [50.9, 240.0], [51.0, 240.0], [51.1, 240.0], [51.2, 242.0], [51.3, 242.0], [51.4, 242.0], [51.5, 242.0], [51.6, 243.0], [51.7, 243.0], [51.8, 243.0], [51.9, 244.0], [52.0, 244.0], [52.1, 244.0], [52.2, 244.0], [52.3, 245.0], [52.4, 245.0], [52.5, 245.0], [52.6, 245.0], [52.7, 245.0], [52.8, 245.0], [52.9, 246.0], [53.0, 246.0], [53.1, 246.0], [53.2, 246.0], [53.3, 246.0], [53.4, 246.0], [53.5, 247.0], [53.6, 247.0], [53.7, 247.0], [53.8, 247.0], [53.9, 248.0], [54.0, 248.0], [54.1, 249.0], [54.2, 249.0], [54.3, 249.0], [54.4, 249.0], [54.5, 252.0], [54.6, 253.0], [54.7, 253.0], [54.8, 253.0], [54.9, 254.0], [55.0, 254.0], [55.1, 255.0], [55.2, 256.0], [55.3, 259.0], [55.4, 259.0], [55.5, 260.0], [55.6, 261.0], [55.7, 261.0], [55.8, 265.0], [55.9, 265.0], [56.0, 265.0], [56.1, 266.0], [56.2, 268.0], [56.3, 269.0], [56.4, 269.0], [56.5, 269.0], [56.6, 273.0], [56.7, 273.0], [56.8, 277.0], [56.9, 279.0], [57.0, 279.0], [57.1, 279.0], [57.2, 280.0], [57.3, 281.0], [57.4, 281.0], [57.5, 282.0], [57.6, 282.0], [57.7, 282.0], [57.8, 283.0], [57.9, 284.0], [58.0, 284.0], [58.1, 286.0], [58.2, 286.0], [58.3, 288.0], [58.4, 288.0], [58.5, 289.0], [58.6, 290.0], [58.7, 290.0], [58.8, 290.0], [58.9, 291.0], [59.0, 291.0], [59.1, 292.0], [59.2, 293.0], [59.3, 293.0], [59.4, 293.0], [59.5, 294.0], [59.6, 298.0], [59.7, 298.0], [59.8, 299.0], [59.9, 301.0], [60.0, 301.0], [60.1, 303.0], [60.2, 307.0], [60.3, 307.0], [60.4, 307.0], [60.5, 309.0], [60.6, 311.0], [60.7, 311.0], [60.8, 311.0], [60.9, 313.0], [61.0, 313.0], [61.1, 314.0], [61.2, 314.0], [61.3, 315.0], [61.4, 315.0], [61.5, 315.0], [61.6, 316.0], [61.7, 316.0], [61.8, 317.0], [61.9, 317.0], [62.0, 317.0], [62.1, 317.0], [62.2, 318.0], [62.3, 326.0], [62.4, 326.0], [62.5, 329.0], [62.6, 333.0], [62.7, 333.0], [62.8, 335.0], [62.9, 336.0], [63.0, 336.0], [63.1, 338.0], [63.2, 339.0], [63.3, 339.0], [63.4, 339.0], [63.5, 340.0], [63.6, 340.0], [63.7, 340.0], [63.8, 341.0], [63.9, 342.0], [64.0, 342.0], [64.1, 343.0], [64.2, 347.0], [64.3, 351.0], [64.4, 351.0], [64.5, 358.0], [64.6, 360.0], [64.7, 360.0], [64.8, 360.0], [64.9, 361.0], [65.0, 361.0], [65.1, 362.0], [65.2, 362.0], [65.3, 362.0], [65.4, 362.0], [65.5, 362.0], [65.6, 363.0], [65.7, 363.0], [65.8, 363.0], [65.9, 365.0], [66.0, 365.0], [66.1, 367.0], [66.2, 370.0], [66.3, 371.0], [66.4, 371.0], [66.5, 371.0], [66.6, 371.0], [66.7, 371.0], [66.8, 373.0], [66.9, 377.0], [67.0, 377.0], [67.1, 377.0], [67.2, 379.0], [67.3, 380.0], [67.4, 380.0], [67.5, 384.0], [67.6, 384.0], [67.7, 384.0], [67.8, 385.0], [67.9, 386.0], [68.0, 386.0], [68.1, 387.0], [68.2, 389.0], [68.3, 391.0], [68.4, 391.0], [68.5, 393.0], [68.6, 394.0], [68.7, 394.0], [68.8, 395.0], [68.9, 395.0], [69.0, 395.0], [69.1, 395.0], [69.2, 395.0], [69.3, 398.0], [69.4, 398.0], [69.5, 401.0], [69.6, 404.0], [69.7, 404.0], [69.8, 404.0], [69.9, 405.0], [70.0, 405.0], [70.1, 405.0], [70.2, 407.0], [70.3, 408.0], [70.4, 408.0], [70.5, 409.0], [70.6, 409.0], [70.7, 409.0], [70.8, 409.0], [70.9, 410.0], [71.0, 410.0], [71.1, 410.0], [71.2, 410.0], [71.3, 410.0], [71.4, 410.0], [71.5, 411.0], [71.6, 411.0], [71.7, 411.0], [71.8, 411.0], [71.9, 411.0], [72.0, 411.0], [72.1, 412.0], [72.2, 413.0], [72.3, 414.0], [72.4, 414.0], [72.5, 415.0], [72.6, 415.0], [72.7, 415.0], [72.8, 415.0], [72.9, 416.0], [73.0, 416.0], [73.1, 416.0], [73.2, 417.0], [73.3, 418.0], [73.4, 418.0], [73.5, 418.0], [73.6, 419.0], [73.7, 419.0], [73.8, 419.0], [73.9, 420.0], [74.0, 420.0], [74.1, 420.0], [74.2, 421.0], [74.3, 421.0], [74.4, 421.0], [74.5, 422.0], [74.6, 422.0], [74.7, 422.0], [74.8, 423.0], [74.9, 423.0], [75.0, 423.0], [75.1, 423.0], [75.2, 424.0], [75.3, 424.0], [75.4, 424.0], [75.5, 427.0], [75.6, 427.0], [75.7, 427.0], [75.8, 427.0], [75.9, 427.0], [76.0, 427.0], [76.1, 428.0], [76.2, 429.0], [76.3, 429.0], [76.4, 429.0], [76.5, 430.0], [76.6, 431.0], [76.7, 431.0], [76.8, 433.0], [76.9, 434.0], [77.0, 434.0], [77.1, 434.0], [77.2, 435.0], [77.3, 436.0], [77.4, 436.0], [77.5, 437.0], [77.6, 437.0], [77.7, 437.0], [77.8, 438.0], [77.9, 439.0], [78.0, 439.0], [78.1, 450.0], [78.2, 452.0], [78.3, 496.0], [78.4, 496.0], [78.5, 497.0], [78.6, 498.0], [78.7, 498.0], [78.8, 501.0], [78.9, 502.0], [79.0, 502.0], [79.1, 502.0], [79.2, 503.0], [79.3, 504.0], [79.4, 504.0], [79.5, 504.0], [79.6, 505.0], [79.7, 505.0], [79.8, 506.0], [79.9, 508.0], [80.0, 508.0], [80.1, 508.0], [80.2, 510.0], [80.3, 527.0], [80.4, 527.0], [80.5, 529.0], [80.6, 530.0], [80.7, 530.0], [80.8, 537.0], [80.9, 539.0], [81.0, 539.0], [81.1, 539.0], [81.2, 540.0], [81.3, 545.0], [81.4, 545.0], [81.5, 545.0], [81.6, 546.0], [81.7, 546.0], [81.8, 549.0], [81.9, 550.0], [82.0, 550.0], [82.1, 552.0], [82.2, 556.0], [82.3, 556.0], [82.4, 556.0], [82.5, 556.0], [82.6, 557.0], [82.7, 557.0], [82.8, 557.0], [82.9, 559.0], [83.0, 559.0], [83.1, 560.0], [83.2, 560.0], [83.3, 560.0], [83.4, 560.0], [83.5, 560.0], [83.6, 561.0], [83.7, 561.0], [83.8, 561.0], [83.9, 562.0], [84.0, 562.0], [84.1, 562.0], [84.2, 562.0], [84.3, 567.0], [84.4, 567.0], [84.5, 567.0], [84.6, 568.0], [84.7, 568.0], [84.8, 573.0], [84.9, 582.0], [85.0, 582.0], [85.1, 583.0], [85.2, 585.0], [85.3, 585.0], [85.4, 585.0], [85.5, 586.0], [85.6, 589.0], [85.7, 589.0], [85.8, 597.0], [85.9, 599.0], [86.0, 599.0], [86.1, 599.0], [86.2, 600.0], [86.3, 601.0], [86.4, 601.0], [86.5, 602.0], [86.6, 603.0], [86.7, 603.0], [86.8, 604.0], [86.9, 604.0], [87.0, 604.0], [87.1, 608.0], [87.2, 608.0], [87.3, 610.0], [87.4, 610.0], [87.5, 610.0], [87.6, 611.0], [87.7, 611.0], [87.8, 612.0], [87.9, 613.0], [88.0, 613.0], [88.1, 614.0], [88.2, 614.0], [88.3, 616.0], [88.4, 616.0], [88.5, 617.0], [88.6, 619.0], [88.7, 619.0], [88.8, 619.0], [88.9, 619.0], [89.0, 619.0], [89.1, 620.0], [89.2, 621.0], [89.3, 621.0], [89.4, 621.0], [89.5, 622.0], [89.6, 622.0], [89.7, 622.0], [89.8, 623.0], [89.9, 623.0], [90.0, 623.0], [90.1, 623.0], [90.2, 625.0], [90.3, 625.0], [90.4, 625.0], [90.5, 626.0], [90.6, 626.0], [90.7, 626.0], [90.8, 626.0], [90.9, 626.0], [91.0, 626.0], [91.1, 627.0], [91.2, 628.0], [91.3, 628.0], [91.4, 628.0], [91.5, 629.0], [91.6, 631.0], [91.7, 631.0], [91.8, 631.0], [91.9, 631.0], [92.0, 631.0], [92.1, 631.0], [92.2, 631.0], [92.3, 632.0], [92.4, 632.0], [92.5, 632.0], [92.6, 632.0], [92.7, 632.0], [92.8, 633.0], [92.9, 633.0], [93.0, 633.0], [93.1, 634.0], [93.2, 634.0], [93.3, 635.0], [93.4, 635.0], [93.5, 635.0], [93.6, 635.0], [93.7, 635.0], [93.8, 637.0], [93.9, 637.0], [94.0, 637.0], [94.1, 637.0], [94.2, 638.0], [94.3, 638.0], [94.4, 638.0], [94.5, 639.0], [94.6, 640.0], [94.7, 640.0], [94.8, 640.0], [94.9, 641.0], [95.0, 641.0], [95.1, 641.0], [95.2, 641.0], [95.3, 641.0], [95.4, 641.0], [95.5, 643.0], [95.6, 643.0], [95.7, 643.0], [95.8, 643.0], [95.9, 644.0], [96.0, 644.0], [96.1, 645.0], [96.2, 647.0], [96.3, 648.0], [96.4, 648.0], [96.5, 648.0], [96.6, 649.0], [96.7, 649.0], [96.8, 650.0], [96.9, 651.0], [97.0, 651.0], [97.1, 652.0], [97.2, 653.0], [97.3, 654.0], [97.4, 654.0], [97.5, 654.0], [97.6, 656.0], [97.7, 656.0], [97.8, 657.0], [97.9, 657.0], [98.0, 657.0], [98.1, 657.0], [98.2, 659.0], [98.3, 661.0], [98.4, 661.0], [98.5, 664.0], [98.6, 666.0], [98.7, 666.0], [98.8, 670.0], [98.9, 672.0], [99.0, 672.0], [99.1, 676.0], [99.2, 682.0], [99.3, 683.0], [99.4, 683.0], [99.5, 685.0], [99.6, 687.0], [99.7, 687.0], [99.8, 688.0], [99.9, 698.0], [100.0, 698.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 52.0, "minX": 0.0, "maxY": 214.0, "series": [{"data": [[0.0, 98.0], [300.0, 67.0], [600.0, 97.0], [100.0, 214.0], [200.0, 107.0], [400.0, 65.0], [500.0, 52.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 600.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 149.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 551.0, "series": [{"data": [[0.0, 551.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 149.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 100.80303030303038, "minX": 1.68831156E12, "maxY": 247.12749003984058, "series": [{"data": [[1.68831162E12, 100.80303030303038], [1.68831156E12, 247.12749003984058]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831162E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 685.0, "series": [{"data": [[3.0, 442.0], [5.0, 303.5], [6.0, 427.0], [8.0, 339.0], [11.0, 363.0], [12.0, 287.3333333333333], [13.0, 265.0], [16.0, 528.0], [18.0, 309.3333333333333], [19.0, 314.0], [23.0, 430.25], [25.0, 436.0], [26.0, 429.0], [28.0, 425.5], [29.0, 685.0], [33.0, 292.0], [34.0, 274.25], [36.0, 420.0], [38.0, 427.0], [40.0, 270.3333333333333], [43.0, 431.0], [42.0, 294.0], [45.0, 150.0], [47.0, 20.0], [49.0, 423.33333333333337], [48.0, 255.33333333333331], [53.0, 422.0], [54.0, 413.0], [57.0, 419.0], [56.0, 176.0], [59.0, 164.0], [58.0, 409.5], [61.0, 221.5], [60.0, 281.0], [63.0, 35.0], [62.0, 421.0], [65.0, 131.25], [64.0, 35.0], [67.0, 289.5], [69.0, 38.0], [71.0, 81.16666666666666], [70.0, 411.0], [68.0, 290.0], [72.0, 39.0], [75.0, 215.66666666666666], [78.0, 140.0], [79.0, 256.0], [76.0, 159.0], [82.0, 271.3333333333333], [84.0, 50.0], [87.0, 213.0], [86.0, 338.0], [85.0, 335.0], [89.0, 244.5], [93.0, 257.6666666666667], [92.0, 333.0], [97.0, 195.5], [98.0, 57.0], [96.0, 239.0], [101.0, 404.0], [100.0, 264.0], [107.0, 414.5], [105.0, 154.0], [104.0, 260.3333333333333], [110.0, 110.0], [109.0, 122.0], [108.0, 247.0], [115.0, 247.0], [114.0, 139.0], [113.0, 419.0], [112.0, 219.0], [119.0, 676.0], [117.0, 407.0], [116.0, 273.0], [122.0, 666.0], [121.0, 682.0], [120.0, 393.0], [127.0, 664.5], [126.0, 670.0], [124.0, 541.0], [135.0, 76.0], [134.0, 291.0], [132.0, 311.0], [131.0, 315.0], [130.0, 573.6666666666666], [137.0, 153.66666666666669], [143.0, 238.25], [141.0, 664.0], [140.0, 393.0], [139.0, 206.0], [138.0, 261.0], [136.0, 309.0], [149.0, 223.75], [150.0, 86.66666666666667], [151.0, 88.0], [148.0, 396.0], [146.0, 481.3333333333333], [154.0, 89.8], [159.0, 95.0], [158.0, 404.0], [157.0, 393.0], [156.0, 643.0], [153.0, 418.0], [152.0, 357.3333333333333], [160.0, 187.83333333333331], [162.0, 96.75], [164.0, 97.16666666666666], [165.0, 97.0], [166.0, 342.0], [163.0, 293.0], [171.0, 141.57142857142856], [173.0, 100.0], [174.0, 291.5], [172.0, 640.0], [170.0, 649.6], [169.0, 384.0], [168.0, 652.3333333333334], [179.0, 365.5], [178.0, 304.0], [177.0, 106.0], [176.0, 106.0], [181.0, 179.71428571428572], [182.0, 110.0], [180.0, 648.0], [190.0, 108.5], [189.0, 550.0], [186.0, 640.5], [185.0, 370.0], [184.0, 461.6666666666667], [195.0, 254.5], [199.0, 158.0], [197.0, 117.5], [198.0, 244.0], [196.0, 328.6666666666667], [194.0, 367.0], [192.0, 650.0], [207.0, 236.0], [206.0, 258.5], [204.0, 269.0], [201.0, 239.0], [211.0, 230.2], [210.0, 156.0], [209.0, 130.0], [208.0, 205.0], [215.0, 371.0], [214.0, 498.5], [212.0, 623.0], [217.0, 137.5], [219.0, 170.71428571428572], [222.0, 142.0], [221.0, 377.6666666666667], [218.0, 196.25], [223.0, 637.5], [216.0, 626.0], [224.0, 267.5], [230.0, 153.0], [229.0, 648.0], [228.0, 641.0], [227.0, 647.0], [226.0, 653.0], [225.0, 643.0], [236.0, 315.0], [235.0, 166.0], [234.0, 166.0], [239.0, 414.5], [238.0, 633.5], [243.0, 174.5], [244.0, 265.8181818181818], [247.0, 277.25], [245.0, 95.71428571428571], [240.0, 317.33333333333337], [242.0, 186.75], [246.0, 352.5], [241.0, 625.6], [249.0, 199.83333333333334], [250.0, 249.66666666666666], [251.0, 349.5], [253.0, 96.0909090909091], [254.0, 323.4], [248.0, 322.66666666666663], [255.0, 255.5], [252.0, 123.5], [258.0, 340.83333333333337], [259.0, 208.4], [268.0, 243.0], [264.0, 251.0], [271.0, 617.0], [261.0, 304.0], [262.0, 218.75], [265.0, 258.5], [266.0, 169.75], [267.0, 252.0], [257.0, 280.2857142857143], [256.0, 272.2857142857143], [263.0, 136.75], [260.0, 317.0], [286.0, 329.8], [287.0, 173.5], [285.0, 437.375], [284.0, 252.85714285714286], [283.0, 338.0], [282.0, 231.66666666666666], [281.0, 188.0], [280.0, 365.0], [278.0, 172.0], [277.0, 184.5], [279.0, 139.0], [273.0, 615.5], [275.0, 610.0], [274.0, 610.0], [301.0, 170.66666666666666], [303.0, 242.0], [300.0, 348.0], [291.0, 383.0], [290.0, 155.0], [299.0, 405.57142857142856], [298.0, 560.0], [296.0, 322.2], [295.0, 243.8], [294.0, 556.0], [292.0, 567.0], [289.0, 483.14285714285717], [288.0, 175.0], [302.0, 165.5], [306.0, 390.25], [308.0, 256.4], [309.0, 385.0], [307.0, 415.0], [304.0, 528.2], [317.0, 438.0], [310.0, 546.0], [318.0, 207.5], [315.0, 290.5], [316.0, 208.66666666666666], [324.0, 197.0], [343.0, 450.20000000000005], [344.0, 506.0], [341.0, 229.88888888888889], [342.0, 364.8], [340.0, 210.5], [339.0, 197.57142857142858], [1.0, 438.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[205.73714285714286, 294.18000000000023]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 344.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 316.8, "minX": 1.68831156E12, "maxY": 1070.9333333333334, "series": [{"data": [[1.68831162E12, 316.8], [1.68831156E12, 803.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68831162E12, 422.4], [1.68831156E12, 1070.9333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831162E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 258.3346613545816, "minX": 1.68831156E12, "maxY": 385.0606060606062, "series": [{"data": [[1.68831162E12, 385.0606060606062], [1.68831156E12, 258.3346613545816]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831162E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 258.3306772908367, "minX": 1.68831156E12, "maxY": 385.0555555555557, "series": [{"data": [[1.68831162E12, 385.0555555555557], [1.68831156E12, 258.3306772908367]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831162E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 9.47011952191235, "minX": 1.68831156E12, "maxY": 14.434343434343438, "series": [{"data": [[1.68831162E12, 14.434343434343438], [1.68831156E12, 9.47011952191235]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831162E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.68831156E12, "maxY": 698.0, "series": [{"data": [[1.68831162E12, 698.0], [1.68831156E12, 654.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68831162E12, 102.0], [1.68831156E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68831162E12, 651.1], [1.68831156E12, 606.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68831162E12, 688.0999999999999], [1.68831156E12, 644.9399999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68831162E12, 384.5], [1.68831156E12, 171.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68831162E12, 666.1999999999999], [1.68831156E12, 627.6999999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831162E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 171.0, "minX": 198.0, "maxY": 384.5, "series": [{"data": [[198.0, 384.5], [502.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 502.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 171.0, "minX": 198.0, "maxY": 384.5, "series": [{"data": [[198.0, 384.5], [502.0, 171.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 502.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 11.666666666666666, "minX": 1.68831156E12, "maxY": 11.666666666666666, "series": [{"data": [[1.68831156E12, 11.666666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831156E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.68831156E12, "maxY": 8.366666666666667, "series": [{"data": [[1.68831162E12, 3.3], [1.68831156E12, 8.366666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831162E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.68831156E12, "maxY": 8.366666666666667, "series": [{"data": [[1.68831162E12, 3.3], [1.68831156E12, 8.366666666666667]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831162E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3, "minX": 1.68831156E12, "maxY": 8.366666666666667, "series": [{"data": [[1.68831162E12, 3.3], [1.68831156E12, 8.366666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831162E12, "title": "Total Transactions Per Second"}},
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

