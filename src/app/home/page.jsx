'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react';
import Navbar2 from '../../component/navbar2';
import Image from 'next/image';
import Garuda from '../../../public/image/garuda.png';
import Lion from '../../../public/image/lion.png';
import Air from '../../../public/image/air.png';
import Swal from 'sweetalert2';
import Link from 'next/link';

export default function page() {
  const [data, setData] = useState([]);
  const [Transit, setTransit] = useState(true);
  const [Facilities, setFacilities] = useState(true);
  const [Depature, setDepature] = useState(true);
  const [Arrived, setArrived] = useState(true);
  const [Airlines, setAirlines] = useState(true);
  const [filter, setFilter] = useState(null);
  const [Facility, setFacility] = useState('');
  const [reqAirline, setReqAirline] = useState('');
  const allFacilities = [
    { name: 'baggage', image: '/images/luggage.svg' },
    { name: 'meal', image: '/images/burger.svg' },
    { name: 'wifi', image: '/images/wifi.svg' },
  ];

  const showTransit = () => {
    setTransit(!Transit);
  };
  const showFacilities = () => {
    setFacilities(!Facilities);
  };
  const showDepature = () => {
    setDepature(!Depature);
  };
  const showArrived = () => {
    setArrived(!Arrived);
  };
  const showAirlines = () => {
    setAirlines(!Airlines);
  };

  const getFlightData = async () => {
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const result = await axios.get(
        `${process.env.NEXT_BASE_URL}/airlines/flight`
      );
      Swal.close();
      setData(result.data.data.tickets);
      console.log(result.data.data.tickets);
    } catch (error) {
      console.log('error', error);
    }
  };
  useEffect(() => {
    getFlightData();
  }, []);

  const getFilteredFlight = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_BASE_URL}/airlines/flight?facilities=${Facility}&airlineId=${reqAirline}&minPrice=${reqMinPrice[0]}&maxPrice=${reqMinPrice[1]}`
      );
      setFilter(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getFilteredFlight();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Facility, reqAirline]);

  const reset = () => {
    setReqAirline('');
    setFacility('');
  };

  const checkBox = (facilityId) => {
    if (Facility.includes(facilityId)) {
      setFacility(Facility.filter((id) => id !== facilityId));
    } else {
      setFacility([...Facility, facilityId]);
    }
  };
  return (
    <div>
      <Navbar2 />
      <div className="container-fluid bg-body-tertiary">
        <div className="row bg-primary shadow rounded-bottom">
          <div className="col-md-6">
            <div>
              <div className="position-absolute mt-3 ms-5 p-5 d-flex w-50">
                <svg
                  width="50"
                  height="35"
                  viewBox="0 0 50 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="me-5"
                >
                  <path
                    d="M6.29307 32.9371C6.78369 33.6656 7.47274 34.0788 8.19382 34.0777L18.3921 34.0586C19.1969 34.0571 19.9901 33.7973 20.7076 33.3003L43.4385 17.576C45.5275 16.1308 47.4001 14.068 48.6743 11.3661C50.1047 8.3331 50.2602 6.1382 49.6954 4.5876C49.1321 3.03594 47.7626 1.89642 45.1447 1.66425C42.8127 1.45765 40.4932 2.29472 38.4042 3.73882L30.7082 9.06261L13.6226 0.323454C13.4172 0.134803 13.1785 0.0243769 12.9313 0.00359444C12.6841 -0.017188 12.4373 0.052427 12.2164 0.205242L7.07978 3.75905C6.2462 4.3352 6.04464 5.85172 6.67588 6.79742L18.8803 17.2448L10.8172 22.8231L5.16497 18.9392C4.97023 18.8053 4.75514 18.7358 4.53706 18.7361C4.31898 18.7365 4.10401 18.8068 3.90952 18.9413L0.774426 21.1106C-0.0411833 21.6751 -0.256023 23.1469 0.339278 24.1011L6.29307 32.9371Z"
                    fill="white"
                  />
                </svg>
                <div className="w-75">
                  <div className="d-flex text-white justify-content-between">
                    <p>From</p>
                    <p>To</p>
                  </div>
                  <div className="d-flex justify-content-between text-white">
                    <h5>Medan (IDN)</h5>
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 17 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.6888 4.69033L13.8123 7.56688C13.6048 7.77437 13.3329 7.8781 13.0609 7.8781C12.789 7.8781 12.5171 7.77437 12.3096 7.56688C11.8947 7.15194 11.8947 6.47922 12.3096 6.06428L13.3724 5.00154H2.23291C1.64611 5.00154 1.17041 4.52584 1.17041 3.93904C1.17041 3.35225 1.64611 2.87654 2.23291 2.87654H13.3724L12.3096 1.81381C11.8947 1.39887 11.8947 0.726144 12.3096 0.311205C12.7246 -0.103735 13.3973 -0.103735 13.8123 0.311205L16.6888 3.18776C17.1037 3.60266 17.1037 4.27542 16.6888 4.69033ZM14.186 11.9984H3.62761L4.69037 10.9357C5.10528 10.5208 5.10528 9.84804 4.69037 9.4331C4.2754 9.01816 3.60271 9.01816 3.18773 9.4331L0.31118 12.3097C-0.103727 12.7246 -0.103727 13.3973 0.31118 13.8123L3.18773 16.6888C3.39522 16.8963 3.66712 17 3.93905 17C4.21099 17 4.48289 16.8963 4.69037 16.6888C5.10528 16.2739 5.10528 15.6011 4.69037 15.1862L3.62761 14.1235H14.186C14.7728 14.1235 15.2485 13.6478 15.2485 13.061C15.2485 12.4742 14.7728 11.9984 14.186 11.9984Z"
                        fill="white"
                      />
                    </svg>
                    <h5>Tokyo (JPN)</h5>
                  </div>
                  <div className="d-flex text-white">
                    <div>
                      <p>Monday, 20 July 20</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-3 ms-3 me-1"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                      </svg>
                      <p>6 Passenger</p>
                    </div>
                    <div className="d-flex align-items-center">
                      <svg
                        width="5"
                        height="5"
                        viewBox="0 0 5 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="mb-3 ms-3 me-1"
                      >
                        <circle cx="2.5" cy="2.5" r="2.5" fill="white" />
                      </svg>
                      <p>Economy</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ;
            <div className="">
              <svg
                width="217"
                height="172"
                viewBox="0 0 217 172"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3188 166.013C22.5266 169.675 25.6273 171.752 28.8722 171.746L74.7643 171.65C78.386 171.642 81.9556 170.337 85.1844 167.838L187.473 88.8008C196.874 81.5367 205.3 71.1679 211.034 57.5872C217.471 42.3417 218.171 31.3091 215.629 23.5151C213.094 15.7157 206.932 9.98796 195.151 8.821C184.657 7.78251 174.219 11.99 164.819 19.2487L130.187 46.0086L53.3018 2.08152C52.3774 1.13327 51.3034 0.578218 50.1909 0.473756C49.0784 0.369293 47.9677 0.719211 46.9738 1.48733L23.859 19.3504C20.1079 22.2464 19.2009 29.8692 22.0414 34.6227L76.9615 87.136L40.6774 115.175L15.2424 95.6527C14.3661 94.98 13.3981 94.6304 12.4168 94.6323C11.4354 94.6341 10.4681 94.9873 9.59285 95.6634L-4.51508 106.568C-8.18533 109.405 -9.1521 116.803 -6.47325 121.599L20.3188 166.013Z"
                  fill="#41A4FF"
                />
              </svg>
            </div>
          </div>

          <div className="col-md-6">
            <div className="mt-3 ms-5 p-5 d-flex text-white justify-content-end">
              <p>Change Search</p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="row">
            <div className="col-md-4">
              <div>
                <div className="d-flex justify-content-between">
                  <h4>Filter</h4>
                  <p className="text-primary">Reset</p>
                </div>
              </div>
              <div>
                <div className="card">
                  <div className="card-body">
                    <div className="border border-0 border-bottom border-2 mb-3">
                      <div>
                        <p className="text-primary">Transit</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Direct</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit 2+</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-0 border-bottom border-2 mb-3">
                      <div>
                        <p className="text-primary">Transit</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Direct</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit 2+</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-0 border-bottom border-2 mb-3">
                      <div>
                        <p className="text-primary">Transit</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Direct</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit 2+</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-0 border-bottom border-2 mb-3">
                      <div>
                        <p className="text-primary">Transit</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Direct</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit 2+</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-0 border-bottom border-2 mb-3">
                      <div>
                        <p className="text-primary">Transit</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Direct</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit 2+</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="border border-0 border-bottom border-2">
                      <div>
                        <p className="text-primary">Transit</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Direct</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                      <div className="d-flex justify-content-between">
                        <div>
                          <p>Transit 2+</p>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                    <h4>Select Ticket</h4>
                    <p className="text-muted">(6 Ticket Found)</p>
                  </div>
                  <p>Sort by</p>
                </div>
                {data?.map((item, index) => {
                  return (
                    <div className="card mb-3">
                      <div className="card-body">
                        <div key={index}>
                          <div className="d-flex align-items-center text-muted gap-3">
                            <Image
                              src={item.photo}
                              width={200}
                              height={150}
                              color="fffff"
                              alt="img.png"
                            />
                            <p>{item?.name}</p>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-5">
                            <div className="d-flex">
                              <div className="me-2">
                                <h6>{item?.from?.country}</h6>
                                {new Date(`${item.takeoff}`).toLocaleString(
                                  'en-us',
                                  {
                                    timeZone: 'Asia/Jakarta',
                                    hour12: false,
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  }
                                )}
                              </div>
                              <div>
                                <svg
                                  width="20"
                                  height="18"
                                  viewBox="0 0 20 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M18.5559 15.6H0.475875C0.213001 15.6 8.45316e-05 15.8685 8.45316e-05 16.2V17.4C8.45316e-05 17.7315 0.213001 18 0.475875 18H18.5559C18.8188 18 19.0317 17.7315 19.0317 17.4V16.2C19.0317 15.8685 18.8188 15.6 18.5559 15.6ZM2.39539 11.5977C2.58214 11.8542 2.84442 11.9997 3.11889 11.9993L7.00074 11.9926C7.30709 11.9921 7.60904 11.9006 7.88215 11.7256L16.5344 6.1888C17.3296 5.67993 18.0424 4.95357 18.5274 4.00221C19.0718 2.93423 19.131 2.16136 18.916 1.61537C18.7016 1.069 18.1803 0.66776 17.1838 0.586011C16.2962 0.513263 15.4133 0.808008 14.6181 1.3165L11.6888 3.1911L5.18531 0.113894C5.10711 0.0474663 5.01627 0.00858352 4.92216 0.00126566C4.82806 -0.0060522 4.73412 0.0184604 4.65004 0.0722692L2.69484 1.32363C2.37755 1.5265 2.30083 2.06049 2.5411 2.39348L7.1866 6.07218L4.11746 8.0364L1.96599 6.6688C1.89187 6.62167 1.80999 6.59718 1.72698 6.59731C1.64397 6.59744 1.56215 6.62219 1.48812 6.66955L0.294777 7.43341C-0.015676 7.63216 -0.0974525 8.1504 0.129143 8.48639L2.39539 11.5977Z"
                                    fill="#979797"
                                  />
                                </svg>
                              </div>
                              <div className="ms-2">
                                <h6>{item?.to?.country}</h6>
                                {new Date(`${item.landing}`).toLocaleString(
                                  'en-us',
                                  {
                                    timeZone: 'Asia/Jakarta',
                                    hour12: false,
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="col-md-2">
                            <p>{item?.interval_time}</p>
                            <p>({item?.transit} Transit)</p>
                          </div>
                          <div className="col-md-3 d-flex">
                            <div>
                              {item?.facilities?.map((facilitied) => {
                                const getFacilities = allFacilities.find(
                                  (data) => data.name === facilitied
                                );

                                return (
                                  <div key={facilitied}>
                                    {getFacilities && (
                                      <img
                                        src={getFacilities.image}
                                        alt={facilitied}
                                        width={30}
                                        height={30}
                                      />
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                          <div className="col-md-2">
                            <div>
                              <p className="text-primary">$ {item?.price}</p>
                            </div>
                            <div>
                              <Link href={`/home/${item.code}`}>
                                <button className="btn btn-primary">
                                  Select
                                </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
