import React from 'react';

class Renderer extends React.Component{
    componentWillMount(){
        var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
    }
    render(){
        return (
            <div ref={(mount) => this.mount = mount}>

            </div>
        )
    }
}