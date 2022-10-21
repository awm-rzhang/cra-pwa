import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function StandardImageList() {
    return (
        <div className='image-list-container '>
            <ImageList sx={{ width: '100%', flex: "1 1 auto;" }} cols={4}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img
                            src={`${item.img}?w=14&h=164&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>

    );
}

const itemData = [
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/1.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/2.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/3.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/4.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/5.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/6.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/7.jpg',
        title: 'Breakfast',
    },
    {
        img: 'http://a85559825163517fae22-546d77c3d53430a6d7624d9db486b836.r30.cf5.rackcdn.com/Misc/pwa-cup/8.jpg',
        title: 'Breakfast',
    },
];
