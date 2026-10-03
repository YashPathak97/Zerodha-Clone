import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(240, 240, 240)", width: "max" }}>
      <div className="container border-top mt-5 ">
        <div className="row mt-5">
          <div className="col-4">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="Logo"
            />
            <p className="mt-4">
              ©2010 - 2026, Zerodha Broking Ltd.
              <br></br>
              All rights reserved.
            </p>
            <div className="social-icons d-flex gap-4 border-bottom">
              <p>
                <a href="https://x.com/zerodha">
                  <i
                    className="fas fa-times"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
              <p>
                <a href="https://www.linkedin.com/company/zerodha">
                  <i
                    className="fab fa-linkedin"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
              <p>
                <a href="https://www.facebook.com/zerodha.social">
                  <i
                    className="fab fa-facebook-square"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
              <p>
                <a href="https://www.instagram.com/zerodhaonline/">
                  <i
                    className="fab fa-instagram"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
            </div>
            {/* <hr className="mNamet-1  mb-3 opacity-1" style={{ width: "50%" }}></hr> */}
            <div className="social-icons d-flex gap-4 mt-3">
              <p>
                <a href="https://www.youtube.com/@zerodhaonline">
                  <i
                    className="fab fa-youtube"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
              <p>
                <a href="https://www.whatsapp.com/channel/0029Va8tzF0EquiIIb9j791g">
                  <i
                    className="fab fa-whatsapp"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
              <p>
                <a href="https://t.me/zerodhain">
                  <i
                    className="fab fa-telegram-plane"
                    style={{ fontSize: "24px", color: "grey" }}
                  ></i>
                </a>
              </p>
            </div>
            <img
              className="p-3 ps-0"
              src="media/images/googlePlayBadge.svg"
              alt="Google Play"
              style={{ width: "32%" }}
            />
            <img
              className="p-3 ps-0"
              src="media/images/appstoreBadge.svg"
              alt="Google Play"
              style={{ width: "30%" }}
            />
          </div>

          <div className="col">
            <p>Company</p>
            <a
              href="#"
              className="d-block mb-2 text-decoration-none text-muted"
            >
              Philosophy
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-2 text-decoration-none text-muted"
            >
              About
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Press & media
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Careers
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Zerodha Cares (CSR)
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted "
            >
              Zerodha.tech
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Open source
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted "
            >
              Referral program
            </a>
            <br />
          </div>

          <div className="col">
            <p>Support</p>
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Contact us
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Support portal
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              How to file a complaint?
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Status of your complaints
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Bulletin
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Circular
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Z-Connect blog
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Downloads
            </a>
            <br />
          </div>

          <div className="col">
            <p>Account</p>
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Open demat account
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Minor demat account
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              NRI demat account
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              HUF demat account
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Commodity
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Dematerialisation
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              Fund transfer
            </a>
            <br />
            <a
              href="#"
              className="d-block mb-1 text-decoration-none text-muted"
            >
              MTF
            </a>
            <br />
          </div>
        </div>

        <div
          className="container2 mt-5 text-muted opacity:3"
          style={{ fontSize: "12px" }}
        >
          <p>
            Zerodha Broking Limited: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Limited – SEBI Registration no.:
            IN-DP-431-2019, CIN: U65929KA2018PLC116815, Registered Address:
            #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to
            complaints@zerodha.com, for DP related to dp@zerodha.com. Please
            ensure you carefully read the Risk Disclosure Document as prescribed
            by SEBI | ICF{" "}
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES/SMARTODR: Register on
            SCORES portal & SMARTODR. Mandatory details for filing complaints on
            SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of grievances
          </p>

          <p>
            {" "}
            Smart Online Dispute Resolution | Grievances Redressal Mechanism
          </p>

          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.{" "}
          </p>

          <p>
            {" "}
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.{" "}
          </p>

          <p>
            India's largest broker based on networth as per NSE. NSE broker
            factsheet
          </p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here.
          </p>

          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>

          <p>
            Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ000031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).
          </p>
        </div>

        <div className="d-flex">
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>NSE</a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>MCX </a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>MSEI </a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>BSE</a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>Terms & conditions</a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>Policies & procedures</a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>Privacy policy </a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>Disclosure</a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>For investor's attention </a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>Investor charter </a>
            <a href="#" className="text-muted mx-3" style={{textDecoration:'none'}}>Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
