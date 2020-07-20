import React, { Component } from 'react';
import Scene from './component/Scene';
import {Camera} from './component/camera';
import {Box} from './component/Box';
import Renderer from './component/Renderer';

//                 scene: this.scene
//             }}>
//                 {this.props.children}
//             </SceneContext.Provider>
//         )
//     }
// }

// class Camera extends Component{
//     constructor(props){
//         super(props)
        
//     }

//     componentDidUpdate(){
//         this.camera.position.x = this.props.positionX;
//         this.camera.position.y = this.props.positionY;
//         this.camera.position.z = this.props.positionZ;
//     }
//     render(){
//         this.camera = new Three.PerspectiveCamera(this.props.fov, this.props.aspect, this.props.near, this.props.far);

//         return (
//             <CameraContext.Provider value={{
//                 camera: this.camera
//             }}>
//                 {this.props.children}
//             </CameraContext.Provider>
//         )
//     }
// }

// class Box extends Component{
//     constructor(props){
//         super(props)
//         this.mesh = {}
//     }

//     componentWillMount(){
//         const geom = new Three.BoxGeometry(this.props.width, this.props.height, this.props.depth);
//         const Material = new Three.MeshBasicMaterial(this.props.material);
//         this.mesh = new Three.Mesh(geom, Material);
//     }

//     render(){
//         const self = this;
//         // return <BoxContext.Provider value={{
//         //     mesh: this.mesh,
//         //     update: (x, y)=> {
//         //         self.mesh.rotation.x += x;
//         //         self.mesh.rotation.y += y;
//         //     }
//         // }}>
//         //     {this.props.children}
//         // </BoxContext.Provider>
//         return (
//             <div ref={(mount) => self.mount = mount}>

//             </div>
//         )
//     }
// }

// class Consumer extends Component{
//     constructor(props){
//         super(props)
//         this.start.bind(this);
//         this.stop.bind(this);
//     }
//     componentDidUpdate(){
//         const width = this.mount.clientWidth;
//         const height = this.mount.clientHeight;
//         this.three_renderer = new Three.WebGLRenderer();
//         this.three_renderer.setSize(width, height);
//         this.mount.appendChild(this.three_renderer.domElement);

//         this.renderScene();
//         this.start();
//     }

//     componentWillMount(){
//         this.stop();
//         // this.mount.removeChild(this.three_renderer.domElement);
//     }

//     renderScene(){
//         if(this.renderScene){
//             this.three_renderer.render(this.state.updateContext, this.state.camera)
//         }
//     }

//     start(){
//         if(!this.frameID){
//             this.frameID = requestAnimationFrame(this.animate);
//         }
//     }

//     stop(){
//         cancelAnimationFrame(this.frameID);
//     }
//     animate(){
//         this.renderScene();
//         this.frameID = requestAnimationFrame(this.animate)
//     }


//     updateScene(mesh, callback){
//         return callback(m
function App(){
    
    
        return (
            <div>
                <Box width={100} height={100}>
                        <Scene>
                            <Camera z={20} fov={75} aspect={window.innerWidth / window.innerHeight} far={10} near={2000}>
                                <Renderer width={window.innerWidth} height={window.innerHeight}>hello</Renderer>
                            </Camera>
                        </Scene>
                </Box>
            </div>
        )
    
}

export default App;