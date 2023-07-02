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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 231.0, "series": [{"data": [[0.0, 20.0], [0.1, 20.0], [0.2, 20.0], [0.3, 20.0], [0.4, 20.0], [0.5, 20.0], [0.6, 20.0], [0.7, 20.0], [0.8, 21.0], [0.9, 21.0], [1.0, 23.0], [1.1, 23.0], [1.2, 25.0], [1.3, 25.0], [1.4, 25.0], [1.5, 25.0], [1.6, 25.0], [1.7, 25.0], [1.8, 26.0], [1.9, 26.0], [2.0, 26.0], [2.1, 26.0], [2.2, 27.0], [2.3, 27.0], [2.4, 27.0], [2.5, 27.0], [2.6, 28.0], [2.7, 28.0], [2.8, 29.0], [2.9, 29.0], [3.0, 29.0], [3.1, 29.0], [3.2, 30.0], [3.3, 30.0], [3.4, 30.0], [3.5, 30.0], [3.6, 31.0], [3.7, 31.0], [3.8, 32.0], [3.9, 32.0], [4.0, 34.0], [4.1, 34.0], [4.2, 34.0], [4.3, 34.0], [4.4, 36.0], [4.5, 36.0], [4.6, 36.0], [4.7, 37.0], [4.8, 37.0], [4.9, 37.0], [5.0, 37.0], [5.1, 37.0], [5.2, 37.0], [5.3, 37.0], [5.4, 37.0], [5.5, 37.0], [5.6, 37.0], [5.7, 39.0], [5.8, 39.0], [5.9, 39.0], [6.0, 39.0], [6.1, 39.0], [6.2, 40.0], [6.3, 40.0], [6.4, 40.0], [6.5, 40.0], [6.6, 40.0], [6.7, 41.0], [6.8, 41.0], [6.9, 41.0], [7.0, 41.0], [7.1, 41.0], [7.2, 41.0], [7.3, 41.0], [7.4, 41.0], [7.5, 41.0], [7.6, 41.0], [7.7, 42.0], [7.8, 42.0], [7.9, 42.0], [8.0, 42.0], [8.1, 42.0], [8.2, 42.0], [8.3, 42.0], [8.4, 43.0], [8.5, 43.0], [8.6, 43.0], [8.7, 43.0], [8.8, 43.0], [8.9, 43.0], [9.0, 44.0], [9.1, 44.0], [9.2, 44.0], [9.3, 44.0], [9.4, 44.0], [9.5, 44.0], [9.6, 44.0], [9.7, 44.0], [9.8, 44.0], [9.9, 44.0], [10.0, 44.0], [10.1, 44.0], [10.2, 45.0], [10.3, 45.0], [10.4, 45.0], [10.5, 45.0], [10.6, 45.0], [10.7, 45.0], [10.8, 45.0], [10.9, 45.0], [11.0, 46.0], [11.1, 46.0], [11.2, 46.0], [11.3, 46.0], [11.4, 46.0], [11.5, 46.0], [11.6, 46.0], [11.7, 46.0], [11.8, 46.0], [11.9, 46.0], [12.0, 46.0], [12.1, 46.0], [12.2, 46.0], [12.3, 46.0], [12.4, 46.0], [12.5, 46.0], [12.6, 46.0], [12.7, 46.0], [12.8, 46.0], [12.9, 46.0], [13.0, 46.0], [13.1, 46.0], [13.2, 47.0], [13.3, 47.0], [13.4, 47.0], [13.5, 47.0], [13.6, 47.0], [13.7, 47.0], [13.8, 47.0], [13.9, 47.0], [14.0, 47.0], [14.1, 47.0], [14.2, 48.0], [14.3, 48.0], [14.4, 48.0], [14.5, 48.0], [14.6, 48.0], [14.7, 48.0], [14.8, 48.0], [14.9, 48.0], [15.0, 48.0], [15.1, 48.0], [15.2, 48.0], [15.3, 48.0], [15.4, 49.0], [15.5, 49.0], [15.6, 50.0], [15.7, 50.0], [15.8, 50.0], [15.9, 50.0], [16.0, 50.0], [16.1, 50.0], [16.2, 50.0], [16.3, 50.0], [16.4, 50.0], [16.5, 50.0], [16.6, 50.0], [16.7, 50.0], [16.8, 51.0], [16.9, 51.0], [17.0, 51.0], [17.1, 51.0], [17.2, 51.0], [17.3, 51.0], [17.4, 51.0], [17.5, 51.0], [17.6, 51.0], [17.7, 51.0], [17.8, 51.0], [17.9, 51.0], [18.0, 51.0], [18.1, 51.0], [18.2, 52.0], [18.3, 52.0], [18.4, 52.0], [18.5, 52.0], [18.6, 52.0], [18.7, 52.0], [18.8, 52.0], [18.9, 52.0], [19.0, 52.0], [19.1, 52.0], [19.2, 52.0], [19.3, 52.0], [19.4, 53.0], [19.5, 53.0], [19.6, 53.0], [19.7, 53.0], [19.8, 53.0], [19.9, 53.0], [20.0, 53.0], [20.1, 53.0], [20.2, 53.0], [20.3, 53.0], [20.4, 54.0], [20.5, 54.0], [20.6, 54.0], [20.7, 54.0], [20.8, 54.0], [20.9, 54.0], [21.0, 54.0], [21.1, 54.0], [21.2, 54.0], [21.3, 54.0], [21.4, 55.0], [21.5, 55.0], [21.6, 55.0], [21.7, 55.0], [21.8, 55.0], [21.9, 55.0], [22.0, 55.0], [22.1, 55.0], [22.2, 55.0], [22.3, 55.0], [22.4, 55.0], [22.5, 55.0], [22.6, 56.0], [22.7, 56.0], [22.8, 57.0], [22.9, 57.0], [23.0, 57.0], [23.1, 57.0], [23.2, 57.0], [23.3, 57.0], [23.4, 58.0], [23.5, 58.0], [23.6, 58.0], [23.7, 58.0], [23.8, 58.0], [23.9, 58.0], [24.0, 59.0], [24.1, 59.0], [24.2, 59.0], [24.3, 59.0], [24.4, 59.0], [24.5, 59.0], [24.6, 59.0], [24.7, 59.0], [24.8, 60.0], [24.9, 60.0], [25.0, 60.0], [25.1, 60.0], [25.2, 62.0], [25.3, 62.0], [25.4, 62.0], [25.5, 62.0], [25.6, 63.0], [25.7, 63.0], [25.8, 63.0], [25.9, 63.0], [26.0, 63.0], [26.1, 63.0], [26.2, 64.0], [26.3, 64.0], [26.4, 64.0], [26.5, 64.0], [26.6, 65.0], [26.7, 65.0], [26.8, 65.0], [26.9, 65.0], [27.0, 65.0], [27.1, 65.0], [27.2, 65.0], [27.3, 65.0], [27.4, 66.0], [27.5, 66.0], [27.6, 66.0], [27.7, 66.0], [27.8, 66.0], [27.9, 66.0], [28.0, 67.0], [28.1, 67.0], [28.2, 67.0], [28.3, 67.0], [28.4, 68.0], [28.5, 68.0], [28.6, 68.0], [28.7, 68.0], [28.8, 68.0], [28.9, 68.0], [29.0, 69.0], [29.1, 69.0], [29.2, 69.0], [29.3, 69.0], [29.4, 69.0], [29.5, 69.0], [29.6, 69.0], [29.7, 69.0], [29.8, 69.0], [29.9, 69.0], [30.0, 70.0], [30.1, 70.0], [30.2, 70.0], [30.3, 70.0], [30.4, 70.0], [30.5, 70.0], [30.6, 70.0], [30.7, 70.0], [30.8, 71.0], [30.9, 71.0], [31.0, 71.0], [31.1, 71.0], [31.2, 72.0], [31.3, 72.0], [31.4, 72.0], [31.5, 72.0], [31.6, 72.0], [31.7, 72.0], [31.8, 73.0], [31.9, 73.0], [32.0, 73.0], [32.1, 73.0], [32.2, 73.0], [32.3, 73.0], [32.4, 73.0], [32.5, 73.0], [32.6, 74.0], [32.7, 74.0], [32.8, 75.0], [32.9, 75.0], [33.0, 75.0], [33.1, 75.0], [33.2, 75.0], [33.3, 75.0], [33.4, 76.0], [33.5, 76.0], [33.6, 76.0], [33.7, 76.0], [33.8, 76.0], [33.9, 76.0], [34.0, 76.0], [34.1, 76.0], [34.2, 76.0], [34.3, 76.0], [34.4, 77.0], [34.5, 77.0], [34.6, 77.0], [34.7, 77.0], [34.8, 77.0], [34.9, 77.0], [35.0, 77.0], [35.1, 77.0], [35.2, 78.0], [35.3, 78.0], [35.4, 78.0], [35.5, 78.0], [35.6, 78.0], [35.7, 78.0], [35.8, 79.0], [35.9, 79.0], [36.0, 79.0], [36.1, 79.0], [36.2, 79.0], [36.3, 79.0], [36.4, 79.0], [36.5, 79.0], [36.6, 79.0], [36.7, 79.0], [36.8, 79.0], [36.9, 79.0], [37.0, 80.0], [37.1, 80.0], [37.2, 80.0], [37.3, 80.0], [37.4, 80.0], [37.5, 80.0], [37.6, 80.0], [37.7, 80.0], [37.8, 80.0], [37.9, 80.0], [38.0, 80.0], [38.1, 80.0], [38.2, 80.0], [38.3, 80.0], [38.4, 80.0], [38.5, 80.0], [38.6, 81.0], [38.7, 81.0], [38.8, 81.0], [38.9, 81.0], [39.0, 81.0], [39.1, 81.0], [39.2, 81.0], [39.3, 81.0], [39.4, 82.0], [39.5, 82.0], [39.6, 83.0], [39.7, 83.0], [39.8, 83.0], [39.9, 85.0], [40.0, 85.0], [40.1, 86.0], [40.2, 86.0], [40.3, 87.0], [40.4, 87.0], [40.5, 89.0], [40.6, 89.0], [40.7, 89.0], [40.8, 89.0], [40.9, 89.0], [41.0, 89.0], [41.1, 89.0], [41.2, 89.0], [41.3, 92.0], [41.4, 92.0], [41.5, 92.0], [41.6, 92.0], [41.7, 92.0], [41.8, 92.0], [41.9, 95.0], [42.0, 95.0], [42.1, 96.0], [42.2, 96.0], [42.3, 96.0], [42.4, 96.0], [42.5, 98.0], [42.6, 98.0], [42.7, 99.0], [42.8, 99.0], [42.9, 99.0], [43.0, 99.0], [43.1, 101.0], [43.2, 101.0], [43.3, 101.0], [43.4, 101.0], [43.5, 102.0], [43.6, 102.0], [43.7, 103.0], [43.8, 103.0], [43.9, 104.0], [44.0, 104.0], [44.1, 104.0], [44.2, 104.0], [44.3, 104.0], [44.4, 104.0], [44.5, 105.0], [44.6, 105.0], [44.7, 105.0], [44.8, 105.0], [44.9, 105.0], [45.0, 105.0], [45.1, 106.0], [45.2, 106.0], [45.3, 106.0], [45.4, 106.0], [45.5, 106.0], [45.6, 106.0], [45.7, 106.0], [45.8, 106.0], [45.9, 107.0], [46.0, 107.0], [46.1, 107.0], [46.2, 107.0], [46.3, 107.0], [46.4, 107.0], [46.5, 107.0], [46.6, 107.0], [46.7, 109.0], [46.8, 109.0], [46.9, 109.0], [47.0, 109.0], [47.1, 109.0], [47.2, 109.0], [47.3, 114.0], [47.4, 114.0], [47.5, 114.0], [47.6, 114.0], [47.7, 117.0], [47.8, 117.0], [47.9, 131.0], [48.0, 131.0], [48.1, 132.0], [48.2, 132.0], [48.3, 135.0], [48.4, 135.0], [48.5, 135.0], [48.6, 135.0], [48.7, 137.0], [48.8, 137.0], [48.9, 139.0], [49.0, 139.0], [49.1, 142.0], [49.2, 142.0], [49.3, 142.0], [49.4, 142.0], [49.5, 145.0], [49.6, 145.0], [49.7, 145.0], [49.8, 145.0], [49.9, 146.0], [50.0, 146.0], [50.1, 146.0], [50.2, 146.0], [50.3, 146.0], [50.4, 146.0], [50.5, 147.0], [50.6, 147.0], [50.7, 147.0], [50.8, 147.0], [50.9, 147.0], [51.0, 147.0], [51.1, 148.0], [51.2, 148.0], [51.3, 148.0], [51.4, 148.0], [51.5, 149.0], [51.6, 149.0], [51.7, 149.0], [51.8, 149.0], [51.9, 149.0], [52.0, 149.0], [52.1, 150.0], [52.2, 150.0], [52.3, 150.0], [52.4, 150.0], [52.5, 151.0], [52.6, 151.0], [52.7, 151.0], [52.8, 151.0], [52.9, 152.0], [53.0, 152.0], [53.1, 152.0], [53.2, 152.0], [53.3, 153.0], [53.4, 153.0], [53.5, 153.0], [53.6, 153.0], [53.7, 153.0], [53.8, 153.0], [53.9, 154.0], [54.0, 154.0], [54.1, 154.0], [54.2, 154.0], [54.3, 155.0], [54.4, 155.0], [54.5, 155.0], [54.6, 155.0], [54.7, 155.0], [54.8, 155.0], [54.9, 155.0], [55.0, 155.0], [55.1, 155.0], [55.2, 155.0], [55.3, 155.0], [55.4, 155.0], [55.5, 155.0], [55.6, 155.0], [55.7, 156.0], [55.8, 156.0], [55.9, 156.0], [56.0, 156.0], [56.1, 156.0], [56.2, 156.0], [56.3, 156.0], [56.4, 156.0], [56.5, 156.0], [56.6, 156.0], [56.7, 157.0], [56.8, 157.0], [56.9, 157.0], [57.0, 157.0], [57.1, 157.0], [57.2, 157.0], [57.3, 158.0], [57.4, 158.0], [57.5, 158.0], [57.6, 158.0], [57.7, 158.0], [57.8, 158.0], [57.9, 158.0], [58.0, 158.0], [58.1, 158.0], [58.2, 158.0], [58.3, 158.0], [58.4, 158.0], [58.5, 158.0], [58.6, 158.0], [58.7, 159.0], [58.8, 159.0], [58.9, 159.0], [59.0, 159.0], [59.1, 159.0], [59.2, 159.0], [59.3, 159.0], [59.4, 159.0], [59.5, 159.0], [59.6, 159.0], [59.7, 159.0], [59.8, 159.0], [59.9, 159.0], [60.0, 159.0], [60.1, 160.0], [60.2, 160.0], [60.3, 160.0], [60.4, 160.0], [60.5, 160.0], [60.6, 160.0], [60.7, 160.0], [60.8, 160.0], [60.9, 160.0], [61.0, 160.0], [61.1, 160.0], [61.2, 160.0], [61.3, 161.0], [61.4, 161.0], [61.5, 161.0], [61.6, 161.0], [61.7, 161.0], [61.8, 161.0], [61.9, 161.0], [62.0, 161.0], [62.1, 161.0], [62.2, 161.0], [62.3, 161.0], [62.4, 161.0], [62.5, 161.0], [62.6, 161.0], [62.7, 161.0], [62.8, 161.0], [62.9, 161.0], [63.0, 161.0], [63.1, 161.0], [63.2, 161.0], [63.3, 162.0], [63.4, 162.0], [63.5, 162.0], [63.6, 162.0], [63.7, 162.0], [63.8, 162.0], [63.9, 162.0], [64.0, 162.0], [64.1, 162.0], [64.2, 162.0], [64.3, 163.0], [64.4, 163.0], [64.5, 163.0], [64.6, 163.0], [64.7, 164.0], [64.8, 164.0], [64.9, 164.0], [65.0, 164.0], [65.1, 164.0], [65.2, 164.0], [65.3, 164.0], [65.4, 164.0], [65.5, 165.0], [65.6, 165.0], [65.7, 165.0], [65.8, 165.0], [65.9, 165.0], [66.0, 165.0], [66.1, 165.0], [66.2, 165.0], [66.3, 166.0], [66.4, 166.0], [66.5, 166.0], [66.6, 166.0], [66.7, 167.0], [66.8, 167.0], [66.9, 167.0], [67.0, 167.0], [67.1, 167.0], [67.2, 167.0], [67.3, 167.0], [67.4, 167.0], [67.5, 167.0], [67.6, 167.0], [67.7, 167.0], [67.8, 167.0], [67.9, 167.0], [68.0, 167.0], [68.1, 168.0], [68.2, 168.0], [68.3, 168.0], [68.4, 168.0], [68.5, 168.0], [68.6, 168.0], [68.7, 168.0], [68.8, 168.0], [68.9, 169.0], [69.0, 169.0], [69.1, 169.0], [69.2, 169.0], [69.3, 169.0], [69.4, 169.0], [69.5, 170.0], [69.6, 170.0], [69.7, 170.0], [69.8, 170.0], [69.9, 170.0], [70.0, 170.0], [70.1, 170.0], [70.2, 170.0], [70.3, 171.0], [70.4, 171.0], [70.5, 171.0], [70.6, 171.0], [70.7, 171.0], [70.8, 171.0], [70.9, 171.0], [71.0, 171.0], [71.1, 171.0], [71.2, 171.0], [71.3, 171.0], [71.4, 171.0], [71.5, 171.0], [71.6, 171.0], [71.7, 171.0], [71.8, 171.0], [71.9, 171.0], [72.0, 171.0], [72.1, 172.0], [72.2, 172.0], [72.3, 172.0], [72.4, 172.0], [72.5, 172.0], [72.6, 172.0], [72.7, 172.0], [72.8, 172.0], [72.9, 172.0], [73.0, 172.0], [73.1, 173.0], [73.2, 173.0], [73.3, 173.0], [73.4, 173.0], [73.5, 173.0], [73.6, 173.0], [73.7, 174.0], [73.8, 174.0], [73.9, 174.0], [74.0, 174.0], [74.1, 174.0], [74.2, 175.0], [74.3, 175.0], [74.4, 175.0], [74.5, 175.0], [74.6, 175.0], [74.7, 175.0], [74.8, 175.0], [74.9, 175.0], [75.0, 176.0], [75.1, 176.0], [75.2, 176.0], [75.3, 176.0], [75.4, 176.0], [75.5, 176.0], [75.6, 176.0], [75.7, 176.0], [75.8, 176.0], [75.9, 176.0], [76.0, 176.0], [76.1, 176.0], [76.2, 177.0], [76.3, 177.0], [76.4, 178.0], [76.5, 178.0], [76.6, 178.0], [76.7, 179.0], [76.8, 179.0], [76.9, 179.0], [77.0, 179.0], [77.1, 179.0], [77.2, 180.0], [77.3, 180.0], [77.4, 181.0], [77.5, 181.0], [77.6, 181.0], [77.7, 181.0], [77.8, 181.0], [77.9, 181.0], [78.0, 182.0], [78.1, 182.0], [78.2, 182.0], [78.3, 182.0], [78.4, 182.0], [78.5, 182.0], [78.6, 182.0], [78.7, 182.0], [78.8, 182.0], [78.9, 182.0], [79.0, 182.0], [79.1, 182.0], [79.2, 183.0], [79.3, 183.0], [79.4, 183.0], [79.5, 183.0], [79.6, 183.0], [79.7, 183.0], [79.8, 183.0], [79.9, 183.0], [80.0, 183.0], [80.1, 183.0], [80.2, 183.0], [80.3, 183.0], [80.4, 184.0], [80.5, 184.0], [80.6, 184.0], [80.7, 184.0], [80.8, 184.0], [80.9, 184.0], [81.0, 184.0], [81.1, 184.0], [81.2, 185.0], [81.3, 185.0], [81.4, 185.0], [81.5, 185.0], [81.6, 185.0], [81.7, 187.0], [81.8, 187.0], [81.9, 187.0], [82.0, 187.0], [82.1, 188.0], [82.2, 188.0], [82.3, 188.0], [82.4, 188.0], [82.5, 188.0], [82.6, 188.0], [82.7, 188.0], [82.8, 188.0], [82.9, 189.0], [83.0, 189.0], [83.1, 189.0], [83.2, 189.0], [83.3, 190.0], [83.4, 190.0], [83.5, 190.0], [83.6, 190.0], [83.7, 190.0], [83.8, 190.0], [83.9, 191.0], [84.0, 191.0], [84.1, 191.0], [84.2, 191.0], [84.3, 192.0], [84.4, 192.0], [84.5, 192.0], [84.6, 192.0], [84.7, 192.0], [84.8, 192.0], [84.9, 192.0], [85.0, 192.0], [85.1, 193.0], [85.2, 193.0], [85.3, 193.0], [85.4, 193.0], [85.5, 193.0], [85.6, 193.0], [85.7, 194.0], [85.8, 194.0], [85.9, 194.0], [86.0, 194.0], [86.1, 194.0], [86.2, 194.0], [86.3, 194.0], [86.4, 195.0], [86.5, 195.0], [86.6, 195.0], [86.7, 195.0], [86.8, 195.0], [86.9, 196.0], [87.0, 196.0], [87.1, 196.0], [87.2, 196.0], [87.3, 196.0], [87.4, 196.0], [87.5, 196.0], [87.6, 196.0], [87.7, 197.0], [87.8, 197.0], [87.9, 197.0], [88.0, 197.0], [88.1, 197.0], [88.2, 198.0], [88.3, 198.0], [88.4, 198.0], [88.5, 198.0], [88.6, 198.0], [88.7, 199.0], [88.8, 199.0], [88.9, 199.0], [89.0, 199.0], [89.1, 200.0], [89.2, 200.0], [89.3, 200.0], [89.4, 200.0], [89.5, 201.0], [89.6, 201.0], [89.7, 201.0], [89.8, 201.0], [89.9, 201.0], [90.0, 201.0], [90.1, 202.0], [90.2, 202.0], [90.3, 202.0], [90.4, 202.0], [90.5, 202.0], [90.6, 202.0], [90.7, 202.0], [90.8, 202.0], [90.9, 202.0], [91.0, 202.0], [91.1, 203.0], [91.2, 203.0], [91.3, 203.0], [91.4, 203.0], [91.5, 203.0], [91.6, 203.0], [91.7, 204.0], [91.8, 204.0], [91.9, 204.0], [92.0, 204.0], [92.1, 204.0], [92.2, 205.0], [92.3, 205.0], [92.4, 205.0], [92.5, 205.0], [92.6, 205.0], [92.7, 206.0], [92.8, 206.0], [92.9, 207.0], [93.0, 207.0], [93.1, 208.0], [93.2, 208.0], [93.3, 208.0], [93.4, 208.0], [93.5, 208.0], [93.6, 208.0], [93.7, 208.0], [93.8, 208.0], [93.9, 209.0], [94.0, 209.0], [94.1, 209.0], [94.2, 209.0], [94.3, 209.0], [94.4, 210.0], [94.5, 210.0], [94.6, 210.0], [94.7, 210.0], [94.8, 210.0], [94.9, 211.0], [95.0, 211.0], [95.1, 212.0], [95.2, 212.0], [95.3, 212.0], [95.4, 212.0], [95.5, 213.0], [95.6, 213.0], [95.7, 213.0], [95.8, 213.0], [95.9, 214.0], [96.0, 214.0], [96.1, 215.0], [96.2, 215.0], [96.3, 216.0], [96.4, 216.0], [96.5, 216.0], [96.6, 216.0], [96.7, 218.0], [96.8, 218.0], [96.9, 219.0], [97.0, 219.0], [97.1, 219.0], [97.2, 219.0], [97.3, 220.0], [97.4, 220.0], [97.5, 220.0], [97.6, 220.0], [97.7, 220.0], [97.8, 220.0], [97.9, 221.0], [98.0, 221.0], [98.1, 221.0], [98.2, 221.0], [98.3, 223.0], [98.4, 223.0], [98.5, 225.0], [98.6, 225.0], [98.7, 225.0], [98.8, 225.0], [98.9, 226.0], [99.0, 226.0], [99.1, 226.0], [99.2, 226.0], [99.3, 226.0], [99.4, 226.0], [99.5, 227.0], [99.6, 227.0], [99.7, 229.0], [99.8, 229.0], [99.9, 231.0], [100.0, 231.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 55.0, "minX": 0.0, "maxY": 230.0, "series": [{"data": [[0.0, 215.0], [100.0, 230.0], [200.0, 55.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 119.05399999999996, "minX": 1.6883106E12, "maxY": 119.05399999999996, "series": [{"data": [[1.6883106E12, 119.05399999999996]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 24.875, "minX": 3.0, "maxY": 225.0, "series": [{"data": [[3.0, 167.5], [6.0, 159.0], [7.0, 178.5], [9.0, 161.0], [13.0, 158.0], [14.0, 160.0], [16.0, 175.0], [17.0, 161.0], [19.0, 167.66666666666666], [20.0, 161.0], [22.0, 163.25], [24.0, 184.5], [25.0, 172.5], [27.0, 169.0], [28.0, 162.0], [29.0, 182.0], [31.0, 170.0], [33.0, 45.285714285714285], [32.0, 166.0], [35.0, 24.875], [34.0, 27.0], [36.0, 30.0], [39.0, 165.5], [40.0, 94.5], [41.0, 117.2], [43.0, 82.33333333333334], [42.0, 140.0], [44.0, 62.0], [45.0, 168.0], [48.0, 103.0], [49.0, 78.0909090909091], [50.0, 43.0], [51.0, 99.0], [52.0, 84.33333333333334], [53.0, 156.0], [55.0, 179.0], [54.0, 182.0], [57.0, 100.0], [58.0, 46.0], [59.0, 46.0], [60.0, 135.75], [63.0, 47.42857142857143], [62.0, 48.0], [64.0, 92.45454545454545], [65.0, 50.333333333333336], [66.0, 62.22222222222222], [67.0, 51.5], [69.0, 62.77777777777778], [70.0, 54.5], [68.0, 70.66666666666666], [71.0, 194.5], [75.0, 79.71428571428572], [73.0, 45.0], [72.0, 77.8], [74.0, 121.5], [77.0, 57.8], [76.0, 58.0], [78.0, 128.8], [79.0, 155.0], [82.0, 80.8], [83.0, 149.0], [81.0, 148.0], [86.0, 113.8], [87.0, 64.0], [84.0, 160.0], [90.0, 65.0], [91.0, 68.5], [88.0, 167.0], [95.0, 71.5], [93.0, 134.5], [94.0, 179.0], [92.0, 149.5], [96.0, 121.0], [97.0, 70.0], [99.0, 186.33333333333334], [101.0, 69.66666666666667], [103.0, 221.0], [105.0, 152.0], [106.0, 141.75], [107.0, 93.71428571428571], [108.0, 75.5], [110.0, 75.0], [111.0, 200.0], [109.0, 188.0], [115.0, 77.5], [114.0, 147.0], [113.0, 81.0], [112.0, 153.0], [116.0, 135.5], [119.0, 77.0], [118.0, 148.5], [117.0, 194.0], [123.0, 80.0], [121.0, 160.0], [122.0, 80.0], [120.0, 161.0], [125.0, 118.33333333333334], [126.0, 115.33333333333334], [127.0, 197.0], [124.0, 161.0], [132.0, 86.0], [133.0, 87.0], [131.0, 179.0], [129.0, 206.75], [136.0, 143.5], [137.0, 92.0], [138.0, 160.33333333333334], [143.0, 212.0], [142.0, 164.5], [141.0, 171.0], [140.0, 184.5], [151.0, 195.0], [149.0, 225.0], [144.0, 163.0], [156.0, 171.4], [155.0, 95.0], [154.0, 99.0], [152.0, 191.6], [161.0, 98.5], [160.0, 171.25], [167.0, 126.5], [166.0, 119.0], [165.0, 209.0], [164.0, 196.0], [169.0, 158.25], [168.0, 103.5], [170.0, 121.0], [171.0, 109.0], [172.0, 148.33333333333334], [175.0, 115.5], [173.0, 92.0], [183.0, 190.0], [182.0, 195.0], [179.0, 176.5], [177.0, 96.0], [176.0, 114.0], [191.0, 166.0], [190.0, 186.5], [187.0, 201.0], [186.0, 156.5], [185.0, 215.0], [199.0, 107.0], [198.0, 193.0], [196.0, 182.0], [195.0, 166.0], [194.0, 189.66666666666666], [205.0, 211.0], [204.0, 163.0], [203.0, 101.0], [202.0, 106.0], [201.0, 79.5], [215.0, 219.0], [214.0, 189.5], [212.0, 202.0], [211.0, 203.0], [210.0, 212.25], [209.0, 213.0], [223.0, 82.0], [222.0, 79.0], [221.0, 79.0], [220.0, 199.0], [219.0, 69.0], [218.0, 87.66666666666667], [230.0, 185.0], [229.0, 197.0], [228.0, 188.0], [226.0, 78.0], [225.0, 77.0], [224.0, 81.0], [239.0, 131.0], [238.0, 196.5], [236.0, 193.0], [234.0, 195.0], [233.0, 188.0], [244.0, 162.0], [245.0, 103.0], [246.0, 65.0], [243.0, 144.33333333333334], [240.0, 197.0], [248.0, 108.6], [254.0, 173.0], [253.0, 176.0], [252.0, 166.5], [251.0, 171.0], [249.0, 60.0], [271.0, 163.0], [265.0, 156.5], [270.0, 166.5], [269.0, 172.0], [268.0, 174.0], [258.0, 171.0], [257.0, 173.0], [267.0, 176.0], [266.0, 170.0], [264.0, 178.0], [263.0, 173.0], [262.0, 171.5], [261.0, 173.0], [272.0, 151.0], [276.0, 160.33333333333334], [273.0, 157.0], [274.0, 164.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[119.05399999999996, 122.99200000000003]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 276.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 800.0, "minX": 1.6883106E12, "maxY": 1066.6666666666667, "series": [{"data": [[1.6883106E12, 800.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883106E12, 1066.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 122.99200000000003, "minX": 1.6883106E12, "maxY": 122.99200000000003, "series": [{"data": [[1.6883106E12, 122.99200000000003]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 122.99, "minX": 1.6883106E12, "maxY": 122.99, "series": [{"data": [[1.6883106E12, 122.99]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.918, "minX": 1.6883106E12, "maxY": 1.918, "series": [{"data": [[1.6883106E12, 1.918]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.6883106E12, "maxY": 231.0, "series": [{"data": [[1.6883106E12, 231.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883106E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883106E12, 201.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883106E12, 226.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883106E12, 146.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883106E12, 211.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 55.0, "minX": 221.0, "maxY": 172.0, "series": [{"data": [[279.0, 172.0], [221.0, 55.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 279.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 55.0, "minX": 221.0, "maxY": 172.0, "series": [{"data": [[279.0, 172.0], [221.0, 55.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 279.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883106E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883106E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883106E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883106E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883106E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883106E12, 8.333333333333334]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883106E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883106E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Total Transactions Per Second"}},
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

