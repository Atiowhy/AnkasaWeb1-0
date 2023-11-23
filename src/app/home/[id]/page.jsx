'use client';
import { useEffect, useState } from 'react';
import React from 'react';
import Navbar2 from '../../../component/navbar2';

import Image from 'next/image';
import Swal from 'sweetalert2';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

export default function booking({ props }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);

  const router = useRouter();
  const [data, setData] = useState('');
  const [detailFlight, setDetailFlight] = useState({});
  const [profile, setProfile] = useState({});
  const [dataUser, setDataUser] = useState('');
  const [title, setTitle] = useState('');
  const [country, setCountry] = useState('');
  const { id } = useParams;
  const handleChange = (e) => {
    const newData = { ...detailFlight };
    newData[e.target.name] = e.target.value;
    setDetailFlight(newData);
  };

  const getData = () => {
    Swal.fire({
      title: 'Loading...',
      allowOutsideClick: false, // Mencegah interaksi selama loading
      onBeforeOpen: () => {
        Swal.showLoading();
      },
    });
    try {
      const result = axios.get(
        `https://easy-lime-seal-toga.cyclic.app/airlines/flight/${id}`
      );
      Swal.close();
      result.data.data && setData(result.data.data);
      setSelected(null);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const submit = async () => {
    try {
      const data = {
        title1: title,
        fullname1: dataUser,
        nationality: country,
      };
      console.log(data);

      const result = await axios.post(
        `https://easy-lime-seal-toga.cyclic.app/booking/tickets/${id}`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('access_token')}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        }
      );
      Swal.fire({
        title: 'Success!',
        text: `${result.data.message}`,
        icon: 'success',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/profile');
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  return (
    <div>
      <Navbar2 />
      <div className="container-fluid bg-primary">
        <div className="container position-absolute p-5">
          <div className="row">
            <div className="col-md-8">
              <div className="text-white">
                <h4>Contact Person Details</h4>
              </div>
              <div className="card mt-4 shadow">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="fullname"
                        className="form-control border-0 border-bottom border-2 border-primary"
                        onChange={(e) => handleChange(e)}
                        value={profile.fullname1}
                        autoFocus
                      />
                    </div>
                    <div className="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                        Email address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        onChange={(e) => handleChange(e)}
                        value={profile.email}
                        autoFocus
                        className="form-control border-0 border-bottom border-2 border-primary"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Phone Number
                      </label>
                      <div className="d-flex">
                        <div className="dropdown">
                          <button
                            className="btn border-bottom border-2 border-primary border-0 dropdown-toggle"
                            type="button"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            +62
                          </button>
                          <ul className="dropdown-menu">
                            <li>
                              <a className="dropdown-item" href="#">
                                +65
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                +66
                              </a>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                +67
                              </a>
                            </li>
                          </ul>
                        </div>
                        <input
                          type="number"
                          className="form-control border-0 border-bottom border-2 border-primary"
                          name="number"
                          id="number"
                          onChange={(e) => handleChange(e)}
                          value={profile.phone}
                          autoFocus
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-4">
                <h4>Passenger Details</h4>
              </div>
              <div className="card mt-4 shadow">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Title
                      </label>
                      <div className="dropdown">
                        <button
                          className="btn border-bottom border-2 border-primary border-0 w-100 d-flex align-items-center dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Mr.
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Mr
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Ms
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Gr
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="form-control border-0 border-bottom border-2 border-primary"
                      />
                    </div>
                    <div className="mb-3">
                      <label for="username" className="form-label">
                        Nationality
                      </label>
                      <div className="dropdown">
                        <button
                          className="btn border-bottom border-2 border-primary border-0 w-100 d-flex align-items-center dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Indonesia
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <a className="dropdown-item" href="#">
                              Inggris
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              Brazil
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item" href="#">
                              China
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="mt-4">
                <h4>Passenger Details</h4>
              </div>
              <div className="card mt-4 shadow">
                <div className="card-body">
                  <div className="d-flex justify-content-between border border-0 border-bottom border-2">
                    <div className="form-check">
                      <input
                        className="form-check-input border-primary"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label
                        className="form-check-label"
                        for="flexCheckDefault"
                      >
                        Travel Insurance
                      </label>
                    </div>
                    <div>
                      <p className="text-primary">$ 2,00/pax</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p>Get travel compensation up to $ 10.000,00</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-center">
                <button className=" btn btn-primary">Proceed to Payment</button>
              </div>
            </div>
            <div className="col-md-4">
              <div>
                <div className="text-white d-flex justify-content-between">
                  <h4>Flight Details</h4>
                  <p>View Details</p>
                </div>
                <div className="card">
                  <div className="card-body">
                    <div className="d-flex text-muted">
                      <Image src={data?.photo} />
                      <p>{data?.name}</p>
                    </div>
                    <div>
                      <div className="d-flex mt-3 justify-content-around">
                        <p>{data?.to?.location}</p>
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
                        <p>{data?.from?.location}</p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <p>Sunday, 5 Agustus 2020</p>
                        <p>15:00</p>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input border-primary"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label text-primary"
                          for="flexRadioDefault1"
                        >
                          Refundable
                        </label>
                      </div>
                      <div className="form-check border border-0 border-bottom border-2">
                        <input
                          className="form-check-input border-primary"
                          type="radio"
                          name="flexRadioDefault"
                          id="flexRadioDefault1"
                        />
                        <label
                          className="form-check-label text-primary"
                          for="flexRadioDefault1"
                        >
                          Can reschedule
                        </label>
                      </div>
                      <div className="mt-3 d-flex justify-content-between">
                        <p>Total Payment</p>
                        <h4 className="text-primary">$ {data?.price},00</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
  );
}
