const products = document.getElementById('products')
const product_1 = document.getElementById('products-1')
const product_2 = document.getElementById('products-2')
const product_3 = document.getElementById('products-3')
product_1.addEventListener('mouseenter',(e)=>{
    if(e.target.closest('#products-1') !== null){
      product_1.innerHTML =`
      <article class="product1" id="factroy2-1" style="margin:0 0 0 0">
      <div class="factory1-img"></div>                      
          <div id="factroy2-2" class="factory-auto factory-all">
            <div class="factory-content-1">
              <img src="./css/css-img/Factory-Automation01.jpg" alt="Factory-Automation01" srcset="">
              <div class="factory-mti">
                <div class="factory-mti-1">Machine To Intelligent</div>
                <div class="factory-mti-2">Wireless networking offers an open, 
                  reliable infrastructure for <br>different factory systems and equipment to communicate. <br>
                  Supporting high throughput, redundant connections, dual band  <br>options and more, 
                  Advantech's machine to intelligent solutions <br> target factory production lines, 
                  packaging automation, and  <br>warehouse logistics that require high throughput, 
                  secure and  <br>reliable networking</div>
                <div class="factory-mti-3">Applications:</div>
                <div class="factory-button">
                  <div class="factory-icon-1"><div class="mti-text-1">Machine<br>Connectivity</div>
                  </div>
                  <div class="factory-icon-2"><div class="mti-text-2"><div>AGV</div>
                  </div>
                </div>
            </div>
            </div>
            </div>
            <div class="factory-content-2">
              <img src="./css/css-img/Factory-Automation02.jpg" alt="Factory-Automation02" srcset="">
              <div class="factory-mti">
                <div class="factory-mti-1">Equipment & Facility Management</div>
                <div class="factory-mti-2">Advantech wireless equipment and facility management solutions support multiple network interfaces and industrial protocols, high data penetration, long-range and low power for optimized data transmission. Advantech solutions enhance physical network deployments and machine and edge data acquisition for smarter operations and smarter management decisions.
                </div>
                <div class="factory-mti-3">Applications</div>
                <div class="factory-button-2">
                  <div class="factory-icon-3">
                    <div  class="mti-text-1">OEE : Intelligent Stack Light</div>
                  </div>
                  <div class="factory-icon-4">
                    <div  class="mti-text-1">Motor Status Monitoring </div>
                  </div>
                  <div class="factory-icon-5">
                    <div  class="mti-text-1">Wi-Fi Infrastructure Deployment</div>
                  </div>
                  <div class="factory-icon-6">
                    <div  class="mti-text-1">Facility Heatlh management</div>
                  </div>
                </div>
            </div>
            </div>
            <div class="factory-content-3">
              <img src="./css/css-img/Factory-Automation03.jpg" alt="Factory-Automation03" srcset="">
              <div class="factory-mti">
                <div class="factory-mti-1">Material Management </div>
                <div class="factory-mti-2">Advantech wireless material management solutions 
                  include RFID<br> tags and gateways that utilize the benefits of high accuracy 
                  and<br> low power consumption. RFID technology helps manage incoming <br>materials,
                   production line inventory control, warehouse tracking <br>and order fulfillment. 
                   From beginning to end, material control is <br>fast, easy and reliable.
                </div>
                <div class="factory-mti-3">Applications</div>
                <div class="factory-button-3">
                  <div class="factory-icon-7" ><div class="mti-text-7">Streamline Material<br> Control</div></div>
                  <div class="factory-icon-8"><div class="mti-text-8">Stock control</div></div>
                  <div class="factory-icon-9"><div class="mti-text-9">Package <br>Access</div></div>
                </div>
            </div>
            </div>
          </div>
    </article> 
    `
    }
/*     if(e.target.closest('#products-2') == null ){
        //document.querySelector('#E-E-2-1').removeChild(document.getElementById('E-E-2-2'))
        product_2.innerHTML =` <article class="product2" id="products-2">
        <div class="E-E-img"></div>
        <div class="E-E">
          <div class="E-E-para1">While climate change gradually threatens our living environment,
              advanced wireless technologies<br> offer benefits such as long distance transmission, 
              high penetration rates, and wide signal coverage <br>to help optimize energy efficiency and promote renewable energy sources, 
              as well as monitor<br> climate and geographic changes so we can quickly respond to protect our environment.
            </div>
          <div class="E-E-icon">
            <div class="E-E-1">Energy Saving</div>
            <div class="E-E-2">Disaster Prevention</div>
            <div class="E-E-3">Utility Efficiency
                Enhancement</div>
          </div>
        </div>
    </article>`
    }  
    if(e.target.closest('#products-3') == null ){
        //document.getElementById('transport3-1').removeChild(document.getElementById('transport3-2'))
        product_3.innerHTML =` <article class="product3" id="products-3">
        <div class="transport-img"></div> 
        <div class="transport">
          <div class="transport-para1">Emerging wireless technologies with features like high data rates, 
            high bandwidth, low latency,<br> and wide signal coverage have helped smart traffic management and in-vehicle solutions evolve <br>to improve 
            the efficiency of transportation infrastructures, safety, travel time, quality 
            and<br> experiences to better realize the goals of intelligent transportation.</div>
          <div class="transport-icon">
            <div class="transport-1">Transportation Efficiency
                Enhancement</div>
            <div class="transport-2">Safety Improvement</div>
            <div class="transport-3">Travelling Experience
                Optimization</div>
          </div>
        </div>
    </article> `
    } */
})
product_2.addEventListener('mouseenter',(e)=>{
    if(e.target.closest('#products-2') !== null){
        product_2.innerHTML =`
        <article class="product2" id="E-E-2-1" style="margin:0 0 0 0">
        <div class="E-E-img"></div>                      
            <div id="E-E-2-2" class="E-E E-E-all">
              <div class="E-E-content-1">
                <img src="./css/css-img/E_E_01.jpg" alt="E_E_01" srcset="">
                <div class="E-E-mti">
                  <div class="E-E-mti-1">Urban Environment Monitoring</div>
                  <div class="E-E-mti-2">Wireless urban environmental monitoring solutions from Advantech<br>
                      are designed to withstand harsh climate changes. With mobile<br>
                      convenience, high signal penetration and long distance<br>
                      transmission, users can install inspection stations in different<br>
                      locations to continuously collect and integrate environmental data<br>
                      with the cloud.</div>
                  <div class="E-E-mti-3">Applications:</div>
                  <div class="E-E-button">
                    <div class="E-E-icon-1"><div class="E-E-text-1">Meteorological Station</div>
                    </div>
                    </div>
                  </div>
              </div>
              <div class="E-E-content-2">
                <img src="./css/css-img/E_E_02.jpg" alt="E_E_02" srcset="">
                <div class="E-E-mti">
                  <div class="E-E-mti-1">Disaster Detection</div>
                  <div class="E-E-mti-2">AWireless disaster detection solutions with Advantech design<br>
                      technology help sense subtle changes in bridge, tunnel,<br>
                      mountainside structures, and water levels. With built-in<br>
                      solar-power, low-power consumption and long distance wireless<br>
                      transmission, data is transmitted in real-time for monitoring and<br>
                      early warning detection to prevent catastrophes.</div>
                  <div class="E-E-mti-3">Applications</div>
                  <div class="E-E-button-2">
                    <div class="E-E-border">
                    <div class="E-E-icon-2">
                      <div class="E-E-text-2">Slope Stability</div>
                    </div>
                    <div class="E-E-icon-4">
                        <div  class="E-E-text-3">Flood inspector</div>
                    </div>
                    </div>
                    <div class="E-E-icon-3">
                      <div  class="E-E-text-4">Tunnel, bridge management </div>
                    </div>
                  </div>
              </div>
              </div>
              <div class="E-E-content-3">
                <img src="./css/css-img/E_E_03.jpg" alt="E-E-03" srcset="">
                <div class="E-E-mti">
                  <div class="E-E-mti-1">Oilfield Wireless Solution</div>
                  <div class="E-E-mti-2">Advantech oilfield wireless solutions, with built-in solar-powering,<br>
                      industrial grade design, power-efficiency, and transmission-efficient<br>
                      wireless technology, collect and transmit production data from oil<br>
                      and gas wells to help developers achieve higher exploitation, lower<br>
                      consumption and safer production. </div>
                  <div class="E-E-mti-3">Applications</div>
                  <div class="E-E-button-3">
                    <div class="E-E-icon-5" ><div class="E-E-text-5">Oilfield Wireless<br> Solution</div></div>
                  </div>
              </div>
              </div>
              <div class="E-E-content-4">
                  <img src="./css/css-img/E_E_04.jpg" alt="E-E-04" srcset="">
                  <div class="E-E-mti">
                    <div class="E-E-mti-1">Solar Energy Wireless Solution </div>
                    <div class="E-E-mti-2">Advantech solar energy wireless solutions are ideally suited for<br>
                        mega solar farms or rooftop solar stations to collect and transfer<br>
                        power data. With wide temperature, waterproof and dustproof<br>
                        features, plus easy integration into existing telecom systems, these<br>
                        solutions withstand the harsh conditions of remote, widespread<br>
                        and rugged environments. </div>
                    <div class="E-E-mti-3">Applications</div>
                    <div class="E-E-button-4">
                      <div class="E-E-icon-6" ><div class="E-E-text-6">Solar Energy Wireless Solution</div></div>
                    </div>
                </div>
              </div>
              <div class="E-E-content-5">
                    <img src="./css/css-img/E_E_05.jpg" alt="E-E-05" srcset="">
                    <div class="E-E-mti">
                      <div class="E-E-mti-1">Metering Solution </div>
                      <div class="E-E-mti-2">Advantech wireless metering solutions use low-power 5G, LTE-M,<br>
                          NB-IoT and LoRaWAN to collect remote data from water, gas, oil<br>
                          field sensors, and meters. With high signal penetration, solar<br>
                          power, and industrial grade design, these rugged I/O modules<br>
                          securely transmit data up to 10k and reduce costly site visits. </div>
                      <div class="E-E-mti-3">Applications</div>
                      <div class="E-E-button-5">
                        <div class="E-E-icon-7" ><div class="E-E-text-7">Water / Gas / Oil Meter Monitoring</div></div>
                      </div>
                  </div>
              </div>
              <div class="E-E-content-6">
                  <img src="./css/css-img/E_E_06.jpg" alt="E_E_06" srcset="">
                  <div class="E-E-mti">
                    <div class="E-E-mti-1">Pipeline Management</div>
                    <div class="E-E-mti-2">AAdvantech wireless pipeline management solutions use LoRaWAN<br>
                        and SmartMesh IP to monitor remote flow meters, pressure valves<br>
                        and pumps. Industrial-grade, solar powered devices with high<br>
                        signal penetration and long distance ranges transmit pipeline<br>
                        status in real-time. Field data alerts help detect and resolve<br>
                        problems or schedule preventative maintenance before service<br>
                        disruptions.
                    </div>
                    <div class="E-E-mti-3">Applications</div>
                    <div class="E-E-button-6">
                      <div class="E-E-border">
                        <div class="E-E-icon-8">
                          <div  class="E-E-text-8">Pipeline pressure</div>
                        </div>
                        <div class="E-E-icon-9">
                          <div  class="E-E-text-9">Leakage Detection </div>
                        </div>
                      </div>
                      <div class="E-E-icon-10">
                        <div class="E-E-text-10">Pump</div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
  
    </article>
      `
      }
/*     if(e.target.closest('#products-1') == null ){
        //document.getElementById('factroy2-1').removeChild(document.getElementById('factroy2-2'))
        product_1.innerHTML =` <article class="product1" id="product1"  >
        <div class="factory1-img"></div>
        <div class="factory-auto">
          <div class="factory-para1">Manual processes and physical labor are gradually being replaced. 
            Wireless technologies offer<br> high data rates, long range, fast roaming, 
            and industrial protocols and specifications that help<br> manufacturing evolve their businesses into highly synchronized, 
            intelligent, and reliable <br>networking operations.</div>
          <div class="factory-icon">
            <div class="factory-1">Asset tracking</div>
            <div class="factory-2">Cost optimization</div>
            <div class="factory-3">Production Efficiency
                Enhancement</div>
          </div>
        </div> 
        </article>`
    }
    if(e.target.closest('#products-3') == null ){
       /*  document.getElementById('E-E-2-1').removeChild(document.getElementById('E-E-2-2'))
        document.getElementById('factroy2-1').removeChild(document.getElementById('factroy2-2'))
        document.getElementById('transport3-1').removeChild(document.getElementById('transport3-2')) 
        product_3.innerHTML =` <article class="product3" id="products-3">
        <div class="transport-img"></div> 
        <div class="transport">
          <div class="transport-para1">Emerging wireless technologies with features like high data rates, 
            high bandwidth, low latency,<br> and wide signal coverage have helped smart traffic management and in-vehicle solutions evolve <br>to improve 
            the efficiency of transportation infrastructures, safety, travel time, quality 
            and<br> experiences to better realize the goals of intelligent transportation.</div>
          <div class="transport-icon">
            <div class="transport-1">Transportation Efficiency
                Enhancement</div>
            <div class="transport-2">Safety Improvement</div>
            <div class="transport-3">Travelling Experience
                Optimization</div>
          </div>
        </div>
    </article> `
    } */
})
product_3.addEventListener('mouseenter',(e)=>{
    if(e.target.closest('#products-3') !== null){
      product_3.innerHTML =`
      <article class="product3" id="transport3-1" style="margin:0 0 0 0">
                  <div class="transport-img"></div>                      
                      <div id="transport3-2" class="transport transport-all">
                        <div class="transport-content-1">
                          <img src="./css/css-img/Transportation01.jpg" alt="transport_01" srcset="">
                          <div class="transport-mti">
                            <div class="transport-mti-1">Traffic Management</div>
                            <div class="transport-mti-2">Advantech makes full use of wireless technology like cellular and <br> 
                                NB-IoT network solutions to avoid costly and time consuming <br> 
                                cable deployments. They are especially suitable for wide areas or <br> 
                                cross-city applications such as street lighting, crossroads, and <br> 
                                highway management. Administrators can easily manage and <br> 
                                control field site device status anytime, anywhere.</div>
                            <div class="transport-mti-3">Applications:</div>
                            <div class="transport-button">
                                <div class="transport-border">
                                <div class="transport-icon-1">
                                  <div class="transport-text-1">Lighting management</div>
                                </div>
                                <div class="transport-icon-3">
                                    <div  class="transport-text-3">Crossroad access and security control</div>
                                </div>
                                </div>
                                <div class="transport-icon-2">
                                  <div  class="transport-text-2">Electronic tollconnection </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="transport-content-2">
                          <img src="./css/css-img/Transportation02.jpg" alt="transport_02" srcset="">
                          <div class="transport-mti">
                            <div class="transport-mti-1">In-Vehicle Networking</div>
                            <div class="transport-mti-2">AAdvantech’s mobile asset solutions use cellular 3G/LTE/5G and <br> 
                                WiFi to connect isolated mobile assets, such as railway and rolling <br> 
                                stock, to the Internet for around-the-clock status monitoring and <br> 
                                control including location tracking, cash flow monitoring, hot-spot <br> 
                                access, and real-time onboard surveillance.</div>
                            <div class="transport-mti-3">Applications</div>
                            <div class="transport-button-2">
                              <div class="transport-icon-4">
                                <div  class="mti-text-4">Location tracking</div>
                              </div>
                              <div class="transport-icon-5">
                                <div  class="mti-text-5">Hotspot sharing</div>
                              </div>
                            </div>
                        </div>
                        </div>
                        <div class="transport-content-3">
                          <img src="./css/css-img/Transportation03.jpg" alt="transport-03" srcset="">
                          <div class="transport-mti">
                            <div class="transport-mti-1">Travel info Management</div>
                            <div class="transport-mti-2">We live in a fast-paced era where accurate, real-time transit <br> 
                                information is expected. To provide both managers and <br> 
                                passengers with the most up-to-date information, Advantech <br> 
                                wireless solutions support vital cellular and Wi-Fi networking <br> 
                                technologies. These vital services allow transportation hubs like <br> 
                                airports and harbors to deliver instant traffic flow, arrival/ departure, <br> 
                                and boarding information, enabling transparent traffic and <br> 
                                passenger information without time and location boundaries.</div>
                            <div class="transport-mti-3">Applications</div>
                            <div class="transport-button-3">
                              <div class="transport-icon-6" ><div class="mti-text-6">PIS, Arrival</div></div>
                              <div class="transport-icon-7" ><div class="mti-text-7">Departure info.</div></div>
                              <div class="transport-icon-8" ><div class="mti-text-8">Boarding management</div></div>
                            </div>
                        </div>
                        </div>
                        <div class="transport-content-4">
                            <img src="./css/css-img/Transportation04.jpg" alt="transport04" srcset="">
                            <div class="transport-mti">
                              <div class="transport-mti-1">Security Management </div>
                              <div class="transport-mti-2">Security is always a first priority - whether devices, assets, <br> 
                                  personnel, or general surveillance. Traditional security systems <br> 
                                  rely on wired data transmission that is restricted by network <br> 
                                  infrastructure readiness. But, a smart combination of wired and <br> 
                                  cellular 3G/LTE/5G and Wi-Fi technologies extends network <br> 
                                  transmission, enhances the quality and efficiency of security <br> 
                                  management, and ensures both assets and people are protected. </div>
                              <div class="transport-mti-3">Applications</div>
                              <div class="transport-button-4">
                                <div class="transport-border">
                                  <div class="transport-icon-9" ><div class="transport-text-9">Surveillance</div></div>
                                  <div class="transport-icon-10" ><div class="transport-text-10">Staff identity/Entrance control</div></div>
                                </div>
                                  <div class="transport-icon-11" ><div class="transport-text-11">Elevator management</div></div>
                                </div>
                          </div>
                        </div>
                        <div class="transport-content-5">
                              <img src="./css/css-img/Transportation05.jpg" alt="transport-05" srcset="">
                              <div class="transport-mti">
                                <div class="transport-mti-1">Fleet Management</div>
                                <div class="transport-mti-2">Advantech global telematics solutions, with OBD protocols and <br> 
                                    Advantech proprietary parameters and algorithms, access a wealth <br> 
                                    of fleet data in real-time to increase productivity and reduce <br> 
                                    operation costs. LTE low-power Cat M1 cellular and GPS help <br> 
                                    optimize routes to reduce fuel use and improve service levels. <br> 
                                    Monitoring vehicle and engine conditions helps schedule <br> 
                                    preventative maintenance. Driver safety parameters monitor drive <br> 
                                    behavior anytime, anywhere.</div>
                                <div class="transport-mti-3">Applications</div>
                                <div class="transport-button-5">
                                  <div class="transport-icon-12" ><div class="transport-text-12">Driver behavior and fuel use monitoring</div></div>
                                </div>
                            </div>
                        </div>
                      </div>
              </article> 
    `
    }
/*     if(e.target.closest('#products-1') == null ){
        product_1.innerHTML =` <article class="product1" id="product1"  >
        <div class="factory1-img"></div>
        <div class="factory-auto">
          <div class="factory-para1">Manual processes and physical labor are gradually being replaced. 
            Wireless technologies offer<br> high data rates, long range, fast roaming, 
            and industrial protocols and specifications that help<br> manufacturing evolve their businesses into highly synchronized, 
            intelligent, and reliable <br>networking operations.</div>
          <div class="factory-icon">
            <div class="factory-1">Asset tracking</div>
            <div class="factory-2">Cost optimization</div>
            <div class="factory-3">Production Efficiency
                Enhancement</div>
          </div>
        </div> 
        </article>`
    }
    if(e.target.closest('#products-2') == null ){
        //document.getElementById('E-E-2-1').removeChild(document.getElementById('E-E-2-2'))
        product_2.innerHTML =
        ` <article class="product2" id="products-2">
        <div class="E-E-img"></div>
        <div class="E-E">
          <div class="E-E-para1">While climate change gradually threatens our living environment,
              advanced wireless technologies<br> offer benefits such as long distance transmission, 
              high penetration rates, and wide signal coverage <br>to help optimize energy efficiency and promote renewable energy sources, 
              as well as monitor<br> climate and geographic changes so we can quickly respond to protect our environment.
            </div>
          <div class="E-E-icon">
            <div class="E-E-1">Energy Saving</div>
            <div class="E-E-2">Disaster Prevention</div>
            <div class="E-E-3">Utility Efficiency
                Enhancement</div>
          </div>
        </div>
    </article>`
    }   */
   /*  document.getElementById('E-E-2-1').removeChild(document.getElementById('E-E-2-2'))
        document.getElementById('factroy2-1').removeChild(document.getElementById('factroy2-2')) */
})
document.addEventListener('mouseover', (e) => {
   if(e.target.closest('#products-1') === null && document.getElementById('factroy2-1') !==null ){
        document.getElementById('factroy2-1').innerHTML =`    
        <div class="factory1-img"></div>
        <div class="factory-auto">
          <div class="factory-para1">Manual processes and physical labor are gradually being replaced. 
            Wireless technologies offer<br> high data rates, long range, fast roaming, 
            and industrial protocols and specifications that help<br> manufacturing evolve their businesses into highly synchronized, 
            intelligent, and reliable <br>networking operations.</div>
          <div class="factory-icon">
            <div class="factory-1">Asset tracking</div>
            <div class="factory-2">Cost optimization</div>
            <div class="factory-3">Production Efficiency
                Enhancement</div>
          </div>
        </div> `
    }
    if(e.target.closest('#products-2') === null && document.getElementById('E-E-2-1') !==null ){
        document.querySelector('#E-E-2-1').innerHTML = `
        <div class="E-E-img"></div>
        <div class="E-E">
          <div class="E-E-para1">While climate change gradually threatens our living environment,
              advanced wireless technologies<br> offer benefits such as long distance transmission, 
              high penetration rates, and wide signal coverage <br>to help optimize energy efficiency and promote renewable energy sources, 
              as well as monitor<br> climate and geographic changes so we can quickly respond to protect our environment.
            </div>
          <div class="E-E-icon">
            <div class="E-E-1">Energy Saving</div>
            <div class="E-E-2">Disaster Prevention</div>
            <div class="E-E-3">Utility Efficiency
                Enhancement</div>
          </div>
        </div>
     `
    }  
    if(e.target.closest('#products-3') === null && document.getElementById('transport3-1') !==null ){
        document.getElementById('transport3-1').innerHTML = ` 
                    <div class="transport-img"></div> 
                    <div class="transport">
                      <div class="transport-para1">Emerging wireless technologies with features like high data rates, 
                        high bandwidth, low latency,<br> and wide signal coverage have helped smart traffic management and in-vehicle solutions evolve <br>to improve 
                        the efficiency of transportation infrastructures, safety, travel time, quality 
                        and<br> experiences to better realize the goals of intelligent transportation.</div>
                      <div class="transport-icon">
                        <div class="transport-1">Transportation Efficiency
                            Enhancement</div>
                        <div class="transport-2">Safety Improvement</div>
                        <div class="transport-3">Travelling Experience
                            Optimization</div>
                      </div>
                    </div>
                    `
    }  
})
/* if(e.target.closest('#products') !== null){
      product_1.removeChild(document.getElementById('factory2-1'))
      product_2.removeChild(document.getElementById('E-E-2-1'))
      product_3.removeChild(document.getElementById('transport2-1'))
    } */
/* products.addEventListener('mouseleave',(e)=>{
  if(e.target.closest('#products-1') == null ){
      document.getElementById('factory2-1').removeChild(document.getElementById('factroy2-2'))
  }
  if(e.target.closest('#products-2') == null ){
      document.querySelector('#E-E-2-1').removeChild(document.getElementById('E-E-2-2'))

  }  
  if(e.target.closest('#products-3') == null ){
      document.getElementById('transport3-1').removeChild(document.getElementById('transport3-2'))
  }
}) */