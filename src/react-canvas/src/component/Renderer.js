import React, { useContext, useEffect } from 'react';
import * as THREE from 'three';
import {Cameracontext} from './camera';
import { BoxContext } from './Box';

const Renderer = (props)=> {
    const {z, fov, aspect, far, near} = useContext(Cameracontext);
    const perspectiveCamera = new THREE.PerspectiveCamera(fov, aspect, far, near);
    perspectiveCamera.position.z = z;
    const reactScene = new THREE.Scene();
    const {width, height, depth, material} = useContext(BoxContext);
    const geom = new THREE.BoxBufferGeometry(width, height, depth);
    const boxes = new THREE.Mesh(geom, material);
    reactScene.add(boxes)


    // const renderRef = useRef(new THREE.WebGLRenderer());
    const renderElement = React.createRef()
    // const {reactScene} = useContext(SceneContext);
    // const {perspectiveCamera} = useContext(Cameracontext);
    const renderThree = new THREE.WebGL1Renderer();
    
    renderThree.setSize(props.width, props.height);
    console.log('not', {})
    useEffect(() => {
    //update render on scene
        renderElement.appendChild(renderThree.domElement);
        
        console.log('cmaera', perspectiveCamera)
        animate()
    });

    const animate = () =>{
        requestAnimationFrame(animate)
        renderThree.render(reactScene, perspectiveCamera);
    }
    return (
        <div ref={renderElement}/>
    )
}

export default Renderer;