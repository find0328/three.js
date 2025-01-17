import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

window.onload = function(){
  let scene,camera,renderer,myBall;
  initThreeScene();
  //物体的事件交互
  window.addEventListener('mousedown', mouseDownFuc);
  window.addEventListener('mousemove', mouseMoveFuc);

  function mouseDownFuc (e) {
      let raycaster = new THREE.Raycaster();//光线投射，用于确定鼠标点击位置
      let mouse = new THREE.Vector2();//创建二维平面
      let intersects = getSelsectOBj(mouse,raycaster, e);
      if (intersects.length > 0) {
          console.log(intersects[0])
          if (intersects[0].object.name == 'myBall') {
              myBall.position.y = 50;
         }
      }
  }

  function mouseMoveFuc (e) {
      let raycaster = new THREE.Raycaster();//光线投射，用于确定鼠标点击位置
      let mouse = new THREE.Vector2();//创建二维平面
      let intersects = getSelsectOBj(mouse,raycaster, e);
      if (intersects.length > 0) {
         if (intersects[0].object.name == 'myBall') {
             myBall.material =  new THREE.MeshPhongMaterial( { color: 'orange'});
             document.getElementsByTagName('body')[0].style.cursor = 'pointer';
         }
      } else {
         myBall.material =  new THREE.MeshPhongMaterial( { color: 0xff0000});
         document.getElementsByTagName('body')[0].style.cursor = 'default';
      }
  }
  //获取事件操作对象
  function getSelsectOBj(mouse,raycaster, e) {
      //将html坐标系转化为webgl坐标系，并确定鼠标点击位置
      mouse.x =  e.clientX / renderer.domElement.clientWidth*2-1;
      mouse.y =  -(e.clientY / renderer.domElement.clientHeight*2)+1;
      //以camera为z坐标，确定所点击物体的3D空间位置
      raycaster.setFromCamera(mouse,camera);
      //确定所点击位置上的物体数量
      let intersects = raycaster.intersectObjects(scene.children, true);
      return intersects;
  }
  function initThreeScene() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 2000 );
      camera.position.set( 0, 50,300 );   
      renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});//antialias: true;让渲染的平面是光滑的，alpha: true;让渲染的3d背景透明。
      renderer.setSize( window.innerWidth, window.innerHeight);
      document.body.appendChild(renderer.domElement);
      // 给场景添加一个环境光
      let ambientLight = new THREE.AmbientLight(0xf5f5f5);
      scene.add( ambientLight );
      //辅助线
      let grid = new THREE.GridHelper(400, 30, 0xcccccc, 0xcccccc);
      scene.add( grid );
      //创建的球
      let ball = new THREE.SphereGeometry(25, 100, 100 );//25:球半径 第一个100：水平分割面的数量. 第二个100：垂直分割面的数量.
      let ballColor = new THREE.MeshPhongMaterial( { color: 0xff0000 });
      myBall = new THREE.Mesh(ball , ballColor);
      myBall.name = 'myBall';
      scene.add( myBall );
      let controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = true;//允许缩放
      //设置相机移动距离
      controls.minDistance = 1;
      controls.maxDistance = 2000;
      controls.enableRotate =true;
      function render() { 
          requestAnimationFrame(render);
          renderer.render(scene, camera);
      } 
      render();

      window.onresize = function () {
          camera.aspect = window.innerWidth / window.innerHeight;//相机重置可视范围
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);//渲染器重新渲染可视范围
      }
  }
}