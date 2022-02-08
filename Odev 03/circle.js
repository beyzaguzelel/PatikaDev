const circleArea=(r)=>{
    let area=(Math.PI)*r*r;
    console.log(area);
}

const circleCircumference=(r)=>{
    let circumference=2*(Math.PI)*r;
    console.log(circumference);
}


module.exports= {
    circleArea,
    circleCircumference
}