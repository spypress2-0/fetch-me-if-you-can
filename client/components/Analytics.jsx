import React from "react";

const Analytics = props => {
    //HEADER
    // const headArr = []; //Initalize empty array to render
    // const headerKeysArr = Object.keys(props.info.header); // Keys of Header
    // const headerValuesArr = Object.values(props.info.header); // Values of Header
    // //loop through each key;
    // headerKeysArr.forEach((key, index) => {
    //     //push into initialize empty array a P TAG that seperates keys and values into a sentence w/ unique keys;
    //     headArr.push(
    //         <p key={`${key}` + index} className="header-data">
    //             {key} = {headerValuesArr[index]}
    //         </p>
    //     );
    // });

    // //BODY
    // // Need to parse through due to nested objects and arrays inside body object.
    // const flattenObject = object => {
    //     return Object.assign({}, ...function _flatten(objectBit, path = '') {
    //         return [].concat(
    //             ...Object.keys(objectBit).map(
    //                 key => typeof objectBit[key] === 'object' ? _flatten(objectBit[key], path + '+') :
    //                     ({ [`${path}+ ${key}`]: objectBit[key] })
    //             )
    //         )
    //     }(object));
    // };

    // const bodyArr = [];
    // const newObj = flattenObject(props.info.body);
    // const bodyKeysArr = Object.keys(newObj);
    // const bodyValuesArr = Object.values(newObj);

    // bodyKeysArr.forEach((key, index) => {
    //     bodyArr.push(<p key={`${key}` + index} className="body-data">{key} = {bodyValuesArr[index]}</p>);
    // })
    // //COOKIES
    // const cookieArr = [];
    // const cookieKeysArr = Object.keys(props.info.cookies);
    // const cookieValuesArr = Object.values(props.info.cookies);
    // cookieKeysArr.forEach((key, index) => {
    //     cookieArr.push(<p key={`${key}` + index} className="cookie-data">Name: {key} | Value: {cookieValuesArr[index]}</p>);
    // });

    /*
      Here we have a main message container;
      This container is divided into 4 parts (Method-Types, Headers, Body, Cookies);
    */
    return (
        // <div className="message-container">
        //     <div className="method-type">
        //         <pre>{props.info.type} Request</pre>
        //     </div>
        //     <div className="header-info">
        //         <pre>
        //             <h3>Header:</h3>
        //             {headArr}
        //         </pre>
        //     </div>
        //     <div className="body-info">
        //         <pre>
        //             <h3>Body:</h3>
        //             {bodyArr}
        //         </pre>
        //     </div>
        //     <div className="cookies-info">
        //         <pre>{cookieArr}</pre>
        //     </div>
        // </div>
        <div>HEY</div>
    )
};

export default Analytics;
