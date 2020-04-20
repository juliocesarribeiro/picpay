import React from 'react';
import { Container, Option, Img, Label } from './styles';

import img1 from '../../images/01.png';
import img2 from '../../images/02.png';
import img3 from '../../images/03.png';
import img4 from '../../images/04.png';
import img5 from '../../images/05.png';
import img6 from '../../images/06.png';
import img7 from '../../images/07.png';

const items =[{
        key: String(Math.round()),
        img: img1,
        label: 'Recarga',
    },
    {
        key: String(Math.round()),
        img: img2,
        label: 'Uber',
    },
    {
        key: String(Math.round()),
        img: img3,
        label: 'Ônibus',
    },
    {
        key: String(Math.round()),
        img: img4,
        label: 'TV',
    },
    {
        key: String(Math.round()),
        img: img5,
        label: 'Doações',
    },
    {
        key: String(Math.round()),
        img: img6,
        label: 'Cod. Barras',
    },
    {
        key: String(Math.round()),
        img: img7,
        label: 'FAQ',
    },
];

export default function Suggestions() {
    return (
        <Container>
            {items.map((items) =>(
            <Option key={items.key}>
                <Img source={items.img}/>
                <Label>{items.label}</Label>
            </Option>
        ))}    
        </Container>
    );
}
