window.onload = function () {
    lax.init();

    window.addEventListener('scroll', () => {

        console.log(window.scrollY);

    });

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function () {
        return window.scrollY
    })

  
    // primer bloque
    lax.addElements('.b1', {

        scrollY: {
            translateY: [
                [0, 100],
                [0, 50]
            ],
            opacity: [
                [0, 1200],
                [1, 0]
            ]
        }
    });

    
    lax.addElements('.l1', {

        scrollY: {
            translateY: [
                [0, 500],
                [0, -200]
            ],
            opacity: [
                [0, 555],
                [0, 1]
            ]
        }

    });

    lax.addElements('.cp1', {

        scrollY: {
            translateX: [
                [0, 500],
                [600, 0]
            ],
        }

    });

    // segundo bloque

    lax.addElements('.b2', {

        scrollY: {
            translateY: [
                [600, 2000],
                [0, -1000]
            ], 
            brightness:[
                [866, 1311],
                [1,0.4]
            ]
        }
    });

    lax.addElements('.l2', {
        scrollY: {
            translateX: [
                [800, 1100],
                [500, 0]
            ],
            opacity: [
                [1333, 1777],
                [1, 0]
            ]
        }
    });
    lax.addElements('.cp2', {

        scrollY: {
            translateX: [
                [800, 1100],
                [-1000, 0]
            ],
        }

    });

    
    // tercer bloque

    lax.addElements('.b3', {

        scrollY: {
            translateY: [
                [700, 1800],
                [0, -1000]
            ],
            brightness:[
                [1800, 1900],
                [1,0.4]
            ]
        }
    });

    lax.addElements('.l3', {
        scrollY: {
            scale: [
                [1460, 1800],
                [0, 1]
            ],
            opacity: [
                [1460, 1800],
                [0, 1]
            ]
        }
    });

    lax.addElements('.cp3', {

        scrollY: {
            translateX: [
                [1400, 1870],
                [700, -10]
            ],
        }

    });

    /* Bloque 3 */

    
 





    // bloque 4


    lax.addElements('.b4', {

        scrollY: {
            translateY: [
                [1500, 2800],
                [0, -1800]
            ],
            brightness:[
                [1600, 2800],
                [1, 0.4]
            ]
        }
    });

    lax.addElements('.l4', {

        scrollY: {
            translateY: [
                [2250, 2470],
                [1000, 0]
            ],
            opacity: [
                [2250, 2470],
                [0, 1]
            ],
            opacity: [
                [2600, 3000],
                [1, 0]
            ]

        }

    });

    lax.addElements('.cp4', {

        scrollY: {
            translateX: [
                [1480, 2470],
                [-1000, 0]
            ],
        }

    });

    // bloque 5

    lax.addElements('.b5', {

        scrollY: {
            translateY: [
                [2600, 3200],
                [-1800, -2300]
            ],
            brightness:[
                [2600, 3000],
                [1, 0.4]
            ]
           
        }
    });

    lax.addElements('.l5', {

        scrollY: {
            translateX: [
                [2620, 3000],
                [-800, 0]
            ],
            translateY: [
                [3000, 3700],
                [0, -800]
            ]

        }

    });

    lax.addElements('.cp5', {

        scrollY: {
            translateX: [
                [2620, 3000],
                [1000, 0]
            ],
            translateY: [
                [3000, 3700],
                [0, -800]
            ]
        }

    });


    // bloque 6

    lax.addElements('.b6', {

        scrollY: {
            translateY: [
                [2600, 3200],
                [-1000, -2500]
            ],
            brightness:[
                [2600, 3200],
                [1, 0.4]
            ]
           
        }
    });

    lax.addElements('.l6', {

        scrollY: {
            translateX: [
                [3020, 3600],
                [800, 0]
            ],
            opacity: [
                [3610, 4210],
                [1, 0]
            ],
            

        }

    });

    lax.addElements('.cp6', {

        scrollY: {
            translateX: [
                [3020, 3600],
                [-1000, 0]
            ]
           
        }

    });

     // bloque 7

     lax.addElements('.b7', {

        scrollY: {
            translateY: [
                [3690, 4390],
                [-2500, -2700]
            ],
            brightness:[
                [2600, 3200],
                [1, 0.4]
            ]
           
        }
    });

    lax.addElements('.l7', {

        scrollY: {
            opacity: [
                [3610, 4210],
                [0, 1]
            ],
            opacity: [
                [4260, 4560],
                [1, 0]
            ],
            translateY: [
                [3610, 4210],
                [1000, 0]
            ],
            

        }

    });

    lax.addElements('.cp7', {

        scrollY: {
            translateX: [
                [3610, 4200],
                [1000, 0]
            ],
            translateY: [
                [4300, 4560],
                [0, -200]
            ]
           
        }

    });


      // bloque 8

      lax.addElements('.b8', {

        scrollY: {
            translateY: [
                [4260, 4560],
                [-2600, -2950]
            ],
            brightness:[
                [4200, 4900],
                [1, 0.3]
            ]
           
        }
    });

    lax.addElements('.l8', {

        scrollY: {
            scale: [
                [4200, 4805],
                [0, 1]
            ],
            opacity:[
                [4200, 4850],
                [0,1]
            ],
            translateY: [
                [4900, 5350],
                [0, -500]
            ]
            

        }

    });

    lax.addElements('.cp8', {

        scrollY: {
            translateX: [
                [4200, 4805],
                [-1000, 0]
            ],
            translateY: [
                [4900, 5350],
                [0, -500]
            ]
           
           
        }

    });

        // bloque 9

        lax.addElements('.b9', {

            scrollY: {
                translateY: [
                    [4900, 5200],
                    [-3000, -3200]
                ],
                brightness:[
                    [4200, 4900],
                    [1, 0.3]
                ]
               
            }
        });
    
        lax.addElements('.l9', {
    
            scrollY: {
                translateX: [
                    [4850, 5300],
                    [-1000, -0]
                ],
                opacity:[
                    [4200, 4850],
                    [0,1]
                ],
                translateY: [
                    [5350, 6100],
                    [0, -200]
                ]
                
    
            }
    
        });
    
        lax.addElements('.cp9', {
    
            scrollY: {
                translateX: [
                    [4850, 5300],
                    [1000, 0]
                ],
                translateY: [
                    [5350, 6100],
                    [0, -200]
                ]
               
               
            }
    
        });

        
        // bloque 10

        lax.addElements('.b10', {

            scrollY: {
                translateY: [
                    [5340, 6100],
                    [-3200, -3500]
                ],
                brightness:[
                    [4200, 4900],
                    [1, 0.3]
                ]
               
            }
        });
    
        lax.addElements('.l10', {
    
            scrollY: {
                translateX: [
                    [5340, 5880],
                    [1000, -0]
                ],
                opacity:[
                    [4200, 4850],
                    [0,1]
                ],
                translateY: [
                    [5910, 6410],
                    [0, -200]
                ]
                
    
            }
    
        });
    
        lax.addElements('.cp10', {
    
            scrollY: {
                translateX: [
                    [5340, 5880],
                    [-1000, 0]
                ],
                translateY: [
                    [5910, 6410],
                    [0, -200]
                ]
               
               
            }
    
        });

         // bloque 11

         lax.addElements('.b11', {

            scrollY: {
                translateY: [
                    [5800, 6510],
                    [-3400, -3700]
                ],
                brightness:[
                    [4200, 4900],
                    [1, 0.3]
                ]
               
            }
        });
    
        lax.addElements('.l11', {
    
            scrollY: {
                translateX: [
                    [5910, 6400],
                    [-1000, 0]
                ],
                opacity:[
                    [5910, 6400],
                    [0,1]
                ],
                translateY: [
                    [6450, 7200],
                    [0, -200]
                ]
                
    
            }
    
        });
    
        lax.addElements('.cp11', {
    
            scrollY: {
                translateX: [
                    [5910, 6400],
                    [1000, 0]
                ],
                translateY: [
                    [6450, 7200],
                    [0, -200]
                ]
               
               
            }
    
        });

           // bloque 12

           lax.addElements('.b12', {

            scrollY: {
                translateY: [
                    [6400, 7200],
                    [-3700, -4000]
                ],
                brightness:[
                    [4200, 4900],
                    [1, 0.3]
                ]
               
            }
        });
    
        lax.addElements('.l12', {
    
            scrollY: {
                translateX: [
                    [6400, 7000],
                    [1000, 0]
                ],
                opacity:[
                    [5910, 6400],
                    [0,1]
                ]
                
    
            }
    
        });
    
        lax.addElements('.cp12', {
    
            scrollY: {
                translateX: [
                    [6400, 7000],
                    [-1000, 0]
                ]
               
               
            }
    
        });

         // bloque 12

         lax.addElements('.b13', {

            scrollY: {
                translateY: [
                    [6400, 7200],
                    [-3700, -4000]
                ],
                brightness:[
                    [4200, 4900],
                    [1, 0.3]
                ],
              
               
            }
        });
    
        lax.addElements('.l13', {
    
            scrollY: {
                translateX: [
                    [7024, 7681],
                    [-1000, 0]
                ],
                opacity:[
                    [7024, 7681],
                    [0,1]
                ]
                
    
            }
    
        });
    
        lax.addElements('.cp13', {
    
            scrollY: {
                translateX: [
                    [7024, 7681],
                    [1000, 0]
                ]
               
               
            }
    
        });

         // bloque 14

         lax.addElements('.b14', {

            scrollY: {
                translateY: [
                    [8400, 12324],
                    [0, 3800]
                ]                 
            }
        });

    lax.addElements('.selector', {

        scrollY: {
            scale: [
                [0, 300],
                [1, 3]
            ],
            opacity: [
                [0, 300],
                [1, 0]
            ],
        }

    });


  

   

    
    
}