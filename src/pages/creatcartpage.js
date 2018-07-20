import React from 'react'
import CreatCart from '../features/creat-cart'

import data from '../data/ingadients'

export default function CreatCartpage (props) {
    return <div>
        <h2>Список інградіентів</h2>
        <CreatCart products={data.products} />
    </div>
}

