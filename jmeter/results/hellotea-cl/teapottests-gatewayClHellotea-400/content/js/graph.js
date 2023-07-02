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
        data: {"result": {"minY": 26.0, "minX": 0.0, "maxY": 265.0, "series": [{"data": [[0.0, 26.0], [0.1, 26.0], [0.2, 26.0], [0.3, 27.0], [0.4, 27.0], [0.5, 27.0], [0.6, 27.0], [0.7, 27.0], [0.8, 28.0], [0.9, 28.0], [1.0, 28.0], [1.1, 28.0], [1.2, 28.0], [1.3, 32.0], [1.4, 32.0], [1.5, 35.0], [1.6, 35.0], [1.7, 35.0], [1.8, 36.0], [1.9, 36.0], [2.0, 42.0], [2.1, 42.0], [2.2, 42.0], [2.3, 42.0], [2.4, 42.0], [2.5, 43.0], [2.6, 43.0], [2.7, 43.0], [2.8, 44.0], [2.9, 44.0], [3.0, 45.0], [3.1, 45.0], [3.2, 45.0], [3.3, 45.0], [3.4, 45.0], [3.5, 50.0], [3.6, 50.0], [3.7, 50.0], [3.8, 56.0], [3.9, 56.0], [4.0, 56.0], [4.1, 56.0], [4.2, 56.0], [4.3, 58.0], [4.4, 58.0], [4.5, 58.0], [4.6, 58.0], [4.7, 58.0], [4.8, 59.0], [4.9, 59.0], [5.0, 59.0], [5.1, 59.0], [5.2, 59.0], [5.3, 60.0], [5.4, 60.0], [5.5, 60.0], [5.6, 60.0], [5.7, 60.0], [5.8, 60.0], [5.9, 60.0], [6.0, 60.0], [6.1, 60.0], [6.2, 60.0], [6.3, 61.0], [6.4, 61.0], [6.5, 61.0], [6.6, 61.0], [6.7, 61.0], [6.8, 61.0], [6.9, 61.0], [7.0, 63.0], [7.1, 63.0], [7.2, 63.0], [7.3, 64.0], [7.4, 64.0], [7.5, 65.0], [7.6, 65.0], [7.7, 65.0], [7.8, 65.0], [7.9, 65.0], [8.0, 65.0], [8.1, 65.0], [8.2, 65.0], [8.3, 66.0], [8.4, 66.0], [8.5, 67.0], [8.6, 67.0], [8.7, 67.0], [8.8, 67.0], [8.9, 67.0], [9.0, 67.0], [9.1, 67.0], [9.2, 67.0], [9.3, 67.0], [9.4, 67.0], [9.5, 68.0], [9.6, 68.0], [9.7, 68.0], [9.8, 70.0], [9.9, 70.0], [10.0, 70.0], [10.1, 70.0], [10.2, 70.0], [10.3, 70.0], [10.4, 70.0], [10.5, 72.0], [10.6, 72.0], [10.7, 72.0], [10.8, 73.0], [10.9, 73.0], [11.0, 75.0], [11.1, 75.0], [11.2, 75.0], [11.3, 76.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 76.0], [12.0, 79.0], [12.1, 79.0], [12.2, 79.0], [12.3, 80.0], [12.4, 80.0], [12.5, 81.0], [12.6, 81.0], [12.7, 81.0], [12.8, 83.0], [12.9, 83.0], [13.0, 83.0], [13.1, 83.0], [13.2, 83.0], [13.3, 86.0], [13.4, 86.0], [13.5, 87.0], [13.6, 87.0], [13.7, 87.0], [13.8, 89.0], [13.9, 89.0], [14.0, 90.0], [14.1, 90.0], [14.2, 90.0], [14.3, 94.0], [14.4, 94.0], [14.5, 96.0], [14.6, 96.0], [14.7, 96.0], [14.8, 98.0], [14.9, 98.0], [15.0, 99.0], [15.1, 99.0], [15.2, 99.0], [15.3, 101.0], [15.4, 101.0], [15.5, 102.0], [15.6, 102.0], [15.7, 102.0], [15.8, 102.0], [15.9, 102.0], [16.0, 103.0], [16.1, 103.0], [16.2, 103.0], [16.3, 106.0], [16.4, 106.0], [16.5, 108.0], [16.6, 108.0], [16.7, 108.0], [16.8, 108.0], [16.9, 108.0], [17.0, 108.0], [17.1, 108.0], [17.2, 108.0], [17.3, 108.0], [17.4, 108.0], [17.5, 110.0], [17.6, 110.0], [17.7, 110.0], [17.8, 111.0], [17.9, 111.0], [18.0, 111.0], [18.1, 111.0], [18.2, 111.0], [18.3, 115.0], [18.4, 115.0], [18.5, 116.0], [18.6, 116.0], [18.7, 116.0], [18.8, 117.0], [18.9, 117.0], [19.0, 117.0], [19.1, 117.0], [19.2, 117.0], [19.3, 118.0], [19.4, 118.0], [19.5, 119.0], [19.6, 119.0], [19.7, 119.0], [19.8, 119.0], [19.9, 119.0], [20.0, 120.0], [20.1, 120.0], [20.2, 120.0], [20.3, 120.0], [20.4, 120.0], [20.5, 123.0], [20.6, 123.0], [20.7, 123.0], [20.8, 124.0], [20.9, 124.0], [21.0, 124.0], [21.1, 124.0], [21.2, 124.0], [21.3, 124.0], [21.4, 124.0], [21.5, 124.0], [21.6, 124.0], [21.7, 124.0], [21.8, 125.0], [21.9, 125.0], [22.0, 125.0], [22.1, 125.0], [22.2, 125.0], [22.3, 126.0], [22.4, 126.0], [22.5, 126.0], [22.6, 126.0], [22.7, 126.0], [22.8, 127.0], [22.9, 127.0], [23.0, 127.0], [23.1, 127.0], [23.2, 127.0], [23.3, 127.0], [23.4, 127.0], [23.5, 127.0], [23.6, 127.0], [23.7, 127.0], [23.8, 128.0], [23.9, 128.0], [24.0, 128.0], [24.1, 128.0], [24.2, 128.0], [24.3, 128.0], [24.4, 128.0], [24.5, 128.0], [24.6, 128.0], [24.7, 128.0], [24.8, 129.0], [24.9, 129.0], [25.0, 129.0], [25.1, 129.0], [25.2, 129.0], [25.3, 130.0], [25.4, 130.0], [25.5, 130.0], [25.6, 130.0], [25.7, 130.0], [25.8, 132.0], [25.9, 132.0], [26.0, 133.0], [26.1, 133.0], [26.2, 133.0], [26.3, 133.0], [26.4, 133.0], [26.5, 133.0], [26.6, 133.0], [26.7, 133.0], [26.8, 134.0], [26.9, 134.0], [27.0, 134.0], [27.1, 134.0], [27.2, 134.0], [27.3, 134.0], [27.4, 134.0], [27.5, 135.0], [27.6, 135.0], [27.7, 135.0], [27.8, 135.0], [27.9, 135.0], [28.0, 136.0], [28.1, 136.0], [28.2, 136.0], [28.3, 136.0], [28.4, 136.0], [28.5, 137.0], [28.6, 137.0], [28.7, 137.0], [28.8, 138.0], [28.9, 138.0], [29.0, 139.0], [29.1, 139.0], [29.2, 139.0], [29.3, 140.0], [29.4, 140.0], [29.5, 141.0], [29.6, 141.0], [29.7, 141.0], [29.8, 143.0], [29.9, 143.0], [30.0, 143.0], [30.1, 143.0], [30.2, 143.0], [30.3, 143.0], [30.4, 143.0], [30.5, 144.0], [30.6, 144.0], [30.7, 144.0], [30.8, 144.0], [30.9, 144.0], [31.0, 144.0], [31.1, 144.0], [31.2, 144.0], [31.3, 145.0], [31.4, 145.0], [31.5, 145.0], [31.6, 145.0], [31.7, 145.0], [31.8, 146.0], [31.9, 146.0], [32.0, 146.0], [32.1, 146.0], [32.2, 146.0], [32.3, 146.0], [32.4, 146.0], [32.5, 146.0], [32.6, 146.0], [32.7, 146.0], [32.8, 147.0], [32.9, 147.0], [33.0, 148.0], [33.1, 148.0], [33.2, 148.0], [33.3, 149.0], [33.4, 149.0], [33.5, 149.0], [33.6, 149.0], [33.7, 149.0], [33.8, 149.0], [33.9, 149.0], [34.0, 149.0], [34.1, 149.0], [34.2, 149.0], [34.3, 149.0], [34.4, 149.0], [34.5, 150.0], [34.6, 150.0], [34.7, 150.0], [34.8, 150.0], [34.9, 150.0], [35.0, 150.0], [35.1, 150.0], [35.2, 150.0], [35.3, 151.0], [35.4, 151.0], [35.5, 151.0], [35.6, 151.0], [35.7, 151.0], [35.8, 151.0], [35.9, 151.0], [36.0, 151.0], [36.1, 151.0], [36.2, 151.0], [36.3, 152.0], [36.4, 152.0], [36.5, 152.0], [36.6, 152.0], [36.7, 152.0], [36.8, 152.0], [36.9, 152.0], [37.0, 153.0], [37.1, 153.0], [37.2, 153.0], [37.3, 153.0], [37.4, 153.0], [37.5, 153.0], [37.6, 153.0], [37.7, 153.0], [37.8, 153.0], [37.9, 153.0], [38.0, 153.0], [38.1, 153.0], [38.2, 153.0], [38.3, 154.0], [38.4, 154.0], [38.5, 154.0], [38.6, 154.0], [38.7, 154.0], [38.8, 154.0], [38.9, 154.0], [39.0, 155.0], [39.1, 155.0], [39.2, 155.0], [39.3, 155.0], [39.4, 155.0], [39.5, 156.0], [39.6, 156.0], [39.7, 156.0], [39.8, 156.0], [39.9, 156.0], [40.0, 156.0], [40.1, 156.0], [40.2, 156.0], [40.3, 156.0], [40.4, 156.0], [40.5, 156.0], [40.6, 156.0], [40.7, 156.0], [40.8, 156.0], [40.9, 156.0], [41.0, 157.0], [41.1, 157.0], [41.2, 157.0], [41.3, 157.0], [41.4, 157.0], [41.5, 157.0], [41.6, 157.0], [41.7, 157.0], [41.8, 157.0], [41.9, 157.0], [42.0, 158.0], [42.1, 158.0], [42.2, 158.0], [42.3, 159.0], [42.4, 159.0], [42.5, 159.0], [42.6, 159.0], [42.7, 159.0], [42.8, 159.0], [42.9, 159.0], [43.0, 159.0], [43.1, 159.0], [43.2, 159.0], [43.3, 159.0], [43.4, 159.0], [43.5, 160.0], [43.6, 160.0], [43.7, 160.0], [43.8, 160.0], [43.9, 160.0], [44.0, 160.0], [44.1, 160.0], [44.2, 160.0], [44.3, 161.0], [44.4, 161.0], [44.5, 161.0], [44.6, 161.0], [44.7, 161.0], [44.8, 161.0], [44.9, 161.0], [45.0, 161.0], [45.1, 161.0], [45.2, 161.0], [45.3, 161.0], [45.4, 161.0], [45.5, 161.0], [45.6, 161.0], [45.7, 161.0], [45.8, 162.0], [45.9, 162.0], [46.0, 162.0], [46.1, 162.0], [46.2, 162.0], [46.3, 162.0], [46.4, 162.0], [46.5, 162.0], [46.6, 162.0], [46.7, 162.0], [46.8, 162.0], [46.9, 162.0], [47.0, 163.0], [47.1, 163.0], [47.2, 163.0], [47.3, 163.0], [47.4, 163.0], [47.5, 164.0], [47.6, 164.0], [47.7, 164.0], [47.8, 164.0], [47.9, 164.0], [48.0, 165.0], [48.1, 165.0], [48.2, 165.0], [48.3, 165.0], [48.4, 165.0], [48.5, 165.0], [48.6, 165.0], [48.7, 165.0], [48.8, 165.0], [48.9, 165.0], [49.0, 166.0], [49.1, 166.0], [49.2, 166.0], [49.3, 166.0], [49.4, 166.0], [49.5, 166.0], [49.6, 166.0], [49.7, 166.0], [49.8, 167.0], [49.9, 167.0], [50.0, 167.0], [50.1, 167.0], [50.2, 167.0], [50.3, 167.0], [50.4, 167.0], [50.5, 167.0], [50.6, 167.0], [50.7, 167.0], [50.8, 167.0], [50.9, 167.0], [51.0, 167.0], [51.1, 167.0], [51.2, 167.0], [51.3, 168.0], [51.4, 168.0], [51.5, 168.0], [51.6, 168.0], [51.7, 168.0], [51.8, 169.0], [51.9, 169.0], [52.0, 169.0], [52.1, 169.0], [52.2, 169.0], [52.3, 169.0], [52.4, 169.0], [52.5, 169.0], [52.6, 169.0], [52.7, 169.0], [52.8, 170.0], [52.9, 170.0], [53.0, 170.0], [53.1, 170.0], [53.2, 170.0], [53.3, 172.0], [53.4, 172.0], [53.5, 172.0], [53.6, 172.0], [53.7, 172.0], [53.8, 172.0], [53.9, 172.0], [54.0, 173.0], [54.1, 173.0], [54.2, 173.0], [54.3, 173.0], [54.4, 173.0], [54.5, 174.0], [54.6, 174.0], [54.7, 174.0], [54.8, 174.0], [54.9, 174.0], [55.0, 174.0], [55.1, 174.0], [55.2, 174.0], [55.3, 175.0], [55.4, 175.0], [55.5, 175.0], [55.6, 175.0], [55.7, 175.0], [55.8, 175.0], [55.9, 175.0], [56.0, 176.0], [56.1, 176.0], [56.2, 176.0], [56.3, 176.0], [56.4, 176.0], [56.5, 176.0], [56.6, 176.0], [56.7, 176.0], [56.8, 176.0], [56.9, 176.0], [57.0, 177.0], [57.1, 177.0], [57.2, 177.0], [57.3, 177.0], [57.4, 177.0], [57.5, 177.0], [57.6, 177.0], [57.7, 177.0], [57.8, 177.0], [57.9, 177.0], [58.0, 177.0], [58.1, 177.0], [58.2, 177.0], [58.3, 177.0], [58.4, 177.0], [58.5, 178.0], [58.6, 178.0], [58.7, 178.0], [58.8, 178.0], [58.9, 178.0], [59.0, 178.0], [59.1, 178.0], [59.2, 178.0], [59.3, 178.0], [59.4, 178.0], [59.5, 179.0], [59.6, 179.0], [59.7, 179.0], [59.8, 179.0], [59.9, 179.0], [60.0, 179.0], [60.1, 179.0], [60.2, 179.0], [60.3, 179.0], [60.4, 179.0], [60.5, 181.0], [60.6, 181.0], [60.7, 181.0], [60.8, 182.0], [60.9, 182.0], [61.0, 183.0], [61.1, 183.0], [61.2, 183.0], [61.3, 183.0], [61.4, 183.0], [61.5, 183.0], [61.6, 183.0], [61.7, 183.0], [61.8, 184.0], [61.9, 184.0], [62.0, 184.0], [62.1, 184.0], [62.2, 184.0], [62.3, 186.0], [62.4, 186.0], [62.5, 186.0], [62.6, 186.0], [62.7, 186.0], [62.8, 186.0], [62.9, 186.0], [63.0, 186.0], [63.1, 186.0], [63.2, 186.0], [63.3, 186.0], [63.4, 186.0], [63.5, 186.0], [63.6, 186.0], [63.7, 186.0], [63.8, 187.0], [63.9, 187.0], [64.0, 187.0], [64.1, 187.0], [64.2, 187.0], [64.3, 187.0], [64.4, 187.0], [64.5, 187.0], [64.6, 187.0], [64.7, 187.0], [64.8, 188.0], [64.9, 188.0], [65.0, 188.0], [65.1, 188.0], [65.2, 188.0], [65.3, 188.0], [65.4, 188.0], [65.5, 189.0], [65.6, 189.0], [65.7, 189.0], [65.8, 189.0], [65.9, 189.0], [66.0, 190.0], [66.1, 190.0], [66.2, 190.0], [66.3, 190.0], [66.4, 190.0], [66.5, 190.0], [66.6, 190.0], [66.7, 190.0], [66.8, 190.0], [66.9, 190.0], [67.0, 190.0], [67.1, 190.0], [67.2, 190.0], [67.3, 191.0], [67.4, 191.0], [67.5, 191.0], [67.6, 191.0], [67.7, 191.0], [67.8, 191.0], [67.9, 191.0], [68.0, 191.0], [68.1, 191.0], [68.2, 191.0], [68.3, 192.0], [68.4, 192.0], [68.5, 192.0], [68.6, 192.0], [68.7, 192.0], [68.8, 193.0], [68.9, 193.0], [69.0, 193.0], [69.1, 193.0], [69.2, 193.0], [69.3, 193.0], [69.4, 193.0], [69.5, 194.0], [69.6, 194.0], [69.7, 194.0], [69.8, 195.0], [69.9, 195.0], [70.0, 196.0], [70.1, 196.0], [70.2, 196.0], [70.3, 196.0], [70.4, 196.0], [70.5, 196.0], [70.6, 196.0], [70.7, 196.0], [70.8, 196.0], [70.9, 196.0], [71.0, 196.0], [71.1, 196.0], [71.2, 196.0], [71.3, 197.0], [71.4, 197.0], [71.5, 198.0], [71.6, 198.0], [71.7, 198.0], [71.8, 198.0], [71.9, 198.0], [72.0, 200.0], [72.1, 200.0], [72.2, 200.0], [72.3, 200.0], [72.4, 200.0], [72.5, 200.0], [72.6, 200.0], [72.7, 200.0], [72.8, 200.0], [72.9, 200.0], [73.0, 201.0], [73.1, 201.0], [73.2, 201.0], [73.3, 201.0], [73.4, 201.0], [73.5, 202.0], [73.6, 202.0], [73.7, 202.0], [73.8, 203.0], [73.9, 203.0], [74.0, 203.0], [74.1, 203.0], [74.2, 203.0], [74.3, 203.0], [74.4, 203.0], [74.5, 204.0], [74.6, 204.0], [74.7, 204.0], [74.8, 204.0], [74.9, 204.0], [75.0, 205.0], [75.1, 205.0], [75.2, 205.0], [75.3, 205.0], [75.4, 205.0], [75.5, 206.0], [75.6, 206.0], [75.7, 206.0], [75.8, 206.0], [75.9, 206.0], [76.0, 206.0], [76.1, 206.0], [76.2, 206.0], [76.3, 207.0], [76.4, 207.0], [76.5, 207.0], [76.6, 207.0], [76.7, 207.0], [76.8, 207.0], [76.9, 207.0], [77.0, 207.0], [77.1, 207.0], [77.2, 207.0], [77.3, 207.0], [77.4, 207.0], [77.5, 208.0], [77.6, 208.0], [77.7, 208.0], [77.8, 209.0], [77.9, 209.0], [78.0, 209.0], [78.1, 209.0], [78.2, 209.0], [78.3, 209.0], [78.4, 209.0], [78.5, 209.0], [78.6, 209.0], [78.7, 209.0], [78.8, 211.0], [78.9, 211.0], [79.0, 211.0], [79.1, 211.0], [79.2, 211.0], [79.3, 211.0], [79.4, 211.0], [79.5, 212.0], [79.6, 212.0], [79.7, 212.0], [79.8, 212.0], [79.9, 212.0], [80.0, 212.0], [80.1, 212.0], [80.2, 212.0], [80.3, 212.0], [80.4, 212.0], [80.5, 214.0], [80.6, 214.0], [80.7, 214.0], [80.8, 214.0], [80.9, 214.0], [81.0, 215.0], [81.1, 215.0], [81.2, 215.0], [81.3, 216.0], [81.4, 216.0], [81.5, 217.0], [81.6, 217.0], [81.7, 217.0], [81.8, 217.0], [81.9, 217.0], [82.0, 217.0], [82.1, 217.0], [82.2, 217.0], [82.3, 218.0], [82.4, 218.0], [82.5, 218.0], [82.6, 218.0], [82.7, 218.0], [82.8, 218.0], [82.9, 218.0], [83.0, 218.0], [83.1, 218.0], [83.2, 218.0], [83.3, 219.0], [83.4, 219.0], [83.5, 219.0], [83.6, 219.0], [83.7, 219.0], [83.8, 219.0], [83.9, 219.0], [84.0, 220.0], [84.1, 220.0], [84.2, 220.0], [84.3, 221.0], [84.4, 221.0], [84.5, 222.0], [84.6, 222.0], [84.7, 222.0], [84.8, 222.0], [84.9, 222.0], [85.0, 223.0], [85.1, 223.0], [85.2, 223.0], [85.3, 223.0], [85.4, 223.0], [85.5, 223.0], [85.6, 223.0], [85.7, 223.0], [85.8, 223.0], [85.9, 223.0], [86.0, 223.0], [86.1, 223.0], [86.2, 223.0], [86.3, 224.0], [86.4, 224.0], [86.5, 224.0], [86.6, 224.0], [86.7, 224.0], [86.8, 224.0], [86.9, 224.0], [87.0, 225.0], [87.1, 225.0], [87.2, 225.0], [87.3, 225.0], [87.4, 225.0], [87.5, 225.0], [87.6, 225.0], [87.7, 225.0], [87.8, 226.0], [87.9, 226.0], [88.0, 227.0], [88.1, 227.0], [88.2, 227.0], [88.3, 227.0], [88.4, 227.0], [88.5, 228.0], [88.6, 228.0], [88.7, 228.0], [88.8, 228.0], [88.9, 228.0], [89.0, 229.0], [89.1, 229.0], [89.2, 229.0], [89.3, 229.0], [89.4, 229.0], [89.5, 229.0], [89.6, 229.0], [89.7, 229.0], [89.8, 229.0], [89.9, 229.0], [90.0, 230.0], [90.1, 230.0], [90.2, 230.0], [90.3, 230.0], [90.4, 230.0], [90.5, 231.0], [90.6, 231.0], [90.7, 231.0], [90.8, 231.0], [90.9, 231.0], [91.0, 231.0], [91.1, 231.0], [91.2, 231.0], [91.3, 232.0], [91.4, 232.0], [91.5, 233.0], [91.6, 233.0], [91.7, 233.0], [91.8, 233.0], [91.9, 233.0], [92.0, 233.0], [92.1, 233.0], [92.2, 233.0], [92.3, 233.0], [92.4, 233.0], [92.5, 234.0], [92.6, 234.0], [92.7, 234.0], [92.8, 235.0], [92.9, 235.0], [93.0, 235.0], [93.1, 235.0], [93.2, 235.0], [93.3, 235.0], [93.4, 235.0], [93.5, 237.0], [93.6, 237.0], [93.7, 237.0], [93.8, 237.0], [93.9, 237.0], [94.0, 239.0], [94.1, 239.0], [94.2, 239.0], [94.3, 241.0], [94.4, 241.0], [94.5, 241.0], [94.6, 241.0], [94.7, 241.0], [94.8, 241.0], [94.9, 241.0], [95.0, 242.0], [95.1, 242.0], [95.2, 242.0], [95.3, 242.0], [95.4, 242.0], [95.5, 243.0], [95.6, 243.0], [95.7, 243.0], [95.8, 243.0], [95.9, 243.0], [96.0, 244.0], [96.1, 244.0], [96.2, 244.0], [96.3, 245.0], [96.4, 245.0], [96.5, 247.0], [96.6, 247.0], [96.7, 247.0], [96.8, 247.0], [96.9, 247.0], [97.0, 248.0], [97.1, 248.0], [97.2, 248.0], [97.3, 248.0], [97.4, 248.0], [97.5, 249.0], [97.6, 249.0], [97.7, 249.0], [97.8, 249.0], [97.9, 249.0], [98.0, 249.0], [98.1, 249.0], [98.2, 249.0], [98.3, 250.0], [98.4, 250.0], [98.5, 251.0], [98.6, 251.0], [98.7, 251.0], [98.8, 254.0], [98.9, 254.0], [99.0, 255.0], [99.1, 255.0], [99.2, 255.0], [99.3, 256.0], [99.4, 256.0], [99.5, 261.0], [99.6, 261.0], [99.7, 261.0], [99.8, 265.0], [99.9, 265.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 61.0, "minX": 0.0, "maxY": 227.0, "series": [{"data": [[0.0, 61.0], [100.0, 227.0], [200.0, 112.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 142.55750000000006, "minX": 1.6883007E12, "maxY": 142.55750000000006, "series": [{"data": [[1.6883007E12, 142.55750000000006]], "isOverall": false, "label": "gateway_cl/hellotea", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 27.0, "minX": 4.0, "maxY": 251.0, "series": [{"data": [[4.0, 249.0], [5.0, 243.0], [7.0, 236.0], [9.0, 233.5], [12.0, 226.0], [13.0, 214.0], [15.0, 167.5], [16.0, 226.0], [18.0, 223.5], [21.0, 207.0], [22.0, 201.33333333333334], [23.0, 249.0], [24.0, 206.0], [26.0, 178.0], [28.0, 191.66666666666666], [31.0, 194.0], [32.0, 173.0], [35.0, 251.0], [34.0, 214.0], [37.0, 157.0], [39.0, 174.0], [38.0, 225.0], [42.0, 163.0], [45.0, 209.0], [44.0, 196.5], [46.0, 239.0], [49.0, 237.0], [51.0, 194.33333333333334], [50.0, 161.0], [53.0, 123.0], [54.0, 27.0], [55.0, 97.33333333333333], [56.0, 235.0], [60.0, 115.0], [61.0, 220.33333333333334], [63.0, 212.0], [66.0, 70.83333333333334], [64.0, 121.0], [65.0, 177.0], [70.0, 159.25], [71.0, 64.0], [69.0, 157.0], [75.0, 130.5], [73.0, 195.33333333333334], [77.0, 100.0], [76.0, 193.0], [83.0, 60.666666666666664], [81.0, 153.75], [80.0, 131.33333333333334], [82.0, 153.0], [84.0, 139.0], [87.0, 70.0], [85.0, 104.0], [86.0, 196.0], [90.0, 160.66666666666666], [91.0, 137.0], [89.0, 76.0], [88.0, 135.8], [95.0, 78.0], [94.0, 233.0], [93.0, 186.0], [98.0, 149.75], [97.0, 79.0], [96.0, 168.0], [103.0, 197.0], [102.0, 234.0], [101.0, 175.0], [100.0, 193.5], [107.0, 157.0], [106.0, 216.66666666666666], [111.0, 110.0], [110.0, 189.0], [109.0, 89.5], [108.0, 223.0], [112.0, 130.5], [115.0, 204.0], [114.0, 189.0], [113.0, 202.0], [116.0, 144.0], [123.0, 235.0], [122.0, 182.5], [121.0, 187.75], [127.0, 181.0], [125.0, 170.0], [135.0, 200.0], [133.0, 154.5], [131.0, 164.5], [129.0, 230.0], [128.0, 193.0], [143.0, 208.0], [142.0, 216.0], [141.0, 248.0], [140.0, 199.25], [138.0, 162.0], [151.0, 230.0], [149.0, 228.33333333333334], [146.0, 233.66666666666666], [156.0, 100.5], [154.0, 141.66666666666666], [153.0, 106.33333333333333], [152.0, 151.0], [159.0, 150.2], [167.0, 161.0], [166.0, 196.0], [163.0, 227.5], [161.0, 195.0], [175.0, 117.0], [169.0, 217.66666666666666], [168.0, 178.0], [179.0, 187.0], [178.0, 167.0], [177.0, 130.0], [176.0, 179.0], [183.0, 190.0], [182.0, 136.0], [181.0, 212.0], [184.0, 111.0], [186.0, 108.0], [187.0, 119.0], [191.0, 206.2], [189.0, 124.0], [185.0, 189.66666666666666], [199.0, 146.0], [198.0, 133.0], [197.0, 168.33333333333334], [196.0, 177.0], [193.0, 166.5], [207.0, 193.33333333333334], [206.0, 186.0], [203.0, 179.0], [202.0, 182.0], [200.0, 205.0], [214.0, 125.0], [215.0, 127.5], [213.0, 134.0], [211.0, 176.0], [209.0, 195.0], [219.0, 140.5], [218.0, 153.2], [217.0, 141.0], [216.0, 161.50000000000003], [223.0, 167.5], [222.0, 128.0], [221.0, 169.0], [220.0, 170.0], [230.0, 146.83333333333331], [229.0, 148.25], [227.0, 129.0], [228.0, 183.5], [226.0, 192.0], [225.0, 171.33333333333334], [238.0, 143.5], [237.0, 160.0], [235.0, 147.25], [234.0, 127.0], [233.0, 120.0], [239.0, 156.0], [232.0, 156.0], [247.0, 152.0], [244.0, 183.0], [243.0, 151.0], [241.0, 164.0], [240.0, 157.0], [255.0, 153.5], [253.0, 160.0], [254.0, 155.6], [251.0, 159.0], [250.0, 164.33333333333334], [249.0, 159.0], [248.0, 160.83333333333334], [259.0, 138.0], [257.0, 158.33333333333334], [256.0, 166.5], [267.0, 186.0], [266.0, 167.5], [264.0, 153.0], [260.0, 151.0]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}, {"data": [[142.55750000000006, 161.825]], "isOverall": false, "label": "gateway_cl/hellotea/tea-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 267.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1213.3333333333333, "minX": 1.6883007E12, "maxY": 2666.6666666666665, "series": [{"data": [[1.6883007E12, 2666.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6883007E12, 1213.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 161.825, "minX": 1.6883007E12, "maxY": 161.825, "series": [{"data": [[1.6883007E12, 161.825]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 161.825, "minX": 1.6883007E12, "maxY": 161.825, "series": [{"data": [[1.6883007E12, 161.825]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 1.0375, "minX": 1.6883007E12, "maxY": 1.0375, "series": [{"data": [[1.6883007E12, 1.0375]], "isOverall": false, "label": "gateway_cl/hellotea/tea", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 26.0, "minX": 1.6883007E12, "maxY": 265.0, "series": [{"data": [[1.6883007E12, 265.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6883007E12, 26.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6883007E12, 229.90000000000003]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6883007E12, 254.99]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6883007E12, 167.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.6883007E12, 241.95]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 28.0, "minX": 8.0, "maxY": 167.0, "series": [{"data": [[8.0, 28.0], [392.0, 167.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 392.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 28.0, "minX": 8.0, "maxY": 167.0, "series": [{"data": [[8.0, 28.0], [392.0, 167.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 392.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883007E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883007E12, 6.666666666666667]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883007E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883007E12, 6.666666666666667]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6883007E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883007E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883007E12, 6.666666666666667]], "isOverall": false, "label": "gateway_cl/hellotea/tea-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 6.666666666666667, "minX": 1.6883007E12, "maxY": 6.666666666666667, "series": [{"data": [[1.6883007E12, 6.666666666666667]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6883007E12, "title": "Total Transactions Per Second"}},
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

