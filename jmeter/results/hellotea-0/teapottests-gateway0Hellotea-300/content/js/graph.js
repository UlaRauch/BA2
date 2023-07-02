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
        data: {"result": {"minY": 34.0, "minX": 0.0, "maxY": 117.0, "series": [{"data": [[0.0, 34.0], [0.1, 34.0], [0.2, 34.0], [0.3, 34.0], [0.4, 40.0], [0.5, 40.0], [0.6, 40.0], [0.7, 41.0], [0.8, 41.0], [0.9, 41.0], [1.0, 42.0], [1.1, 42.0], [1.2, 42.0], [1.3, 42.0], [1.4, 43.0], [1.5, 43.0], [1.6, 43.0], [1.7, 45.0], [1.8, 45.0], [1.9, 45.0], [2.0, 45.0], [2.1, 45.0], [2.2, 45.0], [2.3, 45.0], [2.4, 46.0], [2.5, 46.0], [2.6, 46.0], [2.7, 46.0], [2.8, 46.0], [2.9, 46.0], [3.0, 47.0], [3.1, 47.0], [3.2, 47.0], [3.3, 47.0], [3.4, 47.0], [3.5, 47.0], [3.6, 47.0], [3.7, 47.0], [3.8, 47.0], [3.9, 47.0], [4.0, 47.0], [4.1, 47.0], [4.2, 47.0], [4.3, 47.0], [4.4, 47.0], [4.5, 47.0], [4.6, 47.0], [4.7, 47.0], [4.8, 47.0], [4.9, 47.0], [5.0, 50.0], [5.1, 50.0], [5.2, 50.0], [5.3, 50.0], [5.4, 52.0], [5.5, 52.0], [5.6, 52.0], [5.7, 52.0], [5.8, 52.0], [5.9, 52.0], [6.0, 53.0], [6.1, 53.0], [6.2, 53.0], [6.3, 53.0], [6.4, 54.0], [6.5, 54.0], [6.6, 54.0], [6.7, 54.0], [6.8, 54.0], [6.9, 54.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 55.0], [7.4, 55.0], [7.5, 55.0], [7.6, 55.0], [7.7, 56.0], [7.8, 56.0], [7.9, 56.0], [8.0, 56.0], [8.1, 56.0], [8.2, 56.0], [8.3, 56.0], [8.4, 57.0], [8.5, 57.0], [8.6, 57.0], [8.7, 57.0], [8.8, 57.0], [8.9, 57.0], [9.0, 58.0], [9.1, 58.0], [9.2, 58.0], [9.3, 58.0], [9.4, 58.0], [9.5, 58.0], [9.6, 58.0], [9.7, 58.0], [9.8, 58.0], [9.9, 58.0], [10.0, 58.0], [10.1, 58.0], [10.2, 58.0], [10.3, 58.0], [10.4, 59.0], [10.5, 59.0], [10.6, 59.0], [10.7, 59.0], [10.8, 59.0], [10.9, 59.0], [11.0, 59.0], [11.1, 59.0], [11.2, 59.0], [11.3, 59.0], [11.4, 60.0], [11.5, 60.0], [11.6, 60.0], [11.7, 60.0], [11.8, 60.0], [11.9, 60.0], [12.0, 60.0], [12.1, 60.0], [12.2, 60.0], [12.3, 60.0], [12.4, 61.0], [12.5, 61.0], [12.6, 61.0], [12.7, 61.0], [12.8, 61.0], [12.9, 61.0], [13.0, 62.0], [13.1, 62.0], [13.2, 62.0], [13.3, 62.0], [13.4, 63.0], [13.5, 63.0], [13.6, 63.0], [13.7, 63.0], [13.8, 63.0], [13.9, 63.0], [14.0, 64.0], [14.1, 64.0], [14.2, 64.0], [14.3, 64.0], [14.4, 64.0], [14.5, 64.0], [14.6, 64.0], [14.7, 65.0], [14.8, 65.0], [14.9, 65.0], [15.0, 66.0], [15.1, 66.0], [15.2, 66.0], [15.3, 66.0], [15.4, 66.0], [15.5, 66.0], [15.6, 66.0], [15.7, 67.0], [15.8, 67.0], [15.9, 67.0], [16.0, 67.0], [16.1, 67.0], [16.2, 67.0], [16.3, 67.0], [16.4, 67.0], [16.5, 67.0], [16.6, 67.0], [16.7, 68.0], [16.8, 68.0], [16.9, 68.0], [17.0, 68.0], [17.1, 68.0], [17.2, 68.0], [17.3, 68.0], [17.4, 69.0], [17.5, 69.0], [17.6, 69.0], [17.7, 70.0], [17.8, 70.0], [17.9, 70.0], [18.0, 70.0], [18.1, 70.0], [18.2, 70.0], [18.3, 70.0], [18.4, 70.0], [18.5, 70.0], [18.6, 70.0], [18.7, 70.0], [18.8, 70.0], [18.9, 70.0], [19.0, 71.0], [19.1, 71.0], [19.2, 71.0], [19.3, 71.0], [19.4, 71.0], [19.5, 71.0], [19.6, 71.0], [19.7, 71.0], [19.8, 71.0], [19.9, 71.0], [20.0, 71.0], [20.1, 71.0], [20.2, 71.0], [20.3, 71.0], [20.4, 71.0], [20.5, 71.0], [20.6, 71.0], [20.7, 71.0], [20.8, 71.0], [20.9, 71.0], [21.0, 71.0], [21.1, 71.0], [21.2, 71.0], [21.3, 71.0], [21.4, 72.0], [21.5, 72.0], [21.6, 72.0], [21.7, 72.0], [21.8, 72.0], [21.9, 72.0], [22.0, 72.0], [22.1, 72.0], [22.2, 72.0], [22.3, 72.0], [22.4, 72.0], [22.5, 72.0], [22.6, 72.0], [22.7, 73.0], [22.8, 73.0], [22.9, 73.0], [23.0, 73.0], [23.1, 73.0], [23.2, 73.0], [23.3, 73.0], [23.4, 73.0], [23.5, 73.0], [23.6, 73.0], [23.7, 73.0], [23.8, 73.0], [23.9, 73.0], [24.0, 74.0], [24.1, 74.0], [24.2, 74.0], [24.3, 74.0], [24.4, 74.0], [24.5, 74.0], [24.6, 74.0], [24.7, 74.0], [24.8, 74.0], [24.9, 74.0], [25.0, 74.0], [25.1, 74.0], [25.2, 74.0], [25.3, 74.0], [25.4, 74.0], [25.5, 74.0], [25.6, 74.0], [25.7, 75.0], [25.8, 75.0], [25.9, 75.0], [26.0, 75.0], [26.1, 75.0], [26.2, 75.0], [26.3, 75.0], [26.4, 76.0], [26.5, 76.0], [26.6, 76.0], [26.7, 76.0], [26.8, 76.0], [26.9, 76.0], [27.0, 76.0], [27.1, 76.0], [27.2, 76.0], [27.3, 76.0], [27.4, 76.0], [27.5, 76.0], [27.6, 76.0], [27.7, 76.0], [27.8, 76.0], [27.9, 76.0], [28.0, 76.0], [28.1, 76.0], [28.2, 76.0], [28.3, 76.0], [28.4, 76.0], [28.5, 76.0], [28.6, 76.0], [28.7, 76.0], [28.8, 76.0], [28.9, 76.0], [29.0, 76.0], [29.1, 76.0], [29.2, 76.0], [29.3, 76.0], [29.4, 76.0], [29.5, 76.0], [29.6, 76.0], [29.7, 76.0], [29.8, 76.0], [29.9, 76.0], [30.0, 76.0], [30.1, 76.0], [30.2, 76.0], [30.3, 76.0], [30.4, 76.0], [30.5, 76.0], [30.6, 76.0], [30.7, 76.0], [30.8, 76.0], [30.9, 76.0], [31.0, 76.0], [31.1, 76.0], [31.2, 76.0], [31.3, 76.0], [31.4, 77.0], [31.5, 77.0], [31.6, 77.0], [31.7, 77.0], [31.8, 77.0], [31.9, 77.0], [32.0, 77.0], [32.1, 77.0], [32.2, 77.0], [32.3, 77.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 78.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 79.0], [34.1, 79.0], [34.2, 79.0], [34.3, 79.0], [34.4, 79.0], [34.5, 79.0], [34.6, 79.0], [34.7, 79.0], [34.8, 79.0], [34.9, 79.0], [35.0, 79.0], [35.1, 79.0], [35.2, 79.0], [35.3, 79.0], [35.4, 79.0], [35.5, 79.0], [35.6, 79.0], [35.7, 79.0], [35.8, 79.0], [35.9, 79.0], [36.0, 79.0], [36.1, 79.0], [36.2, 79.0], [36.3, 79.0], [36.4, 79.0], [36.5, 79.0], [36.6, 79.0], [36.7, 80.0], [36.8, 80.0], [36.9, 80.0], [37.0, 80.0], [37.1, 80.0], [37.2, 80.0], [37.3, 80.0], [37.4, 80.0], [37.5, 80.0], [37.6, 80.0], [37.7, 81.0], [37.8, 81.0], [37.9, 81.0], [38.0, 81.0], [38.1, 81.0], [38.2, 81.0], [38.3, 81.0], [38.4, 81.0], [38.5, 81.0], [38.6, 81.0], [38.7, 81.0], [38.8, 81.0], [38.9, 81.0], [39.0, 81.0], [39.1, 81.0], [39.2, 81.0], [39.3, 81.0], [39.4, 81.0], [39.5, 81.0], [39.6, 81.0], [39.7, 81.0], [39.8, 81.0], [39.9, 81.0], [40.0, 82.0], [40.1, 82.0], [40.2, 82.0], [40.3, 82.0], [40.4, 83.0], [40.5, 83.0], [40.6, 83.0], [40.7, 83.0], [40.8, 83.0], [40.9, 83.0], [41.0, 83.0], [41.1, 83.0], [41.2, 83.0], [41.3, 83.0], [41.4, 84.0], [41.5, 84.0], [41.6, 84.0], [41.7, 85.0], [41.8, 85.0], [41.9, 85.0], [42.0, 85.0], [42.1, 85.0], [42.2, 85.0], [42.3, 85.0], [42.4, 86.0], [42.5, 86.0], [42.6, 86.0], [42.7, 86.0], [42.8, 86.0], [42.9, 86.0], [43.0, 86.0], [43.1, 86.0], [43.2, 86.0], [43.3, 86.0], [43.4, 86.0], [43.5, 86.0], [43.6, 86.0], [43.7, 87.0], [43.8, 87.0], [43.9, 87.0], [44.0, 87.0], [44.1, 87.0], [44.2, 87.0], [44.3, 87.0], [44.4, 87.0], [44.5, 87.0], [44.6, 87.0], [44.7, 87.0], [44.8, 87.0], [44.9, 87.0], [45.0, 87.0], [45.1, 87.0], [45.2, 87.0], [45.3, 87.0], [45.4, 88.0], [45.5, 88.0], [45.6, 88.0], [45.7, 88.0], [45.8, 88.0], [45.9, 88.0], [46.0, 89.0], [46.1, 89.0], [46.2, 89.0], [46.3, 89.0], [46.4, 89.0], [46.5, 89.0], [46.6, 89.0], [46.7, 89.0], [46.8, 89.0], [46.9, 89.0], [47.0, 89.0], [47.1, 89.0], [47.2, 89.0], [47.3, 89.0], [47.4, 90.0], [47.5, 90.0], [47.6, 90.0], [47.7, 90.0], [47.8, 90.0], [47.9, 90.0], [48.0, 90.0], [48.1, 90.0], [48.2, 90.0], [48.3, 90.0], [48.4, 90.0], [48.5, 90.0], [48.6, 90.0], [48.7, 90.0], [48.8, 90.0], [48.9, 90.0], [49.0, 90.0], [49.1, 90.0], [49.2, 90.0], [49.3, 90.0], [49.4, 90.0], [49.5, 90.0], [49.6, 90.0], [49.7, 90.0], [49.8, 90.0], [49.9, 90.0], [50.0, 90.0], [50.1, 90.0], [50.2, 90.0], [50.3, 90.0], [50.4, 90.0], [50.5, 90.0], [50.6, 90.0], [50.7, 90.0], [50.8, 90.0], [50.9, 90.0], [51.0, 90.0], [51.1, 90.0], [51.2, 90.0], [51.3, 90.0], [51.4, 91.0], [51.5, 91.0], [51.6, 91.0], [51.7, 91.0], [51.8, 91.0], [51.9, 91.0], [52.0, 91.0], [52.1, 91.0], [52.2, 91.0], [52.3, 91.0], [52.4, 91.0], [52.5, 91.0], [52.6, 91.0], [52.7, 92.0], [52.8, 92.0], [52.9, 92.0], [53.0, 92.0], [53.1, 92.0], [53.2, 92.0], [53.3, 92.0], [53.4, 92.0], [53.5, 92.0], [53.6, 92.0], [53.7, 92.0], [53.8, 92.0], [53.9, 92.0], [54.0, 93.0], [54.1, 93.0], [54.2, 93.0], [54.3, 93.0], [54.4, 93.0], [54.5, 93.0], [54.6, 93.0], [54.7, 93.0], [54.8, 93.0], [54.9, 93.0], [55.0, 93.0], [55.1, 93.0], [55.2, 93.0], [55.3, 93.0], [55.4, 94.0], [55.5, 94.0], [55.6, 94.0], [55.7, 94.0], [55.8, 94.0], [55.9, 94.0], [56.0, 94.0], [56.1, 94.0], [56.2, 94.0], [56.3, 94.0], [56.4, 95.0], [56.5, 95.0], [56.6, 95.0], [56.7, 95.0], [56.8, 95.0], [56.9, 95.0], [57.0, 95.0], [57.1, 95.0], [57.2, 95.0], [57.3, 95.0], [57.4, 95.0], [57.5, 95.0], [57.6, 95.0], [57.7, 95.0], [57.8, 95.0], [57.9, 95.0], [58.0, 95.0], [58.1, 95.0], [58.2, 95.0], [58.3, 95.0], [58.4, 96.0], [58.5, 96.0], [58.6, 96.0], [58.7, 96.0], [58.8, 96.0], [58.9, 96.0], [59.0, 96.0], [59.1, 96.0], [59.2, 96.0], [59.3, 96.0], [59.4, 96.0], [59.5, 96.0], [59.6, 96.0], [59.7, 96.0], [59.8, 96.0], [59.9, 96.0], [60.0, 96.0], [60.1, 96.0], [60.2, 96.0], [60.3, 96.0], [60.4, 96.0], [60.5, 96.0], [60.6, 96.0], [60.7, 96.0], [60.8, 96.0], [60.9, 96.0], [61.0, 97.0], [61.1, 97.0], [61.2, 97.0], [61.3, 97.0], [61.4, 97.0], [61.5, 97.0], [61.6, 97.0], [61.7, 97.0], [61.8, 97.0], [61.9, 97.0], [62.0, 97.0], [62.1, 97.0], [62.2, 97.0], [62.3, 97.0], [62.4, 97.0], [62.5, 97.0], [62.6, 97.0], [62.7, 97.0], [62.8, 97.0], [62.9, 97.0], [63.0, 97.0], [63.1, 97.0], [63.2, 97.0], [63.3, 97.0], [63.4, 97.0], [63.5, 97.0], [63.6, 97.0], [63.7, 97.0], [63.8, 97.0], [63.9, 97.0], [64.0, 97.0], [64.1, 97.0], [64.2, 97.0], [64.3, 97.0], [64.4, 97.0], [64.5, 97.0], [64.6, 97.0], [64.7, 98.0], [64.8, 98.0], [64.9, 98.0], [65.0, 98.0], [65.1, 98.0], [65.2, 98.0], [65.3, 98.0], [65.4, 98.0], [65.5, 98.0], [65.6, 98.0], [65.7, 98.0], [65.8, 98.0], [65.9, 98.0], [66.0, 98.0], [66.1, 98.0], [66.2, 98.0], [66.3, 98.0], [66.4, 98.0], [66.5, 98.0], [66.6, 98.0], [66.7, 99.0], [66.8, 99.0], [66.9, 99.0], [67.0, 99.0], [67.1, 99.0], [67.2, 99.0], [67.3, 99.0], [67.4, 99.0], [67.5, 99.0], [67.6, 99.0], [67.7, 99.0], [67.8, 99.0], [67.9, 99.0], [68.0, 99.0], [68.1, 99.0], [68.2, 99.0], [68.3, 99.0], [68.4, 99.0], [68.5, 99.0], [68.6, 99.0], [68.7, 99.0], [68.8, 99.0], [68.9, 99.0], [69.0, 100.0], [69.1, 100.0], [69.2, 100.0], [69.3, 100.0], [69.4, 100.0], [69.5, 100.0], [69.6, 100.0], [69.7, 100.0], [69.8, 100.0], [69.9, 100.0], [70.0, 100.0], [70.1, 100.0], [70.2, 100.0], [70.3, 100.0], [70.4, 100.0], [70.5, 100.0], [70.6, 100.0], [70.7, 100.0], [70.8, 100.0], [70.9, 100.0], [71.0, 100.0], [71.1, 100.0], [71.2, 100.0], [71.3, 100.0], [71.4, 100.0], [71.5, 100.0], [71.6, 100.0], [71.7, 101.0], [71.8, 101.0], [71.9, 101.0], [72.0, 101.0], [72.1, 101.0], [72.2, 101.0], [72.3, 101.0], [72.4, 101.0], [72.5, 101.0], [72.6, 101.0], [72.7, 101.0], [72.8, 101.0], [72.9, 101.0], [73.0, 101.0], [73.1, 101.0], [73.2, 101.0], [73.3, 101.0], [73.4, 101.0], [73.5, 101.0], [73.6, 101.0], [73.7, 101.0], [73.8, 101.0], [73.9, 101.0], [74.0, 101.0], [74.1, 101.0], [74.2, 101.0], [74.3, 101.0], [74.4, 101.0], [74.5, 101.0], [74.6, 101.0], [74.7, 101.0], [74.8, 101.0], [74.9, 101.0], [75.0, 101.0], [75.1, 101.0], [75.2, 101.0], [75.3, 101.0], [75.4, 102.0], [75.5, 102.0], [75.6, 102.0], [75.7, 102.0], [75.8, 102.0], [75.9, 102.0], [76.0, 102.0], [76.1, 102.0], [76.2, 102.0], [76.3, 102.0], [76.4, 102.0], [76.5, 102.0], [76.6, 102.0], [76.7, 102.0], [76.8, 102.0], [76.9, 102.0], [77.0, 102.0], [77.1, 102.0], [77.2, 102.0], [77.3, 102.0], [77.4, 102.0], [77.5, 102.0], [77.6, 102.0], [77.7, 102.0], [77.8, 102.0], [77.9, 102.0], [78.0, 102.0], [78.1, 102.0], [78.2, 102.0], [78.3, 102.0], [78.4, 102.0], [78.5, 102.0], [78.6, 102.0], [78.7, 103.0], [78.8, 103.0], [78.9, 103.0], [79.0, 103.0], [79.1, 103.0], [79.2, 103.0], [79.3, 103.0], [79.4, 103.0], [79.5, 103.0], [79.6, 103.0], [79.7, 103.0], [79.8, 103.0], [79.9, 103.0], [80.0, 103.0], [80.1, 103.0], [80.2, 103.0], [80.3, 103.0], [80.4, 103.0], [80.5, 103.0], [80.6, 103.0], [80.7, 103.0], [80.8, 103.0], [80.9, 103.0], [81.0, 103.0], [81.1, 103.0], [81.2, 103.0], [81.3, 103.0], [81.4, 104.0], [81.5, 104.0], [81.6, 104.0], [81.7, 104.0], [81.8, 104.0], [81.9, 104.0], [82.0, 104.0], [82.1, 104.0], [82.2, 104.0], [82.3, 104.0], [82.4, 104.0], [82.5, 104.0], [82.6, 104.0], [82.7, 104.0], [82.8, 104.0], [82.9, 104.0], [83.0, 104.0], [83.1, 104.0], [83.2, 104.0], [83.3, 104.0], [83.4, 104.0], [83.5, 104.0], [83.6, 104.0], [83.7, 104.0], [83.8, 104.0], [83.9, 104.0], [84.0, 104.0], [84.1, 104.0], [84.2, 104.0], [84.3, 104.0], [84.4, 104.0], [84.5, 104.0], [84.6, 104.0], [84.7, 105.0], [84.8, 105.0], [84.9, 105.0], [85.0, 105.0], [85.1, 105.0], [85.2, 105.0], [85.3, 105.0], [85.4, 105.0], [85.5, 105.0], [85.6, 105.0], [85.7, 105.0], [85.8, 105.0], [85.9, 105.0], [86.0, 106.0], [86.1, 106.0], [86.2, 106.0], [86.3, 106.0], [86.4, 106.0], [86.5, 106.0], [86.6, 106.0], [86.7, 106.0], [86.8, 106.0], [86.9, 106.0], [87.0, 106.0], [87.1, 106.0], [87.2, 106.0], [87.3, 106.0], [87.4, 106.0], [87.5, 106.0], [87.6, 106.0], [87.7, 107.0], [87.8, 107.0], [87.9, 107.0], [88.0, 107.0], [88.1, 107.0], [88.2, 107.0], [88.3, 107.0], [88.4, 107.0], [88.5, 107.0], [88.6, 107.0], [88.7, 108.0], [88.8, 108.0], [88.9, 108.0], [89.0, 108.0], [89.1, 108.0], [89.2, 108.0], [89.3, 108.0], [89.4, 108.0], [89.5, 108.0], [89.6, 108.0], [89.7, 108.0], [89.8, 108.0], [89.9, 108.0], [90.0, 108.0], [90.1, 108.0], [90.2, 108.0], [90.3, 108.0], [90.4, 108.0], [90.5, 108.0], [90.6, 108.0], [90.7, 109.0], [90.8, 109.0], [90.9, 109.0], [91.0, 109.0], [91.1, 109.0], [91.2, 109.0], [91.3, 109.0], [91.4, 109.0], [91.5, 109.0], [91.6, 109.0], [91.7, 109.0], [91.8, 109.0], [91.9, 109.0], [92.0, 109.0], [92.1, 109.0], [92.2, 109.0], [92.3, 109.0], [92.4, 109.0], [92.5, 109.0], [92.6, 109.0], [92.7, 109.0], [92.8, 109.0], [92.9, 109.0], [93.0, 110.0], [93.1, 110.0], [93.2, 110.0], [93.3, 110.0], [93.4, 110.0], [93.5, 110.0], [93.6, 110.0], [93.7, 110.0], [93.8, 110.0], [93.9, 110.0], [94.0, 110.0], [94.1, 110.0], [94.2, 110.0], [94.3, 110.0], [94.4, 111.0], [94.5, 111.0], [94.6, 111.0], [94.7, 111.0], [94.8, 111.0], [94.9, 111.0], [95.0, 111.0], [95.1, 111.0], [95.2, 111.0], [95.3, 111.0], [95.4, 111.0], [95.5, 111.0], [95.6, 111.0], [95.7, 112.0], [95.8, 112.0], [95.9, 112.0], [96.0, 112.0], [96.1, 112.0], [96.2, 112.0], [96.3, 112.0], [96.4, 113.0], [96.5, 113.0], [96.6, 113.0], [96.7, 113.0], [96.8, 113.0], [96.9, 113.0], [97.0, 114.0], [97.1, 114.0], [97.2, 114.0], [97.3, 114.0], [97.4, 114.0], [97.5, 114.0], [97.6, 114.0], [97.7, 115.0], [97.8, 115.0], [97.9, 115.0], [98.0, 115.0], [98.1, 115.0], [98.2, 115.0], [98.3, 115.0], [98.4, 115.0], [98.5, 115.0], [98.6, 115.0], [98.7, 115.0], [98.8, 115.0], [98.9, 115.0], [99.0, 116.0], [99.1, 116.0], [99.2, 116.0], [99.3, 116.0], [99.4, 116.0], [99.5, 116.0], [99.6, 116.0], [99.7, 117.0], [99.8, 117.0], [99.9, 117.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 93.0, "minX": 0.0, "maxY": 207.0, "series": [{"data": [[0.0, 207.0], [100.0, 93.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 100.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 300.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 300.0, "series": [{"data": [[0.0, 300.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 87.84, "minX": 1.68831054E12, "maxY": 87.84, "series": [{"data": [[1.68831054E12, 87.84]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831054E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 46.5, "minX": 1.0, "maxY": 114.0, "series": [{"data": [[2.0, 100.0], [3.0, 73.0], [4.0, 108.0], [8.0, 97.0], [9.0, 102.0], [11.0, 106.5], [12.0, 103.33333333333333], [13.0, 101.0], [16.0, 95.0], [17.0, 87.66666666666667], [21.0, 103.5], [23.0, 87.5], [24.0, 95.0], [26.0, 87.75], [28.0, 92.0], [29.0, 99.0], [33.0, 90.5], [32.0, 104.0], [35.0, 92.5], [34.0, 109.0], [37.0, 94.0], [39.0, 101.0], [38.0, 104.0], [43.0, 92.0], [45.0, 90.5], [48.0, 96.0], [51.0, 102.0], [50.0, 97.0], [53.0, 96.0], [54.0, 101.0], [57.0, 92.0], [59.0, 96.0], [58.0, 70.0], [61.0, 64.0], [60.0, 95.0], [63.0, 80.0], [62.0, 103.0], [67.0, 105.0], [66.0, 90.5], [64.0, 81.0], [70.0, 114.0], [69.0, 107.5], [75.0, 46.5], [74.0, 78.25], [72.0, 111.5], [78.0, 67.28571428571429], [76.0, 74.6], [79.0, 71.66666666666667], [83.0, 50.16666666666667], [81.0, 65.0], [80.0, 76.5], [86.0, 63.777777777777786], [85.0, 65.5], [87.0, 73.75], [84.0, 113.5], [90.0, 79.10000000000001], [89.0, 70.42857142857143], [88.0, 71.39999999999999], [91.0, 73.83333333333334], [92.0, 76.8181818181818], [95.0, 79.23076923076923], [94.0, 84.5], [93.0, 75.28571428571429], [98.0, 86.0], [99.0, 82.0], [97.0, 98.0], [96.0, 87.16666666666666], [101.0, 90.0], [100.0, 103.0], [102.0, 81.0], [106.0, 88.0], [107.0, 107.0], [105.0, 98.0], [104.0, 97.0], [111.0, 91.66666666666667], [109.0, 89.57142857142857], [110.0, 88.5], [108.0, 102.5], [112.0, 93.66666666666667], [114.0, 99.0], [118.0, 102.0], [117.0, 98.33333333333333], [121.0, 99.0], [120.0, 101.5], [127.0, 96.33333333333333], [126.0, 103.66666666666667], [125.0, 102.0], [134.0, 101.0], [133.0, 102.0], [132.0, 103.0], [131.0, 100.5], [129.0, 104.0], [128.0, 101.0], [143.0, 106.0], [142.0, 95.0], [150.0, 109.0], [149.0, 106.0], [148.0, 93.5], [146.0, 99.75], [147.0, 110.0], [145.0, 106.0], [154.0, 106.0], [153.0, 100.5], [158.0, 96.0], [156.0, 98.0], [155.0, 95.33333333333333], [160.0, 93.66666666666667], [1.0, 90.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[87.84, 86.39333333333326]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 160.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 480.0, "minX": 1.68831054E12, "maxY": 640.0, "series": [{"data": [[1.68831054E12, 480.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68831054E12, 640.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831054E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 86.39333333333326, "minX": 1.68831054E12, "maxY": 86.39333333333326, "series": [{"data": [[1.68831054E12, 86.39333333333326]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831054E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 86.3866666666667, "minX": 1.68831054E12, "maxY": 86.3866666666667, "series": [{"data": [[1.68831054E12, 86.3866666666667]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831054E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 3.4266666666666614, "minX": 1.68831054E12, "maxY": 3.4266666666666614, "series": [{"data": [[1.68831054E12, 3.4266666666666614]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831054E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 34.0, "minX": 1.68831054E12, "maxY": 117.0, "series": [{"data": [[1.68831054E12, 117.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68831054E12, 34.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68831054E12, 108.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68831054E12, 115.99000000000001]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68831054E12, 90.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68831054E12, 111.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831054E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 90.0, "minX": 300.0, "maxY": 90.0, "series": [{"data": [[300.0, 90.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 300.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 90.0, "minX": 300.0, "maxY": 90.0, "series": [{"data": [[300.0, 90.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 300.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.68831054E12, "maxY": 5.0, "series": [{"data": [[1.68831054E12, 5.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831054E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.68831054E12, "maxY": 5.0, "series": [{"data": [[1.68831054E12, 5.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831054E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.68831054E12, "maxY": 5.0, "series": [{"data": [[1.68831054E12, 5.0]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831054E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.0, "minX": 1.68831054E12, "maxY": 5.0, "series": [{"data": [[1.68831054E12, 5.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831054E12, "title": "Total Transactions Per Second"}},
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

