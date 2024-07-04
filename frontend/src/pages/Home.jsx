import React, { useContext, useEffect, useState } from 'react'


export default function Home() 
{



  
  return (
<section class="bg-light">
  <div class="container py-5 py-lg-0 min-vh-100 d-flex align-items-center justify-content-center">
    <div class="text-center">
      <h1 class="display-4 fw-extrabold">
        Understand User Flow.
        <strong class="d-block text-danger fw-extrabold"> Task Manager. </strong>
      </h1>
      <p class="mt-4 fs-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>
      <div class="mt-4 d-flex flex-wrap justify-content-center gap-4">
        <a
          class="btn btn-danger text-white px-4 py-2 shadow-sm hover:bg-danger focus:outline-none focus:ring active:bg-danger"
          href="#"
        >
          Get Started
        </a>
        <a
          class="btn btn-outline-danger text-danger px-4 py-2 shadow-sm hover-text-danger focus:outline-none focus:ring active:text-danger"
          href="#"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

  )
}


