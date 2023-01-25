import React from 'react'
import {data,data2} from './data';
import './timeline.css';
import img from '../../Assets/photos.jpeg'
const timeline = () => {
  return (
    <div className='timeline__conatiner container'>
        <div className="timeline__wed">
            <div className="timeline__start">
                <h1 className='Text'>WED<br/><span className='Text-high'>Jul</span></h1>
                <div className="timeline__stuct">
                    <div className="timeline__box active">
                            <h1 className='date'>30</h1>
                    </div>
                    <div className="timeline__line"></div>
                </div>
            </div>
            {
                data.map((item,index)=>{
                        return(
                            <div className='timeline__section'>
                                <p className='time'>{item.time}</p>
                                <div className="timeline__stuct">
                                    <div className="timeline__rounded" style={item.color}>
                                        <img className="timeline__image" src={item.image}/>
                                    </div>
                                    <div className="timeline__line"></div>
                                </div>
                                <div className="timeline__right">
                                <p className={item.id===1?"timeline__description active":"timeline__description"}>{item.desc}</p>
                                <div className="timeline__client">
                                    <div className="timeline__rounded__client" style={item.color}>
                                        <img className="timeline__image1" src={img}/>
                                    </div>
                                    <p>{item.client}</p>
                                </div>
                                </div>
                                
                            </div>
                        )
                })
            }
        </div>
     
        {/*Thusday*/}

        <div className="timeline__wed">
            <div className="timeline__start">
                <h1 className='Text'>Thu<br/><span className='Text-high'>Jul</span></h1>
                <div className="timeline__stuct">
                    <div className="timeline__box">
                            <h1 className='date'>29</h1>
                    </div>
                    <div className="timeline__line"></div>
                </div>
            </div>
            {
                data2.map((item,index)=>{
                        return(
                            <div className='timeline__section'>
                                <p className='time'>{item.time}</p>
                                <div className="timeline__stuct">
                                    <div className="timeline__rounded" style={item.color}>
                                        <img className="timeline__image" src={item.image}/>
                                    </div>
                                    <div className="timeline__line"></div>
                                </div>
                                <div className="timeline__right">
                                <p className="timeline__description">{item.desc}</p>
                                <div className="timeline__client">
                                    <div className="timeline__rounded__client" style={item.color}>
                                        <img className="timeline__image1" src={img}/>
                                    </div>
                                    <p>{item.client}</p>
                                </div>
                                </div>
                                
                            </div>
                        )
                })
            }
        </div>

    </div>
  )
}

export default timeline
