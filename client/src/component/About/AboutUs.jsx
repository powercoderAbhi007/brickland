import {
  Box,
  Container,
  Grid,
} from "@mui/material";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <Box
        className="main"
        sx={{
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "auto",
        }}
      >
        <video
          src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/Int%20(5).mp4?alt=media&token=bcf37726-0cd3-496b-9172-5dec3113f1ee"
          alt="unable to load"
          autoPlay
          muted
          loop
          style={{ width: "100%", height: "auto" }}
        />
        <Box
          className="content "
          sx={{
            position: "relative",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            zIndex: 1,
          }}
        >
        
        </Box>
        {/* about us  */}
<div className="why-choose-area pt-120 pb-95">
  <div className="container">
    <div
      className="row justify-content-center"
      data-cues="slideInUp"
      data-disabled="true"
    >
      <div
        className="col-lg-3 col-md-6"
        
      >
        <div className="why-choose-content">
          <span className="sub">Bricks And Clicks</span>
          <h2>Why Choose Us?</h2>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6"
       
      >
        <div className="why-choose-card">
          <div className="image">
            <img src="./why-choose1.png" alt="sell" />
          </div>
          <h3>Sell, Rent Property Free</h3>
          <p>
          Our experts answer all queries with their unmatched knowledge at every step of home buying.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6"
       
      >
        <div className="why-choose-card">
          <div className="image">
            <img src="./why-choose2.png" alt="hotspots" />
          </div>
          <h3>In-depth Info on Investment Hotspots</h3>
          <p>
          Our experts answer all queries with their unmatched knowledge at every step of home buying.
          </p>
        </div>
      </div>
      <div
        className="col-lg-3 col-md-6"
       
      >
        <div className="why-choose-card">
          <div className="image">
            <img src="./why-choose3.png" alt="pool" />
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
{/* end about us  */}
{/* what we do section who we are  */}
<div className="sell-area">
  <div className="container-fluid">
    <div
      className="row justify-content-center"
    >
      <div
        className="col-lg-7 col-md-12"
       
      >
        <div className="sell-image" />
      </div>
      <div
        className="col-lg-5 col-md-12"
       
      >
        <div className="sell-content">
          <span className="sub">Unlocking Dreams, Opening Doors</span>
          <h2>Navigating Your Home Odyssey Your Sanctuary</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
            eget ornare venenatis, in. Pharetra iaculis consectetur augue
            venenatis enim adipiscing risus sit scelerisque. Id metus viverra
            tellus.
          </p>
          <div className="inner">
            <h3>Sell Your Property</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
              eget ornare.
            </p>
          
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* what we do section who we are  */}
{/* rent property  */}
<div className="rent-area pb-120">
  <div className="container-fluid">
    <div
      className="row justify-content-center"
      data-cues="slideInUp"
      data-disabled="true"
    >
      <div
        className="col-lg-5 col-md-12"
      
      >
        <div className="rent-content">
          <span className="sub">Beyond Brick and Mortar</span>
          <h2>Where Vision Meets Realty Crafting Your Perfect Home</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
            eget ornare venenatis, in. Pharetra iaculis consectetur augue
            venenatis enim adipiscing risus sit scelerisque. Id metus viverra
            tellus.
          </p>
          <div className="inner">
            <h3>Rent A Home</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et mauris
              eget ornare.
            </p>
            
          </div>
        </div>
      </div>
      <div
        className="col-lg-7 col-md-12"
       
      >
        <div className="rent-image" />

      </div>
    </div>
  </div>
</div>

{/* rent property end */}
        <Box
          id="service"
          sx={{
            width: "100%",
            minHeight: "100vh",
            padding: "2rem",
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(to bottom, white, #A5A5A5)",
          }}
        >
          <Container maxWidth="xl">
            <Grid container>
              <Grid item xs={12}>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                  <h2 className="text-4xl font-bold text-gray-800 mb-6">
                    Our <span className="text-amber-800">Services</span>
                  </h2>
                  <p className="text-lg text-gray-700 mb-8">
                    We offer many services for our clients. Here are some of our
                    services:
                  </p>

                  <div className="container mx-auto px-4">
                    <div className="flex flex-wrap -mx-4">
                      {/* Service 1 */}
                      <div className="w-full md:w-1/3 px-4 mb-8">
                        {/* Service card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <img
                            className="w-full h-48 object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/Ace%20Divino.jpg?alt=media&token=df58111a-816e-434c-b321-78a05ec0c88b"
                            alt="Service 1"
                          />
                          <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                              Home Buying
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              We help you find the perfect home that fits your
                              needs and budget. Our team of experts will guide
                              you through the entire home buying process from
                              start to finish in an easy without any problem.
                            </p>
                            <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Service 2 */}
                      <div className="w-full md:w-1/3 px-4 mb-8">
                        {/* Service card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <img
                            className="w-full h-48 object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/Ace%20Divino.jpg?alt=media&token=df58111a-816e-434c-b321-78a05ec0c88b"
                            alt="Service 2"
                          />
                          <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                              Home Selling
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              We help you sell your home quickly and for the
                              best price. Our team of experts will provide you
                              with a customized marketing strategy to attract
                              potential buyers and maximize your home's value.
                            </p>
                            <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Service 3 */}
                      <div className="w-full md:w-1/3 px-4 mb-8">
                        {/* Service card */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                          <img
                            className="w-full h-48 object-cover object-center"
                            src="https://firebasestorage.googleapis.com/v0/b/brickland-76c23.appspot.com/o/Ace%20Divino.jpg?alt=media&token=df58111a-816e-434c-b321-78a05ec0c88b"
                            alt="Service 3"
                          />
                          <div className="p-4">
                            <h2 className="text-lg font-bold text-gray-800 mb-2">
                              Property Management
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                              We provide comprehensive property management
                              services to help you manage your rental
                              properties. Our team of experts will handle
                              everything from tenant screening to maintenance
                              and repairs.
                            </p>
                            <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                              Learn More
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <div
          id="client"
          className="w-full min-h-screen p-2 flex items-center bg-gray-100"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Clients
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                See what our clients have to say about us.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="justify-center">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://www.shutterstock.com/image-vector/creative-vector-illustration-default-avatar-260nw-779277895.jpg"
                  alt="Client 1"
                />
                <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 mb-4">
                    "Working with this real estate agency was a great
                    experience. Their team was knowledgeable and professional,
                    and helped us find our dream home quickly and easily."
                  </p>
                  <p className="text-gray-500">Mukesh Kumar, Homebuyer</p>
                </div>
              </div>
              <div className="justify-center">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://www.shutterstock.com/image-vector/creative-vector-illustration-default-avatar-260nw-779277895.jpg"
                  alt="Client 1"
                />
                <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 mb-4">
                    "I was impressed with this agency's marketing strategy when
                    we were selling our home. They really went above and beyond
                    to showcase my home and attract potential buyers."
                  </p>
                  <p className="text-gray-500">Krishna Reddy, Home Seller</p>
                </div>
              </div>
              <div className="justify-center">
                <img
                  className="w-24 h-24 object-cover rounded-full"
                  src="https://www.shutterstock.com/image-vector/creative-vector-illustration-default-avatar-260nw-779277895.jpg"
                  alt="Client 1"
                />
                <div className="z-10 bg-white p-8 rounded-lg shadow-md">
                  <p className="text-lg text-gray-700 mb-4">
                    "I've been working with this agency for several years now
                    for property management services, and they've been
                    fantastic. They handle everything really well."
                  </p>
                  <p className="text-gray-500">
                    Pritam Banerjee, Property Owner
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </>
  );
};

export default AboutUs;
