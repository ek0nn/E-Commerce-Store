import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
  <>

  <section className='home-wrapper-1 '>
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="images/disckb.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/disckb.jpg" class="d-block w-100 " alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="images/disckb.jpg" class="d-block w-100 " alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-banner position-relative p-3'>
          <img src="images/discordkeyboard1.jpg" className='img-fluid rounded-2'
          alt='main img'
          />
          <div className='main-banner-content position-absolute'>
            <h6>Instock Now</h6>
            <h3>Discord TKL</h3>
            <p>From £199.99 </p>
            <Link className='button'>BUY NOW</Link>
            </div>
          </div>
        </div>
    
        <div className='col-6'>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          <div className='small-banner position-relative p-3'>
          <img src="images/penguinswitch.png" className='img-fluid rounded-2'
          alt='small img'
          />
          <div className='small-banner-content position-absolute'>
            <h6>Penguin Switches</h6>
            <p>From £8.99 </p>
          </div>
          </div>
          
        </div>
        </div>
        </div>
    </div>
    <div class="container-sm text-center pt-5 h1">New Arrivals</div>
  </section>
  <section lassName='home-wrapper-2 '>
  <div class="container">
  <div class="row row-cols-4 w-5 p-3 sm ">
    <div class="col-smallstuff">
    <div className='d-flex flex-wrap justify-content-between align-items-center'>
          <div className='small-banner1 position-relative'>
          <img src="images/spellbook-deskpad.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          </div>
      </div>

    <div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/NK87.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          </div>


<div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/starwars.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          </div>
          <div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/4switches.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
          <div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/mousepad2.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
          <div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/pcb1.png" className='img'
          alt='small img'
          />
          <div className='small-title'>KEYBOARDS</div>
          </div>
          
          </div>
          <div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/penguinswitch.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
          <div class="col-smallstuff">
          <div className='small-banner1 position-relative'>
          <img src="images/penguinswitch.png" className='img'
          alt='small img'
          />
                    <div className='small-title'>KEYBOARDS</div>

          </div>
          
          </div>
  
  </div>
</div>

<div class="container p-3 pt-5">
<div class="row">

<div class="col-xl-6 col-lg-10"><div>
  <p class="subtitle mb-3 text-danger">Deal of the week</p>
  <h3 class="h1">Oversized denim jacket</h3><p class="text-muted">
    <del class="me-3">$129.00</del><span>$79.00</span></p><p class="mb-4">
      <span class="badge badge-danger p-3 badge bg-danger">$50 off</span>
      </p>
      <div class="bg-white px-5 py-4 shadow mb-4" id="countdown">
        <div class="row justify-content-between">
          <div class="col-6 col-sm-3 text-center mb-4 mb-sm-0">
            <h6 class="h4 mb-2 days">14&nbsp;</h6><span class="text-muted">days</span></div>
            <div class="col-6 col-sm-3 text-center mb-4 mb-sm-0"><h6 class="h4 mb-2 days">23&nbsp;</h6><span class="text-muted">hours</span></div>
            <div class="col-6 col-sm-3 text-center mb-4 mb-sm-0"><h6 class="h4 mb-2 days">58&nbsp;</h6><span class="text-muted">minutes</span></div>
            <div class="col-6 col-sm-3 text-center mb-4 mb-sm-0"><h6 class="h4 mb-2 days">28&nbsp;</h6><span class="text-muted">seconds</span></div>
            </div></div><p><button type="button" class="btn btn-outline-dark">Shop now</button></p>
            </div>
            </div>
            </div>
            </div>

  </section>
  
  </>
  );
};

export default Home