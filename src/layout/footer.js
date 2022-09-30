import React from 'react'

export default function footer() {
    return (
        <div>
            <div className="foot-effect" />
            <footer className="footer-style-1 bg-2">
                <div className="container">
                    <div className="row align-items-center">
                        {/*Social*/}
                        <div className="col-12">
                            <div className="footer-social text-center">
                                <ul className="list-unstyled">
                                    <li><a className="wow fadeInUp" href="https://www.facebook.com/wahphuchka/" target="_blank"><i aria-hidden="true" className="fab fa-facebook-f" /><span /></a></li>
                                    <li><a className="wow fadeInUp" href="https://www.instagram.com/wahphuchka/" target="_blank"><i aria-hidden="true" className="fab fa-instagram" /><span /></a></li>
                                    <li><a className="wow fadeInDown" href="https://in.linkedin.com/company/wah-phuchka" target="_blank"><i aria-hidden="true" className="fab fa-linkedin-in" /><span /></a></li>
                                </ul>
                            </div>
                        </div>
                        {/*Text*/}
                        <div className="col-12 text-center mt-3">
                            <p className="company-about fadeIn">Copyright © 2022 Wah Phuchka. Made With Love By <a href="javascript:void(0);">Ashish</a>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
