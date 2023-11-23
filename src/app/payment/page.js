'use client';
import React from 'react';
import Navbar from '../../component/navbar2';
import { useEffect } from 'react';
import Link from 'next/link';

export default function page() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap');
  }, []);
  return (
    <div>
      <Navbar />
      <div className="header bg-primary p-5">
        <div className="row">
          <div className="col-md">
            <div className="card p5">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="">
                      <div>
                        <p>Payment Method</p>
                      </div>
                      <div className="bg-body-tertiary">
                        <div className="row">
                          <div className="col-md">
                            <div className="p-3 d-flex justify-content-between">
                              <p>Paypal</p>
                              <p>Img Paypal</p>
                            </div>
                            <div className="p-3 d-flex justify-content-between">
                              <p>Credit Card</p>
                              <p>Img Card</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div>
                          <p>Card Number</p>
                        </div>
                        <div>
                          <form>
                            <input
                              className="form-control"
                              type="number"
                              placeholder="0000000000"
                            />
                          </form>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="row">
                          <div className="col-md-6">
                            <div>
                              <p>Expiry Date</p>
                            </div>
                            <div>
                              <form>
                                <input className="form-control" />
                              </form>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div>
                              <p>CVC/CVV</p>
                            </div>
                            <div>
                              <form>
                                <input className="form-control" />
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="">
                      <div>
                        <p>Summary</p>
                      </div>
                    </div>
                    <div>
                      <div className="row border-bottom">
                        <div className="col-md-6">
                          <div class="dropdown">
                            <button
                              class="btn dropdown-toggle fs-5"
                              type="button"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Pro(Billed Monthly)
                            </button>
                            <ul class="dropdown-menu">
                              <li>
                                <a class="dropdown-item" href="#">
                                  Action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Another action
                                </a>
                              </li>
                              <li>
                                <a class="dropdown-item" href="#">
                                  Something else here
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <div>
                            <p>$9.99/month</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5 border-bottom">
                        <div className="col-md-6">
                          <div>
                            <p className="fs-5">Refferal Bonuses</p>
                            <p>Vat</p>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <div>
                            <p className="fs-5">-$2.00</p>
                            <p>-20%</p>
                          </div>
                        </div>
                      </div>
                      <div className="row mt-5">
                        <div className="col-md-6">
                          <div>
                            <p className="fs-5">Today you Pay(Us Dollar)</p>
                            <p>After 30 days $9.59</p>
                          </div>
                        </div>
                        <div className="col-md-6 d-flex justify-content-end">
                          <div>
                            <p className="fs-5">$0</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <button className="btn btn-primary w-100 mt-5">
                          Try it free for 30 days
                        </button>
                        <p className='text-center'>Have a promo code?</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
