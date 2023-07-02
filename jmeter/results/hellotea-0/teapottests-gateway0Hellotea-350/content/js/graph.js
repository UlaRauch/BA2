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
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 300.0, "series": [{"data": [[0.0, 26.0], [0.1, 26.0], [0.2, 26.0], [0.3, 32.0], [0.4, 32.0], [0.5, 32.0], [0.6, 33.0], [0.7, 33.0], [0.8, 33.0], [0.9, 34.0], [1.0, 34.0], [1.1, 34.0], [1.2, 34.0], [1.3, 34.0], [1.4, 34.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 36.0], [2.0, 36.0], [2.1, 36.0], [2.2, 36.0], [2.3, 40.0], [2.4, 40.0], [2.5, 40.0], [2.6, 41.0], [2.7, 41.0], [2.8, 41.0], [2.9, 41.0], [3.0, 41.0], [3.1, 41.0], [3.2, 41.0], [3.3, 41.0], [3.4, 41.0], [3.5, 41.0], [3.6, 41.0], [3.7, 41.0], [3.8, 42.0], [3.9, 42.0], [4.0, 42.0], [4.1, 42.0], [4.2, 42.0], [4.3, 43.0], [4.4, 43.0], [4.5, 43.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 47.0], [5.1, 47.0], [5.2, 47.0], [5.3, 47.0], [5.4, 47.0], [5.5, 48.0], [5.6, 48.0], [5.7, 48.0], [5.8, 48.0], [5.9, 48.0], [6.0, 49.0], [6.1, 49.0], [6.2, 49.0], [6.3, 51.0], [6.4, 51.0], [6.5, 51.0], [6.6, 52.0], [6.7, 52.0], [6.8, 52.0], [6.9, 52.0], [7.0, 52.0], [7.1, 52.0], [7.2, 52.0], [7.3, 52.0], [7.4, 52.0], [7.5, 53.0], [7.6, 53.0], [7.7, 53.0], [7.8, 53.0], [7.9, 53.0], [8.0, 53.0], [8.1, 53.0], [8.2, 53.0], [8.3, 53.0], [8.4, 53.0], [8.5, 53.0], [8.6, 53.0], [8.7, 53.0], [8.8, 53.0], [8.9, 54.0], [9.0, 54.0], [9.1, 54.0], [9.2, 54.0], [9.3, 54.0], [9.4, 54.0], [9.5, 55.0], [9.6, 55.0], [9.7, 55.0], [9.8, 55.0], [9.9, 55.0], [10.0, 56.0], [10.1, 56.0], [10.2, 56.0], [10.3, 56.0], [10.4, 56.0], [10.5, 56.0], [10.6, 56.0], [10.7, 56.0], [10.8, 56.0], [10.9, 56.0], [11.0, 56.0], [11.1, 56.0], [11.2, 56.0], [11.3, 56.0], [11.4, 56.0], [11.5, 57.0], [11.6, 57.0], [11.7, 57.0], [11.8, 57.0], [11.9, 57.0], [12.0, 57.0], [12.1, 57.0], [12.2, 57.0], [12.3, 57.0], [12.4, 57.0], [12.5, 57.0], [12.6, 57.0], [12.7, 57.0], [12.8, 57.0], [12.9, 57.0], [13.0, 57.0], [13.1, 57.0], [13.2, 57.0], [13.3, 57.0], [13.4, 57.0], [13.5, 58.0], [13.6, 58.0], [13.7, 58.0], [13.8, 59.0], [13.9, 59.0], [14.0, 59.0], [14.1, 59.0], [14.2, 59.0], [14.3, 59.0], [14.4, 59.0], [14.5, 59.0], [14.6, 60.0], [14.7, 60.0], [14.8, 60.0], [14.9, 60.0], [15.0, 60.0], [15.1, 60.0], [15.2, 61.0], [15.3, 61.0], [15.4, 61.0], [15.5, 61.0], [15.6, 61.0], [15.7, 61.0], [15.8, 64.0], [15.9, 64.0], [16.0, 66.0], [16.1, 66.0], [16.2, 66.0], [16.3, 67.0], [16.4, 67.0], [16.5, 67.0], [16.6, 68.0], [16.7, 68.0], [16.8, 68.0], [16.9, 69.0], [17.0, 69.0], [17.1, 69.0], [17.2, 73.0], [17.3, 73.0], [17.4, 73.0], [17.5, 73.0], [17.6, 73.0], [17.7, 73.0], [17.8, 76.0], [17.9, 76.0], [18.0, 83.0], [18.1, 83.0], [18.2, 83.0], [18.3, 83.0], [18.4, 83.0], [18.5, 83.0], [18.6, 84.0], [18.7, 84.0], [18.8, 84.0], [18.9, 84.0], [19.0, 84.0], [19.1, 84.0], [19.2, 85.0], [19.3, 85.0], [19.4, 85.0], [19.5, 85.0], [19.6, 85.0], [19.7, 85.0], [19.8, 85.0], [19.9, 85.0], [20.0, 86.0], [20.1, 86.0], [20.2, 86.0], [20.3, 86.0], [20.4, 86.0], [20.5, 86.0], [20.6, 86.0], [20.7, 86.0], [20.8, 86.0], [20.9, 86.0], [21.0, 86.0], [21.1, 86.0], [21.2, 86.0], [21.3, 86.0], [21.4, 86.0], [21.5, 87.0], [21.6, 87.0], [21.7, 87.0], [21.8, 87.0], [21.9, 87.0], [22.0, 87.0], [22.1, 87.0], [22.2, 87.0], [22.3, 88.0], [22.4, 88.0], [22.5, 88.0], [22.6, 88.0], [22.7, 88.0], [22.8, 88.0], [22.9, 88.0], [23.0, 88.0], [23.1, 88.0], [23.2, 88.0], [23.3, 88.0], [23.4, 88.0], [23.5, 88.0], [23.6, 88.0], [23.7, 88.0], [23.8, 89.0], [23.9, 89.0], [24.0, 89.0], [24.1, 89.0], [24.2, 89.0], [24.3, 89.0], [24.4, 89.0], [24.5, 89.0], [24.6, 89.0], [24.7, 89.0], [24.8, 89.0], [24.9, 90.0], [25.0, 90.0], [25.1, 90.0], [25.2, 90.0], [25.3, 90.0], [25.4, 90.0], [25.5, 90.0], [25.6, 90.0], [25.7, 90.0], [25.8, 90.0], [25.9, 90.0], [26.0, 90.0], [26.1, 90.0], [26.2, 90.0], [26.3, 90.0], [26.4, 90.0], [26.5, 90.0], [26.6, 91.0], [26.7, 91.0], [26.8, 91.0], [26.9, 91.0], [27.0, 91.0], [27.1, 91.0], [27.2, 91.0], [27.3, 91.0], [27.4, 91.0], [27.5, 92.0], [27.6, 92.0], [27.7, 92.0], [27.8, 93.0], [27.9, 93.0], [28.0, 93.0], [28.1, 93.0], [28.2, 93.0], [28.3, 93.0], [28.4, 93.0], [28.5, 93.0], [28.6, 93.0], [28.7, 93.0], [28.8, 93.0], [28.9, 93.0], [29.0, 93.0], [29.1, 93.0], [29.2, 94.0], [29.3, 94.0], [29.4, 94.0], [29.5, 95.0], [29.6, 95.0], [29.7, 95.0], [29.8, 96.0], [29.9, 96.0], [30.0, 96.0], [30.1, 96.0], [30.2, 96.0], [30.3, 96.0], [30.4, 96.0], [30.5, 96.0], [30.6, 96.0], [30.7, 96.0], [30.8, 96.0], [30.9, 97.0], [31.0, 97.0], [31.1, 97.0], [31.2, 97.0], [31.3, 97.0], [31.4, 97.0], [31.5, 97.0], [31.6, 97.0], [31.7, 97.0], [31.8, 97.0], [31.9, 97.0], [32.0, 97.0], [32.1, 97.0], [32.2, 97.0], [32.3, 98.0], [32.4, 98.0], [32.5, 98.0], [32.6, 98.0], [32.7, 98.0], [32.8, 98.0], [32.9, 98.0], [33.0, 98.0], [33.1, 98.0], [33.2, 98.0], [33.3, 98.0], [33.4, 98.0], [33.5, 98.0], [33.6, 98.0], [33.7, 98.0], [33.8, 98.0], [33.9, 98.0], [34.0, 98.0], [34.1, 98.0], [34.2, 98.0], [34.3, 99.0], [34.4, 99.0], [34.5, 99.0], [34.6, 99.0], [34.7, 99.0], [34.8, 99.0], [34.9, 99.0], [35.0, 99.0], [35.1, 99.0], [35.2, 99.0], [35.3, 99.0], [35.4, 99.0], [35.5, 99.0], [35.6, 99.0], [35.7, 99.0], [35.8, 100.0], [35.9, 100.0], [36.0, 100.0], [36.1, 100.0], [36.2, 100.0], [36.3, 100.0], [36.4, 100.0], [36.5, 100.0], [36.6, 100.0], [36.7, 100.0], [36.8, 100.0], [36.9, 100.0], [37.0, 100.0], [37.1, 100.0], [37.2, 100.0], [37.3, 100.0], [37.4, 100.0], [37.5, 100.0], [37.6, 100.0], [37.7, 100.0], [37.8, 101.0], [37.9, 101.0], [38.0, 101.0], [38.1, 101.0], [38.2, 101.0], [38.3, 101.0], [38.4, 101.0], [38.5, 101.0], [38.6, 101.0], [38.7, 101.0], [38.8, 101.0], [38.9, 101.0], [39.0, 101.0], [39.1, 101.0], [39.2, 101.0], [39.3, 101.0], [39.4, 101.0], [39.5, 102.0], [39.6, 102.0], [39.7, 102.0], [39.8, 102.0], [39.9, 102.0], [40.0, 102.0], [40.1, 102.0], [40.2, 102.0], [40.3, 102.0], [40.4, 102.0], [40.5, 102.0], [40.6, 103.0], [40.7, 103.0], [40.8, 103.0], [40.9, 103.0], [41.0, 103.0], [41.1, 103.0], [41.2, 103.0], [41.3, 103.0], [41.4, 103.0], [41.5, 103.0], [41.6, 103.0], [41.7, 103.0], [41.8, 103.0], [41.9, 103.0], [42.0, 103.0], [42.1, 103.0], [42.2, 103.0], [42.3, 103.0], [42.4, 103.0], [42.5, 103.0], [42.6, 103.0], [42.7, 103.0], [42.8, 103.0], [42.9, 103.0], [43.0, 103.0], [43.1, 103.0], [43.2, 104.0], [43.3, 104.0], [43.4, 104.0], [43.5, 104.0], [43.6, 104.0], [43.7, 104.0], [43.8, 105.0], [43.9, 105.0], [44.0, 105.0], [44.1, 105.0], [44.2, 105.0], [44.3, 105.0], [44.4, 105.0], [44.5, 105.0], [44.6, 105.0], [44.7, 105.0], [44.8, 105.0], [44.9, 105.0], [45.0, 105.0], [45.1, 105.0], [45.2, 105.0], [45.3, 105.0], [45.4, 105.0], [45.5, 106.0], [45.6, 106.0], [45.7, 106.0], [45.8, 106.0], [45.9, 106.0], [46.0, 106.0], [46.1, 106.0], [46.2, 106.0], [46.3, 106.0], [46.4, 106.0], [46.5, 106.0], [46.6, 106.0], [46.7, 106.0], [46.8, 106.0], [46.9, 107.0], [47.0, 107.0], [47.1, 107.0], [47.2, 108.0], [47.3, 108.0], [47.4, 108.0], [47.5, 108.0], [47.6, 108.0], [47.7, 108.0], [47.8, 108.0], [47.9, 108.0], [48.0, 108.0], [48.1, 108.0], [48.2, 108.0], [48.3, 108.0], [48.4, 108.0], [48.5, 108.0], [48.6, 108.0], [48.7, 108.0], [48.8, 108.0], [48.9, 108.0], [49.0, 108.0], [49.1, 108.0], [49.2, 109.0], [49.3, 109.0], [49.4, 109.0], [49.5, 109.0], [49.6, 109.0], [49.7, 109.0], [49.8, 109.0], [49.9, 109.0], [50.0, 109.0], [50.1, 109.0], [50.2, 109.0], [50.3, 109.0], [50.4, 109.0], [50.5, 109.0], [50.6, 109.0], [50.7, 109.0], [50.8, 109.0], [50.9, 110.0], [51.0, 110.0], [51.1, 110.0], [51.2, 110.0], [51.3, 110.0], [51.4, 110.0], [51.5, 110.0], [51.6, 110.0], [51.7, 110.0], [51.8, 110.0], [51.9, 110.0], [52.0, 110.0], [52.1, 110.0], [52.2, 110.0], [52.3, 110.0], [52.4, 110.0], [52.5, 110.0], [52.6, 110.0], [52.7, 110.0], [52.8, 110.0], [52.9, 110.0], [53.0, 110.0], [53.1, 110.0], [53.2, 110.0], [53.3, 110.0], [53.4, 110.0], [53.5, 110.0], [53.6, 110.0], [53.7, 110.0], [53.8, 110.0], [53.9, 110.0], [54.0, 111.0], [54.1, 111.0], [54.2, 111.0], [54.3, 111.0], [54.4, 111.0], [54.5, 111.0], [54.6, 111.0], [54.7, 111.0], [54.8, 111.0], [54.9, 111.0], [55.0, 111.0], [55.1, 111.0], [55.2, 111.0], [55.3, 111.0], [55.4, 111.0], [55.5, 112.0], [55.6, 112.0], [55.7, 112.0], [55.8, 112.0], [55.9, 112.0], [56.0, 112.0], [56.1, 112.0], [56.2, 112.0], [56.3, 112.0], [56.4, 112.0], [56.5, 112.0], [56.6, 112.0], [56.7, 112.0], [56.8, 112.0], [56.9, 112.0], [57.0, 112.0], [57.1, 112.0], [57.2, 112.0], [57.3, 112.0], [57.4, 112.0], [57.5, 112.0], [57.6, 112.0], [57.7, 112.0], [57.8, 112.0], [57.9, 112.0], [58.0, 112.0], [58.1, 112.0], [58.2, 112.0], [58.3, 112.0], [58.4, 112.0], [58.5, 112.0], [58.6, 113.0], [58.7, 113.0], [58.8, 113.0], [58.9, 113.0], [59.0, 113.0], [59.1, 113.0], [59.2, 113.0], [59.3, 113.0], [59.4, 113.0], [59.5, 113.0], [59.6, 113.0], [59.7, 113.0], [59.8, 113.0], [59.9, 113.0], [60.0, 113.0], [60.1, 113.0], [60.2, 113.0], [60.3, 113.0], [60.4, 113.0], [60.5, 113.0], [60.6, 113.0], [60.7, 113.0], [60.8, 113.0], [60.9, 113.0], [61.0, 113.0], [61.1, 113.0], [61.2, 113.0], [61.3, 113.0], [61.4, 113.0], [61.5, 114.0], [61.6, 114.0], [61.7, 114.0], [61.8, 114.0], [61.9, 114.0], [62.0, 114.0], [62.1, 114.0], [62.2, 114.0], [62.3, 114.0], [62.4, 114.0], [62.5, 114.0], [62.6, 115.0], [62.7, 115.0], [62.8, 115.0], [62.9, 115.0], [63.0, 115.0], [63.1, 115.0], [63.2, 115.0], [63.3, 115.0], [63.4, 115.0], [63.5, 115.0], [63.6, 115.0], [63.7, 115.0], [63.8, 115.0], [63.9, 115.0], [64.0, 115.0], [64.1, 115.0], [64.2, 115.0], [64.3, 116.0], [64.4, 116.0], [64.5, 116.0], [64.6, 116.0], [64.7, 116.0], [64.8, 116.0], [64.9, 116.0], [65.0, 116.0], [65.1, 116.0], [65.2, 116.0], [65.3, 116.0], [65.4, 116.0], [65.5, 116.0], [65.6, 116.0], [65.7, 116.0], [65.8, 116.0], [65.9, 116.0], [66.0, 117.0], [66.1, 117.0], [66.2, 117.0], [66.3, 117.0], [66.4, 117.0], [66.5, 117.0], [66.6, 117.0], [66.7, 117.0], [66.8, 117.0], [66.9, 117.0], [67.0, 117.0], [67.1, 117.0], [67.2, 117.0], [67.3, 117.0], [67.4, 117.0], [67.5, 117.0], [67.6, 117.0], [67.7, 117.0], [67.8, 117.0], [67.9, 117.0], [68.0, 117.0], [68.1, 117.0], [68.2, 117.0], [68.3, 117.0], [68.4, 117.0], [68.5, 117.0], [68.6, 118.0], [68.7, 118.0], [68.8, 118.0], [68.9, 118.0], [69.0, 118.0], [69.1, 118.0], [69.2, 118.0], [69.3, 118.0], [69.4, 118.0], [69.5, 118.0], [69.6, 118.0], [69.7, 118.0], [69.8, 118.0], [69.9, 118.0], [70.0, 118.0], [70.1, 118.0], [70.2, 118.0], [70.3, 118.0], [70.4, 118.0], [70.5, 118.0], [70.6, 119.0], [70.7, 119.0], [70.8, 119.0], [70.9, 119.0], [71.0, 119.0], [71.1, 119.0], [71.2, 119.0], [71.3, 119.0], [71.4, 119.0], [71.5, 119.0], [71.6, 119.0], [71.7, 119.0], [71.8, 119.0], [71.9, 119.0], [72.0, 119.0], [72.1, 119.0], [72.2, 119.0], [72.3, 120.0], [72.4, 120.0], [72.5, 120.0], [72.6, 120.0], [72.7, 120.0], [72.8, 120.0], [72.9, 120.0], [73.0, 120.0], [73.1, 120.0], [73.2, 120.0], [73.3, 120.0], [73.4, 120.0], [73.5, 120.0], [73.6, 120.0], [73.7, 120.0], [73.8, 121.0], [73.9, 121.0], [74.0, 121.0], [74.1, 121.0], [74.2, 121.0], [74.3, 121.0], [74.4, 121.0], [74.5, 121.0], [74.6, 121.0], [74.7, 121.0], [74.8, 121.0], [74.9, 122.0], [75.0, 122.0], [75.1, 122.0], [75.2, 122.0], [75.3, 122.0], [75.4, 122.0], [75.5, 122.0], [75.6, 122.0], [75.7, 122.0], [75.8, 122.0], [75.9, 122.0], [76.0, 122.0], [76.1, 122.0], [76.2, 122.0], [76.3, 123.0], [76.4, 123.0], [76.5, 123.0], [76.6, 123.0], [76.7, 123.0], [76.8, 123.0], [76.9, 123.0], [77.0, 123.0], [77.1, 123.0], [77.2, 123.0], [77.3, 123.0], [77.4, 123.0], [77.5, 125.0], [77.6, 125.0], [77.7, 125.0], [77.8, 270.0], [77.9, 270.0], [78.0, 271.0], [78.1, 271.0], [78.2, 271.0], [78.3, 274.0], [78.4, 274.0], [78.5, 274.0], [78.6, 274.0], [78.7, 274.0], [78.8, 274.0], [78.9, 274.0], [79.0, 274.0], [79.1, 274.0], [79.2, 276.0], [79.3, 276.0], [79.4, 276.0], [79.5, 277.0], [79.6, 277.0], [79.7, 277.0], [79.8, 278.0], [79.9, 278.0], [80.0, 278.0], [80.1, 278.0], [80.2, 278.0], [80.3, 278.0], [80.4, 278.0], [80.5, 278.0], [80.6, 278.0], [80.7, 278.0], [80.8, 278.0], [80.9, 279.0], [81.0, 279.0], [81.1, 279.0], [81.2, 279.0], [81.3, 279.0], [81.4, 279.0], [81.5, 280.0], [81.6, 280.0], [81.7, 280.0], [81.8, 280.0], [81.9, 280.0], [82.0, 280.0], [82.1, 282.0], [82.2, 282.0], [82.3, 282.0], [82.4, 282.0], [82.5, 282.0], [82.6, 282.0], [82.7, 282.0], [82.8, 282.0], [82.9, 282.0], [83.0, 282.0], [83.1, 282.0], [83.2, 282.0], [83.3, 282.0], [83.4, 282.0], [83.5, 283.0], [83.6, 283.0], [83.7, 283.0], [83.8, 283.0], [83.9, 283.0], [84.0, 283.0], [84.1, 284.0], [84.2, 284.0], [84.3, 285.0], [84.4, 285.0], [84.5, 285.0], [84.6, 286.0], [84.7, 286.0], [84.8, 286.0], [84.9, 286.0], [85.0, 286.0], [85.1, 286.0], [85.2, 287.0], [85.3, 287.0], [85.4, 287.0], [85.5, 287.0], [85.6, 287.0], [85.7, 287.0], [85.8, 287.0], [85.9, 287.0], [86.0, 287.0], [86.1, 287.0], [86.2, 287.0], [86.3, 287.0], [86.4, 287.0], [86.5, 287.0], [86.6, 287.0], [86.7, 287.0], [86.8, 287.0], [86.9, 288.0], [87.0, 288.0], [87.1, 288.0], [87.2, 288.0], [87.3, 288.0], [87.4, 288.0], [87.5, 288.0], [87.6, 288.0], [87.7, 288.0], [87.8, 288.0], [87.9, 288.0], [88.0, 288.0], [88.1, 288.0], [88.2, 288.0], [88.3, 288.0], [88.4, 288.0], [88.5, 288.0], [88.6, 289.0], [88.7, 289.0], [88.8, 289.0], [88.9, 289.0], [89.0, 289.0], [89.1, 289.0], [89.2, 289.0], [89.3, 289.0], [89.4, 289.0], [89.5, 289.0], [89.6, 289.0], [89.7, 289.0], [89.8, 289.0], [89.9, 289.0], [90.0, 289.0], [90.1, 290.0], [90.2, 290.0], [90.3, 290.0], [90.4, 290.0], [90.5, 290.0], [90.6, 290.0], [90.7, 290.0], [90.8, 290.0], [90.9, 291.0], [91.0, 291.0], [91.1, 291.0], [91.2, 291.0], [91.3, 291.0], [91.4, 291.0], [91.5, 291.0], [91.6, 291.0], [91.7, 291.0], [91.8, 291.0], [91.9, 291.0], [92.0, 291.0], [92.1, 291.0], [92.2, 291.0], [92.3, 292.0], [92.4, 292.0], [92.5, 292.0], [92.6, 292.0], [92.7, 292.0], [92.8, 292.0], [92.9, 292.0], [93.0, 292.0], [93.1, 292.0], [93.2, 293.0], [93.3, 293.0], [93.4, 293.0], [93.5, 293.0], [93.6, 293.0], [93.7, 293.0], [93.8, 293.0], [93.9, 293.0], [94.0, 293.0], [94.1, 293.0], [94.2, 293.0], [94.3, 293.0], [94.4, 293.0], [94.5, 293.0], [94.6, 294.0], [94.7, 294.0], [94.8, 294.0], [94.9, 294.0], [95.0, 294.0], [95.1, 294.0], [95.2, 295.0], [95.3, 295.0], [95.4, 295.0], [95.5, 295.0], [95.6, 295.0], [95.7, 295.0], [95.8, 295.0], [95.9, 295.0], [96.0, 295.0], [96.1, 295.0], [96.2, 295.0], [96.3, 296.0], [96.4, 296.0], [96.5, 296.0], [96.6, 296.0], [96.7, 296.0], [96.8, 296.0], [96.9, 296.0], [97.0, 296.0], [97.1, 296.0], [97.2, 296.0], [97.3, 296.0], [97.4, 296.0], [97.5, 296.0], [97.6, 296.0], [97.7, 296.0], [97.8, 297.0], [97.9, 297.0], [98.0, 297.0], [98.1, 297.0], [98.2, 297.0], [98.3, 297.0], [98.4, 297.0], [98.5, 297.0], [98.6, 298.0], [98.7, 298.0], [98.8, 298.0], [98.9, 298.0], [99.0, 298.0], [99.1, 298.0], [99.2, 299.0], [99.3, 299.0], [99.4, 299.0], [99.5, 299.0], [99.6, 299.0], [99.7, 299.0], [99.8, 300.0], [99.9, 300.0], [100.0, 300.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 147.0, "series": [{"data": [[0.0, 125.0], [300.0, 1.0], [200.0, 77.0], [100.0, 147.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 350.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 350.0, "series": [{"data": [[0.0, 350.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.18285714285719, "minX": 1.6883106E12, "maxY": 98.18285714285719, "series": [{"data": [[1.6883106E12, 98.18285714285719]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 34.25, "minX": 1.0, "maxY": 294.3333333333333, "series": [{"data": [[3.0, 89.0], [4.0, 89.0], [6.0, 88.0], [7.0, 85.0], [9.0, 116.0], [10.0, 90.0], [12.0, 84.5], [13.0, 96.5], [14.0, 103.0], [16.0, 93.5], [17.0, 96.0], [18.0, 93.0], [20.0, 103.0], [23.0, 103.25], [24.0, 101.0], [26.0, 102.5], [29.0, 111.0], [30.0, 101.0], [31.0, 120.0], [33.0, 99.0], [35.0, 104.5], [34.0, 112.0], [39.0, 98.66666666666667], [38.0, 103.0], [40.0, 100.0], [43.0, 112.0], [42.0, 105.5], [45.0, 97.0], [49.0, 104.25], [51.0, 102.5], [53.0, 105.0], [55.0, 88.0], [54.0, 104.5], [59.0, 110.0], [58.0, 114.0], [60.0, 68.0], [63.0, 122.0], [65.0, 34.25], [66.0, 34.333333333333336], [67.0, 112.0], [64.0, 111.5], [71.0, 58.75], [70.0, 57.0], [68.0, 103.0], [74.0, 69.14285714285714], [75.0, 47.0], [72.0, 55.75], [73.0, 66.63636363636364], [77.0, 76.71428571428571], [76.0, 72.25], [79.0, 53.5], [78.0, 277.0], [82.0, 154.33333333333334], [83.0, 210.0], [80.0, 176.4], [81.0, 279.0], [84.0, 136.33333333333331], [85.0, 117.8], [87.0, 181.4], [86.0, 278.25], [88.0, 281.5], [90.0, 112.0], [89.0, 112.0], [93.0, 120.0], [92.0, 119.0], [98.0, 114.0], [97.0, 120.0], [96.0, 120.66666666666667], [102.0, 172.33333333333334], [101.0, 286.0], [103.0, 116.5], [100.0, 111.0], [104.0, 242.0], [105.0, 285.0], [106.0, 287.0], [107.0, 115.0], [111.0, 114.0], [110.0, 110.5], [108.0, 113.0], [115.0, 113.0], [114.0, 117.0], [112.0, 125.0], [116.0, 173.66666666666666], [117.0, 206.5], [121.0, 232.66666666666666], [122.0, 235.0], [123.0, 289.0], [120.0, 110.0], [124.0, 293.25], [125.0, 269.6666666666667], [127.0, 222.0], [128.0, 292.0], [130.0, 206.0], [129.0, 248.5], [132.0, 116.5], [143.0, 170.0909090909091], [142.0, 190.0], [141.0, 191.25], [140.0, 207.0], [139.0, 189.5], [137.0, 176.33333333333334], [136.0, 118.0], [144.0, 193.33333333333331], [145.0, 294.3333333333333], [146.0, 105.33333333333333], [150.0, 110.0], [148.0, 110.0], [147.0, 110.0], [157.0, 92.0], [156.0, 96.71428571428571], [155.0, 98.5], [159.0, 100.33333333333334], [158.0, 104.8], [154.0, 108.5], [152.0, 109.33333333333333], [164.0, 99.0], [166.0, 98.0], [167.0, 100.0], [165.0, 99.0], [163.0, 98.0], [162.0, 101.5], [160.0, 101.5], [168.0, 98.0], [1.0, 91.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[98.18571428571424, 136.64571428571435]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 168.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 560.0, "minX": 1.6883106E12, "maxY": 746.6666666666666, "series": [{"data": [[1.6883106E12, 560.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883106E12, 746.6666666666666]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 136.64571428571435, "minX": 1.6883106E12, "maxY": 136.64571428571435, "series": [{"data": [[1.6883106E12, 136.64571428571435]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 136.64571428571435, "minX": 1.6883106E12, "maxY": 136.64571428571435, "series": [{"data": [[1.6883106E12, 136.64571428571435]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.700000000000002, "minX": 1.6883106E12, "maxY": 3.700000000000002, "series": [{"data": [[1.6883106E12, 3.700000000000002]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.6883106E12, "maxY": 300.0, "series": [{"data": [[1.6883106E12, 300.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883106E12, 26.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883106E12, 289.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883106E12, 298.49]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883106E12, 109.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883106E12, 294.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 53.0, "minX": 61.0, "maxY": 113.0, "series": [{"data": [[289.0, 113.0], [61.0, 53.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 289.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 53.0, "minX": 61.0, "maxY": 113.0, "series": [{"data": [[289.0, 113.0], [61.0, 53.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 289.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.6883106E12, "maxY": 5.833333333333333, "series": [{"data": [[1.6883106E12, 5.833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.6883106E12, "maxY": 5.833333333333333, "series": [{"data": [[1.6883106E12, 5.833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.6883106E12, "maxY": 5.833333333333333, "series": [{"data": [[1.6883106E12, 5.833333333333333]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.6883106E12, "maxY": 5.833333333333333, "series": [{"data": [[1.6883106E12, 5.833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Total Transactions Per Second"}},
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

