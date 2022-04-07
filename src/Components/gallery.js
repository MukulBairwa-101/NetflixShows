import React,{useState} from 'react'
import data from "../assets/data";

const Gallery = () => {

    const [shows,setShows]=useState(data);

    const filterShows=(genreItem)=>{
        console.log(genreItem);
        let filteredData = [];
        if(genreItem !== 'All'){
             filteredData = data.filter((show)=>{
                return show.genre === genreItem
            }); 
            setShows(filteredData);
        }
        else setShows(data);
        
        
        
    }


    return (
        <div className="gallery_container">
            <div className="tabs_container ">
                <button onClick={()=>filterShows('All')}    className="tab pointer">All</button>
                <button onClick={()=>filterShows('Action')} className="tab pointer" >Action</button>
                <button onClick={()=>filterShows('Animation')} className="tab pointer">Animation</button>
                <button onClick={()=>filterShows('Crime')} className="tab pointer">Crime</button>
                <button onClick={()=>filterShows('Horror')} className="tab pointer" >Horror</button>
                <button onClick={()=>filterShows('Sci-Fi')} className="tab pointer">Sci-Fi</button>
                

                
            </div>
            <div>
            <div className="shows_container">
            {shows.map((item)=>{
                const {id,cover,name,link,ratings,genre}= item;

                return(
                    <div className="shows_wrapper">
                        <div className="show_image-wrapper ">
                            <img src={cover} alt={name} className="card_image pointer" />
                        </div>
                        <div className="show_text_wrapper">
                            <h3>{name}</h3>
                            <span>{genre}</span>
                            <p>{ratings}
                            <span className="fa fa-star checked star"></span>
                            <span className="fa fa-star checked star"></span>
                            <span className="fa fa-star checked star"></span>
                            <span className="fa fa-star checked star"></span>
                            <span className="fa fa-star star"></span>
                            </p>
                            <a href={link} className="btn btn-watch pointer">Watch Now</a>
                            
                        </div>
                    </div>
                )
            })}
        </div>

            </div>    
            
        </div>
    )
}

export default Gallery;
