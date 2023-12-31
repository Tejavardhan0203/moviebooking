"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import './selectseat.css'


const page = () => {
    const pathname = usePathname()
const movie = {
    moviename: 'Jawan',
    //screen: '4Dx',
    date: new Date(),
    language: 'Hindi',
    type: 'Action/Thriller',
    screens:[
      {
        name: 'Screen1',
        location: 'PVR cinemas,Forum Mall'
      },
      {
        name: 'Screen1',
        location: 'PVR cinemas,Forum Mall'
      },
      {
        name: 'Screen1',
        location: 'PVR cinemas,Forum Mall'
      }
    ]
    }
const screen = {
    
        name : 'Screen 1',
        location : 'PVR cinemas,Forum Mall',
        timeslots: [
            {
                time: '11:00 AM',
                seats :[
                    {
                        //platinum
                        type: 'Platinum',
                        price:'500',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'F',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Gold',
                        price:'400',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'C',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Silver',
                        price:'200',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'A',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                time: '02:00 PM',
                seats :[
                    {
                        //platinum
                        type: 'Platinum',
                        price:'500',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'F',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Gold',
                        price:'400',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'C',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Silver',
                        price:'200',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'A',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                time: '06:00 PM',
                seats :[
                    {
                        //platinum
                        type: 'Platinum',
                        price:'500',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'F',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Gold',
                        price:'400',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'C',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Silver',
                        price:'200',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'A',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                        ]
                    }
                ]
            },
            {
                time: '09:00 PM',
                seats :[
                    {
                        //platinum
                        type: 'Platinum',
                        price:'500',
                        rows: [
                            {
                                rowname: 'H',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'G',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'F',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Gold',
                        price:'400',
                        rows: [
                            {
                                rowname: 'E',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'D',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'C',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        //platinum
                        type: 'Silver',
                        price:'200',
                        rows: [
                            {
                                rowname: 'B',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                            {
                                rowname: 'A',
                                cols: [
                                    {
                                        //col1
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    },
                                    {
                                        //col2
                                        seats: [
                                            {
                                                type: 'seat',
                                                status : 'not-available',
                                                seat_id: '1'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '2'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '3'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '4'
                                            },
                                            {
                                                type: 'seat',
                                                status : 'available',
                                                seat_id: '5'
                                            }
                                        ]                                
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }
const generateSeatLayout = () => {
    const x=screen.timeslots.findIndex((t:any)=>t.time===selectedTime.time)
    return screen.timeslots[x].seats.map((seatType,index)=>(
        <div className="seat-type" key={index}>
            <h2>{seatType.type}-Rs.{seatType.price}</h2>
            <div className="seat-rows">
                {
                    seatType.rows.map((row,rowIndex)=>(
                        <div className="seat-row" key={rowIndex}>
                            <p className="rowname">{row.rowname}</p>
                            <div className="seat-cols">
                                {
                                    row.cols.map((col, colIndex) =>(
                                        <div className='seat-col' key={colIndex}>
                                            {
                                                col.seats.map((seat, seatIndex) => (
                                                    <div key={seatIndex}>
                                                        {
                                                            seat.status=='available' &&
                                                            <span className=
                                                            {
                                                                selectedSeats.find((s: any) => (
                                                                    s.row === row.rowname &&
                                                                    s.seat_id === seat.seat_id &&
                                                                    s.col === colIndex
                                                                )) ? "seat-selected" : "seat-available"
                                                            }
                                                            onClick={()=> selectdeselectseat({
                                                                row:row.rowname,
                                                                col:colIndex,
                                                                seat_id:seat.seat_id,
                                                                price:seatType.price
                                                            })}
                                                            >
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                        {
                                                            seat.status=='not-available' &&
                                                            <span className='seat-not-available'
                                                            
                                                            >
                                                                {seatIndex+1}
                                                            </span>
                                                        }
                                                    </div>
                                                
                                                ))
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    ))
}
const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

const [selectedSeats,setSelectedSeats] = React.useState<any[]>([
    {
        "row" : "D",
        "col" : 1,
        "seat_id" : "5",
        "price" : 300
    }
])
const selectdeselectseat= (seat:any) => {
    const isselected=selectedSeats.findIndex((s:any)=>{
        return s.row === seat.row && s.col === seat.col && s.seat_id ===seat.seat_id
    })
    if(isselected){
        setSelectedSeats(selectedSeats.filter((s:any)=>s.seat_id !==seat.seat_id))
    }
    else{
        setSelectedSeats([...selectedSeats,seat])
    }
}

return (
    <div className='selectseatpage'>
        <div className="s1">
            <div className="head">
                <h1>{movie.moviename}-{movie.language}</h1>
                <h3>{movie.type}</h3>
            </div>
        </div>
        <div className="selectseat">
            <div className="timecont">
                {screen.timeslots.map((time:any,index:number) =>(
                    <h3
                    className={selectedTime.time===time.time ? 'time selected' : 'time'}
                    onClick={()=>{
                        setSelectedTime(time)
                    }}
                    key='index'
                    >
                        {time.time}
                        
                    </h3>
                ))}
            </div>
            <div className="indicators">
                <div>
                    <span className="seat-not-available"></span>
                    <p>Not available</p>
                </div>
                <div>
                    <span className="seat-available"></span>
                    <p>Available</p>
                </div>
                <div>
                    <span className="seat-selected"></span>
                    <p>Selected</p>
                </div>
            </div>
            
            {generateSeatLayout()}

            <div className="totalcont">

            </div>
      </div>
    </div>
)
}

export default page