// src/components/Testimonials.js
import React from "react";

export default function Testimonials() {
  // You can store your testimonials data in an array of objects
  const testimonials = [
    {
      name: "Alice Smith",
      photo: "/alice.jpg", // You will need to save your client or employer photos in the public folder and use the relative path
      quote:
        "John is a talented and reliable web developer. He delivered the project on time and with high quality. He was always responsive and communicative. I highly recommend him for any web development project.",
    },
    {
      name: "Bob Jones",
      photo: "/bob.jpg",
      quote:
        "John is a great web developer who knows how to create amazing websites using modern technologies. He was very helpful and friendly throughout the project. He exceeded my expectations and I'm very happy with the result.",
    },
    {
      name: "Charlie Lee",
      photo: "/charlie.jpg",
      quote:
        "John is a skilled and professional web developer who can handle any challenge. He was very flexible and adaptable to the changing requirements of the project. He delivered a stunning website that met all my needs and goals.",
    },
  ];

  return (
    <section id="testimonials" className="container py-5">
      <h2 className="text-primary">Testimonials</h2>
      <p className="lead text-black">
        Here are some of the testimonials from my clients and employers. You can
        see their photos, names, and quotes below.
      </p>
      <div className="row">
        {testimonials.map((testimonial, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>
            <div className="card h-100">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{testimonial.name}</h5>
                <p className="card-text">{testimonial.quote}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
