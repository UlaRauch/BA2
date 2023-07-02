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
        data: {"result": {"minY": 22.0, "minX": 0.0, "maxY": 321.0, "series": [{"data": [[0.0, 22.0], [0.1, 22.0], [0.2, 22.0], [0.3, 22.0], [0.4, 22.0], [0.5, 22.0], [0.6, 22.0], [0.7, 22.0], [0.8, 22.0], [0.9, 23.0], [1.0, 23.0], [1.1, 23.0], [1.2, 24.0], [1.3, 24.0], [1.4, 29.0], [1.5, 29.0], [1.6, 30.0], [1.7, 30.0], [1.8, 32.0], [1.9, 32.0], [2.0, 32.0], [2.1, 50.0], [2.2, 50.0], [2.3, 51.0], [2.4, 51.0], [2.5, 51.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 51.0], [3.1, 51.0], [3.2, 52.0], [3.3, 52.0], [3.4, 52.0], [3.5, 52.0], [3.6, 52.0], [3.7, 52.0], [3.8, 53.0], [3.9, 53.0], [4.0, 53.0], [4.1, 53.0], [4.2, 53.0], [4.3, 61.0], [4.4, 61.0], [4.5, 62.0], [4.6, 62.0], [4.7, 62.0], [4.8, 62.0], [4.9, 63.0], [5.0, 63.0], [5.1, 63.0], [5.2, 63.0], [5.3, 63.0], [5.4, 63.0], [5.5, 63.0], [5.6, 63.0], [5.7, 63.0], [5.8, 65.0], [5.9, 65.0], [6.0, 65.0], [6.1, 65.0], [6.2, 65.0], [6.3, 66.0], [6.4, 66.0], [6.5, 69.0], [6.6, 69.0], [6.7, 71.0], [6.8, 71.0], [6.9, 71.0], [7.0, 71.0], [7.1, 71.0], [7.2, 71.0], [7.3, 71.0], [7.4, 72.0], [7.5, 72.0], [7.6, 73.0], [7.7, 73.0], [7.8, 73.0], [7.9, 73.0], [8.0, 73.0], [8.1, 73.0], [8.2, 73.0], [8.3, 75.0], [8.4, 75.0], [8.5, 76.0], [8.6, 76.0], [8.7, 77.0], [8.8, 77.0], [8.9, 77.0], [9.0, 77.0], [9.1, 77.0], [9.2, 77.0], [9.3, 77.0], [9.4, 80.0], [9.5, 80.0], [9.6, 81.0], [9.7, 81.0], [9.8, 81.0], [9.9, 81.0], [10.0, 82.0], [10.1, 82.0], [10.2, 82.0], [10.3, 82.0], [10.4, 82.0], [10.5, 83.0], [10.6, 83.0], [10.7, 83.0], [10.8, 83.0], [10.9, 83.0], [11.0, 83.0], [11.1, 83.0], [11.2, 84.0], [11.3, 84.0], [11.4, 84.0], [11.5, 84.0], [11.6, 86.0], [11.7, 86.0], [11.8, 86.0], [11.9, 86.0], [12.0, 87.0], [12.1, 87.0], [12.2, 87.0], [12.3, 90.0], [12.4, 90.0], [12.5, 90.0], [12.6, 90.0], [12.7, 91.0], [12.8, 91.0], [12.9, 92.0], [13.0, 92.0], [13.1, 92.0], [13.2, 93.0], [13.3, 93.0], [13.4, 94.0], [13.5, 94.0], [13.6, 94.0], [13.7, 94.0], [13.8, 95.0], [13.9, 95.0], [14.0, 97.0], [14.1, 97.0], [14.2, 97.0], [14.3, 98.0], [14.4, 98.0], [14.5, 98.0], [14.6, 98.0], [14.7, 99.0], [14.8, 99.0], [14.9, 100.0], [15.0, 100.0], [15.1, 100.0], [15.2, 101.0], [15.3, 101.0], [15.4, 101.0], [15.5, 101.0], [15.6, 102.0], [15.7, 102.0], [15.8, 104.0], [15.9, 104.0], [16.0, 104.0], [16.1, 104.0], [16.2, 104.0], [16.3, 105.0], [16.4, 105.0], [16.5, 105.0], [16.6, 105.0], [16.7, 105.0], [16.8, 105.0], [16.9, 105.0], [17.0, 105.0], [17.1, 105.0], [17.2, 105.0], [17.3, 105.0], [17.4, 106.0], [17.5, 106.0], [17.6, 106.0], [17.7, 106.0], [17.8, 107.0], [17.9, 107.0], [18.0, 107.0], [18.1, 107.0], [18.2, 107.0], [18.3, 109.0], [18.4, 109.0], [18.5, 109.0], [18.6, 109.0], [18.7, 109.0], [18.8, 109.0], [18.9, 110.0], [19.0, 110.0], [19.1, 110.0], [19.2, 111.0], [19.3, 111.0], [19.4, 111.0], [19.5, 111.0], [19.6, 112.0], [19.7, 112.0], [19.8, 112.0], [19.9, 112.0], [20.0, 113.0], [20.1, 113.0], [20.2, 113.0], [20.3, 113.0], [20.4, 113.0], [20.5, 114.0], [20.6, 114.0], [20.7, 114.0], [20.8, 114.0], [20.9, 114.0], [21.0, 114.0], [21.1, 114.0], [21.2, 114.0], [21.3, 114.0], [21.4, 115.0], [21.5, 115.0], [21.6, 115.0], [21.7, 115.0], [21.8, 115.0], [21.9, 115.0], [22.0, 116.0], [22.1, 116.0], [22.2, 116.0], [22.3, 116.0], [22.4, 116.0], [22.5, 116.0], [22.6, 116.0], [22.7, 117.0], [22.8, 117.0], [22.9, 117.0], [23.0, 117.0], [23.1, 117.0], [23.2, 117.0], [23.3, 117.0], [23.4, 118.0], [23.5, 118.0], [23.6, 118.0], [23.7, 118.0], [23.8, 118.0], [23.9, 118.0], [24.0, 120.0], [24.1, 120.0], [24.2, 120.0], [24.3, 120.0], [24.4, 120.0], [24.5, 120.0], [24.6, 120.0], [24.7, 120.0], [24.8, 120.0], [24.9, 121.0], [25.0, 121.0], [25.1, 121.0], [25.2, 121.0], [25.3, 121.0], [25.4, 121.0], [25.5, 121.0], [25.6, 121.0], [25.7, 121.0], [25.8, 121.0], [25.9, 121.0], [26.0, 121.0], [26.1, 121.0], [26.2, 121.0], [26.3, 122.0], [26.4, 122.0], [26.5, 124.0], [26.6, 124.0], [26.7, 124.0], [26.8, 124.0], [26.9, 125.0], [27.0, 125.0], [27.1, 125.0], [27.2, 126.0], [27.3, 126.0], [27.4, 126.0], [27.5, 126.0], [27.6, 126.0], [27.7, 126.0], [27.8, 127.0], [27.9, 127.0], [28.0, 127.0], [28.1, 127.0], [28.2, 127.0], [28.3, 128.0], [28.4, 128.0], [28.5, 128.0], [28.6, 128.0], [28.7, 128.0], [28.8, 128.0], [28.9, 128.0], [29.0, 128.0], [29.1, 128.0], [29.2, 128.0], [29.3, 128.0], [29.4, 129.0], [29.5, 129.0], [29.6, 130.0], [29.7, 130.0], [29.8, 130.0], [29.9, 130.0], [30.0, 131.0], [30.1, 131.0], [30.2, 131.0], [30.3, 131.0], [30.4, 131.0], [30.5, 133.0], [30.6, 133.0], [30.7, 133.0], [30.8, 133.0], [30.9, 133.0], [31.0, 133.0], [31.1, 133.0], [31.2, 133.0], [31.3, 133.0], [31.4, 134.0], [31.5, 134.0], [31.6, 135.0], [31.7, 135.0], [31.8, 135.0], [31.9, 135.0], [32.0, 135.0], [32.1, 135.0], [32.2, 135.0], [32.3, 135.0], [32.4, 135.0], [32.5, 136.0], [32.6, 136.0], [32.7, 139.0], [32.8, 139.0], [32.9, 140.0], [33.0, 140.0], [33.1, 140.0], [33.2, 140.0], [33.3, 140.0], [33.4, 140.0], [33.5, 140.0], [33.6, 140.0], [33.7, 140.0], [33.8, 143.0], [33.9, 143.0], [34.0, 144.0], [34.1, 144.0], [34.2, 144.0], [34.3, 145.0], [34.4, 145.0], [34.5, 146.0], [34.6, 146.0], [34.7, 147.0], [34.8, 147.0], [34.9, 147.0], [35.0, 147.0], [35.1, 147.0], [35.2, 147.0], [35.3, 147.0], [35.4, 148.0], [35.5, 148.0], [35.6, 149.0], [35.7, 149.0], [35.8, 149.0], [35.9, 149.0], [36.0, 149.0], [36.1, 149.0], [36.2, 149.0], [36.3, 149.0], [36.4, 149.0], [36.5, 149.0], [36.6, 149.0], [36.7, 150.0], [36.8, 150.0], [36.9, 151.0], [37.0, 151.0], [37.1, 151.0], [37.2, 151.0], [37.3, 151.0], [37.4, 151.0], [37.5, 151.0], [37.6, 152.0], [37.7, 152.0], [37.8, 153.0], [37.9, 153.0], [38.0, 153.0], [38.1, 153.0], [38.2, 153.0], [38.3, 154.0], [38.4, 154.0], [38.5, 155.0], [38.6, 155.0], [38.7, 156.0], [38.8, 156.0], [38.9, 156.0], [39.0, 156.0], [39.1, 156.0], [39.2, 156.0], [39.3, 156.0], [39.4, 156.0], [39.5, 156.0], [39.6, 157.0], [39.7, 157.0], [39.8, 158.0], [39.9, 158.0], [40.0, 159.0], [40.1, 159.0], [40.2, 159.0], [40.3, 159.0], [40.4, 159.0], [40.5, 160.0], [40.6, 160.0], [40.7, 160.0], [40.8, 160.0], [40.9, 161.0], [41.0, 161.0], [41.1, 161.0], [41.2, 161.0], [41.3, 161.0], [41.4, 161.0], [41.5, 161.0], [41.6, 162.0], [41.7, 162.0], [41.8, 163.0], [41.9, 163.0], [42.0, 163.0], [42.1, 163.0], [42.2, 163.0], [42.3, 163.0], [42.4, 163.0], [42.5, 164.0], [42.6, 164.0], [42.7, 164.0], [42.8, 164.0], [42.9, 165.0], [43.0, 165.0], [43.1, 165.0], [43.2, 165.0], [43.3, 165.0], [43.4, 166.0], [43.5, 166.0], [43.6, 166.0], [43.7, 166.0], [43.8, 166.0], [43.9, 166.0], [44.0, 166.0], [44.1, 166.0], [44.2, 166.0], [44.3, 167.0], [44.4, 167.0], [44.5, 168.0], [44.6, 168.0], [44.7, 168.0], [44.8, 168.0], [44.9, 169.0], [45.0, 169.0], [45.1, 169.0], [45.2, 169.0], [45.3, 169.0], [45.4, 169.0], [45.5, 169.0], [45.6, 169.0], [45.7, 169.0], [45.8, 170.0], [45.9, 170.0], [46.0, 171.0], [46.1, 171.0], [46.2, 171.0], [46.3, 171.0], [46.4, 171.0], [46.5, 171.0], [46.6, 171.0], [46.7, 172.0], [46.8, 172.0], [46.9, 172.0], [47.0, 172.0], [47.1, 172.0], [47.2, 172.0], [47.3, 172.0], [47.4, 172.0], [47.5, 172.0], [47.6, 173.0], [47.7, 173.0], [47.8, 173.0], [47.9, 173.0], [48.0, 173.0], [48.1, 173.0], [48.2, 173.0], [48.3, 173.0], [48.4, 173.0], [48.5, 173.0], [48.6, 173.0], [48.7, 174.0], [48.8, 174.0], [48.9, 174.0], [49.0, 174.0], [49.1, 174.0], [49.2, 174.0], [49.3, 174.0], [49.4, 174.0], [49.5, 174.0], [49.6, 174.0], [49.7, 174.0], [49.8, 176.0], [49.9, 176.0], [50.0, 176.0], [50.1, 176.0], [50.2, 176.0], [50.3, 176.0], [50.4, 176.0], [50.5, 176.0], [50.6, 176.0], [50.7, 177.0], [50.8, 177.0], [50.9, 177.0], [51.0, 177.0], [51.1, 177.0], [51.2, 178.0], [51.3, 178.0], [51.4, 178.0], [51.5, 178.0], [51.6, 178.0], [51.7, 178.0], [51.8, 179.0], [51.9, 179.0], [52.0, 179.0], [52.1, 179.0], [52.2, 179.0], [52.3, 180.0], [52.4, 180.0], [52.5, 180.0], [52.6, 180.0], [52.7, 180.0], [52.8, 180.0], [52.9, 180.0], [53.0, 180.0], [53.1, 180.0], [53.2, 181.0], [53.3, 181.0], [53.4, 182.0], [53.5, 182.0], [53.6, 182.0], [53.7, 182.0], [53.8, 182.0], [53.9, 182.0], [54.0, 183.0], [54.1, 183.0], [54.2, 183.0], [54.3, 183.0], [54.4, 183.0], [54.5, 183.0], [54.6, 183.0], [54.7, 183.0], [54.8, 183.0], [54.9, 184.0], [55.0, 184.0], [55.1, 184.0], [55.2, 184.0], [55.3, 184.0], [55.4, 184.0], [55.5, 184.0], [55.6, 184.0], [55.7, 184.0], [55.8, 184.0], [55.9, 184.0], [56.0, 185.0], [56.1, 185.0], [56.2, 185.0], [56.3, 185.0], [56.4, 185.0], [56.5, 185.0], [56.6, 185.0], [56.7, 185.0], [56.8, 185.0], [56.9, 185.0], [57.0, 185.0], [57.1, 185.0], [57.2, 185.0], [57.3, 185.0], [57.4, 186.0], [57.5, 186.0], [57.6, 186.0], [57.7, 186.0], [57.8, 186.0], [57.9, 186.0], [58.0, 186.0], [58.1, 186.0], [58.2, 186.0], [58.3, 187.0], [58.4, 187.0], [58.5, 187.0], [58.6, 187.0], [58.7, 188.0], [58.8, 188.0], [58.9, 188.0], [59.0, 188.0], [59.1, 188.0], [59.2, 188.0], [59.3, 188.0], [59.4, 188.0], [59.5, 188.0], [59.6, 189.0], [59.7, 189.0], [59.8, 189.0], [59.9, 189.0], [60.0, 189.0], [60.1, 189.0], [60.2, 189.0], [60.3, 189.0], [60.4, 189.0], [60.5, 189.0], [60.6, 189.0], [60.7, 190.0], [60.8, 190.0], [60.9, 190.0], [61.0, 190.0], [61.1, 190.0], [61.2, 190.0], [61.3, 190.0], [61.4, 190.0], [61.5, 190.0], [61.6, 190.0], [61.7, 190.0], [61.8, 190.0], [61.9, 190.0], [62.0, 190.0], [62.1, 190.0], [62.2, 190.0], [62.3, 191.0], [62.4, 191.0], [62.5, 191.0], [62.6, 191.0], [62.7, 191.0], [62.8, 191.0], [62.9, 191.0], [63.0, 191.0], [63.1, 191.0], [63.2, 191.0], [63.3, 191.0], [63.4, 192.0], [63.5, 192.0], [63.6, 192.0], [63.7, 192.0], [63.8, 192.0], [63.9, 192.0], [64.0, 193.0], [64.1, 193.0], [64.2, 193.0], [64.3, 193.0], [64.4, 193.0], [64.5, 193.0], [64.6, 193.0], [64.7, 194.0], [64.8, 194.0], [64.9, 195.0], [65.0, 195.0], [65.1, 195.0], [65.2, 195.0], [65.3, 195.0], [65.4, 196.0], [65.5, 196.0], [65.6, 196.0], [65.7, 196.0], [65.8, 196.0], [65.9, 196.0], [66.0, 197.0], [66.1, 197.0], [66.2, 197.0], [66.3, 197.0], [66.4, 197.0], [66.5, 197.0], [66.6, 197.0], [66.7, 198.0], [66.8, 198.0], [66.9, 198.0], [67.0, 198.0], [67.1, 198.0], [67.2, 199.0], [67.3, 199.0], [67.4, 199.0], [67.5, 199.0], [67.6, 199.0], [67.7, 199.0], [67.8, 199.0], [67.9, 199.0], [68.0, 200.0], [68.1, 200.0], [68.2, 200.0], [68.3, 201.0], [68.4, 201.0], [68.5, 201.0], [68.6, 201.0], [68.7, 202.0], [68.8, 202.0], [68.9, 202.0], [69.0, 202.0], [69.1, 202.0], [69.2, 202.0], [69.3, 202.0], [69.4, 202.0], [69.5, 202.0], [69.6, 202.0], [69.7, 202.0], [69.8, 202.0], [69.9, 202.0], [70.0, 202.0], [70.1, 202.0], [70.2, 202.0], [70.3, 203.0], [70.4, 203.0], [70.5, 203.0], [70.6, 203.0], [70.7, 203.0], [70.8, 203.0], [70.9, 203.0], [71.0, 203.0], [71.1, 203.0], [71.2, 203.0], [71.3, 203.0], [71.4, 203.0], [71.5, 203.0], [71.6, 204.0], [71.7, 204.0], [71.8, 204.0], [71.9, 204.0], [72.0, 204.0], [72.1, 204.0], [72.2, 204.0], [72.3, 204.0], [72.4, 204.0], [72.5, 205.0], [72.6, 205.0], [72.7, 205.0], [72.8, 205.0], [72.9, 205.0], [73.0, 205.0], [73.1, 205.0], [73.2, 206.0], [73.3, 206.0], [73.4, 206.0], [73.5, 206.0], [73.6, 206.0], [73.7, 206.0], [73.8, 206.0], [73.9, 206.0], [74.0, 206.0], [74.1, 206.0], [74.2, 206.0], [74.3, 207.0], [74.4, 207.0], [74.5, 207.0], [74.6, 207.0], [74.7, 207.0], [74.8, 207.0], [74.9, 207.0], [75.0, 207.0], [75.1, 207.0], [75.2, 207.0], [75.3, 207.0], [75.4, 208.0], [75.5, 208.0], [75.6, 208.0], [75.7, 208.0], [75.8, 208.0], [75.9, 208.0], [76.0, 208.0], [76.1, 208.0], [76.2, 208.0], [76.3, 209.0], [76.4, 209.0], [76.5, 209.0], [76.6, 209.0], [76.7, 209.0], [76.8, 209.0], [76.9, 209.0], [77.0, 209.0], [77.1, 209.0], [77.2, 209.0], [77.3, 209.0], [77.4, 209.0], [77.5, 209.0], [77.6, 210.0], [77.7, 210.0], [77.8, 210.0], [77.9, 210.0], [78.0, 210.0], [78.1, 210.0], [78.2, 210.0], [78.3, 210.0], [78.4, 210.0], [78.5, 210.0], [78.6, 210.0], [78.7, 211.0], [78.8, 211.0], [78.9, 211.0], [79.0, 211.0], [79.1, 211.0], [79.2, 211.0], [79.3, 211.0], [79.4, 211.0], [79.5, 211.0], [79.6, 211.0], [79.7, 211.0], [79.8, 212.0], [79.9, 212.0], [80.0, 212.0], [80.1, 212.0], [80.2, 212.0], [80.3, 212.0], [80.4, 212.0], [80.5, 212.0], [80.6, 212.0], [80.7, 213.0], [80.8, 213.0], [80.9, 213.0], [81.0, 213.0], [81.1, 213.0], [81.2, 213.0], [81.3, 213.0], [81.4, 214.0], [81.5, 214.0], [81.6, 214.0], [81.7, 214.0], [81.8, 214.0], [81.9, 214.0], [82.0, 214.0], [82.1, 214.0], [82.2, 214.0], [82.3, 215.0], [82.4, 215.0], [82.5, 215.0], [82.6, 215.0], [82.7, 216.0], [82.8, 216.0], [82.9, 216.0], [83.0, 216.0], [83.1, 216.0], [83.2, 216.0], [83.3, 216.0], [83.4, 216.0], [83.5, 216.0], [83.6, 216.0], [83.7, 216.0], [83.8, 217.0], [83.9, 217.0], [84.0, 217.0], [84.1, 217.0], [84.2, 217.0], [84.3, 217.0], [84.4, 217.0], [84.5, 217.0], [84.6, 217.0], [84.7, 217.0], [84.8, 217.0], [84.9, 218.0], [85.0, 218.0], [85.1, 218.0], [85.2, 218.0], [85.3, 218.0], [85.4, 218.0], [85.5, 218.0], [85.6, 218.0], [85.7, 218.0], [85.8, 219.0], [85.9, 219.0], [86.0, 219.0], [86.1, 219.0], [86.2, 219.0], [86.3, 221.0], [86.4, 221.0], [86.5, 222.0], [86.6, 222.0], [86.7, 222.0], [86.8, 222.0], [86.9, 223.0], [87.0, 223.0], [87.1, 223.0], [87.2, 223.0], [87.3, 223.0], [87.4, 223.0], [87.5, 223.0], [87.6, 223.0], [87.7, 223.0], [87.8, 225.0], [87.9, 225.0], [88.0, 225.0], [88.1, 225.0], [88.2, 225.0], [88.3, 226.0], [88.4, 226.0], [88.5, 226.0], [88.6, 226.0], [88.7, 226.0], [88.8, 226.0], [88.9, 226.0], [89.0, 226.0], [89.1, 226.0], [89.2, 227.0], [89.3, 227.0], [89.4, 227.0], [89.5, 227.0], [89.6, 227.0], [89.7, 227.0], [89.8, 228.0], [89.9, 228.0], [90.0, 229.0], [90.1, 229.0], [90.2, 229.0], [90.3, 229.0], [90.4, 229.0], [90.5, 229.0], [90.6, 229.0], [90.7, 230.0], [90.8, 230.0], [90.9, 230.0], [91.0, 230.0], [91.1, 230.0], [91.2, 231.0], [91.3, 231.0], [91.4, 231.0], [91.5, 231.0], [91.6, 232.0], [91.7, 232.0], [91.8, 232.0], [91.9, 232.0], [92.0, 233.0], [92.1, 233.0], [92.2, 233.0], [92.3, 233.0], [92.4, 233.0], [92.5, 234.0], [92.6, 234.0], [92.7, 235.0], [92.8, 235.0], [92.9, 235.0], [93.0, 235.0], [93.1, 235.0], [93.2, 238.0], [93.3, 238.0], [93.4, 239.0], [93.5, 239.0], [93.6, 239.0], [93.7, 239.0], [93.8, 240.0], [93.9, 240.0], [94.0, 240.0], [94.1, 240.0], [94.2, 240.0], [94.3, 240.0], [94.4, 240.0], [94.5, 240.0], [94.6, 240.0], [94.7, 241.0], [94.8, 241.0], [94.9, 242.0], [95.0, 242.0], [95.1, 242.0], [95.2, 243.0], [95.3, 243.0], [95.4, 245.0], [95.5, 245.0], [95.6, 246.0], [95.7, 246.0], [95.8, 246.0], [95.9, 246.0], [96.0, 247.0], [96.1, 247.0], [96.2, 247.0], [96.3, 250.0], [96.4, 250.0], [96.5, 251.0], [96.6, 251.0], [96.7, 257.0], [96.8, 257.0], [96.9, 260.0], [97.0, 260.0], [97.1, 260.0], [97.2, 261.0], [97.3, 261.0], [97.4, 265.0], [97.5, 265.0], [97.6, 266.0], [97.7, 266.0], [97.8, 267.0], [97.9, 267.0], [98.0, 267.0], [98.1, 270.0], [98.2, 270.0], [98.3, 273.0], [98.4, 273.0], [98.5, 274.0], [98.6, 274.0], [98.7, 277.0], [98.8, 277.0], [98.9, 277.0], [99.0, 277.0], [99.1, 277.0], [99.2, 280.0], [99.3, 280.0], [99.4, 283.0], [99.5, 283.0], [99.6, 295.0], [99.7, 295.0], [99.8, 321.0], [99.9, 321.0], [100.0, 321.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 239.0, "series": [{"data": [[0.0, 67.0], [300.0, 1.0], [100.0, 239.0], [200.0, 143.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 142.46000000000018, "minX": 1.6883007E12, "maxY": 142.46000000000018, "series": [{"data": [[1.6883007E12, 142.46000000000018]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 29.0, "minX": 1.0, "maxY": 265.0, "series": [{"data": [[4.0, 123.5], [5.0, 204.0], [6.0, 206.0], [7.0, 191.0], [8.0, 151.0], [11.0, 226.0], [12.0, 135.25], [16.0, 176.0], [17.0, 116.0], [18.0, 171.0], [21.0, 166.66666666666666], [23.0, 177.0], [25.0, 128.5], [27.0, 166.5], [28.0, 146.0], [29.0, 197.0], [31.0, 138.5], [33.0, 190.0], [32.0, 214.0], [37.0, 147.25], [41.0, 159.28571428571428], [40.0, 214.0], [42.0, 86.0], [45.0, 29.0], [46.0, 31.0], [47.0, 240.33333333333334], [51.0, 216.0], [50.0, 255.33333333333334], [54.0, 216.0], [57.0, 226.75], [58.0, 232.33333333333334], [61.0, 242.0], [63.0, 212.0], [62.0, 227.0], [67.0, 183.33333333333334], [64.0, 265.0], [70.0, 51.666666666666664], [69.0, 51.0], [71.0, 238.0], [74.0, 62.666666666666664], [73.0, 139.5], [75.0, 184.0], [72.0, 178.0], [76.0, 65.0], [79.0, 174.0], [78.0, 106.0], [77.0, 224.5], [81.0, 172.0], [84.0, 144.75], [90.0, 86.0], [89.0, 153.8], [95.0, 157.0], [94.0, 121.0], [98.0, 81.5], [97.0, 79.0], [96.0, 163.0], [103.0, 103.0], [102.0, 128.0], [100.0, 157.25], [106.0, 72.33333333333333], [105.0, 78.0], [104.0, 77.0], [107.0, 146.5], [111.0, 87.0], [110.0, 156.0], [109.0, 102.0], [108.0, 71.0], [114.0, 86.0], [112.0, 149.0], [118.0, 114.5], [116.0, 89.0], [122.0, 148.0], [121.0, 173.0], [120.0, 155.5], [127.0, 122.5], [125.0, 82.0], [124.0, 150.5], [135.0, 86.5], [133.0, 125.25], [132.0, 138.83333333333331], [131.0, 91.0], [129.0, 203.0], [142.0, 121.8], [141.0, 112.5], [139.0, 121.0], [138.0, 126.0], [143.0, 153.25], [140.0, 132.5], [137.0, 169.0], [136.0, 205.33333333333334], [146.0, 121.66666666666667], [144.0, 105.0], [151.0, 111.0], [150.0, 149.00000000000003], [148.0, 105.33333333333333], [149.0, 111.0], [147.0, 149.2], [145.0, 174.5], [153.0, 153.5], [155.0, 144.33333333333334], [154.0, 128.8], [152.0, 125.5], [159.0, 117.5], [158.0, 128.0], [156.0, 149.0], [157.0, 204.0], [160.0, 153.5], [165.0, 198.0], [163.0, 247.0], [162.0, 217.75], [175.0, 195.0], [173.0, 193.0], [171.0, 198.0], [169.0, 197.0], [183.0, 185.0], [180.0, 162.0], [179.0, 213.33333333333334], [177.0, 207.0], [184.0, 188.75], [191.0, 201.0], [187.0, 200.5], [185.0, 240.0], [199.0, 171.5], [198.0, 180.33333333333334], [196.0, 140.0], [195.0, 154.0], [194.0, 197.85714285714286], [193.0, 137.0], [197.0, 203.5], [192.0, 226.0], [207.0, 185.36363636363637], [205.0, 199.5], [203.0, 162.33333333333334], [202.0, 219.6], [201.0, 185.5], [200.0, 175.2], [204.0, 199.33333333333334], [206.0, 219.33333333333334], [209.0, 187.16666666666666], [215.0, 191.0], [214.0, 206.14285714285714], [213.0, 165.5], [210.0, 208.0], [212.0, 214.75], [211.0, 210.125], [208.0, 177.0], [221.0, 186.0], [220.0, 196.0], [219.0, 187.0], [218.0, 173.0], [217.0, 197.83333333333337], [216.0, 199.6], [223.0, 212.0], [222.0, 161.0], [230.0, 194.33333333333334], [229.0, 191.0], [228.0, 149.0], [225.0, 186.66666666666666], [226.0, 174.0], [243.0, 184.42857142857142], [244.0, 182.25], [240.0, 201.0], [1.0, 208.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[142.46000000000018, 164.3288888888889]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 244.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1365.0, "minX": 1.6883007E12, "maxY": 3000.0, "series": [{"data": [[1.6883007E12, 3000.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883007E12, 1365.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 164.3288888888889, "minX": 1.6883007E12, "maxY": 164.3288888888889, "series": [{"data": [[1.6883007E12, 164.3288888888889]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 164.32666666666668, "minX": 1.6883007E12, "maxY": 164.32666666666668, "series": [{"data": [[1.6883007E12, 164.32666666666668]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0822222222222222, "minX": 1.6883007E12, "maxY": 1.0822222222222222, "series": [{"data": [[1.6883007E12, 1.0822222222222222]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 22.0, "minX": 1.6883007E12, "maxY": 321.0, "series": [{"data": [[1.6883007E12, 321.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883007E12, 22.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883007E12, 228.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883007E12, 278.47]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883007E12, 176.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883007E12, 242.45]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 176.0, "minX": 450.0, "maxY": 176.0, "series": [{"data": [[450.0, 176.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 450.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 176.0, "minX": 450.0, "maxY": 176.0, "series": [{"data": [[450.0, 176.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 450.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883007E12, "maxY": 7.5, "series": [{"data": [[1.6883007E12, 7.5]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883007E12, "maxY": 7.5, "series": [{"data": [[1.6883007E12, 7.5]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883007E12, "maxY": 7.5, "series": [{"data": [[1.6883007E12, 7.5]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 7.5, "minX": 1.6883007E12, "maxY": 7.5, "series": [{"data": [[1.6883007E12, 7.5]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Total Transactions Per Second"}},
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

