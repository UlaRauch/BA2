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
        data: {"result": {"minY": 31.0, "minX": 0.0, "maxY": 472.0, "series": [{"data": [[0.0, 31.0], [0.1, 31.0], [0.2, 31.0], [0.3, 36.0], [0.4, 36.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 56.0], [1.0, 56.0], [1.1, 56.0], [1.2, 57.0], [1.3, 57.0], [1.4, 61.0], [1.5, 61.0], [1.6, 65.0], [1.7, 65.0], [1.8, 68.0], [1.9, 68.0], [2.0, 68.0], [2.1, 70.0], [2.2, 70.0], [2.3, 75.0], [2.4, 75.0], [2.5, 76.0], [2.6, 76.0], [2.7, 77.0], [2.8, 77.0], [2.9, 81.0], [3.0, 81.0], [3.1, 81.0], [3.2, 81.0], [3.3, 81.0], [3.4, 82.0], [3.5, 82.0], [3.6, 83.0], [3.7, 83.0], [3.8, 83.0], [3.9, 83.0], [4.0, 83.0], [4.1, 83.0], [4.2, 83.0], [4.3, 83.0], [4.4, 83.0], [4.5, 83.0], [4.6, 83.0], [4.7, 84.0], [4.8, 84.0], [4.9, 85.0], [5.0, 85.0], [5.1, 85.0], [5.2, 95.0], [5.3, 95.0], [5.4, 96.0], [5.5, 96.0], [5.6, 98.0], [5.7, 98.0], [5.8, 100.0], [5.9, 100.0], [6.0, 100.0], [6.1, 100.0], [6.2, 100.0], [6.3, 101.0], [6.4, 101.0], [6.5, 101.0], [6.6, 101.0], [6.7, 106.0], [6.8, 106.0], [6.9, 107.0], [7.0, 107.0], [7.1, 107.0], [7.2, 107.0], [7.3, 107.0], [7.4, 107.0], [7.5, 107.0], [7.6, 110.0], [7.7, 110.0], [7.8, 110.0], [7.9, 110.0], [8.0, 110.0], [8.1, 110.0], [8.2, 110.0], [8.3, 110.0], [8.4, 110.0], [8.5, 110.0], [8.6, 110.0], [8.7, 110.0], [8.8, 110.0], [8.9, 111.0], [9.0, 111.0], [9.1, 111.0], [9.2, 111.0], [9.3, 111.0], [9.4, 111.0], [9.5, 111.0], [9.6, 112.0], [9.7, 112.0], [9.8, 112.0], [9.9, 112.0], [10.0, 112.0], [10.1, 113.0], [10.2, 113.0], [10.3, 113.0], [10.4, 113.0], [10.5, 113.0], [10.6, 113.0], [10.7, 114.0], [10.8, 114.0], [10.9, 114.0], [11.0, 114.0], [11.1, 114.0], [11.2, 114.0], [11.3, 114.0], [11.4, 114.0], [11.5, 114.0], [11.6, 117.0], [11.7, 117.0], [11.8, 118.0], [11.9, 118.0], [12.0, 119.0], [12.1, 119.0], [12.2, 119.0], [12.3, 121.0], [12.4, 121.0], [12.5, 122.0], [12.6, 122.0], [12.7, 122.0], [12.8, 122.0], [12.9, 129.0], [13.0, 129.0], [13.1, 129.0], [13.2, 129.0], [13.3, 129.0], [13.4, 132.0], [13.5, 132.0], [13.6, 137.0], [13.7, 137.0], [13.8, 139.0], [13.9, 139.0], [14.0, 144.0], [14.1, 144.0], [14.2, 144.0], [14.3, 144.0], [14.4, 144.0], [14.5, 144.0], [14.6, 144.0], [14.7, 148.0], [14.8, 148.0], [14.9, 149.0], [15.0, 149.0], [15.1, 149.0], [15.2, 149.0], [15.3, 149.0], [15.4, 150.0], [15.5, 150.0], [15.6, 152.0], [15.7, 152.0], [15.8, 152.0], [15.9, 152.0], [16.0, 154.0], [16.1, 154.0], [16.2, 154.0], [16.3, 161.0], [16.4, 161.0], [16.5, 161.0], [16.6, 161.0], [16.7, 162.0], [16.8, 162.0], [16.9, 168.0], [17.0, 168.0], [17.1, 168.0], [17.2, 168.0], [17.3, 168.0], [17.4, 168.0], [17.5, 168.0], [17.6, 168.0], [17.7, 168.0], [17.8, 168.0], [17.9, 168.0], [18.0, 169.0], [18.1, 169.0], [18.2, 169.0], [18.3, 169.0], [18.4, 169.0], [18.5, 169.0], [18.6, 169.0], [18.7, 170.0], [18.8, 170.0], [18.9, 170.0], [19.0, 170.0], [19.1, 170.0], [19.2, 171.0], [19.3, 171.0], [19.4, 175.0], [19.5, 175.0], [19.6, 176.0], [19.7, 176.0], [19.8, 177.0], [19.9, 177.0], [20.0, 177.0], [20.1, 177.0], [20.2, 177.0], [20.3, 183.0], [20.4, 183.0], [20.5, 186.0], [20.6, 186.0], [20.7, 186.0], [20.8, 186.0], [20.9, 188.0], [21.0, 188.0], [21.1, 188.0], [21.2, 190.0], [21.3, 190.0], [21.4, 192.0], [21.5, 192.0], [21.6, 192.0], [21.7, 192.0], [21.8, 194.0], [21.9, 194.0], [22.0, 194.0], [22.1, 194.0], [22.2, 194.0], [22.3, 194.0], [22.4, 194.0], [22.5, 194.0], [22.6, 194.0], [22.7, 196.0], [22.8, 196.0], [22.9, 196.0], [23.0, 196.0], [23.1, 196.0], [23.2, 198.0], [23.3, 198.0], [23.4, 198.0], [23.5, 198.0], [23.6, 199.0], [23.7, 199.0], [23.8, 202.0], [23.9, 202.0], [24.0, 202.0], [24.1, 202.0], [24.2, 202.0], [24.3, 202.0], [24.4, 202.0], [24.5, 202.0], [24.6, 202.0], [24.7, 202.0], [24.8, 202.0], [24.9, 203.0], [25.0, 203.0], [25.1, 203.0], [25.2, 204.0], [25.3, 204.0], [25.4, 204.0], [25.5, 204.0], [25.6, 204.0], [25.7, 204.0], [25.8, 204.0], [25.9, 204.0], [26.0, 206.0], [26.1, 206.0], [26.2, 206.0], [26.3, 207.0], [26.4, 207.0], [26.5, 207.0], [26.6, 207.0], [26.7, 207.0], [26.8, 207.0], [26.9, 208.0], [27.0, 208.0], [27.1, 208.0], [27.2, 208.0], [27.3, 208.0], [27.4, 209.0], [27.5, 209.0], [27.6, 209.0], [27.7, 209.0], [27.8, 209.0], [27.9, 209.0], [28.0, 210.0], [28.1, 210.0], [28.2, 210.0], [28.3, 210.0], [28.4, 210.0], [28.5, 210.0], [28.6, 210.0], [28.7, 211.0], [28.8, 211.0], [28.9, 211.0], [29.0, 211.0], [29.1, 211.0], [29.2, 212.0], [29.3, 212.0], [29.4, 213.0], [29.5, 213.0], [29.6, 214.0], [29.7, 214.0], [29.8, 214.0], [29.9, 214.0], [30.0, 215.0], [30.1, 215.0], [30.2, 215.0], [30.3, 217.0], [30.4, 217.0], [30.5, 217.0], [30.6, 217.0], [30.7, 220.0], [30.8, 220.0], [30.9, 220.0], [31.0, 220.0], [31.1, 220.0], [31.2, 221.0], [31.3, 221.0], [31.4, 221.0], [31.5, 221.0], [31.6, 222.0], [31.7, 222.0], [31.8, 224.0], [31.9, 224.0], [32.0, 226.0], [32.1, 226.0], [32.2, 226.0], [32.3, 227.0], [32.4, 227.0], [32.5, 229.0], [32.6, 229.0], [32.7, 229.0], [32.8, 229.0], [32.9, 233.0], [33.0, 233.0], [33.1, 233.0], [33.2, 236.0], [33.3, 236.0], [33.4, 237.0], [33.5, 237.0], [33.6, 237.0], [33.7, 237.0], [33.8, 237.0], [33.9, 237.0], [34.0, 238.0], [34.1, 238.0], [34.2, 238.0], [34.3, 238.0], [34.4, 238.0], [34.5, 238.0], [34.6, 238.0], [34.7, 239.0], [34.8, 239.0], [34.9, 239.0], [35.0, 239.0], [35.1, 239.0], [35.2, 239.0], [35.3, 239.0], [35.4, 240.0], [35.5, 240.0], [35.6, 241.0], [35.7, 241.0], [35.8, 242.0], [35.9, 242.0], [36.0, 242.0], [36.1, 242.0], [36.2, 242.0], [36.3, 243.0], [36.4, 243.0], [36.5, 243.0], [36.6, 243.0], [36.7, 243.0], [36.8, 243.0], [36.9, 244.0], [37.0, 244.0], [37.1, 244.0], [37.2, 244.0], [37.3, 244.0], [37.4, 244.0], [37.5, 244.0], [37.6, 244.0], [37.7, 244.0], [37.8, 245.0], [37.9, 245.0], [38.0, 245.0], [38.1, 245.0], [38.2, 245.0], [38.3, 245.0], [38.4, 245.0], [38.5, 245.0], [38.6, 245.0], [38.7, 247.0], [38.8, 247.0], [38.9, 248.0], [39.0, 248.0], [39.1, 248.0], [39.2, 249.0], [39.3, 249.0], [39.4, 249.0], [39.5, 249.0], [39.6, 249.0], [39.7, 249.0], [39.8, 253.0], [39.9, 253.0], [40.0, 253.0], [40.1, 253.0], [40.2, 253.0], [40.3, 255.0], [40.4, 255.0], [40.5, 255.0], [40.6, 255.0], [40.7, 255.0], [40.8, 255.0], [40.9, 256.0], [41.0, 256.0], [41.1, 256.0], [41.2, 256.0], [41.3, 256.0], [41.4, 257.0], [41.5, 257.0], [41.6, 258.0], [41.7, 258.0], [41.8, 258.0], [41.9, 258.0], [42.0, 258.0], [42.1, 258.0], [42.2, 258.0], [42.3, 259.0], [42.4, 259.0], [42.5, 259.0], [42.6, 259.0], [42.7, 259.0], [42.8, 259.0], [42.9, 260.0], [43.0, 260.0], [43.1, 260.0], [43.2, 261.0], [43.3, 261.0], [43.4, 261.0], [43.5, 261.0], [43.6, 262.0], [43.7, 262.0], [43.8, 262.0], [43.9, 262.0], [44.0, 263.0], [44.1, 263.0], [44.2, 263.0], [44.3, 265.0], [44.4, 265.0], [44.5, 265.0], [44.6, 265.0], [44.7, 266.0], [44.8, 266.0], [44.9, 266.0], [45.0, 266.0], [45.1, 266.0], [45.2, 267.0], [45.3, 267.0], [45.4, 267.0], [45.5, 267.0], [45.6, 267.0], [45.7, 267.0], [45.8, 268.0], [45.9, 268.0], [46.0, 269.0], [46.1, 269.0], [46.2, 269.0], [46.3, 270.0], [46.4, 270.0], [46.5, 270.0], [46.6, 270.0], [46.7, 272.0], [46.8, 272.0], [46.9, 274.0], [47.0, 274.0], [47.1, 274.0], [47.2, 274.0], [47.3, 274.0], [47.4, 274.0], [47.5, 274.0], [47.6, 275.0], [47.7, 275.0], [47.8, 275.0], [47.9, 275.0], [48.0, 276.0], [48.1, 276.0], [48.2, 276.0], [48.3, 276.0], [48.4, 276.0], [48.5, 277.0], [48.6, 277.0], [48.7, 278.0], [48.8, 278.0], [48.9, 279.0], [49.0, 279.0], [49.1, 279.0], [49.2, 280.0], [49.3, 280.0], [49.4, 280.0], [49.5, 280.0], [49.6, 280.0], [49.7, 280.0], [49.8, 280.0], [49.9, 280.0], [50.0, 281.0], [50.1, 281.0], [50.2, 281.0], [50.3, 281.0], [50.4, 281.0], [50.5, 281.0], [50.6, 281.0], [50.7, 281.0], [50.8, 281.0], [50.9, 282.0], [51.0, 282.0], [51.1, 282.0], [51.2, 283.0], [51.3, 283.0], [51.4, 283.0], [51.5, 283.0], [51.6, 283.0], [51.7, 283.0], [51.8, 284.0], [51.9, 284.0], [52.0, 284.0], [52.1, 284.0], [52.2, 284.0], [52.3, 284.0], [52.4, 284.0], [52.5, 285.0], [52.6, 285.0], [52.7, 286.0], [52.8, 286.0], [52.9, 287.0], [53.0, 287.0], [53.1, 287.0], [53.2, 288.0], [53.3, 288.0], [53.4, 288.0], [53.5, 288.0], [53.6, 289.0], [53.7, 289.0], [53.8, 289.0], [53.9, 289.0], [54.0, 289.0], [54.1, 289.0], [54.2, 289.0], [54.3, 291.0], [54.4, 291.0], [54.5, 292.0], [54.6, 292.0], [54.7, 292.0], [54.8, 292.0], [54.9, 292.0], [55.0, 292.0], [55.1, 292.0], [55.2, 292.0], [55.3, 292.0], [55.4, 292.0], [55.5, 292.0], [55.6, 292.0], [55.7, 292.0], [55.8, 293.0], [55.9, 293.0], [56.0, 293.0], [56.1, 293.0], [56.2, 293.0], [56.3, 294.0], [56.4, 294.0], [56.5, 295.0], [56.6, 295.0], [56.7, 295.0], [56.8, 295.0], [56.9, 295.0], [57.0, 295.0], [57.1, 295.0], [57.2, 296.0], [57.3, 296.0], [57.4, 297.0], [57.5, 297.0], [57.6, 297.0], [57.7, 297.0], [57.8, 298.0], [57.9, 298.0], [58.0, 299.0], [58.1, 299.0], [58.2, 299.0], [58.3, 299.0], [58.4, 299.0], [58.5, 299.0], [58.6, 299.0], [58.7, 300.0], [58.8, 300.0], [58.9, 300.0], [59.0, 300.0], [59.1, 300.0], [59.2, 300.0], [59.3, 300.0], [59.4, 301.0], [59.5, 301.0], [59.6, 302.0], [59.7, 302.0], [59.8, 304.0], [59.9, 304.0], [60.0, 304.0], [60.1, 304.0], [60.2, 304.0], [60.3, 305.0], [60.4, 305.0], [60.5, 306.0], [60.6, 306.0], [60.7, 306.0], [60.8, 306.0], [60.9, 309.0], [61.0, 309.0], [61.1, 309.0], [61.2, 310.0], [61.3, 310.0], [61.4, 311.0], [61.5, 311.0], [61.6, 312.0], [61.7, 312.0], [61.8, 312.0], [61.9, 312.0], [62.0, 313.0], [62.1, 313.0], [62.2, 313.0], [62.3, 314.0], [62.4, 314.0], [62.5, 314.0], [62.6, 314.0], [62.7, 315.0], [62.8, 315.0], [62.9, 315.0], [63.0, 315.0], [63.1, 315.0], [63.2, 315.0], [63.3, 315.0], [63.4, 315.0], [63.5, 315.0], [63.6, 316.0], [63.7, 316.0], [63.8, 316.0], [63.9, 316.0], [64.0, 318.0], [64.1, 318.0], [64.2, 318.0], [64.3, 319.0], [64.4, 319.0], [64.5, 319.0], [64.6, 319.0], [64.7, 319.0], [64.8, 319.0], [64.9, 319.0], [65.0, 319.0], [65.1, 319.0], [65.2, 319.0], [65.3, 319.0], [65.4, 320.0], [65.5, 320.0], [65.6, 320.0], [65.7, 320.0], [65.8, 321.0], [65.9, 321.0], [66.0, 321.0], [66.1, 321.0], [66.2, 321.0], [66.3, 321.0], [66.4, 321.0], [66.5, 322.0], [66.6, 322.0], [66.7, 323.0], [66.8, 323.0], [66.9, 324.0], [67.0, 324.0], [67.1, 324.0], [67.2, 325.0], [67.3, 325.0], [67.4, 325.0], [67.5, 325.0], [67.6, 326.0], [67.7, 326.0], [67.8, 327.0], [67.9, 327.0], [68.0, 328.0], [68.1, 328.0], [68.2, 328.0], [68.3, 328.0], [68.4, 328.0], [68.5, 328.0], [68.6, 328.0], [68.7, 329.0], [68.8, 329.0], [68.9, 330.0], [69.0, 330.0], [69.1, 330.0], [69.2, 330.0], [69.3, 330.0], [69.4, 331.0], [69.5, 331.0], [69.6, 331.0], [69.7, 331.0], [69.8, 332.0], [69.9, 332.0], [70.0, 333.0], [70.1, 333.0], [70.2, 333.0], [70.3, 335.0], [70.4, 335.0], [70.5, 336.0], [70.6, 336.0], [70.7, 337.0], [70.8, 337.0], [70.9, 337.0], [71.0, 337.0], [71.1, 337.0], [71.2, 337.0], [71.3, 337.0], [71.4, 338.0], [71.5, 338.0], [71.6, 339.0], [71.7, 339.0], [71.8, 339.0], [71.9, 339.0], [72.0, 339.0], [72.1, 339.0], [72.2, 339.0], [72.3, 340.0], [72.4, 340.0], [72.5, 340.0], [72.6, 340.0], [72.7, 341.0], [72.8, 341.0], [72.9, 342.0], [73.0, 342.0], [73.1, 342.0], [73.2, 342.0], [73.3, 342.0], [73.4, 342.0], [73.5, 342.0], [73.6, 342.0], [73.7, 342.0], [73.8, 344.0], [73.9, 344.0], [74.0, 344.0], [74.1, 344.0], [74.2, 344.0], [74.3, 344.0], [74.4, 344.0], [74.5, 346.0], [74.6, 346.0], [74.7, 347.0], [74.8, 347.0], [74.9, 347.0], [75.0, 347.0], [75.1, 347.0], [75.2, 347.0], [75.3, 347.0], [75.4, 348.0], [75.5, 348.0], [75.6, 348.0], [75.7, 348.0], [75.8, 349.0], [75.9, 349.0], [76.0, 349.0], [76.1, 349.0], [76.2, 349.0], [76.3, 351.0], [76.4, 351.0], [76.5, 351.0], [76.6, 351.0], [76.7, 352.0], [76.8, 352.0], [76.9, 353.0], [77.0, 353.0], [77.1, 353.0], [77.2, 355.0], [77.3, 355.0], [77.4, 355.0], [77.5, 355.0], [77.6, 355.0], [77.7, 355.0], [77.8, 356.0], [77.9, 356.0], [78.0, 357.0], [78.1, 357.0], [78.2, 357.0], [78.3, 358.0], [78.4, 358.0], [78.5, 358.0], [78.6, 358.0], [78.7, 358.0], [78.8, 358.0], [78.9, 359.0], [79.0, 359.0], [79.1, 359.0], [79.2, 359.0], [79.3, 359.0], [79.4, 359.0], [79.5, 359.0], [79.6, 361.0], [79.7, 361.0], [79.8, 361.0], [79.9, 361.0], [80.0, 361.0], [80.1, 361.0], [80.2, 361.0], [80.3, 362.0], [80.4, 362.0], [80.5, 363.0], [80.6, 363.0], [80.7, 363.0], [80.8, 363.0], [80.9, 365.0], [81.0, 365.0], [81.1, 365.0], [81.2, 365.0], [81.3, 365.0], [81.4, 366.0], [81.5, 366.0], [81.6, 366.0], [81.7, 366.0], [81.8, 368.0], [81.9, 368.0], [82.0, 368.0], [82.1, 369.0], [82.2, 369.0], [82.3, 369.0], [82.4, 369.0], [82.5, 370.0], [82.6, 370.0], [82.7, 371.0], [82.8, 371.0], [82.9, 375.0], [83.0, 375.0], [83.1, 375.0], [83.2, 376.0], [83.3, 376.0], [83.4, 376.0], [83.5, 376.0], [83.6, 376.0], [83.7, 376.0], [83.8, 378.0], [83.9, 378.0], [84.0, 378.0], [84.1, 379.0], [84.2, 379.0], [84.3, 381.0], [84.4, 381.0], [84.5, 382.0], [84.6, 382.0], [84.7, 382.0], [84.8, 382.0], [84.9, 383.0], [85.0, 383.0], [85.1, 383.0], [85.2, 384.0], [85.3, 384.0], [85.4, 384.0], [85.5, 384.0], [85.6, 385.0], [85.7, 385.0], [85.8, 385.0], [85.9, 385.0], [86.0, 385.0], [86.1, 386.0], [86.2, 386.0], [86.3, 386.0], [86.4, 386.0], [86.5, 387.0], [86.6, 387.0], [86.7, 387.0], [86.8, 387.0], [86.9, 388.0], [87.0, 388.0], [87.1, 388.0], [87.2, 388.0], [87.3, 388.0], [87.4, 388.0], [87.5, 388.0], [87.6, 389.0], [87.7, 389.0], [87.8, 390.0], [87.9, 390.0], [88.0, 390.0], [88.1, 391.0], [88.2, 391.0], [88.3, 391.0], [88.4, 391.0], [88.5, 391.0], [88.6, 391.0], [88.7, 392.0], [88.8, 392.0], [88.9, 393.0], [89.0, 393.0], [89.1, 393.0], [89.2, 394.0], [89.3, 394.0], [89.4, 395.0], [89.5, 395.0], [89.6, 395.0], [89.7, 395.0], [89.8, 395.0], [89.9, 395.0], [90.0, 395.0], [90.1, 395.0], [90.2, 395.0], [90.3, 398.0], [90.4, 398.0], [90.5, 399.0], [90.6, 399.0], [90.7, 400.0], [90.8, 400.0], [90.9, 400.0], [91.0, 400.0], [91.1, 400.0], [91.2, 402.0], [91.3, 402.0], [91.4, 402.0], [91.5, 402.0], [91.6, 403.0], [91.7, 403.0], [91.8, 404.0], [91.9, 404.0], [92.0, 404.0], [92.1, 404.0], [92.2, 404.0], [92.3, 406.0], [92.4, 406.0], [92.5, 407.0], [92.6, 407.0], [92.7, 407.0], [92.8, 407.0], [92.9, 408.0], [93.0, 408.0], [93.1, 408.0], [93.2, 408.0], [93.3, 408.0], [93.4, 409.0], [93.5, 409.0], [93.6, 409.0], [93.7, 409.0], [93.8, 412.0], [93.9, 412.0], [94.0, 412.0], [94.1, 413.0], [94.2, 413.0], [94.3, 415.0], [94.4, 415.0], [94.5, 415.0], [94.6, 415.0], [94.7, 415.0], [94.8, 415.0], [94.9, 416.0], [95.0, 416.0], [95.1, 416.0], [95.2, 417.0], [95.3, 417.0], [95.4, 417.0], [95.5, 417.0], [95.6, 417.0], [95.7, 417.0], [95.8, 419.0], [95.9, 419.0], [96.0, 419.0], [96.1, 419.0], [96.2, 419.0], [96.3, 422.0], [96.4, 422.0], [96.5, 423.0], [96.6, 423.0], [96.7, 427.0], [96.8, 427.0], [96.9, 429.0], [97.0, 429.0], [97.1, 429.0], [97.2, 430.0], [97.3, 430.0], [97.4, 430.0], [97.5, 430.0], [97.6, 431.0], [97.7, 431.0], [97.8, 433.0], [97.9, 433.0], [98.0, 433.0], [98.1, 436.0], [98.2, 436.0], [98.3, 436.0], [98.4, 436.0], [98.5, 440.0], [98.6, 440.0], [98.7, 441.0], [98.8, 441.0], [98.9, 442.0], [99.0, 442.0], [99.1, 442.0], [99.2, 445.0], [99.3, 445.0], [99.4, 449.0], [99.5, 449.0], [99.6, 450.0], [99.7, 450.0], [99.8, 472.0], [99.9, 472.0], [100.0, 472.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 157.0, "series": [{"data": [[0.0, 26.0], [300.0, 144.0], [100.0, 81.0], [200.0, 157.0], [400.0, 42.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 450.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 450.0, "series": [{"data": [[0.0, 450.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 157.70000000000005, "minX": 1.68830256E12, "maxY": 157.70000000000005, "series": [{"data": [[1.68830256E12, 157.70000000000005]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.0, "maxY": 472.0, "series": [{"data": [[2.0, 429.0], [3.0, 331.0], [4.0, 330.0], [5.0, 388.0], [6.0, 389.0], [7.0, 349.0], [8.0, 322.0], [9.0, 430.0], [11.0, 393.0], [12.0, 353.0], [13.0, 393.0], [14.0, 328.0], [17.0, 376.3333333333333], [19.0, 368.0], [21.0, 399.0], [22.0, 389.0], [24.0, 339.5], [26.0, 339.5], [30.0, 375.0], [31.0, 315.0], [33.0, 379.5], [37.0, 390.6666666666667], [36.0, 318.0], [41.0, 319.0], [40.0, 406.0], [43.0, 382.0], [45.0, 181.0], [46.0, 441.0], [49.0, 340.5], [48.0, 440.0], [51.0, 317.5], [52.0, 315.0], [54.0, 398.0], [57.0, 338.0], [59.0, 368.0], [58.0, 376.0], [60.0, 265.0], [63.0, 369.3333333333333], [67.0, 359.0], [64.0, 305.0], [71.0, 381.0], [69.0, 359.3333333333333], [74.0, 187.5], [75.0, 37.0], [73.0, 280.0], [72.0, 309.0], [79.0, 361.0], [77.0, 295.0], [76.0, 371.0], [81.0, 230.0], [80.0, 256.6666666666667], [83.0, 413.5], [85.0, 161.66666666666669], [86.0, 258.0], [84.0, 257.0], [90.0, 472.0], [89.0, 450.0], [88.0, 240.5], [92.0, 72.0], [93.0, 281.0], [95.0, 243.33333333333334], [99.0, 266.0], [98.0, 425.0], [97.0, 427.0], [101.0, 178.33333333333331], [102.0, 158.5], [103.0, 264.3333333333333], [104.0, 211.0], [107.0, 293.0], [106.0, 300.0], [105.0, 279.0], [110.0, 140.5], [111.0, 101.0], [109.0, 390.0], [108.0, 379.0], [114.0, 96.0], [115.0, 138.75], [113.0, 176.66666666666669], [112.0, 171.2], [119.0, 217.0], [117.0, 135.28571428571428], [116.0, 183.2], [118.0, 114.0], [120.0, 110.0], [123.0, 314.0], [121.0, 225.5], [127.0, 177.66666666666666], [126.0, 417.0], [124.0, 359.0], [128.0, 265.0], [133.0, 129.0], [135.0, 328.0], [134.0, 442.0], [132.0, 395.0], [131.0, 221.0], [130.0, 302.0], [129.0, 431.0], [143.0, 387.0], [142.0, 325.0], [138.0, 310.0], [137.0, 403.0], [150.0, 175.33333333333334], [151.0, 263.0], [149.0, 220.0], [147.0, 395.0], [146.0, 376.0], [145.0, 359.0], [144.0, 365.0], [154.0, 306.3333333333333], [155.0, 150.75], [157.0, 386.5], [156.0, 352.0], [153.0, 320.0], [161.0, 191.0], [167.0, 168.0], [166.0, 169.0], [165.0, 355.0], [164.0, 166.75], [162.0, 246.0], [160.0, 284.2], [172.0, 177.0], [174.0, 295.3333333333333], [171.0, 192.0], [170.0, 336.75], [169.0, 369.0], [179.0, 204.0], [177.0, 325.3333333333333], [189.0, 187.5], [188.0, 314.2857142857143], [186.0, 194.0], [190.0, 292.0], [185.0, 374.5], [184.0, 276.0], [199.0, 209.75], [196.0, 182.25], [195.0, 210.0], [198.0, 340.0], [193.0, 176.0], [192.0, 322.3333333333333], [203.0, 260.6666666666667], [201.0, 203.33333333333334], [207.0, 237.0], [205.0, 378.0], [204.0, 332.0], [202.0, 331.6666666666667], [215.0, 196.0], [213.0, 211.0], [209.0, 287.5], [208.0, 198.0], [212.0, 313.0], [211.0, 227.0], [210.0, 211.33333333333334], [214.0, 360.0], [216.0, 203.6], [218.0, 214.5], [220.0, 232.9090909090909], [217.0, 268.0], [223.0, 347.0], [222.0, 358.0], [221.0, 169.0], [231.0, 306.0], [230.0, 221.5], [228.0, 328.0], [227.0, 132.0], [226.0, 327.0], [225.0, 312.0], [224.0, 363.0], [238.0, 273.5], [239.0, 244.0], [236.0, 304.0], [235.0, 319.0], [234.0, 112.0], [232.0, 117.0], [244.0, 248.5], [242.0, 251.0], [241.0, 208.4], [247.0, 254.0], [246.0, 257.5], [243.0, 260.6666666666667], [240.0, 272.6666666666667], [245.0, 298.5], [248.0, 260.3333333333333], [255.0, 284.0], [254.0, 301.5], [252.0, 280.6666666666667], [249.0, 294.0], [267.0, 250.33333333333334], [266.0, 282.0], [265.0, 257.0], [264.0, 264.0], [270.0, 284.0], [257.0, 295.0], [281.0, 262.46153846153845], [287.0, 270.42857142857144], [275.0, 282.8333333333333], [274.0, 286.0], [1.0, 391.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[157.69777777777782, 269.40000000000015]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 287.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2220.0, "minX": 1.68830256E12, "maxY": 11437.5, "series": [{"data": [[1.68830256E12, 2220.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830256E12, 11437.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 269.40000000000015, "minX": 1.68830256E12, "maxY": 269.40000000000015, "series": [{"data": [[1.68830256E12, 269.40000000000015]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 269.397777777778, "minX": 1.68830256E12, "maxY": 269.397777777778, "series": [{"data": [[1.68830256E12, 269.397777777778]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.5466666666666664, "minX": 1.68830256E12, "maxY": 3.5466666666666664, "series": [{"data": [[1.68830256E12, 3.5466666666666664]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 31.0, "minX": 1.68830256E12, "maxY": 472.0, "series": [{"data": [[1.68830256E12, 472.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830256E12, 31.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830256E12, 395.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830256E12, 443.47]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830256E12, 280.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830256E12, 416.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 70.0, "minX": 19.0, "maxY": 284.0, "series": [{"data": [[19.0, 70.0], [431.0, 284.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 431.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 70.0, "minX": 19.0, "maxY": 284.0, "series": [{"data": [[19.0, 70.0], [431.0, 284.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 431.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.68830256E12, "maxY": 7.5, "series": [{"data": [[1.68830256E12, 7.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.68830256E12, "maxY": 7.5, "series": [{"data": [[1.68830256E12, 7.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.68830256E12, "maxY": 7.5, "series": [{"data": [[1.68830256E12, 7.5]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.68830256E12, "maxY": 7.5, "series": [{"data": [[1.68830256E12, 7.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Total Transactions Per Second"}},
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

