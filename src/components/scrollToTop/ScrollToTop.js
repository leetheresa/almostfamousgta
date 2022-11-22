import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            {" "}
            {showTopBtn && (
                <button id="afg-scrollTop" className="afg-scrollTop" type="button" onClick={goToTop}>
                    <svg focusable="false" xmlns="http://www.w3.org/2000/svg" width="8.408" height="13.988" viewBox="0 0 8.408 13.988">
                        <path data-name="Path 1157" d="M419.654,212.032l-6.287,6.287-6.287-6.287" transform="translate(-211.325 420.361) rotate(-90)" fill="none" stroke="#111" strokeMiterlimit="10" strokeWidth="3"></path>
                    </svg>
                </button>
            )}{" "}
        </>

    );
};
export default ScrollToTop;