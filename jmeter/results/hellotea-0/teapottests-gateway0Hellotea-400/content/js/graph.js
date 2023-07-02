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
        data: {"result": {"minY": 27.0, "minX": 0.0, "maxY": 260.0, "series": [{"data": [[0.0, 27.0], [0.1, 27.0], [0.2, 27.0], [0.3, 35.0], [0.4, 35.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 38.0], [0.9, 38.0], [1.0, 40.0], [1.1, 40.0], [1.2, 40.0], [1.3, 41.0], [1.4, 41.0], [1.5, 45.0], [1.6, 45.0], [1.7, 45.0], [1.8, 48.0], [1.9, 48.0], [2.0, 49.0], [2.1, 49.0], [2.2, 49.0], [2.3, 49.0], [2.4, 49.0], [2.5, 49.0], [2.6, 49.0], [2.7, 49.0], [2.8, 50.0], [2.9, 50.0], [3.0, 50.0], [3.1, 50.0], [3.2, 50.0], [3.3, 50.0], [3.4, 50.0], [3.5, 51.0], [3.6, 51.0], [3.7, 51.0], [3.8, 51.0], [3.9, 51.0], [4.0, 52.0], [4.1, 52.0], [4.2, 52.0], [4.3, 52.0], [4.4, 52.0], [4.5, 54.0], [4.6, 54.0], [4.7, 54.0], [4.8, 54.0], [4.9, 54.0], [5.0, 54.0], [5.1, 54.0], [5.2, 54.0], [5.3, 54.0], [5.4, 54.0], [5.5, 55.0], [5.6, 55.0], [5.7, 55.0], [5.8, 55.0], [5.9, 55.0], [6.0, 56.0], [6.1, 56.0], [6.2, 56.0], [6.3, 57.0], [6.4, 57.0], [6.5, 58.0], [6.6, 58.0], [6.7, 58.0], [6.8, 58.0], [6.9, 58.0], [7.0, 58.0], [7.1, 58.0], [7.2, 58.0], [7.3, 59.0], [7.4, 59.0], [7.5, 60.0], [7.6, 60.0], [7.7, 60.0], [7.8, 62.0], [7.9, 62.0], [8.0, 63.0], [8.1, 63.0], [8.2, 63.0], [8.3, 63.0], [8.4, 63.0], [8.5, 63.0], [8.6, 63.0], [8.7, 63.0], [8.8, 63.0], [8.9, 63.0], [9.0, 64.0], [9.1, 64.0], [9.2, 64.0], [9.3, 66.0], [9.4, 66.0], [9.5, 66.0], [9.6, 66.0], [9.7, 66.0], [9.8, 67.0], [9.9, 67.0], [10.0, 68.0], [10.1, 68.0], [10.2, 68.0], [10.3, 69.0], [10.4, 69.0], [10.5, 69.0], [10.6, 69.0], [10.7, 69.0], [10.8, 69.0], [10.9, 69.0], [11.0, 69.0], [11.1, 69.0], [11.2, 69.0], [11.3, 72.0], [11.4, 72.0], [11.5, 72.0], [11.6, 72.0], [11.7, 72.0], [11.8, 73.0], [11.9, 73.0], [12.0, 74.0], [12.1, 74.0], [12.2, 74.0], [12.3, 75.0], [12.4, 75.0], [12.5, 75.0], [12.6, 75.0], [12.7, 75.0], [12.8, 76.0], [12.9, 76.0], [13.0, 76.0], [13.1, 76.0], [13.2, 76.0], [13.3, 77.0], [13.4, 77.0], [13.5, 77.0], [13.6, 77.0], [13.7, 77.0], [13.8, 78.0], [13.9, 78.0], [14.0, 78.0], [14.1, 78.0], [14.2, 78.0], [14.3, 78.0], [14.4, 78.0], [14.5, 78.0], [14.6, 78.0], [14.7, 78.0], [14.8, 79.0], [14.9, 79.0], [15.0, 80.0], [15.1, 80.0], [15.2, 80.0], [15.3, 83.0], [15.4, 83.0], [15.5, 84.0], [15.6, 84.0], [15.7, 84.0], [15.8, 85.0], [15.9, 85.0], [16.0, 86.0], [16.1, 86.0], [16.2, 86.0], [16.3, 87.0], [16.4, 87.0], [16.5, 87.0], [16.6, 87.0], [16.7, 87.0], [16.8, 87.0], [16.9, 87.0], [17.0, 87.0], [17.1, 87.0], [17.2, 87.0], [17.3, 88.0], [17.4, 88.0], [17.5, 88.0], [17.6, 88.0], [17.7, 88.0], [17.8, 89.0], [17.9, 89.0], [18.0, 89.0], [18.1, 89.0], [18.2, 89.0], [18.3, 90.0], [18.4, 90.0], [18.5, 90.0], [18.6, 90.0], [18.7, 90.0], [18.8, 91.0], [18.9, 91.0], [19.0, 92.0], [19.1, 92.0], [19.2, 92.0], [19.3, 93.0], [19.4, 93.0], [19.5, 93.0], [19.6, 93.0], [19.7, 93.0], [19.8, 93.0], [19.9, 93.0], [20.0, 93.0], [20.1, 93.0], [20.2, 93.0], [20.3, 94.0], [20.4, 94.0], [20.5, 94.0], [20.6, 94.0], [20.7, 94.0], [20.8, 94.0], [20.9, 94.0], [21.0, 95.0], [21.1, 95.0], [21.2, 95.0], [21.3, 101.0], [21.4, 101.0], [21.5, 101.0], [21.6, 101.0], [21.7, 101.0], [21.8, 102.0], [21.9, 102.0], [22.0, 102.0], [22.1, 102.0], [22.2, 102.0], [22.3, 103.0], [22.4, 103.0], [22.5, 104.0], [22.6, 104.0], [22.7, 104.0], [22.8, 105.0], [22.9, 105.0], [23.0, 106.0], [23.1, 106.0], [23.2, 106.0], [23.3, 106.0], [23.4, 106.0], [23.5, 106.0], [23.6, 106.0], [23.7, 106.0], [23.8, 106.0], [23.9, 106.0], [24.0, 107.0], [24.1, 107.0], [24.2, 107.0], [24.3, 107.0], [24.4, 107.0], [24.5, 107.0], [24.6, 107.0], [24.7, 107.0], [24.8, 107.0], [24.9, 107.0], [25.0, 108.0], [25.1, 108.0], [25.2, 108.0], [25.3, 108.0], [25.4, 108.0], [25.5, 108.0], [25.6, 108.0], [25.7, 108.0], [25.8, 109.0], [25.9, 109.0], [26.0, 109.0], [26.1, 109.0], [26.2, 109.0], [26.3, 109.0], [26.4, 109.0], [26.5, 109.0], [26.6, 109.0], [26.7, 109.0], [26.8, 109.0], [26.9, 109.0], [27.0, 109.0], [27.1, 109.0], [27.2, 109.0], [27.3, 110.0], [27.4, 110.0], [27.5, 111.0], [27.6, 111.0], [27.7, 111.0], [27.8, 111.0], [27.9, 111.0], [28.0, 111.0], [28.1, 111.0], [28.2, 111.0], [28.3, 111.0], [28.4, 111.0], [28.5, 111.0], [28.6, 111.0], [28.7, 111.0], [28.8, 112.0], [28.9, 112.0], [29.0, 112.0], [29.1, 112.0], [29.2, 112.0], [29.3, 113.0], [29.4, 113.0], [29.5, 114.0], [29.6, 114.0], [29.7, 114.0], [29.8, 114.0], [29.9, 114.0], [30.0, 115.0], [30.1, 115.0], [30.2, 115.0], [30.3, 115.0], [30.4, 115.0], [30.5, 116.0], [30.6, 116.0], [30.7, 116.0], [30.8, 117.0], [30.9, 117.0], [31.0, 119.0], [31.1, 119.0], [31.2, 119.0], [31.3, 119.0], [31.4, 119.0], [31.5, 120.0], [31.6, 120.0], [31.7, 120.0], [31.8, 120.0], [31.9, 120.0], [32.0, 122.0], [32.1, 122.0], [32.2, 122.0], [32.3, 122.0], [32.4, 122.0], [32.5, 122.0], [32.6, 122.0], [32.7, 122.0], [32.8, 123.0], [32.9, 123.0], [33.0, 123.0], [33.1, 123.0], [33.2, 123.0], [33.3, 123.0], [33.4, 123.0], [33.5, 124.0], [33.6, 124.0], [33.7, 124.0], [33.8, 124.0], [33.9, 124.0], [34.0, 124.0], [34.1, 124.0], [34.2, 124.0], [34.3, 125.0], [34.4, 125.0], [34.5, 125.0], [34.6, 125.0], [34.7, 125.0], [34.8, 125.0], [34.9, 125.0], [35.0, 125.0], [35.1, 125.0], [35.2, 125.0], [35.3, 126.0], [35.4, 126.0], [35.5, 127.0], [35.6, 127.0], [35.7, 127.0], [35.8, 127.0], [35.9, 127.0], [36.0, 129.0], [36.1, 129.0], [36.2, 129.0], [36.3, 132.0], [36.4, 132.0], [36.5, 132.0], [36.6, 132.0], [36.7, 132.0], [36.8, 132.0], [36.9, 132.0], [37.0, 133.0], [37.1, 133.0], [37.2, 133.0], [37.3, 135.0], [37.4, 135.0], [37.5, 139.0], [37.6, 139.0], [37.7, 139.0], [37.8, 139.0], [37.9, 139.0], [38.0, 139.0], [38.1, 139.0], [38.2, 139.0], [38.3, 139.0], [38.4, 139.0], [38.5, 140.0], [38.6, 140.0], [38.7, 140.0], [38.8, 140.0], [38.9, 140.0], [39.0, 140.0], [39.1, 140.0], [39.2, 140.0], [39.3, 141.0], [39.4, 141.0], [39.5, 141.0], [39.6, 141.0], [39.7, 141.0], [39.8, 142.0], [39.9, 142.0], [40.0, 142.0], [40.1, 142.0], [40.2, 142.0], [40.3, 142.0], [40.4, 142.0], [40.5, 142.0], [40.6, 142.0], [40.7, 142.0], [40.8, 143.0], [40.9, 143.0], [41.0, 143.0], [41.1, 143.0], [41.2, 143.0], [41.3, 144.0], [41.4, 144.0], [41.5, 144.0], [41.6, 144.0], [41.7, 144.0], [41.8, 144.0], [41.9, 144.0], [42.0, 146.0], [42.1, 146.0], [42.2, 146.0], [42.3, 146.0], [42.4, 146.0], [42.5, 147.0], [42.6, 147.0], [42.7, 147.0], [42.8, 147.0], [42.9, 147.0], [43.0, 147.0], [43.1, 147.0], [43.2, 147.0], [43.3, 148.0], [43.4, 148.0], [43.5, 148.0], [43.6, 148.0], [43.7, 148.0], [43.8, 148.0], [43.9, 148.0], [44.0, 151.0], [44.1, 151.0], [44.2, 151.0], [44.3, 152.0], [44.4, 152.0], [44.5, 152.0], [44.6, 152.0], [44.7, 152.0], [44.8, 153.0], [44.9, 153.0], [45.0, 153.0], [45.1, 153.0], [45.2, 153.0], [45.3, 154.0], [45.4, 154.0], [45.5, 154.0], [45.6, 154.0], [45.7, 154.0], [45.8, 154.0], [45.9, 154.0], [46.0, 154.0], [46.1, 154.0], [46.2, 154.0], [46.3, 156.0], [46.4, 156.0], [46.5, 156.0], [46.6, 156.0], [46.7, 156.0], [46.8, 157.0], [46.9, 157.0], [47.0, 157.0], [47.1, 157.0], [47.2, 157.0], [47.3, 158.0], [47.4, 158.0], [47.5, 159.0], [47.6, 159.0], [47.7, 159.0], [47.8, 160.0], [47.9, 160.0], [48.0, 161.0], [48.1, 161.0], [48.2, 161.0], [48.3, 163.0], [48.4, 163.0], [48.5, 167.0], [48.6, 167.0], [48.7, 167.0], [48.8, 167.0], [48.9, 167.0], [49.0, 168.0], [49.1, 168.0], [49.2, 168.0], [49.3, 171.0], [49.4, 171.0], [49.5, 171.0], [49.6, 171.0], [49.7, 171.0], [49.8, 172.0], [49.9, 172.0], [50.0, 172.0], [50.1, 172.0], [50.2, 172.0], [50.3, 173.0], [50.4, 173.0], [50.5, 173.0], [50.6, 173.0], [50.7, 173.0], [50.8, 174.0], [50.9, 174.0], [51.0, 174.0], [51.1, 174.0], [51.2, 174.0], [51.3, 174.0], [51.4, 174.0], [51.5, 176.0], [51.6, 176.0], [51.7, 176.0], [51.8, 176.0], [51.9, 176.0], [52.0, 176.0], [52.1, 176.0], [52.2, 176.0], [52.3, 176.0], [52.4, 176.0], [52.5, 177.0], [52.6, 177.0], [52.7, 177.0], [52.8, 177.0], [52.9, 177.0], [53.0, 177.0], [53.1, 177.0], [53.2, 177.0], [53.3, 177.0], [53.4, 177.0], [53.5, 179.0], [53.6, 179.0], [53.7, 179.0], [53.8, 179.0], [53.9, 179.0], [54.0, 179.0], [54.1, 179.0], [54.2, 179.0], [54.3, 179.0], [54.4, 179.0], [54.5, 179.0], [54.6, 179.0], [54.7, 179.0], [54.8, 180.0], [54.9, 180.0], [55.0, 180.0], [55.1, 180.0], [55.2, 180.0], [55.3, 180.0], [55.4, 180.0], [55.5, 181.0], [55.6, 181.0], [55.7, 181.0], [55.8, 182.0], [55.9, 182.0], [56.0, 182.0], [56.1, 182.0], [56.2, 182.0], [56.3, 183.0], [56.4, 183.0], [56.5, 183.0], [56.6, 183.0], [56.7, 183.0], [56.8, 183.0], [56.9, 183.0], [57.0, 183.0], [57.1, 183.0], [57.2, 183.0], [57.3, 183.0], [57.4, 183.0], [57.5, 183.0], [57.6, 183.0], [57.7, 183.0], [57.8, 183.0], [57.9, 183.0], [58.0, 184.0], [58.1, 184.0], [58.2, 184.0], [58.3, 185.0], [58.4, 185.0], [58.5, 185.0], [58.6, 185.0], [58.7, 185.0], [58.8, 185.0], [58.9, 185.0], [59.0, 185.0], [59.1, 185.0], [59.2, 185.0], [59.3, 185.0], [59.4, 185.0], [59.5, 185.0], [59.6, 185.0], [59.7, 185.0], [59.8, 186.0], [59.9, 186.0], [60.0, 186.0], [60.1, 186.0], [60.2, 186.0], [60.3, 186.0], [60.4, 186.0], [60.5, 186.0], [60.6, 186.0], [60.7, 186.0], [60.8, 186.0], [60.9, 186.0], [61.0, 186.0], [61.1, 186.0], [61.2, 186.0], [61.3, 187.0], [61.4, 187.0], [61.5, 187.0], [61.6, 187.0], [61.7, 187.0], [61.8, 187.0], [61.9, 187.0], [62.0, 187.0], [62.1, 187.0], [62.2, 187.0], [62.3, 188.0], [62.4, 188.0], [62.5, 188.0], [62.6, 188.0], [62.7, 188.0], [62.8, 189.0], [62.9, 189.0], [63.0, 189.0], [63.1, 189.0], [63.2, 189.0], [63.3, 189.0], [63.4, 189.0], [63.5, 189.0], [63.6, 189.0], [63.7, 189.0], [63.8, 190.0], [63.9, 190.0], [64.0, 190.0], [64.1, 190.0], [64.2, 190.0], [64.3, 190.0], [64.4, 190.0], [64.5, 190.0], [64.6, 190.0], [64.7, 190.0], [64.8, 190.0], [64.9, 190.0], [65.0, 190.0], [65.1, 190.0], [65.2, 190.0], [65.3, 190.0], [65.4, 190.0], [65.5, 190.0], [65.6, 190.0], [65.7, 190.0], [65.8, 191.0], [65.9, 191.0], [66.0, 191.0], [66.1, 191.0], [66.2, 191.0], [66.3, 191.0], [66.4, 191.0], [66.5, 191.0], [66.6, 191.0], [66.7, 191.0], [66.8, 191.0], [66.9, 191.0], [67.0, 191.0], [67.1, 191.0], [67.2, 191.0], [67.3, 192.0], [67.4, 192.0], [67.5, 192.0], [67.6, 192.0], [67.7, 192.0], [67.8, 192.0], [67.9, 192.0], [68.0, 192.0], [68.1, 192.0], [68.2, 192.0], [68.3, 192.0], [68.4, 192.0], [68.5, 192.0], [68.6, 192.0], [68.7, 192.0], [68.8, 193.0], [68.9, 193.0], [69.0, 193.0], [69.1, 193.0], [69.2, 193.0], [69.3, 193.0], [69.4, 193.0], [69.5, 193.0], [69.6, 193.0], [69.7, 193.0], [69.8, 193.0], [69.9, 193.0], [70.0, 193.0], [70.1, 193.0], [70.2, 193.0], [70.3, 193.0], [70.4, 193.0], [70.5, 194.0], [70.6, 194.0], [70.7, 194.0], [70.8, 194.0], [70.9, 194.0], [71.0, 194.0], [71.1, 194.0], [71.2, 194.0], [71.3, 194.0], [71.4, 194.0], [71.5, 194.0], [71.6, 194.0], [71.7, 194.0], [71.8, 195.0], [71.9, 195.0], [72.0, 195.0], [72.1, 195.0], [72.2, 195.0], [72.3, 196.0], [72.4, 196.0], [72.5, 196.0], [72.6, 196.0], [72.7, 196.0], [72.8, 196.0], [72.9, 196.0], [73.0, 196.0], [73.1, 196.0], [73.2, 196.0], [73.3, 196.0], [73.4, 196.0], [73.5, 196.0], [73.6, 196.0], [73.7, 196.0], [73.8, 197.0], [73.9, 197.0], [74.0, 197.0], [74.1, 197.0], [74.2, 197.0], [74.3, 197.0], [74.4, 197.0], [74.5, 197.0], [74.6, 197.0], [74.7, 197.0], [74.8, 198.0], [74.9, 198.0], [75.0, 199.0], [75.1, 199.0], [75.2, 199.0], [75.3, 199.0], [75.4, 199.0], [75.5, 199.0], [75.6, 199.0], [75.7, 199.0], [75.8, 200.0], [75.9, 200.0], [76.0, 201.0], [76.1, 201.0], [76.2, 201.0], [76.3, 201.0], [76.4, 201.0], [76.5, 201.0], [76.6, 201.0], [76.7, 201.0], [76.8, 202.0], [76.9, 202.0], [77.0, 202.0], [77.1, 202.0], [77.2, 202.0], [77.3, 202.0], [77.4, 202.0], [77.5, 203.0], [77.6, 203.0], [77.7, 203.0], [77.8, 203.0], [77.9, 203.0], [78.0, 203.0], [78.1, 203.0], [78.2, 203.0], [78.3, 204.0], [78.4, 204.0], [78.5, 204.0], [78.6, 204.0], [78.7, 204.0], [78.8, 205.0], [78.9, 205.0], [79.0, 207.0], [79.1, 207.0], [79.2, 207.0], [79.3, 207.0], [79.4, 207.0], [79.5, 207.0], [79.6, 207.0], [79.7, 207.0], [79.8, 207.0], [79.9, 207.0], [80.0, 208.0], [80.1, 208.0], [80.2, 208.0], [80.3, 208.0], [80.4, 208.0], [80.5, 208.0], [80.6, 208.0], [80.7, 208.0], [80.8, 208.0], [80.9, 208.0], [81.0, 210.0], [81.1, 210.0], [81.2, 210.0], [81.3, 210.0], [81.4, 210.0], [81.5, 210.0], [81.6, 210.0], [81.7, 210.0], [81.8, 211.0], [81.9, 211.0], [82.0, 211.0], [82.1, 211.0], [82.2, 211.0], [82.3, 211.0], [82.4, 211.0], [82.5, 211.0], [82.6, 211.0], [82.7, 211.0], [82.8, 212.0], [82.9, 212.0], [83.0, 212.0], [83.1, 212.0], [83.2, 212.0], [83.3, 213.0], [83.4, 213.0], [83.5, 213.0], [83.6, 213.0], [83.7, 213.0], [83.8, 213.0], [83.9, 213.0], [84.0, 213.0], [84.1, 213.0], [84.2, 213.0], [84.3, 215.0], [84.4, 215.0], [84.5, 215.0], [84.6, 215.0], [84.7, 215.0], [84.8, 216.0], [84.9, 216.0], [85.0, 217.0], [85.1, 217.0], [85.2, 217.0], [85.3, 217.0], [85.4, 217.0], [85.5, 217.0], [85.6, 217.0], [85.7, 217.0], [85.8, 217.0], [85.9, 217.0], [86.0, 217.0], [86.1, 217.0], [86.2, 217.0], [86.3, 217.0], [86.4, 217.0], [86.5, 218.0], [86.6, 218.0], [86.7, 218.0], [86.8, 218.0], [86.9, 218.0], [87.0, 221.0], [87.1, 221.0], [87.2, 221.0], [87.3, 221.0], [87.4, 221.0], [87.5, 221.0], [87.6, 221.0], [87.7, 221.0], [87.8, 222.0], [87.9, 222.0], [88.0, 224.0], [88.1, 224.0], [88.2, 224.0], [88.3, 224.0], [88.4, 224.0], [88.5, 224.0], [88.6, 224.0], [88.7, 224.0], [88.8, 224.0], [88.9, 224.0], [89.0, 226.0], [89.1, 226.0], [89.2, 226.0], [89.3, 226.0], [89.4, 226.0], [89.5, 227.0], [89.6, 227.0], [89.7, 227.0], [89.8, 229.0], [89.9, 229.0], [90.0, 229.0], [90.1, 229.0], [90.2, 229.0], [90.3, 230.0], [90.4, 230.0], [90.5, 230.0], [90.6, 230.0], [90.7, 230.0], [90.8, 231.0], [90.9, 231.0], [91.0, 231.0], [91.1, 231.0], [91.2, 231.0], [91.3, 232.0], [91.4, 232.0], [91.5, 232.0], [91.6, 232.0], [91.7, 232.0], [91.8, 233.0], [91.9, 233.0], [92.0, 233.0], [92.1, 233.0], [92.2, 233.0], [92.3, 233.0], [92.4, 233.0], [92.5, 234.0], [92.6, 234.0], [92.7, 234.0], [92.8, 235.0], [92.9, 235.0], [93.0, 235.0], [93.1, 235.0], [93.2, 235.0], [93.3, 236.0], [93.4, 236.0], [93.5, 236.0], [93.6, 236.0], [93.7, 236.0], [93.8, 237.0], [93.9, 237.0], [94.0, 238.0], [94.1, 238.0], [94.2, 238.0], [94.3, 238.0], [94.4, 238.0], [94.5, 239.0], [94.6, 239.0], [94.7, 239.0], [94.8, 239.0], [94.9, 239.0], [95.0, 240.0], [95.1, 240.0], [95.2, 240.0], [95.3, 240.0], [95.4, 240.0], [95.5, 242.0], [95.6, 242.0], [95.7, 242.0], [95.8, 243.0], [95.9, 243.0], [96.0, 243.0], [96.1, 243.0], [96.2, 243.0], [96.3, 244.0], [96.4, 244.0], [96.5, 244.0], [96.6, 244.0], [96.7, 244.0], [96.8, 247.0], [96.9, 247.0], [97.0, 247.0], [97.1, 247.0], [97.2, 247.0], [97.3, 247.0], [97.4, 247.0], [97.5, 249.0], [97.6, 249.0], [97.7, 249.0], [97.8, 249.0], [97.9, 249.0], [98.0, 249.0], [98.1, 249.0], [98.2, 249.0], [98.3, 250.0], [98.4, 250.0], [98.5, 250.0], [98.6, 250.0], [98.7, 250.0], [98.8, 250.0], [98.9, 250.0], [99.0, 250.0], [99.1, 250.0], [99.2, 250.0], [99.3, 253.0], [99.4, 253.0], [99.5, 254.0], [99.6, 254.0], [99.7, 254.0], [99.8, 260.0], [99.9, 260.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 85.0, "minX": 0.0, "maxY": 218.0, "series": [{"data": [[0.0, 85.0], [100.0, 218.0], [200.0, 97.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 400.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 400.0, "series": [{"data": [[0.0, 400.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 138.60750000000007, "minX": 1.6883106E12, "maxY": 138.60750000000007, "series": [{"data": [[1.6883106E12, 138.60750000000007]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 41.0, "minX": 3.0, "maxY": 254.0, "series": [{"data": [[3.0, 196.0], [4.0, 187.5], [5.0, 194.0], [6.0, 190.0], [11.0, 187.0], [13.0, 186.16666666666669], [15.0, 186.5], [16.0, 179.0], [17.0, 189.0], [19.0, 180.0], [21.0, 183.33333333333334], [23.0, 190.0], [24.0, 176.0], [26.0, 185.0], [27.0, 177.0], [28.0, 197.0], [29.0, 184.0], [33.0, 201.0], [32.0, 193.0], [36.0, 211.66666666666666], [39.0, 233.0], [38.0, 202.0], [40.0, 182.5], [43.0, 203.0], [42.0, 194.0], [45.0, 240.0], [44.0, 211.0], [47.0, 187.0], [46.0, 167.0], [49.0, 229.0], [51.0, 207.0], [50.0, 194.5], [53.0, 189.5], [55.0, 183.0], [57.0, 224.0], [56.0, 176.5], [59.0, 214.5], [61.0, 179.5], [63.0, 204.0], [67.0, 201.0], [66.0, 180.0], [65.0, 163.0], [64.0, 214.5], [71.0, 196.0], [70.0, 192.5], [68.0, 186.0], [74.0, 183.0], [73.0, 191.0], [79.0, 182.5], [77.0, 196.0], [76.0, 169.5], [82.0, 191.0], [81.0, 189.5], [86.0, 179.5], [84.0, 178.0], [91.0, 183.0], [89.0, 203.0], [94.0, 190.0], [93.0, 192.0], [92.0, 240.0], [97.0, 234.0], [96.0, 221.0], [102.0, 254.0], [101.0, 213.0], [100.0, 217.75], [106.0, 217.0], [105.0, 253.0], [104.0, 231.0], [110.0, 120.5], [108.0, 204.5], [113.0, 101.25], [112.0, 139.2], [115.0, 239.0], [114.0, 208.0], [117.0, 240.0], [120.0, 120.2], [121.0, 158.33333333333334], [127.0, 71.0], [126.0, 201.0], [125.0, 212.0], [128.0, 106.0], [130.0, 68.0], [129.0, 148.0], [134.0, 99.85714285714286], [131.0, 149.75], [135.0, 91.83333333333334], [133.0, 87.5], [132.0, 163.5], [138.0, 153.83333333333334], [137.0, 180.0], [136.0, 91.0], [140.0, 93.0], [142.0, 166.75], [141.0, 210.0], [149.0, 106.0], [148.0, 110.0], [147.0, 112.0], [146.0, 192.5], [151.0, 151.33333333333334], [145.0, 202.5], [157.0, 164.0], [158.0, 110.0], [156.0, 123.0], [155.0, 107.25], [154.0, 204.4], [152.0, 143.25], [153.0, 110.0], [159.0, 151.2857142857143], [164.0, 175.85714285714286], [163.0, 116.25], [160.0, 114.0], [162.0, 138.5], [166.0, 114.33333333333333], [167.0, 127.0], [165.0, 94.0], [173.0, 175.4], [172.0, 134.0], [175.0, 235.5], [171.0, 183.0], [170.0, 84.0], [169.0, 81.66666666666667], [182.0, 165.4], [179.0, 143.0], [178.0, 108.5], [181.0, 142.0], [183.0, 191.0], [180.0, 73.0], [177.0, 242.0], [176.0, 203.0], [184.0, 140.33333333333334], [190.0, 222.5], [189.0, 225.0], [186.0, 222.0], [185.0, 206.0], [195.0, 135.5], [197.0, 144.0], [198.0, 65.5], [196.0, 50.0], [194.0, 215.0], [193.0, 221.0], [192.0, 201.0], [201.0, 195.75], [204.0, 147.0], [207.0, 151.0], [206.0, 212.0], [205.0, 210.33333333333334], [202.0, 207.0], [210.0, 148.0], [209.0, 93.5], [208.0, 84.33333333333333], [214.0, 115.33333333333334], [213.0, 87.0], [215.0, 41.0], [212.0, 63.0], [219.0, 172.33333333333334], [217.0, 104.5], [218.0, 154.0], [216.0, 157.0], [222.0, 155.5], [223.0, 160.5], [221.0, 195.0], [220.0, 45.0], [229.0, 79.25], [228.0, 168.0], [231.0, 174.0], [230.0, 105.5], [227.0, 52.0], [225.0, 195.33333333333334], [224.0, 194.0], [233.0, 134.33333333333334], [239.0, 49.0], [237.0, 190.0], [236.0, 193.0], [235.0, 51.75], [234.0, 51.0]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}, {"data": [[138.60499999999996, 154.7849999999999]], "isOverall": false, "label": "gateway_0/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 239.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 640.0, "minX": 1.6883106E12, "maxY": 853.3333333333334, "series": [{"data": [[1.6883106E12, 640.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883106E12, 853.3333333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 154.7849999999999, "minX": 1.6883106E12, "maxY": 154.7849999999999, "series": [{"data": [[1.6883106E12, 154.7849999999999]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 154.7849999999999, "minX": 1.6883106E12, "maxY": 154.7849999999999, "series": [{"data": [[1.6883106E12, 154.7849999999999]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.585, "minX": 1.6883106E12, "maxY": 1.585, "series": [{"data": [[1.6883106E12, 1.585]], "isOverall": false, "label": "gateway_0/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 1.6883106E12, "maxY": 260.0, "series": [{"data": [[1.6883106E12, 260.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883106E12, 27.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883106E12, 229.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883106E12, 250.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883106E12, 172.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883106E12, 239.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 172.0, "minX": 400.0, "maxY": 172.0, "series": [{"data": [[400.0, 172.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 400.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 172.0, "minX": 400.0, "maxY": 172.0, "series": [{"data": [[400.0, 172.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 400.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883106E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883106E12, 6.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883106E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883106E12, 6.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883106E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883106E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883106E12, 6.666666666666667]], "isOverall": false, "label": "gateway_0/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883106E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883106E12, 6.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883106E12, "title": "Total Transactions Per Second"}},
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

