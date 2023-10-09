import * as THREE from 'three' //导入整个 three.js核心库
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { BoxLineGeometry } from 'three/addons/geometries/BoxLineGeometry.js';
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';
import { PlaneVideoPlayer } from './PlaneVideoPlayer.js';

let camera, scene, raycaster, renderer;

let videoPlayerObject;

let controller1, controller2;
let controllerGrip1, controllerGrip2;

let room, marker, floor, baseReferenceSpace;

let INTERSECTION;
const tempMatrix = new THREE.Matrix4();

function init() {
  // 1>
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.xr.enabled = true;
  renderer.xr.addEventListener( 'sessionstart', () => baseReferenceSpace = renderer.xr.getReferenceSpace() );
  // renderer.xr.setReferenceSpaceType( 'local' );
  document.body.appendChild( renderer.domElement );
  document.body.appendChild( VRButton.createButton( renderer ) );

  // 2>
  camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 0.1, 100 );
  scene = new THREE.Scene();
  
  // 2.1> 图片球形贴图，box映射贴图见webxr_vr_panorama.html
  const geometry = new THREE.SphereGeometry( 50, 60, 10 );
  geometry.scale( - 1, 1, 1 ); // invert the geometry on the x-axis so that all of the faces point inward
  const texture = new THREE.TextureLoader().load( './files/snow_hdr.jpg' );
  texture.colorSpace = THREE.SRGBColorSpace;
  const material = new THREE.MeshBasicMaterial( { map: texture } );
  const mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );

  // 2.2> 视频
  videoPlayerObject = new PlaneVideoPlayer({
    source: "./files/coffee.mp4",
    play_btn_color: 0x6EABDD
  });
  videoPlayerObject.getMesh().position.z = -2;
  scene.add(videoPlayerObject.getMesh());

  // 2.3> 射线对象: hit test
  raycaster = new THREE.Raycaster();

  // 2.4> 加载左右手柄射线
  controller1 = renderer.xr.getController( 0 );
  scene.add( controller1 );
  controller2 = renderer.xr.getController( 1 );
  scene.add( controller2 );

  // 2.5> 加载左右手柄模型
  const controllerModelFactory = new XRControllerModelFactory();
  controllerGrip1 = renderer.xr.getControllerGrip( 0 );
  controllerGrip1.add( controllerModelFactory.createControllerModel( controllerGrip1 ) );
  scene.add( controllerGrip1 );
  controllerGrip2 = renderer.xr.getControllerGrip( 1 );
  controllerGrip2.add( controllerModelFactory.createControllerModel( controllerGrip2 ) );
  scene.add( controllerGrip2 );

  window.addEventListener( 'resize', onWindowResize );
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
  renderer.setAnimationLoop( render );
}

function render() {
  // INTERSECTION = undefined;
  // if ( controller1.userData.isSelecting === true ) {
  //   tempMatrix.identity().extractRotation( controller1.matrixWorld );
  //   raycaster.ray.origin.setFromMatrixPosition( controller1.matrixWorld );
  //   raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );
  //   const intersects = raycaster.intersectObjects( [ floor ] );
  //   if ( intersects.length > 0 ) {
  //     INTERSECTION = intersects[ 0 ].point;
  //   }
  // } else if ( controller2.userData.isSelecting === true ) {
  //   tempMatrix.identity().extractRotation( controller2.matrixWorld );
  //   raycaster.ray.origin.setFromMatrixPosition( controller2.matrixWorld );
  //   raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );
  //   const intersects = raycaster.intersectObjects( [ floor ] );
  //   if ( intersects.length > 0 ) {
  //     INTERSECTION = intersects[ 0 ].point;
  //   }
  // }
  // if ( INTERSECTION ) marker.position.copy( INTERSECTION );
  // marker.visible = INTERSECTION !== undefined;

  renderer.render( scene, camera );
}

class VRVideo {
  constructor(selector) {
      this.container = document.querySelector(selector);
      init();
      animate();
  }
}

export default VRVideo