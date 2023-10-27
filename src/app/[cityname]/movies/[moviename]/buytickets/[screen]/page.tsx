"use client"
import { usePathname } from 'next/navigation'
import React from 'react'

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
                time: '02:00 PM',
                seats :[
                    {
                    //platinum
                    type: 'Platinum',
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
                time: '09:00 PM',
                seats :[
                    {
                    //platinum
                    type: 'Platinum',
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
     return <></> 
}
const [selectedTime, setSelectedTime] = React.useState<any>(screen.timeslots[0])

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
                    <span className="seat-unavailable"></span>
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