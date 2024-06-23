import React, {useState } from "react"

export default function PhotoSingle(props) {
    const [id, setId] = useState(props.id);
    const [title, setTitle] = useState(props.title)
    const [thumbnailUrl, setThumbnailUrl] = useState(props.thumbnailUrl)

    return (
        <>
            <div className="container">
                <div class="overlay">
                    <div class="text">{title}</div>
                </div>
                <img className="image" src={thumbnailUrl} alt={title} />
            </div>
        </>
    )
}