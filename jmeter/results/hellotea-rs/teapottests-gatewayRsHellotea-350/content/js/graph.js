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
        data: {"result": {"minY": 37.0, "minX": 0.0, "maxY": 298.0, "series": [{"data": [[0.0, 37.0], [0.1, 37.0], [0.2, 37.0], [0.3, 37.0], [0.4, 37.0], [0.5, 37.0], [0.6, 37.0], [0.7, 37.0], [0.8, 37.0], [0.9, 37.0], [1.0, 37.0], [1.1, 37.0], [1.2, 38.0], [1.3, 38.0], [1.4, 38.0], [1.5, 39.0], [1.6, 39.0], [1.7, 39.0], [1.8, 48.0], [1.9, 48.0], [2.0, 50.0], [2.1, 50.0], [2.2, 50.0], [2.3, 51.0], [2.4, 51.0], [2.5, 51.0], [2.6, 51.0], [2.7, 51.0], [2.8, 51.0], [2.9, 51.0], [3.0, 51.0], [3.1, 51.0], [3.2, 55.0], [3.3, 55.0], [3.4, 55.0], [3.5, 56.0], [3.6, 56.0], [3.7, 56.0], [3.8, 57.0], [3.9, 57.0], [4.0, 59.0], [4.1, 59.0], [4.2, 59.0], [4.3, 60.0], [4.4, 60.0], [4.5, 60.0], [4.6, 61.0], [4.7, 61.0], [4.8, 61.0], [4.9, 62.0], [5.0, 62.0], [5.1, 62.0], [5.2, 62.0], [5.3, 62.0], [5.4, 62.0], [5.5, 63.0], [5.6, 63.0], [5.7, 63.0], [5.8, 64.0], [5.9, 64.0], [6.0, 64.0], [6.1, 64.0], [6.2, 64.0], [6.3, 66.0], [6.4, 66.0], [6.5, 66.0], [6.6, 66.0], [6.7, 66.0], [6.8, 66.0], [6.9, 67.0], [7.0, 67.0], [7.1, 67.0], [7.2, 67.0], [7.3, 67.0], [7.4, 67.0], [7.5, 68.0], [7.6, 68.0], [7.7, 68.0], [7.8, 68.0], [7.9, 68.0], [8.0, 68.0], [8.1, 68.0], [8.2, 68.0], [8.3, 68.0], [8.4, 68.0], [8.5, 68.0], [8.6, 70.0], [8.7, 70.0], [8.8, 70.0], [8.9, 71.0], [9.0, 71.0], [9.1, 71.0], [9.2, 71.0], [9.3, 71.0], [9.4, 71.0], [9.5, 71.0], [9.6, 71.0], [9.7, 71.0], [9.8, 71.0], [9.9, 71.0], [10.0, 72.0], [10.1, 72.0], [10.2, 72.0], [10.3, 73.0], [10.4, 73.0], [10.5, 73.0], [10.6, 73.0], [10.7, 73.0], [10.8, 73.0], [10.9, 74.0], [11.0, 74.0], [11.1, 74.0], [11.2, 74.0], [11.3, 74.0], [11.4, 74.0], [11.5, 74.0], [11.6, 74.0], [11.7, 74.0], [11.8, 75.0], [11.9, 75.0], [12.0, 82.0], [12.1, 82.0], [12.2, 82.0], [12.3, 84.0], [12.4, 84.0], [12.5, 84.0], [12.6, 84.0], [12.7, 84.0], [12.8, 84.0], [12.9, 85.0], [13.0, 85.0], [13.1, 85.0], [13.2, 86.0], [13.3, 86.0], [13.4, 86.0], [13.5, 94.0], [13.6, 94.0], [13.7, 94.0], [13.8, 96.0], [13.9, 96.0], [14.0, 96.0], [14.1, 98.0], [14.2, 98.0], [14.3, 98.0], [14.4, 98.0], [14.5, 98.0], [14.6, 100.0], [14.7, 100.0], [14.8, 100.0], [14.9, 104.0], [15.0, 104.0], [15.1, 104.0], [15.2, 105.0], [15.3, 105.0], [15.4, 105.0], [15.5, 105.0], [15.6, 105.0], [15.7, 105.0], [15.8, 106.0], [15.9, 106.0], [16.0, 106.0], [16.1, 106.0], [16.2, 106.0], [16.3, 108.0], [16.4, 108.0], [16.5, 108.0], [16.6, 110.0], [16.7, 110.0], [16.8, 110.0], [16.9, 111.0], [17.0, 111.0], [17.1, 111.0], [17.2, 112.0], [17.3, 112.0], [17.4, 112.0], [17.5, 113.0], [17.6, 113.0], [17.7, 113.0], [17.8, 115.0], [17.9, 115.0], [18.0, 116.0], [18.1, 116.0], [18.2, 116.0], [18.3, 116.0], [18.4, 116.0], [18.5, 116.0], [18.6, 119.0], [18.7, 119.0], [18.8, 119.0], [18.9, 120.0], [19.0, 120.0], [19.1, 120.0], [19.2, 123.0], [19.3, 123.0], [19.4, 123.0], [19.5, 125.0], [19.6, 125.0], [19.7, 125.0], [19.8, 126.0], [19.9, 126.0], [20.0, 127.0], [20.1, 127.0], [20.2, 127.0], [20.3, 127.0], [20.4, 127.0], [20.5, 127.0], [20.6, 127.0], [20.7, 127.0], [20.8, 127.0], [20.9, 128.0], [21.0, 128.0], [21.1, 128.0], [21.2, 129.0], [21.3, 129.0], [21.4, 129.0], [21.5, 129.0], [21.6, 129.0], [21.7, 129.0], [21.8, 129.0], [21.9, 129.0], [22.0, 130.0], [22.1, 130.0], [22.2, 130.0], [22.3, 130.0], [22.4, 130.0], [22.5, 130.0], [22.6, 131.0], [22.7, 131.0], [22.8, 131.0], [22.9, 131.0], [23.0, 131.0], [23.1, 131.0], [23.2, 134.0], [23.3, 134.0], [23.4, 134.0], [23.5, 139.0], [23.6, 139.0], [23.7, 139.0], [23.8, 143.0], [23.9, 143.0], [24.0, 144.0], [24.1, 144.0], [24.2, 144.0], [24.3, 145.0], [24.4, 145.0], [24.5, 145.0], [24.6, 145.0], [24.7, 145.0], [24.8, 145.0], [24.9, 146.0], [25.0, 146.0], [25.1, 146.0], [25.2, 146.0], [25.3, 146.0], [25.4, 146.0], [25.5, 150.0], [25.6, 150.0], [25.7, 150.0], [25.8, 151.0], [25.9, 151.0], [26.0, 151.0], [26.1, 151.0], [26.2, 151.0], [26.3, 152.0], [26.4, 152.0], [26.5, 152.0], [26.6, 156.0], [26.7, 156.0], [26.8, 156.0], [26.9, 157.0], [27.0, 157.0], [27.1, 157.0], [27.2, 157.0], [27.3, 157.0], [27.4, 157.0], [27.5, 158.0], [27.6, 158.0], [27.7, 158.0], [27.8, 159.0], [27.9, 159.0], [28.0, 160.0], [28.1, 160.0], [28.2, 160.0], [28.3, 161.0], [28.4, 161.0], [28.5, 161.0], [28.6, 161.0], [28.7, 161.0], [28.8, 161.0], [28.9, 161.0], [29.0, 161.0], [29.1, 161.0], [29.2, 161.0], [29.3, 161.0], [29.4, 161.0], [29.5, 164.0], [29.6, 164.0], [29.7, 164.0], [29.8, 165.0], [29.9, 165.0], [30.0, 166.0], [30.1, 166.0], [30.2, 166.0], [30.3, 167.0], [30.4, 167.0], [30.5, 167.0], [30.6, 167.0], [30.7, 167.0], [30.8, 167.0], [30.9, 167.0], [31.0, 167.0], [31.1, 167.0], [31.2, 169.0], [31.3, 169.0], [31.4, 169.0], [31.5, 169.0], [31.6, 169.0], [31.7, 169.0], [31.8, 169.0], [31.9, 169.0], [32.0, 169.0], [32.1, 169.0], [32.2, 169.0], [32.3, 170.0], [32.4, 170.0], [32.5, 170.0], [32.6, 171.0], [32.7, 171.0], [32.8, 171.0], [32.9, 172.0], [33.0, 172.0], [33.1, 172.0], [33.2, 173.0], [33.3, 173.0], [33.4, 173.0], [33.5, 176.0], [33.6, 176.0], [33.7, 176.0], [33.8, 177.0], [33.9, 177.0], [34.0, 177.0], [34.1, 177.0], [34.2, 177.0], [34.3, 178.0], [34.4, 178.0], [34.5, 178.0], [34.6, 178.0], [34.7, 178.0], [34.8, 178.0], [34.9, 181.0], [35.0, 181.0], [35.1, 181.0], [35.2, 181.0], [35.3, 181.0], [35.4, 181.0], [35.5, 181.0], [35.6, 181.0], [35.7, 181.0], [35.8, 181.0], [35.9, 181.0], [36.0, 181.0], [36.1, 181.0], [36.2, 181.0], [36.3, 182.0], [36.4, 182.0], [36.5, 182.0], [36.6, 182.0], [36.7, 182.0], [36.8, 182.0], [36.9, 183.0], [37.0, 183.0], [37.1, 183.0], [37.2, 187.0], [37.3, 187.0], [37.4, 187.0], [37.5, 187.0], [37.6, 187.0], [37.7, 187.0], [37.8, 187.0], [37.9, 187.0], [38.0, 187.0], [38.1, 187.0], [38.2, 187.0], [38.3, 187.0], [38.4, 187.0], [38.5, 187.0], [38.6, 187.0], [38.7, 187.0], [38.8, 187.0], [38.9, 188.0], [39.0, 188.0], [39.1, 188.0], [39.2, 189.0], [39.3, 189.0], [39.4, 189.0], [39.5, 190.0], [39.6, 190.0], [39.7, 190.0], [39.8, 190.0], [39.9, 190.0], [40.0, 190.0], [40.1, 190.0], [40.2, 190.0], [40.3, 190.0], [40.4, 190.0], [40.5, 190.0], [40.6, 191.0], [40.7, 191.0], [40.8, 191.0], [40.9, 192.0], [41.0, 192.0], [41.1, 192.0], [41.2, 192.0], [41.3, 192.0], [41.4, 192.0], [41.5, 192.0], [41.6, 192.0], [41.7, 192.0], [41.8, 193.0], [41.9, 193.0], [42.0, 193.0], [42.1, 193.0], [42.2, 193.0], [42.3, 193.0], [42.4, 193.0], [42.5, 193.0], [42.6, 193.0], [42.7, 193.0], [42.8, 193.0], [42.9, 195.0], [43.0, 195.0], [43.1, 195.0], [43.2, 196.0], [43.3, 196.0], [43.4, 196.0], [43.5, 196.0], [43.6, 196.0], [43.7, 196.0], [43.8, 197.0], [43.9, 197.0], [44.0, 197.0], [44.1, 197.0], [44.2, 197.0], [44.3, 199.0], [44.4, 199.0], [44.5, 199.0], [44.6, 199.0], [44.7, 199.0], [44.8, 199.0], [44.9, 199.0], [45.0, 199.0], [45.1, 199.0], [45.2, 200.0], [45.3, 200.0], [45.4, 200.0], [45.5, 200.0], [45.6, 200.0], [45.7, 200.0], [45.8, 200.0], [45.9, 200.0], [46.0, 201.0], [46.1, 201.0], [46.2, 201.0], [46.3, 201.0], [46.4, 201.0], [46.5, 201.0], [46.6, 202.0], [46.7, 202.0], [46.8, 202.0], [46.9, 202.0], [47.0, 202.0], [47.1, 202.0], [47.2, 202.0], [47.3, 202.0], [47.4, 202.0], [47.5, 203.0], [47.6, 203.0], [47.7, 203.0], [47.8, 203.0], [47.9, 203.0], [48.0, 204.0], [48.1, 204.0], [48.2, 204.0], [48.3, 205.0], [48.4, 205.0], [48.5, 205.0], [48.6, 205.0], [48.7, 205.0], [48.8, 205.0], [48.9, 205.0], [49.0, 205.0], [49.1, 205.0], [49.2, 205.0], [49.3, 205.0], [49.4, 205.0], [49.5, 206.0], [49.6, 206.0], [49.7, 206.0], [49.8, 206.0], [49.9, 206.0], [50.0, 206.0], [50.1, 206.0], [50.2, 206.0], [50.3, 206.0], [50.4, 206.0], [50.5, 206.0], [50.6, 206.0], [50.7, 206.0], [50.8, 206.0], [50.9, 206.0], [51.0, 206.0], [51.1, 206.0], [51.2, 207.0], [51.3, 207.0], [51.4, 207.0], [51.5, 208.0], [51.6, 208.0], [51.7, 208.0], [51.8, 208.0], [51.9, 208.0], [52.0, 209.0], [52.1, 209.0], [52.2, 209.0], [52.3, 209.0], [52.4, 209.0], [52.5, 209.0], [52.6, 209.0], [52.7, 209.0], [52.8, 209.0], [52.9, 209.0], [53.0, 209.0], [53.1, 209.0], [53.2, 209.0], [53.3, 209.0], [53.4, 209.0], [53.5, 210.0], [53.6, 210.0], [53.7, 210.0], [53.8, 210.0], [53.9, 210.0], [54.0, 211.0], [54.1, 211.0], [54.2, 211.0], [54.3, 211.0], [54.4, 211.0], [54.5, 211.0], [54.6, 212.0], [54.7, 212.0], [54.8, 212.0], [54.9, 212.0], [55.0, 212.0], [55.1, 212.0], [55.2, 212.0], [55.3, 212.0], [55.4, 212.0], [55.5, 212.0], [55.6, 212.0], [55.7, 212.0], [55.8, 213.0], [55.9, 213.0], [56.0, 213.0], [56.1, 213.0], [56.2, 213.0], [56.3, 213.0], [56.4, 213.0], [56.5, 213.0], [56.6, 214.0], [56.7, 214.0], [56.8, 214.0], [56.9, 214.0], [57.0, 214.0], [57.1, 214.0], [57.2, 215.0], [57.3, 215.0], [57.4, 215.0], [57.5, 215.0], [57.6, 215.0], [57.7, 215.0], [57.8, 215.0], [57.9, 215.0], [58.0, 216.0], [58.1, 216.0], [58.2, 216.0], [58.3, 216.0], [58.4, 216.0], [58.5, 216.0], [58.6, 217.0], [58.7, 217.0], [58.8, 217.0], [58.9, 217.0], [59.0, 217.0], [59.1, 217.0], [59.2, 217.0], [59.3, 217.0], [59.4, 217.0], [59.5, 217.0], [59.6, 217.0], [59.7, 217.0], [59.8, 218.0], [59.9, 218.0], [60.0, 218.0], [60.1, 218.0], [60.2, 218.0], [60.3, 219.0], [60.4, 219.0], [60.5, 219.0], [60.6, 221.0], [60.7, 221.0], [60.8, 221.0], [60.9, 222.0], [61.0, 222.0], [61.1, 222.0], [61.2, 222.0], [61.3, 222.0], [61.4, 222.0], [61.5, 222.0], [61.6, 222.0], [61.7, 222.0], [61.8, 223.0], [61.9, 223.0], [62.0, 223.0], [62.1, 223.0], [62.2, 223.0], [62.3, 223.0], [62.4, 223.0], [62.5, 223.0], [62.6, 223.0], [62.7, 223.0], [62.8, 223.0], [62.9, 223.0], [63.0, 223.0], [63.1, 223.0], [63.2, 223.0], [63.3, 223.0], [63.4, 223.0], [63.5, 224.0], [63.6, 224.0], [63.7, 224.0], [63.8, 224.0], [63.9, 224.0], [64.0, 224.0], [64.1, 224.0], [64.2, 224.0], [64.3, 225.0], [64.4, 225.0], [64.5, 225.0], [64.6, 225.0], [64.7, 225.0], [64.8, 225.0], [64.9, 225.0], [65.0, 225.0], [65.1, 225.0], [65.2, 225.0], [65.3, 225.0], [65.4, 225.0], [65.5, 226.0], [65.6, 226.0], [65.7, 226.0], [65.8, 226.0], [65.9, 226.0], [66.0, 226.0], [66.1, 226.0], [66.2, 226.0], [66.3, 226.0], [66.4, 226.0], [66.5, 226.0], [66.6, 227.0], [66.7, 227.0], [66.8, 227.0], [66.9, 227.0], [67.0, 227.0], [67.1, 227.0], [67.2, 228.0], [67.3, 228.0], [67.4, 228.0], [67.5, 228.0], [67.6, 228.0], [67.7, 228.0], [67.8, 229.0], [67.9, 229.0], [68.0, 229.0], [68.1, 229.0], [68.2, 229.0], [68.3, 229.0], [68.4, 229.0], [68.5, 229.0], [68.6, 231.0], [68.7, 231.0], [68.8, 231.0], [68.9, 231.0], [69.0, 231.0], [69.1, 231.0], [69.2, 231.0], [69.3, 231.0], [69.4, 231.0], [69.5, 231.0], [69.6, 231.0], [69.7, 231.0], [69.8, 231.0], [69.9, 231.0], [70.0, 231.0], [70.1, 231.0], [70.2, 231.0], [70.3, 232.0], [70.4, 232.0], [70.5, 232.0], [70.6, 233.0], [70.7, 233.0], [70.8, 233.0], [70.9, 233.0], [71.0, 233.0], [71.1, 233.0], [71.2, 234.0], [71.3, 234.0], [71.4, 234.0], [71.5, 234.0], [71.6, 234.0], [71.7, 234.0], [71.8, 235.0], [71.9, 235.0], [72.0, 235.0], [72.1, 235.0], [72.2, 235.0], [72.3, 236.0], [72.4, 236.0], [72.5, 236.0], [72.6, 236.0], [72.7, 236.0], [72.8, 236.0], [72.9, 236.0], [73.0, 236.0], [73.1, 236.0], [73.2, 236.0], [73.3, 236.0], [73.4, 236.0], [73.5, 237.0], [73.6, 237.0], [73.7, 237.0], [73.8, 237.0], [73.9, 237.0], [74.0, 238.0], [74.1, 238.0], [74.2, 238.0], [74.3, 238.0], [74.4, 238.0], [74.5, 238.0], [74.6, 238.0], [74.7, 238.0], [74.8, 238.0], [74.9, 239.0], [75.0, 239.0], [75.1, 239.0], [75.2, 239.0], [75.3, 239.0], [75.4, 239.0], [75.5, 239.0], [75.6, 239.0], [75.7, 239.0], [75.8, 240.0], [75.9, 240.0], [76.0, 240.0], [76.1, 240.0], [76.2, 240.0], [76.3, 240.0], [76.4, 240.0], [76.5, 240.0], [76.6, 241.0], [76.7, 241.0], [76.8, 241.0], [76.9, 244.0], [77.0, 244.0], [77.1, 244.0], [77.2, 244.0], [77.3, 244.0], [77.4, 244.0], [77.5, 244.0], [77.6, 244.0], [77.7, 244.0], [77.8, 245.0], [77.9, 245.0], [78.0, 245.0], [78.1, 245.0], [78.2, 245.0], [78.3, 245.0], [78.4, 245.0], [78.5, 245.0], [78.6, 246.0], [78.7, 246.0], [78.8, 246.0], [78.9, 248.0], [79.0, 248.0], [79.1, 248.0], [79.2, 248.0], [79.3, 248.0], [79.4, 248.0], [79.5, 248.0], [79.6, 248.0], [79.7, 248.0], [79.8, 248.0], [79.9, 248.0], [80.0, 248.0], [80.1, 248.0], [80.2, 248.0], [80.3, 249.0], [80.4, 249.0], [80.5, 249.0], [80.6, 250.0], [80.7, 250.0], [80.8, 250.0], [80.9, 251.0], [81.0, 251.0], [81.1, 251.0], [81.2, 251.0], [81.3, 251.0], [81.4, 251.0], [81.5, 251.0], [81.6, 251.0], [81.7, 251.0], [81.8, 252.0], [81.9, 252.0], [82.0, 253.0], [82.1, 253.0], [82.2, 253.0], [82.3, 253.0], [82.4, 253.0], [82.5, 253.0], [82.6, 253.0], [82.7, 253.0], [82.8, 253.0], [82.9, 254.0], [83.0, 254.0], [83.1, 254.0], [83.2, 254.0], [83.3, 254.0], [83.4, 254.0], [83.5, 254.0], [83.6, 254.0], [83.7, 254.0], [83.8, 255.0], [83.9, 255.0], [84.0, 255.0], [84.1, 255.0], [84.2, 255.0], [84.3, 256.0], [84.4, 256.0], [84.5, 256.0], [84.6, 256.0], [84.7, 256.0], [84.8, 256.0], [84.9, 257.0], [85.0, 257.0], [85.1, 257.0], [85.2, 258.0], [85.3, 258.0], [85.4, 258.0], [85.5, 259.0], [85.6, 259.0], [85.7, 259.0], [85.8, 259.0], [85.9, 259.0], [86.0, 260.0], [86.1, 260.0], [86.2, 260.0], [86.3, 260.0], [86.4, 260.0], [86.5, 260.0], [86.6, 260.0], [86.7, 260.0], [86.8, 260.0], [86.9, 260.0], [87.0, 260.0], [87.1, 260.0], [87.2, 261.0], [87.3, 261.0], [87.4, 261.0], [87.5, 261.0], [87.6, 261.0], [87.7, 261.0], [87.8, 261.0], [87.9, 261.0], [88.0, 262.0], [88.1, 262.0], [88.2, 262.0], [88.3, 263.0], [88.4, 263.0], [88.5, 263.0], [88.6, 264.0], [88.7, 264.0], [88.8, 264.0], [88.9, 265.0], [89.0, 265.0], [89.1, 265.0], [89.2, 265.0], [89.3, 265.0], [89.4, 265.0], [89.5, 266.0], [89.6, 266.0], [89.7, 266.0], [89.8, 267.0], [89.9, 267.0], [90.0, 267.0], [90.1, 267.0], [90.2, 267.0], [90.3, 268.0], [90.4, 268.0], [90.5, 268.0], [90.6, 268.0], [90.7, 268.0], [90.8, 268.0], [90.9, 271.0], [91.0, 271.0], [91.1, 271.0], [91.2, 271.0], [91.3, 271.0], [91.4, 271.0], [91.5, 271.0], [91.6, 271.0], [91.7, 271.0], [91.8, 271.0], [91.9, 271.0], [92.0, 271.0], [92.1, 271.0], [92.2, 271.0], [92.3, 273.0], [92.4, 273.0], [92.5, 273.0], [92.6, 273.0], [92.7, 273.0], [92.8, 273.0], [92.9, 274.0], [93.0, 274.0], [93.1, 274.0], [93.2, 274.0], [93.3, 274.0], [93.4, 274.0], [93.5, 275.0], [93.6, 275.0], [93.7, 275.0], [93.8, 276.0], [93.9, 276.0], [94.0, 276.0], [94.1, 276.0], [94.2, 276.0], [94.3, 276.0], [94.4, 276.0], [94.5, 276.0], [94.6, 276.0], [94.7, 276.0], [94.8, 276.0], [94.9, 276.0], [95.0, 276.0], [95.1, 276.0], [95.2, 278.0], [95.3, 278.0], [95.4, 278.0], [95.5, 278.0], [95.6, 278.0], [95.7, 278.0], [95.8, 279.0], [95.9, 279.0], [96.0, 279.0], [96.1, 279.0], [96.2, 279.0], [96.3, 282.0], [96.4, 282.0], [96.5, 282.0], [96.6, 282.0], [96.7, 282.0], [96.8, 282.0], [96.9, 283.0], [97.0, 283.0], [97.1, 283.0], [97.2, 284.0], [97.3, 284.0], [97.4, 284.0], [97.5, 284.0], [97.6, 284.0], [97.7, 284.0], [97.8, 285.0], [97.9, 285.0], [98.0, 285.0], [98.1, 286.0], [98.2, 286.0], [98.3, 287.0], [98.4, 287.0], [98.5, 287.0], [98.6, 289.0], [98.7, 289.0], [98.8, 289.0], [98.9, 293.0], [99.0, 293.0], [99.1, 293.0], [99.2, 293.0], [99.3, 293.0], [99.4, 293.0], [99.5, 296.0], [99.6, 296.0], [99.7, 296.0], [99.8, 298.0], [99.9, 298.0], [100.0, 298.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 51.0, "minX": 0.0, "maxY": 192.0, "series": [{"data": [[0.0, 51.0], [100.0, 107.0], [200.0, 192.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 128.09428571428558, "minX": 1.68830256E12, "maxY": 128.09428571428558, "series": [{"data": [[1.68830256E12, 128.09428571428558]], "isOverall": false, "label": "with access token", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.0, "maxY": 285.0, "series": [{"data": [[3.0, 269.0], [4.0, 213.0], [5.0, 274.0], [8.0, 253.33333333333334], [11.0, 234.66666666666666], [15.0, 242.0], [17.0, 282.0], [18.0, 244.5], [20.0, 224.0], [21.0, 224.0], [23.0, 257.5], [24.0, 278.0], [25.0, 279.0], [27.0, 236.0], [28.0, 257.5], [31.0, 232.0], [32.0, 251.0], [35.0, 228.0], [37.0, 228.66666666666666], [39.0, 244.0], [42.0, 238.0], [45.0, 261.0], [44.0, 264.5], [47.0, 210.0], [48.0, 271.0], [50.0, 224.5], [55.0, 141.0], [54.0, 222.0], [57.0, 167.66666666666666], [56.0, 257.0], [58.0, 37.0], [59.0, 212.0], [61.0, 48.0], [63.0, 92.5], [62.0, 158.5], [67.0, 97.25], [66.0, 65.0], [65.0, 64.0], [64.0, 215.5], [68.0, 58.0], [69.0, 61.0], [70.0, 160.57142857142856], [73.0, 154.5], [72.0, 173.28571428571428], [74.0, 219.0], [79.0, 163.5], [78.0, 74.5], [77.0, 245.0], [76.0, 257.0], [80.0, 69.83333333333334], [81.0, 73.0], [83.0, 72.33333333333333], [82.0, 218.25], [86.0, 224.0], [84.0, 213.0], [89.0, 139.5], [91.0, 239.0], [90.0, 231.0], [88.0, 210.0], [94.0, 117.0], [95.0, 199.0], [93.0, 221.0], [96.0, 126.33333333333334], [99.0, 268.0], [103.0, 213.0], [102.0, 98.0], [101.0, 268.0], [105.0, 185.5], [104.0, 148.0], [107.0, 244.0], [111.0, 172.0], [109.0, 193.0], [108.0, 233.0], [114.0, 210.0], [112.0, 203.0], [119.0, 199.0], [117.0, 245.0], [116.0, 235.0], [122.0, 105.33333333333333], [123.0, 271.0], [121.0, 274.0], [120.0, 245.5], [124.0, 184.66666666666666], [125.0, 240.0], [134.0, 111.66666666666667], [135.0, 107.5], [132.0, 181.0], [131.0, 225.0], [130.0, 236.5], [129.0, 285.0], [136.0, 111.25], [143.0, 248.0], [142.0, 252.25], [140.0, 221.5], [138.0, 150.0], [148.0, 210.5], [149.0, 167.66666666666666], [146.0, 279.6666666666667], [145.0, 255.0], [159.0, 226.0], [158.0, 166.0], [157.0, 195.0], [155.0, 282.5], [153.0, 254.0], [152.0, 225.2], [167.0, 160.0], [166.0, 167.0], [165.0, 212.0], [164.0, 195.0], [162.0, 267.0], [161.0, 273.0], [174.0, 209.0], [173.0, 197.0], [172.0, 207.0], [170.0, 271.0], [169.0, 177.0], [168.0, 164.0], [183.0, 164.0], [181.0, 130.0], [180.0, 188.33333333333334], [178.0, 126.0], [176.0, 197.75], [182.0, 203.66666666666666], [179.0, 231.0], [184.0, 146.66666666666666], [189.0, 131.2857142857143], [190.0, 211.0], [187.0, 213.0], [186.0, 158.0], [185.0, 218.0], [199.0, 200.0], [197.0, 206.0], [193.0, 245.0], [206.0, 215.0], [205.0, 243.5], [203.0, 201.0], [201.0, 233.4], [215.0, 245.0], [214.0, 231.5], [212.0, 233.0], [211.0, 202.0], [209.0, 209.33333333333334], [223.0, 165.0], [222.0, 189.0], [219.0, 190.0], [218.0, 202.66666666666666], [230.0, 193.0], [229.0, 186.5], [227.0, 161.0], [226.0, 173.0], [225.0, 189.0], [239.0, 157.25], [238.0, 157.2], [237.0, 146.0], [233.0, 178.5], [232.0, 204.0], [243.0, 144.0], [242.0, 169.0], [247.0, 190.0], [246.0, 209.33333333333334], [244.0, 213.66666666666666], [241.0, 204.5], [240.0, 207.33333333333334], [255.0, 161.0], [254.0, 164.0], [252.0, 181.0], [251.0, 169.0], [250.0, 182.0], [249.0, 190.0], [248.0, 187.0], [1.0, 228.0]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}, {"data": [[128.09428571428558, 189.2]], "isOverall": false, "label": "gateway_rs/hellotea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 255.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1726.6666666666667, "minX": 1.68830256E12, "maxY": 8895.833333333334, "series": [{"data": [[1.68830256E12, 1726.6666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.68830256E12, 8895.833333333334]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 189.2, "minX": 1.68830256E12, "maxY": 189.2, "series": [{"data": [[1.68830256E12, 189.2]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 189.19428571428566, "minX": 1.68830256E12, "maxY": 189.19428571428566, "series": [{"data": [[1.68830256E12, 189.19428571428566]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.694285714285714, "minX": 1.68830256E12, "maxY": 1.694285714285714, "series": [{"data": [[1.68830256E12, 1.694285714285714]], "isOverall": false, "label": "gateway_rs/hellotea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 37.0, "minX": 1.68830256E12, "maxY": 298.0, "series": [{"data": [[1.68830256E12, 298.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.68830256E12, 37.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.68830256E12, 267.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.68830256E12, 293.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.68830256E12, 206.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.68830256E12, 276.9]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 206.0, "minX": 350.0, "maxY": 206.0, "series": [{"data": [[350.0, 206.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 350.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 206.0, "minX": 350.0, "maxY": 206.0, "series": [{"data": [[350.0, 206.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 350.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830256E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830256E12, 5.833333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830256E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830256E12, 5.833333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.68830256E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830256E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830256E12, 5.833333333333333]], "isOverall": false, "label": "gateway_rs/hellotea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 5.833333333333333, "minX": 1.68830256E12, "maxY": 5.833333333333333, "series": [{"data": [[1.68830256E12, 5.833333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.68830256E12, "title": "Total Transactions Per Second"}},
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

