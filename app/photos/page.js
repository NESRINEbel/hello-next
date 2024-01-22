import Image from 'next/image';
import React from 'react'
import styles from "./page.module.scss";
import Link from 'next/link';

async function getData(){
 const res = await fetch("https://picsum.photos/v2/list");
 return res.json();
}

const photos = async () => {
    const data = await getData();
    console.log(data);
    const listPhotos = data.slice(0,12).map(photo =>{
        return(
            <div className={styles.item} key={photo.id}>
                <Link  href={`/photos/${photo.id}`}>
                <Image src={photo.download_url} width={200} height={200}/>
                </Link>
                
            </div>
        )
    });
  return (
    <div>
        <h1>nos photos souvenirs</h1>
        <div className={styles.items}>
        {listPhotos}
        </div>
        

    </div>
  )
}

export default photos