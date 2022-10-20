import React from 'react'
import About from '../../components/About'
import Campainns from '../../components/Campainns'
import Carosel from '../../components/Carosel'
import MenuWrappaer from '../../components/product/MenuWrappaer'

const Index = () => {
    return (
        <div>
            <Carosel />
            <Campainns />
            <MenuWrappaer />
            <About />
        </div>
    )
}

export default Index
