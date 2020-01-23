import React from "react";
import Tooltip from 'rc-tooltip';
const handle = (props) => {
    const { value, dragging, index, ...restProps } = props;
    return (
        <Tooltip
            prefixCls="rc-slider-tooltip"
            overlay={value}
            visible={dragging}
            placement="top"
            key={index}/>

    );
};
export default handle()









let newObj= {value: "string"}

function test (arg1){
    console.log(newObj[arg1]);
}

test('value')