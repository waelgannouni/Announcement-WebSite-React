import React , {useState,useEffect} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import {ArrowRightCircle} from 'react-bootstrap-icons';
const Advert = ({ads}) => {
    
    const params =useParams();
    const [id,setid]=useState();
    useEffect(()=>{
        setid(params.id);
    },[id]);
    console.log(params.id);
    return (
        <>
       {
        <div className="Advert mt-5">
            <img className="Advert-img" src={ads.img} alt="" />
            <div className="desc-block">
                <h6 className="Advert-title">{ads.title}</h6>
                <p className="Advert-description">{ads.Description}</p>
                <hr className="mb-0"/>
                <div className="d-flex flex-row justify-content-between"><p className="Advert-price">{ads.price}</p> <a href={`adverts/${ads.id}`}><ArrowRightCircle size={24} className="seesingleadvert"/></a>  </div>
            </div>
        </div>
    }
    </>
    )
};

export default Advert; 