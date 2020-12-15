customElements.define("custom-footer", class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="../css/base.css">
        <footer>
        <div class="footer__list">
            <div class="footer__list-item">
                <a href="" class="footer__col_header">New cars</a>
                <div class="footer__list-col">
                    <a href="" class="footer_list_link">New Cars for Sale</a>
                    <a href="" class="footer_list_link">Research Cars</a>
                    <a href="" class="footer_list_link">Best Price Program</a>
                    <a href="" class="footer_list_link">New Car Rankings</a>
                    <a href="" class="footer_list_link">Car Deals This Month</a>
                    <a href="" class="footer_list_link">Compare Cars</a>
                    <a href="" class="footer_list_link">Calculate Car Payment</a>
                </div>
            </div>
            <div class="footer__list-item">
                <a href="" class="footer__col_header">Used cars</a>
                <div class="footer__list-col">
                    <a href="" class="footer_list_link">Used Cars for Sale</a>
                    <a href="" class="footer_list_link">Certified Pre-Owned Cars for Sale</a>
                    <a href="" class="footer_list_link">Used Car Rankings</a>
                    <a href="" class="footer_list_link">Used Car Deals This Month</a>
                    <a href="" class="footer_list_link">Compare Used Cars</a>
                    <a href="" class="footer_list_link">Calculate Used Car Payment</a>
                </div>
            </div>
            <div class="footer__list-item">
                <a href="#" class="footer__col_header">Car rankings</a>
                <div class="footer__list-col">
                    <a href="" class="footer_list_link">New Car Rankings</a>
                    <a href="" class="footer_list_link">Used Car Rankings</a>
                    <a href="" class="footer_list_link">Best Cars for the Money</a>
                    <a href="" class="footer_list_link">Best Cars for Families</a>
                    <a href="" class="footer_list_link">Best Vehicle Brands</a>
                    <a href="" class="footer_list_link">Calculate Used Car Payment</a>
                </div>
            </div>
            <div class="footer__list-item">
                <a href="" class="footer__col_header">Best car deals</a>
                <div class="footer__list-col">
                    <a href="" class="footer_list_link">New Car Deals</a>
                    <a href="" class="footer_list_link">Used Car Deals</a>
                    <a href="" class="footer_list_link">Lease Car Deals</a>
                </div>
                <a href="" class="footer__col_header">How we rank</a>
                <div class="footer__list-col">
                    <a href="" class="footer_list_link">New Car</a>
                    <a href="" class="footer_list_link">Used Car</a>
                </div>
            </div>
            <div class="footer__list-item">
                <a href="" class="footer__col_header">cars for sale </a>
                <div class="footer__list-col">
                    <a href="" class="footer_list_link">New Cars for Sale</a>
                    <a href="" class="footer_list_link">Used Cars for Sale</a>
                    <a href="" class="footer_list_link">Cartified Pre-Owned Cars for Sale</a>
                </div>
                <p>Stock photography by izmostock</p>
                <p>&copy; 1986-2020 Autodata, Inc. dba Chrome data</p>
            </div>
        </div>
        <div class="footer">
            <div class="footer-logo">
                <img src="../resources/img/usn-logo-large.png" alt="" class="footer__img">
            </div>
            <div class="footer__info">
                <div class="footer-1">
                    <a href="" class="footer__info-link">About U.S.News</a>
                    <a href="" class="footer__info-link">Contact</a>
                    <a href="" class="footer__info-link">Press</a>
                    <a href="" class="footer__info-link">Advertise</a>
                    <a href="" class="footer__info-link">Newsletters</a>
                    <a href="" class="footer__info-link">Jobs</a>
                    <a href="" class="footer__info-link">Site Map</a>
                    <a href="" class="footer__info-link">Store</a>
                </div>
                <div class="footer-2">
                    <p>Copyright 2020 &copy; U.S.News & World Report L.P.</p>
                    <div class="footer-2-list">
                        <a href="" class="footer__link-benifit">Term & COnditions/</a>
                        <a href="" class="footer__link-benifit">Privacy Policy/</a>
                        <a href="" class="footer__link-benifit">California Privacy Notice/</a>
                        <a href="" class="footer__link-benifit">California Do Not Sell My Personal Infomation
                            Request</a>
                    </div>
                </div>
            </div>
            <div class="footer__logo">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-twitter"></i>
            </div>
        </div>
    </footer>`
    }
})