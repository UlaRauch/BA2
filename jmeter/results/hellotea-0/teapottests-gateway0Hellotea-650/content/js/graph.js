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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 517.0, "series": [{"data": [[0.0, 28.0], [0.1, 28.0], [0.2, 29.0], [0.3, 29.0], [0.4, 29.0], [0.5, 30.0], [0.6, 30.0], [0.7, 30.0], [0.8, 33.0], [0.9, 33.0], [1.0, 34.0], [1.1, 42.0], [1.2, 42.0], [1.3, 43.0], [1.4, 44.0], [1.5, 44.0], [1.6, 44.0], [1.7, 44.0], [1.8, 44.0], [1.9, 45.0], [2.0, 45.0], [2.1, 45.0], [2.2, 46.0], [2.3, 46.0], [2.4, 46.0], [2.5, 47.0], [2.6, 47.0], [2.7, 47.0], [2.8, 47.0], [2.9, 47.0], [3.0, 48.0], [3.1, 49.0], [3.2, 49.0], [3.3, 50.0], [3.4, 50.0], [3.5, 50.0], [3.6, 52.0], [3.7, 52.0], [3.8, 52.0], [3.9, 53.0], [4.0, 54.0], [4.1, 54.0], [4.2, 54.0], [4.3, 54.0], [4.4, 55.0], [4.5, 56.0], [4.6, 56.0], [4.7, 56.0], [4.8, 57.0], [4.9, 57.0], [5.0, 57.0], [5.1, 57.0], [5.2, 57.0], [5.3, 58.0], [5.4, 58.0], [5.5, 58.0], [5.6, 59.0], [5.7, 59.0], [5.8, 59.0], [5.9, 59.0], [6.0, 60.0], [6.1, 60.0], [6.2, 60.0], [6.3, 60.0], [6.4, 60.0], [6.5, 60.0], [6.6, 60.0], [6.7, 61.0], [6.8, 61.0], [6.9, 61.0], [7.0, 62.0], [7.1, 63.0], [7.2, 63.0], [7.3, 63.0], [7.4, 64.0], [7.5, 64.0], [7.6, 64.0], [7.7, 64.0], [7.8, 64.0], [7.9, 64.0], [8.0, 64.0], [8.1, 64.0], [8.2, 65.0], [8.3, 65.0], [8.4, 66.0], [8.5, 66.0], [8.6, 66.0], [8.7, 66.0], [8.8, 66.0], [8.9, 66.0], [9.0, 66.0], [9.1, 66.0], [9.2, 66.0], [9.3, 66.0], [9.4, 69.0], [9.5, 69.0], [9.6, 70.0], [9.7, 70.0], [9.8, 70.0], [9.9, 72.0], [10.0, 73.0], [10.1, 73.0], [10.2, 74.0], [10.3, 74.0], [10.4, 74.0], [10.5, 74.0], [10.6, 74.0], [10.7, 75.0], [10.8, 75.0], [10.9, 75.0], [11.0, 75.0], [11.1, 75.0], [11.2, 75.0], [11.3, 75.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 76.0], [12.0, 77.0], [12.1, 77.0], [12.2, 77.0], [12.3, 77.0], [12.4, 77.0], [12.5, 77.0], [12.6, 77.0], [12.7, 78.0], [12.8, 78.0], [12.9, 78.0], [13.0, 78.0], [13.1, 78.0], [13.2, 78.0], [13.3, 78.0], [13.4, 79.0], [13.5, 79.0], [13.6, 79.0], [13.7, 79.0], [13.8, 79.0], [13.9, 79.0], [14.0, 79.0], [14.1, 79.0], [14.2, 79.0], [14.3, 79.0], [14.4, 79.0], [14.5, 79.0], [14.6, 79.0], [14.7, 80.0], [14.8, 80.0], [14.9, 80.0], [15.0, 80.0], [15.1, 80.0], [15.2, 80.0], [15.3, 80.0], [15.4, 80.0], [15.5, 80.0], [15.6, 80.0], [15.7, 80.0], [15.8, 80.0], [15.9, 80.0], [16.0, 81.0], [16.1, 81.0], [16.2, 81.0], [16.3, 81.0], [16.4, 81.0], [16.5, 81.0], [16.6, 81.0], [16.7, 81.0], [16.8, 81.0], [16.9, 81.0], [17.0, 81.0], [17.1, 81.0], [17.2, 81.0], [17.3, 81.0], [17.4, 81.0], [17.5, 81.0], [17.6, 82.0], [17.7, 82.0], [17.8, 82.0], [17.9, 82.0], [18.0, 82.0], [18.1, 82.0], [18.2, 82.0], [18.3, 82.0], [18.4, 82.0], [18.5, 82.0], [18.6, 82.0], [18.7, 82.0], [18.8, 82.0], [18.9, 82.0], [19.0, 82.0], [19.1, 82.0], [19.2, 82.0], [19.3, 83.0], [19.4, 84.0], [19.5, 84.0], [19.6, 84.0], [19.7, 84.0], [19.8, 84.0], [19.9, 84.0], [20.0, 84.0], [20.1, 84.0], [20.2, 84.0], [20.3, 84.0], [20.4, 85.0], [20.5, 85.0], [20.6, 85.0], [20.7, 85.0], [20.8, 86.0], [20.9, 86.0], [21.0, 88.0], [21.1, 89.0], [21.2, 89.0], [21.3, 89.0], [21.4, 90.0], [21.5, 90.0], [21.6, 90.0], [21.7, 90.0], [21.8, 90.0], [21.9, 90.0], [22.0, 91.0], [22.1, 91.0], [22.2, 93.0], [22.3, 93.0], [22.4, 94.0], [22.5, 94.0], [22.6, 94.0], [22.7, 94.0], [22.8, 96.0], [22.9, 96.0], [23.0, 98.0], [23.1, 99.0], [23.2, 99.0], [23.3, 99.0], [23.4, 99.0], [23.5, 99.0], [23.6, 99.0], [23.7, 99.0], [23.8, 99.0], [23.9, 99.0], [24.0, 100.0], [24.1, 100.0], [24.2, 103.0], [24.3, 103.0], [24.4, 103.0], [24.5, 104.0], [24.6, 104.0], [24.7, 105.0], [24.8, 105.0], [24.9, 105.0], [25.0, 106.0], [25.1, 106.0], [25.2, 106.0], [25.3, 106.0], [25.4, 107.0], [25.5, 107.0], [25.6, 107.0], [25.7, 107.0], [25.8, 107.0], [25.9, 107.0], [26.0, 107.0], [26.1, 107.0], [26.2, 108.0], [26.3, 108.0], [26.4, 109.0], [26.5, 111.0], [26.6, 111.0], [26.7, 111.0], [26.8, 113.0], [26.9, 113.0], [27.0, 113.0], [27.1, 113.0], [27.2, 113.0], [27.3, 114.0], [27.4, 114.0], [27.5, 114.0], [27.6, 116.0], [27.7, 116.0], [27.8, 116.0], [27.9, 116.0], [28.0, 117.0], [28.1, 117.0], [28.2, 117.0], [28.3, 117.0], [28.4, 119.0], [28.5, 119.0], [28.6, 119.0], [28.7, 119.0], [28.8, 119.0], [28.9, 119.0], [29.0, 119.0], [29.1, 120.0], [29.2, 120.0], [29.3, 121.0], [29.4, 122.0], [29.5, 122.0], [29.6, 122.0], [29.7, 123.0], [29.8, 123.0], [29.9, 123.0], [30.0, 124.0], [30.1, 124.0], [30.2, 128.0], [30.3, 128.0], [30.4, 130.0], [30.5, 134.0], [30.6, 134.0], [30.7, 134.0], [30.8, 137.0], [30.9, 137.0], [31.0, 137.0], [31.1, 138.0], [31.2, 138.0], [31.3, 138.0], [31.4, 139.0], [31.5, 139.0], [31.6, 139.0], [31.7, 139.0], [31.8, 139.0], [31.9, 140.0], [32.0, 141.0], [32.1, 141.0], [32.2, 141.0], [32.3, 141.0], [32.4, 142.0], [32.5, 143.0], [32.6, 143.0], [32.7, 143.0], [32.8, 144.0], [32.9, 144.0], [33.0, 144.0], [33.1, 145.0], [33.2, 145.0], [33.3, 145.0], [33.4, 146.0], [33.5, 146.0], [33.6, 147.0], [33.7, 147.0], [33.8, 147.0], [33.9, 147.0], [34.0, 147.0], [34.1, 147.0], [34.2, 149.0], [34.3, 149.0], [34.4, 149.0], [34.5, 149.0], [34.6, 149.0], [34.7, 149.0], [34.8, 149.0], [34.9, 149.0], [35.0, 149.0], [35.1, 150.0], [35.2, 150.0], [35.3, 150.0], [35.4, 151.0], [35.5, 151.0], [35.6, 152.0], [35.7, 152.0], [35.8, 152.0], [35.9, 152.0], [36.0, 152.0], [36.1, 152.0], [36.2, 152.0], [36.3, 152.0], [36.4, 153.0], [36.5, 153.0], [36.6, 153.0], [36.7, 153.0], [36.8, 154.0], [36.9, 154.0], [37.0, 154.0], [37.1, 155.0], [37.2, 155.0], [37.3, 157.0], [37.4, 157.0], [37.5, 157.0], [37.6, 157.0], [37.7, 157.0], [37.8, 157.0], [37.9, 158.0], [38.0, 158.0], [38.1, 158.0], [38.2, 158.0], [38.3, 158.0], [38.4, 158.0], [38.5, 158.0], [38.6, 158.0], [38.7, 159.0], [38.8, 160.0], [38.9, 160.0], [39.0, 161.0], [39.1, 161.0], [39.2, 161.0], [39.3, 162.0], [39.4, 163.0], [39.5, 163.0], [39.6, 164.0], [39.7, 164.0], [39.8, 164.0], [39.9, 164.0], [40.0, 165.0], [40.1, 165.0], [40.2, 166.0], [40.3, 166.0], [40.4, 166.0], [40.5, 166.0], [40.6, 166.0], [40.7, 168.0], [40.8, 168.0], [40.9, 168.0], [41.0, 170.0], [41.1, 170.0], [41.2, 170.0], [41.3, 170.0], [41.4, 170.0], [41.5, 170.0], [41.6, 171.0], [41.7, 171.0], [41.8, 171.0], [41.9, 171.0], [42.0, 171.0], [42.1, 171.0], [42.2, 171.0], [42.3, 171.0], [42.4, 172.0], [42.5, 172.0], [42.6, 172.0], [42.7, 173.0], [42.8, 173.0], [42.9, 173.0], [43.0, 174.0], [43.1, 174.0], [43.2, 174.0], [43.3, 174.0], [43.4, 175.0], [43.5, 175.0], [43.6, 175.0], [43.7, 176.0], [43.8, 176.0], [43.9, 176.0], [44.0, 176.0], [44.1, 176.0], [44.2, 176.0], [44.3, 176.0], [44.4, 176.0], [44.5, 177.0], [44.6, 177.0], [44.7, 177.0], [44.8, 178.0], [44.9, 178.0], [45.0, 178.0], [45.1, 178.0], [45.2, 178.0], [45.3, 179.0], [45.4, 179.0], [45.5, 179.0], [45.6, 180.0], [45.7, 180.0], [45.8, 180.0], [45.9, 180.0], [46.0, 180.0], [46.1, 180.0], [46.2, 181.0], [46.3, 181.0], [46.4, 181.0], [46.5, 181.0], [46.6, 181.0], [46.7, 182.0], [46.8, 184.0], [46.9, 184.0], [47.0, 185.0], [47.1, 185.0], [47.2, 185.0], [47.3, 185.0], [47.4, 186.0], [47.5, 186.0], [47.6, 188.0], [47.7, 189.0], [47.8, 189.0], [47.9, 190.0], [48.0, 190.0], [48.1, 190.0], [48.2, 191.0], [48.3, 191.0], [48.4, 191.0], [48.5, 192.0], [48.6, 192.0], [48.7, 194.0], [48.8, 195.0], [48.9, 195.0], [49.0, 196.0], [49.1, 197.0], [49.2, 197.0], [49.3, 197.0], [49.4, 199.0], [49.5, 199.0], [49.6, 199.0], [49.7, 200.0], [49.8, 200.0], [49.9, 200.0], [50.0, 200.0], [50.1, 200.0], [50.2, 201.0], [50.3, 201.0], [50.4, 202.0], [50.5, 203.0], [50.6, 203.0], [50.7, 205.0], [50.8, 205.0], [50.9, 205.0], [51.0, 205.0], [51.1, 205.0], [51.2, 205.0], [51.3, 207.0], [51.4, 207.0], [51.5, 207.0], [51.6, 207.0], [51.7, 207.0], [51.8, 207.0], [51.9, 208.0], [52.0, 209.0], [52.1, 209.0], [52.2, 209.0], [52.3, 209.0], [52.4, 210.0], [52.5, 210.0], [52.6, 210.0], [52.7, 212.0], [52.8, 213.0], [52.9, 213.0], [53.0, 214.0], [53.1, 214.0], [53.2, 214.0], [53.3, 214.0], [53.4, 215.0], [53.5, 215.0], [53.6, 215.0], [53.7, 215.0], [53.8, 215.0], [53.9, 216.0], [54.0, 217.0], [54.1, 217.0], [54.2, 218.0], [54.3, 218.0], [54.4, 219.0], [54.5, 219.0], [54.6, 219.0], [54.7, 219.0], [54.8, 220.0], [54.9, 220.0], [55.0, 221.0], [55.1, 224.0], [55.2, 224.0], [55.3, 224.0], [55.4, 225.0], [55.5, 225.0], [55.6, 225.0], [55.7, 227.0], [55.8, 227.0], [55.9, 227.0], [56.0, 229.0], [56.1, 229.0], [56.2, 229.0], [56.3, 229.0], [56.4, 230.0], [56.5, 230.0], [56.6, 230.0], [56.7, 230.0], [56.8, 230.0], [56.9, 230.0], [57.0, 232.0], [57.1, 232.0], [57.2, 232.0], [57.3, 234.0], [57.4, 234.0], [57.5, 234.0], [57.6, 236.0], [57.7, 237.0], [57.8, 237.0], [57.9, 238.0], [58.0, 238.0], [58.1, 238.0], [58.2, 240.0], [58.3, 240.0], [58.4, 241.0], [58.5, 241.0], [58.6, 241.0], [58.7, 243.0], [58.8, 243.0], [58.9, 243.0], [59.0, 246.0], [59.1, 247.0], [59.2, 247.0], [59.3, 247.0], [59.4, 248.0], [59.5, 248.0], [59.6, 249.0], [59.7, 249.0], [59.8, 249.0], [59.9, 249.0], [60.0, 251.0], [60.1, 251.0], [60.2, 252.0], [60.3, 252.0], [60.4, 252.0], [60.5, 252.0], [60.6, 252.0], [60.7, 254.0], [60.8, 254.0], [60.9, 254.0], [61.0, 257.0], [61.1, 258.0], [61.2, 258.0], [61.3, 258.0], [61.4, 260.0], [61.5, 260.0], [61.6, 263.0], [61.7, 264.0], [61.8, 264.0], [61.9, 265.0], [62.0, 265.0], [62.1, 265.0], [62.2, 265.0], [62.3, 265.0], [62.4, 266.0], [62.5, 266.0], [62.6, 266.0], [62.7, 267.0], [62.8, 267.0], [62.9, 267.0], [63.0, 268.0], [63.1, 268.0], [63.2, 268.0], [63.3, 268.0], [63.4, 269.0], [63.5, 269.0], [63.6, 269.0], [63.7, 270.0], [63.8, 270.0], [63.9, 270.0], [64.0, 271.0], [64.1, 271.0], [64.2, 271.0], [64.3, 271.0], [64.4, 272.0], [64.5, 272.0], [64.6, 272.0], [64.7, 273.0], [64.8, 275.0], [64.9, 275.0], [65.0, 275.0], [65.1, 276.0], [65.2, 276.0], [65.3, 278.0], [65.4, 279.0], [65.5, 279.0], [65.6, 280.0], [65.7, 280.0], [65.8, 280.0], [65.9, 280.0], [66.0, 281.0], [66.1, 281.0], [66.2, 281.0], [66.3, 281.0], [66.4, 281.0], [66.5, 282.0], [66.6, 282.0], [66.7, 282.0], [66.8, 282.0], [66.9, 282.0], [67.0, 284.0], [67.1, 285.0], [67.2, 285.0], [67.3, 285.0], [67.4, 285.0], [67.5, 285.0], [67.6, 290.0], [67.7, 290.0], [67.8, 290.0], [67.9, 290.0], [68.0, 292.0], [68.1, 292.0], [68.2, 293.0], [68.3, 293.0], [68.4, 294.0], [68.5, 294.0], [68.6, 294.0], [68.7, 294.0], [68.8, 294.0], [68.9, 294.0], [69.0, 294.0], [69.1, 295.0], [69.2, 295.0], [69.3, 295.0], [69.4, 295.0], [69.5, 295.0], [69.6, 296.0], [69.7, 297.0], [69.8, 297.0], [69.9, 297.0], [70.0, 299.0], [70.1, 299.0], [70.2, 300.0], [70.3, 300.0], [70.4, 300.0], [70.5, 300.0], [70.6, 300.0], [70.7, 301.0], [70.8, 302.0], [70.9, 302.0], [71.0, 307.0], [71.1, 307.0], [71.2, 307.0], [71.3, 309.0], [71.4, 310.0], [71.5, 310.0], [71.6, 310.0], [71.7, 314.0], [71.8, 314.0], [71.9, 315.0], [72.0, 316.0], [72.1, 316.0], [72.2, 317.0], [72.3, 317.0], [72.4, 319.0], [72.5, 323.0], [72.6, 323.0], [72.7, 323.0], [72.8, 325.0], [72.9, 325.0], [73.0, 332.0], [73.1, 332.0], [73.2, 332.0], [73.3, 337.0], [73.4, 339.0], [73.5, 339.0], [73.6, 341.0], [73.7, 344.0], [73.8, 344.0], [73.9, 388.0], [74.0, 388.0], [74.1, 388.0], [74.2, 388.0], [74.3, 388.0], [74.4, 410.0], [74.5, 412.0], [74.6, 412.0], [74.7, 412.0], [74.8, 413.0], [74.9, 413.0], [75.0, 413.0], [75.1, 415.0], [75.2, 415.0], [75.3, 416.0], [75.4, 416.0], [75.5, 416.0], [75.6, 416.0], [75.7, 417.0], [75.8, 417.0], [75.9, 418.0], [76.0, 418.0], [76.1, 419.0], [76.2, 419.0], [76.3, 419.0], [76.4, 424.0], [76.5, 424.0], [76.6, 424.0], [76.7, 425.0], [76.8, 426.0], [76.9, 426.0], [77.0, 426.0], [77.1, 427.0], [77.2, 427.0], [77.3, 427.0], [77.4, 427.0], [77.5, 427.0], [77.6, 428.0], [77.7, 428.0], [77.8, 428.0], [77.9, 429.0], [78.0, 429.0], [78.1, 429.0], [78.2, 429.0], [78.3, 429.0], [78.4, 430.0], [78.5, 430.0], [78.6, 430.0], [78.7, 441.0], [78.8, 443.0], [78.9, 443.0], [79.0, 443.0], [79.1, 444.0], [79.2, 444.0], [79.3, 444.0], [79.4, 444.0], [79.5, 444.0], [79.6, 447.0], [79.7, 448.0], [79.8, 448.0], [79.9, 448.0], [80.0, 448.0], [80.1, 449.0], [80.2, 449.0], [80.3, 449.0], [80.4, 450.0], [80.5, 450.0], [80.6, 450.0], [80.7, 450.0], [80.8, 450.0], [80.9, 450.0], [81.0, 451.0], [81.1, 452.0], [81.2, 452.0], [81.3, 452.0], [81.4, 453.0], [81.5, 453.0], [81.6, 453.0], [81.7, 453.0], [81.8, 453.0], [81.9, 454.0], [82.0, 454.0], [82.1, 454.0], [82.2, 454.0], [82.3, 454.0], [82.4, 454.0], [82.5, 454.0], [82.6, 454.0], [82.7, 455.0], [82.8, 455.0], [82.9, 455.0], [83.0, 455.0], [83.1, 456.0], [83.2, 456.0], [83.3, 456.0], [83.4, 456.0], [83.5, 456.0], [83.6, 456.0], [83.7, 458.0], [83.8, 458.0], [83.9, 458.0], [84.0, 458.0], [84.1, 458.0], [84.2, 458.0], [84.3, 458.0], [84.4, 459.0], [84.5, 459.0], [84.6, 459.0], [84.7, 460.0], [84.8, 460.0], [84.9, 460.0], [85.0, 460.0], [85.1, 461.0], [85.2, 461.0], [85.3, 461.0], [85.4, 462.0], [85.5, 462.0], [85.6, 462.0], [85.7, 462.0], [85.8, 462.0], [85.9, 462.0], [86.0, 462.0], [86.1, 462.0], [86.2, 463.0], [86.3, 463.0], [86.4, 463.0], [86.5, 463.0], [86.6, 463.0], [86.7, 463.0], [86.8, 463.0], [86.9, 463.0], [87.0, 463.0], [87.1, 464.0], [87.2, 464.0], [87.3, 464.0], [87.4, 464.0], [87.5, 464.0], [87.6, 464.0], [87.7, 464.0], [87.8, 464.0], [87.9, 465.0], [88.0, 465.0], [88.1, 465.0], [88.2, 466.0], [88.3, 466.0], [88.4, 467.0], [88.5, 467.0], [88.6, 467.0], [88.7, 467.0], [88.8, 467.0], [88.9, 467.0], [89.0, 468.0], [89.1, 468.0], [89.2, 468.0], [89.3, 468.0], [89.4, 468.0], [89.5, 468.0], [89.6, 469.0], [89.7, 469.0], [89.8, 469.0], [89.9, 469.0], [90.0, 469.0], [90.1, 470.0], [90.2, 470.0], [90.3, 470.0], [90.4, 470.0], [90.5, 470.0], [90.6, 470.0], [90.7, 471.0], [90.8, 472.0], [90.9, 472.0], [91.0, 472.0], [91.1, 473.0], [91.2, 473.0], [91.3, 473.0], [91.4, 473.0], [91.5, 473.0], [91.6, 473.0], [91.7, 474.0], [91.8, 474.0], [91.9, 475.0], [92.0, 475.0], [92.1, 475.0], [92.2, 476.0], [92.3, 476.0], [92.4, 477.0], [92.5, 477.0], [92.6, 477.0], [92.7, 478.0], [92.8, 478.0], [92.9, 478.0], [93.0, 478.0], [93.1, 478.0], [93.2, 478.0], [93.3, 478.0], [93.4, 479.0], [93.5, 479.0], [93.6, 479.0], [93.7, 479.0], [93.8, 479.0], [93.9, 479.0], [94.0, 479.0], [94.1, 480.0], [94.2, 480.0], [94.3, 480.0], [94.4, 481.0], [94.5, 481.0], [94.6, 481.0], [94.7, 481.0], [94.8, 482.0], [94.9, 482.0], [95.0, 482.0], [95.1, 483.0], [95.2, 483.0], [95.3, 483.0], [95.4, 483.0], [95.5, 483.0], [95.6, 483.0], [95.7, 484.0], [95.8, 484.0], [95.9, 486.0], [96.0, 486.0], [96.1, 486.0], [96.2, 486.0], [96.3, 486.0], [96.4, 487.0], [96.5, 487.0], [96.6, 487.0], [96.7, 490.0], [96.8, 492.0], [96.9, 492.0], [97.0, 493.0], [97.1, 494.0], [97.2, 494.0], [97.3, 495.0], [97.4, 497.0], [97.5, 497.0], [97.6, 498.0], [97.7, 498.0], [97.8, 498.0], [97.9, 498.0], [98.0, 498.0], [98.1, 499.0], [98.2, 499.0], [98.3, 499.0], [98.4, 499.0], [98.5, 499.0], [98.6, 499.0], [98.7, 502.0], [98.8, 506.0], [98.9, 506.0], [99.0, 509.0], [99.1, 510.0], [99.2, 510.0], [99.3, 510.0], [99.4, 510.0], [99.5, 510.0], [99.6, 516.0], [99.7, 516.0], [99.8, 516.0], [99.9, 517.0], [100.0, 517.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "maxY": 167.0, "series": [{"data": [[0.0, 156.0], [300.0, 27.0], [100.0, 167.0], [200.0, 133.0], [400.0, 158.0], [500.0, 9.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 500.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 641.0, "series": [{"data": [[0.0, 641.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 168.6029411764706, "minX": 1.68831138E12, "maxY": 182.90740740740733, "series": [{"data": [[1.68831144E12, 182.90740740740733], [1.68831138E12, 168.6029411764706]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831144E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.0, "maxY": 516.0, "series": [{"data": [[5.0, 264.75], [7.0, 202.0], [9.0, 278.3333333333333], [10.0, 170.0], [12.0, 166.0], [15.0, 182.0], [16.0, 200.0], [18.0, 196.0], [20.0, 178.0], [22.0, 189.0], [23.0, 225.0], [25.0, 155.0], [28.0, 207.0], [30.0, 266.75], [33.0, 346.0], [35.0, 309.0], [34.0, 516.0], [37.0, 283.3333333333333], [38.0, 158.0], [41.0, 510.0], [40.0, 189.0], [43.0, 154.0], [45.0, 180.5], [44.0, 166.0], [49.0, 330.0], [48.0, 319.0], [50.0, 185.0], [52.0, 165.66666666666666], [55.0, 70.0], [54.0, 34.0], [57.0, 29.0], [56.0, 175.5], [58.0, 194.0], [61.0, 164.0], [60.0, 185.0], [63.0, 510.0], [62.0, 315.0], [66.0, 121.66666666666667], [64.0, 158.0], [70.0, 107.28571428571428], [71.0, 56.63636363636364], [69.0, 141.2], [72.0, 98.0], [73.0, 72.2], [75.0, 122.75], [76.0, 79.3], [77.0, 65.2], [78.0, 73.5], [79.0, 152.42857142857144], [83.0, 179.8], [81.0, 345.5], [87.0, 80.33333333333333], [85.0, 80.4], [84.0, 79.66666666666667], [86.0, 133.41666666666669], [89.0, 348.0], [90.0, 82.5], [88.0, 289.5], [91.0, 216.66666666666666], [95.0, 81.5], [93.0, 80.25], [92.0, 256.0], [96.0, 94.83333333333333], [98.0, 309.0], [97.0, 123.33333333333334], [99.0, 79.0], [103.0, 297.5], [102.0, 147.0], [104.0, 497.0], [110.0, 295.0], [109.0, 493.0], [108.0, 177.0], [112.0, 81.5], [113.0, 477.0], [117.0, 322.6666666666667], [122.0, 185.0], [121.0, 143.0], [120.0, 166.33333333333334], [126.0, 282.0], [124.0, 90.0], [127.0, 482.0], [132.0, 94.0], [134.0, 284.5], [135.0, 381.5], [133.0, 479.0], [131.0, 478.0], [130.0, 478.6666666666667], [128.0, 466.0], [139.0, 249.25], [140.0, 91.5], [138.0, 91.0], [141.0, 350.0], [142.0, 486.0], [137.0, 477.0], [151.0, 307.0], [148.0, 314.0], [147.0, 316.0], [146.0, 302.0], [145.0, 317.0], [144.0, 320.0], [158.0, 483.0], [157.0, 472.0], [155.0, 487.0], [154.0, 429.0], [152.0, 340.5], [162.0, 347.6666666666667], [164.0, 99.0], [167.0, 98.5], [166.0, 295.0], [160.0, 470.3333333333333], [171.0, 106.5], [170.0, 106.0], [169.0, 99.0], [168.0, 366.0], [173.0, 463.0], [172.0, 475.75], [183.0, 234.0], [181.0, 472.5], [180.0, 470.0], [179.0, 471.0], [176.0, 476.0], [191.0, 163.25], [189.0, 99.33333333333333], [187.0, 173.5], [184.0, 114.0], [190.0, 269.0], [188.0, 294.0], [185.0, 308.5], [198.0, 198.0], [199.0, 113.66666666666667], [197.0, 459.25], [194.0, 468.0], [192.0, 272.5], [200.0, 126.18181818181819], [206.0, 464.0], [205.0, 371.0], [202.0, 282.0], [201.0, 290.0], [215.0, 268.0], [214.0, 462.0], [213.0, 460.0], [212.0, 451.0], [211.0, 456.0], [210.0, 449.6666666666667], [222.0, 294.0], [221.0, 278.0], [220.0, 297.0], [218.0, 278.6666666666667], [230.0, 453.25], [228.0, 453.5], [227.0, 453.0], [225.0, 456.0], [238.0, 472.0], [237.0, 449.0], [236.0, 464.0], [235.0, 281.0], [233.0, 285.0], [232.0, 288.0], [246.0, 357.83333333333337], [245.0, 306.5], [244.0, 155.0], [247.0, 180.66666666666669], [241.0, 462.0], [240.0, 465.0], [255.0, 266.8], [254.0, 137.0], [252.0, 133.875], [253.0, 204.58823529411765], [251.0, 94.0], [248.0, 309.5], [249.0, 455.0], [270.0, 461.0], [265.0, 184.85714285714286], [258.0, 160.6], [260.0, 148.0], [264.0, 181.0], [266.0, 263.0], [267.0, 456.0], [261.0, 330.0], [263.0, 451.0], [257.0, 452.5], [259.0, 304.0], [268.0, 441.0], [287.0, 337.5], [284.0, 145.66666666666666], [275.0, 271.0], [274.0, 459.5], [272.0, 461.5], [285.0, 185.2], [286.0, 337.5], [283.0, 267.0], [282.0, 270.0], [281.0, 264.0], [280.0, 265.0], [279.0, 456.0], [278.0, 273.6666666666667], [301.0, 374.6666666666667], [288.0, 242.0], [303.0, 280.3636363636364], [302.0, 227.0], [300.0, 319.3333333333333], [291.0, 221.57142857142856], [289.0, 228.5], [290.0, 258.0], [299.0, 271.0], [298.0, 244.5], [297.0, 265.0], [296.0, 232.75], [295.0, 260.0], [294.0, 299.2], [293.0, 266.75], [292.0, 272.5], [305.0, 429.0], [308.0, 250.5], [309.0, 146.2], [319.0, 248.0], [316.0, 246.0], [315.0, 232.0], [313.0, 246.33333333333334], [311.0, 234.0], [304.0, 428.0], [326.0, 411.0], [325.0, 414.0], [323.0, 417.5], [322.0, 294.5], [321.0, 416.0], [1.0, 184.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[176.92153846153838, 239.4707692307694]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 326.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 435.2, "minX": 1.68831138E12, "maxY": 806.4, "series": [{"data": [[1.68831144E12, 604.8], [1.68831138E12, 435.2]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68831144E12, 806.4], [1.68831138E12, 580.2666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831144E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 106.03676470588236, "minX": 1.68831138E12, "maxY": 335.4867724867727, "series": [{"data": [[1.68831144E12, 335.4867724867727], [1.68831138E12, 106.03676470588236]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831144E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 106.0294117647059, "minX": 1.68831138E12, "maxY": 335.4814814814816, "series": [{"data": [[1.68831144E12, 335.4814814814816], [1.68831138E12, 106.0294117647059]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831144E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 2.3382352941176467, "minX": 1.68831138E12, "maxY": 7.661375661375663, "series": [{"data": [[1.68831144E12, 7.661375661375663], [1.68831138E12, 2.3382352941176467]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831144E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.68831138E12, "maxY": 517.0, "series": [{"data": [[1.68831144E12, 517.0], [1.68831138E12, 271.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68831144E12, 130.0], [1.68831138E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68831144E12, 480.1], [1.68831138E12, 174.70000000000002]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68831144E12, 511.2599999999999], [1.68831138E12, 268.27]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68831144E12, 304.5], [1.68831138E12, 87.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68831144E12, 494.05], [1.68831138E12, 201.69999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831144E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 87.0, "minX": 272.0, "maxY": 304.5, "series": [{"data": [[272.0, 87.0], [378.0, 304.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 378.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 87.0, "minX": 272.0, "maxY": 304.5, "series": [{"data": [[272.0, 87.0], [378.0, 304.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 378.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 1.3833333333333333, "minX": 1.68831138E12, "maxY": 9.45, "series": [{"data": [[1.68831144E12, 1.3833333333333333], [1.68831138E12, 9.45]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831144E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.533333333333333, "minX": 1.68831138E12, "maxY": 6.3, "series": [{"data": [[1.68831144E12, 6.3], [1.68831138E12, 4.533333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831144E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.533333333333333, "minX": 1.68831138E12, "maxY": 6.3, "series": [{"data": [[1.68831144E12, 6.3], [1.68831138E12, 4.533333333333333]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831144E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.533333333333333, "minX": 1.68831138E12, "maxY": 6.3, "series": [{"data": [[1.68831144E12, 6.3], [1.68831138E12, 4.533333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831144E12, "title": "Total Transactions Per Second"}},
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

