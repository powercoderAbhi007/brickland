import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";
import { ReactTyped } from "react-typed";
import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box className="main">
        <video
          src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/vdo.mp4?alt=media&token=c61b292a-0120-47e4-96d4-1bf5eaa398cf"
          alt="unable to load"
          autoPlay
          muted
          loop
          className=""
        />
        <Box className="content">
          <Container>
            <Grid
              container
              spacing={2}
              className="sm:mb-40 md:mb-20 lg:mb-32 xl:mb-35"
            >
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <div className="text-white">
                  <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-5xl  whitespace-nowrap font-bold text-white">
                    Uncover Your Dream &nbsp; {"  "}
                    <ReactTyped
                      strings={["APARTMENT", "VILLA", "HOME", "PLOT", "OFFICE"]}
                      typeSpeed={100}
                      loop
                      backSpeed={20}
                      showCursor={true}
                      className="inline-block "
                    />
                  </h1>
                </div>
                <div className="relative p-12 search-pad ">
                  <div
                    className="searchbar-home"
                    style={{ width: "66rem" }}
                  >
                    <form className="relative flex z-0 bg-white rounded-full">
                      <input
                        type="text"
                        placeholder="Search by City, Location, Project, Type"
                        className="overflow-hidden rounded-full flex-1 font-normal  px-6 py-4 text-black-500 focus:outline-none"
                      />
                      <Link to="/search">
                        <button className=" text-black rounded-full place-items-center absolute right-2 top-1/2 -translate-x-1/2 -translate-y-1/2  font-semibold p-3  ">
                        <i class="ri-search-line align-middle"></i>
                        </button>
                      </Link>
                    </form>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
      {/* <Container>
        <Box py={5} sx={{ textAlign: "center" }}>
          <Typography sx={{fontFamily:"poppins"}} variant="h4">Featured Properties</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Card sx={styles.card}>
              <CardContent sx={styles.content}>
                <Typography variant="h5" component="h2" fontWeight={"bold"}>
                  M3M The Line 72
                </Typography>
                <Typography variant="body2" component="p">
                  ₹28000/mo4 Bed, 3 Beth, Flats. Area 1448-2537 sqft
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box
              sx={{ textAlign: "center", borderRadius: 3, overflow: "hidden" }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/2.png?alt=media&token=2bc6fbc2-a9e4-4fe2-8351-7dc03397feeb"
                alt=""
                style={{ width: "100%", height: "auto", borderRadius: 5 }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} lg={3}>
            <Box
              sx={{ textAlign: "center", borderRadius: 3, overflow: "hidden" }}
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/3.png?alt=media&token=fa132532-4670-42d5-bb45-bdfe367609c1"
                alt=""
                style={{ width: "100%", height: "auto", borderRadius: 5 }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container> */}
   <div className="city-area pt-120 pb-95">
    <h1 className="display-4 text-center mb-5 font-bold">Best properties </h1>
  <div className="container">
    <div
      className="row justify-content-center align-items-center"
    
    >
      <div
        className="col-lg-6 col-md-12"  >
        <div className="city-item">
          <a href="#">
            <img src="../property-details-large.jpg" alt="image" />
          </a>
          <h2 className="prop-title  p-5 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
          </h2>

        </div>
      </div>
      <div
        className="col-lg-6 col-md-12"
       
      >
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6">
            <div className="city-item">
              <a href="#">
                <img src="./property-details-large.jpg" alt="image" />
              </a>
              <h2 className="prop-title  p-3 smaller-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
          </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="city-item">
              <a href="#">
                <img src="./property-details-large.jpg" alt="image" />
              </a>
                <h2 className="prop-title  p-3 smaller-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
          </h2>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="city-item">
              <a href="#">
                <img src="./property-details-large.jpg" alt="image" />
              </a>
              <h2 className="prop-title  p-3 smaller-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
          </h2>
            </div>
             
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="city-item">
              <a href="#">
                <img src="./property-details-large.jpg" alt="image" />
              </a>
                <h2 className="prop-title  p-3 smaller-font">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, itaque!
          </h2>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
    {/* new section  */}
<div className="section section-properties">
  <div className="container">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="property-item mb-30">
          <a href="#" className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/4.png?alt=media&token=eb6a9a2d-e0be-4ea4-a004-616bb16dd501" alt="Image" className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>Godrej Tropical Isle</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">
              Location
              </span>
              <span className="city d-block mb-3">Godrej Tropical Isle by Brick Land is a beautiful, green housing project offering modern amenities in a nature-friendly setting.</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                  <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">2 baths</span>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary py-2 px-3"
              >
                See details
              </a>
            </div>
          </div>
        </div>
        {/* .item */}
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="property-item mb-30">
          <a href="#" className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/5.png?alt=media&token=90963281-53b8-4eaf-bcdf-3457652e4e99" alt="Image" className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>Max Estate 128</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">
             Location
              </span>
              <span className="city d-block mb-3">Max Estate 128, by Brickland, is a commercial project offering modern office spaces aimed at enhancing business growth and networking.</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                  <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">2 baths</span>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary py-2 px-3"
              >
                See details
              </a>
            </div>
          </div>
        </div>
        {/* .item */}
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="property-item mb-30">
          <a href="#" className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/6.png?alt=media&token=7a868f81-10af-4cdc-b4d8-ea69f495ea11" alt="Image" className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>M3M The Cullinan</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">
               Location
              </span>
              <span className="city d-block mb-3">M3M The Cullinan by Brickland offers premium commercial spaces in Gurgaon, blending luxury with modern architecture for businesses.</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">2 baths</span>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary py-2 px-3"
              >
                See details
              </a>
            </div>
          </div>
        </div>
        {/* .item */}
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="property-item mb-30">
          <a href="#" className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/4.png?alt=media&token=eb6a9a2d-e0be-4ea4-a004-616bb16dd501" alt="Image" className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>Greenbay Plot</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">
               Location
              </span>
              <span className="city d-block mb-3">Eldeco The Greens Phase 3 by Brickland is a commercial project offering modern spaces for businesses in a green, eco-friendly environment.</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                  <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">2 baths</span>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary py-2 px-3"
              >
                See details
              </a>
            </div>
          </div>
        </div>
        {/* .item */}
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="property-item mb-30">
          <a href="#" className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/4.png?alt=media&token=eb6a9a2d-e0be-4ea4-a004-616bb16dd501" alt="Image" className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>Greenbay Plot</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">
               Location
              </span>
              <span className="city d-block mb-3">Eldeco The Greens Phase 3 by Brickland is a commercial project offering modern spaces for businesses in a green, eco-friendly environment.</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                  <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  {/* <span className="icon-bath me-2" /> */}
                  <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 baths</span>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary py-2 px-3"
              >
                See details
              </a>
            </div>
          </div>
        </div>
        {/* .item */}
      </div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-4">
        <div className="property-item mb-30">
          <a href="#" className="img">
            <img src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/4.png?alt=media&token=eb6a9a2d-e0be-4ea4-a004-616bb16dd501" alt="Image" className="img-fluid" />
          </a>
          <div className="property-content">
            <div className="price mb-2">
              <span>Greenbay Plot</span>
            </div>
            <div>
              <span className="d-block mb-2 text-black-50">
               Location
              </span>
              <span className="city d-block mb-3">Eldeco The Greens Phase 3 by Brickland is a commercial project offering modern spaces for businesses in a green, eco-friendly environment.</span>
              <div className="specs d-flex mb-4">
                <span className="d-block d-flex align-items-center me-3">
                <span className="ri-hotel-bed-line me-2"></span>
                  <span className="caption">2 beds</span>
                </span>
                <span className="d-block d-flex align-items-center">
                  <span className="icon-bath me-2" />
                  <span className="caption">2 baths</span>
                </span>
              </div>
              <a
                href="#"
                className="btn btn-primary py-2 px-3"
              >
                See details
              </a>
            </div>
          </div>
        </div>
        {/* .item */}
      </div>
    </div>
  </div>
</div>
{/* new section  end  */}
      {/* cta section  */}
<div className="information-area">
  <div className="container">
    <div className="information-inner-area">
      <div
        className="row justify-content-center align-items-center"
        data-cues="slideInUp"
        data-disabled="true"
      >
        <div
          className="col-xl-6 col-md-12"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "0ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <div className="information-content">
            <span className="sub">
            10 new offers evry day. 350 offers on site trusted by a community of the thousands of users
            </span>
            <h2>
Looking for the new home?</h2>
          </div>
        </div>
        <div
          className="col-xl-6 col-md-12"
          data-cue="slideInUp"
          data-show="true"
          style={{
            animationName: "slideInUp",
            animationDuration: "600ms",
            animationTimingFunction: "ease",
            animationDelay: "0ms",
            animationDirection: "normal",
            animationFillMode: "both"
          }}
        >
          <ul className="information-list">
            <li>
              <div className="phone-info">
                <div className="icon">
                  <i className="ri-phone-line" />
                </div>
                <a href="tel:00201068710594">+(002) 0106-8710-594</a>
              </div>
            </li>
            <li>
              <a href="property-grid.html" className="default-btn">
                Find Premium Property
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
{/* cta section end  */}
     
  {/* why choose us section  */}
  <div className="why-choose-area pt-120 pb-95">
  <div className="container">
    <div
      className="row justify-content-center"
      data-cues="slideInUp"
      data-disabled="true"
    >
      <div
        className="col-lg-3 col-md-6"
        data-cue="slideInUp"
        data-show="true"
        style={{
          animationName: "slideInUp",
          animationDuration: "600ms",
          animationTimingFunction: "ease",
          animationDelay: "0ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <div className="why-choose-content">
          <span className="sub">Bricks And Clicks</span>
          <h2>Why Choose Us?</h2>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6"
        data-cue="slideInUp"
        data-show="true"
        style={{
          animationName: "slideInUp",
          animationDuration: "600ms",
          animationTimingFunction: "ease",
          animationDelay: "180ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <div className="why-choose-card">
          <div className="image">
            <img src="./why-choose1.png" alt="image" />
          </div>
          <h3>Sell, Rent Property Free</h3>
          <p>
          Our experts answer all queries with their unmatched knowledge at every step of home buying.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6"
        data-cue="slideInUp"
        data-show="true"
        style={{
          animationName: "slideInUp",
          animationDuration: "600ms",
          animationTimingFunction: "ease",
          animationDelay: "360ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <div className="why-choose-card">
          <div className="image">
            <img src="./why-choose2.png" alt="image" />
          </div>
          <h3>In-depth Info on Investment Hotspots</h3>
          <p>
          Our experts answer all queries with their unmatched knowledge at every step of home buying.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6"
        data-cue="slideInUp"
        data-show="true"
        style={{
          animationName: "slideInUp",
          animationDuration: "600ms",
          animationTimingFunction: "ease",
          animationDelay: "540ms",
          animationDirection: "normal",
          animationFillMode: "both"
        }}
      >
        <div className="why-choose-card">
          <div className="image">
            <img src="./why-choose3.png" alt="image" />
          </div>
          <h3>Pool of Best Property Options</h3>
          <p>
          Our experts answer all queries with their unmatched knowledge at every step of home buying.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

  {/* why choose us section end */}
    </>
  );
};
const styles = {
  card: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 3,
    backgroundImage: `url(https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/1.png?alt=media&token=86a9124f-a54e-4a6c-9527-06dfe734c398)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
    },
  },
  content: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "16px",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "0 0 8px 8px",
  },
};

export default Home;
