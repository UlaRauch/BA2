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
        data: {"result": {"minY": 20.0, "minX": 0.0, "maxY": 375.0, "series": [{"data": [[0.0, 20.0], [0.1, 20.0], [0.2, 20.0], [0.3, 20.0], [0.4, 21.0], [0.5, 21.0], [0.6, 21.0], [0.7, 21.0], [0.8, 30.0], [0.9, 30.0], [1.0, 42.0], [1.1, 43.0], [1.2, 43.0], [1.3, 44.0], [1.4, 44.0], [1.5, 46.0], [1.6, 46.0], [1.7, 46.0], [1.8, 46.0], [1.9, 47.0], [2.0, 47.0], [2.1, 47.0], [2.2, 47.0], [2.3, 47.0], [2.4, 47.0], [2.5, 47.0], [2.6, 48.0], [2.7, 48.0], [2.8, 48.0], [2.9, 48.0], [3.0, 49.0], [3.1, 50.0], [3.2, 50.0], [3.3, 50.0], [3.4, 50.0], [3.5, 50.0], [3.6, 50.0], [3.7, 51.0], [3.8, 51.0], [3.9, 51.0], [4.0, 53.0], [4.1, 53.0], [4.2, 58.0], [4.3, 58.0], [4.4, 61.0], [4.5, 61.0], [4.6, 61.0], [4.7, 61.0], [4.8, 62.0], [4.9, 62.0], [5.0, 62.0], [5.1, 62.0], [5.2, 62.0], [5.3, 65.0], [5.4, 65.0], [5.5, 65.0], [5.6, 65.0], [5.7, 67.0], [5.8, 67.0], [5.9, 67.0], [6.0, 67.0], [6.1, 67.0], [6.2, 68.0], [6.3, 68.0], [6.4, 69.0], [6.5, 69.0], [6.6, 70.0], [6.7, 70.0], [6.8, 71.0], [6.9, 71.0], [7.0, 71.0], [7.1, 71.0], [7.2, 71.0], [7.3, 72.0], [7.4, 72.0], [7.5, 72.0], [7.6, 72.0], [7.7, 73.0], [7.8, 73.0], [7.9, 73.0], [8.0, 73.0], [8.1, 73.0], [8.2, 74.0], [8.3, 74.0], [8.4, 74.0], [8.5, 74.0], [8.6, 75.0], [8.7, 75.0], [8.8, 75.0], [8.9, 75.0], [9.0, 76.0], [9.1, 76.0], [9.2, 76.0], [9.3, 78.0], [9.4, 78.0], [9.5, 78.0], [9.6, 78.0], [9.7, 79.0], [9.8, 79.0], [9.9, 79.0], [10.0, 80.0], [10.1, 80.0], [10.2, 81.0], [10.3, 81.0], [10.4, 82.0], [10.5, 82.0], [10.6, 82.0], [10.7, 82.0], [10.8, 88.0], [10.9, 88.0], [11.0, 88.0], [11.1, 89.0], [11.2, 89.0], [11.3, 89.0], [11.4, 89.0], [11.5, 89.0], [11.6, 89.0], [11.7, 91.0], [11.8, 91.0], [11.9, 91.0], [12.0, 92.0], [12.1, 92.0], [12.2, 92.0], [12.3, 92.0], [12.4, 99.0], [12.5, 99.0], [12.6, 101.0], [12.7, 101.0], [12.8, 101.0], [12.9, 101.0], [13.0, 104.0], [13.1, 107.0], [13.2, 107.0], [13.3, 107.0], [13.4, 107.0], [13.5, 111.0], [13.6, 111.0], [13.7, 117.0], [13.8, 117.0], [13.9, 117.0], [14.0, 131.0], [14.1, 131.0], [14.2, 132.0], [14.3, 132.0], [14.4, 134.0], [14.5, 134.0], [14.6, 135.0], [14.7, 135.0], [14.8, 135.0], [14.9, 135.0], [15.0, 137.0], [15.1, 137.0], [15.2, 137.0], [15.3, 139.0], [15.4, 139.0], [15.5, 141.0], [15.6, 141.0], [15.7, 143.0], [15.8, 143.0], [15.9, 143.0], [16.0, 144.0], [16.1, 144.0], [16.2, 145.0], [16.3, 145.0], [16.4, 146.0], [16.5, 146.0], [16.6, 147.0], [16.7, 147.0], [16.8, 147.0], [16.9, 147.0], [17.0, 147.0], [17.1, 151.0], [17.2, 151.0], [17.3, 152.0], [17.4, 152.0], [17.5, 152.0], [17.6, 152.0], [17.7, 152.0], [17.8, 152.0], [17.9, 154.0], [18.0, 156.0], [18.1, 156.0], [18.2, 156.0], [18.3, 156.0], [18.4, 156.0], [18.5, 156.0], [18.6, 159.0], [18.7, 159.0], [18.8, 159.0], [18.9, 159.0], [19.0, 160.0], [19.1, 160.0], [19.2, 160.0], [19.3, 161.0], [19.4, 161.0], [19.5, 162.0], [19.6, 162.0], [19.7, 163.0], [19.8, 163.0], [19.9, 164.0], [20.0, 164.0], [20.1, 165.0], [20.2, 165.0], [20.3, 165.0], [20.4, 165.0], [20.5, 165.0], [20.6, 165.0], [20.7, 165.0], [20.8, 165.0], [20.9, 165.0], [21.0, 166.0], [21.1, 167.0], [21.2, 167.0], [21.3, 167.0], [21.4, 167.0], [21.5, 167.0], [21.6, 167.0], [21.7, 168.0], [21.8, 168.0], [21.9, 168.0], [22.0, 168.0], [22.1, 168.0], [22.2, 170.0], [22.3, 170.0], [22.4, 170.0], [22.5, 170.0], [22.6, 170.0], [22.7, 170.0], [22.8, 170.0], [22.9, 170.0], [23.0, 170.0], [23.1, 170.0], [23.2, 170.0], [23.3, 171.0], [23.4, 171.0], [23.5, 171.0], [23.6, 171.0], [23.7, 172.0], [23.8, 172.0], [23.9, 172.0], [24.0, 172.0], [24.1, 172.0], [24.2, 173.0], [24.3, 173.0], [24.4, 173.0], [24.5, 173.0], [24.6, 173.0], [24.7, 173.0], [24.8, 174.0], [24.9, 174.0], [25.0, 175.0], [25.1, 175.0], [25.2, 175.0], [25.3, 175.0], [25.4, 175.0], [25.5, 176.0], [25.6, 176.0], [25.7, 176.0], [25.8, 176.0], [25.9, 176.0], [26.0, 176.0], [26.1, 176.0], [26.2, 177.0], [26.3, 177.0], [26.4, 177.0], [26.5, 177.0], [26.6, 178.0], [26.7, 178.0], [26.8, 178.0], [26.9, 178.0], [27.0, 178.0], [27.1, 178.0], [27.2, 178.0], [27.3, 178.0], [27.4, 178.0], [27.5, 179.0], [27.6, 179.0], [27.7, 179.0], [27.8, 179.0], [27.9, 180.0], [28.0, 180.0], [28.1, 180.0], [28.2, 180.0], [28.3, 180.0], [28.4, 181.0], [28.5, 181.0], [28.6, 182.0], [28.7, 182.0], [28.8, 182.0], [28.9, 182.0], [29.0, 182.0], [29.1, 182.0], [29.2, 182.0], [29.3, 182.0], [29.4, 182.0], [29.5, 183.0], [29.6, 183.0], [29.7, 183.0], [29.8, 183.0], [29.9, 185.0], [30.0, 185.0], [30.1, 185.0], [30.2, 185.0], [30.3, 185.0], [30.4, 185.0], [30.5, 185.0], [30.6, 186.0], [30.7, 186.0], [30.8, 186.0], [30.9, 186.0], [31.0, 186.0], [31.1, 187.0], [31.2, 187.0], [31.3, 187.0], [31.4, 187.0], [31.5, 187.0], [31.6, 187.0], [31.7, 187.0], [31.8, 187.0], [31.9, 188.0], [32.0, 188.0], [32.1, 188.0], [32.2, 188.0], [32.3, 188.0], [32.4, 188.0], [32.5, 188.0], [32.6, 188.0], [32.7, 188.0], [32.8, 188.0], [32.9, 188.0], [33.0, 188.0], [33.1, 189.0], [33.2, 189.0], [33.3, 190.0], [33.4, 190.0], [33.5, 190.0], [33.6, 190.0], [33.7, 190.0], [33.8, 190.0], [33.9, 190.0], [34.0, 190.0], [34.1, 190.0], [34.2, 190.0], [34.3, 190.0], [34.4, 191.0], [34.5, 191.0], [34.6, 191.0], [34.7, 191.0], [34.8, 192.0], [34.9, 192.0], [35.0, 192.0], [35.1, 193.0], [35.2, 193.0], [35.3, 193.0], [35.4, 193.0], [35.5, 193.0], [35.6, 193.0], [35.7, 193.0], [35.8, 193.0], [35.9, 193.0], [36.0, 193.0], [36.1, 193.0], [36.2, 193.0], [36.3, 193.0], [36.4, 194.0], [36.5, 194.0], [36.6, 194.0], [36.7, 194.0], [36.8, 195.0], [36.9, 195.0], [37.0, 195.0], [37.1, 196.0], [37.2, 196.0], [37.3, 197.0], [37.4, 197.0], [37.5, 197.0], [37.6, 197.0], [37.7, 198.0], [37.8, 198.0], [37.9, 199.0], [38.0, 199.0], [38.1, 199.0], [38.2, 201.0], [38.3, 201.0], [38.4, 201.0], [38.5, 201.0], [38.6, 201.0], [38.7, 201.0], [38.8, 201.0], [38.9, 201.0], [39.0, 202.0], [39.1, 202.0], [39.2, 202.0], [39.3, 202.0], [39.4, 202.0], [39.5, 202.0], [39.6, 202.0], [39.7, 203.0], [39.8, 203.0], [39.9, 203.0], [40.0, 203.0], [40.1, 203.0], [40.2, 203.0], [40.3, 203.0], [40.4, 203.0], [40.5, 203.0], [40.6, 204.0], [40.7, 204.0], [40.8, 204.0], [40.9, 204.0], [41.0, 204.0], [41.1, 204.0], [41.2, 204.0], [41.3, 205.0], [41.4, 205.0], [41.5, 206.0], [41.6, 206.0], [41.7, 206.0], [41.8, 206.0], [41.9, 206.0], [42.0, 206.0], [42.1, 207.0], [42.2, 208.0], [42.3, 208.0], [42.4, 208.0], [42.5, 208.0], [42.6, 208.0], [42.7, 208.0], [42.8, 208.0], [42.9, 208.0], [43.0, 208.0], [43.1, 209.0], [43.2, 209.0], [43.3, 209.0], [43.4, 209.0], [43.5, 209.0], [43.6, 209.0], [43.7, 210.0], [43.8, 210.0], [43.9, 210.0], [44.0, 210.0], [44.1, 210.0], [44.2, 210.0], [44.3, 210.0], [44.4, 210.0], [44.5, 210.0], [44.6, 210.0], [44.7, 210.0], [44.8, 210.0], [44.9, 210.0], [45.0, 210.0], [45.1, 210.0], [45.2, 210.0], [45.3, 211.0], [45.4, 211.0], [45.5, 214.0], [45.6, 214.0], [45.7, 215.0], [45.8, 215.0], [45.9, 215.0], [46.0, 215.0], [46.1, 215.0], [46.2, 215.0], [46.3, 215.0], [46.4, 215.0], [46.5, 215.0], [46.6, 216.0], [46.7, 216.0], [46.8, 216.0], [46.9, 216.0], [47.0, 216.0], [47.1, 216.0], [47.2, 216.0], [47.3, 217.0], [47.4, 217.0], [47.5, 217.0], [47.6, 217.0], [47.7, 217.0], [47.8, 217.0], [47.9, 217.0], [48.0, 217.0], [48.1, 217.0], [48.2, 217.0], [48.3, 217.0], [48.4, 217.0], [48.5, 217.0], [48.6, 218.0], [48.7, 218.0], [48.8, 218.0], [48.9, 218.0], [49.0, 218.0], [49.1, 218.0], [49.2, 218.0], [49.3, 218.0], [49.4, 218.0], [49.5, 218.0], [49.6, 218.0], [49.7, 219.0], [49.8, 219.0], [49.9, 219.0], [50.0, 219.0], [50.1, 220.0], [50.2, 220.0], [50.3, 220.0], [50.4, 220.0], [50.5, 220.0], [50.6, 221.0], [50.7, 221.0], [50.8, 221.0], [50.9, 221.0], [51.0, 221.0], [51.1, 221.0], [51.2, 221.0], [51.3, 221.0], [51.4, 221.0], [51.5, 222.0], [51.6, 222.0], [51.7, 222.0], [51.8, 222.0], [51.9, 222.0], [52.0, 222.0], [52.1, 223.0], [52.2, 223.0], [52.3, 223.0], [52.4, 223.0], [52.5, 223.0], [52.6, 224.0], [52.7, 224.0], [52.8, 224.0], [52.9, 224.0], [53.0, 224.0], [53.1, 224.0], [53.2, 224.0], [53.3, 224.0], [53.4, 224.0], [53.5, 224.0], [53.6, 224.0], [53.7, 224.0], [53.8, 224.0], [53.9, 224.0], [54.0, 224.0], [54.1, 225.0], [54.2, 225.0], [54.3, 225.0], [54.4, 225.0], [54.5, 225.0], [54.6, 225.0], [54.7, 225.0], [54.8, 225.0], [54.9, 225.0], [55.0, 225.0], [55.1, 226.0], [55.2, 226.0], [55.3, 227.0], [55.4, 227.0], [55.5, 227.0], [55.6, 227.0], [55.7, 227.0], [55.8, 227.0], [55.9, 227.0], [56.0, 227.0], [56.1, 227.0], [56.2, 227.0], [56.3, 227.0], [56.4, 227.0], [56.5, 227.0], [56.6, 228.0], [56.7, 228.0], [56.8, 228.0], [56.9, 228.0], [57.0, 228.0], [57.1, 228.0], [57.2, 228.0], [57.3, 228.0], [57.4, 228.0], [57.5, 229.0], [57.6, 229.0], [57.7, 229.0], [57.8, 229.0], [57.9, 229.0], [58.0, 229.0], [58.1, 229.0], [58.2, 230.0], [58.3, 230.0], [58.4, 230.0], [58.5, 230.0], [58.6, 230.0], [58.7, 230.0], [58.8, 230.0], [58.9, 230.0], [59.0, 231.0], [59.1, 231.0], [59.2, 231.0], [59.3, 231.0], [59.4, 231.0], [59.5, 231.0], [59.6, 231.0], [59.7, 231.0], [59.8, 231.0], [59.9, 231.0], [60.0, 231.0], [60.1, 232.0], [60.2, 233.0], [60.3, 233.0], [60.4, 233.0], [60.5, 233.0], [60.6, 233.0], [60.7, 233.0], [60.8, 233.0], [60.9, 233.0], [61.0, 233.0], [61.1, 233.0], [61.2, 233.0], [61.3, 233.0], [61.4, 233.0], [61.5, 234.0], [61.6, 234.0], [61.7, 234.0], [61.8, 234.0], [61.9, 234.0], [62.0, 234.0], [62.1, 234.0], [62.2, 234.0], [62.3, 234.0], [62.4, 234.0], [62.5, 234.0], [62.6, 234.0], [62.7, 234.0], [62.8, 235.0], [62.9, 235.0], [63.0, 235.0], [63.1, 235.0], [63.2, 235.0], [63.3, 235.0], [63.4, 235.0], [63.5, 235.0], [63.6, 235.0], [63.7, 235.0], [63.8, 235.0], [63.9, 235.0], [64.0, 235.0], [64.1, 235.0], [64.2, 235.0], [64.3, 235.0], [64.4, 235.0], [64.5, 235.0], [64.6, 235.0], [64.7, 235.0], [64.8, 236.0], [64.9, 236.0], [65.0, 236.0], [65.1, 236.0], [65.2, 236.0], [65.3, 236.0], [65.4, 236.0], [65.5, 236.0], [65.6, 236.0], [65.7, 236.0], [65.8, 236.0], [65.9, 237.0], [66.0, 237.0], [66.1, 237.0], [66.2, 237.0], [66.3, 237.0], [66.4, 238.0], [66.5, 238.0], [66.6, 239.0], [66.7, 239.0], [66.8, 239.0], [66.9, 239.0], [67.0, 239.0], [67.1, 239.0], [67.2, 239.0], [67.3, 239.0], [67.4, 239.0], [67.5, 240.0], [67.6, 240.0], [67.7, 240.0], [67.8, 240.0], [67.9, 240.0], [68.0, 240.0], [68.1, 240.0], [68.2, 241.0], [68.3, 241.0], [68.4, 241.0], [68.5, 241.0], [68.6, 242.0], [68.7, 242.0], [68.8, 242.0], [68.9, 242.0], [69.0, 243.0], [69.1, 243.0], [69.2, 243.0], [69.3, 244.0], [69.4, 244.0], [69.5, 244.0], [69.6, 244.0], [69.7, 244.0], [69.8, 244.0], [69.9, 244.0], [70.0, 244.0], [70.1, 245.0], [70.2, 245.0], [70.3, 245.0], [70.4, 245.0], [70.5, 245.0], [70.6, 245.0], [70.7, 245.0], [70.8, 246.0], [70.9, 246.0], [71.0, 246.0], [71.1, 246.0], [71.2, 246.0], [71.3, 248.0], [71.4, 248.0], [71.5, 248.0], [71.6, 248.0], [71.7, 248.0], [71.8, 248.0], [71.9, 248.0], [72.0, 248.0], [72.1, 248.0], [72.2, 248.0], [72.3, 248.0], [72.4, 248.0], [72.5, 248.0], [72.6, 248.0], [72.7, 248.0], [72.8, 248.0], [72.9, 248.0], [73.0, 249.0], [73.1, 249.0], [73.2, 249.0], [73.3, 249.0], [73.4, 249.0], [73.5, 250.0], [73.6, 250.0], [73.7, 250.0], [73.8, 250.0], [73.9, 250.0], [74.0, 250.0], [74.1, 250.0], [74.2, 251.0], [74.3, 251.0], [74.4, 251.0], [74.5, 251.0], [74.6, 251.0], [74.7, 251.0], [74.8, 252.0], [74.9, 252.0], [75.0, 253.0], [75.1, 253.0], [75.2, 253.0], [75.3, 253.0], [75.4, 253.0], [75.5, 253.0], [75.6, 253.0], [75.7, 254.0], [75.8, 254.0], [75.9, 254.0], [76.0, 254.0], [76.1, 254.0], [76.2, 254.0], [76.3, 254.0], [76.4, 255.0], [76.5, 255.0], [76.6, 255.0], [76.7, 255.0], [76.8, 255.0], [76.9, 255.0], [77.0, 256.0], [77.1, 257.0], [77.2, 257.0], [77.3, 257.0], [77.4, 257.0], [77.5, 257.0], [77.6, 257.0], [77.7, 257.0], [77.8, 257.0], [77.9, 257.0], [78.0, 257.0], [78.1, 257.0], [78.2, 258.0], [78.3, 258.0], [78.4, 258.0], [78.5, 258.0], [78.6, 258.0], [78.7, 258.0], [78.8, 258.0], [78.9, 258.0], [79.0, 258.0], [79.1, 258.0], [79.2, 258.0], [79.3, 259.0], [79.4, 259.0], [79.5, 259.0], [79.6, 259.0], [79.7, 259.0], [79.8, 259.0], [79.9, 259.0], [80.0, 259.0], [80.1, 260.0], [80.2, 260.0], [80.3, 260.0], [80.4, 261.0], [80.5, 261.0], [80.6, 261.0], [80.7, 261.0], [80.8, 261.0], [80.9, 261.0], [81.0, 261.0], [81.1, 262.0], [81.2, 262.0], [81.3, 262.0], [81.4, 262.0], [81.5, 262.0], [81.6, 262.0], [81.7, 262.0], [81.8, 262.0], [81.9, 262.0], [82.0, 262.0], [82.1, 262.0], [82.2, 263.0], [82.3, 263.0], [82.4, 263.0], [82.5, 263.0], [82.6, 263.0], [82.7, 263.0], [82.8, 263.0], [82.9, 263.0], [83.0, 263.0], [83.1, 263.0], [83.2, 263.0], [83.3, 264.0], [83.4, 264.0], [83.5, 264.0], [83.6, 264.0], [83.7, 265.0], [83.8, 265.0], [83.9, 265.0], [84.0, 265.0], [84.1, 265.0], [84.2, 265.0], [84.3, 265.0], [84.4, 266.0], [84.5, 266.0], [84.6, 266.0], [84.7, 266.0], [84.8, 267.0], [84.9, 267.0], [85.0, 267.0], [85.1, 268.0], [85.2, 268.0], [85.3, 269.0], [85.4, 269.0], [85.5, 269.0], [85.6, 269.0], [85.7, 269.0], [85.8, 269.0], [85.9, 269.0], [86.0, 269.0], [86.1, 269.0], [86.2, 269.0], [86.3, 269.0], [86.4, 269.0], [86.5, 269.0], [86.6, 270.0], [86.7, 270.0], [86.8, 270.0], [86.9, 270.0], [87.0, 270.0], [87.1, 271.0], [87.2, 271.0], [87.3, 271.0], [87.4, 271.0], [87.5, 271.0], [87.6, 271.0], [87.7, 272.0], [87.8, 272.0], [87.9, 272.0], [88.0, 272.0], [88.1, 273.0], [88.2, 273.0], [88.3, 273.0], [88.4, 274.0], [88.5, 274.0], [88.6, 274.0], [88.7, 274.0], [88.8, 274.0], [88.9, 274.0], [89.0, 274.0], [89.1, 274.0], [89.2, 274.0], [89.3, 274.0], [89.4, 274.0], [89.5, 275.0], [89.6, 275.0], [89.7, 275.0], [89.8, 275.0], [89.9, 275.0], [90.0, 275.0], [90.1, 276.0], [90.2, 277.0], [90.3, 277.0], [90.4, 277.0], [90.5, 277.0], [90.6, 277.0], [90.7, 277.0], [90.8, 278.0], [90.9, 278.0], [91.0, 278.0], [91.1, 278.0], [91.2, 278.0], [91.3, 278.0], [91.4, 278.0], [91.5, 279.0], [91.6, 279.0], [91.7, 279.0], [91.8, 279.0], [91.9, 279.0], [92.0, 279.0], [92.1, 279.0], [92.2, 279.0], [92.3, 279.0], [92.4, 280.0], [92.5, 280.0], [92.6, 280.0], [92.7, 280.0], [92.8, 280.0], [92.9, 280.0], [93.0, 280.0], [93.1, 280.0], [93.2, 280.0], [93.3, 281.0], [93.4, 281.0], [93.5, 283.0], [93.6, 283.0], [93.7, 285.0], [93.8, 285.0], [93.9, 285.0], [94.0, 285.0], [94.1, 286.0], [94.2, 286.0], [94.3, 286.0], [94.4, 288.0], [94.5, 288.0], [94.6, 289.0], [94.7, 289.0], [94.8, 289.0], [94.9, 289.0], [95.0, 289.0], [95.1, 290.0], [95.2, 290.0], [95.3, 291.0], [95.4, 291.0], [95.5, 291.0], [95.6, 291.0], [95.7, 293.0], [95.8, 293.0], [95.9, 293.0], [96.0, 293.0], [96.1, 293.0], [96.2, 293.0], [96.3, 293.0], [96.4, 294.0], [96.5, 294.0], [96.6, 294.0], [96.7, 294.0], [96.8, 297.0], [96.9, 297.0], [97.0, 298.0], [97.1, 298.0], [97.2, 298.0], [97.3, 299.0], [97.4, 299.0], [97.5, 303.0], [97.6, 303.0], [97.7, 305.0], [97.8, 305.0], [97.9, 306.0], [98.0, 306.0], [98.1, 307.0], [98.2, 307.0], [98.3, 307.0], [98.4, 309.0], [98.5, 309.0], [98.6, 311.0], [98.7, 311.0], [98.8, 313.0], [98.9, 313.0], [99.0, 314.0], [99.1, 318.0], [99.2, 318.0], [99.3, 318.0], [99.4, 318.0], [99.5, 324.0], [99.6, 324.0], [99.7, 342.0], [99.8, 342.0], [99.9, 375.0], [100.0, 375.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 326.0, "series": [{"data": [[0.0, 69.0], [300.0, 14.0], [100.0, 141.0], [200.0, 326.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 190.79090909090897, "minX": 1.68830076E12, "maxY": 190.79090909090897, "series": [{"data": [[1.68830076E12, 190.79090909090897]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.0, "maxY": 375.0, "series": [{"data": [[2.0, 279.0], [3.0, 278.0], [5.0, 299.0], [6.0, 287.0], [10.0, 267.0], [11.0, 258.0], [12.0, 293.0], [15.0, 231.0], [21.0, 276.5], [22.0, 276.5], [23.0, 307.0], [25.0, 241.5], [28.0, 255.0], [29.0, 234.0], [30.0, 190.0], [31.0, 228.0], [33.0, 237.0], [36.0, 143.0], [37.0, 183.0], [38.0, 20.0], [41.0, 258.0], [40.0, 218.0], [42.0, 30.0], [43.0, 231.33333333333334], [44.0, 233.0], [47.0, 224.66666666666666], [49.0, 261.0], [50.0, 206.0], [52.0, 242.0], [55.0, 185.0], [54.0, 262.0], [57.0, 275.3333333333333], [59.0, 51.0], [58.0, 49.0], [60.0, 109.0], [61.0, 134.0], [62.0, 86.25], [63.0, 164.0], [67.0, 47.0], [66.0, 57.666666666666664], [65.0, 131.8], [64.0, 50.0], [68.0, 53.0], [69.0, 44.0], [71.0, 177.66666666666666], [70.0, 257.0], [73.0, 70.875], [72.0, 72.0], [75.0, 239.0], [79.0, 123.16666666666667], [78.0, 75.0], [77.0, 191.0], [76.0, 217.0], [81.0, 157.8], [80.0, 75.0], [82.0, 195.0], [87.0, 202.0], [86.0, 224.0], [84.0, 296.0], [91.0, 248.0], [89.0, 200.0], [95.0, 187.0], [94.0, 249.0], [93.0, 251.0], [92.0, 220.0], [99.0, 234.33333333333334], [96.0, 229.0], [102.0, 176.0], [101.0, 243.0], [105.0, 82.0], [106.0, 85.5], [107.0, 207.5], [104.0, 221.66666666666666], [111.0, 153.33333333333334], [110.0, 172.4], [108.0, 278.5], [112.0, 167.0], [113.0, 181.5], [115.0, 218.0], [114.0, 199.0], [118.0, 238.5], [117.0, 188.0], [122.0, 271.5], [121.0, 257.0], [120.0, 274.0], [126.0, 204.33333333333334], [124.0, 273.0], [134.0, 239.4], [129.0, 246.0], [128.0, 211.5], [138.0, 184.33333333333331], [142.0, 279.0], [140.0, 256.0], [139.0, 217.0], [137.0, 204.0], [136.0, 240.5], [147.0, 109.0], [148.0, 186.0], [146.0, 154.5], [145.0, 224.25], [151.0, 275.0], [144.0, 248.0], [159.0, 253.0], [156.0, 290.6666666666667], [153.0, 261.0], [152.0, 272.75], [167.0, 266.0], [164.0, 258.6666666666667], [163.0, 271.0], [161.0, 267.0], [160.0, 257.0], [175.0, 147.0], [174.0, 271.3333333333333], [171.0, 272.0], [170.0, 258.0], [169.0, 262.0], [168.0, 221.33333333333334], [183.0, 269.0], [180.0, 262.0], [179.0, 270.0], [178.0, 277.6666666666667], [189.0, 265.5], [188.0, 253.0], [187.0, 318.0], [184.0, 294.5], [197.0, 265.0], [196.0, 242.5], [195.0, 247.5], [193.0, 244.0], [207.0, 210.0], [205.0, 146.0], [204.0, 236.0], [203.0, 236.0], [202.0, 244.0], [200.0, 279.0], [215.0, 230.0], [211.0, 246.75], [223.0, 253.0], [222.0, 278.0], [221.0, 270.0], [220.0, 277.0], [219.0, 271.0], [218.0, 254.66666666666666], [231.0, 250.0], [230.0, 273.0], [228.0, 221.0], [227.0, 253.0], [226.0, 269.0], [225.0, 236.5], [239.0, 250.0], [237.0, 202.0], [236.0, 259.0], [235.0, 254.0], [233.0, 239.0], [246.0, 248.5], [244.0, 248.0], [243.0, 256.5], [241.0, 244.5], [240.0, 233.0], [255.0, 258.0], [253.0, 233.0], [252.0, 250.0], [249.0, 233.0], [248.0, 238.0], [268.0, 239.0], [264.0, 137.0], [265.0, 167.0], [263.0, 202.5], [257.0, 250.0], [256.0, 185.0], [259.0, 253.0], [258.0, 251.0], [270.0, 252.5], [267.0, 253.0], [266.0, 224.0], [262.0, 223.0], [261.0, 241.5], [286.0, 182.0], [287.0, 201.6], [284.0, 211.33333333333334], [283.0, 190.0], [285.0, 206.0], [281.0, 235.0], [280.0, 224.0], [279.0, 248.0], [274.0, 237.5], [273.0, 248.0], [278.0, 245.0], [277.0, 244.0], [276.0, 229.0], [296.0, 190.0], [300.0, 206.3], [303.0, 206.8], [302.0, 219.12500000000003], [301.0, 218.4], [299.0, 190.33333333333334], [298.0, 187.8], [297.0, 205.0], [295.0, 191.0], [294.0, 176.25], [292.0, 188.0], [293.0, 217.0], [291.0, 132.0], [290.0, 207.8], [288.0, 170.66666666666666], [289.0, 202.0], [307.0, 209.0], [319.0, 196.29999999999998], [316.0, 166.4], [318.0, 176.0], [317.0, 178.0], [312.0, 184.75], [313.0, 207.5], [315.0, 207.66666666666666], [314.0, 196.75], [311.0, 197.0], [310.0, 203.0], [308.0, 178.75], [309.0, 218.0], [306.0, 199.7142857142857], [305.0, 205.66666666666666], [304.0, 203.33333333333331], [332.0, 159.5], [334.0, 162.66666666666666], [335.0, 168.0], [333.0, 164.0], [330.0, 197.0], [328.0, 174.0], [327.0, 188.5], [320.0, 191.33333333333334], [321.0, 188.0], [323.0, 189.57142857142858], [322.0, 189.0], [326.0, 186.0], [325.0, 184.75], [324.0, 208.0], [1.0, 375.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[190.7890909090908, 204.03818181818164]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 335.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1668.3333333333333, "minX": 1.68830076E12, "maxY": 3666.6666666666665, "series": [{"data": [[1.68830076E12, 3666.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830076E12, 1668.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 204.03818181818164, "minX": 1.68830076E12, "maxY": 204.03818181818164, "series": [{"data": [[1.68830076E12, 204.03818181818164]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 204.03272727272713, "minX": 1.68830076E12, "maxY": 204.03272727272713, "series": [{"data": [[1.68830076E12, 204.03272727272713]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8636363636363641, "minX": 1.68830076E12, "maxY": 0.8636363636363641, "series": [{"data": [[1.68830076E12, 0.8636363636363641]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 20.0, "minX": 1.68830076E12, "maxY": 375.0, "series": [{"data": [[1.68830076E12, 375.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830076E12, 20.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830076E12, 275.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830076E12, 315.96000000000004]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830076E12, 219.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830076E12, 289.44999999999993]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 219.0, "minX": 1.0, "maxY": 375.0, "series": [{"data": [[1.0, 375.0], [549.0, 219.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 549.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 219.0, "minX": 1.0, "maxY": 375.0, "series": [{"data": [[1.0, 375.0], [549.0, 219.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 549.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68830076E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68830076E12, 9.166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68830076E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68830076E12, 9.166666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830076E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68830076E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68830076E12, 9.166666666666666]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 9.166666666666666, "minX": 1.68830076E12, "maxY": 9.166666666666666, "series": [{"data": [[1.68830076E12, 9.166666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830076E12, "title": "Total Transactions Per Second"}},
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

