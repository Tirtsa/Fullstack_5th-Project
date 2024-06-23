import React, { useEffect, useState } from "react"
import PhotoSingle from "./PhotoSingle"
import { BsArrowLeftCircle, BsFillPlusCircleFill } from 'react-icons/bs';
import { useParams, Link } from "react-router-dom"

import "../../../Css/Albums.css";

export default function Photos() {

    const [listPhotos, setListPhotos] = useState([])
    const [count, setCount] = useState(9)
    const {idAlbums} = useParams()
    
    const [url, setUrl] = useState('../albums')

    const getPhotos = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + idAlbums + '/photos/?_limit=' + count);
            // const response = await fetch('https://jsonplaceholder.typicode.com/albums/' + idAlbums + '/photos/');
            if (response.ok) {
              const jsonResponse = await response.json();
              setListPhotos(jsonResponse);
            }
            else throw new Error('Request failed');
          } catch (error) {
            console.log(error);
          }
    }

    const handleClick = async () => {
        setCount(count + 9)
        await getPhotos()
    }

    useEffect(() => {
        getPhotos()
    }, [])

    
    return (
        <>
            <Link to={url}><BsArrowLeftCircle /></Link>
            <tr></tr>
            <Link onClick={() => {handleClick()}}><BsFillPlusCircleFill /></Link>
            <div className="divPhoto">
            {listPhotos &&
                listPhotos.map(photo => {
                    return <PhotoSingle title={photo.title} thumbnailUrl={photo.thumbnailUrl} id={photo.id}/>
                })
            }
            </div>
        </>
    )
}