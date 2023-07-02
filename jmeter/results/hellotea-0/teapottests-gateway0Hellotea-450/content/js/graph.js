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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 270.0, "series": [{"data": [[0.0, 14.0], [0.1, 14.0], [0.2, 14.0], [0.3, 14.0], [0.4, 14.0], [0.5, 21.0], [0.6, 21.0], [0.7, 21.0], [0.8, 21.0], [0.9, 24.0], [1.0, 24.0], [1.1, 24.0], [1.2, 25.0], [1.3, 25.0], [1.4, 29.0], [1.5, 29.0], [1.6, 29.0], [1.7, 29.0], [1.8, 29.0], [1.9, 29.0], [2.0, 31.0], [2.1, 31.0], [2.2, 31.0], [2.3, 32.0], [2.4, 32.0], [2.5, 34.0], [2.6, 34.0], [2.7, 36.0], [2.8, 36.0], [2.9, 36.0], [3.0, 36.0], [3.1, 36.0], [3.2, 37.0], [3.3, 37.0], [3.4, 37.0], [3.5, 37.0], [3.6, 38.0], [3.7, 38.0], [3.8, 38.0], [3.9, 38.0], [4.0, 38.0], [4.1, 40.0], [4.2, 40.0], [4.3, 42.0], [4.4, 42.0], [4.5, 42.0], [4.6, 42.0], [4.7, 42.0], [4.8, 42.0], [4.9, 43.0], [5.0, 43.0], [5.1, 43.0], [5.2, 46.0], [5.3, 46.0], [5.4, 47.0], [5.5, 47.0], [5.6, 50.0], [5.7, 50.0], [5.8, 51.0], [5.9, 51.0], [6.0, 51.0], [6.1, 51.0], [6.2, 51.0], [6.3, 51.0], [6.4, 51.0], [6.5, 52.0], [6.6, 52.0], [6.7, 54.0], [6.8, 54.0], [6.9, 55.0], [7.0, 55.0], [7.1, 55.0], [7.2, 55.0], [7.3, 55.0], [7.4, 55.0], [7.5, 55.0], [7.6, 55.0], [7.7, 55.0], [7.8, 56.0], [7.9, 56.0], [8.0, 56.0], [8.1, 56.0], [8.2, 56.0], [8.3, 57.0], [8.4, 57.0], [8.5, 57.0], [8.6, 57.0], [8.7, 57.0], [8.8, 57.0], [8.9, 57.0], [9.0, 57.0], [9.1, 57.0], [9.2, 57.0], [9.3, 57.0], [9.4, 58.0], [9.5, 58.0], [9.6, 58.0], [9.7, 58.0], [9.8, 58.0], [9.9, 58.0], [10.0, 58.0], [10.1, 59.0], [10.2, 59.0], [10.3, 59.0], [10.4, 59.0], [10.5, 59.0], [10.6, 59.0], [10.7, 59.0], [10.8, 59.0], [10.9, 59.0], [11.0, 59.0], [11.1, 59.0], [11.2, 61.0], [11.3, 61.0], [11.4, 61.0], [11.5, 61.0], [11.6, 63.0], [11.7, 63.0], [11.8, 64.0], [11.9, 64.0], [12.0, 64.0], [12.1, 64.0], [12.2, 64.0], [12.3, 64.0], [12.4, 64.0], [12.5, 65.0], [12.6, 65.0], [12.7, 66.0], [12.8, 66.0], [12.9, 66.0], [13.0, 66.0], [13.1, 66.0], [13.2, 67.0], [13.3, 67.0], [13.4, 67.0], [13.5, 67.0], [13.6, 67.0], [13.7, 67.0], [13.8, 67.0], [13.9, 67.0], [14.0, 67.0], [14.1, 67.0], [14.2, 67.0], [14.3, 67.0], [14.4, 67.0], [14.5, 68.0], [14.6, 68.0], [14.7, 69.0], [14.8, 69.0], [14.9, 69.0], [15.0, 69.0], [15.1, 69.0], [15.2, 69.0], [15.3, 69.0], [15.4, 70.0], [15.5, 70.0], [15.6, 70.0], [15.7, 70.0], [15.8, 70.0], [15.9, 70.0], [16.0, 70.0], [16.1, 70.0], [16.2, 70.0], [16.3, 73.0], [16.4, 73.0], [16.5, 74.0], [16.6, 74.0], [16.7, 74.0], [16.8, 74.0], [16.9, 74.0], [17.0, 74.0], [17.1, 74.0], [17.2, 75.0], [17.3, 75.0], [17.4, 75.0], [17.5, 75.0], [17.6, 75.0], [17.7, 75.0], [17.8, 76.0], [17.9, 76.0], [18.0, 76.0], [18.1, 76.0], [18.2, 76.0], [18.3, 77.0], [18.4, 77.0], [18.5, 77.0], [18.6, 77.0], [18.7, 78.0], [18.8, 78.0], [18.9, 78.0], [19.0, 78.0], [19.1, 78.0], [19.2, 79.0], [19.3, 79.0], [19.4, 79.0], [19.5, 79.0], [19.6, 79.0], [19.7, 79.0], [19.8, 80.0], [19.9, 80.0], [20.0, 80.0], [20.1, 80.0], [20.2, 80.0], [20.3, 81.0], [20.4, 81.0], [20.5, 82.0], [20.6, 82.0], [20.7, 82.0], [20.8, 82.0], [20.9, 83.0], [21.0, 83.0], [21.1, 83.0], [21.2, 83.0], [21.3, 83.0], [21.4, 84.0], [21.5, 84.0], [21.6, 84.0], [21.7, 84.0], [21.8, 86.0], [21.9, 86.0], [22.0, 87.0], [22.1, 87.0], [22.2, 87.0], [22.3, 87.0], [22.4, 87.0], [22.5, 87.0], [22.6, 87.0], [22.7, 88.0], [22.8, 88.0], [22.9, 88.0], [23.0, 88.0], [23.1, 88.0], [23.2, 88.0], [23.3, 88.0], [23.4, 88.0], [23.5, 88.0], [23.6, 89.0], [23.7, 89.0], [23.8, 89.0], [23.9, 89.0], [24.0, 89.0], [24.1, 89.0], [24.2, 89.0], [24.3, 89.0], [24.4, 89.0], [24.5, 90.0], [24.6, 90.0], [24.7, 91.0], [24.8, 91.0], [24.9, 91.0], [25.0, 91.0], [25.1, 91.0], [25.2, 93.0], [25.3, 93.0], [25.4, 93.0], [25.5, 93.0], [25.6, 96.0], [25.7, 96.0], [25.8, 96.0], [25.9, 96.0], [26.0, 96.0], [26.1, 96.0], [26.2, 96.0], [26.3, 97.0], [26.4, 97.0], [26.5, 98.0], [26.6, 98.0], [26.7, 98.0], [26.8, 98.0], [26.9, 98.0], [27.0, 98.0], [27.1, 98.0], [27.2, 98.0], [27.3, 98.0], [27.4, 98.0], [27.5, 98.0], [27.6, 99.0], [27.7, 99.0], [27.8, 99.0], [27.9, 99.0], [28.0, 99.0], [28.1, 99.0], [28.2, 99.0], [28.3, 99.0], [28.4, 99.0], [28.5, 100.0], [28.6, 100.0], [28.7, 100.0], [28.8, 100.0], [28.9, 101.0], [29.0, 101.0], [29.1, 101.0], [29.2, 101.0], [29.3, 101.0], [29.4, 101.0], [29.5, 101.0], [29.6, 102.0], [29.7, 102.0], [29.8, 102.0], [29.9, 102.0], [30.0, 102.0], [30.1, 102.0], [30.2, 102.0], [30.3, 103.0], [30.4, 103.0], [30.5, 104.0], [30.6, 104.0], [30.7, 104.0], [30.8, 104.0], [30.9, 104.0], [31.0, 104.0], [31.1, 104.0], [31.2, 105.0], [31.3, 105.0], [31.4, 105.0], [31.5, 105.0], [31.6, 106.0], [31.7, 106.0], [31.8, 107.0], [31.9, 107.0], [32.0, 107.0], [32.1, 107.0], [32.2, 107.0], [32.3, 107.0], [32.4, 107.0], [32.5, 108.0], [32.6, 108.0], [32.7, 109.0], [32.8, 109.0], [32.9, 109.0], [33.0, 109.0], [33.1, 109.0], [33.2, 109.0], [33.3, 109.0], [33.4, 109.0], [33.5, 109.0], [33.6, 111.0], [33.7, 111.0], [33.8, 113.0], [33.9, 113.0], [34.0, 113.0], [34.1, 113.0], [34.2, 113.0], [34.3, 114.0], [34.4, 114.0], [34.5, 114.0], [34.6, 114.0], [34.7, 114.0], [34.8, 114.0], [34.9, 115.0], [35.0, 115.0], [35.1, 115.0], [35.2, 115.0], [35.3, 115.0], [35.4, 116.0], [35.5, 116.0], [35.6, 118.0], [35.7, 118.0], [35.8, 121.0], [35.9, 121.0], [36.0, 122.0], [36.1, 122.0], [36.2, 122.0], [36.3, 122.0], [36.4, 122.0], [36.5, 122.0], [36.6, 122.0], [36.7, 123.0], [36.8, 123.0], [36.9, 123.0], [37.0, 123.0], [37.1, 123.0], [37.2, 124.0], [37.3, 124.0], [37.4, 125.0], [37.5, 125.0], [37.6, 129.0], [37.7, 129.0], [37.8, 130.0], [37.9, 130.0], [38.0, 131.0], [38.1, 131.0], [38.2, 131.0], [38.3, 133.0], [38.4, 133.0], [38.5, 134.0], [38.6, 134.0], [38.7, 135.0], [38.8, 135.0], [38.9, 135.0], [39.0, 135.0], [39.1, 135.0], [39.2, 135.0], [39.3, 135.0], [39.4, 136.0], [39.5, 136.0], [39.6, 136.0], [39.7, 136.0], [39.8, 137.0], [39.9, 137.0], [40.0, 137.0], [40.1, 137.0], [40.2, 137.0], [40.3, 137.0], [40.4, 137.0], [40.5, 137.0], [40.6, 137.0], [40.7, 138.0], [40.8, 138.0], [40.9, 138.0], [41.0, 138.0], [41.1, 138.0], [41.2, 138.0], [41.3, 138.0], [41.4, 138.0], [41.5, 138.0], [41.6, 139.0], [41.7, 139.0], [41.8, 139.0], [41.9, 139.0], [42.0, 139.0], [42.1, 139.0], [42.2, 139.0], [42.3, 140.0], [42.4, 140.0], [42.5, 140.0], [42.6, 140.0], [42.7, 140.0], [42.8, 140.0], [42.9, 141.0], [43.0, 141.0], [43.1, 141.0], [43.2, 141.0], [43.3, 141.0], [43.4, 141.0], [43.5, 141.0], [43.6, 141.0], [43.7, 141.0], [43.8, 141.0], [43.9, 141.0], [44.0, 142.0], [44.1, 142.0], [44.2, 142.0], [44.3, 142.0], [44.4, 142.0], [44.5, 142.0], [44.6, 142.0], [44.7, 142.0], [44.8, 142.0], [44.9, 142.0], [45.0, 142.0], [45.1, 142.0], [45.2, 143.0], [45.3, 143.0], [45.4, 143.0], [45.5, 143.0], [45.6, 143.0], [45.7, 143.0], [45.8, 143.0], [45.9, 143.0], [46.0, 143.0], [46.1, 143.0], [46.2, 143.0], [46.3, 144.0], [46.4, 144.0], [46.5, 144.0], [46.6, 144.0], [46.7, 144.0], [46.8, 144.0], [46.9, 144.0], [47.0, 144.0], [47.1, 144.0], [47.2, 145.0], [47.3, 145.0], [47.4, 145.0], [47.5, 145.0], [47.6, 146.0], [47.7, 146.0], [47.8, 146.0], [47.9, 146.0], [48.0, 146.0], [48.1, 146.0], [48.2, 146.0], [48.3, 146.0], [48.4, 146.0], [48.5, 146.0], [48.6, 146.0], [48.7, 147.0], [48.8, 147.0], [48.9, 147.0], [49.0, 147.0], [49.1, 147.0], [49.2, 147.0], [49.3, 147.0], [49.4, 149.0], [49.5, 149.0], [49.6, 149.0], [49.7, 149.0], [49.8, 150.0], [49.9, 150.0], [50.0, 150.0], [50.1, 150.0], [50.2, 150.0], [50.3, 150.0], [50.4, 150.0], [50.5, 150.0], [50.6, 150.0], [50.7, 151.0], [50.8, 151.0], [50.9, 152.0], [51.0, 152.0], [51.1, 152.0], [51.2, 152.0], [51.3, 152.0], [51.4, 153.0], [51.5, 153.0], [51.6, 154.0], [51.7, 154.0], [51.8, 154.0], [51.9, 154.0], [52.0, 154.0], [52.1, 154.0], [52.2, 154.0], [52.3, 154.0], [52.4, 154.0], [52.5, 155.0], [52.6, 155.0], [52.7, 155.0], [52.8, 155.0], [52.9, 163.0], [53.0, 163.0], [53.1, 163.0], [53.2, 164.0], [53.3, 164.0], [53.4, 166.0], [53.5, 166.0], [53.6, 168.0], [53.7, 168.0], [53.8, 181.0], [53.9, 181.0], [54.0, 181.0], [54.1, 181.0], [54.2, 181.0], [54.3, 181.0], [54.4, 181.0], [54.5, 182.0], [54.6, 182.0], [54.7, 182.0], [54.8, 182.0], [54.9, 183.0], [55.0, 183.0], [55.1, 183.0], [55.2, 183.0], [55.3, 183.0], [55.4, 184.0], [55.5, 184.0], [55.6, 187.0], [55.7, 187.0], [55.8, 187.0], [55.9, 187.0], [56.0, 188.0], [56.1, 188.0], [56.2, 188.0], [56.3, 189.0], [56.4, 189.0], [56.5, 189.0], [56.6, 189.0], [56.7, 191.0], [56.8, 191.0], [56.9, 191.0], [57.0, 191.0], [57.1, 191.0], [57.2, 191.0], [57.3, 191.0], [57.4, 192.0], [57.5, 192.0], [57.6, 193.0], [57.7, 193.0], [57.8, 193.0], [57.9, 193.0], [58.0, 193.0], [58.1, 193.0], [58.2, 193.0], [58.3, 193.0], [58.4, 193.0], [58.5, 194.0], [58.6, 194.0], [58.7, 195.0], [58.8, 195.0], [58.9, 195.0], [59.0, 195.0], [59.1, 195.0], [59.2, 196.0], [59.3, 196.0], [59.4, 196.0], [59.5, 196.0], [59.6, 196.0], [59.7, 196.0], [59.8, 196.0], [59.9, 196.0], [60.0, 197.0], [60.1, 197.0], [60.2, 197.0], [60.3, 197.0], [60.4, 197.0], [60.5, 198.0], [60.6, 198.0], [60.7, 200.0], [60.8, 200.0], [60.9, 200.0], [61.0, 200.0], [61.1, 200.0], [61.2, 201.0], [61.3, 201.0], [61.4, 201.0], [61.5, 201.0], [61.6, 201.0], [61.7, 201.0], [61.8, 202.0], [61.9, 202.0], [62.0, 202.0], [62.1, 202.0], [62.2, 202.0], [62.3, 202.0], [62.4, 202.0], [62.5, 202.0], [62.6, 202.0], [62.7, 203.0], [62.8, 203.0], [62.9, 203.0], [63.0, 203.0], [63.1, 203.0], [63.2, 203.0], [63.3, 203.0], [63.4, 205.0], [63.5, 205.0], [63.6, 205.0], [63.7, 205.0], [63.8, 205.0], [63.9, 205.0], [64.0, 205.0], [64.1, 205.0], [64.2, 205.0], [64.3, 205.0], [64.4, 205.0], [64.5, 205.0], [64.6, 205.0], [64.7, 206.0], [64.8, 206.0], [64.9, 206.0], [65.0, 206.0], [65.1, 206.0], [65.2, 206.0], [65.3, 206.0], [65.4, 206.0], [65.5, 206.0], [65.6, 206.0], [65.7, 206.0], [65.8, 206.0], [65.9, 206.0], [66.0, 206.0], [66.1, 206.0], [66.2, 206.0], [66.3, 206.0], [66.4, 206.0], [66.5, 207.0], [66.6, 207.0], [66.7, 208.0], [66.8, 208.0], [66.9, 208.0], [67.0, 208.0], [67.1, 208.0], [67.2, 208.0], [67.3, 208.0], [67.4, 209.0], [67.5, 209.0], [67.6, 209.0], [67.7, 209.0], [67.8, 210.0], [67.9, 210.0], [68.0, 210.0], [68.1, 210.0], [68.2, 210.0], [68.3, 210.0], [68.4, 210.0], [68.5, 211.0], [68.6, 211.0], [68.7, 211.0], [68.8, 211.0], [68.9, 212.0], [69.0, 212.0], [69.1, 212.0], [69.2, 212.0], [69.3, 212.0], [69.4, 212.0], [69.5, 212.0], [69.6, 213.0], [69.7, 213.0], [69.8, 213.0], [69.9, 213.0], [70.0, 213.0], [70.1, 213.0], [70.2, 213.0], [70.3, 214.0], [70.4, 214.0], [70.5, 215.0], [70.6, 215.0], [70.7, 215.0], [70.8, 215.0], [70.9, 215.0], [71.0, 215.0], [71.1, 215.0], [71.2, 215.0], [71.3, 215.0], [71.4, 216.0], [71.5, 216.0], [71.6, 216.0], [71.7, 216.0], [71.8, 216.0], [71.9, 216.0], [72.0, 217.0], [72.1, 217.0], [72.2, 217.0], [72.3, 217.0], [72.4, 217.0], [72.5, 217.0], [72.6, 217.0], [72.7, 218.0], [72.8, 218.0], [72.9, 218.0], [73.0, 218.0], [73.1, 218.0], [73.2, 218.0], [73.3, 218.0], [73.4, 218.0], [73.5, 218.0], [73.6, 218.0], [73.7, 218.0], [73.8, 219.0], [73.9, 219.0], [74.0, 219.0], [74.1, 219.0], [74.2, 219.0], [74.3, 219.0], [74.4, 219.0], [74.5, 220.0], [74.6, 220.0], [74.7, 220.0], [74.8, 220.0], [74.9, 220.0], [75.0, 220.0], [75.1, 220.0], [75.2, 220.0], [75.3, 220.0], [75.4, 221.0], [75.5, 221.0], [75.6, 221.0], [75.7, 221.0], [75.8, 221.0], [75.9, 221.0], [76.0, 221.0], [76.1, 221.0], [76.2, 221.0], [76.3, 221.0], [76.4, 221.0], [76.5, 222.0], [76.6, 222.0], [76.7, 222.0], [76.8, 222.0], [76.9, 223.0], [77.0, 223.0], [77.1, 223.0], [77.2, 223.0], [77.3, 223.0], [77.4, 223.0], [77.5, 223.0], [77.6, 223.0], [77.7, 223.0], [77.8, 223.0], [77.9, 223.0], [78.0, 223.0], [78.1, 223.0], [78.2, 223.0], [78.3, 223.0], [78.4, 223.0], [78.5, 224.0], [78.6, 224.0], [78.7, 224.0], [78.8, 224.0], [78.9, 224.0], [79.0, 224.0], [79.1, 224.0], [79.2, 225.0], [79.3, 225.0], [79.4, 225.0], [79.5, 225.0], [79.6, 226.0], [79.7, 226.0], [79.8, 226.0], [79.9, 226.0], [80.0, 227.0], [80.1, 227.0], [80.2, 227.0], [80.3, 227.0], [80.4, 227.0], [80.5, 227.0], [80.6, 227.0], [80.7, 227.0], [80.8, 227.0], [80.9, 227.0], [81.0, 227.0], [81.1, 227.0], [81.2, 228.0], [81.3, 228.0], [81.4, 228.0], [81.5, 228.0], [81.6, 228.0], [81.7, 228.0], [81.8, 228.0], [81.9, 228.0], [82.0, 228.0], [82.1, 228.0], [82.2, 228.0], [82.3, 228.0], [82.4, 228.0], [82.5, 229.0], [82.6, 229.0], [82.7, 229.0], [82.8, 229.0], [82.9, 229.0], [83.0, 229.0], [83.1, 229.0], [83.2, 230.0], [83.3, 230.0], [83.4, 230.0], [83.5, 230.0], [83.6, 230.0], [83.7, 230.0], [83.8, 230.0], [83.9, 230.0], [84.0, 231.0], [84.1, 231.0], [84.2, 231.0], [84.3, 231.0], [84.4, 231.0], [84.5, 231.0], [84.6, 231.0], [84.7, 231.0], [84.8, 231.0], [84.9, 231.0], [85.0, 231.0], [85.1, 231.0], [85.2, 232.0], [85.3, 232.0], [85.4, 232.0], [85.5, 232.0], [85.6, 232.0], [85.7, 232.0], [85.8, 232.0], [85.9, 232.0], [86.0, 234.0], [86.1, 234.0], [86.2, 234.0], [86.3, 235.0], [86.4, 235.0], [86.5, 235.0], [86.6, 235.0], [86.7, 235.0], [86.8, 235.0], [86.9, 236.0], [87.0, 236.0], [87.1, 236.0], [87.2, 236.0], [87.3, 236.0], [87.4, 236.0], [87.5, 236.0], [87.6, 236.0], [87.7, 236.0], [87.8, 236.0], [87.9, 236.0], [88.0, 237.0], [88.1, 237.0], [88.2, 237.0], [88.3, 237.0], [88.4, 237.0], [88.5, 237.0], [88.6, 237.0], [88.7, 237.0], [88.8, 237.0], [88.9, 237.0], [89.0, 237.0], [89.1, 237.0], [89.2, 238.0], [89.3, 238.0], [89.4, 238.0], [89.5, 238.0], [89.6, 238.0], [89.7, 238.0], [89.8, 238.0], [89.9, 238.0], [90.0, 238.0], [90.1, 238.0], [90.2, 238.0], [90.3, 239.0], [90.4, 239.0], [90.5, 239.0], [90.6, 239.0], [90.7, 239.0], [90.8, 239.0], [90.9, 240.0], [91.0, 240.0], [91.1, 240.0], [91.2, 240.0], [91.3, 240.0], [91.4, 240.0], [91.5, 240.0], [91.6, 241.0], [91.7, 241.0], [91.8, 241.0], [91.9, 241.0], [92.0, 242.0], [92.1, 242.0], [92.2, 242.0], [92.3, 242.0], [92.4, 242.0], [92.5, 242.0], [92.6, 242.0], [92.7, 243.0], [92.8, 243.0], [92.9, 243.0], [93.0, 243.0], [93.1, 243.0], [93.2, 243.0], [93.3, 243.0], [93.4, 243.0], [93.5, 243.0], [93.6, 244.0], [93.7, 244.0], [93.8, 245.0], [93.9, 245.0], [94.0, 245.0], [94.1, 245.0], [94.2, 245.0], [94.3, 245.0], [94.4, 245.0], [94.5, 246.0], [94.6, 246.0], [94.7, 246.0], [94.8, 246.0], [94.9, 247.0], [95.0, 247.0], [95.1, 247.0], [95.2, 248.0], [95.3, 248.0], [95.4, 249.0], [95.5, 249.0], [95.6, 249.0], [95.7, 249.0], [95.8, 250.0], [95.9, 250.0], [96.0, 250.0], [96.1, 250.0], [96.2, 250.0], [96.3, 251.0], [96.4, 251.0], [96.5, 251.0], [96.6, 251.0], [96.7, 252.0], [96.8, 252.0], [96.9, 252.0], [97.0, 252.0], [97.1, 252.0], [97.2, 252.0], [97.3, 252.0], [97.4, 254.0], [97.5, 254.0], [97.6, 256.0], [97.7, 256.0], [97.8, 259.0], [97.9, 259.0], [98.0, 259.0], [98.1, 261.0], [98.2, 261.0], [98.3, 261.0], [98.4, 261.0], [98.5, 263.0], [98.6, 263.0], [98.7, 263.0], [98.8, 263.0], [98.9, 264.0], [99.0, 264.0], [99.1, 264.0], [99.2, 267.0], [99.3, 267.0], [99.4, 268.0], [99.5, 268.0], [99.6, 269.0], [99.7, 269.0], [99.8, 270.0], [99.9, 270.0], [100.0, 270.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 128.0, "minX": 0.0, "maxY": 177.0, "series": [{"data": [[0.0, 128.0], [100.0, 145.0], [200.0, 177.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 140.13777777777787, "minX": 1.6883106E12, "maxY": 140.13777777777787, "series": [{"data": [[1.6883106E12, 140.13777777777787]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.0, "maxY": 264.5, "series": [{"data": [[3.0, 233.5], [5.0, 208.0], [7.0, 195.5], [8.0, 232.0], [10.0, 213.0], [11.0, 220.5], [12.0, 207.0], [14.0, 229.5], [16.0, 231.66666666666666], [18.0, 236.5], [22.0, 203.0], [23.0, 206.0], [24.0, 228.0], [27.0, 209.0], [31.0, 233.5], [33.0, 234.0], [32.0, 225.0], [35.0, 14.0], [34.0, 213.0], [36.0, 14.0], [37.0, 202.5], [41.0, 191.0], [40.0, 192.0], [42.0, 21.0], [43.0, 200.0], [44.0, 21.0], [45.0, 208.0], [47.0, 125.75], [49.0, 185.5], [50.0, 201.5], [53.0, 140.8], [52.0, 29.0], [55.0, 32.0], [54.0, 31.0], [56.0, 167.0], [59.0, 235.5], [61.0, 37.5], [60.0, 40.0], [63.0, 115.5], [62.0, 223.0], [64.0, 129.8], [67.0, 182.0], [65.0, 183.0], [70.0, 226.0], [69.0, 206.0], [74.0, 42.5], [75.0, 167.25], [72.0, 202.0], [79.0, 52.333333333333336], [78.0, 225.0], [76.0, 181.0], [82.0, 51.0], [83.0, 88.6], [80.0, 144.0], [81.0, 74.66666666666667], [84.0, 58.166666666666664], [85.0, 100.25], [87.0, 244.0], [86.0, 264.5], [89.0, 130.6], [90.0, 220.0], [94.0, 220.0], [92.0, 230.33333333333334], [99.0, 247.0], [96.0, 246.66666666666666], [103.0, 69.5], [102.0, 238.0], [100.0, 227.33333333333334], [104.0, 129.33333333333334], [105.0, 188.75], [106.0, 74.0], [107.0, 195.33333333333334], [110.0, 239.5], [109.0, 224.0], [112.0, 75.0], [114.0, 77.0], [115.0, 254.5], [113.0, 228.0], [118.0, 105.8], [117.0, 146.5], [116.0, 78.0], [119.0, 248.0], [121.0, 151.5], [122.0, 231.5], [127.0, 142.0], [126.0, 120.33333333333334], [125.0, 86.0], [129.0, 196.66666666666666], [133.0, 108.25], [131.0, 89.66666666666666], [132.0, 163.5], [135.0, 193.0], [128.0, 250.0], [142.0, 180.75], [141.0, 128.8], [140.0, 131.0], [137.0, 98.5], [139.0, 102.0], [138.0, 207.75], [145.0, 196.75], [147.0, 104.66666666666667], [146.0, 162.5], [151.0, 121.0], [150.0, 117.5], [152.0, 115.0], [153.0, 107.33333333333333], [154.0, 112.5], [155.0, 104.0], [159.0, 218.0], [158.0, 116.5], [157.0, 118.0], [166.0, 213.5], [165.0, 203.33333333333334], [161.0, 263.0], [160.0, 224.0], [169.0, 172.75], [168.0, 147.66666666666666], [170.0, 114.33333333333333], [175.0, 206.0], [174.0, 201.0], [173.0, 200.0], [171.0, 216.0], [182.0, 223.5], [180.0, 218.66666666666666], [177.0, 242.0], [189.0, 197.0], [190.0, 124.0], [191.0, 144.66666666666666], [188.0, 250.0], [187.0, 226.0], [185.0, 229.5], [184.0, 224.0], [192.0, 122.0], [197.0, 229.0], [196.0, 169.2], [206.0, 233.0], [202.0, 240.0], [201.0, 239.0], [215.0, 144.0], [214.0, 74.0], [213.0, 79.0], [212.0, 77.0], [211.0, 81.0], [209.0, 84.0], [223.0, 146.45454545454544], [221.0, 142.66666666666666], [220.0, 141.0], [217.0, 136.5], [216.0, 178.75], [222.0, 157.6], [219.0, 164.25], [218.0, 218.0], [224.0, 101.5], [230.0, 137.66666666666666], [229.0, 117.66666666666666], [227.0, 101.5], [226.0, 144.25], [225.0, 144.0], [231.0, 104.75], [234.0, 152.0], [235.0, 154.0], [236.0, 172.85714285714286], [233.0, 170.66666666666666], [237.0, 108.5], [232.0, 206.0], [243.0, 87.25], [244.0, 111.5], [246.0, 117.5], [245.0, 42.0], [241.0, 66.33333333333333], [255.0, 193.0], [254.0, 193.0], [253.0, 193.0], [251.0, 195.0], [248.0, 66.0], [256.0, 58.0], [1.0, 209.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[140.13555555555578, 154.86444444444464]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 256.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 720.0, "minX": 1.6883106E12, "maxY": 960.0, "series": [{"data": [[1.6883106E12, 720.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883106E12, 960.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 154.86444444444464, "minX": 1.6883106E12, "maxY": 154.86444444444464, "series": [{"data": [[1.6883106E12, 154.86444444444464]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 154.8622222222223, "minX": 1.6883106E12, "maxY": 154.8622222222223, "series": [{"data": [[1.6883106E12, 154.8622222222223]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.8844444444444444, "minX": 1.6883106E12, "maxY": 1.8844444444444444, "series": [{"data": [[1.6883106E12, 1.8844444444444444]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 14.0, "minX": 1.6883106E12, "maxY": 270.0, "series": [{"data": [[1.6883106E12, 270.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883106E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883106E12, 238.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883106E12, 265.47]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883106E12, 150.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883106E12, 247.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 51.0, "minX": 49.0, "maxY": 184.0, "series": [{"data": [[49.0, 51.0], [401.0, 184.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 401.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 51.0, "minX": 49.0, "maxY": 184.0, "series": [{"data": [[49.0, 51.0], [401.0, 184.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 401.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883106E12, "maxY": 7.5, "series": [{"data": [[1.6883106E12, 7.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883106E12, "maxY": 7.5, "series": [{"data": [[1.6883106E12, 7.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883106E12, "maxY": 7.5, "series": [{"data": [[1.6883106E12, 7.5]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883106E12, "maxY": 7.5, "series": [{"data": [[1.6883106E12, 7.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Total Transactions Per Second"}},
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

