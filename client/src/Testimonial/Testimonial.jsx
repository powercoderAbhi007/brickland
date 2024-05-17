import React from 'react'

const Testimonial = () => {
    const testimonials = [
        {
          src: "https://www.youtube.com/embed/_Ewqnj4MK7w",
          title: "YouTube video player",
          details: "Mr. Tushar Paprikar bought 3 properties with the guidance of Investors Clinic and had an amazing experience."
        },
        {
          src: "https://www.youtube.com/embed/NjI8SDL_9V4",
          title: "YouTube video player",
          details: "Sanjeev K. Khullar, a Delhi based working professional was very worried when his hard earned money was stuck in a project."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
        {
          src: "https://www.youtube.com/embed/3KdhMmiWPcU",
          title: "YouTube video player",
          details: "Debjyoti Mal, made an investment in a Project but his money got stuck because neither the construction was beginning nor were responding properly."
        },
       
      ];
  return (
    <div>
    <section className="space-ptb clearfix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
          <div className="section-title text-center">
    <h2>
        <span className="line"></span>
        Customer's Testimonials
        <span className="line"></span>
    </h2>
</div>
          </div>
        </div>
        <div className="row">
        {testimonials.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mt-4" key={index}>
              <div className="blog-post">
                <div className="blog-post-image">
                  <iframe
                    width="100%"
                    height="220"
                    src={testimonial.src}
                    title={testimonial.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="testimo">
                  <div className="testimo-details">
                    {testimonial.details}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    </div>
  )
}

export default Testimonial
