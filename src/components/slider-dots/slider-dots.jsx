//import image
import sliderDots0 from "../../img/Slider_dots_0.svg"
import sliderDots1 from "../../img/Slider_dots_1.svg"
import sliderDots2 from "../../img/Slider_dots_2.svg"
import sliderDots3 from "../../img/Slider_dots_3.svg"
import sliderDots4 from "../../img/Slider_dots_4.svg"


//import self scss
import "./slider-dots.scss"

export const SliderDots = ({position}) => {
    return (
        <>
            { position === 0 && (
                <div className="slider-div">
                    <img 
                        src={sliderDots0} 
                        rel="slider dots"
                        className="slider-dots"
                    />
                    
                </div>
            )}
            
            { position === 1 && (
                <div className="slider-div">
                    <img 
                        src={sliderDots1} 
                        rel="slider dots"
                        className="slider-dots"
                    />
                    
                </div>
            )}

            
            { position === 2 && (
                <div className="slider-div">
                    <img 
                        src={sliderDots2} 
                        rel="slider dots"
                        className="slider-dots"
                    />
                </div>
            )}
            
            { position === 3 && (
                <div className="slider-div">
                    <img 
                        src={sliderDots3} 
                        rel="slider dots"
                        className="slider-dots"
                    />
                </div>
            )}

            
            { position === 4 && (
                <div className="slider-div">
                    <img 
                        src={sliderDots4} 
                        rel="slider dots"
                        className="slider-dots"
                    />
                </div>
            )}
        </>
    )
}