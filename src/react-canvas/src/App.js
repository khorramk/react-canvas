import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as Three from 'three';
import { Geometry } from 'three';

const SceneContext = React.createContext();
const CameraContext = React.createContext();
const BoxContext = React.createContext();


// class Scene extends Component {
//     constructor(){
//         super();
//         this.scene = new Three.Scene();

        
//     }

//     add(mesh){
//         this.scene.add(mesh);
//     }

//     animate(){
        
//     }

//     render(){
//         return (
//             <SceneContext.Provider value={{

//                 addAnimateObject: (mesh)=> this.add(mesh),
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
//         return callback(mesh)
//     }

//     render(){
//         return (
//             <SceneContext.Consumer>
//                 {/* {(context)=> context.addAnimateObject()}
//                 <div ref={(mount)=> this.mount = mount}/> */}
//                 {scene => (
//                     <CameraContext.Consumer>
//                         {camera => (
//                             <BoxContext.Consumer>
//                         {box => {
                
//                             return (
//                                 <div ref={(mount)=> this.mount = mount}/>
//                             )
//                         }}
//                     </BoxContext.Consumer>
//                         )}
//                     </CameraContext.Consumer>
                    
//                 )}
//             </SceneContext.Consumer>
//         )
//     }
// }
class App extends Component {
    
    render(){
        return (
            <Renderer>
                <Scene>
                <Camera fov={75} aspect={window.innerWidth / window.innerHeight} near={0.1} far={1000} positionX={0} positionZ={8} positionY={5}/>
                    <Box width={5} height={5} depth={5} material={{
                        color: "#ofo"
                    }}>
                       
                    </Box>
                <Camera/>
            </Scene>
            </Renderer>
            
        )
    }
}

export default App;