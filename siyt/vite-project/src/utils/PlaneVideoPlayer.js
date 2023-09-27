// Import JS libraries
import * as THREE from 'three';

// Import play button alpha image
// import PlayButtonAlpha from './play_button_alpha.jpg';

// Create private member refrence to object
// let this = undefined;

// Create & initialize _state member, _states constant
let _state = 0;
const _states = {
   UNINITIALIZED: 0,
   NOSOURCE: 1,
   LOADING: 2,
   READY: 3 
}

// Create private class members 
// let _videoDOMElement, _playButtonObject, _mesh, _geometry, _material = undefined;

// Define constructor method
class PlaneVideoPlayer {
    constructor(options = {}) {
        // const buttonGeometry = new THREE.PlaneGeometry( 2, 1 );
    // const buttonMaterial = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    // this._playButtonObject = new THREE.Mesh(buttonGeometry, buttonMaterial);
    // this._playButtonObject.position.z = -5;
    // this.scene.add(this._playButtonObject);


        // Initialize default geometry & material 
        this._geometry = new THREE.PlaneGeometry(2.0, 1.0);
        this._material = new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

        // Call parent constructor
        //    THREE.Mesh.apply(this, [_geometry, _material]);
        this._mesh = new THREE.Mesh( this._geometry, this._material );

        // Initialize play button object
        this._playButtonObject = new THREE.Mesh(new THREE.PlaneGeometry(0.5,0.25), new THREE.MeshBasicMaterial({
            color: 0xffffff,
            alphaMap: new THREE.TextureLoader().load('./files/play_button_alpha.jpg'),
            alphaTest: 0.3
        }));
        this._playButtonObject.position.z = 0.001;
        // Add _playButtonObject as child of object
        this._mesh.add(this._playButtonObject);

        // Initialize video DOM element & add to document
        this._videoDOMElement = document.createElement('video');
        this._videoDOMElement.setAttribute('style', 'display:none;');
        this._videoDOMElement.setAttribute('preload', 'auto');
        this._videoDOMElement.setAttribute('playsinline', 'playsinline');
        this._videoDOMElement.setAttribute('webkit-playsinline', 'webkit-playsinline');
        this._videoDOMElement.muted = false;//options.muted ? options.muted : false;
        this._videoDOMElement.autoplay = true;//options.autoplay ? options.autoplay : false;
        this._videoDOMElement.loop = true;//options.loop ? options.loop : false;
        if(options.volume){
            this._setVolume(options.volume);
        }

        this._videoDOMElement.onpause = function() {
            this._playButtonObject.visible = true;
        }.bind(this);
        this._videoDOMElement.onended = function() {
            this._playButtonObject.visible = true;
        }.bind(this);
     
        // Hide play button on video play
        this._videoDOMElement.onplay = function() {
            this._playButtonObject.visible = false;
        }.bind(this);

        document.body.appendChild(this._videoDOMElement);
        // Set state to _states.NOSOURCE
        this._setState(_states.NOSOURCE).then(function(){
                // Set source if one is provided
                if(options.source){
                    try {
                        this._setSource(options.source);
                    } catch (e) {
                        console.log(e)
                    }
                }
        }.bind(this));
    }

    getMesh() {
        // this._mesh.position.z = -5;
        return this._mesh;
    }

    getPlayButtonMesh() {
        return this._playButtonObject;
    }

    _setSource(source) {
        // Return if uninitialized
        if(this._state === _states.UNINITIALIZED){
            return;
        }

        // Check for valid method call
        if(typeof source !== "string"){
            throw "New source must be a string!";
        }

        // Remove any existing sources
        while(this._videoDOMElement.firstChild) {
            this._videoDOMElement.removeChild(this._videoDOMElement.firstChild);
        }

        // Create new source DOM element
        var nSourceDOMElement = document.createElement('source');
        nSourceDOMElement.src = source;
        nSourceDOMElement.type = 'video/mp4';
        this._videoDOMElement.appendChild(nSourceDOMElement); 

        // Set state to _states.READY when oncanplay is called
        this._videoDOMElement.oncanplay = function() {
            this._setState(_states.READY);//.then(function(){return;});
        }.bind(this);

        // Set state to _states.LOADING and load new source
        this._setState(_states.LOADING).then(function(){
            this._videoDOMElement.load(); 
        }.bind(this));
    }

    _clearSource() {
        if(this._state !== _states.UNINITIALIZED && this._state !== _states.NOSOURCE){
            this._setState(_states.NOSOURCE).then(function(){
                while(this._videoDOMElement.firstChild) {
                    this._videoDOMElement.removeChild(this._videoDOMElement.firstChild);
                }
            });
        }
    }

    _setVolume(volume) {
        if(this._videoDOMElement !== undefined){
            this._videoDOMElement.volume = volume > 1.0 ? 1.0 : volume < 0.0 ? 0.0 : volume;
        }
    }

    async _setState(nState) {
        // Return if object unititialized, or if new state provided is invalid, or if no state change
        if(nState === this._state) {
            return;
        }
    
        this._state = nState;
    
        switch(this._state){
            case _states.NOSOURCE:
                this._material.map = null;
                this._material.needsUpdate = true;
                this.visible = true;
                // _playButtonObject.visible = false;
                break;
            case _states.LOADING:
                break;
            case _states.READY:
               let _geometry = new THREE.PlaneGeometry(this._videoDOMElement.videoWidth/this._videoDOMElement.videoHeight, 1.0);
               this._geometry.dispose();
               this._geometry = _geometry;
               this._material.map = new THREE.VideoTexture(this._videoDOMElement);
               this._material.map.needsUpdate = true;
               this._material.needsUpdate = true; 
               this.visible = true;
               this._videoDOMElement.volume = 1.0;
            //    _playButtonObject.visible = true;
                break;
            default:
               return;
        }
        return;
    }

    canPlay() {
        return this._state === _states.READY; 
    }

    play() {
        if(this._state === _states.READY){
            this._videoDOMElement.play();
        }
    }
    pause() {
        if(this._state === _states.READY){
            this._videoDOMElement.pause();
        }
    }
    isPaused() {
        if(this._videoDOMElement !== undefined){
            return this._videoDOMElement.paused;
        }
    }
}

// Define object prototype
// PlaneVideoPlayer.prototype = Object.assign(Object.create(THREE.Mesh.prototype), {
//     constructor: PlaneVideoPlayer,
    // play: function() {
    //     if(this._state === _states.READY){
    //         this._videoDOMElement.play();
    //     }
    // },
    // pause: function() {
    //     if(this._state === _states.READY){
    //         this._videoDOMElement.pause();
    //     }
    // },
    // canPlay: function() {
    //    return this._state === _states.READY; 
    // },
    // isPaused: function() {
    //     if(this._videoDOMElement !== undefined){
    //         return this._videoDOMElement.paused;
    //     }
    // },
//     setSource: function(source) {
//         var status = true;
//         try{
//             this._setSource(source);
//         } catch(e){
//             console.log(e);
//             status = false;
//         } finally {
//             return;
//         }
//     },
//     clearSource: _clearSource,
//     setMuted: function(isMuted){
//         if(this._videoDOMElement !== undefined){
//             this._videoDOMElement.muted = new Boolean(isMuted)
//         }
//     },
//     isMuted: function() {
//         if(this._videoDOMElement !== undefined){
//             return this._videoDOMElement.muted;
//         }
//     },
//     setAutoplay: function(isAutoplay){
//        if(this._videoDOMElement !== undefined){
//            this._videoDOMElement.autoplay = new Boolean(isAutoplay);
//        } 
//     },
//     isAutoplay: function() {
//         if(_videoDOMElement !== undefined){
//             return _videoDOMElement.autoplay;
//         }
//     },
//     setLoop: function(isLoop){
//         if(this._videoDOMElement !== undefined){
//             this._videoDOMElement.loop = new Boolean(isLoop);
//         }
//     },
//     isLoop: function() {
//         if(this._videoDOMElement !== undefined){
//             return this._videoDOMElement.loop;
//         }
//     },
//     setVolume: _setVolume,
//     getVolume: function(){
//         if(this._videoDOMElement !== undefined){
//             return this._videoDOMElement.volume;
//         }
//     }
// });

// Export object
// export default PlaneVideoPlayer
export { PlaneVideoPlayer }