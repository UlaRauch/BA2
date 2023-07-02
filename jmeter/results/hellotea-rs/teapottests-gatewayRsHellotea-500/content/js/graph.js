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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 491.0, "series": [{"data": [[0.0, 21.0], [0.1, 21.0], [0.2, 21.0], [0.3, 21.0], [0.4, 21.0], [0.5, 21.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 33.0], [1.0, 33.0], [1.1, 33.0], [1.2, 34.0], [1.3, 34.0], [1.4, 35.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 42.0], [1.9, 42.0], [2.0, 47.0], [2.1, 47.0], [2.2, 48.0], [2.3, 48.0], [2.4, 49.0], [2.5, 49.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 52.0], [3.1, 52.0], [3.2, 52.0], [3.3, 52.0], [3.4, 53.0], [3.5, 53.0], [3.6, 53.0], [3.7, 53.0], [3.8, 54.0], [3.9, 54.0], [4.0, 55.0], [4.1, 55.0], [4.2, 55.0], [4.3, 55.0], [4.4, 55.0], [4.5, 55.0], [4.6, 56.0], [4.7, 56.0], [4.8, 56.0], [4.9, 56.0], [5.0, 61.0], [5.1, 61.0], [5.2, 65.0], [5.3, 65.0], [5.4, 65.0], [5.5, 65.0], [5.6, 65.0], [5.7, 89.0], [5.8, 89.0], [5.9, 90.0], [6.0, 90.0], [6.1, 95.0], [6.2, 95.0], [6.3, 97.0], [6.4, 97.0], [6.5, 98.0], [6.6, 98.0], [6.7, 100.0], [6.8, 100.0], [6.9, 101.0], [7.0, 101.0], [7.1, 103.0], [7.2, 103.0], [7.3, 105.0], [7.4, 105.0], [7.5, 108.0], [7.6, 108.0], [7.7, 109.0], [7.8, 109.0], [7.9, 111.0], [8.0, 111.0], [8.1, 113.0], [8.2, 113.0], [8.3, 114.0], [8.4, 116.0], [8.5, 116.0], [8.6, 117.0], [8.7, 117.0], [8.8, 119.0], [8.9, 119.0], [9.0, 121.0], [9.1, 121.0], [9.2, 121.0], [9.3, 121.0], [9.4, 122.0], [9.5, 122.0], [9.6, 122.0], [9.7, 122.0], [9.8, 122.0], [9.9, 122.0], [10.0, 122.0], [10.1, 122.0], [10.2, 122.0], [10.3, 122.0], [10.4, 122.0], [10.5, 122.0], [10.6, 123.0], [10.7, 123.0], [10.8, 123.0], [10.9, 123.0], [11.0, 124.0], [11.1, 124.0], [11.2, 125.0], [11.3, 125.0], [11.4, 126.0], [11.5, 126.0], [11.6, 126.0], [11.7, 126.0], [11.8, 126.0], [11.9, 126.0], [12.0, 126.0], [12.1, 126.0], [12.2, 126.0], [12.3, 126.0], [12.4, 127.0], [12.5, 127.0], [12.6, 127.0], [12.7, 127.0], [12.8, 128.0], [12.9, 128.0], [13.0, 128.0], [13.1, 128.0], [13.2, 129.0], [13.3, 129.0], [13.4, 131.0], [13.5, 131.0], [13.6, 131.0], [13.7, 131.0], [13.8, 131.0], [13.9, 131.0], [14.0, 134.0], [14.1, 134.0], [14.2, 135.0], [14.3, 135.0], [14.4, 135.0], [14.5, 135.0], [14.6, 136.0], [14.7, 136.0], [14.8, 138.0], [14.9, 138.0], [15.0, 139.0], [15.1, 139.0], [15.2, 139.0], [15.3, 139.0], [15.4, 139.0], [15.5, 139.0], [15.6, 140.0], [15.7, 140.0], [15.8, 141.0], [15.9, 141.0], [16.0, 141.0], [16.1, 141.0], [16.2, 142.0], [16.3, 142.0], [16.4, 143.0], [16.5, 143.0], [16.6, 143.0], [16.7, 143.0], [16.8, 146.0], [16.9, 146.0], [17.0, 146.0], [17.1, 146.0], [17.2, 146.0], [17.3, 146.0], [17.4, 149.0], [17.5, 149.0], [17.6, 150.0], [17.7, 150.0], [17.8, 151.0], [17.9, 151.0], [18.0, 151.0], [18.1, 151.0], [18.2, 151.0], [18.3, 151.0], [18.4, 153.0], [18.5, 153.0], [18.6, 153.0], [18.7, 153.0], [18.8, 155.0], [18.9, 155.0], [19.0, 156.0], [19.1, 156.0], [19.2, 158.0], [19.3, 158.0], [19.4, 160.0], [19.5, 160.0], [19.6, 165.0], [19.7, 165.0], [19.8, 165.0], [19.9, 165.0], [20.0, 167.0], [20.1, 167.0], [20.2, 168.0], [20.3, 168.0], [20.4, 169.0], [20.5, 169.0], [20.6, 170.0], [20.7, 170.0], [20.8, 171.0], [20.9, 171.0], [21.0, 172.0], [21.1, 172.0], [21.2, 178.0], [21.3, 178.0], [21.4, 181.0], [21.5, 181.0], [21.6, 182.0], [21.7, 182.0], [21.8, 184.0], [21.9, 184.0], [22.0, 185.0], [22.1, 185.0], [22.2, 185.0], [22.3, 185.0], [22.4, 186.0], [22.5, 186.0], [22.6, 187.0], [22.7, 187.0], [22.8, 190.0], [22.9, 190.0], [23.0, 192.0], [23.1, 192.0], [23.2, 192.0], [23.3, 192.0], [23.4, 202.0], [23.5, 202.0], [23.6, 205.0], [23.7, 205.0], [23.8, 205.0], [23.9, 205.0], [24.0, 206.0], [24.1, 206.0], [24.2, 206.0], [24.3, 206.0], [24.4, 207.0], [24.5, 207.0], [24.6, 208.0], [24.7, 208.0], [24.8, 208.0], [24.9, 208.0], [25.0, 208.0], [25.1, 208.0], [25.2, 209.0], [25.3, 209.0], [25.4, 211.0], [25.5, 211.0], [25.6, 212.0], [25.7, 212.0], [25.8, 214.0], [25.9, 214.0], [26.0, 221.0], [26.1, 221.0], [26.2, 225.0], [26.3, 225.0], [26.4, 230.0], [26.5, 230.0], [26.6, 232.0], [26.7, 232.0], [26.8, 233.0], [26.9, 233.0], [27.0, 233.0], [27.1, 233.0], [27.2, 234.0], [27.3, 234.0], [27.4, 237.0], [27.5, 237.0], [27.6, 237.0], [27.7, 237.0], [27.8, 238.0], [27.9, 238.0], [28.0, 238.0], [28.1, 238.0], [28.2, 241.0], [28.3, 241.0], [28.4, 241.0], [28.5, 241.0], [28.6, 241.0], [28.7, 241.0], [28.8, 241.0], [28.9, 241.0], [29.0, 243.0], [29.1, 243.0], [29.2, 243.0], [29.3, 243.0], [29.4, 244.0], [29.5, 244.0], [29.6, 244.0], [29.7, 244.0], [29.8, 244.0], [29.9, 244.0], [30.0, 244.0], [30.1, 244.0], [30.2, 245.0], [30.3, 245.0], [30.4, 246.0], [30.5, 246.0], [30.6, 246.0], [30.7, 246.0], [30.8, 247.0], [30.9, 247.0], [31.0, 247.0], [31.1, 247.0], [31.2, 248.0], [31.3, 248.0], [31.4, 251.0], [31.5, 251.0], [31.6, 251.0], [31.7, 251.0], [31.8, 251.0], [31.9, 251.0], [32.0, 254.0], [32.1, 254.0], [32.2, 254.0], [32.3, 254.0], [32.4, 255.0], [32.5, 255.0], [32.6, 256.0], [32.7, 256.0], [32.8, 256.0], [32.9, 256.0], [33.0, 256.0], [33.1, 256.0], [33.2, 257.0], [33.3, 257.0], [33.4, 257.0], [33.5, 257.0], [33.6, 257.0], [33.7, 257.0], [33.8, 257.0], [33.9, 257.0], [34.0, 257.0], [34.1, 257.0], [34.2, 257.0], [34.3, 257.0], [34.4, 258.0], [34.5, 258.0], [34.6, 260.0], [34.7, 260.0], [34.8, 261.0], [34.9, 261.0], [35.0, 261.0], [35.1, 261.0], [35.2, 261.0], [35.3, 261.0], [35.4, 262.0], [35.5, 262.0], [35.6, 262.0], [35.7, 262.0], [35.8, 263.0], [35.9, 263.0], [36.0, 263.0], [36.1, 263.0], [36.2, 263.0], [36.3, 263.0], [36.4, 263.0], [36.5, 263.0], [36.6, 263.0], [36.7, 263.0], [36.8, 264.0], [36.9, 264.0], [37.0, 264.0], [37.1, 264.0], [37.2, 265.0], [37.3, 265.0], [37.4, 265.0], [37.5, 265.0], [37.6, 266.0], [37.7, 266.0], [37.8, 266.0], [37.9, 266.0], [38.0, 266.0], [38.1, 266.0], [38.2, 266.0], [38.3, 266.0], [38.4, 267.0], [38.5, 267.0], [38.6, 267.0], [38.7, 267.0], [38.8, 267.0], [38.9, 267.0], [39.0, 267.0], [39.1, 267.0], [39.2, 267.0], [39.3, 267.0], [39.4, 268.0], [39.5, 268.0], [39.6, 269.0], [39.7, 269.0], [39.8, 269.0], [39.9, 269.0], [40.0, 269.0], [40.1, 269.0], [40.2, 270.0], [40.3, 270.0], [40.4, 271.0], [40.5, 271.0], [40.6, 271.0], [40.7, 271.0], [40.8, 273.0], [40.9, 273.0], [41.0, 274.0], [41.1, 274.0], [41.2, 276.0], [41.3, 276.0], [41.4, 276.0], [41.5, 276.0], [41.6, 276.0], [41.7, 276.0], [41.8, 276.0], [41.9, 276.0], [42.0, 277.0], [42.1, 277.0], [42.2, 277.0], [42.3, 277.0], [42.4, 279.0], [42.5, 279.0], [42.6, 280.0], [42.7, 280.0], [42.8, 281.0], [42.9, 281.0], [43.0, 282.0], [43.1, 282.0], [43.2, 282.0], [43.3, 282.0], [43.4, 282.0], [43.5, 282.0], [43.6, 283.0], [43.7, 283.0], [43.8, 283.0], [43.9, 283.0], [44.0, 286.0], [44.1, 286.0], [44.2, 287.0], [44.3, 287.0], [44.4, 288.0], [44.5, 288.0], [44.6, 288.0], [44.7, 288.0], [44.8, 289.0], [44.9, 289.0], [45.0, 289.0], [45.1, 289.0], [45.2, 289.0], [45.3, 289.0], [45.4, 289.0], [45.5, 289.0], [45.6, 291.0], [45.7, 291.0], [45.8, 291.0], [45.9, 291.0], [46.0, 291.0], [46.1, 291.0], [46.2, 295.0], [46.3, 295.0], [46.4, 299.0], [46.5, 299.0], [46.6, 299.0], [46.7, 299.0], [46.8, 299.0], [46.9, 299.0], [47.0, 300.0], [47.1, 300.0], [47.2, 301.0], [47.3, 301.0], [47.4, 301.0], [47.5, 301.0], [47.6, 302.0], [47.7, 302.0], [47.8, 303.0], [47.9, 303.0], [48.0, 304.0], [48.1, 304.0], [48.2, 304.0], [48.3, 304.0], [48.4, 304.0], [48.5, 304.0], [48.6, 305.0], [48.7, 305.0], [48.8, 305.0], [48.9, 305.0], [49.0, 305.0], [49.1, 305.0], [49.2, 306.0], [49.3, 306.0], [49.4, 306.0], [49.5, 306.0], [49.6, 306.0], [49.7, 306.0], [49.8, 307.0], [49.9, 307.0], [50.0, 308.0], [50.1, 308.0], [50.2, 308.0], [50.3, 308.0], [50.4, 309.0], [50.5, 309.0], [50.6, 310.0], [50.7, 310.0], [50.8, 310.0], [50.9, 311.0], [51.0, 311.0], [51.1, 313.0], [51.2, 313.0], [51.3, 313.0], [51.4, 313.0], [51.5, 314.0], [51.6, 314.0], [51.7, 314.0], [51.8, 314.0], [51.9, 315.0], [52.0, 315.0], [52.1, 316.0], [52.2, 316.0], [52.3, 316.0], [52.4, 316.0], [52.5, 318.0], [52.6, 318.0], [52.7, 319.0], [52.8, 319.0], [52.9, 319.0], [53.0, 319.0], [53.1, 319.0], [53.2, 319.0], [53.3, 320.0], [53.4, 320.0], [53.5, 322.0], [53.6, 322.0], [53.7, 322.0], [53.8, 322.0], [53.9, 322.0], [54.0, 322.0], [54.1, 326.0], [54.2, 326.0], [54.3, 326.0], [54.4, 326.0], [54.5, 326.0], [54.6, 326.0], [54.7, 327.0], [54.8, 327.0], [54.9, 329.0], [55.0, 329.0], [55.1, 329.0], [55.2, 329.0], [55.3, 329.0], [55.4, 329.0], [55.5, 329.0], [55.6, 329.0], [55.7, 329.0], [55.8, 329.0], [55.9, 329.0], [56.0, 329.0], [56.1, 330.0], [56.2, 330.0], [56.3, 330.0], [56.4, 330.0], [56.5, 330.0], [56.6, 330.0], [56.7, 330.0], [56.8, 330.0], [56.9, 332.0], [57.0, 332.0], [57.1, 334.0], [57.2, 334.0], [57.3, 334.0], [57.4, 334.0], [57.5, 334.0], [57.6, 334.0], [57.7, 335.0], [57.8, 335.0], [57.9, 336.0], [58.0, 336.0], [58.1, 336.0], [58.2, 336.0], [58.3, 337.0], [58.4, 337.0], [58.5, 337.0], [58.6, 337.0], [58.7, 338.0], [58.8, 338.0], [58.9, 338.0], [59.0, 338.0], [59.1, 339.0], [59.2, 339.0], [59.3, 340.0], [59.4, 340.0], [59.5, 342.0], [59.6, 342.0], [59.7, 343.0], [59.8, 343.0], [59.9, 343.0], [60.0, 343.0], [60.1, 343.0], [60.2, 343.0], [60.3, 343.0], [60.4, 343.0], [60.5, 343.0], [60.6, 343.0], [60.7, 344.0], [60.8, 344.0], [60.9, 345.0], [61.0, 345.0], [61.1, 346.0], [61.2, 346.0], [61.3, 346.0], [61.4, 346.0], [61.5, 346.0], [61.6, 346.0], [61.7, 346.0], [61.8, 346.0], [61.9, 347.0], [62.0, 347.0], [62.1, 349.0], [62.2, 349.0], [62.3, 349.0], [62.4, 349.0], [62.5, 349.0], [62.6, 349.0], [62.7, 350.0], [62.8, 350.0], [62.9, 350.0], [63.0, 350.0], [63.1, 351.0], [63.2, 351.0], [63.3, 352.0], [63.4, 352.0], [63.5, 352.0], [63.6, 352.0], [63.7, 352.0], [63.8, 352.0], [63.9, 352.0], [64.0, 352.0], [64.1, 353.0], [64.2, 353.0], [64.3, 353.0], [64.4, 353.0], [64.5, 354.0], [64.6, 354.0], [64.7, 354.0], [64.8, 354.0], [64.9, 354.0], [65.0, 354.0], [65.1, 355.0], [65.2, 355.0], [65.3, 355.0], [65.4, 355.0], [65.5, 355.0], [65.6, 355.0], [65.7, 355.0], [65.8, 355.0], [65.9, 356.0], [66.0, 356.0], [66.1, 356.0], [66.2, 356.0], [66.3, 357.0], [66.4, 357.0], [66.5, 357.0], [66.6, 357.0], [66.7, 358.0], [66.8, 358.0], [66.9, 358.0], [67.0, 358.0], [67.1, 359.0], [67.2, 359.0], [67.3, 360.0], [67.4, 360.0], [67.5, 360.0], [67.6, 360.0], [67.7, 361.0], [67.8, 361.0], [67.9, 361.0], [68.0, 361.0], [68.1, 361.0], [68.2, 361.0], [68.3, 362.0], [68.4, 362.0], [68.5, 362.0], [68.6, 362.0], [68.7, 362.0], [68.8, 362.0], [68.9, 362.0], [69.0, 362.0], [69.1, 362.0], [69.2, 362.0], [69.3, 363.0], [69.4, 363.0], [69.5, 363.0], [69.6, 363.0], [69.7, 364.0], [69.8, 364.0], [69.9, 364.0], [70.0, 364.0], [70.1, 364.0], [70.2, 364.0], [70.3, 365.0], [70.4, 365.0], [70.5, 365.0], [70.6, 365.0], [70.7, 366.0], [70.8, 366.0], [70.9, 366.0], [71.0, 366.0], [71.1, 366.0], [71.2, 366.0], [71.3, 366.0], [71.4, 366.0], [71.5, 367.0], [71.6, 367.0], [71.7, 367.0], [71.8, 367.0], [71.9, 368.0], [72.0, 368.0], [72.1, 368.0], [72.2, 368.0], [72.3, 368.0], [72.4, 368.0], [72.5, 370.0], [72.6, 370.0], [72.7, 370.0], [72.8, 370.0], [72.9, 370.0], [73.0, 370.0], [73.1, 371.0], [73.2, 371.0], [73.3, 372.0], [73.4, 372.0], [73.5, 373.0], [73.6, 373.0], [73.7, 374.0], [73.8, 374.0], [73.9, 374.0], [74.0, 374.0], [74.1, 375.0], [74.2, 375.0], [74.3, 376.0], [74.4, 376.0], [74.5, 376.0], [74.6, 376.0], [74.7, 377.0], [74.8, 377.0], [74.9, 378.0], [75.0, 378.0], [75.1, 378.0], [75.2, 378.0], [75.3, 379.0], [75.4, 379.0], [75.5, 380.0], [75.6, 380.0], [75.7, 380.0], [75.8, 380.0], [75.9, 380.0], [76.0, 380.0], [76.1, 382.0], [76.2, 382.0], [76.3, 382.0], [76.4, 382.0], [76.5, 383.0], [76.6, 383.0], [76.7, 383.0], [76.8, 383.0], [76.9, 384.0], [77.0, 384.0], [77.1, 384.0], [77.2, 384.0], [77.3, 384.0], [77.4, 384.0], [77.5, 385.0], [77.6, 385.0], [77.7, 385.0], [77.8, 385.0], [77.9, 386.0], [78.0, 386.0], [78.1, 387.0], [78.2, 387.0], [78.3, 387.0], [78.4, 387.0], [78.5, 387.0], [78.6, 387.0], [78.7, 387.0], [78.8, 387.0], [78.9, 388.0], [79.0, 388.0], [79.1, 388.0], [79.2, 388.0], [79.3, 389.0], [79.4, 389.0], [79.5, 389.0], [79.6, 389.0], [79.7, 391.0], [79.8, 391.0], [79.9, 392.0], [80.0, 392.0], [80.1, 392.0], [80.2, 392.0], [80.3, 393.0], [80.4, 393.0], [80.5, 393.0], [80.6, 393.0], [80.7, 393.0], [80.8, 393.0], [80.9, 393.0], [81.0, 393.0], [81.1, 394.0], [81.2, 394.0], [81.3, 394.0], [81.4, 394.0], [81.5, 394.0], [81.6, 394.0], [81.7, 394.0], [81.8, 394.0], [81.9, 394.0], [82.0, 394.0], [82.1, 395.0], [82.2, 395.0], [82.3, 395.0], [82.4, 395.0], [82.5, 396.0], [82.6, 396.0], [82.7, 396.0], [82.8, 396.0], [82.9, 397.0], [83.0, 397.0], [83.1, 397.0], [83.2, 397.0], [83.3, 397.0], [83.4, 397.0], [83.5, 398.0], [83.6, 398.0], [83.7, 398.0], [83.8, 398.0], [83.9, 399.0], [84.0, 399.0], [84.1, 399.0], [84.2, 399.0], [84.3, 399.0], [84.4, 399.0], [84.5, 400.0], [84.6, 400.0], [84.7, 401.0], [84.8, 401.0], [84.9, 401.0], [85.0, 401.0], [85.1, 401.0], [85.2, 401.0], [85.3, 402.0], [85.4, 402.0], [85.5, 402.0], [85.6, 402.0], [85.7, 403.0], [85.8, 403.0], [85.9, 403.0], [86.0, 403.0], [86.1, 405.0], [86.2, 405.0], [86.3, 405.0], [86.4, 405.0], [86.5, 405.0], [86.6, 405.0], [86.7, 406.0], [86.8, 406.0], [86.9, 407.0], [87.0, 407.0], [87.1, 407.0], [87.2, 407.0], [87.3, 408.0], [87.4, 408.0], [87.5, 408.0], [87.6, 408.0], [87.7, 409.0], [87.8, 409.0], [87.9, 410.0], [88.0, 410.0], [88.1, 410.0], [88.2, 410.0], [88.3, 411.0], [88.4, 411.0], [88.5, 412.0], [88.6, 412.0], [88.7, 412.0], [88.8, 412.0], [88.9, 412.0], [89.0, 412.0], [89.1, 414.0], [89.2, 414.0], [89.3, 417.0], [89.4, 417.0], [89.5, 418.0], [89.6, 418.0], [89.7, 418.0], [89.8, 418.0], [89.9, 419.0], [90.0, 419.0], [90.1, 419.0], [90.2, 419.0], [90.3, 419.0], [90.4, 419.0], [90.5, 420.0], [90.6, 420.0], [90.7, 421.0], [90.8, 421.0], [90.9, 422.0], [91.0, 422.0], [91.1, 422.0], [91.2, 422.0], [91.3, 424.0], [91.4, 424.0], [91.5, 424.0], [91.6, 424.0], [91.7, 426.0], [91.8, 426.0], [91.9, 426.0], [92.0, 426.0], [92.1, 426.0], [92.2, 426.0], [92.3, 426.0], [92.4, 426.0], [92.5, 427.0], [92.6, 427.0], [92.7, 427.0], [92.8, 427.0], [92.9, 428.0], [93.0, 428.0], [93.1, 430.0], [93.2, 430.0], [93.3, 431.0], [93.4, 431.0], [93.5, 432.0], [93.6, 432.0], [93.7, 432.0], [93.8, 432.0], [93.9, 433.0], [94.0, 433.0], [94.1, 433.0], [94.2, 433.0], [94.3, 434.0], [94.4, 434.0], [94.5, 434.0], [94.6, 434.0], [94.7, 435.0], [94.8, 435.0], [94.9, 435.0], [95.0, 435.0], [95.1, 436.0], [95.2, 436.0], [95.3, 436.0], [95.4, 436.0], [95.5, 436.0], [95.6, 436.0], [95.7, 437.0], [95.8, 437.0], [95.9, 438.0], [96.0, 438.0], [96.1, 438.0], [96.2, 438.0], [96.3, 439.0], [96.4, 439.0], [96.5, 440.0], [96.6, 440.0], [96.7, 442.0], [96.8, 442.0], [96.9, 444.0], [97.0, 444.0], [97.1, 446.0], [97.2, 446.0], [97.3, 446.0], [97.4, 446.0], [97.5, 446.0], [97.6, 446.0], [97.7, 448.0], [97.8, 448.0], [97.9, 450.0], [98.0, 450.0], [98.1, 451.0], [98.2, 451.0], [98.3, 452.0], [98.4, 452.0], [98.5, 453.0], [98.6, 453.0], [98.7, 454.0], [98.8, 454.0], [98.9, 454.0], [99.0, 454.0], [99.1, 455.0], [99.2, 455.0], [99.3, 461.0], [99.4, 461.0], [99.5, 462.0], [99.6, 462.0], [99.7, 464.0], [99.8, 464.0], [99.9, 491.0], [100.0, 491.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 33.0, "minX": 0.0, "maxY": 187.0, "series": [{"data": [[0.0, 33.0], [300.0, 187.0], [100.0, 84.0], [200.0, 118.0], [400.0, 78.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 500.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 500.0, "series": [{"data": [[0.0, 500.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 197.73799999999997, "minX": 1.68830274E12, "maxY": 197.73799999999997, "series": [{"data": [[1.68830274E12, 197.73799999999997]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830274E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.0, "maxY": 464.0, "series": [{"data": [[2.0, 408.0], [4.0, 398.0], [6.0, 367.0], [8.0, 410.0], [9.0, 403.6666666666667], [11.0, 425.5], [12.0, 455.0], [13.0, 365.0], [14.0, 411.0], [16.0, 442.0], [18.0, 362.0], [19.0, 401.0], [22.0, 411.0], [23.0, 436.5], [25.0, 374.0], [28.0, 21.0], [30.0, 399.8], [33.0, 378.5], [32.0, 353.0], [35.0, 434.0], [34.0, 434.0], [36.0, 356.0], [39.0, 154.33333333333331], [38.0, 408.0], [40.0, 33.5], [42.0, 283.25], [43.0, 396.0], [45.0, 53.8], [44.0, 54.0], [47.0, 50.4], [46.0, 320.0], [48.0, 129.5], [51.0, 349.0], [50.0, 361.3333333333333], [52.0, 435.0], [55.0, 450.0], [57.0, 405.0], [56.0, 427.0], [59.0, 407.0], [58.0, 419.0], [63.0, 375.0], [62.0, 422.6666666666667], [70.0, 408.3333333333333], [69.0, 464.0], [68.0, 387.5], [73.0, 289.0], [72.0, 385.0], [79.0, 440.0], [78.0, 420.0], [77.0, 338.0], [76.0, 303.3333333333333], [82.0, 403.0], [81.0, 336.0], [80.0, 343.0], [87.0, 395.0], [86.0, 391.0], [84.0, 340.0], [91.0, 412.0], [88.0, 378.0], [95.0, 399.0], [94.0, 389.0], [93.0, 368.0], [92.0, 399.0], [99.0, 65.0], [97.0, 392.0], [96.0, 381.5], [102.0, 385.0], [101.0, 410.5], [100.0, 379.0], [107.0, 386.0], [105.0, 411.3333333333333], [109.0, 421.0], [108.0, 431.0], [115.0, 430.0], [114.0, 395.3333333333333], [113.0, 417.0], [112.0, 332.0], [116.0, 361.0], [123.0, 426.0], [122.0, 376.5], [120.0, 410.0], [127.0, 380.0], [126.0, 400.6666666666667], [125.0, 369.0], [124.0, 376.0], [135.0, 373.25], [132.0, 314.0], [131.0, 397.0], [130.0, 269.5], [142.0, 359.0], [141.0, 380.0], [140.0, 368.0], [138.0, 330.0], [137.0, 378.0], [136.0, 382.0], [151.0, 349.0], [150.0, 373.6666666666667], [148.0, 349.5], [145.0, 418.0], [153.0, 228.0], [155.0, 241.66666666666666], [154.0, 95.0], [158.0, 384.0], [157.0, 370.0], [156.0, 399.0], [152.0, 340.0], [167.0, 155.0], [165.0, 98.0], [166.0, 259.0], [164.0, 272.5], [162.0, 257.0], [161.0, 384.0], [160.0, 392.5], [168.0, 103.0], [174.0, 356.3333333333333], [173.0, 329.0], [171.0, 423.5], [180.0, 284.0], [179.0, 114.0], [183.0, 226.5], [182.0, 385.0], [178.0, 426.0], [176.0, 347.6666666666667], [191.0, 277.4], [188.0, 411.0], [187.0, 304.0], [185.0, 343.0], [184.0, 363.5], [198.0, 239.5], [197.0, 227.8], [195.0, 303.3333333333333], [194.0, 399.0], [203.0, 97.0], [202.0, 166.8], [201.0, 243.33333333333334], [207.0, 363.0], [206.0, 251.0], [205.0, 254.0], [204.0, 265.0], [200.0, 376.5], [215.0, 355.0], [214.0, 212.0], [213.0, 254.0], [212.0, 404.0], [210.0, 306.0], [209.0, 360.0], [208.0, 409.0], [223.0, 365.4], [222.0, 410.0], [231.0, 352.0], [230.0, 374.6666666666667], [227.0, 387.0], [226.0, 225.0], [225.0, 384.0], [224.0, 282.0], [238.0, 126.0], [237.0, 214.4], [236.0, 156.0], [233.0, 122.0], [234.0, 254.33333333333334], [235.0, 160.0], [239.0, 329.0], [232.0, 244.0], [245.0, 141.0], [241.0, 189.6], [247.0, 299.0], [246.0, 209.0], [244.0, 346.0], [243.0, 207.5], [240.0, 192.0], [253.0, 197.0], [251.0, 143.5], [249.0, 148.0], [248.0, 181.2], [255.0, 299.0], [254.0, 342.0], [252.0, 352.0], [250.0, 348.5], [268.0, 173.33333333333334], [260.0, 228.5], [265.0, 214.0], [271.0, 341.5], [269.0, 371.0], [263.0, 322.5], [262.0, 368.0], [259.0, 264.0], [256.0, 155.0], [274.0, 141.75], [273.0, 212.66666666666669], [272.0, 350.0], [286.0, 159.0], [287.0, 267.0], [285.0, 277.0], [284.0, 314.0], [283.0, 347.6666666666667], [280.0, 326.0], [279.0, 361.0], [278.0, 244.5], [276.0, 296.3333333333333], [302.0, 318.5], [301.0, 337.0], [300.0, 340.0], [298.0, 316.6666666666667], [289.0, 304.0], [288.0, 131.0], [318.0, 220.33333333333334], [306.0, 198.33333333333334], [305.0, 159.5], [310.0, 165.0], [309.0, 136.0], [308.0, 281.25], [311.0, 271.3333333333333], [304.0, 265.0], [319.0, 294.5], [316.0, 108.0], [315.0, 122.0], [314.0, 291.5], [312.0, 117.0], [321.0, 232.0], [320.0, 186.33333333333334], [334.0, 251.0], [332.0, 300.5], [330.0, 198.5], [328.0, 266.0], [327.0, 310.3333333333333], [324.0, 289.0], [322.0, 304.0], [350.0, 250.66666666666666], [351.0, 281.0], [348.0, 264.0], [347.0, 288.0], [346.0, 269.0], [345.0, 266.0], [343.0, 282.0], [342.0, 273.6666666666667], [339.0, 289.0], [338.0, 278.0], [364.0, 267.0], [366.0, 268.0], [352.0, 209.0], [355.0, 258.0], [353.0, 251.0], [367.0, 266.0], [365.0, 266.0], [363.0, 264.5], [361.0, 256.0], [359.0, 266.0], [356.0, 256.5], [381.0, 242.0], [383.0, 233.0], [373.0, 247.0], [376.0, 264.0], [375.0, 265.0], [374.0, 265.0], [372.0, 257.0], [371.0, 262.5], [368.0, 263.0], [384.0, 238.28571428571428], [385.0, 239.5], [1.0, 362.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[197.73799999999997, 286.87999999999994]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 385.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2466.6666666666665, "minX": 1.68830274E12, "maxY": 12708.333333333334, "series": [{"data": [[1.68830274E12, 2466.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830274E12, 12708.333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830274E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 286.87999999999994, "minX": 1.68830274E12, "maxY": 286.87999999999994, "series": [{"data": [[1.68830274E12, 286.87999999999994]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830274E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 286.8759999999999, "minX": 1.68830274E12, "maxY": 286.8759999999999, "series": [{"data": [[1.68830274E12, 286.8759999999999]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830274E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.6960000000000002, "minX": 1.68830274E12, "maxY": 1.6960000000000002, "series": [{"data": [[1.68830274E12, 1.6960000000000002]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830274E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.68830274E12, "maxY": 491.0, "series": [{"data": [[1.68830274E12, 491.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830274E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830274E12, 419.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830274E12, 454.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830274E12, 307.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830274E12, 435.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830274E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 243.0, "minX": 208.0, "maxY": 385.0, "series": [{"data": [[292.0, 243.0], [208.0, 385.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 292.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 243.0, "minX": 208.0, "maxY": 385.0, "series": [{"data": [[292.0, 243.0], [208.0, 385.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 292.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.68830274E12, "maxY": 8.333333333333334, "series": [{"data": [[1.68830274E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830274E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.68830274E12, "maxY": 8.333333333333334, "series": [{"data": [[1.68830274E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830274E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.68830274E12, "maxY": 8.333333333333334, "series": [{"data": [[1.68830274E12, 8.333333333333334]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830274E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.68830274E12, "maxY": 8.333333333333334, "series": [{"data": [[1.68830274E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830274E12, "title": "Total Transactions Per Second"}},
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

