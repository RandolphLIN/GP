//the ground
				var texture = new THREE.Texture();
				var manager = new THREE.LoadingManager();

				var loader = new THREE.ImageLoader( manager );
				loader.load( 'model/background2.jpg', function ( image ) {

					texture.image = image;
					texture.needsUpdate = true;

				});
				var loader = new THREE.OBJLoader( manager );
				loader.load( 'model/test2.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});


//the bridge
				var texture1 = new THREE.Texture();
				var manager1 = new THREE.LoadingManager();

				var loader1 = new THREE.ImageLoader( manager1 );
				loader1.load( 'model/bridge1.jpg', function ( image ) {

					texture1.image = image;
					texture1.needsUpdate = true;

				});
				var loader1 = new THREE.OBJLoader( manager1 );
				loader1.load( 'model/bridge.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture1;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});


//the first plate
				var texture2 = new THREE.Texture();
				var manager2 = new THREE.LoadingManager();

				var loader2 = new THREE.ImageLoader( manager2 );
				loader2.load( 'model/firstplate2.jpg', function ( image ) {

					texture2.image = image;
					texture2.needsUpdate = true;

				});
				var loader2 = new THREE.OBJLoader( manager2 );
				loader2.load( 'model/test3.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture2;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});

//first stair
				var texture3 = new THREE.Texture();
				var manager3 = new THREE.LoadingManager();

				var loader3 = new THREE.ImageLoader( manager3 );
				loader3.load( 'model/stair12.jpg', function ( image ) {

					texture3.image = image;
					texture3.needsUpdate = true;

				});
				var loader3 = new THREE.OBJLoader( manager3 );
				loader3.load( 'model/test4.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture3;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});

//first slide
				var texture4 = new THREE.Texture();
				var manager4 = new THREE.LoadingManager();

				var loader4 = new THREE.ImageLoader( manager4 );
				loader4.load( 'model/slide12.jpg', function ( image ) {

					texture4.image = image;
					texture4.needsUpdate = true;

				});
				var loader4 = new THREE.OBJLoader( manager4 );
				loader4.load( 'model/test5.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture4;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});

//o5hpipe1
				var texture5 = new THREE.Texture();
				var manager5 = new THREE.LoadingManager();

				var loader5 = new THREE.ImageLoader( manager5 );
				loader5.load( 'model/hpipe12.jpg', function ( image ) {

					texture5.image = image;
					texture5.needsUpdate = true;

				});
				var loader5 = new THREE.OBJLoader( manager5 );
				loader5.load( 'model/test6.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture5;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//o6stair2
				var texture6 = new THREE.Texture();
				var manager6 = new THREE.LoadingManager();

				var loader6 = new THREE.ImageLoader( manager6 );
				loader6.load( 'model/stair21.jpg', function ( image ) {

					texture6.image = image;
					texture6.needsUpdate = true;

				});
				var loader6 = new THREE.OBJLoader( manager6 );
				loader6.load( 'model/test7.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture6;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//o7secondplate
				var texture7 = new THREE.Texture();
				var manager7 = new THREE.LoadingManager();

				var loader7 = new THREE.ImageLoader( manager7 );
				loader7.load( 'model/secondplate2.jpg', function ( image ) {

					texture7.image = image;
					texture7.needsUpdate = true;

				});
				var loader7 = new THREE.OBJLoader( manager7 );
				loader7.load( 'model/test8.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture7;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//08slide21 转换为polygon，然后attach
				var texture8 = new THREE.Texture();
				var manager8 = new THREE.LoadingManager();

				var loader8 = new THREE.ImageLoader( manager8 );
				loader8.load( 'model/slide2.jpg', function ( image ) {

					texture8.image = image;
					texture8.needsUpdate = true;

				});
				var loader8 = new THREE.OBJLoader( manager8 );
				loader8.load( 'model/test9.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture8;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});

//09 slide3  
				var texture9 = new THREE.Texture();
				var manager9 = new THREE.LoadingManager();

				var loader9 = new THREE.ImageLoader( manager9 );
				loader9.load( 'model/slide3.jpg', function ( image ) {

					texture9.image = image;
					texture9.needsUpdate = true;

				});
				var loader9 = new THREE.OBJLoader( manager9 );
				loader9.load( 'model/test10.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture9;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//10 slide4.jpg  
				var texture10 = new THREE.Texture();
				var manager10 = new THREE.LoadingManager();

				var loader10 = new THREE.ImageLoader( manager10 );
				loader10.load( 'model/slide4.jpg', function ( image ) {

					texture10.image = image;
					texture10.needsUpdate = true;

				});
				var loader10 = new THREE.OBJLoader( manager10 );
				loader10.load( 'model/test11.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture10;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//11 obstalces1
				var texture11 = new THREE.Texture();
				var manager11 = new THREE.LoadingManager();

				var loader11 = new THREE.ImageLoader( manager11 );
				loader11.load( 'model/obstacles1.jpg', function ( image ) {

					texture11.image = image;
					texture11.needsUpdate = true;

				});
				var loader11 = new THREE.OBJLoader( manager11 );
				loader11.load( 'model/test12.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture11;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//12 obstacles2
				var texture12 = new THREE.Texture();
				var manager12 = new THREE.LoadingManager();

				var loader12 = new THREE.ImageLoader( manager12 );
				loader12.load( 'model/obstacles2.jpg', function ( image ) {

					texture12.image = image;
					texture12.needsUpdate = true;

				});
				var loader12 = new THREE.OBJLoader( manager12 );
				loader12.load( 'model/test13.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture12;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//13 ground.jpg
				var texture13 = new THREE.Texture();
				var manager13 = new THREE.LoadingManager();

				var loader13 = new THREE.ImageLoader( manager13 );
				loader13.load( 'model/ground.jpg', function ( image ) {

					texture13.image = image;
					texture13.needsUpdate = true;

				});
				var loader13 = new THREE.OBJLoader( manager13 );
				loader13.load( 'model/test14.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture13;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//14 obstacles3.jpg
				var texture14 = new THREE.Texture();
				var manager14 = new THREE.LoadingManager();

				var loader14 = new THREE.ImageLoader( manager14 );
				loader14.load( 'model/obstacles3.jpg', function ( image ) {

					texture14.image = image;
					texture14.needsUpdate = true;

				});
				var loader14 = new THREE.OBJLoader( manager14 );
				loader14.load( 'model/test15.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture14;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
//15 obstacles4.jpg
				var texture15 = new THREE.Texture();
				var manager15 = new THREE.LoadingManager();

				var loader15 = new THREE.ImageLoader( manager15 );
				loader15.load( 'model/obstacles4.jpg', function ( image ) {

					texture15.image = image;
					texture15.needsUpdate = true;

				});
				var loader15 = new THREE.OBJLoader( manager15 );
				loader15.load( 'model/obstacles4.obj', function ( object ) {

					object.traverse( function ( child ) {

						if ( child instanceof THREE.Mesh ) {

							child.material.map = texture15;
						}
					} );
					object.position.x = 0;
					object.position.y = 0;
					object.position.z = 0;

					scene.add( object );
				});
// //16
// 				var texture16 = new THREE.Texture();
// 				var manager16 = new THREE.LoadingManager();

// 				var loader16 = new THREE.ImageLoader( manager16 );
// 				loader16.load( 'model/', function ( image ) {

// 					texture16.image = image;
// 					texture16.needsUpdate = true;

// 				});
// 				var loader16 = new THREE.OBJLoader( manager16 );
// 				loader16.load( 'model/test17.obj', function ( object ) {

// 					object.traverse( function ( child ) {

// 						if ( child instanceof THREE.Mesh ) {

// 							child.material.map = texture16;
// 						}
// 					} );
// 					object.position.x = 0;
// 					object.position.y = 0;
// 					object.position.z = 0;

// 					scene.add( object );
// 				});
// //17
// 				var texture17 = new THREE.Texture();
// 				var manager17 = new THREE.LoadingManager();

// 				var loader17 = new THREE.ImageLoader( manager17 );
// 				loader17.load( 'model/', function ( image ) {

// 					texture17.image = image;
// 					texture17.needsUpdate = true;

// 				});
// 				var loader17 = new THREE.OBJLoader( manager17 );
// 				loader17.load( 'model/test18.obj', function ( object ) {

// 					object.traverse( function ( child ) {

// 						if ( child instanceof THREE.Mesh ) {

// 							child.material.map = texture17;
// 						}
// 					} );
// 					object.position.x = 0;
// 					object.position.y = 0;
// 					object.position.z = 0;

// 					scene.add( object );
// 				});