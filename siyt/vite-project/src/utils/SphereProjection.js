import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { PlaneVideoPlayer } from './PlaneVideoPlayer.js';

class SphereProjection {
  constructor(selector) {
    // this.self = this;
    this.container = document.querySelector(selector);
    this.camera;
    this.scene;
    this.renderer;
    this.controls;
    this.isUserInteracting = false;
    this.onPointerDownMouseX = 0;
    this.onPointerDownMouseY = 0;
    this.lon = 0;
    this.lat = 0;
    this.phi = 0;
    this.theta = 0;
    this.onPointerDownLon = 0;
    this.onPointerDownLat = 0;
    this.init();
    this.animate();
  }

  init() {
    this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 1100 );

    this.scene = new THREE.Scene();

    const geometry = new THREE.SphereGeometry( 500, 60, 40 );
    // invert the geometry on the x-axis so that all of the faces point inward
    geometry.scale( - 1, 1, 1 );

    const texture = new THREE.TextureLoader().load( './files/snow_hdr.jpg' );
    // const texture = new THREE.TextureLoader().load( './files/2294472375_24a3b8ef46_o.jpg' );
    texture.colorSpace = THREE.SRGBColorSpace;
    const material = new THREE.MeshBasicMaterial( { map: texture } );

    const mesh = new THREE.Mesh( geometry, material );
    this.scene.add( mesh );

    // Create videoPlayerObject and add to THREE JS scene
    this.videoPlayerObject = new PlaneVideoPlayer({
      source: "./files/coffee.mp4",
      play_btn_color: 0x6EABDD
    });
    this.videoPlayerObject.getMesh().position.z = -2;
    this.scene.add(this.videoPlayerObject.getMesh());

    // Initialize play button object
    // const buttonGeometry = new THREE.PlaneGeometry( 2, 1 );
    // const buttonMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    // this._playButtonObject = new THREE.Mesh(buttonGeometry, buttonMaterial);
    // this._playButtonObject.position.z = -5;
    // this.scene.add(this._playButtonObject);

    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setPixelRatio( window.devicePixelRatio );
    // this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.setSize( 800, 800 );
    this.renderer.xr.enabled = true;
    this.renderer.xr.setReferenceSpaceType( 'local' );
    this.container.appendChild( this.renderer.domElement );
    this.container.appendChild( VRButton.createButton( this.renderer ) );

    this.container.style.touchAction = 'none';
    this.container.addEventListener( 'pointerdown', this.onPointerDown.bind(this) );

    document.addEventListener( 'wheel', this.onDocumentMouseWheel.bind(this) );
    document.addEventListener( 'dragover', function ( event ) {
      event.preventDefault();
      event.dataTransfer.dropEffect = 'copy';
    } );

    document.addEventListener( 'dragenter', function () {
      document.body.style.opacity = 0.5;
    } );

    document.addEventListener( 'dragleave', function () {
      document.body.style.opacity = 1;
    } );

    document.addEventListener( 'drop', function ( event ) {
      event.preventDefault();
      const reader = new FileReader();
      reader.addEventListener( 'load', function ( event ) {
        material.map.image.src = event.target.result;
        material.map.needsUpdate = true;
      } );
      reader.readAsDataURL( event.dataTransfer.files[ 0 ] );
      document.body.style.opacity = 1;
    } );

    // window.addEventListener( 'resize', this.onWindowResize.bind(this) );
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  onPointerDown( event ) {
    if ( event.isPrimary === false ) return;
    this.isUserInteracting = true;

    this.onPointerDownMouseX = event.clientX;
    this.onPointerDownMouseY = event.clientY;

    this.onPointerDownLon = this.lon;
    this.onPointerDownLat = this.lat;

    if (!this.listenMouse) {
      this.listenMouse = true;
      this.container.addEventListener( 'pointermove', this.onPointerMove.bind(this) );
      this.container.addEventListener( 'pointerup', this.onPointerUp.bind(this) );
    }

    event.preventDefault();

    // Store event position as THREE JS Vector2
    var mousePosition = new THREE.Vector2((event.clientX/window.innerWidth)*2-1,  -(event.clientY/window.innerHeight)*2+1);

    // Create & configure raycaster
    var raycaster = new THREE.Raycaster();
    raycaster.setFromCamera(mousePosition, this.camera);

    // Check if event position intersects videoPlayerObject and if videoPlayerObject can play
    var intersects = raycaster.intersectObject(this.videoPlayerObject.getPlayButtonMesh(), true);
    if(intersects.length > 0 && this.videoPlayerObject.canPlay()){
        // Play video if paused, pause if playing
        if(this.videoPlayerObject.isPaused()){
            this.videoPlayerObject.play();
        } else {
            this.videoPlayerObject.pause();
        }
    }
  }

  onPointerMove( event ) {
    if ( event.isPrimary === false ) return;

    if (!this.isUserInteracting) return;

    this.lon = ( this.onPointerDownMouseX - event.clientX ) * 0.1 + this.onPointerDownLon;
    this.lat = ( event.clientY - this.onPointerDownMouseY ) * 0.1 + this.onPointerDownLat;
  }

  onPointerUp( event ) {
    if ( event.isPrimary === false ) return;

    this.isUserInteracting = false;

    // TODO: removeEventListener失效了，还是会触发onPointerMove
    // this.container.removeEventListener( 'pointermove', this.onPointerMove.bind(this) );
    // this.container.removeEventListener( 'pointerup', this.onPointerUp.bind(this) );
  }

  onDocumentMouseWheel( event ) {
    const fov = this.camera.fov + event.deltaY * 0.05;
    this.camera.fov = THREE.MathUtils.clamp( fov, 10, 75 );
    this.camera.updateProjectionMatrix();
  }

  animate() {
    // requestAnimationFrame( this.animate.bind(this) ); // 进入webxr时，需要用setAnimationLoop
    this.renderer.setAnimationLoop( this.update.bind(this) );
    // this.update();
  }

  update() {
    // if ( this.isUserInteracting === false ) {
    //   this.lon += 0.1;
    // }

    this.lat = Math.max( - 85, Math.min( 85, this.lat ) );
    this.phi = THREE.MathUtils.degToRad( 90 - this.lat );
    this.theta = THREE.MathUtils.degToRad( this.lon );

    const x = 500 * Math.sin( this.phi ) * Math.cos( this.theta );
    const y = 500 * Math.cos( this.phi );
    const z = 500 * Math.sin( this.phi ) * Math.sin( this.theta );

    this.camera.lookAt( x, y, z );
    // this.camera.lookAt( this._playButtonObject.position.x, this._playButtonObject.position.y, this._playButtonObject.position.z );
    this.renderer.render( this.scene, this.camera );
  }
}

export default SphereProjection