import React, { useState, useRef } from 'react';
import THREE from 'three';

const camera = (props) => {
    const cameraRef = useRef(new THREE.PerspectiveCamera(props.fov, props.aspectRatio, props.far, props.close));
    cameraRef.current.position.z = 20;
    return null;
}