import React from "react";
import StageImage from "../../assets/stage.jpg";

const promoCard = props => {
    return (
        <div className="afg-promo-card d-block d-sm-flex align-items-center my-5">
            <div className="col-12 col-sm-4 px-0 pr-sm-5">
                <picture>
                    {(props.image ?
                        <img src={ props.image } alt="" className="w-100 mb-4 mb-sm-0" />
                        :
                        <img src={StageImage} alt="Almost Famous GTA band logo" className="w-100 mb-4 mb-sm-0" />
                    )}
                </picture>
            </div>
            <div className="afg-promo-card__text col-12 col-sm-8 pr-0 pl-0 pr-sm-8">
                <h3 class={"afg-h2"}>{ props.heading }</h3>
                <h4 className="afg-promo-card__sub-title">{ props.subHeading }</h4>
                <div className="afg-promo-card__description">
                    {( props.address ? <p>{ props.address }</p> : '' )}
                    {( props.phone ? <p>{ props.phone }</p> : '' )}
                    {( props.description ? <p>{ props.description }</p> : '' )}
                </div>
            </div>
        </div>
    )
}

export default promoCard