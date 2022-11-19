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
                <h2>{ props.heading }</h2>
                <h3 className="afg-promo-card__sub-title afg-h3">{ props.subHeading }</h3>
                <div className="afg-promo-card__description">
                    {( props.address ? <p>{ props.address }</p> : '' )}
                    {( props.phone ? <p>{ props.phone }</p> : '' )}
                    {( props.description ? <p>{ props.description }</p> : '' )}
                    {( props.link1 ? <a href={props.link1} target="_blank" className="d-block">{ props.link1Title ? props.link1Title : 'Click here' }</a> : '' )}
                    {( props.link2 ? <a href={props.link2} target="_blank" className="d-block">{ props.link2Title ? props.link2Title : 'Click here' }</a> : '' )}
                </div>
            </div>
        </div>
    )
}

export default promoCard