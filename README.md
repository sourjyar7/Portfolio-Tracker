# Portfolio-Tracker
A REST Api that allows the user to build and track his own financial portfolio (for single user only) | Login/Signup feature not added

Hosted at : (https://node-portfolio-api1.herokuapp.com/Portfolio_Tracker/)

Design of Api : Checkout the API_Design.md file in this repository  

#### Endpoints
  
  ####   1) URL : /Portfolio_Tracker/addTrade
  ####   2) Method: POST
  ####   3) URL Params: NA
  ####   4) Data Params: 
                         {
                          "ticker":String/Alphanumeric,
                          "type":String(Buy/Sell),
                          "qty":Integer,
                          "price":Number
                         }
  ####   5) Success Response : 
                               {
                                  "original": {
                                      "ticker": name of given ticker,
                                      "type": given order type,
                                      "qty": given quantity,
                                      "price": given price,
                                      "prevAvg": {
                                          "$numberDecimal": prev avg price
                                      },
                                      "prevQty": previous held quantity
                                  },
                                  "msg": success/failure,
                                  "error": true/false
                              }
  ####   6) Error Response : Internal Server Error ! with 500 status code in case of failed connection to database
  ####                           Sample validation error :
                              {
                                  "_original": {
                                      "ticke": "ONGC",
                                      "type": "Buy",
                                      "qty": "4",
                                      "price": "16"
                                  },
                                  "details": [
                                      {
                                          "message": "\"ticker\" is required",
                                          "path": [
                                              "ticker"
                                          ],
                                          "type": "any.required",
                                          "context": {
                                              "label": "ticker",
                                              "key": "ticker"
                                          }
                                      }
                                  ]
                              }
  
  ####   1) URL : /Portfolio_Tracker/removeTrade
  ####   2) Method: DELETE
  ####   3) URL Params: NA
  ####   4) Data Params: 
                          {
                            "symbol": String/Alphanumeric,
                            "tno": the trade number to be removed

                          }
  ####   5) Success Response : 
                               {
                                  "msg": success/failure,
                                  "removedTradeNo": sl no of the removed trade
                               }
  ####   6) Error Response : Internal Server Error ! with 500 status code in case of failed connection to database
  ####                         Sample validation error :
                             {  
                                "_original": {
                                    "symbol": "ONGC",
                                    "tn": "4"
                                },
                                "details": [
                                    {
                                        "message": "\"tno\" is required",
                                        "path": [
                                            "tno"
                                        ],
                                        "type": "any.required",
                                        "context": {
                                            "label": "tno",
                                            "key": "tno"
                                        }
                                    }
                                ]
                            }
  
  ####   1) URL : /Portfolio_Tracker/updateTrade
  ####   2) Method: POST
  ####   3) URL Params: NA
  ####   4) Data Params: 
                         {
                          "symbol": ticker from which to remove,
                          "tno": sl no. of the trade to be updated,
                          "type": new order type(Buy/Sell),
                          "qty": new quantity,
                          "price": new price of transaction
                        }
  ####   5) Success Response : 
  ####   6) Error Response :  Internal Server Error ! with 500 status code in case of failed connection to database
  ####                         Sample validation error :
                            {
                              "_original": {
                                  "symbol": "ONGC",
                                  "tn": "3",
                                  "type": "Buy",
                                  "qty": "4",
                                  "price": "7"
                              },
                              "details": [
                                  {
                                      "message": "\"tno\" is required",
                                      "path": [
                                          "tno"
                                      ],
                                      "type": "any.required",
                                      "context": {
                                          "label": "tno",
                                          "key": "tno"
                                      }
                                  }
                              ]
                          }
  
  ####   1) URL : /Portfolio_Tracker/fetchHoldings
  ####   2) Method: GET
  ####   3) URL Params: NA
  ####   4) Data Params: NA
  ####   5) Success Response : Sample success response
                                  [
                                    {
                                        "_id": "5f5be08671ee5d204cef6b7f",
                                        "ticker": "ONGC",
                                        "avgPrice": {
                                            "$numberDecimal": "11.833333333333334"
                                        },
                                        "qty": 24
                                    },
                                    {
                                        "_id": "5f5be09871ee5d204cef6b81",
                                        "ticker": "TCS",
                                        "avgPrice": {
                                            "$numberDecimal": "5.8"
                                        },
                                        "qty": 5
                                    },
                                    {
                                        "_id": "5f5be0aa71ee5d204cef6b83",
                                        "ticker": "WIPRO",
                                        "avgPrice": {
                                            "$numberDecimal": "7"
                                        },
                                        "qty": 8
                                    },
                                    {
                                        "_id": "5f5cee2cbceaf90004cfd971",
                                        "ticker": "ICICIBANK",
                                        "avgPrice": {
                                            "$numberDecimal": "3"
                                        },
                                        "qty": 4
                                    }
                                ]
  ####   6) Error Response : Internal Server Error ! with 500 status code in case of failed connection to database
  
  
  ####   1) URL : /Portfolio_Tracker/fetchPortfolio
  ####   2) Method: GET
  ####   3) URL Params: NA
  ####   4) Data Params: NA
  ####   5) Success Response : Sample success response
                                [
                                  {
                                      "_id": "5f5be08671ee5d204cef6b7f",
                                      "ticker": "ONGC",
                                      "avgPrice": {
                                          "$numberDecimal": "11.833333333333334"
                                      },
                                      "qty": 24,
                                      "trades": [
                                          {
                                              "prevAvg": {
                                                  "$numberDecimal": "0"
                                              },
                                              "prevQty": 0,
                                              "_id": "5f5be08671ee5d204cef6b80",
                                              "ticker": "ONGC",
                                              "type": "Buy",
                                              "qty": 20,
                                              "price": {
                                                  "$numberDecimal": "11"
                                              }
                                          },
                                          {
                                              "prevAvg": {
                                                  "$numberDecimal": "11"
                                              },
                                              "prevQty": 20,
                                              "_id": "5f5e8e80beb8b9258cb6b088",
                                              "ticker": "ONGC",
                                              "type": "Buy",
                                              "qty": 4,
                                              "price": {
                                                  "$numberDecimal": "16"
                                              }
                                          }
                                      ],
                                      "__v": 9
                                  },
                                  {
                                      "_id": "5f5be09871ee5d204cef6b81",
                                      "ticker": "TCS",
                                      "avgPrice": {
                                          "$numberDecimal": "5.8"
                                      },
                                      "qty": 5,
                                      "trades": [
                                          {
                                              "prevAvg": {
                                                  "$numberDecimal": "0"
                                              },
                                              "prevQty": 0,
                                              "_id": "5f5be09871ee5d204cef6b82",
                                              "ticker": "TCS",
                                              "type": "Buy",
                                              "qty": 3,
                                              "price": {
                                                  "$numberDecimal": "5"
                                              }
                                          },
                                          {
                                              "prevAvg": {
                                                  "$numberDecimal": "5"
                                              },
                                              "prevQty": 3,
                                              "_id": "5f5c11078af89d2520a6cde5",
                                              "ticker": "TCS",
                                              "type": "Buy",
                                              "qty": 2,
                                              "price": {
                                                  "$numberDecimal": "7"
                                              }
                                          }
                                      ],
                                      "__v": 3
                                  }
                                  
                              ]
  ####   6) Error Response : Internal Server Error ! with 500 status code in case of failed connection to database
  
  
  ####   1) URL : /Portfolio_Tracker/fetchReturns
  ####   2) Method: GET
  ####   3) URL Params: NA
  ####   4) Data Params: NA
  ####   5) Success Response : Sample success response
                               {
                                  "returns": 3719
                               }
  ####   6) Error Response : Internal Server Error ! with 500 status code in case of failed connection to database
  
