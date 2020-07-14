const { Camera } = require("three");

import React from 'react';

const camera = (props) => <Camera.Provider value={}>
    {props.children}
</Camera.Provider>