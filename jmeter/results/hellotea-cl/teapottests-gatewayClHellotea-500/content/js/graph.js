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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 374.0, "series": [{"data": [[0.0, 21.0], [0.1, 21.0], [0.2, 22.0], [0.3, 22.0], [0.4, 25.0], [0.5, 25.0], [0.6, 25.0], [0.7, 27.0], [0.8, 31.0], [0.9, 31.0], [1.0, 32.0], [1.1, 32.0], [1.2, 32.0], [1.3, 32.0], [1.4, 34.0], [1.5, 34.0], [1.6, 43.0], [1.7, 43.0], [1.8, 45.0], [1.9, 45.0], [2.0, 46.0], [2.1, 46.0], [2.2, 51.0], [2.3, 51.0], [2.4, 52.0], [2.5, 52.0], [2.6, 52.0], [2.7, 52.0], [2.8, 53.0], [2.9, 53.0], [3.0, 55.0], [3.1, 55.0], [3.2, 57.0], [3.3, 57.0], [3.4, 57.0], [3.5, 57.0], [3.6, 57.0], [3.7, 57.0], [3.8, 57.0], [3.9, 57.0], [4.0, 58.0], [4.1, 58.0], [4.2, 58.0], [4.3, 58.0], [4.4, 59.0], [4.5, 59.0], [4.6, 59.0], [4.7, 59.0], [4.8, 59.0], [4.9, 60.0], [5.0, 60.0], [5.1, 60.0], [5.2, 60.0], [5.3, 63.0], [5.4, 63.0], [5.5, 65.0], [5.6, 65.0], [5.7, 65.0], [5.8, 65.0], [5.9, 66.0], [6.0, 66.0], [6.1, 66.0], [6.2, 66.0], [6.3, 67.0], [6.4, 67.0], [6.5, 67.0], [6.6, 67.0], [6.7, 69.0], [6.8, 69.0], [6.9, 69.0], [7.0, 69.0], [7.1, 69.0], [7.2, 69.0], [7.3, 69.0], [7.4, 69.0], [7.5, 72.0], [7.6, 72.0], [7.7, 77.0], [7.8, 77.0], [7.9, 77.0], [8.0, 77.0], [8.1, 78.0], [8.2, 78.0], [8.3, 78.0], [8.4, 78.0], [8.5, 81.0], [8.6, 81.0], [8.7, 91.0], [8.8, 94.0], [8.9, 94.0], [9.0, 94.0], [9.1, 94.0], [9.2, 94.0], [9.3, 95.0], [9.4, 95.0], [9.5, 95.0], [9.6, 95.0], [9.7, 96.0], [9.8, 97.0], [9.9, 97.0], [10.0, 98.0], [10.1, 98.0], [10.2, 101.0], [10.3, 101.0], [10.4, 104.0], [10.5, 104.0], [10.6, 105.0], [10.7, 105.0], [10.8, 107.0], [10.9, 107.0], [11.0, 108.0], [11.1, 108.0], [11.2, 110.0], [11.3, 110.0], [11.4, 110.0], [11.5, 110.0], [11.6, 114.0], [11.7, 114.0], [11.8, 117.0], [11.9, 117.0], [12.0, 119.0], [12.1, 119.0], [12.2, 119.0], [12.3, 119.0], [12.4, 119.0], [12.5, 119.0], [12.6, 120.0], [12.7, 120.0], [12.8, 120.0], [12.9, 120.0], [13.0, 121.0], [13.1, 121.0], [13.2, 122.0], [13.3, 122.0], [13.4, 122.0], [13.5, 122.0], [13.6, 122.0], [13.7, 122.0], [13.8, 123.0], [13.9, 123.0], [14.0, 124.0], [14.1, 124.0], [14.2, 125.0], [14.3, 125.0], [14.4, 126.0], [14.5, 126.0], [14.6, 126.0], [14.7, 126.0], [14.8, 131.0], [14.9, 131.0], [15.0, 134.0], [15.1, 134.0], [15.2, 135.0], [15.3, 135.0], [15.4, 135.0], [15.5, 135.0], [15.6, 137.0], [15.7, 137.0], [15.8, 138.0], [15.9, 138.0], [16.0, 138.0], [16.1, 138.0], [16.2, 138.0], [16.3, 138.0], [16.4, 142.0], [16.5, 142.0], [16.6, 142.0], [16.7, 142.0], [16.8, 142.0], [16.9, 142.0], [17.0, 142.0], [17.1, 142.0], [17.2, 143.0], [17.3, 143.0], [17.4, 143.0], [17.5, 143.0], [17.6, 143.0], [17.7, 143.0], [17.8, 145.0], [17.9, 145.0], [18.0, 145.0], [18.1, 145.0], [18.2, 146.0], [18.3, 146.0], [18.4, 146.0], [18.5, 146.0], [18.6, 146.0], [18.7, 146.0], [18.8, 146.0], [18.9, 146.0], [19.0, 146.0], [19.1, 146.0], [19.2, 147.0], [19.3, 147.0], [19.4, 147.0], [19.5, 147.0], [19.6, 148.0], [19.7, 148.0], [19.8, 148.0], [19.9, 148.0], [20.0, 149.0], [20.1, 149.0], [20.2, 150.0], [20.3, 150.0], [20.4, 150.0], [20.5, 150.0], [20.6, 150.0], [20.7, 150.0], [20.8, 151.0], [20.9, 151.0], [21.0, 151.0], [21.1, 151.0], [21.2, 151.0], [21.3, 151.0], [21.4, 151.0], [21.5, 151.0], [21.6, 152.0], [21.7, 152.0], [21.8, 153.0], [21.9, 153.0], [22.0, 154.0], [22.1, 154.0], [22.2, 154.0], [22.3, 154.0], [22.4, 154.0], [22.5, 154.0], [22.6, 154.0], [22.7, 154.0], [22.8, 155.0], [22.9, 155.0], [23.0, 155.0], [23.1, 155.0], [23.2, 156.0], [23.3, 156.0], [23.4, 156.0], [23.5, 156.0], [23.6, 156.0], [23.7, 156.0], [23.8, 156.0], [23.9, 156.0], [24.0, 157.0], [24.1, 157.0], [24.2, 157.0], [24.3, 157.0], [24.4, 157.0], [24.5, 157.0], [24.6, 157.0], [24.7, 157.0], [24.8, 157.0], [24.9, 157.0], [25.0, 158.0], [25.1, 158.0], [25.2, 158.0], [25.3, 158.0], [25.4, 158.0], [25.5, 158.0], [25.6, 159.0], [25.7, 159.0], [25.8, 160.0], [25.9, 160.0], [26.0, 160.0], [26.1, 160.0], [26.2, 160.0], [26.3, 160.0], [26.4, 160.0], [26.5, 160.0], [26.6, 161.0], [26.7, 161.0], [26.8, 161.0], [26.9, 161.0], [27.0, 161.0], [27.1, 161.0], [27.2, 162.0], [27.3, 162.0], [27.4, 162.0], [27.5, 162.0], [27.6, 163.0], [27.7, 163.0], [27.8, 163.0], [27.9, 163.0], [28.0, 163.0], [28.1, 163.0], [28.2, 164.0], [28.3, 164.0], [28.4, 164.0], [28.5, 164.0], [28.6, 164.0], [28.7, 164.0], [28.8, 164.0], [28.9, 164.0], [29.0, 164.0], [29.1, 164.0], [29.2, 165.0], [29.3, 165.0], [29.4, 165.0], [29.5, 165.0], [29.6, 165.0], [29.7, 165.0], [29.8, 165.0], [29.9, 165.0], [30.0, 166.0], [30.1, 166.0], [30.2, 166.0], [30.3, 166.0], [30.4, 167.0], [30.5, 167.0], [30.6, 167.0], [30.7, 167.0], [30.8, 168.0], [30.9, 168.0], [31.0, 169.0], [31.1, 169.0], [31.2, 169.0], [31.3, 169.0], [31.4, 169.0], [31.5, 169.0], [31.6, 169.0], [31.7, 169.0], [31.8, 169.0], [31.9, 169.0], [32.0, 169.0], [32.1, 169.0], [32.2, 169.0], [32.3, 169.0], [32.4, 170.0], [32.5, 170.0], [32.6, 170.0], [32.7, 170.0], [32.8, 171.0], [32.9, 171.0], [33.0, 171.0], [33.1, 171.0], [33.2, 171.0], [33.3, 171.0], [33.4, 171.0], [33.5, 171.0], [33.6, 171.0], [33.7, 171.0], [33.8, 172.0], [33.9, 172.0], [34.0, 172.0], [34.1, 172.0], [34.2, 172.0], [34.3, 172.0], [34.4, 172.0], [34.5, 172.0], [34.6, 172.0], [34.7, 172.0], [34.8, 173.0], [34.9, 173.0], [35.0, 173.0], [35.1, 173.0], [35.2, 173.0], [35.3, 173.0], [35.4, 173.0], [35.5, 173.0], [35.6, 174.0], [35.7, 174.0], [35.8, 175.0], [35.9, 175.0], [36.0, 176.0], [36.1, 176.0], [36.2, 176.0], [36.3, 176.0], [36.4, 176.0], [36.5, 176.0], [36.6, 176.0], [36.7, 176.0], [36.8, 176.0], [36.9, 176.0], [37.0, 176.0], [37.1, 176.0], [37.2, 177.0], [37.3, 177.0], [37.4, 177.0], [37.5, 177.0], [37.6, 177.0], [37.7, 177.0], [37.8, 177.0], [37.9, 177.0], [38.0, 178.0], [38.1, 178.0], [38.2, 178.0], [38.3, 178.0], [38.4, 178.0], [38.5, 178.0], [38.6, 178.0], [38.7, 178.0], [38.8, 178.0], [38.9, 178.0], [39.0, 179.0], [39.1, 179.0], [39.2, 179.0], [39.3, 179.0], [39.4, 179.0], [39.5, 179.0], [39.6, 179.0], [39.7, 179.0], [39.8, 179.0], [39.9, 179.0], [40.0, 180.0], [40.1, 180.0], [40.2, 180.0], [40.3, 180.0], [40.4, 180.0], [40.5, 180.0], [40.6, 180.0], [40.7, 180.0], [40.8, 180.0], [40.9, 180.0], [41.0, 180.0], [41.1, 180.0], [41.2, 181.0], [41.3, 181.0], [41.4, 181.0], [41.5, 181.0], [41.6, 181.0], [41.7, 181.0], [41.8, 181.0], [41.9, 181.0], [42.0, 181.0], [42.1, 181.0], [42.2, 183.0], [42.3, 183.0], [42.4, 183.0], [42.5, 183.0], [42.6, 183.0], [42.7, 183.0], [42.8, 183.0], [42.9, 183.0], [43.0, 183.0], [43.1, 183.0], [43.2, 184.0], [43.3, 184.0], [43.4, 185.0], [43.5, 185.0], [43.6, 185.0], [43.7, 185.0], [43.8, 185.0], [43.9, 185.0], [44.0, 185.0], [44.1, 185.0], [44.2, 186.0], [44.3, 186.0], [44.4, 186.0], [44.5, 186.0], [44.6, 187.0], [44.7, 187.0], [44.8, 187.0], [44.9, 187.0], [45.0, 187.0], [45.1, 187.0], [45.2, 187.0], [45.3, 187.0], [45.4, 187.0], [45.5, 187.0], [45.6, 188.0], [45.7, 188.0], [45.8, 188.0], [45.9, 188.0], [46.0, 189.0], [46.1, 189.0], [46.2, 189.0], [46.3, 189.0], [46.4, 189.0], [46.5, 189.0], [46.6, 189.0], [46.7, 189.0], [46.8, 189.0], [46.9, 189.0], [47.0, 190.0], [47.1, 190.0], [47.2, 191.0], [47.3, 191.0], [47.4, 191.0], [47.5, 191.0], [47.6, 191.0], [47.7, 191.0], [47.8, 191.0], [47.9, 191.0], [48.0, 192.0], [48.1, 192.0], [48.2, 193.0], [48.3, 193.0], [48.4, 193.0], [48.5, 193.0], [48.6, 194.0], [48.7, 194.0], [48.8, 195.0], [48.9, 195.0], [49.0, 195.0], [49.1, 195.0], [49.2, 195.0], [49.3, 195.0], [49.4, 196.0], [49.5, 196.0], [49.6, 196.0], [49.7, 196.0], [49.8, 196.0], [49.9, 196.0], [50.0, 197.0], [50.1, 197.0], [50.2, 198.0], [50.3, 198.0], [50.4, 198.0], [50.5, 198.0], [50.6, 198.0], [50.7, 198.0], [50.8, 198.0], [50.9, 198.0], [51.0, 198.0], [51.1, 198.0], [51.2, 198.0], [51.3, 198.0], [51.4, 198.0], [51.5, 199.0], [51.6, 199.0], [51.7, 199.0], [51.8, 199.0], [51.9, 199.0], [52.0, 199.0], [52.1, 199.0], [52.2, 200.0], [52.3, 200.0], [52.4, 200.0], [52.5, 200.0], [52.6, 201.0], [52.7, 201.0], [52.8, 201.0], [52.9, 201.0], [53.0, 201.0], [53.1, 201.0], [53.2, 202.0], [53.3, 202.0], [53.4, 202.0], [53.5, 202.0], [53.6, 202.0], [53.7, 202.0], [53.8, 202.0], [53.9, 203.0], [54.0, 203.0], [54.1, 204.0], [54.2, 204.0], [54.3, 204.0], [54.4, 204.0], [54.5, 204.0], [54.6, 204.0], [54.7, 205.0], [54.8, 205.0], [54.9, 205.0], [55.0, 205.0], [55.1, 206.0], [55.2, 206.0], [55.3, 206.0], [55.4, 206.0], [55.5, 206.0], [55.6, 206.0], [55.7, 207.0], [55.8, 207.0], [55.9, 208.0], [56.0, 208.0], [56.1, 208.0], [56.2, 208.0], [56.3, 208.0], [56.4, 208.0], [56.5, 209.0], [56.6, 209.0], [56.7, 209.0], [56.8, 209.0], [56.9, 209.0], [57.0, 209.0], [57.1, 209.0], [57.2, 209.0], [57.3, 209.0], [57.4, 209.0], [57.5, 210.0], [57.6, 210.0], [57.7, 210.0], [57.8, 210.0], [57.9, 210.0], [58.0, 210.0], [58.1, 210.0], [58.2, 210.0], [58.3, 210.0], [58.4, 210.0], [58.5, 210.0], [58.6, 210.0], [58.7, 211.0], [58.8, 211.0], [58.9, 211.0], [59.0, 211.0], [59.1, 211.0], [59.2, 211.0], [59.3, 211.0], [59.4, 211.0], [59.5, 212.0], [59.6, 212.0], [59.7, 212.0], [59.8, 212.0], [59.9, 212.0], [60.0, 212.0], [60.1, 212.0], [60.2, 212.0], [60.3, 213.0], [60.4, 213.0], [60.5, 213.0], [60.6, 213.0], [60.7, 213.0], [60.8, 213.0], [60.9, 213.0], [61.0, 213.0], [61.1, 213.0], [61.2, 213.0], [61.3, 215.0], [61.4, 215.0], [61.5, 215.0], [61.6, 215.0], [61.7, 215.0], [61.8, 215.0], [61.9, 215.0], [62.0, 215.0], [62.1, 215.0], [62.2, 215.0], [62.3, 216.0], [62.4, 216.0], [62.5, 216.0], [62.6, 216.0], [62.7, 216.0], [62.8, 216.0], [62.9, 217.0], [63.0, 217.0], [63.1, 217.0], [63.2, 217.0], [63.3, 217.0], [63.4, 217.0], [63.5, 218.0], [63.6, 218.0], [63.7, 218.0], [63.8, 218.0], [63.9, 218.0], [64.0, 218.0], [64.1, 218.0], [64.2, 218.0], [64.3, 218.0], [64.4, 219.0], [64.5, 219.0], [64.6, 219.0], [64.7, 219.0], [64.8, 219.0], [64.9, 219.0], [65.0, 220.0], [65.1, 220.0], [65.2, 221.0], [65.3, 221.0], [65.4, 221.0], [65.5, 221.0], [65.6, 221.0], [65.7, 221.0], [65.8, 221.0], [65.9, 221.0], [66.0, 221.0], [66.1, 221.0], [66.2, 222.0], [66.3, 222.0], [66.4, 222.0], [66.5, 222.0], [66.6, 222.0], [66.7, 222.0], [66.8, 223.0], [66.9, 223.0], [67.0, 223.0], [67.1, 223.0], [67.2, 223.0], [67.3, 223.0], [67.4, 224.0], [67.5, 224.0], [67.6, 224.0], [67.7, 224.0], [67.8, 224.0], [67.9, 224.0], [68.0, 224.0], [68.1, 224.0], [68.2, 225.0], [68.3, 225.0], [68.4, 225.0], [68.5, 225.0], [68.6, 225.0], [68.7, 225.0], [68.8, 226.0], [68.9, 226.0], [69.0, 226.0], [69.1, 226.0], [69.2, 226.0], [69.3, 226.0], [69.4, 226.0], [69.5, 226.0], [69.6, 226.0], [69.7, 226.0], [69.8, 226.0], [69.9, 226.0], [70.0, 227.0], [70.1, 227.0], [70.2, 227.0], [70.3, 227.0], [70.4, 227.0], [70.5, 227.0], [70.6, 227.0], [70.7, 227.0], [70.8, 228.0], [70.9, 228.0], [71.0, 228.0], [71.1, 228.0], [71.2, 228.0], [71.3, 228.0], [71.4, 229.0], [71.5, 229.0], [71.6, 230.0], [71.7, 230.0], [71.8, 230.0], [71.9, 230.0], [72.0, 231.0], [72.1, 231.0], [72.2, 231.0], [72.3, 231.0], [72.4, 232.0], [72.5, 232.0], [72.6, 232.0], [72.7, 232.0], [72.8, 232.0], [72.9, 232.0], [73.0, 233.0], [73.1, 233.0], [73.2, 233.0], [73.3, 233.0], [73.4, 233.0], [73.5, 233.0], [73.6, 235.0], [73.7, 235.0], [73.8, 235.0], [73.9, 235.0], [74.0, 235.0], [74.1, 235.0], [74.2, 236.0], [74.3, 236.0], [74.4, 236.0], [74.5, 236.0], [74.6, 236.0], [74.7, 236.0], [74.8, 237.0], [74.9, 237.0], [75.0, 237.0], [75.1, 237.0], [75.2, 237.0], [75.3, 237.0], [75.4, 237.0], [75.5, 237.0], [75.6, 238.0], [75.7, 238.0], [75.8, 238.0], [75.9, 238.0], [76.0, 239.0], [76.1, 239.0], [76.2, 240.0], [76.3, 240.0], [76.4, 240.0], [76.5, 240.0], [76.6, 242.0], [76.7, 242.0], [76.8, 243.0], [76.9, 243.0], [77.0, 244.0], [77.1, 244.0], [77.2, 244.0], [77.3, 244.0], [77.4, 245.0], [77.5, 245.0], [77.6, 245.0], [77.7, 245.0], [77.8, 245.0], [77.9, 245.0], [78.0, 245.0], [78.1, 245.0], [78.2, 246.0], [78.3, 246.0], [78.4, 246.0], [78.5, 246.0], [78.6, 246.0], [78.7, 246.0], [78.8, 246.0], [78.9, 246.0], [79.0, 246.0], [79.1, 246.0], [79.2, 246.0], [79.3, 246.0], [79.4, 246.0], [79.5, 246.0], [79.6, 246.0], [79.7, 246.0], [79.8, 247.0], [79.9, 247.0], [80.0, 247.0], [80.1, 247.0], [80.2, 248.0], [80.3, 248.0], [80.4, 248.0], [80.5, 248.0], [80.6, 249.0], [80.7, 249.0], [80.8, 251.0], [80.9, 251.0], [81.0, 251.0], [81.1, 251.0], [81.2, 252.0], [81.3, 252.0], [81.4, 253.0], [81.5, 253.0], [81.6, 253.0], [81.7, 253.0], [81.8, 253.0], [81.9, 255.0], [82.0, 255.0], [82.1, 255.0], [82.2, 255.0], [82.3, 256.0], [82.4, 256.0], [82.5, 256.0], [82.6, 256.0], [82.7, 257.0], [82.8, 257.0], [82.9, 257.0], [83.0, 257.0], [83.1, 258.0], [83.2, 258.0], [83.3, 258.0], [83.4, 258.0], [83.5, 258.0], [83.6, 258.0], [83.7, 259.0], [83.8, 259.0], [83.9, 260.0], [84.0, 260.0], [84.1, 261.0], [84.2, 261.0], [84.3, 261.0], [84.4, 261.0], [84.5, 262.0], [84.6, 262.0], [84.7, 262.0], [84.8, 262.0], [84.9, 262.0], [85.0, 262.0], [85.1, 263.0], [85.2, 263.0], [85.3, 263.0], [85.4, 263.0], [85.5, 264.0], [85.6, 264.0], [85.7, 265.0], [85.8, 265.0], [85.9, 266.0], [86.0, 266.0], [86.1, 267.0], [86.2, 267.0], [86.3, 268.0], [86.4, 268.0], [86.5, 269.0], [86.6, 269.0], [86.7, 270.0], [86.8, 270.0], [86.9, 270.0], [87.0, 270.0], [87.1, 270.0], [87.2, 270.0], [87.3, 270.0], [87.4, 270.0], [87.5, 272.0], [87.6, 272.0], [87.7, 273.0], [87.8, 273.0], [87.9, 275.0], [88.0, 275.0], [88.1, 276.0], [88.2, 276.0], [88.3, 277.0], [88.4, 277.0], [88.5, 277.0], [88.6, 277.0], [88.7, 277.0], [88.8, 277.0], [88.9, 278.0], [89.0, 278.0], [89.1, 278.0], [89.2, 278.0], [89.3, 278.0], [89.4, 278.0], [89.5, 278.0], [89.6, 278.0], [89.7, 278.0], [89.8, 278.0], [89.9, 279.0], [90.0, 279.0], [90.1, 279.0], [90.2, 279.0], [90.3, 280.0], [90.4, 280.0], [90.5, 280.0], [90.6, 280.0], [90.7, 281.0], [90.8, 281.0], [90.9, 281.0], [91.0, 281.0], [91.1, 281.0], [91.2, 281.0], [91.3, 281.0], [91.4, 281.0], [91.5, 282.0], [91.6, 282.0], [91.7, 282.0], [91.8, 282.0], [91.9, 282.0], [92.0, 282.0], [92.1, 282.0], [92.2, 282.0], [92.3, 283.0], [92.4, 283.0], [92.5, 284.0], [92.6, 284.0], [92.7, 284.0], [92.8, 284.0], [92.9, 284.0], [93.0, 284.0], [93.1, 287.0], [93.2, 287.0], [93.3, 287.0], [93.4, 287.0], [93.5, 287.0], [93.6, 287.0], [93.7, 287.0], [93.8, 287.0], [93.9, 289.0], [94.0, 289.0], [94.1, 290.0], [94.2, 290.0], [94.3, 290.0], [94.4, 290.0], [94.5, 291.0], [94.6, 291.0], [94.7, 291.0], [94.8, 291.0], [94.9, 292.0], [95.0, 292.0], [95.1, 293.0], [95.2, 293.0], [95.3, 293.0], [95.4, 293.0], [95.5, 295.0], [95.6, 295.0], [95.7, 297.0], [95.8, 297.0], [95.9, 301.0], [96.0, 301.0], [96.1, 302.0], [96.2, 302.0], [96.3, 303.0], [96.4, 303.0], [96.5, 305.0], [96.6, 305.0], [96.7, 307.0], [96.8, 307.0], [96.9, 307.0], [97.0, 307.0], [97.1, 310.0], [97.2, 310.0], [97.3, 310.0], [97.4, 310.0], [97.5, 310.0], [97.6, 310.0], [97.7, 310.0], [97.8, 310.0], [97.9, 321.0], [98.0, 321.0], [98.1, 322.0], [98.2, 322.0], [98.3, 323.0], [98.4, 323.0], [98.5, 325.0], [98.6, 325.0], [98.7, 332.0], [98.8, 332.0], [98.9, 339.0], [99.0, 339.0], [99.1, 341.0], [99.2, 341.0], [99.3, 347.0], [99.4, 347.0], [99.5, 350.0], [99.6, 350.0], [99.7, 352.0], [99.8, 352.0], [99.9, 374.0], [100.0, 374.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 21.0, "minX": 0.0, "maxY": 218.0, "series": [{"data": [[0.0, 51.0], [300.0, 21.0], [100.0, 210.0], [200.0, 218.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 188.39800000000008, "minX": 1.6883007E12, "maxY": 188.39800000000008, "series": [{"data": [[1.6883007E12, 188.39800000000008]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 21.5, "minX": 4.0, "maxY": 352.0, "series": [{"data": [[4.0, 160.5], [5.0, 122.0], [8.0, 172.0], [9.0, 198.0], [11.0, 178.0], [14.0, 177.66666666666666], [16.0, 151.5], [17.0, 142.0], [18.0, 256.0], [19.0, 164.0], [22.0, 152.33333333333334], [23.0, 138.0], [24.0, 159.0], [25.0, 119.0], [27.0, 161.5], [30.0, 203.0], [36.0, 151.16666666666666], [41.0, 207.0], [40.0, 161.5], [43.0, 21.5], [45.0, 150.0], [44.0, 190.5], [46.0, 52.33333333333333], [49.0, 34.0], [48.0, 151.66666666666666], [50.0, 31.666666666666668], [51.0, 189.0], [53.0, 156.0], [55.0, 136.0], [54.0, 147.0], [57.0, 124.0], [56.0, 176.0], [60.0, 165.0], [63.0, 133.66666666666666], [62.0, 181.5], [65.0, 107.0], [66.0, 45.0], [70.0, 119.0], [75.0, 157.0], [73.0, 201.5], [72.0, 154.0], [76.0, 229.5], [83.0, 161.33333333333334], [81.0, 144.0], [80.0, 174.5], [87.0, 156.0], [86.0, 223.5], [84.0, 227.0], [91.0, 222.5], [89.0, 178.0], [95.0, 230.0], [93.0, 149.0], [92.0, 165.0], [99.0, 111.6], [97.0, 57.0], [96.0, 113.0], [103.0, 171.0], [102.0, 150.16666666666669], [101.0, 57.0], [100.0, 102.6], [105.0, 114.33333333333334], [104.0, 291.0], [110.0, 208.6], [114.0, 273.3333333333333], [112.0, 177.0], [119.0, 161.66666666666666], [118.0, 194.0], [117.0, 293.0], [123.0, 126.6], [122.0, 88.25], [121.0, 65.0], [120.0, 218.33333333333334], [124.0, 67.5], [125.0, 205.5], [135.0, 81.0], [134.0, 176.5], [132.0, 221.0], [131.0, 197.66666666666666], [129.0, 218.0], [128.0, 162.5], [139.0, 171.0], [138.0, 77.0], [137.0, 155.33333333333334], [136.0, 226.0], [142.0, 203.5], [141.0, 169.0], [150.0, 307.0], [149.0, 226.0], [148.0, 157.0], [147.0, 310.0], [145.0, 282.0], [144.0, 172.0], [159.0, 94.5], [158.0, 194.0], [157.0, 154.0], [156.0, 242.0], [155.0, 238.0], [153.0, 193.33333333333334], [163.0, 145.66666666666666], [162.0, 121.33333333333333], [161.0, 133.5], [166.0, 202.0], [165.0, 160.5], [160.0, 188.0], [175.0, 290.0], [173.0, 240.0], [171.0, 233.0], [169.0, 146.0], [168.0, 204.5], [183.0, 267.0], [181.0, 332.0], [180.0, 276.5], [178.0, 261.0], [176.0, 278.0], [191.0, 247.0], [189.0, 253.0], [188.0, 282.5], [186.0, 347.0], [185.0, 294.0], [184.0, 255.0], [197.0, 287.0], [195.0, 243.33333333333334], [192.0, 283.0], [207.0, 262.0], [206.0, 310.0], [204.0, 260.6666666666667], [202.0, 246.0], [200.0, 236.0], [214.0, 260.0], [213.0, 285.0], [211.0, 352.0], [209.0, 268.0], [222.0, 191.0], [223.0, 289.6666666666667], [219.0, 227.0], [231.0, 203.0], [230.0, 246.0], [229.0, 281.0], [228.0, 269.0], [227.0, 268.0], [224.0, 268.6666666666667], [238.0, 253.0], [236.0, 248.66666666666666], [235.0, 272.0], [247.0, 190.0], [246.0, 121.0], [245.0, 192.83333333333334], [243.0, 142.0], [244.0, 272.0], [241.0, 243.66666666666666], [240.0, 217.0], [250.0, 178.0], [249.0, 151.5], [255.0, 197.0], [254.0, 172.0], [253.0, 161.5], [252.0, 169.0], [251.0, 179.0], [248.0, 266.0], [258.0, 209.5], [261.0, 163.6], [260.0, 203.0], [257.0, 174.85714285714286], [256.0, 260.3333333333333], [267.0, 183.25], [266.0, 160.0], [265.0, 200.8], [264.0, 202.5], [259.0, 161.0], [268.0, 290.0], [270.0, 223.0], [269.0, 199.0], [263.0, 182.66666666666666], [262.0, 220.5], [274.0, 203.66666666666666], [286.0, 191.0], [287.0, 181.0], [284.0, 211.0], [275.0, 301.0], [283.0, 226.0], [282.0, 232.0], [279.0, 169.33333333333334], [277.0, 225.33333333333334], [276.0, 229.0], [273.0, 192.33333333333334], [272.0, 192.33333333333334], [300.0, 186.66666666666666], [291.0, 219.33333333333334], [290.0, 205.0], [289.0, 194.33333333333334], [288.0, 193.0], [294.0, 196.16666666666666], [292.0, 227.0], [293.0, 210.0], [295.0, 210.0], [301.0, 201.0], [303.0, 185.0], [302.0, 173.0], [299.0, 182.0], [298.0, 192.75], [296.0, 208.66666666666666], [297.0, 193.2], [304.0, 196.0], [306.0, 210.5], [318.0, 235.85106382978722], [317.0, 155.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[188.39800000000008, 193.63]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 318.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1516.6666666666667, "minX": 1.6883007E12, "maxY": 3333.3333333333335, "series": [{"data": [[1.6883007E12, 3333.3333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883007E12, 1516.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 193.63, "minX": 1.6883007E12, "maxY": 193.63, "series": [{"data": [[1.6883007E12, 193.63]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 193.62800000000016, "minX": 1.6883007E12, "maxY": 193.62800000000016, "series": [{"data": [[1.6883007E12, 193.62800000000016]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.8359999999999999, "minX": 1.6883007E12, "maxY": 0.8359999999999999, "series": [{"data": [[1.6883007E12, 0.8359999999999999]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 21.0, "minX": 1.6883007E12, "maxY": 374.0, "series": [{"data": [[1.6883007E12, 374.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883007E12, 21.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883007E12, 279.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883007E12, 340.98]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883007E12, 196.5]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883007E12, 292.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 81.0, "minX": 85.0, "maxY": 210.0, "series": [{"data": [[85.0, 81.0], [415.0, 210.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 415.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 81.0, "minX": 85.0, "maxY": 210.0, "series": [{"data": [[85.0, 81.0], [415.0, 210.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 415.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883007E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883007E12, 8.333333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883007E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883007E12, 8.333333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883007E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883007E12, 8.333333333333334]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.333333333333334, "minX": 1.6883007E12, "maxY": 8.333333333333334, "series": [{"data": [[1.6883007E12, 8.333333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Total Transactions Per Second"}},
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

