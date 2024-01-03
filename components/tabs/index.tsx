import Image from "next/image";
import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import style from "../tabs/tabs.module.scss";

function DynamicTabs() {
  return (
    <div className={style.tabs}>
      {/* New tabs start */}
      <Tabs>
        <div className="container">
          <div className="row tab-inner-sofa-row">
            <TabList>
              <Tab>
                <div className="tab-inner-sofa">
                  {" "}
                  <Image
                    src="/assets/images/banner/Group 611.png"
                    width={50}
                    height={50}
                  />
                  <p>Divan bed</p>
                </div>
              </Tab>
              <Tab>
                <div className="tab-inner-sofa">
                  {" "}
                  <Image
                    src="/assets/images/banner/Group 686.svg"
                    width={50}
                    height={50}
                  />
                  <p>Mattress</p>
                </div>
              </Tab>
              <Tab>
                <div className="tab-inner-sofa">
                  <Image
                    src="/assets/images/banner/Group 688.svg"
                    width={50}
                    height={50}
                  />
                  <p>Headboard</p>
                </div>
              </Tab>
              <Tab>
                <div className="tab-inner-sofa">
                  <Image
                    src="/assets/images/banner/Group 687.svg"
                    width={50}
                    height={50}
                  />
                  <p>Garden Furniture</p>
                </div>
              </Tab>
            </TabList>
          </div>
        </div>

        <TabPanel>
          <div className="row">
            <section className={style.productsimages}>
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Hesper Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£545.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman
                        Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Catherine Lansfield Boutique Divan Bed Set
                      </h2>
                      <p className={style.price}>£210.00</p>
                    </div>
                  </div>
                  <div className={style.viewAllProductTab}>
                    <button className={style.viewAllProduct}>
                      <b>VIEW ALL PRODUCT</b>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <section className={style.productsimages}>
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Hesper Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£545.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman
                        Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Catherine Lansfield Boutique Divan Bed Set
                      </h2>
                      <p className={style.price}>£210.00</p>
                    </div>
                  </div>
                  <div className={style.viewAllProductTab}>
                    <button className={style.viewAllProduct}>
                      <b>VIEW ALL PRODUCT</b>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <section className={style.productsimages}>
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Hesper Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£545.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman
                        Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Catherine Lansfield Boutique Divan Bed Set
                      </h2>
                      <p className={style.price}>£210.00</p>
                    </div>
                  </div>
                  <div className={style.viewAllProductTab}>
                    <button className={style.viewAllProduct}>
                      <b>VIEW ALL PRODUCT</b>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </TabPanel>
        <TabPanel>
          <div className="row">
            <section className={style.productsimages}>
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Hesper Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£545.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Estella Velvet Fabric Ottoman
                        Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Laurence Llewelyn-Bowen Seren Velvet Fabric Ottoman Bed
                      </h2>
                      <p className={style.price}>£549.00</p>
                    </div>
                  </div>
                  <div className="col-3">
                    <div className={style.box1}>
                      <Image
                        src="https://aspirestore.co.uk/49062-home_default/olivier-fabric-ottoman-bed.jpg"
                        alt="img"
                        width={258}
                        height={210}
                      />
                      <h2 className={style.productname}>
                        Catherine Lansfield Boutique Divan Bed Set
                      </h2>
                      <p className={style.price}>£210.00</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </TabPanel>
      </Tabs>
      {/* New tabs end */}
    </div>
  );
}

export default DynamicTabs;
