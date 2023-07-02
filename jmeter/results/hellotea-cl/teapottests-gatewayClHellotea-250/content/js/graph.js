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
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 220.0, "series": [{"data": [[0.0, 26.0], [0.1, 26.0], [0.2, 26.0], [0.3, 26.0], [0.4, 26.0], [0.5, 26.0], [0.6, 26.0], [0.7, 26.0], [0.8, 28.0], [0.9, 28.0], [1.0, 28.0], [1.1, 28.0], [1.2, 28.0], [1.3, 33.0], [1.4, 33.0], [1.5, 33.0], [1.6, 34.0], [1.7, 34.0], [1.8, 34.0], [1.9, 34.0], [2.0, 34.0], [2.1, 34.0], [2.2, 34.0], [2.3, 34.0], [2.4, 34.0], [2.5, 34.0], [2.6, 34.0], [2.7, 34.0], [2.8, 35.0], [2.9, 35.0], [3.0, 35.0], [3.1, 35.0], [3.2, 35.0], [3.3, 35.0], [3.4, 35.0], [3.5, 35.0], [3.6, 36.0], [3.7, 36.0], [3.8, 36.0], [3.9, 36.0], [4.0, 36.0], [4.1, 36.0], [4.2, 36.0], [4.3, 36.0], [4.4, 39.0], [4.5, 39.0], [4.6, 39.0], [4.7, 39.0], [4.8, 39.0], [4.9, 39.0], [5.0, 39.0], [5.1, 39.0], [5.2, 40.0], [5.3, 40.0], [5.4, 40.0], [5.5, 40.0], [5.6, 41.0], [5.7, 41.0], [5.8, 41.0], [5.9, 41.0], [6.0, 41.0], [6.1, 41.0], [6.2, 41.0], [6.3, 41.0], [6.4, 43.0], [6.5, 43.0], [6.6, 43.0], [6.7, 43.0], [6.8, 47.0], [6.9, 47.0], [7.0, 47.0], [7.1, 47.0], [7.2, 49.0], [7.3, 49.0], [7.4, 49.0], [7.5, 49.0], [7.6, 49.0], [7.7, 49.0], [7.8, 49.0], [7.9, 49.0], [8.0, 51.0], [8.1, 51.0], [8.2, 51.0], [8.3, 51.0], [8.4, 51.0], [8.5, 51.0], [8.6, 51.0], [8.7, 51.0], [8.8, 51.0], [8.9, 51.0], [9.0, 51.0], [9.1, 51.0], [9.2, 54.0], [9.3, 54.0], [9.4, 54.0], [9.5, 54.0], [9.6, 60.0], [9.7, 60.0], [9.8, 60.0], [9.9, 60.0], [10.0, 65.0], [10.1, 65.0], [10.2, 65.0], [10.3, 65.0], [10.4, 70.0], [10.5, 70.0], [10.6, 70.0], [10.7, 70.0], [10.8, 70.0], [10.9, 70.0], [11.0, 70.0], [11.1, 70.0], [11.2, 70.0], [11.3, 72.0], [11.4, 72.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 72.0], [11.9, 72.0], [12.0, 72.0], [12.1, 72.0], [12.2, 72.0], [12.3, 72.0], [12.4, 72.0], [12.5, 72.0], [12.6, 72.0], [12.7, 72.0], [12.8, 73.0], [12.9, 73.0], [13.0, 73.0], [13.1, 73.0], [13.2, 73.0], [13.3, 74.0], [13.4, 74.0], [13.5, 74.0], [13.6, 74.0], [13.7, 74.0], [13.8, 74.0], [13.9, 74.0], [14.0, 74.0], [14.1, 74.0], [14.2, 74.0], [14.3, 74.0], [14.4, 77.0], [14.5, 77.0], [14.6, 77.0], [14.7, 77.0], [14.8, 77.0], [14.9, 77.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 81.0], [15.4, 81.0], [15.5, 81.0], [15.6, 81.0], [15.7, 82.0], [15.8, 82.0], [15.9, 82.0], [16.0, 83.0], [16.1, 83.0], [16.2, 83.0], [16.3, 83.0], [16.4, 83.0], [16.5, 83.0], [16.6, 83.0], [16.7, 83.0], [16.8, 85.0], [16.9, 85.0], [17.0, 85.0], [17.1, 85.0], [17.2, 86.0], [17.3, 86.0], [17.4, 86.0], [17.5, 86.0], [17.6, 86.0], [17.7, 86.0], [17.8, 86.0], [17.9, 86.0], [18.0, 86.0], [18.1, 86.0], [18.2, 86.0], [18.3, 86.0], [18.4, 88.0], [18.5, 88.0], [18.6, 88.0], [18.7, 88.0], [18.8, 89.0], [18.9, 89.0], [19.0, 89.0], [19.1, 89.0], [19.2, 89.0], [19.3, 89.0], [19.4, 89.0], [19.5, 89.0], [19.6, 90.0], [19.7, 90.0], [19.8, 90.0], [19.9, 90.0], [20.0, 90.0], [20.1, 90.0], [20.2, 90.0], [20.3, 90.0], [20.4, 91.0], [20.5, 91.0], [20.6, 91.0], [20.7, 91.0], [20.8, 91.0], [20.9, 91.0], [21.0, 91.0], [21.1, 91.0], [21.2, 92.0], [21.3, 92.0], [21.4, 92.0], [21.5, 92.0], [21.6, 93.0], [21.7, 93.0], [21.8, 93.0], [21.9, 93.0], [22.0, 93.0], [22.1, 93.0], [22.2, 93.0], [22.3, 93.0], [22.4, 93.0], [22.5, 93.0], [22.6, 93.0], [22.7, 93.0], [22.8, 94.0], [22.9, 94.0], [23.0, 94.0], [23.1, 94.0], [23.2, 95.0], [23.3, 95.0], [23.4, 95.0], [23.5, 95.0], [23.6, 95.0], [23.7, 95.0], [23.8, 95.0], [23.9, 95.0], [24.0, 101.0], [24.1, 101.0], [24.2, 101.0], [24.3, 101.0], [24.4, 101.0], [24.5, 101.0], [24.6, 101.0], [24.7, 101.0], [24.8, 101.0], [24.9, 101.0], [25.0, 101.0], [25.1, 101.0], [25.2, 101.0], [25.3, 101.0], [25.4, 101.0], [25.5, 101.0], [25.6, 101.0], [25.7, 101.0], [25.8, 101.0], [25.9, 101.0], [26.0, 102.0], [26.1, 102.0], [26.2, 102.0], [26.3, 102.0], [26.4, 102.0], [26.5, 102.0], [26.6, 102.0], [26.7, 102.0], [26.8, 102.0], [26.9, 102.0], [27.0, 102.0], [27.1, 102.0], [27.2, 105.0], [27.3, 105.0], [27.4, 105.0], [27.5, 105.0], [27.6, 105.0], [27.7, 105.0], [27.8, 105.0], [27.9, 105.0], [28.0, 106.0], [28.1, 106.0], [28.2, 106.0], [28.3, 106.0], [28.4, 106.0], [28.5, 106.0], [28.6, 106.0], [28.7, 106.0], [28.8, 107.0], [28.9, 107.0], [29.0, 107.0], [29.1, 107.0], [29.2, 107.0], [29.3, 107.0], [29.4, 107.0], [29.5, 107.0], [29.6, 107.0], [29.7, 107.0], [29.8, 107.0], [29.9, 107.0], [30.0, 107.0], [30.1, 107.0], [30.2, 107.0], [30.3, 107.0], [30.4, 108.0], [30.5, 108.0], [30.6, 108.0], [30.7, 108.0], [30.8, 108.0], [30.9, 108.0], [31.0, 108.0], [31.1, 108.0], [31.2, 109.0], [31.3, 109.0], [31.4, 109.0], [31.5, 109.0], [31.6, 109.0], [31.7, 109.0], [31.8, 109.0], [31.9, 109.0], [32.0, 109.0], [32.1, 109.0], [32.2, 109.0], [32.3, 109.0], [32.4, 109.0], [32.5, 109.0], [32.6, 109.0], [32.7, 109.0], [32.8, 109.0], [32.9, 109.0], [33.0, 109.0], [33.1, 109.0], [33.2, 111.0], [33.3, 111.0], [33.4, 111.0], [33.5, 111.0], [33.6, 112.0], [33.7, 112.0], [33.8, 112.0], [33.9, 112.0], [34.0, 112.0], [34.1, 112.0], [34.2, 112.0], [34.3, 112.0], [34.4, 113.0], [34.5, 113.0], [34.6, 113.0], [34.7, 113.0], [34.8, 113.0], [34.9, 113.0], [35.0, 113.0], [35.1, 113.0], [35.2, 114.0], [35.3, 114.0], [35.4, 114.0], [35.5, 114.0], [35.6, 115.0], [35.7, 115.0], [35.8, 115.0], [35.9, 115.0], [36.0, 116.0], [36.1, 116.0], [36.2, 116.0], [36.3, 116.0], [36.4, 116.0], [36.5, 116.0], [36.6, 116.0], [36.7, 116.0], [36.8, 116.0], [36.9, 116.0], [37.0, 116.0], [37.1, 116.0], [37.2, 117.0], [37.3, 117.0], [37.4, 117.0], [37.5, 117.0], [37.6, 117.0], [37.7, 117.0], [37.8, 117.0], [37.9, 117.0], [38.0, 117.0], [38.1, 117.0], [38.2, 117.0], [38.3, 117.0], [38.4, 117.0], [38.5, 117.0], [38.6, 117.0], [38.7, 117.0], [38.8, 117.0], [38.9, 117.0], [39.0, 117.0], [39.1, 117.0], [39.2, 118.0], [39.3, 118.0], [39.4, 118.0], [39.5, 118.0], [39.6, 118.0], [39.7, 118.0], [39.8, 118.0], [39.9, 118.0], [40.0, 118.0], [40.1, 118.0], [40.2, 118.0], [40.3, 118.0], [40.4, 118.0], [40.5, 118.0], [40.6, 118.0], [40.7, 118.0], [40.8, 119.0], [40.9, 119.0], [41.0, 119.0], [41.1, 119.0], [41.2, 120.0], [41.3, 120.0], [41.4, 120.0], [41.5, 120.0], [41.6, 120.0], [41.7, 120.0], [41.8, 120.0], [41.9, 120.0], [42.0, 120.0], [42.1, 120.0], [42.2, 120.0], [42.3, 120.0], [42.4, 121.0], [42.5, 121.0], [42.6, 121.0], [42.7, 121.0], [42.8, 121.0], [42.9, 121.0], [43.0, 121.0], [43.1, 121.0], [43.2, 121.0], [43.3, 121.0], [43.4, 121.0], [43.5, 121.0], [43.6, 121.0], [43.7, 121.0], [43.8, 121.0], [43.9, 121.0], [44.0, 121.0], [44.1, 121.0], [44.2, 121.0], [44.3, 121.0], [44.4, 121.0], [44.5, 121.0], [44.6, 121.0], [44.7, 121.0], [44.8, 122.0], [44.9, 122.0], [45.0, 122.0], [45.1, 122.0], [45.2, 122.0], [45.3, 122.0], [45.4, 122.0], [45.5, 122.0], [45.6, 122.0], [45.7, 122.0], [45.8, 122.0], [45.9, 122.0], [46.0, 123.0], [46.1, 123.0], [46.2, 123.0], [46.3, 123.0], [46.4, 123.0], [46.5, 123.0], [46.6, 123.0], [46.7, 123.0], [46.8, 123.0], [46.9, 123.0], [47.0, 123.0], [47.1, 123.0], [47.2, 124.0], [47.3, 124.0], [47.4, 124.0], [47.5, 124.0], [47.6, 127.0], [47.7, 127.0], [47.8, 127.0], [47.9, 127.0], [48.0, 127.0], [48.1, 127.0], [48.2, 127.0], [48.3, 127.0], [48.4, 127.0], [48.5, 127.0], [48.6, 127.0], [48.7, 127.0], [48.8, 127.0], [48.9, 127.0], [49.0, 127.0], [49.1, 127.0], [49.2, 127.0], [49.3, 127.0], [49.4, 127.0], [49.5, 127.0], [49.6, 127.0], [49.7, 127.0], [49.8, 127.0], [49.9, 127.0], [50.0, 128.0], [50.1, 128.0], [50.2, 128.0], [50.3, 128.0], [50.4, 128.0], [50.5, 128.0], [50.6, 128.0], [50.7, 128.0], [50.8, 128.0], [50.9, 128.0], [51.0, 128.0], [51.1, 128.0], [51.2, 128.0], [51.3, 128.0], [51.4, 128.0], [51.5, 128.0], [51.6, 129.0], [51.7, 129.0], [51.8, 129.0], [51.9, 129.0], [52.0, 129.0], [52.1, 129.0], [52.2, 129.0], [52.3, 129.0], [52.4, 129.0], [52.5, 129.0], [52.6, 129.0], [52.7, 129.0], [52.8, 129.0], [52.9, 129.0], [53.0, 129.0], [53.1, 129.0], [53.2, 129.0], [53.3, 129.0], [53.4, 129.0], [53.5, 129.0], [53.6, 130.0], [53.7, 130.0], [53.8, 130.0], [53.9, 130.0], [54.0, 130.0], [54.1, 130.0], [54.2, 130.0], [54.3, 130.0], [54.4, 130.0], [54.5, 130.0], [54.6, 130.0], [54.7, 130.0], [54.8, 130.0], [54.9, 130.0], [55.0, 130.0], [55.1, 130.0], [55.2, 130.0], [55.3, 130.0], [55.4, 130.0], [55.5, 130.0], [55.6, 131.0], [55.7, 131.0], [55.8, 131.0], [55.9, 131.0], [56.0, 131.0], [56.1, 131.0], [56.2, 131.0], [56.3, 131.0], [56.4, 131.0], [56.5, 131.0], [56.6, 131.0], [56.7, 131.0], [56.8, 131.0], [56.9, 131.0], [57.0, 131.0], [57.1, 131.0], [57.2, 132.0], [57.3, 132.0], [57.4, 132.0], [57.5, 132.0], [57.6, 133.0], [57.7, 133.0], [57.8, 133.0], [57.9, 133.0], [58.0, 134.0], [58.1, 134.0], [58.2, 134.0], [58.3, 134.0], [58.4, 134.0], [58.5, 134.0], [58.6, 134.0], [58.7, 134.0], [58.8, 134.0], [58.9, 134.0], [59.0, 134.0], [59.1, 134.0], [59.2, 135.0], [59.3, 135.0], [59.4, 135.0], [59.5, 135.0], [59.6, 135.0], [59.7, 135.0], [59.8, 135.0], [59.9, 135.0], [60.0, 135.0], [60.1, 135.0], [60.2, 135.0], [60.3, 135.0], [60.4, 135.0], [60.5, 135.0], [60.6, 135.0], [60.7, 135.0], [60.8, 135.0], [60.9, 135.0], [61.0, 135.0], [61.1, 135.0], [61.2, 136.0], [61.3, 136.0], [61.4, 136.0], [61.5, 136.0], [61.6, 137.0], [61.7, 137.0], [61.8, 137.0], [61.9, 137.0], [62.0, 137.0], [62.1, 137.0], [62.2, 137.0], [62.3, 137.0], [62.4, 137.0], [62.5, 137.0], [62.6, 137.0], [62.7, 137.0], [62.8, 137.0], [62.9, 137.0], [63.0, 137.0], [63.1, 137.0], [63.2, 138.0], [63.3, 138.0], [63.4, 138.0], [63.5, 138.0], [63.6, 139.0], [63.7, 139.0], [63.8, 139.0], [63.9, 139.0], [64.0, 139.0], [64.1, 139.0], [64.2, 139.0], [64.3, 139.0], [64.4, 140.0], [64.5, 140.0], [64.6, 140.0], [64.7, 140.0], [64.8, 140.0], [64.9, 140.0], [65.0, 140.0], [65.1, 140.0], [65.2, 140.0], [65.3, 140.0], [65.4, 140.0], [65.5, 140.0], [65.6, 140.0], [65.7, 140.0], [65.8, 140.0], [65.9, 140.0], [66.0, 141.0], [66.1, 141.0], [66.2, 141.0], [66.3, 141.0], [66.4, 141.0], [66.5, 141.0], [66.6, 141.0], [66.7, 141.0], [66.8, 142.0], [66.9, 142.0], [67.0, 142.0], [67.1, 142.0], [67.2, 143.0], [67.3, 143.0], [67.4, 143.0], [67.5, 143.0], [67.6, 143.0], [67.7, 143.0], [67.8, 143.0], [67.9, 143.0], [68.0, 143.0], [68.1, 143.0], [68.2, 143.0], [68.3, 143.0], [68.4, 143.0], [68.5, 143.0], [68.6, 143.0], [68.7, 143.0], [68.8, 143.0], [68.9, 143.0], [69.0, 143.0], [69.1, 143.0], [69.2, 144.0], [69.3, 144.0], [69.4, 144.0], [69.5, 144.0], [69.6, 144.0], [69.7, 144.0], [69.8, 144.0], [69.9, 144.0], [70.0, 145.0], [70.1, 145.0], [70.2, 145.0], [70.3, 145.0], [70.4, 145.0], [70.5, 145.0], [70.6, 145.0], [70.7, 145.0], [70.8, 147.0], [70.9, 147.0], [71.0, 147.0], [71.1, 147.0], [71.2, 147.0], [71.3, 147.0], [71.4, 147.0], [71.5, 147.0], [71.6, 147.0], [71.7, 147.0], [71.8, 147.0], [71.9, 147.0], [72.0, 147.0], [72.1, 147.0], [72.2, 147.0], [72.3, 147.0], [72.4, 149.0], [72.5, 149.0], [72.6, 149.0], [72.7, 149.0], [72.8, 149.0], [72.9, 149.0], [73.0, 149.0], [73.1, 149.0], [73.2, 150.0], [73.3, 150.0], [73.4, 150.0], [73.5, 150.0], [73.6, 150.0], [73.7, 150.0], [73.8, 150.0], [73.9, 150.0], [74.0, 151.0], [74.1, 151.0], [74.2, 151.0], [74.3, 151.0], [74.4, 152.0], [74.5, 152.0], [74.6, 152.0], [74.7, 152.0], [74.8, 152.0], [74.9, 152.0], [75.0, 152.0], [75.1, 152.0], [75.2, 153.0], [75.3, 153.0], [75.4, 153.0], [75.5, 153.0], [75.6, 154.0], [75.7, 154.0], [75.8, 154.0], [75.9, 154.0], [76.0, 155.0], [76.1, 155.0], [76.2, 155.0], [76.3, 155.0], [76.4, 156.0], [76.5, 156.0], [76.6, 156.0], [76.7, 156.0], [76.8, 156.0], [76.9, 157.0], [77.0, 157.0], [77.1, 157.0], [77.2, 157.0], [77.3, 157.0], [77.4, 157.0], [77.5, 157.0], [77.6, 157.0], [77.7, 157.0], [77.8, 157.0], [77.9, 157.0], [78.0, 157.0], [78.1, 158.0], [78.2, 158.0], [78.3, 158.0], [78.4, 158.0], [78.5, 159.0], [78.6, 159.0], [78.7, 159.0], [78.8, 159.0], [78.9, 160.0], [79.0, 160.0], [79.1, 160.0], [79.2, 160.0], [79.3, 162.0], [79.4, 162.0], [79.5, 162.0], [79.6, 162.0], [79.7, 162.0], [79.8, 162.0], [79.9, 162.0], [80.0, 162.0], [80.1, 163.0], [80.2, 163.0], [80.3, 163.0], [80.4, 163.0], [80.5, 163.0], [80.6, 163.0], [80.7, 163.0], [80.8, 163.0], [80.9, 164.0], [81.0, 164.0], [81.1, 164.0], [81.2, 164.0], [81.3, 164.0], [81.4, 164.0], [81.5, 164.0], [81.6, 164.0], [81.7, 164.0], [81.8, 164.0], [81.9, 164.0], [82.0, 164.0], [82.1, 165.0], [82.2, 165.0], [82.3, 165.0], [82.4, 165.0], [82.5, 165.0], [82.6, 165.0], [82.7, 165.0], [82.8, 165.0], [82.9, 166.0], [83.0, 166.0], [83.1, 166.0], [83.2, 166.0], [83.3, 167.0], [83.4, 167.0], [83.5, 167.0], [83.6, 167.0], [83.7, 167.0], [83.8, 167.0], [83.9, 167.0], [84.0, 167.0], [84.1, 168.0], [84.2, 168.0], [84.3, 168.0], [84.4, 168.0], [84.5, 168.0], [84.6, 168.0], [84.7, 168.0], [84.8, 168.0], [84.9, 169.0], [85.0, 169.0], [85.1, 169.0], [85.2, 169.0], [85.3, 169.0], [85.4, 169.0], [85.5, 169.0], [85.6, 169.0], [85.7, 170.0], [85.8, 170.0], [85.9, 170.0], [86.0, 170.0], [86.1, 171.0], [86.2, 171.0], [86.3, 171.0], [86.4, 171.0], [86.5, 173.0], [86.6, 173.0], [86.7, 173.0], [86.8, 173.0], [86.9, 173.0], [87.0, 173.0], [87.1, 173.0], [87.2, 173.0], [87.3, 175.0], [87.4, 175.0], [87.5, 175.0], [87.6, 175.0], [87.7, 175.0], [87.8, 175.0], [87.9, 175.0], [88.0, 175.0], [88.1, 177.0], [88.2, 177.0], [88.3, 177.0], [88.4, 177.0], [88.5, 179.0], [88.6, 179.0], [88.7, 179.0], [88.8, 179.0], [88.9, 179.0], [89.0, 179.0], [89.1, 179.0], [89.2, 179.0], [89.3, 180.0], [89.4, 180.0], [89.5, 180.0], [89.6, 180.0], [89.7, 180.0], [89.8, 180.0], [89.9, 180.0], [90.0, 180.0], [90.1, 180.0], [90.2, 180.0], [90.3, 180.0], [90.4, 180.0], [90.5, 180.0], [90.6, 180.0], [90.7, 180.0], [90.8, 180.0], [90.9, 182.0], [91.0, 182.0], [91.1, 182.0], [91.2, 182.0], [91.3, 182.0], [91.4, 182.0], [91.5, 182.0], [91.6, 182.0], [91.7, 182.0], [91.8, 182.0], [91.9, 182.0], [92.0, 182.0], [92.1, 183.0], [92.2, 183.0], [92.3, 183.0], [92.4, 183.0], [92.5, 183.0], [92.6, 183.0], [92.7, 183.0], [92.8, 183.0], [92.9, 185.0], [93.0, 185.0], [93.1, 185.0], [93.2, 185.0], [93.3, 187.0], [93.4, 187.0], [93.5, 187.0], [93.6, 187.0], [93.7, 189.0], [93.8, 189.0], [93.9, 189.0], [94.0, 189.0], [94.1, 193.0], [94.2, 193.0], [94.3, 193.0], [94.4, 193.0], [94.5, 194.0], [94.6, 194.0], [94.7, 194.0], [94.8, 194.0], [94.9, 195.0], [95.0, 195.0], [95.1, 195.0], [95.2, 195.0], [95.3, 196.0], [95.4, 196.0], [95.5, 196.0], [95.6, 196.0], [95.7, 196.0], [95.8, 196.0], [95.9, 196.0], [96.0, 196.0], [96.1, 198.0], [96.2, 198.0], [96.3, 198.0], [96.4, 198.0], [96.5, 199.0], [96.6, 199.0], [96.7, 199.0], [96.8, 199.0], [96.9, 202.0], [97.0, 202.0], [97.1, 202.0], [97.2, 202.0], [97.3, 204.0], [97.4, 204.0], [97.5, 204.0], [97.6, 204.0], [97.7, 204.0], [97.8, 204.0], [97.9, 204.0], [98.0, 204.0], [98.1, 208.0], [98.2, 208.0], [98.3, 208.0], [98.4, 208.0], [98.5, 208.0], [98.6, 208.0], [98.7, 208.0], [98.8, 208.0], [98.9, 213.0], [99.0, 213.0], [99.1, 213.0], [99.2, 213.0], [99.3, 215.0], [99.4, 215.0], [99.5, 215.0], [99.6, 215.0], [99.7, 220.0], [99.8, 220.0], [99.9, 220.0], [100.0, 220.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 8.0, "minX": 0.0, "maxY": 182.0, "series": [{"data": [[0.0, 60.0], [100.0, 182.0], [200.0, 8.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 250.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 250.0, "series": [{"data": [[0.0, 250.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 97.71999999999996, "minX": 1.68830064E12, "maxY": 97.71999999999996, "series": [{"data": [[1.68830064E12, 97.71999999999996]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.0, "maxY": 220.0, "series": [{"data": [[2.0, 162.0], [6.0, 174.75], [8.0, 215.0], [9.0, 171.5], [11.0, 152.0], [12.0, 178.5], [13.0, 167.0], [15.0, 151.5], [18.0, 169.66666666666666], [20.0, 163.0], [22.0, 207.5], [23.0, 142.0], [24.0, 208.0], [27.0, 142.5], [29.0, 126.66666666666667], [30.0, 147.0], [32.0, 182.0], [35.0, 154.0], [34.0, 157.0], [36.0, 165.0], [39.0, 147.0], [38.0, 168.0], [40.0, 169.0], [43.0, 28.0], [44.0, 77.0], [45.0, 110.4], [47.0, 196.0], [46.0, 135.0], [51.0, 74.0], [50.0, 183.0], [53.0, 122.4], [55.0, 37.75], [54.0, 39.00000000000001], [56.0, 125.75], [59.0, 175.0], [58.0, 136.5], [60.0, 82.0], [61.0, 109.0], [62.0, 81.33333333333333], [63.0, 115.0], [64.0, 70.0], [67.0, 124.0], [65.0, 180.0], [70.0, 124.0], [68.0, 144.0], [74.0, 116.0], [73.0, 182.0], [72.0, 173.5], [78.0, 60.0], [79.0, 160.5], [77.0, 143.0], [76.0, 150.5], [82.0, 185.0], [80.0, 163.0], [86.0, 194.0], [85.0, 147.33333333333334], [91.0, 180.0], [90.0, 164.5], [89.0, 164.0], [88.0, 187.0], [95.0, 173.33333333333334], [92.0, 82.0], [98.0, 178.0], [96.0, 163.0], [103.0, 107.0], [102.0, 93.0], [101.0, 109.0], [100.0, 128.5], [106.0, 93.0], [105.0, 106.0], [104.0, 106.0], [110.0, 92.5], [111.0, 150.0], [109.0, 134.0], [108.0, 113.0], [115.0, 93.66666666666667], [114.0, 115.0], [113.0, 103.66666666666667], [112.0, 71.5], [119.0, 86.0], [118.0, 130.0], [116.0, 180.0], [121.0, 115.0], [126.0, 127.0], [124.0, 138.33333333333334], [132.0, 83.5], [133.0, 101.0], [134.0, 145.0], [131.0, 108.5], [130.0, 83.0], [128.0, 147.33333333333334], [139.0, 91.0], [138.0, 90.55555555555556], [137.0, 114.66666666666667], [140.0, 95.0], [136.0, 76.66666666666667], [142.0, 136.25], [151.0, 129.0], [150.0, 130.0], [149.0, 117.0], [148.0, 137.5], [146.0, 134.25], [158.0, 111.0], [156.0, 116.66666666666667], [155.0, 137.66666666666666], [153.0, 114.5], [157.0, 108.0], [152.0, 132.0], [166.0, 113.0], [165.0, 134.0], [164.0, 117.0], [163.0, 130.0], [162.0, 135.0], [161.0, 124.0], [160.0, 128.5], [175.0, 121.0], [174.0, 114.0], [173.0, 117.0], [172.0, 124.0], [170.0, 124.5], [183.0, 108.0], [182.0, 143.0], [181.0, 115.0], [180.0, 123.0], [179.0, 112.0], [177.0, 125.75], [186.0, 127.0], [185.0, 101.5], [1.0, 220.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[97.71999999999996, 124.25999999999998]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 186.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 758.3333333333334, "minX": 1.68830064E12, "maxY": 1666.6666666666667, "series": [{"data": [[1.68830064E12, 1666.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830064E12, 758.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 124.25999999999998, "minX": 1.68830064E12, "maxY": 124.25999999999998, "series": [{"data": [[1.68830064E12, 124.25999999999998]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 124.25999999999998, "minX": 1.68830064E12, "maxY": 124.25999999999998, "series": [{"data": [[1.68830064E12, 124.25999999999998]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8519999999999999, "minX": 1.68830064E12, "maxY": 0.8519999999999999, "series": [{"data": [[1.68830064E12, 0.8519999999999999]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.68830064E12, "maxY": 220.0, "series": [{"data": [[1.68830064E12, 220.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830064E12, 26.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830064E12, 180.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830064E12, 213.98000000000002]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830064E12, 127.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830064E12, 195.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 127.5, "minX": 250.0, "maxY": 127.5, "series": [{"data": [[250.0, 127.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 250.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 127.5, "minX": 250.0, "maxY": 127.5, "series": [{"data": [[250.0, 127.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 250.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.68830064E12, "maxY": 4.166666666666667, "series": [{"data": [[1.68830064E12, 4.166666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.68830064E12, "maxY": 4.166666666666667, "series": [{"data": [[1.68830064E12, 4.166666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830064E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.68830064E12, "maxY": 4.166666666666667, "series": [{"data": [[1.68830064E12, 4.166666666666667]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.166666666666667, "minX": 1.68830064E12, "maxY": 4.166666666666667, "series": [{"data": [[1.68830064E12, 4.166666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830064E12, "title": "Total Transactions Per Second"}},
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

