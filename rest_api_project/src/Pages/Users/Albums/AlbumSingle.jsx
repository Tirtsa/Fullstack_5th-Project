import React, {useState } from "react"
import "../../../Css/Albums.css";
import { TbPhoto } from 'react-icons/tb';
import { Link } from "react-router-dom"

export default function AlbumSingle(props) {
    const [title, setTitle] = useState(props.title)
    const [id, setId] = useState(props.id)
    const [url, setUrl] = useState(id + '/photos')

    return (
        <>
            <div className="divAlbum">
                <h2>{title}<Link className="divAlbumLink" to={url}><TbPhoto /></Link></h2> 
            </div>
        </>
    )
}