import * as THREE from 'three';
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js';
import { XRControllerModelFactory } from 'three/addons/webxr/XRControllerModelFactory.js';

class HandController {
  constructor(selector) {
    // this.self = this;
    this.container = document.querySelector(selector);
    this.camera;
    this.scene;
    this.this.renderer;
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
    this.INTERSECTION = undefined;
    this.init();
    this.animate();
  }

  init() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color( 0x505050 );

    this.camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 10 );
    this.camera.position.set( 0, 1, 3 );

    this.room = new THREE.LineSegments(
      new BoxLineGeometry( 6, 6, 6, 10, 10, 10 ).translate( 0, 3, 0 ),
      new THREE.LineBasicMaterial( { color: 0xbcbcbc } )
    );
    this.scene.add( this.room );

    this.scene.add( new THREE.HemisphereLight( 0xa5a5a5, 0x898989, 3 ) );

    const light = new THREE.DirectionalLight( 0xffffff, 3 );
    light.position.set( 1, 1, 1 ).normalize();
    this.scene.add( light );

    this.marker = new THREE.Mesh(
      new THREE.CircleGeometry( 0.25, 32 ).rotateX( - Math.PI / 2 ),
      new THREE.MeshBasicMaterial( { color: 0xbcbcbc } )
    );
    this.scene.add( this.marker );

    this.floor = new THREE.Mesh(
      new THREE.PlaneGeometry( 4.8, 4.8, 2, 2 ).rotateX( - Math.PI / 2 ),
      new THREE.MeshBasicMaterial( { color: 0xbcbcbc, transparent: true, opacity: 0.25 } )
    );
    this.scene.add( this.floor );

    this.floor = new THREE.Raycaster();

    this.renderer = new THREE.WebGLRenderer( { antialias: true } );
    this.renderer.setPixelRatio( window.devicePixelRatio );
    this.renderer.setSize( window.innerWidth, window.innerHeight );

    this.renderer.xr.addEventListener( 'sessionstart', () => baseReferenceSpace = this.renderer.xr.getReferenceSpace() );
    this.renderer.xr.enabled = true;

    document.body.appendChild( this.renderer.domElement );
    document.body.appendChild( VRButton.createButton( this.renderer ) );

    // controllers

    function onSelectStart() {
      this.userData.isSelecting = true;
    }

    function onSelectEnd() {
      this.userData.isSelecting = false;
      if ( INTERSECTION ) {
        const offsetPosition = { x: - INTERSECTION.x, y: - INTERSECTION.y, z: - INTERSECTION.z, w: 1 };
        const offsetRotation = new THREE.Quaternion();
        const transform = new XRRigidTransform( offsetPosition, offsetRotation );
        const teleportSpaceOffset = baseReferenceSpace.getOffsetReferenceSpace( transform );
        this.renderer.xr.setReferenceSpace( teleportSpaceOffset );
      }
    }

    function buildController( data ) {
      let geometry, material;
      switch ( data.targetRayMode ) {
        case 'tracked-pointer':
          geometry = new THREE.BufferGeometry();
          geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( [ 0, 0, 0, 0, 0, - 1 ], 3 ) );
          geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( [ 0.5, 0.5, 0.5, 0, 0, 0 ], 3 ) );
          material = new THREE.LineBasicMaterial( { vertexColors: true, blending: THREE.AdditiveBlending } );
          return new THREE.Line( geometry, material );
        case 'gaze':
          geometry = new THREE.RingGeometry( 0.02, 0.04, 32 ).translate( 0, 0, - 1 );
          material = new THREE.MeshBasicMaterial( { opacity: 0.5, transparent: true } );
          return new THREE.Mesh( geometry, material );
      }
    }

    controller1 = this.renderer.xr.getController( 0 );
    controller1.addEventListener( 'selectstart', onSelectStart );
    controller1.addEventListener( 'selectend', onSelectEnd );
    controller1.addEventListener( 'connected', function ( event ) {
      this.add( buildController( event.data ) );
    } );
    controller1.addEventListener( 'disconnected', function () {
      this.remove( this.children[ 0 ] );
    } );
    this.scene.add( controller1 );

    controller2 = this.renderer.xr.getController( 1 );
    controller2.addEventListener( 'selectstart', onSelectStart );
    controller2.addEventListener( 'selectend', onSelectEnd );
    controller2.addEventListener( 'connected', function ( event ) {
      this.add( buildController( event.data ) );
    } );
    controller2.addEventListener( 'disconnected', function () {
      this.remove( this.children[ 0 ] );
    } );
    this.scene.add( controller2 );

    // The XRControllerModelFactory will automatically fetch controller models
    // that match what the user is holding as closely as possible. The models
    // should be attached to the object returned from getControllerGrip in
    // order to match the orientation of the held device.

    const controllerModelFactory = new XRControllerModelFactory();

    controllerGrip1 = this.renderer.xr.getControllerGrip( 0 );
    controllerGrip1.add( controllerModelFactory.createControllerModel( controllerGrip1 ) );
    this.scene.add( controllerGrip1 );

    controllerGrip2 = this.renderer.xr.getControllerGrip( 1 );
    controllerGrip2.add( controllerModelFactory.createControllerModel( controllerGrip2 ) );
    this.scene.add( controllerGrip2 );

    // window.addEventListener( 'resize', onWindowResize, false );
  }

  onWindowResize() {
    this.this.camera.aspect = window.innerWidth / window.innerHeight;
    this.this.camera.updateProjectionMatrix();
    this.this.renderer.setSize( window.innerWidth, window.innerHeight );
  }

  animate() {
    this.renderer.setAnimationLoop( render );
  }

  render() {
    INTERSECTION = undefined;
    if ( controller1.userData.isSelecting === true ) {
      tempMatrix.identity().extractRotation( controller1.matrixWorld );
      this.floor.ray.origin.setFromMatrixPosition( controller1.matrixWorld );
      this.floor.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );
      const intersects = this.floor.intersectObjects( [ this.floor ] );
      if ( intersects.length > 0 ) {
        INTERSECTION = intersects[ 0 ].point;
      }
    } else if ( controller2.userData.isSelecting === true ) {
      tempMatrix.identity().extractRotation( controller2.matrixWorld );
      this.floor.ray.origin.setFromMatrixPosition( controller2.matrixWorld );
      this.floor.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );
      const intersects = this.floor.intersectObjects( [ this.floor ] );
      if ( intersects.length > 0 ) {
        INTERSECTION = intersects[ 0 ].point;
      }
    }
    if ( INTERSECTION ) marker.position.copy( INTERSECTION );
    marker.visible = INTERSECTION !== undefined;
    this.renderer.render( scene, camera );
  }

}

export default SphereProjection