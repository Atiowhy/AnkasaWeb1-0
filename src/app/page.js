import React from 'react';
import Navbar1 from '../component/navbar1';
import Img1 from '../../public/image/Group 53.png';
import Img2 from '../../public/image/Group 55.png';
import Image from 'next/image';
import Card from '../../public/image/card.png';
import RoundedImg from '../../public/image/Group 61.png';
import Footer from '../component/footer';
export default function Home() {
  return (
    <div>
      <Navbar1 />
      <div className="container-fluid">
        <div className="w-75 d-flex justify-content-end me-5 position-absolute">
          <div className="card shadow " style={{ width: '25rem' }}>
            <div className="card-body">
              <h6 className="card-subtitle mb-2 text-body-secondary">hey,</h6>
              <h5 className="card-title">Where you want to go?</h5>
              <div className="d-flex mt-3 justify-content-between">
                <p className="card-text text-primary">Recently Search</p>
                <div>
                  <svg
                    width="10"
                    height="18"
                    viewBox="0 0 10 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.07107 1.99998L7.43503 8.36394C7.82555 8.75446 7.82555 9.38763 7.43503 9.77815L1.07107 16.1421"
                      stroke="#2395FF"
                      stroke-width="3"
                    />
                  </svg>
                </div>
              </div>
              <div className="card shadow">
                <div className="card-body">
                  <div className="d-flex justify-content-between text-muted">
                    <p>From</p>
                    <p>To</p>
                  </div>

                  <div className="d-flex justify-content-between">
                    <h3>Medan</h3>
                    <div className="">
                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_13936_917)">
                          <path
                            d="M16.6888 4.69058L13.8123 7.56713C13.6048 7.77461 13.3329 7.87834 13.0609 7.87834C12.789 7.87834 12.5171 7.77461 12.3096 7.56713C11.8947 7.15219 11.8947 6.47946 12.3096 6.06452L13.3724 5.00179H2.23291C1.64611 5.00179 1.17041 4.52609 1.17041 3.93929C1.17041 3.35249 1.64611 2.87679 2.23291 2.87679H13.3724L12.3096 1.81406C11.8947 1.39912 11.8947 0.726388 12.3096 0.311449C12.7246 -0.103491 13.3973 -0.103491 13.8123 0.311449L16.6888 3.188C17.1037 3.60291 17.1037 4.27567 16.6888 4.69058ZM14.186 11.9987H3.62761L4.69037 10.9359C5.10528 10.521 5.10528 9.84828 4.69037 9.43334C4.2754 9.0184 3.60271 9.0184 3.18773 9.43334L0.31118 12.3099C-0.103727 12.7248 -0.103727 13.3976 0.31118 13.8125L3.18773 16.6891C3.39522 16.8965 3.66712 17.0003 3.93905 17.0003C4.21099 17.0003 4.48289 16.8965 4.69037 16.6891C5.10528 16.2741 5.10528 15.6014 4.69037 15.1864L3.62761 14.1237H14.186C14.7728 14.1237 15.2485 13.648 15.2485 13.0612C15.2485 12.4744 14.7728 11.9987 14.186 11.9987Z"
                            fill="#2395FF"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_13936_917">
                            <rect width="17" height="17" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <h3>Tokyo</h3>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p>Indonesia</p>
                    <p>Japan</p>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary ">
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M19.1017 15.6H1.02165C0.758777 15.6 0.545861 15.8685 0.545861 16.2V17.4C0.545861 17.7315 0.758777 18 1.02165 18H19.1017C19.3646 18 19.5775 17.7315 19.5775 17.4V16.2C19.5775 15.8685 19.3646 15.6 19.1017 15.6ZM2.94117 11.5977C3.12792 11.8542 3.39019 11.9997 3.66467 11.9993L7.54652 11.9926C7.85287 11.9921 8.15482 11.9006 8.42792 11.7256L17.0802 6.1888C17.8753 5.67993 18.5881 4.95357 19.0731 4.00221C19.6176 2.93423 19.6768 2.16136 19.4618 1.61537C19.2474 1.069 18.7261 0.66776 17.7296 0.586011C16.842 0.513263 15.9591 0.808008 15.1639 1.3165L12.2345 3.1911L5.73108 0.113894C5.65289 0.0474663 5.56204 0.00858352 5.46794 0.00126566C5.37384 -0.0060522 5.27989 0.0184604 5.19582 0.0722692L3.24062 1.32363C2.92333 1.5265 2.8466 2.06049 3.08688 2.39348L7.73238 6.07218L4.66323 8.0364L2.51177 6.6688C2.43764 6.62167 2.35577 6.59718 2.27276 6.59731C2.18975 6.59744 2.10793 6.62219 2.0339 6.66955L0.840554 7.43341C0.5301 7.63216 0.448324 8.1504 0.674919 8.48639L2.94117 11.5977Z"
                      fill="white"
                    />
                  </svg>
                  One Way
                </button>
                <button className="btn btn-secondary">
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-2"
                  >
                    <path
                      d="M10.3365 1.46325e-05C12.9371 0.00433318 15.2982 0.952018 17.0415 2.49261L18.443 1.19651C19.0364 0.647833 20.0508 1.03643 20.0508 1.81239V6.67743C20.0508 7.15846 19.6292 7.5484 19.109 7.5484H13.8482C13.0091 7.5484 12.5889 6.61025 13.1822 6.06155L14.8206 4.54643C13.6094 3.49767 12.0421 2.91674 10.3771 2.90346C6.75115 2.8745 3.69473 5.5881 3.72608 9.05256C3.75583 12.339 6.63703 15.0968 10.3186 15.0968C11.9326 15.0968 13.4579 14.5641 14.66 13.5887C14.8461 13.4377 15.1272 13.4469 15.3023 13.6088L16.8588 15.0481C17.05 15.2249 17.0405 15.5132 16.8399 15.6808C15.1142 17.1222 12.8273 18 10.3186 18C4.94371 18 0.586465 13.9706 0.586426 9.00008C0.586387 4.03524 4.96772 -0.00887649 10.3365 1.46325e-05Z"
                      fill="#595959"
                    />
                  </svg>
                  Round Trip
                </button>
              </div>
              <div className="mt-3">
                <p className="text-muted">Departure</p>
                <div className="border rounded border-2 p-3 d-flex justify-content-between">
                  Monday, 20 July 2020
                  <svg
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.09353 0.906473L4.77284 4.58579C5.55389 5.36684 5.55389 6.63316 4.77284 7.41421L1.09353 11.0935"
                      stroke="#2395FF"
                      stroke-width="2"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-muted">How Many Person?</p>
                <div className="d-flex gap-3">
                  <div className="border rounded border-2 p-3 d-flex justify-content-between w-50 ">
                    2 Child
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.09353 0.906473L4.77284 4.58579C5.55389 5.36684 5.55389 6.63316 4.77284 7.41421L1.09353 11.0935"
                        stroke="#2395FF"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                  <div className="border rounded border-2 p-3 d-flex justify-content-between w-50 ">
                    4 Adult
                    <svg
                      width="7"
                      height="12"
                      viewBox="0 0 7 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.09353 0.906473L4.77284 4.58579C5.55389 5.36684 5.55389 6.63316 4.77284 7.41421L1.09353 11.0935"
                        stroke="#2395FF"
                        stroke-width="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <p className="text-muted">Wich Class do You Want?</p>
              </div>
              <div className="d-flex gap-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Economy
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    Bussiness
                  </label>
                </div>
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="flexRadioDefault1"
                  />
                  <label class="form-check-label" for="flexRadioDefault1">
                    First Class
                  </label>
                </div>
              </div>
              <button className="btn btn-primary mt-3 w-100">
                Search Flight
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex justify-content-center p-5">
              <div>
                <h1>
                  Find Your <span className="text-primary">Flight</span>
                </h1>
                <div>
                  <p className="text-muted">And explore the world with us</p>
                </div>
              </div>
            </div>
            <div className="ms-5 d-flex w-100 justify-content-end">
              <Image
                src={Img1}
                className="border rounded border-2 border-primary"
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="ms-5 d-flex w-100 justify-content-end">
              <Image
                src={Img2}
                className="w-75 border rounded border-2 border-primary"
              />
            </div>
            <div className="p-5 d-flex justify-content-center">
              <svg
                width="232"
                height="246"
                viewBox="0 0 232 246"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M75.8267 2.00037C130.421 -11.0624 159.649 43.6408 187.892 84.1019C214.743 122.571 250.689 167.035 218.118 205.852C182.265 248.582 114.138 253.381 61.4892 234.747C15.3301 218.41 -2.09434 173.998 0.684063 128.895C3.84507 77.5814 18.834 15.6371 75.8267 2.00037Z"
                  fill="#2395FF"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* end of content1 */}

      <div className="container">
        <div>
          <p className="text-primary">Trending</p>
        </div>
        <div className="d-flex justify-content-between">
          <h4>Trending Destinations</h4>
          <p className="text-primary">View All</p>
        </div>
        <div className="row p-5 ms-3">
          <div className="col-md-3">
            <div>
              <Image src={Card} />
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Image src={Card} />
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Image src={Card} />
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <Image src={Card} />
            </div>
          </div>
        </div>
        <div className="bg-primary rounded">
          <div className="p-5">
            <div className="d-flex justify-content-center">
              <p className="text-white">Top 10</p>
            </div>
            <div className="d-flex justify-content-center">
              <h3 className="text-white">Top 10 Destination</h3>
            </div>
            <div>
              <div className="row p-5">
                <div className="col-md-2">
                  <div>
                    <Image src={RoundedImg} />
                    <div className="d-flex justify-content-center">
                      <p className="text-white p-3">Singapore</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <Image src={RoundedImg} />
                    <div className="d-flex justify-content-center">
                      <p className="text-white p-3">Singapore</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <Image src={RoundedImg} />
                    <div className="d-flex justify-content-center">
                      <p className="text-white p-3">Singapore</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <Image src={RoundedImg} />
                    <div className="d-flex justify-content-center">
                      <p className="text-white p-3">Singapore</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <Image src={RoundedImg} />
                    <div className="d-flex justify-content-center">
                      <p className="text-white p-3">Singapore</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <div>
                    <Image src={RoundedImg} />
                    <div className="d-flex justify-content-center">
                      <p className="text-white p-3">Singapore</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-flex justify-content-center gap-5">
                <button className="btn btn-primary border border-2">
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.6005 1.99992L2.40812 11.1923C2.01759 11.5828 2.01759 12.216 2.40812 12.6065L11.6005 21.7989"
                      stroke="white"
                      stroke-width="4"
                    />
                  </svg>
                </button>
                <button className="btn btn-light">
                  <svg
                    width="14"
                    height="24"
                    viewBox="0 0 14 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.39949 1.99992L11.5919 11.1923C11.9824 11.5828 11.9824 12.216 11.5919 12.6065L2.39949 21.7989"
                      stroke="#2395FF"
                      stroke-width="4"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
