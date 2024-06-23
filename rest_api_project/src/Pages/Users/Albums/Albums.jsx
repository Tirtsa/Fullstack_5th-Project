import React, { useEffect, useState } from "react"
import AlbumsSingle from "./AlbumSingle"

export default function Albums() {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) ?? undefined)
    const [listAlbums, setListAlbums] = useState([])

    const getAlbums = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/albums?userId=' + currentUser.id);
            if (response.ok) {
              const jsonResponse = await response.json();
              setListAlbums(jsonResponse);
            }
            else throw new Error('Request failed');
          } catch (error) {
            console.log(error);
          }
    }

    useEffect(() => {
        getAlbums()
    }, [currentUser])

    
    return (
        <>
         {listAlbums &&
            listAlbums.map(album => {
                return <AlbumsSingle title={album.title} id={album.id}/>
            })
         }
        </>
    )
}