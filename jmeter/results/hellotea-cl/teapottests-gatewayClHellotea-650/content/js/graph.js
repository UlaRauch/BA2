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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 498.0, "series": [{"data": [[0.0, 27.0], [0.1, 27.0], [0.2, 27.0], [0.3, 27.0], [0.4, 37.0], [0.5, 39.0], [0.6, 39.0], [0.7, 42.0], [0.8, 43.0], [0.9, 43.0], [1.0, 44.0], [1.1, 44.0], [1.2, 44.0], [1.3, 50.0], [1.4, 50.0], [1.5, 50.0], [1.6, 51.0], [1.7, 51.0], [1.8, 51.0], [1.9, 52.0], [2.0, 52.0], [2.1, 52.0], [2.2, 53.0], [2.3, 53.0], [2.4, 53.0], [2.5, 53.0], [2.6, 53.0], [2.7, 61.0], [2.8, 69.0], [2.9, 69.0], [3.0, 70.0], [3.1, 70.0], [3.2, 70.0], [3.3, 74.0], [3.4, 75.0], [3.5, 75.0], [3.6, 75.0], [3.7, 75.0], [3.8, 75.0], [3.9, 75.0], [4.0, 78.0], [4.1, 78.0], [4.2, 78.0], [4.3, 78.0], [4.4, 78.0], [4.5, 79.0], [4.6, 79.0], [4.7, 81.0], [4.8, 102.0], [4.9, 102.0], [5.0, 103.0], [5.1, 105.0], [5.2, 105.0], [5.3, 105.0], [5.4, 110.0], [5.5, 110.0], [5.6, 110.0], [5.7, 113.0], [5.8, 113.0], [5.9, 113.0], [6.0, 113.0], [6.1, 114.0], [6.2, 115.0], [6.3, 115.0], [6.4, 129.0], [6.5, 132.0], [6.6, 132.0], [6.7, 132.0], [6.8, 134.0], [6.9, 134.0], [7.0, 138.0], [7.1, 139.0], [7.2, 139.0], [7.3, 144.0], [7.4, 144.0], [7.5, 144.0], [7.6, 145.0], [7.7, 147.0], [7.8, 147.0], [7.9, 148.0], [8.0, 148.0], [8.1, 150.0], [8.2, 151.0], [8.3, 151.0], [8.4, 152.0], [8.5, 158.0], [8.6, 158.0], [8.7, 160.0], [8.8, 164.0], [8.9, 164.0], [9.0, 164.0], [9.1, 166.0], [9.2, 166.0], [9.3, 166.0], [9.4, 167.0], [9.5, 167.0], [9.6, 167.0], [9.7, 170.0], [9.8, 170.0], [9.9, 171.0], [10.0, 171.0], [10.1, 172.0], [10.2, 174.0], [10.3, 174.0], [10.4, 175.0], [10.5, 178.0], [10.6, 178.0], [10.7, 179.0], [10.8, 179.0], [10.9, 179.0], [11.0, 180.0], [11.1, 180.0], [11.2, 180.0], [11.3, 181.0], [11.4, 182.0], [11.5, 182.0], [11.6, 184.0], [11.7, 184.0], [11.8, 184.0], [11.9, 184.0], [12.0, 185.0], [12.1, 185.0], [12.2, 185.0], [12.3, 185.0], [12.4, 186.0], [12.5, 186.0], [12.6, 186.0], [12.7, 189.0], [12.8, 192.0], [12.9, 192.0], [13.0, 192.0], [13.1, 194.0], [13.2, 194.0], [13.3, 194.0], [13.4, 194.0], [13.5, 194.0], [13.6, 195.0], [13.7, 196.0], [13.8, 196.0], [13.9, 198.0], [14.0, 198.0], [14.1, 198.0], [14.2, 199.0], [14.3, 199.0], [14.4, 199.0], [14.5, 199.0], [14.6, 199.0], [14.7, 199.0], [14.8, 200.0], [14.9, 200.0], [15.0, 201.0], [15.1, 201.0], [15.2, 201.0], [15.3, 202.0], [15.4, 203.0], [15.5, 203.0], [15.6, 203.0], [15.7, 204.0], [15.8, 204.0], [15.9, 205.0], [16.0, 205.0], [16.1, 205.0], [16.2, 206.0], [16.3, 206.0], [16.4, 207.0], [16.5, 208.0], [16.6, 208.0], [16.7, 208.0], [16.8, 209.0], [16.9, 209.0], [17.0, 209.0], [17.1, 209.0], [17.2, 209.0], [17.3, 210.0], [17.4, 210.0], [17.5, 210.0], [17.6, 211.0], [17.7, 211.0], [17.8, 211.0], [17.9, 211.0], [18.0, 212.0], [18.1, 212.0], [18.2, 212.0], [18.3, 212.0], [18.4, 212.0], [18.5, 213.0], [18.6, 213.0], [18.7, 213.0], [18.8, 213.0], [18.9, 213.0], [19.0, 213.0], [19.1, 213.0], [19.2, 213.0], [19.3, 214.0], [19.4, 214.0], [19.5, 214.0], [19.6, 214.0], [19.7, 215.0], [19.8, 215.0], [19.9, 216.0], [20.0, 216.0], [20.1, 216.0], [20.2, 216.0], [20.3, 216.0], [20.4, 216.0], [20.5, 217.0], [20.6, 217.0], [20.7, 217.0], [20.8, 217.0], [20.9, 217.0], [21.0, 218.0], [21.1, 219.0], [21.2, 219.0], [21.3, 219.0], [21.4, 219.0], [21.5, 219.0], [21.6, 220.0], [21.7, 221.0], [21.8, 221.0], [21.9, 221.0], [22.0, 221.0], [22.1, 221.0], [22.2, 222.0], [22.3, 222.0], [22.4, 223.0], [22.5, 223.0], [22.6, 223.0], [22.7, 224.0], [22.8, 224.0], [22.9, 224.0], [23.0, 224.0], [23.1, 226.0], [23.2, 226.0], [23.3, 228.0], [23.4, 228.0], [23.5, 228.0], [23.6, 229.0], [23.7, 229.0], [23.8, 229.0], [23.9, 229.0], [24.0, 230.0], [24.1, 230.0], [24.2, 230.0], [24.3, 230.0], [24.4, 231.0], [24.5, 231.0], [24.6, 231.0], [24.7, 232.0], [24.8, 232.0], [24.9, 232.0], [25.0, 232.0], [25.1, 233.0], [25.2, 233.0], [25.3, 233.0], [25.4, 233.0], [25.5, 233.0], [25.6, 233.0], [25.7, 233.0], [25.8, 233.0], [25.9, 233.0], [26.0, 233.0], [26.1, 233.0], [26.2, 233.0], [26.3, 233.0], [26.4, 236.0], [26.5, 237.0], [26.6, 237.0], [26.7, 237.0], [26.8, 237.0], [26.9, 237.0], [27.0, 238.0], [27.1, 239.0], [27.2, 239.0], [27.3, 239.0], [27.4, 239.0], [27.5, 239.0], [27.6, 239.0], [27.7, 239.0], [27.8, 239.0], [27.9, 240.0], [28.0, 240.0], [28.1, 240.0], [28.2, 240.0], [28.3, 240.0], [28.4, 240.0], [28.5, 241.0], [28.6, 241.0], [28.7, 241.0], [28.8, 241.0], [28.9, 241.0], [29.0, 242.0], [29.1, 242.0], [29.2, 242.0], [29.3, 242.0], [29.4, 242.0], [29.5, 242.0], [29.6, 242.0], [29.7, 243.0], [29.8, 243.0], [29.9, 243.0], [30.0, 243.0], [30.1, 243.0], [30.2, 243.0], [30.3, 243.0], [30.4, 243.0], [30.5, 243.0], [30.6, 243.0], [30.7, 244.0], [30.8, 245.0], [30.9, 245.0], [31.0, 245.0], [31.1, 245.0], [31.2, 245.0], [31.3, 246.0], [31.4, 246.0], [31.5, 246.0], [31.6, 246.0], [31.7, 246.0], [31.8, 246.0], [31.9, 246.0], [32.0, 247.0], [32.1, 247.0], [32.2, 247.0], [32.3, 247.0], [32.4, 247.0], [32.5, 247.0], [32.6, 247.0], [32.7, 247.0], [32.8, 248.0], [32.9, 248.0], [33.0, 248.0], [33.1, 249.0], [33.2, 249.0], [33.3, 249.0], [33.4, 249.0], [33.5, 249.0], [33.6, 250.0], [33.7, 250.0], [33.8, 250.0], [33.9, 250.0], [34.0, 250.0], [34.1, 250.0], [34.2, 251.0], [34.3, 251.0], [34.4, 251.0], [34.5, 251.0], [34.6, 251.0], [34.7, 251.0], [34.8, 251.0], [34.9, 251.0], [35.0, 252.0], [35.1, 252.0], [35.2, 252.0], [35.3, 252.0], [35.4, 252.0], [35.5, 252.0], [35.6, 253.0], [35.7, 253.0], [35.8, 253.0], [35.9, 254.0], [36.0, 254.0], [36.1, 254.0], [36.2, 254.0], [36.3, 254.0], [36.4, 254.0], [36.5, 255.0], [36.6, 255.0], [36.7, 255.0], [36.8, 256.0], [36.9, 256.0], [37.0, 256.0], [37.1, 256.0], [37.2, 256.0], [37.3, 256.0], [37.4, 257.0], [37.5, 257.0], [37.6, 257.0], [37.7, 257.0], [37.8, 257.0], [37.9, 258.0], [38.0, 258.0], [38.1, 258.0], [38.2, 258.0], [38.3, 258.0], [38.4, 258.0], [38.5, 259.0], [38.6, 259.0], [38.7, 259.0], [38.8, 259.0], [38.9, 259.0], [39.0, 259.0], [39.1, 259.0], [39.2, 259.0], [39.3, 259.0], [39.4, 259.0], [39.5, 259.0], [39.6, 260.0], [39.7, 260.0], [39.8, 260.0], [39.9, 260.0], [40.0, 260.0], [40.1, 260.0], [40.2, 260.0], [40.3, 260.0], [40.4, 261.0], [40.5, 261.0], [40.6, 261.0], [40.7, 261.0], [40.8, 261.0], [40.9, 261.0], [41.0, 261.0], [41.1, 262.0], [41.2, 262.0], [41.3, 262.0], [41.4, 262.0], [41.5, 262.0], [41.6, 262.0], [41.7, 262.0], [41.8, 262.0], [41.9, 262.0], [42.0, 263.0], [42.1, 263.0], [42.2, 263.0], [42.3, 263.0], [42.4, 263.0], [42.5, 263.0], [42.6, 263.0], [42.7, 263.0], [42.8, 264.0], [42.9, 264.0], [43.0, 264.0], [43.1, 264.0], [43.2, 264.0], [43.3, 264.0], [43.4, 264.0], [43.5, 264.0], [43.6, 264.0], [43.7, 264.0], [43.8, 264.0], [43.9, 264.0], [44.0, 265.0], [44.1, 265.0], [44.2, 265.0], [44.3, 265.0], [44.4, 265.0], [44.5, 265.0], [44.6, 265.0], [44.7, 265.0], [44.8, 265.0], [44.9, 265.0], [45.0, 266.0], [45.1, 266.0], [45.2, 266.0], [45.3, 266.0], [45.4, 266.0], [45.5, 266.0], [45.6, 266.0], [45.7, 267.0], [45.8, 267.0], [45.9, 267.0], [46.0, 268.0], [46.1, 268.0], [46.2, 268.0], [46.3, 268.0], [46.4, 268.0], [46.5, 268.0], [46.6, 268.0], [46.7, 268.0], [46.8, 269.0], [46.9, 269.0], [47.0, 269.0], [47.1, 269.0], [47.2, 269.0], [47.3, 269.0], [47.4, 269.0], [47.5, 269.0], [47.6, 269.0], [47.7, 269.0], [47.8, 269.0], [47.9, 269.0], [48.0, 270.0], [48.1, 270.0], [48.2, 270.0], [48.3, 270.0], [48.4, 270.0], [48.5, 270.0], [48.6, 270.0], [48.7, 270.0], [48.8, 270.0], [48.9, 270.0], [49.0, 271.0], [49.1, 271.0], [49.2, 271.0], [49.3, 271.0], [49.4, 271.0], [49.5, 271.0], [49.6, 271.0], [49.7, 271.0], [49.8, 271.0], [49.9, 272.0], [50.0, 272.0], [50.1, 272.0], [50.2, 272.0], [50.3, 272.0], [50.4, 273.0], [50.5, 273.0], [50.6, 273.0], [50.7, 273.0], [50.8, 273.0], [50.9, 273.0], [51.0, 274.0], [51.1, 274.0], [51.2, 274.0], [51.3, 274.0], [51.4, 274.0], [51.5, 274.0], [51.6, 274.0], [51.7, 274.0], [51.8, 274.0], [51.9, 275.0], [52.0, 276.0], [52.1, 276.0], [52.2, 276.0], [52.3, 276.0], [52.4, 276.0], [52.5, 276.0], [52.6, 276.0], [52.7, 277.0], [52.8, 277.0], [52.9, 277.0], [53.0, 278.0], [53.1, 278.0], [53.2, 278.0], [53.3, 278.0], [53.4, 278.0], [53.5, 278.0], [53.6, 279.0], [53.7, 279.0], [53.8, 279.0], [53.9, 279.0], [54.0, 279.0], [54.1, 279.0], [54.2, 279.0], [54.3, 279.0], [54.4, 280.0], [54.5, 280.0], [54.6, 280.0], [54.7, 280.0], [54.8, 281.0], [54.9, 281.0], [55.0, 281.0], [55.1, 281.0], [55.2, 281.0], [55.3, 281.0], [55.4, 281.0], [55.5, 281.0], [55.6, 281.0], [55.7, 282.0], [55.8, 282.0], [55.9, 282.0], [56.0, 282.0], [56.1, 282.0], [56.2, 282.0], [56.3, 282.0], [56.4, 282.0], [56.5, 282.0], [56.6, 282.0], [56.7, 282.0], [56.8, 282.0], [56.9, 282.0], [57.0, 283.0], [57.1, 283.0], [57.2, 283.0], [57.3, 283.0], [57.4, 283.0], [57.5, 283.0], [57.6, 283.0], [57.7, 283.0], [57.8, 283.0], [57.9, 283.0], [58.0, 283.0], [58.1, 283.0], [58.2, 283.0], [58.3, 283.0], [58.4, 283.0], [58.5, 284.0], [58.6, 284.0], [58.7, 284.0], [58.8, 284.0], [58.9, 284.0], [59.0, 284.0], [59.1, 284.0], [59.2, 284.0], [59.3, 284.0], [59.4, 284.0], [59.5, 284.0], [59.6, 284.0], [59.7, 285.0], [59.8, 285.0], [59.9, 285.0], [60.0, 285.0], [60.1, 285.0], [60.2, 285.0], [60.3, 285.0], [60.4, 285.0], [60.5, 285.0], [60.6, 285.0], [60.7, 285.0], [60.8, 286.0], [60.9, 286.0], [61.0, 287.0], [61.1, 287.0], [61.2, 287.0], [61.3, 287.0], [61.4, 287.0], [61.5, 287.0], [61.6, 287.0], [61.7, 288.0], [61.8, 288.0], [61.9, 288.0], [62.0, 288.0], [62.1, 288.0], [62.2, 289.0], [62.3, 289.0], [62.4, 289.0], [62.5, 289.0], [62.6, 289.0], [62.7, 289.0], [62.8, 289.0], [62.9, 289.0], [63.0, 289.0], [63.1, 289.0], [63.2, 289.0], [63.3, 289.0], [63.4, 289.0], [63.5, 289.0], [63.6, 290.0], [63.7, 290.0], [63.8, 290.0], [63.9, 290.0], [64.0, 290.0], [64.1, 290.0], [64.2, 290.0], [64.3, 290.0], [64.4, 290.0], [64.5, 290.0], [64.6, 290.0], [64.7, 291.0], [64.8, 291.0], [64.9, 291.0], [65.0, 291.0], [65.1, 291.0], [65.2, 291.0], [65.3, 292.0], [65.4, 292.0], [65.5, 292.0], [65.6, 292.0], [65.7, 292.0], [65.8, 292.0], [65.9, 292.0], [66.0, 293.0], [66.1, 293.0], [66.2, 293.0], [66.3, 293.0], [66.4, 293.0], [66.5, 293.0], [66.6, 293.0], [66.7, 293.0], [66.8, 293.0], [66.9, 293.0], [67.0, 293.0], [67.1, 293.0], [67.2, 293.0], [67.3, 293.0], [67.4, 293.0], [67.5, 293.0], [67.6, 293.0], [67.7, 294.0], [67.8, 294.0], [67.9, 294.0], [68.0, 295.0], [68.1, 295.0], [68.2, 295.0], [68.3, 295.0], [68.4, 295.0], [68.5, 295.0], [68.6, 295.0], [68.7, 295.0], [68.8, 295.0], [68.9, 295.0], [69.0, 295.0], [69.1, 295.0], [69.2, 295.0], [69.3, 296.0], [69.4, 296.0], [69.5, 296.0], [69.6, 296.0], [69.7, 297.0], [69.8, 297.0], [69.9, 297.0], [70.0, 297.0], [70.1, 297.0], [70.2, 298.0], [70.3, 298.0], [70.4, 298.0], [70.5, 298.0], [70.6, 298.0], [70.7, 298.0], [70.8, 298.0], [70.9, 298.0], [71.0, 299.0], [71.1, 299.0], [71.2, 299.0], [71.3, 299.0], [71.4, 299.0], [71.5, 299.0], [71.6, 299.0], [71.7, 300.0], [71.8, 300.0], [71.9, 300.0], [72.0, 300.0], [72.1, 300.0], [72.2, 300.0], [72.3, 300.0], [72.4, 300.0], [72.5, 300.0], [72.6, 300.0], [72.7, 300.0], [72.8, 301.0], [72.9, 301.0], [73.0, 301.0], [73.1, 301.0], [73.2, 301.0], [73.3, 301.0], [73.4, 301.0], [73.5, 301.0], [73.6, 301.0], [73.7, 302.0], [73.8, 302.0], [73.9, 302.0], [74.0, 302.0], [74.1, 302.0], [74.2, 302.0], [74.3, 302.0], [74.4, 302.0], [74.5, 302.0], [74.6, 302.0], [74.7, 302.0], [74.8, 302.0], [74.9, 302.0], [75.0, 303.0], [75.1, 303.0], [75.2, 303.0], [75.3, 304.0], [75.4, 304.0], [75.5, 304.0], [75.6, 305.0], [75.7, 305.0], [75.8, 305.0], [75.9, 305.0], [76.0, 305.0], [76.1, 305.0], [76.2, 305.0], [76.3, 305.0], [76.4, 306.0], [76.5, 306.0], [76.6, 306.0], [76.7, 306.0], [76.8, 307.0], [76.9, 307.0], [77.0, 307.0], [77.1, 307.0], [77.2, 307.0], [77.3, 307.0], [77.4, 308.0], [77.5, 308.0], [77.6, 308.0], [77.7, 308.0], [77.8, 308.0], [77.9, 308.0], [78.0, 309.0], [78.1, 309.0], [78.2, 310.0], [78.3, 310.0], [78.4, 310.0], [78.5, 310.0], [78.6, 310.0], [78.7, 310.0], [78.8, 310.0], [78.9, 310.0], [79.0, 311.0], [79.1, 311.0], [79.2, 311.0], [79.3, 311.0], [79.4, 311.0], [79.5, 311.0], [79.6, 311.0], [79.7, 312.0], [79.8, 312.0], [79.9, 312.0], [80.0, 312.0], [80.1, 312.0], [80.2, 312.0], [80.3, 312.0], [80.4, 313.0], [80.5, 313.0], [80.6, 313.0], [80.7, 313.0], [80.8, 314.0], [80.9, 314.0], [81.0, 314.0], [81.1, 314.0], [81.2, 314.0], [81.3, 314.0], [81.4, 314.0], [81.5, 314.0], [81.6, 314.0], [81.7, 315.0], [81.8, 315.0], [81.9, 315.0], [82.0, 315.0], [82.1, 315.0], [82.2, 315.0], [82.3, 315.0], [82.4, 316.0], [82.5, 316.0], [82.6, 316.0], [82.7, 316.0], [82.8, 316.0], [82.9, 316.0], [83.0, 316.0], [83.1, 316.0], [83.2, 316.0], [83.3, 317.0], [83.4, 317.0], [83.5, 317.0], [83.6, 317.0], [83.7, 317.0], [83.8, 317.0], [83.9, 317.0], [84.0, 318.0], [84.1, 318.0], [84.2, 318.0], [84.3, 318.0], [84.4, 320.0], [84.5, 320.0], [84.6, 320.0], [84.7, 320.0], [84.8, 320.0], [84.9, 320.0], [85.0, 320.0], [85.1, 320.0], [85.2, 320.0], [85.3, 321.0], [85.4, 321.0], [85.5, 321.0], [85.6, 321.0], [85.7, 321.0], [85.8, 321.0], [85.9, 322.0], [86.0, 322.0], [86.1, 322.0], [86.2, 322.0], [86.3, 322.0], [86.4, 322.0], [86.5, 323.0], [86.6, 323.0], [86.7, 323.0], [86.8, 323.0], [86.9, 323.0], [87.0, 324.0], [87.1, 324.0], [87.2, 324.0], [87.3, 325.0], [87.4, 326.0], [87.5, 326.0], [87.6, 326.0], [87.7, 326.0], [87.8, 326.0], [87.9, 326.0], [88.0, 327.0], [88.1, 327.0], [88.2, 328.0], [88.3, 328.0], [88.4, 328.0], [88.5, 329.0], [88.6, 329.0], [88.7, 330.0], [88.8, 330.0], [88.9, 330.0], [89.0, 330.0], [89.1, 330.0], [89.2, 330.0], [89.3, 330.0], [89.4, 331.0], [89.5, 331.0], [89.6, 332.0], [89.7, 333.0], [89.8, 333.0], [89.9, 334.0], [90.0, 334.0], [90.1, 334.0], [90.2, 334.0], [90.3, 334.0], [90.4, 335.0], [90.5, 335.0], [90.6, 335.0], [90.7, 336.0], [90.8, 337.0], [90.9, 337.0], [91.0, 339.0], [91.1, 340.0], [91.2, 340.0], [91.3, 341.0], [91.4, 342.0], [91.5, 342.0], [91.6, 342.0], [91.7, 343.0], [91.8, 343.0], [91.9, 343.0], [92.0, 343.0], [92.1, 344.0], [92.2, 344.0], [92.3, 344.0], [92.4, 345.0], [92.5, 346.0], [92.6, 346.0], [92.7, 346.0], [92.8, 347.0], [92.9, 347.0], [93.0, 347.0], [93.1, 348.0], [93.2, 348.0], [93.3, 350.0], [93.4, 350.0], [93.5, 350.0], [93.6, 351.0], [93.7, 351.0], [93.8, 351.0], [93.9, 352.0], [94.0, 352.0], [94.1, 352.0], [94.2, 353.0], [94.3, 353.0], [94.4, 354.0], [94.5, 356.0], [94.6, 356.0], [94.7, 357.0], [94.8, 357.0], [94.9, 357.0], [95.0, 357.0], [95.1, 360.0], [95.2, 360.0], [95.3, 361.0], [95.4, 363.0], [95.5, 363.0], [95.6, 364.0], [95.7, 366.0], [95.8, 366.0], [95.9, 370.0], [96.0, 370.0], [96.1, 372.0], [96.2, 376.0], [96.3, 376.0], [96.4, 377.0], [96.5, 378.0], [96.6, 378.0], [96.7, 379.0], [96.8, 380.0], [96.9, 380.0], [97.0, 384.0], [97.1, 384.0], [97.2, 384.0], [97.3, 384.0], [97.4, 385.0], [97.5, 385.0], [97.6, 385.0], [97.7, 386.0], [97.8, 386.0], [97.9, 386.0], [98.0, 386.0], [98.1, 387.0], [98.2, 389.0], [98.3, 389.0], [98.4, 392.0], [98.5, 395.0], [98.6, 395.0], [98.7, 403.0], [98.8, 404.0], [98.9, 404.0], [99.0, 411.0], [99.1, 411.0], [99.2, 411.0], [99.3, 413.0], [99.4, 419.0], [99.5, 419.0], [99.6, 421.0], [99.7, 426.0], [99.8, 426.0], [99.9, 498.0], [100.0, 498.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 370.0, "series": [{"data": [[0.0, 31.0], [300.0, 175.0], [100.0, 65.0], [200.0, 370.0], [400.0, 9.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 650.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 650.0, "series": [{"data": [[0.0, 650.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 236.69846153846166, "minX": 1.68830076E12, "maxY": 236.69846153846166, "series": [{"data": [[1.68830076E12, 236.69846153846166]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.0, "maxY": 419.0, "series": [{"data": [[3.0, 277.5], [4.0, 324.0], [5.0, 305.0], [6.0, 321.0], [7.0, 305.0], [8.0, 320.0], [9.0, 270.0], [10.0, 240.0], [11.0, 213.0], [12.0, 233.0], [13.0, 316.0], [16.0, 276.6666666666667], [18.0, 286.0], [20.0, 233.0], [24.0, 292.5], [26.0, 305.0], [27.0, 266.0], [28.0, 274.5], [29.0, 251.0], [31.0, 311.0], [33.0, 293.0], [32.0, 251.5], [35.0, 269.5], [38.0, 203.5], [41.0, 289.0], [40.0, 273.0], [42.0, 291.0], [45.0, 247.0], [44.0, 260.5], [47.0, 316.5], [49.0, 310.5], [51.0, 294.0], [52.0, 314.0], [55.0, 292.6666666666667], [57.0, 27.0], [56.0, 252.0], [59.0, 316.6666666666667], [60.0, 180.0], [63.0, 281.0], [62.0, 336.0], [66.0, 278.5], [64.0, 229.0], [68.0, 146.5], [71.0, 280.3333333333333], [73.0, 137.16666666666666], [75.0, 223.5], [79.0, 51.333333333333336], [77.0, 51.0], [76.0, 287.0], [80.0, 142.8], [81.0, 190.8], [82.0, 61.0], [87.0, 213.0], [86.0, 237.0], [84.0, 248.66666666666666], [91.0, 106.5], [90.0, 141.6], [88.0, 229.0], [92.0, 72.66666666666667], [93.0, 127.5], [94.0, 269.0], [98.0, 241.0], [97.0, 302.0], [96.0, 283.0], [101.0, 285.0], [100.0, 231.0], [105.0, 342.0], [104.0, 300.3333333333333], [111.0, 287.0], [109.0, 252.5], [108.0, 302.5], [115.0, 260.5], [114.0, 300.0], [112.0, 212.0], [119.0, 308.0], [118.0, 260.0], [116.0, 138.0], [122.0, 290.0], [121.0, 256.5], [127.0, 283.0], [125.0, 251.0], [124.0, 258.5], [133.0, 300.0], [132.0, 204.0], [130.0, 278.0], [129.0, 216.0], [128.0, 287.0], [142.0, 279.0], [140.0, 302.0], [138.0, 250.0], [137.0, 305.0], [136.0, 281.3333333333333], [150.0, 202.5], [151.0, 295.0], [149.0, 289.0], [148.0, 237.0], [147.0, 290.0], [145.0, 254.25], [152.0, 106.66666666666667], [153.0, 186.0], [159.0, 113.5], [158.0, 188.75], [157.0, 299.0], [156.0, 259.0], [154.0, 254.0], [167.0, 271.0], [165.0, 262.0], [164.0, 209.0], [163.0, 256.0], [162.0, 233.0], [161.0, 278.0], [160.0, 265.5], [174.0, 299.0], [171.0, 330.0], [170.0, 223.5], [168.0, 260.5], [182.0, 273.0], [181.0, 288.0], [180.0, 293.0], [177.0, 255.5], [176.0, 295.0], [191.0, 283.0], [190.0, 307.0], [189.0, 314.0], [187.0, 282.0], [186.0, 289.5], [184.0, 283.0], [199.0, 285.0], [198.0, 259.6666666666667], [196.0, 283.0], [195.0, 307.0], [194.0, 289.5], [192.0, 293.0], [205.0, 236.66666666666666], [207.0, 299.5], [203.0, 281.5], [201.0, 316.0], [215.0, 285.0], [214.0, 262.0], [213.0, 322.5], [211.0, 285.0], [210.0, 283.5], [208.0, 282.0], [217.0, 184.0], [220.0, 194.33333333333334], [223.0, 323.0], [219.0, 283.0], [218.0, 290.0], [216.0, 281.0], [230.0, 304.0], [227.0, 273.0], [226.0, 297.0], [225.0, 270.0], [224.0, 289.3333333333333], [237.0, 167.0], [239.0, 329.0], [238.0, 320.0], [236.0, 290.75], [234.0, 264.0], [232.0, 272.0], [246.0, 302.0], [242.0, 283.0], [241.0, 289.0], [240.0, 317.0], [254.0, 317.5], [253.0, 299.6666666666667], [251.0, 351.0], [250.0, 266.0], [249.0, 278.5], [248.0, 419.0], [270.0, 185.4], [257.0, 269.5], [271.0, 235.85714285714283], [268.0, 225.6], [258.0, 308.0], [269.0, 293.0], [267.0, 166.66666666666666], [266.0, 219.5], [264.0, 195.0], [265.0, 279.3333333333333], [263.0, 254.33333333333331], [262.0, 188.5], [261.0, 315.0], [260.0, 339.0], [275.0, 284.0], [274.0, 189.0], [273.0, 153.66666666666666], [272.0, 262.0], [279.0, 304.5], [277.0, 279.0], [276.0, 293.0], [280.0, 184.0], [287.0, 376.0], [285.0, 268.0], [284.0, 274.0], [281.0, 277.0], [291.0, 264.0], [301.0, 342.4], [303.0, 242.0], [300.0, 302.0], [299.0, 258.0], [296.0, 311.0], [295.0, 278.0], [293.0, 284.0], [289.0, 250.0], [288.0, 316.75], [317.0, 290.0], [307.0, 227.33333333333331], [305.0, 286.3333333333333], [319.0, 288.0], [316.0, 262.0], [315.0, 306.5], [313.0, 315.0], [312.0, 343.0], [310.0, 282.3333333333333], [304.0, 379.3333333333333], [335.0, 287.1666666666667], [334.0, 247.8], [331.0, 210.0], [332.0, 245.16666666666666], [329.0, 235.33333333333331], [330.0, 244.0], [322.0, 237.5], [321.0, 222.0], [320.0, 238.0], [323.0, 282.0], [327.0, 270.3333333333333], [326.0, 265.3333333333333], [325.0, 204.25], [324.0, 276.6666666666667], [333.0, 246.0], [328.0, 233.0], [348.0, 274.0], [351.0, 253.66666666666666], [346.0, 258.0], [345.0, 276.75], [344.0, 216.0], [343.0, 219.0], [342.0, 278.8888888888889], [337.0, 248.625], [336.0, 312.0], [339.0, 413.0], [338.0, 310.0], [350.0, 264.0], [349.0, 322.8], [354.0, 268.7142857142857], [358.0, 229.71428571428572], [357.0, 312.0], [356.0, 318.0], [360.0, 292.0], [367.0, 289.0], [366.0, 292.0], [361.0, 256.576923076923], [362.0, 292.5], [365.0, 326.0], [364.0, 341.6666666666667], [355.0, 318.0], [363.0, 299.0], [359.0, 315.75], [353.0, 284.0], [352.0, 333.3333333333333], [371.0, 316.5], [382.0, 315.3333333333333], [380.0, 298.0], [378.0, 303.6666666666667], [376.0, 282.0], [377.0, 269.0], [375.0, 275.75], [374.0, 282.5], [372.0, 304.5], [369.0, 343.0], [370.0, 239.0], [368.0, 319.5], [398.0, 274.5], [389.0, 276.6666666666667], [399.0, 313.0], [397.0, 259.0], [386.0, 325.0], [384.0, 297.0], [395.0, 279.5], [393.0, 325.5], [391.0, 298.0], [390.0, 357.0], [388.0, 299.0], [413.0, 334.0], [414.0, 324.5], [412.0, 347.0], [411.0, 298.0], [409.0, 290.0], [408.0, 304.5], [406.0, 263.0], [405.0, 302.5], [403.0, 312.0], [402.0, 322.0], [401.0, 322.0], [1.0, 310.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[236.69846153846166, 261.1446153846155]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 414.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1971.6666666666667, "minX": 1.68830076E12, "maxY": 4333.333333333333, "series": [{"data": [[1.68830076E12, 4333.333333333333]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830076E12, 1971.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 261.1446153846155, "minX": 1.68830076E12, "maxY": 261.1446153846155, "series": [{"data": [[1.68830076E12, 261.1446153846155]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 261.14307692307636, "minX": 1.68830076E12, "maxY": 261.14307692307636, "series": [{"data": [[1.68830076E12, 261.14307692307636]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.2199999999999993, "minX": 1.68830076E12, "maxY": 1.2199999999999993, "series": [{"data": [[1.68830076E12, 1.2199999999999993]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.68830076E12, "maxY": 498.0, "series": [{"data": [[1.68830076E12, 498.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830076E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830076E12, 334.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830076E12, 411.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830076E12, 272.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830076E12, 358.3499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 232.0, "minX": 259.0, "maxY": 287.0, "series": [{"data": [[259.0, 232.0], [391.0, 287.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 391.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 232.0, "minX": 259.0, "maxY": 287.0, "series": [{"data": [[259.0, 232.0], [391.0, 287.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 391.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.833333333333334, "minX": 1.68830076E12, "maxY": 10.833333333333334, "series": [{"data": [[1.68830076E12, 10.833333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 10.833333333333334, "minX": 1.68830076E12, "maxY": 10.833333333333334, "series": [{"data": [[1.68830076E12, 10.833333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 10.833333333333334, "minX": 1.68830076E12, "maxY": 10.833333333333334, "series": [{"data": [[1.68830076E12, 10.833333333333334]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 10.833333333333334, "minX": 1.68830076E12, "maxY": 10.833333333333334, "series": [{"data": [[1.68830076E12, 10.833333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Total Transactions Per Second"}},
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

