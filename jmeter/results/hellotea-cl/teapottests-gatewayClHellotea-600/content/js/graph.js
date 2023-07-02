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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 412.0, "series": [{"data": [[0.0, 28.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 30.0], [0.5, 30.0], [0.6, 30.0], [0.7, 35.0], [0.8, 35.0], [0.9, 36.0], [1.0, 37.0], [1.1, 37.0], [1.2, 39.0], [1.3, 39.0], [1.4, 39.0], [1.5, 39.0], [1.6, 39.0], [1.7, 40.0], [1.8, 40.0], [1.9, 40.0], [2.0, 41.0], [2.1, 41.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 50.0], [2.6, 50.0], [2.7, 52.0], [2.8, 52.0], [2.9, 54.0], [3.0, 55.0], [3.1, 55.0], [3.2, 56.0], [3.3, 56.0], [3.4, 61.0], [3.5, 62.0], [3.6, 62.0], [3.7, 64.0], [3.8, 64.0], [3.9, 64.0], [4.0, 65.0], [4.1, 65.0], [4.2, 65.0], [4.3, 65.0], [4.4, 66.0], [4.5, 69.0], [4.6, 69.0], [4.7, 69.0], [4.8, 69.0], [4.9, 71.0], [5.0, 71.0], [5.1, 71.0], [5.2, 71.0], [5.3, 71.0], [5.4, 72.0], [5.5, 72.0], [5.6, 72.0], [5.7, 72.0], [5.8, 72.0], [5.9, 74.0], [6.0, 75.0], [6.1, 75.0], [6.2, 75.0], [6.3, 75.0], [6.4, 75.0], [6.5, 76.0], [6.6, 76.0], [6.7, 77.0], [6.8, 77.0], [6.9, 78.0], [7.0, 80.0], [7.1, 80.0], [7.2, 80.0], [7.3, 80.0], [7.4, 81.0], [7.5, 82.0], [7.6, 82.0], [7.7, 82.0], [7.8, 82.0], [7.9, 82.0], [8.0, 85.0], [8.1, 85.0], [8.2, 85.0], [8.3, 85.0], [8.4, 85.0], [8.5, 86.0], [8.6, 86.0], [8.7, 86.0], [8.8, 86.0], [8.9, 87.0], [9.0, 90.0], [9.1, 90.0], [9.2, 90.0], [9.3, 90.0], [9.4, 90.0], [9.5, 91.0], [9.6, 91.0], [9.7, 91.0], [9.8, 91.0], [9.9, 92.0], [10.0, 93.0], [10.1, 93.0], [10.2, 94.0], [10.3, 94.0], [10.4, 96.0], [10.5, 96.0], [10.6, 96.0], [10.7, 101.0], [10.8, 101.0], [10.9, 103.0], [11.0, 106.0], [11.1, 106.0], [11.2, 106.0], [11.3, 106.0], [11.4, 107.0], [11.5, 109.0], [11.6, 109.0], [11.7, 111.0], [11.8, 111.0], [11.9, 111.0], [12.0, 112.0], [12.1, 112.0], [12.2, 114.0], [12.3, 114.0], [12.4, 115.0], [12.5, 127.0], [12.6, 127.0], [12.7, 129.0], [12.8, 129.0], [12.9, 130.0], [13.0, 131.0], [13.1, 131.0], [13.2, 140.0], [13.3, 140.0], [13.4, 142.0], [13.5, 145.0], [13.6, 145.0], [13.7, 145.0], [13.8, 145.0], [13.9, 146.0], [14.0, 147.0], [14.1, 147.0], [14.2, 148.0], [14.3, 148.0], [14.4, 148.0], [14.5, 148.0], [14.6, 148.0], [14.7, 149.0], [14.8, 149.0], [14.9, 158.0], [15.0, 158.0], [15.1, 158.0], [15.2, 158.0], [15.3, 158.0], [15.4, 162.0], [15.5, 163.0], [15.6, 163.0], [15.7, 164.0], [15.8, 164.0], [15.9, 164.0], [16.0, 164.0], [16.1, 164.0], [16.2, 165.0], [16.3, 165.0], [16.4, 165.0], [16.5, 166.0], [16.6, 166.0], [16.7, 166.0], [16.8, 166.0], [16.9, 170.0], [17.0, 170.0], [17.1, 170.0], [17.2, 173.0], [17.3, 173.0], [17.4, 174.0], [17.5, 174.0], [17.6, 174.0], [17.7, 175.0], [17.8, 175.0], [17.9, 177.0], [18.0, 178.0], [18.1, 178.0], [18.2, 178.0], [18.3, 178.0], [18.4, 178.0], [18.5, 179.0], [18.6, 179.0], [18.7, 179.0], [18.8, 179.0], [18.9, 180.0], [19.0, 180.0], [19.1, 180.0], [19.2, 180.0], [19.3, 180.0], [19.4, 181.0], [19.5, 182.0], [19.6, 182.0], [19.7, 182.0], [19.8, 182.0], [19.9, 182.0], [20.0, 183.0], [20.1, 183.0], [20.2, 183.0], [20.3, 183.0], [20.4, 184.0], [20.5, 184.0], [20.6, 184.0], [20.7, 184.0], [20.8, 184.0], [20.9, 186.0], [21.0, 188.0], [21.1, 188.0], [21.2, 188.0], [21.3, 188.0], [21.4, 189.0], [21.5, 189.0], [21.6, 189.0], [21.7, 190.0], [21.8, 190.0], [21.9, 191.0], [22.0, 191.0], [22.1, 191.0], [22.2, 192.0], [22.3, 192.0], [22.4, 192.0], [22.5, 193.0], [22.6, 193.0], [22.7, 193.0], [22.8, 193.0], [22.9, 194.0], [23.0, 194.0], [23.1, 194.0], [23.2, 195.0], [23.3, 195.0], [23.4, 197.0], [23.5, 199.0], [23.6, 199.0], [23.7, 201.0], [23.8, 201.0], [23.9, 202.0], [24.0, 203.0], [24.1, 203.0], [24.2, 204.0], [24.3, 204.0], [24.4, 205.0], [24.5, 205.0], [24.6, 205.0], [24.7, 205.0], [24.8, 205.0], [24.9, 205.0], [25.0, 206.0], [25.1, 206.0], [25.2, 207.0], [25.3, 207.0], [25.4, 207.0], [25.5, 207.0], [25.6, 207.0], [25.7, 207.0], [25.8, 207.0], [25.9, 207.0], [26.0, 208.0], [26.1, 208.0], [26.2, 208.0], [26.3, 208.0], [26.4, 210.0], [26.5, 210.0], [26.6, 210.0], [26.7, 210.0], [26.8, 210.0], [26.9, 210.0], [27.0, 210.0], [27.1, 210.0], [27.2, 211.0], [27.3, 211.0], [27.4, 212.0], [27.5, 214.0], [27.6, 214.0], [27.7, 214.0], [27.8, 214.0], [27.9, 214.0], [28.0, 215.0], [28.1, 215.0], [28.2, 215.0], [28.3, 215.0], [28.4, 216.0], [28.5, 217.0], [28.6, 217.0], [28.7, 218.0], [28.8, 218.0], [28.9, 219.0], [29.0, 220.0], [29.1, 220.0], [29.2, 220.0], [29.3, 220.0], [29.4, 220.0], [29.5, 220.0], [29.6, 220.0], [29.7, 221.0], [29.8, 221.0], [29.9, 221.0], [30.0, 222.0], [30.1, 222.0], [30.2, 222.0], [30.3, 222.0], [30.4, 222.0], [30.5, 222.0], [30.6, 222.0], [30.7, 223.0], [30.8, 223.0], [30.9, 223.0], [31.0, 224.0], [31.1, 224.0], [31.2, 224.0], [31.3, 224.0], [31.4, 224.0], [31.5, 224.0], [31.6, 224.0], [31.7, 224.0], [31.8, 224.0], [31.9, 224.0], [32.0, 225.0], [32.1, 225.0], [32.2, 225.0], [32.3, 225.0], [32.4, 225.0], [32.5, 226.0], [32.6, 226.0], [32.7, 226.0], [32.8, 226.0], [32.9, 227.0], [33.0, 227.0], [33.1, 227.0], [33.2, 227.0], [33.3, 227.0], [33.4, 227.0], [33.5, 228.0], [33.6, 228.0], [33.7, 228.0], [33.8, 228.0], [33.9, 228.0], [34.0, 229.0], [34.1, 229.0], [34.2, 229.0], [34.3, 229.0], [34.4, 230.0], [34.5, 230.0], [34.6, 230.0], [34.7, 230.0], [34.8, 230.0], [34.9, 230.0], [35.0, 231.0], [35.1, 231.0], [35.2, 231.0], [35.3, 231.0], [35.4, 231.0], [35.5, 231.0], [35.6, 231.0], [35.7, 232.0], [35.8, 232.0], [35.9, 232.0], [36.0, 232.0], [36.1, 232.0], [36.2, 233.0], [36.3, 233.0], [36.4, 233.0], [36.5, 233.0], [36.6, 233.0], [36.7, 233.0], [36.8, 233.0], [36.9, 234.0], [37.0, 234.0], [37.1, 234.0], [37.2, 235.0], [37.3, 235.0], [37.4, 235.0], [37.5, 236.0], [37.6, 236.0], [37.7, 237.0], [37.8, 237.0], [37.9, 237.0], [38.0, 238.0], [38.1, 238.0], [38.2, 238.0], [38.3, 238.0], [38.4, 238.0], [38.5, 239.0], [38.6, 239.0], [38.7, 239.0], [38.8, 239.0], [38.9, 239.0], [39.0, 239.0], [39.1, 239.0], [39.2, 239.0], [39.3, 239.0], [39.4, 240.0], [39.5, 240.0], [39.6, 240.0], [39.7, 241.0], [39.8, 241.0], [39.9, 241.0], [40.0, 241.0], [40.1, 241.0], [40.2, 242.0], [40.3, 242.0], [40.4, 242.0], [40.5, 242.0], [40.6, 242.0], [40.7, 243.0], [40.8, 243.0], [40.9, 243.0], [41.0, 243.0], [41.1, 243.0], [41.2, 244.0], [41.3, 244.0], [41.4, 244.0], [41.5, 244.0], [41.6, 245.0], [41.7, 246.0], [41.8, 246.0], [41.9, 246.0], [42.0, 246.0], [42.1, 246.0], [42.2, 246.0], [42.3, 246.0], [42.4, 246.0], [42.5, 246.0], [42.6, 247.0], [42.7, 247.0], [42.8, 247.0], [42.9, 248.0], [43.0, 248.0], [43.1, 248.0], [43.2, 248.0], [43.3, 248.0], [43.4, 249.0], [43.5, 249.0], [43.6, 249.0], [43.7, 249.0], [43.8, 249.0], [43.9, 249.0], [44.0, 249.0], [44.1, 249.0], [44.2, 250.0], [44.3, 250.0], [44.4, 251.0], [44.5, 251.0], [44.6, 251.0], [44.7, 251.0], [44.8, 251.0], [44.9, 251.0], [45.0, 251.0], [45.1, 251.0], [45.2, 251.0], [45.3, 251.0], [45.4, 253.0], [45.5, 253.0], [45.6, 253.0], [45.7, 253.0], [45.8, 253.0], [45.9, 253.0], [46.0, 253.0], [46.1, 253.0], [46.2, 254.0], [46.3, 254.0], [46.4, 254.0], [46.5, 254.0], [46.6, 254.0], [46.7, 255.0], [46.8, 255.0], [46.9, 255.0], [47.0, 255.0], [47.1, 255.0], [47.2, 255.0], [47.3, 255.0], [47.4, 256.0], [47.5, 256.0], [47.6, 256.0], [47.7, 256.0], [47.8, 256.0], [47.9, 256.0], [48.0, 256.0], [48.1, 256.0], [48.2, 256.0], [48.3, 256.0], [48.4, 256.0], [48.5, 256.0], [48.6, 257.0], [48.7, 257.0], [48.8, 257.0], [48.9, 257.0], [49.0, 257.0], [49.1, 257.0], [49.2, 258.0], [49.3, 258.0], [49.4, 258.0], [49.5, 258.0], [49.6, 258.0], [49.7, 258.0], [49.8, 258.0], [49.9, 258.0], [50.0, 258.0], [50.1, 259.0], [50.2, 259.0], [50.3, 259.0], [50.4, 259.0], [50.5, 259.0], [50.6, 260.0], [50.7, 260.0], [50.8, 260.0], [50.9, 260.0], [51.0, 260.0], [51.1, 260.0], [51.2, 260.0], [51.3, 260.0], [51.4, 260.0], [51.5, 260.0], [51.6, 260.0], [51.7, 260.0], [51.8, 260.0], [51.9, 261.0], [52.0, 261.0], [52.1, 261.0], [52.2, 261.0], [52.3, 261.0], [52.4, 261.0], [52.5, 261.0], [52.6, 261.0], [52.7, 261.0], [52.8, 261.0], [52.9, 261.0], [53.0, 261.0], [53.1, 262.0], [53.2, 262.0], [53.3, 262.0], [53.4, 262.0], [53.5, 262.0], [53.6, 262.0], [53.7, 262.0], [53.8, 262.0], [53.9, 262.0], [54.0, 262.0], [54.1, 262.0], [54.2, 262.0], [54.3, 262.0], [54.4, 263.0], [54.5, 263.0], [54.6, 263.0], [54.7, 263.0], [54.8, 263.0], [54.9, 263.0], [55.0, 263.0], [55.1, 263.0], [55.2, 264.0], [55.3, 264.0], [55.4, 264.0], [55.5, 264.0], [55.6, 264.0], [55.7, 264.0], [55.8, 264.0], [55.9, 264.0], [56.0, 264.0], [56.1, 265.0], [56.2, 265.0], [56.3, 265.0], [56.4, 265.0], [56.5, 265.0], [56.6, 265.0], [56.7, 265.0], [56.8, 265.0], [56.9, 265.0], [57.0, 265.0], [57.1, 265.0], [57.2, 266.0], [57.3, 266.0], [57.4, 266.0], [57.5, 266.0], [57.6, 266.0], [57.7, 266.0], [57.8, 266.0], [57.9, 267.0], [58.0, 267.0], [58.1, 267.0], [58.2, 267.0], [58.3, 267.0], [58.4, 268.0], [58.5, 268.0], [58.6, 268.0], [58.7, 268.0], [58.8, 268.0], [58.9, 268.0], [59.0, 268.0], [59.1, 268.0], [59.2, 269.0], [59.3, 269.0], [59.4, 269.0], [59.5, 269.0], [59.6, 269.0], [59.7, 269.0], [59.8, 269.0], [59.9, 269.0], [60.0, 269.0], [60.1, 269.0], [60.2, 269.0], [60.3, 269.0], [60.4, 269.0], [60.5, 269.0], [60.6, 270.0], [60.7, 271.0], [60.8, 271.0], [60.9, 271.0], [61.0, 271.0], [61.1, 271.0], [61.2, 271.0], [61.3, 271.0], [61.4, 272.0], [61.5, 272.0], [61.6, 272.0], [61.7, 272.0], [61.8, 272.0], [61.9, 272.0], [62.0, 272.0], [62.1, 272.0], [62.2, 273.0], [62.3, 273.0], [62.4, 273.0], [62.5, 273.0], [62.6, 273.0], [62.7, 273.0], [62.8, 273.0], [62.9, 274.0], [63.0, 274.0], [63.1, 274.0], [63.2, 274.0], [63.3, 274.0], [63.4, 274.0], [63.5, 274.0], [63.6, 275.0], [63.7, 275.0], [63.8, 275.0], [63.9, 275.0], [64.0, 275.0], [64.1, 275.0], [64.2, 275.0], [64.3, 275.0], [64.4, 275.0], [64.5, 276.0], [64.6, 276.0], [64.7, 276.0], [64.8, 276.0], [64.9, 276.0], [65.0, 276.0], [65.1, 276.0], [65.2, 276.0], [65.3, 276.0], [65.4, 277.0], [65.5, 277.0], [65.6, 277.0], [65.7, 277.0], [65.8, 277.0], [65.9, 277.0], [66.0, 277.0], [66.1, 277.0], [66.2, 278.0], [66.3, 278.0], [66.4, 278.0], [66.5, 278.0], [66.6, 278.0], [66.7, 278.0], [66.8, 278.0], [66.9, 279.0], [67.0, 280.0], [67.1, 280.0], [67.2, 281.0], [67.3, 281.0], [67.4, 281.0], [67.5, 281.0], [67.6, 281.0], [67.7, 281.0], [67.8, 281.0], [67.9, 282.0], [68.0, 282.0], [68.1, 282.0], [68.2, 282.0], [68.3, 282.0], [68.4, 282.0], [68.5, 282.0], [68.6, 283.0], [68.7, 283.0], [68.8, 283.0], [68.9, 284.0], [69.0, 284.0], [69.1, 284.0], [69.2, 284.0], [69.3, 284.0], [69.4, 284.0], [69.5, 284.0], [69.6, 285.0], [69.7, 285.0], [69.8, 285.0], [69.9, 285.0], [70.0, 285.0], [70.1, 285.0], [70.2, 285.0], [70.3, 285.0], [70.4, 286.0], [70.5, 286.0], [70.6, 286.0], [70.7, 286.0], [70.8, 286.0], [70.9, 287.0], [71.0, 287.0], [71.1, 287.0], [71.2, 287.0], [71.3, 287.0], [71.4, 288.0], [71.5, 288.0], [71.6, 288.0], [71.7, 288.0], [71.8, 288.0], [71.9, 288.0], [72.0, 288.0], [72.1, 288.0], [72.2, 289.0], [72.3, 289.0], [72.4, 289.0], [72.5, 289.0], [72.6, 289.0], [72.7, 290.0], [72.8, 290.0], [72.9, 290.0], [73.0, 290.0], [73.1, 290.0], [73.2, 290.0], [73.3, 290.0], [73.4, 290.0], [73.5, 290.0], [73.6, 290.0], [73.7, 290.0], [73.8, 290.0], [73.9, 292.0], [74.0, 292.0], [74.1, 292.0], [74.2, 292.0], [74.3, 292.0], [74.4, 292.0], [74.5, 292.0], [74.6, 292.0], [74.7, 292.0], [74.8, 292.0], [74.9, 292.0], [75.0, 292.0], [75.1, 293.0], [75.2, 293.0], [75.3, 293.0], [75.4, 293.0], [75.5, 293.0], [75.6, 293.0], [75.7, 293.0], [75.8, 293.0], [75.9, 294.0], [76.0, 294.0], [76.1, 294.0], [76.2, 294.0], [76.3, 294.0], [76.4, 294.0], [76.5, 294.0], [76.6, 295.0], [76.7, 295.0], [76.8, 295.0], [76.9, 296.0], [77.0, 296.0], [77.1, 296.0], [77.2, 296.0], [77.3, 296.0], [77.4, 296.0], [77.5, 296.0], [77.6, 296.0], [77.7, 297.0], [77.8, 297.0], [77.9, 297.0], [78.0, 297.0], [78.1, 297.0], [78.2, 298.0], [78.3, 298.0], [78.4, 298.0], [78.5, 299.0], [78.6, 299.0], [78.7, 300.0], [78.8, 300.0], [78.9, 300.0], [79.0, 300.0], [79.1, 300.0], [79.2, 300.0], [79.3, 300.0], [79.4, 301.0], [79.5, 301.0], [79.6, 301.0], [79.7, 301.0], [79.8, 301.0], [79.9, 301.0], [80.0, 301.0], [80.1, 301.0], [80.2, 301.0], [80.3, 301.0], [80.4, 301.0], [80.5, 301.0], [80.6, 302.0], [80.7, 304.0], [80.8, 304.0], [80.9, 304.0], [81.0, 304.0], [81.1, 304.0], [81.2, 304.0], [81.3, 304.0], [81.4, 305.0], [81.5, 305.0], [81.6, 305.0], [81.7, 305.0], [81.8, 305.0], [81.9, 305.0], [82.0, 305.0], [82.1, 306.0], [82.2, 306.0], [82.3, 306.0], [82.4, 306.0], [82.5, 306.0], [82.6, 306.0], [82.7, 307.0], [82.8, 307.0], [82.9, 307.0], [83.0, 307.0], [83.1, 308.0], [83.2, 308.0], [83.3, 308.0], [83.4, 308.0], [83.5, 308.0], [83.6, 308.0], [83.7, 309.0], [83.8, 309.0], [83.9, 309.0], [84.0, 309.0], [84.1, 309.0], [84.2, 311.0], [84.3, 311.0], [84.4, 311.0], [84.5, 311.0], [84.6, 311.0], [84.7, 311.0], [84.8, 311.0], [84.9, 311.0], [85.0, 311.0], [85.1, 311.0], [85.2, 312.0], [85.3, 312.0], [85.4, 313.0], [85.5, 313.0], [85.6, 313.0], [85.7, 313.0], [85.8, 313.0], [85.9, 313.0], [86.0, 313.0], [86.1, 313.0], [86.2, 314.0], [86.3, 314.0], [86.4, 316.0], [86.5, 316.0], [86.6, 317.0], [86.7, 317.0], [86.8, 317.0], [86.9, 320.0], [87.0, 320.0], [87.1, 320.0], [87.2, 320.0], [87.3, 320.0], [87.4, 321.0], [87.5, 321.0], [87.6, 321.0], [87.7, 322.0], [87.8, 322.0], [87.9, 322.0], [88.0, 322.0], [88.1, 322.0], [88.2, 323.0], [88.3, 323.0], [88.4, 323.0], [88.5, 323.0], [88.6, 323.0], [88.7, 323.0], [88.8, 323.0], [88.9, 324.0], [89.0, 324.0], [89.1, 324.0], [89.2, 324.0], [89.3, 324.0], [89.4, 324.0], [89.5, 324.0], [89.6, 325.0], [89.7, 326.0], [89.8, 326.0], [89.9, 326.0], [90.0, 326.0], [90.1, 327.0], [90.2, 328.0], [90.3, 328.0], [90.4, 328.0], [90.5, 328.0], [90.6, 328.0], [90.7, 329.0], [90.8, 329.0], [90.9, 329.0], [91.0, 329.0], [91.1, 329.0], [91.2, 329.0], [91.3, 329.0], [91.4, 330.0], [91.5, 330.0], [91.6, 330.0], [91.7, 330.0], [91.8, 330.0], [91.9, 330.0], [92.0, 330.0], [92.1, 332.0], [92.2, 332.0], [92.3, 332.0], [92.4, 332.0], [92.5, 332.0], [92.6, 332.0], [92.7, 333.0], [92.8, 333.0], [92.9, 333.0], [93.0, 333.0], [93.1, 334.0], [93.2, 335.0], [93.3, 335.0], [93.4, 335.0], [93.5, 335.0], [93.6, 338.0], [93.7, 338.0], [93.8, 338.0], [93.9, 340.0], [94.0, 340.0], [94.1, 342.0], [94.2, 343.0], [94.3, 343.0], [94.4, 344.0], [94.5, 344.0], [94.6, 345.0], [94.7, 346.0], [94.8, 346.0], [94.9, 346.0], [95.0, 346.0], [95.1, 348.0], [95.2, 349.0], [95.3, 349.0], [95.4, 350.0], [95.5, 350.0], [95.6, 350.0], [95.7, 350.0], [95.8, 350.0], [95.9, 351.0], [96.0, 351.0], [96.1, 358.0], [96.2, 358.0], [96.3, 358.0], [96.4, 358.0], [96.5, 358.0], [96.6, 358.0], [96.7, 361.0], [96.8, 361.0], [96.9, 362.0], [97.0, 362.0], [97.1, 363.0], [97.2, 363.0], [97.3, 363.0], [97.4, 364.0], [97.5, 364.0], [97.6, 365.0], [97.7, 365.0], [97.8, 365.0], [97.9, 368.0], [98.0, 368.0], [98.1, 369.0], [98.2, 369.0], [98.3, 369.0], [98.4, 372.0], [98.5, 372.0], [98.6, 374.0], [98.7, 374.0], [98.8, 374.0], [98.9, 375.0], [99.0, 375.0], [99.1, 376.0], [99.2, 384.0], [99.3, 384.0], [99.4, 387.0], [99.5, 387.0], [99.6, 391.0], [99.7, 401.0], [99.8, 401.0], [99.9, 412.0], [100.0, 412.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 330.0, "series": [{"data": [[0.0, 64.0], [300.0, 126.0], [100.0, 78.0], [200.0, 330.0], [400.0, 2.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 217.64500000000004, "minX": 1.68830076E12, "maxY": 217.64500000000004, "series": [{"data": [[1.68830076E12, 217.64500000000004]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 35.5, "minX": 1.0, "maxY": 387.0, "series": [{"data": [[3.0, 207.5], [4.0, 262.0], [5.0, 313.0], [6.0, 283.0], [9.0, 246.0], [10.0, 276.0], [11.0, 249.33333333333334], [13.0, 239.5], [14.0, 227.0], [16.0, 247.5], [18.0, 235.0], [19.0, 230.0], [21.0, 267.0], [26.0, 243.0], [28.0, 241.0], [32.0, 234.66666666666666], [35.0, 277.5], [37.0, 244.5], [39.0, 127.0], [38.0, 41.0], [41.0, 38.5], [40.0, 149.5], [43.0, 107.33333333333333], [42.0, 229.66666666666666], [44.0, 126.5], [45.0, 175.33333333333334], [47.0, 212.0], [46.0, 35.5], [49.0, 150.0], [48.0, 297.0], [50.0, 152.0], [52.0, 254.0], [54.0, 187.75], [55.0, 75.0], [57.0, 168.0], [56.0, 214.0], [59.0, 176.33333333333334], [61.0, 173.0], [60.0, 207.0], [63.0, 91.6], [62.0, 122.5], [66.0, 130.0], [65.0, 114.75], [64.0, 188.0], [70.0, 235.5], [69.0, 204.5], [75.0, 232.0], [74.0, 286.5], [72.0, 202.0], [79.0, 283.25], [83.0, 166.33333333333331], [82.0, 158.0], [81.0, 299.0], [85.0, 69.0], [84.0, 81.0], [87.0, 259.0], [89.0, 194.33333333333334], [88.0, 71.33333333333333], [91.0, 287.0], [90.0, 275.0], [95.0, 185.0], [94.0, 93.0], [93.0, 96.0], [92.0, 94.0], [98.0, 285.0], [96.0, 272.0], [100.0, 151.33333333333334], [103.0, 220.0], [102.0, 238.0], [101.0, 255.0], [107.0, 268.0], [109.0, 208.0], [108.0, 228.75], [115.0, 263.0], [114.0, 319.0], [112.0, 302.5], [118.0, 333.3333333333333], [121.0, 77.0], [122.0, 330.5], [135.0, 293.0], [133.0, 347.0], [132.0, 258.5], [129.0, 319.7142857142857], [143.0, 306.0], [141.0, 294.0], [139.0, 233.0], [136.0, 290.0], [151.0, 284.0], [150.0, 262.0], [149.0, 250.0], [147.0, 260.5], [146.0, 354.5], [145.0, 204.0], [144.0, 292.0], [158.0, 299.0], [157.0, 214.0], [155.0, 289.0], [152.0, 284.6666666666667], [165.0, 249.25], [164.0, 301.5], [162.0, 251.0], [161.0, 249.0], [174.0, 137.18181818181816], [175.0, 99.0909090909091], [173.0, 184.0], [172.0, 230.0], [171.0, 266.75], [168.0, 384.0], [183.0, 145.0], [182.0, 305.0], [181.0, 239.0], [180.0, 297.6666666666667], [178.0, 387.0], [176.0, 329.5], [187.0, 189.33333333333334], [191.0, 264.0], [189.0, 313.5], [186.0, 345.0], [185.0, 261.0], [184.0, 306.0], [199.0, 265.0], [198.0, 282.0], [204.0, 354.25], [203.0, 376.0], [201.0, 294.0], [215.0, 312.5], [214.0, 240.0], [213.0, 250.5], [212.0, 348.0], [210.0, 260.0], [209.0, 296.0], [208.0, 328.0], [218.0, 225.8], [222.0, 261.0], [221.0, 213.0], [219.0, 259.6666666666667], [217.0, 220.0], [229.0, 146.5], [230.0, 196.0], [228.0, 237.0], [231.0, 215.5], [227.0, 192.0], [225.0, 311.0], [224.0, 247.5], [238.0, 265.0], [237.0, 262.5], [235.0, 273.0], [234.0, 245.66666666666666], [247.0, 271.4], [246.0, 324.0], [241.0, 310.6666666666667], [252.0, 284.0], [251.0, 304.0], [250.0, 302.0], [249.0, 250.0], [269.0, 164.0], [270.0, 157.0], [268.0, 166.5], [258.0, 312.0], [257.0, 273.3333333333333], [256.0, 258.0], [267.0, 229.75], [265.0, 246.5], [264.0, 181.0], [271.0, 255.0], [266.0, 300.0], [263.0, 303.5], [262.0, 247.5], [260.0, 289.5], [273.0, 176.33333333333331], [279.0, 163.5], [272.0, 262.0], [278.0, 233.5], [277.0, 156.66666666666666], [276.0, 193.5], [275.0, 226.4], [287.0, 266.0], [282.0, 254.5], [281.0, 263.6666666666667], [286.0, 233.0], [284.0, 258.0], [301.0, 304.0], [303.0, 258.5], [300.0, 290.0], [299.0, 297.0], [297.0, 306.0], [295.0, 274.0], [293.0, 259.5], [291.0, 274.5], [289.0, 297.0], [306.0, 184.5], [310.0, 295.25], [311.0, 222.0], [309.0, 173.0], [308.0, 184.0], [307.0, 182.0], [317.0, 311.0], [316.0, 276.0], [305.0, 166.0], [319.0, 175.0], [313.0, 280.0], [312.0, 260.0], [315.0, 276.0], [314.0, 314.0], [318.0, 211.0], [332.0, 284.0], [324.0, 188.0], [325.0, 294.5714285714286], [322.0, 177.0], [321.0, 240.0], [320.0, 179.0], [327.0, 321.5], [333.0, 261.0], [331.0, 315.0], [329.0, 338.0], [328.0, 292.0], [350.0, 328.5], [342.0, 263.5], [351.0, 256.0], [349.0, 285.0], [347.0, 320.0], [346.0, 279.0], [345.0, 285.6666666666667], [341.0, 310.6666666666667], [339.0, 297.0], [338.0, 288.0], [337.0, 330.6666666666667], [359.0, 305.6666666666667], [357.0, 264.0], [356.0, 267.0], [358.0, 297.5], [367.0, 253.0], [366.0, 278.0], [362.0, 324.0], [360.0, 322.0], [355.0, 294.0], [354.0, 266.0], [352.0, 264.0], [383.0, 251.7], [379.0, 251.0], [380.0, 255.66666666666666], [371.0, 351.0], [370.0, 285.5], [369.0, 321.0], [368.0, 365.0], [382.0, 256.4285714285714], [378.0, 308.6666666666667], [377.0, 292.0], [381.0, 297.3333333333333], [376.0, 320.0], [375.0, 281.0], [374.0, 299.5], [373.0, 275.0], [392.0, 260.0], [384.0, 255.50000000000003], [385.0, 248.5], [386.0, 241.3846153846154], [395.0, 334.0], [394.0, 240.0], [393.0, 289.3333333333333], [390.0, 275.5], [389.0, 273.0], [388.0, 248.0], [391.0, 308.3333333333333], [387.0, 263.3333333333333], [1.0, 210.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[217.64500000000004, 239.51000000000022]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 395.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1820.0, "minX": 1.68830076E12, "maxY": 4000.0, "series": [{"data": [[1.68830076E12, 4000.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830076E12, 1820.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 239.51000000000022, "minX": 1.68830076E12, "maxY": 239.51000000000022, "series": [{"data": [[1.68830076E12, 239.51000000000022]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 239.5083333333335, "minX": 1.68830076E12, "maxY": 239.5083333333335, "series": [{"data": [[1.68830076E12, 239.5083333333335]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.255000000000001, "minX": 1.68830076E12, "maxY": 1.255000000000001, "series": [{"data": [[1.68830076E12, 1.255000000000001]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.68830076E12, "maxY": 412.0, "series": [{"data": [[1.68830076E12, 412.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830076E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830076E12, 326.9]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830076E12, 375.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830076E12, 258.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830076E12, 347.89999999999986]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 243.5, "minX": 82.0, "maxY": 261.0, "series": [{"data": [[518.0, 261.0], [82.0, 243.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 518.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 243.5, "minX": 82.0, "maxY": 261.0, "series": [{"data": [[518.0, 261.0], [82.0, 243.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 518.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68830076E12, "maxY": 10.0, "series": [{"data": [[1.68830076E12, 10.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68830076E12, "maxY": 10.0, "series": [{"data": [[1.68830076E12, 10.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68830076E12, "maxY": 10.0, "series": [{"data": [[1.68830076E12, 10.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.0, "minX": 1.68830076E12, "maxY": 10.0, "series": [{"data": [[1.68830076E12, 10.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Total Transactions Per Second"}},
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

