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
        data: {"result": {"minY": 47.0, "minX": 0.0, "maxY": 257.0, "series": [{"data": [[0.0, 47.0], [0.1, 47.0], [0.2, 47.0], [0.3, 47.0], [0.4, 47.0], [0.5, 47.0], [0.6, 47.0], [0.7, 47.0], [0.8, 48.0], [0.9, 48.0], [1.0, 49.0], [1.1, 50.0], [1.2, 50.0], [1.3, 56.0], [1.4, 56.0], [1.5, 61.0], [1.6, 61.0], [1.7, 63.0], [1.8, 63.0], [1.9, 63.0], [2.0, 63.0], [2.1, 64.0], [2.2, 65.0], [2.3, 65.0], [2.4, 66.0], [2.5, 66.0], [2.6, 66.0], [2.7, 66.0], [2.8, 66.0], [2.9, 66.0], [3.0, 66.0], [3.1, 66.0], [3.2, 66.0], [3.3, 67.0], [3.4, 67.0], [3.5, 67.0], [3.6, 67.0], [3.7, 68.0], [3.8, 68.0], [3.9, 68.0], [4.0, 68.0], [4.1, 68.0], [4.2, 68.0], [4.3, 68.0], [4.4, 69.0], [4.5, 69.0], [4.6, 69.0], [4.7, 69.0], [4.8, 70.0], [4.9, 70.0], [5.0, 70.0], [5.1, 70.0], [5.2, 70.0], [5.3, 70.0], [5.4, 70.0], [5.5, 71.0], [5.6, 71.0], [5.7, 72.0], [5.8, 72.0], [5.9, 72.0], [6.0, 72.0], [6.1, 72.0], [6.2, 72.0], [6.3, 72.0], [6.4, 73.0], [6.5, 73.0], [6.6, 74.0], [6.7, 74.0], [6.8, 75.0], [6.9, 75.0], [7.0, 76.0], [7.1, 76.0], [7.2, 76.0], [7.3, 77.0], [7.4, 77.0], [7.5, 77.0], [7.6, 77.0], [7.7, 77.0], [7.8, 77.0], [7.9, 78.0], [8.0, 78.0], [8.1, 78.0], [8.2, 78.0], [8.3, 78.0], [8.4, 79.0], [8.5, 79.0], [8.6, 79.0], [8.7, 79.0], [8.8, 80.0], [8.9, 80.0], [9.0, 80.0], [9.1, 80.0], [9.2, 80.0], [9.3, 80.0], [9.4, 80.0], [9.5, 80.0], [9.6, 80.0], [9.7, 82.0], [9.8, 82.0], [9.9, 82.0], [10.0, 82.0], [10.1, 82.0], [10.2, 83.0], [10.3, 83.0], [10.4, 83.0], [10.5, 83.0], [10.6, 83.0], [10.7, 83.0], [10.8, 83.0], [10.9, 83.0], [11.0, 85.0], [11.1, 85.0], [11.2, 85.0], [11.3, 85.0], [11.4, 85.0], [11.5, 85.0], [11.6, 85.0], [11.7, 86.0], [11.8, 86.0], [11.9, 86.0], [12.0, 86.0], [12.1, 86.0], [12.2, 86.0], [12.3, 86.0], [12.4, 86.0], [12.5, 86.0], [12.6, 86.0], [12.7, 86.0], [12.8, 86.0], [12.9, 86.0], [13.0, 87.0], [13.1, 87.0], [13.2, 87.0], [13.3, 87.0], [13.4, 87.0], [13.5, 87.0], [13.6, 87.0], [13.7, 87.0], [13.8, 87.0], [13.9, 88.0], [14.0, 88.0], [14.1, 88.0], [14.2, 89.0], [14.3, 89.0], [14.4, 89.0], [14.5, 89.0], [14.6, 89.0], [14.7, 89.0], [14.8, 89.0], [14.9, 89.0], [15.0, 89.0], [15.1, 89.0], [15.2, 89.0], [15.3, 89.0], [15.4, 89.0], [15.5, 89.0], [15.6, 89.0], [15.7, 89.0], [15.8, 89.0], [15.9, 90.0], [16.0, 90.0], [16.1, 90.0], [16.2, 90.0], [16.3, 90.0], [16.4, 90.0], [16.5, 90.0], [16.6, 90.0], [16.7, 90.0], [16.8, 90.0], [16.9, 90.0], [17.0, 90.0], [17.1, 91.0], [17.2, 91.0], [17.3, 91.0], [17.4, 91.0], [17.5, 91.0], [17.6, 91.0], [17.7, 91.0], [17.8, 91.0], [17.9, 91.0], [18.0, 91.0], [18.1, 91.0], [18.2, 92.0], [18.3, 92.0], [18.4, 92.0], [18.5, 92.0], [18.6, 92.0], [18.7, 92.0], [18.8, 92.0], [18.9, 92.0], [19.0, 92.0], [19.1, 93.0], [19.2, 93.0], [19.3, 93.0], [19.4, 93.0], [19.5, 93.0], [19.6, 93.0], [19.7, 93.0], [19.8, 93.0], [19.9, 93.0], [20.0, 94.0], [20.1, 94.0], [20.2, 94.0], [20.3, 94.0], [20.4, 94.0], [20.5, 94.0], [20.6, 95.0], [20.7, 95.0], [20.8, 95.0], [20.9, 95.0], [21.0, 95.0], [21.1, 95.0], [21.2, 95.0], [21.3, 95.0], [21.4, 95.0], [21.5, 95.0], [21.6, 95.0], [21.7, 96.0], [21.8, 96.0], [21.9, 96.0], [22.0, 97.0], [22.1, 97.0], [22.2, 97.0], [22.3, 97.0], [22.4, 97.0], [22.5, 97.0], [22.6, 97.0], [22.7, 97.0], [22.8, 97.0], [22.9, 97.0], [23.0, 98.0], [23.1, 98.0], [23.2, 98.0], [23.3, 98.0], [23.4, 98.0], [23.5, 98.0], [23.6, 98.0], [23.7, 99.0], [23.8, 99.0], [23.9, 99.0], [24.0, 99.0], [24.1, 99.0], [24.2, 100.0], [24.3, 100.0], [24.4, 100.0], [24.5, 100.0], [24.6, 100.0], [24.7, 100.0], [24.8, 100.0], [24.9, 100.0], [25.0, 100.0], [25.1, 100.0], [25.2, 100.0], [25.3, 100.0], [25.4, 100.0], [25.5, 101.0], [25.6, 101.0], [25.7, 102.0], [25.8, 102.0], [25.9, 102.0], [26.0, 102.0], [26.1, 102.0], [26.2, 103.0], [26.3, 103.0], [26.4, 103.0], [26.5, 103.0], [26.6, 103.0], [26.7, 103.0], [26.8, 103.0], [26.9, 103.0], [27.0, 104.0], [27.1, 104.0], [27.2, 104.0], [27.3, 104.0], [27.4, 104.0], [27.5, 105.0], [27.6, 105.0], [27.7, 105.0], [27.8, 105.0], [27.9, 105.0], [28.0, 105.0], [28.1, 105.0], [28.2, 105.0], [28.3, 105.0], [28.4, 105.0], [28.5, 105.0], [28.6, 106.0], [28.7, 106.0], [28.8, 107.0], [28.9, 107.0], [29.0, 109.0], [29.1, 110.0], [29.2, 110.0], [29.3, 110.0], [29.4, 110.0], [29.5, 110.0], [29.6, 110.0], [29.7, 111.0], [29.8, 111.0], [29.9, 111.0], [30.0, 111.0], [30.1, 112.0], [30.2, 113.0], [30.3, 113.0], [30.4, 114.0], [30.5, 114.0], [30.6, 114.0], [30.7, 114.0], [30.8, 114.0], [30.9, 114.0], [31.0, 115.0], [31.1, 115.0], [31.2, 115.0], [31.3, 116.0], [31.4, 116.0], [31.5, 117.0], [31.6, 117.0], [31.7, 118.0], [31.8, 118.0], [31.9, 119.0], [32.0, 119.0], [32.1, 120.0], [32.2, 120.0], [32.3, 120.0], [32.4, 120.0], [32.5, 120.0], [32.6, 121.0], [32.7, 121.0], [32.8, 121.0], [32.9, 121.0], [33.0, 122.0], [33.1, 122.0], [33.2, 122.0], [33.3, 122.0], [33.4, 122.0], [33.5, 123.0], [33.6, 123.0], [33.7, 123.0], [33.8, 123.0], [33.9, 123.0], [34.0, 123.0], [34.1, 123.0], [34.2, 123.0], [34.3, 123.0], [34.4, 124.0], [34.5, 124.0], [34.6, 124.0], [34.7, 124.0], [34.8, 125.0], [34.9, 125.0], [35.0, 125.0], [35.1, 125.0], [35.2, 125.0], [35.3, 126.0], [35.4, 126.0], [35.5, 126.0], [35.6, 126.0], [35.7, 126.0], [35.8, 126.0], [35.9, 126.0], [36.0, 126.0], [36.1, 127.0], [36.2, 127.0], [36.3, 127.0], [36.4, 127.0], [36.5, 127.0], [36.6, 127.0], [36.7, 127.0], [36.8, 128.0], [36.9, 128.0], [37.0, 128.0], [37.1, 128.0], [37.2, 128.0], [37.3, 128.0], [37.4, 128.0], [37.5, 129.0], [37.6, 129.0], [37.7, 129.0], [37.8, 129.0], [37.9, 129.0], [38.0, 129.0], [38.1, 130.0], [38.2, 130.0], [38.3, 130.0], [38.4, 130.0], [38.5, 130.0], [38.6, 130.0], [38.7, 130.0], [38.8, 130.0], [38.9, 130.0], [39.0, 131.0], [39.1, 131.0], [39.2, 131.0], [39.3, 131.0], [39.4, 131.0], [39.5, 132.0], [39.6, 132.0], [39.7, 132.0], [39.8, 132.0], [39.9, 132.0], [40.0, 132.0], [40.1, 132.0], [40.2, 132.0], [40.3, 132.0], [40.4, 132.0], [40.5, 132.0], [40.6, 132.0], [40.7, 132.0], [40.8, 132.0], [40.9, 132.0], [41.0, 133.0], [41.1, 134.0], [41.2, 134.0], [41.3, 134.0], [41.4, 134.0], [41.5, 134.0], [41.6, 134.0], [41.7, 134.0], [41.8, 134.0], [41.9, 134.0], [42.0, 134.0], [42.1, 134.0], [42.2, 135.0], [42.3, 135.0], [42.4, 135.0], [42.5, 135.0], [42.6, 135.0], [42.7, 135.0], [42.8, 136.0], [42.9, 136.0], [43.0, 136.0], [43.1, 136.0], [43.2, 136.0], [43.3, 136.0], [43.4, 136.0], [43.5, 136.0], [43.6, 136.0], [43.7, 136.0], [43.8, 136.0], [43.9, 136.0], [44.0, 136.0], [44.1, 137.0], [44.2, 137.0], [44.3, 137.0], [44.4, 137.0], [44.5, 137.0], [44.6, 137.0], [44.7, 137.0], [44.8, 137.0], [44.9, 137.0], [45.0, 138.0], [45.1, 138.0], [45.2, 138.0], [45.3, 138.0], [45.4, 138.0], [45.5, 138.0], [45.6, 138.0], [45.7, 139.0], [45.8, 139.0], [45.9, 139.0], [46.0, 139.0], [46.1, 139.0], [46.2, 139.0], [46.3, 139.0], [46.4, 139.0], [46.5, 139.0], [46.6, 139.0], [46.7, 139.0], [46.8, 140.0], [46.9, 140.0], [47.0, 140.0], [47.1, 141.0], [47.2, 141.0], [47.3, 141.0], [47.4, 141.0], [47.5, 141.0], [47.6, 141.0], [47.7, 141.0], [47.8, 141.0], [47.9, 141.0], [48.0, 141.0], [48.1, 142.0], [48.2, 142.0], [48.3, 142.0], [48.4, 142.0], [48.5, 142.0], [48.6, 143.0], [48.7, 143.0], [48.8, 143.0], [48.9, 143.0], [49.0, 143.0], [49.1, 143.0], [49.2, 143.0], [49.3, 143.0], [49.4, 143.0], [49.5, 144.0], [49.6, 144.0], [49.7, 144.0], [49.8, 144.0], [49.9, 144.0], [50.0, 144.0], [50.1, 144.0], [50.2, 144.0], [50.3, 144.0], [50.4, 144.0], [50.5, 144.0], [50.6, 145.0], [50.7, 145.0], [50.8, 145.0], [50.9, 145.0], [51.0, 146.0], [51.1, 146.0], [51.2, 146.0], [51.3, 146.0], [51.4, 146.0], [51.5, 146.0], [51.6, 146.0], [51.7, 147.0], [51.8, 147.0], [51.9, 147.0], [52.0, 147.0], [52.1, 149.0], [52.2, 149.0], [52.3, 149.0], [52.4, 149.0], [52.5, 149.0], [52.6, 150.0], [52.7, 150.0], [52.8, 150.0], [52.9, 150.0], [53.0, 151.0], [53.1, 151.0], [53.2, 151.0], [53.3, 151.0], [53.4, 151.0], [53.5, 153.0], [53.6, 153.0], [53.7, 153.0], [53.8, 153.0], [53.9, 153.0], [54.0, 153.0], [54.1, 153.0], [54.2, 153.0], [54.3, 153.0], [54.4, 154.0], [54.5, 154.0], [54.6, 154.0], [54.7, 154.0], [54.8, 155.0], [54.9, 155.0], [55.0, 155.0], [55.1, 155.0], [55.2, 155.0], [55.3, 156.0], [55.4, 156.0], [55.5, 156.0], [55.6, 156.0], [55.7, 156.0], [55.8, 156.0], [55.9, 157.0], [56.0, 157.0], [56.1, 157.0], [56.2, 157.0], [56.3, 157.0], [56.4, 158.0], [56.5, 158.0], [56.6, 158.0], [56.7, 158.0], [56.8, 159.0], [56.9, 159.0], [57.0, 159.0], [57.1, 160.0], [57.2, 160.0], [57.3, 160.0], [57.4, 160.0], [57.5, 161.0], [57.6, 161.0], [57.7, 161.0], [57.8, 161.0], [57.9, 162.0], [58.0, 162.0], [58.1, 164.0], [58.2, 165.0], [58.3, 165.0], [58.4, 165.0], [58.5, 165.0], [58.6, 165.0], [58.7, 165.0], [58.8, 165.0], [58.9, 165.0], [59.0, 166.0], [59.1, 166.0], [59.2, 166.0], [59.3, 167.0], [59.4, 167.0], [59.5, 169.0], [59.6, 169.0], [59.7, 169.0], [59.8, 169.0], [59.9, 169.0], [60.0, 169.0], [60.1, 169.0], [60.2, 170.0], [60.3, 170.0], [60.4, 170.0], [60.5, 170.0], [60.6, 171.0], [60.7, 171.0], [60.8, 172.0], [60.9, 172.0], [61.0, 172.0], [61.1, 172.0], [61.2, 172.0], [61.3, 172.0], [61.4, 172.0], [61.5, 173.0], [61.6, 173.0], [61.7, 173.0], [61.8, 173.0], [61.9, 173.0], [62.0, 173.0], [62.1, 173.0], [62.2, 173.0], [62.3, 173.0], [62.4, 174.0], [62.5, 174.0], [62.6, 174.0], [62.7, 174.0], [62.8, 175.0], [62.9, 175.0], [63.0, 175.0], [63.1, 176.0], [63.2, 176.0], [63.3, 176.0], [63.4, 176.0], [63.5, 176.0], [63.6, 176.0], [63.7, 177.0], [63.8, 177.0], [63.9, 177.0], [64.0, 177.0], [64.1, 177.0], [64.2, 177.0], [64.3, 177.0], [64.4, 177.0], [64.5, 177.0], [64.6, 179.0], [64.7, 179.0], [64.8, 179.0], [64.9, 179.0], [65.0, 179.0], [65.1, 180.0], [65.2, 180.0], [65.3, 180.0], [65.4, 180.0], [65.5, 180.0], [65.6, 180.0], [65.7, 180.0], [65.8, 180.0], [65.9, 181.0], [66.0, 181.0], [66.1, 181.0], [66.2, 181.0], [66.3, 181.0], [66.4, 181.0], [66.5, 181.0], [66.6, 181.0], [66.7, 181.0], [66.8, 181.0], [66.9, 181.0], [67.0, 181.0], [67.1, 181.0], [67.2, 181.0], [67.3, 181.0], [67.4, 181.0], [67.5, 182.0], [67.6, 182.0], [67.7, 182.0], [67.8, 182.0], [67.9, 182.0], [68.0, 182.0], [68.1, 182.0], [68.2, 182.0], [68.3, 182.0], [68.4, 183.0], [68.5, 183.0], [68.6, 183.0], [68.7, 183.0], [68.8, 183.0], [68.9, 183.0], [69.0, 183.0], [69.1, 183.0], [69.2, 183.0], [69.3, 183.0], [69.4, 183.0], [69.5, 183.0], [69.6, 183.0], [69.7, 183.0], [69.8, 183.0], [69.9, 184.0], [70.0, 184.0], [70.1, 184.0], [70.2, 184.0], [70.3, 184.0], [70.4, 184.0], [70.5, 184.0], [70.6, 184.0], [70.7, 184.0], [70.8, 184.0], [70.9, 184.0], [71.0, 184.0], [71.1, 184.0], [71.2, 184.0], [71.3, 184.0], [71.4, 184.0], [71.5, 185.0], [71.6, 185.0], [71.7, 185.0], [71.8, 185.0], [71.9, 185.0], [72.0, 185.0], [72.1, 186.0], [72.2, 186.0], [72.3, 186.0], [72.4, 186.0], [72.5, 186.0], [72.6, 186.0], [72.7, 186.0], [72.8, 186.0], [72.9, 186.0], [73.0, 186.0], [73.1, 186.0], [73.2, 186.0], [73.3, 187.0], [73.4, 187.0], [73.5, 187.0], [73.6, 187.0], [73.7, 187.0], [73.8, 187.0], [73.9, 187.0], [74.0, 187.0], [74.1, 187.0], [74.2, 187.0], [74.3, 187.0], [74.4, 187.0], [74.5, 187.0], [74.6, 187.0], [74.7, 187.0], [74.8, 187.0], [74.9, 187.0], [75.0, 187.0], [75.1, 188.0], [75.2, 188.0], [75.3, 188.0], [75.4, 188.0], [75.5, 188.0], [75.6, 188.0], [75.7, 188.0], [75.8, 188.0], [75.9, 188.0], [76.0, 188.0], [76.1, 188.0], [76.2, 189.0], [76.3, 189.0], [76.4, 189.0], [76.5, 189.0], [76.6, 189.0], [76.7, 189.0], [76.8, 189.0], [76.9, 189.0], [77.0, 189.0], [77.1, 189.0], [77.2, 189.0], [77.3, 190.0], [77.4, 190.0], [77.5, 190.0], [77.6, 190.0], [77.7, 190.0], [77.8, 190.0], [77.9, 190.0], [78.0, 190.0], [78.1, 190.0], [78.2, 190.0], [78.3, 190.0], [78.4, 190.0], [78.5, 190.0], [78.6, 191.0], [78.7, 191.0], [78.8, 191.0], [78.9, 191.0], [79.0, 191.0], [79.1, 191.0], [79.2, 191.0], [79.3, 191.0], [79.4, 191.0], [79.5, 191.0], [79.6, 191.0], [79.7, 191.0], [79.8, 191.0], [79.9, 192.0], [80.0, 192.0], [80.1, 192.0], [80.2, 192.0], [80.3, 192.0], [80.4, 192.0], [80.5, 192.0], [80.6, 193.0], [80.7, 193.0], [80.8, 193.0], [80.9, 193.0], [81.0, 193.0], [81.1, 194.0], [81.2, 194.0], [81.3, 194.0], [81.4, 194.0], [81.5, 194.0], [81.6, 194.0], [81.7, 194.0], [81.8, 194.0], [81.9, 194.0], [82.0, 194.0], [82.1, 195.0], [82.2, 195.0], [82.3, 195.0], [82.4, 195.0], [82.5, 195.0], [82.6, 195.0], [82.7, 195.0], [82.8, 195.0], [82.9, 195.0], [83.0, 195.0], [83.1, 196.0], [83.2, 196.0], [83.3, 197.0], [83.4, 197.0], [83.5, 197.0], [83.6, 197.0], [83.7, 197.0], [83.8, 197.0], [83.9, 197.0], [84.0, 197.0], [84.1, 197.0], [84.2, 197.0], [84.3, 197.0], [84.4, 197.0], [84.5, 197.0], [84.6, 197.0], [84.7, 197.0], [84.8, 198.0], [84.9, 198.0], [85.0, 198.0], [85.1, 198.0], [85.2, 198.0], [85.3, 198.0], [85.4, 198.0], [85.5, 198.0], [85.6, 198.0], [85.7, 198.0], [85.8, 198.0], [85.9, 200.0], [86.0, 200.0], [86.1, 200.0], [86.2, 200.0], [86.3, 200.0], [86.4, 201.0], [86.5, 201.0], [86.6, 201.0], [86.7, 201.0], [86.8, 202.0], [86.9, 202.0], [87.0, 202.0], [87.1, 202.0], [87.2, 202.0], [87.3, 202.0], [87.4, 202.0], [87.5, 202.0], [87.6, 202.0], [87.7, 204.0], [87.8, 204.0], [87.9, 205.0], [88.0, 205.0], [88.1, 205.0], [88.2, 206.0], [88.3, 206.0], [88.4, 206.0], [88.5, 206.0], [88.6, 206.0], [88.7, 206.0], [88.8, 206.0], [88.9, 206.0], [89.0, 206.0], [89.1, 207.0], [89.2, 207.0], [89.3, 207.0], [89.4, 207.0], [89.5, 208.0], [89.6, 208.0], [89.7, 208.0], [89.8, 208.0], [89.9, 208.0], [90.0, 208.0], [90.1, 208.0], [90.2, 208.0], [90.3, 208.0], [90.4, 208.0], [90.5, 208.0], [90.6, 208.0], [90.7, 208.0], [90.8, 209.0], [90.9, 209.0], [91.0, 211.0], [91.1, 211.0], [91.2, 211.0], [91.3, 212.0], [91.4, 212.0], [91.5, 213.0], [91.6, 213.0], [91.7, 213.0], [91.8, 213.0], [91.9, 213.0], [92.0, 213.0], [92.1, 214.0], [92.2, 214.0], [92.3, 214.0], [92.4, 215.0], [92.5, 215.0], [92.6, 216.0], [92.7, 216.0], [92.8, 216.0], [92.9, 216.0], [93.0, 216.0], [93.1, 217.0], [93.2, 217.0], [93.3, 217.0], [93.4, 217.0], [93.5, 218.0], [93.6, 218.0], [93.7, 218.0], [93.8, 218.0], [93.9, 218.0], [94.0, 218.0], [94.1, 218.0], [94.2, 218.0], [94.3, 218.0], [94.4, 218.0], [94.5, 218.0], [94.6, 219.0], [94.7, 219.0], [94.8, 219.0], [94.9, 219.0], [95.0, 219.0], [95.1, 222.0], [95.2, 222.0], [95.3, 224.0], [95.4, 224.0], [95.5, 224.0], [95.6, 224.0], [95.7, 224.0], [95.8, 224.0], [95.9, 225.0], [96.0, 225.0], [96.1, 226.0], [96.2, 226.0], [96.3, 226.0], [96.4, 226.0], [96.5, 226.0], [96.6, 228.0], [96.7, 228.0], [96.8, 228.0], [96.9, 228.0], [97.0, 229.0], [97.1, 230.0], [97.2, 230.0], [97.3, 231.0], [97.4, 231.0], [97.5, 232.0], [97.6, 232.0], [97.7, 232.0], [97.8, 232.0], [97.9, 234.0], [98.0, 234.0], [98.1, 235.0], [98.2, 238.0], [98.3, 238.0], [98.4, 243.0], [98.5, 243.0], [98.6, 243.0], [98.7, 243.0], [98.8, 244.0], [98.9, 244.0], [99.0, 246.0], [99.1, 247.0], [99.2, 247.0], [99.3, 247.0], [99.4, 247.0], [99.5, 249.0], [99.6, 249.0], [99.7, 250.0], [99.8, 250.0], [99.9, 257.0], [100.0, 257.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 78.0, "minX": 0.0, "maxY": 339.0, "series": [{"data": [[0.0, 133.0], [100.0, 339.0], [200.0, 78.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 550.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 550.0, "series": [{"data": [[0.0, 550.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 149.8309090909092, "minX": 1.68831102E12, "maxY": 149.8309090909092, "series": [{"data": [[1.68831102E12, 149.8309090909092]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831102E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 72.0, "minX": 3.0, "maxY": 250.0, "series": [{"data": [[3.0, 176.0], [5.0, 202.5], [6.0, 198.0], [8.0, 207.0], [9.0, 181.0], [12.0, 218.75], [13.0, 206.0], [14.0, 229.0], [16.0, 206.0], [17.0, 229.5], [18.0, 235.0], [19.0, 179.0], [20.0, 204.5], [22.0, 185.0], [23.0, 200.0], [24.0, 208.0], [27.0, 206.66666666666666], [31.0, 202.0], [35.0, 194.0], [34.0, 167.0], [37.0, 208.0], [36.0, 219.0], [40.0, 200.66666666666666], [45.0, 187.0], [44.0, 187.33333333333334], [46.0, 181.0], [48.0, 194.0], [50.0, 224.0], [52.0, 249.0], [55.0, 230.0], [54.0, 216.0], [59.0, 198.66666666666666], [63.0, 211.0], [66.0, 196.5], [64.0, 217.0], [69.0, 139.0], [68.0, 189.5], [75.0, 222.0], [72.0, 223.0], [77.0, 244.0], [83.0, 170.0], [82.0, 196.2], [80.0, 192.0], [87.0, 250.0], [84.0, 183.0], [91.0, 151.66666666666666], [90.0, 172.0], [88.0, 227.66666666666666], [93.0, 104.0], [92.0, 108.5], [95.0, 163.0], [99.0, 173.0], [98.0, 178.0], [102.0, 101.625], [103.0, 110.11111111111111], [101.0, 130.5], [100.0, 176.0], [105.0, 119.25], [104.0, 123.4], [107.0, 179.66666666666666], [106.0, 101.33333333333333], [111.0, 96.4], [110.0, 128.33333333333334], [109.0, 124.5], [108.0, 111.0], [115.0, 98.75], [113.0, 124.55555555555556], [112.0, 110.83333333333333], [114.0, 99.5], [119.0, 84.0], [117.0, 155.25], [116.0, 110.0], [118.0, 211.0], [123.0, 117.0], [121.0, 98.66666666666667], [122.0, 92.4], [120.0, 108.0], [124.0, 76.83333333333333], [127.0, 128.0], [126.0, 104.75], [125.0, 78.75], [135.0, 103.71428571428572], [134.0, 106.8], [133.0, 77.6], [131.0, 148.9], [130.0, 104.5], [129.0, 98.62500000000001], [128.0, 82.6], [132.0, 99.66666666666667], [136.0, 83.5], [137.0, 166.0], [139.0, 92.0], [142.0, 87.5], [140.0, 102.33333333333333], [138.0, 142.16666666666669], [141.0, 124.0], [143.0, 126.0], [149.0, 139.25], [150.0, 130.2], [148.0, 159.66666666666666], [146.0, 127.0], [151.0, 138.5], [147.0, 178.5], [145.0, 198.2], [152.0, 142.0], [153.0, 132.0], [154.0, 149.0], [156.0, 152.5], [155.0, 129.0], [159.0, 157.0], [157.0, 187.0], [161.0, 132.5], [167.0, 133.0], [166.0, 131.5], [164.0, 145.0], [163.0, 157.0], [162.0, 157.0], [160.0, 135.0], [175.0, 123.5], [172.0, 167.5], [171.0, 120.0], [169.0, 123.0], [168.0, 163.0], [177.0, 127.33333333333333], [179.0, 128.5], [182.0, 191.0], [181.0, 198.0], [180.0, 197.0], [178.0, 94.0], [176.0, 183.5], [184.0, 124.63636363636364], [190.0, 176.0], [187.0, 199.0], [185.0, 89.0], [199.0, 195.0], [198.0, 142.5], [196.0, 197.0], [194.0, 72.0], [193.0, 187.0], [192.0, 90.5], [206.0, 83.0], [205.0, 189.5], [203.0, 183.0], [202.0, 196.0], [201.0, 192.0], [200.0, 197.0], [211.0, 171.66666666666666], [210.0, 134.0], [209.0, 122.6], [214.0, 169.4], [215.0, 139.0], [208.0, 188.0], [217.0, 138.0], [216.0, 180.66666666666666], [223.0, 191.0], [221.0, 194.0], [219.0, 186.0], [218.0, 191.5], [229.0, 122.33333333333333], [226.0, 200.5], [225.0, 205.0], [238.0, 98.14285714285714], [234.0, 128.66666666666666], [239.0, 77.0], [233.0, 80.0], [232.0, 79.66666666666667], [247.0, 157.66666666666669], [245.0, 170.0], [243.0, 165.0], [241.0, 94.5], [240.0, 133.0], [242.0, 181.0], [250.0, 168.0], [248.0, 142.5], [255.0, 169.5], [254.0, 187.0], [249.0, 195.0], [257.0, 173.33333333333334], [261.0, 147.0], [263.0, 150.0], [260.0, 160.0], [258.0, 148.25], [259.0, 171.66666666666666], [256.0, 173.0], [270.0, 191.0], [267.0, 184.0], [266.0, 186.0], [265.0, 184.0], [264.0, 177.0], [269.0, 183.0], [275.0, 140.33333333333334], [274.0, 186.0], [272.0, 177.0], [291.0, 184.8125]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[149.8309090909092, 146.46363636363634]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 291.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 880.0, "minX": 1.68831102E12, "maxY": 1173.3333333333333, "series": [{"data": [[1.68831102E12, 880.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68831102E12, 1173.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831102E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 146.46363636363634, "minX": 1.68831102E12, "maxY": 146.46363636363634, "series": [{"data": [[1.68831102E12, 146.46363636363634]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831102E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 146.46181818181827, "minX": 1.68831102E12, "maxY": 146.46181818181827, "series": [{"data": [[1.68831102E12, 146.46181818181827]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831102E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.4581818181818191, "minX": 1.68831102E12, "maxY": 1.4581818181818191, "series": [{"data": [[1.68831102E12, 1.4581818181818191]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831102E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 47.0, "minX": 1.68831102E12, "maxY": 257.0, "series": [{"data": [[1.68831102E12, 257.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68831102E12, 47.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68831102E12, 208.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68831102E12, 246.49]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68831102E12, 144.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68831102E12, 220.3499999999998]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831102E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 144.0, "minX": 275.0, "maxY": 144.0, "series": [{"data": [[275.0, 144.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 275.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 144.0, "minX": 275.0, "maxY": 144.0, "series": [{"data": [[275.0, 144.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 275.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68831102E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68831102E12, 9.166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831102E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68831102E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68831102E12, 9.166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68831102E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68831102E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68831102E12, 9.166666666666666]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831102E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68831102E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68831102E12, 9.166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68831102E12, "title": "Total Transactions Per Second"}},
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

